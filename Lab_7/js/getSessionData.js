// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
let lat_max = sessionStorage.getItem('lat_max');
let lat_min = sessionStorage.getItem('lat_min'); 
let lon_max = sessionStorage.getItem('lon_max');
let lon_min = sessionStorage.getItem('lon_min');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
let t = document.getElementById('title');
t.innerHTML = `${title}`;

let maxlat = document.getElementById('lat_max');
maxlat.innerHTML = `${lat_max}`;

let minlat = document.getElementById('lat_min');
minlat.innerHTML = `${lat_min}`;

let maxlon = document.getElementById('lon_max');
maxlon.innerHTML = `${lon_max}`;

let minlon = document.getElementById('lon_min');
minlon.innerHTML = `${lon_min}`;