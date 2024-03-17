const COMPOSERS = [
    {
        firstName: 'Tyler',
        lastName: 'Bates'
    },
    {
        firstName: 'Benjamin',
        lastName: 'Wallfish'
    },
    {
        firstName: 'Andrew',
        lastName: 'Lockington'
    }
];

const DIRECTORS = [
    {
        firstName: 'Zack',
        lastName: 'Snyder'
    },
    {
        firstName: 'Andres',
        lastName: 'Muscetti'
    },
    {
        firstName: 'Brad Payton',
        lastName: 'Payton'
    }
];

const COUNTRIES = [
    'USA',
    'Canada',
    'Australia'
];

const GENRES = [
    'Science fiction',
    'Action movie',
    'Horror',
    'Fantasy',
    'Drama',
    'Detective'
];

const films = [
    {
        title: 'Хранители',
        genres: [
            GENRES[0],
            GENRES[1]
        ],
        date: 2009,
        evaluation: 7.7,
        countries: [COUNTRIES[0]],
        director: DIRECTORS[1],
        music: COMPOSERS[2],
        duration: 162,
    },
    {
        title: 'Оно',
        genres: [
            GENRES[2],
            GENRES[3],
            GENRES[4],
            GENRES[5]
        ],
        date: 2018,
        evaluation: 9.7,
        countries: [
            COUNTRIES[0],
            COUNTRIES[1]
        ],
        director: DIRECTORS[2],
        music: COMPOSERS[1],
        duration: 135,
    },
    {
        title: 'Разлом Сан-Андреас',
        genres: [
            GENRES[0],
            GENRES[1]
        ],
        date: 2015,
        evaluation: 6.2,
        countries: [
            COUNTRIES[0],
            COUNTRIES[2]
        ],
        director: DIRECTORS[2],
        music: COMPOSERS[2],
        duration: 114,
    },
];

renderCardList(films);
