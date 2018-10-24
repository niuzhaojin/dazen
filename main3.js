console.log("加载成功");

/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		

		"details": "details",
		"json3": "json3"

		
	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件
		*/
		"startMove": {
			exports: "_"
		}
	}
})


require(['details', 'json3'], function(details, json3){

	details.main3();
	json3.json3();
})