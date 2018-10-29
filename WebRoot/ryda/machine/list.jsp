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
	

</script>	
	    <div class="centercontent">
        <div class="custom_padding_15">
            <ul class="breadcrumbs custom_color_lan_0099cc custom_padding_4">
                <li><a href="" class="custom_font_size_14">设备管理</a></li>
                <li><a href="" class="custom_font_size_14 custom_color_lan_0099cc">查看设备</a></li>
            </ul>
        </div>
        <div class="custom_margin_left_15 custom_margin_right_15 custom_height_32">
        <form class="stdform stdform2" action="" method="post">
            <%--<button class="btn_search stdbtn btn_orange custom_margin_left_5 custom_float_right">查 询</button>--%>
            <%--<input type="text" name="input1" placeholder="关键字" class="smallinput custom_width_180 custom_float_right custom_margin_left_5">--%>
            <%--<span class="custom_float_right custom_line_height_36 custom_margin_left_15">关键字：</span>--%>

            <button class="btn_search stdbtn btn_red custom_margin_left_5 custom_float_right" disabled>当前设备总数：${total}</button>
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

                            <th class="head0 " rowspan="1" colspan="1">机器码</th>
                            <th class="head0 " rowspan="1" colspan="1">机器编码</th>
                            <th class="head0 " rowspan="1" colspan="1">GPS定位</th>
                            <th class="head0 " rowspan="1" colspan="1">状态</th>
                            <th class="head0 " rowspan="1" colspan="1">电量</th>
                            <th class="head0 " rowspan="1" colspan="1">设备名称</th>
                            <th class="head0 " rowspan="1" colspan="1">设备编号</th>
                            <th class="head0 " rowspan="1" colspan="1">类型</th>
                            <th class="head0 " rowspan="1" colspan="1">店名</th>
                            <th class="head0 " rowspan="1" colspan="1">地址</th>
                            <th class="head0 " rowspan="1" colspan="1">运营者</th>
                            <th class="head0 " rowspan="1" colspan="1">电话</th>
                            <th class="head0 " rowspan="1" colspan="1">审核状态</th>
                            <th class="head0 " rowspan="1" colspan="1">出纸单价</th>
                            <th class="head0 " rowspan="1" colspan="1">库存</th>
                            <th class="head0 " rowspan="1" colspan="1">消耗</th>
                        </tr>
                    </thead>
                    <tbody>
                    <s:iterator value="list" var="t" status="i">
                        <tr>
                            <td>${t.id}</td>
                            <td>${t.code}</td>
                            <td>${t.gps}</td>
                            <td><s:if test="#t.situation>0">在线</s:if><s:else>离线</s:else></td>
                            <td>${t.elect}</td>
                            <td>${t.name}</td>
                            <td>${t.macode}</td>
                            <td>${t.matype}</td>
                            <td>${t.shopname}</td>
                            <td>${t.shopadd}</td>
                            <td>${t.opname}</td>
                            <td>${t.phone}</td>
                            <td><s:if test="#t.approve>0">通过</s:if>
                                <s:else>
                                    <a href="<%= request.getContextPath() %>/machine_editpage.action?id=${t.id}"  class="custom_a_cursor_pointer custom_margin_left_15 custom_color_lan_4477c0">未通过，请审核</a>
                                </s:else></td>
                            <td><s:if test="#t.approve==0">未设置</s:if><s:else>${t.price}</s:else></td>
                            <td><s:if test="#t.approve==0">未设置</s:if><s:else>${t.total}</s:else></td>
                            <td><s:if test="#t.approve==0">未设置</s:if><s:else>${t.consumo}</s:else></td>
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
