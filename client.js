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