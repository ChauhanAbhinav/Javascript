// Flat the array below:

let arr = [1, [2, [3, 4], 5], [6, 7]];
let arrBasic = [1, [2, 3, 4, 5], [6, 7]];

function flatArrBasic (arr){
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) {
            for (let j = 0; j < arr[i].length; j++) {
                flat.push(arr[i][j]);
            }
        } else {
            flat.push(arr[i]);
        }
    }
    return flat;
}

console.log(flatArrBasic(arrBasic));

// nested

function flatArrBasic (arr){
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) {
            flat = [...flat, ...flatArrBasic(arr[i])];
        } else {
            flat.push(arr[i]);
        }
    }
    return flat;
}

console.log(flatArrBasic(arr));

let arr2 = [1, [2, [3, 4], [5]], [6, 7]];


