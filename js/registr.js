
// $(".menuli").hover(function(){
// 	var secnav = $(this).find(".sec-nav");
// 	secnav.show();
// 	secnav.animate({opacity:"1"},'fast');
// },function(){
// 	var secnav = $(this).find(".sec-nav");
// 	secnav.animate({opacity:"0"},'fast');
// 	secnav.hide();
// });




function $(id){
	return document.getElementById(id);
}

var count = 0;
$("btnLogin").onclick=function(event){
	var ev = event || window.event;
	if (count<3) {
		alert("小宝贝，您输入有误哦！");
		ev.preventDefault();
	}
}

window.onload = function(){
	// 用户名
	$("userId").onblur = function(){
		var reg = /^[a-zA-Z0-9_]\w{6,16}$/ig;
		if (reg.test(this.value)) {
			$("userDiv").innerHTML ="此用户名可用";
			count++;
		}else{
			$("userDiv").innerHTML ="请输入6-16位的包含大小写数字";
		}
	}
	
	// 邮箱
	$("emailId").onblur = function(){
		var reg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i;
		if (reg.test(this.value)) {
			$("emailDiv").innerHTML = "此邮箱可以使用";
			count++;
		}else{
			$("emailDiv").innerHTML = "请输入正确的邮箱（com，cn，net）";
		}

	}

	//手机号
	$("phoneId").onblur = function(){
		var reg =/^1[3-9]\d{9}$/i;
		if (reg.test(this.value)) {
			$("phoneDiv").innerHTML = "此用户名可以使用";
			count++;
		}else{
			$("phoneDiv").innerHTML = "请输入正确的手机号";
		}
	}
	//密码
	$("passId").onkeyup = function(){
		// $("passDiv").innerHTML = "密码正确";
		var pass = this.value;
		if(pass.length>=6 && pass.length<=16){

			var hasNum = false;
			var regNum = /\d/;
			if(regNum.test(pass)){
				hasNum = true;
			}

			var hasLetter = false;
			var regLetter = /[a-zA-Z]/ig;
			if(regLetter.test(pass)){
				hasLetter = true;
			}

			var hasSpecial = false;
			var regSpecial = /[@!#\$%+-/.]/;
			if(regSpecial.test(pass)){
				hasSpecial = true;
			}
			
			let level = hasNum+hasLetter+hasSpecial;
			if(level==1){
				$("small").style.backgroundColor = "red";
				$("yes").style.backgroundColor = "#ccc";
				$("strong").style.backgroundColor = "#ccc";
			}else if(level==2){
				$("yes").style.backgroundColor = "yellow";
				$("small").style.backgroundColor = "#ccc";
				$("strong").style.backgroundColor = "#ccc";
			}else if(level==3){
				$("strong").style.backgroundColor = "blue";
				$("small").style.backgroundColor = "#ccc";
				$("yes").style.backgroundColor = "#ccc";
			}
		}else{
			$("passDiv").innerHTML = "请输入6-16位的密码";
		}
	}

}


