// Bai_1
  
// let random = Number(prompt('Enter a number: '));
// let totalOdd = 0;
// let totalEven = 0;
// let i = 1;
// for (let i=1;i<=random;i++){
//         if(i%2==0){
//             totalEven+=i;
//         }else{
//             totalOdd+=i;
//         }
//     }
// console.log(`Total odd numbers from 1 to ${random} are: ${totalOdd}`);
// console.log(`Total even numbers from 1 to ${random} are: ${totalEven}`);

// Bai_2
// let num = Number(prompt('Enter a number: '));
// let total = 0;

// if (num < 2) {
//     console.log(`${num} is not a prime number`);
// } 
// else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             total++;        
//         }
//     }
//     if (total === 0) {
//         console.log(`${num} is a prime number`);
//     } else {
//         console.log(`${num} is not a prime number`);
//     }
// }
 
       
         
     
  
    
// Bai_3

// let randomNum = Number(prompt('Enter a number: '));

// if (randomNum <= 2) {
//     console.log(`There is no prime number smaller than ${randomNum}`);
// } else {
//     console.log(`Prime number(s)  smaller than ${randomNum} is/are: `);
//     let prime = 0;
//     for (let i = 2; i < randomNum; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 prime++;
//             }
//         }
//         if (prime === 0) {
//             console.log(i);
//         }
       
//     }
// }

// Bai_4

// let randomNum = Number(prompt('Enter a number: '));
// let a1 = 1, a2 = 1;

// if (randomNum == 1 || randomNum == 2) {
//     console.log(1);
// } else {
//     let i = 3, a3;
//     while (i <= randomNum) {
//         a3 = a1 + a2;
//         a1 = a2; 
//         a2 = a3;
//         i++;
//     }
//     console.log(`Element number ${randomNum} of Fibonacci range is: ${a3}`);
// }
// Bai_5

// let sum = 0;
// let randomNum = Number(prompt('Input a random number: '));

// while (randomNum >= 0) {
//   randomNum = Number(prompt('Input a number: '));
//   sum += randomNum;
// }
// console.log(sum);


// Bai_6

// let randomString = prompt('Input a string: ')
// sym= 0;

// for (let i = 0; i < Math.ceil(randomString.length / 2); i++) {
//     if (randomString[i] !== randomString[randomString.length - i - 1]) {
//         console.log(`String ${randomString} is asymmetrical`);
//         break;
//     } else {
//         sym++;
//     }
// }
// if (sym=== Math.ceil(randomString.length / 2)) {
//     console.log(`String ${randomString} is symmetrical`);
// }

// Bai_7

// let M = Number(prompt('Enter M: '));
// let N = Number(prompt('Enter N: '));


// for (a = 0; a <= M; a++) {
//     for (b = 0; b <= N; b++) {
        
//       document.write(`*`);
//     }
//     document.write("<br/>")
// }


// Bai_8

// for(i = 9; i < 25; i++)
// 	{
// 		if((i * 2 + (36 - i) * 4) === 100){
// 			console.log('Số gà là: ' + i + '; Số chó là: '+(36-i));
// 		}
// 	}

// Bai_9

// let a1 = Number(prompt("Input a1"));
// let b1 = Number(prompt("Input b1"));
// let c1 = Number(prompt("Input c1"));
// let a2 = Number(prompt("Input a2"));
// let b2 = Number(prompt("Input b2"));
// let c2 = Number(prompt("Input c2"));
// let x,y;
// x =  c1/a1 -(a2*b1*c1-a1*b1*c2)/(a1*a2*b1-a1*a1*b2);
// y = (a2*c1-a1*c2)/(a2*b1-a1*b2);

// console.log("x =" + x);
// console.log("y =" + y);