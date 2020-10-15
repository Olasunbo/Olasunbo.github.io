//** 2 created ordered list */
let list = document.createElement('ol'); //created an ordered list

//* 3 class for ordered list is countries*/
list.className = "countries";



//** 2 inject ordered list */
let content = document.querySelector('#content'); //targeted the content class
content.appendChild(list); //added div to this class
