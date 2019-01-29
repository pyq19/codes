/*
国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 
比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
为了方便，所有26个英文字母对应摩尔斯密码表如下：
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。
返回我们可以获得所有词不同单词翻译的数量。

例如:
输入: words = ["gin", "zen", "gig", "msg"]
输出: 2
解释: 
各单词翻译如下:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

共有 2 种不同翻译, "--...-." 和 "--...--.".

注意:
单词列表words 的长度不会超过 100。
每个单词 words[i]的长度范围为 [1, 12]。
每个单词 words[i]只包含小写字母。

*/


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let s = 'abcdefghijklmnopqrstuvwxyz';
    let mos = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    let mosString = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        mosString.push(word.split('').map(c => mos[s.indexOf(c)]).join(''));
    }

    let seen = {};
    let res = 0;
    for (let j = 0; j < mosString.length; j++) {
        let item = mosString[j];
        if (seen[item] !== 1) {
            seen[item] = 1;
            res++;
        }
    }
    return res;
};

console.log(uniqueMorseRepresentations(['gin', 'zen']))

// https://leetcode.com/problems/unique-morse-code-words/discuss/120805/Functional-JavaScript-or-map-reduce
// 1. Map each word into it's morse code representation
// 2. Reduce the list of morse code strings into a single set
// 3. Return the size of the set

var codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
var getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

var uniqueMorseRepresentations = function (words) {
    let mosArray = words.map(word => word.split('').map(char => codes[getIdx(char)]).join(''));
    // console.log(mosArray);   // [ '--...-.', '--...-.' ]
    return mosArray.reduce((set, mosString) => set.add(mosString), new Set()).size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

var uniqueMorseRepresentations = function (words) {
    return words.map(word => word.split('').map(char => codes[getIdx(char)]).join(''))
        .reduce((set, mosString) => set.add(mosString), new Set()).size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));