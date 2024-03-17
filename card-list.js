const cardListElement = document.querySelector('.card-list');
const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.card');

function renderCardList(films) {
    for(const film of films) {
        const filmElement = cardTemplate.cloneNode(true);
        filmElement.querySelector('.title').textContent = film.title
        filmElement.querySelector('.genres').textContent = film.genres.join(', ');
        filmElement.querySelector('.date').textContent = film.date
        filmElement.querySelector('.evaluation').textContent = film.evaluation
        filmElement.querySelector('.countries').textContent = film.countries.join(', ');
        filmElement.querySelector('.director').textContent = film.director.firstName
        filmElement.querySelector('.music').textContent = film.music.firstName
        filmElement.querySelector('.duration').textContent = film.duration
    }

    cardListElement.append(filmElement);
}