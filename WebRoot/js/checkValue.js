var IS_NULL     =	0X80; //	10000000
var IS_FULL     =	0X40; //	01000000
var IS_HALF     =	0X20; //	00100000
var IS_ASCII    =	0X10; //	00010000
var IS_NUM      =	0X08; //	00001000
var IS_DATE     =	0X04; //	00000100
var IS_PHONE    =	0X02; //	00000010
var IS_EMAIL    =	0X01; //	00000001
var IS_NOT_NULL =	0X00; //	00000000
var MSG_CHECK_SUCCESS = "Check Success";


function getAppVer() {
	var sVer = navigator.appVersion;
	var nVer = sVer.indexOf("MSIE");
	var appVer = "";
	if (nVer > 0) {
		appVer = "M" + sVer.substring(nVer + 5, nVer + 9);
	}
	else {
		appVer = "N" + sVer.substring(0, 4);
	}
	if (appVer.charAt(4) == " ") {
		appVer = appVer.substring(0, 4) + "0";
	}
	return appVer;
}

var appVer = getAppVer();

/*****************日期类型************/

/********************************** zmx 2005.10.06*************************************/
/*获得系统日期
*返回值：
*返回系统日期
/********************************** zmx 2005.10.06*************************************/
function getSysDate() {
	var today  = new Date();
	var nYear  = today.getYear();
	var nMonth = today.getMonth() + 1;
	var nDay   = today.getDate();
	var sToday = "";
	if (nYear < 1000) {
		sToday += "" + (1900 + nYear);
	}else {
		sToday += nYear;
	}
	if (nMonth < 10) {
		sToday += "0" + nMonth;
	}else {
		sToday += nMonth;
	}
	if (nDay < 10) {
		sToday += "0" + nDay;
	}else {
		sToday += nDay;
	}
	return sToday;
}

/********************************** zmx 2005.10.06*************************************/
/*校验是否大于系统日期
*返回值：
*如果校验正确，返回true
*如果校验未通过，返回false
*参数：str：日期字符串
/********************************** zmx 2005.10.06*************************************/
function checkAfterDate(str) {
	str = convDate(str, "/");//调用convDate（）格式化日期yyyymmdd
	if (str.length == 6)  str += "01";
	if (str <= getSysDate())  return false;//调用getSysDate()提取系统日期
	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验是否等于系统日期
*返回值：
*如果校验正确，返回true
*如果校验未通过，返回false
*参数：str：日期字符串
/********************************** zmx 2005.10.06*************************************/
function checkIsToday(str) {
	str = convDate(str, "/");//调用convDate（）格式化日期yyyymmdd
	if( str.length == 6 )  str += "01";
	if( str == getSysDate() ) return true;//调用getSysDate()提取系统日期
	return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验是否小于系统日期
*返回值：
*如果校验正确，返回true
*如果校验未通过，返回false
*参数：str：日期字符串
/********************************** zmx 2005.10.06*************************************/
function checkBeforeDate(str) {
	str = convDate(str, "/");//调用convDate（）格式化日期yyyymmdd
	if (str.length == 6)  str += "01";
	if (str >= getSysDate())  return false;//调用getSysDate()提取系统日期
	return true;
}


/********************************** zmx 2005.10.06*************************************/
/*拼接格式化日期，接收年、月、日
*返回值：
*返回拼接后日期
/********************************** zmx 2005.10.06*************************************/
function formatDate(sYear, sMonth, sDay) {
	if (sMonth.length == 1)  sMonth = "0" + sMonth;
	if (sDay.length == 1)  sDay = "0" + sDay;
	return sYear + sMonth + sDay;
}

/********************************** zmx 2005.10.06*************************************/
/*校验润年
*返回值：
*如果校验通过，       返回true
*如果不是闰年，       返回false    
/********************************** zmx 2005.10.06*************************************/
function checkLeapYear(year) {
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))  return true;
	return false;
}

