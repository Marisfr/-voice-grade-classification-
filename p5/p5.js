
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