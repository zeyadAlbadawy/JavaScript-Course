'use strict';

// Ordinaary funcation with params
function juiceMaker(apples, watermellon) {
    return `I want a juce with ${apples} apples  and ${watermellon} watermellon`;
}

// Anonymous Function 
const calcAge = function(currentAge) {
    return 2024 - currentAge;
}
console.log(juiceMaker(3,4));

// Arrow Function

const yearsUntilRet = (birthyear, firstName) =>{
    const currAge = 2024 - birthyear;
    const leftYears = 60 - currAge;
    return `${firstName} has ${leftYears} years Until Retirement !`;
}

console.log(yearsUntilRet(2003, "Zeyad"));