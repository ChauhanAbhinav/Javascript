// Top 100 Advanced JavaScript Interview Questions
// Focus: Output, Errors, Results, and Values

// ===== CLOSURES & SCOPE =====
// Q1: What is the output?
function test() {
    let a = 1;
    function inner() {
        let a = 2;
        console.log(a);
    }
    inner();
    console.log(a);
}
test();

// Q2: What is the output?
function outer() {
    let counter = 0;
    return function() {
        return ++counter;
    };
}
const inc = outer();
console.log(inc(), inc(), inc());

//Similar
function outer() {
    let counter = 0;
    return function() {
        return counter++;
    };
}
const inc1 = outer();
console.log(inc1(), inc1(), inc1());

// Q3: What is the output?
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// Q4: What is the output?
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// Q5: What is the output? !important
const funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
}
console.log(funcs[0](), funcs[1](), funcs[2]());

// similar
const funcs2 = [];
for (var i = 0; i < 3; i++) {
    funcs2.push(
        (function(i) {
            return function() {
                return i;
            };
        })(i)
    );
}
console.log(funcs2[0](), funcs2[1](), funcs2[2]());


// ===== HOISTING =====
// Q6: What is the output?
console.log(x1);
var x1 = 5;

// Q7: What is the output?
console.log(y1);
let y1 = 5;

// Q8: What is the output?
sayHi();
function sayHi() {
    console.log('Hi');
}

// Q9: What is the output?
sayHi();
var sayHi = () => console.log('Hi');

// Q10: What is the output? !important
console.log(typeof x2);
let x2;

// similar !important
console.log(typeof y2);
var y2;

// ===== THIS BINDING =====
// Q11: What is the output? !important
const obj1 = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};
const greet1 = obj1.greet;
greet1();

// Q12: What is the output? !important
const obj2 = {
    name: 'John',
    greet: () => {
        console.log(this.name);
    }
};
obj2.greet();

// Q13: What is the output? !important
function Person1(name) {
    this.name = name;
}
Person1.prototype.greet = function() {
    console.log(this.name);
};
const p1 = new Person1('Alice');
const greet2 = p1.greet;
greet2();
p1.greet();

// Q14: What is the output?
const obj3 = {
    x: 42,
    getX: function() {
        const inner = () => this.x;
        return inner();
    }
};
console.log(obj3.getX());

// Q15: What is the output?
const obj4 = {
    count: 0,
    increment: function() {
        this.count++;
        return this.count;
    }
};
console.log(obj4.increment(), obj4.increment());

// ===== PROTOTYPES & INHERITANCE =====
// Q16: What is the output?
function Animal1() {}
Animal1.prototype.speak = function() { return 'sound'; };
function Dog1() {}
Dog1.prototype = Object.create(Animal1.prototype);
const dog1 = new Dog1();
console.log(dog1.speak());

// Q17: What is the output?
const parent1 = { x1: 1 };
const child1 = Object.create(parent1);
child1.x1 = 2;
console.log(parent1.x1, child1.x1);

// Q18: What is the output?
const obj5 = {};
console.log(obj5.hasOwnProperty('toString'));

// Q19: What is the output?
function F1() {}
F1.prototype.x1 = 1;
const a1 = new F1();
const b1 = new F1();
a1.x1 = 2;
console.log(b1.x1);

// Q20: What is the output?
console.log(Object.getPrototypeOf([]) === Array.prototype);

// ===== ASYNC/PROMISES =====
// Q21: What is the output?
Promise.resolve(1)
    .then(x => x + 1)
    .then(x => console.log(x));
console.log('sync');

// Q22: What is the output? !important
async function test1() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
}
test1();
console.log(3);

// Q23: What is the output?
Promise.resolve()
    .then(() => { throw new Error('error'); })
    .catch(() => console.log('caught'));

// Q24: What is the output?
const p11 = Promise.resolve(1);
const p21 = p11.then(x1 => x1 + 1);
console.log(p11 === p21);

// Q25: What is the output?
Promise.race([Promise.resolve(1), Promise.resolve(2)])
    .then(x => console.log(x));

Promise.all([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
])
.then(console.log)
.catch(console.log);

Promise.any([
  Promise.reject("Error1"),
  Promise.resolve(42),
  Promise.reject("Error2")
]).then(console.log);

