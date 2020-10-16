/*//Call countries script
let script = document.createElement('script'); 
script.src = "countries.js" 
const test = [
    "Afghanistan"  ,
      "Åland Islands",   "AX"  ,
      "Albania",   "AL"  ,
      "Algeria",   "DZ"  ,
      "American Samoa",   "AS"  ,
      "Andorra",   "AD"  ,
      "Angola",   "AO"  ,
      "Anguilla",   "AI"  ,
      "Antarctica",   "AQ"  ,
      "Antigua and Barbuda",   "AG"  ,
      "Argentina",   "AR"  ,
      "Armenia",   "AM"  ,
      "Aruba",   "AW"  ,
      "Australia",   "AU"  ,
      "Austria",   "AT"  ,
      "Azerbaijan",   "AZ"  ,
      "Bahamas",   "BS"  ,
      "Bahrain",   "BH"  ,
]


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
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 25);
    //might need to create an array not sure
    return selected
}

//** 4 function runs on the click of button */
btn.onclick = function(){
    //run select25 function to get an array
    let addme = select25(countries) 
    // 7 add new list to old list
    addme.forEach(function (nlist) {
        let li = document.createElement('li');
        li.textContent = nlist;
        list.appendChild(li);
    });
}


//** 2 inject ordered list */
let content = document.getElementById('temp'); //targeted the content class
content.appendChild(list)//added list to this class
