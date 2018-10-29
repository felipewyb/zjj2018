<%@page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<link rel="stylesheet" type="text/css" href="<%= request.getContextPath() %>/css/sys.css">
<html>
<head>
<title>Lomboz JSP</title>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/turingzg.js"></script>
<script src="<%= request.getContextPath() %>/js/validate.js"></script>
</head>

<body class="withvernav">
	<script type="text/javascript">
	
		function editFormSub()
		{
			  //alert();
			  document.getElementById("editForm").submit();
		}
		
	
	</script>
<div class="centercontent">
	<div class="custom_height_50 custom_line_height_50">
	     <span class="custom_float_left custom_padding_left_25 custom_color_lan_0099cc custom_font_size_16">设备审核</span>
	     <a href="<%=basePath%>machine_query.action" class="custom_width_height_50_50 custom_display_block custom_float_right custom_close custom_a_cursor_pointer" ></a>
	</div>
	<form class="stdform" id="editForm" name="editForm" action="machine_editsave.action" method="post">
	    <div class="custom_width_900 custom_min_height_250">
			<input type="hidden" name="obj.id" value="${obj.id }">
			<p>
				<label>当前审核设备的机器码：</label>
				<span class="field"><input type="text"  class="smallinput"  value="${obj.id }" disabled></span>
			</p>
			<p>
				<label>当前审核设备的机器编码：</label>
				<span class="field"><input type="text"  class="smallinput"  value="${obj.code }" disabled></span>
			</p>
			<p>
				<label>当前审核设备的设备名称：</label>
				<span class="field"><input type="text"  class="smallinput"   value="${obj.name }" disabled></span>
			</p>
			<p>
				<label>当前审核设备的店名：</label>
				<span class="field"><input type="text"  class="smallinput"  value="${obj.shopname }" disabled></span>
			</p>
	        <p>
	            <label>出纸单价：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.price" placeholder="请设置出纸单价"></span>
	        </p>
			<p>
	            <label>库存：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.total"  placeholder="请设置库存"></span>
	        </p>

	    </div>
	    <div class="custom_width_900 custom_height_40">
	        <input type="button" onclick="editFormSub();" name="" class="stdbtn btn_blue custom_padding_8_20_8_20 custom_width_100 custom_forms_button_lan custom_float_right custom_margin_right_5" value="审核通过">
	    </div>
	</form>
	<div class="clear"></div>
</div>

    <script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
    
</body>
</html>