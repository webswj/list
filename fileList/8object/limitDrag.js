function limitDrag(id){
	Drag.call(this,id);
}
for(var a in Drag.prototype){
	limitDrag.prototype[a] = Drag.prototype[a];
}

limitDrag.prototype.mousemove = function(ev){
	var ev = ev||event;
	var l = ev.clientX - this.posx;
	var t = ev.clientY - this.posy;
	if(l<0){
		l=0;
	}else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
		l = document.documentElement.clientWidth-this.oDiv.offsetWidth; 
	}

	if(t<0){
		t=0;
	}else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
		t=document.documentElement.clientHeight-this.oDiv.offsetHeight; 
	}
	this.oDiv.style.left = l + 'px';
	this.oDiv.style.top  = t + 'px';		
};