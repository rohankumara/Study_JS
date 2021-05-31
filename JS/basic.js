// id
//name
// is this your imei number?
//yes
//enter your phone number
//no
// send your details to this number

function imeiCheck(imei){
    var id = prompt("Enter Your ID ? ")
    var uName = prompt("Enter Your Name ?")
    var val = confirm("Is this your imei Number"+imei+" ?")
    result = (val == true) ? result = prompt("Enter Your Phone Number :")
    : result = alert("Send Your detaills to this number")
    console.log(result);
}