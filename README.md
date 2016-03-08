# errorable-user [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> user errors for errorable

## Installation

```sh
$ npm install --save errorable-user
```

## Usage

```js
var errorable = require('errorable');
var errorableUser = require('errorable-user');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableUser, 'zh-CN').errors;
var enUsErrors = new Generator(errorableUser, 'en-US').errors;

// UserNotFound
// UserNotLoggedIn
// UserExisted
```
## License

MIT © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-user.svg
[npm-url]: https://npmjs.org/package/errorable-user
[travis-image]: https://travis-ci.org/Errorable/user.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/user
[daviddm-image]: https://david-dm.org/Errorable/user.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/user
[coveralls-image]: https://coveralls.io/repos/Errorable/user/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/user
