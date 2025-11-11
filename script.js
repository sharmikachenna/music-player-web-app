// ---------------------------
// DOM ELEMENT SELECTIONS
// ---------------------------
const container = document.querySelector(".container");
const musicImg = container.querySelector(".img-area img");
const musicName = container.querySelector(".song-details .name");
const musicArtist = container.querySelector(".song-details .artist");
const mainAudio = container.querySelector("#main-audio");
const playpauseBtn = container.querySelector(".play-pause");
const nextBtn = container.querySelector("#next");
const prevBtn = container.querySelector("#prev");
const loveBtn = container.querySelector("#love-btn");
const hideBtn = container.querySelector("#hide-btn");
const progressArea = container.querySelector(".progress-area");
const progressBar = container.querySelector(".progress-bar");
const musicList = container.querySelector(".music-list");
const volumeSlider = container.querySelector("#volume-slider");
const volumeIcon = container.querySelector("#volume-icon");
const currentTimeEl = container.querySelector(".current-time");
const durationTimeEl = container.querySelector(".max-duration");
const addSongBtn = document.getElementById("add-song-btn");
const resetBtn = document.getElementById("reset-btn");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const toggleLikedBtn = document.getElementById("toggle-liked-btn");
const playlistTitle = document.getElementById("playlist-title");

// ---------------------------
// STATE VARIABLES
// ---------------------------
let musicIndex = 0;
let isPlaying = false;
let showLiked = false;

// ---------------------------
// DEFAULT SONG LIST
// ---------------------------
const defaultSongs = [
  { name: "Calm Down", path: "firstsong.mp3", image: "image1.jpg", singer: "Rema, Selena Gomez", liked: false },
  { name: "Touch", path: "secondsong.mp3", image: "image2.jpg", singer: "Katseye", liked: false },
  { name: "Umbrella", path: "thirdsong.mp3", image: "image3.jpg", singer: "Rihanna", liked: false },
  { name: "Shape Of You", path: "fourthsong.mp3", image: "image4.jpg", singer: "Ed Sheeran", liked: false },
  { name: "Love Me Like You Do", path: "fifthsong.mp3", image: "image5.jpg", singer: "Ellie Goulding", liked: false },
  { name: "Vekamleya", path: "sixthsong.mp3", image: "image6.jpg", singer: "Arijit Singh, Shreya Ghoshal", liked: false }
];

// ---------------------------
// LOAD SONGS FROM LOCAL STORAGE
// ---------------------------
let storedSongs = JSON.parse(localStorage.getItem("songs")) || [];
let newSongs = [];

defaultSongs.forEach(defaultSong => {
  const exists = storedSongs.some(storedSong =>
    storedSong.name === defaultSong.name && storedSong.singer === defaultSong.singer
  );
  if (!exists) newSongs.push(defaultSong);
});

let songs = [...storedSongs, ...newSongs];
localStorage.setItem("songs", JSON.stringify(songs));

function saveSongs() {
  localStorage.setItem("songs", JSON.stringify(songs));
}

// ---------------------------
// UPDATE LIKE ICON
// ---------------------------
function updateLikeIcon(isLiked) {
  const iconSpan = document.getElementById("love-icon");
  if (isLiked) {
    iconSpan.classList.add("filled");
    iconSpan.innerText = "favorite";
  } else {
    iconSpan.classList.remove("filled");
    iconSpan.innerText = "favorite_border";
  }
}

// ---------------------------
// LOAD MUSIC INTO PLAYER
// Supports .mp3 and website links
// ---------------------------
function loadMusic(index) {
  if (!songs.length) return;
  const song = songs[index];
  musicName.innerText = song.name;
  musicArtist.innerText = song.singer;
  musicImg.src = song.image || "default.jpg";

  // Check if path is a website URL
  if (song.path.startsWith("http://") || song.path.startsWith("https://")) {
    mainAudio.style.display = "none";
    if (!document.querySelector("#web-player")) {
      const iframe = document.createElement("iframe");
      iframe.id = "web-player";
      iframe.width = "100%";
      iframe.height = "180";
      iframe.allow = "autoplay; encrypted-media";
      iframe.style.border = "none";
      document.querySelector(".player").appendChild(iframe);
    }
    document.querySelector("#web-player").src = song.path;
  } else {
    mainAudio.style.display = "block";
    mainAudio.src = song.path;
    const webPlayer = document.querySelector("#web-player");
    if (webPlayer) webPlayer.remove();
  }

  updateLikeIcon(song.liked);
}

// ---------------------------
// PLAY / PAUSE FUNCTIONS
// ---------------------------
function playMusic() {
  if (!mainAudio.src && !document.querySelector("#web-player")) return;
  isPlaying = true;
  container.classList.add("playing");
  document.getElementById("play-pause-icon").innerText = "pause";
  if (mainAudio.style.display !== "none") mainAudio.play();
}

function pauseMusic() {
  isPlaying = false;
  container.classList.remove("playing");
  document.getElementById("play-pause-icon").innerText = "play_arrow";
  if (mainAudio.style.display !== "none") mainAudio.pause();
}

playpauseBtn.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// ---------------------------
// NEXT / PREVIOUS SONG
// ---------------------------
nextBtn.addEventListener("click", () => {
  if (!songs.length) return;
  musicIndex = (musicIndex + 1) % songs.length;
  loadMusic(musicIndex);
  playMusic();
  updatePlayingList();
});

prevBtn.addEventListener("click", () => {
  if (!songs.length) return;
  musicIndex = (musicIndex - 1 + songs.length) % songs.length;
  loadMusic(musicIndex);
  playMusic();
  updatePlayingList();
});

