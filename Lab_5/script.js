//** 2 created ordered list */
let list = document.createElement('ol');

//* 3 class for ordered list is countries*/
list.className = "countries";

//** 4 target the button */
const btn = document.querySelector('button')
//document.querySelector('button').addEventListener("click",select25(countries))

//** 5 function to select 25 random countries */
function select25(array){
    // 6 Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());
    // 6 Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 25);
    // 10 get the rest of the list 
    let x = shuffled.slice(25, shuffled.length - 1);
    //10 Log of nonselected countries
    console.log(x);
    //6 return spliced list
    return selected
}

//** 4 function runs on the click of button */
btn.onclick = function(){
    //run select25 function to get an array
    let addme = select25(countries) 
    // 7 add new list to old list
    addme.forEach(function (nlist) {
        let li = document.createElement('li');
        //8 & 9 normal and bold font
        li.innerHTML = `${nlist.name}, <strong>${nlist.code}</strong>`;
        list.appendChild(li);
    });
}

//** 2 inject ordered list */
let content = document.getElementById('temp'); //targeted the content class
content.appendChild(list)//added list to this class
