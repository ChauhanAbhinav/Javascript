console.log(Number("123"));
console.log(Number("123abc"));

console.log(String(123));
console.log(Boolean(0));

console.log(5 + "5");
console.log("5" - 2);

console.log(Boolean(""));
console.log(Boolean("false"));

console.log(null == undefined);
console.log(null === undefined);

console.log([] == false);

console.log([1] == true);

console.log([] == ![]);
console.log(![]);

console.log("5" + 2 + 3);
console.log(2 + 3 + "5");

console.log(+"123");
console.log(+"abc");

console.log(!!"hello");
console.log(!!0);

console.log([] + []);
console.log([] + {});
console.log({} + []);

console.log(false == "0");
console.log(false === "0");

console.log(null == 0);
console.log(undefined == 0);

console.log(null == 0);
console.log(undefined == 0);

console.log([] == 0);
console.log([] === 0);

console.log(" \t\n" == 0);

console.log({} == {});

let obj = {
  valueOf() { return 10; },
  toString() { return "20"; }
};
console.log(obj + 5);

console.log(NaN == NaN);
console.log(Object.is(NaN, NaN));

console.log(0 == '0');
console.log(0 == '');
console.log('0' == '');

console.log([] == '');
console.log([] == 0);
console.log('' == 0);