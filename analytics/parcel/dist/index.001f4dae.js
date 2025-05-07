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
})({"iJebt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "066ac947001f4dae";
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

},{}],"jj0n4":[function(require,module,exports) {
var _analyticsNext = require("@segment/analytics-next");
const analytics = (0, _analyticsNext.AnalyticsBrowser).load({
    writeKey: "mUZvGNOpsmtMk0q4P4X6tvJ3eoffNGIr"
});

},{"@segment/analytics-next":"6CUpc"}],"6CUpc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGlobalAnalytics", ()=>(0, _globalAnalyticsHelper.getGlobalAnalytics));
parcelHelpers.export(exports, "UniversalStorage", ()=>(0, _storage.UniversalStorage));
var _analytics = require("./core/analytics");
parcelHelpers.exportAll(_analytics, exports);
var _browser = require("./browser");
parcelHelpers.exportAll(_browser, exports);
var _node = require("./node");
parcelHelpers.exportAll(_node, exports);
var _context = require("./core/context");
parcelHelpers.exportAll(_context, exports);
var _events = require("./core/events");
parcelHelpers.exportAll(_events, exports);
var _plugin = require("./core/plugin");
parcelHelpers.exportAll(_plugin, exports);
var _user = require("./core/user");
parcelHelpers.exportAll(_user, exports);
var _globalAnalyticsHelper = require("./lib/global-analytics-helper");
var _storage = require("./core/storage");

},{"./core/analytics":false,"./browser":"6htfc","./node":false,"./core/context":false,"./core/events":false,"./core/plugin":false,"./core/user":false,"./lib/global-analytics-helper":false,"./core/storage":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adwSZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Analytics", ()=>Analytics);
parcelHelpers.export(exports, "NullAnalytics", ()=>NullAnalytics);
var _tslib = require("tslib");
var _argumentsResolver = require("../arguments-resolver");
var _connection = require("../connection");
var _context = require("../context");
var _analyticsCore = require("@segment/analytics-core");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
var _events = require("../events");
var _eventQueue = require("../queue/event-queue");
var _user = require("../user");
var _bindAll = require("../../lib/bind-all");
var _bindAllDefault = parcelHelpers.interopDefault(_bindAll);
var _persisted = require("../../lib/priority-queue/persisted");
var _version = require("../../generated/version");
var _priorityQueue = require("../../lib/priority-queue");
var _getGlobal = require("../../lib/get-global");
var _storage = require("../storage");
var _globalAnalyticsHelper = require("../../lib/global-analytics-helper");
var _buffer = require("../buffer");
var deprecationWarning = "This is being deprecated and will be not be available in future releases of Analytics JS";
// reference any pre-existing "analytics" object so a user can restore the reference
var global = (0, _getGlobal.getGlobal)();
var _analytics = global === null || global === void 0 ? void 0 : global.analytics;
function createDefaultQueue(name, retryQueue, disablePersistance) {
    if (retryQueue === void 0) retryQueue = false;
    if (disablePersistance === void 0) disablePersistance = false;
    var maxAttempts = retryQueue ? 10 : 1;
    var priorityQueue = disablePersistance ? new (0, _priorityQueue.PriorityQueue)(maxAttempts, []) : new (0, _persisted.PersistedPriorityQueue)(maxAttempts, name);
    return new (0, _eventQueue.EventQueue)(priorityQueue);
}
/* analytics-classic stubs */ function _stub() {
    console.warn(deprecationWarning);
}
var Analytics = /** @class */ function(_super) {
    (0, _tslib.__extends)(Analytics, _super);
    function Analytics(settings, options, queue, user, group) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this) || this;
        _this._debug = false;
        _this.initialized = false;
        _this.user = function() {
            return _this._user;
        };
        _this.init = _this.initialize.bind(_this);
        _this.log = _stub;
        _this.addIntegrationMiddleware = _stub;
        _this.listeners = _stub;
        _this.addEventListener = _stub;
        _this.removeAllListeners = _stub;
        _this.removeListener = _stub;
        _this.removeEventListener = _stub;
        _this.hasListeners = _stub;
        _this.add = _stub;
        _this.addIntegration = _stub;
        var cookieOptions = options === null || options === void 0 ? void 0 : options.cookie;
        var disablePersistance = (_a = options === null || options === void 0 ? void 0 : options.disableClientPersistence) !== null && _a !== void 0 ? _a : false;
        _this.settings = settings;
        _this.settings.timeout = (_b = _this.settings.timeout) !== null && _b !== void 0 ? _b : 300;
        _this.queue = queue !== null && queue !== void 0 ? queue : createDefaultQueue("".concat(settings.writeKey, ":event-queue"), options === null || options === void 0 ? void 0 : options.retryQueue, disablePersistance);
        var storageSetting = options === null || options === void 0 ? void 0 : options.storage;
        _this._universalStorage = _this.createStore(disablePersistance, storageSetting, cookieOptions);
        _this._user = user !== null && user !== void 0 ? user : new (0, _user.User)((0, _tslib.__assign)({
            persist: !disablePersistance,
            storage: options === null || options === void 0 ? void 0 : options.storage
        }, options === null || options === void 0 ? void 0 : options.user), cookieOptions).load();
        _this._group = group !== null && group !== void 0 ? group : new (0, _user.Group)((0, _tslib.__assign)({
            persist: !disablePersistance,
            storage: options === null || options === void 0 ? void 0 : options.storage
        }, options === null || options === void 0 ? void 0 : options.group), cookieOptions).load();
        _this.eventFactory = new (0, _events.EventFactory)(_this._user);
        _this.integrations = (_c = options === null || options === void 0 ? void 0 : options.integrations) !== null && _c !== void 0 ? _c : {};
        _this.options = options !== null && options !== void 0 ? options : {};
        (0, _bindAllDefault.default)(_this);
        return _this;
    }
    /**
     * Creates the storage system based on the settings received
     * @returns Storage
     */ Analytics.prototype.createStore = function(disablePersistance, storageSetting, cookieOptions) {
        // DisablePersistance option overrides all, no storage will be used outside of memory even if specified
        if (disablePersistance) return new (0, _storage.UniversalStorage)([
            new (0, _storage.MemoryStorage)()
        ]);
        else if (storageSetting) {
            if ((0, _storage.isArrayOfStoreType)(storageSetting)) // We will create the store with the priority for customer settings
            return new (0, _storage.UniversalStorage)((0, _storage.initializeStorages)((0, _storage.applyCookieOptions)(storageSetting.stores, cookieOptions)));
        }
        // We default to our multi storage with priority
        return new (0, _storage.UniversalStorage)((0, _storage.initializeStorages)([
            (0, _storage.StoreType).LocalStorage,
            {
                name: (0, _storage.StoreType).Cookie,
                settings: cookieOptions
            },
            (0, _storage.StoreType).Memory
        ]));
    };
    Object.defineProperty(Analytics.prototype, "storage", {
        get: function() {
            return this._universalStorage;
        },
        enumerable: false,
        configurable: true
    });
    Analytics.prototype.track = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var pageCtx, _a, name, data, opts, cb, segmentEvent;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_b) {
                pageCtx = (0, _buffer.popPageContext)(args);
                _a = (0, _argumentsResolver.resolveArguments).apply(void 0, args), name = _a[0], data = _a[1], opts = _a[2], cb = _a[3];
                segmentEvent = this.eventFactory.track(name, data, opts, this.integrations, pageCtx);
                return [
                    2 /*return*/ ,
                    this._dispatch(segmentEvent, cb).then(function(ctx) {
                        _this.emit("track", name, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })
                ];
            });
        });
    };
    Analytics.prototype.page = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var pageCtx, _a, category, page, properties, options, callback, segmentEvent;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_b) {
                pageCtx = (0, _buffer.popPageContext)(args);
                _a = (0, _argumentsResolver.resolvePageArguments).apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
                segmentEvent = this.eventFactory.page(category, page, properties, options, this.integrations, pageCtx);
                return [
                    2 /*return*/ ,
                    this._dispatch(segmentEvent, callback).then(function(ctx) {
                        _this.emit("page", category, page, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })
                ];
            });
        });
    };
    Analytics.prototype.identify = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var pageCtx, _a, id, _traits, options, callback, segmentEvent;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_b) {
                pageCtx = (0, _buffer.popPageContext)(args);
                _a = (0, _argumentsResolver.resolveUserArguments)(this._user).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
                this._user.identify(id, _traits);
                segmentEvent = this.eventFactory.identify(this._user.id(), this._user.traits(), options, this.integrations, pageCtx);
                return [
                    2 /*return*/ ,
                    this._dispatch(segmentEvent, callback).then(function(ctx) {
                        _this.emit("identify", ctx.event.userId, ctx.event.traits, ctx.event.options);
                        return ctx;
                    })
                ];
            });
        });
    };
    Analytics.prototype.group = function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var pageCtx = (0, _buffer.popPageContext)(args);
        if (args.length === 0) return this._group;
        var _a = (0, _argumentsResolver.resolveUserArguments)(this._group).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
        this._group.identify(id, _traits);
        var groupId = this._group.id();
        var groupTraits = this._group.traits();
        var segmentEvent = this.eventFactory.group(groupId, groupTraits, options, this.integrations, pageCtx);
        return this._dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("group", ctx.event.groupId, ctx.event.traits, ctx.event.options);
            return ctx;
        });
    };
    Analytics.prototype.alias = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var pageCtx, _a, to, from, options, callback, segmentEvent;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_b) {
                pageCtx = (0, _buffer.popPageContext)(args);
                _a = (0, _argumentsResolver.resolveAliasArguments).apply(void 0, args), to = _a[0], from = _a[1], options = _a[2], callback = _a[3];
                segmentEvent = this.eventFactory.alias(to, from, options, this.integrations, pageCtx);
                return [
                    2 /*return*/ ,
                    this._dispatch(segmentEvent, callback).then(function(ctx) {
                        _this.emit("alias", to, from, ctx.event.options);
                        return ctx;
                    })
                ];
            });
        });
    };
    Analytics.prototype.screen = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var pageCtx, _a, category, page, properties, options, callback, segmentEvent;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_b) {
                pageCtx = (0, _buffer.popPageContext)(args);
                _a = (0, _argumentsResolver.resolvePageArguments).apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
                segmentEvent = this.eventFactory.screen(category, page, properties, options, this.integrations, pageCtx);
                return [
                    2 /*return*/ ,
                    this._dispatch(segmentEvent, callback).then(function(ctx) {
                        _this.emit("screen", category, page, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })
                ];
            });
        });
    };
    Analytics.prototype.trackClick = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var autotrack;
            var _a;
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            require(/* webpackChunkName: "auto-track" */ "8662998336b96145")
                        ];
                    case 1:
                        autotrack = _b.sent();
                        return [
                            2 /*return*/ ,
                            (_a = autotrack.link).call.apply(_a, (0, _tslib.__spreadArray)([
                                this
                            ], args, false))
                        ];
                }
            });
        });
    };
    Analytics.prototype.trackLink = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var autotrack;
            var _a;
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            require(/* webpackChunkName: "auto-track" */ "8662998336b96145")
                        ];
                    case 1:
                        autotrack = _b.sent();
                        return [
                            2 /*return*/ ,
                            (_a = autotrack.link).call.apply(_a, (0, _tslib.__spreadArray)([
                                this
                            ], args, false))
                        ];
                }
            });
        });
    };
    Analytics.prototype.trackSubmit = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var autotrack;
            var _a;
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            require(/* webpackChunkName: "auto-track" */ "8662998336b96145")
                        ];
                    case 1:
                        autotrack = _b.sent();
                        return [
                            2 /*return*/ ,
                            (_a = autotrack.form).call.apply(_a, (0, _tslib.__spreadArray)([
                                this
                            ], args, false))
                        ];
                }
            });
        });
    };
    Analytics.prototype.trackForm = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var autotrack;
            var _a;
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            require(/* webpackChunkName: "auto-track" */ "8662998336b96145")
                        ];
                    case 1:
                        autotrack = _b.sent();
                        return [
                            2 /*return*/ ,
                            (_a = autotrack.form).call.apply(_a, (0, _tslib.__spreadArray)([
                                this
                            ], args, false))
                        ];
                }
            });
        });
    };
    Analytics.prototype.register = function() {
        var plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)plugins[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var ctx, registrations;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        ctx = (0, _context.Context).system();
                        registrations = plugins.map(function(xt) {
                            return _this.queue.register(ctx, xt, _this);
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(registrations)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                }
            });
        });
    };
    Analytics.prototype.deregister = function() {
        var plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)plugins[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var ctx, deregistrations;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        ctx = (0, _context.Context).system();
                        deregistrations = plugins.map(function(pl) {
                            var plugin = _this.queue.plugins.find(function(p) {
                                return p.name === pl;
                            });
                            if (plugin) return _this.queue.deregister(ctx, plugin, _this);
                            else ctx.log("warn", "plugin ".concat(pl, " not found"));
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(deregistrations)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                }
            });
        });
    };
    Analytics.prototype.debug = function(toggle) {
        // Make sure legacy ajs debug gets turned off if it was enabled before upgrading.
        if (toggle === false && localStorage.getItem("debug")) localStorage.removeItem("debug");
        this._debug = toggle;
        return this;
    };
    Analytics.prototype.reset = function() {
        this._user.reset();
        this._group.reset();
        this.emit("reset");
    };
    Analytics.prototype.timeout = function(timeout) {
        this.settings.timeout = timeout;
    };
    Analytics.prototype._dispatch = function(event, callback) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var ctx;
            return (0, _tslib.__generator)(this, function(_a) {
                ctx = new (0, _context.Context)(event);
                if ((0, _connection.isOffline)() && !this.options.retryQueue) return [
                    2 /*return*/ ,
                    ctx
                ];
                return [
                    2 /*return*/ ,
                    (0, _analyticsCore.dispatch)(ctx, this.queue, this, {
                        callback: callback,
                        debug: this._debug,
                        timeout: this.settings.timeout
                    })
                ];
            });
        });
    };
    Analytics.prototype.addSourceMiddleware = function(fn) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.queue.criticalTasks.run(function() {
                                return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                                    var sourceMiddlewarePlugin, integrations, plugin;
                                    return (0, _tslib.__generator)(this, function(_a) {
                                        switch(_a.label){
                                            case 0:
                                                return [
                                                    4 /*yield*/ ,
                                                    require(/* webpackChunkName: "middleware" */ "8d4e33a0ad454948")
                                                ];
                                            case 1:
                                                sourceMiddlewarePlugin = _a.sent().sourceMiddlewarePlugin;
                                                integrations = {};
                                                this.queue.plugins.forEach(function(plugin) {
                                                    if (plugin.type === "destination") return integrations[plugin.name] = true;
                                                });
                                                plugin = sourceMiddlewarePlugin(fn, integrations);
                                                return [
                                                    4 /*yield*/ ,
                                                    this.register(plugin)
                                                ];
                                            case 2:
                                                _a.sent();
                                                return [
                                                    2 /*return*/ 
                                                ];
                                        }
                                    });
                                });
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            this
                        ];
                }
            });
        });
    };
    /* TODO: This does not have to return a promise? */ Analytics.prototype.addDestinationMiddleware = function(integrationName) {
        var middlewares = [];
        for(var _i = 1; _i < arguments.length; _i++)middlewares[_i - 1] = arguments[_i];
        var legacyDestinations = this.queue.plugins.filter(function(xt) {
            return xt.name.toLowerCase() === integrationName.toLowerCase();
        });
        legacyDestinations.forEach(function(destination) {
            destination.addMiddleware.apply(destination, middlewares);
        });
        return Promise.resolve(this);
    };
    Analytics.prototype.setAnonymousId = function(id) {
        return this._user.anonymousId(id);
    };
    Analytics.prototype.queryString = function(query) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var queryString;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.options.useQueryString === false) return [
                            2 /*return*/ ,
                            []
                        ];
                        return [
                            4 /*yield*/ ,
                            require(/* webpackChunkName: "queryString" */ "30472d77202c9f6e")
                        ];
                    case 1:
                        queryString = _a.sent().queryString;
                        return [
                            2 /*return*/ ,
                            queryString(this, query)
                        ];
                }
            });
        });
    };
    /**
     * @deprecated This function does not register a destination plugin.
     *
     * Instantiates a legacy Analytics.js destination.
     *
     * This function does not register the destination as an Analytics.JS plugin,
     * all the it does it to invoke the factory function back.
     */ Analytics.prototype.use = function(legacyPluginFactory) {
        legacyPluginFactory(this);
        return this;
    };
    Analytics.prototype.ready = function(callback) {
        if (callback === void 0) callback = function(res) {
            return res;
        };
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    Promise.all(this.queue.plugins.map(function(i) {
                        return i.ready ? i.ready() : Promise.resolve();
                    })).then(function(res) {
                        callback(res);
                        return res;
                    })
                ];
            });
        });
    };
    // analytics-classic api
    Analytics.prototype.noConflict = function() {
        console.warn(deprecationWarning);
        (0, _globalAnalyticsHelper.setGlobalAnalytics)(_analytics !== null && _analytics !== void 0 ? _analytics : this);
        return this;
    };
    Analytics.prototype.normalize = function(msg) {
        console.warn(deprecationWarning);
        return this.eventFactory.normalize(msg);
    };
    Object.defineProperty(Analytics.prototype, "failedInitializations", {
        get: function() {
            console.warn(deprecationWarning);
            return this.queue.failedInitializations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Analytics.prototype, "VERSION", {
        get: function() {
            return 0, _version.version;
        },
        enumerable: false,
        configurable: true
    });
    /* @deprecated - noop */ Analytics.prototype.initialize = function(_settings, _options) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                console.warn(deprecationWarning);
                return [
                    2 /*return*/ ,
                    Promise.resolve(this)
                ];
            });
        });
    };
    Analytics.prototype.pageview = function(url) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        console.warn(deprecationWarning);
                        return [
                            4 /*yield*/ ,
                            this.page({
                                path: url
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ ,
                            this
                        ];
                }
            });
        });
    };
    Object.defineProperty(Analytics.prototype, "plugins", {
        get: function() {
            var _a;
            console.warn(deprecationWarning);
            // @ts-expect-error
            return (_a = this._plugins) !== null && _a !== void 0 ? _a : {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Analytics.prototype, "Integrations", {
        get: function() {
            console.warn(deprecationWarning);
            var integrations = this.queue.plugins.filter(function(plugin) {
                return plugin.type === "destination";
            }).reduce(function(acc, plugin) {
                var name = "".concat(plugin.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration");
                // @ts-expect-error
                var integration = window[name];
                if (!integration) return acc;
                var nested = integration.Integration; // hack - Google Analytics function resides in the "Integration" field
                if (nested) {
                    acc[plugin.name] = nested;
                    return acc;
                }
                acc[plugin.name] = integration;
                return acc;
            }, {});
            return integrations;
        },
        enumerable: false,
        configurable: true
    });
    // snippet function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Analytics.prototype.push = function(args) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var an = this;
        var method = args.shift();
        if (method) {
            if (!an[method]) return;
        }
        an[method].apply(this, args);
    };
    return Analytics;
}((0, _analyticsGenericUtils.Emitter));
/**
 * @returns a no-op analytics instance that does not create cookies or localstorage, or send any events to segment.
 */ var NullAnalytics = /** @class */ function(_super) {
    (0, _tslib.__extends)(NullAnalytics, _super);
    function NullAnalytics() {
        var _this = _super.call(this, {
            writeKey: ""
        }, {
            disableClientPersistence: true
        }) || this;
        _this.initialized = true;
        return _this;
    }
    return NullAnalytics;
}(Analytics);

},{"tslib":"lRdW5","../arguments-resolver":"45Ybs","../connection":"cltJ9","../context":"b85Be","@segment/analytics-core":"7b8vz","@segment/analytics-generic-utils":"h6A2f","../events":"bjpzH","../queue/event-queue":"jJWiR","../user":"cTuJT","../../lib/bind-all":"3yu9n","../../lib/priority-queue/persisted":"iSc7g","../../generated/version":"iyRSI","../../lib/priority-queue":"boWrR","../../lib/get-global":"43DpR","../storage":"h0qk3","../../lib/global-analytics-helper":"gI64D","../buffer":"aeTkA","8662998336b96145":"3Csb1","8d4e33a0ad454948":"fITRQ","30472d77202c9f6e":"icxOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"45Ybs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Helper for the track method
 */ parcelHelpers.export(exports, "resolveArguments", ()=>resolveArguments);
/**
 * Helper for page, screen methods
 */ parcelHelpers.export(exports, "resolvePageArguments", ()=>resolvePageArguments);
parcelHelpers.export(exports, "resolveUserArguments", ()=>resolveUserArguments);
/**
 * Helper for alias method
 */ parcelHelpers.export(exports, "resolveAliasArguments", ()=>resolveAliasArguments);
var _analyticsCore = require("@segment/analytics-core");
function resolveArguments(eventName, properties, options, callback) {
    var _a;
    var args = [
        eventName,
        properties,
        options,
        callback
    ];
    var name = (0, _analyticsCore.isPlainObject)(eventName) ? eventName.event : eventName;
    if (!name || !(0, _analyticsCore.isString)(name)) throw new Error("Event missing");
    var data = (0, _analyticsCore.isPlainObject)(eventName) ? (_a = eventName.properties) !== null && _a !== void 0 ? _a : {} : (0, _analyticsCore.isPlainObject)(properties) ? properties : {};
    var opts = {};
    if (!(0, _analyticsCore.isFunction)(options)) opts = options !== null && options !== void 0 ? options : {};
    if ((0, _analyticsCore.isPlainObject)(eventName) && !(0, _analyticsCore.isFunction)(properties)) opts = properties !== null && properties !== void 0 ? properties : {};
    var cb = args.find((0, _analyticsCore.isFunction));
    return [
        name,
        data,
        opts,
        cb
    ];
}
function resolvePageArguments(category, name, properties, options, callback) {
    var _a, _b;
    var resolvedCategory = null;
    var resolvedName = null;
    var args = [
        category,
        name,
        properties,
        options,
        callback
    ];
    var strings = args.filter((0, _analyticsCore.isString));
    if (strings[0] !== undefined && strings[1] !== undefined) {
        resolvedCategory = strings[0];
        resolvedName = strings[1];
    }
    if (strings.length === 1) {
        resolvedCategory = null;
        resolvedName = strings[0];
    }
    var resolvedCallback = args.find((0, _analyticsCore.isFunction));
    var objects = args.filter(function(obj) {
        if (resolvedName === null) return (0, _analyticsCore.isPlainObject)(obj);
        return (0, _analyticsCore.isPlainObject)(obj) || obj === null;
    });
    var resolvedProperties = (_a = objects[0]) !== null && _a !== void 0 ? _a : {};
    var resolvedOptions = (_b = objects[1]) !== null && _b !== void 0 ? _b : {};
    return [
        resolvedCategory,
        resolvedName,
        resolvedProperties,
        resolvedOptions,
        resolvedCallback
    ];
}
var resolveUserArguments = function(user) {
    return function() {
        var _a, _b, _c;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var values = {};
        // It's a stack so it's reversed so that we go through each of the expected arguments
        var orderStack = [
            "callback",
            "options",
            "traits",
            "id"
        ];
        // Read each argument and eval the possible values here
        for(var _d = 0, args_1 = args; _d < args_1.length; _d++){
            var arg = args_1[_d];
            var current = orderStack.pop();
            if (current === "id") {
                if ((0, _analyticsCore.isString)(arg) || (0, _analyticsCore.isNumber)(arg)) {
                    values.id = arg.toString();
                    continue;
                }
                if (arg === null || arg === undefined) continue;
                // First argument should always be the id, if it is not a valid value we can skip it
                current = orderStack.pop();
            }
            // Traits and Options
            if ((current === "traits" || current === "options") && (arg === null || arg === undefined || (0, _analyticsCore.isPlainObject)(arg))) values[current] = arg;
            // Callback
            if ((0, _analyticsCore.isFunction)(arg)) {
                values.callback = arg;
                break; // This is always the last argument
            }
        }
        return [
            (_a = values.id) !== null && _a !== void 0 ? _a : user.id(),
            (_b = values.traits) !== null && _b !== void 0 ? _b : {},
            (_c = values.options) !== null && _c !== void 0 ? _c : {},
            values.callback
        ];
    };
};
function resolveAliasArguments(to, from, options, callback) {
    if ((0, _analyticsCore.isNumber)(to)) to = to.toString(); // Legacy behaviour - allow integers for alias calls
    if ((0, _analyticsCore.isNumber)(from)) from = from.toString();
    var args = [
        to,
        from,
        options,
        callback
    ];
    var _a = args.filter((0, _analyticsCore.isString)), _b = _a[0], aliasTo = _b === void 0 ? to : _b, _c = _a[1], aliasFrom = _c === void 0 ? null : _c;
    var _d = args.filter((0, _analyticsCore.isPlainObject))[0], opts = _d === void 0 ? {} : _d;
    var resolvedCallback = args.find((0, _analyticsCore.isFunction));
    return [
        aliasTo,
        aliasFrom,
        opts,
        resolvedCallback
    ];
}

},{"@segment/analytics-core":"7b8vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7b8vz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backoff", ()=>(0, _backoff.backoff));
parcelHelpers.export(exports, "CoreLogger", ()=>(0, _logger.CoreLogger));
var _interface = require("./emitter/interface");
parcelHelpers.exportAll(_interface, exports);
var _plugins = require("./plugins");
parcelHelpers.exportAll(_plugins, exports);
var _interfaces = require("./events/interfaces");
parcelHelpers.exportAll(_interfaces, exports);
var _events = require("./events");
parcelHelpers.exportAll(_events, exports);
var _callback = require("./callback");
parcelHelpers.exportAll(_callback, exports);
var _priorityQueue = require("./priority-queue");
parcelHelpers.exportAll(_priorityQueue, exports);
var _backoff = require("./priority-queue/backoff");
var _context = require("./context");
parcelHelpers.exportAll(_context, exports);
var _eventQueue = require("./queue/event-queue");
parcelHelpers.exportAll(_eventQueue, exports);
var _analytics = require("./analytics");
parcelHelpers.exportAll(_analytics, exports);
var _dispatch = require("./analytics/dispatch");
parcelHelpers.exportAll(_dispatch, exports);
var _helpers = require("./validation/helpers");
parcelHelpers.exportAll(_helpers, exports);
var _errors = require("./validation/errors");
parcelHelpers.exportAll(_errors, exports);
var _assertions = require("./validation/assertions");
parcelHelpers.exportAll(_assertions, exports);
var _bindAll = require("./utils/bind-all");
parcelHelpers.exportAll(_bindAll, exports);
var _stats = require("./stats");
parcelHelpers.exportAll(_stats, exports);
var _logger = require("./logger");
var _delivery = require("./queue/delivery");
parcelHelpers.exportAll(_delivery, exports);

},{"./emitter/interface":false,"./plugins":false,"./events/interfaces":false,"./events":false,"./callback":"eLiS0","./priority-queue":"eMsrG","./priority-queue/backoff":false,"./context":"eWF2T","./queue/event-queue":"hb11n","./analytics":false,"./analytics/dispatch":"dnvwP","./validation/helpers":"eyDAB","./validation/errors":"dMnXR","./validation/assertions":"35YIV","./utils/bind-all":false,"./stats":"JiNmk","./logger":false,"./queue/delivery":"ktKb7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLiS0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pTimeout", ()=>pTimeout);
parcelHelpers.export(exports, "sleep", ()=>sleep);
/**
 * @param ctx
 * @param callback - the function to invoke
 * @param delay - aka "timeout". The amount of time in ms to wait before invoking the callback.
 */ parcelHelpers.export(exports, "invokeCallback", ()=>invokeCallback);
