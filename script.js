let watchStatus;

//count seen and all movies
const countMovies = () => {
    let seenCoutner = 0
    moviesData.forEach( elem => {
        if (elem.seen == "T"){
        seenCoutner++;
        }
    });
//send value of counters to html element
document.getElementById("moviesCounterAll").innerHTML = moviesData.length;
document.getElementById("moviesCounterSeen").innerHTML = seenCoutner;
};

//first initialize of function counting seen movies
countMovies();

//load data to html
    moviesData.forEach((elem, index) => {
    //initial class assigment for seen and unseen movies
        if (elem.seen === "T")
            watchStatus = "seen"
        else
            watchStatus ="unseen"

        //template of list element
        document.getElementById('moviesList').innerHTML += (
            `<li class="listElement">
                    <h1>${elem.title}<span class="${watchStatus}" id="${index}"></span></h1>
                    <hr>
                    <h2>year: ${elem.year}</h2>
                    <h2>genre: ${elem.genre}</h2>
                    <h2 class="desc">description:<p>${elem.summary}</p></h2>
            </li>`
            )
    });

//handle onclick
//change status img and value in table at key seen
    for(let i = 0; i<moviesData.length; i++){
        document.getElementById(i).addEventListener('click',function () {
           if (this.className === "seen"){
               moviesData[this.id].seen = "F";
               this.className ="unseen";
           }
           else {
               moviesData[this.id].seen = "T";
               this.className = "seen";
           }
           countMovies();
        });
    }