<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="bag/css/style.default.css" type="text/css" />
    <link rel="stylesheet" href="bag/css/custom/custom.css" type="text/css" />
    <link rel="stylesheet" href="bag/css/custom/fonts/iconfont.css" type="text/css" />

    <script type="text/javascript" src="bag/js/plugins/jquery-1.7.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery-ui-1.8.16.custom.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.cookie.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.validate.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.tagsinput.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/charCount.js"></script>
    <script type="text/javascript" src="bag/js/plugins/ui.spinner.min.js"></script>
    <script type="text/javascript" src="bag/js/plugins/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="bag/js/custom/general.js"></script>
    <script type="text/javascript" src="bag/js/custom/forms.js"></script>
    <script type="text/javascript" src="bag/js/custom/productlist.js"></script>





    <script type="text/javascript" src="bag/js/plugins/colorpicker.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.jgrowl.js"></script>
    <script type="text/javascript" src="bag/js/plugins/jquery.alerts.js"></script>
    <script type="text/javascript" src="bag/js/custom/elements.js"></script>

    <link href="bag/js/plugins/leftnav/css/jquery-accordion-menu.css" rel="stylesheet" type="text/css" />
    <link href="bag/js/plugins/leftnav/css/font-awesome.css" rel="stylesheet" type="text/css" />


    <script src="bag/js/plugins/leftnav/js/jquery-accordion-menu.js" type="text/javascript"></script>

    <link rel="stylesheet" href="bag/js/plugins/popup/popup.css" type="text/css" /><!--弹出层-->
    <script type="text/javascript" src="bag/js/plugins/popup/popup.js">//弹出层</script>

    <!--[if IE 9]>
    <link rel="stylesheet" media="screen" href="bag/css/style.ie9.css"/>
    <![endif]-->
    <!--[if IE 8]>
    <link rel="stylesheet" media="screen" href="bag/css/style.ie8.css"/>
    <![endif]-->
    <!--[if lt IE 9]>
    <script src="bag/js/plugins/css3-mediaqueries.js"></script>
    <![endif]-->
    <decorator:head/>
</head>

<body class="withvernav">
<div class="bodywrapper">
    <div class="topheader custom_padding_top_0 custom_padding_bottom_0 custom_padding_left_0 custom_height_100">
        <div class="left">
            <h1 class="logo custom_margin_top_0 custom_margin_bottom_0"><img src="images/ucar.png" width="105%" height="100"></h1>
            <span class="slogan custom_padding_top_0 custom_padding_bottom_0 custom_height_100 custom_font_size_20 custom_line_height_100">嵘雅达后台管理系统</span>
            <br clear="all" />
        </div>

        <div class="right">
            <div class="custom_float_left custom_margin_top_8 custom_margin_right_15">
            </div>
            <div class="userinfo">
                <img src="bag/images/thumbs/avatar.png" alt="" />
                <span>系统管理员</span>
            </div><!--userinfo-->

            <div class="userinfodrop">
                <div class="avatar">
                    <a href=""><img src="bag/images/thumbs/avatarbig.png" alt="" /></a>
                </div>
                <div class="userdata">
                    <h4>系统管理员</h4>
                    <ul>
                        <li><a href="<%=basePath%>login_logout.action">退出登录</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <title>嵘雅达后台管理系统</title>

    <div class="custom_width_240 custom_float_left">
        <div id="jquery-accordion-menu" class="jquery-accordion-menu red">
            <ul id="demo-list">
                <li class="active"><a href="#"><i class="iconfont icon_yonghuguanli"></i>司机管理 </a>
                    <ul class="submenu">
                        <li><a href="<%=basePath%>siji_query.action">司机简历 </a></li>
                        <%-- <li><a href="<%=basePath%>sijijianli_query.action">司机简历 </a></li>  --%>
                        <li><a href="<%=basePath%>sijileixing_query.action">司机类型 </a></li>
                        <li><a href="<%=basePath%>jiazhaoleixing_query.action">驾照类型 </a></li>
                    </ul>
                </li>
                <li><a href="#"><i class="iconfont icon_jibendangan"></i>基本档案 </a>
                    <ul class="submenu">
                        <li><a href="<%=basePath%>diqu_query.action">所属地区 </a></li>
                        <li><a href="<%=basePath%>dengji_query.action">等级评定 </a></li>
                    </ul>
                </li>
                <li><a href="#"><i  class="iconfont icon_quanxianguanli"></i>权限管理 </a>
                    <ul class="submenu">
                        <li><a href="<%=basePath%>updateUsers.action">角色管理 </a></li>
                    </ul>
                </li>
                <li><a href="#"><i  class="iconfont icon_gerenxinxi"></i>个人设置</a>
                    <ul class="submenu">
                        <li><a href="<%=basePath%>xwyh_query.action">修改密码 </a></li>
                    </ul>
                </li>

            </ul>
            <div style="clear:both;"></div>
        </div>
        <div style="clear:both;"></div>
    </div>
    <script src="bag/js/plugins/leftnav/js/accordion-menu.js" type="text/javascript"></script>




    <sitemesh:write property='body' />

    <div style="clear:both;"></div>
</div>
<div style="clear:both;"></div>
<div class="custom_line_height_150 custom_width_100b">&nbsp;</div>
<div class="custom_width_100b custom_height_60 custom_line_height_60 custom_text_align_center custom_background_3c4f6d custom_color_fff custom_margin_top_60 custom_bottom_0 custom_position_fixed">
    <span>© 2016 【嵘雅达后台管理系统 POWERED BY 宜租车联网集团UCAR-NET.CN】 版权所有</span>
</div>
</body>
</html>