// ---------------------------
// TOGGLE LIKE STATUS
// ---------------------------
loveBtn.addEventListener("click", () => {
  if (!songs[musicIndex]) return;
  songs[musicIndex].liked = !songs[musicIndex].liked;
  saveSongs();
  updateLikeIcon(songs[musicIndex].liked);
  buildMusicList();
});

// ---------------------------
// HIDE / SHOW SONG LIST
// ---------------------------
hideBtn.addEventListener("click", () => {
  const list = document.querySelector(".music-list-container");
  list.style.display = list.style.display === "none" ? "block" : "none";
  hideBtn.querySelector("span").innerText =
    list.style.display === "none" ? "visibility" : "visibility_off";
});

// ---------------------------
// VOLUME CONTROLS
// ---------------------------
volumeSlider.addEventListener("input", () => {
  mainAudio.volume = volumeSlider.value;
  if (mainAudio.volume === 0) volumeIcon.innerText = "volume_off";
  else if (mainAudio.volume < 0.5) volumeIcon.innerText = "volume_down";
  else volumeIcon.innerText = "volume_up";
});

volumeIcon.addEventListener("click", () => {
  if (mainAudio.volume > 0) {
    mainAudio.volume = 0;
    volumeSlider.value = 0;
    volumeIcon.innerText = "volume_off";
  } else {
    mainAudio.volume = 0.7;
    volumeSlider.value = 0.7;
    volumeIcon.innerText = "volume_up";
  }
});

// ---------------------------
// PROGRESS BAR SEEK
// ---------------------------
progressArea.addEventListener("click", (e) => {
  if (!mainAudio.src || mainAudio.style.display === "none") return;
  const progressWidth = progressArea.clientWidth;
  const clickedOffsetX = e.offsetX;
  const duration = mainAudio.duration;
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * duration;
});

mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) currentSec = `0${currentSec}`;
  currentTimeEl.innerText = `${currentMin}:${currentSec}`;

  if (duration) {
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if (totalSec < 10) totalSec = `0${totalSec}`;
    durationTimeEl.innerText = `${totalMin}:${totalSec}`;
  }
});

mainAudio.addEventListener("ended", () => {
  nextBtn.click();
});

// ---------------------------
// HIGHLIGHT CURRENTLY PLAYING SONG
// ---------------------------
function updatePlayingList() {
  const allLiTags = musicList.querySelectorAll("li");
  allLiTags.forEach(li => li.classList.remove("playing"));
  if (allLiTags[musicIndex]) allLiTags[musicIndex].classList.add("playing");
}

// ---------------------------
// BUILD SONG LIST UI
// ---------------------------
function buildMusicList() {
  musicList.innerHTML = "";
  const filteredSongs = showLiked ? songs.filter(song => song.liked) : songs;
  const searchTerm = searchInput.value.toLowerCase();
  const visibleSongs = filteredSongs.filter(song =>
    song.name.toLowerCase().includes(searchTerm) ||
    song.singer.toLowerCase().includes(searchTerm)
  );

  if (visibleSongs.length === 0) {
    const noResultItem = document.createElement("li");
    noResultItem.textContent = "No results found";
    noResultItem.style.textAlign = "center";
    noResultItem.style.color = "#999";
    musicList.appendChild(noResultItem);
    return;
  }

  visibleSongs.forEach((song) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${song.name} - ${song.singer}</span>
                    <span class="delete-btn material-symbols-outlined">delete</span>`;

    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) return;
      musicIndex = songs.indexOf(song);
      loadMusic(musicIndex);
      playMusic();
      updatePlayingList();
    });

    li.querySelector(".delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = songs.indexOf(song);
      songs.splice(idx, 1);
      saveSongs();
      buildMusicList();
    });

    musicList.appendChild(li);
  });

  updatePlayingList();
}

// ---------------------------
// TOGGLE SHOW LIKED / ALL SONGS
// ---------------------------
toggleLikedBtn.addEventListener("click", () => {
  showLiked = !showLiked;
  playlistTitle.innerText = showLiked ? "Liked Songs" : "All Songs";
  toggleLikedBtn.innerText = showLiked ? "Show All" : "Show Liked";
  buildMusicList();
});

// ---------------------------
// ADD NEW SONG
// ---------------------------
addSongBtn.addEventListener("click", () => {
  const name = document.getElementById("song-name").value.trim();
  const singer = document.getElementById("song-artist").value.trim();
  const path = document.getElementById("song-path").value.trim();
  const image = document.getElementById("song-image").value.trim() || "default.jpg";

  if (!name || !singer || !path) {
    alert("Please fill in the required fields.");
    return;
  }

  songs.push({ name, singer, path, image, liked: false });
  saveSongs();
  buildMusicList();

  document.getElementById("song-name").value = "";
  document.getElementById("song-artist").value = "";
  document.getElementById("song-path").value = "";
  document.getElementById("song-image").value = "";
});

// ---------------------------
// RESET PLAYLIST
// ---------------------------
resetBtn.addEventListener("click", () => {
  if (confirm("Reset playlist to default?")) {
    localStorage.removeItem("songs");
    songs = [...defaultSongs];
    saveSongs();
    buildMusicList();
  }
});

// ---------------------------
// SEARCH BAR
// ---------------------------
searchInput.addEventListener("input", () => {
  clearSearchBtn.style.display = searchInput.value ? "block" : "none";
  buildMusicList();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  buildMusicList();
});

// ---------------------------
// INITIAL SETUP
// ---------------------------
loadMusic(musicIndex);
buildMusicList();
