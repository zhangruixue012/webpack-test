/* eslint-disable */
import { mixins } from './mixins';

const Foo = {
	foo() {
		console.log('foo');
	},
};

@mixins(Foo)
class MyClass {}
