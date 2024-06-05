// ////////////////////////////////////////////////////////// 1- misol
// function getSum(n) {
//   let bir = 1;
//   let kopaytma = 1;
//   for (let i = 1; i <= 2 * n - 1; i += 3) {
//     bir *= i;
//   }
//   for (let j = 1; j <= n - 1 * 2; j += 1) {
//     kopaytma *= j;
//   }
//   console.log("bir:", bir);
//   console.log("kopaytma:", kopaytma);
//   console.log(bir + kopaytma);
// }
// getSum(4);

// /////////////////////////////////////////////////////////////// 2-misol
// let str = " Abdullaziz , Murod , Yulduz , Abdug'affor , Jamila"
// let arr = str.split (" ");
//  let max = [0]
//  let min = [0]
//  for(let el of arr) {
//   if(el.length > max.length){
//     max = el
//   }
//   if(el.length < min.length){
//     min = el
//   }
//  }
//  console.log(max , min);

//////////////////////////////////////////////////////////////////////// 3-misol
// function getDividers(arr, n) {
//   let yangiarr = arr.filter((el) => el % n === 0);
//   return yangiarr;
// }
// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// console.log(getDividers(arr, n));
//////////////////////////////////////////////////////////////////////// 7- misol
// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];

// function ochirish(...ids) {
//     let result = products.filter((el) => !ids.includes(el.id))
//     return result;
// }

// console.log (ochirish(4, 6, 9))


/////////////////////////////////////////////////////////////////////////// 8-misol

// function increaseProductPrice(products, id, n) {
//   let are = products.map((el) => el.id === id ? { ...el, price: el.price += el.price * n / 100 } : el)
//   return are
// }
// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];
// console.log(increaseProductPrice(products, 6, 20))

/////////////////////////////////////////////////////////////////////////////// 9-misol

// String.prototype.count = function ( char ) {

//   return this.split( '' ).reduce( ( acc, el ) => el === char ? ++acc : acc, 0 )
// }

// let str = "Abdulaziz Programmer"
// let char = "a"

// let res = str.count( char );

// console.log( " bu harfdan ",res, " ta bor");