function pTimeout(promise, timeout) {
    return new Promise(function(resolve, reject) {
        var timeoutId = setTimeout(function() {
            reject(Error("Promise timed out"));
        }, timeout);
        promise.then(function(val) {
            clearTimeout(timeoutId);
            return resolve(val);
        }).catch(reject);
    });
}
function sleep(timeoutInMs) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, timeoutInMs);
    });
}
function invokeCallback(ctx, callback, delay) {
    var cb = function() {
        try {
            return Promise.resolve(callback(ctx));
        } catch (err) {
            return Promise.reject(err);
        }
    };
    return sleep(delay)// pTimeout ensures that the callback can't cause the context to hang
    .then(function() {
        return pTimeout(cb(), 1000);
    }).catch(function(err) {
        ctx === null || ctx === void 0 || ctx.log("warn", "Callback Error", {
            error: err
        });
        ctx === null || ctx === void 0 || ctx.stats.increment("callback_error");
    }).then(function() {
        return ctx;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMsrG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ON_REMOVE_FROM_FUTURE", ()=>ON_REMOVE_FROM_FUTURE);
parcelHelpers.export(exports, "PriorityQueue", ()=>PriorityQueue);
var _tslib = require("tslib");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
var _backoff = require("./backoff");
var ON_REMOVE_FROM_FUTURE = "onRemoveFromFuture";
var PriorityQueue = /** @class */ function(_super) {
    (0, _tslib.__extends)(PriorityQueue, _super);
    function PriorityQueue(maxAttempts, queue, seen) {
        var _this = _super.call(this) || this;
        _this.future = [];
        _this.maxAttempts = maxAttempts;
        _this.queue = queue;
        _this.seen = seen !== null && seen !== void 0 ? seen : {};
        return _this;
    }
    PriorityQueue.prototype.push = function() {
        var _this = this;
        var items = [];
        for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
        var accepted = items.map(function(operation) {
            var attempts = _this.updateAttempts(operation);
            if (attempts > _this.maxAttempts || _this.includes(operation)) return false;
            _this.queue.push(operation);
            return true;
        });
        this.queue = this.queue.sort(function(a, b) {
            return _this.getAttempts(a) - _this.getAttempts(b);
        });
        return accepted;
    };
    PriorityQueue.prototype.pushWithBackoff = function(item) {
        var _this = this;
        if (this.getAttempts(item) === 0) return this.push(item)[0];
        var attempt = this.updateAttempts(item);
        if (attempt > this.maxAttempts || this.includes(item)) return false;
        var timeout = (0, _backoff.backoff)({
            attempt: attempt - 1
        });
        setTimeout(function() {
            _this.queue.push(item);
            // remove from future list
            _this.future = _this.future.filter(function(f) {
                return f.id !== item.id;
            });
            // Lets listeners know that a 'future' message is now available in the queue
            _this.emit(ON_REMOVE_FROM_FUTURE);
        }, timeout);
        this.future.push(item);
        return true;
    };
    PriorityQueue.prototype.getAttempts = function(item) {
        var _a;
        return (_a = this.seen[item.id]) !== null && _a !== void 0 ? _a : 0;
    };
    PriorityQueue.prototype.updateAttempts = function(item) {
        this.seen[item.id] = this.getAttempts(item) + 1;
        return this.getAttempts(item);
    };
    PriorityQueue.prototype.includes = function(item) {
        return this.queue.includes(item) || this.future.includes(item) || Boolean(this.queue.find(function(i) {
            return i.id === item.id;
        })) || Boolean(this.future.find(function(i) {
            return i.id === item.id;
        }));
    };
    PriorityQueue.prototype.pop = function() {
        return this.queue.shift();
    };
    Object.defineProperty(PriorityQueue.prototype, "length", {
        get: function() {
            return this.queue.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "todo", {
        get: function() {
            return this.queue.length + this.future.length;
        },
        enumerable: false,
        configurable: true
    });
    return PriorityQueue;
}((0, _analyticsGenericUtils.Emitter));

},{"tslib":"lRdW5","@segment/analytics-generic-utils":"h6A2f","./backoff":"7sc29","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6A2f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createDeferred = require("./create-deferred");
parcelHelpers.exportAll(_createDeferred, exports);
var _emitter = require("./emitter");
parcelHelpers.exportAll(_emitter, exports);

},{"./create-deferred":"1W8lL","./emitter":"fN9YD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W8lL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createDeferred = require("./create-deferred");
parcelHelpers.exportAll(_createDeferred, exports);

},{"./create-deferred":"4R6Lc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R6Lc":[function(require,module,exports) {
/**
 * Return a promise that can be externally resolved
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDeferred", ()=>createDeferred);
var createDeferred = function() {
    var resolve;
    var reject;
    var settled = false;
    var promise = new Promise(function(_resolve, _reject) {
        resolve = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            settled = true;
            _resolve.apply(void 0, args);
        };
        reject = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            settled = true;
            _reject.apply(void 0, args);
        };
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise,
        isSettled: function() {
            return settled;
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fN9YD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _emitter = require("./emitter");
parcelHelpers.exportAll(_emitter, exports);

},{"./emitter":"bRmYk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRmYk":[function(require,module,exports) {
/**
 * Event Emitter that takes the expected contract as a generic
 * @example
 * ```ts
 *  type Contract = {
 *    delivery_success: [DeliverySuccessResponse, Metrics],
 *    delivery_failure: [DeliveryError]
 * }
 *  new Emitter<Contract>()
 *  .on('delivery_success', (res, metrics) => ...)
 *  .on('delivery_failure', (err) => ...)
 * ```
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emitter", ()=>Emitter);
var Emitter = /** @class */ function() {
    function Emitter(options) {
        var _a;
        this.callbacks = {};
        this.warned = false;
        this.maxListeners = (_a = options === null || options === void 0 ? void 0 : options.maxListeners) !== null && _a !== void 0 ? _a : 10;
    }
    Emitter.prototype.warnIfPossibleMemoryLeak = function(event) {
        if (this.warned) return;
        if (this.maxListeners && this.callbacks[event].length > this.maxListeners) {
            console.warn("Event Emitter: Possible memory leak detected; ".concat(String(event), " has exceeded ").concat(this.maxListeners, " listeners."));
            this.warned = true;
        }
    };
    Emitter.prototype.on = function(event, callback) {
        if (!this.callbacks[event]) this.callbacks[event] = [
            callback
        ];
        else {
            this.callbacks[event].push(callback);
            this.warnIfPossibleMemoryLeak(event);
        }
        return this;
    };
    Emitter.prototype.once = function(event, callback) {
        var _this = this;
        var on = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            _this.off(event, on);
            callback.apply(_this, args);
        };
        this.on(event, on);
        return this;
    };
    Emitter.prototype.off = function(event, callback) {
        var _a;
        var fns = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        var without = fns.filter(function(fn) {
            return fn !== callback;
        });
        this.callbacks[event] = without;
        return this;
    };
    Emitter.prototype.emit = function(event) {
        var _this = this;
        var _a;
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        var callbacks = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        callbacks.forEach(function(callback) {
            callback.apply(_this, args);
        });
        return this;
    };
    return Emitter;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7sc29":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backoff", ()=>backoff);
function backoff(params) {
    var random = Math.random() + 1;
    var _a = params.minTimeout, minTimeout = _a === void 0 ? 500 : _a, _b = params.factor, factor = _b === void 0 ? 2 : _b, attempt = params.attempt, _c = params.maxTimeout, maxTimeout = _c === void 0 ? Infinity : _c;
    return Math.min(random * minTimeout * Math.pow(factor, attempt), maxTimeout);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWF2T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContextCancelation", ()=>ContextCancelation);
parcelHelpers.export(exports, "CoreContext", ()=>CoreContext);
var _uuid = require("@lukeed/uuid");
var _dset = require("dset");
var _logger = require("../logger");
var _stats = require("../stats");
var ContextCancelation = /** @class */ function() {
    function ContextCancelation(options) {
        var _a, _b, _c;
        this.retry = (_a = options.retry) !== null && _a !== void 0 ? _a : true;
        this.type = (_b = options.type) !== null && _b !== void 0 ? _b : "plugin Error";
        this.reason = (_c = options.reason) !== null && _c !== void 0 ? _c : "";
    }
    return ContextCancelation;
}();
var CoreContext = /** @class */ function() {
    function CoreContext(event, id, stats, logger) {
        if (id === void 0) id = (0, _uuid.v4)();
        if (stats === void 0) stats = new (0, _stats.NullStats)();
        if (logger === void 0) logger = new (0, _logger.CoreLogger)();
        this.attempts = 0;
        this.event = event;
        this._id = id;
        this.logger = logger;
        this.stats = stats;
    }
    CoreContext.system = function() {
    // This should be overridden by the subclass to return an instance of the subclass.
    };
    CoreContext.prototype.isSame = function(other) {
        return other.id === this.id;
    };
    CoreContext.prototype.cancel = function(error) {
        if (error) throw error;
        throw new ContextCancelation({
            reason: "Context Cancel"
        });
    };
    CoreContext.prototype.log = function(level, message, extras) {
        this.logger.log(level, message, extras);
    };
    Object.defineProperty(CoreContext.prototype, "id", {
        get: function() {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    CoreContext.prototype.updateEvent = function(path, val) {
        var _a;
        // Don't allow integrations that are set to false to be overwritten with integration settings.
        if (path.split(".")[0] === "integrations") {
            var integrationName = path.split(".")[1];
            if (((_a = this.event.integrations) === null || _a === void 0 ? void 0 : _a[integrationName]) === false) return this.event;
        }
        (0, _dset.dset)(this.event, path, val);
        return this.event;
    };
    CoreContext.prototype.failedDelivery = function() {
        return this._failedDelivery;
    };
    CoreContext.prototype.setFailedDelivery = function(options) {
        this._failedDelivery = options;
    };
    CoreContext.prototype.logs = function() {
        return this.logger.logs;
    };
    CoreContext.prototype.flush = function() {
        this.logger.flush();
        this.stats.flush();
    };
    CoreContext.prototype.toJSON = function() {
        return {
            id: this._id,
            event: this.event,
            logs: this.logger.logs,
            metrics: this.stats.metrics
        };
    };
    return CoreContext;
}();

},{"@lukeed/uuid":"eajWy","dset":"agVOO","../logger":"62tvJ","../stats":"JiNmk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eajWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v4", ()=>v4);
var IDX = 256, HEX = [], BUFFER;
while(IDX--)HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
    var i = 0, num, out = "";
    if (!BUFFER || IDX + 16 > 256) {
        BUFFER = Array(i = 256);
        while(i--)BUFFER[i] = 256 * Math.random() | 0;
        i = IDX = 0;
    }
    for(; i < 16; i++){
        num = BUFFER[IDX + i];
        if (i == 6) out += HEX[num & 15 | 64];
        else if (i == 8) out += HEX[num & 63 | 128];
        else out += HEX[num];
        if (i & 1 && i > 1 && i < 11) out += "-";
    }
    IDX++;
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agVOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dset", ()=>dset);
function dset(obj, keys, val) {
    keys.split && (keys = keys.split("."));
    var i = 0, l = keys.length, t = obj, x, k;
    while(i < l){
        k = keys[i++];
        if (k === "__proto__" || k === "constructor" || k === "prototype") break;
        t = t[k] = i === l ? val : typeof (x = t[k]) === typeof keys ? x : keys[i] * 0 !== 0 || !!~("" + keys[i]).indexOf(".") ? {} : [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62tvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoreLogger", ()=>CoreLogger);
var _tslib = require("tslib");
var CoreLogger = /** @class */ function() {
    function CoreLogger() {
        this._logs = [];
    }
    CoreLogger.prototype.log = function(level, message, extras) {
        var time = new Date();
        this._logs.push({
            level: level,
            message: message,
            time: time,
            extras: extras
        });
    };
    Object.defineProperty(CoreLogger.prototype, "logs", {
        get: function() {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    CoreLogger.prototype.flush = function() {
        if (this.logs.length > 1) {
            var formatted = this._logs.reduce(function(logs, log) {
                var _a;
                var _b, _c;
                var line = (0, _tslib.__assign)((0, _tslib.__assign)({}, log), {
                    json: JSON.stringify(log.extras, null, " "),
                    extras: log.extras
                });
                delete line["time"];
                var key = (_c = (_b = log.time) === null || _b === void 0 ? void 0 : _b.toISOString()) !== null && _c !== void 0 ? _c : "";
                if (logs[key]) key = "".concat(key, "-").concat(Math.random());
                return (0, _tslib.__assign)((0, _tslib.__assign)({}, logs), (_a = {}, _a[key] = line, _a));
            }, {});
            // ie doesn't like console.table
            if (console.table) console.table(formatted);
            else console.log(formatted);
        } else this.logs.forEach(function(logEntry) {
            var level = logEntry.level, message = logEntry.message, extras = logEntry.extras;
            if (level === "info" || level === "debug") console.log(message, extras !== null && extras !== void 0 ? extras : "");
            else console[level](message, extras !== null && extras !== void 0 ? extras : "");
        });
        this._logs = [];
    };
    return CoreLogger;
}();

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JiNmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoreStats", ()=>CoreStats);
parcelHelpers.export(exports, "NullStats", ()=>NullStats);
var _tslib = require("tslib");
var compactMetricType = function(type) {
    var enums = {
        gauge: "g",
        counter: "c"
    };
    return enums[type];
};
var CoreStats = /** @class */ function() {
    function CoreStats() {
        this.metrics = [];
    }
    CoreStats.prototype.increment = function(metric, by, tags) {
        if (by === void 0) by = 1;
        this.metrics.push({
            metric: metric,
            value: by,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: "counter",
            timestamp: Date.now()
        });
    };
    CoreStats.prototype.gauge = function(metric, value, tags) {
        this.metrics.push({
            metric: metric,
            value: value,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: "gauge",
            timestamp: Date.now()
        });
    };
    CoreStats.prototype.flush = function() {
        var formatted = this.metrics.map(function(m) {
            return (0, _tslib.__assign)((0, _tslib.__assign)({}, m), {
                tags: m.tags.join(",")
            });
        });
        // ie doesn't like console.table
        if (console.table) console.table(formatted);
        else console.log(formatted);
        this.metrics = [];
    };
    /**
     * compact keys for smaller payload
     */ CoreStats.prototype.serialize = function() {
        return this.metrics.map(function(m) {
            return {
                m: m.metric,
                v: m.value,
                t: m.tags,
                k: compactMetricType(m.type),
                e: m.timestamp
            };
        });
    };
    return CoreStats;
}();
var NullStats = /** @class */ function(_super) {
    (0, _tslib.__extends)(NullStats, _super);
    function NullStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullStats.prototype.gauge = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    };
    NullStats.prototype.increment = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    };
    NullStats.prototype.flush = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    };
    NullStats.prototype.serialize = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
        return [];
    };
    return NullStats;
}(CoreStats);

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hb11n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoreEventQueue", ()=>CoreEventQueue);
var _tslib = require("tslib");
var _groupBy = require("../utils/group-by");
var _priorityQueue = require("../priority-queue");
var _context = require("../context");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
var _taskGroup = require("../task/task-group");
var _delivery = require("./delivery");
var CoreEventQueue = /** @class */ function(_super) {
    (0, _tslib.__extends)(CoreEventQueue, _super);
    function CoreEventQueue(priorityQueue) {
        var _this = _super.call(this) || this;
        /**
         * All event deliveries get suspended until all the tasks in this task group are complete.
         * For example: a middleware that augments the event object should be loaded safely as a
         * critical task, this way, event queue will wait for it to be ready before sending events.
         *
         * This applies to all the events already in the queue, and the upcoming ones
         */ _this.criticalTasks = (0, _taskGroup.createTaskGroup)();
        _this.plugins = [];
        _this.failedInitializations = [];
        _this.flushing = false;
        _this.queue = priorityQueue;
        _this.queue.on((0, _priorityQueue.ON_REMOVE_FROM_FUTURE), function() {
            _this.scheduleFlush(0);
        });
        return _this;
    }
    CoreEventQueue.prototype.register = function(ctx, plugin, instance) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!(plugin.type === "destination" && plugin.name !== "Segment.io")) return [
                            3 /*break*/ ,
                            1
                        ];
                        plugin.load(ctx, instance).catch(function(err) {
                            _this.failedInitializations.push(plugin.name);
                            _this.emit("initialization_failure", plugin);
                            console.warn(plugin.name, err);
                            ctx.log("warn", "Failed to load destination", {
                                plugin: plugin.name,
                                error: err
                            });
                            _this.plugins = _this.plugins.filter(function(p) {
                                return p === plugin;
                            });
                        });
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 1:
                        return [
                            4 /*yield*/ ,
                            plugin.load(ctx, instance)
                        ];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.plugins.push(plugin);
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CoreEventQueue.prototype.deregister = function(ctx, plugin, instance) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var e_1;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            3,
                            ,
                            4
                        ]);
                        if (!plugin.unload) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            Promise.resolve(plugin.unload(ctx, instance))
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.plugins = this.plugins.filter(function(p) {
                            return p.name !== plugin.name;
                        });
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        e_1 = _a.sent();
                        ctx.log("warn", "Failed to unload destination", {
                            plugin: plugin.name,
                            error: e_1
                        });
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CoreEventQueue.prototype.dispatch = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var willDeliver;
            return (0, _tslib.__generator)(this, function(_a) {
                ctx.log("debug", "Dispatching");
                ctx.stats.increment("message_dispatched");
                this.queue.push(ctx);
                willDeliver = this.subscribeToDelivery(ctx);
                this.scheduleFlush(0);
                return [
                    2 /*return*/ ,
                    willDeliver
                ];
            });
        });
    };
    CoreEventQueue.prototype.subscribeToDelivery = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    new Promise(function(resolve) {
                        var onDeliver = function(flushed, delivered) {
                            if (flushed.isSame(ctx)) {
                                _this.off("flush", onDeliver);
                                if (delivered) resolve(flushed);
                                else resolve(flushed);
                            }
                        };
                        _this.on("flush", onDeliver);
                    })
                ];
            });
        });
    };
    CoreEventQueue.prototype.dispatchSingle = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                ctx.log("debug", "Dispatching");
                ctx.stats.increment("message_dispatched");
                this.queue.updateAttempts(ctx);
                ctx.attempts = 1;
                return [
                    2 /*return*/ ,
                    this.deliver(ctx).catch(function(err) {
                        var accepted = _this.enqueuRetry(err, ctx);
                        if (!accepted) {
                            ctx.setFailedDelivery({
                                reason: err
                            });
                            return ctx;
                        }
                        return _this.subscribeToDelivery(ctx);
                    })
                ];
            });
        });
    };
    CoreEventQueue.prototype.isEmpty = function() {
        return this.queue.length === 0;
    };
    CoreEventQueue.prototype.scheduleFlush = function(timeout) {
        var _this = this;
        if (timeout === void 0) timeout = 500;
        if (this.flushing) return;
        this.flushing = true;
        setTimeout(function() {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            _this.flush().then(function() {
                setTimeout(function() {
                    _this.flushing = false;
                    if (_this.queue.length) _this.scheduleFlush(0);
                }, 0);
            });
        }, timeout);
    };
    CoreEventQueue.prototype.deliver = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var start, done, err_1, error;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.criticalTasks.done()
                        ];
                    case 1:
                        _a.sent();
                        start = Date.now();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([
                            2,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.flushOne(ctx)
                        ];
                    case 3:
                        ctx = _a.sent();
                        done = Date.now() - start;
                        this.emit("delivery_success", ctx);
                        ctx.stats.gauge("delivered", done);
                        ctx.log("debug", "Delivered", ctx.event);
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                    case 4:
                        err_1 = _a.sent();
                        error = err_1;
                        ctx.log("error", "Failed to deliver", error);
                        this.emit("delivery_failure", ctx, error);
                        ctx.stats.increment("delivery_failed");
                        throw err_1;
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    CoreEventQueue.prototype.enqueuRetry = function(err, ctx) {
        var retriable = !(err instanceof (0, _context.ContextCancelation)) || err.retry;
        if (!retriable) return false;
        return this.queue.pushWithBackoff(ctx);
    };
    CoreEventQueue.prototype.flush = function() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var ctx, err_2, accepted;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.queue.length === 0) return [
                            2 /*return*/ ,
                            []
                        ];
                        ctx = this.queue.pop();
                        if (!ctx) return [
                            2 /*return*/ ,
                            []
                        ];
                        ctx.attempts = this.queue.getAttempts(ctx);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.deliver(ctx)
                        ];
                    case 2:
                        ctx = _a.sent();
                        this.emit("flush", ctx, true);
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        err_2 = _a.sent();
                        accepted = this.enqueuRetry(err_2, ctx);
                        if (!accepted) {
                            ctx.setFailedDelivery({
                                reason: err_2
                            });
                            this.emit("flush", ctx, false);
                        }
                        return [
                            2 /*return*/ ,
                            []
                        ];
                    case 4:
                        return [
                            2 /*return*/ ,
                            [
                                ctx
                            ]
                        ];
                }
            });
        });
    };
    CoreEventQueue.prototype.isReady = function() {
        // return this.plugins.every((p) => p.isLoaded())
        // should we wait for every plugin to load?
        return true;
    };
    CoreEventQueue.prototype.availableExtensions = function(denyList) {
        var available = this.plugins.filter(function(p) {
            var _a, _b, _c;
            // Only filter out destination plugins or the Segment.io plugin
            if (p.type !== "destination" && p.name !== "Segment.io") return true;
            var alternativeNameMatch = undefined;
            (_a = p.alternativeNames) === null || _a === void 0 || _a.forEach(function(name) {
                if (denyList[name] !== undefined) alternativeNameMatch = denyList[name];
            });
            // Explicit integration option takes precedence, `All: false` does not apply to Segment.io
            return (_c = (_b = denyList[p.name]) !== null && _b !== void 0 ? _b : alternativeNameMatch) !== null && _c !== void 0 ? _c : (p.name === "Segment.io" ? true : denyList.All) !== false;
        });
        var _a = (0, _groupBy.groupBy)(available, "type"), _b = _a.before, before = _b === void 0 ? [] : _b, _c = _a.enrichment, enrichment = _c === void 0 ? [] : _c, _d = _a.destination, destination = _d === void 0 ? [] : _d, _e = _a.after, after = _e === void 0 ? [] : _e;
        return {
            before: before,
            enrichment: enrichment,
            destinations: destination,
            after: after
        };
    };
    CoreEventQueue.prototype.flushOne = function(ctx) {
        var _a, _b;
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _c, before, enrichment, _i, before_1, beforeWare, temp, _d, enrichment_1, enrichmentWare, temp, _e, destinations, after, afterCalls;
            return (0, _tslib.__generator)(this, function(_f) {
                switch(_f.label){
                    case 0:
                        if (!this.isReady()) throw new Error("Not ready");
                        if (ctx.attempts > 1) this.emit("delivery_retry", ctx);
                        _c = this.availableExtensions((_a = ctx.event.integrations) !== null && _a !== void 0 ? _a : {}), before = _c.before, enrichment = _c.enrichment;
                        _i = 0, before_1 = before;
                        _f.label = 1;
                    case 1:
                        if (!(_i < before_1.length)) return [
                            3 /*break*/ ,
                            4
                        ];
                        beforeWare = before_1[_i];
                        return [
                            4 /*yield*/ ,
                            (0, _delivery.ensure)(ctx, beforeWare)
                        ];
                    case 2:
                        temp = _f.sent();
                        if (temp instanceof (0, _context.CoreContext)) ctx = temp;
                        this.emit("message_enriched", ctx, beforeWare);
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 4:
                        _d = 0, enrichment_1 = enrichment;
                        _f.label = 5;
                    case 5:
                        if (!(_d < enrichment_1.length)) return [
                            3 /*break*/ ,
                            8
                        ];
                        enrichmentWare = enrichment_1[_d];
                        return [
                            4 /*yield*/ ,
                            (0, _delivery.attempt)(ctx, enrichmentWare)
                        ];
                    case 6:
                        temp = _f.sent();
                        if (temp instanceof (0, _context.CoreContext)) ctx = temp;
                        this.emit("message_enriched", ctx, enrichmentWare);
                        _f.label = 7;
                    case 7:
                        _d++;
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 8:
                        _e = this.availableExtensions((_b = ctx.event.integrations) !== null && _b !== void 0 ? _b : {}), destinations = _e.destinations, after = _e.after;
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve, reject) {
                                setTimeout(function() {
                                    var attempts = destinations.map(function(destination) {
                                        return (0, _delivery.attempt)(ctx, destination);
                                    });
                                    Promise.all(attempts).then(resolve).catch(reject);
                                }, 0);
                            })
                        ];
                    case 9:
                        _f.sent();
                        ctx.stats.increment("message_delivered");
                        this.emit("message_delivered", ctx);
                        afterCalls = after.map(function(after) {
                            return (0, _delivery.attempt)(ctx, after);
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(afterCalls)
                        ];
                    case 10:
                        _f.sent();
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                }
            });
        });
    };
    return CoreEventQueue;
}((0, _analyticsGenericUtils.Emitter));

},{"tslib":"lRdW5","../utils/group-by":"kZtKN","../priority-queue":"eMsrG","../context":"eWF2T","@segment/analytics-generic-utils":"h6A2f","../task/task-group":"iWoEQ","./delivery":"ktKb7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZtKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupBy", ()=>groupBy);
var _tslib = require("tslib");
function groupBy(collection, grouper) {
    var results = {};
    collection.forEach(function(item) {
        var _a;
        var key = undefined;
        if (typeof grouper === "string") {
            var suggestedKey = item[grouper];
            key = typeof suggestedKey !== "string" ? JSON.stringify(suggestedKey) : suggestedKey;
        } else if (grouper instanceof Function) key = grouper(item);
        if (key === undefined) return;
        results[key] = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (_a = results[key]) !== null && _a !== void 0 ? _a : [], true), [
            item
        ], false);
    });
    return results;
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWoEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTaskGroup", ()=>createTaskGroup);
var _isThenable = require("../utils/is-thenable");
var createTaskGroup = function() {
    var taskCompletionPromise;
    var resolvePromise;
    var count = 0;
    return {
        done: function() {
            return taskCompletionPromise;
        },
        run: function(op) {
            var returnValue = op();
            if ((0, _isThenable.isThenable)(returnValue)) {
                if (++count === 1) taskCompletionPromise = new Promise(function(res) {
                    return resolvePromise = res;
                });
                returnValue.finally(function() {
                    return --count === 0 && resolvePromise();
                });
            }
            return returnValue;
        }
    };
};

},{"../utils/is-thenable":"3gj9A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gj9A":[function(require,module,exports) {
/**
 *  Check if  thenable
 *  (instanceof Promise doesn't respect realms)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isThenable", ()=>isThenable);
var isThenable = function(value) {
    return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktKb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attempt", ()=>attempt);
parcelHelpers.export(exports, "ensure", ()=>ensure);
var _tslib = require("tslib");
var _context = require("../context");
function tryAsync(fn) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var err_1;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4 /*yield*/ ,
                        fn()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.sent()
                    ];
                case 2:
                    err_1 = _a.sent();
                    return [
                        2 /*return*/ ,
                        Promise.reject(err_1)
                    ];
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function attempt(ctx, plugin) {
    ctx.log("debug", "plugin", {
        plugin: plugin.name
    });
    var start = new Date().getTime();
    var hook = plugin[ctx.event.type];
    if (hook === undefined) return Promise.resolve(ctx);
    var newCtx = tryAsync(function() {
        return hook.apply(plugin, [
            ctx
        ]);
    }).then(function(ctx) {
        var done = new Date().getTime() - start;
        ctx.stats.gauge("plugin_time", done, [
            "plugin:".concat(plugin.name)
        ]);
        return ctx;
    }).catch(function(err) {
        if (err instanceof (0, _context.ContextCancelation) && err.type === "middleware_cancellation") throw err;
        if (err instanceof (0, _context.ContextCancelation)) {
            ctx.log("warn", err.type, {
                plugin: plugin.name,
                error: err
            });
            return err;
        }
        ctx.log("error", "plugin Error", {
            plugin: plugin.name,
            error: err
        });
        ctx.stats.increment("plugin_error", 1, [
            "plugin:".concat(plugin.name)
        ]);
        return err;
    });
    return newCtx;
}
function ensure(ctx, plugin) {
    return attempt(ctx, plugin).then(function(newContext) {
        if (newContext instanceof (0, _context.CoreContext)) return newContext;
        ctx.log("debug", "Context canceled");
        ctx.stats.increment("context_canceled");
        ctx.cancel(newContext);
    });
}

},{"tslib":"lRdW5","../context":"eWF2T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnvwP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDelay", ()=>getDelay);
/**
 * Push an event into the dispatch queue and invoke any callbacks.
 *
 * @param event - Segment event to enqueue.
 * @param queue - Queue to dispatch against.
 * @param emitter - This is typically an instance of "Analytics" -- used for metrics / progress information.
 * @param options
 */ parcelHelpers.export(exports, "dispatch", ()=>dispatch);
var _tslib = require("tslib");
var _callback = require("../callback");
var getDelay = function(startTimeInEpochMS, timeoutInMS) {
    var elapsedTime = Date.now() - startTimeInEpochMS;
    // increasing the timeout increases the delay by almost the same amount -- this is weird legacy behavior.
    return Math.max((timeoutInMS !== null && timeoutInMS !== void 0 ? timeoutInMS : 300) - elapsedTime, 0);
};
function dispatch(ctx, queue, emitter, options) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var startTime, dispatched;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    emitter.emit("dispatch_start", ctx);
                    startTime = Date.now();
                    if (!queue.isEmpty()) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        queue.dispatchSingle(ctx)
                    ];
                case 1:
                    dispatched = _a.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    return [
                        4 /*yield*/ ,
                        queue.dispatch(ctx)
                    ];
                case 3:
                    dispatched = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(options === null || options === void 0 ? void 0 : options.callback)) return [
                        3 /*break*/ ,
                        6
                    ];
                    return [
                        4 /*yield*/ ,
                        (0, _callback.invokeCallback)(dispatched, options.callback, getDelay(startTime, options.timeout))
                    ];
                case 5:
                    dispatched = _a.sent();
                    _a.label = 6;
                case 6:
                    if (options === null || options === void 0 ? void 0 : options.debug) dispatched.flush();
                    return [
                        2 /*return*/ ,
                        dispatched
                    ];
            }
        });
    });
}

},{"tslib":"lRdW5","../callback":"eLiS0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyDAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "exists", ()=>exists);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
function isString(obj) {
    return typeof obj === "string";
}
function isNumber(obj) {
    return typeof obj === "number";
}
function isFunction(obj) {
    return typeof obj === "function";
}
function exists(val) {
    return val !== undefined && val !== null;
}
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === "object";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMnXR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValidationError", ()=>ValidationError);
var _tslib = require("tslib");
var ValidationError = /** @class */ function(_super) {
    (0, _tslib.__extends)(ValidationError, _super);
    function ValidationError(field, message) {
        var _this = _super.call(this, "".concat(field, " ").concat(message)) || this;
        _this.field = field;
        return _this;
    }
    return ValidationError;
}(Error);

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"35YIV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertUserIdentity", ()=>assertUserIdentity);
parcelHelpers.export(exports, "assertEventExists", ()=>assertEventExists);
parcelHelpers.export(exports, "assertEventType", ()=>assertEventType);
parcelHelpers.export(exports, "assertTrackEventName", ()=>assertTrackEventName);
parcelHelpers.export(exports, "assertTrackEventProperties", ()=>assertTrackEventProperties);
parcelHelpers.export(exports, "assertTraits", ()=>assertTraits);
parcelHelpers.export(exports, "assertMessageId", ()=>assertMessageId);
parcelHelpers.export(exports, "validateEvent", ()=>validateEvent);
var _errors = require("./errors");
var _helpers = require("./helpers");
var stringError = "is not a string";
var objError = "is not an object";
var nilError = "is nil";
function assertUserIdentity(event) {
    var USER_FIELD_NAME = ".userId/anonymousId/previousId/groupId";
    var getAnyUserId = function(event) {
        var _a, _b, _c;
        return (_c = (_b = (_a = event.userId) !== null && _a !== void 0 ? _a : event.anonymousId) !== null && _b !== void 0 ? _b : event.groupId) !== null && _c !== void 0 ? _c : event.previousId;
    };
    var id = getAnyUserId(event);
    if (!(0, _helpers.exists)(id)) throw new (0, _errors.ValidationError)(USER_FIELD_NAME, nilError);
    else if (!(0, _helpers.isString)(id)) throw new (0, _errors.ValidationError)(USER_FIELD_NAME, stringError);
}
function assertEventExists(event) {
    if (!(0, _helpers.exists)(event)) throw new (0, _errors.ValidationError)("Event", nilError);
    if (typeof event !== "object") throw new (0, _errors.ValidationError)("Event", objError);
}
function assertEventType(event) {
    if (!(0, _helpers.isString)(event.type)) throw new (0, _errors.ValidationError)(".type", stringError);
}
function assertTrackEventName(event) {
    if (!(0, _helpers.isString)(event.event)) throw new (0, _errors.ValidationError)(".event", stringError);
}
function assertTrackEventProperties(event) {
    if (!(0, _helpers.isPlainObject)(event.properties)) throw new (0, _errors.ValidationError)(".properties", objError);
}
function assertTraits(event) {
    if (!(0, _helpers.isPlainObject)(event.traits)) throw new (0, _errors.ValidationError)(".traits", objError);
}
function assertMessageId(event) {
    if (!(0, _helpers.isString)(event.messageId)) throw new (0, _errors.ValidationError)(".messageId", stringError);
}
function validateEvent(event) {
    assertEventExists(event);
    assertEventType(event);
    assertMessageId(event);
    if (event.type === "track") {
        assertTrackEventName(event);
        assertTrackEventProperties(event);
    }
    if ([
        "group",
        "identify"
    ].includes(event.type)) assertTraits(event);
    assertUserIdentity(event);
}

},{"./errors":"dMnXR","./helpers":"eyDAB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cltJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isOnline", ()=>isOnline);
parcelHelpers.export(exports, "isOffline", ()=>isOffline);
var _environment = require("../environment");
function isOnline() {
    if ((0, _environment.isBrowser)()) return window.navigator.onLine;
    return true;
}
function isOffline() {
    return !isOnline();
}

},{"../environment":"2R1Ot","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2R1Ot":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "isServer", ()=>isServer);
function isBrowser() {
    return typeof window !== "undefined";
}
function isServer() {
    return !isBrowser();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85Be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Context", ()=>Context);
parcelHelpers.export(exports, "ContextCancelation", ()=>(0, _analyticsCore.ContextCancelation));
var _tslib = require("tslib");
var _analyticsCore = require("@segment/analytics-core");
var _stats = require("../stats");
var Context = /** @class */ function(_super) {
    (0, _tslib.__extends)(Context, _super);
    function Context(event, id) {
        return _super.call(this, event, id, new (0, _stats.Stats)()) || this;
    }
    Context.system = function() {
        return new this({
            type: "track",
            event: "system"
        });
    };
    return Context;
}((0, _analyticsCore.CoreContext));

},{"tslib":"lRdW5","@segment/analytics-core":"7b8vz","../stats":"3YwLm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YwLm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Stats", ()=>Stats);
var _tslib = require("tslib");
var _analyticsCore = require("@segment/analytics-core");
var _remoteMetrics = require("./remote-metrics");
var remoteMetrics;
var Stats = /** @class */ function(_super) {
    (0, _tslib.__extends)(Stats, _super);
    function Stats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stats.initRemoteMetrics = function(options) {
        remoteMetrics = new (0, _remoteMetrics.RemoteMetrics)(options);
    };
    Stats.prototype.increment = function(metric, by, tags) {
        _super.prototype.increment.call(this, metric, by, tags);
        remoteMetrics === null || remoteMetrics === void 0 || remoteMetrics.increment(metric, tags !== null && tags !== void 0 ? tags : []);
    };
    return Stats;
}((0, _analyticsCore.CoreStats));

},{"tslib":"lRdW5","@segment/analytics-core":"7b8vz","./remote-metrics":"5oSHc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oSHc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RemoteMetrics", ()=>RemoteMetrics);
var _tslib = require("tslib");
var _fetch = require("../../lib/fetch");
var _version = require("../../generated/version");
var _versionType = require("../../lib/version-type");
var _constants = require("../constants");
var createRemoteMetric = function(metric, tags, versionType) {
    var formattedTags = tags.reduce(function(acc, t) {
        var _a = t.split(":"), k = _a[0], v = _a[1];
        acc[k] = v;
        return acc;
    }, {});
    return {
        type: "Counter",
        metric: metric,
        value: 1,
        tags: (0, _tslib.__assign)((0, _tslib.__assign)({}, formattedTags), {
            library: "analytics.js",
            library_version: versionType === "web" ? "next-".concat((0, _version.version)) : "npm:next-".concat((0, _version.version))
        })
    };
};
function logError(err) {
    console.error("Error sending segment performance metrics", err);
}
var RemoteMetrics = /** @class */ function() {
    function RemoteMetrics(options) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.host = (_a = options === null || options === void 0 ? void 0 : options.host) !== null && _a !== void 0 ? _a : (0, _constants.SEGMENT_API_HOST);
        this.sampleRate = (_b = options === null || options === void 0 ? void 0 : options.sampleRate) !== null && _b !== void 0 ? _b : 1;
        this.flushTimer = (_c = options === null || options === void 0 ? void 0 : options.flushTimer) !== null && _c !== void 0 ? _c : 30000; /* 30s */ 
        this.maxQueueSize = (_d = options === null || options === void 0 ? void 0 : options.maxQueueSize) !== null && _d !== void 0 ? _d : 20;
        this.protocol = (_e = options === null || options === void 0 ? void 0 : options.protocol) !== null && _e !== void 0 ? _e : "https";
        this.queue = [];
        if (this.sampleRate > 0) {
            var flushing_1 = false;
            var run_1 = function() {
                if (flushing_1) return;
                flushing_1 = true;
                _this.flush().catch(logError);
                flushing_1 = false;
                setTimeout(run_1, _this.flushTimer);
            };
            run_1();
        }
    }
    RemoteMetrics.prototype.increment = function(metric, tags) {
        // All metrics are part of an allow list in Tracking API
        if (!metric.includes("analytics_js.")) return;
        // /m doesn't like empty tags
        if (tags.length === 0) return;
        if (Math.random() > this.sampleRate) return;
        if (this.queue.length >= this.maxQueueSize) return;
        var remoteMetric = createRemoteMetric(metric, tags, (0, _versionType.getVersionType)());
        this.queue.push(remoteMetric);
        if (metric.includes("error")) this.flush().catch(logError);
    };
    RemoteMetrics.prototype.flush = function() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _this = this;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.queue.length <= 0) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this.send().catch(function(error) {
                                logError(error);
                                _this.sampleRate = 0;
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    RemoteMetrics.prototype.send = function() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var payload, headers, url;
            return (0, _tslib.__generator)(this, function(_a) {
                payload = {
                    series: this.queue
                };
                this.queue = [];
                headers = {
                    "Content-Type": "text/plain"
                };
                url = "".concat(this.protocol, "://").concat(this.host, "/m");
                return [
                    2 /*return*/ ,
                    (0, _fetch.fetch)(url, {
                        headers: headers,
                        body: JSON.stringify(payload),
                        method: "POST"
                    })
                ];
            });
        });
    };
    return RemoteMetrics;
}();

},{"tslib":"lRdW5","../../lib/fetch":"48GFJ","../../generated/version":"iyRSI","../../lib/version-type":"6Swm4","../constants":"4C480","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48GFJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetch", ()=>fetch);
var _unfetch = require("unfetch");
var _unfetchDefault = parcelHelpers.interopDefault(_unfetch);
var _getGlobal = require("./get-global");
var fetch = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var global = (0, _getGlobal.getGlobal)();
    return (global && global.fetch || (0, _unfetchDefault.default)).apply(void 0, args);
};

},{"unfetch":"6OTEM","./get-global":"43DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OTEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(e, n) {
        return n = n || {}, new Promise(function(t, r) {
            var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function() {
                return {
                    ok: 2 == (s.status / 100 | 0),
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function() {
                        return Promise.resolve(s.responseText);
                    },
                    json: function() {
                        return Promise.resolve(s.responseText).then(JSON.parse);
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([
                            s.response
                        ]));
                    },
                    clone: a,
                    headers: {
                        keys: function() {
                            return o;
                        },
                        entries: function() {
                            return u;
                        },
                        get: function(e) {
                            return i[e.toLowerCase()];
                        },
                        has: function(e) {
                            return e.toLowerCase() in i;
                        }
                    }
                };
            };
            for(var l in s.open(n.method || "get", e, !0), s.onload = function() {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, n, t) {
                    o.push(n = n.toLowerCase()), u.push([
                        n,
                        t
                    ]), i[n] = i[n] ? i[n] + "," + t : t;
                }), t(a());
            }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers)s.setRequestHeader(l, n.headers[l]);
            s.send(n.body || null);
        });
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43DpR":[function(require,module,exports) {
// This an imperfect polyfill for globalThis
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal);
var global = arguments[3];
var getGlobal = function() {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyRSI":[function(require,module,exports) {
// This file is generated.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
var version = "1.66.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Swm4":[function(require,module,exports) {
// Default value will be updated to 'web' in `bundle-umd.ts` for web build.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setVersionType", ()=>setVersionType);
parcelHelpers.export(exports, "getVersionType", ()=>getVersionType);
var _version = "npm";
function setVersionType(version) {
    _version = version;
}
function getVersionType() {
    return _version;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4C480":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SEGMENT_API_HOST", ()=>SEGMENT_API_HOST);
var SEGMENT_API_HOST = "api.segment.io/v1";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjpzH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventFactory", ()=>EventFactory);
var _tslib = require("tslib");
var _uuid = require("@lukeed/uuid");
var _dset = require("dset");
var _sparkMd5 = require("spark-md5");
var _sparkMd5Default = parcelHelpers.interopDefault(_sparkMd5);
var _page = require("../page");
var _interfaces = require("./interfaces");
parcelHelpers.exportAll(_interfaces, exports);
var EventFactory = /** @class */ function() {
    function EventFactory(user) {
        this.user = user;
    }
    EventFactory.prototype.track = function(event, properties, options, globalIntegrations, pageCtx) {
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), {
            event: event,
            type: "track",
            properties: properties,
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations)
        }), pageCtx);
    };
    EventFactory.prototype.page = function(category, page, properties, options, globalIntegrations, pageCtx) {
        var _a;
        var event = {
            type: "page",
            properties: (0, _tslib.__assign)({}, properties),
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations)
        };
        if (category !== null) {
            event.category = category;
            event.properties = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
            event.properties.category = category;
        }
        if (page !== null) event.name = page;
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), event), pageCtx);
    };
    EventFactory.prototype.screen = function(category, screen, properties, options, globalIntegrations, pageCtx) {
        var event = {
            type: "screen",
            properties: (0, _tslib.__assign)({}, properties),
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations)
        };
        if (category !== null) event.category = category;
        if (screen !== null) event.name = screen;
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), event), pageCtx);
    };
    EventFactory.prototype.identify = function(userId, traits, options, globalIntegrations, pageCtx) {
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), {
            type: "identify",
            userId: userId,
            traits: traits,
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations)
        }), pageCtx);
    };
    EventFactory.prototype.group = function(groupId, traits, options, globalIntegrations, pageCtx) {
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), {
            type: "group",
            traits: traits,
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations),
            groupId: groupId
        }), pageCtx);
    };
    EventFactory.prototype.alias = function(to, from, options, globalIntegrations, pageCtx) {
        var base = {
            userId: to,
            type: "alias",
            options: (0, _tslib.__assign)({}, options),
            integrations: (0, _tslib.__assign)({}, globalIntegrations)
        };
        if (from !== null) base.previousId = from;
        if (to === undefined) return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, base), this.baseEvent()));
        return this.normalize((0, _tslib.__assign)((0, _tslib.__assign)({}, this.baseEvent()), base), pageCtx);
    };
    EventFactory.prototype.baseEvent = function() {
        var base = {
            integrations: {},
            options: {}
        };
        var user = this.user;
        if (user.id()) base.userId = user.id();
        if (user.anonymousId()) base.anonymousId = user.anonymousId();
        return base;
    };
    /**
     * Builds the context part of an event based on "foreign" keys that
     * are provided in the `Options` parameter for an Event
     */ EventFactory.prototype.context = function(event) {
        var _a, _b, _c;
        var optionsKeys = [
            "integrations",
            "anonymousId",
            "timestamp",
            "userId"
        ];
        var options = (_a = event.options) !== null && _a !== void 0 ? _a : {};
        delete options["integrations"];
        var providedOptionsKeys = Object.keys(options);
        var context = (_c = (_b = event.options) === null || _b === void 0 ? void 0 : _b.context) !== null && _c !== void 0 ? _c : {};
        var overrides = {};
        providedOptionsKeys.forEach(function(key) {
            if (key === "context") return;
            if (optionsKeys.includes(key)) (0, _dset.dset)(overrides, key, options[key]);
            else (0, _dset.dset)(context, key, options[key]);
        });
        return [
            context,
            overrides
        ];
    };
    EventFactory.prototype.normalize = function(event, pageCtx) {
        var _a, _b, _c;
        // set anonymousId globally if we encounter an override
        //segment.com/docs/connections/sources/catalog/libraries/website/javascript/identity/#override-the-anonymous-id-using-the-options-object
        ((_a = event.options) === null || _a === void 0 ? void 0 : _a.anonymousId) && this.user.anonymousId(event.options.anonymousId);
        var integrationBooleans = Object.keys((_b = event.integrations) !== null && _b !== void 0 ? _b : {}).reduce(function(integrationNames, name) {
            var _a;
            var _b;
            return (0, _tslib.__assign)((0, _tslib.__assign)({}, integrationNames), (_a = {}, _a[name] = Boolean((_b = event.integrations) === null || _b === void 0 ? void 0 : _b[name]), _a));
        }, {});
        // This is pretty trippy, but here's what's going on:
        // - a) We don't pass initial integration options as part of the event, only if they're true or false
        // - b) We do accept per integration overrides (like integrations.Amplitude.sessionId) at the event level
        // Hence the need to convert base integration options to booleans, but maintain per event integration overrides
        var allIntegrations = (0, _tslib.__assign)((0, _tslib.__assign)({}, integrationBooleans), (_c = event.options) === null || _c === void 0 ? void 0 : _c.integrations);
        var _d = this.context(event), context = _d[0], overrides = _d[1];
        var options = event.options, rest = (0, _tslib.__rest)(event, [
            "options"
        ]);
        var newEvent = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({
            timestamp: new Date()
        }, rest), {
            context: context,
            integrations: allIntegrations
        }), overrides), {
            messageId: "ajs-next-" + (0, _sparkMd5Default.default).hash(JSON.stringify(event) + (0, _uuid.v4)())
        });
        (0, _page.addPageContext)(newEvent, pageCtx);
        return newEvent;
    };
    return EventFactory;
}();

},{"tslib":"lRdW5","@lukeed/uuid":"eajWy","dset":"agVOO","spark-md5":"5QUEB","../page":"9nxvH","./interfaces":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5QUEB":[function(require,module,exports) {
(function(factory) {
    var glob, e;
    // Node/CommonJS
    module.exports = factory();
})(function(undefined) {
    "use strict";
    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */ /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */ var add32 = function(a, b) {
        return a + b & 0xFFFFFFFF;
    }, hex_chr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
    }
    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    function md5blk(s) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4)md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        return md5blks;
    }
    function md5blk_array(a) {
        var md5blks = [], i; /* Andy King said do it this way. */ 
        for(i = 0; i < 64; i += 4)md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        return md5blks;
    }
    function md51(s) {
        var n = s.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64)md5cycle(state, md5blk(s.substring(i - 64, i)));
        s = s.substring(i - 64);
        length = s.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1)tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function md51_array(a) {
        var n = a.length, state = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ], i, length, tail, tmp, lo, hi;
        for(i = 64; i <= n; i += 64)md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for(i = 0; i < length; i += 1)tail[i >> 2] |= a[i] << (i % 4 << 3);
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function rhex(n) {
        var s = "", j;
        for(j = 0; j < 4; j += 1)s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
        return s;
    }
    function hex(x) {
        var i;
        for(i = 0; i < x.length; i += 1)x[i] = rhex(x[i]);
        return x.join("");
    }
    // In some cases the fast add32 function cannot be used..
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") add32 = function(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
    };
    // ---------------------------------------------------
    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */ if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) (function() {
        function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) return Math.max(val + length, 0);
            return Math.min(val, length);
        }
        ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined) end = clamp(to, length);
            if (begin > end) return new ArrayBuffer(0);
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
        };
    })();
    // ---------------------------------------------------
    /**
     * Helpers.
     */ function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) str = unescape(encodeURIComponent(str));
        return str;
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for(i = 0; i < length; i += 1)arr[i] = str.charCodeAt(i);
        return returnUInt8Array ? arr : buff;
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for(x = 0; x < length - 1; x += 2)bytes.push(parseInt(hex.substr(x, 2), 16));
        return String.fromCharCode.apply(String, bytes);
    }
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */ function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }
    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.append = function(str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));
        return this;
    };
    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for(i = 64; i <= length; i += 64)md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        this._buff = this._buff.substring(i - 64);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], ret;
        for(i = 0; i < length; i += 1)tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) ret = hexToBinaryString(ret);
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.prototype.getState = function() {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
        };
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */ SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
    };
    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */ SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };
    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */ SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 0x80 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for(i = 0; i < 16; i += 1)tail[i] = 0;
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };
    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hash = function(str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };
    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    // ---------------------------------------------------
    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */ SparkMD5.ArrayBuffer = function() {
        // call reset to init the instance
        this.reset();
    };
    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for(i = 64; i <= length; i += 64)md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], i, ret;
        for(i = 0; i < length; i += 1)tail[i >> 2] |= buff[i] << (i % 4 << 3);
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) ret = hexToBinaryString(ret);
        this.reset();
        return ret;
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */ SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
    };
    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */ SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */ SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    return SparkMD5;
});

},{}],"9nxvH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPageContext = require("./get-page-context");
parcelHelpers.exportAll(_getPageContext, exports);
var _addPageContext = require("./add-page-context");
parcelHelpers.exportAll(_addPageContext, exports);

},{"./get-page-context":"9JYGM","./add-page-context":"3IC8s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JYGM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferedPageContextDiscriminant", ()=>BufferedPageContextDiscriminant);
parcelHelpers.export(exports, "createBufferedPageContext", ()=>createBufferedPageContext);
parcelHelpers.export(exports, "isBufferedPageContext", ()=>isBufferedPageContext);
parcelHelpers.export(exports, "createPageContext", ()=>createPageContext);
parcelHelpers.export(exports, "getDefaultBufferedPageContext", ()=>getDefaultBufferedPageContext);
parcelHelpers.export(exports, "getDefaultPageContext", ()=>getDefaultPageContext);
var _analyticsCore = require("@segment/analytics-core");
var BufferedPageContextDiscriminant = "bpc";
var createBufferedPageContext = function(url, canonicalUrl, search, path, title, referrer) {
    return {
        __t: BufferedPageContextDiscriminant,
        c: canonicalUrl,
        p: path,
        u: url,
        s: search,
        t: title,
        r: referrer
    };
};
// my clever/dubious way of making sure this type guard does not get out sync with the type definition
var BUFFERED_PAGE_CONTEXT_KEYS = Object.keys(createBufferedPageContext("", "", "", "", "", ""));
function isBufferedPageContext(bufferedPageCtx) {
    if (!(0, _analyticsCore.isPlainObject)(bufferedPageCtx)) return false;
    if (bufferedPageCtx.__t !== BufferedPageContextDiscriminant) return false;
    // ensure obj has all the keys we expect, and none we don't.
    for(var k in bufferedPageCtx){
        if (!BUFFERED_PAGE_CONTEXT_KEYS.includes(k)) return false;
    }
    return true;
}
//  Legacy logic: we are we appending search parameters to the canonical URL -- I guess the canonical URL is  "not canonical enough" (lol)
var createCanonicalURL = function(canonicalUrl, searchParams) {
    return canonicalUrl.indexOf("?") > -1 ? canonicalUrl : canonicalUrl + searchParams;
};
/**
 * Strips hash from URL.
 * http://www.segment.local#test -> http://www.segment.local
 */ var removeHash = function(href) {
    var hashIdx = href.indexOf("#");
    return hashIdx === -1 ? href : href.slice(0, hashIdx);
};
var parseCanonicalPath = function(canonicalUrl) {
    try {
        return new URL(canonicalUrl).pathname;
    } catch (_e) {
        // this is classic behavior -- we assume that if the canonical URL is invalid, it's a raw path.
        return canonicalUrl[0] === "/" ? canonicalUrl : "/" + canonicalUrl;
    }
};
var createPageContext = function(_a) {
    var canonicalUrl = _a.c, pathname = _a.p, search = _a.s, url = _a.u, referrer = _a.r, title = _a.t;
    var newPath = canonicalUrl ? parseCanonicalPath(canonicalUrl) : pathname;
    var newUrl = canonicalUrl ? createCanonicalURL(canonicalUrl, search) : removeHash(url);
    return {
        path: newPath,
        referrer: referrer,
        search: search,
        title: title,
        url: newUrl
    };
};
var getDefaultBufferedPageContext = function() {
    var c = document.querySelector("link[rel='canonical']");
    return createBufferedPageContext(location.href, c && c.getAttribute("href") || undefined, location.search, location.pathname, document.title, document.referrer);
};
var getDefaultPageContext = function() {
    return createPageContext(getDefaultBufferedPageContext());
};

},{"@segment/analytics-core":"7b8vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IC8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPageContext", ()=>addPageContext);
var _tslib = require("tslib");
var _pick = require("../../lib/pick");
var _getPageContext = require("./get-page-context");
var addPageContext = function(event, pageCtx) {
    if (pageCtx === void 0) pageCtx = (0, _getPageContext.getDefaultPageContext)();
    var evtCtx = event.context; // Context should be set earlier in the flow
    var pageContextFromEventProps;
    if (event.type === "page") {
        pageContextFromEventProps = event.properties && (0, _pick.pick)(event.properties, Object.keys(pageCtx));
        event.properties = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, pageCtx), event.properties), event.name ? {
            name: event.name
        } : {});
    }
    evtCtx.page = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, pageCtx), pageContextFromEventProps), evtCtx.page);
};

},{"tslib":"lRdW5","../../lib/pick":"b898T","./get-page-context":"9JYGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b898T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @example
 * pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])
 * => { 'a': 1, 'c': 3 }
 */ parcelHelpers.export(exports, "pick", ()=>pick);
