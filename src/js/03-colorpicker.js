import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('volumechange', props => {
  console.log(props);
});

player.on('pause', props => {
  console.log(props.duration);
  console.log(props.percent);
  console.log(props.seconds);
  localStorage.setItem('time', props.seconds);
});

player.setVolume(0);
player.setColor('#ff0000');
