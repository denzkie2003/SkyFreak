function showList() {
  let player = document.querySelector('.player');
  let listMusic = document.querySelector('.list-music');
  $('.player').fadeOut(1000);
  $('.list-music').fadeIn(1000);
  player.style.display = "none";
  listMusic.style.display = "block";
}

function hideList(){
  let player = document.querySelector('.player');
  let listMusic = document.querySelector('.list-music');
  $('.player').fadeIn(1000);
  $('.list-music').fadeOut(1000);
  player.style.display = "block";
  listMusic.style.display = "none";
}