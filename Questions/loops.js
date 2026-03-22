// 1. Output

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//2. Output

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//3. Output

for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

//4. Output

for (var i = 0; i < 3; i++) {
  setTimeout(
    ((j) => () => console.log(j))(i),
    1000
  );
}

// 5. Output

const arr = [1, 2, 3];

arr.forEach(async (num) => {
  await new Promise(res => setTimeout(res, 1000));
  console.log(num);
});

console.log("Done");

// 6. Output
(async () => {
  for (const num of arr) {
    await new Promise(res => setTimeout(res, 1000));
    console.log(num);
  }
  console.log("Done");
})();

// 7. Output
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outer;
    console.log(i, j);
  }
}

// 8. Output
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) continue outer;
    console.log(i, j);
  }
}

// 9. Output
const arr1 = [1, 2, 3, 4];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 2) {
    arr1.splice(i, 1);
  }
  console.log(arr1[i]);
}

// 10. Output
for (let i = 0; i < 3; i++) {
  try {
    if (i === 1) break;
  } finally {
    console.log("finally", i);
  }
}

// 11. Output
function test() {
  let result = [];

  for (var i = 0; i < 3; i++) {
    result.push(() => i);
  }

  return result;
}

const arr2 = test();
console.log(arr[0](), arr[1](), arr[2]());

// 11. Output
function test() {
  let result = [];

  for (let i = 0; i < 3; i++) {
    result.push(() => i);
  }

  return result;
}

const arr3 = test();
console.log(arr3[0](), arr3[1](), arr3[2]());