/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let copia = array.map(movie => movie);
  copia.forEach(movie => {
    let timeStamp = movie.duration;
    let timeData = timeStamp.split(' ');
    let totalMinutes = 0;
    let minutesFromHours = 0;
    let minutesFromMinutes = 0;
    if (timeData.length > 1) {
      minutesFromHours = parseInt(timeData[0].replace('h', '')) * 60;
      minutesFromMinutes = parseInt(timeData[1].replace('min', ''));
    } else {
      if (timeStamp.includes('h')) {
        minutesFromHours = parseInt(timeData[0].replace('h', '')) * 60;
      } else {
        minutesFromMinutes = parseInt(timeData[0].replace('min', ''));
      }
    }
    totalMinutes = parseInt(minutesFromHours + minutesFromMinutes);
    movie.duration = totalMinutes;
    console.log(typeof movie.duration);
    //return movie;
  });

  // console.log(copia);
  console.log(typeof copia);
  return copia;
}

console.log(typeof turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let numReviews = array.length;
  let sumaReviews = array.reduce((suma, movie) => {
    if (movie.rate === '') return suma + 0;
    return suma + parseFloat(movie.rate);
  }, 0.0);

  return parseFloat((sumaReviews / numReviews).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movie => {
    if (movie.hasOwnProperty('genre') && movie.genre.includes('Drama'))
      return movie;
  });
  if (dramaMovies.length > 0) return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

function orderByDuration(array) {
  let copia = array.map(movie => movie);
  return copia.sort((prev, next) => {
    let order = prev.duration - next.duration;
    if (order === 0) {
      order = prev.title.localeCompare(next.title);
    }
    return order;
  });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length > 0) {
    let arrayFiltered = array.filter(movie => {
      if (
        movie.director === 'Steven Spielberg' &&
        movie.genre.includes('Drama')
      )
        return movie;
    });
    if (arrayFiltered.length === 0)
      return 'Steven Spielberg directed 0 drama movies!';
    return `Steven Spielberg directed ${arrayFiltered.length} drama movies!`;
  }
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let titlesArray = array.map((movie, index) => {
    return movie.title;
  });
  let sortedArray = titlesArray.sort((prev, next) => {
    return prev.toLowerCase().localeCompare(next.toLowerCase());
  });
  return sortedArray.filter((movie, index) => {
    if (index <= 19) return movie;
  });
}

// Best yearly rate average

function bestYearAvg(array) {
  if (array.length > 0) {
    let years = [];
    let moviesForYears = [];
    array.forEach(movie => {
      if (!years.includes(movie.year)) {
        years.push(movie.year);
        moviesForYears.push({ year: movie.year, movies: [movie] });
      } else {
        let index = years.indexOf(movie.year);
        moviesForYears[index].movies.push(movie);
      }
    });
    let avgForYears = [];
    moviesForYears.forEach(yearMovies => {
      let avg = ratesAverage(yearMovies.movies);
      avgForYears.push({ year: yearMovies.year, avg: avg });
    });

    avgForYears.sort((prev, next) => {
      let order = parseFloat(next.avg) - parseFloat(prev.avg);
      if (!(order > 0 || order < 0)) {
        order = parseInt(prev.year) - parseInt(next.year);
      }
      return order;
    });

    return `The best year was ${avgForYears[0].year} with an average rate of ${
      avgForYears[0].avg
    }`;
  }
}
