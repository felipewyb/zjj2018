/**
 *  @author 赵刚
 *  required jQuery
 */
var zg = {};
//var zg = zg || {};
/**
 * 屏蔽右键
 */
$(document).bind('contextmenu', function() {
	// return false;
});
/**
 * 禁止复制
 */
$(document).bind('selectstart', function() {
	// return false;
});
/**
 * iframe自适应高度
 */
zg.autoIframeHeight = function(iframe) {
	iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
};
/**
 * 取得当前路径  例如：http://60.37.6.9:8080/pro01/
 */
zg.up = function(){
	var url = document.URL;
	//var url = window.location.href;//http://pc2011073017npf:8080/mrmf01/frame/main.jsp
	var projecturl = document.location.pathname;  //  /mrmf01/frame/main.jsp
	var pos = url.indexOf( projecturl );
	var httpUrl = url.substring(0, pos+1);
	var str = projecturl.substring(1);
	var projectName = str.substring(0,str.indexOf("/")+1);
	return httpUrl+projectName ;	//  http://60.37.6.9:8080/pro01/
};
/**
 * 当前时间
 */
zg.date = function(){
	var d = new Date();
	var n = d.getFullYear(); 
    var y = d.getMonth()+1; 
    var r = d.getDate(); 
    var xs = d.getHours(); 
    var fz = d.getMinutes(); 
    var miao = d.getSeconds();
    return n+"-"+y+"-"+r+" "+xs+":"+fz+":"+miao;
};
/**
 * 不同行不同色，高亮显示
 */
zg.overout = function(className){
	$("."+className+":even").css("background-color","#E1E4BE");
	$("."+className+":odd").css("background-color","#FBFBE3");
	var trs1 = $("."+className+"");
	for(var i=0;i<trs1.length;i++){
		var tr = trs1[i];
		tr.onmouseover=function(){
			yuan = this.style.backgroundColor;
			this.style.backgroundColor = "#03A8F6";
		};
		tr.onmouseout=function(){
			this.style.backgroundColor = yuan;
		};
	}
};
/**
 * 项目名   mrmf01/
 */
zg.pn = function(){
	var projecturl = document.location.pathname;
	var str = projecturl.substring(1);
	var projectName = str.substring(0,str.indexOf("/")+1);
	return projectName;
};
/**
 * 去除左侧空格
 */
zg.ltrim = function(d){return d.replace(/(^\s*)/g,"");};
/**
 * 去除右侧空格
 */
zg.rtrim = function(d){return d.replace(/(\s*$)/g,"");};
/**
 * 去除空格
 */
zg.trim = function(d){return d.replace(/(^\s*)|(\s*$)/g, "");};
/**
 * 正整数验证
 */
zg.int = function(o){
	var reg = /^[1-9]+\d*$/;
	if(reg.test( $("input[name='"+o+"']").val()  )){
		$("input[name='"+o+"'] + span").remove();
		return false;
	}else{
		$("input[name='"+o+"'] + span").remove();
		$("input[name='"+o+"']").after("<span style='color:red'>输入正整数</span>");
		return true;
	}
};
zg.notEmpty=function(o){
	if($.trim($("input[name='"+o+"']").val())!=""){
		$("input[name='"+o+"'] + span").remove();
		return false;
	}else{
		$("input[name='"+o+"'] + span").remove();
		$("input[name='"+o+"']").after("<span style='color:red'>不能为空</span>");
		return true;
	}
}
