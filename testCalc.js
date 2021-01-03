const count = require("./artCalc.js").calc;
let quantity = 1;
let lvl = 6;
let lvlp = 8;
while (lvl <= 9) {
    console.log(count(lvl, lvlp, quantity));
    lvl++;
}
