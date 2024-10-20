const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");

songName.innerText = "Blood Upon the Snow";

function playSong() {
  song.play();
}

play.addEventListener("click", playSong);