Promise.all([
  new Promise(res => setTimeout(() => res(1), 100)),
  new Promise(res => setTimeout(() => res(2), 10))
]).then(console.log);

// ===== EVENT LOOP & MICROTASKS =====
// Q26: What is the output?
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

// Q27: What is the output?
console.log('start');
setTimeout(() => {
    console.log('timeout');
    Promise.resolve().then(() => console.log('promise'));
}, 0);
console.log('end');

// Q28: What is the output?
queueMicrotask(() => console.log('micro'));
setTimeout(() => console.log('macro'), 0);
console.log('sync');

// Q29: What is the output?
Promise.resolve().then(() => {
    console.log('1');
    setTimeout(() => console.log('2'), 0);
});

// Q30: What is the output? !important
for (let i1 = 0; i1 < 2; i1++) {
    setTimeout(() => console.log(i1), 0);
    Promise.resolve().then(() => console.log(i1 + 10));
}

// ===== OBJECT & DESTRUCTURING =====
// Q31: What is the output?
const { a13 = 5 } = {};
console.log(a13);

// Q32: What is the output? !important
const obj6 = { x10: 1, y2: 2 };
const { x10, ...rest1 } = obj6;
console.log(rest1);

// Q33: What is the output?
const [a2, b2, c2] = [1, 2];
console.log(c2);

// Q34: What is the output?
const { a3: { b3 } } = { a3: { b3: 1 } };
console.log(b3);

// Q35: What is the output?
const obj7 = { a: 1 };
const { a, a: x} = obj7;
console.log(a, x);

// ===== ARRAY METHODS =====
// Q36: What is the output?
[1, 2, 3].forEach((x, i) => console.log(i, x));

// Q37: What is the output?
const result1 = [1, 2, 3].map(x => x * 2).filter(x => x > 2);
console.log(result1);

// Q38: What is the output?
console.log([1, 2, 3].find(x => x > 2));

// Q39: What is the output?
console.log([[1, 2], [3, 4]].flat());

// Q40: What is the output?
console.log([1, [2, [3, 4]]].flat(Infinity));

// Q41: What is the output?
console.log([1, 2, 3].reduce((a, b) => a + b, 0));

// Q42: What is the output?
console.log([1, 2, 3].some(x => x > 2));

// Q43: What is the output?
console.log([1, 2, 3].every(x => x > 0));

// Q44: What is the output? !important
const arr1 = [1, 2, 3];
arr1[10] = 10;
console.log(arr1.length);

// Q45: What is the output?
console.log([1, 2, 3].indexOf(2));

// ===== TYPE COERCION =====
// Q46: What is the output?
console.log(1 + '2');

// Q47: What is the output?
console.log('2' - 1);

// Q48: What is the output?
console.log(null == undefined);

// Q49: What is the output?
console.log(null === undefined);

// Q50: What is the output?
console.log(false == 0);

// Q51: What is the output?
console.log([] == ![]);

// Q52: What is the output?
console.log([] == false);

// Q53: What is the output?
console.log('' == false);

// Q54: What is the output?
console.log(0 == '');

// Q55: What is the output?
console.log(typeof NaN);

// ===== OBJECTS & REFERENCES =====
// Q56: What is the output?
const a6 = { x: 1 };
const b4 = a6;
b4.x = 2;
console.log(a6.x);

// Q57: What is the output?
const obj8 = { a: 1 };
Object.freeze(obj8);
obj8.a = 2;
console.log(obj8.a);

// Q58: What is the output?
const obj9 = { a7: { b: 1 } };
Object.freeze(obj9);
obj9.a7.b = 2;
console.log(obj9.a7.b);

// Q59: What is the output?
const obj10 = {};
Object.defineProperty(obj10, 'x', { value: 1, writable: false });
obj10.x = 2;
console.log(obj10.x);

// Q60: What is the output?
const obj11 = {};
Object.defineProperty(obj11, 'x', { value: 1, enumerable: false });
console.log(Object.keys(obj11));

// ===== FUNCTIONS & ARROW FUNCTIONS =====
// Q61: What is the output?
const f1 = (a, b = 2) => a + b;
console.log(f1(1));

// Q62: What is the output?
const f2 = (...args1) => args1;
console.log(f2(1, 2, 3));

