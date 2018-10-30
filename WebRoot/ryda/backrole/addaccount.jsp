<%@page contentType="text/html;charset=UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<link rel="stylesheet" type="text/css" href="<%= request.getContextPath() %>/css/sys.css">
<html>
<head>
<title>Lomboz JSP</title>

</head>

<body class="withvernav">
<script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery-1.4.2.min.js"></script>
<script src="<%= request.getContextPath() %>/js/validate.js"></script>

	<script type="text/javascript">
	
	</script>
<div class="centercontent">
	<div class="custom_height_50 custom_line_height_50">
	     <span class="custom_float_left custom_padding_left_25 custom_color_lan_0099cc custom_font_size_16">子后台分配</span>
	     <a href="<%=basePath%>matype_query.action" class="custom_width_height_50_50 custom_display_block custom_float_right custom_close custom_a_cursor_pointer" ></a>
	</div>
	<form class="stdform" id="addForm" name="addForm" action="" method="post">
	    <div class="custom_width_900 custom_min_height_250">   
	        <p>
	            <label>请选择添加的子后台类型</label>
	            <span class="field">
					<a href="<%= request.getContextPath() %>/backrole_addagent1.action"
					   class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">
						添加总代理</a>
					<br><br>
					<a href="<%= request.getContextPath() %>/backrole_addagent2.action"
					   class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">
						添加省代</a>
					<br><br>
					<a href="<%= request.getContextPath() %>/backrole_addagent3.action"
					   class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">
						添加市代</a>
					<br><br>
					<a href="<%= request.getContextPath() %>/backrole_addagent4.action"
					   class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">
						添加经销商</a>
					<br><br>
					<a href="<%= request.getContextPath() %>/backrole_addagent5.action"
					   class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">
						添加运营者</a>
					<br><br>
				</span>
	        </p>
	         
	        
	        
	       
	    </div>
	    <div class="custom_width_900 custom_height_40">
	        <input id="baocun" type="button" onclick="addFormSub();" name="" class="stdbtn btn_blue custom_padding_8_20_8_20 custom_width_100 custom_forms_button_lan custom_float_right custom_margin_right_5" value="提交">
	    </div>
	</form>
	<div class="clear"></div>
</div>

    <script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
    
</body>
</html>