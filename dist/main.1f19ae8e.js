// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css-string/mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  /*CSS reset*/\n  .preview-wrapper * {box-sizing: border-box;}\n  .preview-wrapper *:before, *:after {box-sizing: border-box;}\n  .preview-wrapper * {margin: 0; padding: 0;}\n  ul, ol { list-style: none; }\n  a {color: inherit; text-decoration: none;}\n  img {max-width: 100%; max-height: 100%;}\n  \n  .preview-wrapper {\n    background: #fee7d7;\n    color: #ffa264;\n    font-weight: 700;\n  }\n  \n  .container {\n    margin: 1.07692rem auto;\n    width: 6.53846rem;\n    position: relative;\n  }\n  \n  .container:before {\n    content: '';\n    position: absolute;\n    border-radius: 100%;\n    bottom: -2.61538rem;\n    margin-left: -1.38462rem;\n    width: 9.23077rem;\n    height: 6.15385rem;\n    background: #ffc99b;\n    transform: rotateX(70deg);\n  }\n  \n  .container .exclamationmark {\n    font-size: 1.07692rem;\n    position: absolute;\n    top: -0.76923rem;\n    right: -0.61538rem;\n  }\n  \n  .container .sleep {\n    font-size: 0.61538rem;\n    position: absolute;\n    top: -0.76923rem;\n    left: -0.92308rem;\n  }\n  \n  .dango {\n    width: 3.90769rem;\n    height: 2.36923rem;\n    border-radius: 3.84615rem 3.84615rem 1.53846rem 1.53846rem;\n    position: relative;\n    margin-top: -0.30769rem;\n  }\n  \n  .dango .eyes {\n    position: absolute;\n    top: 0.30769rem;\n    left: 1.53846rem;\n    width: 0.07692rem;\n    height: 0.76923rem;\n    background: #4e4e4e;\n    display: block;\n    border-radius: 0.15385rem;\n  }\n  \n  .dango .eyes:before {\n    border-radius: 0.15385rem;\n    content: '';\n    left: 0.61538rem;\n    width: 0.07692rem;\n    height: 0.76923rem;\n    position: absolute;\n    background: #4e4e4e;\n  }\n  \n  .dango .eyes.squint {\n    transform: rotate(-35deg);\n    height: 0.38462rem;\n  }\n  \n  .dango .eyes.squint:before {\n    top: 0.24615rem;\n    left: -0.13846rem;\n    height: 0.38462rem;\n    transform: rotate(60deg);\n  }\n  \n  .dango .eyes.squint.second {\n    left: 2rem;\n    top: 0.53846rem;\n    transform: rotate(160deg);\n  }\n  \n  .dango .sleepeyes {\n    width: 0.76923rem;\n    height: 0.07692rem;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 0.15385rem;\n    top: 0.61538rem;\n    left: 0.92308rem;\n  }\n  \n  .dango .sleepeyes:before {\n    content: '';\n    width: 0.76923rem;\n    height: 0.07692rem;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 0.15385rem;\n    left: 1.30769rem;\n  }\n  \n  .dango .blush {\n    height: 0.53846rem;\n    width: 0.53846rem;\n    position: absolute;\n    top: 0.92308rem;\n    left: 0.76923rem;\n    background: #ff9cb0;\n    border-radius: 100%;\n  }\n  \n  .dango .blush:before {\n    content: '';\n    height: 0.53846rem;\n    width: 0.53846rem;\n    position: absolute;\n    left: 1.61538rem;\n    background: #ff9cb0;\n    border-radius: 100%;\n  }\n  \n  .dango.minX1 {\n    transform: scale(0.5);\n  }\n  \n  .dango.minX2 {\n    transform: scale(0.25);\n  }\n  \n  @keyframes blink {\n  \n    0%,\n    20%,\n    100% {\n      height: 0.76923rem;\n      width: 0.07692rem;\n      top: 0.30769rem;\n      left: 1.53846rem;\n    }\n  \n    10% {\n      height: 0.07692rem;\n      top: 0.76923rem;\n      width: 0.30769rem;\n      left: 1.43077rem;\n    }\n  }\n  \n  @keyframes blinkBefore {\n  \n    0%,\n    20%,\n    100% {\n      height: 0.76923rem;\n      width: 0.07692rem;\n    }\n  \n    10% {\n      height: 0.07692rem;\n      width: 0.30769rem;\n    }\n  }\n  \n  @keyframes wiggle {\n  \n    0%,\n    100% {\n      transform: rotate(0deg);\n    }\n  \n    20% {\n      transform: rotate(5deg);\n    }\n  \n    60% {\n      transform: rotate(-4deg);\n    }\n  }\n  \n  .dango.purple {\n    border: 0.10769rem solid #bd9ad2;\n    background: #d0b7ee;\n    animation: wiggle 5s infinite;\n    transform-origin: center bottom;\n    z-index: 5;\n    margin-left: 1.69231rem;\n  }\n  \n  .dango.green {\n    border: 0.10769rem solid #7bc590;\n    background: #b9eed0;\n    animation: wiggle 4.5s infinite;\n    transform-origin: center bottom;\n    z-index: 4;\n    margin-left: 0.76923rem;\n  }\n  \n  .dango.blue {\n    border: 0.10769rem solid #7fbbdf;\n    background: #cef1f3;\n    animation: wiggle 3.5s infinite;\n    transform-origin: center bottom;\n    z-index: 3;\n    margin-left: 0.2rem;\n  }\n  \n  .dango.blue .blink {\n    animation: blink 5s infinite;\n    transform-origin: center bottom;\n  }\n  \n  .dango.blue .blink:before {\n    animation: blinkBefore 5s infinite;\n    transform-origin: center bottom;\n  }\n  \n  .dango.pink {\n    border: 0.10769rem solid #ffa5b6;\n    background: #ffd2dc;\n    animation: wiggle 4s infinite;\n    transform-origin: center bottom;\n    z-index: 2;\n    margin-left: 0.15385rem;\n  }\n  \n  .dango.pink .blink {\n    animation: blink 3.2s infinite;\n    transform-origin: center bottom;\n  }\n  \n  .dango.pink .blink:before {\n    animation: blinkBefore 3.2s infinite;\n    transform-origin: center bottom;\n  }\n  \n  .dango.yellow {\n    border: 0.10769rem solid #ffb351;\n    background: #fff1b0;\n    animation: wiggle 8s infinite;\n    transform-origin: center bottom;\n    z-index: 1;\n  }\n  \n  .dango.yellow .blink {\n    animation: blink 4s infinite;\n    transform-origin: center bottom;\n  }\n  \n  .dango.yellow .blink:before {\n    animation: blinkBefore 4s infinite;\n    transform-origin: center bottom;\n  }\n";
var _default = string;
exports.default = _default;
},{}],"css-string/pc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*CSS reset*/\n.preview-wrapper * {box-sizing: border-box;}\n.preview-wrapper *:before, *:after {box-sizing: border-box;}\n.preview-wrapper * {margin: 0; padding: 0;}\nul, ol { list-style: none; }\na {color: inherit; text-decoration: none;}\nimg {max-width: 100%; max-height: 100%;}\n\n/*\u80CC\u666F*/\n.preview-wrapper {\n    background: #fee7d7;\n    color: #ffa264;\n    font-weight: 700\n}\n\n.container {\n    margin: 70px auto;\n    width: 425px;\n    position: relative;\n}\n\n/*\u5730\u677F*/\n.container:before {\n    content: '';\n    position: absolute;\n    width: 600px;\n    height: 400px;\n    background: #ffc99b;\n    border-radius: 100%;\n    bottom: -170px;\n    margin-left: -80px;\n    transform: rotateX(70deg);\n}\n\n/*\u611F\u53F9\u53F7*/\n.container .exclamationmark {\n    position: absolute;\n    font-size: 70px;\n    top: -50px;\n    right: -40px;\n}\n\n/*zzz...*/\n.container .sleep {\n    position: absolute;\n    font-size: 40px;\n    top: -50px;\n    left: -60px;\n}\n\n.dango {\n    width: 254px;\n    height: 154px;\n    border-radius: 250px 250px 100px 100px;\n    margin-top: -20px;\n    position: relative;\n}\n\n/*\u7D2B\u8272\u7684\u56E2\u5B50*/\n.dango.purple {\n    border: 7px solid #bd9ad2;\n    background: #d0b7ee;\n    animation: wiggle 5s infinite;\n    transform-origin: center bottom;\n    z-index: 5;\n    margin-left: 110px;\n}\n\n/*\u7EFF\u8272\u7684\u56E2\u5B50*/\n.dango.green {\n    border: 7px solid #7bc590;\n    background: #b9eed0;\n    animation: wiggle 4.5s infinite;\n    transform-origin: center bottom;\n    z-index: 4;\n    margin-left: 50px;\n}\n\n/*\u84DD\u8272\u7684\u56E2\u5B50*/\n.dango.blue {\n    border: 7px solid #7fbbdf;\n    background: #cef1f3;\n    animation: wiggle 3.5s infinite;\n    transform-origin: center bottom;\n    z-index: 3;\n    margin-left: 13px;\n}\n\n/*\u84DD\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.blue .blink {\n    animation: blink 5s infinite;\n    transform-origin: center bottom;\n}\n\n.dango.blue .blink:before {\n    animation: blinkBefore 5s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u7C89\u8272\u7684\u56E2\u5B50*/\n.dango.pink {\n    border: 7px solid #ffa5b6;\n    background: #ffd2dc;\n    animation: wiggle 4s infinite;\n    transform-origin: center bottom;\n    z-index: 2;\n    margin-left: 10px;\n}\n\n.dango.pink .blink {\n    animation: blink 3.2s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u7C89\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.pink .blink:before {\n    animation: blinkBefore 3.2s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u9EC4\u8272\u7684\u56E2\u5B50*/\n.dango.yellow {\n    border: 7px solid #ffb351;\n    background: #fff1b0;\n    animation: wiggle 8s infinite;\n    transform-origin: center bottom;\n    z-index: 1;\n}\n\n/*\u9EC4\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.yellow .blink {\n    animation: blink 4s infinite;\n    transform-origin: center bottom;\n}\n\n.dango.yellow .blink:before {\n    animation: blinkBefore 4s infinite;\n    transform-origin: center bottom;\n}\n\n.dango .eyes {\n    position: absolute;\n    top: 20px;\n    left: 100px;\n    width: 5px;\n    height: 50px;\n    background: #4e4e4e;\n    display: block;\n    border-radius: 10px;\n}\n\n.dango .eyes:before {\n    border-radius: 10px;\n    content: '';\n    left: 40px;\n    width: 5px;\n    height: 50px;\n    position: absolute;\n    background: #4e4e4e;\n}\n\n.dango .eyes.squint {\n    transform: rotate(-35deg);\n    height: 25px;\n}\n\n.dango .eyes.squint:before {\n    top: 16px;\n    left: -9px;\n    height: 25px;\n    transform: rotate(60deg);\n}\n\n.dango .eyes.squint.second {\n    left: 130px;\n    top: 35px;\n    transform: rotate(160deg);\n}\n\n/*\u7EFF\u8272\u7684\u56E2\u5B50\u5728\u7761\u89C9*/\n.dango .sleepeyes {\n    width: 50px;\n    height: 5px;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 10px;\n    top: 40px;\n    left: 60px;\n}\n\n.dango .sleepeyes:before {\n    content: '';\n    width: 50px;\n    height: 5px;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 10px;\n    left: 85px;\n}\n\n/*\u56E2\u5B50\u8138\u4E0A\u7684\u7EA2\u6655*/\n.dango .blush {\n    height: 35px;\n    width: 35px;\n    position: absolute;\n    top: 60px;\n    left: 50px;\n    background: #ff9cb0;\n    border-radius: 100%;\n}\n\n.dango .blush:before {\n    content: '';\n    height: 35px;\n    width: 35px;\n    position: absolute;\n    left: 105px;\n    background: #ff9cb0;\n    border-radius: 100%;\n}\n\n/*\u52A8\u753B*/\n@keyframes blink {\n\n    0%,\n    20%,\n    100% {\n        height: 50px;\n        width: 5px;\n        top: 20px;\n        left: 100px;\n    }\n\n    10% {\n        height: 5px;\n        top: 50px;\n        width: 20px;\n        left: 93px;\n    }\n}\n\n@keyframes blinkBefore {\n\n    0%,\n    20%,\n    100% {\n        height: 50px;\n        width: 5px;\n    }\n\n    10% {\n        height: 5px;\n        width: 20px;\n    }\n}\n\n@keyframes wiggle {\n\n    0%,\n    100% {\n        transform: rotate(0deg);\n    }\n\n    20% {\n        transform: rotate(5deg);\n    }\n\n    60% {\n        transform: rotate(-4deg);\n    }\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"../vendor/prism/prism.js":[function(require,module,exports) {
var global = arguments[3];
/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */


