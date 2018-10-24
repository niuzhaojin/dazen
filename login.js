define(["jquery", "jquery-cookie"], function($){
	function main5(){
		// 手机号码
		 $('#user').blur(function(){
			var reg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0123456789]|14[57])[0-9]{8}$/;
   			if($("#user").val() == "") {
		        $("#b1").html("手机号码不能为空！");
		        return false;
	   		}else if($("#user").val().length < 11){
		        $("#b1").html("手机号码长度有误！");
		        return false;
	    	}else if(!reg.test($("#user").val())){
		        $("#b1").html("手机号不存在！");
		        return false;
	     	}else{
	          	$("#b1").html("输入正确");
	        }
	    })    


		  // 密码
	    $('#pwd').blur(function(){
	     	var reg = /[\u4E00-\u9FA5]/;
	        var reg2 = /^[a-zA-Z]\w{5,17}$/;// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
	        var userPwd = $('#pwd').val();
	        if (userPwd == "") {
	            $("#b2").html("密码不能为空！");
	            return false;
	        } else if (userPwd.length < 6 || userPwd.length > 16) {
	            $("#b2").html("长度不符合！");
	            return false;
	        } else if(reg.test(userPwd)){
	            $("#b2").html("密码不能有中文！");
	        } else {
	            $('#b2').html('输入正确');
	        }
	    })  


		// 生成4位数字验证码
    	 function change(){
  			code=$("#random");
 			// 验证码组成库
  			var arrays=new Array( 
		       '1','2','3','4','5','6','7','8','9','0',
		       'a','b','c','d','e','f','g','h','i','j', 
		       'k','l','m','n','o','p','q','r','s','t', 
		       'u','v','w','x','y','z', 
		       'A','B','C','D','E','F','G','H','I','J', 
		       'K','L','M','N','O','P','Q','R','S','T', 
		       'U','V','W','X','Y','Z'        
		    ); 
    		codes='';// 重新初始化验证码
  			for(var i = 0; i<4; i++){
   				// 随机获取一个数组的下标
   					var r = parseInt(Math.random()*arrays.length);
   					codes += arrays[r];
 			}
 			// 验证码添加到input里
    		code.val(codes);
		}
			
			change();
			code.click(change);
			//单击验证
			$("#button1").click(function(){
			   var inputCode = $("#code").val().toUpperCase(); //取得输入的验证码并转化为大写 
			   console.log(inputCode);
				if(inputCode.length == 0) { //若输入的验证码长度为0
				alert("请输入验证码！"); //则弹出请输入验证码
				}    
				else if(inputCode!=codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
				alert("验证码输入错误!请重新输入"); //则弹出验证码输入错误
				change();//刷新验证码
				$("#code").val("");//清空文本框
				}else{ //输入正确时
				alert("正确"); //弹出
			} 
			});





	}


	return{
		main5: main5
	}
})				