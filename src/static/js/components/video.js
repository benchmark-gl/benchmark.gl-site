const dommy = require('../lib/dommy');
const addClass = dommy.addClass;
const removeClass = dommy.removeClass;

function getVideoEl() {
  const video = document.getElementById('logo-vid');
  if (video === null) {
    getVideoEl();
  } else {
    return video;
  }
}

function loadVideo() {
  return new Promise((resolve, reject) => {
    const video = document.getElementById('logo-vid');
    if (video) {
      video.src = '/static/img/explosion.mp4';
      video.load();
      resolve(video);
    } else {
      reject('no video element');
    }
  })
}

function playVideo(video) {
    const starttime = 0;
    const endtime = 0.7;

    video.addEventListener('timeupdate', function() {
       if (this.currentTime >= endtime) {
          this.pause();
        }
    }, false);

    video.addEventListener('canplaythrough', function() {
      const self = this;
      addClass(self, 'logo-vid--rumble');

      setTimeout(function() {
        removeClass(self, 'logo-vid--rumble');
        video.play();
      },1000);

    }, false);
}

loadVideo().then(vid => {
  playVideo(vid);
}).catch(err => {
  // console.warn(err);
});
