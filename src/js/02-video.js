import throttle from 'lodash.throttle';
import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
  localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds))   
};

const stopTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle (onPlay ,1000 ));

player.setCurrentTime(stopTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
