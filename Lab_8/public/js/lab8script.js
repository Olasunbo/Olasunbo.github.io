let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
let redL = document.getElementById('redditList');
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                //Random number within the length of list
                num = Math.floor(Math.random()*(listSize+1))

                //Get elements of message
                subreddit = json.data.children[num].data.subreddit;
                author = json.data.children[num].data.author_fullname;
                title = json.data.children[num].data.title;
                ups = json.data.children[num].data.ups;

                //Add a new <li> element with the message to the 'redditList' element 
                let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" 
                + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                let li = document.createElement('li');
                li.innerHTML = `${message}`;
                redL.appendChild(li);

                //Add a data entry to chartValues with author as the label and ups as the y component
                let addToChart = {'label':author,y:ups}; 
                // needs to be added to the 'chartValues'
                chartValues.push({addToChart})
            }
        })
        .then(values => console.log(chartValues));
        //chart.render();
};

window.onload = async function makeChart() { //NO CHART
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues //LOOK MORE INTO THIS
            }
        ]
    });
    
    chart.render();
}

//window.onload = makeChart();