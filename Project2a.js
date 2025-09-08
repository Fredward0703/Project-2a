// Coding Challenge 02

// Code goes here
let productName = "USF18Shirts";
console.log("The thing I am selling is:", productName);
let costPerUnit = 16;
console.log("The cost of each shirt is:", costPerUnit);
let basePrice = 18;
console.log("The base price is:", basePrice);
let discountRate = 0.7;
console.log("The discount for these bad boys are:", discountRate);
let salesTaxRate = 0.07;
console.log("Tax Rate is:", salesTaxRate);
let fixedMonthlyCosts = 100;
console.log("The cost to run these shirts are:", fixedMonthlyCosts);
let discountedPrice = basePrice * (1-discountRate);
console.log("The discounted Price is:", discountedPrice);
let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
console.log("The final price with tax is:",finalPriceWithTax);
let profitPerUnit = finalPriceWithTax - costPerUnit;
console.log("The profit per unit is:",profitPerUnit);
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
console.log("The break even units is;",breakEvenUnits);
let isProfitablePerUnit = profitPerUnit > 0;
console.log("Are these shirts profitable (Does not matter, GO BULLS!!!):", isProfitablePerUnit);
