"use strict";


// 1. isHometown
function isHometown(town) {
    return town === 'San Francisco';
}


// 2. getFullName
function getFullName(first, last) {
    return `${first} ${last}`
}


// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05): {
    let subTotal = basePrice *(1 + tax);
    let fee = 0;

    if (const state === 'CA') {
        fee = 0.3 * subtotal;
    }
    else if (state === 'PA') {
        fee = 2;
    }
    else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
      return subtotal + fee  
    }
