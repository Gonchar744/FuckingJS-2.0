const favoriteMovie = {
    name: "Independence Day",
    release: "1996",
    genre: ["science fiction", "action packed"],
    fees: "816.9 million",
    isMoviePaidOff: true,
    director : "Roland Emmerich",
    rating: "7.0/10",
    staring: ["Jeff Goldblum", "Will Smith", "Robert Lodge Robert", "Judd Hirsch", "Bill Pullman", "Mary McDonnell", "Margaret Colin"]
}; 

const genre = favoriteMovie.genre.join();
const staring = favoriteMovie.staring.join();

console.log(favoriteMovie.name);
console.log(favoriteMovie.release);
console.log(genre);
console.log(favoriteMovie.fees);
console.log(favoriteMovie.isMoviePaidOff);
console.log(favoriteMovie.director);
console.log(favoriteMovie.rating);
console.log(staring);
