<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!–[if IE 8]>
    <meta http-equiv="x-ua-compatible" content="ie=8" />
    <![endif]–>

    <title>纸巾机管理后台 欢迎登陆</title>
    <link rel="stylesheet" href="bag/css/style.default.css" type="text/css" />
    <link rel="stylesheet" href="bag/css/custom/custom.css" type="text/css" />
    <script type="text/javascript" src="bag/js/plugins/jquery-1.7.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery-ui-1.8.16.custom.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.cookie.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="bag/js/custom/general.js"></script>
    <script type="text/javascript" src="bag/js/custom/index.js"></script>


</head>

<body class="loginpage custom_bady_bg" >

<script type="text/javascript">

    function shuaxin(){

        var obj=document.getElementById("Verify");
        obj.setAttribute("src", "sci_execute.action?timestamp="+new Date().getTime());

    }

    function loginFormSub(){

        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
        var vcode=document.getElementById("vcode").value;


        if(username==null || username=="" ){
            alert("用户名不能为空！请重新输入！");
            return;
        }

        if(password==null || password=="" ){
            alert("密码不能为空！请重新输入！");
            return;
        }

        if(vcode==null || vcode=="" ){
            alert("验证码不能为空！请重新输入！");
            return;
        }


        else
        {
            loginFun();
        }

    }



    function loginFun(){
        document.getElementById("loginForm").submit();
    }




</script>
<div class="loginbox">
    <div class="loginboxinner">

        <div class="logo">
            <h1 class="logo custom_margin_bottom_15 custom_padding_bottom_20"><span class="custom_color_ju_ff9900 custom_font_size_28">纸巾机管理后台</span></h1>
            <span class="slogan custom_color_fff custom_font_size_16"> VERSION: 1.0</span>
        </div>

        <form id="loginForm" name="loginForm" action="login_login.action" method="post">

            <div class="username">
                <div class="usernameinner">
                    <input type="text" name="username" id="username"   value="${username }"/>
                </div>
            </div>

            <div class="password">
                <div class="passwordinner">
                    <input type="password" name="password" id="password"
                           onpaste="return false" oncontextmenu="return false" oncopy="return false" oncut="return false"/>
                </div>
            </div>

            <div class="password2">
                <div class="passwordinner2">
                    <input type="text" name="vcode" id="vcode"  placeholder="ValidationCode"  />

                    <img src="sci_execute.action" id="Verify" class="custom_float_right custom_margin_top_10 custom_margin_right_10" onclick="javascript:shuaxin()" />
                </div>

            </div>
            <input id="loginbtn" type="button" name="loginbtn" onclick="loginFormSub();"  class="custom_width_100b custom_line_height_50 custom_height_50 custom_display_block custom_background_0099cc custom_color_fff custom_font_size_14 custom_border_0 custom_border_radius_4" value="登录" />

            <br>
            <div class="notibar msgalert">
                <p> ${returnValue } </p>
            </div>


        </form>

    </div>
</div>

<div style="clear:both;"></div>
<div class="custom_line_height_150 custom_width_100b">&nbsp;</div>
<div class="custom_width_100b custom_height_60 custom_line_height_60 custom_text_align_center custom_background_3c4f6d custom_color_fff custom_margin_top_60 custom_bottom_0 custom_position_fixed">
    <span>2018 纸巾机管理后台 © 信腾科技 版权所有</span>
</div>
</body>
</html>
