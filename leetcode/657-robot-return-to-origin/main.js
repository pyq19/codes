/**
 * https://leetcode.com/problems/robot-return-to-origin/
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let m = { 'L': 0, 'U': 0, 'R': 0, 'D': 0 }
    for (let i = 0; i < moves.length; i++) {
        m[moves.charAt(i)]++;
    }
    if (m['L'] - m['R'] === 0 && m['U'] - m['D'] === 0) {
        return true;
    }
    return false;
};

// console.log('result: ' + judgeCircle("LDRRLRUULR"))
console.log('result: ' + judgeCircle("RLUURDDDLU"))
