<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>

<link rel="stylesheet" type="text/css" href="<%= request.getContextPath() %>/css/sys.css">
<script type="text/javascript" src="<%= request.getContextPath() %>/js/common.js"></script>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/calendar.js"></script>	
<script type="text/javascript" src="<%= request.getContextPath() %>/js/checkValue.js"></script>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/checkBox.js"></script>

<script type="text/javascript">
	
	
		function Save(){
		location.href = "<%= request.getContextPath() %>/jiazhaoleixing_addpage.action";
	}
	
		function DeleteMany(){
		if(hasChecked(delForm)==false){
			alert("请选择要删除的项目！");
			return;
		}
		if(confirm("您确定要删除选中的吗？")==true){
		    document.delForm.action = "<%= request.getContextPath() %>/jiazhaoleixing_deleteMany.action";
			document.delForm.submit();
		}
	}

	

</script>
<body style="background-color: #ff99ff">

<h1>用户表</h1>

<form name="delForm" action="bumen.action" method="POST">
<table border="1" cellspacing="1" cellpadding="2" class="bgtable" align="center" style="table-layout:fixed">
	<tr align="left" > 
	<td colspan="6">
	<a href="javascript:Save() "><img class="imgd" src="<%= request.getContextPath() %>/images/button/add.gif"></a>&nbsp; &nbsp;
	<a href="javascript:DeleteMany()"><img class="imgd" src="<%= request.getContextPath() %>/images/button/del.gif"></a>
	</td>
	</tr>
	<tr align="center" class="henglan"> 
		<td  width="5%" align="center"><input type="checkbox" backcolor ="#BDD7DF" name="allcheck" onclick="javascript:checkall(document.delForm,document.delForm.allcheck);" /></td>
		<td  width="5%"><div align="center">序号</div></td>
		<td  ><div align="center">用户</div></td>
		<td  ><div align="center">密码</div></td>
		<td  width="15%"><div align="center">操作</div></td>

	
	<s:iterator value="list" var="t" status="i">	
	<tr class="tabtd1" onMouseOver="MouseMoveIn(this);" onMouseOut="MouseMoveOut(this);">
		<td align="center" ><input type="checkbox" name="ids" value="${t.userId }" class="wu"></td>
		<td align="center">${i.count }</td>
		<td align="center">${t.userAccount }</td>
		<td align="center">${t.userPassword }</td>
		<td align="center">
			<a href="<%= request.getContextPath() %>/jiazhaoleixing_editpage.action?id=${t.userId}">[修改]</a>
			<a href="<%= request.getContextPath() %>/jiazhaoleixing_deleteOne.action?id=${t.userId}">[删除]</a>
		</td>
	</tr>	
	</s:iterator>
	
	
</table>
</form>


</body>

