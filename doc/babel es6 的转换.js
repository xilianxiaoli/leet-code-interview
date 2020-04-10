
//1.------------ 循环中的块级作用域
function aa() {
    const a = 12;
    // for 循环中的块级作用域
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        })
    }
    return a;
}
// => es2015
function aa() {
    var a = 12;

    var _loop = function _loop(i) {
        setTimeout(function () {
            console.log(i);
        });
    };

    for (var i = 0; i < 10; i++) {
        // 将循环体用函数进行包裹，循环变量通过参数传递，这样在 es5 下，变实现了循环体内的局部作用域
        _loop(i);
    }

    return a;
}

//2.------------ const 的转换
const aa = 12;
aa = 123

// => es2015
// 当对const变量进行修改时，会生成一个抛异常的函数，阻止变量被修改，若没有对const变量进行修改，则不会生成该函数
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var aa = 12;
aa = (_readOnlyError("aa"), 123);

//3.------------ 条件判断中的局部作用域
function my() {
    let a = 23
    if (1) {
        let a = 12
    }
}
// => es2015
function my() {
    var a = 23;

    if (1) {
        // 当局部变量和父级变量同名时，会将原有的局部变量名字换成其他不同名的名字
        var _a = 12;
    }
}

//4.------------ 箭头函数的转换

function out() {
    let name = 'out name'
    let arrowFunc = () => {
        console.log(this.name)
    }
    //若不绑定this，则调用该函数的就是 window 对象
    arrowFunc()
}
// => es2015

function out() {
    // 用变量承载外层this
    var _this = this;

    var name = "out name";
    // 转换成常规函数
    var arrowFunc = function arrowFunc() {
        // 内部的this指针使用外部的this变量
        console.log(_this.name);
    }; //若不绑定this，则调用该函数的就是 window 对象

    arrowFunc();
}

// 5.------------ class类的转换
class MyClass {
    constructor(params) {
        this.pp = params
    }
    fn() {
        console.log(this.pp)
    }
}
// => es2015
// 通过闭包的方式，新建对象
/**
 * 新建对象的构造函数就是 constructor 的内容
 * 将 class 中的方法挂载到新对象的 prototype 原型链上
 * 闭包函数最后将 构造函数输出
 */
var MyClass = /*#__PURE__*/ (function () {
    function MyClass(params) {
        this.pp = params;
    }

    var _proto = MyClass.prototype;

    _proto.fn = function fn() {
        console.log(this.pp);
    };

    return MyClass;
})();

// 6.------------ class类的继承
class A {
    constructor() {
        this.aname = 'aname'
    }
}
class B extends A {
    constructor() {
        super()
        console.log(this.aname)
    }
}

// => es2015
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

var A = function A() {
    this.aname = "aname";
};

var B = /*#__PURE__*/ (function (_A) {
    _inheritsLoose(B, _A);

    function B() {
        var _this;

        _this = _A.call(this) || this;
        console.log(_this.aname);
        return _this;
    }

    return B;
})(A);


async function fn(){
    await ff()
}