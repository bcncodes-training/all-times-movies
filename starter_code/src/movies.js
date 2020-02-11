/* eslint no-restricted-globals: 'off' */

 // Turn duration of the movies from hours to minutes 

 const getHoraMovie = (movieHour) => movieHour.map((data, idx, arr) => parseInt(data.duration, 10) * 60  );
 console.log(getHoraMovie(movies));

 const getMinuteMovie = (movieMinute) => movieMinute.map((data, idx, arr) => parseInt(data.duration.slice(3)));
 console.log(getMinuteMovie(movies));

 const totalTimeMovies = (totalMinutes1, totalMinutes2) => totalMinutes1.map((minutes, idx) => minutes + totalMinutes2[idx]);
 console.log(totalTimeMovies(getHoraMovie(movies), getMinuteMovie(movies)).map((data) => data + 'min').toString(`${totalTimeMovies}`));

 const finalTimeString = (addMinLetters) => addMinLetters.map((data) => data + 'min');
 console.log(finalTimeString(totalTimeMovies(getHoraMovie(movies), getMinuteMovie(movies))));
 

// Get the average of all rates with 2 decimals 

const getRate = (ratestring) => ratestring.map((data) => parseFloat(data.rate));//.reduce((a, b) => a + b, 0) / ratestring.length);
console.log(getRate(movies));

const getRateTwoDecimals = (arr) => ((arr - Math.floor(arr)) !== 0) ? arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length : ('Error');
console.log(getRateTwoDecimals(getRate(movies)));

const averageValue = (arr) => arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length;
console.log(averageValue(getRate(movies)).toFixed(1));

// Get the average of Drama Movies

const dramaMovies = (arr) => (arr).reduce((e, key) => e)
console.log(dramaMovies(getRate(movies)));

const dramaMovies1 = (arr) => arr.filter(e => e.genre.includes("Drama"));
console.log(dramaMovies1(movies));

const averageValue1 = (arr) => arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length;
console.log(averageValue1(getRate(dramaMovies1(movies))));

// Order by time duration, in growing order

const totalTimeMovies1 = (totalMinutes3, totalMinutes4) => totalMinutes3.map((minutes, idx) => minutes + totalMinutes4[idx]);
console.log(totalTimeMovies1(getHoraMovie(movies), getMinuteMovie(movies)));

const orden = (arr) => arr.sort((a, b)  => b - a);
console.log(orden(totalTimeMovies1(getHoraMovie(movies), getMinuteMovie(movies))));

// How many movies did STEVEN SPIELBERG

//case sensitive
const spilMovies = (arr) => arr.filter((nameDirector) => nameDirector.director.includes('Steven Spielberg'));
console.log(spilMovies(movies));

//case insensitive
const spielMovies = (arr) => arr.filter((nameDirector) => new RegExp('sTEVEN sPielbERG', 'i').test(nameDirector.director));
console.log(spielMovies(movies));

// Order by title and print the first 20 titles

const minLetter = (arr) => arr.sort((a, b) => (a.title.localeCompare(b.title))).slice(0, 20);
console.log(minLetter(movies));
//con localeCompare no tengo necesidad de lowerCase o UpperCase
//a recordar este

// Best yearly rate average

const yearMovies = (arr) => arr.map((any) => parseInt(any.year, 10)).slice(0, 50);
console.log(yearMovies(movies));

//parsefloat para decimales
const noteMovies = (arr) => arr.map((note) => parseFloat(note.rate)).slice(0, 50);
console.log(noteMovies(movies));

const map = new Map;
map.set('year', yearMovies(movies));
map.set('rate', noteMovies(movies));
console.log(map);

const groupYear = (arr) => arr.reduce((acc, any) =>{ acc[any.year] = acc[any.year] + 1 || 1;
  return acc;
 } , {});
console.log(groupYear(movies));
