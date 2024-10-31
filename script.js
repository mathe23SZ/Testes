const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const back = document.getElementById("back");

const theWayIAre = {
  songName: "The Way I Are",
  bandName: "Timbaland",
  File: "The Way I Are",
};

const becauseOfYou = {
  songName: "Because Of You",
  bandName: "Ne-Yo",
  File: "Because Of You",
};

const tokyoRevengers = {
  songName: "Tokyo Revengers",
  bandName: "MUPP",
  File: "Tokyo Revengers",
};

let isPlaying = false;
const playlist = [theWayIAre, becauseOfYou, tokyoRevengers];
let index = 0;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
  cover.src = `images/${playlist[index].File}.jpeg`;
  song.src = `songs/${playlist[index].File}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].bandName;
}

function backSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index = 1;
  }
  initializeSong();
  playSong();
}

initializeSong();

play.addEventListener("click", playPauseDecider);
back.addEventListener("click", backSong);
next.addEventListener("click", nextSong);
