
import { BasicVideoPlayer, getSupportedFormats } from 'react-360-web';
import Hls from './hls';

export default class HLSPlayer extends BasicVideoPlayer {
//static supportedFormats = hlsSupportedFormats;
constructor() {
super();
this.player = new Hls();
}

  initializeVideo(url, metaData) {
    this.videoElement.crossOrigin = 'anonymous';
    this._bindMediaEvents();

    this.player.loadSource(url);
    this.player.attachMedia(this.videoElement);
  }

  dispose() {
    //this.player.reset();
    super.dispose();
  }
}