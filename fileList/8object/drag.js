function Drag(id){
	this.oDiv = document.getElementById(id);
	this.posx = 0;
	this.posy = 0;
	var _this = this;
	this.oDiv.onmousedown = function(ev){
		_this.mousedown(ev);
		return false;
	};
}		
Drag.prototype.mousedown = function(ev){
	var ev    = ev||event;
	this.posx  = ev.clientX - this.oDiv.offsetLeft;
	this.posy  = ev.clientY - this.oDiv.offsetTop;
	var _this = this;			
	document.onmousemove = function(ev){
		_this.mousemove(ev);
	}; 
	document.onmouseup = function(){
		_this.mouseup();
	};
};

Drag.prototype.mousemove = function(ev){
	var ev = ev||event;
	this.oDiv.style.left = ev.clientX - this.posx + 'px';
	this.oDiv.style.top  = ev.clientY - this.posy + 'px';				
};

Drag.prototype.mouseup   = function(){
	document.onmousemove = null;
	document.onmouseup   = null;
};