/********************************** zmx 2005.10.06*************************************/
/*设定日期格式，不带格式,例yyyymmdd
*返回值：
*返回格式化后的日期
/********************************** zmx 2005.10.06*************************************/
function convDate(sDate, sSep) {
	var pos = 0;
	var str = sDate;
	var len = str.length;
	if ((len < 8) || (len > 10)) {
		return str;
	}else if (str.indexOf(sSep) == 4) {
		pos = str.indexOf(sSep, 5);
		if (pos == 6) {
			if (len == 8) {
				return str.substring(0, 4) + "0" + str.substring(5, 6) + "0" + str.substring(7, 8);
			}else {
				return str.substring(0, 4) + "0" + str.substring(5, 6) + str.substring(7, 9);
			}
		}
		else if (pos == 7) {
			if (len == 9) {
				return str.substring(0, 4) + str.substring(5, 7) + "0" + str.substring(8, 9);
			}else {
				return str.substring(0, 4) + str.substring(5, 7) + str.substring(8, 10);
			}
		}else {
			return str;
		}
	}else {
		return str;
	}
}
/********************************** zmx 2005.10.06*************************************/
/*设定日期格式，带step格式（-或\），例yyyy-mm-dd
*返回值：
*返回格式化后的日期
/********************************** zmx 2005.10.06*************************************/
function formatDate(sDate, sSep) {
	var pos = 0;
	var str = sDate;
	var len = str.length;
	if ((len < 8) || (len > 10)) {
		return str;
	}else if (str.indexOf(sSep) == 4) {
		pos = str.indexOf(sSep, 5);
		if (pos == 6) {
			if (len == 8) {
				return str.substring(0, 4) + sSep + "0" + str.substring(5, 6) + sSep + "0" + str.substring(7, 8);
			}else {
				return str.substring(0, 4) + sSep + "0" + str.substring(5, 6) + sSep + str.substring(7, 9);
			}
		}else if (pos == 7) {
			if (len == 9) {
				return str.substring(0, 4) + sSep + str.substring(5, 7) + sSep + "0" + str.substring(8, 9);
			}else {
				return str.substring(0, 4) + sSep + str.substring(5, 7) + sSep + str.substring(8, 10);
			}
		}else {
			return str;
		}
	}else {
		return str;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*校验日期是否正确,输入的参数为8位yyyymmdd
*返回值：
*如果字串为日期型，校验通过，       返回true
*如果日期不合法，                   返回false    
/********************************** zmx 2005.10.06*************************************/
function checkRq(str) {
	str = convDate(str, "/");
	if ((str.length != 8) || !checkNumnum(str)) return false;
	var year  = str.substring(0, 4);
	var month = str.substring(4, 6);
	var day   = str.substring(6, 8);
	dayOfMonth = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
	if ((month < 1) || (month > 12)) return false;
	if ((day < 1) || (day > dayOfMonth[month - 1])) return false;
	if (!checkLeapYear(year) && (month == 2) && (day == 29)) return false;//调用checkLeapYear（）校验是否闰年
	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验日期是否正确,输入的参数为10位yyyy-mm-dd
*返回值：
*如果字串为日期型，校验通过，       返回true
*如果日期不合法，                   返回false    
*参数：obj：页面对象；msg:字段名称；str:传入日期数值
/********************************** zmx 2005.10.06*************************************/
function checkDate(obj,msg,str){
	if(str == "") return true;//如果为空，则通过校验
	var pattern = /^((\d{4})|(\d{2}))-(\d{1,2})-(\d{1,2})$/g;		
	if(!pattern.test(str)) {//校验格式，如果格式不匹配，返回
		alert(msg+"与yyyy-mm-dd格式不匹配");
		obj.focus();
		return false;
	}
	var arrDate = str.split("-");	
	if(parseInt(arrDate[0]) < 100)	arrDate[0] = 2000 + parseInt(arrDate[0]) + "";//支持年份只输入两位数字
	//看是否在1900-1-1与2099-12-31之间
	var numDate = parseInt(arrDate[0]+((parseInt(arrDate[1])<10)?("0"+parseInt(arrDate[1])):arrDate[1])+""+((parseInt(arrDate[2])<10)?("0"+parseInt(arrDate[2])):arrDate[2])+"");				       				 
	if(!((numDate)>=19000101&&(numDate)<=20991231)) {
		alert(msg+"超过1900-01-01至2099-12-31的界限");
		obj.focus;
		return false;	
	}
	if(!CheckDateTime(str+" 00:00:00")){
		alert(msg+"不合法");
		obj.focus();
		return false;
	}

}
//函数名：CheckDateTime 
//功能介绍：检查是否为日期时间 
function CheckDateTime(str){ 
	var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null)return false; 
	r[2]=r[2]-1; 
	var d= new Date(r[1], r[2],r[3], r[4],r[5], r[6]); 
	if(d.getFullYear()!=r[1])return false; 
	if(d.getMonth()!=r[2])return false; 
	if(d.getDate()!=r[3])return false; 
	if(d.getHours()!=r[4])return false; 
	if(d.getMinutes()!=r[5])return false; 
	if(d.getSeconds()!=r[6])return false; 
	return true;
}
/********************************** zmx 2005.10.06*************************************/
/*校验两个日期的先后
*返回值：
*如果有一个值为空，不用进行比较            返回true
*如果其中有一个日期长度不等于8,或,          返回true
*如果起始日期早于等于终止日期，校验通过，   返回true
*如果起始日期晚于终止日期，                 返回false    
/********************************** zmx 2005.10.06*************************************/
function compareRq(fromDate,toDate) {
	if(fromDate == "") return true;//如果为空，则通过校验
	if(toDate == "") return true;//如果为空，则通过校验
	if( checkRq(fromDate) == false ) return false;//调用checkRq()判断输入日期是否正确
	if( checkRq(toDate) == false ) return false;//调用checkRq()判断输入日期是否正确
	fromDate = convDate(fromDate, "/");//调用convDate()格式化日期yyyymmdd
	toDate = convDate(toDate, "/");//调用convDate()格式化日期yyyymmdd
	if ((fromDate.length != 8) || !checkNumnum(fromDate) || (toDate.length != 8) || !checkNumnum(toDate)) return false;//调用checkNumber()校验输入是否为整数
	if(fromDate <= toDate ){
		return true;
	}else{
		return false;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*校验两个日期的先后
*返回值：
*如果有一个值为空，不用进行比较            返回true
*如果起始日期早于等于终止日期，校验通过，   返回true
*如果起始日期晚于终止日期，                 返回false    
*参数：obj：页面对象；msg:字段名称；fromDate、toDate:传入日期数值；step：代表比较的符号
/********************************** zmx 2005.10.06*************************************/
function compareDate(obj1,msg1,fromDate,obj2,msg2,toDate,step) {
	if(fromDate == "") return true;//如果为空，则通过校验
	if(toDate == "") return true;//如果为空，则通过校验
	if( checkDate(obj1,msg1,fromDate) == false ) return false;//调用checkDate()判断输入日期是否正确
	if( checkDate(obj2,msg2,toDate) == false ) return false;//调用checkDate()判断输入日期是否正确
	fromDate = formatDate(fromDate, "-");//调用formatDate()格式化日期yyyy-mm-dd
	toDate =  formatDate(toDate, "-");//调用formatDate()格式化日期yyy-ymm-dd
	if ((fromDate.length != 10) || (toDate.length != 10) ) {
		alert("日期不合法");
		return false;//调用checkNumber()校验输入是否为整数
	}
	switch(step){
		case "<=":
			if(fromDate <= toDate ){
				return true;
			}else{
				alert(msg2+"应大于"+ msg1 );
				return false;
			}
			break;
		case "<":
			if(fromDate < toDate ){
				return true;
			}else{
				alert(msg2+"不应小于"+ msg1 );
				return false;
			}
			break;
		default:	
			break;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*比较日期字符串
*返回值：
*如果dateStr1大于dateStr2，返回1
*如果dateStr1等于dateStr2，返回0
*如果dateStr1小于dateStr2，返回-1
*如果dateStr1日期格式不对，直接返回dateStr1
/********************************** zmx 2005.10.06*************************************/
//比较日期字符串
function compareDateStr(dateStr1,dateStr2) {
	dateStr1 = convDate(dateStr1,"/");
  	dateStr2 = convDate(dateStr2,"/");
  	if (dateStr1 > dateStr2) {
    	return 1;
  	}else if (dateStr1 == dateStr2) {
    	return 0;
  	}else {
    	return -1;
  	}
  	return dateStr1
}

/********************************** zmx 2005.10.06*************************************/
/*设定日期格式，添加“-”符号，例yyyy-mm-dd,  
*返回值：
*返回格式化后的日期
/********************************** zmx 2005.10.06*************************************/
function changeAddDate(sDate, sSep) {
	var str_date = formatDate(sDate, sSep);
	return str_date.substring(0, 4) + sSep + str_date.substring(4, 6) + sSep + str_date.substring(6, 8);
}




/*****************数值类型************/

/********************************** zmx 2005.10.06*************************************/
/*校验字符串是否为整型
*返回值：
*如果字串全部为数字，校验通过，返回true
*如果校验不通过，              返回false     
/********************************** zmx 2005.10.06*************************************/
function checkNumnum(str) {
    var i;
    var len = str.length;
    var chkStr = "1234567890";
    if (len == 1) {
		if (chkStr.indexOf(str.charAt(i)) < 0)  return false;
	}else {
		if ((chkStr.indexOf(str.charAt(0)) < 0))  return false;
		for (i = 1; i < len; i++) {
			if (chkStr.indexOf(str.charAt(i)) < 0)  return false;
		}
    }
    return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验整型最小值
*str：要校验的串。  val：比较的值
*返回值：
*如果为空，定义校验通过，                返回true
*如果满足条件，大于等于给定值，校验通过，返回true
*如果小于给定值，                        返回false              参考提示信息：输入域不能小于给定值！
/********************************** zmx 2005.10.06*************************************/
function checkIntMin(str,val){    
    if(str == "") return true;//如果为空，则通过校验
    if(typeof(val) != "string")  val = val + "";
    if(checkNumnum(str) == true)    {
        if(parseInt(str,10)>=parseInt(val,10))
            return true;
        else
            return false;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验整型最大值
*str：要校验的串。  val：比较的值*
*返回值：
*如果为空，定义校验通过，                返回true
*如果满足条件，小于等于给定值，校验通过，返回true
*如果大于给定值，                        返回false       参考提示信息：输入值不能大于给定值！
/********************************** zmx 2005.10.06*************************************/
function checkIntMax(str,val){    
    if(str == "")  return true;//如果为空，则通过校验
    if(typeof(val) != "string") val = val + "";
    if(checkNumnum(str) == true)    {
        if(parseInt(str,10)<=parseInt(val,10))
            return true;
        else
            return false;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验整型是否为非负数
*str：要校验的串。*
*返回值：
*如果为空，定义校验通过，返回true
*如果非负数，            返回true
*如果是负数，            返回false               参考提示信息：输入值不能是负数！
/********************************** zmx 2005.10.06*************************************/
function isNotNegativeInteger(str){
    if(str == "") return true;    //如果为空，则通过校验
    if(checkNumnum(str) == true)    {
        if(parseInt(str,10) < 0)
            return false;
        else
            return true;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验是否为浮点型
*返回值：
*如果校验通过，                返回true
*如果校验不通过，              返回false     
/********************************** zmx 2005.10.06*************************************/
function checkFloat(str) {
    var i;
    var len = str.length;
    var chkStr = "1234567890.";
    if (len == 1) {
		if (chkStr.indexOf(str.charAt(i)) < 0)  return false;
	} else {
		if ((chkStr.indexOf(str.charAt(0)) < 0))  return false;
	 	for (i = 1; i < len; i++) {
			if (chkStr.indexOf(str.charAt(i)) < 0)   return false;
		}
    }
    return true;
}
/********************************** zmx 2005.10.06*************************************/
/*校验是否为浮点型，可以为负数
*返回值：
*如果校验通过，                返回true
*如果校验不通过，              返回false     
/********************************** zmx 2005.10.06*************************************/
function checkFloat2(str) {
    var i;
    var len = str.length;
    var chkStr = "+1234567890.-";
    if (len == 1) {
		if (chkStr.indexOf(str.charAt(i)) < 0)  return false;
	} else {
		if ((chkStr.indexOf(str.charAt(0)) < 0))  return false;
	 	for (i = 1; i < len; i++) {
			if (chkStr.indexOf(str.charAt(i)) < 0)   return false;
		}
    }
    return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验浮点型最小值
*str：要校验的串。  val：比较的值*
*返回值：
*如果为空，定义校验通过，                返回true
*如果满足条件，大于等于给定值，校验通过，返回true
*如果小于给定值，                        返回false              参考提示信息：输入域不能小于给定值！
/********************************** zmx 2005.10.06*************************************/
function checkDoubleMinValue(str,val){    
    if(str == "")        return true;//如果为空，则通过校验
    if(typeof(val) != "string")        val = val + "";
    if(checkFloat(str) == true)    {
        if(parseFloat(str)>=parseFloat(val))
            return true;
        else
            return false;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验浮点型最大值
*str：要校验的串。  val：比较的值*
*返回值：
*如果为空，定义校验通过，                返回true
*如果满足条件，小于等于给定值，校验通过，返回true
*如果大于给定值，                        返回false       参考提示信息：输入值不能大于给定值！
/********************************** zmx 2005.10.06*************************************/
function checkDoubleMaxValue(str,val){    
    if(str == "")        return true;//如果为空，则通过校验
    if(typeof(val) != "string")        val = val + "";
    if(checkFloat(str) == true)    {
        if(parseFloat(str)<=parseFloat(val))
            return true;
        else
            return false;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验浮点型是否为非负数
*str：要校验的串。*
*返回值：
*如果为空，定义校验通过，返回true
*如果非负数，            返回true
*如果是负数，            返回false               参考提示信息：输入值不能是负数！
/********************************** zmx 2005.10.06*************************************/
function isNotNegativeDouble(str){    
    if(str == "")        return true;//如果为空，则通过校验
    if(checkFloat(str) == true)    {
        if(parseFloat(str) < 0)
            return false;
        else
            return true;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*校验小数或整数位数  ,即数值的边界
*返回值：
*如果校验通过，                返回"Check Success"
*如果校验不通过，              返回错误信息retMsg     
*参数： str:校验内容；precision:整体长度，减去小数为正数长度；scale:小数位数；isNull:0X80；sItemName:字段名称
/********************************** zmx 2005.10.06*************************************/
function checkFloat1(str, precision, scale, isNull,sItemName){
    var retMsg = MSG_CHECK_SUCCESS;
    var pointPos = str.indexOf(".");
    if(pointPos < 0){
		retMsg  = checkItem(str, 0, precision - scale, IS_NUM | isNull);//调用checkItem()校验数值
		if(retMsg != MSG_CHECK_SUCCESS){
			alert(sItemName + retMsg);
			return false;
		}
    }else{
    	var integerPart = str.substring(0, pointPos);
        var decimalPart = str.substring(pointPos + 1, str.length);
        retMsg = checkItem(integerPart, 0, precision - scale, IS_NUM | isNull);//调用checkItem()校验数值
    	if(retMsg == MSG_CHECK_SUCCESS){
    		retMsg = checkItem(decimalPart, 0, scale, IS_NUM | IS_NULL);//调用checkItem()校验数值
    		if(retMsg != MSG_CHECK_SUCCESS){
    			retMsg = "的小数部分" + retMsg;    			
				alert(sItemName + retMsg);
				return false;
    		}
    	}else{
    		retMsg = "的整数部分" + retMsg;
			alert(sItemName + retMsg);
			return false;
    	}
    }
   	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验输入的内容
*返回值：
*如果校验通过，                返回MSG_CHECK_SUCCESS = "Check Success";
*如果校验不通过，              返回  错误信息     
*参数： sCheck:校验的内容；nMinLen:整体长度，减去小数为正数长度或最小长度；nMaxLen:小数位数或最大长度；chkFlg:例如0X80，输入标志
/********************************** zmx 2005.10.06*************************************/
function checkItem(sCheck, nMinLen, nMaxLen, chkFlg) {
	var strLen = 0;
	if ((sCheck == null) || (sCheck == "")) return MSG_CHECK_SUCCESS;//如果为空，则通过校验 
	if ((nMinLen > 0) || (nMaxLen > 0)) {
		strLen = sumLen(sCheck);
		if (nMinLen > 0) {
			if (nMinLen == nMaxLen) {
				if (strLen != nMinLen) {
					if ((chkFlg & 0x08) == 0x08) {return "的长度必须"+ nMinLen + "字节";}else {return "的长度必须小于"+ nMinLen + "字节";}
				}
			}else if (strLen < nMinLen) {
				if ((chkFlg & 0x08) == 0x08) {return "不是数字";}else {return "过于短小，最小长度为"+ nMinLen + "字节";}
			}
		}
		if (nMaxLen > 0) {	if (strLen > nMaxLen) {		return "超过了最大长度"+ nMaxLen + "字节";}	}
	}
	if ((chkFlg & 0x10) == 0x10) {		if (!checkASCII(sCheck))  return "不正确";	}
	if ((chkFlg & 0x08) == 0x08) {		if (!checkNumnum(sCheck))  return "是数字项目";	}
	if ((chkFlg & 0x04) == 0x04) {		if (!checkDate(sCheck))  return "是日期项目";	}
	if ((chkFlg & 0x02) == 0x02) {		if (!checkPhone(sCheck))  return "不正确";	}
	if ((chkFlg & 0x01) == 0x01) {		if (!checkEmail(sCheck))  return "不正确";	}
	return MSG_CHECK_SUCCESS;
}

/********************************** zmx 2005.10.06*************************************/
/*检查数字中的字符，如果有字符则返回false
*返回值：
*如果校验通过，                返回true
*如果校验不通过，              返回false     
/********************************** zmx 2005.10.06*************************************/
function checkNumberString(value){
	if( value == null || value == "" ) return true;
	var c = new RegExp();
	c = /^\d+$/;
	if (!c.test(value))
		return false;
	else
		return true;
}



/*****************字符类型************/

/********************************** zmx 2005.10.06*************************************/
/*计算字符串的总长度，一个汉字两个字符
/********************************** zmx 2005.10.06*************************************/
function sumLen(str){
	return str.replace(/[^\x00-\xff]/g,"**").length;
}

/********************************** zmx 2005.10.06*************************************/
/*校验字符串是否为中文  ,此方法暂时不好使
*返回值：
*如果为空，定义校验通过，           返回true
*如果字串为中文，校验通过，         返回false
*如果字串为非中文，             返回true    
/********************************** zmx 2005.10.06*************************************/
function checkIsChinese(obj,msg,str){   
    if (str == "")  return true; //如果值为空，通过校验
    var pattern = /^([\\u4E00-\\u9FA5]|[\\uFE30-\\uFFA0])*$/gi;
    if (pattern.test(str)){
        return true;
     }else{
     	alert(msg+"含有汉字1");
     	obj.focus();
        return false;
     }
}

/********************************** zmx 2005.10.06*************************************/
/*校验字符数字符号中是否含有汉字
*返回值：
*如果校验不含有，                返回true
*如果校验含有，              返回false     
/********************************** zmx 2005.10.06*************************************/
function checkASCII(obj,msg,sCheck) {	
	var str = escape(sCheck);
	var chkStr = "89abcdefABCDEF"
	var i = str.indexOf("%");
   	if ((appVer.charAt(0) == 'M') || (appVer > "N4.05")) {
		while ((i >= 0) && (i < str.length)) {
			if (str.charAt(i+1) == "u") {
				alert(msg+"含有汉字");
				obj.focus();
				return false;
			}
			i = str.indexOf("%", i+1);
		}
   	}else if (appVer.charAt(0) == 'N') {
		while ((i >= 0) && (i < str.length)) {
			if (chkStr.indexOf(str.charAt(i+1)) >= 0) {
				alert(msg+"含有汉字");
				obj.focus();
				return false;
			}
			i = str.indexOf("%", i+1);
		}
    }
    return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验字符长度输入越界 
*返回值：
*校验通过,返回true
*校验未通过,返回false
*参数：str:校验内容；scale:最大长度；tag:0X10；msg:字段名称;obj:对象
/********************************** zmx 2005.10.06*************************************/
function checkMaxLen(obj,msg,str,scale,tag){
	if( str == null || str == "" ) return true;
    var retMsg = MSG_CHECK_SUCCESS;
	retMsg  = checkItem(str, 0, scale, tag);//调用checkItem()校验字节长度
	if(retMsg != MSG_CHECK_SUCCESS){
		alert(msg + retMsg);
		obj.focus();
		return false;
	}
	return true;
}
/********************************** zmx 2005.10.06*************************************/
/*去除字符串中的指定字符    
*返回值：
*返回处理后的字符串
*参数：str：字符串；c：要去除的字符
/********************************** zmx 2005.10.06*************************************/
function removeChar(str, c) {
	if( str == null || str == "" ) return str;
	var i = str.indexOf(c);
	while (i >= 0) {
		str = str.substring(0, i) + str.substring(i + 1, str.length);
		i = str.indexOf(c);
	}
	return str;
}

/********************************** zmx 2005.10.08*************************************/
/*检查空字符
/********************************** zmx 2005.10.08*************************************/
function checkSpaceChar(c) {
	return ((c == ' ') || (c == '\t') || (c == '　'));
}

/********************************** zmx 2005.10.06*************************************/
/*替换字符串中的指定字符    
*返回值：
*返回处理后的字符串
/********************************** zmx 2005.10.06*************************************/
function replaceStr(str, sFnd, sRep) {
	var sTmp = "";
   	var endIndex = 0;
  	var beginIndex = 0;
   	var len = sFnd.length;
  	while (endIndex >= 0) {
    	endIndex = str.indexOf(sFnd ,beginIndex);
    	if (endIndex >= 0) {
      		sTmp += str.substring(beginIndex, endIndex) + sRep;
       		beginIndex = endIndex + len;
    	}else if (beginIndex >= 0) {
       		sTmp += str.substring(beginIndex);
      		break;
    	}
  	}
  	return sTmp;
}

/********************************** zmx 2005.10.06*************************************/
/*替换字符串中的逗号 
*返回值：
*返回处理后的字符串
/********************************** zmx 2005.10.06*************************************/
function replaceCommas(str) {
	if (str == "")  return str;
	str = replaceStr(str, "'", "'");
	str = replaceStr(str, '"', '"');
	return str;
}
/********************************** zmx 2005.10.06*************************************/
/*校验输入内容中特殊符号
*返回值：
*如果通过，返回true
*如果校验未通过，返回false
/********************************** zmx 2005.10.06*************************************/
function checkEngNum(str) {
	if( str == null || str == "" ) return true;
	var c = new RegExp();
	c = /^[\d|a-zA-Z]+$/;
	if (c.test(str)){
		return true;
	}else{
		return false;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*校验电话号码是否正确
*返回值：
*如果校验未通过，返回false
*如果校验通过，返回true
/********************************** zmx 2005.10.06*************************************/
function checkPhone(str) {
	if( str == null || str == "" ) return true;
	var i = str.indexOf("--");
	var len = str.length;
	if (i >= 0)  return false;
	i = str.indexOf("-");
	if ((i == 0) || (i == len - 1)) {
		return false;
	}else if (i > 0) {
		i = str.lastIndexOf("-");
       	if (i == len - 1)  return false;
		str = removeChar(str, "-");
	}
	if (!checkNumnum(str)) {
		return false;
	}else {
		return true;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*校验字符串是否为email型
*返回值：
*如果为空，定义校验通过，           返回true
*如果字串为email型，校验通过，      返回true
*如果email不合法，                  返回false    参考提示信息：Email的格式不正確！
/********************************** zmx 2005.10.06*************************************/
function checkEmail(str){ 
    var i;
    var len = str.length;
    if(str == "") return true; //如果为空，则通过校验 
	var chkStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_@.";
	if ((str.indexOf("@") <= 0) || (str.indexOf("@") == len - 1) || (str.indexOf(".") == len - 1) ||	(str.indexOf("@.") > 0) || (str.indexOf(".@") > 0) || (str.charAt(len - 1) == "@") || (str.charAt(len - 1) == ".") || (str.indexOf("@@") > 0) || (str.indexOf("..") > 0)) {
		return false;
	}
	if (str.indexOf("@", str.indexOf("@") + 1) > 0) return false;
    for (i = 0; i < len; i++) {
    	if (chkStr.indexOf(str.charAt(i)) < 0) return false;
    }
	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*校验IP地址格式 
*参数：ip:ip地址值
*返回值：
*如果校验未通过，返回false
*如果校验通过，返回正确ip地址
/********************************** zmx 2005.10.06*************************************/
function checkip(ip){ 
	var scount=0; 
	var iplength = ip.length; 
	var Letters = "1234567890."; 
	for (i=0; i < ip.length; i++){ 
		var CheckChar = ip.charAt(i); 
		if (Letters.indexOf(CheckChar) == -1){ 
		    alert ("IP地址格式不对!!，只能输入数字和“.”,格式为XXX.XXX.XXX.XXX 例如：192.168.0.1");
	    	return false; 
		} 
	} 
	for (var i = 0;i<iplength;i++) 
		(ip.substr(i,1)==".")?scount++:scount; 
	if(scount!=3){ 
		alert ("IP地址格式不对!，只能输入数字和“.”,格式为XXX.XXX.XXX.XXX 例如：192.168.0.1"); 
		return false; 
	} 
	first = ip.indexOf("."); 
	last = ip.lastIndexOf("."); 
	str1 = ip.substring(0,first); 
	subip = ip.substring(0,last); 
	sublength = subip.length; 
	second = subip.lastIndexOf("."); 
	str2 = subip.substring(first+1,second); 
	str3 = subip.substring(second+1,sublength); 
	str4 = ip.substring(last+1,iplength); 
	
	if (str1=="" || str2=="" ||str3== "" ||str4 == ""){
		alert("数字不能为空！格式为XXX.XXX.XXX.XXX 例如：192.168.0.1"); 
		return false; 
	}
	if (str1 < 0 || str1 > 255 || str2 < 0 || str2 > 255 ||str3< 0 || str3 >255 ||str4< 0 || str4 >255){
		alert ("数字范围为0~255！"); 
		return false; 
	}

	if(str1.length==1) str1="00"+str1;
	if(str1.length==2) str1="0"+str1;
	if(str2.length==1) str2="00"+str2;
	if(str2.length==2) str2="0"+str2;
	if(str3.length==1) str3="00"+str3;
	if(str3.length==2) str3="0"+str3;
	if(str4.length==1) str4="00"+str4;
	if(str4.length==2) str4="0"+str4;
	
	return str1+"."+str2+"."+str3+"."+str4;	
} 

/********************************** zmx 2005.10.06*************************************/
/*过滤页面上的空格
*参数：oFrm:传入要处理的form
*将form中的值全部过滤掉空格
/********************************** zmx 2005.10.06*************************************/
function trimItems(oFrm) {
	var i = 0;
	var type = "";
	for (i=0; i<oFrm.elements.length; i++) {
		type = oFrm.elements[i].type;
		if ((type == "text") || (type == "textarea")) {
			oFrm.elements[i].value = trim(oFrm.elements[i].value);
		}
	}
}

/********************************** zmx 2005.10.05*************************************/
/*去掉空格
*参数：str:传入的参数值
*返回过滤后的参数值
/********************************** zmx 2005.10.05*************************************/
function trimNull(str){
	var len = str.length ;
	var i= 0 ;
	var j = len-1 ;
	for(;i<len;i++){
    	if (str.charAt(i)==' ') {
    		continue;
    	}else{
    		break;                             
    	}              
  	}        
	if (i==len) return ''; //全是空格        
  	for(;j>i;j--)  { 
    	if (str.charAt(j)==' ') {
    		continue;
    	}else{
    		break;                             
    	}
  	} 
  	return str.substring(i,j+1);
}

/********************************** zmx 2005.10.05*************************************/
/*必须录入校验
*参数：obj：界面的对象，用于setfocus用；msg:传入错误的提示信息
*返回值：
*如果为空，返回false
*如果校验通过    返回true
/********************************** zmx 2005.10.05*************************************/
function checkIsNull(obj,msg){
	if (trimNull(obj.value) == ""){//调用trimNull()过滤空格
    	alert("请输入" + msg);
    	obj.focus();
    	return false;
  	}
  	return true;
}

/********************************** zmx 2005.10.05*************************************/
/*身份证号校验
*参数：obj：界面的对象，用于setfocus用；idcard:传入参数值
*返回值：
*如果为空，返回false
*如果校验未通过，返回false
*如果校验通过    返回true
/********************************** zmx 2005.10.05*************************************/
function checkIdcard(obj,idcard){
 	if(idcard == "") return true;//如果为空，则通过校验
 	
	var Errors=new Array("验证通过!","身份证号码位数不对!","身份证号码出生日期超出范围或含有非法字符!","身份证号码校验错误!","身份证地区非法!");
	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
	var idcard,Y,JYM;
	var S,M;
	var idcard_array = new Array();
	idcard_array = idcard.split("");
	
	//地区检验
	if(area[parseInt(idcard.substr(0,2))]==null) {
		alert(Errors[4]);
		return false;
	}
	//身份号码位数及格式检验
	switch(idcard.length){
		case 15:
			if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
			} else {
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
			}
			if(ereg.test(idcard)) {//校验通过
				return true;				
			}else{
				alert(Errors[2]);
				return false;
			}		
			break;
		case 18://18位身份号码检测   //出生日期的合法性检查 
			//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
			//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
			
			if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
			} else {
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
			}
			
			if(ereg.test(idcard)){//测试出生日期的合法性
				//计算校验位
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
					+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
					+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
					+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
					+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
					+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
					+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
					+ parseInt(idcard_array[7]) * 1	+ parseInt(idcard_array[8]) * 6
					+ parseInt(idcard_array[9]) * 3 ;
				Y = S % 11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y,1);//判断校验位
				if(M == idcard_array[17]) {//检测ID的校验位通过
					return true;
				}else{
					alert(Errors[3]);
					return false;
				}
			}else{
				alert(Errors[2]);
				return false;
			}
			break;
		default:
			alert(Errors[1]); 
			return false;			
			break;
	}
	return true;
}

/********************************** zmx 2005.10.05*************************************/
/*将15的身份证号升为18位
*参数：obj：界面的对象，用于setfocus用；idcard:传入参数值
*返回值：
*如果为空，返回false
*如果校验未通过，返回false
*如果校验通过    返回18位身份证号     
/********************************** zmx 2005.10.05*************************************/
function ID15T18(obj,idcard){
	var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
	var nTemp = 0, i;
 	if (checkIsNull(obj, "身份证号") == false) return false;//调用checkIsnul()判断是否为空
    if (checkIdcard(obj,idcard)== false) return false;//调用checkIdcard()判断输入是否正确
	if(idcard.length==15){
		idcard = idcard.substr(0,6) + '19' + idcard.substr(6,idcard.length-6);
		for(i = 0; i < idcard.length; i ++){
			nTemp += idcard.substr(i, 1) * arrInt[i];
 		}
 		idcard += arrCh[nTemp % 11]; 
 		return idcard;
 	}else{
    	alert("身份证号已经为18位");
   		return false;
    } 
} 






/*****************文件类型************/

/********************************** zmx 2005.10.06*************************************/
/*过滤掉文件路径，取得文件名
*参数：fullpath:传入文件路径
*返回值：
*返回文件名
/********************************** zmx 2005.10.06*************************************/
function getFileName(fullpath){
	var platform = navigator.platform;
	var fileseperator=(platform.indexOf("Win")==-1)?"/":"\\";
	var idx = fullpath.lastIndexOf(fileseperator);
	if(idx == -1){
		return fullpath;
	}else if(idx >= fullpath.length -1){
		return "";
	}else{
		return fullpath.substring(idx+1);
	}
}

/********************************** zmx 2005.10.06*************************************/
/* 得到文件的后缀名
* oFile为file控件对象
/********************************** zmx 2005.10.06*************************************/
function getFilePostfix(oFile){
    if(oFile == null)   return null;
    var pattern = /(.*)\\.(.*)$/gi;
    if(typeof(oFile) == "object"){
        if(oFile.value == null || oFile.value == "") return null;
        var arr = pattern.exec(oFile.value);
        return RegExp.$2;
    }else if(typeof(oFile) == "string"){
        var arr = pattern.exec(oFile);
        return RegExp.$2;
    }else{
        return null;
    }
}
