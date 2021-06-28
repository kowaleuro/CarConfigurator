
<?php
    require __DIR__ . '/vendor/autoload.php';
    include("config.inc.php");

    use Twig\Environment;
    use Twig\Loader\FilesystemLoader;


    $loader = new FilesystemLoader(__DIR__ . '/templates');
    $twig = new Environment($loader);

    session_start();

    if (isset($config) && is_array($config)) {
        try {
            $dbh = new PDO('mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'] . ';charset=utf8mb4', $config['db_user'], $config['db_password']);
            $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            print "Nie mozna polaczyc sie z baza danych: " . $e->getMessage();
            exit();
        }

    } else {
        exit("Nie znaleziono konfiguracji bazy danych.");
    }




    //Funkcja odpowiadająca za rejestrację konta użytkownika
    $register = new \Twig\TwigFunction('register', function () use ($dbh) {
        $email = $_POST['email'];
        $hasło = $_POST['password'];
        $passwordRepeat = $_POST['passwordRepeat'];
        if ((preg_match('/^[a-zA-Z0-9\-\_\.]+\@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z]{2,5}$/D', $email) == 1) && $passwordRepeat == $hasło) {
            $hasło = password_hash($hasło, PASSWORD_DEFAULT);
            try {
                $stmt = $dbh->prepare('
                                INSERT INTO Users (
                                    ID, Email, Password
                                ) VALUES (
                                    null, :email, :password
                                )
                            ');
                $stmt->execute([':email' => $email, ':password' => $hasło]);
                echo '<script>alert("Konto zostało założone")</script>';
            }catch (PDOException $e) {
                echo '<script>alert("Rejestracja nie powiodła się")</script>';
					}
        } else {
            echo '<script>alert("Wprowadzono nieprawidłowe dane")</script>';
        }
    });

    //Funkcja odpowiadająca za logowanie użytkownika
    $login = new \Twig\TwigFunction('login', function () use ($dbh) {
        $login = htmlentities($_POST['login'], ENT_QUOTES, "UTF-8");
        $stmt = $dbh->prepare("SELECT * FROM Users WHERE Email = :email");
        $stmt->execute([':email' => $login]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user) {
            // uzytkownik odnaleziony, w tablicy $user znajdują się wszystkie kolumny z tabeli
            if (password_verify($_POST['passwordToLogin'], $user['Password'])) {
                $_SESSION['id'] = $user['ID'];
                $_SESSION['email'] = $user['Email'];
                echo '<script>alert("logowanie powiodło się")</script>';
                echo "<meta http-equiv='refresh' content='0'>";
            }else{
                echo '<script>alert("Dane logowania są nieprawidłowe")</script>';
            }
        }else{
            echo '<script>alert("Podany adres email jest nieprawdłowy.")</script>';
        }
    });

    //Funkcja odpowiadająca za wylogowywanie użytkownika
    $logout = new \Twig\TwigFunction('logout', function () {
        session_unset();
        header('Location: https://s117.labagh.pl/');
    });

    //Funkcja odpowiadająca za konfigurację
    $configuration = new \Twig\TwigFunction('config', function () use ($dbh) {
        $id = $_SESSION["id"];
        $carColor = $_POST["customRadioInline3"];
        $carSeat = $_POST["customRadioInline1"];
        $carClamps = $_POST["customRadioInline2"];
        $inserts = $_POST["customRadioInline4"];
        $model = $_GET['page'];
            try {
                $stmt = $dbh->prepare('
                                    INSERT INTO Configs (
                                        id, user_id, model, kolorSamochodu, kolorFoteli, kolorZaciskow, Wstawki
                                    ) VALUES (
                                        null, :id, :model, :carColor, :carSeat, :carClamps, :inserts
                                    )
                                ');
                $stmt->execute([':id' => $id, ':model' => $model, ':carColor' => $carColor, ':carSeat' => $carSeat, ':carClamps' => $carClamps, ':inserts' => $inserts]);
                echo '<script>alert("Konfiguracja została zapisana")</script>';
            }catch (PDOException $e) {
                echo '<script>alert("Konfiguracja nie powiodła się")</script>';
            }
    });

$verification = new \Twig\TwigFunction('verification', function () use ($dbh) {

    if (isset($_GET['show'])) {
        try {
            $stmt = $dbh->prepare("SELECT * FROM Configs WHERE id = :id");
            $stmt->execute([':id' => $_GET['show']]);
            $configToShow = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($configToShow && $configToShow['user_id'] == $_SESSION['id']) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            return false;
        }
    }else{
        return false;
    }
    });


$see = new \Twig\TwigFunction('see', function () use ($dbh) {


    try {
        $stmt = $dbh->prepare("SELECT * FROM Configs WHERE id = :id");
        $stmt->execute([':id' => $_GET['show']]);
        $configToShow = $stmt->fetch(PDO::FETCH_ASSOC);
        if($configToShow && $configToShow['user_id'] == $_SESSION['id']){
            return $configToShow;
        }
    }catch (PDOException $e){
        echo '<script>alert("Wczytywanie się nie powiodło")</script>';
    }

});

$list = new \Twig\TwigFunction('list', function () use ($dbh) {
    try {
        $stmt = $dbh->prepare("SELECT id, user_id, model FROM Configs");
        $stmt->execute();
        $myJson = "";
        $pomoc = 0;
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $id = intval($row['user_id']);
            if($id == $_SESSION['id']){
                if($pomoc != 0){
                    $myJson .=",";
                }else{
                    $myJson .= "'[";
                    $pomoc = 1;
                }
                $zmienna = json_encode($row);
                $myJson.= $zmienna;
            }
        }
        substr_replace($myJson,"",-1);
        $myJson .= "]'";
        return $myJson;
    }catch (PDOException $e) {
        echo '<script>alert("Wczytywanie się nie powiodło")</script>';
    }

});

    $image = new \Twig\TwigFunction('image', function ($model,$color) {
        $path = "images/";
        $path .= $model;
        $path .= '/';

        $zmienna = "";
        $flag = false;
        $chars = str_split($model);
        foreach ($chars as $char){
            if(ord($char) >=48 && ord($char) <=57){
                if($flag == false) {
                    $flag = true;
                }

            }else{
                if($flag == true) {
                    break;
                }
            }
            $zmienna .= $char;
        }
        if($color == 'Giallo Modena'){
            $path .= $zmienna;
            $path .= 'yellow.JPG';

        }elseif($color == 'Rosso Corsa'){
            $path .= $zmienna;
            $path .= 'red.JPG';

        }elseif (strpos($color, 'Rosso') !== false){
            $path .= $zmienna;
            $path .= 'interior1.JPG';

        }elseif (strpos($color, 'Beige') !== false){
            $path .= $zmienna;
            $path .= 'interior2.JPG';

        }elseif ($color == 'Cuoio'){
            $path .= $zmienna;
            $path .= 'interior2.JPG';

        }elseif ($color == 'Nero'){
            $path .= $zmienna;
            $path .= 'interior1.JPG';

        }elseif (strpos($color, 'Bruciata') !== false){
            $path .= $zmienna;
            $path .= 'interior2.JPG';

        }elseif ((strpos($color, 'Czerwone') !== false)) {
            $path .= $zmienna;
            $path .= 'brakepads2.JPG';

        }elseif ((strpos($color, 'Żółte') !== false)){
            $path .= $zmienna;
            $path .= 'brakepads1.JPG';

        }elseif ($color == 'Karbonowe'){
            $path .= '812carbon.JPG';

        }elseif ($color == 'Metalowe') {
            $path .= '812metal.JPG';

        }
            return $path;


    });



    //Dodawanie funkcji do template'a
    $twig->addFunction($login);
    $twig->addFunction($register);
    $twig->addFunction($logout);
    $twig->addFunction($configuration);
    $twig->addFunction($verification);
    $twig->addFunction($see);
    $twig->addFunction($list);
    $twig->addFunction($image);

    $pages = ["812sf", "F8Tributo", "Roma", "SF90","modele", "profile", "config"];
    $flag = false;
    $unprotectedpages =["main", "ferrari", "historia", "lokalizacja"];


        foreach ($pages as $page){
            if($page == $_GET['page'] ){
                if(isset($_SESSION['id']) == true){
                    echo $twig->render($page. '.twig', ['post' => $_POST, 'session' =>$_SESSION,'get' => $_GET, 'protectedPages' => $pages, 'flag' => $flag]);
                }else{
                    echo $twig->render('main.twig', ['post' => $_POST, 'session' =>$_SESSION,'get' => $_GET, 'protectedPages' => $pages, 'flag' => $flag]);
                }
                $flag = true;
            }
        }
        if ($flag == false){
            foreach ($unprotectedpages as $page){
                if($page == $_GET['page'] ) {
                    echo $twig->render($page . '.twig', ['post' => $_POST, 'session' => $_SESSION, 'get' => $_GET, 'protectedPages' => $pages, 'flag' => $flag]);
                    $flag = true;
                }
            }
        }

        if ($flag == false){
            echo $twig->render('main.twig', ['post' => $_POST, 'session' =>$_SESSION,'get' => $_GET, 'protectedPages' => $pages, 'flag' => $flag]);
        }

?>
