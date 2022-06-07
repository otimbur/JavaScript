// //to access the DOM we will use the.document


// console.dir(document);

// will show the IP location where it is located
// console.log(document.domain);

// will show the location of the file
// console.log(document.URL);

// it will access the title
// console.log(document.title);

// what type of documet it is ?
//     console.log(document.doctype);

// will show all the element in the head
// console.log(document.head);

// See what is in the body
// console.log(document.body);
// // Shows the full structure
// console.log(document.all);
// //
// console.log(document.all[10]);



// // if i want to make a change in a perticular atribute.
// // Found the index and the changed it in the next line.
//    document.all[10].textContent = "We Just Changed the Header";

// // //Finding how many ideams forms are in the DOM
// // console.log(document.forms);

// // // Find if there are links in the DOM
// // console.log(document.links);

// // Define if there is any img in the DOM
// // console.log(document.images);



// // ////////////////////////////////////////////////////////////////////////

// // get element by ID
// // console.log(document.getElementById('header-title'));

// // create an object variable  using the documnt function.
// // let headerTitle = document.getElementById('header-title');

// // call the variable
// // headerTitle.textContent = "Im Changing the Header";
// // headerTitle.innerText = "I AM CHANGING IT AGAIN";
// // change the tyle from html elements
// // headerTitle.style.color = "hotpink";
// // */
// // ////////////////////////////////////////

// // //Get Element by Class Name////////////////
// // let items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // //define the item by the arry index
// // console.log(items[2]);

// // //change the text content in the 3rd element using the index
// // items[2].textContent = "Third part  "
// // //change style proprety attributes through variable
// // items[2].style.fontWeight = 'bold';
// // items[2].style.backgroundColor = 'pink';
// // items[2].style.color = 'green'


// // items[1].textContent = "Second part "
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'red';
// // items[1].style.color = 'aqua'


// // items[0].textContent = "First part  "
// // items[0].style.fontWeight = 'bold';
// // items[0].style.backgroundColor = 'blue';
// // items[0].style.color = 'purple'



// // Work in a for loop
// // this loop is acounter which loops till 5 and then stops;
// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // we will use the loop to add in increments of 2 till we get to 20
// // for (let i = 1; i <= 20; i += 2) {
// //     console.log(i);
// // }

// // using a loop to decrement from 100 to 0 
// // for (let i = 100; i > 0; i -= 2) {
// //     console.log(i);
// // }
// // let n=10

// // while(n>=1 && n<=8)
// // for( let i=0; i<=n; i++)


// // create a for loop to go through every 
// //index of the arry using the barible.lenght
// // in the console log we will change the content and ethe color
// // for (let i = 0; i < items.length; i++) {
// //     items[i].style.backgroundColor = 'white';
// //     items[i].textContent = "Hello";
// // }


// //////////////////////////////
// // Create an arry and use a for loop

// // const myWords = ['one', 'two', 'hello', 'boom', 'hope', 'value', 'happy', 'funny'];

// // // //create a for loop 
// // // // variable.length will determine the length for the arry

// // // for (let i = 0; i < myWords.length; i++) {
// // //     console.log(i, myWords[i]);
// // // }


// // ///////////////////////////////////////////////////////
// // /////////// Get element by tag name

// // // create a variable using the dom and the getElementByTagName
// // //** the tag  has to be in quotations ' '
// // let li = document.getElementsByTagName('li');

// // console.log(li);
// // // we will use the tax and the index to be specific to get the item number 2
// // console.log(li[1]);
// // // we will assign a new text on the element defined by

// // // to change style and font, color  using the tag element and the index number.
// // li[1].style.fontWeight = 'bold';
// // li[1].style.background = ' crimson';
// // li[1].style.color = "black";

// // // we will use a for loop to be able to change the list information for each one
// // //
// // for (let i = 0; i < li.length; i++) {

// //     li[i].style.fontWeight = 'bold';
// //     li[i].style.background = ' crimson';
// //     li[i].style.color = "black";
// //     li[i].textContent = " Change text";

// // }


// // ///////////// Query Selectors       ////////////
// // returns the first element  with the selected document 

// // we will create avalue using the qs 
// // let header = document.querySelector('#main-header');

// // // assign a new value to the variable
// // header.style.borderBottom = 'Solid 4px hotpink';

// // // find the first imput element 

// // let input = document.querySelector('input');
// // input.value = "Change the input box text "


// // // use QS to create the variable, the use QS to assign the type of atribute and re-assign a new value 
// // let submit = document.querySelector("input[type='submit'");

// // submit.value = 'SEND';

// // // to call a class with QS I need to use a .
// // // it will alwas change the first element.
// // let item = document.querySelector(".list-group-item");

// // item.style.color = 'red';


// // to find the last element using QS
// // assing to the class: last-child

// let lastElement = document.querySelector('.list-group-item:last-child');
// lastElement.style.color = 'coral';

////////////////////////////////
///////QuerySelectorAll//////

// determine all the titles in the DOM
// let howManyTitle = document.querySelectorAll('.title');
// console.log(howManyTitle);
// // Change the content on the first tile in the DOM 
// howManyTitle[0].textContent = 'Hello Olga';


// Cteate a variable on specific type of number
//nth:child  matches every element that is the nth childm of its parent.

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}