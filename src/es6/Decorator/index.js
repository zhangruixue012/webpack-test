import { mixins } from './mixins';

const Foo = {
  foo() { console.log('foo'); },
};

@mixins(Foo)
class MyClass {}

const obj = new MyClass();
// console.log('obj:', obj.foo());
