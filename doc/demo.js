
function out() {
    let name = 'out name'
    let arrowFunc = () => {
        console.log(this)
        console.log(name)
    }
    arrowFunc()
}
function ff() {
    this.ffname = 'ffname'
    this.out = function() {
        console.log(this)
        out()
    }
}
const fobj = new ff()
fobj.out()