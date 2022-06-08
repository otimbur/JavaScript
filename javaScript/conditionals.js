console.log('Hello World')

// we will crete a random number 
let randomNumber = Math.random();

// crate a if condition in wich is true will run the first part of the code

if (randomNumber < 0.5) {
    console.log('Hello Olga');
    console.log(randomNumber);
}

if (randomNumber >= 0.5) {
    console.log("The reandom number is greater that 0.5");
    console.log(randomNumber);
}

//create an if/else statement
const dayOfWeek = 'Monday';
//If the first condition is false
if (dayOfWeek === 'Sunday') {
    console.log('Today is Sunday')
    // it will check the else if condition 
} else if (dayOfWeek === 'Tuesday') {
    console.log('Today is not Tusday')

} else if (dayOfWeek === 'Friday') {
    console.log('Today is Friday')
    // rhe condition will match so will run the code.
} else if (dayOfWeek === 'Monday') {
    console.log('Today is Monday')
}

//using promt to imput the value of the variable
const age = prompt('Enter your age')

if (age < 5) {
    console.log('Your are less that 5')
} else if (age < 10) {
    console.log('Still to young to drive')
} else if (age >= 16) {
    console.log('you are able to drive')
}

//switch statements
// the code has same idea as if /else using cases

const food = 'oranges';

switch (food) {

    case 'salad':
        console('Salad is $3.5 ');
        break;
    case 'oranges':
        console.log('Oranges are good');
        break;
    case 'tomato':
        console.log('Ehh, this is what i was looking for');
        break;
    default:
        console.log('sorry there is not what are u looking for');


}

Nested(if) condition

create an aplication password and check it lenght

const password = prompt('Please Enter A New Password');

if (password.length > 4) {

    // Nested condition 
    // indexOf will look for the characted given in the condition
    if (password.indexOf(' ' === -1)) {

        console.log('Valid password');
    } else {
        console.log("Password can't have spaces");
    }

} else {
    console.log('Password is too short')
}


/////Functions////////

function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

singSong();




function greet(firstName) {

    //template literals used to call the function
    console.log(`My name is ${firstName} and I am 26`);
}
// Call the function
greet('Olga');

// Create a function with multimple arguments
function gree1(firstName, lastName) {
    // define the  index using rhe  argument paremeter  in the template literals
    console.log(`My first and last name is ${firstName} ${lastName[0]}.`)
}

gree1('Olga', 'Timbur');