var _tslib = require("tslib");
function pick(object, keys) {
    return Object.assign.apply(Object, (0, _tslib.__spreadArray)([
        {}
    ], keys.map(function(key) {
        var _a;
        if (object && Object.prototype.hasOwnProperty.call(object, key)) return _a = {}, _a[key] = object[key], _a;
    }), false));
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJWiR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventQueue", ()=>EventQueue);
var _tslib = require("tslib");
var _persisted = require("../../lib/priority-queue/persisted");
var _analyticsCore = require("@segment/analytics-core");
var _connection = require("../connection");
var EventQueue = /** @class */ function(_super) {
    (0, _tslib.__extends)(EventQueue, _super);
    function EventQueue(nameOrQueue) {
        return _super.call(this, typeof nameOrQueue === "string" ? new (0, _persisted.PersistedPriorityQueue)(4, nameOrQueue) : nameOrQueue) || this;
    }
    EventQueue.prototype.flush = function() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                if ((0, _connection.isOffline)()) return [
                    2 /*return*/ ,
                    []
                ];
                return [
                    2 /*return*/ ,
                    _super.prototype.flush.call(this)
                ];
            });
        });
    };
    return EventQueue;
}((0, _analyticsCore.CoreEventQueue));

},{"tslib":"lRdW5","../../lib/priority-queue/persisted":"iSc7g","@segment/analytics-core":"7b8vz","../connection":"cltJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSc7g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PersistedPriorityQueue", ()=>PersistedPriorityQueue);
var _tslib = require("tslib");
var _ = require(".");
var _context = require("../../core/context");
var _environment = require("../../core/environment");
var loc = {
    getItem: function() {},
    setItem: function() {},
    removeItem: function() {}
};
try {
    loc = (0, _environment.isBrowser)() && window.localStorage ? window.localStorage : loc;
} catch (err) {
    console.warn("Unable to access localStorage", err);
}
function persisted(key) {
    var items = loc.getItem(key);
    return (items ? JSON.parse(items) : []).map(function(p) {
        return new (0, _context.Context)(p.event, p.id);
    });
}
function persistItems(key, items) {
    var existing = persisted(key);
    var all = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], items, true), existing, true);
    var merged = all.reduce(function(acc, item) {
        var _a;
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, acc), (_a = {}, _a[item.id] = item, _a));
    }, {});
    loc.setItem(key, JSON.stringify(Object.values(merged)));
}
function seen(key) {
    var stored = loc.getItem(key);
    return stored ? JSON.parse(stored) : {};
}
function persistSeen(key, memory) {
    var stored = seen(key);
    loc.setItem(key, JSON.stringify((0, _tslib.__assign)((0, _tslib.__assign)({}, stored), memory)));
}
function remove(key) {
    loc.removeItem(key);
}
var now = function() {
    return new Date().getTime();
};
function mutex(key, onUnlock, attempt) {
    if (attempt === void 0) attempt = 0;
    var lockTimeout = 50;
    var lockKey = "persisted-queue:v1:".concat(key, ":lock");
    var expired = function(lock) {
        return new Date().getTime() > lock;
    };
    var rawLock = loc.getItem(lockKey);
    var lock = rawLock ? JSON.parse(rawLock) : null;
    var allowed = lock === null || expired(lock);
    if (allowed) {
        loc.setItem(lockKey, JSON.stringify(now() + lockTimeout));
        onUnlock();
        loc.removeItem(lockKey);
        return;
    }
    if (!allowed && attempt < 3) setTimeout(function() {
        mutex(key, onUnlock, attempt + 1);
    }, lockTimeout);
    else console.error("Unable to retrieve lock");
}
var PersistedPriorityQueue = /** @class */ function(_super) {
    (0, _tslib.__extends)(PersistedPriorityQueue, _super);
    function PersistedPriorityQueue(maxAttempts, key) {
        var _this = _super.call(this, maxAttempts, []) || this;
        var itemsKey = "persisted-queue:v1:".concat(key, ":items");
        var seenKey = "persisted-queue:v1:".concat(key, ":seen");
        var saved = [];
        var lastSeen = {};
        mutex(key, function() {
            try {
                saved = persisted(itemsKey);
                lastSeen = seen(seenKey);
                remove(itemsKey);
                remove(seenKey);
                _this.queue = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], saved, true), _this.queue, true);
                _this.seen = (0, _tslib.__assign)((0, _tslib.__assign)({}, lastSeen), _this.seen);
            } catch (err) {
                console.error(err);
            }
        });
        window.addEventListener("pagehide", function() {
            // we deliberately want to use the less powerful 'pagehide' API to only persist on events where the analytics instance gets destroyed, and not on tab away.
            if (_this.todo > 0) {
                var items_1 = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], _this.queue, true), _this.future, true);
                try {
                    mutex(key, function() {
                        persistItems(itemsKey, items_1);
                        persistSeen(seenKey, _this.seen);
                    });
                } catch (err) {
                    console.error(err);
                }
            }
        });
        return _this;
    }
    return PersistedPriorityQueue;
}((0, _.PriorityQueue));

},{"tslib":"lRdW5",".":"boWrR","../../core/context":"b85Be","../../core/environment":"2R1Ot","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boWrR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PriorityQueue", ()=>(0, _analyticsCore.PriorityQueue));
parcelHelpers.export(exports, "ON_REMOVE_FROM_FUTURE", ()=>(0, _analyticsCore.ON_REMOVE_FROM_FUTURE));
var _analyticsCore = require("@segment/analytics-core");

},{"@segment/analytics-core":"7b8vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTuJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User);
parcelHelpers.export(exports, "Group", ()=>Group);
var _tslib = require("tslib");
var _uuid = require("@lukeed/uuid");
var _bindAll = require("../../lib/bind-all");
var _bindAllDefault = parcelHelpers.interopDefault(_bindAll);
var _storage = require("../storage");
var defaults = {
    persist: true,
    cookie: {
        key: "ajs_user_id",
        oldKey: "ajs_user"
    },
    localStorage: {
        key: "ajs_user_traits"
    }
};
var User = /** @class */ function() {
    function User(options, cookieOptions) {
        if (options === void 0) options = defaults;
        var _this = this;
        var _a, _b, _c, _d;
        this.options = {};
        this.id = function(id) {
            if (_this.options.disable) return null;
            var prevId = _this.identityStore.getAndSync(_this.idKey);
            if (id !== undefined) {
                _this.identityStore.set(_this.idKey, id);
                var changingIdentity = id !== prevId && prevId !== null && id !== null;
                if (changingIdentity) _this.anonymousId(null);
            }
            var retId = _this.identityStore.getAndSync(_this.idKey);
            if (retId) return retId;
            var retLeg = _this.legacyUserStore.get(defaults.cookie.oldKey);
            return retLeg ? typeof retLeg === "object" ? retLeg.id : retLeg : null;
        };
        this.anonymousId = function(id) {
            var _a, _b;
            if (_this.options.disable) return null;
            if (id === undefined) {
                var val = (_a = _this.identityStore.getAndSync(_this.anonKey)) !== null && _a !== void 0 ? _a : (_b = _this.legacySIO()) === null || _b === void 0 ? void 0 : _b[0];
                if (val) return val;
            }
            if (id === null) {
                _this.identityStore.set(_this.anonKey, null);
                return _this.identityStore.getAndSync(_this.anonKey);
            }
            _this.identityStore.set(_this.anonKey, id !== null && id !== void 0 ? id : (0, _uuid.v4)());
            return _this.identityStore.getAndSync(_this.anonKey);
        };
        this.traits = function(traits) {
            var _a;
            if (_this.options.disable) return;
            if (traits === null) traits = {};
            if (traits) _this.traitsStore.set(_this.traitsKey, traits !== null && traits !== void 0 ? traits : {});
            return (_a = _this.traitsStore.get(_this.traitsKey)) !== null && _a !== void 0 ? _a : {};
        };
        this.options = (0, _tslib.__assign)((0, _tslib.__assign)({}, defaults), options);
        this.cookieOptions = cookieOptions;
        this.idKey = (_b = (_a = options.cookie) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : defaults.cookie.key;
        this.traitsKey = (_d = (_c = options.localStorage) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : defaults.localStorage.key;
        this.anonKey = "ajs_anonymous_id";
        this.identityStore = this.createStorage(this.options, cookieOptions);
        // using only cookies for legacy user store
        this.legacyUserStore = this.createStorage(this.options, cookieOptions, function(s) {
            return s === (0, _storage.StoreType).Cookie;
        });
        // using only localStorage / memory for traits store
        this.traitsStore = this.createStorage(this.options, cookieOptions, function(s) {
            return s !== (0, _storage.StoreType).Cookie;
        });
        var legacyUser = this.legacyUserStore.get(defaults.cookie.oldKey);
        if (legacyUser && typeof legacyUser === "object") {
            legacyUser.id && this.id(legacyUser.id);
            legacyUser.traits && this.traits(legacyUser.traits);
        }
        (0, _bindAllDefault.default)(this);
    }
    User.prototype.legacySIO = function() {
        var val = this.legacyUserStore.get("_sio");
        if (!val) return null;
        var _a = val.split("----"), anon = _a[0], user = _a[1];
        return [
            anon,
            user
        ];
    };
    User.prototype.identify = function(id, traits) {
        if (this.options.disable) return;
        traits = traits !== null && traits !== void 0 ? traits : {};
        var currentId = this.id();
        if (currentId === null || currentId === id) traits = (0, _tslib.__assign)((0, _tslib.__assign)({}, this.traits()), traits);
        if (id) this.id(id);
        this.traits(traits);
    };
    User.prototype.logout = function() {
        this.anonymousId(null);
        this.id(null);
        this.traits({});
    };
    User.prototype.reset = function() {
        this.logout();
        this.identityStore.clear(this.idKey);
        this.identityStore.clear(this.anonKey);
        this.traitsStore.clear(this.traitsKey);
    };
    User.prototype.load = function() {
        return new User(this.options, this.cookieOptions);
    };
    User.prototype.save = function() {
        return true;
    };
    /**
     * Creates the right storage system applying all the user options, cookie options and particular filters
     * @param options UserOptions
     * @param cookieOpts CookieOptions
     * @param filterStores filter function to apply to any StoreTypes (skipped if options specify using a custom storage)
     * @returns a Storage object
     */ User.prototype.createStorage = function(options, cookieOpts, filterStores) {
        var stores = [
            (0, _storage.StoreType).LocalStorage,
            (0, _storage.StoreType).Cookie,
            (0, _storage.StoreType).Memory
        ];
        // If disabled we won't have any storage functionality
        if (options.disable) return new (0, _storage.UniversalStorage)([]);
        // If persistance is disabled we will always fallback to Memory Storage
        if (!options.persist) return new (0, _storage.UniversalStorage)([
            new (0, _storage.MemoryStorage)()
        ]);
        if (options.storage !== undefined && options.storage !== null) {
            if ((0, _storage.isArrayOfStoreType)(options.storage)) // If the user only specified order of stores we will still apply filters and transformations e.g. not using localStorage if localStorageFallbackDisabled
            stores = options.storage.stores;
        }
        // Disable LocalStorage
        if (options.localStorageFallbackDisabled) stores = stores.filter(function(s) {
            return s !== (0, _storage.StoreType).LocalStorage;
        });
        // Apply Additional filters
        if (filterStores) stores = stores.filter(filterStores);
        return new (0, _storage.UniversalStorage)((0, _storage.initializeStorages)((0, _storage.applyCookieOptions)(stores, cookieOpts)));
    };
    User.defaults = defaults;
    return User;
}();
var groupDefaults = {
    persist: true,
    cookie: {
        key: "ajs_group_id"
    },
    localStorage: {
        key: "ajs_group_properties"
    }
};
var Group = /** @class */ function(_super) {
    (0, _tslib.__extends)(Group, _super);
    function Group(options, cookie) {
        if (options === void 0) options = groupDefaults;
        var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, groupDefaults), options), cookie) || this;
        _this.anonymousId = function(_id) {
            return undefined;
        };
        (0, _bindAllDefault.default)(_this);
        return _this;
    }
    return Group;
}(User);

},{"tslib":"lRdW5","@lukeed/uuid":"eajWy","../../lib/bind-all":"3yu9n","../storage":"h0qk3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yu9n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bindAll);
function bindAll(obj) {
    var proto = obj.constructor.prototype;
    for(var _i = 0, _a = Object.getOwnPropertyNames(proto); _i < _a.length; _i++){
        var key = _a[_i];
        if (key !== "constructor") {
            var desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key);
            if (!!desc && typeof desc.value === "function") obj[key] = obj[key].bind(obj);
        }
    }
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0qk3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates multiple storage systems from an array of StoreType and options
 * @param args StoreType and options
 * @returns Storage array
 */ parcelHelpers.export(exports, "initializeStorages", ()=>initializeStorages);
/**
 * Injects the CookieOptions into a the arguments for initializeStorage
 * @param storeTypes list of storeType
 * @param cookieOptions cookie Options
 * @returns arguments for initializeStorage
 */ parcelHelpers.export(exports, "applyCookieOptions", ()=>applyCookieOptions);
var _cookieStorage = require("./cookieStorage");
var _localStorage = require("./localStorage");
var _memoryStorage = require("./memoryStorage");
var _settings = require("./settings");
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
parcelHelpers.exportAll(_localStorage, exports);
parcelHelpers.exportAll(_cookieStorage, exports);
parcelHelpers.exportAll(_memoryStorage, exports);
var _universalStorage = require("./universalStorage");
parcelHelpers.exportAll(_universalStorage, exports);
parcelHelpers.exportAll(_settings, exports);
function initializeStorages(args) {
    var storages = args.map(function(s) {
        var type;
        var settings;
        if ((0, _settings.isStoreTypeWithSettings)(s)) {
            type = s.name;
            settings = s.settings;
        } else type = s;
        switch(type){
            case (0, _types.StoreType).Cookie:
                return new (0, _cookieStorage.CookieStorage)(settings);
            case (0, _types.StoreType).LocalStorage:
                return new (0, _localStorage.LocalStorage)();
            case (0, _types.StoreType).Memory:
                return new (0, _memoryStorage.MemoryStorage)();
            default:
                throw new Error("Unknown Store Type: ".concat(s));
        }
    });
    return storages;
}
function applyCookieOptions(storeTypes, cookieOptions) {
    return storeTypes.map(function(s) {
        if (cookieOptions && s === (0, _types.StoreType).Cookie) return {
            name: s,
            settings: cookieOptions
        };
        return s;
    });
}

},{"./cookieStorage":"ekUun","./localStorage":"4nAPm","./memoryStorage":"aTbJL","./settings":"gcEfM","./types":"4PRpU","./universalStorage":"wiwaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekUun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CookieStorage", ()=>CookieStorage);
var _tslib = require("tslib");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _tld = require("../user/tld");
var ONE_YEAR = 365;
/**
 * Data storage using browser cookies
 */ var CookieStorage = /** @class */ function() {
    function CookieStorage(options) {
        if (options === void 0) options = CookieStorage.defaults;
        this.options = (0, _tslib.__assign)((0, _tslib.__assign)({}, CookieStorage.defaults), options);
    }
    Object.defineProperty(CookieStorage, "defaults", {
        get: function() {
            return {
                maxage: ONE_YEAR,
                domain: (0, _tld.tld)(window.location.href),
                path: "/",
                sameSite: "Lax"
            };
        },
        enumerable: false,
        configurable: true
    });
    CookieStorage.prototype.opts = function() {
        return {
            sameSite: this.options.sameSite,
            expires: this.options.maxage,
            domain: this.options.domain,
            path: this.options.path,
            secure: this.options.secure
        };
    };
    CookieStorage.prototype.get = function(key) {
        var _a;
        try {
            var value = (0, _jsCookieDefault.default).get(key);
            if (value === undefined || value === null) return null;
            try {
                return (_a = JSON.parse(value)) !== null && _a !== void 0 ? _a : null;
            } catch (e) {
                return value !== null && value !== void 0 ? value : null;
            }
        } catch (e) {
            return null;
        }
    };
    CookieStorage.prototype.set = function(key, value) {
        if (typeof value === "string") (0, _jsCookieDefault.default).set(key, value, this.opts());
        else if (value === null) (0, _jsCookieDefault.default).remove(key, this.opts());
        else (0, _jsCookieDefault.default).set(key, JSON.stringify(value), this.opts());
    };
    CookieStorage.prototype.remove = function(key) {
        return (0, _jsCookieDefault.default).remove(key, this.opts());
    };
    return CookieStorage;
}();

},{"tslib":"lRdW5","js-cookie":"c8bBu","../user/tld":"3PULl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === "undefined") return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += "; " + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === "undefined" || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split("=");
                var value = parts.slice(1).join("=");
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {}
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, "", assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: "/"
    });
    /* eslint-enable no-var */ return api;
});

},{}],"3PULl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tld", ()=>tld);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
/**
 * Levels returns all levels of the given url.
 *
 * @param {string} url
 * @return {Array}
 * @api public
 */ function levels(url) {
    var host = url.hostname;
    var parts = host.split(".");
    var last = parts[parts.length - 1];
    var levels = [];
    // Ip address.
    if (parts.length === 4 && parseInt(last, 10) > 0) return levels;
    // Localhost.
    if (parts.length <= 1) return levels;
    // Create levels.
    for(var i = parts.length - 2; i >= 0; --i)levels.push(parts.slice(i).join("."));
    return levels;
}
function parseUrl(url) {
    try {
        return new URL(url);
    } catch (_a) {
        return;
    }
}
function tld(url) {
    var parsedUrl = parseUrl(url);
    if (!parsedUrl) return;
    var lvls = levels(parsedUrl);
    // Lookup the real top level one.
    for(var i = 0; i < lvls.length; ++i){
        var cname = "__tld__";
        var domain = lvls[i];
        var opts = {
            domain: "." + domain
        };
        try {
            // cookie access throw an error if the library is ran inside a sandboxed environment (e.g. sandboxed iframe)
            (0, _jsCookieDefault.default).set(cname, "1", opts);
            if ((0, _jsCookieDefault.default).get(cname)) {
                (0, _jsCookieDefault.default).remove(cname, opts);
                return domain;
            }
        } catch (_) {
            return;
        }
    }
}

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nAPm":[function(require,module,exports) {
/**
 * Data storage using browser's localStorage
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalStorage", ()=>LocalStorage);
var LocalStorage = /** @class */ function() {
    function LocalStorage() {}
    LocalStorage.prototype.localStorageWarning = function(key, state) {
        console.warn("Unable to access ".concat(key, ", localStorage may be ").concat(state));
    };
    LocalStorage.prototype.get = function(key) {
        var _a;
        try {
            var val = localStorage.getItem(key);
            if (val === null) return null;
            try {
                return (_a = JSON.parse(val)) !== null && _a !== void 0 ? _a : null;
            } catch (e) {
                return val !== null && val !== void 0 ? val : null;
            }
        } catch (err) {
            this.localStorageWarning(key, "unavailable");
            return null;
        }
    };
    LocalStorage.prototype.set = function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (_a) {
            this.localStorageWarning(key, "full");
        }
    };
    LocalStorage.prototype.remove = function(key) {
        try {
            return localStorage.removeItem(key);
        } catch (err) {
            this.localStorageWarning(key, "unavailable");
        }
    };
    return LocalStorage;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTbJL":[function(require,module,exports) {
