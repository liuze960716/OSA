<?php
    header("Content-type:text/html;charset=utf-8");

    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        die("连接失败".mysql_error());
    }else{
        //2.选择数据
        mysql_select_db('vip',$conn);
        //3.执行sql语
        $sqlstr = "insert into vip (username,userpass) values ('$username','$userpass')";
      
         $result = mysql_query($sqlstr,$conn);
        if($result==1){ 
            header("refresh:0;url=../login.html");
        }else{
            echo '注册失败·用户名已经存在<a href=../registr.html>请重新注册</a>';
        }
        //4.关闭数据库
        mysql_close($conn);

    }
?>
