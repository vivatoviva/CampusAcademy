// JavaScript Document

//tree
$(function(){
	$.fn.extend({
		SimpleTree:function(options){			
			//初始化参数
			var option = $.extend({
				click:function(a){ }
			},options);
			
			option.tree=this;	/* 在参数对象中添加对当前菜单树的引用，以便在对象中使用该菜单树 */

			option._init=function(){
				/*
				 * 初始化菜单展开状态，以及分叉节点的样式
				 */				
				this.tree.find("ul ul").hide();	/* 隐藏所有子级菜单 */
				this.tree.find("ul ul").prev("li").removeClass("open");	/* 移除所有子级菜单父节点的 open 样式 */
				
				this.tree.find("ul ul[show='true']").show();	/* 显示 show 属性为 true 的子级菜单 */
				this.tree.find("ul ul[show='true']").prev("li").addClass("open");	/* 添加 show 属性为 true 的子级菜单父节点的 open 样式 */
			}/* option._init() End */
			
			/* 设置所有超链接不响应单击事件 */
			this.find("a").click(function(){ $(this).parent("li").click(); return false; });
			
			/* 菜单项 <li> 接受单击 */
			this.find("li").click(function(){
				/*
				 * 当单击菜单项 <li>
				 * 1.触发用户自定义的单击事件，将该 <li> 标签中的第一个超链接做为参数传递过去
				 * 2.修改当前菜单项所属的子菜单的显示状态（如果等于 true 将其设置为 false，否则将其设置为 true）
				 * 3.重新初始化菜单
				 */
				
				option.click($(this).find("a")[0]);	/* 触发单击 */
				
				/* 
				 * 如果当前节点下面包含子菜单，并且其 show 属性的值为 true，则修改其 show 属性为 false
				 * 否则修改其 show 属性为 true
				 */
				if($(this).next("ul").attr("show")=="true"){
					$(this).next("ul").attr("show","false");					
				}else{
					$(this).next("ul").attr("show","true");
				}
				
				/* 初始化菜单 */
				option._init();
			});
			
			/* 设置所有父节点样式 */
			this.find("ul").prev("li").addClass("folder");
			
			/* 设置节点“是否包含子节点”属性 */
			this.find("li").find("a").attr("hasChild",false);
			this.find("ul").prev("li").find("a").attr("hasChild",true);
			
			/* 初始化菜单 */
			option._init();
			
		}/* SimpleTree Function End */
		
	});
});

//navi
$(".leftsidebar_box dt").css({"background-color":"#2a2e3d"});
$(".leftsidebar_box dt img").attr("src","images/left/select_xl01.png");
$(function(){
	$(".leftsidebar_box dd").hide();
	$(".leftsidebar_box dt").click(function(){
		$(".leftsidebar_box dt").css({"background-color":"#2a2e3d"});
		$(this).css({"background-color": "#383d4e"});
		$(this).parent().find('dd').removeClass("menu_chioce");
		$(".leftsidebar_box dt img").attr("src","images/left/select_xl01.png");
		$(this).parent().find('img').attr("src","images/left/select_xl.png");
		$(".menu_chioce").slideUp(); 
		$(this).parent().find('dd').slideToggle();
		$(this).parent().find('dd').addClass("menu_chioce");
	});
});

//slideBar
$(document).ready(function() {
	  var blw=$("#myScrollBox li").width();
	  //获取单个子元素所需宽度
	  var liArr = $("#myScrollBox ul").children("li");
	  //获取子元素数量
	  var mysw = $("#myScroll").width();
	  //获取子元素所在区域宽度
	  var mus = parseInt(mysw/blw);
	  //计算出需要显示的子元素的数量
	  var length = liArr.length-mus;
	  //计算子元素可移动次数（被隐藏的子元素数量）
	  var i=0;
	  $("#rightButton").click(function(){
		  i++
		  //点击i加1
		  if(i<length){
		      $("#myScrollBox").css("left",-(blw*i));
			  //子元素集合向左移动，距离为子元素的宽度乘以i。
		  }else{
			  i=length;
			  $("#myScrollBox").css("left",-(blw*length));
			  //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定为已经移走的子元素数量。
	      }
      });
	  $("#leftButton").click(function(){
		  i--
		  //点击i减1
		  if(i>=0){
		     $("#myScrollBox").css("left",-(blw*i));
			 //子元素集合向右移动，距离为子元素的宽度乘以i。
		  }else{
			 i=0;
			 $("#myScrollBox").css("left",0);
			 //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
	      }
      });
})

//tabs
$(document).ready(function(){
	var $change_li = $("#titleCard li");
	$change_li.each(function(i){
		$(this).mouseover(function(){
			$(this).addClass("tabOn").siblings().removeClass("tabOn");
			$("#tabContent ul li").eq(i).show().siblings().hide();
		});
	});	
});

//tr点击事件
$(document).ready(function(){
	$("#theTable tr").click(function(){
	  window.open("http://www.autohome.com.cn");
	});
});
				  		  