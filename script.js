let seenCoutner = 0, allCounter = moviesData.length;

//count seen movies
for (let i = 0; i<moviesData.length; i++){
    if (moviesData[i].seen === "T"){
    seenCoutner++;
    }
}

//send value of counters to html
document.getElementById("moviesCounterAll").innerHTML = allCounter;
document.getElementById("moviesCounterSeen").innerHTML = seenCoutner;

