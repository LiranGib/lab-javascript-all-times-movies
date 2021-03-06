/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    newMovies = array.map((originalMovie)=>{
        let movie = {...originalMovie};
        let movieDuration = movie.duration;
        let minutes = 0;
        if(movieDuration.includes("min")){
            if(movieDuration.includes("h")){
                movieDuration = movieDuration.replace("h", "");
                movieDuration = movieDuration.replace("min","");
                movieDuration = movieDuration.split(" ");
                minutes = parseInt(movieDuration[0])*60 + parseInt(movieDuration[1]);
            }
            else {
                movieDuration = movieDuration.replace("min","");
                minutes = parseInt(movieDuration);
            }
        }
        else if (movieDuration.includes("h")){
            movieDuration = movieDuration.replace("h", "");
            minutes = parseInt(movieDuration)*60;
        }
        else {
            minutes = movieDuration;   
        }
        movie.duration = minutes;
        return movie;
    });
    return newMovies;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let totalRatings = 0;
    let movies = array.map((movie) => {
        let movieRating = parseFloat(movie.rate);
        totalRatings += movieRating;
        //console.log(movieRating);
    });
    let averageRating = totalRatings/movies.length;
    averageRating = averageRating.toFixed(2);
    return parseFloat(averageRating);
};
ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = [];
    let movies = array.map((movie) => {
        if(movie.genre.includes("Drama")){
            if(movie.rate==""){
                movie.rate = 0;
            }
            dramaMovies.push(movie);
        }
    });
    if(dramaMovies.length == 0){
        return undefined;
    }
    console.log(dramaMovies);
    let dramaAverage = ratesAverage(dramaMovies);
    return dramaAverage;
};

// Order by time duration, in growing order

function orderByDuration(array) {
    let minutesArray = turnHoursToMinutes(array);
    let sortedArray = [];

    let orderByMinutes = minutesArray.map((movie) => {
        sortedArray.push([movie, movie.duration]);
    });

    sortedArray.sort(function(a, b){
        return a[1] - b[1];
    });
    return sortedArray;
};

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    let dSpielberg = [];
    let newMovies = array.map((originalMovie)=>{
        let movie = {...originalMovie};
        if (movie.genre.includes("Drama")){
            if (movie.director.includes("Steven Spielberg")){
                dSpielberg.push(movie);
            };
        };
    });
    if (dSpielberg.length != 0){
        return ("Steven Spielberg directed " + dSpielberg.length + " drama movies!");
    }else{
        console.log ("Steven Spielberg directed " + dSpielberg.length + " drama movies!");
        return undefined;
    }
};

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    let titleArry = [];
    let newMovies = array.map((originalMovie)=>{
        let movie = {...originalMovie};
        titleArry.push(movie.title);
    });
    titleArry.sort();
    return titleArry.slice(0,20);
}







// Best yearly rate average

