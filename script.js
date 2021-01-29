let seenCoutner = 0, allCounter = moviesData.length;

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
    moviesData.forEach(elem => {
        document.getElementById('moviesList').innerHTML += `
        <li class="moviesListElement">${elem.title}</br> ${elem.year}</br> ${elem.genre}</br> ${elem.summary}</br></br></br></li>
        `
    })