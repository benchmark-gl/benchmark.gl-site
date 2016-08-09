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
    const video = getVideoEl();
    video.src = '/static/img/explosion.mp4';
    video.load();
    resolve(video);
  })
}

function playVideo(video) {
    const starttime = 0;
    const endtime = 0.7;

    video.addEventListener('timeupdate', function() {
      console.log(this.currentTime);
       if (this.currentTime >= endtime) {
          console.log('stop');
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
});
