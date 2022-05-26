let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фтльмов вы уже просмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фтльмов вы уже просмотрели?', '');
	}

}
start();

const personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const
			a = prompt('Один из последних просмотренных фильмов?'),
			b = prompt('На сколько оцените его?');
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personaMovieDB.movies[a] = b;
			console.log('done');

		} else {
			console.log('error');
			i--;
		}
	}
}
// rememberMyFilms();

function detectPersonalLevel() {
	if (personaMovieDB.count < 10) {
		console.log('Просмотрено мало фильмов');
	} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personaMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Прпоизошла ошибка');
	}
}
// detectPersonalLevel();

function showMyDb(hidden) {
	if (!hidden) {
		console.log(personaMovieDB);
	}
}
showMyDb(personaMovieDB.privat);

function writeYoueGeners() {
	for (let i = 1; i <= 3; i++) {
		personaMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
	}
}
writeYoueGeners();