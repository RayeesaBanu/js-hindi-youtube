const accountId=12347
let accountEmail="raeesa@gmail.com"
var accountPassword="98345"
accountCity="Jaipur"
let accountState;

// accountId=2   //not allowed

accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
