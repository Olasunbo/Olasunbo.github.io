const main = document.getElementById("main");
const input = document.querySelector("input")

function getBusRoute() {
  let busRoute = input.value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        sessionStorage.setItem('title', route.title);
        sessionStorage.setItem('lat_max', route.lat_max);
        sessionStorage.setItem('lat_min', route.lat_min);
        sessionStorage.setItem('lon_max', route.lon_max);
        sessionStorage.setItem('lon_min', route.lon_min);
         // Your code here
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