// Q63: What is the output?
function f3(a, a) {
    return a;
}
console.log(f3(1, 2));

// Q64: What is the output?
const f4 = (x = f4()) => x;
console.log(f4());

// Q65: What is the output?
const f5 = x => x * 2;
console.log(f5(f5(5)));

// ===== CLASSES & CONSTRUCTORS =====
// Q66: What is the output?
class A1 {
    constructor() {
        this.x = 1;
    }
}
class B1 extends A1 {}
const b5 = new B1();
console.log(b5.x);

// Q67: What is the output?
class A2 {
    static x = 1;
}
console.log(A2.x);

// Q68: What is the output?
class A3 {
    #x = 1;
    getX() { return this.#x; }
}
const a11 = new A3();
// console.log(a11.#x);
console.log(a11.getX());

// Q69: What is the output?
class A4 {
    #x = 1;
    constructor() {
        console.log(this.#x);
    }
}
new A4();

// Q70: What is the output?
class A5 {
    get x() { return 1; }
}
const a12 = new A5();
console.log(a12.x);

// ===== ADVANCED OBJECT FEATURES =====
// Q71: What is the output?
const handler1 = {
    get(target, prop) {
        return prop in target ? target[prop] : 'not found';
    }
};
const proxy1 = new Proxy({}, handler1);
console.log(proxy1.x);

// Q72: What is the output?
const obj12 = new Proxy({}, {
    get() { return 'intercepted'; }
});
console.log(obj12.anything);

// Q73: What is the output? !important
const sym1 = Symbol('x');
const obj13 = { [sym1]: 1 };
console.log(Object.keys(obj13));

// Q74: What is the output? !important
const obj14 = {
    [Symbol.iterator]: function*() {
        yield 1;
        yield 2;
    }
};
console.log([...obj14]);

// Q75: What is the output?
const map1 = new Map([['a', 1]]);
console.log(map1.get('a'));

// ===== STRINGS =====
// Q76: What is the output?
console.log('hello'.charAt(0));

// Q77: What is the output? !important
console.log('hello'[0]);

// Q78: What is the output?
console.log('hello'.charCodeAt(0));

// Q79: What is the output?
console.log('hello'.toUpperCase());

// Q80: What is the output?
console.log('hello world'.split(' '));

// ===== REGEX =====
// Q81: What is the output?
console.log('hello123'.match(/\d+/));

// Q82: What is the output?
console.log('hello'.replace('e', 'a'));

// Q83: What is the output?
console.log('hello'.includes('ll'));

// Q84: What is the output?
console.log('  hello  '.trim());

// Q85: What is the output?
console.log('hello'.repeat(2));

// ===== NUMBERS & MATH =====
// Q86: What is the output? !important
console.log(0.1 + 0.2 === 0.3);

// Q87: What is the output?
console.log(Math.floor(4.7));

// Q88: What is the output?
console.log(Math.ceil(4.2));

// Q89: What is the output? !important
console.log(Math.round(4.5));

// Q90: What is the output?
console.log(parseInt('42px'));

// ===== MISCELLANEOUS =====
// Q91: What is the output? !important
const x9 = 5;
console.log(void x9);

// Q92: What is the output?
console.log(typeof undefined);

// Q93: What is the output?
console.log(typeof function() {});

// Q94: What is the output? !important
console.log(Object.is(NaN, NaN));

// Q95: What is the output?
console.log({} + {});

// Q96: What is the output?
const obj15 = { valueOf: () => 42 };
console.log(obj15 + 1);

// Q97: What is the output? !important
console.log(1..toString());

// Q98: What is the output? !important
const arr2 = [1, 2, 3];
arr2.length = 2;
console.log(arr2);

// Q99: What is the output? !important
console.log(typeof null);

// Q100: What is the output?
try {
    throw new Error('error');
} catch (e) {
    console.log(e.message);
}

// Others:
// 101. What is the output? !important
(function() {
  var a = b = 5;
})();
console.log(typeof a);
console.log(typeof b);

// 102. What is the output?
console.log(0.1 + 0.2);
console.log(Math.max());
console.log(Math.min());

// 103. What is the output?
console.log(typeof class {});

// 104. What is the output? !important
console.log(1>2>3);

// 105. What is the output? !important
console.log(1<2<3);
