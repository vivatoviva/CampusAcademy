
$(function(){
   $(".ce > li > a").click(function(){

	     $(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
		 $(this).parents().siblings().find(".er").hide(300);
		 $(this).siblings(".er").toggle(300);
		 $(this).parents().siblings().find(".er > li > .thr").hide().parents().siblings().find(".thr_nr").hide();
		
	})
	
    $(".er > li > a").click(function(){
        $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".thr").hide(300);	
	    $(this).siblings(".thr").toggle(300);	
	})


$(".Div1_main div span").mouseover(function(){
		$(this).addClass("Div1_main_span1").siblings("span").removeClass("Div1_main_span1");
	}).mouseout(function(){
		$(this).removeClass("Div1_main_span1").siblings("span");
	})

             
})
        
    	var	index = 0 ;
		Swidth = 498;
		 timer = null ;	

		function NextPage()
		{	
			if (index>2) {
				index = 0 ;
			}
			$(".Div1_main").stop(true, false).animate({left: -2*index*Swidth+"px"},1000)		
		}
		
		function PrevPage()
		{	
			if(index<0)
			{
				index = 2 ;
			}
			$(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},1000)		
		}
		
		$(".Div1_title span a").each(function(a){
            $(this).mouseover(function(){
				index = a ;
				NextPage();
			});
        });
		//下一页
		$(".Div1_next img").click(function(){
			 index++ ;
			 NextPage();
		});
		//上一页
		$(".Div1_prev img").click(function(){
			 index-- ;
			 PrevPage();
		});
		//自动滚动
		var timer = setInterval(function(){
				index++ ;			
				NextPage();

			},4000);
			
		$(".Div1_next img , .Div1_main , .Div1_prev img ").mouseover(function(){
			clearInterval(timer);
		});
		$(".Div1_next img , .Div1_main , .Div1_prev img ").mouseleave(function(){
			timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);	
		});
               
           $(".con_rl a").click(function(){
              $(".con_rl .tan").show();
                     });

              $(".con_rl .tan").mouseleave(function(){
                    $(".con_rl .tan").hide();
                         });

           $.fn.extend({
	fxuiTab:function(opt){
		return this.each(function() {
			var t = $(this),//t就是$(this)，因为Jquery里$(this)很多，我们可以把这个t选存起来，后面好多地方可以用。
				o = opt || {}, //如果使用者没有参，给o设一个空的对象。
			    tit = o.tit || t.find('.fxui-tab-tit'),  //标签点击的对象。
				nav = o.nav || t.find('.fxui-tab-nav'),  //内容显示的对象。
				evt = o.evt || 'click',//事件可以为click,hover或是mouseover。
				eq  = o.eq  || 0; //初始化的时候可以默认显示第几块。不传值显示第一个。
			tit.bind(evt,function(){ //通过bind 传这个evt,事件就可以变动了，不一定只是click事件了。
				$(this).addClass('curr').siblings(tit).removeClass('curr');//处理标签头：加当前的Class，样式通过css改变
				nav.eq(tit.index($(this))).show().siblings('.fxui-tab-nav').hide();//内容块显示。
			}).hover(function(){
				$(this).addClass('fxui-tab-hover').siblings(tit).removeClass('fxui-tab-hover'); //标签的tit移上去的时候加一个样式，这样子这个标签头可以有默认，hover和curr三种状态。
			});
			evt === 'click' ? tit.eq(eq).click() :tit.eq(eq).mouseover(); //初始化，当前是第几个
		})
	}
});
$('.fxui-tab').fxuiTab({
	tit: $('.fxui-tab').find('span'),
	nav: $('.fxui-tab').find('.fxui-tab-nav'),
	evt: 'mouseover',
	eq : 1
});
function ASS(){ 
        		$(".con_l3-1 table tr").find("td:eq(0)").addClass('last-1');
        		$(".con_l3-1 table tr").find("td:eq(1)").addClass('last-2');
        		$(".con_l3-1 table tr").find("td:eq(2)").addClass('last-3');
        		$(".con_l3-1 table tr td:eq(2)").css("padding-left","22px");

        	    
        	  } ASS();


 $(".con_l3-1 table tbody>tr").hover(function(){ $(this).addClass("tr-hover"); },
 function(){ $(this).siblings("tr").removeClass("tr-hover");}
 
)        

