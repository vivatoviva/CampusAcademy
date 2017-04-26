//xuyanxu
window.onload=function()
{
	mv.app.toTip();
	mv.app.toBanner();
};

var mv ={};//命名空间

mv.tools={};//

mv.ui={};
mv.ui.textChange=function(obj,str)
{
	obj.onfocus=function()
	{
		if(this.value==str)
		{
		this.value='';
		}
	};
	
	obj.onblur=function()
	{
		if(this.value=='')
		{
			this.value=str;
		}
	}
};

mv.ui.fadeIn= function(obj)//淡入
{
	var value=0;
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var ispeed=5;
		if(value==100){
			clearInterval(obj.timer)
		}
		else{
			value+=ispeed;
			obj.style.opacity=value/100;
			obj.style.filter='alpha(opacity='+value+')';
		}
	},30)
};
mv.ui.fadeout =function(obj)//淡出
{
	var value=100;
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var ispeed=-5;
		if(value==0){
			clearInterval(obj.timer)
		}
		else{
			value+=ispeed;
			obj.style.opacity=value/100;
			obj.style.filter='alpha(opacity='+value+')';
		}
	},30)
};
mv.app={};

mv.app.toTip=function()
{
	var oText1=document.getElementById('text1');
	var oText2=document.getElementById('text2');
	
	mv.ui.textChange(oText1,'Search website');
	mv.ui.textChange(oText2,'Search website');
};


mv.app.toBanner=function()
{	
var oDd=document.getElementById(ad);
var aLi= oDd.getElementsByTagName('liss');
	var aLi= oDd.getElementsByTagName('li');
	var iNow=0;
	
	var timer=setInterval(auto,3000);
	
	function auto()
	{
		if(iNow==aLi.length-1)
		{
			iNow=0;
		}
		else
		{
			iNow++;
		}
		
		for (var i = 0; aLi.length; i++) 
		{
			mv.ui.fadeout(aLi[i]);
		}
		mv.ui.fadeIn(aLi[iNow]);
		
	}
};
