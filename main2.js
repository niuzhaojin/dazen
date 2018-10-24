console.log("加载成功");

/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",

		

		"goods": "goods",
		"json2": "json2"

		
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


require(['goods', 'json2' ], function(goods, json2){

	goods.main2();
	json2.json2();
})