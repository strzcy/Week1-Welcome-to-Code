//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let X = 0;
    let O = 0;

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === 'x') { 
            X++;
        } else if (str[i] === 'o') {
            O++;
        }
    }

    return X === O;

}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true