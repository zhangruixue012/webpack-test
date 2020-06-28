// 1. 定义一个函数
function greeting() {
    console.log('hello world');
}

greeting();


// 2. 函数也是对象--可以像操作对象一样操作函数

greeting.lang = 'English';

console.log(greeting.lang);


// 3. 可以将函数赋值给变量

const square = function(x) {
    return x*x;
}
console.log(square(2));

// 4. 可以将函数作为参数传递给其他函数

function test1() {
    console.log('how are you')
}

function test2() {
    console.log('I am fine')
}

function test3(type, param1, param2) {
    if(type === 'test1') {
        param1()
    }
}

test3('test1', test1, test2);

// 5. 高阶函数就是一个将函数作为参数或者返回值的函数   map, filter, reduce

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    let newArr = [];

    for(let i=0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }

    return newArr;
}

const lenArray = mapForEach(strArray, function(item) {
    return item.length;
});

console.log('5:', lenArray);