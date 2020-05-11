const HashMap = require('./hashmap')

const WhatDoesThisDo = function () {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

const deleteDuplicates = function (str) {
    let map1 = new HashMap();
    for (let i = 0; i < str.length; i++) {
        map1.set(i, str[i])

    }
    console.log(map1.length)
    let newString = '';
    for (let i = 0; i < map1.length; i++) {
        newString += map1.get(i)

    }
    return newString.split('').filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    }).join('')

}

const anagrams = function () {

}

// function isPalindrome(word, palindromeMap = new HashMap()) {

//     if (!word) {
//         throw new Error('you need to enter a word');
//     }

//     for (let i = 0; i < word.length; i++) {
//         palindromeMap.setLetterCount(word[i]);
//     }

//     let oddCount = 0;
//     for (let j = 0; j < word.length; j++) {
//         let letterCount = palindromeMap.get(word[j]);
//         if (letterCount % 2 === 1) {
//             oddCount++;
//         }
//     }

//     console.log(palindromeMap);
//     if (oddCount > 1 && palindromeMap.getLength() > 1)
//         return false;

//     return true;
// }

console.log(isPalindrome("aaxxis"));

console.log(deleteDuplicates("google all that you think can think of"))

function main() {
    const lotr = new HashMap()
    lotr.set('hobbit', 'Bilbo')
    lotr.set('hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandalf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')

    // console.log(lotr)
    console.log(lotr.get('Maiar'))
    console.log(lotr.get('hobbit'))
}

palindrome('racecar');

// main();


/*{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
{"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
{"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
{"Ent": "Treebeard"}*/