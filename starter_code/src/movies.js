/* eslint no-restricted-globals: 'off' */

//import movies from "../src/data";



 var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      rate: '9.0'
    },
    {
      title: '12 Angry Men',
      year: '1957',
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    }, 
    {
      title: 'Schindler\'s List',
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      rate: '8.9'
    },
    {
      title: 'Pulp Fiction',
      year: '1994',
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: '2003',
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.9'
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: '1966',
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      rate: '8.9'
    },
    {
      title: 'Fight Club',
      year: '1999',
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      rate: '8.8'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.8'
    },
    {
      title: 'Forrest Gump',
      year: '1994',
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      rate: '8.8'
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      rate: '8.8'
    },
    {
      title: "Schindler's List",
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: [ 'Biography', 'Drama', 'History' ],
      rate: '8.9'
    },

 ];
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

const getRate = (ratestring) => ratestring.map((data) => parseFloat(data.rate));
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

const nombre = (arr) => arr.filter((nameDirector) => nameDirector.director == ('Steven Spielberg'));
console.log(nombre(movies));

// Order by title and print the first 20 titles


// Best yearly rate average