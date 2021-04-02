
/*! p5.dom.js v0.3.4 Jan 19, 2017 */
/**
 * <p>The web is much more than just canvas and p5.dom makes it easy to interact
 * with other HTML5 objects, including text, hyperlink, image, input, video,
 * audio, and webcam.</p>
 * <p>There is a set of creation methods, DOM manipulation methods, and
 * an extended p5.Element that supports a range of HTML elements. See the
 * <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>
 * beyond the canvas tutorial</a> for a full overview of how this addon works.
 *
 * <p>Methods and properties shown in black are part of the p5.js core, items in
 * blue are part of the p5.dom library. You will need to include an extra file
 * in order to access the blue functions. See the
 * <a href='http://p5js.org/libraries/#using-a-library'>using a library</a>
 * section for information on how to include this library. p5.dom comes with
 * <a href='http://p5js.org/download'>p5 complete</a> or you can download the single file
 * <a href='https://raw.githubusercontent.com/lmccart/p5.js/master/lib/addons/p5.dom.js'>
 * here</a>.</p>
 * <p>See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>
 * for more info on how to use this libary.</a>
 *
 * @module p5.dom
 * @submodule p5.dom
 * @for p5.dom
 * @main
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define('p5.dom', ['p5'], function(p5) {
      factory(p5);
    });
  else if (typeof exports === 'object') factory(require('../p5'));
  else factory(root['p5']);
})(this, function(p5) {
  // =============================================================================
  //                         p5 additions
  // =============================================================================

  /**
   * Searches the page for an element with the given ID, class, or tag name (using the '#' or '.'
   * prefixes to specify an ID or class respectively, and none for a tag) and returns it as
   * a p5.Element. If a class or tag name is given with more than 1 element,
   * only the first element will be returned.
   * The DOM node itself can be accessed with .elt.
   * Returns null if none found. You can also specify a container to search within.
   *
   * @method select
   * @param  {String} name id, class, or tag name of element to search for
   * @param  {String} [container] id, p5.Element, or HTML element to search within
   * @return {Object|p5.Element|Null} p5.Element containing node found
   * @example
   * <div ><code class='norender'>
   * function setup() {
   *   createCanvas(100, 100);
   *   //translates canvas 50px down
   *   select('canvas').position(100, 100);
   * }
   * </code></div>
   * <div ><code class='norender'>
   * // these are all valid calls to select()
   * var a = select('#moo');
   * var b = select('#blah', '#myContainer');
   * var c = select('#foo', b);
   * var d = document.getElementById('beep');
   * var e = select('p', d);
   * [a, b, c, d, e]; // unused
   * </code></div>
   *
   */
  p5.prototype.select = function(e, p) {
    p5._validateParameters('select', arguments);
    var res = null;
    var container = getContainer(p);
    if (e[0] === '.') {
      e = e.slice(1);
      res = container.getElementsByClassName(e);
      if (res.length) {
        res = res[0];
      } else {
        res = null;
      }
    } else if (e[0] === '#') {
      e = e.slice(1);
      res = container.getElementById(e);
    } else {
      res = container.getElementsByTagName(e);
      if (res.length) {
        res = res[0];
      } else {
        res = null;
      }
    }
    if (res) {
      return this._wrapElement(res);
    } else {
      return null;
    }
  };

  /**
   * Searches the page for elements with the given class or tag name (using the '.' prefix
   * to specify a class and no prefix for a tag) and returns them as p5.Elements
   * in an array.
   * The DOM node itself can be accessed with .elt.
   * Returns an empty array if none found.
   * You can also specify a container to search within.
   *
   * @method selectAll
   * @param  {String} name class or tag name of elements to search for
   * @param  {String} [container] id, p5.Element, or HTML element to search within
   * @return {Array} Array of p5.Elements containing nodes found
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   createButton('btn');
   *   createButton('2nd btn');
   *   createButton('3rd btn');
   *   var buttons = selectAll('button');
   *
   *   for (var i = 0; i < buttons.length; i++) {
   *     buttons[i].size(100, 100);
   *   }
   * }
   * </code></div>
   * <div class='norender'><code>
   * // these are all valid calls to selectAll()
   * var a = selectAll('.moo');
   * a = selectAll('div');
   * a = selectAll('button', '#myContainer');
   *
   * var d = select('#container');
   * a = selectAll('p', d);
   *
   * var f = document.getElementById('beep');
   * a = select('.blah', f);
   *
   * a; // unused
   * </code></div>
   *
   */
  p5.prototype.selectAll = function(e, p) {
    p5._validateParameters('selectAll', arguments);
    var arr = [];
    var res;
    var container = getContainer(p);
    if (e[0] === '.') {
      e = e.slice(1);
      res = container.getElementsByClassName(e);
    } else {
      res = container.getElementsByTagName(e);
    }
    if (res) {
      for (var j = 0; j < res.length; j++) {
        var obj = this._wrapElement(res[j]);
        arr.push(obj);
      }
    }
    return arr;
  };

  /**
   * Helper function for select and selectAll
   */
  function getContainer(p) {
    var container = document;
    if (typeof p === 'string' && p[0] === '#') {
      p = p.slice(1);
      container = document.getElementById(p) || document;
    } else if (p instanceof p5.Element) {
      container = p.elt;
    } else if (p instanceof HTMLElement) {
      container = p;
    }
    return container;
  }

  /**
   * Helper function for getElement and getElements.
   */
  p5.prototype._wrapElement = function(elt) {
    var children = Array.prototype.slice.call(elt.children);
    if (elt.tagName === 'INPUT' && elt.type === 'checkbox') {
      var converted = new p5.Element(elt);
      converted.checked = function() {
        if (arguments.length === 0) {
          return this.elt.checked;
        } else if (arguments[0]) {
          this.elt.checked = true;
        } else {
          this.elt.checked = false;
        }
        return this;
      };
      return converted;
    } else if (elt.tagName === 'VIDEO' || elt.tagName === 'AUDIO') {
      return new p5.MediaElement(elt);
    } else if (elt.tagName === 'SELECT') {
      return this.createSelect(new p5.Element(elt));
    } else if (
      children.length > 0 &&
      children.every(function(c) {
        return c.tagName === 'INPUT' || c.tagName === 'LABEL';
      })
    ) {
      return this.createRadio(new p5.Element(elt));
    } else {
      return new p5.Element(elt);
    }
  };

  /**
   * Removes all elements created by p5, except any canvas / graphics
   * elements created by createCanvas or createGraphics.
   * Event handlers are removed, and element is removed from the DOM.
   * @method removeElements
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   createCanvas(100, 100);
   *   createDiv('this is some text');
   *   createP('this is a paragraph');
   * }
   * function mousePressed() {
   *   removeElements(); // this will remove the div and p, not canvas
   * }
   * </code></div>
   *
   */
  p5.prototype.removeElements = function(e) {
    p5._validateParameters('removeElements', arguments);
    for (var i = 0; i < this._elements.length; i++) {
      if (!(this._elements[i].elt instanceof HTMLCanvasElement)) {
        this._elements[i].remove();
      }
    }
  };

  /**
   * Helpers for create methods.
   */
  function addElement(elt, pInst, media) {
    var node = pInst._userNode ? pInst._userNode : document.body;
    node.appendChild(elt);
    var c = media ? new p5.MediaElement(elt) : new p5.Element(elt);
    pInst._elements.push(c);
    return c;
  }

  /**
   * Creates a &lt;div&gt;&lt;/div&gt; element in the DOM with given inner HTML.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createDiv
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createDiv('this is some text');
   * </code></div>
   */

  /**
   * Creates a &lt;p&gt;&lt;/p&gt; element in the DOM with given inner HTML. Used
   * for paragraph length text.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createP
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createP('this is some text');
   * </code></div>
   */

  /**
   * Creates a &lt;span&gt;&lt;/span&gt; element in the DOM with given inner HTML.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createSpan
   * @param  {String} [html] inner HTML for element created
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createSpan('this is some text');
   * </code></div>
   */
  var tags = ['div', 'p', 'span'];
  tags.forEach(function(tag) {
    var method = 'create' + tag.charAt(0).toUpperCase() + tag.slice(1);
    p5.prototype[method] = function(html) {
      var elt = document.createElement(tag);
      elt.innerHTML = typeof html === undefined ? '' : html;
      return addElement(elt, this);
    };
  });

  /**
   * Creates an &lt;img&gt; element in the DOM with given src and
   * alternate text.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createImg
   * @param  {String} src src path or url for image
   * @param  {String} [alt] alternate text to be used if image does not load
   * @param  {Function} [successCallback] callback to be called once image data is loaded
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createImg('http://p5js.org/img/asterisk-01.png');
   * </code></div>
   */
  p5.prototype.createImg = function() {
    p5._validateParameters('createImg', arguments);
    var elt = document.createElement('img');
    var args = arguments;
    var self;
    var setAttrs = function() {
      self.width = elt.offsetWidth || elt.width;
      self.height = elt.offsetHeight || elt.height;
      if (args.length > 1 && typeof args[1] === 'function') {
        self.fn = args[1];
        self.fn();
      } else if (args.length > 1 && typeof args[2] === 'function') {
        self.fn = args[2];
        self.fn();
      }
    };
    elt.src = args[0];
    if (args.length > 1 && typeof args[1] === 'string') {
      elt.alt = args[1];
    }
    elt.onload = function() {
      setAttrs();
    };
    self = addElement(elt, this);
    return self;
  };

  /**
   * Creates an &lt;a&gt;&lt;/a&gt; element in the DOM for including a hyperlink.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createA
   * @param  {String} href       url of page to link to
   * @param  {String} html       inner html of link element to display
   * @param  {String} [target]   target where new link should open,
   *                             could be _blank, _self, _parent, _top.
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * createA('http://p5js.org/', 'this is a link');
   * </code></div>
   */
  p5.prototype.createA = function(href, html, target) {
    p5._validateParameters('createA', arguments);
    var elt = document.createElement('a');
    elt.href = href;
    elt.innerHTML = html;
    if (target) elt.target = target;
    return addElement(elt, this);
  };

  /** INPUT **/

  /**
   * Creates a slider &lt;input&gt;&lt;/input&gt; element in the DOM.
   * Use .size() to set the display length of the slider.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createSlider
   * @param  {Number} min minimum value of the slider
   * @param  {Number} max maximum value of the slider
   * @param  {Number} [value] default value of the slider
   * @param  {Number} [step] step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div><code>
   * var slider;
   * function setup() {
   *   slider = createSlider(0, 255, 100);
   *   slider.position(10, 10);
   *   slider.style('width', '80px');
   * }
   *
   * function draw() {
   *   var val = slider.value();
   *   background(val);
   * }
   * </code></div>
   *
   * <div><code>
   * var slider;
   * function setup() {
   *   colorMode(HSB);
   *   slider = createSlider(0, 360, 60, 40);
   *   slider.position(10, 10);
   *   slider.style('width', '80px');
   * }
   *
   * function draw() {
   *   var val = slider.value();
   *   background(val, 100, 100, 1);
   * }
   * </code></div>
   */
  p5.prototype.createSlider = function(min, max, value, step) {
    p5._validateParameters('createSlider', arguments);
    var elt = document.createElement('input');
    elt.type = 'range';
    elt.min = min;
    elt.max = max;
    if (step === 0) {
      elt.step = 0.000000000000000001; // smallest valid step
    } else if (step) {
      elt.step = step;
    }
    if (typeof value === 'number') elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates a &lt;button&gt;&lt;/button&gt; element in the DOM.
   * Use .size() to set the display size of the button.
   * Use .mousePressed() to specify behavior on press.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createButton
   * @param  {String} label label displayed on the button
   * @param  {String} [value] value of the button
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * var button;
   * function setup() {
   *   createCanvas(100, 100);
   *   background(0);
   *   button = createButton('click me');
   *   button.position(19, 19);
   *   button.mousePressed(changeBG);
   * }
   *
   * function changeBG() {
   *   var val = random(255);
   *   background(val);
   * }
   * </code></div>
   */
  p5.prototype.createButton = function(label, value) {
    p5._validateParameters('createButton', arguments);
    var elt = document.createElement('button');
    elt.innerHTML = label;
    if (value) elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates a checkbox &lt;input&gt;&lt;/input&gt; element in the DOM.
   * Calling .checked() on a checkbox returns if it is checked or not
   *
   * @method createCheckbox
   * @param  {String} [label] label displayed after checkbox
   * @param  {boolean} [value] value of the checkbox; checked is true, unchecked is false
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * var checkbox;
   *
   * function setup() {
   *   checkbox = createCheckbox('label', false);
   *   checkbox.changed(myCheckedEvent);
   * }
   *
   * function myCheckedEvent() {
   *   if (this.checked()) {
   *     console.log('Checking!');
   *   } else {
   *     console.log('Unchecking!');
   *   }
   * }
   * </code></div>
   */
  p5.prototype.createCheckbox = function() {
    p5._validateParameters('createCheckbox', arguments);
    var elt = document.createElement('div');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    elt.appendChild(checkbox);
    //checkbox must be wrapped in p5.Element before label so that label appears after
    var self = addElement(elt, this);
    self.checked = function() {
      var cb = self.elt.getElementsByTagName('input')[0];
      if (cb) {
        if (arguments.length === 0) {
          return cb.checked;
        } else if (arguments[0]) {
          cb.checked = true;
        } else {
          cb.checked = false;
        }
      }
      return self;
    };
    this.value = function(val) {
      self.value = val;
      return this;
    };
    if (arguments[0]) {
      var ran = Math.random()
        .toString(36)
        .slice(2);
      var label = document.createElement('label');
      checkbox.setAttribute('id', ran);
      label.htmlFor = ran;
      self.value(arguments[0]);
      label.appendChild(document.createTextNode(arguments[0]));
      elt.appendChild(label);
    }
    if (arguments[1]) {
      checkbox.checked = true;
    }
    return self;
  };

  /**
   * Creates a dropdown menu &lt;select&gt;&lt;/select&gt; element in the DOM.
   * It also helps to assign select-box methods to p5.Element when selecting existing select box
   * @method createSelect
   * @param {boolean} [multiple] true if dropdown should support multiple selections
   * @return {p5.Element}
   * @example
   * <div><code>
   * var sel;
   *
   * function setup() {
   *   textAlign(CENTER);
   *   background(200);
   *   sel = createSelect();
   *   sel.position(10, 10);
   *   sel.option('pear');
   *   sel.option('kiwi');
   *   sel.option('grape');
   *   sel.changed(mySelectEvent);
   * }
   *
   * function mySelectEvent() {
   *   var item = sel.value();
   *   background(200);
   *   text('it is a' + item + '!', 50, 50);
   * }
   * </code></div>
   */
  /**
   * @method createSelect
   * @param {Object} existing DOM select element
   * @return {p5.Element}
   */

  p5.prototype.createSelect = function() {
    p5._validateParameters('createSelect', arguments);
    var elt, self;
    var arg = arguments[0];
    if (typeof arg === 'object' && arg.elt.nodeName === 'SELECT') {
      self = arg;
      elt = this.elt = arg.elt;
    } else {
      elt = document.createElement('select');
      if (arg && typeof arg === 'boolean') {
        elt.setAttribute('multiple', 'true');
      }
      self = addElement(elt, this);
    }
    self.option = function(name, value) {
      var index;
      //see if there is already an option with this name
      for (var i = 0; i < this.elt.length; i++) {
        if (this.elt[i].innerHTML === name) {
          index = i;
          break;
        }
      }
      //if there is an option with this name we will modify it
      if (index !== undefined) {
        //if the user passed in false then delete that option
        if (value === false) {
          this.elt.remove(index);
        } else {
          //otherwise if the name and value are the same then change both
          if (this.elt[index].innerHTML === this.elt[index].value) {
            this.elt[index].innerHTML = this.elt[index].value = value;
            //otherwise just change the value
          } else {
            this.elt[index].value = value;
          }
        }
      } else {
        //if it doesn't exist make it
        var opt = document.createElement('option');
        opt.innerHTML = name;
        if (arguments.length > 1) opt.value = value;
        else opt.value = name;
        elt.appendChild(opt);
      }
    };
    self.selected = function(value) {
      var arr = [],
        i;
      if (arguments.length > 0) {
        for (i = 0; i < this.elt.length; i++) {
          if (value.toString() === this.elt[i].value) {
            this.elt.selectedIndex = i;
          }
        }
        return this;
      } else {
        if (this.elt.getAttribute('multiple')) {
          for (i = 0; i < this.elt.selectedOptions.length; i++) {
            arr.push(this.elt.selectedOptions[i].value);
          }
          return arr;
        } else {
          return this.elt.value;
        }
      }
    };
    return self;
  };

  /**
   * Creates a radio button &lt;input&gt;&lt;/input&gt; element in the DOM.
   * The .option() method can be used to set options for the radio after it is
   * created. The .value() method will return the currently selected option.
   *
   * @method createRadio
   * @param  {String} [divId] the id and name of the created div and input field respectively
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div><code>
   * var radio;
   *
   * function setup() {
   *   radio = createRadio();
   *   radio.option('black');
   *   radio.option('white');
   *   radio.option('gray');
   *   radio.style('width', '60px');
   *   textAlign(CENTER);
   *   fill(255, 0, 0);
   * }
   *
   * function draw() {
   *   var val = radio.value();
   *   background(val);
   *   text(val, width / 2, height / 2);
   * }
   * </code></div>
   * <div><code>
   * var radio;
   *
   * function setup() {
   *   radio = createRadio();
   *   radio.option('apple', 1);
   *   radio.option('bread', 2);
   *   radio.option('juice', 3);
   *   radio.style('width', '60px');
   *   textAlign(CENTER);
   * }
   *
   * function draw() {
   *   background(200);
   *   var val = radio.value();
   *   if (val) {
   *     text('item cost is $' + val, width / 2, height / 2);
   *   }
   * }
   * </code></div>
   */
  p5.prototype.createRadio = function(existing_radios) {
    p5._validateParameters('createRadio', arguments);
    // do some prep by counting number of radios on page
    var radios = document.querySelectorAll('input[type=radio]');
    var count = 0;
    if (radios.length > 1) {
      var length = radios.length;
      var prev = radios[0].name;
      var current = radios[1].name;
      count = 1;
      for (var i = 1; i < length; i++) {
        current = radios[i].name;
        if (prev !== current) {
          count++;
        }
        prev = current;
      }
    } else if (radios.length === 1) {
      count = 1;
    }
    // see if we got an existing set of radios from callee
    var elt, self;
    if (typeof existing_radios === 'object') {
      // use existing elements
      self = existing_radios;
      elt = this.elt = existing_radios.elt;
    } else {
      // create a set of radio buttons
      elt = document.createElement('div');
      self = addElement(elt, this);
    }
    // setup member functions
    self._getInputChildrenArray = function() {
      return Array.prototype.slice.call(this.elt.children).filter(function(c) {
        return c.tagName === 'INPUT';
      });
    };

    var times = -1;
    self.option = function(name, value) {
      var opt = document.createElement('input');
      opt.type = 'radio';
      opt.innerHTML = name;
      if (value) opt.value = value;
      else opt.value = name;
      opt.setAttribute('name', 'defaultradio' + count);
      elt.appendChild(opt);
      if (name) {
        times++;
        var label = document.createElement('label');
        opt.setAttribute('id', 'defaultradio' + count + '-' + times);
        label.htmlFor = 'defaultradio' + count + '-' + times;
        label.appendChild(document.createTextNode(name));
        elt.appendChild(label);
      }
      return opt;
    };
    self.selected = function(value) {
      var i;
      var inputChildren = self._getInputChildrenArray();
      if (value) {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].value === value) inputChildren[i].checked = true;
        }
        return this;
      } else {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].checked === true) return inputChildren[i].value;
        }
      }
    };
    self.value = function(value) {
      var i;
      var inputChildren = self._getInputChildrenArray();
      if (value) {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].value === value) inputChildren[i].checked = true;
        }
        return this;
      } else {
        for (i = 0; i < inputChildren.length; i++) {
          if (inputChildren[i].checked === true) return inputChildren[i].value;
        }
        return '';
      }
    };
    return self;
  };

  /**
   * Creates an &lt;input&gt;&lt;/input&gt; element in the DOM for text input.
   * Use .size() to set the display length of the box.
   * Appends to the container node if one is specified, otherwise
   * appends to body.
   *
   * @method createInput
   * @param {String} [value] default value of the input box
   * @param {String} [type] type of text, ie text, password etc. Defaults to text
   * @return {Object|p5.Element} pointer to p5.Element holding created node
   * @example
   * <div class='norender'><code>
   * function setup() {
   *   var inp = createInput('');
   *   inp.input(myInputEvent);
   * }
   *
   * function myInputEvent() {
   *   console.log('you are typing: ', this.value());
   * }
   * </code></div>
   */
  p5.prototype.createInput = function(value, type) {
    p5._validateParameters('createInput', arguments);
    var elt = document.createElement('input');
    elt.type = type ? type : 'text';
    if (value) elt.value = value;
    return addElement(elt, this);
  };

  /**
   * Creates an &lt;input&gt;&lt;/input&gt; element in the DOM of type 'file'.
   * This allows users to select local files for use in a sketch.
   *
   * @method createFileInput
   * @param  {Function} [callback] callback function for when a file loaded
   * @param  {String} [multiple] optional to allow multiple files selected
   * @return {Object|p5.Element} pointer to p5.Element holding created DOM element
   * @example
   * var input;
   * var img;
   *
   * function setup() {
   *   input = createFileInput(handleFile);
   *   input.position(0, 0);
   * }
   *
   * function draw() {
   *   if (img) {
   *     image(img, 0, 0, width, height);
   *   }
   * }
   *
   * function handleFile(file) {
   *   print(file);
   *   if (file.type === 'image') {
   *     img = createImg(file.data);
   *     img.hide();
   *   }
   * }
   */
  p5.prototype.createFileInput = function(callback, multiple) {
    p5._validateParameters('createFileInput', arguments);
    // Function to handle when a file is selected
    // We're simplifying life and assuming that we always
    // want to load every selected file
    function handleFileSelect(evt) {
      function makeLoader(theFile) {
        // Making a p5.File object
        var p5file = new p5.File(theFile);
        return function(e) {
          p5file.data = e.target.result;
          callback(p5file);
        };
      }
      // These are the files
      var files = evt.target.files;
      // Load each one and trigger a callback
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var reader = new FileReader();

        reader.onload = makeLoader(f);

        // Text or data?
        // This should likely be improved
        if (f.type.indexOf('text') > -1) {
          reader.readAsText(f);
        } else {
          reader.readAsDataURL(f);
        }
      }
    }
    // Is the file stuff supported?
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Yup, we're ok and make an input file selector
      var elt = document.createElement('input');
      elt.type = 'file';

      // If we get a second argument that evaluates to true
      // then we are looking for multiple files
      if (multiple) {
        // Anything gets the job done
        elt.multiple = 'multiple';
      }

      // Now let's handle when a file was selected
      elt.addEventListener('change', handleFileSelect, false);
      return addElement(elt, this);
    } else {
      console.log(
        'The File APIs are not fully supported in this browser. Cannot create element.'
      );
    }
  };

  /** VIDEO STUFF **/

  function createMedia(pInst, type, src, callback) {
    var elt = document.createElement(type);

    // allow src to be empty
    src = src || '';
    if (typeof src === 'string') {
      src = [src];
    }
    for (var i = 0; i < src.length; i++) {
      var source = document.createElement('source');
      source.src = src[i];
      elt.appendChild(source);
    }
    if (typeof callback !== 'undefined') {
      var callbackHandler = function() {
        callback();
        elt.removeEventListener('canplaythrough', callbackHandler);
      };
      elt.addEventListener('canplaythrough', callbackHandler);
    }

    var c = addElement(elt, pInst, true);
    c.loadedmetadata = false;
    // set width and height onload metadata
    elt.addEventListener('loadedmetadata', function() {
      c.width = elt.videoWidth;
      c.height = elt.videoHeight;
      // set elt width and height if not set
      if (c.elt.width === 0) c.elt.width = elt.videoWidth;
      if (c.elt.height === 0) c.elt.height = elt.videoHeight;
      c.loadedmetadata = true;
    });

    return c;
  }
  /**
   * Creates an HTML5 &lt;video&gt; element in the DOM for simple playback
   * of audio/video. Shown by default, can be hidden with .hide()
   * and drawn into canvas using video(). Appends to the container
   * node if one is specified, otherwise appends to body. The first parameter
   * can be either a single string path to a video file, or an array of string
   * paths to different formats of the same video. This is useful for ensuring
   * that your video can play across different browsers, as each supports
   * different formats. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>this
   * page</a> for further information about supported formats.
   *
   * @method createVideo
   * @param  {String|Array} src  path to a video file, or array of paths for
   *                             supporting different browsers
   * @param  {Object} [callback] callback function to be called upon
   *                             'canplaythrough' event fire, that is, when the
   *                             browser can play the media, and estimates that
   *                             enough data has been loaded to play the media
   *                             up to its end without having to stop for
   *                             further buffering of content
   * @return {p5.MediaElement|p5.Element} pointer to video p5.Element
   * @example
   * <div><code>
   * var vid;
   * function setup() {
   *   vid = createVideo(['small.mp4', 'small.ogv', 'small.webm'], vidLoad);
   * }
   *
   * // This function is called when the video loads
   * function vidLoad() {
   *   vid.play();
   * }
   * </code></div>
   */
  p5.prototype.createVideo = function(src, callback) {
    p5._validateParameters('createVideo', arguments);
    return createMedia(this, 'video', src, callback);
  };

  /** AUDIO STUFF **/

  /**
   * Creates a hidden HTML5 &lt;audio&gt; element in the DOM for simple audio
   * playback. Appends to the container node if one is specified,
   * otherwise appends to body. The first parameter
   * can be either a single string path to a audio file, or an array of string
   * paths to different formats of the same audio. This is useful for ensuring
   * that your audio can play across different browsers, as each supports
   * different formats. See <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>this
   * page for further information about supported formats</a>.
   *
   * @method createAudio
   * @param  {String|String[]} [src] path to an audio file, or array of paths
   *                             for supporting different browsers
   * @param  {Object} [callback] callback function to be called upon
   *                             'canplaythrough' event fire, that is, when the
   *                             browser can play the media, and estimates that
   *                             enough data has been loaded to play the media
   *                             up to its end without having to stop for
   *                             further buffering of content
   * @return {p5.MediaElement|p5.Element} pointer to audio p5.Element  /**
   * @example
   * <div><code>
   * var ele;
   * function setup() {
   *   ele = createAudio('assets/beat.mp3');
   *
   *   // here we set the element to autoplay
   *   // The element will play as soon
   *   // as it is able to do so.
   *   ele.autoplay(true);
   * }
   * </code></div>
   */
  p5.prototype.createAudio = function(src, callback) {
    p5._validateParameters('createAudio', arguments);
    return createMedia(this, 'audio', src, callback);
  };

  /** CAMERA STUFF **/

  p5.prototype.VIDEO = 'video';
  p5.prototype.AUDIO = 'audio';

  // from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  // Older browsers might not implement mediaDevices at all, so we set an empty object first
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(
          new Error('getUserMedia is not implemented in this browser')
        );
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }

  /**
   * <p>Creates a new &lt;video&gt; element that contains the audio/video feed
   * from a webcam. This can be drawn onto the canvas using video().</p>
   * <p>More specific properties of the feed can be passing in a Constraints object.
   * See the
   * <a href='http://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints'> W3C
   * spec</a> for possible properties. Note that not all of these are supported
   * by all browsers.</p>
   * <p>Security note: A new browser security specification requires that getUserMedia,
   * which is behind createCapture(), only works when you're running the code locally,
   * or on HTTPS. Learn more <a href='http://stackoverflow.com/questions/34197653/getusermedia-in-chrome-47-without-using-https'>here</a>
   * and <a href='https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia'>here</a>.</p>
   *
   * @method createCapture
   * @param  {String|Constant|Object}   type type of capture, either VIDEO or
   *                                   AUDIO if none specified, default both,
   *                                   or a Constraints object
   * @param  {Function}                 callback function to be called once
   *                                   stream has loaded
   * @return {Object|p5.Element} capture video p5.Element
   * @example
   * <div class='norender'><code>
   * var capture;
   *
   * function setup() {
   *   createCanvas(480, 120);
   *   capture = createCapture(VIDEO);
   * }
   *
   * function draw() {
   *   image(capture, 0, 0, width, width * capture.height / capture.width);
   *   filter(INVERT);
   * }
   * </code></div>
   * <div class='norender'><code>
   * function setup() {
   *   createCanvas(480, 120);
   *   var constraints = {
   *     video: {
   *       mandatory: {
   *         minWidth: 1280,
   *         minHeight: 720
   *       },
   *       optional: [{ maxFrameRate: 10 }]
   *     },
   *     audio: true
   *   };
   *   createCapture(constraints, function(stream) {
   *     console.log(stream);
   *   });
   * }
   * </code></div>
   */
  p5.prototype.createCapture = function() {
    p5._validateParameters('createCapture', arguments);
    var useVideo = true;
    var useAudio = true;
    var constraints;
    var cb;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] === p5.prototype.VIDEO) {
        useAudio = false;
      } else if (arguments[i] === p5.prototype.AUDIO) {
        useVideo = false;
      } else if (typeof arguments[i] === 'object') {
        constraints = arguments[i];
      } else if (typeof arguments[i] === 'function') {
        cb = arguments[i];
      }
    }
    if (navigator.mediaDevices.getUserMedia) {
      var elt = document.createElement('video');

      if (!constraints) {
        constraints = { video: useVideo, audio: useAudio };
      }

      navigator.mediaDevices.getUserMedia(constraints).then(
        function(stream) {
          try {
            if ('srcObject' in elt) {
              elt.srcObject = stream;
            } else {
              elt.src = window.URL.createObjectURL(stream);
            }
          } catch (err) {
            elt.src = stream;
          }
          if (cb) {
            cb(stream);
          }
        },
        function(e) {