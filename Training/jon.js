 // tested in-line comment

/* the is the test of 
    A MULTI-LINE COMMENT*/
    
    /* my first function to fill in missing words and add spaces to concatenated sentences
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        result += "The really " + myAdjective + " " + "brownish " + " " + myNoun + " " + "cowardly " + myVerb + " " + "over our grass " + myAdverb + " " + "all day " + ".";
        return result;
    }

    console.log(wordBlanks("dog", "big", "ran", "quickly"));
    console.log(wordBlanks("robot", "rusted", "danced", "silly"));

    */
/* selecting an index of the array element
    const ourArray = [100,500,1000,5050]
    var myData = ourArray[2]
    console.log(myData)

    */
    /* push new element to existing array as they are mutible
    const myArray = [["John", 23], ["cat", 2]];  //Push ["dog", 3] onto the end of the myArray variable.
    myArray.push(["dog, 3"]);
    console.log(myArray);*/


    /* .pop() is used to pop a value off of the end of an array.
    const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);     //shows 6
console.log(threeArr);     //shows remaining array index in element
*/

const numbers = [1, 2, 3];
const firstNumber = numbers.shift();
console.log(firstNumber);