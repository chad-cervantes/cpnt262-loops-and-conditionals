const soccerGearItems = ['football boots', 'shin pads', 'track suit', 'soccer ball', 'pylons', 'air pump', 'water bottle']

//forEach method
soccerGearItems.forEach(soccerGearItem => {console.log(soccerGearItem)});
//render to html
document.getElementById("for-each").innerHTML = soccerGearItems;

//Reserve a String
const reversed = soccerGearItems.reverse();

console.log('reversed', reversed);
//render to html
document.getElementById("reverse-a-string").innerHTML = soccerGearItems;