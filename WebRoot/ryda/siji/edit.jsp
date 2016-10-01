
		<%@page contentType="text/html;charset=UTF-8"%>
		<%@taglib uri="/struts-tags" prefix="s" %>
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
		<script src="<%= basePath %>js/validate.js"></script>
		<script type="text/javascript">

			function editFormSub()
			{
				if(Validator.Validate(document.getElementById("editForm"),3)){
					document.getElementById("editForm").submit();
				}
			}


		</script>
		<div class="centercontent">
			<div class="custom_height_50 custom_line_height_50">
				<span class="custom_float_left custom_padding_left_25 custom_color_lan_0099cc custom_font_size_16">添加司机简历</span>
				<a href="<%=basePath%>siji_query.action" class="custom_width_height_50_50 custom_display_block custom_float_right custom_close custom_a_cursor_pointer" ></a>
			</div>
			<form class="stdform" id="editForm" name="editForm" action="siji_editsave.action" method="post">
				<div class="custom_width_900 custom_min_height_250">
					<p>
						<input type="hidden" name="obj.sijiId" value="${obj.sijiId }">
						<label>司机姓名：</label>
						<span class="field"><input type="text"  class="smallinput" name="obj.sijiXingming" value="${obj.sijiXingming}" placeholder="司机姓名"
												   require="true" min="1" datatype="Limit" msg="请输入司机姓名!" ></span>
					</p>
					<p>
						<label>年龄：</label>
						<span class="field"><input type="text"  class="smallinput" name="obj.sijiNianling" value="${obj.sijiNianling}" placeholder="年龄"
												   require="true" min="1" datatype="Limit" msg="请输入司机年龄!" ></span>
					</p>
					<p>
						<label>驾龄：</label>
						<span class="field"><input type="text"  class="smallinput" name="obj.sijiJialing" value="${obj.sijiJialing}" placeholder="驾龄"
												   require="true" min="1" datatype="Limit" msg="请输入司机驾龄姓名!" ></span>
					</p>
					<p>
						<label>出生日期：</label>
						<span class="field"><input type="text"  class="smallinput" name="obj.sijiChushengriqi" value="<fmt:formatDate value="${obj.sijiChushengriqi }" pattern="yyyy-MM-dd"/>" placeholder="出生日期"
												   onClick="WdatePicker()"
												   require="true" min="1" datatype='Limit' msg="请输入出生日期！"></span>
					</p>
					<p>
						<label>司机手机号：</label>
						<span class="field"><input type="text"  class="smallinput" name="obj.sijiShoujihao" value="${obj.sijiShoujihao}" placeholder="司机手机号"
												   require="true" min="1" datatype="Limit" msg="请输入司机手机号码!" ></span>
					</p>
					<p>
						<label>司机类型：</label>
						<span class="field">
	            	<s:select list="sjlxList" class="radius3 custom_padding_7 custom_width_285"
							  listKey="sijileixig_id" listValue="leixing_name"
							  name="obj.sijileixigId">
					</s:select>
				</span>
					</p>
					<p>
						<label>驾照类型：</label>
						<span class="field">
	            	<s:select list="jzlxList" class="radius3 custom_padding_7 custom_width_285"
							  listKey="jaizhaoleixing_id" listValue="jaizhaoleixing_name"
							  name="obj.jaizhaoleixingId">
					</s:select>
	            </span>
					</p>
					<p>
						<label>所属地区：</label>
						<span class="field"><s:select list="ssdqList" class="radius3 custom_padding_7 custom_width_285"
													  listKey="diqu_id" listValue="diqu_name"
													  name="obj.diquId">
						</s:select></span>
					</p>
					<p>
						<label>等级评定：</label>
						<span class="field"><s:select list="djpdList" class="radius3 custom_padding_7 custom_width_285"
													  listKey="siji_dengjiid" listValue="dengji"
													  name="obj.dejipingdingId">
						</s:select></span>
					</p>


				</div>
				<div class="custom_width_900 custom_height_40">
					<input type="button" onclick="editFormSub();" name="" class="stdbtn btn_blue custom_padding_8_20_8_20 custom_width_100 custom_forms_button_lan custom_float_right custom_margin_right_5" value="提交">
				</div>
			</form>
			<div class="clear"></div>
		</div>

		<script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>

		</body>
		</html>