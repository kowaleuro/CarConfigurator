$(document).ready(function(){
	$("#open1").hide();
	$("#open2").hide();
	$("#open3").hide();
	
	$("#open1").show(2000);
	$("#open2").show(3500);
	$("#open3").show(5000);
	
	
	
	
	var onScrollHandler = function() {
		var newImageUrl = document.getElementById("photo1");
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		if (scrollTop > 200) {
			newImageUrl = "1252.JPG"
		}
		if (scrollTop > 300) {
			newImageUrl = "1253.JPG"
		}
		yourImageElement.src = newImageUrl;
	};
	object.addEventListener ("scroll", onScrollHandler);
	
});