// <!-- header -->
$(".menuli").hover(function(){
	var secnav = $(this).find(".sec-nav");
	secnav.show();
	secnav.animate({opacity:"1"},'fast');
},function(){
	var secnav = $(this).find(".sec-nav");
	secnav.animate({opacity:"0"},'fast');
	secnav.hide();
});


// 轮播图
// Rotation chart

// window.onload = function(){
// 	let s1 = new Slider({
// 		$box:$("#main"),
// 		width : 1583,
// 		height : 577,
// 		imgs:["img/20170223043705176.png","img/20170405111323963.png"],
// 		btnColor:"red",
// 		btnHighColor:'black',
// 		btnSize:10,
// 		timeSpace:3000,
// 	});
// }

/*mainbrand*/

var thisheight = $('#mainbrand .mainbrandtitle .row').css('font-size');

$('#mainbrand .mainbrandtitle .row img').css("height",thisheight);

$(window).resize(function() {
	var thisheight = $('#mainbrand .mainbrandtitle .row').css('font-size');
	$('#mainbrand .mainbrandtitle .row img').css("height",thisheight);
});

$(".brandli").hover(function(){
	$(this).find(".brandtext").css("display","block");
},function(){
	$(this).find(".brandtext").css("display","none");
});





// brandcon

if($(window).width()>991){
	$(".brandli").each(function(){
		var martop = ($(this).height() - $(this).find(".brandtextb").height())/2;
		$(this).find(".brandtextb").css("margin-top",martop+"px");
	});
}else{}
$('.brandimgb img').load(function(){
	if($(window).width()>991){
		$(".brandli").each(function(){
			var martop = ($(this).height() - $(this).find(".brandtextb").height())/2;
			$(this).find(".brandtextb").css("margin-top",martop+"px");
		});
	}else{}
});