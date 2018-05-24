
jQuery(document).ready(function() {
	//$("body").css("background-image","url(assets/img/backgrounds/2.jpg)");
	var pageWidth = parseInt($(document).width());
	var pageHeight =parseInt($(document).height());
	$("img").css({"width":pageWidth,"height":pageHeight});//初始化
	$("#canvas").css({"background":"url(../img/demo-1-bg.jpg)","width":pageWidth,"height":pageHeight});//初始化
	var i = 1;
	var imgId = "BgImg1";
	var count = 1;
	var bgimg = setInterval(function(){
		i++;
//		if(i > 1){
//			$("#canvas").css({"background":"url(../img/demo-"+(i-1)+"-bg.jpg)","width":pageWidth,"height":pageHeight}).fadeOut("1000");
//			$("#canvas").css({"background":"url(../img/demo-"+i+"-bg.jpg)","width":pageWidth,"height":pageHeight}).fadeIn("1000");
//		}else {
		//$("#canvas").css({"background":"url(../img/demo-"+$("img").length+"-bg.jpg)","width":pageWidth,"height":pageHeight}).fadeOut("slow");
//			$("#canvas").css({"background":"url(../img/demo-"+i+"-bg.jpg)","width":pageWidth,"height":pageHeight}).fadeIn("slow");
//		}
		stackBlurImage( 'BgImg'+i, 'canvas', 0);
		imgId = "BgImg"+i;
		count = i;
		if(i >= $("img").length) {
			i = 0;
		}
	},8000);
	var aa;
	var bb;
	function againImg(flag,i){
		console.log("传入"+i);
		if(i >= $("img").length) {
			i = 0;
		}
		if(flag){
			aa = setInterval(function (){
				i++;
				console.log("true"+i);
				stackBlurImage( 'BgImg'+i, 'canvas', 30);
				imgId = "BgImg"+i;
				count = i;
				if(i >= $("img").length) {
					i = 0;
				}
			},8000)
		}else{
			bb = setInterval(function (){
				i++;
				console.log("flase"+i);  
				stackBlurImage( 'BgImg'+i, 'canvas', 0);
				imgId = "BgImg"+i;
				count = i;
				if(i >= $("img").length) {
					i = 0;
				}
			},8000)
		}
	}

	
	//启动登录
	function bulr(imgId){
//		var i = 1;
//		var jianbian = setInterval(function(){
//			i++;
			clearInterval(bgimg);
			stackBlurImage( imgId, 'canvas', 30);
//			if(i >=30) {
//				clearInterval(jianbian);
//			}
//		},500);
	}
	//撤回登录
	function bulrout(imgId){
		stackBlurImage( imgId, 'canvas', 0 );
	}
	
	$("#disout").click(function(){
		var pageWidth = parseInt($(document).width());
  		var pageHeight =parseInt($(document).height());
		$("#words").css({"position":"relative","right":"-1px"});
		$("#login").css({"position":"relative","right":"-1px"});
		$("#words").animate({bottom:230},"slow");
		$("#login").animate({bottom:230},"fast");
    	$("#login").animate({left:pageWidth-375},"slow");//366.5
		$("#distrue").fadeOut("slow");
		$("#disin").fadeIn("slow");
		bulr(imgId);
		clearInterval(aa);
		clearInterval(bb);
		againImg(true,count);
	});
	$("#disin").click(function(){
		var pageWidth = parseInt($(document).width());
		var pageHeight =parseInt($(document).height());
		$("#words").css({"position":"relative","right":"-1px"});
		$("#login").css({"position":"relative","right":"-1px"});
		$("#login").animate({left:-pageWidth-345},"5000");//366.5
		$("#login").animate({bottom:230},"slow");
		$("#words").animate({bottom:-30},"slow");
		$("#distrue").fadeIn("slow");
		$("#disin").fadeIn("slow");
		bulrout(imgId);
		clearInterval(aa);
		clearInterval(bb);
		againImg(false,count);
	});
    //$.backstretch(["../img/demo-1-bg.jpg"], {duration: 3000, fade: 750});
    
	/*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
