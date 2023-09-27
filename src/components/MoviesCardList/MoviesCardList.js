import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList() {
    return (
        <div className="moviescardlist__container">
            <MoviesCard name="Зеленая миля"
                link="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/caaf02e9-4473-473c-a5d6-643a51fa9d53/576x"
                duration="112" />
            <MoviesCard name="Барби"
                link="https://www.soyuz.ru/public/uploads/files/2/7625598/202307101120091863ef7ac4.jpg"
                duration="114" />
            <MoviesCard name="1+1"
                link="https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg"
                duration="112" />
            <MoviesCard name="Oppenheimer"
                link="https://img4.labirint.ru/rc/9cbeaa4f375ff1d1165a10d5914e4805/363x561q80/books94/937692/cover.jpg?1683109508"
                duration="180" />
            <MoviesCard name="Майор Гром"
                link="https://upload.wikimedia.org/wikipedia/ru/thumb/1/1f/Major_Grom_2017.jpg/420px-Major_Grom_2017.jpg"
                duration="29" />
            <MoviesCard name="True"
                link="https://upload.wikimedia.org/wikipedia/ru/b/bd/Paris%2C_je_t%27aime_%28poster%29.jpg"
                duration="7" />

        </div>


    );
}

export default MoviesCardList;