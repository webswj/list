
function getByClass(parent,clazz){
	var lists  = parent.getElementsByTagName('*'),result = [];
		for(var i=0;i< lists.length;i++){
			if((' '+lists[i].className+' ').indexOf(' '+clazz+' ') != -1){
          		result.push(lists[i]);
        	}
		}
	return result;
}
window.onload = function(){
	var oDiv = document.getElementById('div1');
	var aLi = getByClass(oDiv,"u_click");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			var oUl = getByClass(oDiv,"u_list")[this.index];
			if(oUl.style.display === "none"){
				oUl.style.display = "block";
			}else{
				oUl.style.display = "none";
			}
		}	
	}
};
