
// 循环中的块级作用域
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

// const 的转换
const aa = 12;
aa = 123

// => es2015
// 当对const变量进行修改时，会生成一个抛异常的函数，阻止变量被修改，若没有对const变量进行修改，则不会生成该函数
function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var aa = 12;
aa = (_readOnlyError("aa"), 123);

// 条件判断中的局部作用域
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
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABHEVEAoCUBvAUIgxAGwFM0wBDAWxMQF5EByFc6kx_Q0tCgJ17gB3AGLgI9DJjoA-PIXmIICAM5xSAOiJwA5uko1MnAgF8jiPgJFisuUyyxA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Ces2015-loose&prettier=true&targets=&version=7.9.0&externalPlugins=