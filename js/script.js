document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('bigImage');
  if (!container.contains(e.target)) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("bigImage").style.display = "none";
  }
});

var mq = window.matchMedia("(max-width: 800px)");

async function showThumbnail(clicked_id) {
  if (mq.matches) {
    console.log('error')
  } else {
    document.getElementById("overlay").style.display = "inherit";
    document.getElementById("bigImage").style.display = "inherit";
    document.getElementById("bigImage").src = document.getElementById(clicked_id).src;
  }
}

var search = document.getElementById('search')

async function price() {
  document.getElementById('bodypage').style.display = 'none';
  document.getElementById('search').style.display = 'none';
  document.getElementById('prizelist').style.display = 'inherit';
}

async function home() {
  document.getElementById('bodypage').style.display = 'inherit';
  document.getElementById('search').style.display = 'initial';
  document.getElementById('prizelist').style.display = 'none';
}

function darkmode() {
  document.body.classList.toggle("darkmode");
  document.getElementById('header', 'search-wrapper').classList.toggle("darkmode");
  document.getElementById('search').classList.toggle('darkmode2');
  document.getElementById('body').classList.toggle("darkmode3");
  /* document.getElementById('search-wrapper').classList.toggle("darkmode");
  document.getElementById('search').classList.toggle("darkmode2");
  document.getElementById('body').classList.toggle("darkmode"); */
}

function darkmode2() {
  document.body.classList.toggle("darkmode");
  document.getElementById('header').classList.toggle("darkmode");
  document.getElementById('body1').classList.toggle("darkmode3");
  document.getElementById('twitter').classList.toggle("darkmode4");
  document.getElementById('discord').classList.toggle("darkmode4");
  document.getElementById('instagram').classList.toggle("darkmode4");
}

function redirectInstagram() {
  window.open('https://www.instagram.com/a._l_.f/')
}

function redirectDiscord() {
  window.open('https://discordapp.com/users/363668948215922688')
}

function redirectTwitter() {
  window.open('https://www.twitter.com/jvstalf')
}