import Player from "@vimeo/player";
import _ from "lodash";

const player = new Player("vimeo-player");

player.on('loaded', () => {
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds);
});

let setTime = (time) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
}

player.on('timeupdate', _.throttle(setTime, 1000));