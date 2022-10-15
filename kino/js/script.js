
let numberOfFilms = +prompt('Qancha film ko`rgansiz?');
let actorName = prompt('Bosh rolda qaysi aktyor qatnashgan ');
let filmGenre = prompt('Qanaqa janrda suratga olingan ');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: actorName,
    genres: filmGenre,
    privat: false
};
console.log(personalMovieDB); 

 for (let i = 0; i < 2; i++){
    let a = prompt('Oxirgi ko`rgan filmlaringizdan biri?', ''),
          b = prompt('Uni qancha baholagan bo`lardingiz?', '');

    if (a == null || b == null || a == '' || b == '') {
    } else {
        personalMovieDB.movies[a] = b
    }

 }

if (personalMovieDB.count < 10) {
    console.log("Siz juda kam kino ko'rgansiz!!!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Siz kinoga qiziqasiz ");
} else if (personalMovieDB.count >= 30) {
    console.log("Siz juda ko'p kino ko'rgansiz");
} else {
    console.log("Eroooooooooooooooooooooooooor!!!!!!!!!!!!!!!");
}
