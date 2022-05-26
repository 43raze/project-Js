const numberOfFilms = prompt('Сколько фтльмов вы уже просмотрели?', '');
const personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personaMovieDB.count < 10) {
	console.log('Просмотрено мало фильмов');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personaMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Прпоизошла ошибка');
}

console.log(personaMovieDB);