
import { BasicVideoPlayer, addCustomizedVideoPlayer, getSupportedFormats } from 'react-360-web';
import dashjs from 'dashjs'


export default class DashVideoPlayer extends addCustomizedVideoPlayer {
//static supportedFormats = hlsSupportedFormats;
constructor() {
super();
this.player = dashjs.MediaPlayer().create();
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