var Prism = function (_self) {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;
  var _ = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      type: function type(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function objId(obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function deepClone(o, visited) {
        var clone,
            id,
            type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case 'Object':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return clone;

          case 'Array':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;

          default:
            return o;
        }
      },

      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function getLanguage(element) {
        while (element && !lang.test(element.className)) {
          element = element.parentElement;
        }

        if (element) {
          return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
        }

        return 'none';
      },

      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function currentScript() {
        if (typeof document === 'undefined') {
          return null;
        }

        if ('currentScript' in document) {
          return document.currentScript;
        } // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts


        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)
          var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

          if (src) {
            var scripts = document.getElementsByTagName('script');

            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }

          return null;
        }
      }
    },
    languages: {
      extend: function extend(id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need an object and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            } // Do not insert token which also occur in insert. See #1525


            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret; // Update references in other language definitions

        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            var property = o[i],
                propertyType = _.util.type(property);

            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    highlightAllUnder: function highlightAllUnder(container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run('before-highlightall', env);

      env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

      _.hooks.run('before-all-elements-highlight', env);

      for (var i = 0, element; element = env.elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    highlightElement: function highlightElement(element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);

      var grammar = _.languages[language]; // Set language on the element, if not present

      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

      var parent = element.parentNode;

      if (parent && parent.nodeName.toLowerCase() === 'pre') {
        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);

        callback && callback.call(env.element);
      }

      _.hooks.run('before-sanity-check', env);

      if (!env.code) {
        _.hooks.run('complete', env);

        callback && callback.call(env.element);
        return;
      }

      _.hooks.run('before-highlight', env);

      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },
    highlight: function highlight(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          if (target && target == token + ',' + j) {
            return;
          }

          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);
            if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);
            if (oneshot) break;
          }
        }
      }
    },
    tokenize: function tokenize(text, grammar) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    },
    hooks: {
      all: {},
      add: function add(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function run(name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _;

  function Token(type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || '').length | 0;
    this.greedy = !!greedy;
  }

  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }

    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }

    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;

    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }

    _.hooks.run('wrap', env);

    var attributes = '';

    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }

    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

        _self.postMessage(_.highlight(code, _.languages[lang], lang));

        if (immediateClose) {
          _self.close();
        }
      }, false);
    }

    return _;
  } //Get current script and highlight


  var script = _.util.currentScript();

  if (script) {
    _.filename = script.src;

    if (script.hasAttribute('data-manual')) {
      _.manual = true;
    }
  }

  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }

  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;

    if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
      document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }

  return _;
}(_self);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof global !== 'undefined') {
  global.Prism = Prism;
}

