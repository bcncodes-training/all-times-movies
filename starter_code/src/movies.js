/* eslint no-restricted-globals: 'off' */
"use strict"
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


// Try with new Map
const listas = new Map;
const listas1 = new Map;

listas.set(yearMovies(movies), noteMovies(movies));

let anys = listas1.set('year', yearMovies(movies));
let notaza = listas1.set('rate', noteMovies(movies));


//console.log(listas);
//console.log(anys);
//console.log(notaza);
//console.log(listas1.get('year'));

/* const juntos = () => {for(let entry of listas){
  return entry;
}};
console.log(juntos(movies)); */

/* const merged = yearMovies(movies).reduce((obj, key, index) => ({ ...obj, [key]: noteMovies(movies)[index] }), {});
console.log(merged); */

const merged1 = (arr1, arr2) => arr1.map((obj, key) => ({ ...obj, [obj]: arr2[key] }), {});
console.log(merged1(yearMovies(movies), noteMovies(movies)));

/* const str = (arr, arr1) => Object.keys(arr).map((key) => arr[key], arr1[key]);

console.log(str(merged1(yearMovies(movies), noteMovies(movies)))); */

/* const arr4 = merged1(yearMovies(movies), noteMovies(movies)).map((value, index) => [value]);
console.log(arr4); */

const object = Object.assign( ...merged1(yearMovies(movies), noteMovies(movies)));
console.log(object);

const count = (arr) => arr.reduce((a, b) => ({...a,
  [b]: (a[b] || 0) + 1 
}), {});
console.log(count(yearMovies(movies)));


const bestYear = (arr) =>{
  let ratesYear   = [];
  let moviesYear  = [];
  let averageYear = [];

  arr.map((data) =>{
    if(ratesYear[data.year]){
      moviesYear[data.year] += 1;
      ratesYear[data.year] += parseFloat(data.rate);
      averageYear[data.year] = parseFloat((ratesYear[data.year] / moviesYear[data.year]).toFixed(2))
    } else {
      ratesYear[data.year] = parseFloat(data.rate);
      moviesYear[data.year] = 1;
      averageYear[data.year] = parseFloat(data.rate)
    }
  });

  const year = Object.keys(averageYear).reduce((a, b) =>{
    if(averageYear[a] === averageYear[b]){
      if(b < a) {
        return b;
      }
      return a;

    } else if(averageYear[a] > averageYear[b]){
      return a;
    }
    return b;
  });
  return `The best year was ${year} with an average rate of ${averageYear[year]}`;
};
console.log(bestYear(movies))

