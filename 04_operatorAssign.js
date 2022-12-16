function squareOfWordLength(str){
    var strLength = str.length;
    console.log(`"The given string is": ${str}`);
    console.log(`"Length of given String is": ${strLength}`);
    var strSquare = strLength * strLength;
    console.log(`"Square of the given string": ${strSquare}`);
 }
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`--------------------------------------------------------`);
var string = function(){
    var givenStr =`I am angular developer`;
    console.log(`Given string is: "${givenStr}"`);
    var strLenth = givenStr.length;
    console.log(`"Length of the given string is": ${strLenth}`);
    var strSplit = givenStr.split(" ");
    console.log(`"given text is splited": ${strSplit}`);
    console.log(`"total numbers of word available in the string is": ${strSplit.length}`);
    var devidestr = strLenth / strSplit.length;
    console.log(`devide string by the total number of words": ${devidestr} `);
    var mulStr = strLenth * strSplit.length;
    console.log(`multiply string by the total number of words": ${mulStr}`);
}
string();