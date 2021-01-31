let seenCoutner = 0, allCounter = moviesData.length;
let watchStatus = '';

//count seen movies
    moviesData.forEach( elem => {
        if (elem.seen === "T"){
        seenCoutner++;
        }
    });

//send value of counters to html
document.getElementById("moviesCounterAll").innerHTML = allCounter;
document.getElementById("moviesCounterSeen").innerHTML = seenCoutner;

//load data to html
    moviesData.forEach((elem) => {
        
        if (elem.seen === "T")
            watchStatus = "seen"
        else
            watchStatus ="unseen"
        document.getElementById('moviesList').innerHTML += (
            `<li class="listElement">
                    <h1>${elem.title}</h1>
                    <h2 class="status">status: ${watchStatus} <img src="img/eye_${watchStatus}.svg" alt="${watchStatus}"></h2>
                    <h2>year: ${elem.year}</h2>
                    <h2>genre: ${elem.genre}</h2>
                    <h2>description:</h2><p>${elem.summary}</p>
            </li>`
            )
    });

//change watch status
const changeMovieStatus = () => {
console.log("clicked");
};

const statusImg = document.querySelector(".status > img");

statusImg.onclick = changeMovieStatus;