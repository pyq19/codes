/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let bin = (x ^ y).toString(2);
    let res = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin.charAt(i) === '1') {
            res++;
        }
    }
    return res;
};