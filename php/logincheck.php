<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$login_name = $_POST['login_name'];
	$login_pwd = $_POST['login_pwd'];
	
	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		//die("连接失败".mysql_error());
		//三、响应
	}else{
		//2、选择数据库
		mysql_select_db("vip",$conn);
		
		//3、执行SQL语句

		$sqlstr="select * from  vip 
				  where username='$login_name' and userpass='$login_pwd'";
		$result = mysql_query($sqlstr,$conn);		
		//4、关闭数据库
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){			
			//三、响应
			echo "登录失败，请重新<a href='../login.html'>登录</a>";
		}else{
			header("refresh:0;url=../index.html");
		}
	}
?>