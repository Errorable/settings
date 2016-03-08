# errorable-settings [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> settings errors for errorable

## Installation

```sh
$ npm install --save errorable-settings
```

## Usage

```js
var errorable = require('errorable');
var errorableSettings = require('errorable-settings');
var Generator = errorable.Generator;
var cnErrors = errorable.get(errorableSettings, 'zh-CN');
var enUsErrors = errorable.get(errorableSettings, 'en-US');

// SettingsNotFound
```
## License

MIT © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-settings.svg
[npm-url]: https://npmjs.org/package/errorable-settings
[travis-image]: https://travis-ci.org/Errorable/settings.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/settings
[daviddm-image]: https://david-dm.org/Errorable/settings.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/settings
[coveralls-image]: https://coveralls.io/repos/Errorable/settings/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/settings
