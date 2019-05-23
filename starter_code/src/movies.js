/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(mMovies) {
    let mNewMovies = mMovies.map(e => {
        let newObject = new Object;
        let nHoras = 0; let nMinutos = 0; let nMinTotales;
        mDuration = e.duration.split(' ');
        if(mDuration[0].indexOf('h') >= 0) {
            // Son horas o solo horas
            nHoras = parseInt(mDuration[0]);
            if(mDuration.length > 1) {
                if(mDuration[1].indexOf('min') >= 0) {
                    // Son minutos
                    nMinutos = parseInt(mDuration[1]);
                }
            }
        } else if(mDuration[0].indexOf('min') >= 0) {
                // Son solo minutos
                nMinutos = parseInt(mDuration[0]);
        }
        nMinTotales = nHoras * 60 + nMinutos;
        objDuration = {duration: nMinTotales};
        // El nuevo Objeto se genera con la propiedad duration nueva tipo numerico;
        neWObject = Object.assign(newObject, e, objDuration);
        return newObject;
    });
    return mNewMovies;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(mMovies) {
    let averageRate = mMovies.reduce((prev,cur) => prev + ((cur.rate == '') ? 0 : parseFloat(cur.rate)), 0) / mMovies.length;
    return parseFloat(averageRate.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(mMovies) {
    let mMoviesDrama = mMovies.filter(e => e.genre.indexOf('Drama') >= 0);
    if(mMoviesDrama.length > 0) 
        return ratesAverage(mMoviesDrama)
    else 
        return undefined;
}

// Order by time duration, in growing order
function orderByDuration(mMovies) {
    mMovies.sort(function(a,b) {
        if(a.duration > b.duration)
            return 1;
        if(a.duration < b.duration)
            return -1;
        if(a.title > b.title)
            return 1;
        if(a.title < b.title)
            return -1;
        return 0;    
    });
    return mMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(mMovies) {
    if(mMovies.length > 0) {
        let mMoviesSteven = mMovies.filter(e => (e.director === 'Steven Spielberg') && (e.genre.indexOf('Drama') >= 0) );
        let nCount = mMoviesSteven.length;
        return `Steven Spielberg directed ${nCount} drama movies!` ;
    }
    else
        return undefined;
}

// Order by title and print the first 20 titles
function orderAlphabetically(mMovies) {
    let nLength = mMovies.length;
    if(nLength == 1)
        return mMovies[0].title;
    mMovies.sort(function(a,b) {
        if(a.title > b.title)
            return 1;
        if(a.title < b.title)
            return -1;
        return 0;    
    });
    if(nLength >= 20) {
        for(let i=20; i<nLength; i++)
            mMovies.pop();
    }
    // Generamos un array de salida de strings
    let mMovOut = [];
    mMovies.forEach(e => mMovOut.push(e.title));
    return mMovOut;
}


// Best yearly rate average
function bestYearAvg(mMovies) {
    let nLength = mMovies.length;
    if(nLength == 0)
        return undefined;

    // Ordenamos por la propiedad year
    mMovies.sort(function(a,b) {
        if(a.year > b.year)
            return 1;
        if(a.year < b.year)
            return -1;
        return 0;    
    });
    // Generamos un array de contadores por año
    let mCounterYearMovies = [];
    mMovies.forEach(e => {
        let found = mCounterYearMovies.findIndex(function(element) {
            return element.year === e.year;
          });
        if(found == -1)
            // Generamos un nuevo elemento en mCmCounterYearMovies
            mCounterYearMovies.push({year: e.year,nCount:1, total: parseFloat(e.rate), average: 0});
        else {
            mCounterYearMovies[found].nCount++; 
            mCounterYearMovies[found].total+=parseFloat(e.rate); 
        }
    });
    // Calculamos la media de cada año
    mCounterYearMovies.forEach(e => ((e.nCount>0) ? e.average = e.total/e.nCount : 0 ));
    // Ordenamos el array de Conteos por año
    mCounterYearMovies.sort((a,b) => b.average - a.average);
    return `The best year was ${mCounterYearMovies[0].year} with an average rate of ${mCounterYearMovies[0].average}`;
    //return mCounterYearMovies
}
