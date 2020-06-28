// function dec(id){
//     console.log('evaluated', id);
//     return (target, property, descriptor) => console.log('executed', id);
// }
  
//   class Example {
//       @dec(1)

//       @dec(2)

//       method(){}
//   }

  function doSomething(name) {
    console.log('Hello, ' + name);
  }
  
  function loggingDecorator(wrapped) {
    return function() {
      console.log('Starting');
      const result = wrapped.apply(this, arguments);
      console.log('Finished');
      return result;
    }
  }
  
  const wrapped = loggingDecorator(doSomething);