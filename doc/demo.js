
function out() {
    console.log(this)
    let name = 'out name'
    let arrowFunc = () => {
        console.log(this)
        console.log(this.name)
    }
    //若不绑定this，则调用该函数的就是 window 对象
    arrowFunc.apply(this)
}
function ff() {
    this.ffname = 'ffname'
    this.out = function () {
        console.log(this)
        out.apply(this)
    }
    // 这里调用 out 函数的就是当前this
    this.cc = out;
}
// this 指向最后调用（执行）它的对象
const fobj = new ff()
// fobj.out()
fobj.cc()

/**
 * 实现类的继承，使用该方法实现继承的两个基础
 * 1. 父级的内部函数已经挂载到了prototype上
 * 2. 这个方法的执行需要在subClass挂载 prototype 之前，否则会被父级覆盖
 * 进入这一步的时候，super 已经完成类到函数的转换，内部的方法已经挂载到了prototype上
 * @param {*} subClass
 * @param {*} superClass
 */
function _inheritsLoose(subClass, superClass) {
    // subClass.prototype = {__proto__:{父级的构造函数和方法}} 构造prototype的原型链，通过原型链可以找到父级的熟悉和方法
    // 所以subClass的实例中的方法是在 __proto__ 中的，与常规的实例对象有所区别
    subClass.prototype = Object.create(superClass.prototype); // 使用现有的对象来提供新创建的对象的__proto__
    // 设置构造函数
    subClass.prototype.constructor = subClass;
    // 修改原型链指向父级
    subClass.__proto__ = superClass;
}

var A = /*#__PURE__*/ (function () {
    function A() {
        this.aname = "aname";
    }

    var _proto = A.prototype;

    _proto.afn = function afn() { };

    return A;
})();

var B = /*#__PURE__*/ (function (_A) {
    _inheritsLoose(B, _A);

    function B() {
        var _this;

        _this = _A.call(this) || this;
        console.log(_this.aname);
        return _this;
    }

    var _proto2 = B.prototype;

    _proto2.bfn = function bfn() {
        console.log(this.aname);
    };

    return B;
})(A);
let b = new B()
b.bfn()

new B()


function father(name) {
    this.fname = 'father';
    this.eat = function() {
        console.log(this.name, ' eatting')
    }
    this.setFName = (fname) => {
        this.fname = fname
    }
}
let f = new father()
f.eat()