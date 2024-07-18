const accountId = 144553;
let accountEmail = "kunalahirwar@google.com"
var password = "12345"

accountCity = "gwalior" //not a good practice

let accountState;

// accountId = 2 //not allowded
accountEmail  = "hc@gmail.com"
password = "123"
accountCity = "jhansi"
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,password,accountCity,accountState])