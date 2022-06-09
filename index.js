// Write your solution in this file!
/*function myFunc() {
return 'bob';
}*/
var customerName = "bob";
console.log(customerName);

function upperCaseCustomerName() {
    customerName = (customerName.toUpperCase());
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'bob';
    leastFavoriteCustomer = 'deno'
    return leastFavoriteCustomer;
}