const arrayOf = require('immutable-array.of')
const push = require('immutable-array.push')
const reduce = require('immutable-array.reduce')

function FunctorArrayLikeIterable (iterable) {
    this.iterable = iterable
    this.fs = arrayOf([])
}

function map (f) {
    const obj = Object.create(this.constructor.prototype)
    obj.fs = push(f, this.fs)
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
                        value: reduce(apply, iterable[i], fs)
                    } : {done: true}
                    ++i
                    return status
                }
            }
        }
    }
})

module.exports = FunctorArrayLikeIterable
