/*! p5.sound.js v0.3.7 2018-01-19 */
/**
 *  p5.sound extends p5 with <a href="http://caniuse.com/audio-api"
 *  target="_blank">Web Audio</a> functionality including audio input,
 *  playback, analysis and synthesis.
 *  <br/><br/>
 *  <a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>
 *  <a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>
 *  <a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically
 *    a computer microphone.<br/>
 *  <a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns
 *    results from the frequency spectrum or time domain (waveform).<br/>
 *  <a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,
 *    Triangle, Square and Sawtooth waveforms. Base class of
 *    <a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.
 *    <br/>
 *  <a href="#/p5.Env"><b>p5.Env</b></a>: An Envelope is a series
 *    of fades over time. Often used to control an object's
 *    output gain level as an "ADSR Envelope" (Attack, Decay,
 *    Sustain, Release). Can also modulate other parameters.<br/>
 *  <a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with
 *    parameters for feedback, delayTime, and lowpass filter.<br/>
 *  <a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a
 *    sound.
 *  <br/>
 *  <a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying
 *    duration and decay. <br/>
 *  <b><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends
 *  <a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real
 *    physical spaces through convolution.<br/>
 *  <b><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback
 *    / save the .wav file.
 *  <b><a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and
 *  <b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.
 *  <br/><br/>
 *  p5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.
 *  Download the latest version
 *  <a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.
 *
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 *  @main
 */

