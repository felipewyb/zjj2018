
<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%@ page language="java"%> 



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
<% 
java.text.SimpleDateFormat simpleDateFormat = new java.text.SimpleDateFormat(  
     "yyyy-MM-dd HH:mm:ss");  
   java.util.Date currentTime = new java.util.Date();  
   String time = simpleDateFormat.format(currentTime).toString(); 
   String ip=request.getLocalAddr();
%>
  </head>

<body class="withvernav">


<script type="text/javascript">

</script>

<div class="centercontent">


        <div class="custom_margin_left_300 custom_height_200 custom_margin_top_200">
  			<span class="custom_font_size_30  custom_color_hong_ff0000">欢迎登录纸巾机管理平台！</span>
  		<br><br>
  		<span class="custom_font_size_20  ">登录时间：<%=time %></span>
  		  		<br><br>
  		  		<span class="custom_font_size_20 custom_color_lan_4477c0 ">登录IP：<%=ip %></span>
        </div>
        <div class="widgetpage custom_padding_15">
            
        <div style="clear:both;"></div>
	</div>
	</div>
	
</body>
</html>


