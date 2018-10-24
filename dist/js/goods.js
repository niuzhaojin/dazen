define(["jquery", "jquery-cookie"], function($){
	function main2(){
		// nav

		/*智能手机和手机配件的下拉菜单*/

		$("#intelligent, #telphone ,#parts, #telphone").mouseenter(function(){
			 $('.telphone').stop().animate({height:260}).css('display','block');
		})
		$("#intelligent, #telphone, #parts, #telphone").mouseleave(function(){
			 $('.telphone').stop().animate({height:0}).css('display','block');
		})

	
		/*社区的下拉菜单*/

		$("#community, #communitys").mouseenter(function(){
			 $('.community').stop().animate({height:260}).css('display','block');
		})
		$("#community, #communitys").mouseleave(function(){
			 $('.community').stop().animate({height:0}).css('display','block');
		})


		/*
			购物车下拉菜单
		*/

		$('.head-right, .shopCar').mouseenter(function(){
			$('.shopCar').stop().animate({height:100}).css('display', 'block');
		})
		$('.head-right, .shopCar').mouseleave(function(){
			$('.shopCar').stop().animate({height:0}).css('display', 'block');
		})

			// 购物车下拉菜单阴影
			$(".head-right").on('mouseenter', 'p, .shopCar', function(){
				$('.shopCar').css("box-shadow", "0px 5px 5px 5px #eeeeee");
			})

			$(".head-right").on('mouseleave', 'p, .shopCar', function(){
				$('.shopCar').css("box-shadow", "0px 0px");
			})
		

		/*表单框获取与失去焦点*/
		$("#pane").focus(function(){
			$(".nav-top form .ad").css('display', 'none');
		})
		$("#pane").blur(function(){
			$(".nav-top form .ad").css('display', 'block');
		})


		// iconfont显示与隐藏
		$(".content-center").on('mouseenter', 'div', function(){
			$(this).find("h1").css('display', 'block');
		})
		$(".content-center").on('mouseleave', 'div', function(){
			$(this).find("h1").css('display', 'none');
		})


		// 图片阴影
		$(".content-center").on('mouseenter', 'div', function(){
			$(this).css("box-shadow", "0px 10px 20px 5px gray");
		})

		$(".content-center").on('mouseleave', 'div', function(){
			$(this).css("box-shadow", "0px 0px");
		})
		

		/*

		内容底部静态图滚动

		*/
			
			// 图片下面点的样式
		$("#li1").css('background' , '#ff6801');
		$("#li1").click(function(){
			$("#li1").css('background', '#ff6801');
			$("#li2").css('background', '');
		})

		$("#li2").click(function(){
			$("#li2").css('background', '#ff6801');
			$("#li1").css('background', '');
		})

			// 滚动
		var width = 1227//跟外面盒子的宽度一样，或者写成 var width = $(".content").width();
	    var ulNum = $(".bottom ul").length; //获取ul的个数
	    var contentWidth = width * ulNum; //获取整个box应该的长度，刚开始box设置成了1100，但是应该把所有的ul防到一行里面去，这样box向左移动的时候才是无缝滚动
	    $(".content-footer-box").width(contentWidth); //给box设置宽度  .width() 是获取宽度  .width(value)是设置宽度
	    $(".bottom ul li").click(function() {
	        //$(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
	        // .removeClass()表示删除的样式名称
	        $(this).addClass('li').siblings().removeClass('li');
	        var clickNum = $(this).index(); //判断点击的是第几个span .index()方法返回第几个，从0开始算起
	        //alert(clickNum);
	        var moveLeft = clickNum * width * -1; //应该向左移动的距离
	        $(".content-footer-box").animate({
	            'left': moveLeft
	        }, 600); //通过操作box的left来使box向左移动， .animate 是动画函数
	        //第一个参数用{}包含起来，里面的内容形式为 {'left':100,'top':100}，多个用逗号隔开，
	        // 表示从当前位置移动到left为100px、top为100px的位置（即left:100px;top:100px处），
	        //第二个参数为时间，表示从当前位置移动到第一个参数用时，单位为ms，1000ms=1秒
	        //点击的时候一定要点开审查元素，查看box元素的行内样式
	    })
    		
		
	}
	return{
		main2: main2
	}
})		