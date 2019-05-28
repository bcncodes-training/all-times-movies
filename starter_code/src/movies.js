/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(oldarr) {
    //let newarr1 = Object.assign(oldarr);
    return oldarr.map((e) => {
        let timeH = e.duration.split(' ');
        let minutes;
        if (timeH[0].indexOf("min") != -1) {
            minutes = parseInt(timeH[0].replace('min', ''));
        }
        else {
            minutes = parseInt(timeH[0].replace('h', '') * 60);
            if (timeH[1] != undefined) {
                minutes += parseInt(timeH[1].replace('min', ''));
            }
        }
        //return Object.assign({}, e, { duration: parseInt(minutes) });
        return { ...e, duration: parseInt(minutes) };
    });
}
// Get the average of all rates with 2 decimals 
function ratesAverage(oldarr) {
    let mitja = oldarr.reduce((t, e, i, a) => { return t + e.rate / a.length }, 0);
    return (Math.round(mitja * 100) / 100);
}
// Get the average of Drama Movies
function dramaMoviesRate(oldarr) {
    let mitjaDrama = oldarr.filter((e) => e.genre.indexOf('Drama') !== -1);
    if (ratesAverage(mitjaDrama) > 0) return ratesAverage(mitjaDrama);
}
// Order by time duration, in growing order
function orderByDuration(movies) {
    return movies.sort((a, b) => {
        if (a.duration === b.duration) {
            if (a.title < b.title) return -1
            else return 1
        }
        else return a.duration - b.duration
    });
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(oldarr) {
    if (oldarr.length > 0) {
        let mitjaDrama = oldarr.filter((e) => {
            if ((e.genre.indexOf('Drama') !== -1) && (e.director.indexOf('Steven Spielberg') !== -1))
                return e
        });
        if (mitjaDrama.length >= 0) { return `Steven Spielberg directed ${mitjaDrama.length} drama movies!`; }
    } else return undefined;
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesSorted = movies.sort((a, b) => {
        if (a.title < b.title) return -1
        else return 1
    });
    let result = [];
    if (moviesSorted.length < 20) {
        moviesSorted.forEach(e =>  result.push(e.title));
    }
    else {
        for (let index = 0; index < 20; index++) {
            result.push(moviesSorted[index].title);
        }
    }
    return result;
}
// Best yearly rate average
function bestYearAvg(movies) {
    let resultArr = [];
    resultArr.rate=0;
    if (movies.length > 0) {
        for (let index = 1950; index < 2019; index++) {
            let yearArr = movies.filter((e) => e.year==index);
            if (ratesAverage(yearArr) > resultArr.rate) {
                resultArr.year = index;
                resultArr.rate = ratesAverage(yearArr);
            }
        }
        result = `The best year was ${resultArr.year} with an average rate of ${resultArr.rate}`;
    } else result = undefined;
    return result;
}
