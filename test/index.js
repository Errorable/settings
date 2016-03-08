'use strict';

var assert = require('assert');
var errorableSettings = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableSettings, 'zh-CN').errors;
var enUSErrors = new Generator(errorableSettings, 'en-US').errors;

var errorCount = 0;

for (var k in cnErrors) {
  if (cnErrors[k] instanceof Object) {
    errorCount++;
  }
}

describe('errorable-admin', function () {
  it('should have administrator errors in zh-CN!', function () {
    var count = 0;
    var errors = {
      SettingsNotFound: '设置未找到！'
    };
    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, cnErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });

  it('should have administrator errors in en-US!', function () {
    var count = 0;
    var errors = {
      SettingsNotFound: 'Settings Not Found!'
    };

    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, enUSErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });
});
