allCounter = moviesData.length;
let watchStatus = '';

//count seen movies
const countSeen = () => {
    let seenCoutner = 0
    moviesData.forEach( elem => {
        if (elem.seen == "T"){
        seenCoutner++;
        }
    });
document.getElementById("moviesCounterSeen").innerHTML = seenCoutner;
};


//first initialize of function counting seen movies
countSeen();

//send value of counters to html
document.getElementById("moviesCounterAll").innerHTML = allCounter;


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
                    <h1>${elem.title}</h1>
                    <h2 class="status">status: <span class="${watchStatus}" id="${index}"></span></h2>
                    <h2>year: ${elem.year}</h2>
                    <h2>genre: ${elem.genre}</h2>
                    <h2>description:</h2><p>${elem.summary}</p>
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
           countSeen();
        });
    }