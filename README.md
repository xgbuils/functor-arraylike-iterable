# functor-arraylike-iterable

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`functor-arraylike-iterable` exports a class that builds iterables that provide map method.

## Install

``` bash
$ npm install functor-arraylike-iterable --save
```

## Usage
``` JavaScript
const FunctorIterable = require('functor-arraylike-iterable')

const iterable = new FunctorIterable([4, 2, 7, 8]) // (4 2 7 8)
    .map(e => 3 * e) // (12 6 21 24)
    .map(e => e / 2) // (6 3 10.5 12)



// converting to array:
[...iterable] // [6, 3, 10.5, 12]

// traversing values:
for (const val of iterable) {
    // ...
}

// creating an iterator that traverses the values
let iterator = iterable[Symbol.iterator]()
iterator.next() // {value: 6, done: false}
iterator.next() // {value: 3, done: false}
iterator.next() // {value: 10.5, done: false}
iterator.next() // {value: 12, done: false}
iterator.next() // {value: undefined, done: true}
```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/functor-arraylike-iterable.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/functor-arraylike-iterable
  [3]: https://badge.fury.io/js/functor-arraylike-iterable.svg
  [4]: https://badge.fury.io/js/functor-arraylike-iterable
  [5]: https://coveralls.io/repos/github/xgbuils/functor-arraylike-iterable/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/functor-arraylike-iterable?branch=master
  [7]: https://david-dm.org/xgbuils/functor-arraylike-iterable.svg
  [8]: https://david-dm.org/xgbuils/functor-arraylike-iterable