;
Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: true
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        } // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);

Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../vendor/prism/prism.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _mobile = _interopRequireDefault(require("./css-string/mobile.js"));

var _pc = _interopRequireDefault(require("./css-string/pc.js"));

require("../vendor/prism/prism.js");

require("../vendor/prism/prism.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = pageWidth >= 650 ? _pc.default : _mobile.default;
var player = {
  id: undefined,
  n: 1,
  time: pageWidth >= 650 ? 50 : 0,
  view: {
    codeWrapper: document.getElementById('codeWrapper'),
    code: document.getElementById('code'),
    styleTag: document.getElementById('styleTag')
  },
  events: {
    // 表驱动编程
    '#btnPlay': 'play',
    '#btnPause': 'pause',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnSkipAnima': 'skipAnima',
    '#btnReset': 'reset'
  },
  init: function init() {
    player.view.code.innerText = string.slice(0, player.n);
    player.view.styleTag.innerHTML = string.slice(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        // 保证只遍历events的自身属性
        var value = player.events[key]; // 'play'、'pause'、'slow'...

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.writeCode(player.n);
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  skipAnima: function skipAnima() {
    player.pause();
    player.n = string.length;
    player.writeCode(player.n);
  },
  reset: function reset() {
    player.n = 1;
    player.play();
  },
  writeCode: function writeCode(stringLength) {
    player.view.code.innerHTML = Prism.highlight(string.slice(0, stringLength), Prism.languages.css);
    player.view.styleTag.innerHTML = string.slice(0, stringLength);
    player.view.codeWrapper.scrollTop = codeWrapper.scrollHeight;
  }
};
player.init();

hiddenCode.onclick = function (e) {
  e.target.textContent = e.target.textContent === '显示代码' ? '隐藏代码' : '显示代码';
  codeWrapper.classList.toggle('active');
};
},{"./css-string/mobile.js":"css-string/mobile.js","./css-string/pc.js":"css-string/pc.js","../vendor/prism/prism.js":"../vendor/prism/prism.js","../vendor/prism/prism.css":"../vendor/prism/prism.css"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50853" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map