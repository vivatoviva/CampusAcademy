$(function(){
	console.log("ForThanks Glyphicons: \n 'http://glyphicons.com/'");
	console.log("");
	console.log("**********************");
	console.log("2017/4/24");
	console.log("姓名：文俊霖 \n学号：2015213887 \nQQ：610033941 \nTel：13368161676");
	console.log("**********************");
	console.log("");
	console.log("这次因为要准备考试，只能在周末回家的时候，草草地把图片切了。。 很多优化都没弄。。 大佬饶命。。 ");
})



/*   愚蠢的高度问题  */
$(function(){
	$(".navigation-box ul li ul li").each(function(){
		var n_c_li = $(this).children().is("ul");
		if (n_c_li==false) {
			$(this).css({"height":40});
		};
	})
})


/*   三级导航  */
$(function(){
	$(".navigation-box ul li ul li ul li").bind("click",function(event){
		var test = $(this).hasClass("high-light2");
		if (test){
			$(this).removeClass("high-light2");
		}else{
			$(this).parent().children().removeClass("high-light2");
			$(this).addClass("high-light2");
		}
		event.stopPropagation();
	})
	$(".navigation-box ul li ul li").bind("click",function(event){
		var test = $(this).children("ul").hasClass("hidden");
		if (test){
			$(this).children(".fold").addClass("unfold");
			$(this).children(".fold").removeClass("fold");
		}else{
			$(this).children(".unfold").addClass("fold");
			$(this).children(".unfold").removeClass("unfold");
		}
		event.stopPropagation();
	})
	$(".navigation-box ul li").bind("click",function(event){
		var test = $(this).children("ul").hasClass("hidden");
		if (test){
			$(this).children("ul").removeClass("hidden");
			$(this).addClass("high-light");
		}else{
			$(this).children("ul").addClass("hidden");
			$(this).removeClass("high-light");
		}
		event.stopPropagation();
	})
})


/*   切换项目组  */
$(function(){
	$(".i-t-t-box").bind("click",function(obj){
		$(".i-t-t-box").removeClass("i-t-t-cheked");
		$(this).addClass("i-t-t-cheked");
		var i_t_btn = $(this).index();
		if (0==i_t_btn) {
			$(".item-table-content").addClass("hidden");
			$(".item-table-content[name='1']").removeClass("hidden");
		}else{
			$(".item-table-content").addClass("hidden");
			$(".item-table-content[name='2']").removeClass("hidden");
		}
	})
})


/*   小点击  */
// $(function(){
// 	var value = 0;
// 	$(".let-btn").bind("click",function(){
// 		value = value - 15;
// 		$(".item-box").animate({"margin-left":value+"%"});
// 	})
// 	$(".rig-btn").bind("click",function(){
// 		value = value + 15;
// 		$(".item-box").animate({"margin-left":value+"%"});
// 	})
// })
$(function(){
	var valuec = 0;
	$(".let-btn").bind("click",function(){
		if (valuec == -15) {
			alert("后面没有东西了");
		}else{
			valuec = valuec - 15;
			$(".item-box").animate({"margin-left":valuec+"%"});
		}
	})
	
	$(".rig-btn").bind("click",function(){
		if (valuec == 0) {
			alert("前面没有东西了");
		}else{
			valuec = valuec + 15;
			$(".item-box").animate({"margin-left":valuec+"%"});
		}
	})
})


/*   日历动画  */
$(function(){
	$(".time-btn-box").bind("click",function(){
		$(".item-func-content").animate({"margin-right":"60px","opacity":1},1000,function(){
			$(".item-func-content").animate({"margin-right":"20px"},function(){
				$(".time-btn-back").css({"display":"block"});
				$(".time-btn-back").animate({"opacity":"1"});
			})
		})
	})
})
$(function(){
	$(".time-btn-back").bind("click",function(){
		$(".item-func-content").animate({"opacity":"0"},function(){
			$(".item-func-content").css({"margin-right":"-500px"});
		});
		$(".time-btn-back").animate({"opacity":"0"});
		$(".time-btn-back").css({"display":"none"});
	})
})






