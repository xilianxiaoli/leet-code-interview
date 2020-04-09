
function out() {
    console.log(this)
    let name = 'out name'
    let arrowFunc = ()=> {
        console.log(this)
        console.log(this.name)
    }
    //若不绑定this，则调用该函数的就是 window 对象
    arrowFunc.apply(this)
}
function ff() {
    this.ffname = 'ffname'
    this.out = function() {
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