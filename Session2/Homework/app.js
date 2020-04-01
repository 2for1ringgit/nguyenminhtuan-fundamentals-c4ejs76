// Bai 1
// let number = Number(prompt("Input number here: "));
// if (number < 0) {
//     console.log("Invalid number");
// }
// for (i = number - 1; i >= 1; i--) {
//     number = number * i;
// }
// console.log(number);

// Bai 2
// let age = Number(prompt("Input your age:"));
// let name = prompt("Input your name: ");
// if (age < 18) {
//     console.log(name + "Not old enough to view this")
// }
// else if (age>=18){
//     let ask = prompt (name + " continue to the website?");
//     if (ask === "yes"){
//     console.log(name + " login succesfully");
//     }
//     else if (ask === "no"){
//     console.log(name + "has logged out");   
//     }
// }

//Bai 3
// const username = prompt("Input your username:");
// const password = prompt("Input your password:");
// let username2 = "mindx";
// let password2 = "thanhcong";
// if (username === username2 && password === password2) {
//     console.log("Login successfully");
// }
//     else if (username !== username2 || password2 !== password) {
//     console.log("Failed to login")
//     }
//     else {
//     console.log("Error"); 
//     }

//Bai 4

// let name = prompt("Input name:");
// let birthmonth = prompt("Input your birth month:");
// switch (birthmonth) {
//     case 0:
//     case 1:
//     case 2:
//         console.log(name + "born in spring");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log(name + "born in summer");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log(name + "born in fall");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log(name + "born in winter");
//         break;
//     default:
//         console.log("Invalid month");
//         break;
// }

// Bai 5
// let condition = true;
// while(condition){
//     let a = Number(prompt("Input a:"));
//     let b = Number(prompt("Input b:"));
//     let c = Number(prompt("Input C:"));
//     let delta = Math.pow(b,2)-4*a*c;
//     if(delta < 0){
//         console.log("No solution");
//     }else if(delta === 0){
//         let x = (-b)/(2*a);
//         console.log("Only answer is x=${x}"");
//     }
//     else{
//         let x1= (-b+Math.sqrt(delta))/(2*a);
//         let x2= (-b-Math.sqrt(delta))/(2*a);
//         console.log("2 different outcome:");
//         console.log(`x1=${x1} and x2=${x2}`);
//     }
//     let answer1 = prompt("Do you want to continue ?");
//     if(answer1 === "yes"){
//         condition = true;
//     }else if(answer1 === "no"){
//         condition = false;
//         break;
//     }else{
//         console.log("No recognition");
//         break;
//     }
// }

//Bai 6
// let condtion = true;
// while(condtion){
//     let randomString = prompt("Write a random sentence:");
//     let a = randomString.length;
//     for(let i=a-1;i>=0;i--){
//         console.log(randomString[i]);
//     }
//     let answer = prompt("Continue with the program?");
//     if(answer === "yes"){
//         condtion = true;
//     }else if(answer === "no"){
//         condtion = false;
//         break;
//     }else{
//         console.log("Error");
//         break;
//     }
// }