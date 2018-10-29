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
	
		function addFormSub() {
			if (Validator.Validate(document.getElementById("addForm"), 3)) {
				document.getElementById("addForm").submit();

			}
		}

		function checkForRepeat(){
			var tname=document.getElementById("tname").value;

			var url="<%= request.getContextPath() %>/matype_checkforrepeat.action";
			var data={tname:tname};
			$.post(url,data,function (msg) {
						console.info(msg);
						if(msg.success==false){
							alert(msg.message);
							document.getElementById("baocun").style.display="none";
						}else{
							document.getElementById("baocun").style.display="block";
						}
					}
					,"json"
			);



		}
		
	
	</script>
<div class="centercontent">
	<div class="custom_height_50 custom_line_height_50">
	     <span class="custom_float_left custom_padding_left_25 custom_color_lan_0099cc custom_font_size_16">添加设备类型</span>
	     <a href="<%=basePath%>matype_query.action" class="custom_width_height_50_50 custom_display_block custom_float_right custom_close custom_a_cursor_pointer" ></a>
	</div>
	<form class="stdform" id="addForm" name="addForm" action="matype_addsave.action" method="post">
	    <div class="custom_width_900 custom_min_height_250">   
	        <p>
	            <label>设备类型名称：</label>
	            <span class="field">
					<input type="text"  class="smallinput"  id="tname"
				name="obj.tname" value="" placeholder="请添加设备类型"
				require="true" min="1" datatype='Limit' msg="请输入设备类型！"
				onblur="checkForRepeat();"
				></span>
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