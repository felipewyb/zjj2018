<%@page contentType="text/html;charset=UTF-8"%>

<link rel="stylesheet" type="text/css" href="<%= request.getContextPath() %>/css/sys.css">
<html>
<head>
<title>Lomboz JSP</title>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/turingzg.js"></script>

</head>
<script type="text/javascript">

	function addFormSub()
	{

		document.addForm.action="<%= request.getContextPath() %>/jiazhaoleixing_addsave.action";
		document.addForm.submit();
	}
	function backlist(){
		history.go(-1);

	}

</script>

<body style="background-color: #ff99ff">
<form name="addForm" action="" method="post">
<table cellspacing="0" cellpadding="0" align="center">
	<tr><td class="topg"/></tr>
</table>
	<table cellspacing="0" cellpadding="0" align="center" class="wukuang" >
		<tr>
			<td width="1%" align="left" ><img class="img" src="<%= request.getContextPath() %>/images/tleft.gif"></td>
			<td width="20%">[添加驾照类型]</td>
			<td width="78%" align="right">
				<a href="javascript:addFormSub();"><img class="imgd" src="<%= request.getContextPath() %>/images/button/save.gif"></a>
				<a href="javascript:backlist();"><img class="imgd" src="<%= request.getContextPath() %>/images/button/back.gif"></a>
			</td>
			<td width="1%" align="left" ><img class="img" src="<%= request.getContextPath() %>/images/tright.gif"></td>
		</tr>
	</table>
	<table cellspacing="0" cellpadding="0" align="center">
		<tr><td class="topg"/></tr>
	</table>
	<table border="1" cellspacing="1" cellpadding="2" align="center"  class="bgtable">

		<tr>
			<td width="10%" align="center">司机所在地区</td>
			<td width="90%" ><input size = "50"  name="obj.jaizhaoleixingName"/></td>
		</tr>
		

	</table>
</form>
</body>
</html>