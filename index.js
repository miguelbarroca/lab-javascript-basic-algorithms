// Iteration-1
const hacker0 = "Maik";
console.log(`The driver's name is ${hacker0}.`);
const hacker1 = "Miguel";
console.log(`The navigators' names are ${hacker1}.`);

// Iteration-2
if (hacker0.length > hacker1.length) {
  console.log(`${hacker0} has the longest name, the length of ${hacker0} is ${hacker0.length}`)
} else if ( hacker0.length < hacker1.length) {
  console.log(`${hacker1} has the longest name, the length of ${hacker1} is ${hacker1.length}`)
} else {
  console.log(`the lengths are equal.`)
}

// Iteration-3

// 3.1
let fullName = ""
for (let i = 0; i < hacker0.length; i++) {
  let temp = hacker0[i].toUpperCase();
  if (i < hacker0.length -1) {
    temp += " "
  }
  fullName += temp
}
console.log(fullName)

// 3.2
let reverseName = ""
for (let i = hacker1.length -1; i > -1; i--) {
  let temp = hacker1[i];
  reverseName += temp;
}
console.log(reverseName);











// From here Maik and Dean did most of the work. I helped but not as much as them.
// 3.3
const str0 = "The driver's name goes first.";
const str1 = "Yo, the navigator goes first definitely.";
const str2 = "What?! You both have the same name?";

const letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let hacker0start = undefined;
let hacker1start = undefined;

// Determine which name is longer
let longerName;
if (hacker0.length > hacker1.length) {
  longerName = hacker0;
} else {
  longerName = hacker1;
}

// Loop through the longer name
for (let i = 0; i < longerName.length; i++) {
  // Check if both names are the same, if so end loop
  if (hacker0 === hacker1) {
    console.log(str2);
    break;
  }

  // Check if the letter positions are already known, if so end loop
  if (hacker0start !== undefined && hacker1start !== undefined) {
    break;
  }

  // If letters being checked are NOT the same
  if (hacker0[i] !== hacker1[i]) {
    // Loop through letter array to find the corresponding letters
    for (let j = 0; j < letterArr.length; j++) {

      // If letter of DRIVER found in letter array
      if (hacker0[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker0start = j; // Assign letter array position
      }

      // If letter of NAVIGATOR found in letter array
      if (hacker1[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker1start = j; // Assign letter array position
      }

      // If BOTH Driver and Navigator have a value, break out of loop
      if (hacker0start !== undefined && hacker1start !== undefined) {
        break;
      }
    }
  }
}

// Print result
if (hacker0start > hacker1start) {
  console.log(str1);
} else if (hacker0start < hacker1start) {
  console.log(str0);
}

// Iteration Bonus 1


const longText = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non ligula vitae risus dapibus hendrerit. Donec porta eros felis, eu mollis arcu sagittis non. Proin ut diam id metus facilisis luctus eu a quam. Cras hendrerit placerat ligula at molestie. Nam fringilla massa nec augue sagittis tempus. In venenatis eros a nibh pulvinar accumsan. Nam tincidunt erat sed arcu convallis tempus. Phasellus velit mauris, posuere vitae arcu vel, feugiat fermentum ipsum. Aenean elit ligula, gravida sed ligula nec, aliquet dictum risus. Mauris laoreet velit at enim malesuada, vel hendrerit dui cursus. Vivamus placerat nunc a urna aliquet dictum. Nullam sed aliquam massa. Integer scelerisque, dui non lobortis pharetra, leo quam cursus lectus, vitae mattis velit ex in lacus. Etiam quis volutpat dui. Proin bibendum lobortis pellentesque. Cras imperdiet mauris tortor, sed venenatis odio sodales non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat eleifend ex, id malesuada nibh dapibus et. Etiam tincidunt id ipsum sit amet pharetra. Aliquam et massa ac tellus malesuada rhoncus. Vestibulum rhoncus, justo vel facilisis faucibus, libero turpis faucibus purus, eget molestie felis orci a odio. Morbi congue, ex in faucibus congue, dui est ullamcorper felis, vel sagittis orci nisi in enim. Phasellus at purus sit amet elit posuere aliquet id nec sapien. Maecenas ac erat in ligula euismod venenatis fermentum ut lectus. Morbi dolor ante, rutrum eu elit quis, dignissim sollicitudin tellus. Donec a vehicula ante. Donec semper, dolor et venenatis ultrices, velit sapien cursus nisl, at luctus dolor justo malesuada lorem. Duis fringilla lobortis metus, nec dignissim nunc faucibus at."`;

const wordCount = longText.split(" ");
// console.log(wordCount);
let count = 0;


for ( let i = 0; i < wordCount.length; i++ ){
  const twoChar = wordCount[i][0] + wordCount[i][1];

  if ( twoChar === "et") {
    count ++
    console.log(wordCount[i])
  }
}
console.log(count);

// bonus 2

const phrase = "Stack cats"
let phraseToCheck = ""
let modifiedPhrase = ""
let reversePhrase = ""

for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < letterArr.length; j++) {
    if (phrase[i].toLowerCase() === letterArr[j].toLowerCase()) {
     modifiedPhrase += phrase[i].toLowerCase();
      break;
    } 
  }console.log(modifiedPhrase);
}

for (let i = phrase.length -1; i >= 0; i--) {
    for (let j = 0; j < letterArr.length; j++) {
    if (phrase[i].toLowerCase() === letterArr[j].toLowerCase()) {
     reversePhrase += phrase[i].toLowerCase();
      break;
    } 
  } console.log(reversePhrase);
}

if (modifiedPhrase === reversePhrase) {
  console.log(`The sentence is a palindrome`)
} else {
  console.log(`The sentence is not a palindrome`)
}