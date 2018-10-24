define(["jquery", "jquery-cookie"], function($){
	function main3(){
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


		/*
			商品选项卡，点哪张图片出现哪张图片
		*/


			var oSmall = $('#smallFigure').find('img');
			var oBig = $('.small').find('img');
			$("#smallFigure").find('img').eq(0).css('border', '1px solid #ff6801');
			oSmall.on('click', function(){
				oBig.css('display','none').eq($(this).index()).css('display','block');
				$("#smallFigure").find('img').css('border', '1px solid #eee');
				$("#smallFigure").find('img').eq($(this).index()).css('border', '1px solid #ff6801');
			})


		/*
			放大镜
		*/

		var small = $(".small")[0];
		var slider = $(".slider")[0];
		var big = document.getElementById("big");//试一试js获取
		var bigImg = document.getElementById("bigImg");
		//让slider跟随鼠标移动.给小的方块绑定事件
		$(".small").mousemove(function(e) {
		var even = e || event; //兼容火狐浏览器
		var x = even.clientX - small.offsetLeft - slider.offsetWidth / 2;
		var y = even.clientY - small.offsetTop - slider.offsetHeight / -2;
		//测试even.clientX和even.clientY
		// $("#test").val(even.clientX);
		// $("#test1").val(even.clientY);
		//水平方向的最大值
		var maxX = small.clientWidth - slider.clientWidth;
		//竖直方向的最大值
		var maxY = small.clientHeight - slider.clientHeight;
		if(x < 0){
		//相当于超出左侧,超出左侧时,拉回
			x = 0;
		}
		//超出右侧时拉回
		if(x > maxX){
			x = maxX;
		}
		//顶部超出
		if(y < 0){
			y = 0;
		}
		//底部超出
		if(y > maxY){
			y = maxY;
		}
		slider.style.top = (y + small.offsetTop) + "px";
		slider.style.left = (x + small.offsetLeft) + "px";
		//放大的图片的主要实现代码:比例计算, big.scrollLeft是id=big的div中下方滚轴的位置
		//由于id=big的div设置成固定大小，而图片又非常大，所以这个div就像个放大镜一样在大图上晃
		//比例计算很简单，鼠标在缩略图的位置与缩略图宽高比=鼠标在大图位置与大图宽高比，现在未知数是大图鼠标的位置
		big.scrollLeft = x / maxX * (bigImg.clientWidth - big.clientWidth) ;
		big.scrollTop = y / maxY * (bigImg.clientHeight - big.clientHeight) ;
		});

		//鼠标移入事件
		$(".small").mouseenter(function(){
			//鼠标移入到缩略图时候实现,上面出现的小的方块
			$(".slider").css("display","block");
			$("#big").css("top", small.offsetTop + "px");
			//隐藏的大图=获取左图的左边位置+宽度+10(隔开点缝隙与缩略图)+px
			big.style.left = small.offsetLeft + small.offsetWidth + 10 + "px";
			//右侧的大图区域显示出来图片
			$("#big").css("display", "block");
		});
		//移除事件
		// 添加鼠标移出事件,鼠标移出缩略图的时候
		$(".small").mouseleave(function(){
			$(".slider").css("display","none");
			$("#big").css("display","none");
		}); 


		/*
			商品数量加减且价格随之变化
		*/

		$(function(){
			$("#quantity").keyup(function(){
				if(isNaN($(this).val()) || parseInt($(this).val()) < 1){
				$(this).val("1");
				$("#totalPrice").html($("#price").val());
				return;
			}
				var total=parseFloat($("#price").val())*parseInt($(this).val());
				$("#totalPrice").html(total.toFixed(2));
			})

			$("#add").click(function(){
				numAdd();
			});

			$("#del").click(function(){
				numDec();
			});
		})
			/*商品数量+1*/
		function numAdd(){
			var num_add = parseInt($("#quantity").val()) + 1;
			if($("#quantity").val()==""){
				num_add = 1;
			}
			$("#quantity").val(num_add);
			var total = parseFloat($("#price").val())*parseInt($("#quantity").val());
			$("#totalPrice").html(total.toFixed(2));
		}
			/*商品数量-1*/
		function numDec(){
			var num_dec = parseInt($("#quantity").val()) - 1;
			if(num_dec < 1){
				//购买数量必须大于或等于1
				alert("您至少得购买1件商品！");
			}
			else{
				$("#quantity").val(num_dec);
				var total = parseFloat($("#price").val()) * parseInt($("#quantity").val());
				$("#totalPrice").html(total.toFixed(2));
			}
		}


		/*
			加入购物车
		*/

		$(function(){
	$('.join').click(function(){
		var flyElm = $(".small").find('img').eq($(this).index()).clone().css('opacity','0.8');
		flyElm.css({
			'z-index': 9000,
			'display': 'block',
			'position': 'absolute',
			'top': $(this).offset().top +'px',
			'left': $(this).offset().left +'px',
			'width': $(this).width() +'px',
			'height': $(this).height() +'px'
		});
		$('body').append(flyElm);
		flyElm.animate({
			top:$('.shopCar').offset().top,
			left:$('.shopCar').offset().left,
			width:2,
			height:2,
		},600,function(){
			flyElm.remove();
		});
	});
});







	}
	return{
		main3: main3
	}
})		