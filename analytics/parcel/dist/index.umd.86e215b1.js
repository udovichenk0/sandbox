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
})({"cXX81":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "37e0fd7a86e215b1";
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

},{}],"52wEU":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function a(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, a), i.l = !0, i.exports;
        }
        return a.m = e, a.c = t, a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, a.t = function(e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)a.d(n, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return n;
        }, a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return a.d(t, "a", t), t;
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, a.p = "", a(a.s = 2);
    }([
        function(e, t, a) {
            "use strict";
            a.r(t);
            var n = "function" == typeof fetch ? fetch.bind() : function(e, t) {
                return t = t || {}, new Promise(function(a, n) {
                    var i = new XMLHttpRequest;
                    for(var r in i.open(t.method || "get", e, !0), t.headers)i.setRequestHeader(r, t.headers[r]);
                    function o() {
                        var e, t = [], a = [], n = {};
                        return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(i, r, o) {
                            t.push(r = r.toLowerCase()), a.push([
                                r,
                                o
                            ]), e = n[r], n[r] = e ? e + "," + o : o;
                        }), {
                            ok: 2 == (i.status / 100 | 0),
                            status: i.status,
                            statusText: i.statusText,
                            url: i.responseURL,
                            clone: o,
                            text: function() {
                                return Promise.resolve(i.responseText);
                            },
                            json: function() {
                                return Promise.resolve(i.responseText).then(JSON.parse);
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([
                                    i.response
                                ]));
                            },
                            headers: {
                                keys: function() {
                                    return t;
                                },
                                entries: function() {
                                    return a;
                                },
                                get: function(e) {
                                    return n[e.toLowerCase()];
                                },
                                has: function(e) {
                                    return e.toLowerCase() in n;
                                }
                            }
                        };
                    }
                    i.withCredentials = "include" == t.credentials, i.onload = function() {
                        a(o());
                    }, i.onerror = n, i.send(t.body);
                });
            };
            t.default = n;
        },
        function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for(var a = 0; a < t.length; a++){
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t;
                };
            }();
            var i = function() {
                function e(t, a) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.pluginName = t;
                }
                return n(e, [
                    {
                        key: "track",
                        value: function(e, t) {
                            window.analytics.track(e, t, {
                                integration: {
                                    name: this.pluginName
                                }
                            });
                        }
                    }
                ]), e;
            }();
            t.default = i;
        },
        function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeAnalytics = t.VimeoAnalytics = void 0;
            var n = r(a(3)), i = r(a(4));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t.VimeoAnalytics = n.default, t.YouTubeAnalytics = i.default;
        },
        function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for(var a = 0; a < t.length; a++){
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t;
                };
            }(), i = r(a(0));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var o = function(e) {
                function t(e, a) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "VimeoAnalytics"));
                    return n.authToken = a, n.player = e, n.metadata = {
                        content: {},
                        playback: {
                            videoPlayer: "Vimeo"
                        }
                    }, n.mostRecentHeartbeat = 0, n.isPaused = !1, n;
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
                }(t, e), n(t, [
                    {
                        key: "initialize",
                        value: function() {
                            var e = this, t = {
                                loaded: this.retrieveMetadata,
                                play: this.trackPlay,
                                pause: this.trackPause,
                                ended: this.trackEnded,
                                timeupdate: this.trackHeartbeat
                            };
                            for(var a in t)this.registerHandler(a, t[a]);
                            this.player.getVideoId().then(function(t) {
                                e.retrieveMetadata({
                                    id: t
                                });
                            }).catch(console.error);
                        }
                    },
                    {
                        key: "registerHandler",
                        value: function(e, t) {
                            var a = this;
                            this.player.on(e, function(e) {
                                a.updateMetadata(e), t.call(a, e);
                            });
                        }
                    },
                    {
                        key: "trackPlay",
                        value: function() {
                            this.isPaused ? (this.track("Video Playback Resumed", this.metadata.playback), this.isPaused = !1) : (this.track("Video Playback Started", this.metadata.playback), this.track("Video Content Started", this.metadata.content));
                        }
                    },
                    {
                        key: "trackEnded",
                        value: function() {
                            this.track("Video Playback Completed", this.metadata.playback), this.track("Video Content Completed", this.metadata.content);
                        }
                    },
                    {
                        key: "trackHeartbeat",
                        value: function() {
                            var e = this.mostRecentHeartbeat, t = this.metadata.playback.position;
                            t !== e && t - e >= 10 && (this.track("Video Content Playing", this.metadata.content), this.mostRecentHeartbeat = Math.floor(t));
                        }
                    },
                    {
                        key: "trackPause",
                        value: function() {
                            this.isPaused = !0, this.track("Video Playback Paused", this.metadata.playback);
                        }
                    },
                    {
                        key: "retrieveMetadata",
                        value: function(e) {
                            var t = this;
                            return new Promise(function(a, n) {
                                var r = e.id;
                                (0, i.default)("https://api.vimeo.com/videos/" + r, {
                                    headers: {
                                        Authorization: "Bearer " + t.authToken
                                    }
                                }).then(function(e) {
                                    return e.ok ? e.json() : n(e);
                                }).then(function(e) {
                                    t.metadata.content.title = e.name, t.metadata.content.description = e.description, t.metadata.content.publisher = e.user.name, t.metadata.playback.position = 0, t.metadata.playback.totalLength = e.duration;
                                }).catch(function(e) {
                                    return console.error("Request to Vimeo API Failed with: ", e), n(e);
                                });
                            });
                        }
                    },
                    {
                        key: "updateMetadata",
                        value: function(e) {
                            var t = this;
                            return new Promise(function(a, n) {
                                t.player.getVolume().then(function(n) {
                                    n && (t.metadata.playback.sound = 100 * n), t.metadata.playback.position = e.seconds, a();
                                }).catch(n);
                            });
                        }
                    }
                ]), t;
            }(r(a(1)).default);
            t.default = o;
        },
        function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for(var a = 0; a < t.length; a++){
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t;
                };
            }(), i = o(a(0)), r = o(a(1));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var s = function(e) {
                function t(e, a) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "YoutubeAnalytics"));
                    return n.player = e, n.apiKey = a, n.playerLoaded = !1, n.playbackStarted = !1, n.contentStarted = !1, n.isPaused = !1, n.isBuffering = !1, n.isSeeking = !1, n.lastRecordedTime = {
                        timeReported: Date.now(),
                        timeElapsed: 0
                    }, n.metadata = [
                        {
                            playback: {
                                video_player: "youtube"
                            },
                            content: {}
                        }
                    ], n.playlistIndex = 0, n;
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
                }(t, e), n(t, [
                    {
                        key: "initialize",
                        value: function() {
                            window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this), window.segmentYoutubeOnReady = this.onPlayerReady.bind(this), this.player.addEventListener("onReady", "segmentYoutubeOnReady"), this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
                        }
                    },
                    {
                        key: "onPlayerReady",
                        value: function(e) {
                            this.retrieveMetadata();
                        }
                    },
                    {
                        key: "onPlayerStateChange",
                        value: function(e) {
                            var t = this.player.getCurrentTime();
                            switch(this.metadata[this.playlistIndex] && (this.metadata[this.playlistIndex].playback.position = this.metadata[this.playlistIndex].content.position = t, this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality(), this.metadata[this.playlistIndex].playback.sound = this.player.isMuted() ? 0 : this.player.getVolume()), e.data){
                                case -1:
                                    if (this.playerLoaded) break;
                                    this.retrieveMetadata(), this.playerLoaded = !0;
                                    break;
                                case YT.PlayerState.BUFFERING:
                                    this.handleBuffer();
                                    break;
                                case YT.PlayerState.PLAYING:
                                    this.handlePlay();
                                    break;
                                case YT.PlayerState.PAUSED:
                                    this.handlePause();
                                    break;
                                case YT.PlayerState.ENDED:
                                    this.handleEnd();
                            }
                            this.lastRecordedTime = {
                                timeReported: Date.now(),
                                timeElapsed: 1e3 * this.player.getCurrentTime()
                            };
                        }
                    },
                    {
                        key: "retrieveMetadata",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, a) {
                                var n = e.player.getVideoData(), r = e.player.getPlaylist() || [
                                    n.video_id
                                ], o = r.join();
                                (0, i.default)("https://www.googleapis.com/youtube/v3/videos?id=" + o + "&part=snippet,contentDetails&key=" + e.apiKey).then(function(e) {
                                    if (!e.ok) {
                                        var t = new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");
                                        throw t.response = e, t;
                                    }
                                    return e.json();
                                }).then(function(a) {
                                    e.metadata = [];
                                    for(var n = 0, i = 0; i < r.length; i++){
                                        var o = a.items[i];
                                        e.metadata.push({
                                            content: {
                                                title: o.snippet.title,
                                                description: o.snippet.description,
                                                keywords: o.snippet.tags,
                                                channel: o.snippet.channelTitle,
                                                airdate: o.snippet.publishedAt
                                            }
                                        }), n += l(o.contentDetails.duration);
                                    }
                                    for(i = 0; i < r.length; i++)e.metadata[i].playback = {
                                        total_length: n,
                                        video_player: "youtube"
                                    };
                                    t();
                                }).catch(function(t) {
                                    e.metadata = r.map(function(e) {
                                        return {
                                            playback: {
                                                video_player: "youtube"
                                            },
                                            content: {}
                                        };
                                    }), a(t);
                                });
                            });
                        }
                    },
                    {
                        key: "handleBuffer",
                        value: function() {
                            var e = this.determineSeek();
                            this.playbackStarted || (this.playbackStarted = !0, this.track("Video Playback Started", this.metadata[this.playlistIndex].playback)), e && !this.isSeeking && (this.isSeeking = !0, this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback)), this.isSeeking && (this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback), this.isSeeking = !1);
                            var t = this.player.getPlaylist();
                            t && 0 === this.player.getCurrentTime() && this.player.getPlaylistIndex() !== this.playlistIndex && (this.contentStarted = !1, this.playlistIndex === t.length - 1 && 0 === this.player.getPlaylistIndex() && (this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback), this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback))), this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback), this.isBuffering = !0;
                        }
                    },
                    {
                        key: "handlePlay",
                        value: function() {
                            this.contentStarted || (this.playlistIndex = this.player.getPlaylistIndex(), -1 === this.playlistIndex && (this.playlistIndex = 0), this.track("Video Content Started", this.metadata[this.playlistIndex].content), this.contentStarted = !0), this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = !1), this.isPaused && (this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback), this.isPaused = !1);
                        }
                    },
                    {
                        key: "handlePause",
                        value: function() {
                            var e = this.determineSeek();
                            this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = !1), this.isPaused || (e ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback), this.isSeeking = !0) : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback), this.isPaused = !0));
                        }
                    },
                    {
                        key: "handleEnd",
                        value: function() {
                            this.track("Video Content Completed", this.metadata[this.playlistIndex].content), this.contentStarted = !1;
                            var e = this.player.getPlaylistIndex(), t = this.player.getPlaylist();
                            (t && e === t.length - 1 || -1 === e) && (this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback), this.playbackStarted = !1);
                        }
                    },
                    {
                        key: "determineSeek",
                        value: function() {
                            var e = this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported, t = 1e3 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
                            return Math.abs(e - t) > 2e3;
                        }
                    }
                ]), t;
            }(r.default);
            function l(e) {
                var t = e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
                return t = t.slice(1).map(function(e) {
                    if (null != e) return e.replace(/\D/, "");
                }), 3600 * (parseInt(t[0]) || 0) + 60 * (parseInt(t[1]) || 0) + (parseInt(t[2]) || 0);
            }
            t.default = s;
        }
    ]);
});

},{}]},["cXX81"], null, "parcelRequire5b12")

//# sourceMappingURL=index.umd.86e215b1.js.map
