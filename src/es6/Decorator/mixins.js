export function mixins(...list) {
    console.log('...list:', ...list);

    return function(target) {
        Object.assign(target.prototype, {...list})
    }
}