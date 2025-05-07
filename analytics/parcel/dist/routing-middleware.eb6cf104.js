// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fzre":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7d42a391eb6cf104";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gyL8H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tsubMiddleware", ()=>tsubMiddleware);
var _tsub = require("@segment/tsub");
var tsubMiddleware = function(rules) {
    return function(_a) {
        var payload = _a.payload, integration = _a.integration, next = _a.next;
        var store = new _tsub.Store(rules);
        var rulesToApply = store.getRulesByDestinationName(integration);
        rulesToApply.forEach(function(rule) {
            var matchers = rule.matchers, transformers = rule.transformers;
            for(var i = 0; i < matchers.length; i++)if (_tsub.matches(payload.obj, matchers[i])) {
                payload.obj = _tsub.transform(payload.obj, transformers[i]);
                if (payload.obj === null) return next(null);
            }
        });
        next(payload);
    };
};

},{"@segment/tsub":"o23vu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"o23vu":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Store = exports.matches = exports.transform = void 0;
var transformers_1 = require("a1cf3408b6abb6fb");
Object.defineProperty(exports, "transform", {
    enumerable: true,
    get: function() {
        return __importDefault(transformers_1).default;
    }
});
var matchers_1 = require("d3f628e6b68152b");
Object.defineProperty(exports, "matches", {
    enumerable: true,
    get: function() {
        return __importDefault(matchers_1).default;
    }
});
var store_1 = require("b1550b399ba6e1f4");
Object.defineProperty(exports, "Store", {
    enumerable: true,
    get: function() {
        return __importDefault(store_1).default;
    }
});

},{"a1cf3408b6abb6fb":"fahtS","d3f628e6b68152b":"gtowG","b1550b399ba6e1f4":"ii28p"}],"fahtS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var md5_1 = __importDefault(require("3671b2a42f29830c"));
var dlv_1 = __importDefault(require("2dd1dca457d1c5bb"));
var math_base_special_ldexp_1 = __importDefault(require("15019aa80099f5e1"));
var dset_1 = require("468e70c33b98ce43");
var unset_1 = require("bb82c08256057361");
function transform(payload, transformers) {
    var transformedPayload = payload;
    for(var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++){
        var transformer = transformers_1[_i];
        switch(transformer.type){
            case "drop":
                return null;
            case "drop_properties":
                dropProperties(transformedPayload, transformer.config);
                break;
            case "allow_properties":
                allowProperties(transformedPayload, transformer.config);
                break;
            case "sample_event":
                if (sampleEvent(transformedPayload, transformer.config)) break;
                return null;
            case "map_properties":
                mapProperties(transformedPayload, transformer.config);
                break;
            case "hash_properties":
                break;
            default:
                throw new Error('Transformer of type "'.concat(transformer.type, '" is unsupported.'));
        }
    }
    return transformedPayload;
}
exports.default = transform;
// dropProperties removes all specified props from the object.
function dropProperties(payload, config) {
    filterProperties(payload, config.drop, function(matchedObj, dropList) {
        dropList.forEach(function(k) {
            return delete matchedObj[k];
        });
    });
}
// allowProperties ONLY allows the specific targets within the keys. (e.g. "a.foo": ["bar", "baz"]
// on {a: {foo: {bar: 1, baz: 2}, other: 3}} will not have any drops, as it only looks inside a.foo
function allowProperties(payload, config) {
    filterProperties(payload, config.allow, function(matchedObj, preserveList) {
        Object.keys(matchedObj).forEach(function(key) {
            if (!preserveList.includes(key)) delete matchedObj[key];
        });
    });
}
function filterProperties(payload, ruleSet, filterCb) {
    Object.entries(ruleSet).forEach(function(_a) {
        var key = _a[0], targets = _a[1];
        var filter = function(obj) {
            // Can only act on objects.
            if (typeof obj !== "object" || obj === null) return;
            filterCb(obj, targets);
        };
        // If key is empty, it refers to the top-level object.
        var matchedObject = key === "" ? payload : (0, dlv_1.default)(payload, key);
        if (Array.isArray(matchedObject)) matchedObject.forEach(filter);
        else filter(matchedObject);
    });
}
function mapProperties(payload, config) {
    // Some configs might try to modify or read from a field multiple times. We will only ever read
    // values as they were before any modifications began. Thus, if you try to override e.g.
    // {a: {b: 1}} with set(a, 'b', 2) (which results in {a: {b: 2}}) and then try to copy a.b into
    // a.c, you will get {a: {b: 2, c:1}} and NOT {a: {b:2, c:2}}. This prevents map evaluation
    // order from mattering, and === what server-side does.
    // See: https://github.com/segmentio/tsub/blob/661695a63b60b90471796e667458f076af788c19/transformers/map_properties.go#L179-L200
    var initialPayload = JSON.parse(JSON.stringify(payload));
    for(var key in config.map){
        if (!config.map.hasOwnProperty(key)) continue;
        var actionMap = config.map[key];
        // Can't manipulate non-objects. Check that the parent is one. Strip the last .field
        // from the string.
        var splitKey = key.split(".");
        var parent_1 = void 0;
        if (splitKey.length > 1) {
            splitKey.pop();
            parent_1 = (0, dlv_1.default)(initialPayload, splitKey.join("."));
        } else parent_1 = payload;
        if (typeof parent_1 !== "object") continue;
        // These actions are exclusive to each other.
        if (actionMap.copy) {
            var valueToCopy = (0, dlv_1.default)(initialPayload, actionMap.copy);
            if (valueToCopy !== undefined) (0, dset_1.dset)(payload, key, valueToCopy);
        } else if (actionMap.move) {
            var valueToMove = (0, dlv_1.default)(initialPayload, actionMap.move);
            if (valueToMove !== undefined) (0, dset_1.dset)(payload, key, valueToMove);
            (0, unset_1.unset)(payload, actionMap.move);
        } else if (actionMap.hasOwnProperty("set")) (0, dset_1.dset)(payload, key, actionMap.set);
        // to_string is not exclusive and can be paired with other actions. Final action.
        if (actionMap.to_string) {
            var valueToString = (0, dlv_1.default)(payload, key);
            // Do not string arrays and objects. Do not double-encode strings.
            if (typeof valueToString === "string" || typeof valueToString === "object" && valueToString !== null) continue;
            // TODO: Check stringifier in Golang for parity.
            if (valueToString !== undefined) (0, dset_1.dset)(payload, key, JSON.stringify(valueToString));
            else // TODO: Check this behavior.
            (0, dset_1.dset)(payload, key, "undefined");
        }
    }
}
function sampleEvent(payload, config) {
    if (config.sample.percent <= 0) return false;
    else if (config.sample.percent >= 1) return true;
    // If we're not filtering deterministically, just use raw percentage.
    if (!config.sample.path) return samplePercent(config.sample.percent);
    // Otherwise, use a deterministic hash.
    return sampleConsistentPercent(payload, config);
}
function samplePercent(percent) {
    // Math.random returns [0, 1) => 0.0<>0.9999...
    return Math.random() <= percent;
}
// sampleConsistentPercent converts an input string of bytes into a consistent uniform
// continuous distribution of [0.0, 1.0]. This is based on
// http://mumble.net/~campbell/tmp/random_real.c, but using the digest
// result of the input value as the random information.
// IMPORTANT - This function needs to === the Golang implementation to ensure that the two return the same vals!
// See: https://github.com/segmentio/sampler/blob/65cb04132305a04fcd4bcaef67d57fbe40c30241/sampler.go#L13-L38
// Since AJS supports IE9+ (typed arrays were introduced in IE10) we're doing some manual array math.
// This could be done directly with strings, but arrays are easier to reason about/have better function support.
function sampleConsistentPercent(payload, config) {
    var field = (0, dlv_1.default)(payload, config.sample.path);
    // Operate off of JSON bytes. TODO: Validate all type behavior, esp. strings.
    var digest = (0, md5_1.default)(JSON.stringify(field));
    var exponent = -64;
    // Manually maintain 64-bit int as an array.
    var significand = [];
    // Left-shift and OR for first 8 bytes of digest. (8 bytes * 8 = 64 bits)
    consumeDigest(digest.slice(0, 8), significand);
    var leadingZeros = 0;
    for(var i = 0; i < 64; i++){
        if (significand[i] === 1) break;
        leadingZeros++;
    }
    if (leadingZeros !== 0) {
        // Use the last 8 bytes of the digest, same as before.
        var val = [];
        consumeDigest(digest.slice(9, 16), val);
        exponent -= leadingZeros;
        // Left-shift away leading zeros in significand.
        significand.splice(0, leadingZeros);
        // Right-shift val by 64 minus leading zeros and push into significand.
        val.splice(64 - leadingZeros);
        significand = significand.concat(val);
    }
    // Flip 64th bit
    significand[63] = significand[63] === 0 ? 1 : 0;
    // Convert our manual binary into a JS num (binary arr => binary string => psuedo-int) and run the ldexp!
    return (0, math_base_special_ldexp_1.default)(parseInt(significand.join(""), 2), exponent) < config.sample.percent;
}
// Array byte filler helper
function consumeDigest(digest, arr) {
    for(var i = 0; i < 8; i++){
        var remainder = digest[i];
        for(var binary = 128; binary >= 1; binary /= 2)if (remainder - binary >= 0) {
            remainder -= binary;
            arr.push(1);
        } else arr.push(0);
    }
}

},{"3671b2a42f29830c":"4edQb","2dd1dca457d1c5bb":"hKTrw","15019aa80099f5e1":"7a0Sw","468e70c33b98ce43":"agVOO","bb82c08256057361":"Ufp07"}],"4edQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(t) {
        var e, f, n, a = [
            e = 1732584193,
            f = 4023233417,
            ~e,
            ~f
        ], c = [], h = unescape(encodeURI(t)) + "\x80", u = h.length;
        for(t = --u / 4 + 2 | 15, c[--t] = 8 * u; ~u;)c[u >> 2] |= h.charCodeAt(u) << 8 * u--;
        for(o = h = 0; o < t; o += 16){
            for(u = a; h < 64; u = [
                n = u[3],
                e + ((n = u[0] + [
                    e & f | ~e & n,
                    n & e | ~n & f,
                    e ^ f ^ n,
                    f ^ (e | ~n)
                ][u = h >> 4] + r[h] + ~~c[o | 15 & [
                    h,
                    5 * h + 1,
                    3 * h + 5,
                    7 * h
                ][u]]) << (u = [
                    7,
                    12,
                    17,
                    22,
                    5,
                    9,
                    14,
                    20,
                    4,
                    11,
                    16,
                    23,
                    6,
                    10,
                    15,
                    21
                ][4 * u + h++ % 4]) | n >>> -u),
                e,
                f
            ])e = 0 | u[1], f = u[2];
            for(h = 4; h;)a[--h] += u[h];
        }
        for(t = ""; h < 32;)t += (a[h >> 3] >> 4 * (1 ^ h++) & 15).toString(16);
        return t;
    });
