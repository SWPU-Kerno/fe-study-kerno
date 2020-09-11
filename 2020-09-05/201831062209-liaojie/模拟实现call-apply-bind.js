Function.prototype.mycall = function (context) {

    var context = context || window;
    // console.log(context);
    // console.log(this);
    /*给context添加属性*/
    context.fn = this;
    /*获取参数*/
    var args = [...arguments].slice(1);


    /*执行该函数,调用函数的是context*/
    var result = context.fn(...args);

    return result;

}

Function.prototype.myapply = function (context) {

    var context = context || window;
    context.fn = this;

    var args = [...arguments].slice(1);

    var result = context.fn(...args);

    return result;

}
Function.prototype.mybind = function (context) {

    if(typeof this != 'function'){
        console.log('调用者必须是函数');
    }

    var _this = this;
    var args = [...arguments].slice(1);

    //返回一个函数
    return function F() {

        //因为返回了一个函数，如果使用new F(),我们需要进行判断
        if(this instanceof F){
            return new _this(...args,...arguments);
        }
        return _this.apply(context,args.concat(...arguments));

    }

}
function obj() {
    return this.name;
}
let myobj = {
    name:'liaojie'
}
console.log(obj.mycall(myobj));
console.log(obj.myapply(myobj));
console.log(obj.mybind(myobj));