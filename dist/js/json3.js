define(["jquery"], function($){
	function json3(){
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


					},
				error: function(msg){
					alert(msg);
				}
			})
		})
	}
	return{
		json3 : json3
	}
})