define(["jquery", "jquery-cookie"], function($){
	function main4(){
		// 手机号码
		 $('.telNumber').blur(function(){
			var reg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0123456789]|14[57])[0-9]{8}$/;
   			if($(".telNumber").val() == "") {
		        $("#span1").html("手机号码不能为空！");
		        return false;
	   		}else if($(".telNumber").val().length < 11){
		        $("#span1").html("手机号码长度有误！");
		        return false;
	    	}else if(!reg.test($(".telNumber").val())){
		        $("#span1").html("手机号不存在！");
		        return false;
	     	}else{
	          	$("#span1").html("输入正确");
	        }
	    })    


	    // 密码
	     $('.password').blur(function(){
	     	var reg = /[\u4E00-\u9FA5]/;
	        var reg2 = /^[a-zA-Z]\w{5,17}$/;// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
	        var userPwd = $('.password').val();
	        if (userPwd == "") {
	            $("#span2").html("密码不能为空！");
	            return false;
	        } else if (userPwd.length < 6 || userPwd.length > 16) {
	            $("#span2").html("长度不符合！");
	            return false;
	        } else if(reg.test(userPwd)){
	            $("#span2").html("密码不能有中文！");
	        } else {
	            $('#span2').html('输入正确');
	        }
	    })  


	     // 确认密码
	     $('.conPassword').blur(function(){
	     	 var a=$('.password').val();
        var pwd=$.trim(a);
        var b=$('.conPassword').val();
        var repwd=$.trim(b);
        if (pwd == "") {
            $("#span3").html("确认密码不能为空！");
            return false;
        } else if (pwd !== repwd) {
            $("#span3").html("两次密码不一致");
            return false;
        } else {
            $("#span3").html("输入正确");
            return true;
        } 

	     })



	}
	return{
		main4: main4
	}
})				