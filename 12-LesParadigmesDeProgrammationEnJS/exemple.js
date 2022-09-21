// const tabNumbers = [0,1,2,3,4,5,6,7,8,9];
// let tab = [];

// for(let i = 0; i < tabNumbers.length; i++) {
//     if(tabNumbers[i] % 2 === 0) {
//         tab.push(tabNumbers[i])
//     }
// }
// console.log(tab);

//  La programmation fonctionnelle
const tabNumbers = [0,1,2,3,4,5,6,7,8,9];

const checkPair = n => n % 2 === 0;
 tabNumbers.filter(checkPair)
 console.log(tabNumbers.filter(checkPair));