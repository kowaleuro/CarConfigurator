$(document).ready(function(){
	var check = 0;
	
	
	$("#row-sf7").hide();
	$("#sf7main").hide();
	$("#row-sf90").hide();
	$("#sf90main").hide();
	$("#audioV12div").hide(); //OguJACrWo70
	$("#row-sf18").hide();
	$("#sf18main").hide();
	$("#row-sf17").hide();
	$("#sf17main").hide();
	$("#sf17main2").hide();
	$("#sf2main").hide();
	$("#row-sf2").hide();
	$("#row-sf15").hide();
	$("#sf15main").hide();
	$("#sf14main").hide();
	$("#row-sf14").hide();
	$("#row-sf20").hide();
	$("#sf20main").hide();
	$("#row-sf12").hide();
	$("#sf12main").hide();
	$("#fasf12").hide();
	$("#tabsf12").hide();
	
	var zdjecia = ['sf20','sf14','sf90','sf12','sf15','sf17','sf18','sf7','sf2'];
	
	
	$("#V12play").on("click",function(){
		var audio = document.getElementById("audioV12");
		audio.play();
	});
	$( "#sf20" ).on("click",function() {
		x = "sf20";
		
		if (check == 0 ){
			for (i of zdjecia){
				if(x!=i){
					$("#"+i).hide(1000);
				}
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf20").show(1000);
				$("#sf20main").show(1000);
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf20").hide(1000);
			$("#sf20main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}	
		
	});
	$( "#sf2" ).on("click",function() {
		x = "#sf2";
		document.getElementById('row2').style.marginBottom = '3%';
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf2").show(1000);
				$("#sf2main").show(1000);
				
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf2").hide(1000);
			$("#sf2main").hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}
	});
	$( "#sf14" ).on("click",function() {
		x = "sf14";
		
		if (check == 0 ){
			for (i of zdjecia){
				if(x != i){
					
					$("#"+i).hide(1000);
				}
			}
			document.getElementById('row2').style.marginBottom = '3%';
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf14").show(1000);
				$("#sf14main").show(1000);
				
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf14").hide(1000);
			$("#sf14main").hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}
	});
	$( "#sf90" ).on("click",function() {
		x = "#sf90";
		document.getElementById('row2').style.marginBottom = '3%';
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf90").show(1000);
				$("#sf90main").show(1000);
				$("#audioV12div").show(1000);
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf90").hide(1000);
			$("#sf90main").hide(1000);
			$("#audioV12div").hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}	
	});
	$( "#sf12" ).on("click",function() {
		x = "sf12";
		
		if (check == 0 ){
			for (i of zdjecia){
				if(x!=i){
					$("#"+i).hide(1000);
				}
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf12").show(1000);
				$("#sf12main").show(1000);
				$("#fasf12").show(1000);
				$("#tabsf12").show(1000);
				
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf12").hide(1000);
			$("#sf12main").hide(1000);
			$("#fasf12").hide(1000);
			$("#tabsf12").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}
		
	});
	$( "#sf15" ).on("click",function() {
		x = "#sf15";
		
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf15").show(1000);
				$("#sf15main").show(1000);
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf15").hide(1000);
			$("#sf15main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}
	});
	$( "#sf17" ).on("click",function() {
		x = "#sf17";
		
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf17").show(1000);
				$("#sf17main").show(1000);
				$("#sf17main2").show(1000);
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf17").hide(1000);
			$("#sf17main").hide(1000);
			$("#sf17main2").hide(1000);
			player.stopVideo();
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}	
	});
	$( "#sf18" ).on("click",function() {
		x = "#sf18";
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf18").show(1000);
				$("#sf18main").show(1000);
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf18").hide(1000);
			$("#sf18main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}	
	});
	$( "#sf7" ).on("click",function() {
		x = "#sf7";
		if (check == 0 ){
			for (i of zdjecia){
				$("#"+i).hide(1000);
			}
		
		
			$(x).show(1000);
			setTimeout(function(){
				$("#row-sf7").show(1000);
				$("#sf7main").show(1000);
		
			},1000);
			check = 1;
		}
		else{
			$(x).hide(1000);
			
			$("#row-sf7").hide(1000);
			$("#sf7main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
			
			
		}	
	});
	$("#row-sf7").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf7").hide(1000);
			$("#sf7main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf7main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf7").hide(1000);
			$("#sf7main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf90").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			$("#row-sf90").hide(1000);
			$("#sf90main").hide(1000);
			$("#audioV12div").hide(1000);
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf90main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			
			$("#row-sf90").hide(1000);
			$("#sf90main").hide(1000);
			$("#audioV12div").hide(1000);
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf18").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			$("#row-sf18").hide(1000);
			$("#sf18main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf18main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			
			$("#row-sf18").hide(1000);
			$("#sf18main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf17").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf17").hide(1000);
			$("#sf17main").hide(1000);
			$("#sf17main2").hide(1000);
			player.stopVideo();
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf17main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			
			$("#row-sf17").hide(1000);
			$("#sf17main").hide(1000);
			$("#sf17main2").hide(1000);
			player.stopVideo();
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#sf17main2novid").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			
			$("#row-sf17").hide(1000);
			$("#sf17main").hide(1000);
			$("#sf17main2").hide(1000);
			player.stopVideo();
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf2").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			$("#row-sf2").hide(1000);
			$("#sf2main").hide(1000);
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf2main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			
			$("#row-sf2").hide(1000);
			$("#sf2main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf15").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf15").hide(1000);
			$("#sf15main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf15main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf15").hide(1000);
			$("#sf15main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf20").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf20").hide(1000);
			$("#sf20main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf20main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf20").hide(1000);
			$("#sf20main").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	$("#row-sf12").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf12").hide(1000);
			$("#sf12main").hide(1000);
			$("#fasf12").hide(1000);
			$("#tabsf12").hide(1000);
			
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf12main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf12").hide(1000);
			$("#sf12main").hide(1000);
			$("#fasf12").hide(1000);
			$("#tabsf12").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});	
	$("#row-sf14").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf14").hide(1000);
			$("#sf14main").hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});
	
	$("#sf14main").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf14").hide(1000);
			$("#sf14main").hide(1000);
			document.getElementById('row2').style.marginBottom = 0;
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});	
	$("#fasf12").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf12").hide(1000);
			$("#sf12main").hide(1000);
			$("#fasf12").hide(1000);
			$("#tabsf12").hide(1000);
			
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});	
	$("#tabsf12").on("click",function(){
		if (check == 1){
			$(x).hide(1000);
			
			$("#row-sf12").hide(1000);
			$("#sf12main").hide(1000);
			$("#fasf12").hide(1000);
			$("#tabsf12").hide(1000);
		
			setTimeout(function(){
				for (i of zdjecia){
					$("#"+i).show(1000);
				}
				check = 0;
			},1000);
		}
		
	});	
	
		var myNav = document.getElementById('mynav');
	window.onscroll = function () { 
		"use strict";
		if ($("#models").is(":hidden")){
		if (document.body.scrollTop >= 200 ) {
			
				if ($("#sf18main").is(":visible")){
				myNav.classList.add("nav-colored");
				myNav.classList.remove("nav-transparent");
				}
			
				
				
		} 
		else {
				
				myNav.classList.remove("nav-colored");
				myNav.classList.add("nav-transparent");
		}
		}
	};
});