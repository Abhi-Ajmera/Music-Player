const music = new Audio("Songs/295.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: "295",
    artist: "Sidhu Moosewala",
    poster: "Img/295.jpg",
  },
  {
    id: "2",
    songName: "Excuses",
    artist: "AP Dhillon",
    poster: "Img/Excuses.jpg",
  },
  {
    id: "3",
    songName: "Fuck-Em-All",
    artist: "Sidhu Moosewala",
    poster: "Img/Fuck-Em-All.jpg",
  },
  {
    id: "4",
    songName: "How-You-Like-That",
    artist: "Blackpink",
    poster: "Img/How-You-Like-That.jpg",
  },
  {
    id: "5",
    songName: "Industry-Baby",
    artist: "Lil NasX",
    poster: "Img/Industry-Baby.jpg",
  },
  {
    id: "6",
    songName: "Money",
    artist: "Lisa",
    poster: "Img/Money.jpg",
  },
  {
    id: "7",
    songName: "Montero",
    artist: "Lil NasX",
    poster: "Img/Montero.jpg",
  },
  {
    id: "8",
    songName: "No-Love",
    artist: "Shubh",
    poster: "Img/No-Love.jpg",
  },
  {
    id: "9",
    songName: "Old-Skool",
    artist: "Sidhu Moosewala",
    poster: "Img/Old-Skool.jpg",
  },
  {
    id: "10",
    songName: "Pasoori",
    artist: "Shea gill",
    poster: "Img/Pasoori.jpg",
  },
  {
    id: "11",
    songName: "Starboy",
    artist: "Weekend",
    poster: "Img/Starboy.jpg",
  },
  {
    id: "12",
    songName: "Sugar-Brownies",
    artist: "Unknown",
    poster: "Img/Sugar-Brownies.jpg",
  },
  {
    id: "13",
    songName: "Summer-High",
    artist: "AP Dhillon",
    poster: "Img/Summer-High.jpg",
  },
  {
    id: "14",
    songName: "Unstoppable",
    artist: "Sia",
    poster: "Img/Unstoppable.jpg",
  },
  {
    id: "15",
    songName: "To be added",
    artist: "To be added",
    poster: "Img/Unstoppable.jpg",
  },
  {
    id: "16",
    songName: "To be added",
    artist: "To be added",
    poster: "Img/Unstoppable.jpg",
  },
  {
    id: "17",
    songName: "To be added",
    artist: "To be added",
    poster: "Img/Unstoppable.jpg",
  },
  {
    id: "18",
    songName: "To be added",
    artist: "To be added",
    poster: "Img/Unstoppable.jpg",
  },
];

// data for popular songs
Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, index) => {
    element.getElementsByTagName("img")[0].src = songs[index].poster;
    element.querySelectorAll("h5 span")[0].innerText = songs[index].songName;
    element.querySelectorAll("h5 .subtitle")[0].innerText = songs[index].artist;
  }
);

// data for popular artist
Array.from(document.querySelectorAll(".item li")).forEach((element, index) => {
  element.getElementsByTagName("img")[0].src = songs[index].poster;
});

let masterPlay = document.querySelector("#masterPlay");
let wave = document.querySelector("#wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active2");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active2");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let index = 0;
let posterInMasterPlay = document.getElementById("master_play_poster");
let titleInMasterPlay = document.getElementById("Title_master_play");
let subtitleInMasterPlay = document.getElementById("subtitle_master_play");

Array.from(document.getElementsByClassName("playListPlay")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    index = e.target.id;

    let clickedSong = songs.filter((s) => s.id === index);
    clickedSong.forEach((ele) => {
      // source and text change
      music.src = "Songs/" + ele.songName + ".mp3";
      posterInMasterPlay.src = ele.poster;
      titleInMasterPlay.innerHTML = `<h5 id="Title_master_play"> ${ele.songName} <br>
            <div class="subtitle"> ${ele.artist} </div>
            </h5>`;

      // css change
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");

      music.play();
    });
  });
});

function toMinSec(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

let currentTime = document.getElementById("currentStart");
let totalTime = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

// timing
music.addEventListener("timeupdate", () => {
  let musicCurrent = music.currentTime;
  let musicDuration = music.duration;
  currentTime.innerText = toMinSec(musicCurrent);
  totalTime.innerText = toMinSec(musicDuration);

  // time bar
  let progressBar = parseInt((musicCurrent / musicDuration) * 100);
  seek.value = progressBar;
  bar2.style.width = progressBar + "%";
  dot.style.left = progressBar + "%";

  // on change seek bar
  seek.addEventListener("change", () => {
    music.currentTime = (seek.value * musicDuration) / 100;
  });
});

// for songs queue
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 400;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 400;
});

// volume
let volumeIcon = document.getElementById("vol_Icon");
let volume = document.getElementById("vol");
let volumeBar = document.getElementsByClassName("vol_bar")[0];
let volumeDot = document.getElementById("vol_dot");

volume.addEventListener("change", () => {
  if (volume.value == 0) {
    volumeIcon.classList.remove("bi-volume-up-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.add("bi-volume-mute-fill");
  }
  if (volume.value > 0 && volume.value < 70) {
    volumeIcon.classList.remove("bi-volume-up-fill");
    volumeIcon.classList.add("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-mute-fill");
  }
  if (volume.value > 70) {
    volumeIcon.classList.add("bi-volume-up-fill");
    volumeIcon.classList.remove("bi-volume-down-fill");
    volumeIcon.classList.remove("bi-volume-mute-fill");
  }

  let newVol = volume.value;
  volumeBar.style.width = newVol + "%";
  volumeDot.style.left = newVol + "%";
  music.volume = newVol / 100;
});

let previous = document.getElementById("previous");
let next = document.getElementById("next");

previous.addEventListener("click", () => {
  index--;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("playListPlay")).length;
  }
  let newIndex = String(index);
  clickedSong = songs.filter((s) => s.id === newIndex);
  clickedSong.forEach((ele) => {
    // source and text change
    music.src = "Songs/" + ele.songName + ".mp3";
    posterInMasterPlay.src = ele.poster;
    titleInMasterPlay.innerHTML = `<h5 id="Title_master_play"> ${ele.songName} <br>
          <div class="subtitle"> ${ele.artist} </div>
          </h5>`;

    // css change
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.play();
  });
});

next.addEventListener("click", () => {
  index++;
  if (index >=  Array.from(document.getElementsByClassName("playListPlay")).length) {
    index = 1;
  }
  let newIndex = String(index);
  clickedSong = songs.filter((s) => s.id === newIndex);
  clickedSong.forEach((ele) => {
    // source and text change
    music.src = "Songs/" + ele.songName + ".mp3";
    posterInMasterPlay.src = ele.poster;
    titleInMasterPlay.innerHTML = `<h5 id="Title_master_play"> ${ele.songName} <br>
          <div class="subtitle"> ${ele.artist} </div>
          </h5>`;

    // css change
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    music.play();
  });
});

// for artist queue
let pop_artist_left = document.getElementById("pop_artist_left");
let pop_artist_right = document.getElementById("pop_artist_right");
let pop_artist = document.getElementsByClassName("item")[0];

pop_artist_right.addEventListener("click", () => {
  pop_artist.scrollLeft += 400;
});

pop_artist_left.addEventListener("click", () => {
  pop_artist.scrollLeft -= 400;
});
