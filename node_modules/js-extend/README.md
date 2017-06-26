js-extend [![Build Status][travis-image]][travis-url]
=========

Simple extend function based on underscore

## Installation 

	$ npm install js-extend

## Usage

```js
var extend = require('js-extend').extend

var obj1 = { name: 'Jonny' };
var obj2 = { lastName: 'Quest' };

extend(obj1, obj2);

// obj1: { name: 'Jonny', lastName: 'Quest' }

```

[travis-image]: https://travis-ci.org/vmattos/js-extend.png
[travis-url]: https://travis-ci.org/vmattos/js-extend