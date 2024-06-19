'using strict';

const calcTip = (bill) => bill >= 50 && bill <= 100 ? bill * 0.15 : bill* .2;
const bills = [125, 255, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);