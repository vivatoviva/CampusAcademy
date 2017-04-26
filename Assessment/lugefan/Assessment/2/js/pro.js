window.onload = function(){
	var next = document.getElementById('next');
	var prev = document.getElementById("prev");
	var pricelist = document.getElementById("pricelist");
	var oul1 = document.getElementById("ul1");
	var aLi = oul1.getElementsByTagName("li");
	var mydiv = document.getElementById('tab-list');
	var mytable = mydiv.getElementsByTagName("table");

	 for(var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function() {
                for(var a = 0; a < aLi.length; a++) {
                    aLi[a].className = "";
                    this.className = "active";
                }
                this.className = "active";
                for(var k = 0; k<mytable.length; k++){
                	mytable[k].className = "hide";
                }
                mytable[this.index].className = "show";
            }
        }

// 价格表切换
	next.onclick = function(){
		pricelist.style.left = parseInt(pricelist.style.left) - 115 + "px";
		if(parseInt(pricelist.style.left) == -1265){
			pricelist.style.left = -115 + "px";
		}
	}
	prev.onclick = function(){
		pricelist.style.left = parseInt(pricelist.style.left) + 115 + "px";
		if(parseInt(pricelist.style.left) == 0){
			pricelist.style.left = -1150 + "px";
		}
	}
}