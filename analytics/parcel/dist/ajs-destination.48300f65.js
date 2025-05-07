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
})({"02zza":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bde5fa9648300f65";
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

},{}],"7iEEO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LegacyDestination", ()=>LegacyDestination);
parcelHelpers.export(exports, "ajsDestinations", ()=>ajsDestinations);
var _tslib = require("tslib");
var _facade = require("@segment/facade");
var _connection = require("../../core/connection");
var _context = require("../../core/context");
var _environment = require("../../core/environment");
var _analyticsCore = require("@segment/analytics-core");
var _isPlanEventEnabled = require("../../lib/is-plan-event-enabled");
var _mergedOptions = require("../../lib/merged-options");
var _pWhile = require("../../lib/p-while");
var _priorityQueue = require("../../lib/priority-queue");
var _persisted = require("../../lib/priority-queue/persisted");
var _middleware = require("../middleware");
var _loader = require("./loader");
var _utils = require("./utils");
var _metricHelpers = require("../../core/stats/metric-helpers");
var _analyticsGenericUtils = require("@segment/analytics-generic-utils");
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
                            return queue.length > 0 && (0, _connection.isOnline)();
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
var LegacyDestination = /** @class */ function() {
    function LegacyDestination(name, version, writeKey, settings, options, integrationSource) {
        if (settings === void 0) settings = {};
        var _this = this;
        this.options = {};
        this.type = "destination";
        this.middleware = [];
        this.initializePromise = (0, _analyticsGenericUtils.createDeferred)();
        this.flushing = false;
        this.name = name;
        this.version = version;
        this.settings = (0, _tslib.__assign)({}, settings);
        this.disableAutoISOConversion = options.disableAutoISOConversion || false;
        this.integrationSource = integrationSource;
        // AJS-Renderer sets an extraneous `type` setting that clobbers
        // existing type defaults. We need to remove it if it's present
        if (this.settings["type"] && this.settings["type"] === "browser") delete this.settings["type"];
        this.initializePromise.promise.then(function(isInitialized) {
            return _this._initialized = isInitialized;
        }, function() {});
        this.options = options;
        this.buffer = options.disableClientPersistence ? new (0, _priorityQueue.PriorityQueue)(4, []) : new (0, _persisted.PersistedPriorityQueue)(4, "".concat(writeKey, ":dest-").concat(name));
        this.scheduleFlush();
    }
    LegacyDestination.prototype.isLoaded = function() {
        return !!this._ready;
    };
    LegacyDestination.prototype.ready = function() {
        var _this = this;
        return this.initializePromise.promise.then(function() {
            var _a;
            return (_a = _this.onReady) !== null && _a !== void 0 ? _a : Promise.resolve();
        });
    };
    LegacyDestination.prototype.load = function(ctx, analyticsInstance) {
        var _a;
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var integrationSource, _b;
            var _this = this;
            return (0, _tslib.__generator)(this, function(_c) {
                switch(_c.label){
                    case 0:
                        if (this._ready || this.onReady !== undefined) return [
                            2 /*return*/ 
                        ];
                        if (!((_a = this.integrationSource) !== null && _a !== void 0)) return [
                            3 /*break*/ ,
                            1
                        ];
                        _b = _a;
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 1:
                        return [
                            4 /*yield*/ ,
                            (0, _loader.loadIntegration)(ctx, this.name, this.version, this.options.obfuscate)
                        ];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        integrationSource = _b;
                        this.integration = (0, _loader.buildIntegration)(integrationSource, this.settings, analyticsInstance);
                        this.onReady = new Promise(function(resolve) {
                            var onReadyFn = function() {
                                _this._ready = true;
                                resolve(true);
                            };
                            _this.integration.once("ready", onReadyFn);
                        });
                        this.integration.on("initialize", function() {
                            _this.initializePromise.resolve(true);
                        });
                        try {
                            (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                                integrationName: this.name,
                                methodName: "initialize",
                                type: "classic"
                            });
                            this.integration.initialize();
                        } catch (error) {
                            (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                                integrationName: this.name,
                                methodName: "initialize",
                                type: "classic",
                                didError: true
                            });
                            this.initializePromise.resolve(false);
                            throw error;
                        }
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    LegacyDestination.prototype.unload = function(_ctx, _analyticsInstance) {
        return (0, _loader.unloadIntegration)(this.name, this.version, this.options.obfuscate);
    };
    LegacyDestination.prototype.addMiddleware = function() {
        var _a;
        var fn = [];
        for(var _i = 0; _i < arguments.length; _i++)fn[_i] = arguments[_i];
        this.middleware = (_a = this.middleware).concat.apply(_a, fn);
    };
    LegacyDestination.prototype.shouldBuffer = function(ctx) {
        return(// page events can't be buffered because of destinations that automatically add page views
        ctx.event.type !== "page" && ((0, _connection.isOffline)() || this._ready === false || this._initialized === false));
    };
    LegacyDestination.prototype.send = function(ctx, clz, eventType) {
        var _a, _b;
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var plan, ev, planEvent, afterMiddleware, event, err_1;
            return (0, _tslib.__generator)(this, function(_c) {
                switch(_c.label){
                    case 0:
                        if (this.shouldBuffer(ctx)) {
                            this.buffer.push(ctx);
                            this.scheduleFlush();
                            return [
                                2 /*return*/ ,
                                ctx
                            ];
                        }
                        plan = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.plan) === null || _b === void 0 ? void 0 : _b.track;
                        ev = ctx.event.event;
                        if (plan && ev && this.name !== "Segment.io") {
                            planEvent = plan[ev];
                            if (!(0, _isPlanEventEnabled.isPlanEventEnabled)(plan, planEvent)) {
                                ctx.updateEvent("integrations", (0, _tslib.__assign)((0, _tslib.__assign)({}, ctx.event.integrations), {
                                    All: false,
                                    "Segment.io": true
                                }));
                                ctx.cancel(new (0, _context.ContextCancelation)({
                                    retry: false,
                                    reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
                                    type: "Dropped by plan"
                                }));
                                return [
                                    2 /*return*/ ,
                                    ctx
                                ];
                            } else ctx.updateEvent("integrations", (0, _tslib.__assign)((0, _tslib.__assign)({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations));
                            if ((planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) && (planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations[this.name]) === false) {
                                ctx.cancel(new (0, _context.ContextCancelation)({
                                    retry: false,
                                    reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
                                    type: "Dropped by plan"
                                }));
                                return [
                                    2 /*return*/ ,
                                    ctx
                                ];
                            }
                        }
                        return [
                            4 /*yield*/ ,
                            (0, _middleware.applyDestinationMiddleware)(this.name, ctx.event, this.middleware)
                        ];
                    case 1:
                        afterMiddleware = _c.sent();
                        if (afterMiddleware === null) return [
                            2 /*return*/ ,
                            ctx
                        ];
                        event = new clz(afterMiddleware, {
                            traverse: !this.disableAutoISOConversion
                        });
                        (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                            integrationName: this.name,
                            methodName: eventType,
                            type: "classic"
                        });
                        _c.label = 2;
                    case 2:
                        _c.trys.push([
                            2,
                            5,
                            ,
                            6
                        ]);
                        if (!this.integration) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            this.integration.invoke.call(this.integration, eventType, event)
                        ];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_1 = _c.sent();
                        (0, _metricHelpers.recordIntegrationMetric)(ctx, {
                            integrationName: this.name,
                            methodName: eventType,
                            type: "classic",
                            didError: true
                        });
                        throw err_1;
                    case 6:
                        return [
                            2 /*return*/ ,
                            ctx
                        ];
                }
            });
        });
    };
    LegacyDestination.prototype.track = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.send(ctx, (0, _facade.Track), "track")
                ];
            });
        });
    };
    LegacyDestination.prototype.page = function(ctx) {
        var _a;
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (((_a = this.integration) === null || _a === void 0 ? void 0 : _a._assumesPageview) && !this._initialized) this.integration.initialize();
                        return [
                            4 /*yield*/ ,
                            this.initializePromise.promise
                        ];
                    case 1:
                        _b.sent();
                        return [
                            2 /*return*/ ,
                            this.send(ctx, (0, _facade.Page), "page")
                        ];
                }
            });
        });
    };
    LegacyDestination.prototype.identify = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.send(ctx, (0, _facade.Identify), "identify")
                ];
            });
        });
    };
    LegacyDestination.prototype.alias = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.send(ctx, (0, _facade.Alias), "alias")
                ];
            });
        });
    };
    LegacyDestination.prototype.group = function(ctx) {
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            return (0, _tslib.__generator)(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.send(ctx, (0, _facade.Group), "group")
                ];
            });
        });
    };
    LegacyDestination.prototype.scheduleFlush = function() {
        var _this = this;
        if (this.flushing) return;
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        setTimeout(function() {
            return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
                var _a;
                return (0, _tslib.__generator)(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            this.flushing = true;
                            _a = this;
                            return [
                                4 /*yield*/ ,
                                flushQueue(this, this.buffer)
                            ];
                        case 1:
                            _a.buffer = _b.sent();
                            this.flushing = false;
                            if (this.buffer.todo > 0) this.scheduleFlush();
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        }, Math.random() * 5000);
    };
    return LegacyDestination;
}();
function ajsDestinations(writeKey, settings, globalIntegrations, options, routingMiddleware, legacyIntegrationSources) {
    var _a, _b;
    if (globalIntegrations === void 0) globalIntegrations = {};
    if (options === void 0) options = {};
    if ((0, _environment.isServer)()) return [];
    if (settings.plan) {
        options = options !== null && options !== void 0 ? options : {};
        options.plan = settings.plan;
    }
    var routingRules = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) !== null && _b !== void 0 ? _b : [];
    var remoteIntegrationsConfig = settings.integrations;
    var localIntegrationsConfig = options.integrations;
    // merged remote CDN settings with user provided options
    var integrationOptions = (0, _mergedOptions.mergedOptions)(settings, options !== null && options !== void 0 ? options : {});
    var adhocIntegrationSources = legacyIntegrationSources === null || legacyIntegrationSources === void 0 ? void 0 : legacyIntegrationSources.reduce(function(acc, integrationSource) {
        var _a;
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, acc), (_a = {}, _a[(0, _loader.resolveIntegrationNameFromSource)(integrationSource)] = integrationSource, _a));
    }, {});
    var installableIntegrations = new Set((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], Object.keys(remoteIntegrationsConfig).filter(function(name) {
        return (0, _utils.isInstallableIntegration)(name, remoteIntegrationsConfig[name]);
    }), true), Object.keys(adhocIntegrationSources || {}).filter(function(name) {
        return (0, _analyticsCore.isPlainObject)(remoteIntegrationsConfig[name]) || (0, _analyticsCore.isPlainObject)(localIntegrationsConfig === null || localIntegrationsConfig === void 0 ? void 0 : localIntegrationsConfig[name]);
    }), true));
    return Array.from(installableIntegrations).filter(function(name) {
        return !(0, _utils.isDisabledIntegration)(name, globalIntegrations);
    }).map(function(name) {
        var integrationSettings = remoteIntegrationsConfig[name];
        var version = (0, _loader.resolveVersion)(integrationSettings);
        var destination = new LegacyDestination(name, version, writeKey, integrationOptions[name], options, adhocIntegrationSources === null || adhocIntegrationSources === void 0 ? void 0 : adhocIntegrationSources[name]);
        var routing = routingRules.filter(function(rule) {
            return rule.destinationName === name;
        });
        if (routing.length > 0 && routingMiddleware) destination.addMiddleware(routingMiddleware);
        return destination;
    });
}

},{"tslib":"lRdW5","@segment/facade":"emU1t","../../core/connection":"cltJ9","../../core/context":"b85Be","../../core/environment":"2R1Ot","@segment/analytics-core":"7b8vz","../../lib/is-plan-event-enabled":"dVwrQ","../../lib/merged-options":"hX5N1","../../lib/p-while":"kW2wA","../../lib/priority-queue":"boWrR","../../lib/priority-queue/persisted":"iSc7g","../middleware":"dqLkl","./loader":"k07JY","./utils":"hV17n","../../core/stats/metric-helpers":"Om5MR","@segment/analytics-generic-utils":"h6A2f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVwrQ":[function(require,module,exports) {
/**
 * Determines whether a track event is allowed to be sent based on the
 * user's tracking plan.
 * If the user does not have a tracking plan or the event is allowed based
 * on the tracking plan configuration, returns true.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPlanEventEnabled", ()=>isPlanEventEnabled);
function isPlanEventEnabled(plan, planEvent) {
    var _a, _b;
    // Always prioritize the event's `enabled` status
    if (typeof (planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) === "boolean") return planEvent.enabled;
    // Assume absence of a tracking plan means events are enabled
    return (_b = (_a = plan === null || plan === void 0 ? void 0 : plan.__default) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k07JY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveIntegrationNameFromSource", ()=>resolveIntegrationNameFromSource);
parcelHelpers.export(exports, "buildIntegration", ()=>buildIntegration);
parcelHelpers.export(exports, "loadIntegration", ()=>loadIntegration);
parcelHelpers.export(exports, "unloadIntegration", ()=>unloadIntegration);
parcelHelpers.export(exports, "resolveVersion", ()=>resolveVersion);
var _tslib = require("tslib");
var _parseCdn = require("../../lib/parse-cdn");
var _loadScript = require("../../lib/load-script");
function normalizeName(name) {
    return name.toLowerCase().replace(".", "").replace(/\s+/g, "-");
}
function obfuscatePathName(pathName, obfuscate) {
    if (obfuscate === void 0) obfuscate = false;
    return obfuscate ? btoa(pathName).replace(/=/g, "") : undefined;
}
function resolveIntegrationNameFromSource(integrationSource) {
    return ("Integration" in integrationSource ? integrationSource.Integration : integrationSource).prototype.name;
}
function recordLoadMetrics(fullPath, ctx, name) {
    var _a, _b;
    try {
        var metric = ((_b = (_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.getEntriesByName(fullPath, "resource")) !== null && _b !== void 0 ? _b : [])[0];
        // we assume everything that took under 100ms is cached
        metric && ctx.stats.gauge("legacy_destination_time", Math.round(metric.duration), (0, _tslib.__spreadArray)([
            name
        ], metric.duration < 100 ? [
            "cached"
        ] : [], true));
    } catch (_) {
    // not available
    }
}
function buildIntegration(integrationSource, integrationSettings, analyticsInstance) {
    var integrationCtr;
    // GA and Appcues use a different interface to instantiating integrations
    if ("Integration" in integrationSource) {
        var analyticsStub = {
            user: function() {
                return analyticsInstance.user();
            },
            addIntegration: function() {}
        };
        integrationSource(analyticsStub);
        integrationCtr = integrationSource.Integration;
    } else integrationCtr = integrationSource;
    var integration = new integrationCtr(integrationSettings);
    integration.analytics = analyticsInstance;
    return integration;
}
function loadIntegration(ctx, name, version, obfuscate) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var pathName, obfuscatedPathName, path, fullPath, err_1, deps;
        return (0, _tslib.__generator)(this, function(_a) {
            switch(_a.label){
                case 0:
                    pathName = normalizeName(name);
                    obfuscatedPathName = obfuscatePathName(pathName, obfuscate);
                    path = (0, _parseCdn.getNextIntegrationsURL)();
                    fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
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
                        (0, _loadScript.loadScript)(fullPath)
                    ];
                case 2:
                    _a.sent();
                    recordLoadMetrics(fullPath, ctx, name);
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 3:
                    err_1 = _a.sent();
                    ctx.stats.gauge("legacy_destination_time", -1, [
                        "plugin:".concat(name),
                        "failed"
                    ]);
                    throw err_1;
                case 4:
                    deps = window["".concat(pathName, "Deps")];
                    return [
                        4 /*yield*/ ,
                        Promise.all(deps.map(function(dep) {
                            return (0, _loadScript.loadScript)(path + dep + ".gz");
                        }))
                    ];
                case 5:
                    _a.sent();
                    // @ts-ignore
                    window["".concat(pathName, "Loader")]();
                    return [
                        2 /*return*/ ,
                        window[// @ts-ignore
                        "".concat(pathName, "Integration")]
                    ];
            }
        });
    });
}
function unloadIntegration(name, version, obfuscate) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var path, pathName, obfuscatedPathName, fullPath;
        return (0, _tslib.__generator)(this, function(_a) {
            path = (0, _parseCdn.getNextIntegrationsURL)();
            pathName = normalizeName(name);
            obfuscatedPathName = obfuscatePathName(name, obfuscate);
            fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
            return [
                2 /*return*/ ,
                (0, _loadScript.unloadScript)(fullPath)
            ];
        });
    });
}
function resolveVersion(settings) {
    var _a, _b, _c, _d;
    return (_d = (_b = (_a = settings === null || settings === void 0 ? void 0 : settings.versionSettings) === null || _a === void 0 ? void 0 : _a.override) !== null && _b !== void 0 ? _b : (_c = settings === null || settings === void 0 ? void 0 : settings.versionSettings) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : "latest";
}

},{"tslib":"lRdW5","../../lib/parse-cdn":"hYrg0","../../lib/load-script":"7tK82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV17n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInstallableIntegration", ()=>isInstallableIntegration);
parcelHelpers.export(exports, "isDisabledIntegration", ()=>isDisabledIntegration);
var isInstallableIntegration = function(name, integrationSettings) {
    var _a;
    var type = integrationSettings.type, bundlingStatus = integrationSettings.bundlingStatus, versionSettings = integrationSettings.versionSettings;
    // We use `!== 'unbundled'` (versus `=== 'bundled'`) to be inclusive of
    // destinations without a defined value for `bundlingStatus`
    var deviceMode = bundlingStatus !== "unbundled" && (type === "browser" || ((_a = versionSettings === null || versionSettings === void 0 ? void 0 : versionSettings.componentTypes) === null || _a === void 0 ? void 0 : _a.includes("browser")));
    // checking for iterable is a quick fix we need in place to prevent
    // errors showing Iterable as a failed destiantion. Ideally, we should
    // fix the Iterable metadata instead, but that's a longer process.
    return !name.startsWith("Segment") && name !== "Iterable" && deviceMode;
};
var isDisabledIntegration = function(integrationName, globalIntegrations) {
    var allDisableAndNotDefined = globalIntegrations.All === false && globalIntegrations[integrationName] === undefined;
    return globalIntegrations[integrationName] === false || allDisableAndNotDefined;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["02zza"], null, "parcelRequire5b12")

//# sourceMappingURL=ajs-destination.48300f65.js.map
