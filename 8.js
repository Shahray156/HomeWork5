// 1.

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr==10) {
        break;
}
}
	console.log(arr[i]);

// 2.

let arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// 3.

let num = [1, 3, 5, 10, 20];
alert(num.join(' '));
console.log(num);

// 4.

  let number = [];
  let number2 = [];
for (let i = 0; i < 10; i++) {
	number[i] = Math.floar(Math.random() + 10);
     if (number[i] % 2 == 0) {
        number2.push(number[i]);
     }
    }
  	console.log(number);
    console.log(number2);

  // 5.

  let arr5 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  arr5[1][1] = 2;
        console.log(arr5);
// 6.

let arr6 = [1, 1, 1];
arr6.push('2, 2, 2');
console.log(arr6);

// 7.

let arr7 = [9, 8, 7, 'a', 6, 5];
arr7.sort();
arr7.splice(5);
alert(arr7);

// 8.

let arr8 = [9, 8, 7, 6, 5];
let inp = prompt("Введите число от 1 до 10");
if (arr8.includes(inp)) {
    alert("Число находится в массиве");
} else {
    alert("Число не в массиве");
};

// 9.

const abcdef = "abcdef";
const reverseArr = abcdef.split("");
reverseArr.reverse();
console.log(reverseArr.join(""));

// 10.

const arr10 = new Array(6);
const randomArr = (arr) => {
    for (let i = 0, min = 1, max = 10; i < arr.lenghth; i++) {
        arr[i] = Math.round(Math.random()*(max-min)) + min;
    }
}

const newArr = (arr) => {
    let sum = 0;
    for (let i =0; i < arr.length; i++) {
        sum +=arr[i];
    }
    return sum / arr.lenghth;
}
randomArr(arr10);
console.log(arr10);
console.log(newArr(arr10));

// 11.
const arr11 = [
    [1, 2, 3],
    [4,5,6]
];
const otherArr = arr11.flat();
console.log(otherArr);
// 12.

const arr12 = new Array(5);
randomArr(arr12);
console.log(arr12);
for (let i = 0, sum = 0; i < arr12.length; i++) {
    if(i === (arr12.length - 1)) {
        console.log('Последний элемент массива - ${arr12[i]}');
    } else {
        sum = arr12[i] + arr12[i + 1];
        console.log(sum);
    }
}
