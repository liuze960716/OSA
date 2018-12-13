<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$username = $_GET['username'];
	$userpass = $_GET['userpass'];
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
		//3.1 查询
		$sqlstr="select * from vip where username='$username'";
		$result = mysql_query($sqlstr,$conn);//执行查询SQL语句，返回值是表格
		$rows = mysql_num_rows($result);//返回$result表格有几行。
		if($rows==0){
			//3.2保存
			$sqlstr="insert into vip(username,userpass,)
						values('$username','$userpass')";
			$result = mysql_query($sqlstr,$conn);	
			//4、关闭数据库
			mysql_close($conn);
			if($result==1){
				//三、响应
				echo "1";
			}else{
				echo "0";
			}
		}else{
			echo "亲，用户名已经存在！";
		}
	}
?>

