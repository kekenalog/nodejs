var a = 5;
var b = a;

b = 6;

console.log(a);
console.log(b);

//复杂类型

var aa = ['hello', 'world'];
var bb = aa;
console.log(aa);
console.log(bb);
console.log(aa == bb);

bb[0] = 'bye';
console.log(aa[0]);
console.log(bb[0]);

console.log(aa);
console.log(bb);

/**
 * 类型的困惑
 * JavaScript与其他面向对象语言一样有相应的构造器
 */
console.log("\n\n==========================\n类型的困惑\n JavaScript与其他面向对象语言一样有相应的构造器");
var a1 = 'woot';
var b1 = new String('woot');

console.log(a1);
console.log(b1);

console.log(a1 == b1);
console.log(a1 + b1);

console.log("a1 type of " + typeof a1);
console.log("b1 type of " + typeof b1);

console.log(a1 instanceof String);
console.log(b1 instanceof String);

//考虑到差异性，建议始终通过直观的方式进行定义,避免使用new

//重要的事情，说3遍
/**
 * 一些特定的值会被判定为false:null,undefined,' ',还有 0
 * 一些特定的值会被判定为false:null,undefined,' ',还有 0
 * 一些特定的值会被判定为false:null,undefined,' ',还有 0
 */

var a2 = 0;
if (a2) {
    console.log("特殊值=============0");
} else {
    console.log("特殊值0,被判定为false");
}
console.log("a2 == false, ============" + (a2 == false));
console.log("a2 === false, ============" + (a2 === false));

/**
 * 注意点
 * typeof 不会把null识别为类型为null
 */
console.log("typeof 不会把null识别为类型为null == " + (typeof null == 'object'));
/**
 * 数组也不例外,就是算是通过[]这种方式定义数组也是如此
 */
console.log("数组或者通过[]这种方式定义数组,被判定为object ==== " + (typeof [] == 'object'));


//------------------------------------函数----------------------------------
var a3 = function () {

}
console.log("函数a3 ==> " + (a3));
/**
 * 函数可以进行命名,主要是能区分函数名和变量名
 */
var a5 = function a4() {
    console.log('function' == typeof a4);
};
console.log(a5);
console.log("====================");
a5();
//console.log("call function a5 " + a5);

//=====================This ,function#call及function#apply====================
function a6() {
    // window == this; //存在异常 ReferenceError: window is not defined
    console.log('-----------------');
}

a6();

//调用函数时,使用.call和.apply方式可以改变this的值
function a7() {
    console.log("call Function a7 ")
    console.log("this.a == 'b' 值" + (this.a == 'b'));
}

a7();
a7.call({a: 'b'})

//call和apply的区别是，call接受参数列表,而apply接受一个参数数组

function a8(b, c) {
    console.log("call Function a8 ");
    console.log("a=====" + (this.a == 'b'));
    console.log("b==first," + (b == 'first'));
    console.log("c==second," + (c == 'second'));
}

console.log("=======First Call a8 ");
a8.call({a: 'b'}, 'first', 'second');
console.log("=======Second Call a8 ");
a8.apply({a: 'b'}, ['first', 'second']);


//----------------------函数的参数数量-----------------------
//函数参数数量,该属性知名函数声明是可接收的参数数量,属性名为length
var a9 = function (a, b, c) {
    console.log("Function a9 called ...")
};

console.log("Function param length is : " + a9.length);


/**
 * 闭包
 * JavaScript中，每次函数调用时,新的作用域就会产生
 * 在某个作用域中定义的变量只能在该作用域或其内部作用域(该作用域中定义的作用域中才能访问到)
 *
 */

var b2 = 5;

function woot() {
    console.log("b2 == 5 " + (b2 == 5));//false
    var b2 = 6;

    function test() {
        console.log("b2 == 6 " + (b2 == 6));//true
    }

    test();
}

woot();

console.log("-------------------------");
var b3 = 4;

(function () {
    var b3 = 5;
    console.log("b3 = 5 is setting "+ b3);
})()
console.log("()()=== is called ");
console.log(b3 == 5);//true

//JavaScript 中没有class关键词,类只能通过函数来定义
// function Animal() {
//
// }

// Animal.prototype.eat = function (food) {
//     console.log("Animal method eat " + food)
// };
// var dog = new Animal();
// console.log(dog)
// dog.eat('meat');


//注意，在prototype的函数内部,this并非象普通函数那样指向global对象,而是指向痛殴该类创建的实力对象
function Animal(name) {
    this.name = name;
}
Animal.prototype.getName = function () {

    return this.name;
}

console.log("===property name===")
var dog = new Animal('qiuqiu');
console.log(dog.getName());