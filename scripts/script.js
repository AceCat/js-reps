

//EXERCISE 1
var stringArray = ["dogs", "horses", "people", "knick-knack-paddy-whack"];
var lengthArray = [];

var lengths = function(strArray) {
	for (i = 0; i < strArray.length; i++) {
		var stringLength = strArray[i].length;
		lengthArray.push(stringLength);
	}
	return lengthArray
}

//EXERCISE 2

// Write a Javascript function called transmogrifier This function should accept three arguments, 
// which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, 
// raised to the power (exponentially) of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// Use your function to find the following answers.

var transmogrifier = function (x, y, z) {
	var base = (x * y);
	var result = Math.pow(base, z);
	return result;
}

//transmogrifier(5, 4, 3);
//8000

//transmogrifier(13, 12, 5)
//92389579776

//transmogrifier(42, 13, 7)
//14466001271480793000


//EXERCISE 3
// Write a function called toonify that takes two parameters, accent and sentence.

// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".

// If the accent is "elmer", replace all "r" with "w".

// Feel free to add your own accents as well!

// If the accent is not recognized, just return the sentence as-is.

// Reference: MDN: String.replace()

var toonify = function(accent, sentence) {
	if (accent === "daffy") {
			return sentence.replace(/s/g, "th")
		} else if (accent === "elmer") {
			return sentence.replace(/r/g, "w")
		} else  if (accent === "james-franco") {
			return sentence.replace(sentence, "insufferable babbling")
	} else {
		return sentence;
	}
}

//Round 4
// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. 
// Don't worry about punctuation. You'll need to use String.split() to create an array of words 
// (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). 
// Finally, you'll loop through them to create a new string).


var wordReverse = function (string) {
	wordArray = string.split(" ");
	wordArray.reverse();
	var reverseString = "";
	for (i = 0; i < wordArray.length; i++) {
		var stringItem = wordArray[i].toString();
		reverseString = reverseString.concat(stringItem + " ");
	}
	return reverseString.substring(0, reverseString.length-1);
}


//Round 5
// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string
// but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them
//  with a space.


var letterReverse = function(string) {
	var wordArray = string.split(" ")
	for (i = 0; i < wordArray.length; i++) {
		wordArray[i] = wordArray[i] + " "
	}
	var newString = ""
	for (i = 0; i < wordArray.length; i++) {
		var segmentedWord = wordArray[i].split("");
		segmentedWord.reverse();
		var newString 
		var noCommas = segmentedWord.toString().replace(/,/g, "");
		newString = newString + noCommas;
	}
	return newString;
}

//Round 6
// Write a function longest that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

var longest = function(strArray) {
	var longestWordLength = 0;
	var longestWord = "";
	for (i = 0; i < strArray.length; i++) {
		if (strArray[i].length > longestWordLength) {
			longestWordLength = strArray[i].length;
			longestWord = strArray[i];
		} else if (strArray[i].length === longestWordLength) {

		}
	}
	return longestWord;
}

//Final round
// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. 
// The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, 
// and return this result with ' proves that I am the rep MASTER!' concatenated to it.

var repMaster = function (input, yourFunction) {
	return yourFunction(input)
};







