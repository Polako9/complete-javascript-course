/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is cool');

console.log(40 + 8);

console.log('Marcinek');

let firstName = 'Marcinek';
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Artist';

console.log(myFirstJob);

//task


let population = '`38mln';



/*primitives types
Number
String
Boolean
Undefined ex let children;
Null 'eampy value';
Symbol (ES2015)
BigInt (ES2020);!!!

CTRL + / TO COMmENT TEXT
*/
/*
let javascriptIsFun  = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 'Marcinek');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 93;
console.log(typeof year);

console.log(typeof null);

//task 2
let isIsland = false;
let language;


//task3

language = 'polish';

const country = 'Poland';
const continent = 'European continent';
console.log(isIsland , population , country , language);
console.log(country , continent , population);
//operators

const now = 2020;

const Marcinek = now - 1993;
const Julia = 23;
console.log(Marcinek);

console.log(Marcinek * 2, Marcinek / 2, 2 ** 3);
//means 2 ** 3 means 2 to the power of 3

firstName = 'Marcin';
const lastName = 'Polak';

console.log(firstName + ' ' + lastName);
//assigment operators
let x = 10 + 5; // 15
x += 10; // x = x+ 10 = 25
x *= 4; // x=x*4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//comparision operators
console.log(Marcinek > Julia); // <, > <= , >=;
console.log(Julia >= 24);

const wynik = Julia >= 24;
*/
//task4
/*
const population = 38000000;
const finland = 6000000;
let wynik = (population / 2) /2;
console.log(wynik);

wynik++;
console.log(wynik);

console.log(population > finland);

const description = 'portugal is in Europe, and its 11million people speak portuguese';
console.log(description);

//coding challange

const heightMark = 1.69 ;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92 ;

bmiMark = weightMark/heightMark ** 2;
bmiJohn =  weightJohn /(heightJohn * heightJohn) ;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark,bmiJohn,markHigherBMI);

*/
/*
const year = 1993
const descr = `portugal is in Europe  test , ${year} and 11 million people \n\ speak portuguese`;
console.log(descr);

//    \n\ - means new line 

const polandPopulation = 40 ; 

if (polandPopulation>33){
    console.log(`Portugal's population is above averageeee`)
} else{
    console.log(`Portugal's population is 22 million below averageeee`)
};


//coding challange 2

const heightMark = 1.69 ;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92 ;

bmiMark = weightMark/heightMark ** 2;
bmiJohn =  weightJohn /(heightJohn * heightJohn) ;

if (bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark})is higher than John's! (${bmiJohn })`);
}else{
    console.log(`John's BMI (${bmiJohn }) is higher than Mark's (${bmiMark})`);
}

//TYPE CONVERSION AND COERCION

console.log('9' - '5'); // - zamienia na liczby
console.log('19' - '13' + '17'); // + zamienia na string
console.log('19' - '13' + 17); 
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality operators == vs == -task
let numNeighbours = prompt('How many neighbour countries does your country have?');

if( numNeighbours === 1){
    console.log("Only 1 border");
} else if( numNeighbours > 1){
    console.log("More than 1 borde in case");
} else{
    console.log("No borders");
}
*/
/*
//Logical Operators - task
const language = "english";
const population = 50;
const island = false;

if(language === 'english' && population === 50 && !island){
console.log('You should live in Portugal :)');
} else{
console.log('Portugal does not meet your criteria');
}
/*
//coding chalange 3
let avarageDolpins = (96+108+89)/3;
let averageKoala = (88+91+110)/3;
const minScore = 100;

if(avarageDolpins>averageKoala){
console.log("dolphins wins");
} else if(avarageDolpins<averageKoala){
console.log("koala wins");
} else{
console.log("draw");
}
*/
/*
//coding chalange 3 bonus
let avarageDolpins = (97+112+101)/3;
let averageKoala = (109+95+123)/3;
const minScore = 100;

if(avarageDolpins>averageKoala && avarageDolpins >= 100){
console.log("dolphins wins");
} else if(avarageDolpins<averageKoala && averageKoala >= 100){
console.log("koala wins");
} else{
console.log("draw");
}
*/
//coding chalange 3 bonus 2
/*
let avarageDolpins = (97+112+101)/3;
let averageKoala = (109+95+106)/3;
const minScore = 100;

if(avarageDolpins>averageKoala && avarageDolpins >= 100){
console.log("dolphins wins");
} else if(avarageDolpins<averageKoala && averageKoala >= 100){
console.log("koala wins");
} else if(avarageDolpins===averageKoala && averageKoala>=100 && avarageDolpins>=100){
console.log("draw");
}
*/

// switch statment
/*
const language = 'chinese';

switch(language){
    case 'chinese':
    case 'mandarian':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    case 'english':
        console.log('3rd place');
    case 'hindi':
        console.log('Number 4');
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
    console.log('great language too : D');
}

// the conditional ternary operator

const population = 37;

const pop = population >= 33 ? 'Portugals population is above average' : 'Portugals population is below average';

console.log(`${pop}`);

// cdoing chalange 4

const bill = 275 + 40 + 430
const tip = ((275 + 40 + 430)*20)/100;
const finalvalue = bill + tip;

console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${finalvalue}`);
*/

//function

function describeCountry(country, population, capitalCity){
    const desc = `${country} has ${population} million people and its
    capital city is ${capitalCity}`;
    return desc;
}
const test = describeCountry(`Poland`, 30, `Warszawa`);
console.log(test);
//function declaraction vs expressions

const popu = percentageOfWorld1(1441)
const popu2 = percentageOfWorld1(72)
const popu3 = percentageOfWorld1(3000)

console.log(popu,popu2,popu3);

function percentageOfWorld1 (population){

    return (population/7900)*100
}


//function expressions
const percentageOfWorld2  =  function (population){

    return (population/7900)*100
}
const poppu = percentageOfWorld2(3)
const poppu2 = percentageOfWorld2(2)
const poppu3 = percentageOfWorld2(34)
console.log(poppu,poppu2,poppu3);


// arrow function
const percentageOfWorld3 = population => (population/7900)*100
const poppu4 = percentageOfWorld3(1444)
console.log(poppu);