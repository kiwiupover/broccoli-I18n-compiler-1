'use strict';
const assert = require('assert');
const fs = require('fs');
const rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should transform JS object to JSON', function () {
  let actual = fs.readFileSync('temp/translations.json', 'utf8').replace('\n', '');
  let expexted = fs.readFileSync('test/expected/translations.json', 'utf8').replace('\n', '');

  assert.equal(actual,expexted);
});
