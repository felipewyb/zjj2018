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

<script src="<%= basePath %>js/validate.js"></script>
	<script type="text/javascript">
	
		function addFormSub()
		{
			if(Validator.Validate(document.getElementById("addForm"),3)){
				document.getElementById("addForm").submit();
			}
		}
		
	
	</script>
<div class="centercontent">
	<div class="custom_height_50 custom_line_height_50">
	     <span class="custom_float_left custom_padding_left_25 custom_color_lan_0099cc custom_font_size_16">添加司机简历</span>
	     <a href="<%=basePath%>sijijianli_query.action" class="custom_width_height_50_50 custom_display_block custom_float_right custom_close custom_a_cursor_pointer" ></a>
	</div>
	<form class="stdform" id="addForm" name="addForm" action="sijijianli_addsave.action" method="post">
	    <div class="custom_width_900 custom_min_height_250">   
	        <p>
	            <label>司机姓名：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.sjxm" value="" placeholder="司机姓名"
				require="true" min="1" datatype='Limit' msg="请输入司机姓名！"></span>
	        </p>
	         <p>
	            <label>年龄：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.sjnl" value="" placeholder="年龄"
				require="true" min="1" datatype='Limit' msg="请输入年龄！"></span>
	        </p>
	        <p>
	            <label>驾龄：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.sjjl" value="" placeholder="驾龄"
				require="true" min="1" datatype='Limit' msg="请输入驾龄！"></span>
	        </p>
	         <p>
	            <label>出生日期：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.csrq" value="" placeholder="出生日期"
	             onClick="WdatePicker()"
				require="true" min="1" datatype='Limit' msg="请输入出生日期！"></span>
	        </p>
	        <p>
	            <label>手机号码：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.sjsjh" value="" placeholder="司机手机号"
				require="true" min="1" datatype='Limit' msg="请输入司机手机号！"></span>
	        </p>
	        <p>
	            <label>司机类型：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.sjlx" value="" placeholder="司机类型"
				require="true" min="1" datatype='Limit' msg="请输入司机类型！"></span>
	        </p>
	        <p>
	            <label>驾照类型：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.jzlx" value="" placeholder="等级评定"
				require="true" min="1" datatype='Limit' msg="请输入等级评定！"></span>
	        </p>
	            <label>所属地区：</label>
	            <span class="field"><input type="text"  class="smallinput" name="obj.dqmc" value="" placeholder="所属地区"
				require="true" min="1" datatype='Limit' msg="请输入所属地区！"></span>
	        </p>
	         
	    </div>
	    <div class="custom_width_900 custom_height_40">
	        <input type="button" onclick="addFormSub();" name="" class="stdbtn btn_blue custom_padding_8_20_8_20 custom_width_100 custom_forms_button_lan custom_float_right custom_margin_right_5" value="提交">
	    </div>
	</form>
	<div class="clear"></div>
</div>

    <script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
    
</body>
</html>