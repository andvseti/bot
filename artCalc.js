function calc(lvl, lvlp, quantity) {
    console.log("calc")
    if (lvlp == lvl - 1) return quantity * 2;
    else if (lvlp == lvl -2) return quantity * 3;
    else if (lvlp == lvl -3 && lvlp != 6) return quantity * 4;
    else if (lvl == 9 && lvlp == 6) return quantity * 3.5;
    else if (lvl == 8 && lvlp == 4) return quantity * 5.5;
    else if (lvl == 9 && lvlp == 5) return quantity * 5;
    else if (lvl == 9 && lvlp == 4) return quantity * 6.5;
    else return false;
}
function calcP(lvl, lvlp, quantity) {
    console.log("calcP")
    if (lvlp == lvl - 1) return quantity / 2;
    else if (lvlp == lvl -2) return quantity / 3;
    else if (lvlp == lvl -3 && lvlp != 6) return quantity / 4;
    else if (lvl == 9 && lvlp == 6) return quantity / 3.5;
    else if (lvl == 8 && lvlp == 4) return quantity / 5.5;
    else if (lvl == 9 && lvlp == 5) return quantity / 5;
    else if (lvl == 9 && lvlp == 4) return quantity / 6.5;
    else return false;
}

module.exports.calc = calc;
module.exports.calcP = calcP;