var test = require('nodeunit')
	, extend = require('../extend.js').extend;

exports.testOneLevelMerging = function(test) {
	test.expect(2)
	
	var obj1 = { name: 'Jonny' }
		, obj2 = { lastName: 'Quest' };

	extend(obj1, obj2);

	test.equal(obj1.name, 'Jonny', '"name" should be "Jonny"');
	test.equal(obj1.lastName, 'Quest', '"lastName" should be "Quest"');

	test.done()
}

exports.testTwoLevelsMerging = function(test) {
	test.expect(2);

	var obj1 = { sub: { firstValue: 1 } }
		, obj2 = { sub: { secondValue: 2 } };

	extend(obj1, obj2);

	test.equal(obj1.sub.firstValue, 1, 'firstValue should be 1');
	test.equal(obj1.sub.secondValue, 2, 'secondValue should be 2');

	test.done();
}

exports.testMultiLevelMerging = function(test) {
	test.expect(5);

	var obj1 = { 
		name: 'Jonny', 
		sub: { 
			firstValue: 1 
		} 
	}
	, obj2 = { 
		lastName: 'Quest', 
		sub: { 
			secondValue: 2 
		}, 
		sub2: { 
			thirdSub: { 
				thirdValue: 3
			} 
		} 
	};

	extend(obj1, obj2);

	test.equal(obj1.name, 'Jonny', '"name" should be "Jonny"');
	test.equal(obj1.lastName, 'Quest', '"lastName" should be "Quest"');
	test.equal(obj1.sub.firstValue, 1, 'firstValue should be 1');
	test.equal(obj1.sub.secondValue, 2, 'secondValue should be 2');
	test.equal(obj1.sub2.thirdSub.thirdValue, 3, 'thirdValue should be 3');

	test.done();
}

exports.testPassingMultipleObjectsAsArguments = function(test) {

	test.expect(3);

	var obj1 = { name: 'Jonny' }
		, obj2 = { lastName: 'Quest' }
		, obj3 = { father: 'Benton' };

	extend(obj1, obj2, obj3);

	test.equals(obj1.name, 'Jonny');
	test.equals(obj1.lastName, 'Quest');
	test.equals(obj1.father, 'Benton');

	test.done();
}

exports.testIfNonObjectArgumentRaisesException = function(test) {
	test.expect(1);
	
	test.throws(function() {
		extend('string', {});
	}, 'string is not an object', 'Should raise an exception');

	test.done();
}