// Function: creates a new paragraph and appends it to the bottom of the HTML body.

//***Create a header 
let x = document.createElement("HEADER");
x.setAttribute("id", "myHeader");
document.body.appendChild(x);

let y = document.createElement("H1"); 
let t = document.createTextNode("Olasunbo Salami's Lab 4");
y.appendChild(t);

document.getElementById("myHeader").appendChild(y);

/**2 **/
// 1. Create <div> element
let div = document.createElement('div');
// 2. Set its class to "content"
div.className = "namelength";

// 3. Fill it with the content
let p = document.createElement('p');
let name = 'Olasunbo Salami';
let length = name.length;
p.textContent = `My name has ${length} characters`;
document.body.appendChild(p);

/** 4 **/
div.className = "character";
let third = name[2];
div.innerHTML = `The third character in my name is ${third.toUpperCase()}.\n
The last three characters in my name are ${name.substring(name.length - 3)}.`;
document.body.append(div);

/** 8 **/
let first = name.substr(0,name.indexOf(' ')); 
let last = name.substr(name.indexOf(' ')+1);

/** 9 **/
let totallength = document.createTextNode(`${first.length + last.length}`)

/** 10 **/
document.getElementById("myHeader").appendChild(totallength);


function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  /*
    1. Get references to all the buttons on the page in an array format.
    2. Loop through all the buttons and add a click event listener to each one.
  
    When any button is pressed, the createParagraph() function will be run.
  */
  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

  