for(var r = [], o = 0; o < 64;)r[o] = 0 | 4294967296 * Math.sin(++o % Math.PI);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKTrw":[function(require,module,exports) {
!function(t, n) {
    module.exports = function(t, n, e, i, o) {
        for(n = n.split ? n.split(".") : n, i = 0; i < n.length; i++)t = t ? t[n[i]] : o;
        return t === o ? e : t;
    };
}(this);

},{}],"7a0Sw":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Multiply a double-precision floating-point number by an integer power of two.
*
* @module @stdlib/math-base-special-ldexp
*
* @example
* var ldexp = require( '@stdlib/math-base-special-ldexp' );
*
* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* x = ldexp( 0.0, 20 );
* // returns 0.0
*
* x = ldexp( -0.0, 39 );
* // returns -0.0
*
* x = ldexp( NaN, -101 );
* // returns NaN
*
* x = ldexp( Infinity, 11 );
* // returns Infinity
*
* x = ldexp( -Infinity, -118 );
* // returns -Infinity
*/ // MODULES //
var ldexp = require("7f17fc90e67b21b");
// EXPORTS //
module.exports = ldexp;

},{"7f17fc90e67b21b":"43sR1"}],"43sR1":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// NOTES //
/*
* => ldexp: load exponent (see [The Open Group]{@link http://pubs.opengroup.org/onlinepubs/9699919799/functions/ldexp.html} and [cppreference]{@link http://en.cppreference.com/w/c/numeric/math/ldexp}).
*/ // MODULES //
var PINF = require("32c1105cfaad7bb8");
var NINF = require("d4f5b813eafc30b2");
var BIAS = require("a68154156badb0af");
var MAX_EXPONENT = require("92cdc93171b2092b");
var MAX_SUBNORMAL_EXPONENT = require("9af2f4f45b7eab28");
var MIN_SUBNORMAL_EXPONENT = require("30fdc5020cdda6fa");
var isnan = require("d7ea0a64a4c266c5");
var isInfinite = require("cbd436c6635fdb5b");
var copysign = require("99c710766dd698a2");
var normalize = require("e750214b21ebf548");
var floatExp = require("f57417c48c54de97");
var toWords = require("dfbdd797d869053d");
var fromWords = require("b4babc6967338c21");
// VARIABLES //
// 1/(1<<52) = 1/(2**52) = 1/4503599627370496
var TWO52_INV = 2.220446049250313e-16;
// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
var CLEAR_EXP_MASK = 2148532223; // asm type annotation
// Normalization workspace:
var FRAC = [
    0.0,
    0.0
]; // WARNING: not thread safe
// High/low words workspace:
var WORDS = [
    0,
    0
]; // WARNING: not thread safe
// MAIN //
/**
* Multiplies a double-precision floating-point number by an integer power of two.
*
* @param {number} frac - fraction
* @param {integer} exp - exponent
* @returns {number} double-precision floating-point number
*
* @example
* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* @example
* var x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* @example
* var x = ldexp( 0.0, 20 );
* // returns 0.0
*
* @example
* var x = ldexp( -0.0, 39 );
* // returns -0.0
*
* @example
* var x = ldexp( NaN, -101 );
* // returns NaN
*
* @example
* var x = ldexp( Infinity, 11 );
* // returns Infinity
*
* @example
* var x = ldexp( -Infinity, -118 );
* // returns -Infinity
*/ function ldexp(frac, exp) {
    var high;
    var m;
    if (frac === 0.0 || // handles +-0
    isnan(frac) || isInfinite(frac)) return frac;
    // Normalize the input fraction:
    normalize(FRAC, frac);
    frac = FRAC[0];
    exp += FRAC[1];
    // Extract the exponent from `frac` and add it to `exp`:
    exp += floatExp(frac);
    // Check for underflow/overflow...
    if (exp < MIN_SUBNORMAL_EXPONENT) return copysign(0.0, frac);
    if (exp > MAX_EXPONENT) {
        if (frac < 0.0) return NINF;
        return PINF;
    }
    // Check for a subnormal and scale accordingly to retain precision...
    if (exp <= MAX_SUBNORMAL_EXPONENT) {
        exp += 52;
        m = TWO52_INV;
    } else m = 1.0;
    // Split the fraction into higher and lower order words:
    toWords(WORDS, frac);
    high = WORDS[0];
    // Clear the exponent bits within the higher order word:
    high &= CLEAR_EXP_MASK;
    // Set the exponent bits to the new exponent:
    high |= exp + BIAS << 20;
    // Create a new floating-point number:
    return m * fromWords(high, WORDS[1]);
}
// EXPORTS //
module.exports = ldexp;

},{"32c1105cfaad7bb8":"j6vWp","d4f5b813eafc30b2":"6rbmW","a68154156badb0af":"3oP8I","92cdc93171b2092b":"jLhlA","9af2f4f45b7eab28":"gUdlI","30fdc5020cdda6fa":"fLTlj","d7ea0a64a4c266c5":"yP1DN","cbd436c6635fdb5b":"aKeqQ","99c710766dd698a2":"7g8tm","e750214b21ebf548":"6hPwJ","f57417c48c54de97":"es5gI","dfbdd797d869053d":"fT5ji","b4babc6967338c21":"8CJFg"}],"j6vWp":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Double-precision floating-point positive infinity.
*
* @module @stdlib/constants-float64-pinf
* @type {number}
*
* @example
* var FLOAT64_PINF = require( '@stdlib/constants-float64-pinf' );
* // returns Infinity
*/ // MAIN //
/**
* Double-precision floating-point positive infinity.
*
* ## Notes
*
* Double-precision floating-point positive infinity has the bit sequence
*
* ```binarystring
* 0 11111111111 00000000000000000000 00000000000000000000000000000000
* ```
*
* @constant
* @type {number}
* @default Number.POSITIVE_INFINITY
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_PINF = Number.POSITIVE_INFINITY; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = FLOAT64_PINF;

},{}],"6rbmW":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Double-precision floating-point negative infinity.
*
* @module @stdlib/constants-float64-ninf
* @type {number}
*
* @example
* var FLOAT64_NINF = require( '@stdlib/constants-float64-ninf' );
* // returns -Infinity
*/ // MODULES //
var Number = require("65d52c85a9139118");
// MAIN //
/**
* Double-precision floating-point negative infinity.
*
* ## Notes
*
* Double-precision floating-point negative infinity has the bit sequence
*
* ```binarystring
* 1 11111111111 00000000000000000000 00000000000000000000000000000000
* ```
*
* @constant
* @type {number}
* @default Number.NEGATIVE_INFINITY
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_NINF = Number.NEGATIVE_INFINITY;
// EXPORTS //
module.exports = FLOAT64_NINF;

},{"65d52c85a9139118":"1nN6J"}],"1nN6J":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Constructor which returns a `Number` object.
*
* @module @stdlib/number-ctor
*
* @example
* var Number = require( '@stdlib/number-ctor' );
*
* var v = new Number( 10.0 );
* // returns <Number>
*/ // MODULES //
var Number = require("269cf1d9067a1566");
// EXPORTS //
module.exports = Number;

},{"269cf1d9067a1566":"65Hv6"}],"65Hv6":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// EXPORTS //
module.exports = Number; // eslint-disable-line stdlib/require-globals

},{}],"3oP8I":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* The bias of a double-precision floating-point number's exponent.
*
* @module @stdlib/constants-float64-exponent-bias
* @type {integer32}
*
* @example
* var FLOAT64_EXPONENT_BIAS = require( '@stdlib/constants-float64-exponent-bias' );
* // returns 1023
*/ // MAIN //
/**
* Bias of a double-precision floating-point number's exponent.
*
* ## Notes
*
* The bias can be computed via
*
* ```tex
* \mathrm{bias} = 2^{k-1} - 1
* ```
*
* where \\(k\\) is the number of bits in the exponent; here, \\(k = 11\\).
*
* @constant
* @type {integer32}
* @default 1023
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_EXPONENT_BIAS = 1023; // asm type annotation
// EXPORTS //
module.exports = FLOAT64_EXPONENT_BIAS;

},{}],"jLhlA":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* The maximum biased base 2 exponent for a double-precision floating-point number.
*
* @module @stdlib/constants-float64-max-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT64_MAX_BASE2_EXPONENT = require( '@stdlib/constants-float64-max-base2-exponent' );
* // returns 1023
*/ // MAIN //
/**
* The maximum biased base 2 exponent for a double-precision floating-point number.
*
* ```text
* 11111111110 => 2046 - BIAS = 1023
* ```
*
* where `BIAS = 1023`.
*
* @constant
* @type {integer32}
* @default 1023
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_MAX_BASE2_EXPONENT = 1023; // asm type annotation
// EXPORTS //
module.exports = FLOAT64_MAX_BASE2_EXPONENT;

},{}],"gUdlI":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* The maximum biased base 2 exponent for a subnormal double-precision floating-point number.
*
* @module @stdlib/constants-float64-max-base2-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-max-base2-exponent-subnormal' );
* // returns -1023
*/ // MAIN //
/**
* The maximum biased base 2 exponent for a subnormal double-precision floating-point number.
*
* ```text
* 00000000000 => 0 - BIAS = -1023
* ```
*
* where `BIAS = 1023`.
*
* @constant
* @type {integer32}
* @default -1023
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = -1023; // asm type annotation
// EXPORTS //
module.exports = FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL;

},{}],"fLTlj":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* The minimum biased base 2 exponent for a subnormal double-precision floating-point number.
*
* @module @stdlib/constants-float64-min-base2-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-min-base2-exponent-subnormal' );
* // returns -1074
*/ // MAIN //
/**
* The minimum biased base 2 exponent for a subnormal double-precision floating-point number.
*
* ```text
* -(BIAS+(52-1)) = -(1023+51) = -1074
* ```
*
* where `BIAS = 1023` and `52` is the number of digits in the significand.
*
* @constant
* @type {integer32}
* @default -1074
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = -1074; // asm type annotation
// EXPORTS //
module.exports = FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL;

},{}],"yP1DN":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a double-precision floating-point numeric value is `NaN`.
*
* @module @stdlib/math-base-assert-is-nan
*
* @example
* var isnan = require( '@stdlib/math-base-assert-is-nan' );
*
* var bool = isnan( NaN );
* // returns true
*
* bool = isnan( 7.0 );
* // returns false
*/ // MODULES //
var isnan = require("cb06612ea42efd2f");
// EXPORTS //
module.exports = isnan;

},{"cb06612ea42efd2f":"iEGjj"}],"iEGjj":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
/**
* Tests if a double-precision floating-point numeric value is `NaN`.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is `NaN`
*
* @example
* var bool = isnan( NaN );
* // returns true
*
* @example
* var bool = isnan( 7.0 );
* // returns false
*/ function isnan(x) {
    return x !== x;
}
// EXPORTS //
module.exports = isnan;

},{}],"aKeqQ":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a double-precision floating-point numeric value is infinite.
*
* @module @stdlib/math-base-assert-is-infinite
*
* @example
* var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
*
* var bool = isInfinite( Infinity );
* // returns true
*
* bool = isInfinite( -Infinity );
* // returns true
*
* bool = isInfinite( 5.0 );
* // returns false
*
* bool = isInfinite( NaN );
* // returns false
*/ // MODULES //
var isInfinite = require("f2a48ee55a8f5c92");
// EXPORTS //
module.exports = isInfinite;

},{"f2a48ee55a8f5c92":"dKtIR"}],"dKtIR":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var PINF = require("a96498899e2e0190");
var NINF = require("27e5248435cc573b");
// MAIN //
/**
* Tests if a double-precision floating-point numeric value is infinite.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is infinite
*
* @example
* var bool = isInfinite( Infinity );
* // returns true
*
* @example
* var bool = isInfinite( -Infinity );
* // returns true
*
* @example
* var bool = isInfinite( 5.0 );
* // returns false
*
* @example
* var bool = isInfinite( NaN );
* // returns false
*/ function isInfinite(x) {
    return x === PINF || x === NINF;
}
// EXPORTS //
module.exports = isInfinite;

},{"a96498899e2e0190":"j6vWp","27e5248435cc573b":"6rbmW"}],"7g8tm":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @module @stdlib/math-base-special-copysign
*
* @example
* var copysign = require( '@stdlib/math-base-special-copysign' );
*
* var z = copysign( -3.14, 10.0 );
* // returns 3.14
*
* z = copysign( 3.14, -1.0 );
* // returns -3.14
*
* z = copysign( 1.0, -0.0 );
* // returns -1.0
*
* z = copysign( -3.14, -0.0 );
* // returns -3.14
*
* z = copysign( -0.0, 1.0 );
* // returns 0.0
*/ // MODULES //
var main = require("1fe262755e1d4efe");
// EXPORTS //
module.exports = main;

},{"1fe262755e1d4efe":"5eDeo"}],"5eDeo":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var SIGN_MASK = require("edb4ee6998b4b0a1");
var ABS_MASK = require("1e345ff791592153");
var toWords = require("83983024f5f6824b");
var getHighWord = require("d208e52d0c3c78d5");
var fromWords = require("8591c79883536c1b");
// VARIABLES //
// High/low words workspace:
var WORDS = [
    0,
    0
];
// MAIN //
/**
* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a double-precision floating-point number
*
* @example
* var z = copysign( -3.14, 10.0 );
* // returns 3.14
*
* @example
* var z = copysign( 3.14, -1.0 );
* // returns -3.14
*
* @example
* var z = copysign( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = copysign( -3.14, -0.0 );
* // returns -3.14
*
* @example
* var z = copysign( -0.0, 1.0 );
* // returns 0.0
*/ function copysign(x, y) {
    var hx;
    var hy;
    // Split `x` into higher and lower order words:
    toWords.assign(x, WORDS, 1, 0);
    hx = WORDS[0];
    // Turn off the sign bit of `x`:
    hx &= ABS_MASK;
    // Extract the higher order word from `y`:
    hy = getHighWord(y);
    // Leave only the sign bit of `y` turned on:
    hy &= SIGN_MASK;
    // Copy the sign bit of `y` to `x`:
    hx |= hy;
    // Return a new value having the same magnitude as `x`, but with the sign of `y`:
    return fromWords(hx, WORDS[1]);
}
// EXPORTS //
module.exports = copysign;

},{"edb4ee6998b4b0a1":"b0wsP","1e345ff791592153":"6R37R","83983024f5f6824b":"fT5ji","d208e52d0c3c78d5":"hM6kF","8591c79883536c1b":"8CJFg"}],"b0wsP":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* High word mask for the sign bit of a double-precision floating-point number.
*
* @module @stdlib/constants-float64-high-word-sign-mask
* @type {uinteger32}
*
* @example
* var FLOAT64_HIGH_WORD_SIGN_MASK = require( '@stdlib/constants-float64-high-word-sign-mask' );
* // returns 2147483648
*/ // MAIN //
/**
* High word mask for the sign bit of a double-precision floating-point number.
*
* ## Notes
*
* The high word mask for the sign bot of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2147483648 \\), which corresponds to the bit sequence
*
* ```binarystring
* 1 00000000000 00000000000000000000
* ```
*
* @constant
* @type {uinteger32}
* @default 0x80000000
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_HIGH_WORD_SIGN_MASK = 2147483648; // eslint-disable-line id-length
// EXPORTS //
module.exports = FLOAT64_HIGH_WORD_SIGN_MASK;

},{}],"6R37R":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* High word mask for excluding the sign bit of a double-precision floating-point number.
*
* @module @stdlib/constants-float64-high-word-abs-mask
* @type {uinteger32}
*
* @example
* var FLOAT64_HIGH_WORD_ABS_MASK = require( '@stdlib/constants-float64-high-word-abs-mask' );
* // returns 2147483647
*/ // MAIN //
/**
* High word mask for excluding the sign bit of a double-precision floating-point number.
*
* ## Notes
*
* The high word mask for excluding the sign bit of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2147483647 \\), which corresponds to the bit sequence
*
* ```binarystring
* 0 11111111111 11111111111111111111
* ```
*
* @constant
* @type {uinteger32}
* @default 0x7fffffff
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_HIGH_WORD_ABS_MASK = 2147483647; // eslint-disable-line id-length
// EXPORTS //
module.exports = FLOAT64_HIGH_WORD_ABS_MASK;

},{}],"fT5ji":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Split a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-to-words
*
* @example
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var w = toWords( 3.14e201 );
* // returns [ 1774486211, 2479577218 ]
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var out = new Uint32Array( 2 );
*
* var w = toWords.assign( 3.14e201, out, 1, 0 );
* // returns <Uint32Array>[ 1774486211, 2479577218 ]
*
* var bool = ( w === out );
* // returns true
*/ // MODULES //
var setReadOnly = require("ecb26330dbd200e3");
var main = require("7535cf935caa403d");
var assign = require("347ac6b9e654b850");
// MAIN //
setReadOnly(main, "assign", assign);
// EXPORTS //
module.exports = main;

},{"ecb26330dbd200e3":"bZH3C","7535cf935caa403d":"lmnJ1","347ac6b9e654b850":"5Q6fW"}],"bZH3C":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Define a non-enumerable read-only property.
*
* @module @stdlib/utils-define-nonenumerable-read-only-property
*
* @example
* var setNonEnumerableReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
*
* var obj = {};
*
* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/ // MODULES //
var setNonEnumerableReadOnly = require("32dc0c4861e76528");
// EXPORTS //
module.exports = setNonEnumerableReadOnly;

},{"32dc0c4861e76528":"1zeSP"}],"1zeSP":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var defineProperty = require("4536fee5f3ae15c4");
// MAIN //
/**
* Defines a non-enumerable read-only property.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {*} value - value to set
*
* @example
* var obj = {};
*
* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/ function setNonEnumerableReadOnly(obj, prop, value) {
    defineProperty(obj, prop, {
        "configurable": false,
        "enumerable": false,
        "writable": false,
        "value": value
    });
}
// EXPORTS //
module.exports = setNonEnumerableReadOnly;

},{"4536fee5f3ae15c4":"gejNn"}],"gejNn":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Define (or modify) an object property.
*
* @module @stdlib/utils-define-property
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
*
* var obj = {};
* defineProperty( obj, 'foo', {
*     'value': 'bar',
*     'writable': false,
*     'configurable': false,
*     'enumerable': false
* });
* obj.foo = 'boop'; // => throws
*/ // MODULES //
var hasDefinePropertySupport = require("96532b689c40813");
var builtin = require("fcdf410b586d4792");
var polyfill = require("d5d979a320bb3346");
// MAIN //
var defineProperty;
if (hasDefinePropertySupport()) defineProperty = builtin;
else defineProperty = polyfill;
// EXPORTS //
module.exports = defineProperty;

},{"96532b689c40813":"gJnEr","fcdf410b586d4792":"3b5cm","d5d979a320bb3346":"64EiS"}],"gJnEr":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var defineProperty = require("9e5255b2e8f43292");
// MAIN //
/**
* Tests for `Object.defineProperty` support.
*
* @private
* @returns {boolean} boolean indicating if an environment has `Object.defineProperty` support
*
* @example
* var bool = hasDefinePropertySupport();
* // returns <boolean>
*/ function hasDefinePropertySupport() {
    // Test basic support...
    try {
        defineProperty({}, "x", {});
        return true;
    } catch (err) {
        return false;
    }
}
// EXPORTS //
module.exports = hasDefinePropertySupport;

},{"9e5255b2e8f43292":"35f0e"}],"35f0e":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var main = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
// EXPORTS //
module.exports = main;

},{}],"3b5cm":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
/**
* Defines (or modifies) an object property.
*
* ## Notes
*
* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
*
* @name defineProperty
* @type {Function}
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {Object} descriptor - property descriptor
* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
* @param {*} [descriptor.value] - property value
* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be an object
* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
* @returns {Object} object with added property
*
* @example
* var obj = {};
*
* defineProperty( obj, 'foo', {
*     'value': 'bar'
* });
*
* var str = obj.foo;
* // returns 'bar'
*/ var defineProperty = Object.defineProperty;
// EXPORTS //
module.exports = defineProperty;

},{}],"64EiS":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ /* eslint-disable no-underscore-dangle, no-proto */ "use strict";
// VARIABLES //
var objectProtoype = Object.prototype;
var toStr = objectProtoype.toString;
var defineGetter = objectProtoype.__defineGetter__;
var defineSetter = objectProtoype.__defineSetter__;
var lookupGetter = objectProtoype.__lookupGetter__;
var lookupSetter = objectProtoype.__lookupSetter__;
// MAIN //
/**
* Defines (or modifies) an object property.
*
* ## Notes
*
* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
*
* @param {Object} obj - object on which to define the property
* @param {string} prop - property name
* @param {Object} descriptor - property descriptor
* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
* @param {*} [descriptor.value] - property value
* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be an object
* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
* @returns {Object} object with added property
*
* @example
* var obj = {};
*
* defineProperty( obj, 'foo', {
*     'value': 'bar'
* });
*
* var str = obj.foo;
* // returns 'bar'
*/ function defineProperty(obj, prop, descriptor) {
    var prototype;
    var hasValue;
    var hasGet;
    var hasSet;
    if (typeof obj !== "object" || obj === null || toStr.call(obj) === "[object Array]") throw new TypeError("invalid argument. First argument must be an object. Value: `" + obj + "`.");
    if (typeof descriptor !== "object" || descriptor === null || toStr.call(descriptor) === "[object Array]") throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + descriptor + "`.");
    hasValue = "value" in descriptor;
    if (hasValue) {
        if (lookupGetter.call(obj, prop) || lookupSetter.call(obj, prop)) {
            // Override `__proto__` to avoid touching inherited accessors:
            prototype = obj.__proto__;
            obj.__proto__ = objectProtoype;
            // Delete property as existing getters/setters prevent assigning value to specified property:
            delete obj[prop];
            obj[prop] = descriptor.value;
            // Restore original prototype:
            obj.__proto__ = prototype;
        } else obj[prop] = descriptor.value;
    }
    hasGet = "get" in descriptor;
    hasSet = "set" in descriptor;
    if (hasValue && (hasGet || hasSet)) throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
    if (hasGet && defineGetter) defineGetter.call(obj, prop, descriptor.get);
    if (hasSet && defineSetter) defineSetter.call(obj, prop, descriptor.set);
    return obj;
}
// EXPORTS //
module.exports = defineProperty;

},{}],"lmnJ1":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var fcn = require("4c2ed184d05ad627");
// MAIN //
/**
* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @param {number} x - input value
* @returns {Array<number>} output array
*
* @example
* var w = toWords( 3.14e201 );
* // returns [ 1774486211, 2479577218 ]
*/ function toWords(x) {
    return fcn(x, [
        0,
        0
    ], 1, 0);
}
// EXPORTS //
module.exports = toWords;

},{"4c2ed184d05ad627":"5Q6fW"}],"5Q6fW":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var Uint32Array = require("5e411a7538ac8a29");
var Float64Array = require("5930e42581423e06");
var indices = require("f5a239799b45a4db");
// VARIABLES //
var FLOAT64_VIEW = new Float64Array(1);
var UINT32_VIEW = new Uint32Array(FLOAT64_VIEW.buffer);
var HIGH = indices.HIGH;
var LOW = indices.LOW;
// MAIN //
/**
* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
*
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
*
* var out = new Uint32Array( 2 );
*
* var w = toWords( 3.14e201, out, 1, 0 );
* // returns <Uint32Array>[ 1774486211, 2479577218 ]
*
* var bool = ( w === out );
* // returns true
*/ function toWords(x, out, stride, offset) {
    FLOAT64_VIEW[0] = x;
    out[offset] = UINT32_VIEW[HIGH];
    out[offset + stride] = UINT32_VIEW[LOW];
    return out;
}
// EXPORTS //
module.exports = toWords;

},{"5e411a7538ac8a29":"dHKlA","5930e42581423e06":"ax89W","f5a239799b45a4db":"edwIo"}],"dHKlA":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint32
*
* @example
* var ctor = require( '@stdlib/array-uint32' );
*
* var arr = new ctor( 10 );
* // returns <Uint32Array>
*/ // MODULES //
var hasUint32ArraySupport = require("7986086367739067");
var builtin = require("50f464ec47e73965");
var polyfill = require("f8d1f8d15342152b");
// MAIN //
var ctor;
if (hasUint32ArraySupport()) ctor = builtin;
else ctor = polyfill;
// EXPORTS //
module.exports = ctor;

},{"7986086367739067":"bF820","50f464ec47e73965":"j2tQV","f8d1f8d15342152b":"iOwWF"}],"bF820":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `Uint32Array` support.
*
* @module @stdlib/assert-has-uint32array-support
*
* @example
* var hasUint32ArraySupport = require( '@stdlib/assert-has-uint32array-support' );
*
* var bool = hasUint32ArraySupport();
* // returns <boolean>
*/ // MODULES //
var hasUint32ArraySupport = require("44ff3199b0080bbd");
// EXPORTS //
module.exports = hasUint32ArraySupport;

},{"44ff3199b0080bbd":"3eB1C"}],"3eB1C":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isUint32Array = require("299dab6c48fe6c27");
var UINT32_MAX = require("18deb92f09f8f899");
var GlobalUint32Array = require("ad38400a3bbb9ddb");
// MAIN //
/**
* Tests for native `Uint32Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint32Array` support
*
* @example
* var bool = hasUint32ArraySupport();
* // returns <boolean>
*/ function hasUint32ArraySupport() {
    var bool;
    var arr;
    if (typeof GlobalUint32Array !== "function") return false;
    // Test basic support...
    try {
        arr = [
            1,
            3.14,
            -3.14,
            UINT32_MAX + 1,
            UINT32_MAX + 2
        ];
        arr = new GlobalUint32Array(arr);
        bool = isUint32Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT32_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1 // wrap around
        ;
    } catch (err) {
        bool = false;
    }
    return bool;
}
// EXPORTS //
module.exports = hasUint32ArraySupport;

},{"299dab6c48fe6c27":"6bgIA","18deb92f09f8f899":"14FJl","ad38400a3bbb9ddb":"aIhR0"}],"6bgIA":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a value is a Uint32Array.
*
* @module @stdlib/assert-is-uint32array
*
* @example
* var isUint32Array = require( '@stdlib/assert-is-uint32array' );
*
* var bool = isUint32Array( new Uint32Array( 10 ) );
* // returns true
*
* bool = isUint32Array( [] );
* // returns false
*/ // MODULES //
var isUint32Array = require("8fdbb00081359175");
// EXPORTS //
module.exports = isUint32Array;

},{"8fdbb00081359175":"3eQ22"}],"3eQ22":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var nativeClass = require("a4bafc32ccfea555");
// VARIABLES //
var hasUint32Array = typeof Uint32Array === "function"; // eslint-disable-line stdlib/require-globals
// MAIN //
/**
* Tests if a value is a Uint32Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint32Array
*
* @example
* var bool = isUint32Array( new Uint32Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint32Array( [] );
* // returns false
*/ function isUint32Array(value) {
    return hasUint32Array && value instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
    nativeClass(value) === "[object Uint32Array]";
}
// EXPORTS //
module.exports = isUint32Array;

},{"a4bafc32ccfea555":"h9G6x"}],"h9G6x":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return a string value indicating a specification defined classification of an object.
*
* @module @stdlib/utils-native-class
*
* @example
* var nativeClass = require( '@stdlib/utils-native-class' );
*
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* str = nativeClass( 5 );
* // returns '[object Number]'
*
* function Beep() {
*     return this;
* }
* str = nativeClass( new Beep() );
* // returns '[object Object]'
*/ // MODULES //
var hasToStringTag = require("645737d0a09e1a61");
var builtin = require("168364876e64dd5f");
var polyfill = require("3b591db19c704bc6");
// MAIN //
var nativeClass;
if (hasToStringTag()) nativeClass = polyfill;
else nativeClass = builtin;
// EXPORTS //
module.exports = nativeClass;

},{"645737d0a09e1a61":"fP6uC","168364876e64dd5f":"grkri","3b591db19c704bc6":"beIEn"}],"fP6uC":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `toStringTag` support.
*
* @module @stdlib/assert-has-tostringtag-support
*
* @example
* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
*
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/ // MODULES //
var hasToStringTagSupport = require("99483f36f9efd530");
// EXPORTS //
module.exports = hasToStringTagSupport;

},{"99483f36f9efd530":"dxCuY"}],"dxCuY":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var hasSymbols = require("d306c15d0f827946");
// VARIABLES //
var FLG = hasSymbols();
// MAIN //
/**
* Tests for native `toStringTag` support.
*
* @returns {boolean} boolean indicating if an environment has `toStringTag` support
*
* @example
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/ function hasToStringTagSupport() {
    return FLG && typeof Symbol.toStringTag === "symbol";
}
// EXPORTS //
module.exports = hasToStringTagSupport;

},{"d306c15d0f827946":"7lJ85"}],"7lJ85":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `Symbol` support.
*
* @module @stdlib/assert-has-symbol-support
*
* @example
* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
*
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ // MODULES //
var hasSymbolSupport = require("125e9b3af2a4bcdb");
// EXPORTS //
module.exports = hasSymbolSupport;

},{"125e9b3af2a4bcdb":"ftEwc"}],"ftEwc":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ function hasSymbolSupport() {
    return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
}
// EXPORTS //
module.exports = hasSymbolSupport;

},{}],"grkri":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var toStr = require("7f4a4237a768e18");
// MAIN //
/**
* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/ function nativeClass(v) {
    return toStr.call(v);
}
// EXPORTS //
module.exports = nativeClass;

},{"7f4a4237a768e18":"gKpB0"}],"gKpB0":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var toStr = Object.prototype.toString;
// EXPORTS //
module.exports = toStr;

},{}],"beIEn":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var hasOwnProp = require("2daa3723a341db9a");
var toStringTag = require("a163e9f9a58fe604");
var toStr = require("458e13deded19733");
// MAIN //
/**
* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/ function nativeClass(v) {
    var isOwn;
    var tag;
    var out;
    if (v === null || v === void 0) return toStr.call(v);
    tag = v[toStringTag];
    isOwn = hasOwnProp(v, toStringTag);
    // Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
    try {
        v[toStringTag] = void 0;
    } catch (err) {
        return toStr.call(v);
    }
    out = toStr.call(v);
    if (isOwn) v[toStringTag] = tag;
    else delete v[toStringTag];
    return out;
}
// EXPORTS //
module.exports = nativeClass;

},{"2daa3723a341db9a":"gGlBI","a163e9f9a58fe604":"fAwLM","458e13deded19733":"gKpB0"}],"gGlBI":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test whether an object has a specified property.
*
* @module @stdlib/assert-has-own-property
*
* @example
* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
*
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* bool = hasOwnProp( beep, 'bop' );
* // returns false
*/ // MODULES //
var hasOwnProp = require("5ba7c209364c6569");
// EXPORTS //
module.exports = hasOwnProp;

},{"5ba7c209364c6569":"7S1JZ"}],"7S1JZ":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// FUNCTIONS //
var has = Object.prototype.hasOwnProperty;
// MAIN //
/**
* Tests if an object has a specified property.
*
* @param {*} value - value to test
* @param {*} property - property to test
* @returns {boolean} boolean indicating if an object has a specified property
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'bap' );
* // returns false
*/ function hasOwnProp(value, property) {
    if (value === void 0 || value === null) return false;
    return has.call(value, property);
}
// EXPORTS //
module.exports = hasOwnProp;

},{}],"fAwLM":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var toStrTag = typeof Symbol === "function" ? Symbol.toStringTag : "";
// EXPORTS //
module.exports = toStrTag;

},{}],"14FJl":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Maximum unsigned 32-bit integer.
*
* @module @stdlib/constants-uint32-max
* @type {uinteger32}
*
* @example
* var UINT32_MAX = require( '@stdlib/constants-uint32-max' );
* // returns 4294967295
*/ // MAIN //
/**
* Maximum unsigned 32-bit integer.
*
* ## Notes
*
* The number has the value
*
* ```tex
* 2^{32} - 1
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 11111111111111111111111111111111
* ```
*
* @constant
* @type {uinteger32}
* @default 4294967295
*/ var UINT32_MAX = 4294967295;
// EXPORTS //
module.exports = UINT32_MAX;

},{}],"aIhR0":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var main = typeof Uint32Array === "function" ? Uint32Array : null; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = main;

},{}],"j2tQV":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var ctor = typeof Uint32Array === "function" ? Uint32Array : void 0; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = ctor;

},{}],"iOwWF":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function polyfill() {
    throw new Error("not implemented");
}
// EXPORTS //
module.exports = polyfill;

},{}],"ax89W":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
*
* @module @stdlib/array-float64
*
* @example
* var ctor = require( '@stdlib/array-float64' );
*
* var arr = new ctor( 10 );
* // returns <Float64Array>
*/ // MODULES //
var hasFloat64ArraySupport = require("bbae96f299bf990");
var builtin = require("7de91083076da11e");
var polyfill = require("d72cc62cb7d130f8");
// MAIN //
var ctor;
if (hasFloat64ArraySupport()) ctor = builtin;
else ctor = polyfill;
// EXPORTS //
module.exports = ctor;

},{"bbae96f299bf990":"giyGd","7de91083076da11e":"7R42q","d72cc62cb7d130f8":"kSckk"}],"giyGd":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `Float64Array` support.
*
* @module @stdlib/assert-has-float64array-support
*
* @example
* var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
*
* var bool = hasFloat64ArraySupport();
* // returns <boolean>
*/ // MODULES //
var hasFloat64ArraySupport = require("addf122ed5aee158");
// EXPORTS //
module.exports = hasFloat64ArraySupport;

},{"addf122ed5aee158":"4F7b0"}],"4F7b0":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isFloat64Array = require("f0d6674c089865fe");
var GlobalFloat64Array = require("874d8a82b605210f");
// MAIN //
/**
* Tests for native `Float64Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Float64Array` support
*
* @example
* var bool = hasFloat64ArraySupport();
* // returns <boolean>
*/ function hasFloat64ArraySupport() {
    var bool;
    var arr;
    if (typeof GlobalFloat64Array !== "function") return false;
    // Test basic support...
    try {
        arr = new GlobalFloat64Array([
            1.0,
            3.14,
            -3.14,
            NaN
        ]);
        bool = isFloat64Array(arr) && arr[0] === 1.0 && arr[1] === 3.14 && arr[2] === -3.14 && arr[3] !== arr[3];
    } catch (err) {
        bool = false;
    }
    return bool;
}
// EXPORTS //
module.exports = hasFloat64ArraySupport;

},{"f0d6674c089865fe":"1R7sZ","874d8a82b605210f":"3gmkc"}],"1R7sZ":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a value is a Float64Array.
*
* @module @stdlib/assert-is-float64array
*
* @example
* var isFloat64Array = require( '@stdlib/assert-is-float64array' );
*
* var bool = isFloat64Array( new Float64Array( 10 ) );
* // returns true
*
* bool = isFloat64Array( [] );
* // returns false
*/ // MODULES //
var isFloat64Array = require("a99dc269c1993ded");
// EXPORTS //
module.exports = isFloat64Array;

},{"a99dc269c1993ded":"gQW0G"}],"gQW0G":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var nativeClass = require("804725031e4ef75e");
// VARIABLES //
var hasFloat64Array = typeof Float64Array === "function"; // eslint-disable-line stdlib/require-globals
// MAIN //
/**
* Tests if a value is a Float64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Float64Array
*
* @example
* var bool = isFloat64Array( new Float64Array( 10 ) );
* // returns true
*
* @example
* var bool = isFloat64Array( [] );
* // returns false
*/ function isFloat64Array(value) {
    return hasFloat64Array && value instanceof Float64Array || // eslint-disable-line stdlib/require-globals
    nativeClass(value) === "[object Float64Array]";
}
// EXPORTS //
module.exports = isFloat64Array;

},{"804725031e4ef75e":"h9G6x"}],"3gmkc":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var main = typeof Float64Array === "function" ? Float64Array : null; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = main;

},{}],"7R42q":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var ctor = typeof Float64Array === "function" ? Float64Array : void 0; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = ctor;

},{}],"kSckk":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
*
* @throws {Error} not implemented
*/ function polyfill() {
    throw new Error("not implemented");
}
// EXPORTS //
module.exports = polyfill;

},{}],"edwIo":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isLittleEndian = require("da2e1866b6821b");
// MAIN //
var indices;
var HIGH;
var LOW;
if (isLittleEndian === true) {
    HIGH = 1; // second index
    LOW = 0; // first index
} else {
    HIGH = 0; // first index
    LOW = 1; // second index
}
indices = {
    "HIGH": HIGH,
    "LOW": LOW
};
// EXPORTS //
module.exports = indices;

},{"da2e1866b6821b":"hSudh"}],"hSudh":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return a boolean indicating if an environment is little endian.
*
* @module @stdlib/assert-is-little-endian
*
* @example
* var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
*
* var bool = IS_LITTLE_ENDIAN;
* // returns <boolean>
*/ // MODULES //
var IS_LITTLE_ENDIAN = require("6431e67355d242a5");
// EXPORTS //
module.exports = IS_LITTLE_ENDIAN;

},{"6431e67355d242a5":"lAo6q"}],"lAo6q":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var ctors = require("a6ca684c641443e0");
// VARIABLES //
var bool;
// FUNCTIONS //
/**
* Returns a boolean indicating if an environment is little endian.
*
* @private
* @returns {boolean} boolean indicating if an environment is little endian
*
* @example
* var bool = isLittleEndian();
* // returns <boolean>
*/ function isLittleEndian() {
    var uint16view;
    var uint8view;
    uint16view = new ctors["uint16"](1);
    /*
	* Set the uint16 view to a value having distinguishable lower and higher order words.
	*
	* 4660 => 0x1234 => 0x12 0x34 => '00010010 00110100' => (0x12,0x34) == (18,52)
	*/ uint16view[0] = 0x1234;
    // Create a uint8 view on top of the uint16 buffer:
    uint8view = new ctors["uint8"](uint16view.buffer);
    // If little endian, the least significant byte will be first...
    return uint8view[0] === 0x34;
}
// MAIN //
bool = isLittleEndian();
// EXPORTS //
module.exports = bool;

},{"a6ca684c641443e0":"fO2af"}],"fO2af":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var Uint8Array = require("a2e6c3f671425a8e");
var Uint16Array = require("bab89986ef7f6808");
// MAIN //
var ctors = {
    "uint16": Uint16Array,
    "uint8": Uint8Array
};
// EXPORTS //
module.exports = ctors;

},{"a2e6c3f671425a8e":"5pT6e","bab89986ef7f6808":"auDoY"}],"5pT6e":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint8
*
* @example
* var ctor = require( '@stdlib/array-uint8' );
*
* var arr = new ctor( 10 );
* // returns <Uint8Array>
*/ // MODULES //
var hasUint8ArraySupport = require("46ed4bee0d2f5a6d");
var builtin = require("db5f688cc2126f9a");
var polyfill = require("6d4faac5553fecf0");
// MAIN //
var ctor;
if (hasUint8ArraySupport()) ctor = builtin;
else ctor = polyfill;
// EXPORTS //
module.exports = ctor;

},{"46ed4bee0d2f5a6d":"ig1Rr","db5f688cc2126f9a":"ccHEg","6d4faac5553fecf0":"2XZrA"}],"ig1Rr":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `Uint8Array` support.
*
* @module @stdlib/assert-has-uint8array-support
*
* @example
* var hasUint8ArraySupport = require( '@stdlib/assert-has-uint8array-support' );
*
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/ // MODULES //
var hasUint8ArraySupport = require("35cf65b0e00123d6");
// EXPORTS //
module.exports = hasUint8ArraySupport;

},{"35cf65b0e00123d6":"adX5I"}],"adX5I":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isUint8Array = require("c09a521081b6853e");
var UINT8_MAX = require("8935c2662d16362e");
var GlobalUint8Array = require("dbe70d4f4e7d701e");
// MAIN //
/**
* Tests for native `Uint8Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
*
* @example
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/ function hasUint8ArraySupport() {
    var bool;
    var arr;
    if (typeof GlobalUint8Array !== "function") return false;
    // Test basic support...
    try {
        arr = [
            1,
            3.14,
            -3.14,
            UINT8_MAX + 1,
            UINT8_MAX + 2
        ];
        arr = new GlobalUint8Array(arr);
        bool = isUint8Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT8_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1 // wrap around
        ;
    } catch (err) {
        bool = false;
    }
    return bool;
}
// EXPORTS //
module.exports = hasUint8ArraySupport;

},{"c09a521081b6853e":"eZdYE","8935c2662d16362e":"3VJrQ","dbe70d4f4e7d701e":"5It9d"}],"eZdYE":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a value is a Uint8Array.
*
* @module @stdlib/assert-is-uint8array
*
* @example
* var isUint8Array = require( '@stdlib/assert-is-uint8array' );
*
* var bool = isUint8Array( new Uint8Array( 10 ) );
* // returns true
*
* bool = isUint8Array( [] );
* // returns false
*/ // MODULES //
var isUint8Array = require("8252c7ade60e616d");
// EXPORTS //
module.exports = isUint8Array;

},{"8252c7ade60e616d":"4E4vY"}],"4E4vY":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var nativeClass = require("7a26c9745c6b5ac4");
// VARIABLES //
var hasUint8Array = typeof Uint8Array === "function"; // eslint-disable-line stdlib/require-globals
// MAIN //
/**
* Tests if a value is a Uint8Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint8Array
*
* @example
* var bool = isUint8Array( new Uint8Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint8Array( [] );
* // returns false
*/ function isUint8Array(value) {
    return hasUint8Array && value instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
    nativeClass(value) === "[object Uint8Array]";
}
// EXPORTS //
module.exports = isUint8Array;

},{"7a26c9745c6b5ac4":"h9G6x"}],"3VJrQ":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Maximum unsigned 8-bit integer.
*
* @module @stdlib/constants-uint8-max
* @type {integer32}
*
* @example
* var UINT8_MAX = require( '@stdlib/constants-uint8-max' );
* // returns 255
*/ // MAIN //
/**
* Maximum unsigned 8-bit integer.
*
* ## Notes
*
* The number has the value
*
* ```tex
* 2^{8} - 1
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 11111111
* ```
*
* @constant
* @type {integer32}
* @default 255
*/ var UINT8_MAX = 255; // asm type annotation
// EXPORTS //
module.exports = UINT8_MAX;

},{}],"5It9d":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var main = typeof Uint8Array === "function" ? Uint8Array : null; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = main;

},{}],"ccHEg":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var ctor = typeof Uint8Array === "function" ? Uint8Array : void 0; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = ctor;

},{}],"2XZrA":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function polyfill() {
    throw new Error("not implemented");
}
// EXPORTS //
module.exports = polyfill;

},{}],"auDoY":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint16
*
* @example
* var ctor = require( '@stdlib/array-uint16' );
*
* var arr = new ctor( 10 );
* // returns <Uint16Array>
*/ // MODULES //
var hasUint16ArraySupport = require("7adb1ccca4ed050");
var builtin = require("7024ab8643dec985");
var polyfill = require("4f98c293369f8328");
// MAIN //
var ctor;
if (hasUint16ArraySupport()) ctor = builtin;
else ctor = polyfill;
// EXPORTS //
module.exports = ctor;

},{"7adb1ccca4ed050":"4aLRl","7024ab8643dec985":"i877b","4f98c293369f8328":"htyL3"}],"4aLRl":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test for native `Uint16Array` support.
*
* @module @stdlib/assert-has-uint16array-support
*
* @example
* var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
*
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/ // MODULES //
var hasUint16ArraySupport = require("221f2af145ae1e81");
// EXPORTS //
module.exports = hasUint16ArraySupport;

},{"221f2af145ae1e81":"5vfq9"}],"5vfq9":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isUint16Array = require("5bc2a74407cedbc9");
var UINT16_MAX = require("8c399e72a7de914f");
var GlobalUint16Array = require("3f311caec3c32c87");
// MAIN //
/**
* Tests for native `Uint16Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
*
* @example
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/ function hasUint16ArraySupport() {
    var bool;
    var arr;
    if (typeof GlobalUint16Array !== "function") return false;
    // Test basic support...
    try {
        arr = [
            1,
            3.14,
            -3.14,
            UINT16_MAX + 1,
            UINT16_MAX + 2
        ];
        arr = new GlobalUint16Array(arr);
        bool = isUint16Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT16_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1 // wrap around
        ;
    } catch (err) {
        bool = false;
    }
    return bool;
}
// EXPORTS //
module.exports = hasUint16ArraySupport;

},{"5bc2a74407cedbc9":"gn6du","8c399e72a7de914f":"5Es2O","3f311caec3c32c87":"iviB3"}],"gn6du":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Test if a value is a Uint16Array.
*
* @module @stdlib/assert-is-uint16array
*
* @example
* var isUint16Array = require( '@stdlib/assert-is-uint16array' );
*
* var bool = isUint16Array( new Uint16Array( 10 ) );
* // returns true
*
* bool = isUint16Array( [] );
* // returns false
*/ // MODULES //
var isUint16Array = require("d22b532d3849c84f");
// EXPORTS //
module.exports = isUint16Array;

},{"d22b532d3849c84f":"8lYzn"}],"8lYzn":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var nativeClass = require("99a48f3041cb0b7e");
// VARIABLES //
var hasUint16Array = typeof Uint16Array === "function"; // eslint-disable-line stdlib/require-globals
// MAIN //
/**
* Tests if a value is a Uint16Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint16Array
*
* @example
* var bool = isUint16Array( new Uint16Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint16Array( [] );
* // returns false
*/ function isUint16Array(value) {
    return hasUint16Array && value instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
    nativeClass(value) === "[object Uint16Array]";
}
// EXPORTS //
module.exports = isUint16Array;

},{"99a48f3041cb0b7e":"h9G6x"}],"5Es2O":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Maximum unsigned 16-bit integer.
*
* @module @stdlib/constants-uint16-max
* @type {integer32}
*
* @example
* var UINT16_MAX = require( '@stdlib/constants-uint16-max' );
* // returns 65535
*/ // MAIN //
/**
* Maximum unsigned 16-bit integer.
*
* ## Notes
*
* The number has the value
*
* ```tex
* 2^{16} - 1
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 1111111111111111
* ```
*
* @constant
* @type {integer32}
* @default 65535
*/ var UINT16_MAX = 65535; // asm type annotation
// EXPORTS //
module.exports = UINT16_MAX;

},{}],"iviB3":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var main = typeof Uint16Array === "function" ? Uint16Array : null; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = main;

},{}],"i877b":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
var ctor = typeof Uint16Array === "function" ? Uint16Array : void 0; // eslint-disable-line stdlib/require-globals
// EXPORTS //
module.exports = ctor;

},{}],"htyL3":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function polyfill() {
    throw new Error("not implemented");
}
// EXPORTS //
module.exports = polyfill;

},{}],"hM6kF":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-get-high-word
*
* @example
* var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
*
* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
* // returns 1774486211
*/ // MODULES //
var getHighWord = require("d67507bef7e7787e");
// EXPORTS //
module.exports = getHighWord;

},{"d67507bef7e7787e":"lFfoB"}],"lFfoB":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var Uint32Array = require("de412d03cf770c14");
var Float64Array = require("dc0958beda28ddbf");
var HIGH = require("c85fe9c28630da8");
// VARIABLES //
var FLOAT64_VIEW = new Float64Array(1);
var UINT32_VIEW = new Uint32Array(FLOAT64_VIEW.buffer);
// MAIN //
/**
* Returns an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
*
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {number} x - input value
* @returns {uinteger32} higher order word
*
* @example
* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
* // returns 1774486211
*/ function getHighWord(x) {
    FLOAT64_VIEW[0] = x;
    return UINT32_VIEW[HIGH];
}
// EXPORTS //
module.exports = getHighWord;

},{"de412d03cf770c14":"dHKlA","dc0958beda28ddbf":"ax89W","c85fe9c28630da8":"dlaqm"}],"dlaqm":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isLittleEndian = require("714db9cedbfc5d28");
// MAIN //
var HIGH;
if (isLittleEndian === true) HIGH = 1; // second index
else HIGH = 0; // first index
// EXPORTS //
module.exports = HIGH;

},{"714db9cedbfc5d28":"hSudh"}],"8CJFg":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Create a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-from-words
*
* @example
* var fromWords = require( '@stdlib/number-float64-base-from-words' );
*
* var v = fromWords( 1774486211, 2479577218 );
* // returns 3.14e201
*
* v = fromWords( 3221823995, 1413754136 );
* // returns -3.141592653589793
*
* v = fromWords( 0, 0 );
* // returns 0.0
*
* v = fromWords( 2147483648, 0 );
* // returns -0.0
*
* v = fromWords( 2146959360, 0 );
* // returns NaN
*
* v = fromWords( 2146435072, 0 );
* // returns Infinity
*
* v = fromWords( 4293918720, 0 );
* // returns -Infinity
*/ // MODULES //
var fromWords = require("6e67664ac7cb7e6d");
// EXPORTS //
module.exports = fromWords;

},{"6e67664ac7cb7e6d":"jlZOa"}],"jlZOa":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var Uint32Array = require("e1c1d7f9682cb1f8");
var Float64Array = require("357c8a23869a52ce");
var indices = require("b9e97472d289a2a2");
// VARIABLES //
var FLOAT64_VIEW = new Float64Array(1);
var UINT32_VIEW = new Uint32Array(FLOAT64_VIEW.buffer);
var HIGH = indices.HIGH;
var LOW = indices.LOW;
// MAIN //
/**
* Creates a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
*
* In which Uint32 should we place the higher order bits? If little endian, the second; if big endian, the first.
*
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {uinteger32} high - higher order word (unsigned 32-bit integer)
* @param {uinteger32} low - lower order word (unsigned 32-bit integer)
* @returns {number} floating-point number
*
* @example
* var v = fromWords( 1774486211, 2479577218 );
* // returns 3.14e201
*
* @example
* var v = fromWords( 3221823995, 1413754136 );
* // returns -3.141592653589793
*
* @example
* var v = fromWords( 0, 0 );
* // returns 0.0
*
* @example
* var v = fromWords( 2147483648, 0 );
* // returns -0.0
*
* @example
* var v = fromWords( 2146959360, 0 );
* // returns NaN
*
* @example
* var v = fromWords( 2146435072, 0 );
* // returns Infinity
*
* @example
* var v = fromWords( 4293918720, 0 );
* // returns -Infinity
*/ function fromWords(high, low) {
    UINT32_VIEW[HIGH] = high;
    UINT32_VIEW[LOW] = low;
    return FLOAT64_VIEW[0];
}
// EXPORTS //
module.exports = fromWords;

},{"e1c1d7f9682cb1f8":"dHKlA","357c8a23869a52ce":"ax89W","b9e97472d289a2a2":"a46CW"}],"a46CW":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var isLittleEndian = require("5c85dd48b334fd00");
// MAIN //
var indices;
var HIGH;
var LOW;
if (isLittleEndian === true) {
    HIGH = 1; // second index
    LOW = 0; // first index
} else {
    HIGH = 0; // first index
    LOW = 1; // second index
}
indices = {
    "HIGH": HIGH,
    "LOW": LOW
};
// EXPORTS //
module.exports = indices;

},{"5c85dd48b334fd00":"hSudh"}],"6hPwJ":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @module @stdlib/number-float64-base-normalize
*
* @example
* var normalize = require( '@stdlib/number-float64-base-normalize' );
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0, exp) === 3.14e-319 );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var normalize = require( '@stdlib/number-float64-base-normalize' );
*
* var out = new Float64Array( 2 );
*
* var v = normalize.assign( 3.14e-319, out, 1, 0 );
* // returns <Float64Array>[ 1.4141234400356668e-303, -52 ]
*
* var bool = ( v === out );
* // returns true
*/ // MODULES //
var setReadOnly = require("7304e527ba2e79e");
var main = require("d4d6e21dce33c2ef");
var assign = require("56d7e4cff4840e4d");
// MAIN //
setReadOnly(main, "assign", assign);
// EXPORTS //
module.exports = main;

},{"7304e527ba2e79e":"bZH3C","d4d6e21dce33c2ef":"4Oat7","56d7e4cff4840e4d":"1H6Yk"}],"4Oat7":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var fcn = require("2a7f5328430ec6c3");
// MAIN //
/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @param {number} x - input value
* @returns {NumberArray} output array
*
* @example
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var out = normalize( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' );
*
* var out = normalize( PINF );
* // returns [ Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants-float64-ninf' );
*
* var out = normalize( NINF );
* // returns [ -Infinity, 0 ]
*
* @example
* var out = normalize( NaN );
* // returns [ NaN, 0 ]
*/ function normalize(x) {
    return fcn(x, [
        0.0,
        0
    ], 1, 0);
}
// EXPORTS //
module.exports = normalize;

},{"2a7f5328430ec6c3":"1H6Yk"}],"1H6Yk":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var FLOAT64_SMALLEST_NORMAL = require("992ce8405918cfea");
var isInfinite = require("777549937aa88558");
var isnan = require("b8a5e9455d0c43ab");
var abs = require("550ef32c23eb7447");
// VARIABLES //
// (1<<52)
var SCALAR = 4503599627370496;
// MAIN //
/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\) and assigns results to a provided output array.
*
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319, [ 0.0, 0 ], 1, 0 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var out = normalize( 0.0, [ 0.0, 0 ], 1, 0 );
* // returns [ 0.0, 0 ];
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' );
*
* var out = normalize( PINF, [ 0.0, 0 ], 1, 0 );
* // returns [ Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants-float64-ninf' );
*
* var out = normalize( NINF, [ 0.0, 0 ], 1, 0 );
* // returns [ -Infinity, 0 ]
*
* @example
* var out = normalize( NaN, [ 0.0, 0 ], 1, 0 );
* // returns [ NaN, 0 ]
*/ function normalize(x, out, stride, offset) {
    if (isnan(x) || isInfinite(x)) {
        out[offset] = x;
        out[offset + stride] = 0;
        return out;
    }
    if (x !== 0.0 && abs(x) < FLOAT64_SMALLEST_NORMAL) {
        out[offset] = x * SCALAR;
        out[offset + stride] = -52;
        return out;
    }
    out[offset] = x;
    out[offset + stride] = 0;
    return out;
}
// EXPORTS //
module.exports = normalize;

},{"992ce8405918cfea":"gQdAp","777549937aa88558":"aKeqQ","b8a5e9455d0c43ab":"yP1DN","550ef32c23eb7447":"1sWgP"}],"gQdAp":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Smallest positive double-precision floating-point normal number.
*
* @module @stdlib/constants-float64-smallest-normal
* @type {number}
*
* @example
* var FLOAT64_SMALLEST_NORMAL = require( '@stdlib/constants-float64-smallest-normal' );
* // returns 2.2250738585072014e-308
*/ // MAIN //
/**
* The smallest positive double-precision floating-point normal number.
*
* ## Notes
*
* The number has the value
*
* ```tex
* \frac{1}{2^{1023-1}}
* ```
*
* which corresponds to the bit sequence
*
* ```binarystring
* 0 00000000001 00000000000000000000 00000000000000000000000000000000
* ```
*
* @constant
* @type {number}
* @default 2.2250738585072014e-308
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_SMALLEST_NORMAL = 2.2250738585072014e-308;
// EXPORTS //
module.exports = FLOAT64_SMALLEST_NORMAL;

},{}],"1sWgP":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Compute an absolute value of a double-precision floating-point number.
*
* @module @stdlib/math-base-special-abs
*
* @example
* var abs = require( '@stdlib/math-base-special-abs' );
*
* var v = abs( -1.0 );
* // returns 1.0
*
* v = abs( 2.0 );
* // returns 2.0
*
* v = abs( 0.0 );
* // returns 0.0
*
* v = abs( -0.0 );
* // returns 0.0
*
* v = abs( NaN );
* // returns NaN
*/ // MODULES //
var abs = require("534a89bc870e5066");
// EXPORTS //
module.exports = abs;

},{"534a89bc870e5066":"g7DF6"}],"g7DF6":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MAIN //
/**
* Computes the absolute value of a double-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} absolute value
*
* @example
* var v = abs( -1.0 );
* // returns 1.0
*
* @example
* var v = abs( 2.0 );
* // returns 2.0
*
* @example
* var v = abs( 0.0 );
* // returns 0.0
*
* @example
* var v = abs( -0.0 );
* // returns 0.0
*
* @example
* var v = abs( NaN );
* // returns NaN
*/ function abs(x) {
    return Math.abs(x); // eslint-disable-line stdlib/no-builtin-math
}
// EXPORTS //
module.exports = abs;

},{}],"es5gI":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* Return an integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-exponent
*
* @example
* var exponent = require( '@stdlib/number-float64-base-exponent' );
*
* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
* // returns -1019
*
* exp = exponent( -3.14 );
* // returns 1
*
* exp = exponent( 0.0 );
* // returns -1023
*
* exp = exponent( NaN );
* // returns 1024
*/ // MODULES //
var exponent = require("7fd10e9162e65fff");
// EXPORTS //
module.exports = exponent;

},{"7fd10e9162e65fff":"gCseY"}],"gCseY":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
// MODULES //
var getHighWord = require("704d603f39ed1c1e");
var EXP_MASK = require("30b0758563afd23f");
var BIAS = require("81493687043cfa23");
// MAIN //
/**
* Returns an integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @param {number} x - input value
* @returns {integer32} unbiased exponent
*
* @example
* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
* // returns -1019
*
* @example
* var exp = exponent( -3.14 );
* // returns 1
*
* @example
* var exp = exponent( 0.0 );
* // returns -1023
*
* @example
* var exp = exponent( NaN );
* // returns 1024
*/ function exponent(x) {
    // Extract from the input value a higher order word (unsigned 32-bit integer) which contains the exponent:
    var high = getHighWord(x);
    // Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
    high = (high & EXP_MASK) >>> 20;
    // Remove the bias and return:
    return high - BIAS | 0; // asm type annotation
}
// EXPORTS //
module.exports = exponent;

},{"704d603f39ed1c1e":"hM6kF","30b0758563afd23f":"4nqMV","81493687043cfa23":"3oP8I"}],"4nqMV":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ "use strict";
/**
* High word mask for the exponent of a double-precision floating-point number.
*
* @module @stdlib/constants-float64-high-word-exponent-mask
* @type {uinteger32}
*
* @example
* var FLOAT64_HIGH_WORD_EXPONENT_MASK = require( '@stdlib/constants-float64-high-word-exponent-mask' );
* // returns 2146435072
*/ // MAIN //
/**
* High word mask for the exponent of a double-precision floating-point number.
*
* ## Notes
*
* The high word mask for the exponent of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2146435072 \\), which corresponds to the bit sequence
*
* ```binarystring
* 0 11111111111 00000000000000000000
* ```
*
* @constant
* @type {uinteger32}
* @default 0x7ff00000
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var FLOAT64_HIGH_WORD_EXPONENT_MASK = 0x7ff00000;
// EXPORTS //
module.exports = FLOAT64_HIGH_WORD_EXPONENT_MASK;

},{}],"Ufp07":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unset = void 0;
var dlv_1 = __importDefault(require("82465da8ea1b78e6"));
function unset(obj, prop) {
    if ((0, dlv_1.default)(obj, prop)) {
        var segs = prop.split(".");
        var last = segs.pop();
        while(segs.length && segs[segs.length - 1].slice(-1) === "\\")last = segs.pop().slice(0, -1) + "." + last;
        while(segs.length)obj = obj[prop = segs.shift()];
        return delete obj[last];
    }
    return true;
}
exports.unset = unset;

},{"82465da8ea1b78e6":"hKTrw"}],"gtowG":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var dlv_1 = __importDefault(require("321ef1fb83e5420c"));
function matches(event, matcher) {
    if (!matcher) throw new Error("No matcher supplied!");
    switch(matcher.type){
        case "all":
            return all();
        case "fql":
            return fql(matcher.ir, event);
        default:
            throw new Error("Matcher of type ".concat(matcher.type, " unsupported."));
    }
}
exports.default = matches;
function all() {
    return true;
}
function fql(ir, event) {
    if (!ir) return false;
    try {
        ir = JSON.parse(ir);
    } catch (e) {
        throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(ir, '": ').concat(e));
    }
    var result = fqlEvaluate(ir, event);
    if (typeof result !== "boolean") // An error was returned, or a lowercase, typeof, or similar function was run alone. Nothing to evaluate.
    return false;
    return result;
}
// FQL is 100% type strict in Go. Show no mercy to types which do not comply.
function fqlEvaluate(ir, event) {
    // If the given ir chunk is not an array, then we should check the single given path or value for literally `true`.
    if (!Array.isArray(ir)) return getValue(ir, event) === true;
    // Otherwise, it is a sequence of ordered steps to follow to reach our solution!
    var item = ir[0];
    switch(item){
        /*** Unary cases ***/ // '!' => Invert the result
        case "!":
            return !fqlEvaluate(ir[1], event);
        /*** Binary cases ***/ // 'or' => Any condition being true returns true
        case "or":
            for(var i = 1; i < ir.length; i++){
                if (fqlEvaluate(ir[i], event)) return true;
            }
            return false;
        // 'and' => Any condition being false returns false
        case "and":
            for(var i = 1; i < ir.length; i++){
                if (!fqlEvaluate(ir[i], event)) return false;
            }
            return true;
        // Equivalence comparisons
        case "=":
        case "!=":
            return compareItems(getValue(ir[1], event), getValue(ir[2], event), item, event);
        // Numerical comparisons
        case "<=":
        case "<":
        case ">":
        case ">=":
            // Compare the two values with the given operator.
            return compareNumbers(getValue(ir[1], event), getValue(ir[2], event), item, event);
        // item in [list]' => Checks whether item is in list
        case "in":
            return checkInList(getValue(ir[1], event), getValue(ir[2], event), event);
        /*** Functions ***/ // 'contains(str1, str2)' => The first string has a substring of the second string
        case "contains":
            return contains(getValue(ir[1], event), getValue(ir[2], event));
        // 'match(str, match)' => The given string matches the provided glob matcher
        case "match":
            return match(getValue(ir[1], event), getValue(ir[2], event));
        // 'lowercase(str)' => Returns a lowercased string, null if the item is not a string
        case "lowercase":
            var target = getValue(ir[1], event);
            if (typeof target !== "string") return null;
            return target.toLowerCase();
        // 'typeof(val)' => Returns the FQL type of the value
        case "typeof":
            // TODO: Do we need mapping to allow for universal comparisons? e.g. Object -> JSON, Array -> List, Floats?
            return typeof getValue(ir[1], event);
        // 'length(val)' => Returns the length of an array or string, NaN if neither
        case "length":
            return length(getValue(ir[1], event));
        // If nothing hit, we or the IR messed up somewhere.
        default:
            throw new Error("FQL IR could not evaluate for token: ".concat(item));
    }
}
function getValue(item, event) {
    // If item is an array, leave it as-is.
    if (Array.isArray(item)) return item;
    // If item is an object, it has the form of `{"value": VAL}`
    if (typeof item === "object") return item.value;
    // Otherwise, it's an event path, e.g. "properties.email"
    return (0, dlv_1.default)(event, item);
}
function checkInList(item, list, event) {
    return list.find(function(it) {
        return getValue(it, event) === item;
    }) !== undefined;
}
function compareNumbers(first, second, operator, event) {
    // Check if it's more IR (such as a length() function)
    if (isIR(first)) first = fqlEvaluate(first, event);
    if (isIR(second)) second = fqlEvaluate(second, event);
    if (typeof first !== "number" || typeof second !== "number") return false;
    // Reminder: NaN is not comparable to any other number (including NaN) and will always return false as desired.
    switch(operator){
        // '<=' => The first number is less than or equal to the second.
        case "<=":
            return first <= second;
        // '>=' => The first number is greater than or equal to the second
        case ">=":
            return first >= second;
        // '<' The first number is less than the second.
        case "<":
            return first < second;
        // '>' The first number is greater than the second.
        case ">":
            return first > second;
        default:
            throw new Error("Invalid operator in compareNumbers: ".concat(operator));
    }
}
function compareItems(first, second, operator, event) {
    // Check if it's more IR (such as a lowercase() function)
    if (isIR(first)) first = fqlEvaluate(first, event);
    if (isIR(second)) second = fqlEvaluate(second, event);
    if (typeof first === "object" && typeof second === "object") {
        first = JSON.stringify(first);
        second = JSON.stringify(second);
    }
    // Objects with the exact same contents AND order ARE considered identical. (Don't compare by reference)
    // Even in Go, this MUST be the same byte order.
    // e.g. {a: 1, b:2} === {a: 1, b:2} BUT {a:1, b:2} !== {b:2, a:1}
    // Maybe later we'll use a stable stringifier, but we're matching server-side behavior for now.
    switch(operator){
        // '=' => The two following items are exactly identical
        case "=":
            return first === second;
        // '!=' => The two following items are NOT exactly identical.
        case "!=":
            return first !== second;
        default:
            throw new Error("Invalid operator in compareItems: ".concat(operator));
    }
}
function contains(first, second) {
    if (typeof first !== "string" || typeof second !== "string") return false;
    return first.indexOf(second) !== -1;
}
function match(str, glob) {
    if (typeof str !== "string" || typeof glob !== "string") return false;
    return globMatches(glob, str);
}
function length(item) {
    // Match server-side behavior.
    if (item === null) return 0;
    // Type-check to avoid returning .length of an object
    if (!Array.isArray(item) && typeof item !== "string") return NaN;
    return item.length;
}
// This is a heuristic technically speaking, but should be close enough. The odds of someone trying to test
// a func with identical IR notation is pretty low.
function isIR(value) {
    // TODO: This can be better checked by checking if this is a {"value": THIS}
    if (!Array.isArray(value)) return false;
    // Function checks
    if ((value[0] === "lowercase" || value[0] === "length" || value[0] === "typeof") && value.length === 2) return true;
    if ((value[0] === "contains" || value[0] === "match") && value.length === 3) return true;
    return false;
}
// Any reputable glob matcher is designed to work on filesystems and doesn't allow the override of the separator
// character "/". This is problematic since our server-side representation e.g. evaluates "match('ab/c', 'a*)"
// as TRUE, whereas any glob matcher for JS available does false. So we're rewriting it here.
// See: https://github.com/segmentio/glob/blob/master/glob.go
function globMatches(pattern, str) {
    var _a, _b;
    Pattern: while(pattern.length > 0){
        var star = void 0;
        var chunk = void 0;
        _a = scanChunk(pattern), star = _a.star, chunk = _a.chunk, pattern = _a.pattern;
        if (star && chunk === "") // Trailing * matches rest of string
        return true;
        // Look for match at current position
        var _c = matchChunk(chunk, str), t = _c.t, ok = _c.ok, err = _c.err;
        if (err) return false;
        // If we're the last chunk, make sure we've exhausted the str
        // otherwise we'll give a false result even if we could still match
        // using the star
        if (ok && (t.length === 0 || pattern.length > 0)) {
            str = t;
            continue;
        }
        if (star) // Look for match, skipping i+1 bytes.
        for(var i = 0; i < str.length; i++){
            _b = matchChunk(chunk, str.slice(i + 1)), t = _b.t, ok = _b.ok, err = _b.err;
            if (ok) {
                // If we're the last chunk, make sure we exhausted the str.
                if (pattern.length === 0 && t.length > 0) continue;
                str = t;
                continue Pattern;
            }
            if (err) return false;
        }
        return false;
    }
    return str.length === 0;
}
function scanChunk(pattern) {
    var result = {
        star: false,
        chunk: "",
        pattern: ""
    };
    while(pattern.length > 0 && pattern[0] === "*"){
        pattern = pattern.slice(1);
        result.star = true;
    }
    var inRange = false;
    var i;
    Scan: for(i = 0; i < pattern.length; i++)switch(pattern[i]){
        case "\\":
            // Error check handled in matchChunk: bad pattern.
            if (i + 1 < pattern.length) i++;
            break;
        case "[":
            inRange = true;
            break;
        case "]":
            inRange = false;
            break;
        case "*":
            if (!inRange) break Scan;
    }
    result.chunk = pattern.slice(0, i);
    result.pattern = pattern.slice(i);
    return result;
}
// matchChunk checks whether chunk matches the beginning of s.
// If so, it returns the remainder of s (after the match).
// Chunk is all single-character operators: literals, char classes, and ?.
function matchChunk(chunk, str) {
    var _a, _b;
    var result = {
        t: "",
        ok: false,
        err: false
    };
    while(chunk.length > 0){
        if (str.length === 0) return result;
        switch(chunk[0]){
            case "[":
                var char = str[0];
                str = str.slice(1);
                chunk = chunk.slice(1);
                var notNegated = true;
                if (chunk.length > 0 && chunk[0] === "^") {
                    notNegated = false;
                    chunk = chunk.slice(1);
                }
                // Parse all ranges
                var foundMatch = false;
                var nRange = 0;
                while(true){
                    if (chunk.length > 0 && chunk[0] === "]" && nRange > 0) {
                        chunk = chunk.slice(1);
                        break;
                    }
                    var lo = "";
                    var hi = "";
                    var err = void 0;
                    _a = getEsc(chunk), lo = _a.char, chunk = _a.newChunk, err = _a.err;
                    if (err) return result;
                    hi = lo;
                    if (chunk[0] === "-") {
                        _b = getEsc(chunk.slice(1)), hi = _b.char, chunk = _b.newChunk, err = _b.err;
                        if (err) return result;
                    }
                    if (lo <= char && char <= hi) foundMatch = true;
                    nRange++;
                }
                if (foundMatch !== notNegated) return result;
                break;
            case "?":
                str = str.slice(1);
                chunk = chunk.slice(1);
                break;
            case "\\":
                chunk = chunk.slice(1);
                if (chunk.length === 0) {
                    result.err = true;
                    return result;
                }
            // Fallthrough, missing break intentional.
            default:
                if (chunk[0] !== str[0]) return result;
                str = str.slice(1);
                chunk = chunk.slice(1);
        }
    }
    result.t = str;
    result.ok = true;
    result.err = false;
    return result;
}
// getEsc gets a possibly-escaped character from chunk, for a character class.
function getEsc(chunk) {
    var result = {
        char: "",
        newChunk: "",
        err: false
    };
    if (chunk.length === 0 || chunk[0] === "-" || chunk[0] === "]") {
        result.err = true;
        return result;
    }
    if (chunk[0] === "\\") {
        chunk = chunk.slice(1);
        if (chunk.length === 0) {
            result.err = true;
            return result;
        }
    }
    // Unlike Go, JS strings operate on characters instead of bytes.
    // This is why we aren't copying over the GetRuneFromString stuff.
    result.char = chunk[0];
    result.newChunk = chunk.slice(1);
    if (result.newChunk.length === 0) result.err = true;
    return result;
}

},{"321ef1fb83e5420c":"hKTrw"}],"ii28p":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Store = /** @class */ function() {
    function Store(rules) {
        this.rules = [];
        this.rules = rules || [];
    }
    Store.prototype.getRulesByDestinationName = function(destinationName) {
        var rules = [];
        for(var _i = 0, _a = this.rules; _i < _a.length; _i++){
            var rule = _a[_i];
            // Rules with no destinationName are global (workspace || workspace::source)
            if (rule.destinationName === destinationName || rule.destinationName === undefined) rules.push(rule);
        }
        return rules;
    };
    return Store;
}();
exports.default = Store;

},{}]},["7fzre"], null, "parcelRequire5b12")

//# sourceMappingURL=routing-middleware.eb6cf104.js.map