/**
 *  p5.sound
 *  https://p5js.org/reference/#/libraries/p5.sound
 *
 *  From the Processing Foundation and contributors
 *  https://github.com/processing/p5.js-sound/graphs/contributors
 *
 *  MIT License (MIT)
 *  https://github.com/processing/p5.js-sound/blob/master/LICENSE
 *
 *  Some of the many audio libraries & resources that inspire p5.sound:
 *   - TONE.js (c) Yotam Mann. Licensed under The MIT License (MIT). https://github.com/TONEnoTONE/Tone.js
 *   - buzz.js (c) Jay Salvat. Licensed under The MIT License (MIT). http://buzz.jaysalvat.com/
 *   - Boris Smus Web Audio API book, 2013. Licensed under the Apache License http://www.apache.org/licenses/LICENSE-2.0
 *   - wavesurfer.js https://github.com/katspaugh/wavesurfer.js
 *   - Web Audio Components by Jordan Santell https://github.com/web-audio-components
 *   - Wilm Thoben's Sound library for Processing https://github.com/processing/processing/tree/master/java/libraries/sound
 *
 *   Web Audio API: http://w3.org/TR/webaudio/
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('p5.sound', ['p5'], function (p5) { (factory(p5));});
  else if (typeof exports === 'object')
    factory(require('../p5'));
  else
    factory(root['p5']);
}(this, function (p5) {

var sndcore;
'use strict';
sndcore = function () {
  /* AudioContext Monkeypatch
     Copyright 2013 Chris Wilson
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
  (function () {
    function fixSetTarget(param) {
      if (!param)
        // if NYI, just return
        return;
      if (!param.setTargetAtTime)
        param.setTargetAtTime = param.setTargetValueAtTime;
    }
    if (window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) {
      window.AudioContext = window.webkitAudioContext;
      if (typeof AudioContext.prototype.createGain !== 'function')
        AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
      if (typeof AudioContext.prototype.createDelay !== 'function')
        AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
      if (typeof AudioContext.prototype.createScriptProcessor !== 'function')
        AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
      if (typeof AudioContext.prototype.createPeriodicWave !== 'function')
        AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
      AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
      AudioContext.prototype.createGain = function () {
        var node = this.internal_createGain();
        fixSetTarget(node.gain);
        return node;
      };
      AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
      AudioContext.prototype.createDelay = function (maxDelayTime) {
        var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
        fixSetTarget(node.delayTime);
        return node;
      };
      AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
      AudioContext.prototype.createBufferSource = function () {
        var node = this.internal_createBufferSource();
        if (!node.start) {
          node.start = function (when, offset, duration) {
            if (offset || duration)
              this.noteGrainOn(when || 0, offset, duration);
            else
              this.noteOn(when || 0);
          };
        } else {
          node.internal_start = node.start;
          node.start = function (when, offset, duration) {
            if (typeof duration !== 'undefined')
              node.internal_start(when || 0, offset, duration);
            else
              node.internal_start(when || 0, offset || 0);
          };
        }
        if (!node.stop) {
          node.stop = function (when) {
            this.noteOff(when || 0);
          };
        } else {
          node.internal_stop = node.stop;
          node.stop = function (when) {
            node.internal_stop(when || 0);
          };
        }
        fixSetTarget(node.playbackRate);
        return node;
      };
      AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
      AudioContext.prototype.createDynamicsCompressor = function () {
        var node = this.internal_createDynamicsCompressor();
        fixSetTarget(node.threshold);
        fixSetTarget(node.knee);
        fixSetTarget(node.ratio);
        fixSetTarget(node.reduction);
        fixSetTarget(node.attack);
        fixSetTarget(node.release);
        return node;
      };
      AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
      AudioContext.prototype.createBiquadFilter = function () {
        var node = this.internal_createBiquadFilter();
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        fixSetTarget(node.Q);
        fixSetTarget(node.gain);
        return node;
      };
      if (typeof AudioContext.prototype.createOscillator !== 'function') {
        AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
        AudioContext.prototype.createOscillator = function () {
          var node = this.internal_createOscillator();
          if (!node.start) {
            node.start = function (when) {
              this.noteOn(when || 0);
            };
          } else {
            node.internal_start = node.start;
            node.start = function (when) {
              node.internal_start(when || 0);
            };
          }
          if (!node.stop) {
            node.stop = function (when) {
              this.noteOff(when || 0);
            };
          } else {
            node.internal_stop = node.stop;
            node.stop = function (when) {
              node.internal_stop(when || 0);
            };
          }
          if (!node.setPeriodicWave)
            node.setPeriodicWave = node.setWaveTable;
          fixSetTarget(node.frequency);
          fixSetTarget(node.detune);
          return node;
        };
      }
    }
    if (window.hasOwnProperty('webkitOfflineAudioContext') && !window.hasOwnProperty('OfflineAudioContext')) {
      window.OfflineAudioContext = window.webkitOfflineAudioContext;
    }
  }(window));
  // <-- end MonkeyPatch.
  // Create the Audio Context
  var audiocontext = new window.AudioContext();
  /**
   * <p>Returns the Audio Context for this sketch. Useful for users
   * who would like to dig deeper into the <a target='_blank' href=
   * 'http://webaudio.github.io/web-audio-api/'>Web Audio API
   * </a>.</p>
   *
   * @method getAudioContext
   * @return {Object}    AudioContext for this sketch
   */
  p5.prototype.getAudioContext = function () {
    return audiocontext;
  };
  // Polyfill for AudioIn, also handled by p5.dom createCapture
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  /**
   * Determine which filetypes are supported (inspired by buzz.js)
   * The audio element (el) will only be used to test browser support for various audio formats
   */
  var el = document.createElement('audio');
  p5.prototype.isSupported = function () {
    return !!el.canPlayType;
  };
  var isOGGSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/ogg; codecs="vorbis"');
  };
  var isMP3Supported = function () {
    return !!el.canPlayType && el.canPlayType('audio/mpeg;');
  };
  var isWAVSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/wav; codecs="1"');
  };
  var isAACSupported = function () {
    return !!el.canPlayType && (el.canPlayType('audio/x-m4a;') || el.canPlayType('audio/aac;'));
  };
  var isAIFSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/x-aiff;');
  };
  p5.prototype.isFileSupported = function (extension) {
    switch (extension.toLowerCase()) {
    case 'mp3':
      return isMP3Supported();
    case 'wav':
      return isWAVSupported();
    case 'ogg':
      return isOGGSupported();
    case 'aac':
    case 'm4a':
    case 'mp4':
      return isAACSupported();
    case 'aif':
    case 'aiff':
      return isAIFSupported();
    default:
      return false;
    }
  };
  // if it is iOS, we have to have a user interaction to start Web Audio
  // http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  if (iOS) {
    var iosStarted = false;
    var startIOS = function () {
      if (iosStarted)
        return;
      // create empty buffer
      var buffer = audiocontext.createBuffer(1, 1, 22050);
      var source = audiocontext.createBufferSource();
      source.buffer = buffer;
      // connect to output (your speakers)
      source.connect(audiocontext.destination);
      // play the file
      source.start(0);
      console.log('start ios!');
      if (audiocontext.state === 'running') {
        iosStarted = true;
      }
    };
    document.addEventListener('touchend', startIOS, false);
    document.addEventListener('touchstart', startIOS, false);
  }
}();
var master;
'use strict';
master = function () {
  /**
   * Master contains AudioContext and the master sound output.
   */
  var Master = function () {
    var audiocontext = p5.prototype.getAudioContext();
    this.input = audiocontext.createGain();
    this.output = audiocontext.createGain();
    //put a hard limiter on the output
    this.limiter = audiocontext.createDynamicsCompressor();
    this.limiter.threshold.value = 0;
    this.limiter.ratio.value = 20;
    this.audiocontext = audiocontext;
    this.output.disconnect();
    // connect input to limiter
    this.input.connect(this.limiter);
    // connect limiter to output
    this.limiter.connect(this.output);
    // meter is just for global Amplitude / FFT analysis
    this.meter = audiocontext.createGain();
    this.fftMeter = audiocontext.createGain();
    this.output.connect(this.meter);
    this.output.connect(this.fftMeter);
    // connect output to destination
    this.output.connect(this.audiocontext.destination);
    // an array of all sounds in the sketch
    this.soundArray = [];
    // an array of all musical parts in the sketch
    this.parts = [];
    // file extensions to search for
    this.extensions = [];
  };
  // create a single instance of the p5Sound / master output for use within this sketch
  var p5sound = new Master();
  /**
   * Returns a number representing the master amplitude (volume) for sound
   * in this sketch.
   *
   * @method getMasterVolume
   * @return {Number} Master amplitude (volume) for sound in this sketch.
   *                  Should be between 0.0 (silence) and 1.0.
   */
  p5.prototype.getMasterVolume = function () {
    return p5sound.output.gain.value;
  };
  /**
   *  <p>Scale the output of all sound in this sketch</p>
   *  Scaled between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Env class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  <p><b>How This Works</b>: When you load the p5.sound module, it
   *  creates a single instance of p5sound. All sound objects in this
   *  module output to p5sound before reaching your computer's output.
   *  So if you change the amplitude of p5sound, it impacts all of the
   *  sound in this module.</p>
   *
   *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
   *
   *  @method  masterVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */
  p5.prototype.masterVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = p5sound.output.gain.value;
      p5sound.output.gain.cancelScheduledValues(now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(p5sound.output.gain);
    } else {
      // return the Gain Node
      return p5sound.output.gain;
    }
  };
  /**
   *  `p5.soundOut` is the p5.sound master output. It sends output to
   *  the destination of this window's web audio context. It contains
   *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
   *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
   *
   *  @property {Object} soundOut
   */
  p5.prototype.soundOut = p5.soundOut = p5sound;
  /**
   *  a silent connection to the DesinationNode
   *  which will ensure that anything connected to it
   *  will not be garbage collected
   *
   *  @private
   */
  p5.soundOut._silentNode = p5sound.audiocontext.createGain();
  p5.soundOut._silentNode.gain.value = 0;
  p5.soundOut._silentNode.connect(p5sound.audiocontext.destination);
  return p5sound;
}();
var helpers;
'use strict';
helpers = function () {
  var p5sound = master;
  /**
   * @for p5
   */
  /**
   * Returns a number representing the sample rate, in samples per second,
   * of all sound obj