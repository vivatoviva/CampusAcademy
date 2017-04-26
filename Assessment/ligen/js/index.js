/*
* @Author: Marte
* @Date:   2017-04-24 21:21:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-25 21:34:34
*/

   window.onload = function (){
        //滚动实现
        (function(){
           var box = document.getElementsByClassName("box")[0],
        div = box.getElementsByTagName("div"),
        loop = document.getElementsByClassName("loop")[0],
        timer = null,
        index = i =0;
    var btn1 = document.createElement("a"),
        btn2 = document.createElement("a");
        btn1.className = "btn1";
        btn2.className = "btn2";
        loop.appendChild(btn1);
        loop.appendChild(btn2);
        index=0;
        btn1.onclick = function(){
            if(index==-div.length+3){
                index=0
            }else {
                index--;
            }
            console.log(index);
           starmove(index*div[0].offsetWidth);
        }
        btn2.onclick = function(){
            if(index==0){
                index=div.length -7;
            }else {
                index++;
            }
            console.log(index);
            starmove(index*div[0].offsetWidth);
        }
        function starmove(iTarget){
                clearInterval(timer);
                timer = setInterval(function(){
                    move(iTarget);
                },20);
            }
        function move(iTarget){
            var speed = (iTarget - box.offsetLeft) / 10;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(box.offsetLeft == iTarget){
                clearInterval(timer);
            }else {
                box.style.left = box.offsetLeft + speed + "px";
            }
        }
        })();
        // //下拉菜单实现（逻辑错误）
        // (function(){
        //     var sec = document.getElementsByTagName("select");
        // var btn = document.getElementsByClassName("btn");
        //      btn[0].onclick = function(){
        //         sec[0].onclick;
        //      }
        //  })();
         //siderbar第3列变红 每一列加粗
         (function(){
            var sidebar = document.getElementsByClassName("sidebar")[0],
               lis = sidebar.getElementsByTagName("li");

               for(var i= 0;i<lis.length;i++){
                lis[i].innerHTML = "<b>" + lis[i].innerHTML + "</b>";
                //lis[i].getElementsByTagName("a")[0].style.color = "#434343";
               }
               lis[1].getElementsByTagName("a")[0].style.color = "red";
    })();
    //nav 按钮问题解决
     (function(){
        var nav = document.getElementsByTagName("nav")[0];
         var lis = nav.getElementsByTagName("li");
         var index=i=0;
         cutover();
        function cutover(){
                for(i=0;i<lis.length;i++){
                    lis[i].className = "";
                lis[index].className = "current";}
            }
    for(i = 0;i<lis.length;i++){
        !function(i){
             lis[i].onclick = function(){
                index=i;
                lis[index].className = "current";
                cutover();
             }
        }(i);
    }
   })();
 }
