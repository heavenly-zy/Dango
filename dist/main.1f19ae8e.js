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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*CSS reset*/\n.preview-wrapper * {box-sizing: border-box;}\n.preview-wrapper *:before, *:after {box-sizing: border-box;}\n.preview-wrapper * {margin: 0; padding: 0;}\nul, ol { list-style: none; }\na {color: inherit; text-decoration: none;}\nimg {max-width: 100%; max-height: 100%;}\n\n/*\u80CC\u666F*/\n.preview-wrapper {\n    background: #fee7d7;\n    color: #ffa264;\n    font-weight: 700\n}\n\n.container {\n    margin: 70px auto;\n    width: 425px;\n    position: relative;\n}\n\n/*\u5730\u677F*/\n.container:before {\n    content: '';\n    position: absolute;\n    width: 600px;\n    height: 400px;\n    background: #ffc99b;\n    border-radius: 100%;\n    bottom: -170px;\n    margin-left: -80px;\n    transform: rotateX(70deg);\n}\n\n/*\u611F\u53F9\u53F7*/\n.container .exclamationmark {\n    position: absolute;\n    font-size: 70px;\n    top: -50px;\n    right: -40px;\n}\n\n/*zzz...*/\n.container .sleep {\n    position: absolute;\n    font-size: 40px;\n    top: -50px;\n    left: -60px;\n}\n\n.dango {\n    width: 254px;\n    height: 154px;\n    border-radius: 250px 250px 100px 100px;\n    margin-top: -20px;\n    position: relative;\n}\n\n/*\u7D2B\u8272\u7684\u56E2\u5B50*/\n.dango.purple {\n    border: 7px solid #bd9ad2;\n    background: #d0b7ee;\n    animation: wiggle 5s infinite;\n    transform-origin: center bottom;\n    z-index: 5;\n    margin-left: 110px;\n}\n\n/*\u7EFF\u8272\u7684\u56E2\u5B50*/\n.dango.green {\n    border: 7px solid #7bc590;\n    background: #b9eed0;\n    animation: wiggle 4.5s infinite;\n    transform-origin: center bottom;\n    z-index: 4;\n    margin-left: 50px;\n}\n\n/*\u84DD\u8272\u7684\u56E2\u5B50*/\n.dango.blue {\n    border: 7px solid #7fbbdf;\n    background: #cef1f3;\n    animation: wiggle 3.5s infinite;\n    transform-origin: center bottom;\n    z-index: 3;\n    margin-left: 13px;\n}\n\n/*\u84DD\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.blue .blink {\n    animation: blink 5s infinite;\n    transform-origin: center bottom;\n}\n\n.dango.blue .blink:before {\n    animation: blinkBefore 5s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u7C89\u8272\u7684\u56E2\u5B50*/\n.dango.pink {\n    border: 7px solid #ffa5b6;\n    background: #ffd2dc;\n    animation: wiggle 4s infinite;\n    transform-origin: center bottom;\n    z-index: 2;\n    margin-left: 10px;\n}\n\n.dango.pink .blink {\n    animation: blink 3.2s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u7C89\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.pink .blink:before {\n    animation: blinkBefore 3.2s infinite;\n    transform-origin: center bottom;\n}\n\n/*\u9EC4\u8272\u7684\u56E2\u5B50*/\n.dango.yellow {\n    border: 7px solid #ffb351;\n    background: #fff1b0;\n    animation: wiggle 8s infinite;\n    transform-origin: center bottom;\n    z-index: 1;\n}\n\n/*\u9EC4\u8272\u7684\u56E2\u5B50\u4F1A\u7728\u773C*/\n.dango.yellow .blink {\n    animation: blink 4s infinite;\n    transform-origin: center bottom;\n}\n\n.dango.yellow .blink:before {\n    animation: blinkBefore 4s infinite;\n    transform-origin: center bottom;\n}\n\n.dango .eyes {\n    position: absolute;\n    top: 20px;\n    left: 100px;\n    width: 5px;\n    height: 50px;\n    background: #4e4e4e;\n    display: block;\n    border-radius: 10px;\n}\n\n.dango .eyes:before {\n    border-radius: 10px;\n    content: '';\n    left: 40px;\n    width: 5px;\n    height: 50px;\n    position: absolute;\n    background: #4e4e4e;\n}\n\n.dango .eyes.squint {\n    transform: rotate(-35deg);\n    height: 25px;\n}\n\n.dango .eyes.squint:before {\n    top: 16px;\n    left: -9px;\n    height: 25px;\n    transform: rotate(60deg);\n}\n\n.dango .eyes.squint.second {\n    left: 130px;\n    top: 35px;\n    transform: rotate(160deg);\n}\n\n/*\u7EFF\u8272\u7684\u56E2\u5B50\u5728\u7761\u89C9*/\n.dango .sleepeyes {\n    width: 50px;\n    height: 5px;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 10px;\n    top: 40px;\n    left: 60px;\n}\n\n.dango .sleepeyes:before {\n    content: '';\n    width: 50px;\n    height: 5px;\n    position: absolute;\n    background: #4e4e4e;\n    border-radius: 10px;\n    left: 85px;\n}\n\n/*\u56E2\u5B50\u8138\u4E0A\u7684\u7EA2\u6655*/\n.dango .blush {\n    height: 35px;\n    width: 35px;\n    position: absolute;\n    top: 60px;\n    left: 50px;\n    background: #ff9cb0;\n    border-radius: 100%;\n}\n\n.dango .blush:before {\n    content: '';\n    height: 35px;\n    width: 35px;\n    position: absolute;\n    left: 105px;\n    background: #ff9cb0;\n    border-radius: 100%;\n}\n\n/*\u52A8\u753B*/\n@keyframes blink {\n\n    0%,\n    20%,\n    100% {\n        height: 50px;\n        width: 5px;\n        top: 20px;\n        left: 100px;\n    }\n\n    10% {\n        height: 5px;\n        top: 50px;\n        width: 20px;\n        left: 93px;\n    }\n}\n\n@keyframes blinkBefore {\n\n    0%,\n    20%,\n    100% {\n        height: 50px;\n        width: 5px;\n    }\n\n    10% {\n        height: 5px;\n        width: 20px;\n    }\n}\n\n@keyframes wiggle {\n\n    0%,\n    100% {\n        transform: rotate(0deg);\n    }\n\n    20% {\n        transform: rotate(5deg);\n    }\n\n    60% {\n        transform: rotate(-4deg);\n    }\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 50,
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
    '#btnSkipAnima': 'skipAnima'
  },
  init: function init() {
    player.view.code.innerText = _css.default.slice(0, player.n);
    player.view.styleTag.innerHTML = _css.default.slice(0, player.n);
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

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.view.codeWrapper.scrollTop = codeWrapper.scrollHeight;
    player.view.code.innerText = _css.default.slice(0, player.n);
    player.view.styleTag.innerHTML = _css.default.slice(0, player.n);
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
    player.view.code.innerText = _css.default;
    player.view.styleTag.innerHTML = _css.default;
    player.view.codeWrapper.scrollTop = codeWrapper.scrollHeight;
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51625" + '/');

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