/**
 * Data Storage using in memory object
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryStorage", ()=>MemoryStorage);
var MemoryStorage = /** @class */ function() {
    function MemoryStorage() {
        this.cache = {};
    }
    MemoryStorage.prototype.get = function(key) {
        var _a;
        return (_a = this.cache[key]) !== null && _a !== void 0 ? _a : null;
    };
    MemoryStorage.prototype.set = function(key, value) {
        this.cache[key] = value;
    };
    MemoryStorage.prototype.remove = function(key) {
        delete this.cache[key];
    };
    return MemoryStorage;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcEfM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayOfStoreType", ()=>isArrayOfStoreType);
parcelHelpers.export(exports, "isStoreTypeWithSettings", ()=>isStoreTypeWithSettings);
var _types = require("./types");
function isArrayOfStoreType(s) {
    return s && s.stores && Array.isArray(s.stores) && s.stores.every(function(e) {
        return Object.values((0, _types.StoreType)).includes(e);
    });
}
function isStoreTypeWithSettings(s) {
    return typeof s === "object" && s.name !== undefined;
}

},{"./types":"4PRpU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PRpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreType", ()=>StoreType);
var StoreType = {
    Cookie: "cookie",
    LocalStorage: "localStorage",
    Memory: "memory"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wiwaS":[function(require,module,exports) {
// not adding to private method because those method names do not get minified atm, and does not use 'this'
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniversalStorage", ()=>UniversalStorage);
var _logStoreKeyError = function(store, action, key, err) {
    console.warn("".concat(store.constructor.name, ": Can't ").concat(action, ' key "').concat(key, '" | Err: ').concat(err));
};
/**
 * Uses multiple storages in a priority list to get/set values in the order they are specified.
 */ var UniversalStorage = /** @class */ function() {
    function UniversalStorage(stores) {
        this.stores = stores;
    }
    UniversalStorage.prototype.get = function(key) {
        var val = null;
        for(var _i = 0, _a = this.stores; _i < _a.length; _i++){
            var store = _a[_i];
            try {
                val = store.get(key);
                if (val !== undefined && val !== null) return val;
            } catch (e) {
                _logStoreKeyError(store, "get", key, e);
            }
        }
        return null;
    };
    UniversalStorage.prototype.set = function(key, value) {
        this.stores.forEach(function(store) {
            try {
                store.set(key, value);
            } catch (e) {
                _logStoreKeyError(store, "set", key, e);
            }
        });
    };
    UniversalStorage.prototype.clear = function(key) {
        this.stores.forEach(function(store) {
            try {
                store.remove(key);
            } catch (e) {
                _logStoreKeyError(store, "remove", key, e);
            }
        });
    };
    /*
      This is to support few scenarios where:
      - value exist in one of the stores ( as a result of other stores being cleared from browser ) and we want to resync them
      - read values in AJS 1.0 format ( for customers after 1.0 --> 2.0 migration ) and then re-write them in AJS 2.0 format
    */ UniversalStorage.prototype.getAndSync = function(key) {
        var val = this.get(key);
        // legacy behavior, getAndSync can change the type of a value from number to string (AJS 1.0 stores numerical values as a number)
        var coercedValue = typeof val === "number" ? val.toString() : val;
        this.set(key, coercedValue);
        return coercedValue;
    };
    return UniversalStorage;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gI64D":[function(require,module,exports) {
/**
 * Stores the global window analytics key
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets the global analytics/buffer
 * @param key name of the window property where the buffer is stored (default: analytics)
 * @returns AnalyticsSnippet
 */ parcelHelpers.export(exports, "getGlobalAnalytics", ()=>getGlobalAnalytics);
/**
 * Replaces the global window key for the analytics/buffer object
 * @param key key name
 */ parcelHelpers.export(exports, "setGlobalAnalyticsKey", ()=>setGlobalAnalyticsKey);
/**
 * Sets the global analytics object
 * @param analytics analytics snippet
 */ parcelHelpers.export(exports, "setGlobalAnalytics", ()=>setGlobalAnalytics);
var _globalAnalyticsKey = "analytics";
function getGlobalAnalytics() {
    return window[_globalAnalyticsKey];
}
function setGlobalAnalyticsKey(key) {
    _globalAnalyticsKey = key;
}
function setGlobalAnalytics(analytics) {
    window[_globalAnalyticsKey] = analytics;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeTkA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flushAddSourceMiddleware", ()=>flushAddSourceMiddleware);
parcelHelpers.export(exports, "flushOn", ()=>flushOn);
parcelHelpers.export(exports, "flushSetAnonymousID", ()=>flushSetAnonymousID);
parcelHelpers.export(exports, "flushAnalyticsCallsInNewTask", ()=>flushAnalyticsCallsInNewTask);
parcelHelpers.export(exports, "popPageContext", ()=>popPageContext);
parcelHelpers.export(exports, "hasBufferedPageContextAsLastArg", ()=>hasBufferedPageContextAsLastArg);
parcelHelpers.export(exports, "PreInitMethodCall", ()=>PreInitMethodCall);
parcelHelpers.export(exports, "PreInitMethodCallBuffer", ()=>PreInitMethodCallBuffer);
/**
 *  Call method and mark as "called"
 *  This function should never throw an error
 */ parcelHelpers.export(exports, "callAnalyticsMethod", ()=>callAnalyticsMethod);
parcelHelpers.export(exports, "AnalyticsBuffered", ()=>AnalyticsBuffered);
var _tslib = require("tslib");
var _isThenable = require("../../lib/is-thenable");
var _version = require("../../generated/version");
var _globalAnalyticsHelper = require("../../lib/global-analytics-helper");
var _page = require("../page");
var flushSyncAnalyticsCalls = function(name, analytics, buffer) {
    buffer.getCalls(name).forEach(function(c) {
        // While the underlying methods are synchronous, the callAnalyticsMethod returns a promise,
        // which normalizes success and error states between async and non-async methods, with no perf penalty.
        callAnalyticsMethod(analytics, c).catch(console.error);
    });
};
var flushAddSourceMiddleware = function(analytics, buffer) {
    return (0, _tslib.__awaiter)(void 0, void 0, void 0, function() {
        var _i, _a, c;
        return (0, _tslib.__generator)(this, function(_b) {
            switch(_b.label){
                case 0:
                    _i = 0, _a = buffer.getCalls("addSourceMiddleware");
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [
                        3 /*break*/ ,
                        4
                    ];
                    c = _a[_i];
                    return [
                        4 /*yield*/ ,
                        callAnalyticsMethod(analytics, c).catch(console.error)
                    ];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [
                        3 /*break*/ ,
                        1
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
var flushOn = flushSyncAnalyticsCalls.bind(undefined, "on");
var flushSetAnonymousID = flushSyncAnalyticsCalls.bind(undefined, "setAnonymousId");
var flushAnalyticsCallsInNewTask = function(analytics, buffer) {
    buffer.toArray().forEach(function(m) {
        setTimeout(function() {
            callAnalyticsMethod(analytics, m).catch(console.error);
        }, 0);
    });
};
var popPageContext = function(args) {
    if (hasBufferedPageContextAsLastArg(args)) {
        var ctx = args.pop();
        return (0, _page.createPageContext)(ctx);
    }
};
var hasBufferedPageContextAsLastArg = function(args) {
    var lastArg = args[args.length - 1];
    return (0, _page.isBufferedPageContext)(lastArg);
};
/**
 *  Represents a buffered method call that occurred before initialization.
 */ var PreInitMethodCall = /** @class */ function() {
    function PreInitMethodCall(method, args, resolve, reject) {
        if (resolve === void 0) resolve = function() {};
        if (reject === void 0) reject = console.error;
        this.method = method;
        this.resolve = resolve;
        this.reject = reject;
        this.called = false;
        this.args = args;
    }
    return PreInitMethodCall;
}();
/**
 *  Represents any and all the buffered method calls that occurred before initialization.
 */ var PreInitMethodCallBuffer = /** @class */ function() {
    function PreInitMethodCallBuffer() {
        var calls = [];
        for(var _i = 0; _i < arguments.length; _i++)calls[_i] = arguments[_i];
        this._callMap = {};
        this.push.apply(this, calls);
    }
    Object.defineProperty(PreInitMethodCallBuffer.prototype, "calls", {
        /**
         * Pull any buffered method calls from the window object, and use them to hydrate the instance buffer.
         */ get: function() {
            this._pushSnippetWindowBuffer();
            return this._callMap;
        },
        set: function(calls) {
            this._callMap = calls;
        },
        enumerable: false,
        configurable: true
    });
    PreInitMethodCallBuffer.prototype.getCalls = function(methodName) {
        var _a;
        return (_a = this.calls[methodName]) !== null && _a !== void 0 ? _a : [];
    };
    PreInitMethodCallBuffer.prototype.push = function() {
        var _this = this;
        var calls = [];
        for(var _i = 0; _i < arguments.length; _i++)calls[_i] = arguments[_i];
        calls.forEach(function(call) {
            var eventsExpectingPageContext = [
                "track",
                "screen",
                "alias",
                "group",
                "page",
                "identify"
            ];
            if (eventsExpectingPageContext.includes(call.method) && !hasBufferedPageContextAsLastArg(call.args)) call.args = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], call.args, true), [
                (0, _page.getDefaultBufferedPageContext)()
            ], false);
            if (_this.calls[call.method]) _this.calls[call.method].push(call);
            else _this.calls[call.method] = [
                call
            ];
        });
    };
    PreInitMethodCallBuffer.prototype.clear = function() {
        // clear calls in the global snippet buffered array.
        this._pushSnippetWindowBuffer();
        // clear calls in this instance
        this.calls = {};
    };
    PreInitMethodCallBuffer.prototype.toArray = function() {
        var _a;
        return (_a = []).concat.apply(_a, Object.values(this.calls));
    };
    /**
     * Fetch the buffered method calls from the window object,
     * normalize them, and use them to hydrate the buffer.
     * This removes existing buffered calls from the window object.
     */ PreInitMethodCallBuffer.prototype._pushSnippetWindowBuffer = function() {
        var wa = (0, _globalAnalyticsHelper.getGlobalAnalytics)();
        if (!Array.isArray(wa)) return undefined;
        var buffered = wa.splice(0, wa.length);
        var calls = buffered.map(function(_a) {
            var methodName = _a[0], args = _a.slice(1);
            return new PreInitMethodCall(methodName, args);
        });
        this.push.apply(this, calls);
    };
    return PreInitMethodCallBuffer;
}();
function callAnalyticsMethod(analytics, call) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var result, err_1;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    if (call.called) return [
                        2 /*return*/ ,
                        undefined
                    ];
                    call.called = true;
                    result = analytics[call.method].apply(analytics, call.args);
                    if (!(0, _isThenable.isThenable)(result)) return [
                        3 /*break*/ ,
                        2
                    ];
                    // do not defer for non-async methods
                    return [
                        4 /*yield*/ ,
                        result
                    ];
                case 1:
                    // do not defer for non-async methods
                    _a.sent();
                    _a.label = 2;
                case 2:
                    call.resolve(result);
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    err_1 = _a.sent();
                    call.reject(err_1);
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
var AnalyticsBuffered = /** @class */ function() {
    function AnalyticsBuffered(loader) {
        var _this = this;
        this.trackSubmit = this._createMethod("trackSubmit");
        this.trackClick = this._createMethod("trackClick");
        this.trackLink = this._createMethod("trackLink");
        this.pageView = this._createMethod("pageview");
        this.identify = this._createMethod("identify");
        this.reset = this._createMethod("reset");
        this.group = this._createMethod("group");
        this.track = this._createMethod("track");
        this.ready = this._createMethod("ready");
        this.alias = this._createMethod("alias");
        this.debug = this._createChainableMethod("debug");
        this.page = this._createMethod("page");
        this.once = this._createChainableMethod("once");
        this.off = this._createChainableMethod("off");
        this.on = this._createChainableMethod("on");
        this.addSourceMiddleware = this._createMethod("addSourceMiddleware");
        this.setAnonymousId = this._createMethod("setAnonymousId");
        this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware");
        this.screen = this._createMethod("screen");
        this.register = this._createMethod("register");
        this.deregister = this._createMethod("deregister");
        this.user = this._createMethod("user");
        this.VERSION = (0, _version.version);
        this._preInitBuffer = new PreInitMethodCallBuffer();
        this._promise = loader(this._preInitBuffer);
        this._promise.then(function(_a) {
            var ajs = _a[0], ctx = _a[1];
            _this.instance = ajs;
            _this.ctx = ctx;
        }).catch(function() {
        // intentionally do nothing...
        // this result of this promise will be caught by the 'catch' block on this class.
        });
    }
    AnalyticsBuffered.prototype.then = function() {
        var _a;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (_a = this._promise).then.apply(_a, args);
    };
    AnalyticsBuffered.prototype.catch = function() {
        var _a;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (_a = this._promise).catch.apply(_a, args);
    };
    AnalyticsBuffered.prototype.finally = function() {
        var _a;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (_a = this._promise).finally.apply(_a, args);
    };
    AnalyticsBuffered.prototype._createMethod = function(methodName) {
        var _this = this;
        return function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (_this.instance) {
                var result = (_a = _this.instance)[methodName].apply(_a, args);
                return Promise.resolve(result);
            }
            return new Promise(function(resolve, reject) {
                _this._preInitBuffer.push(new PreInitMethodCall(methodName, args, resolve, reject));
            });
        };
    };
    /**
     *  These are for methods that where determining when the method gets "flushed" is not important.
     *  These methods will resolve when analytics is fully initialized, and return type (other than Analytics)will not be available.
     */ AnalyticsBuffered.prototype._createChainableMethod = function(methodName) {
        var _this = this;
        return function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            if (_this.instance) {
                (_a = _this.instance)[methodName].apply(_a, args);
                return _this;
            } else _this._preInitBuffer.push(new PreInitMethodCall(methodName, args));
            return _this;
        };
    };
    return AnalyticsBuffered;
}();

},{"tslib":"lRdW5","../../lib/is-thenable":"gcNFc","../../generated/version":"iyRSI","../../lib/global-analytics-helper":"gI64D","../page":"9nxvH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcNFc":[function(require,module,exports) {
/**
 *  Check if  thenable
 *  (instanceof Promise doesn't respect realms)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isThenable", ()=>isThenable);
var isThenable = function(value) {
    return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Csb1":[function(require,module,exports) {
module.exports = require("20779d5d9b55f017")(require("30be74ab4f563d3f").getBundleURL("y9OjY") + "auto-track.5df541a8.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("416Fw"));

},{"20779d5d9b55f017":"61B45","30be74ab4f563d3f":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fITRQ":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("dqLkl"));

},{}],"icxOo":[function(require,module,exports) {
module.exports = require("224c38fbec831578")(require("7e0a6c847e1eaa53").getBundleURL("y9OjY") + "query-string.b9bb8e0d.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("1yG0Q"));

},{"224c38fbec831578":"61B45","7e0a6c847e1eaa53":"lgJ39"}],"6htfc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadLegacySettings", ()=>loadLegacySettings);
parcelHelpers.export(exports, "AnalyticsBrowser", ()=>AnalyticsBrowser);
var _tslib = require("tslib");
var _getProcessEnv = require("../lib/get-process-env");
var _parseCdn = require("../lib/parse-cdn");
var _fetch = require("../lib/fetch");
var _analytics = require("../core/analytics");
var _context = require("../core/context");
var _mergedOptions = require("../lib/merged-options");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
var _envEnrichment = require("../plugins/env-enrichment");
var _remoteLoader = require("../plugins/remote-loader");
var _segmentio = require("../plugins/segmentio");
var _validation = require("../plugins/validation");
var _buffer = require("../core/buffer");
var _inspector = require("../core/inspector");
var _stats = require("../core/stats");
var _globalAnalyticsHelper = require("../lib/global-analytics-helper");
function loadLegacySettings(writeKey, cdnURL) {
    var baseUrl = cdnURL !== null && cdnURL !== void 0 ? cdnURL : (0, _parseCdn.getCDN)();
    return (0, _fetch.fetch)("".concat(baseUrl, "/v1/projects/").concat(writeKey, "/settings")).then(function(res) {
        if (!res.ok) return res.text().then(function(errorResponseMessage) {
            throw new Error(errorResponseMessage);
        });
        return res.json();
    }).catch(function(err) {
        console.error(err.message);
        throw err;
    });
}
function hasLegacyDestinations(settings) {
    return (0, _getProcessEnv.getProcessEnv)().NODE_ENV !== "test" && // just one integration means segmentio
    Object.keys(settings.integrations).length > 1;
}
function hasTsubMiddleware(settings) {
    var _a, _b, _c;
    return (0, _getProcessEnv.getProcessEnv)().NODE_ENV !== "test" && ((_c = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0;
}
/**
 * With AJS classic, we allow users to call setAnonymousId before the library initialization.
 * This is important because some of the destinations will use the anonymousId during the initialization,
 * and if we set anonId afterwards, that wouldn’t impact the destination.
 *
 * Also Ensures events can be registered before library initialization.
 * This is important so users can register to 'initialize' and any events that may fire early during setup.
 */ function flushPreBuffer(analytics, buffer) {
    (0, _buffer.flushSetAnonymousID)(analytics, buffer);
    (0, _buffer.flushOn)(analytics, buffer);
}
/**
 * Finish flushing buffer and cleanup.
 */ function flushFinalBuffer(analytics, buffer) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    // Call popSnippetWindowBuffer before each flush task since there may be
                    // analytics calls during async function calls.
                    return [
                        4 /*yield*/ ,
                        (0, _buffer.flushAddSourceMiddleware)(analytics, buffer)
                    ];
                case 1:
                    // Call popSnippetWindowBuffer before each flush task since there may be
                    // analytics calls during async function calls.
                    _a.sent();
                    (0, _buffer.flushAnalyticsCallsInNewTask)(analytics, buffer);
                    // Clear buffer, just in case analytics is loaded twice; we don't want to fire events off again.
                    buffer.clear();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function registerPlugins(writeKey, legacySettings, analytics, options, pluginLikes, legacyIntegrationSources) {
    var _a, _b, _c;
    if (pluginLikes === void 0) pluginLikes = [];
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var plugins, pluginSources, tsubMiddleware, _d, legacyDestinations, _e, schemaFilter, _f, mergedSettings, remotePlugins, toRegister, shouldIgnoreSegmentio, _g, _h, ctx;
        var _this = this;
        return (0, _tslib.__generator)(this, function(_j) {
            switch(_j.label){
                case 0:
                    plugins = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function(pluginLike) {
                        return typeof pluginLike === "object";
                    });
                    pluginSources = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function(pluginLike) {
                        return typeof pluginLike === "function" && typeof pluginLike.pluginName === "string";
                    });
                    if (!hasTsubMiddleware(legacySettings)) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        require(/* webpackChunkName: "tsub-middleware" */ "9ea8eb6bdbfe24c4").then(function(mod) {
                            return mod.tsubMiddleware(legacySettings.middlewareSettings.routingRules);
                        })
                    ];
                case 1:
                    _d = _j.sent();
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 2:
                    _d = undefined;
                    _j.label = 3;
                case 3:
                    tsubMiddleware = _d;
                    if (!(hasLegacyDestinations(legacySettings) || legacyIntegrationSources.length > 0)) return [
                        3 /*break*/ ,
                        5
                    ];
                    return [
                        4 /*yield*/ ,
                        require(/* webpackChunkName: "ajs-destination" */ "f16055720f827578").then(function(mod) {
                            return mod.ajsDestinations(writeKey, legacySettings, analytics.integrations, options, tsubMiddleware, legacyIntegrationSources);
                        })
                    ];
                case 4:
                    _e = _j.sent();
                    return [
                        3 /*break*/ ,
                        6
                    ];
                case 5:
                    _e = [];
                    _j.label = 6;
                case 6:
                    legacyDestinations = _e;
                    if (!legacySettings.legacyVideoPluginsEnabled) return [
                        3 /*break*/ ,
                        8
                    ];
                    return [
                        4 /*yield*/ ,
                        require(/* webpackChunkName: "legacyVideos" */ "d548c127d8d3420b").then(function(mod) {
                            return mod.loadLegacyVideoPlugins(analytics);
                        })
                    ];
                case 7:
                    _j.sent();
                    _j.label = 8;
                case 8:
                    if (!((_a = options.plan) === null || _a === void 0 ? void 0 : _a.track)) return [
                        3 /*break*/ ,
                        10
                    ];
                    return [
                        4 /*yield*/ ,
                        require(/* webpackChunkName: "schemaFilter" */ "fd1450d99a2ec09a").then(function(mod) {
                            var _a;
                            return mod.schemaFilter((_a = options.plan) === null || _a === void 0 ? void 0 : _a.track, legacySettings);
                        })
                    ];
                case 9:
                    _f = _j.sent();
                    return [
                        3 /*break*/ ,
                        11
                    ];
                case 10:
                    _f = undefined;
                    _j.label = 11;
                case 11:
                    schemaFilter = _f;
                    mergedSettings = (0, _mergedOptions.mergedOptions)(legacySettings, options);
                    return [
                        4 /*yield*/ ,
                        (0, _remoteLoader.remoteLoader)(legacySettings, analytics.integrations, mergedSettings, options, tsubMiddleware, pluginSources).catch(function() {
                            return [];
                        })
                    ];
                case 12:
                    remotePlugins = _j.sent();
                    toRegister = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([
                        (0, _validation.validation),
                        (0, _envEnrichment.envEnrichment)
                    ], plugins, true), legacyDestinations, true), remotePlugins, true);
                    if (schemaFilter) toRegister.push(schemaFilter);
                    shouldIgnoreSegmentio = ((_b = options.integrations) === null || _b === void 0 ? void 0 : _b.All) === false && !options.integrations["Segment.io"] || options.integrations && options.integrations["Segment.io"] === false;
                    if (!!shouldIgnoreSegmentio) return [
                        3 /*break*/ ,
                        14
                    ];
                    _h = (_g = toRegister).push;
                    return [
                        4 /*yield*/ ,
                        (0, _segmentio.segmentio)(analytics, mergedSettings["Segment.io"], legacySettings.integrations)
                    ];
                case 13:
                    _h.apply(_g, [
                        _j.sent()
                    ]);
                    _j.label = 14;
                case 14:
                    return [
                        4 /*yield*/ ,
                        analytics.register.apply(analytics, toRegister)
                    ];
                case 15:
                    ctx = _j.sent();
                    if (!Object.entries((_c = legacySettings.enabledMiddleware) !== null && _c !== void 0 ? _c : {}).some(function(_a) {
                        var enabled = _a[1];
                        return enabled;
                    })) return [
                        3 /*break*/ ,
                        17
                    ];
                    return [
                        4 /*yield*/ ,
                        require(/* webpackChunkName: "remoteMiddleware" */ "fdb527abe2b6dc36").then(function(_a) {
                            var remoteMiddlewares = _a.remoteMiddlewares;
                            return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                                var middleware, promises;
                                return (0, _tslib.__generator)(this, function(_b) {
                                    switch(_b.label){
                                        case 0:
                                            return [
                                                4 /*yield*/ ,
                                                remoteMiddlewares(ctx, legacySettings, options.obfuscate)
                                            ];
                                        case 1:
                                            middleware = _b.sent();
                                            promises = middleware.map(function(mdw) {
                                                return analytics.addSourceMiddleware(mdw);
                                            });
                                            return [
                                                2 /*return*/ ,
                                                Promise.all(promises)
                                            ];
                                    }
                                });
                            });
                        })
                    ];
                case 16:
                    _j.sent();
                    _j.label = 17;
                case 17:
                    return [
                        2 /*return*/ ,
                        ctx
                    ];
            }
        });
    });
}
function loadAnalytics(settings, options, preInitBuffer) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (options === void 0) options = {};
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var legacySettings, _l, disabled, retryQueue, analytics, plugins, classicIntegrations, segmentLoadOptions, ctx, search, hash, term;
        return (0, _tslib.__generator)(this, function(_m) {
            switch(_m.label){
                case 0:
                    // return no-op analytics instance if disabled
                    if (options.disable === true) return [
                        2 /*return*/ ,
                        [
                            new (0, _analytics.NullAnalytics)(),
                            (0, _context.Context).system()
                        ]
                    ];
                    if (options.globalAnalyticsKey) (0, _globalAnalyticsHelper.setGlobalAnalyticsKey)(options.globalAnalyticsKey);
                    // this is an ugly side-effect, but it's for the benefits of the plugins that get their cdn via getCDN()
                    if (settings.cdnURL) (0, _parseCdn.setGlobalCDNUrl)(settings.cdnURL);
                    if (options.initialPageview) // capture the page context early, so it's always up-to-date
                    preInitBuffer.push(new (0, _buffer.PreInitMethodCall)("page", []));
                    if (!((_a = settings.cdnSettings) !== null && _a !== void 0)) return [
                        3 /*break*/ ,
                        1
                    ];
                    _l = _a;
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 1:
                    return [
                        4 /*yield*/ ,
                        loadLegacySettings(settings.writeKey, settings.cdnURL)
                    ];
                case 2:
                    _l = _m.sent();
                    _m.label = 3;
                case 3:
                    legacySettings = _l;
                    if (options.updateCDNSettings) legacySettings = options.updateCDNSettings(legacySettings);
                    if (!(typeof options.disable === "function")) return [
                        3 /*break*/ ,
                        5
                    ];
                    return [
                        4 /*yield*/ ,
                        options.disable(legacySettings)
                    ];
                case 4:
                    disabled = _m.sent();
                    if (disabled) return [
                        2 /*return*/ ,
                        [
                            new (0, _analytics.NullAnalytics)(),
                            (0, _context.Context).system()
                        ]
                    ];
                    _m.label = 5;
                case 5:
                    retryQueue = (_c = (_b = legacySettings.integrations["Segment.io"]) === null || _b === void 0 ? void 0 : _b.retryQueue) !== null && _c !== void 0 ? _c : true;
                    options = (0, _tslib.__assign)({
                        retryQueue: retryQueue
                    }, options);
                    analytics = new (0, _analytics.Analytics)(settings, options);
                    (0, _inspector.attachInspector)(analytics);
                    plugins = (_d = settings.plugins) !== null && _d !== void 0 ? _d : [];
                    classicIntegrations = (_e = settings.classicIntegrations) !== null && _e !== void 0 ? _e : [];
                    segmentLoadOptions = (_f = options.integrations) === null || _f === void 0 ? void 0 : _f["Segment.io"];
                    (0, _stats.Stats).initRemoteMetrics((0, _tslib.__assign)((0, _tslib.__assign)({}, legacySettings.metrics), {
                        host: (_g = segmentLoadOptions === null || segmentLoadOptions === void 0 ? void 0 : segmentLoadOptions.apiHost) !== null && _g !== void 0 ? _g : (_h = legacySettings.metrics) === null || _h === void 0 ? void 0 : _h.host,
                        protocol: segmentLoadOptions === null || segmentLoadOptions === void 0 ? void 0 : segmentLoadOptions.protocol
                    }));
                    // needs to be flushed before plugins are registered
                    flushPreBuffer(analytics, preInitBuffer);
                    return [
                        4 /*yield*/ ,
                        registerPlugins(settings.writeKey, legacySettings, analytics, options, plugins, classicIntegrations)
                    ];
                case 6:
                    ctx = _m.sent();
                    search = (_j = window.location.search) !== null && _j !== void 0 ? _j : "";
                    hash = (_k = window.location.hash) !== null && _k !== void 0 ? _k : "";
                    term = search.length ? search : hash.replace(/(?=#).*(?=\?)/, "");
                    if (!term.includes("ajs_")) return [
                        3 /*break*/ ,
                        8
                    ];
                    return [
                        4 /*yield*/ ,
                        analytics.queryString(term).catch(console.error)
                    ];
                case 7:
                    _m.sent();
                    _m.label = 8;
                case 8:
                    analytics.initialized = true;
                    analytics.emit("initialize", settings, options);
                    return [
                        4 /*yield*/ ,
                        flushFinalBuffer(analytics, preInitBuffer)
                    ];
                case 9:
                    _m.sent();
                    return [
                        2 /*return*/ ,
                        [
                            analytics,
                            ctx
                        ]
                    ];
            }
        });
    });
}
/**
 * The public browser interface for Segment Analytics
 *
 * @example
 * ```ts
 *  export const analytics = new AnalyticsBrowser()
 *  analytics.load({ writeKey: 'foo' })
 * ```
 * @link https://github.com/segmentio/analytics-next/#readme
 */ var AnalyticsBrowser = /** @class */ function(_super) {
    (0, _tslib.__extends)(AnalyticsBrowser, _super);
    function AnalyticsBrowser() {
        var _this = this;
        var _a = (0, _analyticsGenericUtils.createDeferred)(), loadStart = _a.promise, resolveLoadStart = _a.resolve;
        _this = _super.call(this, function(buffer) {
            return loadStart.then(function(_a) {
                var settings = _a[0], options = _a[1];
                return loadAnalytics(settings, options, buffer);
            });
        }) || this;
        _this._resolveLoadStart = function(settings, options) {
            return resolveLoadStart([
                settings,
                options
            ]);
        };
        return _this;
    }
    /**
     * Fully initialize an analytics instance, including:
     *
     * * Fetching settings from the segment CDN (by default).
     * * Fetching all remote destinations configured by the user (if applicable).
     * * Flushing buffered analytics events.
     * * Loading all middleware.
     *
     * Note:️  This method should only be called *once* in your application.
     *
     * @example
     * ```ts
     * export const analytics = new AnalyticsBrowser()
     * analytics.load({ writeKey: 'foo' })
     * ```
     */ AnalyticsBrowser.prototype.load = function(settings, options) {
        if (options === void 0) options = {};
        this._resolveLoadStart(settings, options);
        return this;
    };
    /**
     * Instantiates an object exposing Analytics methods.
     *
     * @example
     * ```ts
     * const ajs = AnalyticsBrowser.load({ writeKey: '<YOUR_WRITE_KEY>' })
     *
     * ajs.track("foo")
     * ...
     * ```
     */ AnalyticsBrowser.load = function(settings, options) {
        if (options === void 0) options = {};
        return new AnalyticsBrowser().load(settings, options);
    };
    AnalyticsBrowser.standalone = function(writeKey, options) {
        return AnalyticsBrowser.load({
            writeKey: writeKey
        }, options).then(function(res) {
            return res[0];
        });
    };
    return AnalyticsBrowser;
}((0, _buffer.AnalyticsBuffered));

},{"tslib":"lRdW5","../lib/get-process-env":"fKSZe","../lib/parse-cdn":"hYrg0","../lib/fetch":"48GFJ","../core/analytics":"adwSZ","../core/context":"b85Be","../lib/merged-options":"hX5N1","@segment/analytics-generic-utils":"h6A2f","../plugins/env-enrichment":"6oywO","../plugins/remote-loader":"fGN8N","../plugins/segmentio":"8tCc6","../plugins/validation":"f3pK6","../core/buffer":"aeTkA","../core/inspector":"cHH9Y","../core/stats":"3YwLm","../lib/global-analytics-helper":"gI64D","9ea8eb6bdbfe24c4":"9zc0B","f16055720f827578":"eJ4HT","d548c127d8d3420b":"iCm7q","fd1450d99a2ec09a":"7MBZz","fdb527abe2b6dc36":"hnhVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKSZe":[function(require,module,exports) {
/**
 * Returns `process.env` if it is available in the environment.
 * Always returns an object make it similarly easy to use as `process.env`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProcessEnv", ()=>getProcessEnv);
var process = require("647c41de5de3937c");
function getProcessEnv() {
    if (typeof process === "undefined" || !process.env) return {};
    return process.env;
}

},{"647c41de5de3937c":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"hYrg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setGlobalCDNUrl", ()=>setGlobalCDNUrl);
parcelHelpers.export(exports, "getCDN", ()=>getCDN);
parcelHelpers.export(exports, "getNextIntegrationsURL", ()=>getNextIntegrationsURL);
/**
 * Replaces the CDN URL in the script tag with the one from Analytics.js 1.0
 *
 * @returns the path to Analytics JS 1.0
 **/ parcelHelpers.export(exports, "getLegacyAJSPath", ()=>getLegacyAJSPath);
var _globalAnalyticsHelper = require("./global-analytics-helper");
var _embeddedWriteKey = require("./embedded-write-key");
var analyticsScriptRegex = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
var getCDNUrlFromScriptTag = function() {
    var cdn;
    var scripts = Array.prototype.slice.call(document.querySelectorAll("script"));
    scripts.forEach(function(s) {
        var _a;
        var src = (_a = s.getAttribute("src")) !== null && _a !== void 0 ? _a : "";
        var result = analyticsScriptRegex.exec(src);
        if (result && result[1]) cdn = result[1];
    });
    return cdn;
};
var _globalCDN; // set globalCDN as in-memory singleton
var getGlobalCDNUrl = function() {
    var _a;
    var result = _globalCDN !== null && _globalCDN !== void 0 ? _globalCDN : (_a = (0, _globalAnalyticsHelper.getGlobalAnalytics)()) === null || _a === void 0 ? void 0 : _a._cdn;
    return result;
};
var setGlobalCDNUrl = function(cdn) {
    var globalAnalytics = (0, _globalAnalyticsHelper.getGlobalAnalytics)();
    if (globalAnalytics) globalAnalytics._cdn = cdn;
    _globalCDN = cdn;
};
var getCDN = function() {
    var globalCdnUrl = getGlobalCDNUrl();
    if (globalCdnUrl) return globalCdnUrl;
    var cdnFromScriptTag = getCDNUrlFromScriptTag();
    if (cdnFromScriptTag) return cdnFromScriptTag;
    else // it's possible that the CDN is not found in the page because:
    // - the script is loaded through a proxy
    // - the script is removed after execution
    // in this case, we fall back to the default Segment CDN
    return "https://cdn.segment.com";
};
var getNextIntegrationsURL = function() {
    var cdn = getCDN();
    return "".concat(cdn, "/next-integrations");
};
function getLegacyAJSPath() {
    var _a, _b, _c;
    var writeKey = (_a = (0, _embeddedWriteKey.embeddedWriteKey)()) !== null && _a !== void 0 ? _a : (_b = (0, _globalAnalyticsHelper.getGlobalAnalytics)()) === null || _b === void 0 ? void 0 : _b._writeKey;
    var scripts = Array.prototype.slice.call(document.querySelectorAll("script"));
    var path = undefined;
    for(var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++){
        var s = scripts_1[_i];
        var src = (_c = s.getAttribute("src")) !== null && _c !== void 0 ? _c : "";
        var result = analyticsScriptRegex.exec(src);
        if (result && result[1]) {
            path = src;
            break;
        }
    }
    if (path) return path.replace("analytics.min.js", "analytics.classic.js");
    return "https://cdn.segment.com/analytics.js/v1/".concat(writeKey, "/analytics.classic.js");
}

},{"./global-analytics-helper":"gI64D","./embedded-write-key":"cAevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAevq":[function(require,module,exports) {
// This variable is used as an optional fallback for when customers
// host or proxy their own analytics.js.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "embeddedWriteKey", ()=>embeddedWriteKey);
try {
    window.analyticsWriteKey = "__WRITE_KEY__";
} catch (_) {
// @ eslint-disable-next-line
}
function embeddedWriteKey() {
    if (window.analyticsWriteKey === undefined) return undefined;
    // this is done so that we don't accidentally override every reference to __write_key__
    return window.analyticsWriteKey !== [
        "__",
        "WRITE",
        "_",
        "KEY",
        "__"
    ].join("") ? window.analyticsWriteKey : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hX5N1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Merge legacy settings and initialized Integration option overrides.
 *
 * This will merge any options that were passed from initialization into
 * overrides for settings that are returned by the Segment CDN.
 *
 * i.e. this allows for passing options directly into destinations from
 * the Analytics constructor.
 */ parcelHelpers.export(exports, "mergedOptions", ()=>mergedOptions);
var _tslib = require("tslib");
function mergedOptions(settings, options) {
    var _a;
    var optionOverrides = Object.entries((_a = options.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function(overrides, _a) {
        var _b, _c;
        var integration = _a[0], options = _a[1];
        if (typeof options === "object") return (0, _tslib.__assign)((0, _tslib.__assign)({}, overrides), (_b = {}, _b[integration] = options, _b));
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, overrides), (_c = {}, _c[integration] = {}, _c));
    }, {});
    return Object.entries(settings.integrations).reduce(function(integrationSettings, _a) {
        var _b;
        var integration = _a[0], settings = _a[1];
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, integrationSettings), (_b = {}, _b[integration] = (0, _tslib.__assign)((0, _tslib.__assign)({}, settings), optionOverrides[integration]), _b));
    }, {});
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oywO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utm", ()=>utm);
parcelHelpers.export(exports, "ampId", ()=>ampId);
parcelHelpers.export(exports, "envEnrichment", ()=>envEnrichment);
var _tslib = require("tslib");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _version = require("../../generated/version");
var _versionType = require("../../lib/version-type");
var _tld = require("../../core/user/tld");
var _gracefulDecodeURIComponent = require("../../core/query-string/gracefulDecodeURIComponent");
var _storage = require("../../core/storage");
var _clientHints = require("../../lib/client-hints");
var cookieOptions;
function getCookieOptions() {
    if (cookieOptions) return cookieOptions;
    var domain = (0, _tld.tld)(window.location.href);
    cookieOptions = {
        expires: 31536000000,
        secure: false,
        path: "/"
    };
    if (domain) cookieOptions.domain = domain;
    return cookieOptions;
}
function ads(query) {
    var queryIds = {
        btid: "dataxu",
        urid: "millennial-media"
    };
    if (query.startsWith("?")) query = query.substring(1);
    query = query.replace(/\?/g, "&");
    var parts = query.split("&");
    for(var _i = 0, parts_1 = parts; _i < parts_1.length; _i++){
        var part = parts_1[_i];
        var _a = part.split("="), k = _a[0], v = _a[1];
        if (queryIds[k]) return {
            id: v,
            type: queryIds[k]
        };
    }
}
function utm(query) {
    if (query.startsWith("?")) query = query.substring(1);
    query = query.replace(/\?/g, "&");
    return query.split("&").reduce(function(acc, str) {
        var _a = str.split("="), k = _a[0], _b = _a[1], v = _b === void 0 ? "" : _b;
        if (k.includes("utm_") && k.length > 4) {
            var utmParam = k.slice(4);
            if (utmParam === "campaign") utmParam = "name";
            acc[utmParam] = (0, _gracefulDecodeURIComponent.gracefulDecodeURIComponent)(v);
        }
        return acc;
    }, {});
}
function ampId() {
    var ampId = (0, _jsCookieDefault.default).get("_ga");
    if (ampId && ampId.startsWith("amp")) return ampId;
}
function referrerId(query, ctx, disablePersistance) {
    var _a;
    var storage = new (0, _storage.UniversalStorage)(disablePersistance ? [] : [
        new (0, _storage.CookieStorage)(getCookieOptions())
    ]);
    var stored = storage.get("s:context.referrer");
    var ad = (_a = ads(query)) !== null && _a !== void 0 ? _a : stored;
    if (!ad) return;
    if (ctx) ctx.referrer = (0, _tslib.__assign)((0, _tslib.__assign)({}, ctx.referrer), ad);
    storage.set("s:context.referrer", ad);
}
/**
 *
 * @param obj e.g. { foo: 'b', bar: 'd', baz: ['123', '456']}
 * @returns e.g. 'foo=b&bar=d&baz=123&baz=456'
 */ var objectToQueryString = function(obj) {
    try {
        var searchParams_1 = new URLSearchParams();
        Object.entries(obj).forEach(function(_a) {
            var k = _a[0], v = _a[1];
            if (Array.isArray(v)) v.forEach(function(value) {
                return searchParams_1.append(k, value);
            });
            else searchParams_1.append(k, v);
        });
        return searchParams_1.toString();
    } catch (_a) {
        return "";
    }
};
var EnvironmentEnrichmentPlugin = /** @class */ function() {
    function EnvironmentEnrichmentPlugin() {
        var _this = this;
        this.name = "Page Enrichment";
        this.type = "before";
        this.version = "0.1.0";
        this.isLoaded = function() {
            return true;
        };
        this.load = function(_ctx, instance) {
            return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                var _a, _1;
                return (0, _tslib.__generator)(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            this.instance = instance;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            _a = this;
                            return [
                                4 /*yield*/ ,
                                (0, _clientHints.clientHints)(this.instance.options.highEntropyValuesClientHints)
                            ];
                        case 2:
                            _a.userAgentData = _b.sent();
                            return [
                                3 /*break*/ ,
                                4
                            ];
                        case 3:
                            _1 = _b.sent();
                            return [
                                3 /*break*/ ,
                                4
                            ];
                        case 4:
                            return [
                                2 /*return*/ ,
                                Promise.resolve()
                            ];
                    }
                });
            });
        };
        this.enrich = function(ctx) {
            var _a, _b;
            // Note: Types are off - context should never be undefined here, since it is set as part of event creation.
            var evtCtx = ctx.event.context;
            var search = evtCtx.page.search || "";
            var query = typeof search === "object" ? objectToQueryString(search) : search;
            evtCtx.userAgent = navigator.userAgent;
            evtCtx.userAgentData = _this.userAgentData;
            // @ts-ignore
            var locale = navigator.userLanguage || navigator.language;
            if (typeof evtCtx.locale === "undefined" && typeof locale !== "undefined") evtCtx.locale = locale;
            (_a = evtCtx.library) !== null && _a !== void 0 ? _a : evtCtx.library = {
                name: "analytics.js",
                version: "".concat((0, _versionType.getVersionType)() === "web" ? "next" : "npm:next", "-").concat((0, _version.version))
            };
            if (query && !evtCtx.campaign) evtCtx.campaign = utm(query);
            var amp = ampId();
            if (amp) evtCtx.amp = {
                id: amp
            };
            referrerId(query, evtCtx, (_b = _this.instance.options.disableClientPersistence) !== null && _b !== void 0 ? _b : false);
            try {
                evtCtx.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch (_) {
            // If browser doesn't have support leave timezone undefined
            }
            return ctx;
        };
        this.track = this.enrich;
        this.identify = this.enrich;
        this.page = this.enrich;
        this.group = this.enrich;
        this.alias = this.enrich;
        this.screen = this.enrich;
    }
    return EnvironmentEnrichmentPlugin;
}();
var envEnrichment = new EnvironmentEnrichmentPlugin();

},{"tslib":"lRdW5","js-cookie":"c8bBu","../../generated/version":"iyRSI","../../lib/version-type":"6Swm4","../../core/user/tld":"3PULl","../../core/query-string/gracefulDecodeURIComponent":"1oZq7","../../core/storage":"h0qk3","../../lib/client-hints":"btNYX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oZq7":[function(require,module,exports) {
/**
 * Tries to gets the unencoded version of an encoded component of a
 * Uniform Resource Identifier (URI). If input string is malformed,
 * returns it back as-is.
 *
 * Note: All occurences of the `+` character become ` ` (spaces).
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gracefulDecodeURIComponent", ()=>gracefulDecodeURIComponent);
function gracefulDecodeURIComponent(encodedURIComponent) {
    try {
        return decodeURIComponent(encodedURIComponent.replace(/\+/g, " "));
    } catch (_a) {
        return encodedURIComponent;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btNYX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clientHints", ()=>clientHints);
var _tslib = require("tslib");
function clientHints(hints) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var userAgentData;
        return (0, _tslib.__generator)(this, function(_a) {
            userAgentData = navigator.userAgentData;
            if (!userAgentData) return [
                2 /*return*/ ,
                undefined
            ];
            if (!hints) return [
                2 /*return*/ ,
                userAgentData.toJSON()
            ];
            return [
                2 /*return*/ ,
                userAgentData.getHighEntropyValues(hints).catch(function() {
                    return userAgentData.toJSON();
                })
            ];
        });
    });
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGN8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionDestination", ()=>ActionDestination);
parcelHelpers.export(exports, "remoteLoader", ()=>remoteLoader);
var _tslib = require("tslib");
var _loadScript = require("../../lib/load-script");
var _parseCdn = require("../../lib/parse-cdn");
var _middleware = require("../middleware");
var _context = require("../../core/context");
var _metricHelpers = require("../../core/stats/metric-helpers");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
var ActionDestination = /** @class */ function() {
    function ActionDestination(name, action) {
        this.version = "1.0.0";
        this.alternativeNames = [];
        this.loadPromise = (0, _analyticsGenericUtils.createDeferred)();
        this.middleware = [];
        this.alias = this._createMethod("alias");
        this.group = this._createMethod("group");
        this.identify = this._createMethod("identify");
        this.page = this._createMethod("page");
        this.screen = this._createMethod("screen");
        this.track = this._createMethod("track");
        this.action = action;
        this.name = name;
        this.type = action.type;
        this.alternativeNames.push(action.name);
    }
    ActionDestination.prototype.addMiddleware = function() {
        var _a;
        var fn = [];
        for(var _i = 0; _i < arguments.length; _i++)fn[_i] = arguments[_i];
        if (this.type === "destination") (_a = this.middleware).push.apply(_a, fn);
    };
    ActionDestination.prototype.transform = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var modifiedEvent;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, _middleware.applyDestinationMiddleware)(this.name, ctx.event, this.middleware)
                        ];
                    case 1:
                        modifiedEvent = _a.sent();
                        if (modifiedEvent === null) ctx.cancel(new (0, _context.ContextCancelation)({
                            retry: false,
                            reason: "dropped by destination middleware"
                        }));
                        return [
                            2 /*return*/ ,
                            new (0, _context.Context)(modifiedEvent)
                        ];
                }
            });
        });
    };
    ActionDestination.prototype._createMethod = function(methodName) {
        var _this = this;
        return function(ctx) {
            return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                var transformedContext, error_1;
                return (0, _tslib.__generator)(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!this.action[methodName]) return [
                                2 /*return*/ ,
                                ctx
                            ];
                            transformedContext = ctx;
                            if (!(this.type === "destination")) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                this.transform(ctx)
                            ];
                        case 1:
                            transformedContext = _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([
                                2,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.ready()
                            ];
                        case 3:
                            if (!_a.sent()) throw new Error("Something prevented the destination from getting ready");
                            (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                                integrationName: this.action.name,
                                methodName: methodName,
                                type: "action"
                            });
                            return [
                                4 /*yield*/ ,
                                this.action[methodName](transformedContext)
                            ];
                        case 4:
                            _a.sent();
                            return [
                                3 /*break*/ ,
                                6
                            ];
                        case 5:
                            error_1 = _a.sent();
                            (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                                integrationName: this.action.name,
                                methodName: methodName,
                                type: "action",
                                didError: true
                            });
                            throw error_1;
                        case 6:
                            return [
                                2 /*return*/ ,
                                ctx
                            ];
                    }
                });
            });
        };
    };
    /* --- PASSTHROUGH METHODS --- */ ActionDestination.prototype.isLoaded = function() {
        return this.action.isLoaded();
    };
    ActionDestination.prototype.ready = function() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var _a;
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _b.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.loadPromise.promise
                        ];
                    case 1:
                        _b.sent();
                        return [
                            2 /*return*/ ,
                            true
                        ];
                    case 2:
                        _a = _b.sent();
                        return [
                            2 /*return*/ ,
                            false
                        ];
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    ActionDestination.prototype.load = function(ctx, analytics) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var loadP, _a, _b, error_2;
            return (0, _tslib.__generator)(this, function(_c) {
                switch(_c.label){
                    case 0:
                        if (this.loadPromise.isSettled()) return [
                            2 /*return*/ ,
                            this.loadPromise.promise
                        ];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: "load",
                            type: "action"
                        });
                        loadP = this.action.load(ctx, analytics);
                        _b = (_a = this.loadPromise).resolve;
                        return [
                            4 /*yield*/ ,
                            loadP
                        ];
                    case 2:
                        _b.apply(_a, [
                            _c.sent()
                        ]);
                        return [
                            2 /*return*/ ,
                            loadP
                        ];
                    case 3:
                        error_2 = _c.sent();
                        (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: "load",
                            type: "action",
                            didError: true
                        });
                        this.loadPromise.reject(error_2);
                        throw error_2;
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    ActionDestination.prototype.unload = function(ctx, analytics) {
        var _a, _b;
        return (_b = (_a = this.action).unload) === null || _b === void 0 ? void 0 : _b.call(_a, ctx, analytics);
    };
    return ActionDestination;
}();
function validate(pluginLike) {
    if (!Array.isArray(pluginLike)) throw new Error("Not a valid list of plugins");
    var required = [
        "load",
        "isLoaded",
        "name",
        "version",
        "type"
    ];
    pluginLike.forEach(function(plugin) {
        required.forEach(function(method) {
            var _a;
            if (plugin[method] === undefined) throw new Error("Plugin: ".concat((_a = plugin.name) !== null && _a !== void 0 ? _a : "unknown", " missing required function ").concat(method));
        });
    });
    return true;
}
function isPluginDisabled(userIntegrations, remotePlugin) {
    var creationNameEnabled = userIntegrations[remotePlugin.creationName];
    var currentNameEnabled = userIntegrations[remotePlugin.name];
    // Check that the plugin isn't explicitly enabled when All: false
    if (userIntegrations.All === false && !creationNameEnabled && !currentNameEnabled) return true;
    // Check that the plugin isn't explicitly disabled
    if (creationNameEnabled === false || currentNameEnabled === false) return true;
    return false;
}
function loadPluginFactory(remotePlugin, obfuscate) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var defaultCdn, cdn, urlSplit, name_1, obfuscatedURL, error_3;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    defaultCdn = new RegExp("https://cdn.segment.(com|build)");
                    cdn = (0, _parseCdn.getCDN)();
                    if (!obfuscate) return [
                        3 /*break*/ ,
                        6
                    ];
                    urlSplit = remotePlugin.url.split("/");
                    name_1 = urlSplit[urlSplit.length - 2];
                    obfuscatedURL = remotePlugin.url.replace(name_1, btoa(name_1).replace(/=/g, ""));
                    _a.label = 1;
                case 1:
                    _a.trys.push([
                        1,
                        3,
                        ,
                        5
                    ]);
                    return [
                        4 /*yield*/ ,
                        (0, _loadScript.loadScript)(obfuscatedURL.replace(defaultCdn, cdn))
                    ];
                case 2:
                    _a.sent();
                    return [
                        3 /*break*/ ,
                        5
                    ];
                case 3:
                    error_3 = _a.sent();
                    // Due to syncing concerns it is possible that the obfuscated action destination (or requested version) might not exist.
                    // We should use the unobfuscated version as a fallback.
                    return [
                        4 /*yield*/ ,
                        (0, _loadScript.loadScript)(remotePlugin.url.replace(defaultCdn, cdn))
                    ];
                case 4:
                    // Due to syncing concerns it is possible that the obfuscated action destination (or requested version) might not exist.
                    // We should use the unobfuscated version as a fallback.
                    _a.sent();
                    return [
                        3 /*break*/ ,
                        5
                    ];
                case 5:
                    return [
                        3 /*break*/ ,
                        8
                    ];
                case 6:
                    return [
                        4 /*yield*/ ,
                        (0, _loadScript.loadScript)(remotePlugin.url.replace(defaultCdn, cdn))
                    ];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    // @ts-expect-error
                    if (typeof window[remotePlugin.libraryName] === "function") // @ts-expect-error
                    return [
                        2 /*return*/ ,
                        window[remotePlugin.libraryName]
                    ];
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function remoteLoader(settings, userIntegrations, mergedIntegrations, options, routingMiddleware, pluginSources) {
    var _a, _b, _c;
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var allPlugins, routingRules, pluginPromises;
        var _this = this;
        return (0, _tslib.__generator)(this, function(_d) {
            switch(_d.label){
                case 0:
                    allPlugins = [];
                    routingRules = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) !== null && _b !== void 0 ? _b : [];
                    pluginPromises = ((_c = settings.remotePlugins) !== null && _c !== void 0 ? _c : []).map(function(remotePlugin) {
                        return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                            var pluginFactory, _a, plugin, plugins, routing_1, error_4;
                            return (0, _tslib.__generator)(this, function(_b) {
                                switch(_b.label){
                                    case 0:
                                        if (isPluginDisabled(userIntegrations, remotePlugin)) return [
                                            2 /*return*/ 
                                        ];
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([
                                            1,
                                            6,
                                            ,
                                            7
                                        ]);
                                        _a = pluginSources === null || pluginSources === void 0 ? void 0 : pluginSources.find(function(_a) {
                                            var pluginName = _a.pluginName;
                                            return pluginName === remotePlugin.name;
                                        });
                                        if (_a) return [
                                            3 /*break*/ ,
                                            3
                                        ];
                                        return [
                                            4 /*yield*/ ,
                                            loadPluginFactory(remotePlugin, options === null || options === void 0 ? void 0 : options.obfuscate)
                                        ];
                                    case 2:
                                        _a = _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        pluginFactory = _a;
                                        if (!pluginFactory) return [
                                            3 /*break*/ ,
                                            5
                                        ];
                                        return [
                                            4 /*yield*/ ,
                                            pluginFactory((0, _tslib.__assign)((0, _tslib.__assign)({}, remotePlugin.settings), mergedIntegrations[remotePlugin.name]))
                                        ];
                                    case 4:
                                        plugin = _b.sent();
                                        plugins = Array.isArray(plugin) ? plugin : [
                                            plugin
                                        ];
                                        validate(plugins);
                                        routing_1 = routingRules.filter(function(rule) {
                                            return rule.destinationName === remotePlugin.creationName;
                                        });
                                        plugins.forEach(function(plugin) {
                                            var wrapper = new ActionDestination(remotePlugin.creationName, plugin);
                                            /** Make sure we only apply destination filters to actions of the "destination" type to avoid causing issues for hybrid destinations */ if (routing_1.length && routingMiddleware && plugin.type === "destination") wrapper.addMiddleware(routingMiddleware);
                                            allPlugins.push(wrapper);
                                        });
                                        _b.label = 5;
                                    case 5:
                                        return [
                                            3 /*break*/ ,
                                            7
                                        ];
                                    case 6:
                                        error_4 = _b.sent();
                                        console.warn("Failed to load Remote Plugin", error_4);
                                        return [
                                            3 /*break*/ ,
                                            7
                                        ];
                                    case 7:
                                        return [
                                            2 /*return*/ 
                                        ];
                                }
                            });
                        });
                    });
                    return [
                        4 /*yield*/ ,
                        Promise.all(pluginPromises)
                    ];
                case 1:
                    _d.sent();
                    return [
                        2 /*return*/ ,
                        allPlugins.filter(Boolean)
                    ];
            }
        });
    });
}

},{"tslib":"lRdW5","../../lib/load-script":"7tK82","../../lib/parse-cdn":"hYrg0","../middleware":"dqLkl","../../core/context":"b85Be","../../core/stats/metric-helpers":"Om5MR","@segment/analytics-generic-utils":"h6A2f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tK82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadScript", ()=>loadScript);
parcelHelpers.export(exports, "unloadScript", ()=>unloadScript);
function findScript(src) {
    var scripts = Array.prototype.slice.call(window.document.querySelectorAll("script"));
    return scripts.find(function(s) {
        return s.src === src;
    });
}
function loadScript(src, attributes) {
    var found = findScript(src);
    if (found !== undefined) {
        var status_1 = found === null || found === void 0 ? void 0 : found.getAttribute("status");
        if (status_1 === "loaded") return Promise.resolve(found);
        if (status_1 === "loading") return new Promise(function(resolve, reject) {
            found.addEventListener("load", function() {
                return resolve(found);
            });
            found.addEventListener("error", function(err) {
                return reject(err);
            });
        });
    }
    return new Promise(function(resolve, reject) {
        var _a;
        var script = window.document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.async = true;
        script.setAttribute("status", "loading");
        for(var _i = 0, _b = Object.entries(attributes !== null && attributes !== void 0 ? attributes : {}); _i < _b.length; _i++){
            var _c = _b[_i], k = _c[0], v = _c[1];
            script.setAttribute(k, v);
        }
        script.onload = function() {
            script.onerror = script.onload = null;
            script.setAttribute("status", "loaded");
            resolve(script);
        };
        script.onerror = function() {
            script.onerror = script.onload = null;
            script.setAttribute("status", "error");
            reject(new Error("Failed to load ".concat(src)));
        };
        var tag = window.document.getElementsByTagName("script")[0];
        (_a = tag.parentElement) === null || _a === void 0 || _a.insertBefore(script, tag);
    });
}
function unloadScript(src) {
    var found = findScript(src);
    if (found !== undefined) found.remove();
    return Promise.resolve();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqLkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDestinationMiddleware", ()=>applyDestinationMiddleware);
parcelHelpers.export(exports, "sourceMiddlewarePlugin", ()=>sourceMiddlewarePlugin);
var _tslib = require("tslib");
var _context = require("../../core/context");
var _toFacade = require("../../lib/to-facade");
function applyDestinationMiddleware(destination, evt, middleware) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        function applyMiddleware(event, fn) {
            return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
                var nextCalled, returnedEvent;
                var _a;
                return (0, _tslib.__generator)(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            nextCalled = false;
                            returnedEvent = null;
                            return [
                                4 /*yield*/ ,
                                fn({
                                    payload: (0, _toFacade.toFacade)(event, {
                                        clone: true,
                                        traverse: false
                                    }),
                                    integration: destination,
                                    next: function(evt) {
                                        nextCalled = true;
                                        if (evt === null) returnedEvent = null;
                                        if (evt) returnedEvent = evt.obj;
                                    }
                                })
                            ];
                        case 1:
                            _b.sent();
                            if (!nextCalled && returnedEvent !== null) {
                                returnedEvent;
                                returnedEvent.integrations = (0, _tslib.__assign)((0, _tslib.__assign)({}, event.integrations), (_a = {}, _a[destination] = false, _a));
                            }
                            return [
                                2 /*return*/ ,
                                returnedEvent
                            ];
                    }
                });
            });
        }
        var modifiedEvent, _i, middleware_1, md, result;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    modifiedEvent = (0, _toFacade.toFacade)(evt, {
                        clone: true,
                        traverse: false
                    }).rawEvent();
                    _i = 0, middleware_1 = middleware;
                    _a.label = 1;
                case 1:
                    if (!(_i < middleware_1.length)) return [
                        3 /*break*/ ,
                        4
                    ];
                    md = middleware_1[_i];
                    return [
                        4 /*yield*/ ,
                        applyMiddleware(modifiedEvent, md)
                    ];
                case 2:
                    result = _a.sent();
                    if (result === null) return [
                        2 /*return*/ ,
                        null
                    ];
                    modifiedEvent = result;
                    _a.label = 3;
                case 3:
                    _i++;
                    return [
                        3 /*break*/ ,
                        1
                    ];
                case 4:
                    return [
                        2 /*return*/ ,
                        modifiedEvent
                    ];
            }
        });
    });
}
function sourceMiddlewarePlugin(fn, integrations) {
    function apply(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var nextCalled;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        nextCalled = false;
                        return [
                            4 /*yield*/ ,
                            fn({
                                payload: (0, _toFacade.toFacade)(ctx.event, {
                                    clone: true,
                                    traverse: false
                                }),
                                integrations: integrations !== null && integrations !== void 0 ? integrations : {},
                                next: function(evt) {
                                    nextCalled = true;
                                    if (evt) ctx.event = evt.obj;
                                }
                            })
                        ];
                    case 1:
                        _a.sent();
                        if (!nextCalled) throw new (0, _context.ContextCancelation)({
                            retry: false,
                            type: "middleware_cancellation",
                            reason: "Middleware `next` function skipped"
                        });
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                }
            });
        });
    }
    return {
        name: "Source Middleware ".concat(fn.name),
        type: "before",
        version: "0.1.0",
        isLoaded: function() {
            return true;
        },
        load: function(ctx) {
            return Promise.resolve(ctx);
        },
        track: apply,
        page: apply,
        identify: apply,
        alias: apply,
        group: apply
    };
}

},{"tslib":"lRdW5","../../core/context":"b85Be","../../lib/to-facade":"8zCZx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zCZx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toFacade", ()=>toFacade);
var _facade = require("@segment/facade");
function toFacade(evt, options) {
    var fcd = new (0, _facade.Facade)(evt, options);
    if (evt.type === "track") fcd = new (0, _facade.Track)(evt, options);
    if (evt.type === "identify") fcd = new (0, _facade.Identify)(evt, options);
    if (evt.type === "page") fcd = new (0, _facade.Page)(evt, options);
    if (evt.type === "alias") fcd = new (0, _facade.Alias)(evt, options);
    if (evt.type === "group") fcd = new (0, _facade.Group)(evt, options);
    if (evt.type === "screen") fcd = new (0, _facade.Screen)(evt, options);
    Object.defineProperty(fcd, "obj", {
        value: evt,
        writable: true
    });
    return fcd;
}

},{"@segment/facade":"emU1t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emU1t":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Delete = exports.Screen = exports.Page = exports.Track = exports.Identify = exports.Group = exports.Alias = exports.Facade = void 0;
var facade_1 = require("a467e031c8878919");
Object.defineProperty(exports, "Facade", {
    enumerable: true,
    get: function() {
        return facade_1.Facade;
    }
});
var alias_1 = require("6217043d13ee3417");
Object.defineProperty(exports, "Alias", {
    enumerable: true,
    get: function() {
        return alias_1.Alias;
    }
});
var group_1 = require("73ca563f5f3d5620");
Object.defineProperty(exports, "Group", {
    enumerable: true,
    get: function() {
        return group_1.Group;
    }
});
var identify_1 = require("51979a9c859d6b32");
Object.defineProperty(exports, "Identify", {
    enumerable: true,
    get: function() {
        return identify_1.Identify;
    }
});
var track_1 = require("de327eb4b969061a");
Object.defineProperty(exports, "Track", {
    enumerable: true,
    get: function() {
        return track_1.Track;
    }
});
var page_1 = require("d54e1a31dbb6299f");
Object.defineProperty(exports, "Page", {
    enumerable: true,
    get: function() {
        return page_1.Page;
    }
});
var screen_1 = require("66ec23a9b2cde56e");
Object.defineProperty(exports, "Screen", {
    enumerable: true,
    get: function() {
        return screen_1.Screen;
    }
});
var delete_1 = require("b76fe96c2882b677");
Object.defineProperty(exports, "Delete", {
    enumerable: true,
    get: function() {
        return delete_1.Delete;
    }
});
exports.default = __assign(__assign({}, facade_1.Facade), {
    Alias: alias_1.Alias,
    Group: group_1.Group,
    Identify: identify_1.Identify,
    Track: track_1.Track,
    Page: page_1.Page,
    Screen: screen_1.Screen,
    Delete: delete_1.Delete
});

},{"a467e031c8878919":"fO58B","6217043d13ee3417":"6g8GS","73ca563f5f3d5620":"5FiQl","51979a9c859d6b32":"jawbz","de327eb4b969061a":"jeBDG","d54e1a31dbb6299f":"5aygZ","66ec23a9b2cde56e":"k1tsP","b76fe96c2882b677":"7JRrF"}],"fO58B":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Facade = void 0;
var address_1 = __importDefault(require("babf673b1189b04a"));
var clone_1 = require("22ff2fd8a26e9049");
var is_enabled_1 = __importDefault(require("b0816d57c602b790"));
var new_date_1 = __importDefault(require("f82ac8909da84a7e"));
var obj_case_1 = __importDefault(require("439a9d68c9f19251"));
var isodate_traverse_1 = __importDefault(require("5c85568736f9877b"));
function Facade(obj, opts) {
    opts = opts || {};
    this.raw = clone_1.clone(obj);
    if (!("clone" in opts)) opts.clone = true;
    if (opts.clone) obj = clone_1.clone(obj);
    if (!("traverse" in opts)) opts.traverse = true;
    if (!("timestamp" in obj)) obj.timestamp = new Date();
    else obj.timestamp = new_date_1.default(obj.timestamp);
    if (opts.traverse) isodate_traverse_1.default(obj);
    this.opts = opts;
    this.obj = obj;
}
exports.Facade = Facade;
var f = Facade.prototype;
f.proxy = function(field) {
    var fields = field.split(".");
    field = fields.shift();
    var obj = this[field] || this.obj[field];
    if (!obj) return obj;
    if (typeof obj === "function") obj = obj.call(this) || {};
    if (fields.length === 0) return this.opts.clone ? transform(obj) : obj;
    obj = obj_case_1.default(obj, fields.join("."));
    return this.opts.clone ? transform(obj) : obj;
};
f.field = function(field) {
    var obj = this.obj[field];
    return this.opts.clone ? transform(obj) : obj;
};
Facade.proxy = function(field) {
    return function() {
        return this.proxy(field);
    };
};
Facade.field = function(field) {
    return function() {
        return this.field(field);
    };
};
Facade.multi = function(path) {
    return function() {
        var multi = this.proxy(path + "s");
        if (Array.isArray(multi)) return multi;
        var one = this.proxy(path);
        if (one) one = [
            this.opts.clone ? clone_1.clone(one) : one
        ];
        return one || [];
    };
};
Facade.one = function(path) {
    return function() {
        var one = this.proxy(path);
        if (one) return one;
        var multi = this.proxy(path + "s");
        if (Array.isArray(multi)) return multi[0];
    };
};
f.json = function() {
    var ret = this.opts.clone ? clone_1.clone(this.obj) : this.obj;
    if (this.type) ret.type = this.type();
    return ret;
};
f.rawEvent = function() {
    return this.raw;
};
f.options = function(integration) {
    var obj = this.obj.options || this.obj.context || {};
    var options = this.opts.clone ? clone_1.clone(obj) : obj;
    if (!integration) return options;
    if (!this.enabled(integration)) return;
    var integrations = this.integrations();
    var value = integrations[integration] || obj_case_1.default(integrations, integration);
    if (typeof value !== "object") value = obj_case_1.default(this.options(), integration);
    return typeof value === "object" ? value : {};
};
f.context = f.options;
f.enabled = function(integration) {
    var allEnabled = this.proxy("options.providers.all");
    if (typeof allEnabled !== "boolean") allEnabled = this.proxy("options.all");
    if (typeof allEnabled !== "boolean") allEnabled = this.proxy("integrations.all");
    if (typeof allEnabled !== "boolean") allEnabled = true;
    var enabled = allEnabled && is_enabled_1.default(integration);
    var options = this.integrations();
    if (options.providers && options.providers.hasOwnProperty(integration)) enabled = options.providers[integration];
    if (options.hasOwnProperty(integration)) {
        var settings = options[integration];
        if (typeof settings === "boolean") enabled = settings;
        else enabled = true;
    }
    return !!enabled;
};
f.integrations = function() {
    return this.obj.integrations || this.proxy("options.providers") || this.options();
};
f.active = function() {
    var active = this.proxy("options.active");
    if (active === null || active === undefined) active = true;
    return active;
};
f.anonymousId = function() {
    return this.field("anonymousId") || this.field("sessionId");
};
f.sessionId = f.anonymousId;
f.groupId = Facade.proxy("options.groupId");
f.traits = function(aliases) {
    var ret = this.proxy("options.traits") || {};
    var id = this.userId();
    aliases = aliases || {};
    if (id) ret.id = id;
    for(var alias in aliases)if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
        var value = this[alias] == null ? this.proxy("options.traits." + alias) : this[alias]();
        if (value == null) continue;
        ret[aliases[alias]] = value;
        delete ret[alias];
    }
    return ret;
};
f.library = function() {
    var library = this.proxy("options.library");
    if (!library) return {
        name: "unknown",
        version: null
    };
    if (typeof library === "string") return {
        name: library,
        version: null
    };
    return library;
};
f.device = function() {
    var device = this.proxy("context.device");
    if (typeof device !== "object" || device === null) device = {};
    var library = this.library().name;
    if (device.type) return device;
    if (library.indexOf("ios") > -1) device.type = "ios";
    if (library.indexOf("android") > -1) device.type = "android";
    return device;
};
f.userAgent = Facade.proxy("context.userAgent");
f.timezone = Facade.proxy("context.timezone");
f.timestamp = Facade.field("timestamp");
f.channel = Facade.field("channel");
f.ip = Facade.proxy("context.ip");
f.userId = Facade.field("userId");
address_1.default(f);
function transform(obj) {
    return clone_1.clone(obj);
}

},{"babf673b1189b04a":"bbEix","22ff2fd8a26e9049":"dv4Gj","b0816d57c602b790":"4Z6zT","f82ac8909da84a7e":"7u7jn","439a9d68c9f19251":"kdNyl","5c85568736f9877b":"5VU2C"}],"bbEix":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var obj_case_1 = __importDefault(require("b9ecada4c194725"));
function trait(a, b) {
    return function() {
        var traits = this.traits();
        var props = this.properties ? this.properties() : {};
        return obj_case_1.default(traits, "address." + a) || obj_case_1.default(traits, a) || (b ? obj_case_1.default(traits, "address." + b) : null) || (b ? obj_case_1.default(traits, b) : null) || obj_case_1.default(props, "address." + a) || obj_case_1.default(props, a) || (b ? obj_case_1.default(props, "address." + b) : null) || (b ? obj_case_1.default(props, b) : null);
    };
}
function default_1(proto) {
    proto.zip = trait("postalCode", "zip");
    proto.country = trait("country");
    proto.street = trait("street");
    proto.state = trait("state");
    proto.city = trait("city");
    proto.region = trait("region");
}
exports.default = default_1;

},{"b9ecada4c194725":"kdNyl"}],"kdNyl":[function(require,module,exports) {
var identity = function(_) {
    return _;
};
/**
 * Module exports, export
 */ module.exports = multiple(find);
module.exports.find = module.exports;
/**
 * Export the replacement function, return the modified object
 */ module.exports.replace = function(obj, key, val, options) {
    multiple(replace).call(this, obj, key, val, options);
    return obj;
};
/**
 * Export the delete function, return the modified object
 */ module.exports.del = function(obj, key, options) {
    multiple(del).call(this, obj, key, null, options);
    return obj;
};
/**
 * Compose applying the function to a nested key
 */ function multiple(fn) {
    return function(obj, path, val, options) {
        var normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
        path = normalize(path);
        var key;
        var finished = false;
        while(!finished)loop();
        function loop() {
            for(key in obj){
                var normalizedKey = normalize(key);
                if (0 === path.indexOf(normalizedKey)) {
                    var temp = path.substr(normalizedKey.length);
                    if (temp.charAt(0) === "." || temp.length === 0) {
                        path = temp.substr(1);
                        var child = obj[key];
                        // we're at the end and there is nothing.
                        if (null == child) {
                            finished = true;
                            return;
                        }
                        // we're at the end and there is something.
                        if (!path.length) {
                            finished = true;
                            return;
                        }
                        // step into child
                        obj = child;
                        // but we're done here
                        return;
                    }
                }
            }
            key = undefined;
            // if we found no matching properties
            // on the current object, there's no match.
            finished = true;
        }
        if (!key) return;
        if (null == obj) return obj;
        // the `obj` and `key` is one above the leaf object and key, so
        // start object: { a: { 'b.c': 10 } }
        // end object: { 'b.c': 10 }
        // end key: 'b.c'
        // this way, you can do `obj[key]` and get `10`.
        return fn(obj, key, val);
    };
}
/**
 * Find an object by its key
 *
 * find({ first_name : 'Calvin' }, 'firstName')
 */ function find(obj, key) {
    if (obj.hasOwnProperty(key)) return obj[key];
}
/**
 * Delete a value for a given key
 *
 * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
 */ function del(obj, key) {
    if (obj.hasOwnProperty(key)) delete obj[key];
    return obj;
}
/**
 * Replace an objects existing value with a new one
 *
 * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
 */ function replace(obj, key, val) {
    if (obj.hasOwnProperty(key)) obj[key] = val;
    return obj;
}
/**
 * Normalize a `dot.separated.path`.
 *
 * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
 *
 * @param {String} path
 * @return {String}
 */ function defaultNormalize(path) {
    return path.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase();
}
/**
 * Check if a value is a function.
 *
 * @param {*} val
 * @return {boolean} Returns `true` if `val` is a function, otherwise `false`.
 */ function isFunction(val) {
    return typeof val === "function";
}

},{}],"dv4Gj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = void 0;
function clone(properties) {
    if (typeof properties !== "object") return properties;
    if (Object.prototype.toString.call(properties) === "[object Object]") {
        var temp = {};
        for(var key in properties)if (Object.prototype.hasOwnProperty.call(properties, key)) temp[key] = clone(properties[key]);
        return temp;
    } else if (Array.isArray(properties)) return properties.map(clone);
    else return properties;
}
exports.clone = clone;

},{}],"4Z6zT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var disabled = {
    Salesforce: true
};
function default_1(integration) {
    return !disabled[integration];
}
exports.default = default_1;

},{}],"7u7jn":[function(require,module,exports) {
"use strict";
var isodate = require("2f19a45c0d85a975");
var milliseconds = require("aabb62a2330824e");
var seconds = require("995703c749ffdb56");
var objProto = Object.prototype;
var toStr = objProto.toString;
function isDate(value) {
    return toStr.call(value) === "[object Date]";
}
function isNumber(value) {
    return toStr.call(value) === "[object Number]";
}
/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native Date constructor.
 *
 * @param {Date|string|number} val
 */ module.exports = function newDate(val) {
    if (isDate(val)) return val;
    if (isNumber(val)) return new Date(toMs(val));
    // date strings
    if (isodate.is(val)) return isodate.parse(val);
    if (milliseconds.is(val)) return milliseconds.parse(val);
    if (seconds.is(val)) return seconds.parse(val);
    // fallback to Date.parse
    return new Date(val);
};
/**
 * If the number passed val is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param {number} num
 */ function toMs(num) {
    if (num < 31557600000) return num * 1000;
    return num;
}

},{"2f19a45c0d85a975":"6RtOa","aabb62a2330824e":"a0BJc","995703c749ffdb56":"gbBKh"}],"6RtOa":[function(require,module,exports) {
"use strict";
/**
 * Matcher, slightly modified from:
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 */ var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
/**
 * Convert an ISO date string to a date. Fallback to native `Date.parse`.
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 *
 * @param {String} iso
 * @return {Date}
 */ exports.parse = function(iso) {
    var numericKeys = [
        1,
        5,
        6,
        7,
        11,
        12
    ];
    var arr = matcher.exec(iso);
    var offset = 0;
    // fallback to native parsing
    if (!arr) return new Date(iso);
    /* eslint-disable no-cond-assign */ // remove undefined values
    for(var i = 0, val; val = numericKeys[i]; i++)arr[val] = parseInt(arr[val], 10) || 0;
    /* eslint-enable no-cond-assign */ // allow undefined days and months
    arr[2] = parseInt(arr[2], 10) || 1;
    arr[3] = parseInt(arr[3], 10) || 1;
    // month is 0-11
    arr[2]--;
    // allow abitrary sub-second precision
    arr[8] = arr[8] ? (arr[8] + "00").substring(0, 3) : 0;
    // apply timezone if one exists
    if (arr[4] === " ") offset = new Date().getTimezoneOffset();
    else if (arr[9] !== "Z" && arr[10]) {
        offset = arr[11] * 60 + arr[12];
        if (arr[10] === "+") offset = 0 - offset;
    }
    var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
    return new Date(millis);
};
/**
 * Checks whether a `string` is an ISO date string. `strict` mode requires that
 * the date string at least have a year, month and date.
 *
 * @param {String} string
 * @param {Boolean} strict
 * @return {Boolean}
 */ exports.is = function(string, strict) {
    if (typeof string !== "string") return false;
    if (strict && /^\d{4}-\d{2}-\d{2}/.test(string) === false) return false;
    return matcher.test(string);
};

},{}],"a0BJc":[function(require,module,exports) {
"use strict";
/**
 * Matcher.
 */ var matcher = /\d{13}/;
/**
 * Check whether a string is a millisecond date string.
 *
 * @param {string} string
 * @return {boolean}
 */ exports.is = function(string) {
    return matcher.test(string);
};
/**
 * Convert a millisecond string to a date.
 *
 * @param {string} millis
 * @return {Date}
 */ exports.parse = function(millis) {
    millis = parseInt(millis, 10);
    return new Date(millis);
};

},{}],"gbBKh":[function(require,module,exports) {
"use strict";
/**
 * Matcher.
 */ var matcher = /\d{10}/;
/**
 * Check whether a string is a second date string.
 *
 * @param {string} string
 * @return {Boolean}
 */ exports.is = function(string) {
    return matcher.test(string);
};
/**
 * Convert a second string to a date.
 *
 * @param {string} seconds
 * @return {Date}
 */ exports.parse = function(seconds) {
    var millis = parseInt(seconds, 10) * 1000;
    return new Date(millis);
};

},{}],"5VU2C":[function(require,module,exports) {
"use strict";
var isodate = require("dc7348db6d2487a4");
/**
 * Expose `traverse`.
 */ module.exports = traverse;
/**
 * Recursively traverse an object or array, and convert
 * all ISO date strings parse into Date objects.
 *
 * @param {Object} input - object, array, or string to convert
 * @param {Boolean} strict - only convert strings with year, month, and date
 * @return {Object}
 */ function traverse(input, strict) {
    if (strict === undefined) strict = true;
    if (input && typeof input === "object") return traverseObject(input, strict);
    else if (Array.isArray(input)) return traverseArray(input, strict);
    else if (isodate.is(input, strict)) return isodate.parse(input);
    return input;
}
/**
 * Object traverser helper function.
 *
 * @param {Object} obj - object to traverse
 * @param {Boolean} strict - only convert strings with year, month, and date
 * @return {Object}
 */ function traverseObject(obj, strict) {
    Object.keys(obj).forEach(function(key) {
        obj[key] = traverse(obj[key], strict);
    });
    return obj;
}
/**
 * Array traverser helper function
 *
 * @param {Array} arr - array to traverse
 * @param {Boolean} strict - only convert strings with year, month, and date
 * @return {Array}
 */ function traverseArray(arr, strict) {
    arr.forEach(function(value, index) {
        arr[index] = traverse(value, strict);
    });
    return arr;
}

},{"dc7348db6d2487a4":"6RtOa"}],"6g8GS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alias = void 0;
var inherits_1 = __importDefault(require("ac8cf14739a746f2"));
var facade_1 = require("c81ef307ee78c6b7");
function Alias(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Alias = Alias;
inherits_1.default(Alias, facade_1.Facade);
Alias.prototype.action = function() {
    return "alias";
};
Alias.prototype.type = Alias.prototype.action;
Alias.prototype.previousId = function() {
    return this.field("previousId") || this.field("from");
};
Alias.prototype.from = Alias.prototype.previousId;
Alias.prototype.userId = function() {
    return this.field("userId") || this.field("to");
};
Alias.prototype.to = Alias.prototype.userId;

},{"ac8cf14739a746f2":"bRL3M","c81ef307ee78c6b7":"fO58B"}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"5FiQl":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Group = void 0;
var inherits_1 = __importDefault(require("fd593743ed4fdf41"));
var is_email_1 = __importDefault(require("739beb8e5f67551f"));
var new_date_1 = __importDefault(require("9ec84eb2fd45718c"));
var facade_1 = require("eedadc62e0ae3e3b");
function Group(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Group = Group;
inherits_1.default(Group, facade_1.Facade);
var g = Group.prototype;
g.action = function() {
    return "group";
};
g.type = g.action;
g.groupId = facade_1.Facade.field("groupId");
g.created = function() {
    var created = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
    if (created) return new_date_1.default(created);
};
g.email = function() {
    var email = this.proxy("traits.email");
    if (email) return email;
    var groupId = this.groupId();
    if (is_email_1.default(groupId)) return groupId;
};
g.traits = function(aliases) {
    var ret = this.properties();
    var id = this.groupId();
    aliases = aliases || {};
    if (id) ret.id = id;
    for(var alias in aliases)if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
        var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
        if (value == null) continue;
        ret[aliases[alias]] = value;
        delete ret[alias];
    }
    return ret;
};
g.name = facade_1.Facade.proxy("traits.name");
g.industry = facade_1.Facade.proxy("traits.industry");
g.employees = facade_1.Facade.proxy("traits.employees");
g.properties = function() {
    return this.field("traits") || this.field("properties") || {};
};

},{"fd593743ed4fdf41":"bRL3M","739beb8e5f67551f":"bSIk9","9ec84eb2fd45718c":"7u7jn","eedadc62e0ae3e3b":"fO58B"}],"bSIk9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var matcher = /.+\@.+\..+/;
function isEmail(string) {
    return matcher.test(string);
}
exports.default = isEmail;

},{}],"jawbz":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Identify = void 0;
var facade_1 = require("1d15fb9bedcee421");
var obj_case_1 = __importDefault(require("90031cdad95380db"));
var inherits_1 = __importDefault(require("9dec33e08b9dd4dd"));
var is_email_1 = __importDefault(require("b65aa4cffd3720e2"));
var new_date_1 = __importDefault(require("a7524d1218817873"));
var trim = function(str) {
    return str.trim();
};
function Identify(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Identify = Identify;
inherits_1.default(Identify, facade_1.Facade);
var i = Identify.prototype;
i.action = function() {
    return "identify";
};
i.type = i.action;
i.traits = function(aliases) {
    var ret = this.field("traits") || {};
    var id = this.userId();
    aliases = aliases || {};
    if (id) ret.id = id;
    for(var alias in aliases){
        var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
        if (value == null) continue;
        ret[aliases[alias]] = value;
        if (alias !== aliases[alias]) delete ret[alias];
    }
    return ret;
};
i.email = function() {
    var email = this.proxy("traits.email");
    if (email) return email;
    var userId = this.userId();
    if (is_email_1.default(userId)) return userId;
};
i.created = function() {
    var created = this.proxy("traits.created") || this.proxy("traits.createdAt");
    if (created) return new_date_1.default(created);
};
i.companyCreated = function() {
    var created = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
    if (created) return new_date_1.default(created);
};
i.companyName = function() {
    return this.proxy("traits.company.name");
};
i.name = function() {
    var name = this.proxy("traits.name");
    if (typeof name === "string") return trim(name);
    var firstName = this.firstName();
    var lastName = this.lastName();
    if (firstName && lastName) return trim(firstName + " " + lastName);
};
i.firstName = function() {
    var firstName = this.proxy("traits.firstName");
    if (typeof firstName === "string") return trim(firstName);
    var name = this.proxy("traits.name");
    if (typeof name === "string") return trim(name).split(" ")[0];
};
i.lastName = function() {
    var lastName = this.proxy("traits.lastName");
    if (typeof lastName === "string") return trim(lastName);
    var name = this.proxy("traits.name");
    if (typeof name !== "string") return;
    var space = trim(name).indexOf(" ");
    if (space === -1) return;
    return trim(name.substr(space + 1));
};
i.uid = function() {
    return this.userId() || this.username() || this.email();
};
i.description = function() {
    return this.proxy("traits.description") || this.proxy("traits.background");
};
i.age = function() {
    var date = this.birthday();
    var age = obj_case_1.default(this.traits(), "age");
    if (age != null) return age;
    if (!(date instanceof Date)) return;
    var now = new Date();
    return now.getFullYear() - date.getFullYear();
};
i.avatar = function() {
    var traits = this.traits();
    return obj_case_1.default(traits, "avatar") || obj_case_1.default(traits, "photoUrl") || obj_case_1.default(traits, "avatarUrl");
};
i.position = function() {
    var traits = this.traits();
    return obj_case_1.default(traits, "position") || obj_case_1.default(traits, "jobTitle");
};
i.username = facade_1.Facade.proxy("traits.username");
i.website = facade_1.Facade.one("traits.website");
i.websites = facade_1.Facade.multi("traits.website");
i.phone = facade_1.Facade.one("traits.phone");
i.phones = facade_1.Facade.multi("traits.phone");
i.address = facade_1.Facade.proxy("traits.address");
i.gender = facade_1.Facade.proxy("traits.gender");
i.birthday = facade_1.Facade.proxy("traits.birthday");

},{"1d15fb9bedcee421":"fO58B","90031cdad95380db":"kdNyl","9dec33e08b9dd4dd":"bRL3M","b65aa4cffd3720e2":"bSIk9","a7524d1218817873":"7u7jn"}],"jeBDG":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Track = void 0;
var inherits_1 = __importDefault(require("ef97448c695671e"));
var facade_1 = require("63a8fb8dc8aa36d9");
var identify_1 = require("db6b504c0c274670");
var is_email_1 = __importDefault(require("da19f2ae8cdbbaef"));
var obj_case_1 = __importDefault(require("8340893b7041997e"));
function Track(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Track = Track;
inherits_1.default(Track, facade_1.Facade);
var t = Track.prototype;
t.action = function() {
    return "track";
};
t.type = t.action;
t.event = facade_1.Facade.field("event");
t.value = facade_1.Facade.proxy("properties.value");
t.category = facade_1.Facade.proxy("properties.category");
t.id = facade_1.Facade.proxy("properties.id");
t.productId = function() {
    return this.proxy("properties.product_id") || this.proxy("properties.productId");
};
t.promotionId = function() {
    return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId");
};
t.cartId = function() {
    return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
};
t.checkoutId = function() {
    return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId");
};
t.paymentId = function() {
    return this.proxy("properties.payment_id") || this.proxy("properties.paymentId");
};
t.couponId = function() {
    return this.proxy("properties.coupon_id") || this.proxy("properties.couponId");
};
t.wishlistId = function() {
    return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId");
};
t.reviewId = function() {
    return this.proxy("properties.review_id") || this.proxy("properties.reviewId");
};
t.orderId = function() {
    return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId");
};
t.sku = facade_1.Facade.proxy("properties.sku");
t.tax = facade_1.Facade.proxy("properties.tax");
t.name = facade_1.Facade.proxy("properties.name");
t.price = facade_1.Facade.proxy("properties.price");
t.total = facade_1.Facade.proxy("properties.total");
t.repeat = facade_1.Facade.proxy("properties.repeat");
t.coupon = facade_1.Facade.proxy("properties.coupon");
t.shipping = facade_1.Facade.proxy("properties.shipping");
t.discount = facade_1.Facade.proxy("properties.discount");
t.shippingMethod = function() {
    return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod");
};
t.paymentMethod = function() {
    return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod");
};
t.description = facade_1.Facade.proxy("properties.description");
t.plan = facade_1.Facade.proxy("properties.plan");
t.subtotal = function() {
    var subtotal = obj_case_1.default(this.properties(), "subtotal");
    var total = this.total() || this.revenue();
    if (subtotal) return subtotal;
    if (!total) return 0;
    if (this.total()) {
        var n = this.tax();
        if (n) total -= n;
        n = this.shipping();
        if (n) total -= n;
        n = this.discount();
        if (n) total += n;
    }
    return total;
};
t.products = function() {
    var props = this.properties();
    var products = obj_case_1.default(props, "products");
    if (Array.isArray(products)) return products.filter(function(item) {
        return item !== null;
    });
    return [];
};
t.quantity = function() {
    var props = this.obj.properties || {};
    return props.quantity || 1;
};
t.currency = function() {
    var props = this.obj.properties || {};
    return props.currency || "USD";
};
t.referrer = function() {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
};
t.query = facade_1.Facade.proxy("options.query");
t.properties = function(aliases) {
    var ret = this.field("properties") || {};
    aliases = aliases || {};
    for(var alias in aliases)if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
        var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
        if (value == null) continue;
        ret[aliases[alias]] = value;
        delete ret[alias];
    }
    return ret;
};
t.username = function() {
    return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId();
};
t.email = function() {
    var email = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
    if (email) return email;
    var userId = this.userId();
    if (is_email_1.default(userId)) return userId;
};
t.revenue = function() {
    var revenue = this.proxy("properties.revenue");
    var event = this.event();
    var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
    if (!revenue && event && event.match(orderCompletedRegExp)) revenue = this.proxy("properties.total");
    return currency(revenue);
};
t.cents = function() {
    var revenue = this.revenue();
    return typeof revenue !== "number" ? this.value() || 0 : revenue * 100;
};
t.identify = function() {
    var json = this.json();
    json.traits = this.traits();
    return new identify_1.Identify(json, this.opts);
};
function currency(val) {
    if (!val) return;
    if (typeof val === "number") return val;
    if (typeof val !== "string") return;
    val = val.replace(/\$/g, "");
    val = parseFloat(val);
    if (!isNaN(val)) return val;
}

},{"ef97448c695671e":"bRL3M","63a8fb8dc8aa36d9":"fO58B","db6b504c0c274670":"jawbz","da19f2ae8cdbbaef":"bSIk9","8340893b7041997e":"kdNyl"}],"5aygZ":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page = void 0;
var inherits_1 = __importDefault(require("704987b37bf2ba5d"));
var facade_1 = require("f7f2f0b98e29f048");
var track_1 = require("e929e5bdeb05190f");
var is_email_1 = __importDefault(require("725b658d79ae58e0"));
function Page(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Page = Page;
inherits_1.default(Page, facade_1.Facade);
var p = Page.prototype;
p.action = function() {
    return "page";
};
p.type = p.action;
p.category = facade_1.Facade.field("category");
p.name = facade_1.Facade.field("name");
p.title = facade_1.Facade.proxy("properties.title");
p.path = facade_1.Facade.proxy("properties.path");
p.url = facade_1.Facade.proxy("properties.url");
p.referrer = function() {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
};
p.properties = function(aliases) {
    var props = this.field("properties") || {};
    var category = this.category();
    var name = this.name();
    aliases = aliases || {};
    if (category) props.category = category;
    if (name) props.name = name;
    for(var alias in aliases)if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
        var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
        if (value == null) continue;
        props[aliases[alias]] = value;
        if (alias !== aliases[alias]) delete props[alias];
    }
    return props;
};
p.email = function() {
    var email = this.proxy("context.traits.email") || this.proxy("properties.email");
    if (email) return email;
    var userId = this.userId();
    if (is_email_1.default(userId)) return userId;
};
p.fullName = function() {
    var category = this.category();
    var name = this.name();
    return name && category ? category + " " + name : name;
};
p.event = function(name) {
    return name ? "Viewed " + name + " Page" : "Loaded a Page";
};
p.track = function(name) {
    var json = this.json();
    json.event = this.event(name);
    json.timestamp = this.timestamp();
    json.properties = this.properties();
    return new track_1.Track(json, this.opts);
};

},{"704987b37bf2ba5d":"bRL3M","f7f2f0b98e29f048":"fO58B","e929e5bdeb05190f":"jeBDG","725b658d79ae58e0":"bSIk9"}],"k1tsP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Screen = void 0;
var inherits_1 = __importDefault(require("d8c86290fb06d737"));
var page_1 = require("8d1a1bde7fcfe277");
var track_1 = require("fa7a5e2d2434b00b");
function Screen(dictionary, opts) {
    page_1.Page.call(this, dictionary, opts);
}
exports.Screen = Screen;
inherits_1.default(Screen, page_1.Page);
Screen.prototype.action = function() {
    return "screen";
};
Screen.prototype.type = Screen.prototype.action;
Screen.prototype.event = function(name) {
    return name ? "Viewed " + name + " Screen" : "Loaded a Screen";
};
Screen.prototype.track = function(name) {
    var json = this.json();
    json.event = this.event(name);
    json.timestamp = this.timestamp();
    json.properties = this.properties();
    return new track_1.Track(json, this.opts);
};

},{"d8c86290fb06d737":"bRL3M","8d1a1bde7fcfe277":"5aygZ","fa7a5e2d2434b00b":"jeBDG"}],"7JRrF":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Delete = void 0;
var inherits_1 = __importDefault(require("c2cd0efed4550db"));
var facade_1 = require("52adb156565cd0f3");
function Delete(dictionary, opts) {
    facade_1.Facade.call(this, dictionary, opts);
}
exports.Delete = Delete;
inherits_1.default(Delete, facade_1.Facade);
Delete.prototype.type = function() {
    return "delete";
};

},{"c2cd0efed4550db":"bRL3M","52adb156565cd0f3":"fO58B"}],"Om5MR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "recordIntegrationMetric", ()=>recordIntegrationMetric);
function recordIntegrationMetric(ctx, _a) {
    var methodName = _a.methodName, integrationName = _a.integrationName, type = _a.type, _b = _a.didError, didError = _b === void 0 ? false : _b;
    ctx.stats.increment("analytics_js.integration.invoke".concat(didError ? ".error" : ""), 1, [
        "method:".concat(methodName),
        "integration_name:".concat(integrationName),
        "type:".concat(type)
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tCc6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "segmentio", ()=>segmentio);
var _tslib = require("tslib");
var _connection = require("../../core/connection");
var _priorityQueue = require("../../lib/priority-queue");
var _persisted = require("../../lib/priority-queue/persisted");
var _toFacade = require("../../lib/to-facade");
var _batchedDispatcher = require("./batched-dispatcher");
var _batchedDispatcherDefault = parcelHelpers.interopDefault(_batchedDispatcher);
var _fetchDispatcher = require("./fetch-dispatcher");
var _fetchDispatcherDefault = parcelHelpers.interopDefault(_fetchDispatcher);
var _normalize = require("./normalize");
var _scheduleFlush = require("./schedule-flush");
var _constants = require("../../core/constants");
function onAlias(analytics, json) {
    var _a, _b, _c, _d;
    var user = analytics.user();
    json.previousId = (_c = (_b = (_a = json.previousId) !== null && _a !== void 0 ? _a : json.from) !== null && _b !== void 0 ? _b : user.id()) !== null && _c !== void 0 ? _c : user.anonymousId();
    json.userId = (_d = json.userId) !== null && _d !== void 0 ? _d : json.to;
    delete json.from;
    delete json.to;
    return json;
}
function segmentio(analytics, settings, integrations) {
    var _a, _b, _c;
    // Attach `pagehide` before buffer is created so that inflight events are added
    // to the buffer before the buffer persists events in its own `pagehide` handler.
    window.addEventListener("pagehide", function() {
        buffer.push.apply(buffer, Array.from(inflightEvents));
        inflightEvents.clear();
    });
    var writeKey = (_a = settings === null || settings === void 0 ? void 0 : settings.apiKey) !== null && _a !== void 0 ? _a : "";
    var buffer = analytics.options.disableClientPersistence ? new (0, _priorityQueue.PriorityQueue)(analytics.queue.queue.maxAttempts, []) : new (0, _persisted.PersistedPriorityQueue)(analytics.queue.queue.maxAttempts, "".concat(writeKey, ":dest-Segment.io"));
    var inflightEvents = new Set();
    var flushing = false;
    var apiHost = (_b = settings === null || settings === void 0 ? void 0 : settings.apiHost) !== null && _b !== void 0 ? _b : (0, _constants.SEGMENT_API_HOST);
    var protocol = (_c = settings === null || settings === void 0 ? void 0 : settings.protocol) !== null && _c !== void 0 ? _c : "https";
    var remote = "".concat(protocol, "://").concat(apiHost);
    var deliveryStrategy = settings === null || settings === void 0 ? void 0 : settings.deliveryStrategy;
    var client = (deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.strategy) === "batching" ? (0, _batchedDispatcherDefault.default)(apiHost, deliveryStrategy.config) : (0, _fetchDispatcherDefault.default)(deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.config);
    function send(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var path, json;
            return (0, _tslib.__generator)(this, function(_a) {
                if ((0, _connection.isOffline)()) {
                    buffer.push(ctx);
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    (0, _scheduleFlush.scheduleFlush)(flushing, buffer, segmentio, (0, _scheduleFlush.scheduleFlush));
                    return [
                        2 /*return*/ ,
                        ctx
                    ];
                }
                inflightEvents.add(ctx);
                path = ctx.event.type.charAt(0);
                json = (0, _toFacade.toFacade)(ctx.event).json();
                if (ctx.event.type === "track") delete json.traits;
                if (ctx.event.type === "alias") json = onAlias(analytics, json);
                return [
                    2 /*return*/ ,
                    client.dispatch("".concat(remote, "/").concat(path), (0, _normalize.normalize)(analytics, json, settings, integrations)).then(function() {
                        return ctx;
                    }).catch(function() {
                        buffer.pushWithBackoff(ctx);
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        (0, _scheduleFlush.scheduleFlush)(flushing, buffer, segmentio, (0, _scheduleFlush.scheduleFlush));
                        return ctx;
                    }).finally(function() {
                        inflightEvents.delete(ctx);
                    })
                ];
            });
        });
    }
    var segmentio = {
        name: "Segment.io",
        type: "destination",
        version: "0.1.0",
        isLoaded: function() {
            return true;
        },
        load: function() {
            return Promise.resolve();
        },
        track: send,
        identify: send,
        page: send,
        alias: send,
        group: send,
        screen: send
    };
    // Buffer may already have items if they were previously stored in localStorage.
    // Start flushing them immediately.
    if (buffer.todo) (0, _scheduleFlush.scheduleFlush)(flushing, buffer, segmentio, (0, _scheduleFlush.scheduleFlush));
    return segmentio;
}

},{"tslib":"lRdW5","../../core/connection":"cltJ9","../../lib/priority-queue":"boWrR","../../lib/priority-queue/persisted":"iSc7g","../../lib/to-facade":"8zCZx","./batched-dispatcher":"gGWzq","./fetch-dispatcher":"6xyOG","./normalize":"bG3m9","./schedule-flush":"7L59o","../../core/constants":"4C480","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGWzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>batch);
var _tslib = require("tslib");
var _fetch = require("../../lib/fetch");
var _onPageChange = require("../../lib/on-page-change");
var MAX_PAYLOAD_SIZE = 500;
function kilobytes(buffer) {
    var size = encodeURI(JSON.stringify(buffer)).split(/%..|./).length - 1;
    return size / 1024;
}
/**
 * Checks if the payload is over or close to
 * the maximum payload size allowed by tracking
 * API.
 */ function approachingTrackingAPILimit(buffer) {
    return kilobytes(buffer) >= MAX_PAYLOAD_SIZE - 50;
}
function chunks(batch) {
    var result = [];
    var index = 0;
    batch.forEach(function(item) {
        var size = kilobytes(result[index]);
        if (size >= 64) index++;
        if (result[index]) result[index].push(item);
        else result[index] = [
            item
        ];
    });
    return result;
}
function batch(apiHost, config) {
    var _a, _b;
    var buffer = [];
    var pageUnloaded = false;
    var limit = (_a = config === null || config === void 0 ? void 0 : config.size) !== null && _a !== void 0 ? _a : 10;
    var timeout = (_b = config === null || config === void 0 ? void 0 : config.timeout) !== null && _b !== void 0 ? _b : 5000;
    function sendBatch(batch) {
        var _a;
        if (batch.length === 0) return;
        var writeKey = (_a = batch[0]) === null || _a === void 0 ? void 0 : _a.writeKey;
        // Remove sentAt from every event as batching only needs a single timestamp
        var updatedBatch = batch.map(function(event) {
            var _a = event, sentAt = _a.sentAt, newEvent = (0, _tslib.__rest)(_a, [
                "sentAt"
            ]);
            return newEvent;
        });
        return (0, _fetch.fetch)("https://".concat(apiHost, "/b"), {
            keepalive: pageUnloaded,
            headers: {
                "Content-Type": "text/plain"
            },
            method: "post",
            body: JSON.stringify({
                writeKey: writeKey,
                batch: updatedBatch,
                sentAt: new Date().toISOString()
            })
        });
    }
    function flush() {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var batch_1;
            return (0, _tslib.__generator)(this, function(_a) {
                if (buffer.length) {
                    batch_1 = buffer;
                    buffer = [];
                    return [
                        2 /*return*/ ,
                        sendBatch(batch_1)
                    ];
                }
                return [
                    2 /*return*/ 
                ];
            });
        });
    }
    var schedule;
    function scheduleFlush() {
        if (schedule) return;
        schedule = setTimeout(function() {
            schedule = undefined;
            flush().catch(console.error);
        }, timeout);
    }
    (0, _onPageChange.onPageChange)(function(unloaded) {
        pageUnloaded = unloaded;
        if (pageUnloaded && buffer.length) {
            var reqs = chunks(buffer).map(sendBatch);
            Promise.all(reqs).catch(console.error);
        }
    });
    function dispatch(_url, body) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var bufferOverflow;
            return (0, _tslib.__generator)(this, function(_a) {
                buffer.push(body);
                bufferOverflow = buffer.length >= limit || approachingTrackingAPILimit(buffer);
                return [
                    2 /*return*/ ,
                    bufferOverflow || pageUnloaded ? flush() : scheduleFlush()
                ];
            });
        });
    }
    return {
        dispatch: dispatch
    };
}

},{"tslib":"lRdW5","../../lib/fetch":"48GFJ","../../lib/on-page-change":"a7T3q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7T3q":[function(require,module,exports) {
/**
 * Register event listener on document that fires when:
 * * tab change or tab close (in mobile or desktop)
 * * click back / forward button
 * * click any link or perform any other navigation action
 * * soft refresh / hard refresh
 *
 * adapted from https://stackoverflow.com/questions/3239834/window-onbeforeunload-not-working-on-the-ipad/52864508#52864508,
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onPageChange", ()=>onPageChange);
var onPageChange = function(cb) {
    var unloaded = false; // prevents double firing if both are supported
    window.addEventListener("pagehide", function() {
        if (unloaded) return;
        unloaded = true;
        cb(unloaded);
    });
    // using document instead of window because of bug affecting browsers before safari 14 (detail in footnotes https://caniuse.com/?search=visibilitychange)
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState == "hidden") {
            if (unloaded) return;
            unloaded = true;
        } else unloaded = false;
        cb(unloaded);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xyOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(config) {
        function dispatch(url, body) {
            return (0, _fetch.fetch)(url, {
                keepalive: config === null || config === void 0 ? void 0 : config.keepalive,
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "post",
                body: JSON.stringify(body)
            });
        }
        return {
            dispatch: dispatch
        };
    });
var _fetch = require("../../lib/fetch");

},{"../../lib/fetch":"48GFJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bG3m9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalize", ()=>normalize);
var _tslib = require("tslib");
function normalize(analytics, json, settings, integrations) {
    var _a;
    var user = analytics.user();
    delete json.options;
    json.writeKey = settings === null || settings === void 0 ? void 0 : settings.apiKey;
    json.userId = json.userId || user.id();
    json.anonymousId = json.anonymousId || user.anonymousId();
    json.sentAt = new Date();
    var failed = analytics.queue.failedInitializations || [];
    if (failed.length > 0) json._metadata = {
        failedInitializations: failed
    };
    var bundled = [];
    var unbundled = [];
    for(var key in integrations){
        var integration = integrations[key];
        if (key === "Segment.io") bundled.push(key);
        if (integration.bundlingStatus === "bundled") bundled.push(key);
        if (integration.bundlingStatus === "unbundled") unbundled.push(key);
    }
    // This will make sure that the disabled cloud mode destinations will be
    // included in the unbundled list.
    for(var _i = 0, _b = (settings === null || settings === void 0 ? void 0 : settings.unbundledIntegrations) || []; _i < _b.length; _i++){
        var settingsUnbundled = _b[_i];
        if (!unbundled.includes(settingsUnbundled)) unbundled.push(settingsUnbundled);
    }
    var configIds = (_a = settings === null || settings === void 0 ? void 0 : settings.maybeBundledConfigIds) !== null && _a !== void 0 ? _a : {};
    var bundledConfigIds = [];
    bundled.sort().forEach(function(name) {
        var _a;
        ((_a = configIds[name]) !== null && _a !== void 0 ? _a : []).forEach(function(id) {
            bundledConfigIds.push(id);
        });
    });
    if ((settings === null || settings === void 0 ? void 0 : settings.addBundledMetadata) !== false) json._metadata = (0, _tslib.__assign)((0, _tslib.__assign)({}, json._metadata), {
        bundled: bundled.sort(),
        unbundled: unbundled.sort(),
        bundledIds: bundledConfigIds
    });
    return json;
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7L59o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleFlush", ()=>scheduleFlush);
var _tslib = require("tslib");
var _connection = require("../../core/connection");
var _context = require("../../core/context");
var _analyticsCore = require("@segment/analytics-core");
var _pWhile = require("../../lib/p-while");
function flushQueue(xt, queue) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var failedQueue;
        var _this = this;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    failedQueue = [];
                    if ((0, _connection.isOffline)()) return [
                        2 /*return*/ ,
                        queue
                    ];
                    return [
                        4 /*yield*/ ,
                        (0, _pWhile.pWhile)(function() {
                            return queue.length > 0 && !(0, _connection.isOffline)();
                        }, function() {
                            return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                                var ctx, result, success;
                                return (0, _tslib.__generator)(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            ctx = queue.pop();
                                            if (!ctx) return [
                                                2 /*return*/ 
                                            ];
                                            return [
                                                4 /*yield*/ ,
                                                (0, _analyticsCore.attempt)(ctx, xt)
                                            ];
                                        case 1:
                                            result = _a.sent();
                                            success = result instanceof (0, _context.Context);
                                            if (!success) failedQueue.push(ctx);
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        })
                    ];
                case 1:
                    _a.sent();
                    // re-add failed tasks
                    failedQueue.map(function(failed) {
                        return queue.pushWithBackoff(failed);
                    });
                    return [
                        2 /*return*/ ,
                        queue
                    ];
            }
        });
    });
}
function scheduleFlush(flushing, buffer, xt, scheduleFlush) {
    var _this = this;
    if (flushing) return;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(function() {
        return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
            var isFlushing, newBuffer;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        isFlushing = true;
                        return [
                            4 /*yield*/ ,
                            flushQueue(xt, buffer)
                        ];
                    case 1:
                        newBuffer = _a.sent();
                        isFlushing = false;
                        if (buffer.todo > 0) scheduleFlush(isFlushing, newBuffer, xt, scheduleFlush);
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, Math.random() * 5000);
}

},{"tslib":"lRdW5","../../core/connection":"cltJ9","../../core/context":"b85Be","@segment/analytics-core":"7b8vz","../../lib/p-while":"kW2wA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW2wA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pWhile", ()=>pWhile);
var _tslib = require("tslib");
var pWhile = function(condition, action) {
    return (0, _tslib.__awaiter)(void 0, void 0, void 0, function() {
        var loop;
        return (0, _tslib.__generator)(this, function(_a) {
            loop = function(actionResult) {
                return (0, _tslib.__awaiter)(void 0, void 0, void 0, function() {
                    var _a;
                    return (0, _tslib.__generator)(this, function(_b) {
                        switch(_b.label){
                            case 0:
                                if (!condition(actionResult)) return [
                                    3 /*break*/ ,
                                    2
                                ];
                                _a = loop;
                                return [
                                    4 /*yield*/ ,
                                    action()
                                ];
                            case 1:
                                return [
                                    2 /*return*/ ,
                                    _a.apply(void 0, [
                                        _b.sent()
                                    ])
                                ];
                            case 2:
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            };
            return [
                2 /*return*/ ,
                loop(undefined)
            ];
        });
    });
};

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3pK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validation", ()=>validation);
var _analyticsCore = require("@segment/analytics-core");
function validate(ctx) {
    var _a;
    var event = ctx.event;
    (0, _analyticsCore.assertEventExists)(event);
    (0, _analyticsCore.assertEventType)(event);
    if (event.type === "track") (0, _analyticsCore.assertTrackEventName)(event);
    var props = (_a = event.properties) !== null && _a !== void 0 ? _a : event.traits;
    if (event.type !== "alias" && !(0, _analyticsCore.isPlainObject)(props)) throw new (0, _analyticsCore.ValidationError)(".properties", "is not an object");
    (0, _analyticsCore.assertUserIdentity)(event);
    return ctx;
}
var validation = {
    name: "Event Validation",
    type: "before",
    version: "1.0.0",
    isLoaded: function() {
        return true;
    },
    load: function() {
        return Promise.resolve();
    },
    track: validate,
    identify: validate,
    page: validate,
    alias: validate,
    group: validate,
    screen: validate
};

},{"@segment/analytics-core":"7b8vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHH9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachInspector", ()=>attachInspector);
var _getGlobal = require("../../lib/get-global");
var _a;
var _b;
var env = (0, _getGlobal.getGlobal)();
// The code below assumes the inspector extension will use Object.assign
// to add the inspect interface on to this object reference (unless the
// extension code ran first and has already set up the variable)
var inspectorHost = (_a = (_b = env)["__SEGMENT_INSPECTOR__"]) !== null && _a !== void 0 ? _a : _b["__SEGMENT_INSPECTOR__"] = {};
var attachInspector = function(analytics) {
    var _a;
    return (_a = inspectorHost.attach) === null || _a === void 0 ? void 0 : _a.call(inspectorHost, analytics);
};

},{"../../lib/get-global":"43DpR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zc0B":[function(require,module,exports) {
module.exports = require("5e239d0fcca4b4c3")(require("ba8534c329efd70f").getBundleURL("y9OjY") + "routing-middleware.eb6cf104.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("gyL8H"));

},{"5e239d0fcca4b4c3":"61B45","ba8534c329efd70f":"lgJ39"}],"eJ4HT":[function(require,module,exports) {
module.exports = require("645fdd295101b0c8")(require("cbde3079f07d474").getBundleURL("y9OjY") + "ajs-destination.48300f65.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("7iEEO"));

},{"645fdd295101b0c8":"61B45","cbde3079f07d474":"lgJ39"}],"iCm7q":[function(require,module,exports) {
module.exports = require("9adbe8ef5510cc4c")(require("403659435077929b").getBundleURL("y9OjY") + "legacy-video-plugins.887e20f2.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("8Cdxb"));

},{"9adbe8ef5510cc4c":"61B45","403659435077929b":"lgJ39"}],"7MBZz":[function(require,module,exports) {
module.exports = require("bc8f39fb9baa1f3a")(require("ca9ece8ea102fdb9").getBundleURL("y9OjY") + "schema-filter.739a5a8b.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("cc4YZ"));

},{"bc8f39fb9baa1f3a":"61B45","ca9ece8ea102fdb9":"lgJ39"}],"hnhVR":[function(require,module,exports) {
module.exports = require("93d7ee729907bfd3")(require("763c5dfcce9f3efd").getBundleURL("y9OjY") + "remote-middleware.04360365.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fI6vn"));

},{"93d7ee729907bfd3":"61B45","763c5dfcce9f3efd":"lgJ39"}]},["iJebt","jj0n4"], "jj0n4", "parcelRequire5b12")

//# sourceMappingURL=index.001f4dae.js.map
