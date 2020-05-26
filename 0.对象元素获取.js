// a.b.c[0][1].d 

function get(obj, str) {
    let s = str.replace(/\[/g, '.').replace(/\]/g, '')
    let arr = s.split('.')
    const re = arr.reduce((result, val) => {
        result = result[val]
        return result;
    }, obj)
    console.log(re)
}
let item = {
    a: {
        b: {
            c: [
                [1, {d:'right'}]
            ]
        }
    }
}
let s = 'a.b.c[0][1].d'
get(item, s)