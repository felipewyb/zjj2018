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

/*****************��������************/

/********************************** zmx 2005.10.06*************************************/
/*���ϵͳ����
*����ֵ��
*����ϵͳ����
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
/*У���Ƿ����ϵͳ����
*����ֵ��
*���У����ȷ������true
*���У��δͨ��������false
*������str�������ַ���
/********************************** zmx 2005.10.06*************************************/
function checkAfterDate(str) {
	str = convDate(str, "/");//����convDate������ʽ������yyyymmdd
	if (str.length == 6)  str += "01";
	if (str <= getSysDate())  return false;//����getSysDate()��ȡϵͳ����
	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*У���Ƿ����ϵͳ����
*����ֵ��
*���У����ȷ������true
*���У��δͨ��������false
*������str�������ַ���
/********************************** zmx 2005.10.06*************************************/
function checkIsToday(str) {
	str = convDate(str, "/");//����convDate������ʽ������yyyymmdd
	if( str.length == 6 )  str += "01";
	if( str == getSysDate() ) return true;//����getSysDate()��ȡϵͳ����
	return false;
}

/********************************** zmx 2005.10.06*************************************/
/*У���Ƿ�С��ϵͳ����
*����ֵ��
*���У����ȷ������true
*���У��δͨ��������false
*������str�������ַ���
/********************************** zmx 2005.10.06*************************************/
function checkBeforeDate(str) {
	str = convDate(str, "/");//����convDate������ʽ������yyyymmdd
	if (str.length == 6)  str += "01";
	if (str >= getSysDate())  return false;//����getSysDate()��ȡϵͳ����
	return true;
}


/********************************** zmx 2005.10.06*************************************/
/*ƴ�Ӹ�ʽ�����ڣ������ꡢ�¡���
*����ֵ��
*����ƴ�Ӻ�����
/********************************** zmx 2005.10.06*************************************/
function formatDate(sYear, sMonth, sDay) {
	if (sMonth.length == 1)  sMonth = "0" + sMonth;
	if (sDay.length == 1)  sDay = "0" + sDay;
	return sYear + sMonth + sDay;
}

/********************************** zmx 2005.10.06*************************************/
/*У������
*����ֵ��
*���У��ͨ����       ����true
*����������꣬       ����false    
/********************************** zmx 2005.10.06*************************************/
function checkLeapYear(year) {
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))  return true;
	return false;
}

