const jokeContainer = document.getElementById('joke');

const allURL = {
	random:
		'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
	programming:
		'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
	dark: 'https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
	pun: 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
	misc: 'https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
};

document.addEventListener('click', (e) => getJoke(e));

const getJoke = (e) => {
	switch (e.target.name) {
		case 'random':
			fetchJoke(allURL.random);
			break;
		case 'programming':
			fetchJoke(allURL.programming);
			break;
		case 'dark':
			fetchJoke(allURL.dark);
			break;
		case 'pun':
			fetchJoke(allURL.pun);
			break;
		case 'misc':
			fetchJoke(allURL.misc);
			break;
		default:
			break;
	}
};

let fetchJoke = (url) => {
	jokeContainer.classList.remove('fade');
	fetch(url)
		.then((data) => data.json())
		.then((item) => {
			jokeContainer.textContent = `${item.joke}`;
			jokeContainer.classList.add('fade');
		});
};
