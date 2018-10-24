define(["jquery"], function($){
	function json2(){
		$(function(){
			$.ajax({
				url: "data/goods.json",
				type: "GET",
				success: function(res){
					var telphone = res.telphone; 
					var html1 = "";
					for(var i = 0; i < telphone.length; i++){
						html1 += `
							<div>
								<a href="details.html"><img src="${telphone[i].images}" alt="">
								<p>${telphone[i].title}${telphone[i].internal}</p>
								<span>${telphone[i].price}</span></a>
							</div>`;
					}
					$(".nav .nav-top .telphone").html(html1);
					$(".nav .nav-content .telphone2").html(html1);

					// 商品列表手机图片
					var html2 = "";
					var telphone = res.telphone;
					for(var i = 0; i < telphone.length; i++){
						html2 += `
							<div class="iconfont">
								<h1 id="h1-1">&#xe635;</h1><h1 id="h1-2">&#xe660;</h1>
								<a href="details.html"><img class = "bigimg" src="${telphone[i].images}" alt=""></a>
								<p>${telphone[i].introduce}</p>
								<a href="details.html"><span>${telphone[i].title}</span></a>
								<i>${telphone[i].price}</i>
								<strong>${telphone[i].afprice}</strong>
								<img class="smallimg" src="${telphone[i].smallimg}" alt="">
								<b>${telphone[i].bottom}</b>

							</div>` 
					}
					$(".content .content-center").html(html2);

					// 手机图片静态轮播图
					var html3 = "";
					var shuffling = res.shuffling;
					for(var i = 0; i < shuffling.length; i++){
						html3 += `
							<div>
								<a href="details.html"><img src="${shuffling[i].images}" alt=""></a>
								<a href="details.html"><p>${shuffling[i].title}</p></a>
								<span>${shuffling[i].price}</span>
							</div>` 
					}
					$(".content-footer .content-footer-img").html(html3);



				},
				error: function(msg){
					alert(msg);
				}
			})
		})
	}
	return{
		json2 : json2
	}
})