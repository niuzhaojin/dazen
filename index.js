define(["jquery", "jquery-cookie"], function($){
	function main(){

		$(function(){
			// nav

		/*智能手机和手机配件的下拉菜单*/

		$("#intelligent, #telphone ,#parts, #telphone").mouseenter(function(){
			 $('.telphone').stop().animate({height:260}).css('display','block');
		})
		$("#intelligent, #telphone, #parts, #telphone").mouseleave(function(){
			 $('.telphone').stop().animate({height:0}).css('display','block');
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

	
		/*社区的下拉菜单*/

		$("#community, #communitys").mouseenter(function(){
			 $('.community').stop().animate({height:260}, 2000).css('display','block');
		})
		$("#community, #communitys").mouseleave(function(){
			 $('.community').stop().animate({height:0}, 1000).css('display','block');
		})

		/*表单框获取与失去焦点*/
		$("#pane").focus(function(){
			$(".nav-top form .ad").css('display', 'none');
		})
		$("#pane").blur(function(){
			$(".nav-top form .ad").css('display', 'block');
		})
		

		/*
			左侧边栏菜单
		*/

		$("#intelligent2, #telphone2").mouseenter(function(){
			 $('.telphone2').stop().animate({width:267},0).css('display','block');
		})
		$("#intelligent2, #telphone2").mouseleave(function(){
			 $('.telphone2').stop().animate({width:267},0).css('display','none');
		})


		$("#telParts2, #parts2").mouseenter(function(){
			 $('.parts2').stop().animate({width:532},0).css('display','block');
		})
		$("#telParts2, #parts2").mouseleave(function(){
			 $('.parts2').stop().animate({width:532},0).css('display','none');
		})


		/*
			轮播图
		*/

		
		
				var iNum = 0;
				var timer;
				
				scroll();
			// 点击换页
			$('.box-shuffling ol').on('click', 'li', function(){
				clearInterval(timer);
				iNow = $(this).index();
				$(this).parent().children().attr("class", "");
				$(this).addClass("active");
				$('#shuffling').stop()
				.animate({left: - iNow * $('#shuffling div').width()})

			})

			

			//移入移出
			$('#shuffling').mouseenter(function(){
				clearInterval(timer);
			}).mouseleave(function(){
				scroll();
			});
			// 滚动函数
			function scroll(){
					timer = setInterval(function(){
					iNum++;
					// console.log(iNum);
					$('.box-shuffling ol').find("li").attr("class", "");
					$('.box-shuffling ol').find("li").eq(iNum).addClass("active");
					$('#shuffling').stop().animate({
						left: $('#shuffling').position().left - $('#shuffling div').width()
					}, function(){
						if(iNum == 4){
							iNum = 0;
							$('#shuffling').css({left: 0});
						}
					})
				}, 2000)
			}

		
		/*
			图片阴影
		*/

		$("#a1, #a2, #a3").mouseover(function(){
			$(this).css("box-shadow", "0px 10px 20px 5px gray");		
		})


		$("#a1, #a2, #a3").mouseout(function(){
			$(this).css("box-shadow", "0px 0px");	
		})
		


		// content

		/*
			智能手机图片阴影
		*/
		$(".content-top-img").on('mouseenter', 'div', function(){
			$(this).css("box-shadow", "0px 10px 20px 5px gray");
		})

		$(".content-top-img").on('mouseleave', 'div', function(){
			$(this).css("box-shadow", "0px 0px");
		})


		/*
			手机配件图片阴影
		*/
		$(".content-center-img").on('mouseenter', 'div', function(){
			$(this).css("box-shadow", "0px 10px 20px 5px gray");
		})

		$(".content-center-img").on('mouseleave', 'div', function(){
			$(this).css("box-shadow", "0px 0px");
		})


 		/*
			视频阴影
 		*/
 		$(".content-footer-video1, .content-footer-video2").mouseover(function(){
			$(this).css("box-shadow", "0px 10px 20px 5px gray");		
		})


		$(".content-footer-video1, .content-footer-video2").mouseout(function(){
			$(this).css("box-shadow", "0px 0px");	
		})
		})


	}
	return{
		main: main
	}
})