/********************************** zmx 2005.10.06*************************************/
/*�趨���ڸ�ʽ��������ʽ,��yyyymmdd
*����ֵ��
*���ظ�ʽ���������
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
/*�趨���ڸ�ʽ����step��ʽ��-��\������yyyy-mm-dd
*����ֵ��
*���ظ�ʽ���������
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
/*У�������Ƿ���ȷ,����Ĳ���Ϊ8λyyyymmdd
*����ֵ��
*����ִ�Ϊ�����ͣ�У��ͨ����       ����true
*������ڲ��Ϸ���                   ����false    
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
	if (!checkLeapYear(year) && (month == 2) && (day == 29)) return false;//����checkLeapYear����У���Ƿ�����
	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*У�������Ƿ���ȷ,����Ĳ���Ϊ10λyyyy-mm-dd
*����ֵ��
*����ִ�Ϊ�����ͣ�У��ͨ����       ����true
*������ڲ��Ϸ���                   ����false    
*������obj��ҳ�����msg:�ֶ����ƣ�str:����������ֵ
/********************************** zmx 2005.10.06*************************************/
function checkDate(obj,msg,str){
	if(str == "") return true;//���Ϊ�գ���ͨ��У��
	var pattern = /^((\d{4})|(\d{2}))-(\d{1,2})-(\d{1,2})$/g;		
	if(!pattern.test(str)) {//У���ʽ�������ʽ��ƥ�䣬����
		alert(msg+"��yyyy-mm-dd��ʽ��ƥ��");
		obj.focus();
		return false;
	}
	var arrDate = str.split("-");	
	if(parseInt(arrDate[0]) < 100)	arrDate[0] = 2000 + parseInt(arrDate[0]) + "";//֧�����ֻ������λ����
	//���Ƿ���1900-1-1��2099-12-31֮��
	var numDate = parseInt(arrDate[0]+((parseInt(arrDate[1])<10)?("0"+parseInt(arrDate[1])):arrDate[1])+""+((parseInt(arrDate[2])<10)?("0"+parseInt(arrDate[2])):arrDate[2])+"");				       				 
	if(!((numDate)>=19000101&&(numDate)<=20991231)) {
		alert(msg+"����1900-01-01��2099-12-31�Ľ���");
		obj.focus;
		return false;	
	}
	if(!CheckDateTime(str+" 00:00:00")){
		alert(msg+"���Ϸ�");
		obj.focus();
		return false;
	}

}
//��������CheckDateTime 
//���ܽ��ܣ�����Ƿ�Ϊ����ʱ�� 
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
/*У���������ڵ��Ⱥ�
*����ֵ��
*�����һ��ֵΪ�գ����ý��бȽ�            ����true
*���������һ�����ڳ��Ȳ�����8,��,          ����true
*�����ʼ�������ڵ�����ֹ���ڣ�У��ͨ����   ����true
*�����ʼ����������ֹ���ڣ�                 ����false    
/********************************** zmx 2005.10.06*************************************/
function compareRq(fromDate,toDate) {
	if(fromDate == "") return true;//���Ϊ�գ���ͨ��У��
	if(toDate == "") return true;//���Ϊ�գ���ͨ��У��
	if( checkRq(fromDate) == false ) return false;//����checkRq()�ж����������Ƿ���ȷ
	if( checkRq(toDate) == false ) return false;//����checkRq()�ж����������Ƿ���ȷ
	fromDate = convDate(fromDate, "/");//����convDate()��ʽ������yyyymmdd
	toDate = convDate(toDate, "/");//����convDate()��ʽ������yyyymmdd
	if ((fromDate.length != 8) || !checkNumnum(fromDate) || (toDate.length != 8) || !checkNumnum(toDate)) return false;//����checkNumber()У�������Ƿ�Ϊ����
	if(fromDate <= toDate ){
		return true;
	}else{
		return false;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*У���������ڵ��Ⱥ�
*����ֵ��
*�����һ��ֵΪ�գ����ý��бȽ�            ����true
*�����ʼ�������ڵ�����ֹ���ڣ�У��ͨ����   ����true
*�����ʼ����������ֹ���ڣ�                 ����false    
*������obj��ҳ�����msg:�ֶ����ƣ�fromDate��toDate:����������ֵ��step������Ƚϵķ���
/********************************** zmx 2005.10.06*************************************/
function compareDate(obj1,msg1,fromDate,obj2,msg2,toDate,step) {
	if(fromDate == "") return true;//���Ϊ�գ���ͨ��У��
	if(toDate == "") return true;//���Ϊ�գ���ͨ��У��
	if( checkDate(obj1,msg1,fromDate) == false ) return false;//����checkDate()�ж����������Ƿ���ȷ
	if( checkDate(obj2,msg2,toDate) == false ) return false;//����checkDate()�ж����������Ƿ���ȷ
	fromDate = formatDate(fromDate, "-");//����formatDate()��ʽ������yyyy-mm-dd
	toDate =  formatDate(toDate, "-");//����formatDate()��ʽ������yyy-ymm-dd
	if ((fromDate.length != 10) || (toDate.length != 10) ) {
		alert("���ڲ��Ϸ�");
		return false;//����checkNumber()У�������Ƿ�Ϊ����
	}
	switch(step){
		case "<=":
			if(fromDate <= toDate ){
				return true;
			}else{
				alert(msg2+"Ӧ����"+ msg1 );
				return false;
			}
			break;
		case "<":
			if(fromDate < toDate ){
				return true;
			}else{
				alert(msg2+"��ӦС��"+ msg1 );
				return false;
			}
			break;
		default:	
			break;
	}
}

/********************************** zmx 2005.10.06*************************************/
/*�Ƚ������ַ���
*����ֵ��
*���dateStr1����dateStr2������1
*���dateStr1����dateStr2������0
*���dateStr1С��dateStr2������-1
*���dateStr1���ڸ�ʽ���ԣ�ֱ�ӷ���dateStr1
/********************************** zmx 2005.10.06*************************************/
//�Ƚ������ַ���
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
/*�趨���ڸ�ʽ����ӡ�-�����ţ���yyyy-mm-dd,  
*����ֵ��
*���ظ�ʽ���������
/********************************** zmx 2005.10.06*************************************/
function changeAddDate(sDate, sSep) {
	var str_date = formatDate(sDate, sSep);
	return str_date.substring(0, 4) + sSep + str_date.substring(4, 6) + sSep + str_date.substring(6, 8);
}




/*****************��ֵ����************/

/********************************** zmx 2005.10.06*************************************/
/*У���ַ����Ƿ�Ϊ����
*����ֵ��
*����ִ�ȫ��Ϊ���֣�У��ͨ��������true
*���У�鲻ͨ����              ����false     
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
/*У��������Сֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ
*����ֵ��
*���Ϊ�գ�����У��ͨ����                ����true
*����������������ڵ��ڸ���ֵ��У��ͨ��������true
*���С�ڸ���ֵ��                        ����false              �ο���ʾ��Ϣ����������С�ڸ���ֵ��
/********************************** zmx 2005.10.06*************************************/
function checkIntMin(str,val){    
    if(str == "") return true;//���Ϊ�գ���ͨ��У��
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
/*У���������ֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ*
*����ֵ��
*���Ϊ�գ�����У��ͨ����                ����true
*�������������С�ڵ��ڸ���ֵ��У��ͨ��������true
*������ڸ���ֵ��                        ����false       �ο���ʾ��Ϣ������ֵ���ܴ��ڸ���ֵ��
/********************************** zmx 2005.10.06*************************************/
function checkIntMax(str,val){    
    if(str == "")  return true;//���Ϊ�գ���ͨ��У��
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
/*У�������Ƿ�Ϊ�Ǹ���
*str��ҪУ��Ĵ���*
*����ֵ��
*���Ϊ�գ�����У��ͨ��������true
*����Ǹ�����            ����true
*����Ǹ�����            ����false               �ο���ʾ��Ϣ������ֵ�����Ǹ�����
/********************************** zmx 2005.10.06*************************************/
function isNotNegativeInteger(str){
    if(str == "") return true;    //���Ϊ�գ���ͨ��У��
    if(checkNumnum(str) == true)    {
        if(parseInt(str,10) < 0)
            return false;
        else
            return true;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*У���Ƿ�Ϊ������
*����ֵ��
*���У��ͨ����                ����true
*���У�鲻ͨ����              ����false     
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
/*У���Ƿ�Ϊ�����ͣ�����Ϊ����
*����ֵ��
*���У��ͨ����                ����true
*���У�鲻ͨ����              ����false     
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
/*У�鸡������Сֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ*
*����ֵ��
*���Ϊ�գ�����У��ͨ����                ����true
*����������������ڵ��ڸ���ֵ��У��ͨ��������true
*���С�ڸ���ֵ��                        ����false              �ο���ʾ��Ϣ����������С�ڸ���ֵ��
/********************************** zmx 2005.10.06*************************************/
function checkDoubleMinValue(str,val){    
    if(str == "")        return true;//���Ϊ�գ���ͨ��У��
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
/*У�鸡�������ֵ
*str��ҪУ��Ĵ���  val���Ƚϵ�ֵ*
*����ֵ��
*���Ϊ�գ�����У��ͨ����                ����true
*�������������С�ڵ��ڸ���ֵ��У��ͨ��������true
*������ڸ���ֵ��                        ����false       �ο���ʾ��Ϣ������ֵ���ܴ��ڸ���ֵ��
/********************************** zmx 2005.10.06*************************************/
function checkDoubleMaxValue(str,val){    
    if(str == "")        return true;//���Ϊ�գ���ͨ��У��
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
/*У�鸡�����Ƿ�Ϊ�Ǹ���
*str��ҪУ��Ĵ���*
*����ֵ��
*���Ϊ�գ�����У��ͨ��������true
*����Ǹ�����            ����true
*����Ǹ�����            ����false               �ο���ʾ��Ϣ������ֵ�����Ǹ�����
/********************************** zmx 2005.10.06*************************************/
function isNotNegativeDouble(str){    
    if(str == "")        return true;//���Ϊ�գ���ͨ��У��
    if(checkFloat(str) == true)    {
        if(parseFloat(str) < 0)
            return false;
        else
            return true;
    }else
        return false;
}

/********************************** zmx 2005.10.06*************************************/
/*У��С��������λ��  ,����ֵ�ı߽�
*����ֵ��
*���У��ͨ����                ����"Check Success"
*���У�鲻ͨ����              ���ش�����ϢretMsg     
*������ str:У�����ݣ�precision:���峤�ȣ���ȥС��Ϊ�������ȣ�scale:С��λ����isNull:0X80��sItemName:�ֶ�����
/********************************** zmx 2005.10.06*************************************/
function checkFloat1(str, precision, scale, isNull,sItemName){
    var retMsg = MSG_CHECK_SUCCESS;
    var pointPos = str.indexOf(".");
    if(pointPos < 0){
		retMsg  = checkItem(str, 0, precision - scale, IS_NUM | isNull);//����checkItem()У����ֵ
		if(retMsg != MSG_CHECK_SUCCESS){
			alert(sItemName + retMsg);
			return false;
		}
    }else{
    	var integerPart = str.substring(0, pointPos);
        var decimalPart = str.substring(pointPos + 1, str.length);
        retMsg = checkItem(integerPart, 0, precision - scale, IS_NUM | isNull);//����checkItem()У����ֵ
    	if(retMsg == MSG_CHECK_SUCCESS){
    		retMsg = checkItem(decimalPart, 0, scale, IS_NUM | IS_NULL);//����checkItem()У����ֵ
    		if(retMsg != MSG_CHECK_SUCCESS){
    			retMsg = "��С������" + retMsg;    			
				alert(sItemName + retMsg);
				return false;
    		}
    	}else{
    		retMsg = "����������" + retMsg;
			alert(sItemName + retMsg);
			return false;
    	}
    }
   	return true;
}

/********************************** zmx 2005.10.06*************************************/
/*У�����������
*����ֵ��
*���У��ͨ����                ����MSG_CHECK_SUCCESS = "Check Success";
*���У�鲻ͨ����              ����  ������Ϣ     
*������ sCheck:У������ݣ�nMinLen:���峤�ȣ���ȥС��Ϊ�������Ȼ���С���ȣ�nMaxLen:С��λ������󳤶ȣ�chkFlg:����0X80�������־
/********************************** zmx 2005.10.06*************************************/
function checkItem(sCheck, nMinLen, nMaxLen, chkFlg) {
	var strLen = 0;
	if ((sCheck == null) || (sCheck == "")) return MSG_CHECK_SUCCESS;//���Ϊ�գ���ͨ��У�� 
	if ((nMinLen > 0) || (nMaxLen > 0)) {
		strLen = sumLen(sCheck);
		if (nMinLen > 0) {
			if (nMinLen == nMaxLen) {
				if (strLen != nMinLen) {
					if ((chkFlg & 0x08) == 0x08) {return "�ĳ��ȱ���"+ nMinLen + "�ֽ�";}else {return "�ĳ��ȱ���С��"+ nMinLen + "�ֽ�";}
				}
			}else if (strLen < nMinLen) {
				if ((chkFlg & 0x08) == 0x08) {return "��������";}else {return "���ڶ�С����С����Ϊ"+ nMinLen + "�ֽ�";}
			}
		}
		if (nMaxLen > 0) {	if (strLen > nMaxLen) {		return "��������󳤶�"+ nMaxLen + "�ֽ�";}	}
	}
	if ((chkFlg & 0x10) == 0x10) {		if (!checkASCII(sCheck))  return "����ȷ";	}
	if ((chkFlg & 0x08) == 0x08) {		if (!checkNumnum(sCheck))  return "��������Ŀ";	}
	if ((chkFlg & 0x04) == 0x04) {		if (!checkDate(sCheck))  return "��������Ŀ";	}
	if ((chkFlg & 0x02) == 0x02) {		if (!checkPhone(sCheck))  return "����ȷ";	}
	if ((chkFlg & 0x01) == 0x01) {		if (!checkEmail(sCheck))  return "����ȷ";	}
	return MSG_CHECK_SUCCESS;
}

/********************************** zmx 2005.10.06*************************************/
/*��������е��ַ���������ַ��򷵻�false
*����ֵ��
*���У��ͨ����                ����true
*���У�鲻ͨ����              ����false     
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



/*****************�ַ�����************/

/********************************** zmx 2005.10.06*************************************/
/*�����ַ������ܳ��ȣ�һ�����������ַ�
/********************************** zmx 2005.10.06*************************************/
function sumLen(str){
	return str.replace(/[^\x00-\xff]/g,"**").length;
}

/********************************** zmx 2005.10.06*************************************/
/*У���ַ����Ƿ�Ϊ����  ,�˷�����ʱ����ʹ
*����ֵ��
*���Ϊ�գ�����У��ͨ����           ����true
*����ִ�Ϊ���ģ�У��ͨ����         ����false
*����ִ�Ϊ�����ģ�             ����true    
/********************************** zmx 2005.10.06*************************************/
function checkIsChinese(obj,msg,str){   
    if (str == "")  return true; //���ֵΪ�գ�ͨ��У��
    var pattern = /^([\\u4E00-\\u9FA5]|[\\uFE30-\\uFFA0])*$/gi;
    if (pattern.test(str)){
        return true;
     }else{
     	alert(msg+"���к���1");
     	obj.focus();
        return false;
     }
}

/********************************** zmx 2005.10.06*************************************/
/*У���ַ����ַ������Ƿ��к���
*����ֵ��
*���У�鲻���У�                ����true
*���У�麬�У�              ����false     
/********************************** zmx 2005.10.06*************************************/
function checkASCII(obj,msg,sCheck) {	
	var str = escape(sCheck);
	var chkStr = "89abcdefABCDEF"
	var i = str.indexOf("%");
   	if ((appVer.charAt(0) == 'M') || (appVer > "N4.05")) {
		while ((i >= 0) && (i < str.length)) {
			if (str.charAt(i+1) == "u") {
				alert(msg+"���к���");
				obj.focus();
				return false;
			}
			i = str.indexOf("%", i+1);
		}
   	}else if (appVer.charAt(0) == 'N') {
		while ((i >= 0) && (i < str.length)) {
			if (chkStr.indexOf(str.charAt(i+1)) >= 0) {
				alert(msg+"���к���");
				obj.focus();
				return false;
			}
			i = str.indexOf("%", i+1);
		}
    }
    return true;
}

/********************************** zmx 2005.10.06*************************************/
/*У���ַ���������Խ�� 
*����ֵ��
*У��ͨ��,����true
*У��δͨ��,����false
*������str:У�����ݣ�scale:��󳤶ȣ�tag:0X10��msg:�ֶ�����;obj:����
/********************************** zmx 2005.10.06*************************************/
function checkMaxLen(obj,msg,str,scale,tag){
	if( str == null || str == "" ) return true;
    var retMsg = MSG_CHECK_SUCCESS;
	retMsg  = checkItem(str, 0, scale, tag);//����checkItem()У���ֽڳ���
	if(retMsg != MSG_CHECK_SUCCESS){
		alert(msg + retMsg);
		obj.focus();
		return false;
	}
	return true;
}
/********************************** zmx 2005.10.06*************************************/
/*ȥ���ַ����е�ָ���ַ�    
*����ֵ��
*���ش������ַ���
*������str���ַ�����c��Ҫȥ�����ַ�
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
/*�����ַ�
/********************************** zmx 2005.10.08*************************************/
function checkSpaceChar(c) {
	return ((c == ' ') || (c == '\t') || (c == '��'));
}

/********************************** zmx 2005.10.06*************************************/
/*�滻�ַ����е�ָ���ַ�    
*����ֵ��
*���ش������ַ���
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
/*�滻�ַ����еĶ��� 
*����ֵ��
*���ش������ַ���
/********************************** zmx 2005.10.06*************************************/
function replaceCommas(str) {
	if (str == "")  return str;
	str = replaceStr(str, "'", "'");
	str = replaceStr(str, '"', '"');
	return str;
}
/********************************** zmx 2005.10.06*************************************/
/*У�������������������
*����ֵ��
*���ͨ��������true
*���У��δͨ��������false
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
/*У��绰�����Ƿ���ȷ
*����ֵ��
*���У��δͨ��������false
*���У��ͨ��������true
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
/*У���ַ����Ƿ�Ϊemail��
*����ֵ��
*���Ϊ�գ�����У��ͨ����           ����true
*����ִ�Ϊemail�ͣ�У��ͨ����      ����true
*���email���Ϸ���                  ����false    �ο���ʾ��Ϣ��Email�ĸ�ʽ�����_��
/********************************** zmx 2005.10.06*************************************/
function checkEmail(str){ 
    var i;
    var len = str.length;
    if(str == "") return true; //���Ϊ�գ���ͨ��У�� 
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
/*У��IP��ַ��ʽ 
*������ip:ip��ֵַ
*����ֵ��
*���У��δͨ��������false
*���У��ͨ����������ȷip��ַ
/********************************** zmx 2005.10.06*************************************/
function checkip(ip){ 
	var scount=0; 
	var iplength = ip.length; 
	var Letters = "1234567890."; 
	for (i=0; i < ip.length; i++){ 
		var CheckChar = ip.charAt(i); 
		if (Letters.indexOf(CheckChar) == -1){ 
		    alert ("IP��ַ��ʽ����!!��ֻ���������ֺ͡�.��,��ʽΪXXX.XXX.XXX.XXX ���磺192.168.0.1");
	    	return false; 
		} 
	} 
	for (var i = 0;i<iplength;i++) 
		(ip.substr(i,1)==".")?scount++:scount; 
	if(scount!=3){ 
		alert ("IP��ַ��ʽ����!��ֻ���������ֺ͡�.��,��ʽΪXXX.XXX.XXX.XXX ���磺192.168.0.1"); 
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
		alert("���ֲ���Ϊ�գ���ʽΪXXX.XXX.XXX.XXX ���磺192.168.0.1"); 
		return false; 
	}
	if (str1 < 0 || str1 > 255 || str2 < 0 || str2 > 255 ||str3< 0 || str3 >255 ||str4< 0 || str4 >255){
		alert ("���ַ�ΧΪ0~255��"); 
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
/*����ҳ���ϵĿո�
*������oFrm:����Ҫ�����form
*��form�е�ֵȫ�����˵��ո�
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
/*ȥ���ո�
*������str:����Ĳ���ֵ
*���ع��˺�Ĳ���ֵ
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
	if (i==len) return ''; //ȫ�ǿո�        
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
/*����¼��У��
*������obj������Ķ�������setfocus�ã�msg:����������ʾ��Ϣ
*����ֵ��
*���Ϊ�գ�����false
*���У��ͨ��    ����true
/********************************** zmx 2005.10.05*************************************/
function checkIsNull(obj,msg){
	if (trimNull(obj.value) == ""){//����trimNull()���˿ո�
    	alert("������" + msg);
    	obj.focus();
    	return false;
  	}
  	return true;
}

/********************************** zmx 2005.10.05*************************************/
/*���֤��У��
*������obj������Ķ�������setfocus�ã�idcard:�������ֵ
*����ֵ��
*���Ϊ�գ�����false
*���У��δͨ��������false
*���У��ͨ��    ����true
/********************************** zmx 2005.10.05*************************************/
function checkIdcard(obj,idcard){
 	if(idcard == "") return true;//���Ϊ�գ���ͨ��У��
 	
	var Errors=new Array("��֤ͨ��!","���֤����λ������!","���֤����������ڳ�����Χ���зǷ��ַ�!","���֤����У�����!","���֤�����Ƿ�!");
	var area={11:"����",12:"���",13:"�ӱ�",14:"ɽ��",15:"���ɹ�",21:"����",22:"����",23:"������",31:"�Ϻ�",32:"����",33:"�㽭",34:"����",35:"����",36:"����",37:"ɽ��",41:"����",42:"����",43:"����",44:"�㶫",45:"����",46:"����",50:"����",51:"�Ĵ�",52:"����",53:"����",54:"����",61:"����",62:"����",63:"�ຣ",64:"����",65:"�½�",71:"̨��",81:"���",82:"����",91:"����"}
	var idcard,Y,JYM;
	var S,M;
	var idcard_array = new Array();
	idcard_array = idcard.split("");
	
	//��������
	if(area[parseInt(idcard.substr(0,2))]==null) {
		alert(Errors[4]);
		return false;
	}
	//��ݺ���λ������ʽ����
	switch(idcard.length){
		case 15:
			if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//���Գ������ڵĺϷ���
			} else {
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//���Գ������ڵĺϷ���
			}
			if(ereg.test(idcard)) {//У��ͨ��
				return true;				
			}else{
				alert(Errors[2]);
				return false;
			}		
			break;
		case 18://18λ��ݺ�����   //�������ڵĺϷ��Լ�� 
			//��������:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
			//ƽ������:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
			
			if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//����������ڵĺϷ���������ʽ
			} else {
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//ƽ��������ڵĺϷ���������ʽ
			}
			
			if(ereg.test(idcard)){//���Գ������ڵĺϷ���
				//����У��λ
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
				M = JYM.substr(Y,1);//�ж�У��λ
				if(M == idcard_array[17]) {//���ID��У��λͨ��
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
/*��15�����֤����Ϊ18λ
*������obj������Ķ�������setfocus�ã�idcard:�������ֵ
*����ֵ��
*���Ϊ�գ�����false
*���У��δͨ��������false
*���У��ͨ��    ����18λ���֤��     
/********************************** zmx 2005.10.05*************************************/
function ID15T18(obj,idcard){
	var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
	var nTemp = 0, i;
 	if (checkIsNull(obj, "���֤��") == false) return false;//����checkIsnul()�ж��Ƿ�Ϊ��
    if (checkIdcard(obj,idcard)== false) return false;//����checkIdcard()�ж������Ƿ���ȷ
	if(idcard.length==15){
		idcard = idcard.substr(0,6) + '19' + idcard.substr(6,idcard.length-6);
		for(i = 0; i < idcard.length; i ++){
			nTemp += idcard.substr(i, 1) * arrInt[i];
 		}
 		idcard += arrCh[nTemp % 11]; 
 		return idcard;
 	}else{
    	alert("���֤���Ѿ�Ϊ18λ");
   		return false;
    } 
} 






/*****************�ļ�����************/

/********************************** zmx 2005.10.06*************************************/
/*���˵��ļ�·����ȡ���ļ���
*������fullpath:�����ļ�·��
*����ֵ��
*�����ļ���
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
/* �õ��ļ��ĺ�׺��
* oFileΪfile�ؼ�����
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
