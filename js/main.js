


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