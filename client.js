const soccerGearItems = ['football boots', 'shin pads', 'track suit', 'soccer ball', 'pylons', 'air pump', 'water bottle']

//forEach method
soccerGearItems.forEach(soccerGearItem => {console.log(soccerGearItem)});
//render to html
document.getElementById("for-each").innerHTML = soccerGearItems;

//Reserve an Array
const reversed = soccerGearItems.reverse();

console.log('reversed', reversed);
//render to html
document.getElementById("reverse-an-array").innerHTML = soccerGearItems;


//Find longest word in string
const bestCity = 'Barcelona is the best city in Europe'

function findLongestWordLength(str) {
  
  let longestWord = '';
 
  let words = str.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let individualWord = words[i];
    
    if (individualWord.length > longestWord.length ) {
      longestWord = individualWord;
    }
  }

  return longestWord;
 
}  
console.log(findLongestWordLength(bestCity));

//render to html
//string 
document.getElementById("string").innerHTML = bestCity;
//find longest word
document.getElementById("longest-word").innerHTML = findLongestWordLength(bestCity);


//Reverse a String
const bestFootballPlayer = 'Lionel Messi'

function reverseString(str) {
  
  let splitString = str.split("");
  
  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
}

//render to html
//Original string
document.getElementById("original-string").innerHTML = bestFootballPlayer;
//Reverse string
document.getElementById("reverse-a-string").innerHTML = reverseString(bestFootballPlayer);


//Title Case a sentence
//made the string
const durian = 'Durian is considered the smelliest fruit in the world'

//made the function and it's steps
function titleCase(str) {
  
  //made all letters lowercase
  str = str.toLowerCase(); 
  
  //split all the letters from the words to identify each letter
  str = str.split(' ');
  
  //made the first letter of each word capitalized
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  //used join method to put back together the words
  return str.join(' ');
}

//render to html
//Original string
document.getElementById("original-title-case-string").innerHTML = durian;
//Title Case
document.getElementById("title-case").innerHTML = titleCase(durian);

