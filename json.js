define(["jquery"], function($){
	function json(){
		$(function(){
			$.ajax({
				url: "data/telphone.json",
				type: "GET",
				success: function(res){
					// 智能手机
					var telphone = res.telphone; 
					var html1 = "";
					var html2 = "";
					var html3 = "";
					var html4 = "";
					var html5 = "";
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

					//手机配件
					var parts = res.parts;
					for(var i = 0; i < parts.length; i++){
						html2 += `
							<div>
								<a href="details.html"><img src="${parts[i].images}" alt="">
								<p>${parts[i].title}</p></a>
							</div>`;
					}
					$(".nav .nav-content #parts2").html(html2);

					//轮播图
					var shuffling = res.shuffling;
					for(var i = 0; i < shuffling.length; i++){
						html3 += `
							<div>
								<a href="details.html"><img src="${shuffling[i].images}" alt=""></a>
							</div>`;
					}
					$(".nav .nav-content .box-shuffling #shuffling").html(html3);

					// 智能手机2
					var smartphone = res.smartphone;
					html4 = `<a href="" class="a1"><img src="${smartphone[0].images}" alt=""></a>`;
					for(var i = 1; i < smartphone.length; i++){
						html4 += `
							<div>
								<a href="details.html">
								<img src="${smartphone[i].images}" alt="">
								</a>
								<a href="details.html"><p>${smartphone[i].title}</p></a>
								<i>${smartphone[i].introduce}</i>
								<span>${smartphone[i].price}</span>
								<em>${smartphone[i].evaluation}</em>
							</div>`;
					}
					$(".content .content-top .content-top-img").html(html4);

					// 手机配件2
					var telaccessories = res.telaccessories;
					html5 = `
						<div class="center-img-left">
							<a href="details.html" class="a1"><img src="${telaccessories[0].images}" alt=""></a>
							<a href="details.html" class="a2"><img src="${telaccessories[1].images}" alt=""></a>
						</div>`;
					for(var i = 2; i < telaccessories.length; i++){
						html5 += `
							<div>
								<a href="">
								<img src="${telaccessories[i].images}" alt="">
								</a>
								<a href=""><p>${telaccessories[i].title}</p></a>
								<i>${telaccessories[i].introduce}</i>
								<span>${telaccessories[i].price}</span>
								<em>${telaccessories[i].evaluation}</em>
							</div>`;
					}
					$(".content .content-center .content-center-img").html(html5);
				},
				error: function(msg){
					alert(msg);
				}
			})
		})
	}
	return {
		json: json
	}
})



