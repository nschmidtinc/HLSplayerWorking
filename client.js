// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, addCustomizedVideoPlayer } from 'react-360-web';
import HLSPlayer from './HlsPlayer';
// import DashPlayer from './DashVideoPlayer'


function init(bundle, parent, options = {}) {
addCustomizedVideoPlayer(HLSPlayer);
const r360 = new ReactInstance(bundle, parent, {
// Add custom options here
fullScreen: true,
...options,
});

// Render your app content to the default cylinder surface
r360.renderToSurface(
r360.createRoot('testVideoNow', { /* initial props */ }),
r360.getDefaultSurface()
);

// Load the initial environment
//r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

// Creating a Video Player
const player = r360.compositor.createVideoPlayer('myplayer');
// Set the video to be played, and its format
player.setSource('http://nomadsmediasservices-caea.streaming.media.azure.net/95f81b8b-6131-4df8-aa1f-9233606e6772/3_Corniglia_30Min_v01_low.ism/manifest(format=m3u8-aapl-v3)', '2D');
//player.setSource('https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd','2D');
// To play a video as your background, reference it by its unique id
r360.compositor.setBackgroundVideo('myplayer');
player.play();
}

window.React360 = {init};