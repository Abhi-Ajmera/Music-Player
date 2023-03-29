const music = new Audio("Songs/295.mp3");
// music.play();

const songs = [
    {
        id:'1',
        songName: '295',
        artist: 'Sidhu Moosewala',
        poster:'Img/Moosetrap.jpg'
    },
    {
        id:'2',
        songName: 'Excuses',
        artist: 'AP Dhillon',
        poster:'Img/Excuses.jpg'
    },
    {
        id:'3',
        songName: 'Fuck Em All',
        artist: 'Sidhu Moosewala',
        poster:'Img/Sidhu-moosewala.jpg'
    },
    {
        id:'4',
        songName: 'How You Like That',
        artist: 'Blackpink',
        poster:'Img/Blackpink.jpg'
    },
    {
        id:'5',
        songName: 'Industry Baby',
        artist: 'Lil NasX',
        poster:'Img/Industry-baby.jpg'
    },
    {
        id:'6',
        songName: 'Money',
        artist: 'Lisa',
        poster:'Img/Lalisa.jpg'
    },
    {
        id:'7',
        songName: 'Montero',
        artist: 'Lil NasX',
        poster:'Img/Insustry-baby.jpg'
    },
    {
        id:'8',
        songName: 'No Love',
        artist: 'Shubh',
        poster:'Img/No-Love.jpg'
    },
    {
        id:'9',
        songName: 'Old Skool',
        artist: 'Sidhu Moosewala',
        poster:'Img/Moosetrap.jpg'
    },
    {
        id:'10',
        songName: 'Pasoori',
        artist: 'Shea gill',
        poster:'Img/Pasoori.jpg'
    },
    {
        id:'11',
        songName: 'Starboy',
        artist: 'Weekend',
        poster:'Img/Starboy.jpg'
    },
    {
        id:'12',
        songName: 'Sugar Brownies',
        artist: 'Unknown',
        poster:'Img/Sugar-brownies.jpg'
    },
    {
        id:'13',
        songName: 'Summer High',
        artist: 'AP Dhillon',
        poster:'Img/Summer-high.jpg'
    },
    {
        id:'14',
        songName: 'Unstoppable',
        artist: 'Sia',
        poster:'Img/Unstoppable.jpg'
    }
];

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 400;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 400;
});

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let pop_artist = document.getElementsByClassName('item')[0];

pop_artist_right.addEventListener('click', () => {
    pop_artist.scrollLeft += 400;
});

pop_artist_left.addEventListener('click', () => {
    pop_artist.scrollLeft -= 400;
});