//获取元素属性
function getStyle(obj,attr){
	if(!!obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
//根据className获取元素 兼容低版本ie
function getByClass(oParent,sClass){
	var aEle    = oParent.getElementsByTagName('*');
	var aResult = [];
	for (var i = 0; i < aEle.length; i++) {
		if((' '+aEle[i].className+' ').indexOf(' '+sClass+' ') !== -1){
			aResult.push(aEle[i]);
		}
	};
	return aResult;
}
//任意物体移动框架
function move(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer     = setInterval(function(){
		var bStop = true;
		for (var attr in json){
			var cur   = 0; //存储元素运动原属性
			if(attr =='opacity'){
				cur   = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				cur   = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-cur)/6;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(json[attr] !== cur){
				bStop = false;
			}	
			if(attr == 'opacity'){
				obj.style.filter  = 'alpha(opacity'+(cur+speed)+')';
				obj.style.opacity = (cur+speed)/100;
			}else{
				obj.style[attr]   = cur+speed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(!!fnEnd){
				fnEnd();
			}
		}
	},30);
}
