
20200901学习js笔记：

入门篇：
	 JS是一门“脚本语言” 灵活性
	 js核心语法包括两个部分：1、基本的语法构造 2、标准库
	 额外API分为三类：1、浏览器控制类 2、DOM类 3、Web类
	
基本语法：
	 由于学习过c，在学习时没有遇到障碍
	 变量没有类型限制，随时可以更改类型
	 变量提升，运行时先获得了所有的变量命名才开始运行
	 大小写区分
	 ===严格相等运算符  ==相等运算符
	 
数据类型：
	确定变量的类型js有三种方法 typeof  instanceof  Object.prototype.toString方法
	null和undefined区别：null是一个表示“空”的对象，转为数值时为0；undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。
	布尔值 空数组和空对象对应布尔值为true
	浮点数不是精确的值
	数值的表示法
	NaN 表示非数字 not a number NaN不等于任何值包括它本身
	parseInt  
	parseFloat
	isNaN 只对数值有效
	isFinite
	with语句
	
函数：
	function命令
	类数组arguments和数组
	将类数组arrguments转换为数组有以下两种常用方式
	var args = Array.prototype.slice.call(arguments);
	// 或者
	var args = [];
	for (var i = 0; i < arguments.length; i++) 
	{
		args.push(arguments[i]);
	}	
	
运算符：
	==和===区别： ==比较两个值是否相等而===比较他们是否是同一个值如果两个值不是同一类型，严格相等运算符（===）直接返回false，
	而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较。
	