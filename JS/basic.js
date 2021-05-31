// // // id
// // //name
// // // is this your imei number?
// // //yes
// // //enter your phone number
// // //no
// // // send your details to this number

// // function imeiCheck(imei){
// //     var id = prompt("Enter Your ID ? ")
// //     var uName = prompt("Enter Your Name ?")
// //     var val = confirm("Is this your imei Number"+imei+" ?")
// //     result = (val == true) ? result = prompt("Enter Your Phone Number :")
// //     : result = alert("Send Your detaills to this number")
// //     console.log(result);
// // }




// // // Traditional Function

// // // function Oxford(){
// // //     console.log("It's Traditional Oxford");
// // // }

// // // Oxford()

// // // Arrow Function

// // // var X = x => console.log("It's Arrow Function");

// // // // Oxford()
// // // console.log(X)

// // // var Sum = (x,y) => console.log(x+y)

// // //Regular Function
// // function  vb(x) {
// //     console.log(`Hi machan ${x}`);
// // }

// // // Arrow Function

// // // Explicit Return, Multi-Line
// // var Car = a => {
// //     return a+1
// // }
// // // Explicit Return, Single Line

// // var home = () => {return 10}
// // // // Implicit Return, Multi Line
// // // a => (
// // //     a
// // // )
// // // // Implicit Return, Single Line
// // // var Chathiru = () => console.log("Ado Padam Aha ganin Bn");
// // // //Multiple Parameters, Parenthesse Required
// // // a, b => (a, b) 

// // console.log(`My home value is ${home()}`)


// // User input number 1
// var num1 = Number(prompt("Enter Number 1 : "))
// // User input number 2
// var num2 = Number(prompt("Enter Number 2 : "))
// // arrow function (numbers dek ekthu krnn one)
// var addAnswer = (fuck,you) => {return (fuck+you)}

// // function addAnswer(fuck,you){return (fuck+you)}
// // console eke `Answe is `
// // console.log(`Answer is : ${addAnswer(num1,num2)}`)

// console.log("Answer is :"+addAnswer(num1,num2));



// var text = "";
// var i = 0;
// while (1 < 5) {
//     console.log(i);
//     i++;
// }

// if else
// var x = 5;
// var y = 3;


// if (x<y) {
//     console.log("X")}
// else{
//     console.log("Y")}

// if (m<35) {
//     console.log("Fail")
// }else if(m<45){
//     console.log("C")
// }


// var score  = Number(prompt("Enter Your Score : "))
// var passMark = (x) => {
//     if(x<35){
//         mark = "F"
//     }else if(35<=x&x<45){
//         mark = "S"
//     }else if(45<=x&x<65){
//         mark = "C"
//     }else if(65<=x&x<75){
//         mark = "B"
//     }else if(75<=x&x<=100){
//         mark = "A"
//     }else mark = "Invalid Input"

//     document.write(`Your Pass Mark Is ${mark}`)
// }
// passMark(score)


var x = 1;

// do{console.log(`Menn Meka weda karanooo ${x}`);x++;
//     if(x==7){
//         console.log("Dn Bake gahanai Hadanne");
//         continue;
//     }
// }while(x<10)