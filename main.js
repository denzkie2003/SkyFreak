
let currentNum = document.querySelector('#current-num');
let listNum = document.querySelector('#list-num');
let songTitle = document.querySelector('#song-title');
let imageIcon = document.querySelector('#imageIcon');
let timerCount = document.querySelector('#current-time');
let durationTrack = document.querySelector('#duration');
let btnPrev = document.querySelector('#prev');
let btnPlay = document.querySelector('#play');
let btnNext = document.querySelector('#next');

let timer, indexSong = 0;
let play_song = false;

let audioTrack = document.createElement('audio');

let audioArray = [
  {
    title: "Hiroko  →「 Promise You  」",
    song: "music/Hiroko  →「 Promise You  」",
    image_source: "image/image1.jpg",
    number: "1",
    id: "id0"
  },
  {
    title: "Hiroko →「 Baby 」",
    song: "music/Hiroko →「 Baby 」",
    image_source: "image/image5.jpg",
    number: "2",
    id: "id1"
  },
  {
    title: "Wotamin →「 Mata Futari Koi wo Suru 」",
    song: "music/Wotamin →「 Mata Futari Koi wo Suru 」",
    image_source: "image/image7.jpg",
    number: "3",
    id: "id2"
  },
  {
    title: "A Super Nice Japanese Song  - Hated by Life Itself 【命に嫌われている】_ Lyrics(MP3_160K)",
    song: "https://www.dropboxusercontent.com/s/rqescl21pezcbnd/a%20super%20nice%20japanese%20song%20%20-%20hated%20by%20life%20itself%20%E3%80%90%E5%91%BD%E3%81%AB%E5%AB%8C%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%80%91_%20lyrics%28mp3_160k%29.mp3?dl=0",
    image_source: "image/image8.jpg",
    number: "4",
    id: "id3"
  },
  {
    title: "A Super Nice Japanese Song - The Garden of Love (Ai no Niwa) _ Lyrics(MP3_160K)",
    song: "music/A Super Nice Japanese Song - The Garden of Love (Ai no Niwa) _ Lyrics(MP3_160K).mp3",
    image_source: "image/image4.jpg",
    number: "5",
    id: "id4"
  },
  {
    title: "A Super Nice Japanese Song _ A Song i Sent For You [君へ送る唄]  Lyrics English(MP3_160K)",
    song: "music/A Super Nice Japanese Song _ A Song i Sent For You [君へ送る唄]  Lyrics English(MP3_160K).mp3",
    image_source: "image/image10.jpg",
    number: "6",
    id: "id5"
  },
  {
    title: "A Super Nice Japanese Song _ 夏が零れてゆく Natsuga Kuborete Yuko 《Shuvi》(MP3_160K)",
    song: "music/A Super Nice Japanese Song _ 夏が零れてゆく Summer is falling 《Shuvi》(MP3_160K).mp3",
    image_source: "image/image3.jpg",
    number: "7",
    id: "id6"
  },
  {
    title: "Yanagi Nagi →「 ONE's Hope 」",
    song: "music/Yanagi Nagi →「 ONE's Hope 」",
    image_source: "image/image6.jpg",
    number: "8",
    id: "id7"
  },
  {
    title: "A Super Nice Japanese Song _ Ichiban no Takaramono 【一番の宝物 】_ Lyrics(MP3_160K)",
    song: "music/A Super Nice Japanese Song _ Ichiban no Takaramono 【一番の宝物 】_ Lyrics(MP3_160K).mp3",
    image_source: "image/image2.jpg",
    number: "9",
    id: "id8"
  },
  {
    title: "Yuka Masaki feat. KG →「 Last Kiss 」",
    song: "music/Yuka Masaki feat. KG →「 Last Kiss 」",
    image_source: "image/image9.jpg",
    number: "10",
    id: "id9"
  }
];

window.onload = function(){
  listNum.innerHTML = audioArray.length;
}

let ul = document.querySelector('ul');
let li, a, img, div;

function listMusic(){
  for (let i = 0; i < audioArray.length; i++) {
    li = document.createElement('li');
    img = document.createElement('img');
    div = document.createElement('div');
  
    img.setAttribute('id', 'imageList');
    img.setAttribute('src', '');
    div.setAttribute('id', 'titleList');
    li.setAttribute('id','');
    
    img.src = audioArray[i].image_source;
    div.innerHTML = audioArray[i].title;
    li.id = audioArray[i].id;
    
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
    
  }
}
listMusic();

function playSong(indexSong) {
  audioTrack.src = audioArray[indexSong].song;
  songTitle.innerHTML = audioArray[indexSong].title;
  imageIcon.src = audioArray[indexSong].image_source;
  currentNum.innerHTML = audioArray[indexSong].number;
  audioTrack.load();

  timer = setInterval(rangeChange, 1000);
}
playSong(indexSong);

function justPlay(){
  if(play_song == false){
    playsong();
  }else{
    pauseSong();
  }
}

function playsong(){
  audioTrack.play();
  play_song = true;
  btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
  imageIcon.style.animationName = "shadowPlay";
  imageIcon.style.animationDuration = "1s";
  imageIcon.style.animationDelay = "2s";
  imageIcon.style.animationIterationCount = "infinite";
}

function pauseSong(){
  audioTrack.pause();
  play_song = false;
  btnPlay.innerHTML = '<i class="fas fa-play"></i>';
  imageIcon.style.animation = "none";
}

//Next Song
function nextSong(){
  if(indexSong < audioArray.length - 1){
    indexSong += 1;
    playSong(indexSong);
    playsong();
  }else{
    indexSong = 0;
    playSong(indexSong);
    playsong();
  }
}
//Prev Song
function prevSong(){
  if(indexSong > 0){
    indexSong -= 1;
    playSong(indexSong);
    playsong();
  }else{
    indexSong = audioArray.length;
    playSong(indexSong);
    playsong();
  }
}

//Duration
function changeDur(){
  current_duration = audioTrack.duration * (durationTrack.value / 100);
  
  audioTrack.currentTime = current_duration;
}

function rangeChange(){
  let position = 0;
  
  if(!isNaN(audioTrack.duration)){
    position = audioTrack.currentTime * (100/ audioTrack.duration);
    durationTrack.value = position;
    timerCount.innerHTML = durationTrack.value;
    if(durationTrack.value == 100){
      indexSong += 1;
      playSong(indexSong);
      playsong();
    }
  }
}

//Playlist PlaySong
$(document).ready(function() {
  $('#id0').click(function() {
    indexSong = 0;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id1').click(function() {
    indexSong = 1;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id2').click(function() {
    indexSong = 2;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id3').click(function() {
    indexSong = 3;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id4').click(function() {
    indexSong = 4;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id5').click(function() {
    indexSong = 5;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id6').click(function() {
    indexSong = 6;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id7').click(function() {
    indexSong = 7;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id8').click(function() {
    indexSong = 8;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
  $('#id9').click(function() {
    indexSong = 9;
    playSong(indexSong);
    playsong();
    let player = document.querySelector('.player');
    let listMusic = document.querySelector('.list-music');
    $('.player').fadeIn(1000);
    $('.list-music').fadeOut(1000);
    player.style.display = "block";
    listMusic.style.display = "none";
  });
});