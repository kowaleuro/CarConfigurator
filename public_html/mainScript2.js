$(document).ready(function(){
	
	$("#loginPage").hide();
	$("#registerPage").hide();
	$("#SF1text").hide();
	$("#whole").hide();
	
	
	$( "#register" ).on("click",function() {
		$("#register").hide(1000);
		$("#login").hide(1000);
		$("#main2").hide(1000);
		$("#registerPage").show(1000);
	});
	$( "#login" ).on("click",function() {
		$("#register").hide(1000);
		$("#login").hide(1000);
		$("#main2").hide(1000);
		$("#loginPage").show(1000);
	});
	$( "#back1" ).on("click",function() {
		$("#register").show(1000);
		$("#login").show(1000);
		$("#main2").show(1000);
		$("#loginPage").hide(1000);
	});
	$( "#back2" ).on("click",function() {
		$("#register").show(1000);
		$("#login").show(1000);
		$("#main2").show(1000);
		$("#registerPage").hide(1000);
	});
	
	var myNav = document.getElementById('mynav');
	window.onload = function() {
			myNav.classList.add("nav-colored");
			myNav.classList.remove("nav-transparent");
	};
	window.onscroll = function () { 
		"use strict";
		if ($("#models").is(":hidden")){
		if (document.body.scrollTop >= 200 ) {
			if ($("#main2").is(":visible")){
				myNav.classList.add("nav-colored");
				myNav.classList.remove("nav-transparent");
			}
		} 
		else {
			myNav.classList.add("nav-transparent");
			myNav.classList.remove("nav-colored");
		}
		}
	};
	
	
	$(window).scroll(function() {
        if(isElementVisible($('#onMain2'))) {
			$(window).off('scroll');
                     //Call From here
			$("#SF1text").show(1000);
			
		}
		
	});
	
	$("#ModelsNav").on('click',function(){
		$("#whole, #models").toggle(3000,"linear");
		//$("#whole").hide(2000);
		//$("#models").show();
	
		setTimeout(function(){
				var myNav = document.getElementById('mynav');
				myNav.classList.add("nav-colored");
				myNav.classList.remove("nav-transparent");
			
		}, 2200);
		
		
		
	});
	
	
	var superfast = document.getElementById('812superfast');
	var f8 = document.getElementById('F8tributo');
	var roma = document.getElementById('Roma');
	var sf90= document.getElementById('SF90');
	
	superfast.onmouseover = function(){superfastonmouse();};
	f8.onmouseover = function(){f8onmouse();};
	sf90.onmouseover=function(){sf90onmouse();};
	roma.onmouseover=function(){romaonmouse();};
	
	function superfastonmouse(){
		var x = document.createElement("video");
		x.src="812superfast.mp4";
		x.autoplay=true;
		x.muted=true;
		x.loop=true;
		$("#contentModels").empty();
		$("#contentModels").append(x);
		superfast.onmouseover=null;
		f8.onmouseover=function(){f8onmouse();};
		sf90.onmouseover=function(){sf90onmouse();};
		roma.onmouseover=function(){romaonmouse();};
	};
	
	function f8onmouse(){
		superfast.onmouseover=function(){superfastonmouse();};
		f8.onmouseover=null;
		sf90.onmouseover=function(){sf90onmouse();};
		roma.onmouseover=function(){romaonmouse();};
		var x = document.createElement("video");
		x.src="f8.mp4";
		x.autoplay=true;
		x.muted=true;
		x.loop=true;
		$("#contentModels").empty();
		$("#contentModels").append(x);
		
		
	};
	
	function romaonmouse(){
		superfast.onmouseover=function(){superfastonmouse();};
		f8.onmouseover=function(){f8onmouse();};
		roma.onmouseover=null;
		sf90.onmouseover=function(){sf90onmouse();};
		var x = document.createElement("video");
		x.src="roma.mp4";
		x.autoplay=true;
		x.muted=true;
		x.loop=true;
		$("#contentModels").empty();
		$("#contentModels").append(x);
		
		
	};
	
	function sf90onmouse(){
		superfast.onmouseover=function(){superfastonmouse();};
		f8.onmouseover=function(){f8onmouse();};
		roma.onmouseover=function(){romaonmouse();};
		sf90.onmouseover=null;
		var x = document.createElement("video");
		x.src="sf90.mp4";
		x.autoplay=true;
		x.muted=true;
		x.loop=true;
		$("#contentModels").empty();
		$("#contentModels").append(x);
		
		
	};

	function isElementVisible(elem){
		var visibleTop = $(window).scrollTop();
		var visibleBottom = visibleTop + $(window).height();
		return ((elem.offset().top + elem.height()) <= visibleBottom);
	}
});