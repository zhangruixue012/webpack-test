
import React from 'react';
import ReactDOM from 'react-dom';
import Print from './print';
import App from './App'


ReactDOM.render(
  <App>link的单元测试</App>,
  document.getElementById('root')
);


const printMe = new Print();

console.log('实例属性可以被子类继承:', printMe.count);

console.log('静态属性不可以被子类继承:', printMe.write);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

      navigator.serviceWorker.register('/src/sw.js').then(registration => {
        console.log('SW registered: ', registration);

      }).catch(registrationError => {

        console.log('SW registration failed: ', registrationError);

      });

    });
}
