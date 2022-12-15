
/*! p5.js v0.6.0 January 19, 2018 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.p5 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
    "project": {
        "name": "p5",
        "description": "[![Build Status](https://travis-ci.org/processing/p5.js.svg?branch=master)](https://travis-ci.org/processing/p5.js) [![npm version](https://badge.fury.io/js/p5.svg)](https://www.npmjs.com/package/p5)",
        "version": "0.6.0",
        "url": "https://github.com/processing/p5.js#readme"
    },
    "files": {
        "src/color/color_conversion.js": {
            "name": "src/color/color_conversion.js",
            "modules": {
                "Color Conversion": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/color/creating_reading.js": {
            "name": "src/color/creating_reading.js",
            "modules": {
                "Creating & Reading": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/color/p5.Color.js": {
            "name": "src/color/p5.Color.js",
            "modules": {},
            "classes": {
                "p5.Color": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/color/setting.js": {
            "name": "src/color/setting.js",
            "modules": {
                "Setting": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/2d_primitives.js": {
            "name": "src/core/2d_primitives.js",
            "modules": {
                "2D Primitives": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/attributes.js": {
            "name": "src/core/attributes.js",
            "modules": {
                "Attributes": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/canvas.js": {
            "name": "src/core/canvas.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/core/constants.js": {
            "name": "src/core/constants.js",
            "modules": {
                "Constants": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/core.js": {
            "name": "src/core/core.js",
            "modules": {
                "Structure": 1
            },
            "classes": {
                "p5": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/curves.js": {
            "name": "src/core/curves.js",
            "modules": {
                "Curves": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/environment.js": {
            "name": "src/core/environment.js",
            "modules": {
                "Environment": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/error_helpers.js": {
            "name": "src/core/error_helpers.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/init.js": {
            "name": "src/core/init.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/core/p5.Element.js": {
            "name": "src/core/p5.Element.js",
            "modules": {
                "DOM": 1
            },
            "classes": {
                "p5.Element": 1
            },
            "fors": {
                "p5.Element": 1
            },
            "namespaces": {}
        },
        "src/core/p5.Graphics.js": {
            "name": "src/core/p5.Graphics.js",
            "modules": {
                "Rendering": 1
            },
            "classes": {
                "p5.Graphics": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/p5.Renderer.js": {
            "name": "src/core/p5.Renderer.js",
            "modules": {},
            "classes": {
                "p5.Renderer": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/p5.Renderer2D.js": {
            "name": "src/core/p5.Renderer2D.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/core/rendering.js": {
            "name": "src/core/rendering.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/shim.js": {
            "name": "src/core/shim.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/core/structure.js": {
            "name": "src/core/structure.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/transform.js": {
            "name": "src/core/transform.js",
            "modules": {
                "Transform": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/core/vertex.js": {
            "name": "src/core/vertex.js",
            "modules": {
                "Vertex": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/data/p5.TypedDict.js": {
            "name": "src/data/p5.TypedDict.js",
            "modules": {
                "Dictionary": 1
            },
            "classes": {
                "p5.TypedDict": 1,
                "p5.StringDict": 1,
                "p5.NumberDict": 1
            },
            "fors": {
                "p5.TypedDict": 1,
                "p5": 1
            },
            "namespaces": {}
        },
        "src/events/acceleration.js": {
            "name": "src/events/acceleration.js",
            "modules": {
                "Acceleration": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/events/keyboard.js": {
            "name": "src/events/keyboard.js",
            "modules": {
                "Keyboard": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/events/mouse.js": {
            "name": "src/events/mouse.js",
            "modules": {
                "Mouse": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/events/touch.js": {
            "name": "src/events/touch.js",
            "modules": {
                "Touch": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/image/filters.js": {
            "name": "src/image/filters.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/image/image.js": {
            "name": "src/image/image.js",
            "modules": {
                "Image": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/image/loading_displaying.js": {
            "name": "src/image/loading_displaying.js",
            "modules": {
                "Loading & Displaying": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/image/p5.Image.js": {
            "name": "src/image/p5.Image.js",
            "modules": {},
            "classes": {
                "p5.Image": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/image/pixels.js": {
            "name": "src/image/pixels.js",
            "modules": {
                "Pixels": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/io/files.js": {
            "name": "src/io/files.js",
            "modules": {
                "Input": 1,
                "Output": 1
            },
            "classes": {
                "p5.PrintWriter": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/io/p5.Table.js": {
            "name": "src/io/p5.Table.js",
            "modules": {
                "Table": 1
            },
            "classes": {
                "p5.Table": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/io/p5.TableRow.js": {
            "name": "src/io/p5.TableRow.js",
            "modules": {},
            "classes": {
                "p5.TableRow": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/io/p5.XML.js": {
            "name": "src/io/p5.XML.js",
            "modules": {
                "XML": 1
            },
            "classes": {
                "p5.XML": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/math/calculation.js": {
            "name": "src/math/calculation.js",
            "modules": {
                "Calculation": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/math/math.js": {
            "name": "src/math/math.js",
            "modules": {
                "Math": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/math/noise.js": {
            "name": "src/math/noise.js",
            "modules": {
                "Noise": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/math/p5.Vector.js": {
            "name": "src/math/p5.Vector.js",
            "modules": {},
            "classes": {
                "p5.Vector": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/math/random.js": {
            "name": "src/math/random.js",
            "modules": {
                "Random": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/math/trigonometry.js": {
            "name": "src/math/trigonometry.js",
            "modules": {
                "Trigonometry": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/typography/attributes.js": {
            "name": "src/typography/attributes.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/typography/loading_displaying.js": {
            "name": "src/typography/loading_displaying.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/typography/p5.Font.js": {
            "name": "src/typography/p5.Font.js",
            "modules": {
                "Font": 1
            },
            "classes": {
                "p5.Font": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/utilities/array_functions.js": {
            "name": "src/utilities/array_functions.js",
            "modules": {
                "Array Functions": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/utilities/conversion.js": {
            "name": "src/utilities/conversion.js",
            "modules": {
                "Conversion": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/utilities/string_functions.js": {
            "name": "src/utilities/string_functions.js",
            "modules": {
                "String Functions": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/utilities/time_date.js": {
            "name": "src/utilities/time_date.js",
            "modules": {
                "Time & Date": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/camera.js": {
            "name": "src/webgl/camera.js",
            "modules": {
                "Camera": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/interaction.js": {
            "name": "src/webgl/interaction.js",
            "modules": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/light.js": {
            "name": "src/webgl/light.js",
            "modules": {
                "Lights": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/loading.js": {
            "name": "src/webgl/loading.js",
            "modules": {
                "3D Models": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/material.js": {
            "name": "src/webgl/material.js",
            "modules": {
                "Material": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/p5.Geometry.js": {
            "name": "src/webgl/p5.Geometry.js",
            "modules": {},
            "classes": {
                "p5.Geometry": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/webgl/p5.Matrix.js": {
            "name": "src/webgl/p5.Matrix.js",
            "modules": {},
            "classes": {
                "p5.Matrix": 1
            },
            "fors": {},
            "namespaces": {}
        },
        "src/webgl/p5.RendererGL.Immediate.js": {
            "name": "src/webgl/p5.RendererGL.Immediate.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/webgl/p5.RendererGL.Retained.js": {
            "name": "src/webgl/p5.RendererGL.Retained.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        },
        "src/webgl/p5.RendererGL.js": {
            "name": "src/webgl/p5.RendererGL.js",
            "modules": {},
            "classes": {
                "p5.RendererGL": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/p5.Shader.js": {
            "name": "src/webgl/p5.Shader.js",
            "modules": {
                "Shaders": 1
            },
            "classes": {
                "p5.Shader": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/p5.Texture.js": {
            "name": "src/webgl/p5.Texture.js",
            "modules": {},
            "classes": {
                "p5.Texture": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "src/webgl/primitives.js": {
            "name": "src/webgl/primitives.js",
            "modules": {
                "3D Primitives": 1
            },
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "lib/addons/p5.dom.js": {
            "name": "lib/addons/p5.dom.js",
            "modules": {
                "p5.dom": 1
            },
            "classes": {
                "p5.MediaElement": 1,
                "p5.File": 1
            },
            "fors": {
                "p5.dom": 1,
                "p5.Element": 1
            },
            "namespaces": {}
        },
        "lib/addons/p5.sound.js": {
            "name": "lib/addons/p5.sound.js",
            "modules": {
                "p5.sound": 1
            },
            "classes": {
                "p5.SoundFile": 1,
                "p5.Amplitude": 1,
                "p5.FFT": 1,
                "p5.Signal": 1,
                "p5.Oscillator": 1,
                "p5.SinOsc": 1,
                "p5.TriOsc": 1,
                "p5.SawOsc": 1,
                "p5.SqrOsc": 1,
                "p5.Env": 1,
                "p5.Pulse": 1,
                "p5.Noise": 1,
                "p5.AudioIn": 1,
                "p5.Effect": 1,
                "p5.Filter": 1,
                "p5.LowPass": 1,
                "p5.HighPass": 1,
                "p5.BandPass": 1,
                "p5.EQ": 1,
                "p5.Panner3D": 1,
                "p5.Delay": 1,
                "p5.Reverb": 1,
                "p5.Convolver": 1,
                "p5.Phrase": 1,
                "p5.Part": 1,
                "p5.Score": 1,
                "p5.SoundLoop": 1,
                "p5.Compressor": 1,
                "p5.SoundRecorder": 1,
                "p5.PeakDetect": 1,
                "p5.Gain": 1,
                "p5.AudioVoice": 1,
                "p5.MonoSynth": 1,
                "p5.PolySynth": 1,
                "p5.Distortion": 1
            },
            "fors": {
                "p5.sound": 1,
                "p5": 1
            },
            "namespaces": {}
        },
        "lib/addons/p5.sound.min.js": {
            "name": "lib/addons/p5.sound.min.js",
            "modules": {},
            "classes": {},
            "fors": {},
            "namespaces": {}
        }
    },
    "modules": {
        "Conversion": {
            "name": "Conversion",
            "submodules": {
                "Color Conversion": 1
            },
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Data",
            "file": "src/utilities/conversion.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Color Conversion": {
            "name": "Color Conversion",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Conversion",
            "namespace": "",
            "file": "src/color/color_conversion.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Color": {
            "name": "Color",
            "submodules": {
                "Creating & Reading": 1,
                "Setting": 1
            },
            "elements": {},
            "classes": {
                "p5.Color": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "file": "src/color/p5.Color.js",
            "line": 16
        },
        "Creating & Reading": {
            "name": "Creating & Reading",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Color": 1
            },
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Color",
            "namespace": "",
            "file": "src/color/p5.Color.js",
            "line": 16,
            "requires": [
                "core",
                "constants"
            ],
            "description": "<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when saturation() is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n"
        },
        "Setting": {
            "name": "Setting",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Color",
            "namespace": "",
            "file": "src/color/setting.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Shape": {
            "name": "Shape",
            "submodules": {
                "2D Primitives": 1,
                "Curves": 1,
                "Vertex": 1,
                "3D Models": 1,
                "3D Primitives": 1
            },
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "2D Primitives": {
            "name": "2D Primitives",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Shape",
            "namespace": "",
            "file": "src/core/2d_primitives.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Attributes": {
            "name": "Attributes",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Typography",
            "namespace": "",
            "file": "src/core/attributes.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Constants": {
            "name": "Constants",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Constants",
            "file": "src/core/constants.js",
            "line": 1
        },
        "Structure": {
            "name": "Structure",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "IO",
            "file": "src/core/core.js",
            "line": 1,
            "requires": [
                "constants"
            ]
        },
        "Curves": {
            "name": "Curves",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Shape",
            "namespace": "",
            "file": "src/core/curves.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Environment": {
            "name": "Environment",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Environment",
            "file": "src/core/environment.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "DOM": {
            "name": "DOM",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Element": 1
            },
            "fors": {
                "p5.Element": 1
            },
            "namespaces": {},
            "module": "DOM",
            "file": "src/core/p5.Element.js",
            "line": 11,
            "description": "<p>Base class for all elements added to a sketch, including canvas,\ngraphics buffers, and other HTML elements. Methods in blue are\nincluded in the core functionality, methods in brown are added\nwith the <a href=\"http://p5js.org/reference/#/libraries/p5.dom\">p5.dom\nlibrary</a>.\nIt is not called directly, but p5.Element\nobjects are created by calling createCanvas, createGraphics,\nor in the p5.dom library, createDiv, createImg, createInput, etc.</p>\n"
        },
        "Rendering": {
            "name": "Rendering",
            "submodules": {
                "undefined": 1
            },
            "elements": {},
            "classes": {
                "p5.RendererGL": 1,
                "p5.Graphics": 1,
                "p5.Renderer": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Rendering",
            "file": "src/webgl/p5.RendererGL.js",
            "line": 438,
            "description": "<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n"
        },
        "Transform": {
            "name": "Transform",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Transform",
            "file": "src/core/transform.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Vertex": {
            "name": "Vertex",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Shape",
            "namespace": "",
            "file": "src/core/vertex.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Data": {
            "name": "Data",
            "submodules": {
                "Dictionary": 1,
                "Array Functions": 1,
                "String Functions": 1
            },
            "elements": {},
            "classes": {
                "p5.TypedDict": 1,
                "p5.StringDict": 1,
                "p5.NumberDict": 1
            },
            "fors": {
                "p5.TypedDict": 1,
                "p5": 1
            },
            "namespaces": {},
            "file": "src/data/p5.TypedDict.js",
            "line": 397
        },
        "Dictionary": {
            "name": "Dictionary",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.TypedDict": 1,
                "p5.StringDict": 1,
                "p5.NumberDict": 1
            },
            "fors": {
                "p5.TypedDict": 1,
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Data",
            "namespace": "",
            "file": "src/data/p5.TypedDict.js",
            "line": 397,
            "requires": [
                "core\n\nThis module defines the p5 methods for the p5 Dictionary classes\nthese classes StringDict and NumberDict are for storing and working\nwith key",
                "value pairs"
            ],
            "description": "<p>Base class for all p5.Dictionary types. More specifically\n typed Dictionary objects inherit from this</p>\n"
        },
        "Events": {
            "name": "Events",
            "submodules": {
                "Acceleration": 1,
                "Keyboard": 1,
                "Mouse": 1,
                "Touch": 1
            },
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "namespaces": {}
        },
        "Acceleration": {
            "name": "Acceleration",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Events",
            "namespace": "",
            "file": "src/events/acceleration.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Keyboard": {
            "name": "Keyboard",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Events",
            "namespace": "",
            "file": "src/events/keyboard.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Mouse": {
            "name": "Mouse",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Events",
            "namespace": "",
            "file": "src/events/mouse.js",
            "line": 1,
            "requires": [
                "core",
                "constants"
            ]
        },
        "Touch": {
            "name": "Touch",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Events",
            "namespace": "",
            "file": "src/events/touch.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Image": {
            "name": "Image",
            "submodules": {
                "Pixels": 1
            },
            "elements": {},
            "classes": {
                "p5.Image": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Image",
            "file": "src/image/p5.Image.js",
            "line": 23,
            "requires": [
                "core"
            ],
            "description": "<p>Creates a new p5.Image. A p5.Image is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\nloadImage() function. The p5.Image class contains fields for the width and\nheight of the image, as well as an array called pixels[] that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the pixels[] array, be sure to use the loadPixels() method on\nthe image to make sure that the pixel data is properly loaded.</p>\n"
        },
        "Loading & Displaying": {
            "name": "Loading & Displaying",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Typography",
            "namespace": "",
            "file": "src/image/loading_displaying.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Pixels": {
            "name": "Pixels",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Image",
            "namespace": "",
            "file": "src/image/pixels.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "IO": {
            "name": "IO",
            "submodules": {
                "Structure": 1,
                "Input": 1,
                "Output": 1,
                "Table": 1,
                "XML": 1,
                "Time & Date": 1
            },
            "elements": {},
            "classes": {
                "p5": 1,
                "p5.PrintWriter": 1,
                "p5.Table": 1,
                "p5.TableRow": 1,
                "p5.XML": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "file": "src/io/p5.XML.js",
            "line": 11
        },
        "Input": {
            "name": "Input",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "IO",
            "namespace": "",
            "file": "src/io/files.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Output": {
            "name": "Output",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5": 1,
                "p5.PrintWriter": 1
            },
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "IO",
            "namespace": "",
            "file": "src/io/files.js",
            "line": 1102,
            "description": "<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set preload(), setup(), and/or\ndraw() properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n"
        },
        "Table": {
            "name": "Table",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Table": 1,
                "p5.TableRow": 1
            },
            "fors": {},
            "is_submodule": 1,
            "namespaces": {},
            "module": "IO",
            "namespace": "",
            "file": "src/io/p5.TableRow.js",
            "line": 11,
            "requires": [
                "core"
            ],
            "description": "<p>Table objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n"
        },
        "XML": {
            "name": "XML",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.XML": 1
            },
            "fors": {},
            "is_submodule": 1,
            "namespaces": {},
            "module": "IO",
            "namespace": "",
            "file": "src/io/p5.XML.js",
            "line": 11,
            "requires": [
                "core"
            ],
            "description": "<p>XML is a representation of an XML object, able to parse XML code. Use\nloadXML() to load external XML files and create XML objects.</p>\n"
        },
        "Math": {
            "name": "Math",
            "submodules": {
                "Calculation": 1,
                "Noise": 1,
                "Random": 1,
                "Trigonometry": 1
            },
            "elements": {},
            "classes": {
                "p5.Vector": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "module": "Math",
            "file": "src/math/p5.Vector.js",
            "line": 13,
            "requires": [
                "core"
            ],
            "description": "<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods mag() and heading().\n<br><br>\nIn many of the p5.js examples, you will see p5.Vector used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the p5.Vector class.</p>\n"
        },
        "Calculation": {
            "name": "Calculation",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Math",
            "namespace": "",
            "file": "src/math/calculation.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Noise": {
            "name": "Noise",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Math",
            "namespace": "",
            "file": "src/math/noise.js",
            "line": 14,
            "requires": [
                "core"
            ]
        },
        "Random": {
            "name": "Random",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Math",
            "namespace": "",
            "file": "src/math/random.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Trigonometry": {
            "name": "Trigonometry",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Math",
            "namespace": "",
            "file": "src/math/trigonometry.js",
            "line": 1,
            "requires": [
                "core",
                "polargeometry",
                "constants"
            ]
        },
        "Typography": {
            "name": "Typography",
            "submodules": {
                "Attributes": 1,
                "Loading & Displaying": 1,
                "Font": 1
            },
            "elements": {},
            "classes": {
                "p5.Font": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "file": "src/typography/p5.Font.js",
            "line": 21
        },
        "Font": {
            "name": "Font",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Font": 1
            },
            "fors": {},
            "is_submodule": 1,
            "namespaces": {},
            "module": "Typography",
            "namespace": "",
            "file": "src/typography/p5.Font.js",
            "line": 21,
            "description": "<p>This module defines the p5.Font class and functions for\ndrawing text to the display canvas.</p>\n",
            "requires": [
                "core",
                "constants"
            ]
        },
        "Array Functions": {
            "name": "Array Functions",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Data",
            "namespace": "",
            "file": "src/utilities/array_functions.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "String Functions": {
            "name": "String Functions",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Data",
            "namespace": "",
            "file": "src/utilities/string_functions.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Time & Date": {
            "name": "Time & Date",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "IO",
            "namespace": "",
            "file": "src/utilities/time_date.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Lights, Camera": {
            "name": "Lights, Camera",
            "submodules": {
                "Camera": 1,
                "Lights": 1,
                "Material": 1,
                "Shaders": 1
            },
            "elements": {},
            "classes": {
                "p5.Geometry": 1,
                "p5.Matrix": 1,
                "p5.Shader": 1,
                "p5.Texture": 1
            },
            "fors": {
                "p5": 1
            },
            "namespaces": {},
            "file": "src/webgl/p5.Texture.js",
            "line": 13
        },
        "Camera": {
            "name": "Camera",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Lights, Camera",
            "namespace": "",
            "file": "src/webgl/camera.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "Lights": {
            "name": "Lights",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Lights, Camera",
            "namespace": "",
            "file": "src/webgl/light.js",
            "line": 1,
            "requires": [
                "core"
            ]
        },
        "3D Models": {
            "name": "3D Models",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Shape",
            "namespace": "",
            "file": "src/webgl/loading.js",
            "line": 1,
            "requires": [
                "core",
                "p5.Geometry"
            ]
        },
        "Material": {
            "name": "Material",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Texture": 1
            },
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Lights, Camera",
            "namespace": "",
            "file": "src/webgl/p5.Texture.js",
            "line": 13,
            "requires": [
                "core"
            ],
            "description": "<p>This module defines the p5.Texture class</p>\n"
        },
        "Shaders": {
            "name": "Shaders",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.Shader": 1
            },
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Lights, Camera",
            "namespace": "",
            "file": "src/webgl/p5.Shader.js",
            "line": 13,
            "description": "<p>This module defines the p5.Shader class</p>\n",
            "requires": [
                "core"
            ]
        },
        "3D Primitives": {
            "name": "3D Primitives",
            "submodules": {},
            "elements": {},
            "classes": {},
            "fors": {
                "p5": 1
            },
            "is_submodule": 1,
            "namespaces": {},
            "module": "Shape",
            "namespace": "",
            "file": "src/webgl/primitives.js",
            "line": 1,
            "requires": [
                "core",
                "p5.Geometry"
            ]
        },
        "p5.dom": {
            "name": "p5.dom",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.dom": 1,
                "p5.MediaElement": 1,
                "p5.File": 1
            },
            "fors": {
                "p5.dom": 1,
                "p5.Element": 1
            },
            "namespaces": {},
            "module": "p5.dom",
            "file": "lib/addons/p5.dom.js",
            "line": 2876,
            "description": "<p><p>The web is much more than just canvas and p5.dom makes it easy to interact\nwith other HTML5 objects, including text, hyperlink, image, input, video,\naudio, and webcam.</p></p>\n<p><p>There is a set of creation methods, DOM manipulation methods, and\nan extended p5.Element that supports a range of HTML elements. See the\n<a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>\nbeyond the canvas tutorial</a> for a full overview of how this addon works.</p>\n<p><p>Methods and properties shown in black are part of the p5.js core, items in\nblue are part of the p5.dom library. You will need to include an extra file\nin order to access the blue functions. See the\n<a href='http://p5js.org/libraries/#using-a-library'>using a library</a>\nsection for information on how to include this library. p5.dom comes with\n<a href='http://p5js.org/download'>p5 complete</a> or you can download the single file\n<a href='https://raw.githubusercontent.com/lmccart/p5.js/master/lib/addons/p5.dom.js'>\nhere</a>.</p></p>\n<p><p>See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>\nfor more info on how to use this libary.</a></p>\n",
            "tag": "main",
            "itemtype": "main"
        },
        "p5.sound": {
            "name": "p5.sound",
            "submodules": {},
            "elements": {},
            "classes": {
                "p5.sound": 1,
                "p5.SoundFile": 1,
                "p5.Amplitude": 1,
                "p5.FFT": 1,
                "p5.Signal": 1,
                "p5.Oscillator": 1,
                "p5.SinOsc": 1,
                "p5.TriOsc": 1,
                "p5.SawOsc": 1,
                "p5.SqrOsc": 1,
                "p5.Env": 1,
                "p5.Pulse": 1,
                "p5.Noise": 1,
                "p5.AudioIn": 1,
                "p5.Effect": 1,
                "p5.Filter": 1,
                "p5.LowPass": 1,
                "p5.HighPass": 1,
                "p5.BandPass": 1,
                "p5.EQ": 1,
                "p5.Panner3D": 1,
                "p5.Delay": 1,
                "p5.Reverb": 1,
                "p5.Convolver": 1,
                "p5.Phrase": 1,
                "p5.Part": 1,
                "p5.Score": 1,
                "p5.SoundLoop": 1,
                "p5.Compressor": 1,
                "p5.SoundRecorder": 1,
                "p5.PeakDetect": 1,
                "p5.Gain": 1,
                "p5.AudioVoice": 1,
                "p5.MonoSynth": 1,
                "p5.PolySynth": 1,
                "p5.Distortion": 1
            },
            "fors": {
                "p5.sound": 1,
                "p5": 1
            },
            "namespaces": {},
            "module": "p5.sound",
            "file": "lib/addons/p5.sound.js",
            "line": 12243,
            "description": "<p>p5.sound extends p5 with <a href=\"http://caniuse.com/audio-api\"\ntarget=\"_blank\">Web Audio</a> functionality including audio input,\nplayback, analysis and synthesis.\n<br/><br/>\n<a href=\"#/p5.SoundFile\"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>\n<a href=\"#/p5.Amplitude\"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>\n<a href=\"#/p5.AudioIn\"><b>p5.AudioIn</b></a>: Get sound from an input source, typically\n  a computer microphone.<br/>\n<a href=\"#/p5.FFT\"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns\n  results from the frequency spectrum or time domain (waveform).<br/>\n<a href=\"#/p5.Oscillator\"><b>p5.Oscillator</b></a>: Generate Sine,\n  Triangle, Square and Sawtooth waveforms. Base class of\n  <a href=\"#/p5.Noise\">p5.Noise</a> and <a href=\"#/p5.Pulse\">p5.Pulse</a>.\n  <br/>\n<a href=\"#/p5.Env\"><b>p5.Env</b></a>: An Envelope is a series\n  of fades over time. Often used to control an object&#39;s\n  output gain level as an &quot;ADSR Envelope&quot; (Attack, Decay,\n  Sustain, Release). Can also modulate other parameters.<br/>\n<a href=\"#/p5.Delay\"><b>p5.Delay</b></a>: A delay effect with\n  parameters for feedback, delayTime, and lowpass filter.<br/>\n<a href=\"#/p5.Filter\"><b>p5.Filter</b></a>: Filter the frequency range of a\n  sound.\n<br/>\n<a href=\"#/p5.Reverb\"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying\n  duration and decay. <br/>\n<b><a href=\"#/p5.Convolver\">p5.Convolver</a>:</b> Extends\n<a href=\"#/p5.Reverb\">p5.Reverb</a> to simulate the sound of real\n  physical spaces through convolution.<br/>\n<b><a href=\"#/p5.SoundRecorder\">p5.SoundRecorder</a></b>: Record sound for playback\n  / save the .wav file.\n<b><a href=\"#/p5.Phrase\">p5.Phrase</a></b>, <b><a href=\"#/p5.Part\">p5.Part</a></b> and\n<b><a href=\"#/p5.Score\">p5.Score</a></b>: Compose musical sequences.\n<br/><br/>\np5.sound is on <a href=\"https://github.com/therewasaguy/p5.sound/\">GitHub</a>.\nDownload the latest version\n<a href=\"https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js\">here</a>.</p>\n",
            "tag": "main",
            "itemtype": "main"
        }
    },
    "classes": {
        "p5": {
            "name": "p5",
            "shortname": "p5",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "IO",
            "submodule": "Output",
            "namespace": "",
            "file": "src/core/core.js",
            "line": 15,
            "description": "<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set preload(), setup(), and/or\ndraw() properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "sketch",
                    "description": "<p>a closure that can set optional preload(),\n                             setup(), and/or draw() properties on the\n                             given p5 instance</p>\n",
                    "type": "Function"
                },
                {
                    "name": "node",
                    "description": "<p>element to attach canvas to, if a\n                                     boolean is passed in use it as sync</p>\n",
                    "type": "HTMLElement|Boolean",
                    "optional": true
                },
                {
                    "name": "sync",
                    "description": "<p>start synchronously (optional)</p>\n",
                    "type": "Boolean",
                    "optional": true
                }
            ],
            "return": {
                "description": "a p5 instance",
                "type": "P5"
            }
        },
        "p5.Color": {
            "name": "p5.Color",
            "shortname": "p5.Color",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Color",
            "submodule": "Creating & Reading",
            "namespace": "",
            "file": "src/color/p5.Color.js",
            "line": 16,
            "description": "<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when saturation() is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n",
            "is_constructor": 1
        },
        "p5.Element": {
            "name": "p5.Element",
            "shortname": "p5.Element",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "DOM",
            "submodule": "DOM",
            "namespace": "",
            "file": "src/core/p5.Element.js",
            "line": 11,
            "description": "<p>Base class for all elements added to a sketch, including canvas,\ngraphics buffers, and other HTML elements. Methods in blue are\nincluded in the core functionality, methods in brown are added\nwith the <a href=\"http://p5js.org/reference/#/libraries/p5.dom\">p5.dom\nlibrary</a>.\nIt is not called directly, but p5.Element\nobjects are created by calling createCanvas, createGraphics,\nor in the p5.dom library, createDiv, createImg, createInput, etc.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "elt",
                    "description": "<p>DOM node that is wrapped</p>\n",
                    "type": "String"
                },
                {
                    "name": "pInst",
                    "description": "<p>pointer to p5 instance</p>\n",
                    "type": "P5",
                    "optional": true
                }
            ]
        },
        "p5.Graphics": {
            "name": "p5.Graphics",
            "shortname": "p5.Graphics",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Rendering",
            "submodule": "Rendering",
            "namespace": "",
            "file": "src/core/p5.Graphics.js",
            "line": 12,
            "description": "<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Element",
            "params": [
                {
                    "name": "w",
                    "description": "<p>width</p>\n",
                    "type": "Number"
                },
                {
                    "name": "h",
                    "description": "<p>height</p>\n",
                    "type": "Number"
                },
                {
                    "name": "renderer",
                    "description": "<p>the renderer to use, either P2D or WEBGL</p>\n",
                    "type": "Constant"
                },
                {
                    "name": "pInst",
                    "description": "<p>pointer to p5 instance</p>\n",
                    "type": "P5",
                    "optional": true
                }
            ]
        },
        "p5.Renderer": {
            "name": "p5.Renderer",
            "shortname": "p5.Renderer",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Rendering",
            "submodule": "Rendering",
            "namespace": "",
            "file": "src/core/p5.Renderer.js",
            "line": 12,
            "description": "<p>Main graphics and rendering context, as well as the base API\nimplementation for p5.js &quot;core&quot;. To be used as the superclass for\nRenderer2D and Renderer3D classes, respecitvely.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Element",
            "params": [
                {
                    "name": "elt",
                    "description": "<p>DOM node that is wrapped</p>\n",
                    "type": "String"
                },
                {
                    "name": "pInst",
                    "description": "<p>pointer to p5 instance</p>\n",
                    "type": "P5",
                    "optional": true
                },
                {
                    "name": "isMainCanvas",
                    "description": "<p>whether we&#39;re using it as main canvas</p>\n",
                    "type": "Boolean",
                    "optional": true
                }
            ]
        },
        "p5.TypedDict": {
            "name": "p5.TypedDict",
            "shortname": "p5.TypedDict",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Data",
            "submodule": "Dictionary",
            "namespace": "",
            "file": "src/data/p5.TypedDict.js",
            "line": 66,
            "description": "<p>Base class for all p5.Dictionary types. More specifically\n typed Dictionary objects inherit from this</p>\n",
            "is_constructor": 1
        },
        "p5.StringDict": {
            "name": "p5.StringDict",
            "shortname": "p5.StringDict",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Data",
            "submodule": "Dictionary",
            "namespace": "",
            "file": "src/data/p5.TypedDict.js",
            "line": 376,
            "description": "<p>A  Dictionary class for Strings.</p>\n",
            "is_constructor": 1,
            "extends": "p5.TypedDict"
        },
        "p5.NumberDict": {
            "name": "p5.NumberDict",
            "shortname": "p5.NumberDict",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Data",
            "submodule": "Dictionary",
            "namespace": "",
            "file": "src/data/p5.TypedDict.js",
            "line": 397,
            "description": "<p>A simple Dictionary class for Numbers.</p>\n",
            "is_constructor": 1,
            "extends": "p5.TypedDict"
        },
        "p5.Image": {
            "name": "p5.Image",
            "shortname": "p5.Image",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Image",
            "submodule": "Image",
            "namespace": "",
            "file": "src/image/p5.Image.js",
            "line": 23,
            "description": "<p>Creates a new p5.Image. A p5.Image is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\nloadImage() function. The p5.Image class contains fields for the width and\nheight of the image, as well as an array called pixels[] that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the pixels[] array, be sure to use the loadPixels() method on\nthe image to make sure that the pixel data is properly loaded.</p>\n",
            "example": [
                "\n<div><code>\nfunction setup() {\n  var img = createImage(100, 100); // same as new p5.Image(100, 100);\n  img.loadPixels();\n  createCanvas(100, 100);\n  background(0);\n\n  // helper for writing color to array\n  function writeColor(image, x, y, red, green, blue, alpha) {\n    var index = (x + y * width) * 4;\n    image.pixels[index] = red;\n    image.pixels[index + 1] = green;\n    image.pixels[index + 2] = blue;\n    image.pixels[index + 3] = alpha;\n  }\n\n  var x, y;\n  // fill with random colors\n  for (y = 0; y < img.height; y++) {\n    for (x = 0; x < img.width; x++) {\n      var red = random(255);\n      var green = random(255);\n      var blue = random(255);\n      var alpha = 255;\n      writeColor(img, x, y, red, green, blue, alpha);\n    }\n  }\n\n  // draw a red line\n  y = 0;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 255, 0, 0, 255);\n  }\n\n  // draw a green line\n  y = img.height - 1;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 0, 255, 0, 255);\n  }\n\n  img.updatePixels();\n  image(img, 0, 0);\n}\n</code></div>"
            ],
            "is_constructor": 1,
            "params": [
                {
                    "name": "width",
                    "description": "",
                    "type": "Number"
                },
                {
                    "name": "height",
                    "description": "",
                    "type": "Number"
                }
            ]
        },
        "p5.PrintWriter": {
            "name": "p5.PrintWriter",
            "shortname": "p5.PrintWriter",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "IO",
            "submodule": "Output",
            "namespace": "",
            "file": "src/io/files.js",
            "line": 1102,
            "is_constructor": 1,
            "params": [
                {
                    "name": "filename",
                    "description": "",
                    "type": "String"
                },
                {
                    "name": "extension",
                    "description": "",
                    "type": "String",
                    "optional": true
                }
            ]
        },
        "p5.Table": {
            "name": "p5.Table",
            "shortname": "p5.Table",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "IO",
            "submodule": "Table",
            "namespace": "",
            "file": "src/io/p5.Table.js",
            "line": 35,
            "description": "<p>Table objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "rows",
                    "description": "<p>An array of p5.TableRow objects</p>\n",
                    "type": "p5.TableRow[]",
                    "optional": true
                }
            ]
        },
        "p5.TableRow": {
            "name": "p5.TableRow",
            "shortname": "p5.TableRow",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "IO",
            "submodule": "Table",
            "namespace": "",
            "file": "src/io/p5.TableRow.js",
            "line": 11,
            "description": "<p>A TableRow object represents a single row of data values,\nstored in columns, from a table.</p>\n<p>A Table Row contains both an ordered array, and an unordered\nJSON object.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "str",
                    "description": "<p>optional: populate the row with a\n                            string of values, separated by the\n                            separator</p>\n",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "separator",
                    "description": "<p>comma separated values (csv) by default</p>\n",
                    "type": "String",
                    "optional": true
                }
            ]
        },
        "p5.XML": {
            "name": "p5.XML",
            "shortname": "p5.XML",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "IO",
            "submodule": "XML",
            "namespace": "",
            "file": "src/io/p5.XML.js",
            "line": 11,
            "description": "<p>XML is a representation of an XML object, able to parse XML code. Use\nloadXML() to load external XML files and create XML objects.</p>\n",
            "is_constructor": 1,
            "example": [
                "\n<div class='norender'><code>\n// The following short XML file called \"mammals.xml\" is parsed\n// in the code below.\n//\n// <?xml version=\"1.0\"?>\n// &lt;mammals&gt;\n//   &lt;animal id=\"0\" species=\"Capra hircus\">Goat&lt;/animal&gt;\n//   &lt;animal id=\"1\" species=\"Panthera pardus\">Leopard&lt;/animal&gt;\n//   &lt;animal id=\"2\" species=\"Equus zebra\">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nvar xml;\n\nfunction preload() {\n  xml = loadXML('assets/mammals.xml');\n}\n\nfunction setup() {\n  var children = xml.getChildren('animal');\n\n  for (var i = 0; i < children.length; i++) {\n    var id = children[i].getNum('id');\n    var coloring = children[i].getString('species');\n    var name = children[i].getContent();\n    print(id + ', ' + coloring + ', ' + name);\n  }\n}\n\n// Sketch prints:\n// 0, Capra hircus, Goat\n// 1, Panthera pardus, Leopard\n// 2, Equus zebra, Zebra\n</code></div>"
            ],
            "alt": "no image displayed"
        },
        "p5.Vector": {
            "name": "p5.Vector",
            "shortname": "p5.Vector",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Math",
            "submodule": "Math",
            "namespace": "",
            "file": "src/math/p5.Vector.js",
            "line": 13,
            "description": "<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods mag() and heading().\n<br><br>\nIn many of the p5.js examples, you will see p5.Vector used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the p5.Vector class.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "x",
                    "description": "<p>x component of the vector</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "description": "<p>y component of the vector</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "z",
                    "description": "<p>z component of the vector</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar v1 = createVector(40, 50);\nvar v2 = createVector(40, 50);\n\nellipse(v1.x, v1.y, 50, 50);\nellipse(v2.x, v2.y, 50, 50);\nv1.add(v2);\nellipse(v1.x, v1.y, 50, 50);\n</code>\n</div>"
            ],
            "alt": "2 white ellipses. One center-left the other bottom right and off canvas"
        },
        "p5.Font": {
            "name": "p5.Font",
            "shortname": "p5.Font",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Typography",
            "submodule": "Font",
            "namespace": "",
            "file": "src/typography/p5.Font.js",
            "line": 21,
            "description": "<p>Base class for font handling</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "pInst",
                    "description": "<p>pointer to p5 instance</p>\n",
                    "type": "P5",
                    "optional": true
                }
            ]
        },
        "p5.Geometry": {
            "name": "p5.Geometry",
            "shortname": "p5.Geometry",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Lights, Camera",
            "namespace": "",
            "file": "src/webgl/p5.Geometry.js",
            "line": 6,
            "description": "<p>p5 Geometry class</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "vertData",
                    "description": "<p>callback function or Object\n                    containing routine(s) for vertex data generation</p>\n",
                    "type": "Function | Object"
                },
                {
                    "name": "detailX",
                    "description": "<p>number of vertices on horizontal surface</p>\n",
                    "type": "Integer",
                    "optional": true
                },
                {
                    "name": "detailY",
                    "description": "<p>number of vertices on horizontal surface</p>\n",
                    "type": "Integer",
                    "optional": true
                },
                {
                    "name": "callback",
                    "description": "<p>function to call upon object instantiation.</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ]
        },
        "p5.RendererGL": {
            "name": "fill",
            "shortname": "p5.RendererGL",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Rendering",
            "namespace": "",
            "file": "src/webgl/p5.RendererGL.js",
            "line": 438,
            "description": "<p>Basic fill material for geometry with a given color</p>\n",
            "is_constructor": 1,
            "extends": "p5.Renderer",
            "todo": [
                "extend class to include public method for offscreen\nrendering (FBO)."
            ],
            "submodule": "Rendering",
            "itemtype": "method",
            "params": [
                {
                    "name": "v1",
                    "description": "<p>gray value,\nred or hue value (depending on the current color mode),\nor color Array, or CSS color string</p>\n",
                    "type": "Number|Number[]|String|p5.Color"
                },
                {
                    "name": "v2",
                    "description": "<p>green or saturation value</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "v3",
                    "description": "<p>blue or brightness value</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "a",
                    "description": "<p>opacity</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  createCanvas(200, 200, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noStroke();\n  fill(100, 100, 240);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(75, 75, 75);\n}\n</code>\n</div>"
            ],
            "alt": "black canvas with purple cube spinning"
        },
        "p5.Shader": {
            "name": "p5.Shader",
            "shortname": "p5.Shader",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Lights, Camera",
            "submodule": "Shaders",
            "namespace": "",
            "file": "src/webgl/p5.Shader.js",
            "line": 13,
            "description": "<p>Shader class for WEBGL Mode</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "renderer",
                    "description": "<p>an instance of p5.RendererGL that\nwill provide the GL context for this new p5.Shader</p>\n",
                    "type": "p5.RendererGL"
                },
                {
                    "name": "vertSrc",
                    "description": "<p>source code for the vertex shader (as a string)</p>\n",
                    "type": "String"
                },
                {
                    "name": "fragSrc",
                    "description": "<p>source code for the fragment shader (as a string)</p>\n",
                    "type": "String"
                }
            ]
        },
        "p5.Texture": {
            "name": "p5.Texture",
            "shortname": "p5.Texture",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "Lights, Camera",
            "submodule": "Material",
            "namespace": "",
            "file": "src/webgl/p5.Texture.js",
            "line": 13,
            "description": "<p>Texture class for WEBGL Mode</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "renderer",
                    "description": "<p>an instance of p5.RendererGL that\nwill provide the GL context for this new p5.Texture</p>\n",
                    "type": "p5.RendererGL"
                },
                {
                    "name": "obj",
                    "description": "<p>the\nobject containing the image data to store in the texture.</p>\n",
                    "type": "p5.Image|p5.Graphics|p5.Element|p5.MediaElement",
                    "optional": true
                }
            ]
        },
        "p5.dom": {
            "name": "p5.dom",
            "shortname": "p5.dom",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.dom",
            "submodule": "p5.dom",
            "namespace": ""
        },
        "p5.MediaElement": {
            "name": "p5.MediaElement",
            "shortname": "p5.MediaElement",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.dom",
            "submodule": "p5.dom",
            "namespace": "",
            "file": "lib/addons/p5.dom.js",
            "line": 1820,
            "description": "<p>Extends p5.Element to handle audio and video. In addition to the methods\nof p5.Element, it also contains methods for controlling media. It is not\ncalled directly, but p5.MediaElements are created by calling createVideo,\ncreateAudio, and createCapture.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "elt",
                    "description": "<p>DOM node that is wrapped</p>\n",
                    "type": "String"
                }
            ]
        },
        "p5.File": {
            "name": "p5.File",
            "shortname": "p5.File",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.dom",
            "submodule": "p5.dom",
            "namespace": "",
            "file": "lib/addons/p5.dom.js",
            "line": 2876,
            "description": "<p>Base class for a file\nUsing this for createFileInput</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "file",
                    "description": "<p>File that is wrapped</p>\n",
                    "type": "File"
                }
            ]
        },
        "p5.sound": {
            "name": "p5.sound",
            "shortname": "p5.sound",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": ""
        },
        "p5.SoundFile": {
            "name": "p5.SoundFile",
            "shortname": "p5.SoundFile",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 740,
            "description": "<p>SoundFile object with a path to a file.</p>\n\n<p>The p5.SoundFile may not be available immediately because\nit loads the file information asynchronously.</p>\n\n<p>To do something with the sound as soon as it loads\npass the name of a function as the second parameter.</p>\n\n<p>Only one file path is required. However, audio file formats\n(i.e. mp3, ogg, wav and m4a/aac) are not supported by all\nweb browsers. If you want to ensure compatability, instead of a single\nfile path, you may include an Array of filepaths, and the browser will\nchoose a format that works.</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "path",
                    "description": "<p>path to a sound file (String). Optionally,\n                             you may include multiple file formats in\n                             an array. Alternately, accepts an object\n                             from the HTML5 File API, or a p5.File.</p>\n",
                    "type": "String|Array"
                },
                {
                    "name": "successCallback",
                    "description": "<p>Name of a function to call once file loads</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>Name of a function to call if file fails to\n                                    load. This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "whileLoadingCallback",
                    "description": "<p>Name of a function to call while file\n                                           is loading. That function will\n                                           receive progress of the request to\n                                           load the sound file\n                                           (between 0 and 1) as its first\n                                           parameter. This progress\n                                           does not account for the additional\n                                           time needed to decode the audio data.</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  mySound = loadSound('assets/doorbell.mp3');\n}\n\nfunction setup() {\n  mySound.setVolume(0.1);\n  mySound.play();\n}\n\n </code></div>"
            ]
        },
        "p5.Amplitude": {
            "name": "p5.Amplitude",
            "shortname": "p5.Amplitude",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 2154,
            "description": "<p>Amplitude measures volume between 0.0 and 1.0.\nListens to all p5sound by default, or use setInput()\nto listen to a specific sound source. Accepts an optional\nsmoothing value, which defaults to 0.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "smoothing",
                    "description": "<p>between 0.0 and .999 to smooth\n                           amplitude readings (defaults to 0)</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar sound, amplitude, cnv;\n\nfunction preload(){\n  sound = loadSound('assets/beat.mp3');\n}\nfunction setup() {\n  cnv = createCanvas(100,100);\n  amplitude = new p5.Amplitude();\n\n  // start / stop the sound when canvas is clicked\n  cnv.mouseClicked(function() {\n    if (sound.isPlaying() ){\n      sound.stop();\n    } else {\n      sound.play();\n    }\n  });\n}\nfunction draw() {\n  background(0);\n  fill(255);\n  var level = amplitude.getLevel();\n  var size = map(level, 0, 1, 0, 200);\n  ellipse(width/2, height/2, size, size);\n}\n\n</code></div>"
            ]
        },
        "p5.FFT": {
            "name": "p5.FFT",
            "shortname": "p5.FFT",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 2426,
            "description": "<p>FFT (Fast Fourier Transform) is an analysis algorithm that\nisolates individual\n<a href=\"https://en.wikipedia.org/wiki/Audio_frequency\">\naudio frequencies</a> within a waveform.</p>\n\n<p>Once instantiated, a p5.FFT object can return an array based on\ntwo types of analyses: <br> • <code>FFT.waveform()</code> computes\namplitude values along the time domain. The array indices correspond\nto samples across a brief moment in time. Each value represents\namplitude of the waveform at that sample of time.<br>\n• <code>FFT.analyze() </code> computes amplitude values along the\nfrequency domain. The array indices correspond to frequencies (i.e.\npitches), from the lowest to the highest that humans can hear. Each\nvalue represents amplitude at that slice of the frequency spectrum.\nUse with <code>getEnergy()</code> to measure amplitude at specific\nfrequencies, or within a range of frequencies. </p>\n\n<p>FFT analyzes a very short snapshot of sound called a sample\nbuffer. It returns an array of amplitude measurements, referred\nto as <code>bins</code>. The array is 1024 bins long by default.\nYou can change the bin array length, but it must be a power of 2\nbetween 16 and 1024 in order for the FFT algorithm to function\ncorrectly. The actual size of the FFT buffer is twice the\nnumber of bins, so given a standard sample rate, the buffer is\n2048/44100 seconds long.</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "smoothing",
                    "description": "<p>Smooth results of Freq Spectrum.\n                              0.0 &lt; smoothing &lt; 1.0.\n                              Defaults to 0.8.</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "bins",
                    "description": "<p>Length of resulting array.\n                          Must be a power of two between\n                          16 and 1024. Defaults to 1024.</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nfunction preload(){\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup(){\n  var cnv = createCanvas(100,100);\n  cnv.mouseClicked(togglePlay);\n  fft = new p5.FFT();\n  sound.amp(0.2);\n}\n\nfunction draw(){\n  background(0);\n\n  var spectrum = fft.analyze();\n  noStroke();\n  fill(0,255,0); // spectrum is green\n  for (var i = 0; i< spectrum.length; i++){\n    var x = map(i, 0, spectrum.length, 0, width);\n    var h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width / spectrum.length, h )\n  }\n\n  var waveform = fft.waveform();\n  noFill();\n  beginShape();\n  stroke(255,0,0); // waveform is red\n  strokeWeight(1);\n  for (var i = 0; i< waveform.length; i++){\n    var x = map(i, 0, waveform.length, 0, width);\n    var y = map( waveform[i], -1, 1, 0, height);\n    vertex(x,y);\n  }\n  endShape();\n\n  text('click to play/pause', 4, 10);\n}\n\n// fade sound if mouse is over canvas\nfunction togglePlay() {\n  if (sound.isPlaying()) {\n    sound.pause();\n  } else {\n    sound.loop();\n  }\n}\n</code></div>"
            ]
        },
        "p5.Signal": {
            "name": "p5.Signal",
            "shortname": "p5.Signal",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 4828,
            "description": "<p>p5.Signal is a constant audio-rate signal used by p5.Oscillator\nand p5.Envelope for modulation math.</p>\n\n<p>This is necessary because Web Audio is processed on a seprate clock.\nFor example, the p5 draw loop runs about 60 times per second. But\nthe audio clock must process samples 44100 times per second. If we\nwant to add a value to each of those samples, we can&#39;t do it in the\ndraw loop, but we can do it by adding a constant-rate audio signal.</p.\n\n<p>This class mostly functions behind the scenes in p5.sound, and returns\na Tone.Signal from the Tone.js library by Yotam Mann.\nIf you want to work directly with audio signals for modular\nsynthesis, check out\n<a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>",
            "is_constructor": 1,
            "return": {
                "description": "A Signal object from the Tone.js library",
                "type": "Tone.Signal"
            },
            "example": [
                "\n<div><code>\nfunction setup() {\n  carrier = new p5.Oscillator('sine');\n  carrier.amp(1); // set amplitude\n  carrier.freq(220); // set frequency\n  carrier.start(); // start oscillating\n\n  modulator = new p5.Oscillator('sawtooth');\n  modulator.disconnect();\n  modulator.amp(1);\n  modulator.freq(4);\n  modulator.start();\n\n  // Modulator's default amplitude range is -1 to 1.\n  // Multiply it by -200, so the range is -200 to 200\n  // then add 220 so the range is 20 to 420\n  carrier.freq( modulator.mult(-200).add(220) );\n}\n</code></div>"
            ]
        },
        "p5.Oscillator": {
            "name": "p5.Oscillator",
            "shortname": "p5.Oscillator",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 4974,
            "description": "<p>Creates a signal that oscillates between -1.0 and 1.0.\nBy default, the oscillation takes the form of a sinusoidal\nshape (&#39;sine&#39;). Additional types include &#39;triangle&#39;,\n&#39;sawtooth&#39; and &#39;square&#39;. The frequency defaults to\n440 oscillations per second (440Hz, equal to the pitch of an\n&#39;A&#39; note).</p>\n\n<p>Set the type of oscillation with setType(), or by instantiating a\nspecific oscillator: <a href=\"/reference/#/p5.SinOsc\">p5.SinOsc</a>, <a\nhref=\"/reference/#/p5.TriOsc\">p5.TriOsc</a>, <a\nhref=\"/reference/#/p5.SqrOsc\">p5.SqrOsc</a>, or <a\nhref=\"/reference/#/p5.SawOsc\">p5.SawOsc</a>.\n</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "freq",
                    "description": "<p>frequency defaults to 440Hz</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "type",
                    "description": "<p>type of oscillator. Options:\n                       &#39;sine&#39; (default), &#39;triangle&#39;,\n                       &#39;sawtooth&#39;, &#39;square&#39;</p>\n",
                    "type": "String",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar osc;\nvar playing = false;\n\nfunction setup() {\n  backgroundColor = color(255,0,255);\n  textAlign(CENTER);\n\n  osc = new p5.Oscillator();\n  osc.setType('sine');\n  osc.freq(240);\n  osc.amp(0);\n  osc.start();\n}\n\nfunction draw() {\n  background(backgroundColor)\n  text('click to play', width/2, height/2);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    if (!playing) {\n      // ramp amplitude to 0.5 over 0.05 seconds\n      osc.amp(0.5, 0.05);\n      playing = true;\n      backgroundColor = color(0,255,255);\n    } else {\n      // ramp amplitude to 0 over 0.5 seconds\n      osc.amp(0, 0.5);\n      playing = false;\n      backgroundColor = color(255,0,255);\n    }\n  }\n}\n</code> </div>"
            ]
        },
        "p5.SinOsc": {
            "name": "p5.SinOsc",
            "shortname": "p5.SinOsc",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 5409,
            "description": "<p>Constructor: <code>new p5.SinOsc()</code>.\nThis creates a Sine Wave Oscillator and is\nequivalent to <code> new p5.Oscillator(&#39;sine&#39;)\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType(&#39;sine&#39;)</code>.\nSee p5.Oscillator for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Oscillator",
            "params": [
                {
                    "name": "freq",
                    "description": "<p>Set the frequency</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ]
        },
        "p5.TriOsc": {
            "name": "p5.TriOsc",
            "shortname": "p5.TriOsc",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 5426,
            "description": "<p>Constructor: <code>new p5.TriOsc()</code>.\nThis creates a Triangle Wave Oscillator and is\nequivalent to <code>new p5.Oscillator(&#39;triangle&#39;)\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType(&#39;triangle&#39;)</code>.\nSee p5.Oscillator for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Oscillator",
            "params": [
                {
                    "name": "freq",
                    "description": "<p>Set the frequency</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ]
        },
        "p5.SawOsc": {
            "name": "p5.SawOsc",
            "shortname": "p5.SawOsc",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 5443,
            "description": "<p>Constructor: <code>new p5.SawOsc()</code>.\nThis creates a SawTooth Wave Oscillator and is\nequivalent to <code> new p5.Oscillator(&#39;sawtooth&#39;)\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType(&#39;sawtooth&#39;)</code>.\nSee p5.Oscillator for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Oscillator",
            "params": [
                {
                    "name": "freq",
                    "description": "<p>Set the frequency</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ]
        },
        "p5.SqrOsc": {
            "name": "p5.SqrOsc",
            "shortname": "p5.SqrOsc",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 5460,
            "description": "<p>Constructor: <code>new p5.SqrOsc()</code>.\nThis creates a Square Wave Oscillator and is\nequivalent to <code> new p5.Oscillator(&#39;square&#39;)\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType(&#39;square&#39;)</code>.\nSee p5.Oscillator for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Oscillator",
            "params": [
                {
                    "name": "freq",
                    "description": "<p>Set the frequency</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ]
        },
        "p5.Env": {
            "name": "p5.Env",
            "shortname": "p5.Env",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 5917,
            "description": "<p>Envelopes are pre-defined amplitude distribution over time.\nTypically, envelopes are used to control the output volume\nof an object, a series of fades referred to as Attack, Decay,\nSustain and Release (\n<a href=\"https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg\">ADSR</a>\n). Envelopes can also control other Web Audio Parameters—for example, a p5.Env can\ncontrol an Oscillator&#39;s frequency like this: <code>osc.freq(env)</code>.</p>\n<p>Use <code><a href=\"#/p5.Env/setRange\">setRange</a></code> to change the attack/release level.\nUse <code><a href=\"#/p5.Env/setADSR\">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>\n<p>Use the <code><a href=\"#/p5.Env/play\">play</a></code> method to play the entire envelope,\nthe <code><a href=\"#/p5.Env/ramp\">ramp</a></code> method for a pingable trigger,\nor <code><a href=\"#/p5.Env/triggerAttack\">triggerAttack</a></code>/\n<code><a href=\"#/p5.Env/triggerRelease\">triggerRelease</a></code> to trigger noteOn/noteOff.</p>",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\nvar attackLevel = 1.0;\nvar releaseLevel = 0;\n\nvar attackTime = 0.001\nvar decayTime = 0.2;\nvar susPercent = 0.2;\nvar releaseTime = 0.5;\n\nvar env, triOsc;\n\nfunction setup() {\n  var cnv = createCanvas(100, 100);\n\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  env = new p5.Env();\n  env.setADSR(attackTime, decayTime, susPercent, releaseTime);\n  env.setRange(attackLevel, releaseLevel);\n\n  triOsc = new p5.Oscillator('triangle');\n  triOsc.amp(env);\n  triOsc.start();\n  triOsc.freq(220);\n\n  cnv.mousePressed(playEnv);\n}\n\nfunction playEnv(){\n  env.play();\n}\n</code></div>"
            ]
        },
        "p5.Pulse": {
            "name": "p5.Pulse",
            "shortname": "p5.Pulse",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 6709,
            "description": "<p>Creates a Pulse object, an oscillator that implements\nPulse Width Modulation.\nThe pulse is created with two oscillators.\nAccepts a parameter for frequency, and to set the\nwidth between the pulses. See <a href=\"\nhttp://p5js.org/reference/#/p5.Oscillator\">\n<code>p5.Oscillator</code> for a full list of methods.</p>\n",
            "extends": "p5.Oscillator",
            "is_constructor": 1,
            "params": [
                {
                    "name": "freq",
                    "description": "<p>Frequency in oscillations per second (Hz)</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "w",
                    "description": "<p>Width between the pulses (0 to 1.0,\n                       defaults to 0)</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar pulse;\nfunction setup() {\n  background(0);\n\n  // Create and start the pulse wave oscillator\n  pulse = new p5.Pulse();\n  pulse.amp(0.5);\n  pulse.freq(220);\n  pulse.start();\n}\n\nfunction draw() {\n  var w = map(mouseX, 0, width, 0, 1);\n  w = constrain(w, 0, 1);\n  pulse.width(w)\n}\n</code></div>"
            ]
        },
        "p5.Noise": {
            "name": "p5.Noise",
            "shortname": "p5.Noise",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 6886,
            "description": "<p>Noise is a type of oscillator that generates a buffer with random values.</p>\n",
            "extends": "p5.Oscillator",
            "is_constructor": 1,
            "params": [
                {
                    "name": "type",
                    "description": "<p>Type of noise can be &#39;white&#39; (default),\n                     &#39;brown&#39; or &#39;pink&#39;.</p>\n",
                    "type": "String"
                }
            ]
        },
        "p5.AudioIn": {
            "name": "p5.AudioIn",
            "shortname": "p5.AudioIn",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 7075,
            "description": "<p>Get audio from an input, i.e. your computer&#39;s microphone.</p>\n\n<p>Turn the mic on/off with the start() and stop() methods. When the mic\nis on, its volume can be measured with getLevel or by connecting an\nFFT object.</p>\n\n<p>If you want to hear the AudioIn, use the .connect() method.\nAudioIn does not connect to p5.sound output by default to prevent\nfeedback.</p>\n\n<p><em>Note: This uses the <a href=\"http://caniuse.com/stream\">getUserMedia/\nStream</a> API, which is not supported by certain browsers. Access in Chrome browser\nis limited to localhost and https, but access over http may be limited.</em></p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "errorCallback",
                    "description": "<p>A function to call if there is an error\n                                  accessing the AudioIn. For example,\n                                  Safari and iOS devices do not\n                                  currently allow microphone access.</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar mic;\nfunction setup(){\n  mic = new p5.AudioIn()\n  mic.start();\n}\nfunction draw(){\n  background(0);\n  micLevel = mic.getLevel();\n  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);\n}\n</code></div>"
            ]
        },
        "p5.Effect": {
            "name": "p5.Effect",
            "shortname": "p5.Effect",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 7970,
            "description": "<p>Effect is a base class for audio effects in p5. <br>\nThis module handles the nodes and methods that are\ncommon and useful for current and future effects.</p>\n<p>This class is extended by <a href=\"reference/#/p5.Distortion\">p5.Distortion</a>,\n<a href=\"reference/#/p5.Compressor\">p5.Compressor</a>,\n<a href=\"reference/#/p5.Delay\">p5.Delay</a>,\n<a href=\"reference/#/p5.Filter\">p5.Filter</a>,\n<a href=\"reference/#/p5.Reverb\">p5.Reverb</a>.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "ac",
                    "description": "<p>Reference to the audio context of the p5 object</p>\n",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "input",
                    "description": "<p>Gain Node effect wrapper</p>\n",
                    "type": "AudioNode",
                    "optional": true
                },
                {
                    "name": "output",
                    "description": "<p>Gain Node effect wrapper</p>\n",
                    "type": "AudioNode",
                    "optional": true
                },
                {
                    "name": "_drywet",
                    "description": "<p>Tone.JS CrossFade node (defaults to value: 1)</p>\n",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "wet",
                    "description": "<p>Effects that extend this class should connect\n                             to the wet signal to this gain node, so that dry and wet\n                             signals are mixed properly.</p>\n",
                    "type": "AudioNode",
                    "optional": true
                }
            ]
        },
        "p5.Filter": {
            "name": "p5.Filter",
            "shortname": "p5.Filter",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8102,
            "description": "<p><p>A p5.Filter uses a Web Audio Biquad Filter to filter\nthe frequency response of an input source. Subclasses\ninclude:</p></p>\n<ul>\n<li><a href=\"/reference/#/p5.LowPass\"><code>p5.LowPass</code></a>:\nAllows frequencies below the cutoff frequency to pass through,\nand attenuates frequencies above the cutoff.<br/></li>\n<li><a href=\"/reference/#/p5.HighPass\"><code>p5.HighPass</code></a>:\nThe opposite of a lowpass filter. <br/></li>\n<li><a href=\"/reference/#/p5.BandPass\"><code>p5.BandPass</code></a>:\nAllows a range of frequencies to pass through and attenuates\nthe frequencies below and above this frequency range.<br/></li>\n</ul>\n<p>The <code>.res()</code> method controls either width of the\nbandpass, or resonance of the low/highpass cutoff frequency.</p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "extends": "p5.Effect",
            "is_constructor": 1,
            "params": [
                {
                    "name": "type",
                    "description": "<p>&#39;lowpass&#39; (default), &#39;highpass&#39;, &#39;bandpass&#39;</p>\n",
                    "type": "String",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar fft, noise, filter;\n\nfunction setup() {\n  fill(255, 40, 255);\n\n  filter = new p5.BandPass();\n\n  noise = new p5.Noise();\n  // disconnect unfiltered noise,\n  // and connect to filter\n  noise.disconnect();\n  noise.connect(filter);\n  noise.start();\n\n  fft = new p5.FFT();\n}\n\nfunction draw() {\n  background(30);\n\n  // set the BandPass frequency based on mouseX\n  var freq = map(mouseX, 0, width, 20, 10000);\n  filter.freq(freq);\n  // give the filter a narrow band (lower res = wider bandpass)\n  filter.res(50);\n\n  // draw filtered spectrum\n  var spectrum = fft.analyze();\n  noStroke();\n  for (var i = 0; i < spectrum.length; i++) {\n    var x = map(i, 0, spectrum.length, 0, width);\n    var h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width/spectrum.length, h);\n  }\n\n  isMouseOverCanvas();\n}\n\nfunction isMouseOverCanvas() {\n  var mX = mouseX, mY = mouseY;\n  if (mX > 0 && mX < width && mY < height && mY > 0) {\n    noise.amp(0.5, 0.2);\n  } else {\n    noise.amp(0, 0.2);\n  }\n}\n</code></div>"
            ]
        },
        "p5.LowPass": {
            "name": "p5.LowPass",
            "shortname": "p5.LowPass",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8332,
            "description": "<p>Constructor: <code>new p5.LowPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType(&#39;lowpass&#39;)</code>.\nSee p5.Filter for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Filter"
        },
        "p5.HighPass": {
            "name": "p5.HighPass",
            "shortname": "p5.HighPass",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8346,
            "description": "<p>Constructor: <code>new p5.HighPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType(&#39;highpass&#39;)</code>.\nSee p5.Filter for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Filter"
        },
        "p5.BandPass": {
            "name": "p5.BandPass",
            "shortname": "p5.BandPass",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8360,
            "description": "<p>Constructor: <code>new p5.BandPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType(&#39;bandpass&#39;)</code>.\nSee p5.Filter for methods.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Filter"
        },
        "p5.EQ": {
            "name": "p5.EQ",
            "shortname": "p5.EQ",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8429,
            "description": "<p>p5.EQ is an audio effect that performs the function of a multiband\naudio equalizer. Equalization is used to adjust the balance of\nfrequency compoenents of an audio signal. This process is commonly used\nin sound production and recording to change the waveform before it reaches\na sound output device. EQ can also be used as an audio effect to create\ninteresting distortions by filtering out parts of the spectrum. p5.EQ is\nbuilt using a chain of Web Audio Biquad Filter Nodes and can be\ninstantiated with 3 or 8 bands. Bands can be added or removed from\nthe EQ by directly modifying p5.EQ.bands (the array that stores filters).</p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Effect",
            "params": [
                {
                    "name": "_eqsize",
                    "description": "<p>Constructor will accept 3 or 8, defaults to 3</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "return": {
                "description": "p5.EQ object",
                "type": "Object"
            },
            "example": [
                "\n<div><code>\nvar eq;\nvar band_names;\nvar band_index;\n\nvar soundFile, play;\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  soundFile = loadSound('assets/beat');\n}\n\nfunction setup() {\n  eq = new p5.EQ(3);\n  soundFile.disconnect();\n  eq.process(soundFile);\n\n  band_names = ['lows','mids','highs'];\n  band_index = 0;\n  play = false;\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(30);\n  noStroke();\n  fill(255);\n  text('click to kill',50,25);\n\n  fill(255, 40, 255);\n  textSize(26);\n  text(band_names[band_index],50,55);\n\n  fill(255);\n  textSize(9);\n  text('space = play/pause',50,80);\n}\n\n//If mouse is over canvas, cycle to the next band and kill the frequency\nfunction mouseClicked() {\n  for (var i = 0; i < eq.bands.length; i++) {\n    eq.bands[i].gain(0);\n  }\n  eq.bands[band_index].gain(-40);\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    band_index === 2 ? band_index = 0 : band_index++;\n  }\n}\n\n//use space bar to trigger play / pause\nfunction keyPressed() {\n  if (key===' ') {\n    play = !play\n    play ? soundFile.loop() : soundFile.pause();\n  }\n}\n</code></div>"
            ]
        },
        "p5.Panner3D": {
            "name": "p5.Panner3D",
            "shortname": "p5.Panner3D",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 8619,
            "description": "<p>Panner3D is based on the <a title=\"Web Audio Panner docs\"  href=\n\"https://developer.mozilla.org/en-US/docs/Web/API/PannerNode\">\nWeb Audio Spatial Panner Node</a>.\nThis panner is a spatial processing node that allows audio to be positioned\nand oriented in 3D space.</p>\n<p>The position is relative to an <a title=\"Web Audio Listener docs\" href=\n\"https://developer.mozilla.org/en-US/docs/Web/API/AudioListener\">\nAudio Context Listener</a>, which can be accessed\nby <code>p5.soundOut.audiocontext.listener</code></p>\n",
            "is_constructor": 1
        },
        "p5.Delay": {
            "name": "p5.Delay",
            "shortname": "p5.Delay",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 9068,
            "description": "<p>Delay is an echo effect. It processes an existing sound source,\nand outputs a delayed version of that sound. The p5.Delay can\nproduce different effects depending on the delayTime, feedback,\nfilter, and type. In the example below, a feedback of 0.5 (the\ndefaul value) will produce a looping delay that decreases in\nvolume by 50% each repeat. A filter will cut out the high\nfrequencies so that the delay does not sound as piercing as the\noriginal source.</p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "extends": "p5.Effect",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\nvar noise, env, delay;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  noise = new p5.Noise('brown');\n  noise.amp(0);\n  noise.start();\n\n  delay = new p5.Delay();\n\n  // delay.process() accepts 4 parameters:\n  // source, delayTime, feedback, filter frequency\n  // play with these numbers!!\n  delay.process(noise, .12, .7, 2300);\n\n  // play the noise with an envelope,\n  // a series of fades ( time / value pairs )\n  env = new p5.Env(.01, 0.2, .2, .1);\n}\n\n// mouseClick triggers envelope\nfunction mouseClicked() {\n  // is mouse over canvas?\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    env.play(noise);\n  }\n}\n</code></div>"
            ]
        },
        "p5.Reverb": {
            "name": "p5.Reverb",
            "shortname": "p5.Reverb",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 9345,
            "description": "<p>Reverb adds depth to a sound through a large number of decaying\nechoes. It creates the perception that sound is occurring in a\nphysical space. The p5.Reverb has paramters for Time (how long does the\nreverb last) and decayRate (how much the sound decays with each echo)\nthat can be set with the .set() or .process() methods. The p5.Convolver\nextends p5.Reverb allowing you to recreate the sound of actual physical\nspaces through convolution.</p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "extends": "p5.Effect",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\nvar soundFile, reverb;\nfunction preload() {\n  soundFile = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  reverb = new p5.Reverb();\n  soundFile.disconnect(); // so we'll only hear reverb...\n\n  // connect soundFile to reverb, process w/\n  // 3 second reverbTime, decayRate of 2%\n  reverb.process(soundFile, 3, 2);\n  soundFile.play();\n}\n</code></div>"
            ]
        },
        "p5.Convolver": {
            "name": "p5.Convolver",
            "shortname": "p5.Convolver",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 9505,
            "description": "<p>p5.Convolver extends p5.Reverb. It can emulate the sound of real\nphysical spaces through a process called <a href=\"\nhttps://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation\">\nconvolution</a>.</p>\n\n<p>Convolution multiplies any audio input by an &quot;impulse response&quot;\nto simulate the dispersion of sound over time. The impulse response is\ngenerated from an audio file that you provide. One way to\ngenerate an impulse response is to pop a balloon in a reverberant space\nand record the echo. Convolution can also be used to experiment with\nsound.</p>\n\n<p>Use the method <code>createConvolution(path)</code> to instantiate a\np5.Convolver with a path to your impulse response audio file.</p>",
            "extends": "p5.Effect",
            "is_constructor": 1,
            "params": [
                {
                    "name": "path",
                    "description": "<p>path to a sound file</p>\n",
                    "type": "String"
                },
                {
                    "name": "callback",
                    "description": "<p>function to call when loading succeeds</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to call if loading fails.\n                                   This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar cVerb, sound;\nfunction preload() {\n  // We have both MP3 and OGG versions of all sound assets\n  soundFormats('ogg', 'mp3');\n\n  // Try replacing 'bx-spring' with other soundfiles like\n  // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'\n  cVerb = createConvolver('assets/bx-spring.mp3');\n\n  // Try replacing 'Damscray_DancingTiger' with\n  // 'beat', 'doorbell', lucky_dragons'\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  // disconnect from master output...\n  sound.disconnect();\n\n  // ...and process with cVerb\n  // so that we only hear the convolution\n  cVerb.process(sound);\n\n  sound.play();\n}\n</code></div>"
            ]
        },
        "p5.Phrase": {
            "name": "p5.Phrase",
            "shortname": "p5.Phrase",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10057,
            "description": "<p>A phrase is a pattern of musical events over time, i.e.\na series of notes and rests.</p>\n\n<p>Phrases must be added to a p5.Part for playback, and\neach part can play multiple phrases at the same time.\nFor example, one Phrase might be a kick drum, another\ncould be a snare, and another could be the bassline.</p>\n\n<p>The first parameter is a name so that the phrase can be\nmodified or deleted later. The callback is a a function that\nthis phrase will call at every step—for example it might be\ncalled <code>playNote(value){}</code>. The array determines\nwhich value is passed into the callback at each step of the\nphrase. It can be numbers, an object with multiple numbers,\nor a zero (0) indicates a rest so the callback won&#39;t be called).</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "name",
                    "description": "<p>Name so that you can access the Phrase.</p>\n",
                    "type": "String"
                },
                {
                    "name": "callback",
                    "description": "<p>The name of a function that this phrase\n                           will call. Typically it will play a sound,\n                           and accept two parameters: a time at which\n                           to play the sound (in seconds from now),\n                           and a value from the sequence array. The\n                           time should be passed into the play() or\n                           start() method to ensure precision.</p>\n",
                    "type": "Function"
                },
                {
                    "name": "sequence",
                    "description": "<p>Array of values to pass into the callback\n                          at each step of the phrase.</p>\n",
                    "type": "Array"
                }
            ],
            "example": [
                "\n<div><code>\nvar mySound, myPhrase, myPart;\nvar pattern = [1,0,0,2,0,2,0,0];\nvar msg = 'click to play';\n\nfunction preload() {\n  mySound = loadSound('assets/beatbox.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  myPhrase = new p5.Phrase('bbox', makeSound, pattern);\n  myPart = new p5.Part();\n  myPart.addPhrase(myPhrase);\n  myPart.setBPM(60);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction makeSound(time, playbackRate) {\n  mySound.rate(playbackRate);\n  mySound.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing pattern';\n  }\n}\n\n</code></div>"
            ]
        },
        "p5.Part": {
            "name": "p5.Part",
            "shortname": "p5.Part",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10142,
            "description": "<p>A p5.Part plays back one or more p5.Phrases. Instantiate a part\nwith steps and tatums. By default, each step represents 1/16th note.</p>\n\n<p>See p5.Phrase for more about musical timing.</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "steps",
                    "description": "<p>Steps in the part</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "tatums",
                    "description": "<p>Divisions of a beat (default is 1/16, a quarter note)</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar box, drum, myPart;\nvar boxPat = [1,0,0,2,0,2,0,0];\nvar drumPat = [0,1,1,0,2,0,1,0];\nvar msg = 'click to play';\n\nfunction preload() {\n  box = loadSound('assets/beatbox.mp3');\n  drum = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  var boxPhrase = new p5.Phrase('box', playBox, boxPat);\n  var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);\n  myPart = new p5.Part();\n  myPart.addPhrase(boxPhrase);\n  myPart.addPhrase(drumPhrase);\n  myPart.setBPM(60);\n  masterVolume(0.1);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction playBox(time, playbackRate) {\n  box.rate(playbackRate);\n  box.play(time);\n}\n\nfunction playDrum(time, playbackRate) {\n  drum.rate(playbackRate);\n  drum.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing part';\n  }\n}\n</code></div>"
            ]
        },
        "p5.Score": {
            "name": "p5.Score",
            "shortname": "p5.Score",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10396,
            "description": "<p>A Score consists of a series of Parts. The parts will\nbe played back in order. For example, you could have an\nA part, a B part, and a C part, and play them back in this order\n<code>new p5.Score(a, a, b, a, c)</code></p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "parts",
                    "description": "<p>One or multiple parts, to be played in sequence.</p>\n",
                    "type": "p5.Part",
                    "optional": true,
                    "multiple": true
                }
            ]
        },
        "p5.SoundLoop": {
            "name": "p5.SoundLoop",
            "shortname": "p5.SoundLoop",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10527,
            "description": "<p>SoundLoop</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "callback",
                    "description": "<p>this function will be called on each iteration of theloop</p>\n",
                    "type": "Function"
                },
                {
                    "name": "interval",
                    "description": "<p>amount of time or beats for each iteration of the loop\n                                      defaults to 1</p>\n",
                    "type": "Number|String",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar click;\nvar looper1;\n\nfunction preload() {\n  click = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  //the looper's callback is passed the timeFromNow\n  //this value should be used as a reference point from\n  //which to schedule sounds\n  looper1 = new p5.SoundLoop(function(timeFromNow){\n    click.play(timeFromNow);\n    background(255 * (looper1.iterations % 2));\n    }, 2);\n\n  //stop after 10 iteratios;\n  looper1.maxIterations = 10;\n  //start the loop\n  looper1.start();\n}\n</code></div>"
            ]
        },
        "p5.Compressor": {
            "name": "p5.Compressor",
            "shortname": "p5.Compressor",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10786,
            "description": "<p>Compressor is an audio effect class that performs dynamics compression\non an audio input source. This is a very commonly used technique in music\nand sound production. Compression creates an overall louder, richer,\nand fuller sound by lowering the volume of louds and raising that of softs.\nCompression can be used to avoid clipping (sound distortion due to\npeaks in volume) and is especially useful when many sounds are played\nat once. Compression can be used on indivudal sound sources in addition\nto the master output.</p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "is_constructor": 1,
            "extends": "p5.Effect"
        },
        "p5.SoundRecorder": {
            "name": "p5.SoundRecorder",
            "shortname": "p5.SoundRecorder",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 10994,
            "description": "<p>Record sounds for playback and/or to save as a .wav file.\nThe p5.SoundRecorder records all sound output from your sketch,\nor can be assigned a specific source with setInput().</p>\n<p>The record() method accepts a p5.SoundFile as a parameter.\nWhen playback is stopped (either after the given amount of time,\nor with the stop() method), the p5.SoundRecorder will send its\nrecording to that p5.SoundFile for playback.</p>",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\nvar mic, recorder, soundFile;\nvar state = 0;\n\nfunction setup() {\n  background(200);\n  // create an audio in\n  mic = new p5.AudioIn();\n\n  // prompts user to enable their browser mic\n  mic.start();\n\n  // create a sound recorder\n  recorder = new p5.SoundRecorder();\n\n  // connect the mic to the recorder\n  recorder.setInput(mic);\n\n  // this sound file will be used to\n  // playback & save the recording\n  soundFile = new p5.SoundFile();\n\n  text('keyPress to record', 20, 20);\n}\n\nfunction keyPressed() {\n  // make sure user enabled the mic\n  if (state === 0 && mic.enabled) {\n\n    // record to our p5.SoundFile\n    recorder.record(soundFile);\n\n    background(255,0,0);\n    text('Recording!', 20, 20);\n    state++;\n  }\n  else if (state === 1) {\n    background(0,255,0);\n\n    // stop recorder and\n    // send result to soundFile\n    recorder.stop();\n\n    text('Stopped', 20, 20);\n    state++;\n  }\n\n  else if (state === 2) {\n    soundFile.play(); // play the result!\n    save(soundFile, 'mySound.wav');\n    state++;\n  }\n}\n</div></code>"
            ]
        },
        "p5.PeakDetect": {
            "name": "p5.PeakDetect",
            "shortname": "p5.PeakDetect",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 11283,
            "description": "<p>PeakDetect works in conjunction with p5.FFT to\nlook for onsets in some or all of the frequency spectrum.\n</p>\n<p>\nTo use p5.PeakDetect, call <code>update</code> in the draw loop\nand pass in a p5.FFT object.\n</p>\n<p>\nYou can listen for a specific part of the frequency spectrum by\nsetting the range between <code>freq1</code> and <code>freq2</code>.\n</p>\n\n<p><code>threshold</code> is the threshold for detecting a peak,\nscaled between 0 and 1. It is logarithmic, so 0.1 is half as loud\nas 1.0.</p>\n\n<p>\nThe update method is meant to be run in the draw loop, and\n<b>frames</b> determines how many loops must pass before\nanother peak can be detected.\nFor example, if the frameRate() = 60, you could detect the beat of a\n120 beat-per-minute song with this equation:\n<code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>\n</p>\n\n<p>\nBased on example contribtued by @b2renger, and a simple beat detection\nexplanation by <a href=\"a\nhref=&quot;http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/&quot;\ntarget=&quot;_blank&quot;\">a\nhref=&quot;http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/&quot;\ntarget=&quot;_blank&quot;</a>Felix Turner</a>.\n</p>",
            "is_constructor": 1,
            "params": [
                {
                    "name": "freq1",
                    "description": "<p>lowFrequency - defaults to 20Hz</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "freq2",
                    "description": "<p>highFrequency - defaults to 20000 Hz</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "threshold",
                    "description": "<p>Threshold for detecting a beat between 0 and 1\n                          scaled logarithmically where 0.1 is 1/2 the loudness\n                          of 1.0. Defaults to 0.35.</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "framesPerPeak",
                    "description": "<p>Defaults to 20.</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\n\nvar cnv, soundFile, fft, peakDetect;\nvar ellipseWidth = 10;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n\n  soundFile = loadSound('assets/beat.mp3');\n\n  // p5.PeakDetect requires a p5.FFT\n  fft = new p5.FFT();\n  peakDetect = new p5.PeakDetect();\n\n}\n\nfunction draw() {\n  background(0);\n  text('click to play/pause', width/2, height/2);\n\n  // peakDetect accepts an fft post-analysis\n  fft.analyze();\n  peakDetect.update(fft);\n\n  if ( peakDetect.isDetected ) {\n    ellipseWidth = 50;\n  } else {\n    ellipseWidth *= 0.95;\n  }\n\n  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);\n}\n\n// toggle play/stop when canvas is clicked\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    if (soundFile.isPlaying() ) {\n      soundFile.stop();\n    } else {\n      soundFile.play();\n    }\n  }\n}\n</code></div>"
            ]
        },
        "p5.Gain": {
            "name": "p5.Gain",
            "shortname": "p5.Gain",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 11503,
            "description": "<p>A gain node is usefull to set the relative volume of sound.\nIt&#39;s typically used to build mixers.</p>\n",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\n\n // load two soundfile and crossfade beetween them\n var sound1,sound2;\n var gain1, gain2, gain3;\n\n function preload(){\n soundFormats('ogg', 'mp3');\n sound1 = loadSound('../_files/Damscray_01');\n sound2 = loadSound('../_files/beat.mp3');\n }\n\n function setup() {\n createCanvas(400,200);\n\n // create a 'master' gain to which we will connect both soundfiles\n gain3 = new p5.Gain();\n gain3.connect();\n\n // setup first sound for playing\n sound1.rate(1);\n sound1.loop();\n sound1.disconnect(); // diconnect from p5 output\n\n gain1 = new p5.Gain(); // setup a gain node\n gain1.setInput(sound1); // connect the first sound to its input\n gain1.connect(gain3); // connect its output to the 'master'\n\n sound2.rate(1);\n sound2.disconnect();\n sound2.loop();\n\n gain2 = new p5.Gain();\n gain2.setInput(sound2);\n gain2.connect(gain3);\n\n }\n\n function draw(){\n background(180);\n\n // calculate the horizontal distance beetween the mouse and the right of the screen\n var d = dist(mouseX,0,width,0);\n\n // map the horizontal position of the mouse to values useable for volume control of sound1\n var vol1 = map(mouseX,0,width,0,1);\n var vol2 = 1-vol1; // when sound1 is loud, sound2 is quiet and vice versa\n\n gain1.amp(vol1,0.5,0);\n gain2.amp(vol2,0.5,0);\n\n // map the vertical position of the mouse to values useable for 'master volume control'\n var vol3 = map(mouseY,0,height,0,1);\n gain3.amp(vol3,0.5,0);\n }\n</code></div>\n"
            ]
        },
        "p5.AudioVoice": {
            "name": "p5.AudioVoice",
            "shortname": "p5.AudioVoice",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 11638,
            "description": "<p>Base class for monophonic synthesizers. Any extensions of this class\nshould follow the API and implement the methods below in order to\nremain compatible with p5.PolySynth();</p>\n",
            "is_constructor": 1
        },
        "p5.MonoSynth": {
            "name": "p5.MonoSynth",
            "shortname": "p5.MonoSynth",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 11711,
            "description": "<p>An MonoSynth is used as a single voice for sound synthesis.\nThis is a class to be used in conjonction with the PolySynth\nclass. Custom synthetisers should be built inheriting from\nthis class.</p>\n",
            "is_constructor": 1,
            "example": [
                "\n<div><code>\nvar monosynth;\nvar x;\n\nfunction setup() {\n  monosynth = new p5.MonoSynth();\n  monosynth.loadPreset('simpleBass');\n  monosynth.play(45,1,x=0,1);\n  monosynth.play(49,1,x+=1,0.25);\n  monosynth.play(50,1,x+=0.25,0.25);\n  monosynth.play(49,1,x+=0.5,0.25);\n  monosynth.play(50,1,x+=0.25,0.25);\n}\n</code></div>"
            ]
        },
        "p5.PolySynth": {
            "name": "p5.PolySynth",
            "shortname": "p5.PolySynth",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 11943,
            "description": "<p>An AudioVoice is used as a single voice for sound synthesis.\nThe PolySynth class holds an array of AudioVoice, and deals\nwith voices allocations, with setting notes to be played, and\nparameters to be set.</p>\n",
            "is_constructor": 1,
            "params": [
                {
                    "name": "synthVoice",
                    "description": "<p>A monophonic synth voice inheriting\n                               the AudioVoice class. Defaults to p5.MonoSynth</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "polyValue",
                    "description": "<p>Number of voices, defaults to 8;</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar polysynth;\nfunction setup() {\n  polysynth = new p5.PolySynth();\n  polysynth.play(53,1,0,3);\n  polysynth.play(60,1,0,2.9);\n  polysynth.play(69,1,0,3);\n  polysynth.play(71,1,0,3);\n  polysynth.play(74,1,0,3);\n}\n</code></div>\n"
            ]
        },
        "p5.Distortion": {
            "name": "p5.Distortion",
            "shortname": "p5.Distortion",
            "classitems": [],
            "plugins": [],
            "extensions": [],
            "plugin_for": [],
            "extension_for": [],
            "module": "p5.sound",
            "submodule": "p5.sound",
            "namespace": "",
            "file": "lib/addons/p5.sound.js",
            "line": 12243,
            "description": "<p>A Distortion effect created with a Waveshaper Node,\nwith an approach adapted from\n<a href=\"http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion\">Kevin Ennis</a></p>\n<p>This class extends <a href = \"/reference/#/p5.Effect\">p5.Effect</a>.\nMethods <a href = \"/reference/#/p5.Effect/amp\">amp()</a>, <a href = \"/reference/#/p5.Effect/chain\">chain()</a>,\n<a href = \"/reference/#/p5.Effect/drywet\">drywet()</a>, <a href = \"/reference/#/p5.Effect/connect\">connect()</a>, and\n<a href = \"/reference/#/p5.Effect/disconnect\">disconnect()</a> are available.</p>\n",
            "extends": "p5.Effect",
            "is_constructor": 1,
            "params": [
                {
                    "name": "amount",
                    "description": "<p>Unbounded distortion amount.\n                               Normal values range from 0-1.</p>\n",
                    "type": "Number",
                    "optional": true,
                    "optdefault": "0.25"
                },
                {
                    "name": "oversample",
                    "description": "<p>&#39;none&#39;, &#39;2x&#39;, or &#39;4x&#39;.</p>\n",
                    "type": "String",
                    "optional": true,
                    "optdefault": "'none'"
                }
            ]
        }
    },
    "elements": {},
    "classitems": [
        {
            "file": "src/color/color_conversion.js",
            "line": 10,
            "description": "<p>Conversions adapted from <a href=\"http://www.easyrgb.com/math.html\">http://www.easyrgb.com/math.html</a>.</p>\n<p>In these functions, hue is always in the range [0,1); all other components\nare in the range [0,1]. &#39;Brightness&#39; and &#39;value&#39; are used interchangeably.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 20,
            "description": "<p>Convert an HSBA array to HSLA.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 46,
            "description": "<p>Convert an HSBA array to RGBA.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 101,
            "description": "<p>Convert an HSLA array to HSBA.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 124,
            "description": "<p>Convert an HSLA array to RGBA.</p>\n<p>We need to change basis from HSLA to something that can be more easily be\nprojected onto RGBA. We will choose hue and brightness as our first two\ncomponents, and pick a convenient third one (&#39;zest&#39;) so that we don&#39;t need\nto calculate formal HSBA saturation.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 188,
            "description": "<p>Convert an RGBA array to HSBA.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/color_conversion.js",
            "line": 227,
            "description": "<p>Convert an RGBA array to HSLA.</p>\n",
            "class": "p5",
            "module": "Conversion",
            "submodule": "Color Conversion"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 16,
            "description": "<p>Extracts the alpha value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "alpha",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the alpha value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoStroke();\nvar c = color(0, 126, 255, 102);\nfill(c);\nrect(15, 15, 35, 70);\nvar value = alpha(c); // Sets 'value' to 102\nfill(value);\nrect(50, 15, 35, 70);\n</code>\n</div>"
            ],
            "alt": "Left half of canvas light blue and right half light charcoal grey.\nLeft half of canvas light purple and right half a royal blue.\nLeft half of canvas salmon pink and the right half white.\nYellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left canvas, black ellipse in bottom right,both 80x80.\nBright fuschia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and light green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.\nblue rect on left and green on right, both with black outlines & 35x60.\nsalmon pink rect on left and black on right, both 35x60.\n4 rects, tan, brown, brownish purple and purple, with white outlines & 20x60.\nlight pastel green rect on left and dark grey rect on right, both 35x60.\nyellow rect on left and red rect on right, both with black outlines & 35x60.\ngrey canvas\ndeep pink rect on left and grey rect on right, both 35x60.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 61,
            "description": "<p>Extracts the blue value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "blue",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the blue value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nvar c = color(175, 100, 220); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nvar blueValue = blue(c); // Get blue in 'c'\nprint(blueValue); // Prints \"220.0\"\nfill(0, 0, blueValue); // Use 'blueValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
            ],
            "alt": "Left half of canvas light purple and right half a royal blue.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 91,
            "description": "<p>Extracts the HSB brightness value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "brightness",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the brightness value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nvar c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nvar value = brightness(c); // Sets 'value' to 255\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
            ],
            "alt": "Left half of canvas salmon pink and the right half white.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 121,
            "description": "<p>Creates colors for storing in variables of the color datatype. The\nparameters are interpreted as RGB or HSB values depending on the\ncurrent colorMode(). The default mode is RGB values from 0 to 255\nand, therefore, the function call color(255, 204, 0) will return a\nbright yellow color.\n<br><br>\nNote that if only one value is provided to color(), it will be interpreted\nas a grayscale value. Add a second value, and it will be used for alpha\ntransparency. When three values are specified, they are interpreted as\neither RGB or HSB values. Adding a fourth value applies alpha\ntransparency.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.</p>\n",
            "itemtype": "method",
            "name": "color",
            "return": {
                "description": "resulting color",
                "type": "p5.Color"
            },
            "example": [
                "\n<div>\n<code>\nvar c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(30, 20, 55, 55); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nvar c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nellipse(25, 25, 80, 80); // Draw left circle\n\n// Using only one value with color()\n// generates a grayscale value.\nc = color(65); // Update 'c' with grayscale value\nfill(c); // Use updated 'c' as fill color\nellipse(75, 75, 80, 80); // Draw right circle\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG & CSS colors may be used,\nvar c = color('magenta');\nfill(c); // Use 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(20, 20, 60, 60); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// as can hex color codes:\nnoStroke(); // Don't draw a stroke around shapes\nvar c = color('#0f0');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('#00ff00');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// RGB and RGBA color strings are also supported:\n// these all set to the same color (solid blue)\nvar c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('rgb(0,0,255)');\nfill(c); // Use 'c' as fill color\nrect(10, 10, 35, 35); // Draw rectangle\n\nc = color('rgb(0%, 0%, 100%)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 35, 35); // Draw rectangle\n\nc = color('rgba(0, 0, 255, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(10, 55, 35, 35); // Draw rectangle\n\nc = color('rgba(0%, 0%, 100%, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 55, 35, 35); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSL color is also supported and can be specified\n// by value\nvar c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsl(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsla(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSB color is also supported and can be specified\n// by value\nvar c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsb(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsba(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nvar c; // Declare color 'c'\nnoStroke(); // Don't draw a stroke around shapes\n\n// If no colorMode is specified, then the\n// default of RGB with scale of 0-255 is used.\nc = color(50, 55, 100); // Create a color for 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(0, 10, 45, 80); // Draw left rect\n\ncolorMode(HSB, 100); // Use HSB with scale of 0-100\nc = color(50, 55, 100); // Update 'c' with new color\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw right rect\n</code>\n</div>"
            ],
            "alt": "Yellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left of canvas, black ellipse in bottom right,both 80x80.\nBright fuschia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and lighter green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading",
            "overloads": [
                {
                    "line": 121,
                    "params": [
                        {
                            "name": "gray",
                            "description": "<p>number specifying value between white\n                                and black.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "alpha",
                            "description": "<p>alpha value relative to current color range\n                                (default is 0-255)</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "return": {
                        "description": "resulting color",
                        "type": "p5.Color"
                    }
                },
                {
                    "line": 280,
                    "params": [
                        {
                            "name": "v1",
                            "description": "<p>red or hue value relative to\n                                the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v2",
                            "description": "<p>green or saturation value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v3",
                            "description": "<p>blue or brightness value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "return": {
                        "description": "",
                        "type": "p5.Color"
                    }
                },
                {
                    "line": 292,
                    "params": [
                        {
                            "name": "value",
                            "description": "<p>a color string</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "return": {
                        "description": "",
                        "type": "p5.Color"
                    }
                },
                {
                    "line": 298,
                    "params": [
                        {
                            "name": "values",
                            "description": "<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n",
                            "type": "Number[]"
                        }
                    ],
                    "return": {
                        "description": "",
                        "type": "p5.Color"
                    }
                },
                {
                    "line": 304,
                    "params": [
                        {
                            "name": "color",
                            "description": "",
                            "type": "p5.Color"
                        }
                    ],
                    "return": {
                        "description": "",
                        "type": "p5.Color"
                    }
                }
            ]
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 320,
            "description": "<p>Extracts the green value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "green",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the green value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nvar c = color(20, 75, 200); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nvar greenValue = green(c); // Get green in 'c'\nprint(greenValue); // Print \"75.0\"\nfill(0, greenValue, 0); // Use 'greenValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
            ],
            "alt": "blue rect on left and green on right, both with black outlines & 35x60.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 351,
            "description": "<p>Extracts the hue value from a color or pixel array.</p>\n<p>Hue exists in both HSB and HSL. This function will return the\nHSB-normalized hue when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL-normalized hue otherwise. (The values will only be different if the\nmaximum hue setting for each system is different.)</p>\n",
            "itemtype": "method",
            "name": "hue",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the hue",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nvar c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nvar value = hue(c); // Sets 'value' to \"0\"\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
            ],
            "alt": "salmon pink rect on left and black on right, both 35x60.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 388,
            "description": "<p>Blends two colors to find a third color somewhere between them. The amt\nparameter is the amount to interpolate between the two values where 0.0\nequal to the first color, 0.1 is very near the first color, 0.5 is halfway\nin between, etc. An amount below 0 will be treated as 0. Likewise, amounts\nabove 1 will be capped at 1. This is different from the behavior of lerp(),\nbut necessary because otherwise numbers outside the range will produce\nstrange and unexpected colors.\n<br><br>\nThe way that colours are interpolated depends on the current color mode.</p>\n",
            "itemtype": "method",
            "name": "lerpColor",
            "params": [
                {
                    "name": "c1",
                    "description": "<p>interpolate from this color</p>\n",
                    "type": "p5.Color"
                },
                {
                    "name": "c2",
                    "description": "<p>interpolate to this color</p>\n",
                    "type": "p5.Color"
                },
                {
                    "name": "amt",
                    "description": "<p>number between 0 and 1</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "interpolated color",
                "type": "p5.Color"
            },
            "example": [
                "\n<div>\n<code>\ncolorMode(RGB);\nstroke(255);\nbackground(51);\nvar from = color(218, 165, 32);\nvar to = color(72, 61, 139);\ncolorMode(RGB); // Try changing to HSB.\nvar interA = lerpColor(from, to, 0.33);\nvar interB = lerpColor(from, to, 0.66);\nfill(from);\nrect(10, 20, 20, 60);\nfill(interA);\nrect(30, 20, 20, 60);\nfill(interB);\nrect(50, 20, 20, 60);\nfill(to);\nrect(70, 20, 20, 60);\n</code>\n</div>"
            ],
            "alt": "4 rects one tan, brown, brownish purple, purple, with white outlines & 20x60",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 485,
            "description": "<p>Extracts the HSL lightness value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "lightness",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the lightness",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoStroke();\ncolorMode(HSL);\nvar c = color(156, 100, 50, 1);\nfill(c);\nrect(15, 20, 35, 60);\nvar value = lightness(c); // Sets 'value' to 50\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
            ],
            "alt": "light pastel green rect on left and dark grey rect on right, both 35x60.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 515,
            "description": "<p>Extracts the red value from a color or pixel array.</p>\n",
            "itemtype": "method",
            "name": "red",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the red value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nvar c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nvar redValue = red(c); // Get red in 'c'\nprint(redValue); // Print \"255.0\"\nfill(redValue, 0, 0); // Use 'redValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>\n\n<div>\n<code>\ncolorMode(RGB, 255);\nvar c = color(127, 255, 0);\ncolorMode(RGB, 1);\nvar myColor = red(c);\nprint(myColor);\n</code>\n</div>"
            ],
            "alt": "yellow rect on left and red rect on right, both with black outlines and 35x60.\ngrey canvas",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/creating_reading.js",
            "line": 555,
            "description": "<p>Extracts the saturation value from a color or pixel array.</p>\n<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL saturation otherwise.</p>\n",
            "itemtype": "method",
            "name": "saturation",
            "params": [
                {
                    "name": "color",
                    "description": "<p>p5.Color object, color components,\n                                        or CSS color</p>\n",
                    "type": "p5.Color|Number[]|String"
                }
            ],
            "return": {
                "description": "the saturation value",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nvar c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nvar value = saturation(c); // Sets 'value' to 126\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
            ],
            "alt": "deep pink rect on left and grey rect on right, both 35x60.",
            "class": "p5",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 54,
            "itemtype": "method",
            "name": "toString",
            "return": {
                "description": "",
                "type": "String"
            },
            "example": [
                "\n<div>\n<code>\nvar myColor;\nfunction setup() {\n  createCanvas(200, 200);\n  stroke(255);\n  myColor = color(100, 100, 250);\n  fill(myColor);\n}\n\nfunction draw() {\n  text(myColor.toString(), 10, 10);\n}\n</code>\n</div>"
            ],
            "alt": "canvas with text representation of color",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 83,
            "itemtype": "method",
            "name": "setRed",
            "params": [
                {
                    "name": "red",
                    "description": "<p>the new red value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>"
            ],
            "alt": "canvas with gradually changing background color",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 110,
            "itemtype": "method",
            "name": "setGreen",
            "params": [
                {
                    "name": "green",
                    "description": "<p>the new green value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>"
            ],
            "alt": "canvas with gradually changing background color",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 137,
            "itemtype": "method",
            "name": "setBlue",
            "params": [
                {
                    "name": "blue",
                    "description": "<p>the new blue value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setBlue(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>"
            ],
            "alt": "canvas with gradually changing background color",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 164,
            "itemtype": "method",
            "name": "setAlpha",
            "params": [
                {
                    "name": "alpha",
                    "description": "<p>the new alpha value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar squareColor;\n\nfunction setup() {\n  ellipseMode(CORNERS);\n  strokeWeight(4);\n  squareColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  background(255);\n\n  noFill();\n  stroke(0);\n  ellipse(10, 10, width - 10, height - 10);\n\n  squareColor.setAlpha(128 + 128 * sin(millis() / 1000));\n  fill(squareColor);\n  noStroke();\n  rect(13, 13, width - 26, height - 26);\n}\n</code>\n</div>"
            ],
            "alt": "circle behind a square with gradually changing opacity",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 242,
            "description": "<p>Hue is the same in HSB and HSL, but the maximum value may be different.\nThis function will return the HSB-normalized saturation when supplied with\nan HSB color object, but will default to the HSL-normalized saturation\notherwise.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 273,
            "description": "<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object, but will default\nto the HSL saturation otherwise.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 292,
            "description": "<p>CSS named colors.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 445,
            "description": "<p>These regular expressions are used to build up the patterns for matching\nviable CSS color strings: fragmenting the regexes in this way increases the\nlegibility and comprehensibility of the code.</p>\n<p>Note that RGB values of .9 are not parsed by IE, but are supported here for\ncolor string consistency.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 458,
            "description": "<p>Full color string patterns. The capture groups are necessary.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/p5.Color.js",
            "line": 812,
            "description": "<p>For HSB and HSL, interpret the gray level as a brightness/lightness\nvalue (they are equivalent when chroma is zero). For RGB, normalize the\ngray level according to the blue maximum.</p>\n",
            "class": "p5.Color",
            "module": "Color",
            "submodule": "Creating & Reading"
        },
        {
            "file": "src/color/setting.js",
            "line": 15,
            "description": "<p>The background() function sets the color used for the background of the\np5.js canvas. The default background is light gray. This function is\ntypically used within draw() to clear the display window at the beginning\nof each frame, but it can be used inside setup() to set the background on\nthe first frame of animation or if the background need only be set once.\n<br><br>\nThe color is either specified in terms of the RGB, HSB, or HSL color\ndepending on the current colorMode. (The default color space is RGB, with\neach value in the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA p5.Color object can also be provided to set the background color.\n<br><br>\nA p5.Image can also be provided to set the background iamge.</p>\n",
            "itemtype": "method",
            "name": "background",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Grayscale integer value\nbackground(51);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nbackground(255, 204, 0);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nbackground(255, 204, 100);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nbackground('red');\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nbackground('#fae');\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nbackground('#222222');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nbackground('rgb(0,255,0)');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nbackground('rgba(0,255,0, 0.25)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nbackground('rgb(100%,0%,10%)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nbackground('rgba(100%,0%,100%,0.5)');\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nbackground(color(0, 0, 255));\n</code>\n</div>"
            ],
            "alt": "canvas with darkest charcoal grey background.\ncanvas with yellow background.\ncanvas with royal blue background.\ncanvas with red background.\ncanvas with pink background.\ncanvas with black background.\ncanvas with bright green background.\ncanvas with soft green background.\ncanvas with red background.\ncanvas with light purple background.\ncanvas with blue background.",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting",
            "overloads": [
                {
                    "line": 15,
                    "params": [
                        {
                            "name": "color",
                            "description": "<p>any value created by the color() function</p>\n",
                            "type": "p5.Color"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 131,
                    "params": [
                        {
                            "name": "colorstring",
                            "description": "<p>color string, possible formats include: integer\n                        rgb() or rgba(), percentage rgb() or rgba(),\n                        3-digit hex, 6-digit hex</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "a",
                            "description": "<p>opacity of the background relative to current\n                            color range (default is 0-255)</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 141,
                    "params": [
                        {
                            "name": "gray",
                            "description": "<p>specifies a value between white and black</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "a",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 148,
                    "params": [
                        {
                            "name": "v1",
                            "description": "<p>red or hue value (depending on the current color\n                       mode)</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v2",
                            "description": "<p>green or saturation value (depending on the current\n                       color mode)</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v3",
                            "description": "<p>blue or brightness value (depending on the current\n                       color mode)</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "a",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 160,
                    "params": [
                        {
                            "name": "values",
                            "description": "<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n",
                            "type": "Number[]"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 167,
                    "params": [
                        {
                            "name": "image",
                            "description": "<p>image created with loadImage() or createImage(),\n                            to set as background\n                            (must be same size as the sketch window)</p>\n",
                            "type": "p5.Image"
                        },
                        {
                            "name": "a",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/color/setting.js",
            "line": 185,
            "description": "<p>Clears the pixels within a buffer. This function only works on p5.Canvas\nobjects created with the createCanvas() function; it won&#39;t work with the\nmain display window. Unlike the main graphics context, pixels in\nadditional graphics areas created with createGraphics() can be entirely\nor partially transparent. This function clears everything to make all of\nthe pixels 100% transparent.</p>\n",
            "itemtype": "method",
            "name": "clear",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Clear the screen on mouse press.\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  ellipse(mouseX, mouseY, 20, 20);\n}\n\nfunction mousePressed() {\n  clear();\n}\n</code>\n</div>"
            ],
            "alt": "20x20 white ellipses are continually drawn at mouse x and y coordinates.",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting"
        },
        {
            "file": "src/color/setting.js",
            "line": 223,
            "description": "<p>colorMode() changes the way p5.js interprets color data. By default, the\nparameters for fill(), stroke(), background(), and color() are defined by\nvalues between 0 and 255 using the RGB color model. This is equivalent to\nsetting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB\nsystem instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You\ncan also use HSL.\n<br><br>\nNote: existing color objects remember the mode that they were created in,\nso you can change modes as you like without affecting their appearance.</p>\n",
            "itemtype": "method",
            "name": "colorMode",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoStroke();\ncolorMode(RGB, 100);\nfor (var i = 0; i < 100; i++) {\n  for (var j = 0; j < 100; j++) {\n    stroke(i, j, 0);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 100);\nfor (var i = 0; i < 100; i++) {\n  for (var j = 0; j < 100; j++) {\n    stroke(i, j, 100);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\ncolorMode(RGB, 255);\nvar c = color(127, 255, 0);\n\ncolorMode(RGB, 1);\nvar myColor = c._getRed();\ntext(myColor, 10, 10, 80, 80);\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\ncolorMode(RGB, 255, 255, 255, 1);\nbackground(255);\n\nstrokeWeight(4);\nstroke(255, 0, 10, 0.3);\nellipse(40, 40, 50, 50);\nellipse(50, 50, 40, 40);\n</code>\n</div>"
            ],
            "alt": "Green to red gradient from bottom L to top R. shading originates from top left.\nRainbow gradient from left to right. Brightness increasing to white at top.\nunknown image.\n50x50 ellipse at middle L & 40x40 ellipse at center. Transluscent pink outlines.",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting",
            "overloads": [
                {
                    "line": 223,
                    "params": [
                        {
                            "name": "mode",
                            "description": "<p>either RGB, HSB or HSL, corresponding to\n                         Red/Green/Blue and Hue/Saturation/Brightness\n                         (or Lightness)</p>\n",
                            "type": "Constant"
                        },
                        {
                            "name": "max",
                            "description": "<p>range for all values</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 300,
                    "params": [
                        {
                            "name": "mode",
                            "description": "",
                            "type": "Constant"
                        },
                        {
                            "name": "max1",
                            "description": "<p>range for the red or hue depending on the\n                             current color mode</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "max2",
                            "description": "<p>range for the green or saturation depending\n                             on the current color mode</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "max3",
                            "description": "<p>range for the blue or brightness/lighntess\n                             depending on the current color mode</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "maxA",
                            "description": "<p>range for the alpha</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/color/setting.js",
            "line": 344,
            "description": "<p>Sets the color used to fill shapes. For example, if you run\nfill(204, 102, 0), all subsequent shapes will be filled with orange. This\ncolor is either specified in terms of the RGB or HSB color depending on\nthe current colorMode(). (The default color space is RGB, with each value\nin the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA p5 Color object can also be provided to set the fill color.</p>\n",
            "itemtype": "method",
            "name": "fill",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Grayscale integer value\nfill(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nfill(255, 204, 0);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nfill(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nfill('red');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nfill('#fae');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nfill('#222222');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nfill('rgb(0,255,0)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nfill('rgba(0,255,0, 0.25)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nfill('rgb(100%,0%,10%)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nfill('rgba(100%,0%,100%,0.5)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nfill(color(0, 0, 255));\nrect(20, 20, 60, 60);\n</code>\n</div>"
            ],
            "alt": "60x60 dark charcoal grey rect with black outline in center of canvas.\n60x60 yellow rect with black outline in center of canvas.\n60x60 royal blue rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 pink rect with black outline in center of canvas.\n60x60 black rect with black outline in center of canvas.\n60x60 light green rect with black outline in center of canvas.\n60x60 soft green rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 dark fushcia rect with black outline in center of canvas.\n60x60 blue rect with black outline in center of canvas.",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting",
            "overloads": [
                {
                    "line": 344,
                    "params": [
                        {
                            "name": "v1",
                            "description": "<p>red or hue value relative to\n                                the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v2",
                            "description": "<p>green or saturation value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v3",
                            "description": "<p>blue or brightness value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 469,
                    "params": [
                        {
                            "name": "value",
                            "description": "<p>a color string</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 476,
                    "params": [
                        {
                            "name": "values",
                            "description": "<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n",
                            "type": "Number[]"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 483,
                    "params": [
                        {
                            "name": "color",
                            "description": "<p>the fill color</p>\n",
                            "type": "p5.Color"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/color/setting.js",
            "line": 495,
            "description": "<p>Disables filling geometry. If both noStroke() and noFill() are called,\nnothing will be drawn to the screen.</p>\n",
            "itemtype": "method",
            "name": "noFill",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nrect(15, 10, 55, 55);\nnoFill();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noFill();\n  stroke(100, 100, 240);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
            ],
            "alt": "white rect top middle and noFill rect center. Both 60x60 with black outlines.\nblack canvas with purple cube wireframe spinning",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting"
        },
        {
            "file": "src/color/setting.js",
            "line": 536,
            "description": "<p>Disables drawing the stroke (outline). If both noStroke() and noFill()\nare called, nothing will be drawn to the screen.</p>\n",
            "itemtype": "method",
            "name": "noStroke",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoStroke();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noStroke();\n  fill(240, 150, 150);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
            ],
            "alt": "60x60 white rect at center. no outline.\nblack canvas with pink cube spinning",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting"
        },
        {
            "file": "src/color/setting.js",
            "line": 576,
            "description": "<p>Sets the color used to draw lines and borders around shapes. This color\nis either specified in terms of the RGB or HSB color depending on the\ncurrent colorMode() (the default color space is RGB, with each value in\nthe range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.\n<br><br>\nA p5 Color object can also be provided to set the stroke color.</p>\n",
            "itemtype": "method",
            "name": "stroke",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Grayscale integer value\nstrokeWeight(4);\nstroke(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nstroke(255, 204, 0);\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nstrokeWeight(4);\nstroke(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nstroke('red');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nstroke('#fae');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nstroke('#222222');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nstroke('rgb(0,255,0)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nstroke('rgba(0,255,0,0.25)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nstroke('rgb(100%,0%,10%)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nstroke('rgba(100%,0%,100%,0.5)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nstroke(color(0, 0, 255));\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>"
            ],
            "alt": "60x60 white rect at center. Dark charcoal grey outline.\n60x60 white rect at center. Yellow outline.\n60x60 white rect at center. Royal blue outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Pink outline.\n60x60 white rect at center. Black outline.\n60x60 white rect at center. Bright green outline.\n60x60 white rect at center. Soft green outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Dark fushcia outline.\n60x60 white rect at center. Blue outline.",
            "class": "p5",
            "module": "Color",
            "submodule": "Setting",
            "overloads": [
                {
                    "line": 576,
                    "params": [
                        {
                            "name": "v1",
                            "description": "<p>red or hue value relative to\n                                the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v2",
                            "description": "<p>green or saturation value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v3",
                            "description": "<p>blue or brightness value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 715,
                    "params": [
                        {
                            "name": "value",
                            "description": "<p>a color string</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 722,
                    "params": [
                        {
                            "name": "values",
                            "description": "<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n",
                            "type": "Number[]"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 729,
                    "params": [
                        {
                            "name": "color",
                            "description": "<p>the stroke color</p>\n",
                            "type": "p5.Color"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 16,
            "description": "<p>Draw an arc to the screen. If called with only x, y, w, h, start, and\nstop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc\nwill be filled like an open semi-circle (OPEN) , a closed semi-circle (CHORD), or as a closed pie segment (PIE). The\norigin may be changed with the ellipseMode() function.<br><br>\nNote that drawing a full circle (ex: 0 to TWO_PI) will appear blank\nbecause 0 and TWO_PI are the same position on the unit circle. The\nbest way to handle this is by using the ellipse() function instead\nto create a closed ellipse, and to use the arc() function\nonly to draw parts of an ellipse.</p>\n",
            "itemtype": "method",
            "name": "arc",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the arc&#39;s ellipse</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the arc&#39;s ellipse</p>\n",
                    "type": "Number"
                },
                {
                    "name": "w",
                    "description": "<p>width of the arc&#39;s ellipse by default</p>\n",
                    "type": "Number"
                },
                {
                    "name": "h",
                    "description": "<p>height of the arc&#39;s ellipse by default</p>\n",
                    "type": "Number"
                },
                {
                    "name": "start",
                    "description": "<p>angle to start the arc, specified in radians</p>\n",
                    "type": "Number"
                },
                {
                    "name": "stop",
                    "description": "<p>angle to stop the arc, specified in radians</p>\n",
                    "type": "Number"
                },
                {
                    "name": "mode",
                    "description": "<p>optional parameter to determine the way of drawing\n                        the arc. either CHORD, PIE or OPEN</p>\n",
                    "type": "Constant",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\narc(50, 55, 50, 50, 0, HALF_PI);\nnoFill();\narc(50, 55, 60, 60, HALF_PI, PI);\narc(50, 55, 70, 70, PI, PI + QUARTER_PI);\narc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);\n</code>\n</div>"
            ],
            "alt": "shattered outline of an ellipse with a quarter of a white circle bottom-right.\nwhite ellipse with top right quarter missing.\nwhite ellipse with black outline with top right missing.\nwhite ellipse with top right missing with black outline around shape.\nwhite ellipse with top right quarter missing with black outline around the shape.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives"
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 134,
            "description": "<p>Draws an ellipse (oval) to the screen. An ellipse with equal width and\nheight is a circle. By default, the first two parameters set the location,\nand the third and fourth parameters set the shape&#39;s width and height. If\nno height is specified, the value of width is used for both the width and\nheight. If a negative height or width is specified, the absolute value is taken.\nThe origin may be changed with the ellipseMode() function.</p>\n",
            "itemtype": "method",
            "name": "ellipse",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nellipse(56, 46, 55, 55);\n</code>\n</div>"
            ],
            "alt": "white ellipse with black outline in middle-right of canvas that is 55x55.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives",
            "overloads": [
                {
                    "line": 134,
                    "params": [
                        {
                            "name": "x",
                            "description": "<p>x-coordinate of the ellipse.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "<p>y-coordinate of the ellipse.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "w",
                            "description": "<p>width of the ellipse.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "h",
                            "description": "<p>height of the ellipse.</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 159,
                    "params": [
                        {
                            "name": "x",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "w",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "h",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "detailX",
                            "description": "<p>number of segments in the x-direction</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "detailY",
                            "description": "<p>number of segments in the y-direction</p>\n",
                            "type": "Integer",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 190,
            "description": "<p>Draws a line (a direct path between two points) to the screen. The version\nof line() with four parameters draws the line in 2D. To color a line, use\nthe stroke() function. A line cannot be filled, therefore the fill()\nfunction will not affect the color of a line. 2D lines are drawn with a\nwidth of one pixel by default, but this can be changed with the\nstrokeWeight() function.</p>\n",
            "itemtype": "method",
            "name": "line",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nline(30, 20, 85, 75);\n</code>\n</div>\n\n<div>\n<code>\nline(30, 20, 85, 20);\nstroke(126);\nline(85, 20, 85, 75);\nstroke(255);\nline(85, 75, 30, 75);\n</code>\n</div>"
            ],
            "alt": "line 78 pixels long running from mid-top to bottom-right of canvas.\n3 lines of various stroke sizes. Form top, bottom and right sides of a square.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives",
            "overloads": [
                {
                    "line": 190,
                    "params": [
                        {
                            "name": "x1",
                            "description": "<p>the x-coordinate of the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "<p>the y-coordinate of the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "<p>the x-coordinate of the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "<p>the y-coordinate of the second point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 226,
                    "params": [
                        {
                            "name": "x1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z1",
                            "description": "<p>the z-coordinate of the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z2",
                            "description": "<p>the z-coordinate of the second point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 246,
            "description": "<p>Draws a point, a coordinate in space at the dimension of one pixel.\nThe first parameter is the horizontal value for the point, the second\nvalue is the vertical value for the point. The color of the point is\ndetermined by the current stroke.</p>\n",
            "itemtype": "method",
            "name": "point",
            "params": [
                {
                    "name": "x",
                    "description": "<p>the x-coordinate</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>the y-coordinate</p>\n",
                    "type": "Number"
                },
                {
                    "name": "z",
                    "description": "<p>the z-coordinate (for WEBGL mode)</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\npoint(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);\n</code>\n</div>"
            ],
            "alt": "4 points centered in the middle-right of the canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives"
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 281,
            "description": "<p>Draw a quad. A quad is a quadrilateral, a four sided polygon. It is\nsimilar to a rectangle, but the angles between its edges are not\nconstrained to ninety degrees. The first pair of parameters (x1,y1)\nsets the first vertex and the subsequent pairs should proceed\nclockwise or counter-clockwise around the defined shape.</p>\n",
            "itemtype": "method",
            "name": "quad",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nquad(38, 31, 86, 20, 69, 63, 30, 76);\n</code>\n</div>"
            ],
            "alt": "irregular white quadrilateral shape with black outline mid-right of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives",
            "overloads": [
                {
                    "line": 281,
                    "params": [
                        {
                            "name": "x1",
                            "description": "<p>the x-coordinate of the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "<p>the y-coordinate of the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "<p>the x-coordinate of the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "<p>the y-coordinate of the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "<p>the x-coordinate of the third point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "<p>the y-coordinate of the third point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "<p>the x-coordinate of the fourth point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "<p>the y-coordinate of the fourth point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 309,
                    "params": [
                        {
                            "name": "x1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z4",
                            "description": "",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 335,
            "description": "<p>Draws a rectangle to the screen. A rectangle is a four-sided shape with\nevery angle at ninety degrees. By default, the first two parameters set\nthe location of the upper-left corner, the third sets the width, and the\nfourth sets the height. The way these parameters are interpreted, however,\nmay be changed with the rectMode() function.\n<br><br>\nThe fifth, sixth, seventh and eighth parameters, if specified,\ndetermine corner radius for the top-right, top-left, lower-right and\nlower-left corners, respectively. An omitted corner radius parameter is set\nto the value of the previously specified radius value in the parameter list.</p>\n",
            "itemtype": "method",
            "name": "rect",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Draw a rectangle at location (30, 20) with a width and height of 55.\nrect(30, 20, 55, 55);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners, each having a radius of 20.\nrect(30, 20, 55, 55, 20);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nrect(30, 20, 55, 55, 20, 15, 10, 5);\n</code>\n</div>"
            ],
            "alt": "55x55 white rect with black outline in mid-right of canvas.\n55x55 white rect with black outline and rounded edges in mid-right of canvas.\n55x55 white rect with black outline and rounded edges of different radii.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives",
            "overloads": [
                {
                    "line": 335,
                    "params": [
                        {
                            "name": "x",
                            "description": "<p>x-coordinate of the rectangle.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "<p>y-coordinate of the rectangle.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "w",
                            "description": "<p>width of the rectangle.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "h",
                            "description": "<p>height of the rectangle.</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "tl",
                            "description": "<p>optional radius of top-left corner.</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "tr",
                            "description": "<p>optional radius of top-right corner.</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "br",
                            "description": "<p>optional radius of bottom-right corner.</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "bl",
                            "description": "<p>optional radius of bottom-left corner.</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 385,
                    "params": [
                        {
                            "name": "x",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "w",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "h",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "detailX",
                            "description": "<p>number of segments in the x-direction</p>\n",
                            "type": "Integer",
                            "optional": true
                        },
                        {
                            "name": "detailY",
                            "description": "<p>number of segments in the y-direction</p>\n",
                            "type": "Integer",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/2d_primitives.js",
            "line": 406,
            "description": "<p>A triangle is a plane created by connecting three points. The first two\narguments specify the first point, the middle two arguments specify the\nsecond point, and the last two arguments specify the third point.</p>\n",
            "itemtype": "method",
            "name": "triangle",
            "params": [
                {
                    "name": "x1",
                    "description": "<p>x-coordinate of the first point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y1",
                    "description": "<p>y-coordinate of the first point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "x2",
                    "description": "<p>x-coordinate of the second point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y2",
                    "description": "<p>y-coordinate of the second point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "x3",
                    "description": "<p>x-coordinate of the third point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y3",
                    "description": "<p>y-coordinate of the third point</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntriangle(30, 75, 58, 20, 86, 75);\n</code>\n</div>"
            ],
            "alt": "white triangle with black outline in mid-right of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "2D Primitives"
        },
        {
            "file": "src/core/attributes.js",
            "line": 14,
            "description": "<p>Modifies the location from which ellipses are drawn by changing the way\nin which parameters given to ellipse() are interpreted.\n<br><br>\nThe default mode is ellipseMode(CENTER), which interprets the first two\nparameters of ellipse() as the shape&#39;s center point, while the third and\nfourth parameters are its width and height.\n<br><br>\nellipseMode(RADIUS) also uses the first two parameters of ellipse() as\nthe shape&#39;s center point, but uses the third and fourth parameters to\nspecify half of the shapes&#39;s width and height.\n<br><br>\nellipseMode(CORNER) interprets the first two parameters of ellipse() as\nthe upper-left corner of the shape, while the third and fourth parameters\nare its width and height.\n<br><br>\nellipseMode(CORNERS) interprets the first two parameters of ellipse() as\nthe location of one corner of the ellipse&#39;s bounding box, and the third\nand fourth parameters as the location of the opposite corner.\n<br><br>\nThe parameter must be written in ALL CAPS because Javascript is a\ncase-sensitive language.</p>\n",
            "itemtype": "method",
            "name": "ellipseMode",
            "params": [
                {
                    "name": "mode",
                    "description": "<p>either CENTER, RADIUS, CORNER, or CORNERS</p>\n",
                    "type": "Constant"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nellipseMode(RADIUS); // Set ellipseMode to RADIUS\nfill(255); // Set fill to white\nellipse(50, 50, 30, 30); // Draw white ellipse using RADIUS mode\n\nellipseMode(CENTER); // Set ellipseMode to CENTER\nfill(100); // Set fill to gray\nellipse(50, 50, 30, 30); // Draw gray ellipse using CENTER mode\n</code>\n</div>\n\n<div>\n<code>\nellipseMode(CORNER); // Set ellipseMode is CORNER\nfill(255); // Set fill to white\nellipse(25, 25, 50, 50); // Draw white ellipse using CORNER mode\n\nellipseMode(CORNERS); // Set ellipseMode to CORNERS\nfill(100); // Set fill to gray\nellipse(25, 25, 50, 50); // Draw gray ellipse using CORNERS mode\n</code>\n</div>"
            ],
            "alt": "60x60 white ellipse and 30x30 grey ellipse with black outlines at center.\n60x60 white ellipse @center and 30x30 grey ellipse top-right, black outlines.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 83,
            "description": "<p>Draws all geometry with jagged (aliased) edges. Note that smooth() is\nactive by default, so it is necessary to call noSmooth() to disable\nsmoothing of geometry, images, and fonts.</p>\n",
            "itemtype": "method",
            "name": "noSmooth",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbackground(0);\nnoStroke();\nsmooth();\nellipse(30, 48, 36, 36);\nnoSmooth();\nellipse(70, 48, 36, 36);\n</code>\n</div>"
            ],
            "alt": "2 pixelated 36x36 white ellipses to left & right of center, black background",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 111,
            "description": "<p>Modifies the location from which rectangles are drawn by changing the way\nin which parameters given to rect() are interpreted.\n<br><br>\nThe default mode is rectMode(CORNER), which interprets the first two\nparameters of rect() as the upper-left corner of the shape, while the\nthird and fourth parameters are its width and height.\n<br><br>\nrectMode(CORNERS) interprets the first two parameters of rect() as the\nlocation of one corner, and the third and fourth parameters as the\nlocation of the opposite corner.\n<br><br>\nrectMode(CENTER) interprets the first two parameters of rect() as the\nshape&#39;s center point, while the third and fourth parameters are its\nwidth and height.\n<br><br>\nrectMode(RADIUS) also uses the first two parameters of rect() as the\nshape&#39;s center point, but uses the third and fourth parameters to specify\nhalf of the shapes&#39;s width and height.\n<br><br>\nThe parameter must be written in ALL CAPS because Javascript is a\ncase-sensitive language.</p>\n",
            "itemtype": "method",
            "name": "rectMode",
            "params": [
                {
                    "name": "mode",
                    "description": "<p>either CORNER, CORNERS, CENTER, or RADIUS</p>\n",
                    "type": "Constant"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nrectMode(CORNER); // Default rectMode is CORNER\nfill(255); // Set fill to white\nrect(25, 25, 50, 50); // Draw white rect using CORNER mode\n\nrectMode(CORNERS); // Set rectMode to CORNERS\nfill(100); // Set fill to gray\nrect(25, 25, 50, 50); // Draw gray rect using CORNERS mode\n</code>\n</div>\n\n<div>\n<code>\nrectMode(RADIUS); // Set rectMode to RADIUS\nfill(255); // Set fill to white\nrect(50, 50, 30, 30); // Draw white rect using RADIUS mode\n\nrectMode(CENTER); // Set rectMode to CENTER\nfill(100); // Set fill to gray\nrect(50, 50, 30, 30); // Draw gray rect using CENTER mode\n</code>\n</div>"
            ],
            "alt": "50x50 white rect at center and 25x25 grey rect in the top left of the other.\n50x50 white rect at center and 25x25 grey rect in the center of the other.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 180,
            "description": "<p>Draws all geometry with smooth (anti-aliased) edges. smooth() will also\nimprove image quality of resized images. Note that smooth() is active by\ndefault; noSmooth() can be used to disable smoothing of geometry,\nimages, and fonts.</p>\n",
            "itemtype": "method",
            "name": "smooth",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbackground(0);\nnoStroke();\nsmooth();\nellipse(30, 48, 36, 36);\nnoSmooth();\nellipse(70, 48, 36, 36);\n</code>\n</div>"
            ],
            "alt": "2 pixelated 36x36 white ellipses one left one right of center. On black.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 209,
            "description": "<p>Sets the style for rendering line endings. These ends are either squared,\nextended, or rounded, each of which specified with the corresponding\nparameters: SQUARE, PROJECT, and ROUND. The default cap is ROUND.</p>\n",
            "itemtype": "method",
            "name": "strokeCap",
            "params": [
                {
                    "name": "cap",
                    "description": "<p>either SQUARE, PROJECT, or ROUND</p>\n",
                    "type": "Constant"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nstrokeWeight(12.0);\nstrokeCap(ROUND);\nline(20, 30, 80, 30);\nstrokeCap(SQUARE);\nline(20, 50, 80, 50);\nstrokeCap(PROJECT);\nline(20, 70, 80, 70);\n</code>\n</div>"
            ],
            "alt": "3 lines. Top line: rounded ends, mid: squared, bottom:longer squared ends.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 246,
            "description": "<p>Sets the style of the joints which connect line segments. These joints\nare either mitered, beveled, or rounded and specified with the\ncorresponding parameters MITER, BEVEL, and ROUND. The default joint is\nMITER.</p>\n",
            "itemtype": "method",
            "name": "strokeJoin",
            "params": [
                {
                    "name": "join",
                    "description": "<p>either MITER, BEVEL, ROUND</p>\n",
                    "type": "Constant"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(MITER);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(BEVEL);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(ROUND);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>"
            ],
            "alt": "Right-facing arrowhead shape with pointed tip in center of canvas.\nRight-facing arrowhead shape with flat tip in center of canvas.\nRight-facing arrowhead shape with rounded tip in center of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/attributes.js",
            "line": 313,
            "description": "<p>Sets the width of the stroke used for lines, points, and the border\naround shapes. All widths are set in units of pixels.</p>\n",
            "itemtype": "method",
            "name": "strokeWeight",
            "params": [
                {
                    "name": "weight",
                    "description": "<p>the weight (in pixels) of the stroke</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nstrokeWeight(1); // Default\nline(20, 20, 80, 20);\nstrokeWeight(4); // Thicker\nline(20, 40, 80, 40);\nstrokeWeight(10); // Beastly\nline(20, 70, 80, 70);\n</code>\n</div>"
            ],
            "alt": "3 horizontal black lines. Top line: thin, mid: medium, bottom:thick.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Attributes"
        },
        {
            "file": "src/core/canvas.js",
            "line": 1,
            "requires": [
                "constants"
            ],
            "class": "p5",
            "module": "Shape"
        },
        {
            "file": "src/core/constants.js",
            "line": 13,
            "itemtype": "property",
            "name": "P2D",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 18,
            "itemtype": "property",
            "name": "WEBGL",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 34,
            "description": "<p>HALF_PI is a mathematical constant with the value\n1.57079632679489661923. It is half the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions sin() and cos().</p>\n",
            "itemtype": "property",
            "name": "HALF_PI",
            "type": "Number",
            "final": 1,
            "example": [
                "\n<div><code>\narc(50, 50, 80, 80, 0, HALF_PI);\n</code></div>"
            ],
            "alt": "80x80 white quarter-circle with curve toward bottom right of canvas.",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 53,
            "description": "<p>PI is a mathematical constant with the value\n3.14159265358979323846. It is the ratio of the circumference\nof a circle to its diameter. It is useful in combination with\nthe trigonometric functions sin() and cos().</p>\n",
            "itemtype": "property",
            "name": "PI",
            "type": "Number",
            "final": 1,
            "example": [
                "\n<div><code>\narc(50, 50, 80, 80, 0, PI);\n</code></div>"
            ],
            "alt": "white half-circle with curve toward bottom of canvas.",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 72,
            "description": "<p>QUARTER_PI is a mathematical constant with the value 0.7853982.\nIt is one quarter the ratio of the circumference of a circle to\nits diameter. It is useful in combination with the trigonometric\nfunctions sin() and cos().</p>\n",
            "itemtype": "property",
            "name": "QUARTER_PI",
            "type": "Number",
            "final": 1,
            "example": [
                "\n<div><code>\narc(50, 50, 80, 80, 0, QUARTER_PI);\n</code></div>"
            ],
            "alt": "white eighth-circle rotated about 40 degrees with curve bottom right canvas.",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 91,
            "description": "<p>TAU is an alias for TWO_PI, a mathematical constant with the\nvalue 6.28318530717958647693. It is twice the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions sin() and cos().</p>\n",
            "itemtype": "property",
            "name": "TAU",
            "type": "Number",
            "final": 1,
            "example": [
                "\n<div><code>\narc(50, 50, 80, 80, 0, TAU);\n</code></div>"
            ],
            "alt": "80x80 white ellipse shape in center of canvas.",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 110,
            "description": "<p>TWO_PI is a mathematical constant with the value\n6.28318530717958647693. It is twice the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions sin() and cos().</p>\n",
            "itemtype": "property",
            "name": "TWO_PI",
            "type": "Number",
            "final": 1,
            "example": [
                "\n<div><code>\narc(50, 50, 80, 80, 0, TWO_PI);\n</code></div>"
            ],
            "alt": "80x80 white ellipse shape in center of canvas.",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 129,
            "description": "<p>Constant to be used with angleMode() function, to set the mode which\np5.js interprates and calculates angles (either DEGREES or RADIANS).</p>\n",
            "itemtype": "property",
            "name": "DEGREES",
            "type": "String",
            "final": 1,
            "example": [
                "\n<div class='norender'><code>\nfunction setup() {\n  angleMode(DEGREES);\n}\n</code></div>"
            ],
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 143,
            "description": "<p>Constant to be used with angleMode() function, to set the mode which\np5.js interprates and calculates angles (either RADIANS or DEGREES).</p>\n",
            "itemtype": "property",
            "name": "RADIANS",
            "type": "String",
            "final": 1,
            "example": [
                "\n<div class='norender'><code>\nfunction setup() {\n  angleMode(RADIANS);\n}\n</code></div>"
            ],
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 161,
            "itemtype": "property",
            "name": "CORNER",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 166,
            "itemtype": "property",
            "name": "CORNERS",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 171,
            "itemtype": "property",
            "name": "RADIUS",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 176,
            "itemtype": "property",
            "name": "RIGHT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 181,
            "itemtype": "property",
            "name": "LEFT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 186,
            "itemtype": "property",
            "name": "CENTER",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 191,
            "itemtype": "property",
            "name": "TOP",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 196,
            "itemtype": "property",
            "name": "BOTTOM",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 201,
            "itemtype": "property",
            "name": "BASELINE",
            "type": "String",
            "final": 1,
            "default": "alphabetic",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 207,
            "itemtype": "property",
            "name": "POINTS",
            "type": "Number",
            "final": 1,
            "default": "0x0000",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 213,
            "itemtype": "property",
            "name": "LINES",
            "type": "Number",
            "final": 1,
            "default": "0x0001",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 219,
            "itemtype": "property",
            "name": "LINE_STRIP",
            "type": "Number",
            "final": 1,
            "default": "0x0003",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 225,
            "itemtype": "property",
            "name": "LINE_LOOP",
            "type": "Number",
            "final": 1,
            "default": "0x0002",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 231,
            "itemtype": "property",
            "name": "TRIANGLES",
            "type": "Number",
            "final": 1,
            "default": "0x0004",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 237,
            "itemtype": "property",
            "name": "TRIANGLE_FAN",
            "type": "Number",
            "final": 1,
            "default": "0x0006",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 243,
            "itemtype": "property",
            "name": "TRIANGLE_STRIP",
            "type": "Number",
            "final": 1,
            "default": "0x0005",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 249,
            "itemtype": "property",
            "name": "QUADS",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 254,
            "itemtype": "property",
            "name": "QUAD_STRIP",
            "type": "String",
            "final": 1,
            "default": "quad_strip",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 260,
            "itemtype": "property",
            "name": "CLOSE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 265,
            "itemtype": "property",
            "name": "OPEN",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 270,
            "itemtype": "property",
            "name": "CHORD",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 275,
            "itemtype": "property",
            "name": "PIE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 280,
            "itemtype": "property",
            "name": "PROJECT",
            "type": "String",
            "final": 1,
            "default": "square",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 286,
            "itemtype": "property",
            "name": "SQUARE",
            "type": "String",
            "final": 1,
            "default": "butt",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 292,
            "itemtype": "property",
            "name": "ROUND",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 297,
            "itemtype": "property",
            "name": "BEVEL",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 302,
            "itemtype": "property",
            "name": "MITER",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 309,
            "itemtype": "property",
            "name": "RGB",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 314,
            "itemtype": "property",
            "name": "HSB",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 319,
            "itemtype": "property",
            "name": "HSL",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 345,
            "itemtype": "property",
            "name": "BLEND",
            "type": "String",
            "final": 1,
            "default": "source-over",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 351,
            "itemtype": "property",
            "name": "ADD",
            "type": "String",
            "final": 1,
            "default": "lighter",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 359,
            "itemtype": "property",
            "name": "DARKEST",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 364,
            "itemtype": "property",
            "name": "LIGHTEST",
            "type": "String",
            "final": 1,
            "default": "lighten",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 370,
            "itemtype": "property",
            "name": "DIFFERENCE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 375,
            "itemtype": "property",
            "name": "EXCLUSION",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 380,
            "itemtype": "property",
            "name": "MULTIPLY",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 385,
            "itemtype": "property",
            "name": "SCREEN",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 390,
            "itemtype": "property",
            "name": "REPLACE",
            "type": "String",
            "final": 1,
            "default": "copy",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 396,
            "itemtype": "property",
            "name": "OVERLAY",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 401,
            "itemtype": "property",
            "name": "HARD_LIGHT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 406,
            "itemtype": "property",
            "name": "SOFT_LIGHT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 411,
            "itemtype": "property",
            "name": "DODGE",
            "type": "String",
            "final": 1,
            "default": "color-dodge",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 417,
            "itemtype": "property",
            "name": "BURN",
            "type": "String",
            "final": 1,
            "default": "color-burn",
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 425,
            "itemtype": "property",
            "name": "THRESHOLD",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 430,
            "itemtype": "property",
            "name": "GRAY",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 435,
            "itemtype": "property",
            "name": "OPAQUE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 440,
            "itemtype": "property",
            "name": "INVERT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 445,
            "itemtype": "property",
            "name": "POSTERIZE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 450,
            "itemtype": "property",
            "name": "DILATE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 455,
            "itemtype": "property",
            "name": "ERODE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 460,
            "itemtype": "property",
            "name": "BLUR",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 467,
            "itemtype": "property",
            "name": "NORMAL",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 472,
            "itemtype": "property",
            "name": "ITALIC",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 477,
            "itemtype": "property",
            "name": "BOLD",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 501,
            "itemtype": "property",
            "name": "LANDSCAPE",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/constants.js",
            "line": 506,
            "itemtype": "property",
            "name": "PORTRAIT",
            "type": "String",
            "final": 1,
            "class": "p5",
            "module": "Constants",
            "submodule": "Constants"
        },
        {
            "file": "src/core/core.js",
            "line": 49,
            "description": "<p>Called directly before setup(), the preload() function is used to handle\nasynchronous loading of external files. If a preload function is\ndefined, setup() will wait until any load calls within have finished.\nNothing besides load calls should be inside preload (loadImage,\nloadJSON, loadFont, loadStrings, etc).<br><br>\nBy default the text &quot;loading...&quot; will be displayed. To make your own\nloading page, include an HTML element with id &quot;p5_loading&quot; in your\npage. More information <a href=\"http://bit.ly/2kQ6Nio\">here</a>.</p>\n",
            "itemtype": "method",
            "name": "preload",
            "example": [
                "\n<div><code>\nvar img;\nvar c;\nfunction preload() {\n // preload() runs once\n  img = loadImage('assets/laDefense.jpg');\n}\n\nfunction setup() {\n // setup() waits until preload() is done\n  img.loadPixels();\n  // get color of middle pixel\n  c = img.get(img.width / 2, img.height / 2);\n}\n\nfunction draw() {\n  background(c);\n  image(img, 25, 25, 50, 50);\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/core.js",
            "line": 87,
            "description": "<p>The setup() function is called once when the program starts. It&#39;s used to\ndefine initial environment properties such as screen size and background\ncolor and to load media such as images and fonts as the program starts.\nThere can only be one setup() function for each program and it shouldn&#39;t\nbe called again after its initial execution.\n<br><br>\nNote: Variables declared within setup() are not accessible within other\nfunctions, including draw().</p>\n",
            "itemtype": "method",
            "name": "setup",
            "example": [
                "\n<div><code>\nvar a = 0;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(102);\n}\n\nfunction draw() {\n  rect(a++ % width, 10, 2, 80);\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/core.js",
            "line": 118,
            "description": "<p>Called directly after setup(), the draw() function continuously executes\nthe lines of code contained inside its block until the program is stopped\nor noLoop() is called. Note if noLoop() is called in setup(), draw() will\nstill be executed once before stopping. draw() is called automatically and\nshould never be called explicitly.\n<br><br>\nIt should always be controlled with noLoop(), redraw() and loop(). After\nnoLoop() stops the code in draw() from executing, redraw() causes the\ncode inside draw() to execute once, and loop() will cause the code\ninside draw() to resume executing continuously.\n<br><br>\nThe number of times draw() executes in each second may be controlled with\nthe frameRate() function.\n<br><br>\nThere can only be one draw() function for each sketch, and draw() must\nexist if you want the code to run continuously, or to process events such\nas mousePressed(). Sometimes, you might have an empty call to draw() in\nyour program, as shown in the above example.\n<br><br>\nIt is important to note that the drawing coordinate system will be reset\nat the beginning of each draw() call. If any transformations are performed\nwithin draw() (ex: scale, rotate, translate, their effects will be\nundone at the beginning of draw(), so transformations will not accumulate\nover time. On the other hand, styling applied (ex: fill, stroke, etc) will\nremain in effect.</p>\n",
            "itemtype": "method",
            "name": "draw",
            "example": [
                "\n<div><code>\nvar yPos = 0;\nfunction setup() {\n // setup() runs once\n  frameRate(30);\n}\nfunction draw() {\n // draw() loops forever, until stopped\n  background(204);\n  yPos = yPos - 1;\n  if (yPos < 0) {\n    yPos = height;\n  }\n  line(0, yPos, width, yPos);\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/core.js",
            "line": 401,
            "description": "<p>Removes the entire p5 sketch. This will remove the canvas and any\nelements created by p5.js. It will also stop the draw loop and unbind\nany properties or methods from the window global scope. It will\nleave a variable p5 in case you wanted to create a new p5 sketch.\nIf you like, you can set p5 = null to erase it. While all functions and\nvariables and objects created by the p5 library will be removed, any\nother global variables created by your code will remain.</p>\n",
            "itemtype": "method",
            "name": "remove",
            "example": [
                "\n<div class='norender'><code>\nfunction draw() {\n  ellipse(50, 50, 10, 10);\n}\n\nfunction mousePressed() {\n  remove(); // remove whole sketch on mouse press\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/curves.js",
            "line": 13,
            "description": "<p>Draws a cubic Bezier curve on the screen. These curves are defined by a\nseries of anchor and control points. The first two parameters specify\nthe first anchor point and the last two parameters specify the other\nanchor point, which become the first and last points on the curve. The\nmiddle parameters specify the two control points which define the shape\nof the curve. Approximately speaking, control points &quot;pull&quot; the curve\ntowards them.<br /><br />Bezier curves were developed by French\nautomotive engineer Pierre Bezier, and are commonly used in computer\ngraphics to define gently sloping curves. See also curve().</p>\n",
            "itemtype": "method",
            "name": "bezier",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\nline(85, 20, 10, 10);\nline(90, 90, 15, 80);\nstroke(0, 0, 0);\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\n</code>\n</div>\n\n<div>\n<code>\nbackground(0, 0, 0);\nnoFill();\nstroke(255);\nbezier(250, 250, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);\n</code>\n</div>"
            ],
            "alt": "stretched black s-shape in center with orange lines extending from end points.\nstretched black s-shape with 10 5x5 white ellipses along the shape.\nstretched black s-shape with 7 5x5 ellipses and orange lines along the shape.\nstretched black s-shape with 17 small orange lines extending from under shape.\nhorseshoe shape with orange ends facing left and black curved center.\nhorseshoe shape with orange ends facing left and black curved center.\nLine shaped like right-facing arrow,points move with mouse-x and warp shape.\nhorizontal line that hooks downward on the right and 13 5x5 ellipses along it.\nright curving line mid-right of canvas with 7 short lines radiating from it.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves",
            "overloads": [
                {
                    "line": 13,
                    "params": [
                        {
                            "name": "x1",
                            "description": "<p>x-coordinate for the first anchor point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "<p>y-coordinate for the first anchor point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "<p>x-coordinate for the first control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "<p>y-coordinate for the first control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "<p>x-coordinate for the second control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "<p>y-coordinate for the second control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "<p>x-coordinate for the second anchor point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "<p>y-coordinate for the second anchor point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 66,
                    "params": [
                        {
                            "name": "x1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z1",
                            "description": "<p>z-coordinate for the first anchor point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z2",
                            "description": "<p>z-coordinate for the first control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z3",
                            "description": "<p>z-coordinate for the second control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z4",
                            "description": "<p>z-coordinate for the second anchor point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/curves.js",
            "line": 92,
            "description": "<p>Sets the resolution at which Beziers display.</p>\n<p>The default value is 20.</p>\n",
            "itemtype": "method",
            "name": "bezierDetail",
            "params": [
                {
                    "name": "detail",
                    "description": "<p>resolution of the curves</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbackground(204);\nbezierDetail(50);\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\n</code>\n</div>"
            ],
            "alt": "stretched black s-shape with 7 5x5 ellipses and orange lines along the shape.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 119,
            "description": "<p>Evaluates the Bezier at position t for points a, b, c, d.\nThe parameters a and d are the first and last points\non the curve, and b and c are the control points.\nThe final parameter t varies between 0 and 1.\nThis can be done once with the x coordinates and a second time\nwith the y coordinates to get the location of a bezier curve at t.</p>\n",
            "itemtype": "method",
            "name": "bezierPoint",
            "params": [
                {
                    "name": "a",
                    "description": "<p>coordinate of first point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "b",
                    "description": "<p>coordinate of first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>coordinate of second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "d",
                    "description": "<p>coordinate of second point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "t",
                    "description": "<p>value between 0 and 1</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "the value of the Bezier at position t",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoFill();\nvar x1 = 85,\n x2 = 10,\n x3 = 90,\n x4 = 15;\nvar y1 = 20,\n y2 = 10,\n y3 = 90,\n y4 = 80;\nbezier(x1, y1, x2, y2, x3, y3, x4, y4);\nfill(255);\nvar steps = 10;\nfor (var i = 0; i <= steps; i++) {\n  var t = i / steps;\n  var x = bezierPoint(x1, x2, x3, x4, t);\n  var y = bezierPoint(y1, y2, y3, y4, t);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>"
            ],
            "alt": "stretched black s-shape with 17 small orange lines extending from under shape.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 174,
            "description": "<p>Evaluates the tangent to the Bezier at position t for points a, b, c, d.\nThe parameters a and d are the first and last points\non the curve, and b and c are the control points.\nThe final parameter t varies between 0 and 1.</p>\n",
            "itemtype": "method",
            "name": "bezierTangent",
            "params": [
                {
                    "name": "a",
                    "description": "<p>coordinate of first point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "b",
                    "description": "<p>coordinate of first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>coordinate of second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "d",
                    "description": "<p>coordinate of second point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "t",
                    "description": "<p>value between 0 and 1</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "the tangent at position t",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nvar steps = 6;\nfill(255);\nfor (var i = 0; i <= steps; i++) {\n  var t = i / steps;\n  // Get the location of the point\n  var x = bezierPoint(85, 10, 90, 15, t);\n  var y = bezierPoint(20, 10, 90, 80, t);\n  // Get the tangent points\n  var tx = bezierTangent(85, 10, 90, 15, t);\n  var ty = bezierTangent(20, 10, 90, 80, t);\n  // Calculate an angle from the tangent points\n  var a = atan2(ty, tx);\n  a += PI;\n  stroke(255, 102, 0);\n  line(x, y, cos(a) * 30 + x, sin(a) * 30 + y);\n  // The following line of code makes a line\n  // inverse of the above line\n  //line(x, y, cos(a)*-30 + x, sin(a)*-30 + y);\n  stroke(0);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nstroke(255, 102, 0);\nvar steps = 16;\nfor (var i = 0; i <= steps; i++) {\n  var t = i / steps;\n  var x = bezierPoint(85, 10, 90, 15, t);\n  var y = bezierPoint(20, 10, 90, 80, t);\n  var tx = bezierTangent(85, 10, 90, 15, t);\n  var ty = bezierTangent(20, 10, 90, 80, t);\n  var a = atan2(ty, tx);\n  a -= HALF_PI;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}\n</code>\n</div>"
            ],
            "alt": "s-shaped line with 17 short orange lines extending from underside of shape",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 253,
            "description": "<p>Draws a curved line on the screen between two points, given as the\nmiddle four parameters. The first two parameters are a control point, as\nif the curve came from this point even though it&#39;s not drawn. The last\ntwo parameters similarly describe the other control point. <br /><br />\nLonger curves can be created by putting a series of curve() functions\ntogether or using curveVertex(). An additional function called\ncurveTightness() provides control for the visual quality of the curve.\nThe curve() function is an implementation of Catmull-Rom splines.</p>\n",
            "itemtype": "method",
            "name": "curve",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\nstroke(0);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nstroke(255, 102, 0);\ncurve(73, 24, 73, 61, 15, 65, 15, 65);\n</code>\n</div>\n<div>\n<code>\n// Define the curve points as JavaScript objects\nvar p1 = { x: 5, y: 26 },\n p2 = { x: 73, y: 24 };\nvar p3 = { x: 73, y: 61 },\n p4 = { x: 15, y: 65 };\nnoFill();\nstroke(255, 102, 0);\ncurve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);\nstroke(0);\ncurve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);\nstroke(255, 102, 0);\ncurve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);\n</code>\n</div>\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\ncurve(5, 26, 0, 5, 26, 0, 73, 24, 0, 73, 61, 0);\nstroke(0);\ncurve(5, 26, 0, 73, 24, 0, 73, 61, 0, 15, 65, 0);\nstroke(255, 102, 0);\ncurve(73, 24, 0, 73, 61, 0, 15, 65, 0, 15, 65, 0);\n</code>\n</div>"
            ],
            "alt": "horseshoe shape with orange ends facing left and black curved center.\nhorseshoe shape with orange ends facing left and black curved center.\ncurving black and orange lines.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves",
            "overloads": [
                {
                    "line": 253,
                    "params": [
                        {
                            "name": "x1",
                            "description": "<p>x-coordinate for the beginning control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "<p>y-coordinate for the beginning control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "<p>x-coordinate for the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "<p>y-coordinate for the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "<p>x-coordinate for the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "<p>y-coordinate for the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "<p>x-coordinate for the ending control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "<p>y-coordinate for the ending control point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 318,
                    "params": [
                        {
                            "name": "x1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y1",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z1",
                            "description": "<p>z-coordinate for the beginning control point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y2",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z2",
                            "description": "<p>z-coordinate for the first point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y3",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z3",
                            "description": "<p>z-coordinate for the second point</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "x4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y4",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z4",
                            "description": "<p>z-coordinate for the ending control point</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/curves.js",
            "line": 344,
            "description": "<p>Sets the resolution at which curves display.</p>\n<p>The default value is 20.</p>\n",
            "itemtype": "method",
            "name": "curveDetail",
            "params": [
                {
                    "name": "resolution",
                    "description": "<p>of the curves</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbackground(204);\ncurveDetail(20);\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\n</code>\n</div>"
            ],
            "alt": "white arch shape in top-mid canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 371,
            "description": "<p>Modifies the quality of forms created with curve() and curveVertex().\nThe parameter tightness determines how the curve fits to the vertex\npoints. The value 0.0 is the default value for tightness (this value\ndefines the curves to be Catmull-Rom splines) and the value 1.0 connects\nall the points with straight lines. Values within the range -5.0 and 5.0\nwill deform the curves but will leave them recognizable and as values\nincrease in magnitude, they will continue to deform.</p>\n",
            "itemtype": "method",
            "name": "curveTightness",
            "params": [
                {
                    "name": "amount",
                    "description": "<p>of deformation from the original vertices</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\n// Move the mouse left and right to see the curve change\n\nfunction setup() {\n  createCanvas(100, 100);\n  noFill();\n}\n\nfunction draw() {\n  background(204);\n  var t = map(mouseX, 0, width, -5, 5);\n  curveTightness(t);\n  beginShape();\n  curveVertex(10, 26);\n  curveVertex(10, 26);\n  curveVertex(83, 24);\n  curveVertex(83, 61);\n  curveVertex(25, 65);\n  curveVertex(25, 65);\n  endShape();\n}\n</code>\n</div>"
            ],
            "alt": "Line shaped like right-facing arrow,points move with mouse-x and warp shape.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 417,
            "description": "<p>Evaluates the curve at position t for points a, b, c, d.\nThe parameter t varies between 0 and 1, a and d are points\non the curve, and b and c are the control points.\nThis can be done once with the x coordinates and a second time\nwith the y coordinates to get the location of a curve at t.</p>\n",
            "itemtype": "method",
            "name": "curvePoint",
            "params": [
                {
                    "name": "a",
                    "description": "<p>coordinate of first point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "b",
                    "description": "<p>coordinate of first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>coordinate of second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "d",
                    "description": "<p>coordinate of second point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "t",
                    "description": "<p>value between 0 and 1</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "bezier value at position t",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoFill();\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nfill(255);\nellipseMode(CENTER);\nvar steps = 6;\nfor (var i = 0; i <= steps; i++) {\n  var t = i / steps;\n  var x = curvePoint(5, 5, 73, 73, t);\n  var y = curvePoint(26, 26, 24, 61, t);\n  ellipse(x, y, 5, 5);\n  x = curvePoint(5, 73, 73, 15, t);\n  y = curvePoint(26, 24, 61, 65, t);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>\n\nline hooking down to right-bottom with 13 5x5 white ellipse points"
            ],
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/curves.js",
            "line": 466,
            "description": "<p>Evaluates the tangent to the curve at position t for points a, b, c, d.\nThe parameter t varies between 0 and 1, a and d are points on the curve,\nand b and c are the control points.</p>\n",
            "itemtype": "method",
            "name": "curveTangent",
            "params": [
                {
                    "name": "a",
                    "description": "<p>coordinate of first point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "b",
                    "description": "<p>coordinate of first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>coordinate of second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "d",
                    "description": "<p>coordinate of second point on the curve</p>\n",
                    "type": "Number"
                },
                {
                    "name": "t",
                    "description": "<p>value between 0 and 1</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "the tangent at position t",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nnoFill();\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nvar steps = 6;\nfor (var i = 0; i <= steps; i++) {\n  var t = i / steps;\n  var x = curvePoint(5, 73, 73, 15, t);\n  var y = curvePoint(26, 24, 61, 65, t);\n  //ellipse(x, y, 5, 5);\n  var tx = curveTangent(5, 73, 73, 15, t);\n  var ty = curveTangent(26, 24, 61, 65, t);\n  var a = atan2(ty, tx);\n  a -= PI / 2.0;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}\n</code>\n</div>"
            ],
            "alt": "right curving line mid-right of canvas with 7 short lines radiating from it.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Curves"
        },
        {
            "file": "src/core/environment.js",
            "line": 22,
            "description": "<p>The print() function writes to the console area of your browser.\nThis function is often helpful for looking at the data a program is\nproducing. This function creates a new line of text for each call to\nthe function. Individual elements can be\nseparated with quotes (&quot;&quot;) and joined with the addition operator (+).</p>\n",
            "itemtype": "method",
            "name": "print",
            "params": [
                {
                    "name": "contents",
                    "description": "<p>any combination of Number, String, Object, Boolean,\n                      Array to print</p>\n",
                    "type": "Any"
                }
            ],
            "example": [
                "\n<div><code class='norender'>\nvar x = 10;\nprint('The value of x is ' + x);\n// prints \"The value of x is 10\"\n</code></div>"
            ],
            "alt": "default grey canvas",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 49,
            "description": "<p>The system variable frameCount contains the number of frames that have\nbeen displayed since the program started. Inside setup() the value is 0,\nafter the first iteration of draw it is 1, etc.</p>\n",
            "itemtype": "property",
            "name": "frameCount",
            "type": "Integer",
            "readonly": "",
            "example": [
                "\n  <div><code>\nfunction setup() {\n  frameRate(30);\n  textSize(20);\n  textSize(30);\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(200);\n  text(frameCount, width / 2, height / 2);\n}\n</code></div>"
            ],
            "alt": "numbers rapidly counting upward with frame count set to 30.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 77,
            "description": "<p>Confirms if the window a p5.js program is in is &quot;focused,&quot; meaning that\nthe sketch will accept mouse or keyboard input. This variable is\n&quot;true&quot; if the window is focused and &quot;false&quot; if not.</p>\n",
            "itemtype": "property",
            "name": "focused",
            "type": "Boolean",
            "readonly": "",
            "example": [
                "\n<div><code>\n// To demonstrate, put two windows side by side.\n// Click on the window that the p5 sketch isn't in!\nfunction draw() {\n  background(200);\n  noStroke();\n  fill(0, 200, 0);\n  ellipse(25, 25, 50, 50);\n\n  if (!focused) {\n   // or \"if (focused === false)\"\n    stroke(200, 0, 0);\n    line(0, 0, 100, 100);\n    line(100, 0, 0, 100);\n  }\n}\n</code></div>"
            ],
            "alt": "green 50x50 ellipse at top left. Red X covers canvas when page focus changes",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 109,
            "description": "<p>Sets the cursor to a predefined symbol or an image, or makes it visible\nif already hidden. If you are trying to set an image as the cursor, the\nrecommended size is 16x16 or 32x32 pixels. It is not possible to load an\nimage as the cursor if you are exporting your program for the Web, and not\nall MODES work with all browsers. The values for parameters x and y must\nbe less than the dimensions of the image.</p>\n",
            "itemtype": "method",
            "name": "cursor",
            "params": [
                {
                    "name": "type",
                    "description": "<p>either ARROW, CROSS, HAND, MOVE, TEXT, or\n                              WAIT, or path for image</p>\n",
                    "type": "String|Constant"
                },
                {
                    "name": "x",
                    "description": "<p>the horizontal active spot of the cursor</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "description": "<p>the vertical active spot of the cursor</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\n// Move the mouse left and right across the image\n// to see the cursor change from a cross to a hand\nfunction draw() {\n  line(width / 2, 0, width / 2, height);\n  if (mouseX < 50) {\n    cursor(CROSS);\n  } else {\n    cursor(HAND);\n  }\n}\n</code></div>"
            ],
            "alt": "horizontal line divides canvas. cursor on left is a cross, right is hand.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 170,
            "description": "<p>Specifies the number of frames to be displayed every second. For example,\nthe function call frameRate(30) will attempt to refresh 30 times a second.\nIf the processor is not fast enough to maintain the specified rate, the\nframe rate will not be achieved. Setting the frame rate within setup() is\nrecommended. The default rate is 60 frames per second. This is the same as\nsetFrameRate(val).\n<br><br>\nCalling frameRate() with no arguments returns the current framerate. The\ndraw function must run at least once before it will return a value. This\nis the same as getFrameRate().\n<br><br>\nCalling frameRate() with arguments that are not of the type numbers\nor are non positive also returns current framerate.</p>\n",
            "itemtype": "method",
            "name": "frameRate",
            "chainable": 1,
            "example": [
                "\n\n<div><code>\nvar rectX = 0;\nvar fr = 30; //starting FPS\nvar clr;\n\nfunction setup() {\n  background(200);\n  frameRate(fr); // Attempt to refresh at starting FPS\n  clr = color(255, 0, 0);\n}\n\nfunction draw() {\n  background(200);\n  rectX = rectX += 1; // Move Rectangle\n\n  if (rectX >= width) {\n   // If you go off screen.\n    if (fr === 30) {\n      clr = color(0, 0, 255);\n      fr = 10;\n      frameRate(fr); // make frameRate 10 FPS\n    } else {\n      clr = color(255, 0, 0);\n      fr = 30;\n      frameRate(fr); // make frameRate 30 FPS\n    }\n    rectX = 0;\n  }\n  fill(clr);\n  rect(rectX, 40, 20, 20);\n}\n</code></div>"
            ],
            "alt": "blue rect moves left to right, followed by red rect moving faster. Loops.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment",
            "overloads": [
                {
                    "line": 170,
                    "params": [
                        {
                            "name": "fps",
                            "description": "<p>number of frames to be displayed every second</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 228,
                    "params": [],
                    "return": {
                        "description": "current frameRate",
                        "type": "Number"
                    }
                }
            ]
        },
        {
            "file": "src/core/environment.js",
            "line": 268,
            "description": "<p>Hides the cursor from view.</p>\n",
            "itemtype": "method",
            "name": "noCursor",
            "example": [
                "\n<div><code>\nfunction setup() {\n  noCursor();\n}\n\nfunction draw() {\n  background(200);\n  ellipse(mouseX, mouseY, 10, 10);\n}\n</code></div>"
            ],
            "alt": "cursor becomes 10x 10 white ellipse the moves with mouse x and y.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 293,
            "description": "<p>System variable that stores the width of the entire screen display. This\nis used to run a full-screen program on any display size.</p>\n",
            "itemtype": "property",
            "name": "displayWidth",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div class=\"norender\"><code>\ncreateCanvas(displayWidth, displayHeight);\n</code></div>"
            ],
            "alt": "cursor becomes 10x 10 white ellipse the moves with mouse x and y.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 310,
            "description": "<p>System variable that stores the height of the entire screen display. This\nis used to run a full-screen program on any display size.</p>\n",
            "itemtype": "property",
            "name": "displayHeight",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div class=\"norender\"><code>\ncreateCanvas(displayWidth, displayHeight);\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 327,
            "description": "<p>System variable that stores the width of the inner window, it maps to\nwindow.innerWidth.</p>\n",
            "itemtype": "property",
            "name": "windowWidth",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div class=\"norender\"><code>\ncreateCanvas(windowWidth, windowHeight);\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 343,
            "description": "<p>System variable that stores the height of the inner window, it maps to\nwindow.innerHeight.</p>\n",
            "itemtype": "property",
            "name": "windowHeight",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div class=\"norender\"><code>\ncreateCanvas(windowWidth, windowHeight);\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 359,
            "description": "<p>The windowResized() function is called once every time the browser window\nis resized. This is a good place to resize the canvas or do any other\nadjustments to accommodate the new window size.</p>\n",
            "itemtype": "method",
            "name": "windowResized",
            "example": [
                "\n<div class=\"norender\"><code>\nfunction setup() {\n  createCanvas(windowWidth, windowHeight);\n}\n\nfunction draw() {\n  background(0, 100, 200);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 413,
            "description": "<p>System variable that stores the width of the drawing canvas. This value\nis set by the first parameter of the createCanvas() function.\nFor example, the function call createCanvas(320, 240) sets the width\nvariable to the value 320. The value of width defaults to 100 if\ncreateCanvas() is not used in a program.</p>\n",
            "itemtype": "property",
            "name": "width",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 425,
            "description": "<p>System variable that stores the height of the drawing canvas. This value\nis set by the second parameter of the createCanvas() function. For\nexample, the function call createCanvas(320, 240) sets the height\nvariable to the value 240. The value of height defaults to 100 if\ncreateCanvas() is not used in a program.</p>\n",
            "itemtype": "property",
            "name": "height",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 437,
            "description": "<p>If argument is given, sets the sketch to fullscreen or not based on the\nvalue of the argument. If no argument is given, returns the current\nfullscreen state. Note that due to browser restrictions this can only\nbe called on user input, for example, on mouse press like the example\nbelow.</p>\n",
            "itemtype": "method",
            "name": "fullscreen",
            "params": [
                {
                    "name": "val",
                    "description": "<p>whether the sketch should be in fullscreen mode\nor not</p>\n",
                    "type": "Boolean",
                    "optional": true
                }
            ],
            "return": {
                "description": "current fullscreen state",
                "type": "Boolean"
            },
            "example": [
                "\n<div>\n<code>\n// Clicking in the box toggles fullscreen on and off.\nfunction setup() {\n  background(200);\n}\nfunction mousePressed() {\n  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {\n    var fs = fullscreen();\n    fullscreen(!fs);\n  }\n}\n</code>\n</div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 488,
            "description": "<p>Sets the pixel scaling for high pixel density displays. By default\npixel density is set to match display density, call pixelDensity(1)\nto turn this off. Calling pixelDensity() with no arguments returns\nthe current pixel density of the sketch.</p>\n",
            "itemtype": "method",
            "name": "pixelDensity",
            "params": [
                {
                    "name": "val",
                    "description": "<p>whether or how much the sketch should scale</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "return": {
                "description": "current pixel density of the sketch",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  pixelDensity(1);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  pixelDensity(3.0);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "fuzzy 50x50 white ellipse with black outline in center of canvas.\nsharp 50x50 white ellipse with black outline in center of canvas.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 534,
            "description": "<p>Returns the pixel density of the current display the sketch is running on.</p>\n",
            "itemtype": "method",
            "name": "displayDensity",
            "return": {
                "description": "current pixel density of the display",
                "type": "Number"
            },
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  var density = displayDensity();\n  pixelDensity(density);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "50x50 white ellipse with black outline in center of canvas.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 591,
            "description": "<p>Gets the current URL.</p>\n",
            "itemtype": "method",
            "name": "getURL",
            "return": {
                "description": "url",
                "type": "String"
            },
            "example": [
                "\n<div>\n<code>\nvar url;\nvar x = 100;\n\nfunction setup() {\n  fill(0);\n  noStroke();\n  url = getURL();\n}\n\nfunction draw() {\n  background(200);\n  text(url, x, height / 2);\n  x--;\n}\n</code>\n</div>"
            ],
            "alt": "current url (http://p5js.org/reference/#/p5/getURL) moves right to left.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 622,
            "description": "<p>Gets the current URL path as an array.</p>\n",
            "itemtype": "method",
            "name": "getURLPath",
            "return": {
                "description": "path components",
                "type": "String[]"
            },
            "example": [
                "\n<div class='norender'><code>\nfunction setup() {\n  var urlPath = getURLPath();\n  for (var i = 0; i < urlPath.length; i++) {\n    text(urlPath[i], 10, i * 20 + 20);\n  }\n}\n</code></div>"
            ],
            "alt": "no display",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/environment.js",
            "line": 645,
            "description": "<p>Gets the current URL params as an Object.</p>\n",
            "itemtype": "method",
            "name": "getURLParams",
            "return": {
                "description": "URL params",
                "type": "Object"
            },
            "example": [
                "\n<div class='norender'>\n<code>\n// Example: http://p5js.org?year=2014&month=May&day=15\n\nfunction setup() {\n  var params = getURLParams();\n  text(params.day, 10, 20);\n  text(params.month, 10, 40);\n  text(params.year, 10, 60);\n}\n</code>\n</div>"
            ],
            "alt": "no display.",
            "class": "p5",
            "module": "Environment",
            "submodule": "Environment"
        },
        {
            "file": "src/core/error_helpers.js",
            "line": 1,
            "requires": [
                "core"
            ],
            "class": "p5",
            "module": "Environment"
        },
        {
            "file": "src/core/error_helpers.js",
            "line": 397,
            "description": "<p>Validates parameters\nparam  {String}               func    the name of the function\nparam  {Array}                args    user input arguments</p>\n<p>example:\n var a;\n ellipse(10,10,a,5);\nconsole ouput:\n &quot;It looks like ellipse received an empty variable in spot #2.&quot;</p>\n<p>example:\n ellipse(10,&quot;foo&quot;,5,5);\nconsole output:\n &quot;ellipse was expecting a number for parameter #1,\n          received &quot;foo&quot; instead.&quot;</p>\n",
            "class": "p5",
            "module": "Environment"
        },
        {
            "file": "src/core/error_helpers.js",
            "line": 449,
            "description": "<p>Prints out all the colors in the color pallete with white text.\nFor color blindness testing.</p>\n",
            "class": "p5",
            "module": "Environment"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 27,
            "description": "<p>Underlying HTML element. All normal HTML methods can be called on this.</p>\n",
            "example": [
                "\n<div>\n<code>\ncreateCanvas(300, 500);\nbackground(0, 0, 0, 0);\nvar input = createInput();\ninput.position(20, 225);\nvar inputElem = new p5.Element(input.elt);\ninputElem.style('width:450px;');\ninputElem.value('some string');\n</code>\n</div>"
            ],
            "itemtype": "property",
            "name": "elt",
            "readonly": "",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 53,
            "description": "<p>Attaches the element to the parent specified. A way of setting\n the container for the element. Accepts either a string ID, DOM\n node, or p5.Element. If no arguments given, parent node is returned.\n For more ways to position the canvas, see the\n <a href='https://github.com/processing/p5.js/wiki/Positioning-your-canvas'>\n positioning the canvas</a> wiki page.</p>\n",
            "itemtype": "method",
            "name": "parent",
            "chainable": 1,
            "example": [
                "\n <div class=\"norender\"><code>\n // in the html file:\n // &lt;div id=\"myContainer\">&lt;/div>\n// in the js file:\n var cnv = createCanvas(100, 100);\n cnv.parent('myContainer');\n </code></div>\n <div class='norender'><code>\n var div0 = createDiv('this is the parent');\n var div1 = createDiv('this is the child');\n div1.parent(div0); // use p5.Element\n </code></div>\n <div class='norender'><code>\n var div0 = createDiv('this is the parent');\n div0.id('apples');\n var div1 = createDiv('this is the child');\n div1.parent('apples'); // use id\n </code></div>\n <div class='norender'><code>\n var elt = document.getElementById('myParentDiv');\n var div1 = createDiv('this is the child');\n div1.parent(elt); // use element from page\n </code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM",
            "overloads": [
                {
                    "line": 53,
                    "params": [
                        {
                            "name": "parent",
                            "description": "<p>the ID, DOM node, or p5.Element\n                         of desired parent element</p>\n",
                            "type": "String|p5.Element|Object"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 96,
                    "params": [],
                    "return": {
                        "description": "",
                        "type": "p5.Element"
                    }
                }
            ]
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 118,
            "description": "<p>Sets the ID of the element. If no ID argument is passed in, it instead\n returns the current ID of the element.</p>\n",
            "itemtype": "method",
            "name": "id",
            "chainable": 1,
            "example": [
                "\n <div class='norender'><code>\n function setup() {\n   var cnv = createCanvas(100, 100);\n   // Assigns a CSS selector ID to\n   // the canvas element.\n   cnv.id('mycanvas');\n }\n </code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM",
            "overloads": [
                {
                    "line": 118,
                    "params": [
                        {
                            "name": "id",
                            "description": "<p>ID of the element</p>\n",
                            "type": "String"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 140,
                    "params": [],
                    "return": {
                        "description": "the id of the element",
                        "type": "String"
                    }
                }
            ]
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 155,
            "description": "<p>Adds given class to the element. If no class argument is passed in, it\n instead returns a string containing the current class(es) of the element.</p>\n",
            "itemtype": "method",
            "name": "class",
            "chainable": 1,
            "example": [
                "\n <div class='norender'><code>\n function setup() {\n   var cnv = createCanvas(100, 100);\n   // Assigns a CSS selector class 'small'\n   // to the canvas element.\n   cnv.class('small');\n }\n </code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM",
            "overloads": [
                {
                    "line": 155,
                    "params": [
                        {
                            "name": "class",
                            "description": "<p>class to add</p>\n",
                            "type": "String"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 177,
                    "params": [],
                    "return": {
                        "description": "the class of the element",
                        "type": "String"
                    }
                }
            ]
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 190,
            "description": "<p>The .mousePressed() function is called once after every time a\nmouse button is pressed over the element. This can be used to\nattach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "mousePressed",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when mouse is\n                               pressed over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mousePressed(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any click anywhere\nfunction mousePressed() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 240,
            "description": "<p>The .doubleClicked() function is called once after every time a\nmouse button is pressed twice over the element. This can be used to\nattach element and action specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "doubleClicked",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when mouse is\n                               double clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "return": {
                "description": "",
                "type": "p5.Element"
            },
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.doubleClicked(changeGray); // attach listener for\n  // canvas double click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any double click anywhere\nfunction doubleClicked() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is double clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 289,
            "description": "<p>The .mouseWheel() function is called once after every time a\nmouse wheel is scrolled over the element. This can be used to\nattach element specific event listeners.\n<br><br>\nThe function accepts a callback function as argument which will be executed\nwhen the <code>wheel</code> event is triggered on the element, the callback function is\npassed one argument <code>event</code>. The <code>event.deltaY</code> property returns negative\nvalues if the mouse wheel is rotated up or away from the user and positive\nin the other direction. The <code>event.deltaX</code> does the same as <code>event.deltaY</code>\nexcept it reads the horizontal wheel scroll of the mouse wheel.\n<br><br>\nOn OS X with &quot;natural&quot; scrolling enabled, the <code>event.deltaY</code> values are\nreversed.</p>\n",
            "itemtype": "method",
            "name": "mouseWheel",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when mouse is\n                               scrolled over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseWheel(changeSize); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with mousewheel movement\n// anywhere on screen\nfunction mouseWheel() {\n  g = g + 10;\n}\n\n// this function fires with mousewheel movement\n// over canvas only\nfunction changeSize(event) {\n  if (event.deltaY > 0) {\n    d = d + 10;\n  } else {\n    d = d - 10;\n  }\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 355,
            "description": "<p>The .mouseReleased() function is called once after every time a\nmouse button is released over the element. This can be used to\nattach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "mouseReleased",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when mouse is\n                               released over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseReleased(changeGray); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires after the mouse has been\n// released\nfunction mouseReleased() {\n  d = d + 10;\n}\n\n// this function fires after the mouse has been\n// released while on canvas\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 408,
            "description": "<p>The .mouseClicked() function is called once after a mouse button is\npressed and released over the element. This can be used to\nattach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "mouseClicked",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when mouse is\n                               clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class=\"norender\">\n<code>\nvar cnv;\nvar d;\nvar g;\n\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseClicked(changeGray); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires after the mouse has been\n// clicked anywhere\nfunction mouseClicked() {\n  d = d + 10;\n}\n\n// this function fires after the mouse has been\n// clicked on canvas\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code>\n</div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 462,
            "description": "<p>The .mouseMoved() function is called once every time a\nmouse moves over the element. This can be used to attach an\nelement specific event listener.</p>\n",
            "itemtype": "method",
            "name": "mouseMoved",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a mouse moves\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d = 30;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseMoved(changeSize); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  fill(200);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires when mouse moves anywhere on\n// page\nfunction mouseMoved() {\n  g = g + 5;\n  if (g > 255) {\n    g = 0;\n  }\n}\n\n// this function fires when mouse moves over canvas\nfunction changeSize() {\n  d = d + 2;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 521,
            "description": "<p>The .mouseOver() function is called once after every time a\nmouse moves onto the element. This can be used to attach an\nelement specific event listener.</p>\n",
            "itemtype": "method",
            "name": "mouseOver",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a mouse moves\n                               onto the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseOver(changeGray);\n  d = 10;\n}\n\nfunction draw() {\n  ellipse(width / 2, height / 2, d, d);\n}\n\nfunction changeGray() {\n  d = d + 10;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 564,
            "description": "<p>The .changed() function is called when the value of an\nelement changes.\nThis can be used to attach an element specific event listener.</p>\n",
            "itemtype": "method",
            "name": "changed",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when the value of\n                               an element changes.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div><code>\nvar sel;\n\nfunction setup() {\n  textAlign(CENTER);\n  background(200);\n  sel = createSelect();\n  sel.position(10, 10);\n  sel.option('pear');\n  sel.option('kiwi');\n  sel.option('grape');\n  sel.changed(mySelectEvent);\n}\n\nfunction mySelectEvent() {\n  var item = sel.value();\n  background(200);\n  text(\"it's a \" + item + '!', 50, 50);\n}\n</code></div>\n<div><code>\nvar checkbox;\nvar cnv;\n\nfunction setup() {\n  checkbox = createCheckbox(' fill');\n  checkbox.changed(changeFill);\n  cnv = createCanvas(100, 100);\n  cnv.position(0, 30);\n  noFill();\n}\n\nfunction draw() {\n  background(200);\n  ellipse(50, 50, 50, 50);\n}\n\nfunction changeFill() {\n  if (checkbox.checked()) {\n    fill(0);\n  } else {\n    noFill();\n  }\n}\n</code></div>"
            ],
            "alt": "dropdown: pear, kiwi, grape. When selected text \"its a\" + selection shown.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 631,
            "description": "<p>The .input() function is called when any user input is\ndetected with an element. The input event is often used\nto detect keystrokes in a input element, or changes on a\nslider element. This can be used to attach an element specific\nevent listener.</p>\n",
            "itemtype": "method",
            "name": "input",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when any user input is\n                               detected within the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\n// Open your console to see the output\nfunction setup() {\n  var inp = createInput('');\n  inp.input(myInputEvent);\n}\n\nfunction myInputEvent() {\n  console.log('you are typing: ', this.value());\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 666,
            "description": "<p>The .mouseOut() function is called once after every time a\nmouse moves off the element. This can be used to attach an\nelement specific event listener.</p>\n",
            "itemtype": "method",
            "name": "mouseOut",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a mouse\n                               moves off of an element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseOut(changeGray);\n  d = 10;\n}\n\nfunction draw() {\n  ellipse(width / 2, height / 2, d, d);\n}\n\nfunction changeGray() {\n  d = d + 10;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 708,
            "description": "<p>The .touchStarted() function is called once after every time a touch is\nregistered. This can be used to attach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "touchStarted",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a touch\n                               starts over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchStarted(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any touch anywhere\nfunction touchStarted() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 757,
            "description": "<p>The .touchMoved() function is called once after every time a touch move is\nregistered. This can be used to attach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "touchMoved",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a touch moves over\n                               the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchMoved(changeGray); // attach listener for\n  // canvas click only\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 798,
            "description": "<p>The .touchEnded() function is called once after every time a touch is\nregistered. This can be used to attach element specific event listeners.</p>\n",
            "itemtype": "method",
            "name": "touchEnded",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a touch ends\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div class='norender'><code>\nvar cnv;\nvar d;\nvar g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchEnded(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any touch anywhere\nfunction touchEnded() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
            ],
            "alt": "no display.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 848,
            "description": "<p>The .dragOver() function is called once after every time a\nfile is dragged over the element. This can be used to attach an\nelement specific event listener.</p>\n",
            "itemtype": "method",
            "name": "dragOver",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a file is\n                               dragged over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div><code>\n// To test this sketch, simply drag a\n// file over the canvas\nfunction setup() {\n  var c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('Drag file', width / 2, height / 2);\n  c.dragOver(dragOverCallback);\n}\n\n// This function will be called whenever\n// a file is dragged over the canvas\nfunction dragOverCallback() {\n  background(240);\n  text('Dragged over', width / 2, height / 2);\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 886,
            "description": "<p>The .dragLeave() function is called once after every time a\ndragged file leaves the element area. This can be used to attach an\nelement specific event listener.</p>\n",
            "itemtype": "method",
            "name": "dragLeave",
            "params": [
                {
                    "name": "fxn",
                    "description": "<p>function to be fired when a file is\n                               dragged off the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n",
                    "type": "Function|Boolean"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div><code>\n// To test this sketch, simply drag a file\n// over and then out of the canvas area\nfunction setup() {\n  var c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('Drag file', width / 2, height / 2);\n  c.dragLeave(dragLeaveCallback);\n}\n\n// This function will be called whenever\n// a file is dragged out of the canvas\nfunction dragLeaveCallback() {\n  background(240);\n  text('Dragged off', width / 2, height / 2);\n}\n</code></div>"
            ],
            "alt": "nothing displayed",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 924,
            "description": "<p>The .drop() function is called for each file dropped on the element.\nIt requires a callback that is passed a p5.File object.  You can\noptionally pass two callbacks, the first one (required) is triggered\nfor each file dropped when the file is loaded.  The second (optional)\nis triggered just once when a file (or files) are dropped.</p>\n",
            "itemtype": "method",
            "name": "drop",
            "params": [
                {
                    "name": "callback",
                    "description": "<p>callback triggered when files are dropped.</p>\n",
                    "type": "Function"
                },
                {
                    "name": "fxn",
                    "description": "<p>callback to receive loaded file.</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div><code>\nfunction setup() {\n  var c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('drop image', width / 2, height / 2);\n  c.drop(gotFile);\n}\n\nfunction gotFile(file) {\n  var img = createImg(file.data).hide();\n  // Draw the image onto the canvas\n  image(img, 0, 0, width, height);\n}\n</code></div>"
            ],
            "alt": "Canvas turns into whatever image is dragged/dropped onto it.",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Element.js",
            "line": 1059,
            "description": "<p>Helper fxn for sharing pixel methods</p>\n",
            "class": "p5.Element",
            "module": "DOM",
            "submodule": "DOM"
        },
        {
            "file": "src/core/p5.Graphics.js",
            "line": 68,
            "itemtype": "method",
            "name": "remove",
            "class": "p5.Graphics",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/p5.Renderer.js",
            "line": 63,
            "description": "<p>Resize our canvas element.</p>\n",
            "class": "p5.Renderer",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/p5.Renderer.js",
            "line": 132,
            "description": "<p>Helper fxn to check font type (system or otf)</p>\n",
            "class": "p5.Renderer",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/p5.Renderer.js",
            "line": 185,
            "description": "<p>Helper fxn to measure ascent and descent.\nAdapted from <a href=\"http://stackoverflow.com/a/25355178\">http://stackoverflow.com/a/25355178</a></p>\n",
            "class": "p5.Renderer",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/p5.Renderer2D.js",
            "line": 10,
            "description": "<p>p5.Renderer2D\nThe 2D graphics canvas renderer class.\nextends p5.Renderer</p>\n",
            "class": "p5",
            "module": "Rendering"
        },
        {
            "file": "src/core/p5.Renderer2D.js",
            "line": 404,
            "description": "<p>Generate a cubic Bezier representing an arc on the unit circle of total\nangle <code>size</code> radians, beginning <code>start</code> radians above the x-axis. Up to\nfour of these curves are combined to make a full arc.</p>\n<p>See www.joecridge.me/bezier.pdf for an explanation of the method.</p>\n",
            "class": "p5",
            "module": "Rendering"
        },
        {
            "file": "src/core/rendering.js",
            "line": 16,
            "description": "<p>Creates a canvas element in the document, and sets the dimensions of it\nin pixels. This method should be called only once at the start of setup.\nCalling createCanvas more than once in a sketch will result in very\nunpredictable behavior. If you want more than one drawing canvas\nyou could use createGraphics (hidden by default but it can be shown).\n<br><br>\nThe system variables width and height are set by the parameters passed\nto this function. If createCanvas() is not used, the window will be\ngiven a default size of 100x100 pixels.\n<br><br>\nFor more ways to position the canvas, see the\n<a href='https://github.com/processing/p5.js/wiki/Positioning-your-canvas'>\npositioning the canvas</a> wiki page.</p>\n",
            "itemtype": "method",
            "name": "createCanvas",
            "params": [
                {
                    "name": "w",
                    "description": "<p>width of the canvas</p>\n",
                    "type": "Number"
                },
                {
                    "name": "h",
                    "description": "<p>height of the canvas</p>\n",
                    "type": "Number"
                },
                {
                    "name": "renderer",
                    "description": "<p>either P2D or WEBGL</p>\n",
                    "type": "Constant",
                    "optional": true
                }
            ],
            "return": {
                "description": "canvas generated",
                "type": "HTMLCanvasElement"
            },
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 50);\n  background(153);\n  line(0, 0, width, height);\n}\n</code>\n</div>"
            ],
            "alt": "Black line extending from top-left of canvas to bottom right.",
            "class": "p5",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/rendering.js",
            "line": 116,
            "description": "<p>Resizes the canvas to given width and height. The canvas will be cleared\nand draw will be called immediately, allowing the sketch to re-render itself\nin the resized canvas.</p>\n",
            "itemtype": "method",
            "name": "resizeCanvas",
            "params": [
                {
                    "name": "w",
                    "description": "<p>width of the canvas</p>\n",
                    "type": "Number"
                },
                {
                    "name": "h",
                    "description": "<p>height of the canvas</p>\n",
                    "type": "Number"
                },
                {
                    "name": "noRedraw",
                    "description": "<p>don&#39;t redraw the canvas immediately</p>\n",
                    "type": "Boolean",
                    "optional": true
                }
            ],
            "example": [
                "\n<div class=\"norender\"><code>\nfunction setup() {\n  createCanvas(windowWidth, windowHeight);\n}\n\nfunction draw() {\n  background(0, 100, 200);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n</code></div>"
            ],
            "alt": "No image displayed.",
            "class": "p5",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/rendering.js",
            "line": 169,
            "description": "<p>Removes the default canvas for a p5 sketch that doesn&#39;t\nrequire a canvas</p>\n",
            "itemtype": "method",
            "name": "noCanvas",
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  noCanvas();\n}\n</code>\n</div>"
            ],
            "alt": "no image displayed",
            "class": "p5",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/rendering.js",
            "line": 192,
            "description": "<p>Creates and returns a new p5.Renderer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels.</p>\n",
            "itemtype": "method",
            "name": "createGraphics",
            "params": [
                {
                    "name": "w",
                    "description": "<p>width of the offscreen graphics buffer</p>\n",
                    "type": "Number"
                },
                {
                    "name": "h",
                    "description": "<p>height of the offscreen graphics buffer</p>\n",
                    "type": "Number"
                },
                {
                    "name": "renderer",
                    "description": "<p>either P2D or WEBGL\nundefined defaults to p2d</p>\n",
                    "type": "Constant",
                    "optional": true
                }
            ],
            "return": {
                "description": "offscreen graphics buffer",
                "type": "p5.Graphics"
            },
            "example": [
                "\n<div>\n<code>\nvar pg;\nfunction setup() {\n  createCanvas(100, 100);\n  pg = createGraphics(100, 100);\n}\nfunction draw() {\n  background(200);\n  pg.background(100);\n  pg.noStroke();\n  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);\n  image(pg, 50, 50);\n  image(pg, 0, 0, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "4 grey squares alternating light and dark grey. White quarter circle mid-left.",
            "class": "p5",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/rendering.js",
            "line": 231,
            "description": "<p>Blends the pixels in the display window according to the defined mode.\nThere is a choice of the following modes to blend the source pixels (A)\nwith the ones of pixels already in the display window (B):</p>\n<ul>\n<li><code>BLEND</code> - linear interpolation of colours: C =\nA<em>factor + B. This is the default blending mode.</li>\n<li><code>ADD</code> - sum of A and B</li>\n<li><code>DARKEST</code> - only the darkest colour succeeds: C =\nmin(A</em>factor, B).</li>\n<li><code>LIGHTEST</code> - only the lightest colour succeeds: C =\nmax(A*factor, B).</li>\n<li><code>DIFFERENCE</code> - subtract colors from underlying image.</li>\n<li><code>EXCLUSION</code> - similar to <code>DIFFERENCE</code>, but less\nextreme.</li>\n<li><code>MULTIPLY</code> - multiply the colors, result will always be\ndarker.</li>\n<li><code>SCREEN</code> - opposite multiply, uses inverse values of the\ncolors.</li>\n<li><code>REPLACE</code> - the pixels entirely replace the others and\ndon&#39;t utilize alpha (transparency) values.</li>\n<li><code>OVERLAY</code> - mix of <code>MULTIPLY</code> and <code>SCREEN\n</code>. Multiplies dark values, and screens light values.</li>\n<li><code>HARD_LIGHT</code> - <code>SCREEN</code> when greater than 50%\ngray, <code>MULTIPLY</code> when lower.</li>\n<li><code>SOFT_LIGHT</code> - mix of <code>DARKEST</code> and\n<code>LIGHTEST</code>. Works like <code>OVERLAY</code>, but not as harsh.\n</li>\n<li><code>DODGE</code> - lightens light tones and increases contrast,\nignores darks.</li>\n<li><code>BURN</code> - darker areas are applied, increasing contrast,\nignores lights.</li>\n</ul>",
            "itemtype": "method",
            "name": "blendMode",
            "params": [
                {
                    "name": "mode",
                    "description": "<p>blend mode to set for canvas.\n               either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,\n               EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n               SOFT_LIGHT, DODGE, BURN, ADD or NORMAL</p>\n",
                    "type": "Constant"
                }
            ],
            "example": [
                "\n<div>\n<code>\nblendMode(LIGHTEST);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);\n</code>\n</div>\n<div>\n<code>\nblendMode(MULTIPLY);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);\n</code>\n</div>"
            ],
            "alt": "translucent image thick red & blue diagonal rounded lines intersecting center\nThick red & blue diagonal rounded lines intersecting center. dark at overlap",
            "class": "p5",
            "module": "Rendering",
            "submodule": "Rendering"
        },
        {
            "file": "src/core/shim.js",
            "line": 70,
            "description": "<p>shim for Uint8ClampedArray.slice\n(allows arrayCopy to work with pixels[])\nwith thanks to <a href=\"http://halfpapstudios.com/blog/tag/html5-canvas/\">http://halfpapstudios.com/blog/tag/html5-canvas/</a>\nEnumerable set to false to protect for...in from\nUint8ClampedArray.prototype pollution.</p>\n",
            "class": "p5",
            "module": "Rendering"
        },
        {
            "file": "src/core/structure.js",
            "line": 15,
            "description": "<p>Stops p5.js from continuously executing the code within draw().\nIf loop() is called, the code in draw() begins to run continuously again.\nIf using noLoop() in setup(), it should be the last line inside the block.\n<br><br>\nWhen noLoop() is used, it&#39;s not possible to manipulate or access the\nscreen inside event handling functions such as mousePressed() or\nkeyPressed(). Instead, use those functions to call redraw() or loop(),\nwhich will run draw(), which can update the screen properly. This means\nthat when noLoop() has been called, no drawing can happen, and functions\nlike saveFrame() or loadPixels() may not be used.\n<br><br>\nNote that if the sketch is resized, redraw() will be called to update\nthe sketch, even after noLoop() has been specified. Otherwise, the sketch\nwould enter an odd state until loop() was called.</p>\n",
            "itemtype": "method",
            "name": "noLoop",
            "example": [
                "\n<div><code>\nfunction setup() {\n  createCanvas(100, 100);\n  background(200);\n  noLoop();\n}\n\nfunction draw() {\n  line(10, 10, 90, 90);\n}\n</code></div>\n\n<div><code>\nvar x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  noLoop();\n}\n\nfunction mouseReleased() {\n  loop();\n}\n</code></div>"
            ],
            "alt": "113 pixel long line extending from top-left to bottom right of canvas.\nhorizontal line moves slowly from left. Loops but stops on mouse press.",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/structure.js",
            "line": 77,
            "description": "<p>By default, p5.js loops through draw() continuously, executing the code\nwithin it. However, the draw() loop may be stopped by calling noLoop().\nIn that case, the draw() loop can be resumed with loop().</p>\n",
            "itemtype": "method",
            "name": "loop",
            "example": [
                "\n<div><code>\nvar x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n  noLoop();\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  loop();\n}\n\nfunction mouseReleased() {\n  noLoop();\n}\n</code></div>"
            ],
            "alt": "horizontal line moves slowly from left. Loops but stops on mouse press.",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/structure.js",
            "line": 132,
            "description": "<p>The push() function saves the current drawing style settings and\ntransformations, while pop() restores these settings. Note that these\nfunctions are always used together. They allow you to change the style\nand transformation settings and later return to what you had. When a new\nstate is started with push(), it builds on the current style and transform\ninformation. The push() and pop() functions can be embedded to provide\nmore control. (See the second example for a demonstration.)\n<br><br>\npush() stores information related to the current transformation state\nand style settings controlled by the following functions: fill(),\nstroke(), tint(), strokeWeight(), strokeCap(), strokeJoin(),\nimageMode(), rectMode(), ellipseMode(), colorMode(), textAlign(),\ntextFont(), textMode(), textSize(), textLeading().</p>\n",
            "itemtype": "method",
            "name": "push",
            "example": [
                "\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\ntranslate(50, 0);\nellipse(0, 50, 33, 33); // Middle circle\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(33, 50, 33, 33); // Left-middle circle\n\npush(); // Start another new drawing state\nstroke(0, 102, 153);\nellipse(66, 50, 33, 33); // Right-middle circle\npop(); // Restore previous state\n\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>"
            ],
            "alt": "Gold ellipse + thick black outline @center 2 white ellipses on left and right.\n2 Gold ellipses left black right blue stroke. 2 white ellipses on left+right.",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/structure.js",
            "line": 211,
            "description": "<p>The push() function saves the current drawing style settings and\ntransformations, while pop() restores these settings. Note that these\nfunctions are always used together. They allow you to change the style\nand transformation settings and later return to what you had. When a new\nstate is started with push(), it builds on the current style and transform\ninformation. The push() and pop() functions can be embedded to provide\nmore control. (See the second example for a demonstration.)\n<br><br>\npush() stores information related to the current transformation state\nand style settings controlled by the following functions: fill(),\nstroke(), tint(), strokeWeight(), strokeCap(), strokeJoin(),\nimageMode(), rectMode(), ellipseMode(), colorMode(), textAlign(),\ntextFont(), textMode(), textSize(), textLeading().</p>\n",
            "itemtype": "method",
            "name": "pop",
            "example": [
                "\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\ntranslate(50, 0);\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(0, 50, 33, 33); // Middle circle\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(33, 50, 33, 33); // Left-middle circle\n\npush(); // Start another new drawing state\nstroke(0, 102, 153);\nellipse(66, 50, 33, 33); // Right-middle circle\npop(); // Restore previous state\n\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>"
            ],
            "alt": "Gold ellipse + thick black outline @center 2 white ellipses on left and right.\n2 Gold ellipses left black right blue stroke. 2 white ellipses on left+right.",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/structure.js",
            "line": 282,
            "description": "<p>Executes the code within draw() one time. This functions allows the\n program to update the display window only when necessary, for example\n when an event registered by mousePressed() or keyPressed() occurs.\n <br><br>\n In structuring a program, it only makes sense to call redraw() within\n events such as mousePressed(). This is because redraw() does not run\n draw() immediately (it only sets a flag that indicates an update is\n needed).\n <br><br>\n The redraw() function does not work properly when called inside draw().\n To enable/disable animations, use loop() and noLoop().\n <br><br>\n In addition you can set the number of redraws per method call. Just\n add an integer as single parameter for the number of redraws.</p>\n",
            "itemtype": "method",
            "name": "redraw",
            "params": [
                {
                    "name": "n",
                    "description": "<p>Redraw for n-times. The default value is 1.</p>\n",
                    "type": "Integer",
                    "optional": true
                }
            ],
            "example": [
                "\n <div><code>\n var x = 0;\nfunction setup() {\n   createCanvas(100, 100);\n   noLoop();\n }\nfunction draw() {\n   background(204);\n   line(x, 0, x, height);\n }\nfunction mousePressed() {\n   x += 1;\n   redraw();\n }\n </code></div>\n<div class='norender'><code>\n var x = 0;\nfunction setup() {\n   createCanvas(100, 100);\n   noLoop();\n }\nfunction draw() {\n   background(204);\n   x += 1;\n   line(x, 0, x, height);\n }\nfunction mousePressed() {\n   redraw(5);\n }\n </code></div>"
            ],
            "alt": "black line on far left of canvas\n black line on far left of canvas",
            "class": "p5",
            "module": "Structure",
            "submodule": "Structure"
        },
        {
            "file": "src/core/transform.js",
            "line": 14,
            "description": "<p>Multiplies the current matrix by the one specified through the parameters.\nThis is a powerful operation that can perform the equivalent of translate,\nscale, shear and rotate all at once. You can learn more about transformation\nmatrices on <a href=\"https://en.wikipedia.org/wiki/Transformation_matrix\">\nWikipedia</a>.</p>\n<p>The naming of the arguments here follows the naming of the <a href=\n\"https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-transform\">\nWHATWG specification</a> and corresponds to a\ntransformation matrix of the\nform:</p>\n<blockquote>\n<p><img style=\"max-width: 150px\" src=\"assets/transformation-matrix.png\"\nalt=\"The transformation matrix used when applyMatrix is called\"/></p>\n</blockquote>\n",
            "itemtype": "method",
            "name": "applyMatrix",
            "params": [
                {
                    "name": "a",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                },
                {
                    "name": "b",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                },
                {
                    "name": "d",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                },
                {
                    "name": "e",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                },
                {
                    "name": "f",
                    "description": "<p>numbers which define the 2x3 matrix to be multiplied</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  var step = frameCount % 20;\n  background(200);\n  // Equivalent to translate(x, y);\n  applyMatrix(1, 0, 0, 1, 40 + step, 50);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  var step = frameCount % 20;\n  background(200);\n  translate(50, 50);\n  // Equivalent to scale(x, y);\n  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  var step = frameCount % 20;\n  var angle = map(step, 0, 20, 0, TWO_PI);\n  var cos_a = cos(angle);\n  var sin_a = sin(angle);\n  background(200);\n  translate(50, 50);\n  // Equivalent to rotate(angle);\n  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  var step = frameCount % 20;\n  var angle = map(step, 0, 20, -PI / 4, PI / 4);\n  background(200);\n  translate(50, 50);\n  // equivalent to shearX(angle);\n  var shear_factor = 1 / tan(PI / 2 - angle);\n  applyMatrix(1, 0, shear_factor, 1, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "A rectangle translating to the right\nA rectangle shrinking to the center\nA rectangle rotating clockwise about the center\nA rectangle shearing",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 136,
            "description": "<p>Replaces the current matrix with the identity matrix.</p>\n",
            "itemtype": "method",
            "name": "resetMatrix",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(50, 50);\napplyMatrix(0.5, 0.5, -0.5, 0.5, 0, 0);\nrect(0, 0, 20, 20);\n// Note that the translate is also reset.\nresetMatrix();\nrect(0, 0, 20, 20);\n</code>\n</div>"
            ],
            "alt": "A rotated retangle in the center with another at the top left corner",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 162,
            "description": "<p>Rotates a shape the amount specified by the angle parameter. This\nfunction accounts for angleMode, so angles can be entered in either\nRADIANS or DEGREES.\n<br><br>\nObjects are always rotated around their relative position to the\norigin and positive numbers rotate objects in a clockwise direction.\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nrotate(HALF_PI) and then rotate(HALF_PI) is the same as rotate(PI).\nAll tranformations are reset when draw() begins again.\n<br><br>\nTechnically, rotate() multiplies the current transformation matrix\nby a rotation matrix. This function can be further controlled by\nthe push() and pop().</p>\n",
            "itemtype": "method",
            "name": "rotate",
            "params": [
                {
                    "name": "angle",
                    "description": "<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n",
                    "type": "Number"
                },
                {
                    "name": "axis",
                    "description": "<p>(in 3d) the axis to rotate around</p>\n",
                    "type": "p5.Vector|Number[]",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(width / 2, height / 2);\nrotate(PI / 3.0);\nrect(-26, -26, 52, 52);\n</code>\n</div>"
            ],
            "alt": "white 52x52 rect with black outline at center rotated counter 45 degrees",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 208,
            "description": "<p>Rotates around X axis.</p>\n",
            "itemtype": "method",
            "name": "rotateX",
            "params": [
                {
                    "name": "rad",
                    "description": "<p>angles in radians</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateX(millis() / 1000);\n  box();\n}\n</code>\n</div>"
            ],
            "alt": "3d box rotating around the x axis.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 240,
            "description": "<p>Rotates around Y axis.</p>\n",
            "itemtype": "method",
            "name": "rotateY",
            "params": [
                {
                    "name": "rad",
                    "description": "<p>angles in radians</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateY(millis() / 1000);\n  box();\n}\n</code>\n</div>"
            ],
            "alt": "3d box rotating around the y axis.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 272,
            "description": "<p>Rotates around Z axis. Webgl mode only.</p>\n",
            "itemtype": "method",
            "name": "rotateZ",
            "params": [
                {
                    "name": "rad",
                    "description": "<p>angles in radians</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateZ(millis() / 1000);\n  box();\n}\n</code>\n</div>"
            ],
            "alt": "3d box rotating around the z axis.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 304,
            "description": "<p>Increases or decreases the size of a shape by expanding and contracting\nvertices. Objects always scale from their relative origin to the\ncoordinate system. Scale values are specified as decimal percentages.\nFor example, the function call scale(2.0) increases the dimension of a\nshape by 200%.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function multiply the effect. For example, calling scale(2.0)\nand then scale(1.5) is the same as scale(3.0). If scale() is called\nwithin draw(), the transformation is reset when the loop begins again.\n<br><br>\nUsing this function with the z parameter is only available in WEBGL mode.\nThis function can be further controlled with push() and pop().</p>\n",
            "itemtype": "method",
            "name": "scale",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(width / 2, height / 2);\nrotate(PI / 3.0);\nrect(-26, -26, 52, 52);\n</code>\n</div>\n\n<div>\n<code>\nrect(30, 20, 50, 50);\nscale(0.5, 1.3);\nrect(30, 20, 50, 50);\n</code>\n</div>"
            ],
            "alt": "white 52x52 rect with black outline at center rotated counter 45 degrees\n2 white rects with black outline- 1 50x50 at center. other 25x65 bottom left",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform",
            "overloads": [
                {
                    "line": 304,
                    "params": [
                        {
                            "name": "s",
                            "description": "<p>percent to scale the object, or percentage to\n                     scale the object in the x-axis if multiple arguments\n                     are given</p>\n",
                            "type": "Number|p5.Vector|Number[]"
                        },
                        {
                            "name": "y",
                            "description": "<p>percent to scale the object in the y-axis</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "z",
                            "description": "<p>percent to scale the object in the z-axis (webgl only)</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 349,
                    "params": [
                        {
                            "name": "scales",
                            "description": "<p>per-axis percents to scale the object</p>\n",
                            "type": "p5.Vector|Number[]"
                        }
                    ],
                    "chainable": 1
                }
            ]
        },
        {
            "file": "src/core/transform.js",
            "line": 379,
            "description": "<p>Shears a shape around the x-axis the amount specified by the angle\nparameter. Angles should be specified in the current angleMode.\nObjects are always sheared around their relative position to the origin\nand positive numbers shear objects in a clockwise direction.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nshearX(PI/2) and then shearX(PI/2) is the same as shearX(PI).\nIf shearX() is called within the draw(), the transformation is reset when\nthe loop begins again.\n<br><br>\nTechnically, shearX() multiplies the current transformation matrix by a\nrotation matrix. This function can be further controlled by the\npush() and pop() functions.</p>\n",
            "itemtype": "method",
            "name": "shearX",
            "params": [
                {
                    "name": "angle",
                    "description": "<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(width / 4, height / 4);\nshearX(PI / 4.0);\nrect(0, 0, 30, 30);\n</code>\n</div>"
            ],
            "alt": "white irregular quadrilateral with black outline at top middle.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 421,
            "description": "<p>Shears a shape around the y-axis the amount specified by the angle\nparameter. Angles should be specified in the current angleMode. Objects\nare always sheared around their relative position to the origin and\npositive numbers shear objects in a clockwise direction.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nshearY(PI/2) and then shearY(PI/2) is the same as shearY(PI). If\nshearY() is called within the draw(), the transformation is reset when\nthe loop begins again.\n<br><br>\nTechnically, shearY() multiplies the current transformation matrix by a\nrotation matrix. This function can be further controlled by the\npush() and pop() functions.</p>\n",
            "itemtype": "method",
            "name": "shearY",
            "params": [
                {
                    "name": "angle",
                    "description": "<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(width / 4, height / 4);\nshearY(PI / 4.0);\nrect(0, 0, 30, 30);\n</code>\n</div>"
            ],
            "alt": "white irregular quadrilateral with black outline at middle bottom.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/transform.js",
            "line": 463,
            "description": "<p>Specifies an amount to displace objects within the display window.\nThe x parameter specifies left/right translation, the y parameter\nspecifies up/down translation.\n<br><br>\nTransformations are cumulative and apply to everything that happens after\nand subsequent calls to the function accumulates the effect. For example,\ncalling translate(50, 0) and then translate(20, 0) is the same as\ntranslate(70, 0). If translate() is called within draw(), the\ntransformation is reset when the loop begins again. This function can be\nfurther controlled by using push() and pop().</p>\n",
            "itemtype": "method",
            "name": "translate",
            "params": [
                {
                    "name": "x",
                    "description": "<p>left/right translation</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>up/down translation</p>\n",
                    "type": "Number"
                },
                {
                    "name": "z",
                    "description": "<p>forward/backward translation (webgl only)</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(30, 20);\nrect(0, 0, 55, 55);\n</code>\n</div>\n\n<div>\n<code>\nrect(0, 0, 55, 55); // Draw rect at original 0,0\ntranslate(30, 20);\nrect(0, 0, 55, 55); // Draw rect at new 0,0\ntranslate(14, 14);\nrect(0, 0, 55, 55); // Draw rect at new 0,0\n</code>\n</div>"
            ],
            "alt": "white 55x55 rect with black outline at center right.\n3 white 55x55 rects with black outlines at top-l, center-r and bottom-r.",
            "class": "p5",
            "module": "Transform",
            "submodule": "Transform"
        },
        {
            "file": "src/core/vertex.js",
            "line": 22,
            "description": "<p>Use the beginContour() and endContour() functions to create negative\nshapes within shapes such as the center of the letter &#39;O&#39;. beginContour()\nbegins recording vertices for the shape and endContour() stops recording.\nThe vertices that define a negative shape must &quot;wind&quot; in the opposite\ndirection from the exterior shape. First draw vertices for the exterior\nclockwise order, then for internal shapes, draw vertices\nshape in counter-clockwise.\n<br><br>\nThese functions can only be used within a beginShape()/endShape() pair and\ntransformations such as translate(), rotate(), and scale() do not work\nwithin a beginContour()/endContour() pair. It is also not possible to use\nother shapes, such as ellipse() or rect() within.</p>\n",
            "itemtype": "method",
            "name": "beginContour",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(50, 50);\nstroke(255, 0, 0);\nbeginShape();\n// Exterior part of shape, clockwise winding\nvertex(-40, -40);\nvertex(40, -40);\nvertex(40, 40);\nvertex(-40, 40);\n// Interior part of shape, counter-clockwise winding\nbeginContour();\nvertex(-20, -20);\nvertex(-20, 20);\nvertex(20, 20);\nvertex(20, -20);\nendContour();\nendShape(CLOSE);\n</code>\n</div>"
            ],
            "alt": "white rect and smaller grey rect with red outlines in center of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 70,
            "description": "<p>Using the beginShape() and endShape() functions allow creating more\ncomplex forms. beginShape() begins recording vertices for a shape and\nendShape() stops recording. The value of the kind parameter tells it which\ntypes of shapes to create from the provided vertices. With no mode\nspecified, the shape can be any irregular polygon.\n<br><br>\nThe parameters available for beginShape() are POINTS, LINES, TRIANGLES,\nTRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After calling the\nbeginShape() function, a series of vertex() commands must follow. To stop\ndrawing the shape, call endShape(). Each shape will be outlined with the\ncurrent stroke color and filled with the fill color.\n<br><br>\nTransformations such as translate(), rotate(), and scale() do not work\nwithin beginShape(). It is also not possible to use other shapes, such as\nellipse() or rect() within beginShape().</p>\n",
            "itemtype": "method",
            "name": "beginShape",
            "params": [
                {
                    "name": "kind",
                    "description": "<p>either POINTS, LINES, TRIANGLES, TRIANGLE_FAN\n                               TRIANGLE_STRIP, QUADS, or QUAD_STRIP</p>\n",
                    "type": "Constant",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape(CLOSE);\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(POINTS);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(LINES);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape(CLOSE);\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLES);\nvertex(30, 75);\nvertex(40, 20);\nvertex(50, 75);\nvertex(60, 20);\nvertex(70, 75);\nvertex(80, 20);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLE_STRIP);\nvertex(30, 75);\nvertex(40, 20);\nvertex(50, 75);\nvertex(60, 20);\nvertex(70, 75);\nvertex(80, 20);\nvertex(90, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLE_FAN);\nvertex(57.5, 50);\nvertex(57.5, 15);\nvertex(92, 50);\nvertex(57.5, 85);\nvertex(22, 50);\nvertex(57.5, 15);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(QUADS);\nvertex(30, 20);\nvertex(30, 75);\nvertex(50, 75);\nvertex(50, 20);\nvertex(65, 20);\nvertex(65, 75);\nvertex(85, 75);\nvertex(85, 20);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(QUAD_STRIP);\nvertex(30, 20);\nvertex(30, 75);\nvertex(50, 20);\nvertex(50, 75);\nvertex(65, 20);\nvertex(65, 75);\nvertex(85, 20);\nvertex(85, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape();\nvertex(20, 20);\nvertex(40, 20);\nvertex(40, 40);\nvertex(60, 40);\nvertex(60, 60);\nvertex(20, 60);\nendShape(CLOSE);\n</code>\n</div>"
            ],
            "alt": "white square-shape with black outline in middle-right of canvas.\n4 black points in a square shape in middle-right of canvas.\n2 horizontal black lines. In the top-right and bottom-right of canvas.\n3 line shape with horizontal on top, vertical in middle and horizontal bottom.\nsquare line shape in middle-right of canvas.\n2 white triangle shapes mid-right canvas. left one pointing up and right down.\n5 horizontal interlocking and alternating white triangles in mid-right canvas.\n4 interlocking white triangles in 45 degree rotated square-shape.\n2 white rectangle shapes in mid-right canvas. Both 20x55.\n3 side-by-side white rectangles center rect is smaller in mid-right canvas.\nThick white l-shape with black outline mid-top-left of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 269,
            "description": "<p>Specifies vertex coordinates for Bezier curves. Each call to\nbezierVertex() defines the position of two control points and\none anchor point of a Bezier curve, adding a new segment to a\nline or shape.\n<br><br>\nThe first time bezierVertex() is used within a\nbeginShape() call, it must be prefaced with a call to vertex()\nto set the first anchor point. This function must be used between\nbeginShape() and endShape() and only when there is no MODE\nparameter specified to beginShape().</p>\n",
            "itemtype": "method",
            "name": "bezierVertex",
            "params": [
                {
                    "name": "x2",
                    "description": "<p>x-coordinate for the first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y2",
                    "description": "<p>y-coordinate for the first control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "x3",
                    "description": "<p>x-coordinate for the second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y3",
                    "description": "<p>y-coordinate for the second control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "x4",
                    "description": "<p>x-coordinate for the anchor point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y4",
                    "description": "<p>y-coordinate for the anchor point</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nbezierVertex(50, 80, 60, 25, 30, 20);\nendShape();\n</code>\n</div>"
            ],
            "alt": "crescent-shaped line in middle of canvas. Points facing left.\nwhite crescent shape in middle of canvas. Points facing left.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 335,
            "description": "<p>Specifies vertex coordinates for curves. This function may only\nbe used between beginShape() and endShape() and only when there\nis no MODE parameter specified to beginShape().\n<br><br>\nThe first and last points in a series of curveVertex() lines will be used to\nguide the beginning and end of a the curve. A minimum of four\npoints is required to draw a tiny curve between the second and\nthird points. Adding a fifth point with curveVertex() will draw\nthe curve between the second, third, and fourth points. The\ncurveVertex() function is an implementation of Catmull-Rom\nsplines.</p>\n",
            "itemtype": "method",
            "name": "curveVertex",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the vertex</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the vertex</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nbeginShape();\ncurveVertex(84, 91);\ncurveVertex(84, 91);\ncurveVertex(68, 19);\ncurveVertex(21, 17);\ncurveVertex(32, 100);\ncurveVertex(32, 100);\nendShape();\n</code>\n</div>"
            ],
            "alt": "Upside-down u-shape line, mid canvas. left point extends beyond canvas view.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 378,
            "description": "<p>Use the beginContour() and endContour() functions to create negative\nshapes within shapes such as the center of the letter &#39;O&#39;. beginContour()\nbegins recording vertices for the shape and endContour() stops recording.\nThe vertices that define a negative shape must &quot;wind&quot; in the opposite\ndirection from the exterior shape. First draw vertices for the exterior\nclockwise order, then for internal shapes, draw vertices\nshape in counter-clockwise.\n<br><br>\nThese functions can only be used within a beginShape()/endShape() pair and\ntransformations such as translate(), rotate(), and scale() do not work\nwithin a beginContour()/endContour() pair. It is also not possible to use\nother shapes, such as ellipse() or rect() within.</p>\n",
            "itemtype": "method",
            "name": "endContour",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\ntranslate(50, 50);\nstroke(255, 0, 0);\nbeginShape();\n// Exterior part of shape, clockwise winding\nvertex(-40, -40);\nvertex(40, -40);\nvertex(40, 40);\nvertex(-40, 40);\n// Interior part of shape, counter-clockwise winding\nbeginContour();\nvertex(-20, -20);\nvertex(-20, 20);\nvertex(20, 20);\nvertex(20, -20);\nendContour();\nendShape(CLOSE);\n</code>\n</div>"
            ],
            "alt": "white rect and smaller grey rect with red outlines in center of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 438,
            "description": "<p>The endShape() function is the companion to beginShape() and may only be\ncalled after beginShape(). When endshape() is called, all of image data\ndefined since the previous call to beginShape() is written into the image\nbuffer. The constant CLOSE as the value for the MODE parameter to close\nthe shape (to connect the beginning and the end).</p>\n",
            "itemtype": "method",
            "name": "endShape",
            "params": [
                {
                    "name": "mode",
                    "description": "<p>use CLOSE to close the shape</p>\n",
                    "type": "Constant",
                    "optional": true
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\n\nbeginShape();\nvertex(20, 20);\nvertex(45, 20);\nvertex(45, 80);\nendShape(CLOSE);\n\nbeginShape();\nvertex(50, 20);\nvertex(75, 20);\nvertex(75, 80);\nendShape();\n</code>\n</div>"
            ],
            "alt": "Triangle line shape with smallest interior angle on bottom and upside-down L.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 523,
            "description": "<p>Specifies vertex coordinates for quadratic Bezier curves. Each call to\nquadraticVertex() defines the position of one control points and one\nanchor point of a Bezier curve, adding a new segment to a line or shape.\nThe first time quadraticVertex() is used within a beginShape() call, it\nmust be prefaced with a call to vertex() to set the first anchor point.\nThis function must be used between beginShape() and endShape() and only\nwhen there is no MODE parameter specified to beginShape().</p>\n",
            "itemtype": "method",
            "name": "quadraticVertex",
            "params": [
                {
                    "name": "cx",
                    "description": "<p>x-coordinate for the control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "cy",
                    "description": "<p>y-coordinate for the control point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "x3",
                    "description": "<p>x-coordinate for the anchor point</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y3",
                    "description": "<p>y-coordinate for the anchor point</p>\n",
                    "type": "Number"
                }
            ],
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nnoFill();\nstrokeWeight(4);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nstrokeWeight(4);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nquadraticVertex(20, 80, 80, 80);\nvertex(80, 60);\nendShape();\n</code>\n</div>"
            ],
            "alt": "arched-shaped black line with 4 pixel thick stroke weight.\nbackwards s-shaped black line with 4 pixel thick stroke weight.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex"
        },
        {
            "file": "src/core/vertex.js",
            "line": 601,
            "description": "<p>All shapes are constructed by connecting a series of vertices. vertex()\nis used to specify the vertex coordinates for points, lines, triangles,\nquads, and polygons. It is used exclusively within the beginShape() and\nendShape() functions.</p>\n",
            "itemtype": "method",
            "name": "vertex",
            "chainable": 1,
            "example": [
                "\n<div>\n<code>\nbeginShape(POINTS);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>"
            ],
            "alt": "4 black points in a square shape in middle-right of canvas.",
            "class": "p5",
            "module": "Shape",
            "submodule": "Vertex",
            "overloads": [
                {
                    "line": 601,
                    "params": [
                        {
                            "name": "x",
                            "description": "<p>x-coordinate of the vertex</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "<p>y-coordinate of the vertex</p>\n",
                            "type": "Number"
                        }
                    ],
                    "chainable": 1
                },
                {
                    "line": 627,
                    "params": [
                        {
                            "name": "x",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "",
                            "type": "Number"
                        },
                        {
                            "name": "z",
                            "description": "<p>z-coordinate of the vertex</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "u",
                            "description": "<p>the vertex&#39;s texture u-coordinate</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "v",
                            "description": "<p>the vertex&#39;s texture v-coordinate</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 16,
            "description": "<p>Creates a new instance of p5.StringDict using the key, value pair\n or object you provide.</p>\n",
            "itemtype": "method",
            "name": "createStringDict",
            "params": [
                {
                    "name": "key",
                    "description": "<p>or object</p>\n",
                    "type": "String|Object"
                },
                {
                    "name": "value",
                    "description": "",
                    "type": "String"
                }
            ],
            "return": {
                "description": "",
                "type": "p5.StringDict"
            },
            "example": [
                "\n <div class=\"norender\">\n <code>\n function setup() {\n   var myDictionary = createStringDict('p5', 'js');\n   print(myDictionary.hasKey('p5')); // logs true to console\n }\n </code></div>"
            ],
            "class": "p5",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 41,
            "description": "<p>Creates a new instance of p5.NumberDict using the key, value pair\n or object you provide.</p>\n",
            "itemtype": "method",
            "name": "createNumberDict",
            "params": [
                {
                    "name": "key",
                    "description": "<p>or object</p>\n",
                    "type": "Number|Object"
                },
                {
                    "name": "value",
                    "description": "",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "",
                "type": "p5.NumberDict"
            },
            "example": [
                "\n <div class=\"norender\">\n <code>\n function setup() {\n   var myDictionary = createNumberDict('p5', 42);\n   print(myDictionary.hasKey('p5')); // logs true to console\n }\n </code></div>"
            ],
            "class": "p5",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 86,
            "description": "<p>Returns the number of key-value pairs currently in Dictionary object</p>\n",
            "itemtype": "method",
            "name": "size",
            "return": {
                "description": "the number of key-value pairs in Dictionary object",
                "type": "Integer"
            },
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict(1, 10);\n  myDictionary.create(2, 20);\n  myDictionary.create(3, 30);\n  print(myDictionary.size()); // value of amt is 3\n}\n</code></div>\n"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 108,
            "description": "<p>Returns true if key exists in Dictionary\notherwise returns false</p>\n",
            "itemtype": "method",
            "name": "hasKey",
            "params": [
                {
                    "name": "key",
                    "description": "<p>that you want to access</p>\n",
                    "type": "Number|String"
                }
            ],
            "return": {
                "description": "whether that key exists in Dictionary",
                "type": "Boolean"
            },
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  print(myDictionary.hasKey('p5')); // logs true to console\n}\n</code></div>\n"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 131,
            "description": "<p>Returns value stored at supplied key.</p>\n",
            "itemtype": "method",
            "name": "get",
            "params": [
                {
                    "name": "key",
                    "description": "<p>that you want to access</p>\n",
                    "type": "Number|String"
                }
            ],
            "return": {
                "description": "the value stored at that key",
                "type": "Number|String"
            },
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  var myValue = myDictionary.get('p5');\n  print(myValue === 'js'); // logs true to console\n}\n</code></div>\n"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 158,
            "description": "<p>Changes the value of key if in it already exists in\nin the Dictionary otherwise makes a new key-value pair</p>\n",
            "itemtype": "method",
            "name": "set",
            "params": [
                {
                    "name": "key",
                    "description": "",
                    "type": "Number|String"
                },
                {
                    "name": "value",
                    "description": "",
                    "type": "Number|String"
                }
            ],
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  myDictionary.set('p5', 'JS');\n  myDictionary.print();\n  // above logs \"key: p5 - value: JS\" to console\n}\n</code></div>\n"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 187,
            "description": "<p>private helper function to handle the user passing objects in\nduring construction or calls to create()</p>\n",
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 198,
            "description": "<p>Creates a key-value pair in the Dictionary</p>\n",
            "itemtype": "method",
            "name": "create",
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n}\n</code></div>"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary",
            "overloads": [
                {
                    "line": 198,
                    "params": [
                        {
                            "name": "key",
                            "description": "",
                            "type": "Number|String"
                        },
                        {
                            "name": "value",
                            "description": "",
                            "type": "Number|String"
                        }
                    ]
                },
                {
                    "line": 216,
                    "params": [
                        {
                            "name": "obj",
                            "description": "<p>key/value pair</p>\n",
                            "type": "Object"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 234,
            "description": "<p>Empties Dictionary of all key-value pairs</p>\n",
            "itemtype": "method",
            "name": "clear",
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  print(myDictionary.hasKey('p5')); // prints 'true'\n  myDictionary.clear();\n  print(myDictionary.hasKey('p5')); // prints 'false'\n}\n</code>\n</div>"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 254,
            "description": "<p>Removes a key-value pair in the Dictionary</p>\n",
            "itemtype": "method",
            "name": "remove",
            "params": [
                {
                    "name": "key",
                    "description": "<p>for the pair to remove</p>\n",
                    "type": "Number|String"
                }
            ],
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n  myDictionary.remove('p5');\n  myDictionary.print();\n  // above logs \"key: happy value: coding\" to console\n}\n</code></div>\n"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 284,
            "description": "<p>Logs the list of items currently in the Dictionary to the console</p>\n",
            "itemtype": "method",
            "name": "print",
            "example": [
                "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  var myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n}\n</code>\n</div>"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 308,
            "description": "<p>Converts the Dictionary into a CSV file for local\nstorage.</p>\n",
            "itemtype": "method",
            "name": "saveTable",
            "example": [
                "\n<div>\n<code>\ncreateButton('save')\n  .position(10, 10)\n  .mousePressed(function() {\n    createNumberDict({\n      john: 1940,\n     paul: 1942,\n     george: 1943,\n     ringo: 1940\n    }).saveTable('beatles');\n  });\n</code>\n</div>"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 341,
            "description": "<p>Converts the Dictionary into a JSON file for local\nstorage.</p>\n",
            "itemtype": "method",
            "name": "saveJSON",
            "example": [
                "\n<div>\n<code>\ncreateButton('save')\n  .position(10, 10)\n  .mousePressed(function() {\n    createNumberDict({\n      john: 1940,\n     paul: 1942,\n     george: 1943,\n     ringo: 1940\n    }).saveJSON('beatles');\n  });\n</code>\n</div>"
            ],
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 367,
            "description": "<p>private helper function to ensure that the user passed in valid\nvalues for the Dictionary type</p>\n",
            "class": "p5.TypedDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 414,
            "description": "<p>private helper function to ensure that the user passed in valid\nvalues for the Dictionary type</p>\n",
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 423,
            "description": "<p>Add to a value stored at a certain key\nThe sum is stored in that location in the Dictionary.</p>\n",
            "itemtype": "method",
            "name": "add",
            "params": [
                {
                    "name": "Key",
                    "description": "<p>for value you wish to add to</p>\n",
                    "type": "Number"
                },
                {
                    "name": "Amount",
                    "description": "<p>to add to the value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict(2, 5);\n  myDictionary.add(2, 2);\n  console.log(myDictionary.get(2)); // logs 7 to console.\n}\n</code></div>\n\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 451,
            "description": "<p>Subtract from a value stored at a certain key\nThe difference is stored in that location in the Dictionary.</p>\n",
            "itemtype": "method",
            "name": "sub",
            "params": [
                {
                    "name": "Key",
                    "description": "<p>for value you wish to subtract from</p>\n",
                    "type": "Number"
                },
                {
                    "name": "Amount",
                    "description": "<p>to subtract from the value</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict(2, 5);\n  myDictionary.sub(2, 2);\n  console.log(myDictionary.get(2)); // logs 3 to console.\n}\n</code></div>\n\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 475,
            "description": "<p>Multiply a value stored at a certain key\nThe product is stored in that location in the Dictionary.</p>\n",
            "itemtype": "method",
            "name": "mult",
            "params": [
                {
                    "name": "Key",
                    "description": "<p>for value you wish to multiply</p>\n",
                    "type": "Number"
                },
                {
                    "name": "Amount",
                    "description": "<p>to multiply the value by</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict(2, 4);\n  myDictionary.mult(2, 2);\n  console.log(myDictionary.get(2)); // logs 8 to console.\n}\n</code></div>\n\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 503,
            "description": "<p>Divide a value stored at a certain key\nThe quotient is stored in that location in the Dictionary.</p>\n",
            "itemtype": "method",
            "name": "div",
            "params": [
                {
                    "name": "Key",
                    "description": "<p>for value you wish to divide</p>\n",
                    "type": "Number"
                },
                {
                    "name": "Amount",
                    "description": "<p>to divide the value by</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict(2, 8);\n  myDictionary.div(2, 2);\n  console.log(myDictionary.get(2)); // logs 4 to console.\n}\n</code></div>\n\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 531,
            "description": "<p>private helper function for finding lowest or highest value\nthe argument &#39;flip&#39; is used to flip the comparison arrow\nfrom &#39;less than&#39; to &#39;greater than&#39;</p>\n",
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 554,
            "description": "<p>Return the lowest value.</p>\n",
            "itemtype": "method",
            "name": "minValue",
            "return": {
                "description": "",
                "type": "Number"
            },
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict({ 2: -10, 4: 0.65, 1.2: 3 });\n  var lowestValue = myDictionary.minValue(); // value is -10\n  print(lowestValue);\n}\n</code></div>\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 575,
            "description": "<p>Return the highest value.</p>\n",
            "itemtype": "method",
            "name": "maxValue",
            "return": {
                "description": "",
                "type": "Number"
            },
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict({ 2: -10, 4: 0.65, 1.2: 3 });\n  var highestValue = myDictionary.maxValue(); // value is 3\n  print(highestValue);\n}\n</code></div>\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 596,
            "description": "<p>private helper function for finding lowest or highest key\nthe argument &#39;flip&#39; is used to flip the comparison arrow\nfrom &#39;less than&#39; to &#39;greater than&#39;</p>\n",
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 619,
            "description": "<p>Return the lowest key.</p>\n",
            "itemtype": "method",
            "name": "minKey",
            "return": {
                "description": "",
                "type": "Number"
            },
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict({ 2: 4, 4: 6, 1.2: 3 });\n  var lowestKey = myDictionary.minKey(); // value is 1.2\n  print(lowestKey);\n}\n</code></div>\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/data/p5.TypedDict.js",
            "line": 640,
            "description": "<p>Return the highest key.</p>\n",
            "itemtype": "method",
            "name": "maxKey",
            "return": {
                "description": "",
                "type": "Number"
            },
            "example": [
                "\n<div class='norender'>\n<code>\nfunction setup() {\n  var myDictionary = createNumberDict({ 2: 4, 4: 6, 1.2: 3 });\n  var highestKey = myDictionary.maxKey(); // value is 4\n  print(highestKey);\n}\n</code></div>\n"
            ],
            "class": "p5.NumberDict",
            "module": "Data",
            "submodule": "Dictionary"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 12,
            "description": "<p>The system variable deviceOrientation always contains the orientation of\nthe device. The value of this variable will either be set &#39;landscape&#39;\nor &#39;portrait&#39;. If no data is available it will be set to &#39;undefined&#39;.\neither LANDSCAPE or PORTRAIT.</p>\n",
            "itemtype": "property",
            "name": "deviceOrientation",
            "type": "Constant",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 23,
            "description": "<p>The system variable accelerationX always contains the acceleration of the\ndevice along the x axis. Value is represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "accelerationX",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 32,
            "description": "<p>The system variable accelerationY always contains the acceleration of the\ndevice along the y axis. Value is represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "accelerationY",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 41,
            "description": "<p>The system variable accelerationZ always contains the acceleration of the\ndevice along the z axis. Value is represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "accelerationZ",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 50,
            "description": "<p>The system variable pAccelerationX always contains the acceleration of the\ndevice along the x axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "pAccelerationX",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 60,
            "description": "<p>The system variable pAccelerationY always contains the acceleration of the\ndevice along the y axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "pAccelerationY",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 70,
            "description": "<p>The system variable pAccelerationZ always contains the acceleration of the\ndevice along the z axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n",
            "itemtype": "property",
            "name": "pAccelerationZ",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 91,
            "description": "<p>The system variable rotationX always contains the rotation of the\ndevice along the x axis. Value is represented as 0 to +/-180 degrees.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n",
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  //rotateZ(radians(rotationZ));\n  rotateX(radians(rotationX));\n  //rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>"
            ],
            "itemtype": "property",
            "name": "rotationX",
            "type": "Number",
            "readonly": "",
            "alt": "red horizontal line right, green vertical line bottom. black background.",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 125,
            "description": "<p>The system variable rotationY always contains the rotation of the\ndevice along the y axis. Value is represented as 0 to +/-90 degrees.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n",
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  //rotateZ(radians(rotationZ));\n  //rotateX(radians(rotationX));\n  rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>"
            ],
            "itemtype": "property",
            "name": "rotationY",
            "type": "Number",
            "readonly": "",
            "alt": "red horizontal line right, green vertical line bottom. black background.",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 158,
            "description": "<p>The system variable rotationZ always contains the rotation of the\ndevice along the z axis. Value is represented as 0 to 359 degrees.\n<br><br>\nUnlike rotationX and rotationY, this variable is available for devices\nwith a built-in compass only.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n",
            "example": [
                "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  rotateZ(radians(rotationZ));\n  //rotateX(radians(rotationX));\n  //rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>"
            ],
            "itemtype": "property",
            "name": "rotationZ",
            "type": "Number",
            "readonly": "",
            "alt": "red horizontal line right, green vertical line bottom. black background.",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 194,
            "description": "<p>The system variable pRotationX always contains the rotation of the\ndevice along the x axis in the frame previous to the current frame. Value\nis represented as 0 to +/-180 degrees.\n<br><br>\npRotationX can also be used with rotationX to determine the rotate\ndirection of the device along the X-axis.</p>\n",
            "example": [
                "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationX - pRotationX < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nvar rotateDirection = 'clockwise';\n\n// Simple range conversion to make things simpler.\n// This is not absolutely necessary but the logic\n// will be different in that case.\n\nvar rX = rotationX + 180;\nvar pRX = pRotationX + 180;\n\nif ((rX - pRX > 0 && rX - pRX < 270) || rX - pRX < -270) {\n  rotateDirection = 'clockwise';\n} else if (rX - pRX < 0 || rX - pRX > 270) {\n  rotateDirection = 'counter-clockwise';\n}\n\nprint(rotateDirection);\n</code>\n</div>"
            ],
            "alt": "no image to display.",
            "itemtype": "property",
            "name": "pRotationX",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 239,
            "description": "<p>The system variable pRotationY always contains the rotation of the\ndevice along the y axis in the frame previous to the current frame. Value\nis represented as 0 to +/-90 degrees.\n<br><br>\npRotationY can also be used with rotationY to determine the rotate\ndirection of the device along the Y-axis.</p>\n",
            "example": [
                "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationY - pRotationY < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nvar rotateDirection = 'clockwise';\n\n// Simple range conversion to make things simpler.\n// This is not absolutely necessary but the logic\n// will be different in that case.\n\nvar rY = rotationY + 180;\nvar pRY = pRotationY + 180;\n\nif ((rY - pRY > 0 && rY - pRY < 270) || rY - pRY < -270) {\n  rotateDirection = 'clockwise';\n} else if (rY - pRY < 0 || rY - pRY > 270) {\n  rotateDirection = 'counter-clockwise';\n}\nprint(rotateDirection);\n</code>\n</div>"
            ],
            "alt": "no image to display.",
            "itemtype": "property",
            "name": "pRotationY",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 283,
            "description": "<p>The system variable pRotationZ always contains the rotation of the\ndevice along the z axis in the frame previous to the current frame. Value\nis represented as 0 to 359 degrees.\n<br><br>\npRotationZ can also be used with rotationZ to determine the rotate\ndirection of the device along the Z-axis.</p>\n",
            "example": [
                "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationZ - pRotationZ < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nvar rotateDirection = 'clockwise';\n\nif (\n  (rotationZ - pRotationZ > 0 && rotationZ - pRotationZ < 270) ||\n  rotationZ - pRotationZ < -270\n) {\n  rotateDirection = 'clockwise';\n} else if (rotationZ - pRotationZ < 0 || rotationZ - pRotationZ > 270) {\n  rotateDirection = 'counter-clockwise';\n}\nprint(rotateDirection);\n</code>\n</div>"
            ],
            "alt": "no image to display.",
            "itemtype": "property",
            "name": "pRotationZ",
            "type": "Number",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 341,
            "itemtype": "property",
            "name": "turnAxis",
            "type": "String",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 350,
            "description": "<p>The setMoveThreshold() function is used to set the movement threshold for\nthe deviceMoved() function. The default threshold is set to 0.5.</p>\n",
            "itemtype": "method",
            "name": "setMoveThreshold",
            "params": [
                {
                    "name": "value",
                    "description": "<p>The threshold value</p>\n",
                    "type": "Number"
                }
            ],
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 363,
            "description": "<p>The setShakeThreshold() function is used to set the movement threshold for\nthe deviceShaken() function. The default threshold is set to 30.</p>\n",
            "itemtype": "method",
            "name": "setShakeThreshold",
            "params": [
                {
                    "name": "value",
                    "description": "<p>The threshold value</p>\n",
                    "type": "Number"
                }
            ],
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 376,
            "description": "<p>The deviceMoved() function is called when the device is moved by more than\nthe threshold value along X, Y or Z axis. The default threshold is set to\n0.5.</p>\n",
            "itemtype": "method",
            "name": "deviceMoved",
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Run this example on a mobile device\n// Move the device around\n// to change the value.\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect in center of canvas. turns white on mobile when device moves",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 407,
            "description": "<p>The deviceTurned() function is called when the device rotates by\nmore than 90 degrees continuously.\n<br><br>\nThe axis that triggers the deviceTurned() method is stored in the turnAxis\nvariable. The deviceTurned() method can be locked to trigger on any axis:\nX, Y or Z by comparing the turnAxis variable to &#39;X&#39;, &#39;Y&#39; or &#39;Z&#39;.</p>\n",
            "itemtype": "method",
            "name": "deviceTurned",
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Run this example on a mobile device\n// Rotate the device by 90 degrees\n// to change the value.\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceTurned() {\n  if (value === 0) {\n    value = 255;\n  } else if (value === 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div>\n<code>\n// Run this example on a mobile device\n// Rotate the device by 90 degrees in the\n// X-axis to change the value.\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceTurned() {\n  if (turnAxis === 'X') {\n    if (value === 0) {\n      value = 255;\n    } else if (value === 255) {\n      value = 0;\n    }\n  }\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect in center of canvas. turns white on mobile when device turns\n50x50 black rect in center of canvas. turns white on mobile when x-axis turns",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/acceleration.js",
            "line": 466,
            "description": "<p>The deviceShaken() function is called when the device total acceleration\nchanges of accelerationX and accelerationY values is more than\nthe threshold value. The default threshold is set to 30.</p>\n",
            "itemtype": "method",
            "name": "deviceShaken",
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Run this example on a mobile device\n// Shake the device to change the value.\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceShaken() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect in center of canvas. turns white on mobile when device shakes",
            "class": "p5",
            "module": "Events",
            "submodule": "Acceleration"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 18,
            "description": "<p>The boolean system variable keyIsPressed is true if any key is pressed\nand false if no keys are pressed.</p>\n",
            "itemtype": "property",
            "name": "keyIsPressed",
            "type": "Boolean",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nfunction draw() {\n  if (keyIsPressed === true) {\n    fill(0);\n  } else {\n    fill(255);\n  }\n  rect(25, 25, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "50x50 white rect that turns black on keypress.",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 45,
            "description": "<p>The system variable key always contains the value of the most recent\nkey on the keyboard that was typed. To get the proper capitalization, it\nis best to use it within keyTyped(). For non-ASCII keys, use the keyCode\nvariable.</p>\n",
            "itemtype": "property",
            "name": "key",
            "type": "String",
            "readonly": "",
            "example": [
                "\n<div><code>\n// Click any key to display it!\n// (Not Guaranteed to be Case Sensitive)\nfunction setup() {\n  fill(245, 123, 158);\n  textSize(50);\n}\n\nfunction draw() {\n  background(200);\n  text(key, 33, 65); // Display last key pressed.\n}\n</code></div>"
            ],
            "alt": "canvas displays any key value that is pressed in pink font.",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 74,
            "description": "<p>The variable keyCode is used to detect special keys such as BACKSPACE,\nDELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW,\nDOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.\nYou can also check for custom keys by looking up the keyCode of any key\non a site like this: <a href=\"http://keycode.info/\">keycode.info</a>.</p>\n",
            "itemtype": "property",
            "name": "keyCode",
            "type": "Integer",
            "readonly": "",
            "example": [
                "\n<div><code>\nvar fillVal = 126;\nfunction draw() {\n  fill(fillVal);\n  rect(25, 25, 50, 50);\n}\n\nfunction keyPressed() {\n  if (keyCode === UP_ARROW) {\n    fillVal = 255;\n  } else if (keyCode === DOWN_ARROW) {\n    fillVal = 0;\n  }\n  return false; // prevent default\n}\n</code></div>"
            ],
            "alt": "Grey rect center. turns white when up arrow pressed and black when down",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 107,
            "description": "<p>The keyPressed() function is called once every time a key is pressed. The\nkeyCode for the key that was pressed is stored in the keyCode variable.\n<br><br>\nFor non-ASCII keys, use the keyCode variable. You can check if the keyCode\nequals BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL,\nOPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.\n<br><br>\nFor ASCII keys that was pressed is stored in the key variable. However, it\ndoes not distinguish between uppercase and lowercase. For this reason, it\nis recommended to use keyTyped() to read the key variable, in which the\ncase of the variable will be distinguished.\n<br><br>\nBecause of how operating systems handle key repeats, holding down a key\nmay cause multiple calls to keyTyped() (and keyReleased() as well). The\nrate of repeat is set by the operating system and how each computer is\nconfigured.<br><br>\nBrowsers may have different default\nbehaviors attached to various key events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "keyPressed",
            "example": [
                "\n<div>\n<code>\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div>\n<code>\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (keyCode === LEFT_ARROW) {\n    value = 255;\n  } else if (keyCode === RIGHT_ARROW) {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div class=\"norender\">\n<code>\nfunction keyPressed() {\n  // Do something\n  return false; // prevent any default behaviour\n}\n</code>\n</div>"
            ],
            "alt": "black rect center. turns white when key pressed and black when released\nblack rect center. turns white when left arrow pressed and black when right.",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 198,
            "description": "<p>The keyReleased() function is called once every time a key is released.\nSee key and keyCode for more information.<br><br>\nBrowsers may have different default\nbehaviors attached to various key events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "keyReleased",
            "example": [
                "\n<div>\n<code>\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n  return false; // prevent any default behavior\n}\n</code>\n</div>"
            ],
            "alt": "black rect center. turns white when key pressed and black when pressed again",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 254,
            "description": "<p>The keyTyped() function is called once every time a key is pressed, but\naction keys such as Ctrl, Shift, and Alt are ignored. The most recent\nkey pressed will be stored in the key variable.\n<br><br>\nBecause of how operating systems handle key repeats, holding down a key\nwill cause multiple calls to keyTyped() (and keyReleased() as well). The\nrate of repeat is set by the operating system and how each computer is\nconfigured.<br><br>\nBrowsers may have different default behaviors attached to various key\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n",
            "itemtype": "method",
            "name": "keyTyped",
            "example": [
                "\n<div>\n<code>\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyTyped() {\n  if (key === 'a') {\n    value = 255;\n  } else if (key === 'b') {\n    value = 0;\n  }\n  // uncomment to prevent any default behavior\n  // return false;\n}\n</code>\n</div>"
            ],
            "alt": "black rect center. turns white when 'a' key typed and black when 'b' pressed",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 308,
            "description": "<p>The onblur function is called when the user is no longer focused\non the p5 element. Because the keyup events will not fire if the user is\nnot focused on the element we must assume all keys currently down have\nbeen released.</p>\n",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/keyboard.js",
            "line": 318,
            "description": "<p>The keyIsDown() function checks if the key is currently down, i.e. pressed.\nIt can be used if you have an object that moves, and you want several keys\nto be able to affect its behaviour simultaneously, such as moving a\nsprite diagonally. You can put in any number representing the keyCode of\nthe key, or use any of the variable keyCode names listed\n<a href=\"http://p5js.org/reference/#p5/keyCode\">here</a>.</p>\n",
            "itemtype": "method",
            "name": "keyIsDown",
            "params": [
                {
                    "name": "code",
                    "description": "<p>The key to check for.</p>\n",
                    "type": "Number"
                }
            ],
            "return": {
                "description": "whether key is down or not",
                "type": "Boolean"
            },
            "example": [
                "\n<div><code>\nvar x = 100;\nvar y = 100;\n\nfunction setup() {\n  createCanvas(512, 512);\n}\n\nfunction draw() {\n  if (keyIsDown(LEFT_ARROW)) {\n    x -= 5;\n  }\n\n  if (keyIsDown(RIGHT_ARROW)) {\n    x += 5;\n  }\n\n  if (keyIsDown(UP_ARROW)) {\n    y -= 5;\n  }\n\n  if (keyIsDown(DOWN_ARROW)) {\n    y += 5;\n  }\n\n  clear();\n  fill(255, 0, 0);\n  ellipse(x, y, 50, 50);\n}\n</code></div>"
            ],
            "alt": "50x50 red ellipse moves left, right, up and down with arrow presses.",
            "class": "p5",
            "module": "Events",
            "submodule": "Keyboard"
        },
        {
            "file": "src/events/mouse.js",
            "line": 22,
            "description": "<p>The system variable mouseX always contains the current horizontal\nposition of the mouse, relative to (0, 0) of the canvas. If touch is\nused instead of mouse input, mouseX will hold the x value of the most\nrecent touch point.</p>\n",
            "itemtype": "property",
            "name": "mouseX",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\n// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, 0, mouseX, 100);\n}\n</code>\n</div>"
            ],
            "alt": "horizontal black line moves left and right with mouse x-position",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 48,
            "description": "<p>The system variable mouseY always contains the current vertical position\nof the mouse, relative to (0, 0) of the canvas. If touch is\nused instead of mouse input, mouseY will hold the y value of the most\nrecent touch point.</p>\n",
            "itemtype": "property",
            "name": "mouseY",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\n// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(0, mouseY, 100, mouseY);\n}\n</code>\n</div>"
            ],
            "alt": "vertical black line moves up and down with mouse y-position",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 74,
            "description": "<p>The system variable pmouseX always contains the horizontal position of\nthe mouse or finger in the frame previous to the current frame, relative to\n(0, 0) of the canvas.</p>\n",
            "itemtype": "property",
            "name": "pmouseX",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\n// Move the mouse across the canvas to leave a trail\nfunction setup() {\n  //slow down the frameRate to make it more visible\n  frameRate(10);\n}\n\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, mouseY, pmouseX, pmouseY);\n  print(pmouseX + ' -> ' + mouseX);\n}\n</code>\n</div>"
            ],
            "alt": "line trail is created from cursor movements. faster movement make longer line.",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 105,
            "description": "<p>The system variable pmouseY always contains the vertical position of the\nmouse or finger in the frame previous to the current frame, relative to\n(0, 0) of the canvas.</p>\n",
            "itemtype": "property",
            "name": "pmouseY",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n  //draw a square only if the mouse is not moving\n  if (mouseY === pmouseY && mouseX === pmouseX) {\n    rect(20, 20, 60, 60);\n  }\n\n  print(pmouseY + ' -> ' + mouseY);\n}\n</code>\n</div>"
            ],
            "alt": "60x60 black rect center, fuschia background. rect flickers on mouse movement",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 135,
            "description": "<p>The system variable winMouseX always contains the current horizontal\nposition of the mouse, relative to (0, 0) of the window.</p>\n",
            "itemtype": "property",
            "name": "winMouseX",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nvar myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n}\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  //move the canvas to the horizontal mouse position\n  //rela                    tive to the window\n  myCanvas.position(winMouseX + 1, windowHeight / 2);\n\n  //the y of the square is relative to the canvas\n  rect(20, mouseY, 60, 60);\n}\n</code>\n</div>"
            ],
            "alt": "60x60 black rect y moves with mouse y and fuschia canvas moves with mouse x",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 172,
            "description": "<p>The system variable winMouseY always contains the current vertical\nposition of the mouse, relative to (0, 0) of the window.</p>\n",
            "itemtype": "property",
            "name": "winMouseY",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nvar myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n}\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  //move the canvas to the vertical mouse position\n  //rel                    ative to the window\n  myCanvas.position(windowWidth / 2, winMouseY + 1);\n\n  //the x of the square is relative to the canvas\n  rect(mouseX, 20, 60, 60);\n}\n</code>\n</div>"
            ],
            "alt": "60x60 black rect x moves with mouse x and fuschia canvas y moves with mouse y",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 209,
            "description": "<p>The system variable pwinMouseX always contains the horizontal position\nof the mouse in the frame previous to the current frame, relative to\n(0, 0) of the window.</p>\n",
            "itemtype": "property",
            "name": "pwinMouseX",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nvar myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  noStroke();\n  fill(237, 34, 93);\n}\n\nfunction draw() {\n  clear();\n  //the difference between previous and\n  //current x position is the horizontal mouse speed\n  var speed = abs(winMouseX - pwinMouseX);\n  //change the size of the circle\n  //according to the horizontal speed\n  ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);\n  //move the canvas to the mouse position\n  myCanvas.position(winMouseX + 1, winMouseY + 1);\n}\n</code>\n</div>"
            ],
            "alt": "fuschia ellipse moves with mouse x and y. Grows and shrinks with mouse speed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 249,
            "description": "<p>The system variable pwinMouseY always contains the vertical position of\nthe mouse in the frame previous to the current frame, relative to (0, 0)\nof the window.</p>\n",
            "itemtype": "property",
            "name": "pwinMouseY",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nvar myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  noStroke();\n  fill(237, 34, 93);\n}\n\nfunction draw() {\n  clear();\n  //the difference between previous and\n  //current y position is the vertical mouse speed\n  var speed = abs(winMouseY - pwinMouseY);\n  //change the size of the circle\n  //according to the vertical speed\n  ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);\n  //move the canvas to the mouse position\n  myCanvas.position(winMouseX + 1, winMouseY + 1);\n}\n</code>\n</div>"
            ],
            "alt": "fuschia ellipse moves with mouse x and y. Grows and shrinks with mouse speed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 290,
            "description": "<p>Processing automatically tracks if the mouse button is pressed and which\nbutton is pressed. The value of the system variable mouseButton is either\nLEFT, RIGHT, or CENTER depending on which button was pressed last.\nWarning: different browsers may track mouseButton differently.</p>\n",
            "itemtype": "property",
            "name": "mouseButton",
            "type": "Constant",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    if (mouseButton === LEFT) {\n      ellipse(50, 50, 50, 50);\n    }\n    if (mouseButton === RIGHT) {\n      rect(25, 25, 50, 50);\n    }\n    if (mouseButton === CENTER) {\n      triangle(23, 75, 50, 20, 78, 75);\n    }\n  }\n\n  print(mouseButton);\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black ellipse appears on center of fuschia canvas on mouse click/press.",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 329,
            "description": "<p>The boolean system variable mouseIsPressed is true if the mouse is pressed\nand false if not.</p>\n",
            "itemtype": "property",
            "name": "mouseIsPressed",
            "type": "Boolean",
            "readonly": "",
            "example": [
                "\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    ellipse(50, 50, 50, 50);\n  } else {\n    rect(25, 25, 50, 50);\n  }\n\n  print(mouseIsPressed);\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect becomes ellipse with mouse click/press. fuschia background.",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 418,
            "description": "<p>The mouseMoved() function is called every time the mouse moves and a mouse\nbutton is not pressed.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "mouseMoved",
            "example": [
                "\n<div>\n<code>\n// Move the mouse across the page\n// to change its value\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction mouseMoved() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect becomes lighter with mouse movements until white then resets\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 462,
            "description": "<p>The mouseDragged() function is called once every time the mouse moves and\na mouse button is pressed. If no mouseDragged() function is defined, the\ntouchMoved() function will be called instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "mouseDragged",
            "example": [
                "\n<div>\n<code>\n// Drag the mouse across the page\n// to change its value\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseDragged() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction mouseDragged() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect turns lighter with mouse click and drag until white, resets\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 532,
            "description": "<p>The mousePressed() function is called once after every time a mouse button\nis pressed. The mouseButton variable (see the related reference entry)\ncan be used to determine which button has been pressed. If no\nmousePressed() function is defined, the touchStarted() function will be\ncalled instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "mousePressed",
            "example": [
                "\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mousePressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction mousePressed() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect turns white with mouse click/press.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 598,
            "description": "<p>The mouseReleased() function is called every time a mouse button is\nreleased. If no mouseReleased() function is defined, the touchEnded()\nfunction will be called instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "mouseReleased",
            "example": [
                "\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction mouseReleased() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect turns white with mouse click/press.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 665,
            "description": "<p>The mouseClicked() function is called once after a mouse button has been\npressed and then released.<br><br>\nBrowsers handle clicks differently, so this function is only guaranteed to be\nrun when the left mouse button is clicked. To handle other mouse buttons\nbeing pressed or released, see mousePressed() or mouseReleased().<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n",
            "itemtype": "method",
            "name": "mouseClicked",
            "example": [
                "\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\n\nfunction mouseClicked() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction mouseClicked() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect turns white with mouse click/press.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 724,
            "description": "<p>The doubleClicked() function is executed every time a event\nlistener has detected a dblclick event which is a part of the\nDOM L3 specification. The doubleClicked event is fired when a\npointing device button (usually a mouse&#39;s primary button)\nis clicked twice on a single element. For more info on the\ndblclick event refer to mozilla&#39;s documentation here:\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/Events/dblclick\">https://developer.mozilla.org/en-US/docs/Web/Events/dblclick</a></p>\n",
            "itemtype": "method",
            "name": "doubleClicked",
            "example": [
                "\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been double clicked\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\n\nfunction doubleClicked() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction doubleClicked() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect turns white with mouse doubleClick/press.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/mouse.js",
            "line": 782,
            "description": "<p>The function mouseWheel() is executed every time a vertical mouse wheel\nevent is detected either triggered by an actual mouse wheel or by a\ntouchpad.<br><br>\nThe event.delta property returns the amount the mouse wheel\nhave scrolled. The values can be positive or negative depending on the\nscroll direction (on OS X with &quot;natural&quot; scrolling enabled, the signs\nare inverted).<br><br>\nBrowsers may have different default behaviors attached to various\nmouse events. To prevent any default behavior for this event, add\n&quot;return false&quot; to the end of the method.<br><br>\nDue to the current support of the &quot;wheel&quot; event on Safari, the function\nmay only work as expected if &quot;return false&quot; is included while using Safari.</p>\n",
            "itemtype": "method",
            "name": "mouseWheel",
            "example": [
                "\n<div>\n<code>\nvar pos = 25;\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n  rect(25, pos, 50, 50);\n}\n\nfunction mouseWheel(event) {\n  print(event.delta);\n  //move the square according to the vertical scroll amount\n  pos += event.delta;\n  //uncomment to block page scrolling\n  //return false;\n}\n</code>\n</div>"
            ],
            "alt": "black 50x50 rect moves up and down with vertical scroll. fuschia background",
            "class": "p5",
            "module": "Events",
            "submodule": "Mouse"
        },
        {
            "file": "src/events/touch.js",
            "line": 12,
            "description": "<p>The system variable touches[] contains an array of the positions of all\ncurrent touch points, relative to (0, 0) of the canvas, and IDs identifying a\nunique touch as it moves. Each element in the array is an object with x, y,\nand id properties.</p>\n<p>The touches[] array is not supported on Safari and IE on touch-based\ndesktops (laptops).</p>\n",
            "itemtype": "property",
            "name": "touches",
            "type": "Object[]",
            "readonly": "",
            "class": "p5",
            "module": "Events",
            "submodule": "Touch"
        },
        {
            "file": "src/events/touch.js",
            "line": 57,
            "description": "<p>The touchStarted() function is called once after every time a touch is\nregistered. If no touchStarted() function is defined, the mousePressed()\nfunction will be called instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n",
            "itemtype": "method",
            "name": "touchStarted",
            "example": [
                "\n<div>\n<code>\n// Touch within the image to change\n// the value of the rectangle\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchStarted() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction touchStarted() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect turns white with touch event.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Touch"
        },
        {
            "file": "src/events/touch.js",
            "line": 120,
            "description": "<p>The touchMoved() function is called every time a touch move is registered.\nIf no touchMoved() function is defined, the mouseDragged() function will\nbe called instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n",
            "itemtype": "method",
            "name": "touchMoved",
            "example": [
                "\n<div>\n<code>\n// Move your finger across the page\n// to change its value\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction touchMoved() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect turns lighter with touch until white. resets\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Touch"
        },
        {
            "file": "src/events/touch.js",
            "line": 182,
            "description": "<p>The touchEnded() function is called every time a touch ends. If no\ntouchEnded() function is defined, the mouseReleased() function will be\ncalled instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n",
            "itemtype": "method",
            "name": "touchEnded",
            "example": [
                "\n<div>\n<code>\n// Release touch within the image to\n// change the value of the rectangle\n\nvar value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchEnded() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\nfunction touchEnded() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>"
            ],
            "alt": "50x50 black rect turns white with touch.\nno image displayed",
            "class": "p5",
            "module": "Events",
            "submodule": "Touch"
        },
        {
            "file": "src/image/filters.js",
            "line": 3,
            "description": "<p>This module defines the filters for use with image buffers.</p>\n<p>This module is basically a collection of functions stored in an object\nas opposed to modules. The functions are destructive, modifying\nthe passed in canvas rather than creating a copy.</p>\n<p>Generally speaking users of this module will use the Filters.apply method\non a canvas to create an effect.</p>\n<p>A number of functions are borrowed/adapted from\n<a href=\"http://www.html5rocks.com/en/tutorials/canvas/imagefilters/\">http://www.html5rocks.com/en/tutorials/canvas/imagefilters/</a>\nor the java processing implementation.</p>\n",
            "class": "p5",
            "module": "Events"
        },
        {
            "file": "src/image/image.js",
            "line": 8,
            "description": "<p>This module defines the p5 methods for the p5.Image class\nfor drawing images to the main display canvas.</p>\n",
            "class": "p5",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/image.js",
            "line": 18,
            "description": "<p>Creates a new p5.Image (the datatype for storing images). This provides a\nfresh buffer of pixels to play with. Set the size of the buffer with the\nwidth and height parameters.\n<br><br>\n.pixels gives access to an array containing the values for all the pixels\nin the display window.\nThese values are numbers. This array is the size (including an appropriate\nfactor for the pixelDensity) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. See .pixels for\nmore info. It may also be simpler to use set() or get().\n<br><br>\nBefore accessing the pixels of an image, the data must loaded with the\nloadPixels() function. After the array data has been modified, the\nupdatePixels() function must be run to update the changes.</p>\n",
            "itemtype": "method",
            "name": "createImage",
            "params": [
                {
                    "name": "width",
                    "description": "<p>width in pixels</p>\n",
                    "type": "Integer"
                },
                {
                    "name": "height",
                    "description": "<p>height in pixels</p>\n",
                    "type": "Integer"
                }
            ],
            "return": {
                "description": "the p5.Image object",
                "type": "p5.Image"
            },
            "example": [
                "\n<div>\n<code>\nvar img = createImage(66, 66);\nimg.loadPixels();\nfor (var i = 0; i < img.width; i++) {\n  for (var j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>\n\n<div>\n<code>\nvar img = createImage(66, 66);\nimg.loadPixels();\nfor (var i = 0; i < img.width; i++) {\n  for (var j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\nimage(img, 34, 34);\n</code>\n</div>\n\n<div>\n<code>\nvar pink = color(255, 102, 204);\nvar img = createImage(66, 66);\nimg.loadPixels();\nvar d = pixelDensity();\nvar halfImage = 4 * (width * d) * (height / 2 * d);\nfor (var i = 0; i < halfImage; i += 4) {\n  img.pixels[i] = red(pink);\n  img.pixels[i + 1] = green(pink);\n  img.pixels[i + 2] = blue(pink);\n  img.pixels[i + 3] = alpha(pink);\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>"
            ],
            "alt": "66x66 dark turquoise rect in center of canvas.\n2 gradated dark turquoise rects fade left. 1 center 1 bottom right of canvas\nno image displayed",
            "class": "p5",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/image.js",
            "line": 98,
            "description": "<p>Save the current canvas as an image. In Safari, this will open the\nimage in the window and the user must provide their own\nfilename on save-as. Other browsers will either save the\nfile immediately, or prompt the user with a dialogue window.</p>\n",
            "itemtype": "method",
            "name": "saveCanvas",
            "example": [
                "\n <div class='norender'><code>\n function setup() {\n var c = createCanvas(100, 100);\n background(255, 0, 0);\n saveCanvas(c, 'myCanvas', 'jpg');\n }\n </code></div>\n <div class='norender'><code>\n // note that this example has the same result as above\n // if no canvas is specified, defaults to main canvas\n function setup() {\n var c = createCanvas(100, 100);\n background(255, 0, 0);\n saveCanvas('myCanvas', 'jpg');\n\n // all of the following are valid\n saveCanvas(c, 'myCanvas', 'jpg');\n saveCanvas(c, 'myCanvas');\n saveCanvas(c);\n saveCanvas('myCanvas', 'png');\n saveCanvas('myCanvas');\n saveCanvas();\n }\n </code></div>"
            ],
            "alt": "no image displayed\n no image displayed\n no image displayed",
            "class": "p5",
            "module": "Image",
            "submodule": "Image",
            "overloads": [
                {
                    "line": 98,
                    "params": [
                        {
                            "name": "selectedCanvas",
                            "description": "<p>a variable\n                                representing a specific html5 canvas (optional)</p>\n",
                            "type": "p5.Element|HTMLCanvasElement"
                        },
                        {
                            "name": "filename",
                            "description": "",
                            "type": "String",
                            "optional": true
                        },
                        {
                            "name": "extension",
                            "description": "<p>&#39;jpg&#39; or &#39;png&#39;</p>\n",
                            "type": "String",
                            "optional": true
                        }
                    ]
                },
                {
                    "line": 141,
                    "params": [
                        {
                            "name": "filename",
                            "description": "",
                            "type": "String",
                            "optional": true
                        },
                        {
                            "name": "extension",
                            "description": "",
                            "type": "String",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/image.js",
            "line": 178,
            "description": "<p>Capture a sequence of frames that can be used to create a movie.\nAccepts a callback. For example, you may wish to send the frames\nto a server where they can be stored or converted into a movie.\nIf no callback is provided, the browser will pop up save dialogues in an\nattempt to download all of the images that have just been created. With the\ncallback provided the image data isn&#39;t saved by default but instead passed\nas an argument to the callback function as an array of objects, with the\nsize of array equal to the total number of frames.</p>\n<p>Note that saveFrames() will only save the first 15 frames of an animation.\nTo export longer animations, you might look into a library like\n<a href=\"https://github.com/spite/ccapture.js/\">ccapture.js</a>.</p>\n",
            "itemtype": "method",
            "name": "saveFrames",
            "params": [
                {
                    "name": "filename",
                    "description": "",
                    "type": "String"
                },
                {
                    "name": "extension",
                    "description": "<p>&#39;jpg&#39; or &#39;png&#39;</p>\n",
                    "type": "String"
                },
                {
                    "name": "duration",
                    "description": "<p>Duration in seconds to save the frames for.</p>\n",
                    "type": "Number"
                },
                {
                    "name": "framerate",
                    "description": "<p>Framerate to save the frames in.</p>\n",
                    "type": "Number"
                },
                {
                    "name": "callback",
                    "description": "<p>A callback function that will be executed\n                                to handle the image data. This function\n                                should accept an array as argument. The\n                                array will contain the specified number of\n                                frames of objects. Each object has three\n                                properties: imageData - an\n                                image/octet-stream, filename and extension.</p>\n",
                    "type": "Function(Array)",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\n function draw() {\n background(mouseX);\n }\n\n function mousePressed() {\n saveFrames('out', 'png', 1, 25, function(data) {\n   print(data);\n });\n }\n</code></div>"
            ],
            "alt": "canvas background goes from light to dark with mouse x.",
            "class": "p5",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/loading_displaying.js",
            "line": 17,
            "description": "<p>Loads an image from a path and creates a p5.Image from it.\n<br><br>\nThe image may not be immediately available for rendering\nIf you want to ensure that the image is ready before doing\nanything with it, place the loadImage() call in preload().\nYou may also supply a callback function to handle the image when it&#39;s ready.\n<br><br>\nThe path to the image should be relative to the HTML file\nthat links in your sketch. Loading an image from a URL or other\nremote location may be blocked due to your browser&#39;s built-in\nsecurity.</p>\n",
            "itemtype": "method",
            "name": "loadImage",
            "params": [
                {
                    "name": "path",
                    "description": "<p>Path of the image to be loaded</p>\n",
                    "type": "String"
                },
                {
                    "name": "successCallback",
                    "description": "<p>Function to be called once\n                               the image is loaded. Will be passed the\n                               p5.Image.</p>\n",
                    "type": "function(p5.Image)",
                    "optional": true
                },
                {
                    "name": "failureCallback",
                    "description": "<p>called with event error if\n                               the image fails to load.</p>\n",
                    "type": "Function(Event)",
                    "optional": true
                }
            ],
            "return": {
                "description": "the p5.Image object",
                "type": "p5.Image"
            },
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  // here we use a callback to display the image after loading\n  loadImage('assets/laDefense.jpg', function(img) {\n    image(img, 0, 0);\n  });\n}\n</code>\n</div>"
            ],
            "alt": "image of the underside of a white umbrella and grided ceililng above\nimage of the underside of a white umbrella and grided ceililng above",
            "class": "p5",
            "module": "Image",
            "submodule": "Loading & Displaying"
        },
        {
            "file": "src/image/loading_displaying.js",
            "line": 125,
            "description": "<p>Draw an image to the p5.js canvas.</p>\n<p>This function can be used with different numbers of parameters. The\nsimplest use requires only three parameters: img, x, and y—where (x, y) is\nthe position of the image. Two more parameters can optionally be added to\nspecify the width and height of the image.</p>\n<p>This function can also be used with all eight Number parameters. To\ndifferentiate between all these parameters, p5.js uses the language of\n&quot;destination rectangle&quot; (which corresponds to &quot;dx&quot;, &quot;dy&quot;, etc.) and &quot;source\nimage&quot; (which corresponds to &quot;sx&quot;, &quot;sy&quot;, etc.) below. Specifying the\n&quot;source image&quot; dimensions can be useful when you want to display a\nsubsection of the source image instead of the whole thing. Here&#39;s a diagram\nto explain further:\n<img src=\"assets/drawImage.png\"></img></p>\n",
            "itemtype": "method",
            "name": "image",
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  // Top-left corner of the img is at (0, 0)\n  // Width and height are the img's original width and height\n  image(img, 0, 0);\n}\n</code>\n</div>\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  background(50);\n  // Top-left corner of the img is at (10, 10)\n  // Width and height are 50 x 50\n  image(img, 10, 10, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  // Here, we use a callback to display the image after loading\n  loadImage('assets/laDefense.jpg', function(img) {\n    image(img, 0, 0);\n  });\n}\n</code>\n</div>\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/gradient.png');\n}\nfunction setup() {\n  // 1. Background image\n  // Top-left corner of the img is at (0, 0)\n  // Width and height are the img's original width and height, 100 x 100\n  image(img, 0, 0);\n  // 2. Top right image\n  // Top-left corner of destination rectangle is at (50, 0)\n  // Destination rectangle width and height are 40 x 20\n  // The next parameters are relative to the source image:\n  // - Starting at position (50, 50) on the source image, capture a 50 x 50\n  // subsection\n  // - Draw this subsection to fill the dimensions of the destination rectangle\n  image(img, 50, 0, 40, 20, 50, 50, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "image of the underside of a white umbrella and gridded ceiling above\nimage of the underside of a white umbrella and gridded ceiling above",
            "class": "p5",
            "module": "Image",
            "submodule": "Loading & Displaying",
            "overloads": [
                {
                    "line": 125,
                    "params": [
                        {
                            "name": "img",
                            "description": "<p>the image to display</p>\n",
                            "type": "p5.Image|p5.Element"
                        },
                        {
                            "name": "x",
                            "description": "<p>the x-coordinate of the top-left corner of the image</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "y",
                            "description": "<p>the y-coordinate of the top-left corner of the image</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "width",
                            "description": "<p>the width to draw the image</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "height",
                            "description": "<p>the height to draw the image</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ]
                },
                {
                    "line": 213,
                    "params": [
                        {
                            "name": "img",
                            "description": "",
                            "type": "p5.Image|p5.Element"
                        },
                        {
                            "name": "dx",
                            "description": "<p>the x-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "dy",
                            "description": "<p>the y-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "dWidth",
                            "description": "<p>the width of the destination rectangle</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "dHeight",
                            "description": "<p>the height of the destination rectangle</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "sx",
                            "description": "<p>the x-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "sy",
                            "description": "<p>the y-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "sWidth",
                            "description": "<p>the width of the subsection of the\n                          source image to draw into the destination\n                          rectangle</p>\n",
                            "type": "Number",
                            "optional": true
                        },
                        {
                            "name": "sHeight",
                            "description": "<p>the height of the subsection of the\n                           source image to draw into the destination rectangle</p>\n",
                            "type": "Number",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/loading_displaying.js",
            "line": 296,
            "description": "<p>Sets the fill value for displaying images. Images can be tinted to\nspecified colors or made transparent by including an alpha value.\n<br><br>\nTo apply transparency to an image without affecting its color, use\nwhite as the tint color and specify an alpha value. For instance,\ntint(255, 128) will make an image 50% transparent (assuming the default\nalpha range of 0-255, which can be changed with colorMode()).\n<br><br>\nThe value for the gray parameter must be less than or equal to the current\nmaximum value as specified by colorMode(). The default maximum value is\n255.</p>\n",
            "itemtype": "method",
            "name": "tint",
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(0, 153, 204); // Tint blue\n  image(img, 50, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(0, 153, 204, 126); // Tint blue and set transparency\n  image(img, 50, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(255, 126); // Apply transparency without changing color\n  image(img, 50, 0);\n}\n</code>\n</div>"
            ],
            "alt": "2 side by side images of umbrella and ceiling, one image with blue tint\nImages of umbrella and ceiling, one half of image with blue tint\n2 side by side images of umbrella and ceiling, one image translucent",
            "class": "p5",
            "module": "Image",
            "submodule": "Loading & Displaying",
            "overloads": [
                {
                    "line": 296,
                    "params": [
                        {
                            "name": "v1",
                            "description": "<p>red or hue value relative to\n                                the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v2",
                            "description": "<p>green or saturation value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "v3",
                            "description": "<p>blue or brightness value\n                                relative to the current color range</p>\n",
                            "type": "Number"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ]
                },
                {
                    "line": 369,
                    "params": [
                        {
                            "name": "value",
                            "description": "<p>a color string</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "alpha",
                            "description": "",
                            "type": "Number",
                            "optional": true
                        }
                    ]
                },
                {
                    "line": 375,
                    "params": [
                        {
                            "name": "values",
                            "description": "<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n",
                            "type": "Number[]"
                        }
                    ]
                },
                {
                    "line": 381,
                    "params": [
                        {
                            "name": "color",
                            "description": "<p>the tint color</p>\n",
                            "type": "p5.Color"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/loading_displaying.js",
            "line": 391,
            "description": "<p>Removes the current fill value for displaying images and reverts to\ndisplaying images with their original hues.</p>\n",
            "itemtype": "method",
            "name": "noTint",
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  tint(0, 153, 204); // Tint blue\n  image(img, 0, 0);\n  noTint(); // Disable tint\n  image(img, 50, 0);\n}\n</code>\n</div>"
            ],
            "alt": "2 side by side images of bricks, left image with blue tint",
            "class": "p5",
            "module": "Image",
            "submodule": "Loading & Displaying"
        },
        {
            "file": "src/image/loading_displaying.js",
            "line": 457,
            "description": "<p>Set image mode. Modifies the location from which images are drawn by\nchanging the way in which parameters given to image() are interpreted.\nThe default mode is imageMode(CORNER), which interprets the second and\nthird parameters of image() as the upper-left corner of the image. If\ntwo additional parameters are specified, they are used to set the image&#39;s\nwidth and height.\n<br><br>\nimageMode(CORNERS) interprets the second and third parameters of image()\nas the location of one corner, and the fourth and fifth parameters as the\nopposite corner.\n<br><br>\nimageMode(CENTER) interprets the second and third parameters of image()\nas the image&#39;s center point. If two additional parameters are specified,\nthey are used to set the image&#39;s width and height.</p>\n",
            "itemtype": "method",
            "name": "imageMode",
            "params": [
                {
                    "name": "mode",
                    "description": "<p>either CORNER, CORNERS, or CENTER</p>\n",
                    "type": "Constant"
                }
            ],
            "example": [
                "\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CORNER);\n  image(img, 10, 10, 50, 50);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CORNERS);\n  image(img, 10, 10, 90, 40);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CENTER);\n  image(img, 50, 50, 80, 80);\n}\n</code>\n</div>"
            ],
            "alt": "small square image of bricks\nhorizontal rectangle image of bricks\nlarge square image of bricks",
            "class": "p5",
            "module": "Image",
            "submodule": "Loading & Displaying"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 9,
            "description": "<p>This module defines the p5.Image class and P5 methods for\ndrawing images to the main display canvas.</p>\n",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 91,
            "description": "<p>Image width.</p>\n",
            "itemtype": "property",
            "name": "width",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div><code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  image(img, 0, 0);\n  for (var i = 0; i < img.width; i++) {\n    var c = img.get(i, img.height / 2);\n    stroke(c);\n    line(i, height / 2, i, height);\n  }\n}\n</code></div>"
            ],
            "alt": "rocky mountains in top and horizontal lines in corresponding colors in bottom.",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 118,
            "description": "<p>Image height.</p>\n",
            "itemtype": "property",
            "name": "height",
            "type": "Number",
            "readonly": "",
            "example": [
                "\n<div><code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  image(img, 0, 0);\n  for (var i = 0; i < img.height; i++) {\n    var c = img.get(img.width / 2, i);\n    stroke(c);\n    line(0, i, width / 2, i);\n  }\n}\n</code></div>"
            ],
            "alt": "rocky mountains on right and vertical lines in corresponding colors on left.",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 152,
            "description": "<p>Array containing the values for all the pixels in the display window.\nThese values are numbers. This array is the size (include an appropriate\nfactor for pixelDensity) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. Retina and other\nhigh denisty displays may have more pixels[] (by a factor of\npixelDensity^2).\nFor example, if the image is 100x100 pixels, there will be 40,000. With\npixelDensity = 2, there will be 160,000. The first four values\n(indices 0-3) in the array will be the R, G, B, A values of the pixel at\n(0, 0). The second four values (indices 4-7) will contain the R, G, B, A\nvalues of the pixel at (1, 0). More generally, to set values for a pixel\nat (x, y):</p>\n<pre><code class=\"lang-javascript\">var d = pixelDensity();\nfor (var i = 0; i &lt; d; i++) {\n  for (var j = 0; j &lt; d; j++) {\n    // loop over\n    idx = 4 * ((y * d + j) * width * d + (x * d + i));\n    pixels[idx] = r;\n    pixels[idx+1] = g;\n    pixels[idx+2] = b;\n    pixels[idx+3] = a;\n  }\n}\n</code></pre>\n<p><br><br>\nBefore accessing this array, the data must loaded with the loadPixels()\nfunction. After the array data has been modified, the updatePixels()\nfunction must be run to update the changes.</p>\n",
            "itemtype": "property",
            "name": "pixels",
            "type": "Number[]",
            "example": [
                "\n<div>\n<code>\nvar img = createImage(66, 66);\nimg.loadPixels();\nfor (var i = 0; i < img.width; i++) {\n  for (var j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>\n<div>\n<code>\nvar pink = color(255, 102, 204);\nvar img = createImage(66, 66);\nimg.loadPixels();\nfor (var i = 0; i < 4 * (width * height / 2); i += 4) {\n  img.pixels[i] = red(pink);\n  img.pixels[i + 1] = green(pink);\n  img.pixels[i + 2] = blue(pink);\n  img.pixels[i + 3] = alpha(pink);\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>"
            ],
            "alt": "66x66 turquoise rect in center of canvas\n66x66 pink rect in center of canvas",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 223,
            "description": "<p>Helper fxn for sharing pixel methods</p>\n",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 232,
            "description": "<p>Loads the pixels data for this image into the [pixels] attribute.</p>\n",
            "itemtype": "method",
            "name": "loadPixels",
            "example": [
                "\n<div><code>\nvar myImage;\nvar halfImage;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  myImage.loadPixels();\n  halfImage = 4 * width * height / 2;\n  for (var i = 0; i < halfImage; i++) {\n    myImage.pixels[i + halfImage] = myImage.pixels[i];\n  }\n  myImage.updatePixels();\n}\n\nfunction draw() {\n  image(myImage, 0, 0);\n}\n</code></div>"
            ],
            "alt": "2 images of rocky mountains vertically stacked",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 268,
            "description": "<p>Updates the backing canvas for this image with the contents of\nthe [pixels] array.</p>\n",
            "itemtype": "method",
            "name": "updatePixels",
            "example": [
                "\n<div><code>\nvar myImage;\nvar halfImage;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  myImage.loadPixels();\n  halfImage = 4 * width * height / 2;\n  for (var i = 0; i < halfImage; i++) {\n    myImage.pixels[i + halfImage] = myImage.pixels[i];\n  }\n  myImage.updatePixels();\n}\n\nfunction draw() {\n  image(myImage, 0, 0);\n}\n</code></div>"
            ],
            "alt": "2 images of rocky mountains vertically stacked",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image",
            "overloads": [
                {
                    "line": 268,
                    "params": [
                        {
                            "name": "x",
                            "description": "<p>x-offset of the target update area for the\n                             underlying canvas</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "y",
                            "description": "<p>y-offset of the target update area for the\n                             underlying canvas</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "w",
                            "description": "<p>height of the target update area for the\n                             underlying canvas</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "h",
                            "description": "<p>height of the target update area for the\n                             underlying canvas</p>\n",
                            "type": "Integer"
                        }
                    ]
                },
                {
                    "line": 308,
                    "params": []
                }
            ]
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 316,
            "description": "<p>Get a region of pixels from an image.</p>\n<p>If no params are passed, those whole image is returned,\nif x and y are the only params passed a single pixel is extracted\nif all params are passed a rectangle region is extracted and a p5.Image\nis returned.</p>\n<p>Returns undefined if the region is outside the bounds of the image</p>\n",
            "itemtype": "method",
            "name": "get",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the pixel</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the pixel</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "w",
                    "description": "<p>width</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "h",
                    "description": "<p>height</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "return": {
                "description": "color of pixel at x,y in array format\n                                   [R, G, B, A] or p5.Image",
                "type": "Number[]|Color|p5.Image"
            },
            "example": [
                "\n<div><code>\nvar myImage;\nvar c;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  background(myImage);\n  noStroke();\n  c = myImage.get(60, 90);\n  fill(c);\n  rect(25, 25, 50, 50);\n}\n\n//get() returns color here\n</code></div>"
            ],
            "alt": "image of rocky mountains with 50x50 green rect in front",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 361,
            "description": "<p>Set the color of a single pixel or write an image into\nthis p5.Image.</p>\n<p>Note that for a large number of pixels this will\nbe slower than directly manipulating the pixels array\nand then calling updatePixels().</p>\n",
            "itemtype": "method",
            "name": "set",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the pixel</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the pixel</p>\n",
                    "type": "Number"
                },
                {
                    "name": "a",
                    "description": "<p>grayscale value | pixel array |\n                               a p5.Color | image to copy</p>\n",
                    "type": "Number|Number[]|Object"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar img = createImage(66, 66);\nimg.loadPixels();\nfor (var i = 0; i < img.width; i++) {\n  for (var j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\nimage(img, 34, 34);\n</code>\n</div>"
            ],
            "alt": "2 gradated dark turquoise rects fade left. 1 center 1 bottom right of canvas",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 399,
            "description": "<p>Resize the image to a new width and height. To make the image scale\nproportionally, use 0 as the value for the wide or high parameter.\nFor instance, to make the width of an image 150 pixels, and change\nthe height using the same proportion, use resize(150, 0).</p>\n",
            "itemtype": "method",
            "name": "resize",
            "params": [
                {
                    "name": "width",
                    "description": "<p>the resized image width</p>\n",
                    "type": "Number"
                },
                {
                    "name": "height",
                    "description": "<p>the resized image height</p>\n",
                    "type": "Number"
                }
            ],
            "example": [
                "\n<div><code>\nvar img;\n\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(img, 0, 0);\n}\n\nfunction mousePressed() {\n  img.resize(50, 100);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains. zoomed in",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 483,
            "description": "<p>Copies a region of pixels from one image to another. If no\nsrcImage is specified this is used as the source. If the source\nand destination regions aren&#39;t the same size, it will\nautomatically resize source pixels to fit the specified\ntarget region.</p>\n",
            "itemtype": "method",
            "name": "copy",
            "example": [
                "\n<div><code>\nvar photo;\nvar bricks;\nvar x;\nvar y;\n\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks.jpg');\n}\n\nfunction setup() {\n  x = bricks.width / 2;\n  y = bricks.height / 2;\n  photo.copy(bricks, 0, 0, x, y, 0, 0, x, y);\n  image(photo, 0, 0);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains and smaller image on top of bricks at top left",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image",
            "overloads": [
                {
                    "line": 483,
                    "params": [
                        {
                            "name": "srcImage",
                            "description": "<p>source image</p>\n",
                            "type": "p5.Image|p5.Element"
                        },
                        {
                            "name": "sx",
                            "description": "<p>X coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "<p>Y coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "<p>source image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "<p>source image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "<p>X coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "<p>Y coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "<p>destination image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "<p>destination image height</p>\n",
                            "type": "Integer"
                        }
                    ]
                },
                {
                    "line": 524,
                    "params": [
                        {
                            "name": "sx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "",
                            "type": "Integer"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 563,
            "description": "<p>Masks part of an image from displaying by loading another\nimage and using it&#39;s alpha channel as an alpha channel for\nthis image.</p>\n",
            "itemtype": "method",
            "name": "mask",
            "params": [
                {
                    "name": "srcImage",
                    "description": "<p>source image</p>\n",
                    "type": "p5.Image"
                }
            ],
            "example": [
                "\n<div><code>\nvar photo, maskImage;\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n  maskImage = loadImage('assets/mask2.png');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  photo.mask(maskImage);\n  image(photo, 0, 0);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains with white at right\n\n\nhttp://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 626,
            "description": "<p>Applies an image filter to a p5.Image</p>\n",
            "itemtype": "method",
            "name": "filter",
            "params": [
                {
                    "name": "filterType",
                    "description": "<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, BLUR, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n",
                    "type": "Constant"
                },
                {
                    "name": "filterParam",
                    "description": "<p>an optional parameter unique\n                               to each filter, see above</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\nvar photo1;\nvar photo2;\n\nfunction preload() {\n  photo1 = loadImage('assets/rockies.jpg');\n  photo2 = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  photo2.filter('gray');\n  image(photo1, 0, 0);\n  image(photo2, width / 2, 0);\n}\n</code></div>"
            ],
            "alt": "2 images of rocky mountains left one in color, right in black and white",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 662,
            "description": "<p>Copies a region of pixels from one image to another, using a specified\nblend mode to do the operation.</p>\n",
            "itemtype": "method",
            "name": "blend",
            "example": [
                "\n<div><code>\nvar mountains;\nvar bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, ADD);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>\n<div><code>\nvar mountains;\nvar bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, DARKEST);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>\n<div><code>\nvar mountains;\nvar bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image",
            "overloads": [
                {
                    "line": 662,
                    "params": [
                        {
                            "name": "srcImage",
                            "description": "<p>source image</p>\n",
                            "type": "p5.Image"
                        },
                        {
                            "name": "sx",
                            "description": "<p>X coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "<p>Y coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "<p>source image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "<p>source image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "<p>X coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "<p>Y coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "<p>destination image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "<p>destination image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "blendMode",
                            "description": "<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n<p>Available blend modes are: normal | multiply | screen | overlay |\n           darken | lighten | color-dodge | color-burn | hard-light |\n           soft-light | difference | exclusion | hue | saturation |\n           color | luminosity</p>\n<p><a href=\"http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/\">http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/</a></p>\n",
                            "type": "Constant"
                        }
                    ]
                },
                {
                    "line": 741,
                    "params": [
                        {
                            "name": "sx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "blendMode",
                            "description": "",
                            "type": "Constant"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/p5.Image.js",
            "line": 784,
            "description": "<p>Saves the image to a file and force the browser to download it.\nAccepts two strings for filename and file extension\nSupports png (default) and jpg.</p>\n",
            "itemtype": "method",
            "name": "save",
            "params": [
                {
                    "name": "filename",
                    "description": "<p>give your file a name</p>\n",
                    "type": "String"
                },
                {
                    "name": "extension",
                    "description": "<p>&#39;png&#39; or &#39;jpg&#39;</p>\n",
                    "type": "String"
                }
            ],
            "example": [
                "\n<div><code>\nvar photo;\n\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(photo, 0, 0);\n}\n\nfunction keyTyped() {\n  if (key === 's') {\n    photo.save('photo', 'png');\n  }\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains.",
            "class": "p5.Image",
            "module": "Image",
            "submodule": "Image"
        },
        {
            "file": "src/image/pixels.js",
            "line": 14,
            "description": "<p><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n/Global_Objects/Uint8ClampedArray' target='_blank'>Uint8ClampedArray</a>\ncontaining the values for all the pixels in the display window.\nThese values are numbers. This array is the size (include an appropriate\nfactor for pixelDensity) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. Retina and other\nhigh density displays will have more pixels[] (by a factor of\npixelDensity^2).\nFor example, if the image is 100x100 pixels, there will be 40,000. On a\nretina display, there will be 160,000.\n<br><br>\nThe first four values (indices 0-3) in the array will be the R, G, B, A\nvalues of the pixel at (0, 0). The second four values (indices 4-7) will\ncontain the R, G, B, A values of the pixel at (1, 0). More generally, to\nset values for a pixel at (x, y):</p>\n<pre><code class=\"lang-javascript\">var d = pixelDensity();\nfor (var i = 0; i &lt; d; i++) {\n  for (var j = 0; j &lt; d; j++) {\n    // loop over\n    idx = 4 * ((y * d + j) * width * d + (x * d + i));\n    pixels[idx] = r;\n    pixels[idx+1] = g;\n    pixels[idx+2] = b;\n    pixels[idx+3] = a;\n  }\n}\n</code></pre>\n<p>While the above method is complex, it is flexible enough to work with\nany pixelDensity. Note that set() will automatically take care of\nsetting all the appropriate values in pixels[] for a given (x, y) at\nany pixelDensity, but the performance may not be as fast when lots of\nmodifications are made to the pixel array.\n<br><br>\nBefore accessing this array, the data must loaded with the loadPixels()\nfunction. After the array data has been modified, the updatePixels()\nfunction must be run to update the changes.\n<br><br>\nNote that this is not a standard javascript array.  This means that\nstandard javascript functions such as <code>slice()</code> or\n<code>arrayCopy()</code> do not\nwork.</p>",
            "itemtype": "property",
            "name": "pixels",
            "type": "Number[]",
            "example": [
                "\n<div>\n<code>\nvar pink = color(255, 102, 204);\nloadPixels();\nvar d = pixelDensity();\nvar halfImage = 4 * (width * d) * (height / 2 * d);\nfor (var i = 0; i < halfImage; i += 4) {\n  pixels[i] = red(pink);\n  pixels[i + 1] = green(pink);\n  pixels[i + 2] = blue(pink);\n  pixels[i + 3] = alpha(pink);\n}\nupdatePixels();\n</code>\n</div>"
            ],
            "alt": "top half of canvas pink, bottom grey",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/image/pixels.js",
            "line": 83,
            "description": "<p>Copies a region of pixels from one image to another, using a specified\nblend mode to do the operation.</p>\n",
            "itemtype": "method",
            "name": "blend",
            "example": [
                "\n<div><code>\nvar img0;\nvar img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);\n}\n</code></div>\n<div><code>\nvar img0;\nvar img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, DARKEST);\n}\n</code></div>\n<div><code>\nvar img0;\nvar img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, ADD);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels",
            "overloads": [
                {
                    "line": 83,
                    "params": [
                        {
                            "name": "srcImage",
                            "description": "<p>source image</p>\n",
                            "type": "p5.Image"
                        },
                        {
                            "name": "sx",
                            "description": "<p>X coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "<p>Y coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "<p>source image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "<p>source image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "<p>X coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "<p>Y coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "<p>destination image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "<p>destination image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "blendMode",
                            "description": "<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n",
                            "type": "Constant"
                        }
                    ]
                },
                {
                    "line": 156,
                    "params": [
                        {
                            "name": "sx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "blendMode",
                            "description": "",
                            "type": "Constant"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/pixels.js",
            "line": 176,
            "description": "<p>Copies a region of the canvas to another region of the canvas\nand copies a region of pixels from an image used as the srcImg parameter\ninto the canvas srcImage is specified this is used as the source. If\nthe source and destination regions aren&#39;t the same size, it will\nautomatically resize source pixels to fit the specified\ntarget region.</p>\n",
            "itemtype": "method",
            "name": "copy",
            "example": [
                "\n<div><code>\nvar img;\n\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  background(img);\n  copy(img, 7, 22, 10, 10, 35, 25, 50, 50);\n  stroke(255);\n  noFill();\n  // Rectangle shows area being copied\n  rect(7, 22, 10, 10);\n}\n</code></div>"
            ],
            "alt": "image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels",
            "overloads": [
                {
                    "line": 176,
                    "params": [
                        {
                            "name": "srcImage",
                            "description": "<p>source image</p>\n",
                            "type": "p5.Image|p5.Element"
                        },
                        {
                            "name": "sx",
                            "description": "<p>X coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "<p>Y coordinate of the source&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "<p>source image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "<p>source image height</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "<p>X coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "<p>Y coordinate of the destination&#39;s upper left corner</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "<p>destination image width</p>\n",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "<p>destination image height</p>\n",
                            "type": "Integer"
                        }
                    ]
                },
                {
                    "line": 219,
                    "params": [
                        {
                            "name": "sx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "sh",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dx",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dy",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dw",
                            "description": "",
                            "type": "Integer"
                        },
                        {
                            "name": "dh",
                            "description": "",
                            "type": "Integer"
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/image/pixels.js",
            "line": 235,
            "description": "<p>Applies a filter to the canvas.\n<br><br></p>\n<p>The presets options are:\n<br><br></p>\n<p>THRESHOLD\nConverts the image to black and white pixels depending if they are above or\nbelow the threshold defined by the level parameter. The parameter must be\nbetween 0.0 (black) and 1.0 (white). If no level is specified, 0.5 is used.\n<br><br></p>\n<p>GRAY\nConverts any colors in the image to grayscale equivalents. No parameter\nis used.\n<br><br></p>\n<p>OPAQUE\nSets the alpha channel to entirely opaque. No parameter is used.\n<br><br></p>\n<p>INVERT\nSets each pixel to its inverse value. No parameter is used.\n<br><br></p>\n<p>POSTERIZE\nLimits each channel of the image to the number of colors specified as the\nparameter. The parameter can be set to values between 2 and 255, but\nresults are most noticeable in the lower ranges.\n<br><br></p>\n<p>BLUR\nExecutes a Gaussian blur with the level parameter specifying the extent\nof the blurring. If no parameter is used, the blur is equivalent to\nGaussian blur of radius 1. Larger values increase the blur.\n<br><br></p>\n<p>ERODE\nReduces the light areas. No parameter is used.\n<br><br></p>\n<p>DILATE\nIncreases the light areas. No parameter is used.</p>\n",
            "itemtype": "method",
            "name": "filter",
            "params": [
                {
                    "name": "filterType",
                    "description": "<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, BLUR, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n",
                    "type": "Constant"
                },
                {
                    "name": "filterParam",
                    "description": "<p>an optional parameter unique\n                               to each filter, see above</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(THRESHOLD);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(GRAY);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(OPAQUE);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(INVERT);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(POSTERIZE, 3);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(DILATE);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(BLUR, 3);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(ERODE);\n}\n</code>\n</div>"
            ],
            "alt": "black and white image of a brick wall.\ngreyscale image of a brickwall\nimage of a brickwall\njade colored image of a brickwall\nred and pink image of a brickwall\nimage of a brickwall\nblurry image of a brickwall\nimage of a brickwall\nimage of a brickwall with less detail",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/image/pixels.js",
            "line": 413,
            "description": "<p>Returns an array of [R,G,B,A] values for any pixel or grabs a section of\nan image. If no parameters are specified, the entire image is returned.\nUse the x and y parameters to get the value of one pixel. Get a section of\nthe display window by specifying additional w and h parameters. When\ngetting an image, the x and y parameters define the coordinates for the\nupper-left corner of the image, regardless of the current imageMode().\n<br><br>\nIf the pixel requested is outside of the image window, [0,0,0,255] is\nreturned. To get the numbers scaled according to the current color ranges\nand taking into account colorMode, use getColor instead of get.\n<br><br>\nGetting the color of a single pixel with get(x, y) is easy, but not as fast\nas grabbing the data directly from pixels[]. The equivalent statement to\nget(x, y) using pixels[] with pixel density d is\n<code>\nvar x, y, d; // set these to the coordinates\nvar off = (y <em> width + x) </em> d * 4;\nvar components = [\n  pixels[off],\n  pixels[off + 1],\n  pixels[off + 2],\n  pixels[off + 3]\n];\nprint(components);\n</code>\n<br><br>\nSee the reference for pixels[] for more information.</p>\n",
            "itemtype": "method",
            "name": "get",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the pixel</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the pixel</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "w",
                    "description": "<p>width</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "h",
                    "description": "<p>height</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "return": {
                "description": "values of pixel at x,y in array format\n                             [R, G, B, A] or p5.Image",
                "type": "Number[]|p5.Image"
            },
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  var c = get();\n  image(c, width / 2, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  var c = get(50, 90);\n  fill(c);\n  noStroke();\n  rect(25, 25, 50, 50);\n}\n</code>\n</div>"
            ],
            "alt": "2 images of the rocky mountains, side-by-side\nImage of the rocky mountains with 50x50 green rect in center of canvas",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/image/pixels.js",
            "line": 489,
            "description": "<p>Loads the pixel data for the display window into the pixels[] array. This\nfunction must always be called before reading from or writing to pixels[].\nNote that only changes made with set() or direct manipulation of pixels[]\nwill occur.</p>\n",
            "itemtype": "method",
            "name": "loadPixels",
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  image(img, 0, 0);\n  var d = pixelDensity();\n  var halfImage = 4 * (img.width * d) * (img.height * d / 2);\n  loadPixels();\n  for (var i = 0; i < halfImage; i++) {\n    pixels[i + halfImage] = pixels[i];\n  }\n  updatePixels();\n}\n</code>\n</div>"
            ],
            "alt": "two images of the rocky mountains. one on top, one on bottom of canvas.",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/image/pixels.js",
            "line": 525,
            "description": "<p>Changes the color of any pixel, or writes an image directly to the\ndisplay window.</p>\n<p>The x and y parameters specify the pixel to change and the c parameter\nspecifies the color value. This can be a p5.Color object, or [R, G, B, A]\npixel array. It can also be a single grayscale value.\nWhen setting an image, the x and y parameters define the coordinates for\nthe upper-left corner of the image, regardless of the current imageMode().\n</p>\n<p>\nAfter using set(), you must call updatePixels() for your changes to appear.\nThis should be called once all pixels have been set, and must be called before\ncalling .get() or drawing the image.\n</p>\n<p>Setting the color of a single pixel with set(x, y) is easy, but not as\nfast as putting the data directly into pixels[]. Setting the pixels[]\nvalues directly may be complicated when working with a retina display,\nbut will perform better when lots of pixels need to be set directly on\nevery loop.</p>\n<p>See the reference for pixels[] for more information.</p>",
            "itemtype": "method",
            "name": "set",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the pixel</p>\n",
                    "type": "Number"
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the pixel</p>\n",
                    "type": "Number"
                },
                {
                    "name": "c",
                    "description": "<p>insert a grayscale value | a pixel array |\n                               a p5.Color object | a p5.Image to copy</p>\n",
                    "type": "Number|Number[]|Object"
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar black = color(0);\nset(30, 20, black);\nset(85, 20, black);\nset(85, 75, black);\nset(30, 75, black);\nupdatePixels();\n</code>\n</div>\n\n<div>\n<code>\nfor (var i = 30; i < width - 15; i++) {\n  for (var j = 20; j < height - 25; j++) {\n    var c = color(204 - j, 153 - i, 0);\n    set(i, j, c);\n  }\n}\nupdatePixels();\n</code>\n</div>\n\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  set(0, 0, img);\n  updatePixels();\n  line(0, 0, width, height);\n  line(0, height, width, 0);\n}\n</code>\n</div>"
            ],
            "alt": "4 black points in the shape of a square middle-right of canvas.\nsquare with orangey-brown gradient lightening at bottom right.\nimage of the rocky mountains. with lines like an 'x' through the center.",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/image/pixels.js",
            "line": 599,
            "description": "<p>Updates the display window with the data in the pixels[] array.\nUse in conjunction with loadPixels(). If you&#39;re only reading pixels from\nthe array, there&#39;s no need to call updatePixels() — updating is only\nnecessary to apply changes. updatePixels() should be called anytime the\npixels array is manipulated or set() is called, and only changes made with\nset() or direct changes to pixels[] will occur.</p>\n",
            "itemtype": "method",
            "name": "updatePixels",
            "params": [
                {
                    "name": "x",
                    "description": "<p>x-coordinate of the upper-left corner of region\n                        to update</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "y",
                    "description": "<p>y-coordinate of the upper-left corner of region\n                        to update</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "w",
                    "description": "<p>width of region to update</p>\n",
                    "type": "Number",
                    "optional": true
                },
                {
                    "name": "h",
                    "description": "<p>height of region to update</p>\n",
                    "type": "Number",
                    "optional": true
                }
            ],
            "example": [
                "\n<div>\n<code>\nvar img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  image(img, 0, 0);\n  var d = pixelDensity();\n  var halfImage = 4 * (img.width * d) * (img.height * d / 2);\n  loadPixels();\n  for (var i = 0; i < halfImage; i++) {\n    pixels[i + halfImage] = pixels[i];\n  }\n  updatePixels();\n}\n</code>\n</div>"
            ],
            "alt": "two images of the rocky mountains. one on top, one on bottom of canvas.",
            "class": "p5",
            "module": "Image",
            "submodule": "Pixels"
        },
        {
            "file": "src/io/files.js",
            "line": 19,
            "description": "<p>Loads a JSON file from a file or a URL, and returns an Object.\nNote that even if the JSON file contains an Array, an Object will be\nreturned with index numbers as keys.</p>\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. JSONP is supported via a polyfill and you\ncan pass in as the second argument an object with definitions of the json\ncallback following the syntax specified <a href=\"https://github.com/camsong/\nfetch-jsonp\">here</a>.</p>\n",
            "itemtype": "method",
            "name": "loadJSON",
            "params": [
                {
                    "name": "path",
                    "description": "<p>name of the file or url to load</p>\n",
                    "type": "String"
                },
                {
                    "name": "jsonpOptions",
                    "description": "<p>options object for jsonp related settings</p>\n",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "datatype",
                    "description": "<p>&quot;json&quot; or &quot;jsonp&quot;</p>\n",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "callback",
                    "description": "<p>function to be executed after\n                                   loadJSON() completes, data is passed\n                                   in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "return": {
                "description": "JSON data",
                "type": "Object|Array"
            },
            "example": [
                "\n\n<p>Calling loadJSON() inside preload() guarantees to complete the\noperation before setup() and draw() are called.</p>\n\n<div><code>\n// Examples use USGS Earthquake API:\n//   https://earthquake.usgs.gov/fdsnws/event/1/#methods\nvar earthquakes;\nfunction preload() {\n  // Get the most recent earthquake in the database\n  var url =\n   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +\n    'summary/all_day.geojson';\n  earthquakes = loadJSON(url);\n}\n\nfunction setup() {\n  noLoop();\n}\n\nfunction draw() {\n  background(200);\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  var earthquakeMag = earthquakes.features[0].properties.mag;\n  var earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n}\n</code></div>\n\n\n<p>Outside of preload(), you may supply a callback function to handle the\nobject:</p>\n<div><code>\nfunction setup() {\n  noLoop();\n  var url =\n   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +\n    'summary/all_day.geojson';\n  loadJSON(url, drawEarthquake);\n}\n\nfunction draw() {\n  background(200);\n}\n\nfunction drawEarthquake(earthquakes) {\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  var earthquakeMag = earthquakes.features[0].properties.mag;\n  var earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n}\n</code></div>"
            ],
            "alt": "50x50 ellipse that changes from black to white depending on the current humidity\n50x50 ellipse that changes from black to white depending on the current humidity",
            "class": "p5",
            "module": "IO",
            "submodule": "Input"
        },
        {
            "file": "src/io/files.js",
            "line": 154,
            "description": "<p>Reads the contents of a file and creates a String array of its individual\nlines. If the name of the file is used as the parameter, as in the above\nexample, the file must be located in the sketch directory/folder.\n<br><br>\nAlternatively, the file maybe be loaded from anywhere on the local\ncomputer using an absolute path (something that starts with / on Unix and\nLinux, or a drive letter on Windows), or the filename parameter can be a\nURL for a file found on a network.\n<br><br>\nThis method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed.</p>\n",
            "itemtype": "method",
            "name": "loadStrings",
            "params": [
                {
                    "name": "filename",
                    "description": "<p>name of the file or url to load</p>\n",
                    "type": "String"
                },
                {
                    "name": "callback",
                    "description": "<p>function to be executed after loadStrings()\n                              completes, Array is passed in as first\n                              argument</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "return": {
                "description": "Array of Strings",
                "type": "String[]"
            },
            "example": [
                "\n\n<p>Calling loadStrings() inside preload() guarantees to complete the\noperation before setup() and draw() are called.</p>\n\n<div><code>\nvar result;\nfunction preload() {\n  result = loadStrings('assets/test.txt');\n}\n\nfunction setup() {\n  background(200);\n  var ind = floor(random(result.length));\n  text(result[ind], 10, 10, 80, 80);\n}\n</code></div>\n\n<p>Outside of preload(), you may supply a callback function to handle the\nobject:</p>\n\n<div><code>\nfunction setup() {\n  loadStrings('assets/test.txt', pickString);\n}\n\nfunction pickString(result) {\n  background(200);\n  var ind = floor(random(result.length));\n  text(result[ind], 10, 10, 80, 80);\n}\n</code></div>"
            ],
            "alt": "randomly generated text from a file, for example \"i smell like butter\"\nrandomly generated text from a file, for example \"i have three feet\"",
            "class": "p5",
            "module": "IO",
            "submodule": "Input"
        },
        {
            "file": "src/io/files.js",
            "line": 253,
            "description": "<p>Reads the contents of a file or URL and creates a p5.Table object with\nits values. If a file is specified, it must be located in the sketch&#39;s\n&quot;data&quot; folder. The filename parameter can also be a URL to a file found\nonline. By default, the file is assumed to be comma-separated (in CSV\nformat). Table only looks for a header row if the &#39;header&#39; option is\nincluded.</p>\n\n<p>Possible options include:\n<ul>\n<li>csv - parse the table as comma-separated values</li>\n<li>tsv - parse the table as tab-separated values</li>\n<li>header - this table has a header (title) row</li>\n</ul>\n</p>\n\n<p>When passing in multiple options, pass them in as separate parameters,\nseperated by commas. For example:\n<br><br>\n<code>\nloadTable(&#39;my_csv_file.csv&#39;, &#39;csv&#39;, &#39;header&#39;);\n</code>\n</p>\n\n<p> All files loaded and saved use UTF-8 encoding.</p>\n\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. Calling loadTable() inside preload()\nguarantees to complete the operation before setup() and draw() are called.\n<p>Outside of preload(), you may supply a callback function to handle the\nobject:</p>\n</p>",
            "itemtype": "method",
            "name": "loadTable",
            "return": {
                "description": "Table object containing data",
                "type": "Object"
            },
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Given the following CSV file called \"mammals.csv\"\n// located in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nvar table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n  //the file can be remote\n  //table = loadTable(\"http://p5js.org/reference/assets/mammals.csv\",\n  //                  \"csv\", \"header\");\n}\n\nfunction setup() {\n  //count the columns\n  print(table.getRowCount() + ' total rows in table');\n  print(table.getColumnCount() + ' total columns in table');\n\n  print(table.getColumn('name'));\n  //[\"Goat\", \"Leopard\", \"Zebra\"]\n\n  //cycle through the table\n  for (var r = 0; r < table.getRowCount(); r++)\n    for (var c = 0; c < table.getColumnCount(); c++) {\n      print(table.getString(r, c));\n    }\n}\n</code>\n</div>"
            ],
            "alt": "randomly generated text from a file, for example \"i smell like butter\"\nrandomly generated text from a file, for example \"i have three feet\"",
            "class": "p5",
            "module": "IO",
            "submodule": "Input",
            "overloads": [
                {
                    "line": 253,
                    "params": [
                        {
                            "name": "filename",
                            "description": "<p>name of the file or URL to load</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "options",
                            "description": "<p>&quot;header&quot; &quot;csv&quot; &quot;tsv&quot;</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "callback",
                            "description": "<p>function to be executed after\n                                    loadTable() completes. On success, the\n                                    Table object is passed in as the\n                                    first argument.</p>\n",
                            "type": "Function",
                            "optional": true
                        },
                        {
                            "name": "errorCallback",
                            "description": "<p>function to be executed if\n                                    there is an error, response is passed\n                                    in as first argument</p>\n",
                            "type": "Function",
                            "optional": true
                        }
                    ],
                    "return": {
                        "description": "Table object containing data",
                        "type": "Object"
                    }
                },
                {
                    "line": 342,
                    "params": [
                        {
                            "name": "filename",
                            "description": "",
                            "type": "String"
                        },
                        {
                            "name": "callback",
                            "description": "",
                            "type": "Function",
                            "optional": true
                        },
                        {
                            "name": "errorCallback",
                            "description": "",
                            "type": "Function",
                            "optional": true
                        }
                    ],
                    "return": {
                        "description": "",
                        "type": "Object"
                    }
                }
            ]
        },
        {
            "file": "src/io/files.js",
            "line": 586,
            "description": "<p>Reads the contents of a file and creates an XML object with its values.\nIf the name of the file is used as the parameter, as in the above example,\nthe file must be located in the sketch directory/folder.</p>\n<p>Alternatively, the file maybe be loaded from anywhere on the local\ncomputer using an absolute path (something that starts with / on Unix and\nLinux, or a drive letter on Windows), or the filename parameter can be a\nURL for a file found on a network.</p>\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. Calling loadXML() inside preload()\nguarantees to complete the operation before setup() and draw() are called.</p>\n<p>Outside of preload(), you may supply a callback function to handle the\nobject.</p>\n",
            "itemtype": "method",
            "name": "loadXML",
            "params": [
                {
                    "name": "filename",
                    "description": "<p>name of the file or URL to load</p>\n",
                    "type": "String"
                },
                {
                    "name": "callback",
                    "description": "<p>function to be executed after loadXML()\n                              completes, XML object is passed in as\n                              first argument</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "return": {
                "description": "XML object containing data",
                "type": "Object"
            },
            "example": [
                "\n<div class='norender'><code>\n// The following short XML file called \"mammals.xml\" is parsed\n// in the code below.\n//\n// <?xml version=\"1.0\"?>\n// &lt;mammals&gt;\n//   &lt;animal id=\"0\" species=\"Capra hircus\">Goat&lt;/animal&gt;\n//   &lt;animal id=\"1\" species=\"Panthera pardus\">Leopard&lt;/animal&gt;\n//   &lt;animal id=\"2\" species=\"Equus zebra\">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nvar xml;\n\nfunction preload() {\n  xml = loadXML('assets/mammals.xml');\n}\n\nfunction setup() {\n  var children = xml.getChildren('animal');\n\n  for (var i = 0; i < children.length; i++) {\n    var id = children[i].getNum('id');\n    var coloring = children[i].getString('species');\n    var name = children[i].getContent();\n    print(id + ', ' + coloring + ', ' + name);\n  }\n}\n\n// Sketch prints:\n// 0, Capra hircus, Goat\n// 1, Panthera pardus, Leopard\n// 2, Equus zebra, Zebra\n</code></div>"
            ],
            "alt": "no image displayed",
            "class": "p5",
            "module": "IO",
            "submodule": "Input"
        },
        {
            "file": "src/io/files.js",
            "line": 687,
            "description": "<p>Method for executing an HTTP GET request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text. This is equivalent to\ncalling <code>httpDo(path, &#39;GET&#39;)</code>.</p>\n",
            "itemtype": "method",
            "name": "httpGet",
            "params": [
                {
                    "name": "path",
                    "description": "<p>name of the file or url to load</p>\n",
                    "type": "String"
                },
                {
                    "name": "datatype",
                    "description": "<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;xml&quot;, or &quot;text&quot;</p>\n",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "data",
                    "description": "<p>param data passed sent with request</p>\n",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "callback",
                    "description": "<p>function to be executed after\n                                   httpGet() completes, data is passed in\n                                   as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "example": [
                "\n<div class='norender'><code>\n// Examples use USGS Earthquake API:\n//   https://earthquake.usgs.gov/fdsnws/event/1/#methods\nvar earthquakes;\nfunction preload() {\n  // Get the most recent earthquake in the database\n  var url =\n   'https://earthquake.usgs.gov/fdsnws/event/1/query?' +\n    'format=geojson&limit=1&orderby=time';\n  httpGet(url, 'jsonp', false, function(response) {\n    // when the HTTP request completes, populate the variable that holds the\n    // earthquake data used in the visualization.\n    earthquakes = response;\n  });\n}\n\nfunction draw() {\n  if (!earthquakes) {\n    // Wait until the earthquake data has loaded before drawing.\n    return;\n  }\n  background(200);\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  var earthquakeMag = earthquakes.features[0].properties.mag;\n  var earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n  noLoop();\n}\n</code></div>"
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Input"
        },
        {
            "file": "src/io/files.js",
            "line": 741,
            "description": "<p>Method for executing an HTTP POST request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text. This is equivalent to\ncalling <code>httpDo(path, &#39;POST&#39;)</code>.</p>\n",
            "itemtype": "method",
            "name": "httpPost",
            "params": [
                {
                    "name": "path",
                    "description": "<p>name of the file or url to load</p>\n",
                    "type": "String"
                },
                {
                    "name": "datatype",
                    "description": "<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;xml&quot;, or &quot;text&quot;.\n                                   If omitted, httpPost() will guess.</p>\n",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "data",
                    "description": "<p>param data passed sent with request</p>\n",
                    "type": "Object",
                    "optional": true
                },
                {
                    "name": "callback",
                    "description": "<p>function to be executed after\n                                   httpPost() completes, data is passed in\n                                   as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                },
                {
                    "name": "errorCallback",
                    "description": "<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n",
                    "type": "Function",
                    "optional": true
                }
            ],
            "example": [
                "\n<div>\n<code>\n// Examples use jsonplaceholder.typicode.com for a Mock Data API\n\nvar url = 'https://jsonplaceholder.typicode.com/posts';\nvar postData = { userId: 1, title: 'p5 Clicked!', body: 'p5.js is way cool.' };\n\nfunction setup() {\n  createCanvas(800, 800);\n}\n\nfunction mousePressed() {\n  // Pick new random color values\n  var r = random(255);\n  var g = random(255);\n  var b = random(255);\n\n  httpPost(url, 'json', postData, function(result) {\n    strokeWeight(2);\n    stroke(r, g, b);\n    fill(r, g, b, 127);\n    ellipse(mouseX, mouseY, 200, 200);\n    text(result.body, mouseX, mouseY);\n  });\n}\n</code>\n</div>\n\n\n<div><code>\nvar url = 'https://invalidURL'; // A bad URL that will cause errors\nvar postData = { title: 'p5 Clicked!', body: 'p5.js is way cool.' };\n\nfunction setup() {\n  createCanvas(800, 800);\n}\n\nfunction mousePressed() {\n  // Pick new random color values\n  var r = random(255);\n  var g = random(255);\n  var b = random(255);\n\n  httpPost(\n    url,\n    'json',\n    postData,\n    function(result) {\n      // ... won't be called\n    },\n    function(error) {\n      strokeWeight(2);\n      stroke(r, g, b);\n      fill(r, g, b, 127);\n      text(error.toString(), mouseX, mouseY);\n    }\n  );\n}\n</code></div>\n"
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Input"
        },
        {
            "file": "src/io/files.js",
            "line": 826,
            "description": "<p>Method for executing an HTTP request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text.<br><br>\nFor more advanced use, you may also pass in the path as the first argument\nand a object as the second argument, the signature follows the one specified\nin the Fetch API specification.</p>\n",
            "itemtype": "method",
            "name": "httpDo",
            "example": [
                "\n<div>\n<code>\n// Examples use USGS Earthquake API:\n// https://earthquake.usgs.gov/fdsnws/event/1/#methods\n\n// displays an animation of all USGS earthquakes\nvar earthquakes;\nvar eqFeatureIndex = 0;\n\nfunction preload() {\n  var url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';\n  httpDo(\n    url,\n    {\n      method: 'GET',\n      // Other Request options, like special headers for apis\n      headers: { authorization: 'Bearer secretKey' }\n    },\n    function(res) {\n      earthquakes = res;\n    }\n  );\n}\n\nfunction draw() {\n  // wait until the data is loaded\n  if (!earthquakes || !earthquakes.features[eqFeatureIndex]) {\n    return;\n  }\n  clear();\n\n  var feature = earthquakes.features[eqFeatureIndex];\n  var mag = feature.properties.mag;\n  var rad = mag / 11 * ((width + height) / 2);\n  fill(255, 0, 0, 100);\n  ellipse(width / 2 + random(-2, 2), height / 2 + random(-2, 2), rad, rad);\n\n  if (eqFeatureIndex >= earthquakes.features.length) {\n    eqFeatureIndex = 0;\n  } else {\n    eqFeatureIndex += 1;\n  }\n}\n</code>\n</div>"
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Input",
            "overloads": [
                {
                    "line": 826,
                    "params": [
                        {
                            "name": "path",
                            "description": "<p>name of the file or url to load</p>\n",
                            "type": "String"
                        },
                        {
                            "name": "method",
                            "description": "<p>either &quot;GET&quot;, &quot;POST&quot;, or &quot;PUT&quot;,\n                                   defaults to &quot;GET&quot;</p>\n",
                            "type": "String",
                            "optional": true
                        },
                        {
                            "name": "datatype",
                            "description": "<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;xml&quot;, or &quot;text&quot;</p>\n",
                            "type": "String",
                            "optional": true
                        },
                        {
                            "name": "data",
                            "description": "<p>param data passed sent with request</p>\n",
                            "type": "Object",
                            "optional": true
                        },
                        {
                            "name": "callback",
                            "description": "<p>function to be executed after\n                                   httpGet() completes, data is passed in\n                                   as first argument</p>\n",
                            "type": "Function",
                            "optional": true
                        },
                        {
                            "name": "errorCallback",
                            "description": "<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n",
                            "type": "Function",
                            "optional": true
                        }
                    ]
                },
                {
                    "line": 895,
                    "params": [
                        {
                            "name": "path",
                            "description": "",
                            "type": "String"
                        },
                        {
                            "name": "options",
                            "description": "<p>Request object options as documented in the\n                                   &quot;fetch&quot; API\n<a href=\"https://developer.mozilla.org/en/docs/Web/API/Fetch_API\">reference</a></p>\n",
                            "type": "Object"
                        },
                        {
                            "name": "callback",
                            "description": "",
                            "type": "Function",
                            "optional": true
                        },
                        {
                            "name": "errorCallback",
                            "description": "",
                            "type": "Function",
                            "optional": true
                        }
                    ]
                }
            ]
        },
        {
            "file": "src/io/files.js",
            "line": 1063,
            "itemtype": "method",
            "name": "createWriter",
            "params": [
                {
                    "name": "name",
                    "description": "<p>name of the file to be created</p>\n",
                    "type": "String"
                },
                {
                    "name": "extension",
                    "description": "",
                    "type": "String",
                    "optional": true
                }
            ],
            "return": {
                "description": "",
                "type": "p5.PrintWriter"
            },
            "example": [
                "\n<div>\n<code>\ncreateButton('save')\n  .position(10, 10)\n  .mousePressed(function() {\n    var writer = createWriter('squares.txt');\n    for (var i = 0; i < 10; i++) {\n      writer.print(i * i);\n    }\n    writer.close();\n    writer.flush();\n  });\n</code>\n</div>"
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1113,
            "itemtype": "method",
            "name": "write",
            "params": [
                {
                    "name": "data",
                    "description": "",
                    "type": "Array"
                }
            ],
            "class": "p5.PrintWriter",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1120,
            "itemtype": "method",
            "name": "print",
            "params": [
                {
                    "name": "data",
                    "description": "",
                    "type": "Array"
                }
            ],
            "class": "p5.PrintWriter",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1127,
            "itemtype": "method",
            "name": "flush",
            "class": "p5.PrintWriter",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1133,
            "itemtype": "method",
            "name": "close",
            "class": "p5.PrintWriter",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1162,
            "description": "<p>Save an image, text, json, csv, wav, or html. Prompts download to\nthe client&#39;s computer. <b>Note that it is not recommended to call save()\nwithin draw if it&#39;s looping, as the save() function will open a new save\ndialog every frame.</b></p>\n<p>The default behavior is to save the canvas as an image. You can\noptionally specify a filename.\nFor example:</p>\n <pre class='language-javascript'><code>\n save();\n save(&#39;myCanvas.jpg&#39;); // save a specific canvas with a filename\n </code></pre>\n\n<p>Alternately, the first parameter can be a pointer to a canvas\np5.Element, an Array of Strings,\nan Array of JSON, a JSON object, a p5.Table, a p5.Image, or a\np5.SoundFile (requires p5.sound). The second parameter is a filename\n(including extension). The third parameter is for options specific\nto this type of object. This method will save a file that fits the\ngiven paramaters. For example:</p>\n\n <pre class='language-javascript'><code>\n // Saves canvas as an image\n save('myCanvas.jpg');\n\n // Saves pImage as a png image\n var img = createImage(10, 10);\n save(img, 'my.png');\n\n // Saves canvas as an image\n var cnv = createCanvas(100, 100);\n save(cnv, 'myCanvas.jpg');\n\n // Saves p5.Renderer object as an image\n var gb = createGraphics(100, 100);\n save(gb, 'myGraphics.jpg');\n\n var myTable = new p5.Table();\n\n // Saves table as html file\n save(myTable, 'myTable.html');\n\n // Comma Separated Values\n save(myTable, 'myTable.csv');\n\n // Tab Separated Values\n save(myTable, 'myTable.tsv');\n\n var myJSON = { a: 1, b: true };\n\n // Saves pretty JSON\n save(myJSON, 'my.json');\n\n // Optimizes JSON filesize\n save(myJSON, 'my.json', true);\n\n // Saves array of strings to a text file with line breaks after each item\n var arrayOfStrings = ['a', 'b'];\n save(arrayOfStrings, 'my.txt');\n </code></pre>",
            "itemtype": "method",
            "name": "save",
            "params": [
                {
                    "name": "objectOrFilename",
                    "description": "<p>If filename is provided, will\n                                           save canvas as an image with\n                                           either png or jpg extension\n                                           depending on the filename.\n                                           If object is provided, will\n                                           save depending on the object\n                                           and filename (see examples\n                                           above).</p>\n",
                    "type": "Object|String",
                    "optional": true
                },
                {
                    "name": "filename",
                    "description": "<p>If an object is provided as the first\n                             parameter, then the second parameter\n                             indicates the filename,\n                             and should include an appropriate\n                             file extension (see examples above).</p>\n",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "options",
                    "description": "<p>Additional options depend on\n                          filetype. For example, when saving JSON,\n                          <code>true</code> indicates that the\n                          output will be optimized for filesize,\n                          rather than readability.</p>\n",
                    "type": "Boolean|String",
                    "optional": true
                }
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1290,
            "description": "<p>Writes the contents of an Array or a JSON object to a .json file.\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n",
            "itemtype": "method",
            "name": "saveJSON",
            "params": [
                {
                    "name": "json",
                    "description": "",
                    "type": "Array|Object"
                },
                {
                    "name": "filename",
                    "description": "",
                    "type": "String"
                },
                {
                    "name": "optimize",
                    "description": "<p>If true, removes line breaks\n                               and spaces from the output\n                               file to optimize filesize\n                               (but not readability).</p>\n",
                    "type": "Boolean",
                    "optional": true
                }
            ],
            "example": [
                "\n <div><code>\n var json = {}; // new  JSON Object\n\n json.id = 0;\n json.species = 'Panthera leo';\n json.name = 'Lion';\n\n createButton('save')\n .position(10, 10)\n .mousePressed(function() {\n   saveJSON(json, 'lion.json');\n });\n\n // saves the following to a file called \"lion.json\":\n // {\n //   \"id\": 0,\n //   \"species\": \"Panthera leo\",\n //   \"name\": \"Lion\"\n // }\n </code></div>"
            ],
            "alt": "no image displayed",
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1341,
            "description": "<p>Writes an array of Strings to a text file, one line per String.\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n",
            "itemtype": "method",
            "name": "saveStrings",
            "params": [
                {
                    "name": "list",
                    "description": "<p>string array to be written</p>\n",
                    "type": "String[]"
                },
                {
                    "name": "filename",
                    "description": "<p>filename for output</p>\n",
                    "type": "String"
                },
                {
                    "name": "extension",
                    "description": "<p>the filename&#39;s extension</p>\n",
                    "type": "String",
                    "optional": true
                }
            ],
            "example": [
                "\n <div><code>\n var words = 'apple bear cat dog';\n\n // .split() outputs an Array\n var list = split(words, ' ');\n\n createButton('save')\n .position(10, 10)\n .mousePressed(function() {\n   saveStrings(list, 'nouns.txt');\n });\n\n // Saves the following to a file called 'nouns.txt':\n //\n // apple\n // bear\n // cat\n // dog\n </code></div>"
            ],
            "alt": "no image displayed",
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1402,
            "description": "<p>Writes the contents of a Table object to a file. Defaults to a\ntext file with comma-separated-values (&#39;csv&#39;) but can also\nuse tab separation (&#39;tsv&#39;), or generate an HTML table (&#39;html&#39;).\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n",
            "itemtype": "method",
            "name": "saveTable",
            "params": [
                {
                    "name": "Table",
                    "description": "<p>the Table object to save to a file</p>\n",
                    "type": "p5.Table"
                },
                {
                    "name": "filename",
                    "description": "<p>the filename to which the Table should be saved</p>\n",
                    "type": "String"
                },
                {
                    "name": "options",
                    "description": "<p>can be one of &quot;tsv&quot;, &quot;csv&quot;, or &quot;html&quot;</p>\n",
                    "type": "String",
                    "optional": true
                }
            ],
            "example": [
                "\n<div><code>\n var table;\n\n function setup() {\n table = new p5.Table();\n\n table.addColumn('id');\n table.addColumn('species');\n table.addColumn('name');\n\n var newRow = table.addRow();\n newRow.setNum('id', table.getRowCount() - 1);\n newRow.setString('species', 'Panthera leo');\n newRow.setString('name', 'Lion');\n\n // To save, un-comment next line then click 'run'\n // saveTable(table, 'new.csv');\n }\n\n // Saves the following to a file called 'new.csv':\n // id,species,name\n // 0,Panthera leo,Lion\n </code></div>"
            ],
            "alt": "no image displayed",
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/files.js",
            "line": 1549,
            "description": "<p>Forces download. Accepts a url to filedata/blob, a filename,\nand an extension (optional).\nThis is a private function because it does not do any formatting,\nbut it is used by saveStrings, saveJSON, saveTable etc.</p>\n",
            "itemtype": "method",
            "name": "downloadFile",
            "params": [
                {
                    "name": "data",
                    "description": "<p>either an href generated by createObjectURL,\n                              or a Blob object containing the data</p>\n",
                    "type": "String|Blob"
                },
                {
                    "name": "filename",
                    "description": "",
                    "type": "String",
                    "optional": true
                },
                {
                    "name": "extension",
                    "description": "",
                    "type": "String",
                    "optional": true
                }
            ],
            "class": "p5",
            "module": "IO",
            "submodule": "Output"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 11,
            "description": "<p>Table Options</p>\n<p>Generic class for handling tabular data, typically from a\nCSV, TSV, or other sort of spreadsheet file.</p>\n<p>CSV files are\n<a href=\"http://en.wikipedia.org/wiki/Comma-separated_values\">\ncomma separated values</a>, often with the data in quotes. TSV\nfiles use tabs as separators, and usually don&#39;t bother with the\nquotes.</p>\n<p>File names should end with .csv if they&#39;re comma separated.</p>\n<p>A rough &quot;spec&quot; for CSV can be found\n<a href=\"http://tools.ietf.org/html/rfc4180\">here</a>.</p>\n<p>To load files, use the loadTable method.</p>\n<p>To save tables to your computer, use the save method\n or the saveTable method.</p>\n\n<p>Possible options include:</p>\n<ul>\n<li>csv - parse the table as comma-separated values\n<li>tsv - parse the table as tab-separated values\n<li>header - this table has a header (title) row\n</ul>",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 45,
            "itemtype": "property",
            "name": "columns",
            "type": "String[]",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 50,
            "itemtype": "property",
            "name": "rows",
            "type": "p5.TableRow[]",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 57,
            "description": "<p>Use addRow() to add a new row of data to a p5.Table object. By default,\nan empty row is created. Typically, you would store a reference to\nthe new row in a TableRow object (see newRow in the example above),\nand then set individual values using set().</p>\n<p>If a p5.TableRow object is included as a parameter, then that row is\nduplicated and added to the table.</p>\n",
            "itemtype": "method",
            "name": "addRow",
            "params": [
                {
                    "name": "row",
                    "description": "<p>row to be added to the table</p>\n",
                    "type": "p5.TableRow",
                    "optional": true
                }
            ],
            "example": [
                "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n var table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //add a row\n var newRow = table.addRow();\n newRow.setString('id', table.getRowCount() - 1);\n newRow.setString('species', 'Canis Lupus');\n newRow.setString('name', 'Wolf');\n\n //print the results\n for (var r = 0; r < table.getRowCount(); r++)\n   for (var c = 0; c < table.getColumnCount(); c++)\n     print(table.getString(r, c));\n }\n </code>\n </div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 120,
            "description": "<p>Removes a row from the table object.</p>\n",
            "itemtype": "method",
            "name": "removeRow",
            "params": [
                {
                    "name": "id",
                    "description": "<p>ID number of the row to remove</p>\n",
                    "type": "Integer"
                }
            ],
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Given the CSV file \"mammals.csv\"\n// in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nvar table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  //remove the first row\n  table.removeRow(0);\n\n  //print the results\n  for (var r = 0; r < table.getRowCount(); r++)\n    for (var c = 0; c < table.getColumnCount(); c++)\n      print(table.getString(r, c));\n}\n</code>\n</div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 168,
            "description": "<p>Returns a reference to the specified p5.TableRow. The reference\ncan then be used to get and set values of the selected row.</p>\n",
            "itemtype": "method",
            "name": "getRow",
            "params": [
                {
                    "name": "rowID",
                    "description": "<p>ID number of the row to get</p>\n",
                    "type": "Integer"
                }
            ],
            "return": {
                "description": "p5.TableRow object",
                "type": "p5.TableRow"
            },
            "example": [
                "\n<div class=\"norender\">\n<code>\n// Given the CSV file \"mammals.csv\"\n// in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nvar table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  var row = table.getRow(1);\n  //print it column by column\n  //note: a row is an object, not an array\n  for (var c = 0; c < table.getColumnCount(); c++) {\n    print(row.getString(c));\n  }\n}\n</code>\n</div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 214,
            "description": "<p>Gets all rows from the table. Returns an array of p5.TableRows.</p>\n",
            "itemtype": "method",
            "name": "getRows",
            "return": {
                "description": "Array of p5.TableRows",
                "type": "p5.TableRow[]"
            },
            "example": [
                "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n var table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n var rows = table.getRows();\n\n //warning: rows is an array of objects\n for (var r = 0; r < rows.length; r++) {\n   rows[r].set('name', 'Unicorn');\n }\n\n //print the results\n for (r = 0; r < table.getRowCount(); r++)\n   for (var c = 0; c < table.getColumnCount(); c++)\n     print(table.getString(r, c));\n }\n </code>\n </div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 263,
            "description": "<p>Finds the first row in the Table that contains the value\nprovided, and returns a reference to that row. Even if\nmultiple rows are possible matches, only the first matching\nrow is returned. The column to search may be specified by\neither its ID or title.</p>\n",
            "itemtype": "method",
            "name": "findRow",
            "params": [
                {
                    "name": "value",
                    "description": "<p>The value to match</p>\n",
                    "type": "String"
                },
                {
                    "name": "column",
                    "description": "<p>ID number or title of the\n                               column to search</p>\n",
                    "type": "Integer|String"
                }
            ],
            "return": {
                "description": "",
                "type": "p5.TableRow"
            },
            "example": [
                "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n var table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //find the animal named zebra\n var row = table.findRow('Zebra', 'name');\n //find the corresponding species\n print(row.getString('species'));\n }\n </code>\n </div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 328,
            "description": "<p>Finds the rows in the Table that contain the value\nprovided, and returns references to those rows. Returns an\nArray, so for must be used to iterate through all the rows,\nas shown in the example above. The column to search may be\nspecified by either its ID or title.</p>\n",
            "itemtype": "method",
            "name": "findRows",
            "params": [
                {
                    "name": "value",
                    "description": "<p>The value to match</p>\n",
                    "type": "String"
                },
                {
                    "name": "column",
                    "description": "<p>ID number or title of the\n                               column to search</p>\n",
                    "type": "Integer|String"
                }
            ],
            "return": {
                "description": "An Array of TableRow objects",
                "type": "p5.TableRow[]"
            },
            "example": [
                "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n var table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //add another goat\n var newRow = table.addRow();\n newRow.setString('id', table.getRowCount() - 1);\n newRow.setString('species', 'Scape Goat');\n newRow.setString('name', 'Goat');\n\n //find the rows containing animals named Goat\n var rows = table.findRows('Goat', 'name');\n print(rows.length + ' Goats found');\n }\n </code>\n </div>"
            ],
            "alt": "no image displayed",
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 397,
            "description": "<p>Finds the first row in the Table that matches the regular\nexpression provided, and returns a reference to that row.\nEven if multiple rows are possible matches, only the first\nmatching row is returned. The column to search may be\nspecified by either its ID or title.</p>\n",
            "itemtype": "method",
            "name": "matchRow",
            "params": [
                {
                    "name": "regexp",
                    "description": "<p>The regular expression to match</p>\n",
                    "type": "String"
                },
                {
                    "name": "column",
                    "description": "<p>The column ID (number) or\n                                 title (string)</p>\n",
                    "type": "String|Integer"
                }
            ],
            "return": {
                "description": "TableRow object",
                "type": "p5.TableRow"
            },
            "class": "p5.Table",
            "module": "IO",
            "submodule": "Table"
        },
        {
            "file": "src/io/p5.Table.js",
            "line": 427,
            "description": "<p>Finds the rows in the Table that match the regular expression provided,\nand returns references to those rows. Returns an array, so for must be\nused to iterate through all the rows, as shown in the example. The\ncolumn to search may be specified by either its ID or title.</p>\n",
            "itemtype": "method",
            "name": "matchRows",
            "params": [
                {
                    "name": "regexp",
                    "description": "<p>The regular expression to match</p>\n",