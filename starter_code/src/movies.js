/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  array.map(movie=> {
    let duracion = movie.duration,
        duracionSinLetras = duracion.replace(/[hmin]/g,' '),
        separador = " ", // un espacio en blanco
        arrayHorasMinutos = duracionSinLetras.split(separador),
        horasAMinutos = arrayHorasMinutos[0]*60,
        hMinutos = parseInt (horasAMinutos),
        minutos = parseInt (arrayHorasMinutos[2]),
        durTotal = hMinutos + minutos;

        console.log(durTotal);


  }); 

}


turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average



