function check(listform,checkSign){
	with(listform){
	for(var i=0;i<length;i++){
		if(elements[i].type=="checkbox"){
			elements[i].checked=checkSign.checked;
		}
	}
	}
}

function  hasChecked(listform){
	var rtn = 0
	with(listform){
	for(var i=0;i<length;i++){
		if((elements[i].type=="checkbox"))		
			if(elements[i].checked==true){rtn = rtn +1;}
	}
	}
	if (rtn>0)
		return true;
	else
		return false;
}