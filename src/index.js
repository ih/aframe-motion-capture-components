if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}
console.log('HIII FROM HERE!');

// Components.
require('./components/motion-capture-recorder.js');
require('./components/motion-capture-replayer.js');
require('./components/avatar-recorder.js');
require('./components/avatar-replayer.js');
require('./components/stroke.js');

// Systems.
require('./systems/motion-capture-replayer.js');
require('./systems/recordingdb.js');
