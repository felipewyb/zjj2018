<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
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
	function Save(){
		location.href = "<%= request.getContextPath() %>/diqu_addpage.action";
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
 				
 				document.form1.action = "<%= request.getContextPath() %>/diqu_deleteMany.action";
			document.form1.submit();
 			}
   		}
   }

</script>	
	    <div class="centercontent">
        <div class="custom_padding_15">
            <ul class="breadcrumbs custom_color_lan_0099cc custom_padding_4">
                <li><a href="" class="custom_font_size_14">基本档案</a></li>
                <li><a href="" class="custom_font_size_14 custom_color_lan_0099cc">地区</a></li>
            </ul>
        </div>
        <div class="custom_margin_left_15 custom_margin_right_15 custom_height_32">
        <form class="stdform stdform2" action="" method="post">
            <a href="javascript:void(0)" onclick="Save()" class="stdbtn btn_blue custom_float_left custom_background_image_none ">添 加</a>
            <a href="javascript:void(0)" onclick="DeleteMany();" class="stdbtn custom_float_left custom_margin_left_15">删 除</a>
            <button type="submit" class="btn_search stdbtn btn_orange custom_margin_left_5 custom_float_right">查 询</button>
            <input id="keyword" type="text" name="keyword" value="${keyword}" placeholder="关键字" class="smallinput custom_width_180 custom_float_right custom_margin_left_15">
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
                            <th class="head0 " rowspan="1" colspan="1">序号</th>
                            <th class="head0 " rowspan="1" colspan="1">地区</th>
                            <th class="head0 " rowspan="1" colspan="1">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    <s:iterator value="list" var="t" status="i">
                        <tr>
                          <td align="center" ><span class="center">
                          	<input type="checkbox"  name="ids" value="${t.diqu_id }" ></span>
                          </td>
                            <td>${i.count}</td>
                            <td>${t.diqu_name}</td>
                            <td>
                                <a href="<%= request.getContextPath() %>/diqu_editpage.action?id=${t.diqu_id}"  class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">修改</a>
                                <a href="<%= request.getContextPath() %>/diqu_deleteOne.action?id=${t.diqu_id}" class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">删除</a>
                            </td>
                        </tr>
                     </s:iterator>  
                    </tbody>
                </table>
                </form>

                 <div class="dataTables_info" id="dyntable2_info">共计：<s:property value="intPageCount"/>页<s:property value="intRowCount"/>条 当前：第<s:property value="pageNow"/>页</div>

                 <!-- 分页的连接 -->
                 <s:url id="url_first" value="diqu_query.action">
                     <s:param name="pageNow" value="1"></s:param>
                 </s:url>
                 <s:url id="url_last" value="diqu_query.action">
                     <s:param name="pageNow" value="k"></s:param>
                 </s:url>
                 <s:url id="url_pre" value="diqu_query.action">
                     <s:param name="pageNow" value="pageNow-1"></s:param>
                 </s:url>
                 <s:url id="url_next" value="diqu_query.action">
                     <s:param name="pageNow" value="pageNow+1"></s:param>
                 </s:url>
                 <s:url id="url" value="diqu_query.action">
                     <s:param name="pageNow" value="pageNow"></s:param>
                 </s:url>

                 <!-- 页面显示的分页链接 -->
                 <div class="dataTables_paginate paging_full_numbers" id="dyntable2_paginate">
                     <s:if test="pageNow==1">
                         <span class="next paginate_button" id="dyntable2_next"><s:a href="%{url_first}" disabled="disabled">首页</s:a></span>
                     </s:if>

                     <s:else>
                         <span class="next paginate_button" id="dyntable2_next"><s:a href="%{url_first}">首页</s:a> </span><span class="next paginate_button" id="dyntable2_next"><s:a href="%{url_pre}">上一页</s:a></span>
                     </s:else>

                     <s:if test="pageNow==k">
                         <span class="next paginate_button" id="dyntable2_next"> <s:a href="%{url_last}" disabled="disabled">末页</s:a></span>
                     </s:if>

                     <s:else>
                         <span class="next paginate_button" id="dyntable2_next"><s:a href="%{url_next}">下一页</s:a></span><span class="next paginate_button" id="dyntable2_next"><s:a href="%{url_last}">末页</s:a></span>
                     </s:else>

                 </div>

            <div style="clear:both;"></div>
        </div>
        <div style="clear:both;"></div>
	</div>
	
	
</body>
</html>
