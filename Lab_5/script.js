//** 2 created ordered list */
let list = document.createElement('ol');

//* 3 class for ordered list is countries*/
list.className = "countries";

//** 4 target the button */
const btn = document.querySelector('button')

//** 5 function to select 25 random countries */
function select25(array){
    // Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 25);
    return selected;
}

//** 4 function runs on the click of button */
btn.onclick = function(){
    //7 use meh to add append list with random c
}


//** 2 inject ordered list */
let content = document.getElementById('temp'); //targeted the content class
content.appendChild(list)//added list to this class
