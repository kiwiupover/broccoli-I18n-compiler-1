/*eslint no-sync: 0*/

'use strict';
const Filter = require('broccoli-filter');

const nodefy = require('nodefy');
const jsonStableStringify = require('json-stable-stringify');

function JStoJSON(inputTree, options) {
	if (!(this instanceof JStoJSON)) {
		return new JStoJSON(inputTree);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
}

JStoJSON.prototype = Object.create(Filter.prototype);
JStoJSON.prototype.constructor = JStoJSON;

JStoJSON.prototype.extensions = ['js'];
JStoJSON.prototype.targetExtension = 'json';

JStoJSON.prototype.processString = function (str) {
  return jsonStableStringify(eval(nodefy.parse(str)));
};

module.exports = JStoJSON;
