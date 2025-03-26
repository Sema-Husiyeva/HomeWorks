let movies = [
    {
        id:1,
        image: 'https://s3-alpha-sig.figma.com/img/e083/61e7/d73d35e0d3e6d70c6140c7f29890d890?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TB5--zhsXqqDEDaEiD~2LA02a26Xpv3AR5Nk1saiPI1PUSg990U3AcE9Ammdwn-ZVy9vxiPWy6I3bv8ncFvulDYr~-2J-CERh9wtNE8Zn2VRYT68aSpiZ6Tf46pfUXHE~lSrTAQeKHofIDQdu0hNaiGeM5QOFiyZPkcuo1TN0D81ur8J-pIl~DmJooU38YEzjv5dblr~McCP78GrHVY7Po7pQnIJ-8Z5KC8KFxdduk7NMee9DVMqK6pobJYyqVXLL8n2YHFGbNLGGTZAuxLQuVb3DDhBG5TkNKh061ZCEeV7Fd-E0IZ~uny59qGGGKLldIV73BSFGc1STfS7D3zgDA__',
        year: 2019,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'PG',
        name: 'The Great Lands'
    },
    {
        id:2,
        image: 'https://s3-alpha-sig.figma.com/img/24bb/e8ec/90c6da499c868c2aad9eca2e3e7a4022?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pgS7chiPi4gfpkk1btnwWnyu8O0pb1M1BH6X6IO3SSLCjIXVm26RuaUEeQeeZfNJpyb9nDlReJ96Wp9lgwgaBTCvy7EUuSWmSdVnB-AGarPhrSLBlMBG0wpdgj6uVvLQJkXvxNAKJa8rfurHaqKCsZidNG-P4ucCuhQnzDrn9KpDJS~p8EtRMvgwRjAngFIrKeVPm0zuWJXHp5CF4eVwKmbgXtvmLYsQ2rdWWKaesgeSefyOdEidTBAurCgchEfRY1uIs56FIgS7qSbujczJUJYcIzfUPoI4qkSkSZSrtPQZ3qmKHn4M1fdEWx7IwzOB0GSr1GDJ8SMX5jz-ZQiRGg__',
        year: 2019,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'PG',
        name: 'The Diary'
    },
    {
        id:3,
        image: 'https://s3-alpha-sig.figma.com/img/154d/80f3/f8722c6c160eead75d0a74ab442132e3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MPt~EObK6d7urxOxUhVOOzd9~1ooAd3t5gU7qcTyVf9imddPVEFcAAB6eTNs0w6J3ORpTW1QOrQIq7ygyNW-k15QMcrlMx3UBC7w9K-V8aTZFhaZcJJXqAo-xFau9zj~ajdZXf81yqVi9zCmao~QRvdyGJh~LInqk~WvQafdzOv0i27ymBXdTigMDRzYWBKArPP~bO7LEWK8lMc889hpSbRHJ1C6NnYHdRpic8NrBpEsAybfXVnaH~Bpw~pW2usrw7IXozEYuzDSmCTx~OpVbOtq8Pb416y1WlSHHhiwqBPXce5tGXQpcEXPQSFZF~3QDM6psN8IWKe22dqIvpzqeg__',
        year: 2017,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: '18+',
        name: 'Earth’s Untouched'
    },
    {
        id:4,
        image: 'https://s3-alpha-sig.figma.com/img/e4d9/1715/ccf4e8aa6d00c3218ab9ecb45fb2388b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jR6emYxoV6gZFcMaOzIU74-qZtXUhHQTBS5dyKzIYy-rkQ5PsTiKpbND-f0QtdvqatSigMh2jlhzT3AO-6vzZUjQ6ItYpYIHNDy-tPxYHOcrzGrA13aj7IXHR12TvR6Ppj-o0pnKQA9IXn9ajoric5EsmxnHRKaxlVCd9mWd1icW~j~t-P9wolYL~Lx546hiWi0~FHmq4UAEwI7VNLBRkMmY4zEvm90LnKjiOPHM4e44aoIDBr4GioEVqPXJuLkTRhEoHKFWeRSGMAuVP1MJx75BRJMbpk0q251a6ToxOSyegWIdEb0G2OX3eCSHd~OWduGhf7u4MLtgpX-GFjxMgg__',
        year: 2019,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'E',
        name: 'No Land Beyond'
    },
    {
        id:5,
        image: 'https://s3-alpha-sig.figma.com/img/a3c0/d276/74ad9ff6a7af633bb7a75fbec6820e48?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ehaPJZup4gYTDxPOeRGYtsyQ8Z2iMqm4Ihw-TlOOKpEEJHih3QFYp9mryFDgCO5S4YOVMHLiXrAwWAKg0PbZtGcdykp9MOW2pwuTA-LKo56LS~51ev1uL-kbXAKuB0Svg1vMXLnUtWDiOmNwFoANt1CCcU6rFg-JiCzYPnDskn4BLsmWeW8s~SACvjDdfAQ1LZ7jot9kGCjn5auCE05PdY-fvo~GCJutqYsI9P7XJul55uCVJZI8Gg-i9PtlawSoWlOSKatmOq5L6lBZEOJxFVtTgnEpZeVsXir5h2s~29puWBCQgBFHYh3aTBXdmHS466aghJZTRd~-AmLT6OvdRg__',
        year: 2016,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'PG',
        name: 'During The Hunt'
    },
    {
        id:6,
        image: 'https://s3-alpha-sig.figma.com/img/9370/f41f/736f506d6161c1f926f92c6515cef3d5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UfF4phkAl8caFzHDpmSOxKPJHyLHi3YbmqBbOLFkWvQKE0Rx5CyHjtQsqv0Kh1-7qK0VhBuQ1lmGHpQCh-6l4RMBCKSaIbHk4ZiDwgDYUfrmWtt5yfytTCCgqJ3gIdP3c57twazQrno2S8NduJzM~p1G96wzr7iU9AiKKnl9-Q7~S3OpDvFvfs-NSfXNecL7ClhAMthwzg5sb3O9jwsu3ffH9LEG9~9~Z1it9d6J7J0lSJXWeREga9R50AUDvi8XkXY29D1tci324ZZiImelFd5PxRJGAewooLIPLubGJcvGjCy5pxK7GbYB6FWhreoXw~IbpmGbLtgwgdwhlIUvIQ__',
        year: 2016,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'PG',
        name: 'Autosport The Series'
    },
    {
        id:7,
        image: 'https://s3-alpha-sig.figma.com/img/f7c5/cbdb/1929c334aa1270550633e57dab7dcdc8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DA80fnpcre38tz4PZ9g6R4SbpZkFEmnXyiaVt315GEjaiCfOwZ-VHWbir8X-iYeUHi4Iyul~EB2m8waTNPyFItzD5You3SQsJ4vR~UehCYWycqBbCW35iJ9Jxebff1KARTENszwMphHpHWWW48YYrmxYektivnz4a-uMnuz0gFV8d9Nc51K1-ZSsJ4lXuhBBX7jHW0pSgE0ckWJLOffQK6mo0S2~aHLChYOwDYnnr22B7n~oxM3LA~yIxn~x25JYc0LHMr5y0D0yOonSY5p-nh-IOA8qRWruQ787kZLbiQTSVQA4Clsv4rnxA7Qc-shRg-UJ0AEiDb3kO~TiBGCiww__',
        year: 2017,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Tv Series',
        context: 'E',
        name: 'Same Answer II'
    },
    {
        id:8,
        image: 'https://s3-alpha-sig.figma.com/img/8932/79f1/643e5b020e786c2d8a204df77e434d02?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iuu8b6QbKvYPR3K9hckmJnjQk9TVIpXKHPeAlieiV~u75bxfV~cLL~kdINHRoqHaFHvlIPvMTQdeeE0jrBefTUsnRkBJ7ZAWWIuDBFT1-0W-mTTP7Rjs2p8szqudUj6p89RQB-Kr-GHqj3xa9p4gG6eoo6H~A~vrX0yW~an5XZmULVmC6B5BDA-Nobiy-kQBfilVlnijRbBc9gZY61SI87XTT3b5PZ85AgblRYS987NTK8Iv6Izd0aZzlvsmqZbPprWGlYqrCcdl97SjurIvUJB050qjnxINpgVI4dYgCPezshy16m1vMMpVBECc7oiwVvOM2IQv9f2hVHbyyom~7g__',
        year: 2016,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'PG',
        name: 'Below Echo'
    },
    {
        id:9,
        image: 'https://s3-alpha-sig.figma.com/img/a665/d243/bd5b796d8445f1a788cdd9027c18d722?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rOSc1KSaENqEnzKTRQLMN7yWs78yfvffOcDUQhjXfafTV1a0OvmlEe9~vJRW4Pxz~3dRTieFdJQEbHSbhfIvaK41u1hPEFrnikQppcCkoGrArq9d3FqCAK5~4WCsOsPXsdcOVYTFs~n0YfvPaVRagJQ8yNzbowHjDJmxeURacHv2pP2vIcVjcKsm~aMByH35wAo~k4x5eTIAi7T9XNetUoqFZn~XJKJogHv2FFffxpBE4FPs0zf5BAh9N4BF2Yjg0803LxSVXPRNU0nZUiBg~8CKzEk2id9PtFom9j5xg7dPUh0T~JJ3cCWq-7JKXgZXQ~6TcQQR4tQ8sW1c30xuLA__',
        year: 2015,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'E',
        name: 'The Rockies'
    },
    {
        id:10,
        image: 'https://s3-alpha-sig.figma.com/img/0371/a4e8/d3a4aacaaa6d07abbaa9b3af0c7532ed?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M7ttgBkQDwuA0ehWgF8kE0nnV~oR3SDhzdFn6tdbx6Xcdvqo2cyG6BujY6hkUHtw~9YWKQ9ENmO-oiHlhATlsfjZZrvwoZZ5xZiQ-l0OL9QZ7ri7XQaXaBYuip-a1AL9cv9YY~p4jnZWWrcW2RJIB3acRZsL5jAPTrMi8qeN2boHAl1VRfDKAoKYlkUXFvPhNOYOjCMgKCOb2loX1qVH~KHfZS4Jt54r2EERQVwtvCFDH0GDVqzxYqSmNWlC2Scdi0vevHQORNl9hYMAbUiPW4pq78myJRFG0ewtCc8oaTatzeCOT9fvfUX-ZEx4A07Khm9n8t3xJg0SbvHPMx23cA__',
        year: 2017,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'PG',
        name: 'Relentless'
    },
    {
        id:11,
        image: 'https://s3-alpha-sig.figma.com/img/5361/fb9c/7c73e7ceb5015ddfdc296b006e07449e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TiDkydF75tb~ZIkxFvKBtm7aPurbIRhCha9ignbrXdoFMJiqCVpIMX02WaEUfCS0Pmn9gRqkD1X0GRBpnzezQhoBM5SgKIwZ7Q0bqPZXPIqRRjMhCDbU5DMYDfbqO4jYf82Xz8cBsuoYMQkKn5IxvTcOmNX1eOe1msFuCrlAOZnGj5mLrddXWjm6G1~KzWmlobzTndM28ggRX5-l16pWkp9gAgetNpd1KDQSz8OA65J1Oo4tIGb~pXPGTfanEUkkqz9JiwU0MmRZ8fnoNju56C1EjpLxCloMI1xAazMc9Mg1Pn-~cuUEQrjs6QtY4z31IEJ9e4q0kbA~Vr4KoCZKZg__',
        year: 2018,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: '18+',
        name: 'Community of Ours'
    },
    {
        id:12,
        image: 'https://s3-alpha-sig.figma.com/img/da7b/da23/4c5a5f663707caa41b1adf8434ebcda4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m60q3IQsFrZj75RvK7kNHx~ybrX0xjWJ28QFejMqvbfUvElJIJBEojbmGCKgIiL~fXgt7catmw1Tti3WAR4JJd~BZyBSSbsnzJAcP6riP1DJfz6jw~DWQUb3UNHNfavyWxP6tFbm34EcGkM14aIsIZuSjkjIGj14bSdYO-bwQmvyvxuU~iB0peIJeBsJOie1agWxoyEMHc1ofkUVkSpUNZfhpkru06Foe6BqAKfbTBJytPmlfu4tw8Tdr5tDmu9Z-RiQGfX-o88lrId2EP6GkNH~cdj-A8R3Ie2H~SZfmuGvi7dnDRJnB0wBV72mjwP8oXwJHLN008-aZ6y29X6mMg__',
        year: 2015,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'PG',
        name: 'Van Life'
    },
    {
        id:13,
        image: 'https://s3-alpha-sig.figma.com/img/2a9a/2b59/81fa982861b77688366906e7018e2813?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wt9H1F4sIQPmY2qKnTA4ub~YsYLyeSro6hnym3OwMXhfketJrZK~6QOVEnmwS~zQ-GznUpWvIadbTemyXYbqxcNmbgM~iL4StEfUJnkwX8n0FtoIVPA-~CK2GiSsZu1HmYlLvoymg6Vl6FRDWjljbr1R~Vivg21UbGDhVzAvS-Wbr3o8RpN4KKuQCblznIYorjpsG21bGYjQq7EI9G6XAYKmGaKUQIcM7pQYvk7OgSwtj81asgyfYRWqDdVSOzEXYH~VfC4PmZiL1UljoUfvLLxaTJjrb4HjNFy1ghpO5e~K9YIhKnu8BWfQJLMvtOacRdhrqCxCznOo1N8OYDmJJg__',
        year: 2021,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'PG',
        name: 'The Heiress'
    },
    {
        id:14,
        image: 'https://s3-alpha-sig.figma.com/img/baeb/ea3e/cbf68d70d90bcb022e329d695349b5e4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j4jjSA8N-XNcl3tiTUDjkN62CPxoiD82AvyT-KkgdpsHKuT8GD~Lpk-WO~OMuuQ-RODFS7dbR0mBagMfRswvaBlOuC2SCV8dduoAsZPrD~q97GU67oPkYLB4JbaHQqwpYQPoUGCNXvg4M2cQmvKieVYFmIge9WfmQp3PwNPmXv73Ml2ylpOpaVkST7AoAwJ3X-v7GsheH67~WdIP0wUixwaMOuv2NkYNK4a8ONmWY-qq7CmT6YBss2DRi0pfYz~moRx2gcEB9PNDYZnztTLEFaUG-jgza~uHlNoA-d6mDDuPBV~ZkBa6d8UvsdcssONXQgO9dp6Kh-PxBcRsiXPnOw__',
        year: 2017,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: '18+',
        name: 'Off the Track'
    },
    {
        id:15,
        image: 'https://s3-alpha-sig.figma.com/img/812d/08aa/b7b86edc3a899e7793cb0c497a921d78?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RC7XYeJDJeMNyBrW5i1AQq4Bo4E2w5KV84GmLaYacYisduLW9uSKleMMa85o-HOidpBI7Hug3x3WOD9JgtvvI~laZ9hens09WOdecfYfTOJr7prnFFgAdSokdbuUgehNv2kQS7oY4ZQ80CGGdpD9s84Fo2BJIX73ApJAkv0IOUi2AYvR~H9YyITmo99~JndOu5N2qxtxIEs542uGha4ua1YcEXFvWYu43N5hadx6gZf439p~xu3IsKuEuuHFIRJgl~PvunvYCwXG9O5nW2dglZYghCt9Bbc1OIiJL-yNKMqnLkt1XYZsm7ySjWQBGnq58iAxtI-4~qsPYsPotLmc9A__',
        year: 2017,
        icon: '/JS-final/images/film-icon.svg',
        format: 'Movie',
        context: 'E',
        name: 'Whispering Hill'
    },
    {
        id:16,
        image: 'https://s3-alpha-sig.figma.com/img/21ca/8b7f/38d7f40ed5576563a6a845477dbdf1be?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n4GwDRNtA5BbewCcA1IgI7ZQuYtcFhP37tLi-DdUXv8ivQBkFEqPafq9xBYCWYXvQkfg9Fqe7LVuMFsJ1eHxysaSAbuHFmzVCyqT0AN3gTq8gy100iK4SoWD0-TeIrPEgraLFZQl2dM5zqBE0S9chmmzmCKdVg-PmPXSES9GGcR-kXk61tDr4xt9rPFekd15x0QlDFvAvzLTWWFpFNbwMOzQA~W1HESokGfBcV9NKgae-VDFElpK4qEjIy7yhEd3rh~79AfkpFzZbo0Tdy3D071yGiguf-~mdBJNi~F57i1t8Kw~wUEm3V3F33I9cI5XDTpYO5t~0Yyfm5kasHn61A__',
        year: 2013,
        icon: '/JS-final/images/tv-icon.svg',
        format: 'Tv Series',
        context: 'PG',
        name: '112'
    },
]

