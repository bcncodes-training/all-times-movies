/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let copia = array.map(movie => {
    let timeStamp = movie.duration;
    let timeData = timeStamp.split(' ');
    let totalMinutes = 0;
    let minutesFromHours = 0;
    let minutesFromMinutes = 0;
    if (timeData.length > 1) {
      minutesFromHours = parseInt(timeData[0].replace('h', '')) * 60;
      minutesFromMinutes = parseInt(timeData[1].replace('min', '')) * 1;
    } else {
      if (timeStamp.includes('h')) {
        minutesFromHours = parseInt(timeData[0].replace('h', '')) * 60;
      } else {
        minutesFromMinutes = parseInt(timeData[1].replace('min', '')) * 1;
      }
    }
    totalMinutes = parseInt(minutesFromHours + minutesFromMinutes);
    movie.duration = totalMinutes;
    return movie;
  });

  console.log(copia);
  console.log(typeof copia);
  return copia;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let numReviews = array.length;
  let sumaReviews = array.reduce((suma, movie) => {
    return suma + parseFloat(movie.rate);
  }, 0.0);

  return sumaReviews / numReviews;
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => {
        if(movie.contains(genre)){
        if(movie.genre.includes('Drama')) return movie;
        }
    });
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
