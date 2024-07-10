"use strict";

/*
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const innerTxt = document.querySelector("textarea").value;
  const splittedArr = innerTxt.split("\n");
  let innerElmSplit = [];
  const finalRes = [];
  let finalStr = "";
  for (const [idx, elm] of splittedArr.entries()) {
    innerElmSplit = elm.trim().split("_");
    for (let i = 0; i < innerElmSplit.length; i++) {
      const currElm = innerElmSplit[i];
      currElm.toLowerCase();
      //
      i != 0
        ? (finalStr += currElm[0].toUpperCase() + currElm.slice(1))
        : (finalStr += currElm);
    }
    console.log(`${finalStr.padEnd(20)} ${"✅".repeat(idx + 1)}`);
    finalStr = "";
  }
});
