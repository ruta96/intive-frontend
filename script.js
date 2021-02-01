let watchStatus;

//count seen and all movies
const countMovies = () => {
document.getElementById("moviesCounterAll").innerHTML = moviesData.length;
document.getElementById("moviesCounterSeen").innerHTML = moviesData.filter(elem => elem.seen === "T").length;
};
countMovies();

moviesData.forEach((elem, index) => {
//initial class assigment for seen and not seen movies
    if (elem.seen === "T")
        watchStatus = "seen"
    else
        watchStatus ="not-seen"

//template of single list element
    document.getElementById('moviesList').innerHTML += (
        `
        <li class="listElement">
            <div class="${watchStatus}" id="${index}"></div>
            <h1>${elem.title}</h1>
            <hr>
            <h2>year: ${elem.year}</h2>
            <h2>genre: ${elem.genre}</h2>
            <h2 class="desc">summary:<p>${elem.summary}</p></h2>
        </li>
        `
        )
    });

//handle onclick
//change status img and value in table at key seen
    for(let i = 0; i<moviesData.length; i++){
        document.getElementById(i).addEventListener('click',
        function () {
        if (this.className === "seen"){
                moviesData[this.id].seen = "F";
                this.className ="not-seen";
           }
        else {
                moviesData[this.id].seen = "T";
                this.className = "seen";
           }
        countMovies();
        })
    }