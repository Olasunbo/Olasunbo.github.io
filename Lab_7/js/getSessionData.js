// Get saved data from sessionStorage
let title = sessionStorage.getItem('title'); // Your code here
let lat_max = sessionStorage.getItem('lat_max');
let lat_min = sessionStorage.getItem('lat_min'); 
let lon_max = sessionStorage.getItem('lon_max');
let lon_min = sessionStorage.getItem('lon_min');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
if (title!== null){
let t = document.getElementById('title');
t.innerHTML = `${title}`;
} else {
    sessionStorage.clear()
}

if (lat_max!== null){
let maxlat = document.getElementById('lat_max');
maxlat.innerHTML = `${lat_max}`;
}

if(lat_min!== null){
let minlat = document.getElementById('lat_min');
minlat.innerHTML = `${lat_min}`;
}

if(lon_max!== null){
let maxlon = document.getElementById('lon_max');
maxlon.innerHTML = `${lon_max}`;
}

if(lon_min!== null){
let minlon = document.getElementById('lon_min');
minlon.innerHTML = `${lon_min}`;
}