Validator = {
    Require : /.+/,
    Email : /^([\w-]+\.)*?[\w-]+@[\w-]+\.([\w-]+\.)*?[\w]+$/,
    PhoneOrMobile : /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/,

    Phone : /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,
    Mobile : /^((1[3-9][0-9])\d{8})|(0\d{9}|9\d{8})$/,
    Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,    
    IdCard : "this.IsIdCard(value)",
    Currency : /^\d+(\.\d+)?$/,
    Number : /^\d+$/, 
    Number2 : /^\d{1,2}$/,
    Zip : /^[1-9]\d{5}$/,
    QQ : /^[1-9]\d{4,8}$/,
    Integer : /^[-\+]?\d+$/,
    Double : /^[-\+]?\d+(\.\d+)?$/,
    English : /^[A-Za-z]+$/,
    Chinese :  /^[\u0391-\uFFE5]+$/,
    Username : /^[a-z]\w{3,}$/i,
    Notempty: /^[^ ]|\w+[\w\s]+\w+$/,
    UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,  
    IsSafe : function(str) {
        return !this.UnSafe.test(str);
    },
    SafeString : "this.IsSafe(value)",
    Filter : "this.DoFilter(value, getAttribute('accept'))",
//	Limit : "this.limit(value.length,getAttribute('min'),  getAttribute('max'))",
    Limit : "this.limitFbms(name,value,getAttribute('min'),  getAttribute('max'))",
    LimitB : "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
    LimitC : "this.LimitByteLenC(name,value,getAttribute('min'),  getAttribute('max'))",
    LimitD : "this.LimitByteLenD(name,value,getAttribute('min'))",
    Date : "this.IsDate(value, getAttribute('format'), getAttribute('max'))",
    Repeat : "value == document.getElementsByName(getAttribute('to'))[0].value",
    Range : "getAttribute('min') < (value|0) && (getAttribute('max')!=undefined&&(value|0) < getAttribute('max'))",
    RangeOfInt : "isInt(value) && (getAttribute('min') < (value|0) && (getAttribute('max')!=undefined&&(value|0) < getAttribute('max')))",
    Compare : "this.compare(value,getAttribute('operator'),getAttribute('to'))",
    Custom : "this.Exec(value, getAttribute('regexp'), getAttribute('tail'))",
    Group : "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
    ErrorItem : [document.forms[0]],
    ErrorMessage : [""],//以下原因导致提交失败：\t\t\t\t
    ErrorMessageViewTitle : [""],//校验未完成，请检柄1�7.
    Validate : function(theForm, mode) {
        //alert('hpqrwpwq begin in validate');
        var obj = theForm || event.srcElement;
        var count = obj.elements.length;
        this.ErrorMessage.length = 1;
        this.ErrorItem.length = 1;
        this.ErrorItem[0] = obj;
        for (var i = 0; i < count; i++) {
            with (obj.elements[i]) {
                try{
                    var _dataType = getAttribute("dataType");
                    if (typeof(_dataType) == "object" || typeof(this[_dataType]) == "undefined")  continue;
                    this.ClearState(obj.elements[i]);
                    if (getAttribute("require") == "false" && value == "") continue;
                    switch (_dataType) {
                        case "IdCard" :
                        case "Date" :
                        case "Repeat" :
                        case "Range" :
                        case "RangeOfInt" :
                        case "Compare" :
                        case "Custom" :
                        case "Group" :
                        case "Limit" :
                        case "LimitB" :
                        case "LimitC" :
                        case "LimitD" :
                        case "SafeString" :
                        case "Filter" :
                            if (!eval(this[_dataType])) {
                                this.AddError(i, getAttribute("msg"));
                            }
                            break;
                        default :
                            if (!this[_dataType].test(this.trim(value))) {
                                this.AddError(i, getAttribute("msg"));
                            }
                            break;
                    }
                }catch(e){
                    //alert('horhwqo vaidator error 1111')
                    return false
                }
            }
        }
        try{
            //alert('hpowrpwq this.ErrorMessage.length')
            if (this.ErrorMessage.length > 1) {
                mode = mode || 1;
                var errCount = this.ErrorItem.length;
                switch (mode) {
                    case 2 :
                        //alert('jowroqw mode==2')
                        for (var i = 1; i < errCount; i++)
                            this.ErrorItem[i].style.color = "red";
                    case 1 :
                        try{
                            //alert('oqwrjpw mode==1')
                            alert(this.ErrorMessage.join("\n"));
                            if (this.ErrorItem[1]) {
                                this.ErrorItem[1].focus();
                            }
                            //alert('oewrow before mode==1 break')
                            break;
                        }catch(e){
                            //alert('oewhrhoqw mode==1 catch error')
                            break
                        }
                    case 3 :
                        ////alert('howrqwo mode==3')
                        for (var i = 1; i < errCount; i++) {
                            try {
                                var span = document.createElement("SPAN");
                                span.id = "__ErrorMessagePanel";
                                span.style.color = "red";
                                this.ErrorItem[i].parentNode.appendChild(span);
                                span.innerHTML = '<br>'+this.ErrorMessage[i].replace(/\d+:/, "*");
                               
                            }
                            catch(e) {
                                alert(e.description);
                            }
                        }
                        if (this.ErrorItem[1]) {
                            this.ErrorItem[1].focus();
                        }
                        break;
                    default :
                        //alert('jorqwpo default handle')
                        alert(this.ErrorMessage.join("\n"));
                        break;
                }
                //alert('oropwqo switch return false')
                return false;
            }
        }catch(e){
            //alert('johqprwrq validate error 2222')
            return false
        }
        //alert('horwqo finally return true')
        return true;
    },
    replaceAll:function (streng, soeg, erstat)
    {
        var st = streng;
        if (soeg.length == 0)
            return st;
        var idx = st.indexOf(soeg);
        while (idx >= 0)
        {
            st = st.substring(0, idx) + erstat + st.substr(idx + soeg.length);
            idx = st.indexOf(soeg);
        }
        return st;
    },
    string2money:function (str)
    {
        var amount = 0;

        // 仅将合法的字符串转换为金预1�7
        if (!isNaN(str) && (str != ""))  amount = parseFloat(str);
        // 处理小数后的位数
        var isPositive = true;
        if (amount < 0) {
            isPositive = false;
            amount = -amount;
        }
        amount = parseInt("" + (amount * 100 + 0.5)) / 100;
        if (!isPositive)  amount = -amount;
        return amount;
    },
    trim:function (str)
    {
        if (str == null)  return "";
        for (var index = 0; index < str.length; index++) if (str.charAt(index) != ' ')  break;
        var target = str.substring(index);
        if (target.length > 0) {
            for (var index = target.length - 1; index >= 0; index--) if (target.charAt(index) != ' ')  break;
            target = target.substring(0, index + 1);
        }
        return target;
    },
/* 取得字符串的字节长度 */
    strlen:function (str)
    {
        var i;
        var len;

        len = 0;
        for (i = 0; i < str.length; i++)
        {
            if (str.charCodeAt(i) > 255) len += 2; else len++;
        }
        return len;
    },
    LimitByteLenC: function(name, str, min, max) {
        str = this.trim(str);
        //取字节长
        var len = this.strlen(str);
        min = min || 0;
        max = max || Number.MAX_VALUE;
        return min <= len && len <= max;
    },
    LimitByteLenD: function(name, str, min) {
        str = this.trim(str);
        //取字节长
        var len = this.strlen(str);
        min = min || 0;
        return min <= len;
    },
    limitFbms: function(name, str, min, max) {
        str = this.trim(str);
        var len = str.length;
        min = min || 0;
        max = max || Number.MAX_VALUE;
        return min <= len && len <= max;
    },
    limit : function(len, min, max) {
        min = min || 0;
        max = max || Number.MAX_VALUE;
        return min <= len && len <= max;
    },
    LenB : function(str) {
        return str.replace(/[^\x00-\xff]/g, "**").length;
    },
    ClearState : function(elem) {
        with (elem) {
            if (style.color == "red")
                style.color = "";
            var lastNode = parentNode.childNodes[parentNode.childNodes.length - 1];
            if (lastNode.id == "__ErrorMessagePanel")
                parentNode.removeChild(lastNode);
        }
    },
    AddError : function(index, str) {
        this.ErrorItem[this.ErrorItem.length] = this.ErrorItem[0].elements[index];
        this.ErrorMessage[this.ErrorMessage.length] = this.ErrorMessage.length + ":" + str;
    },
    Exec : function(op, reg, tail) {
        if (tail == "2") {
            var value = op.split(".");
            var tailString = op.substring(value[0].length + 1);
            //            alert("tailString = " + tailString);
            if (tailString != "" && tailString != null) {
                if (tailString.length > 2) {
                    //                    alert("小数点后保留2位数字！");
                    return false;
                }
            }
        }
        return new RegExp(reg, "g").test(op);
    },
    compare : function(op1, operator, op2) {
        op1 = string2money(op1);
        op2 = string2money(op2);

        switch (operator) {
            case "NotEqual":
                return (op1 != op2);
            case "GreaterThan":
                return (op1 > op2);
            case "GreaterThanEqual":
                return (op1 >= op2);
            case "LessThan":
                return (op1 < op2);
            case "LessThanEqual":
                return (op1 <= op2);
            default:
                return (op1 == op2);
        }
    },
    MustChecked : function(name, min, max) {
        var groups = document.getElementsByName(name);
        var hasChecked = 0;
        min = min || 1;
        max = max || groups.length;
        for (var i = groups.length - 1; i >= 0; i--)
            if (groups[i].checked) hasChecked++;
        return min <= hasChecked && hasChecked <= max;
    },
    DoFilter : function(input, filter) {
        return new RegExp("^.+\.(?=EXT)(EXT)$".replace(/EXT/g, filter.split(/\s*,\s*/).join("|")), "gi").test(input);
    },
    IsIdCard : function(StrNo){
    	StrNo = StrNo.toUpperCase();
    	if((/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(StrNo))) return true;
    	return false;
    },
    /*
    IsIdCard : function(number) {
        var date, Ai;
        var verify = "10x98765432";
        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var area = ['','','','','','','','','','','','北京','天津','河北','山西','内蒙叄1�7','','','','','','辽宁','吉林','黑龙汄1�7','','','','','','','','上海','江苏','浙江','安微','福建','江西','山东','','','','河南','湖北','湖南','广东','广西','海南','','','','重庆','四川','贵州','云南','西藏','','','','','','','陕西','甘肃','青海','宁夏','新疆','','','','','','台湾','','','','','','','','','','香港','澳门','','','','','','','','','国外'];
        //		var re = number.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d]))|((\d{4})(\d{2})(\d{2})(\d{3}[X\d])))$/i);
        var re = number.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d]))|((\d{4})(\d{2})(\d{2})(\d{3}[X\d])))$/i);

        if (re == null) return false;
        if (re[1] >= area.length || area[re[1]] == "") return false;
        if (re[2].length == 12) {
            Ai = number.substr(0, 17);
            date = [re[9], re[10], re[11]].join("-");
        }
        else {
            Ai = number.substr(0, 6) + "19" + number.substr(6);
            date = ["19" + re[4], re[5], re[6]].join("-");
        }
        if (!this.IsDate(date, "yyyy-mm-dd")) return false;
        var sum = 0;
        for (var i = 0; i <= 16; i++) {
            sum += Ai.charAt(i) * Wi[i];
        }
        Ai += verify.charAt(sum % 11);
        //		return (number.length == 15 || number.length == 18 && number == Ai);
        return (number.length == 15 || number.length == 18 && (number == Ai || number.toUpperCase() == Ai || number.toLowerCase() == Ai));

    },*/
    IsDate : function(op, formatString, max) {
        var m, year, month, day,hour;
        switch (formatString) {
            case "yyyy-mm-dd" :
                m = op.match(new RegExp("^((\\d{4})|(\\d{2}))([-./])(\\d{1,2})\\4(\\d{1,2})$"));
                if (m == null) return false;
                day = m[6];
                month = m[5] * 1;
                year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
                break;
            //        yyyymmddhh added by chenzhaohua
            case "yyyymmddhh":
                m = op.match(new RegExp("^(\\d{4})(\\d{2})(\\d{2})(\\d{2})$"));
                if (m == null) return false;
                hour = parseInt(m[4]);
                if (hour < 0 || hour > 24)return false;
                day = m[3];
                month = m[2] * 1;
                year = parseInt(m[1]);
                break;
            case "yyyymmdd" :
                m = op.match(new RegExp("^(\\d{4})(\\d{2})(\\d{2})$"));
                if (m == null) return false;
                day = m[3];
                month = m[2] * 1;
                year = parseInt(m[1]);
                break;
            case "yyyymm" :
                var nop = op.substring(0, 4) + "-" + op.substring(4) + "-01";
                m = nop.match(new RegExp("^((\\d{4})|(\\d{2}))([-./])(\\d{1,2})\\4(\\d{1,2})$"));
                if (m == null) return false;
                day = m[6];
                month = m[5] * 1;
                year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
                break;
            case "dd-mm-yyyy" :
                m = op.match(new RegExp("^(\\d{1,2})([-./])(\\d{1,2})\\2((\\d{4})|(\\d{2}))$"));
                if (m == null) return false;
                day = m[1];
                month = m[3] * 1;
                year = (m[5].length == 4) ? m[5] : GetFullYear(parseInt(m[6], 10));
                break;
            case "yyyy-mm-dd hh:mm:ss" :
                m = op.match(new RegExp("^(\\d{4})(-)(\\d{2})(-)(\\d{2})( )(\\d{2})(:)(\\d{2})(:)(\\d{2})$"));
                if (m == null) return false;
                day = m[5];
                month = m[3];
                year = m[1];
                break;
            default :
                break;
        }
        if (!parseInt(month)) return false;
        month = month == 0 ?12:month;
        var date = new Date(year, month - 1, day);
        // added by zousl 20061218
        if (max == "now") {
            //            var today = new Date();
            //            var now = to8date(today.getFullYear(), today.getMonth() + 1, today.getDate());
            //            var fillDate = to8date(date.getFullYear(), date.getMonth() + 1, date.getDate());
            //            if (fillDate != undefined && fillDate != "" && fillDate != null) {
            //                if (parseFloat(fillDate) > parseFloat(now)) {
            //                    return false;
            //                }
            //            }

              //只能处理年月旄1�7
            var currentTime = currDatetime;
            //全局变量currDatetime
            var fillDate = to8date(date.getFullYear(), date.getMonth() + 1, date.getDate());
            if (fillDate != undefined && fillDate != "" && fillDate != null) {
                if (parseFloat(fillDate) > parseFloat(currentTime.substr(0, 10).replace("-", "").replace("-", ""))) {
                    return false;
                }
            }
        }
        return (typeof(date) == "object" && year == date.getFullYear() && month == (date.getMonth() + 1) && day == date.getDate());
        function GetFullYear(y) {
            return ((y < 30 ? "20" : "19") + y) | 0;
        }
        function to8date(year, month, date) {
            if (parseFloat(month) < 10) {
                month = "0" + month;
            }
            if (parseFloat(date) < 10) {
                date = "0" + date;
            }
            var resultDate = "" + year + month + date;
            return resultDate;
        }
    }
}


//ɾ���������˵Ŀո� 
function myTrim(str){ 
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
} 


   //�ǿղ������ͺ�0
function isInt(value){
 	value=myTrim(value);
 		
 	var pattern = /(^[1-9]{1}\d*$)|(^0$)/;
 	alert(pattern.test(value));
  	return pattern.test(value);
 }