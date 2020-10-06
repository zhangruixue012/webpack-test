/* eslint-disable */
function array(a, n) {
	return Array.prototype.slice.call(a, n || 0);
}

// 这个函数的实参传递至左侧
function partialLeft(f) {
	const args = arguments;

	return function () {
		let a = array(args, 1);
		a = a.concat(array(arguments));
		return f.apply(this, a);
	};
}

// 这个函数的实参传递至右侧
function partialRight(f) {
	const args = arguments;
	return function () {
		let a = array(arguments);
		a = a.concat(array(args, 1));
		return f.apply(this, a);
	};
}

function partial(f) {
	const args = arguments;
	return function () {
		let a = array(args, 1);
		const i = 0;
		let j = 0;
		for (let i = 0; i < a.length; i++) {
			if (a[i] === undefined) {
				a[i] = arguments[j++];
			}
			a = a.concat(array(arguments, j));
			return f.apply(this, a);
		}
	};
}

const f = function (x, y, z) {
	return x * (y - z);
};

partialLeft(f, 2)(3, 4);
partialRight(f, 2)(3, 4);
partial(f, undefined, 2)(3, 4);
