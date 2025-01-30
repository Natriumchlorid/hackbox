import cover from './assets/cover.png';

let loadingTip = document.getElementsByClassName('play-loading_tipsCont__3jxpI')[0];
let loadingCover = document.getElementsByClassName('play-loading_wrapper__oOhxH')[0];
loadingTip.textContent = 'HackBox正在注入……';
loadingCover.style.backgroundImage = `url("${cover}")`;