import MobileDetect from 'mobile-detect';
import { addClass, removeClass } from '../lib/dommy';

function isMobile(ua) {
  const md = new MobileDetect(ua);
  const isMobile = md.mobile();
  if (isMobile) {
    return true;
  } else {
    return false;
  }
}

const isMobileBenchmark = document.getElementById('mobile-benchmark');

if(isMobileBenchmark) {
  if (isMobile(window.navigator.userAgent)) {
    // show benchmark stuff
    const leggo = document.getElementById('benchmark-intro');
    removeClass(leggo, 'modal--out');
  } else {
    // show warning
    const warn = document.getElementById('mobile-only-warning');
    warn.style.display = 'block';
  }
}
