window.onload=function(){
mv.app.totip();
};

var mv={};
mv.tools={};
mv.ui={};
mv.ui.textchange=function(obj,str){
     obj.onfocus=function(){
     	if(this.value==str){
     		this.value='';
     	}
     }
      obj.onblur=function(){
     	if(this.value==''){
     		this.value=str;
     	}
     }
     
};
mv.app={};


mv.app.totip=function(){
    var otext=document.getElementById('text')
    mv.ui.textchange(otext,'Serch Websitee')
 };