//API KEY: <2bbf024d357a4139c711a46dda1703cb>

//Spara API url i en variabel

let apiTrendRef = 'https://api.themoviedb.org/3/trending/movie/day?api_key=2bbf024d357a4139c711a46dda1703cb';

let contatinerTrendRef = document.querySelector('.trend');

let apiPopUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2bbf024d357a4139c711a46dda1703cb&language=en-US&page=1";

let containerPopRef = document.querySelector('.popular');
//console.log(containerPopRef);
//Ref till hero-klassen
let heroRef = document.querySelector('.hero');
//  console.log(heroRef);


//Hämta data med fetch
fetch(apiTrendRef)
.then(response => response.json())
.then(data => {
    //Vad ska vi göra med vår data
    console.log(data.results[0].title);
    console.log(data.results[1].title);
    //Kontrollerar om array är tom
    let myArrayLength = data.results.length;
    console.log(myArrayLength);
    if(myArrayLength === 0){
        console.log('Det finns INGEN data!');

    }
    else{
        console.log('Det FINNS data!');

        for (let i = 0; i < myArrayLength; i++) {
           //Vad ska ske för varje varv
        //    console.log(i);
        // console.log(data.results[i].title)
      
        contatinerTrendRef.innerHTML += ` <article class='movie-card'><div class='overlay'><h4>${data.results[i].title}</h4></div><div class='movie-pic'>
        <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}"
    </div></article>`;

        }
    }

})
.catch(error => console.log(`Detta fel: ${error}`));


//Gör nästa likadant ändra bara i fetch

fetch(apiPopUrl)
.then(response => response.json())
.then(data => {
    //Vad ska vi göra med data?
    let myArrayLength = data.results.length;
   // console.log(myArrayLength);
   if(myArrayLength === 0){
    console.log('Det finns ingen data!');
   }
   else{
    console.log('Japp det finns!');
    console.log(data.results[0].title);

    //Bra att korta ner i varibler!
    // let myTitle = data.results[0].title;
    // console.log(myTitle);
   // containerPopRef.innerHTML += `Hej`;

   //Här uppdateras hero bilden 
   heroRef.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${data.results[0].poster_path}')`;

   //Här kommer beskrivningen på herobilden
   heroRef.innerHTML = ` <article>
   <h3>Filmtips: ${data.results[0].title}</h3>
   <h1>${data.results[0].title}</h1>
   <p>${data.results[0].overview}.</p>
</article>`;

    for (let i = 0; i < myArrayLength; i++) {
        //Vad ska hända för varje varv i loopen
        console.log(data.results[i].title)

        containerPopRef.innerHTML += `<article class='movie-card'> <div class='overlay'>
        <h4>${data.results[i].title}</h4>
    </div> <div class='movie-pic'>
    <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}">
</div></article>`;

    }
   }
})
.catch(error => console.log(`Detta är felet ${error}`));




/* <article>
            <h3>Filmtips: Batman</h3>
            <h1>The Dark Knight-triologin</h1>
            <p>Se hela Christopher Nolans succétrilogi om Batman (Christian Bale) som får tampas med figurer  som Jokern (Heath Ledger), Catwoman (Anne Hathaway) och Bane (Tom Hardy).</p>
        </article>*/ 



/*  <article class='movie-card'>
                <div class='overlay'>
                    <h4>Peppermint</h4>
                </div>
                <div class='movie-pic'>
                    <img src="img/peppermint.png">
                </div>
            </article>  */ 



/*<article class='movie-card'>
                <div class='overlay'>
                    <h4>Peppermint</h4>
                </div>
                <div class='movie-pic'>
                    <img src="img/peppermint.png">
                </div>
            </article>  
        </section>
        <h2>Trendiga filmer</h2>
        <section class="movie-container trend">   
            <!-- TA BORT DETTA SEN -->
            <article class='movie-card'>
                <div class='overlay'>
                    <h4>Peppermint</h4>
                </div>
                <div class='movie-pic'>
                    <img src="img/peppermint.png">
                </div>
            </article>  */