const moviesList = document.querySelector('.home-page-right-movies-list');
const favBtn = document.querySelector('.favorites');
const menuBtn = document.querySelector('.menu');
const searchInput = document.querySelector('.home-page-right-search-input');

let favMoviesBox = [];
let showingFavorites = false;

function showMovies(moviesToDisplay = null) {
    moviesList.innerHTML = '';
    
    let moviesToShow;
    if (moviesToDisplay) {
        moviesToShow = moviesToDisplay;
    } else if (showingFavorites) {
        moviesToShow = favMoviesBox;
    } else {
        moviesToShow = movies;
    }
    
    moviesToShow.forEach(movie => {
        const isFavorite = favMoviesBox.some(fav => fav.id === movie.id);
        
        let nonFavIconClass = 'home-page-right-movies-list-card-non-fav-icon';
        if (isFavorite) {
            nonFavIconClass += ' non-active';
        }
        
        let favIconClass = 'home-page-right-movies-list-card-fav-icon';
        if (!isFavorite) {
            favIconClass += ' non-active';
        }
        
        moviesList.innerHTML += 
        `
        <div class="home-page-right-movies-list-card">
             <img class="${nonFavIconClass}" data-id="${movie.id}" src="/JS-final/images/non-fav-icon.svg" alt="non-fav-icon">
             <img class="${favIconClass}" data-id="${movie.id}"src="/JS-final/images/fav-icon.svg" alt="fav-icon">
             <img class="home-page-right-movies-list-card-img" src="${movie.image}" alt="${movie.name}">
             <div class="home-page-right-movies-list-card-info">
                <p>${movie.year}</p>
                <p class="home-page-right-movies-list-card-info-dot">.</p>
                <div class="home-page-right-movies-list-card-info-format">
                    <img src="${movie.icon}" alt="film-icon">
                    <p>${movie.format}</p>
                </div>
                <p class="home-page-right-movies-list-card-info-dot">.</p>
                <p>${movie.context}</p>
            </div>
            <h3 class="home-page-right-movies-list-card-name">${movie.name}</h3>
         </div>`;
    });

    const nonFavIcons = document.querySelectorAll('.home-page-right-movies-list-card-non-fav-icon');
    const favIcons = document.querySelectorAll('.home-page-right-movies-list-card-fav-icon');

    nonFavIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            let movieId = Number(icon.getAttribute('data-id'));
            let favMovies = movies.find(movie => movie.id === movieId);
            let isExist = favMoviesBox.some(movie => movie.id === movieId);
            
            if(isExist) {
                favMoviesBox = favMoviesBox.filter(movie => movie.id !== movieId);
            } else {
                favMoviesBox = [...favMoviesBox, favMovies];
            }
            
            showMovies();
        });
    });

    favIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            let movieId = Number(icon.getAttribute('data-id'));
            favMoviesBox = favMoviesBox.filter(movie => movie.id !== movieId);
            showMovies();
        });
    });

}


favBtn.addEventListener('click', () => {
    showingFavorites = !showingFavorites;
    let alertMessage = document.querySelector('.home-page-right-movies-alert-message');
    if (showingFavorites && favMoviesBox.length < 1) {
        alertMessage.style.display = 'block';
        alertMessage.textContent = 'Your favorites list is empty!';
    } else {
        alertMessage.style.display = 'none';
    }
    showMovies();
});

menuBtn.addEventListener('click', () => {
    showingFavorites = false;
    let alertMessage = document.querySelector('.home-page-right-movies-alert-message');
    if (alertMessage) {
        alertMessage.style.display = 'none';
    }
    showMovies();
});

showMovies();

function searchMovies() {
    let searchInputValue = searchInput.value.toLowerCase();

    let moviesToSearch;
    if (showingFavorites) {
        moviesToSearch = favMoviesBox;
    } else {
        moviesToSearch = movies;
    }
    
    let filteredMovies = moviesToSearch.filter(movie =>{
        return movie.name.toLowerCase().startsWith(searchInputValue) ||
        movie.name.toLowerCase().includes(searchInputValue)
    });

    showMovies(filteredMovies);
}

searchInput.addEventListener('input', searchMovies);
