<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
  <base href="<%=basePath%>">
  <title>My JSP 'shebeilist.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
  </head>

<body class="withvernav">


<script type="text/javascript" src="<%=basePath%>/js/custom/tables.js"></script>
<script type="text/javascript">
	
	//添加
	function save(){
		location.href = "<%= request.getContextPath() %>/matype_addpage.action";
	}
   //删除  
   function DeleteMany(){ 
        var flag=false;
     
   		for(var i=0;i<document.getElementsByName("ids").length;i++){
   			if(document.getElementsByName("ids")[i].checked){
   			flag=true;
   			break;
   			}
   		}
   		if(!flag){
   			alert("请先选择要删除的记录！");
   			return;
   		}else{
			
 			if(confirm("您确定要删除选中的吗？")==true){
 				
 				document.form1.action = "<%= request.getContextPath() %>/matype_deleteMany.action";
			document.form1.submit();
 			}
   		}
   }

</script>	
	    <div class="centercontent">
        <div class="custom_padding_15">
            <ul class="breadcrumbs custom_color_lan_0099cc custom_padding_4">
                <li><a href="" class="custom_font_size_14">设备管理</a></li>
                <li><a href="" class="custom_font_size_14 custom_color_lan_0099cc">设备类型</a></li>
            </ul>
        </div>
        <div class="custom_margin_left_15 custom_margin_right_15 custom_height_32">
        <form class="stdform stdform2" action="" method="post">
            <a href="javascript:void(0)" onclick="save()" class="stdbtn btn_blue custom_float_left custom_background_image_none ">添 加</a>
            <a href="javascript:void(0)" onclick="DeleteMany();" class="stdbtn custom_float_left custom_margin_left_15">删 除</a>
           <%--  <button class="btn_search stdbtn btn_orange custom_margin_left_5 custom_float_right">查 询</button>
            <input type="text" name="input1" placeholder="关键字" class="smallinput custom_width_180 custom_float_right custom_margin_left_5">
            <span class="custom_float_right custom_line_height_36 custom_margin_left_15">关键字：</span> --%>
        </form>
        <div style="clear:both;"></div>
        </div>
        <div class="widgetpage custom_padding_15">
             <div class="dataTables_wrapper" id="dyntable2_wrapper">
             <form name="form1" id="form1">
                <table cellpadding="0" cellspacing="0" border="0" class="stdtable stdtablecb" id="dyntable2">
                    <colgroup>
                        <col class="con0" style="width: 4%">
                        <col class="con1">
                        <col class="con0">
                        <col class="con1">
                        <col class="con0">
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="head0" rowspan="1" colspan="1" style="width: 200px;">
                            	<input type="checkbox" class="checkall" >
                            </th>
                            <th class="head0 " rowspan="1" colspan="1">设备类型ID</th>
                            <th class="head0 " rowspan="1" colspan="1">设备类型</th>
                            <th class="head0 " rowspan="1" colspan="1">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    <s:iterator value="list" var="t" status="i">
                        <tr>
                          <td align="center" ><span class="center">
                          	<input type="checkbox"  name="ids" value="${t.ttype }" ></span>
                          </td>
                            <td>${t.ttype}</td>
                            <td>${t.tname}</td>
                            <td>
                                <a href="<%= request.getContextPath() %>/matype_editpage.action?id=${t.ttype}"  class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">修改</a>
                                <a href="<%= request.getContextPath() %>/matype_deleteOne.action?id=${t.ttype}" class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">删除</a>
                            </td>
                        </tr>
                     </s:iterator>  
                    </tbody>
                </table>
                </form>
                
            <div style="clear:both;"></div>
        </div>
        <div style="clear:both;"></div>
	</div>
	
	
</body>
</html>
