const InmutableArray = require('array-inmutable')

function FunctorArrayLikeIterable (iterable) {
    this.iterable = iterable
    this.fs = InmutableArray([])
}

function map (f) {
    const obj = Object.create(this.constructor.prototype)
    obj.fs = this.fs.push(f)
    obj.iterable = this.iterable
    return obj
}

const apply = (a, f) => f(a)

Object.defineProperties(FunctorArrayLikeIterable.prototype, {
    map: {
        value: map
    },
    [Symbol.iterator]: {
        value () {
            const fs = this.fs
            const iterable = this.iterable
            const length = iterable.length
            let i = 0
            return {
                next () {
                    const status = i < length ? {
                        value: fs.reduce(apply, iterable[i])
                    } : {done: true}
                    ++i
                    return status
                }
            }
        }
    }
})

module.exports = FunctorArrayLikeIterable
