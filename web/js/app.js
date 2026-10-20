'use strict';

function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a, u = !0; return { s: function s() { t = t.call(r); }, n: function n() { u = !0; var r = t.next(); return r.done ? { done: !0 } : { value: r.value, done: u = !1 }; }, e: function e(r) { o = !0, a = r; }, f: function f() { try { u || null == t.return || t.return(); } finally { if (o) throw a; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.webkitMatchesSelector;
  if (!Element.prototype.closest) Element.prototype.closest = function (s) {
    var n = this;
    while (n && n.nodeType === 1) {
      if (n.matches(s)) return n;
      n = n.parentElement;
    }
    return null;
  };
  if (!Element.prototype.scrollTo) Element.prototype.scrollTo = function (o, y) {
    this.scrollTop = _typeof(o) === 'object' ? o.top || 0 : y || 0;
    this.scrollLeft = _typeof(o) === 'object' ? o.left || 0 : o;
  };
  var keys = {
    13: 'Enter',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    8: 'Backspace',
    27: 'Escape',
    461: 'Backspace',
    10009: 'Backspace',
    415: 'MediaPlay',
    19: 'MediaPause',
    413: 'MediaStop',
    412: 'MediaRewind',
    417: 'MediaFastForward',
    10252: 'MediaPlayPause'
  };
  function normalize(e) {
    var key = keys[e.keyCode];
    if (!key || e.key === key) return;
    try {
      Object.defineProperty(e, 'key', {
        value: key
      });
    } catch (ignore) {}
  }
  document.addEventListener('keydown', normalize, true);
  document.addEventListener('keyup', normalize, true);
})();
var _isSamsung = !!window.tizen || /Tizen/i.test(navigator.userAgent);
var _isPhilips = /Philips|NETTV|Saphi/i.test(navigator.userAgent) || /[?&]tv=philips(?:&|$)/i.test(location.search);
// Existing TV navigation and performance paths apply to both platforms.
var _isTizen = _isSamsung || _isPhilips;
var _isApp = new URLSearchParams(location.search).has('app');
if (_isApp) document.body.classList.add('is-app');
if (_isPhilips) document.documentElement.classList.add('philips-tv');
var PLY_BTNS_PC = ['pcPrev', 'pcPlay', 'pcNext', 'pcQual', 'pcFit', 'pcFullscreen'];
var PLY_BTNS_TV = ['pcPrev', 'pcPlay', 'pcNext', 'pcQual'];
var PLY_BTNS = _isTizen ? PLY_BTNS_TV : PLY_BTNS_PC;
if (_isTizen) {
  document.documentElement.classList.add('tizen-tv');
  document.body.classList.add('tizen-tv');
}

// scrollIntoView wrapper — 'smooth' на Tizen надто дорого
function siv(el, opts) {
  if (!el) return;
  if (_isPhilips) el.scrollIntoView(false);else if (_isTizen) el.scrollIntoView({
    block: (opts === null || opts === void 0 ? void 0 : opts.block) || 'nearest',
    inline: (opts === null || opts === void 0 ? void 0 : opts.inline) || 'nearest'
  });else el.scrollIntoView(opts || {
    block: 'nearest',
    behavior: 'smooth'
  });
}
var BASE = 'https://aniliberty.top/api/v1';
var BASE2 = 'https://api.anilibria.app/api/v1';
var CDN = 'https://aniliberty.top';
// Days: API uses 0=Sun,1=Mon,...6=Sat; we display Mon→Sun
var DAYS_UK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
var DAYS_API = [1, 2, 3, 4, 5, 6, 7]; // display order → API day value (1=Mon...7=Sun)

var Store = {
  get: function get(k) {
    var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    try {
      var v = localStorage.getItem(k);
      return v != null ? JSON.parse(v) : def;
    } catch (_unused) {
      return def;
    }
  },
  set: function set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (_unused2) {}
  },
  // Progress: {time, duration, epId, epOrdinal, updated}
  _writeProgress: function _writeProgress(releaseId, epId, time, duration, epOrdinal) {
    var epsTotal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var key = "alv_p_".concat(releaseId, "_").concat(epId);
    var now = Date.now();
    // Update _epsCount hint on cached release if we know ordinal
    if (epOrdinal > 0) {
      var cr = this._rc[String(releaseId)];
      if (cr && !(cr.episodes_total > 0) && epOrdinal > (cr._epsCount || 0)) {
        cr._epsCount = epOrdinal;
        cr._pct = null; // invalidate so bar recalculates
      }
    }
    // Tizen TV has small localStorage quota — clean old entries if write fails
    try {
      localStorage.setItem(key, JSON.stringify({
        time: time,
        duration: duration,
        epOrdinal: epOrdinal,
        epsTotal: epsTotal,
        updated: now
      }));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        // Remove oldest progress entries to free space
        var pkeys = [];
        for (var i = 0; i < localStorage.length; i++) {
          var _k = localStorage.key(i);
          if (_k && _k.startsWith('alv_p_')) pkeys.push(_k);
        }
        // Sort by updated time, remove oldest half
        pkeys.sort(function (a, b) {
          try {
            return (JSON.parse(localStorage.getItem(a) || '{}').updated || 0) - (JSON.parse(localStorage.getItem(b) || '{}').updated || 0);
          } catch (_unused3) {
            return 0;
          }
        });
        pkeys.slice(0, Math.max(1, Math.floor(pkeys.length / 2))).forEach(function (k) {
          return localStorage.removeItem(k);
        });
        this._pidx = null; // rebuild index
        try {
          localStorage.setItem(key, JSON.stringify({
            time: time,
            duration: duration,
            epOrdinal: epOrdinal,
            updated: now
          }));
        } catch (_) {}
      }
    }
    this._dirtyIdx(String(releaseId));
    this._lastSave = {
      key: key,
      t: now
    };
    // Invalidate cached _pct on release object
    var cached = this._rc[String(releaseId)];
    if (cached) cached._pct = null;
  },
  saveProgress: function saveProgress(releaseId, epId, time, duration, epOrdinal) {
    var epsTotal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var now = Date.now();
    var key = "alv_p_".concat(releaseId, "_").concat(epId);
    // debounce LS writes: max once per 5s per episode
    if (this._lastSave && this._lastSave.key === key && now - this._lastSave.t < 5000) return;
    this._writeProgress(releaseId, epId, time, duration, epOrdinal, epsTotal);
  },
  forceSaveProgress: function forceSaveProgress(releaseId, epId, time, duration, epOrdinal) {
    var epsTotal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    // Always saves — used on player close, episode switch (no debounce)
    if (!releaseId || !epId || !time) return;
    this._writeProgress(releaseId, epId, time, duration, epOrdinal, epsTotal);
  },
  getProgress: function getProgress(releaseId, epId) {
    return this.get("alv_p_".concat(releaseId, "_").concat(epId));
  },
  // Returns {pct: 0-100} across all episodes, counting partial ep time
  // In-memory progress index — built lazily, avoids O(N) localStorage scans
  _pidx: null,
  _buildIdx: function _buildIdx() {
    if (this._pidx) return;
    this._pidx = {};
    for (var i = 0; i < localStorage.length; i++) {
      var _k2 = localStorage.key(i);
      if (_k2 && _k2.startsWith('alv_p_')) {
        var parts = _k2.split('_'); // alv_p_{rid}_{epId}
        var rid = parts[2];
        if (!this._pidx[rid]) this._pidx[rid] = [];
        this._pidx[rid].push(_k2);
      }
    }
  },
  _dirtyIdx: function _dirtyIdx(releaseId) {
    this._pidx = null;
  },
  // null entire index → forces full rebuild on next access
  getTotalProgress: function getTotalProgress(releaseId, episodesTotal) {
    this._buildIdx();
    var keys = this._pidx[releaseId] || [];
    if (!keys.length) return 0;
    var prefix = "alv_p_".concat(releaseId, "_");
    // Count episodes watched >10% of duration (or time>30s)
    var watched = 0,
      maxOrdinal = 0,
      bestEpsTotal = 0;
    var _iterator = _createForOfIteratorHelper(keys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _k3 = _step.value;
        var v = this.get(_k3);
        if (!v) continue;
        if (v.epsTotal > bestEpsTotal) bestEpsTotal = v.epsTotal;
        if (v.epOrdinal > maxOrdinal) maxOrdinal = v.epOrdinal;
        // Use same logic as isEpDone: is_watched flag, 90%+, within 90s, or time>10min without duration
        var done = v.is_watched === true || v.duration > 0 && (v.time >= v.duration || v.time >= v.duration - 90 || v.time / v.duration >= 0.9) || !v.duration && v.time > 600;
        if (done) watched++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var total = episodesTotal || bestEpsTotal || 0;
    if (!(total > 0)) return 0;
    // Use watched count if we have it, else fall back to max ordinal
    var pct = watched > 0 ? Math.round(watched / total * 100) : Math.round(maxOrdinal / total * 100);
    return Math.min(100, pct);
  },
  getReleaseProgress: function getReleaseProgress(releaseId) {
    this._buildIdx();
    var keys = this._pidx[releaseId] || [];
    var prefix = "alv_p_".concat(releaseId, "_");
    var best = null,
      bestTime = 0;
    var _iterator2 = _createForOfIteratorHelper(keys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _k4 = _step2.value;
        var v = this.get(_k4);
        if (v && v.updated > bestTime) {
          bestTime = v.updated;
          best = _objectSpread(_objectSpread({}, v), {}, {
            epId: _k4.slice(prefix.length)
          });
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return best;
  },
  clearReleaseProgress: function clearReleaseProgress(releaseId) {
    this._buildIdx();
    var keys = _toConsumableArray(this._pidx[releaseId] || []);
    keys.forEach(function (k) {
      return localStorage.removeItem(k);
    });
    this._dirtyIdx(releaseId);
  },
  // Collections: {favorites:[], watching:[], planned:[], completed:[], abandoned:[]}
  getColl: function getColl() {
    var d = this.get('alv_coll', {});
    if (!d.favorites) d.favorites = [];
    if (!d.watching) d.watching = [];
    if (!d.planned) d.planned = [];
    if (!d.completed) d.completed = [];
    if (!d.abandoned) d.abandoned = [];
    if (!d.history) d.history = [];
    return d;
  },
  inColl: function inColl(type, id) {
    var sid = String(id),
      nid = Number(id);
    return (this.getColl()[type] || []).some(function (x) {
      return x === sid || x === nid || String(x) === sid;
    });
  },
  addHistory: function addHistory(id) {
    if (!id) return;
    var c = this.getColl();
    c.history = c.history.filter(function (x) {
      return x !== id;
    });
    c.history.unshift(id);
    if (c.history.length > 100) c.history = c.history.slice(0, 100);
    this.set('alv_coll', c);
  },
  removeHistory: function removeHistory(id) {
    if (!id) return;
    var c = this.getColl();
    c.history = c.history.filter(function (x) {
      return x !== id;
    });
    this.set('alv_coll', c);
  },
  toggleColl: function toggleColl(type, id) {
    var c = this.getColl();
    if (!c[type]) c[type] = [];
    var sid = String(id),
      nid = Number(id);
    var idx = c[type].findIndex(function (x) {
      return x === sid || x === nid || String(x) === sid;
    });
    if (idx === -1) c[type].unshift(id);else c[type].splice(idx, 1);
    this.set('alv_coll', c);
    return idx === -1;
  },
  _rc: {},
  _rcKeys: [],
  cacheRelease: function cacheRelease(r) {
    if (!(r !== null && r !== void 0 && r.id)) return;
    var id = String(r.id);
    if (!this._rc[id]) this._rcKeys.push(id);
    this._rc[id] = r;
    if (r.alias) try {
      localStorage.setItem('alv_al_' + id, r.alias);
    } catch (_) {}
    if (this._rcKeys.length > 200) {
      delete this._rc[this._rcKeys.shift()];
    }
  },
  getCachedRelease: function getCachedRelease(id) {
    return this._rc[String(id)] || null;
  },
  getAlias: function getAlias(id) {
    try {
      return localStorage.getItem('alv_al_' + String(id));
    } catch (_) {
      return null;
    }
  }
};
var authToken = Store.get('alv_token', null);
function api(_x) {
  return _api.apply(this, arguments);
} // sync progress to API
// ════════════════════════════════════════════════════════════
// FULL CLOUD SYNC SYSTEM
// - If logged in: read/write to API, local is cache
// - If not logged in: local only
// - On login: migrate all local data to cloud
// ════════════════════════════════════════════════════════════
function _api() {
  _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(path) {
    var opts,
      headers,
      _i2,
      _arr,
      base,
      r,
      _e,
      _e2,
      _e3,
      _args3 = arguments,
      _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          headers = {
            'Content-Type': 'application/json'
          };
          if (authToken) headers['Authorization'] = 'Bearer ' + authToken;
          _i2 = 0, _arr = [BASE, BASE2];
        case 1:
          if (!(_i2 < _arr.length)) {
            _context3.n = 11;
            break;
          }
          base = _arr[_i2];
          _context3.p = 2;
          _context3.n = 3;
          return philipsRequest(base + path, {
            method: opts.method || 'GET',
            headers: headers,
            body: opts.body || undefined
          });
        case 3:
          r = _context3.v;
          if (!(r.status === 401)) {
            _context3.n = 4;
            break;
          }
          _e = new Error('Unauthorized');
          _e.code = 401;
          throw _e;
        case 4:
          if (!(r.status === 422)) {
            _context3.n = 5;
            break;
          }
          _e2 = new Error('Validation');
          _e2.code = 422;
          throw _e2;
        case 5:
          if (r.ok) {
            _context3.n = 6;
            break;
          }
          _e3 = new Error('HTTP ' + r.status);
          _e3.code = r.status;
          throw _e3;
        case 6:
          _context3.n = 7;
          return r.json();
        case 7:
          return _context3.a(2, _context3.v);
        case 8:
          _context3.p = 8;
          _t3 = _context3.v;
          if (!(_t3.code === 401 || _t3.code === 422)) {
            _context3.n = 9;
            break;
          }
          throw _t3;
        case 9:
          if (!(base === BASE2)) {
            _context3.n = 10;
            break;
          }
          if (window.philipsBoot) philipsBoot.apiError(_t3.message);
          throw _t3;
        case 10:
          _i2++;
          _context3.n = 1;
          break;
        case 11:
          return _context3.a(2);
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return _api.apply(this, arguments);
}
var COLL_TYPE_MAP = {
  favorites: null,
  watching: 'WATCHING',
  planned: 'PLANNED',
  completed: 'WATCHED',
  abandoned: 'ABANDONED'
};
var API_TO_LOCAL = {
  'WATCHING': 'watching',
  'PLANNED': 'planned',
  'WATCHED': 'completed',
  'ABANDONED': 'abandoned',
  'POSTPONED': 'abandoned'
};

// ── Push single timecode to API ───────────────────────────────────────
function syncProgress(_x2, _x3) {
  return _syncProgress.apply(this, arguments);
} // ── Pull all timecodes for a release from API ─────────────────────────
function _syncProgress() {
  _syncProgress = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(epId, time) {
    var isWatched,
      _args4 = arguments,
      _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          isWatched = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
          if (authToken) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          _context4.p = 1;
          _context4.n = 2;
          return api('/accounts/users/me/views/timecodes', {
            method: 'POST',
            body: JSON.stringify([{
              release_episode_id: epId,
              time: Math.floor(time),
              is_watched: isWatched
            }])
          });
        case 2:
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return _syncProgress.apply(this, arguments);
}
function pullTimecodes(_x4) {
  return _pullTimecodes.apply(this, arguments);
} // ── Push ALL local timecodes to API (used on login migration) ─────────
function _pullTimecodes() {
  _pullTimecodes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(releaseId) {
    var tc, list, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          if (authToken) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2);
        case 1:
          if (!(window._resetReleaseId === String(releaseId))) {
            _context5.n = 2;
            break;
          }
          window._resetReleaseId = null;
          return _context5.a(2);
        case 2:
          _context5.p = 2;
          _context5.n = 3;
          return api('/anime/releases/' + releaseId + '/episodes/timecodes');
        case 3:
          tc = _context5.v;
          list = Array.isArray(tc) ? tc : (tc === null || tc === void 0 ? void 0 : tc.data) || (tc === null || tc === void 0 ? void 0 : tc.list) || [];
          list.forEach(function (t) {
            if (!(t !== null && t !== void 0 && t.release_episode_id)) return;
            var epId = String(t.release_episode_id);
            var cloudTime = t.time || 0;
            if (cloudTime <= 0) return;
            // Cloud is source of truth — always overwrite local
            var existing = Store.getProgress(releaseId, epId);
            // Preserve local duration if API doesn't return it
            var dur = t.duration || (existing === null || existing === void 0 ? void 0 : existing.duration) || 0;
            Store.set("alv_p_".concat(releaseId, "_").concat(epId), {
              time: cloudTime,
              duration: dur,
              epOrdinal: t.ordinal || 0,
              is_watched: !!t.is_watched,
              updated: Date.now()
            });
            Store._dirtyIdx(String(releaseId));
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[2, 4]]);
  }));
  return _pullTimecodes.apply(this, arguments);
}
function pushAllTimecodes() {
  return _pushAllTimecodes.apply(this, arguments);
} // ── Pull all collections + favorites from API ─────────────────────────
// API requires type_of_collection as required param — must fetch each type separately
function _pushAllTimecodes() {
  _pushAllTimecodes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var batch, i, _k7, v, parts, epId, _i3, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          if (authToken) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2);
        case 1:
          // Collect all local progress entries
          batch = [];
          i = 0;
        case 2:
          if (!(i < localStorage.length)) {
            _context6.n = 5;
            break;
          }
          _k7 = localStorage.key(i);
          if (_k7 !== null && _k7 !== void 0 && _k7.startsWith('alv_p_')) {
            _context6.n = 3;
            break;
          }
          return _context6.a(3, 4);
        case 3:
          try {
            v = JSON.parse(localStorage.getItem(_k7));
            parts = _k7.split('_'); // alv_p_{rid}_{epId}
            epId = parts.slice(3).join('_'); // epId may contain underscores
            if ((v === null || v === void 0 ? void 0 : v.time) > 0 && epId) {
              batch.push({
                release_episode_id: epId,
                time: Math.floor(v.time),
                is_watched: v.time > 0 && v.duration > 0 && (v.time / v.duration >= 0.9 || v.time >= v.duration - 60)
              });
            }
          } catch (_) {}
        case 4:
          i++;
          _context6.n = 2;
          break;
        case 5:
          if (batch.length) {
            _context6.n = 6;
            break;
          }
          return _context6.a(2);
        case 6:
          _i3 = 0;
        case 7:
          if (!(_i3 < batch.length)) {
            _context6.n = 12;
            break;
          }
          _context6.p = 8;
          _context6.n = 9;
          return api('/accounts/users/me/views/timecodes', {
            method: 'POST',
            body: JSON.stringify(batch.slice(_i3, _i3 + 50))
          });
        case 9:
          _context6.n = 11;
          break;
        case 10:
          _context6.p = 10;
          _t6 = _context6.v;
        case 11:
          _i3 += 50;
          _context6.n = 7;
          break;
        case 12:
          return _context6.a(2);
      }
    }, _callee6, null, [[8, 10]]);
  }));
  return _pushAllTimecodes.apply(this, arguments);
}
function syncCollFromAPI() {
  return _syncCollFromAPI.apply(this, arguments);
} // ── Push all local collections to API (migration on login) ───────────
function _syncCollFromAPI() {
  _syncCollFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var c, fresh, anySuccess, favPage, favs, list, typeMap, _loop5, _i4, _typeMap, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          if (authToken) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2);
        case 1:
          // Cloud is SOURCE OF TRUTH — replace local, don't merge
          c = Store.getColl();
          fresh = {
            favorites: [],
            watching: [],
            planned: [],
            completed: [],
            abandoned: [],
            history: c.history || []
          };
          anySuccess = false; // 1. Favorites — replace
          _context8.p = 2;
          favPage = 1;
        case 3:
          if (!true) {
            _context8.n = 7;
            break;
          }
          _context8.n = 4;
          return api("/accounts/users/me/favorites/releases?limit=50&page=".concat(favPage));
        case 4:
          favs = _context8.v;
          list = Array.isArray(favs) ? favs : (favs === null || favs === void 0 ? void 0 : favs.data) || (favs === null || favs === void 0 ? void 0 : favs.list) || [];
          list.forEach(function (r) {
            if (r !== null && r !== void 0 && r.id) {
              fresh.favorites.push(r.id);
              Store.cacheRelease(r);
            }
          });
          if (!(list.length < 50)) {
            _context8.n = 5;
            break;
          }
          return _context8.a(3, 7);
        case 5:
          favPage++;
          if (!(favPage > 20)) {
            _context8.n = 6;
            break;
          }
          return _context8.a(3, 7);
        case 6:
          _context8.n = 3;
          break;
        case 7:
          anySuccess = true;
          _context8.n = 9;
          break;
        case 8:
          _context8.p = 8;
          _t8 = _context8.v;
        case 9:
          // 2. Each collection type — replace
          typeMap = [['WATCHING', 'watching'], ['PLANNED', 'planned'], ['WATCHED', 'completed'], ['ABANDONED', 'abandoned'], ['POSTPONED', 'abandoned']];
          _loop5 = /*#__PURE__*/_regenerator().m(function _loop5() {
            var _typeMap$_i, apiType, localType, page, pageSize, res, _list, _t7;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.p = _context7.n) {
                case 0:
                  _typeMap$_i = _slicedToArray(_typeMap[_i4], 2), apiType = _typeMap$_i[0], localType = _typeMap$_i[1];
                  _context7.p = 1;
                  page = 1;
                  pageSize = 50;
                case 2:
                  if (!true) {
                    _context7.n = 6;
                    break;
                  }
                  _context7.n = 3;
                  return api('/accounts/users/me/collections/releases', {
                    method: 'POST',
                    body: JSON.stringify({
                      type_of_collection: apiType,
                      page: page,
                      limit: pageSize
                    })
                  });
                case 3:
                  res = _context7.v;
                  _list = Array.isArray(res) ? res : (res === null || res === void 0 ? void 0 : res.data) || (res === null || res === void 0 ? void 0 : res.list) || [];
                  _list.forEach(function (item) {
                    if (item !== null && item !== void 0 && item.id && !fresh[localType].includes(item.id)) {
                      fresh[localType].push(item.id);
                      Store.cacheRelease(item);
                    }
                  });
                  if (!(_list.length < pageSize)) {
                    _context7.n = 4;
                    break;
                  }
                  return _context7.a(3, 6);
                case 4:
                  page++;
                  if (!(page > 20)) {
                    _context7.n = 5;
                    break;
                  }
                  return _context7.a(3, 6);
                case 5:
                  _context7.n = 2;
                  break;
                case 6:
                  anySuccess = true;
                  _context7.n = 8;
                  break;
                case 7:
                  _context7.p = 7;
                  _t7 = _context7.v;
                case 8:
                  return _context7.a(2);
              }
            }, _loop5, null, [[1, 7]]);
          });
          _i4 = 0, _typeMap = typeMap;
        case 10:
          if (!(_i4 < _typeMap.length)) {
            _context8.n = 12;
            break;
          }
          return _context8.d(_regeneratorValues(_loop5()), 11);
        case 11:
          _i4++;
          _context8.n = 10;
          break;
        case 12:
          // Only save if at least one request succeeded (avoid wiping on network error)
          if (anySuccess) {
            Store.set('alv_coll', fresh);
            if (pg.cur === 'collections') renderCollTab(curCollTab);
            // Refresh collection badges AND progress bars on all visible cards
            document.querySelectorAll('.card[data-rid]').forEach(function (card) {
              var rid = card.dataset.rid;
              refreshCardBadge(rid);
              // Update progress bar — if in completed, show 100%
              var r = Store.getCachedRelease(rid);
              if (!r) return;
              var epsTot = r.episodes_total || r._epsCount || 0;
              var pct = Store.getTotalProgress(rid, epsTot);
              var coll = Store.getColl();
              if ((coll.completed || []).includes(Number(rid) || rid) || (coll.completed || []).includes(rid)) pct = 100;
              if (pct > 0) {
                var bar = card.querySelector('.c-prog');
                if (!bar) {
                  bar = document.createElement('div');
                  bar.className = 'c-prog';
                  bar.innerHTML = '<div class="c-prog-f"></div>';
                  card.appendChild(bar);
                }
                bar.querySelector('.c-prog-f').style.width = pct + '%';
              }
            });
          }
        case 13:
          return _context8.a(2);
      }
    }, _callee7, null, [[2, 8]]);
  }));
  return _syncCollFromAPI.apply(this, arguments);
}
function pushAllCollections() {
  return _pushAllCollections.apply(this, arguments);
} // ── Full migration: local → cloud (called once on login) ─────────────
function _pushAllCollections() {
  _pushAllCollections = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    var _c$favorites;
    var c, _loop6, _i5, _Object$entries, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          if (authToken) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2);
        case 1:
          c = Store.getColl(); // Favorites
          if (!((_c$favorites = c.favorites) !== null && _c$favorites !== void 0 && _c$favorites.length)) {
            _context0.n = 5;
            break;
          }
          _context0.p = 2;
          _context0.n = 3;
          return api('/accounts/users/me/favorites', {
            method: 'POST',
            body: JSON.stringify(c.favorites.map(function (id) {
              return {
                release_id: id
              };
            }))
          });
        case 3:
          _context0.n = 5;
          break;
        case 4:
          _context0.p = 4;
          _t0 = _context0.v;
        case 5:
          _loop6 = /*#__PURE__*/_regenerator().m(function _loop6() {
            var _c$local;
            var _Object$entries$_i, local, apiType, _t9;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.p = _context9.n) {
                case 0:
                  _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2), local = _Object$entries$_i[0], apiType = _Object$entries$_i[1];
                  if (!(!apiType || !((_c$local = c[local]) !== null && _c$local !== void 0 && _c$local.length))) {
                    _context9.n = 1;
                    break;
                  }
                  return _context9.a(2, 1);
                case 1:
                  _context9.p = 1;
                  _context9.n = 2;
                  return api('/accounts/users/me/collections', {
                    method: 'POST',
                    body: JSON.stringify(c[local].map(function (id) {
                      return {
                        release_id: id,
                        type_of_collection: apiType
                      };
                    }))
                  });
                case 2:
                  _context9.n = 4;
                  break;
                case 3:
                  _context9.p = 3;
                  _t9 = _context9.v;
                case 4:
                  return _context9.a(2);
              }
            }, _loop6, null, [[1, 3]]);
          });
          _i5 = 0, _Object$entries = Object.entries(COLL_TYPE_MAP);
        case 6:
          if (!(_i5 < _Object$entries.length)) {
            _context0.n = 9;
            break;
          }
          return _context0.d(_regeneratorValues(_loop6()), 7);
        case 7:
          if (!_context0.v) {
            _context0.n = 8;
            break;
          }
          return _context0.a(3, 8);
        case 8:
          _i5++;
          _context0.n = 6;
          break;
        case 9:
          return _context0.a(2);
      }
    }, _callee8, null, [[2, 4]]);
  }));
  return _pushAllCollections.apply(this, arguments);
}
function migrateLocalToCloud() {
  return _migrateLocalToCloud.apply(this, arguments);
} // Push only local collection items that don't exist in cloud yet (additive, safe)
function _migrateLocalToCloud() {
  _migrateLocalToCloud = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          setStatus('sync', 'Синхронизация...');
          // STEP 1: pull cloud data first (most important — don't lose cloud data)
          _context1.n = 1;
          return Promise.all([syncCollFromAPI(), syncHistoryFromAPI()]);
        case 1:
          _context1.n = 2;
          return pushAllTimecodes();
        case 2:
          _context1.n = 3;
          return pushLocalOnlyCollections();
        case 3:
          setStatus('ok', 'Синхронизировано');
        case 4:
          return _context1.a(2);
      }
    }, _callee9);
  }));
  return _migrateLocalToCloud.apply(this, arguments);
}
function pushLocalOnlyCollections() {
  return _pushLocalOnlyCollections.apply(this, arguments);
} // ── Pull history from API ─────────────────────────────────────────────
function _pushLocalOnlyCollections() {
  _pushLocalOnlyCollections = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var _c$favorites2;
    var c, _loop7, _i6, _Object$entries2, _t10;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          if (authToken) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          c = Store.getColl(); // Favorites — just push all, API ignores duplicates
          if (!((_c$favorites2 = c.favorites) !== null && _c$favorites2 !== void 0 && _c$favorites2.length)) {
            _context11.n = 5;
            break;
          }
          _context11.p = 2;
          _context11.n = 3;
          return api('/accounts/users/me/favorites', {
            method: 'POST',
            body: JSON.stringify(c.favorites.map(function (id) {
              return {
                release_id: id
              };
            }))
          });
        case 3:
          _context11.n = 5;
          break;
        case 4:
          _context11.p = 4;
          _t10 = _context11.v;
        case 5:
          _loop7 = /*#__PURE__*/_regenerator().m(function _loop7() {
            var _c$local2;
            var _Object$entries2$_i, local, apiType, _t1;
            return _regenerator().w(function (_context10) {
              while (1) switch (_context10.p = _context10.n) {
                case 0:
                  _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2), local = _Object$entries2$_i[0], apiType = _Object$entries2$_i[1];
                  if (!(!apiType || !((_c$local2 = c[local]) !== null && _c$local2 !== void 0 && _c$local2.length))) {
                    _context10.n = 1;
                    break;
                  }
                  return _context10.a(2, 1);
                case 1:
                  _context10.p = 1;
                  _context10.n = 2;
                  return api('/accounts/users/me/collections', {
                    method: 'POST',
                    body: JSON.stringify(c[local].map(function (id) {
                      return {
                        release_id: id,
                        type_of_collection: apiType
                      };
                    }))
                  });
                case 2:
                  _context10.n = 4;
                  break;
                case 3:
                  _context10.p = 3;
                  _t1 = _context10.v;
                case 4:
                  return _context10.a(2);
              }
            }, _loop7, null, [[1, 3]]);
          });
          _i6 = 0, _Object$entries2 = Object.entries(COLL_TYPE_MAP);
        case 6:
          if (!(_i6 < _Object$entries2.length)) {
            _context11.n = 9;
            break;
          }
          return _context11.d(_regeneratorValues(_loop7()), 7);
        case 7:
          if (!_context11.v) {
            _context11.n = 8;
            break;
          }
          return _context11.a(3, 8);
        case 8:
          _i6++;
          _context11.n = 6;
          break;
        case 9:
          return _context11.a(2);
      }
    }, _callee0, null, [[2, 4]]);
  }));
  return _pushLocalOnlyCollections.apply(this, arguments);
}
function syncHistoryFromAPI() {
  return _syncHistoryFromAPI.apply(this, arguments);
} // ── Throttled sync helper ────────────────────────────────────────────
function _syncHistoryFromAPI() {
  _syncHistoryFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
    var _c, seenReleases, page, pageSize, resp, list, _t11;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          if (authToken) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2);
        case 1:
          _context12.p = 1;
          _c = Store.getColl(); // History sorted by updated_at desc — each item is one watched episode
          // Multiple items can belong to same release — deduplicate by release id
          // Keep order: most recently watched release first
          seenReleases = new Set();
          page = 1;
          pageSize = 10;
        case 2:
          if (!true) {
            _context12.n = 6;
            break;
          }
          _context12.n = 3;
          return api("/accounts/users/me/views/history?limit=".concat(pageSize, "&page=").concat(page));
        case 3:
          resp = _context12.v;
          list = Array.isArray(resp) ? resp : (resp === null || resp === void 0 ? void 0 : resp.data) || (resp === null || resp === void 0 ? void 0 : resp.list) || [];
          list.forEach(function (item) {
            // item: { id, time, is_watched, release_episode_id, release_episode: { ...ep fields, release: {...} } }
            var ep = item === null || item === void 0 ? void 0 : item.release_episode;
            var r = ep === null || ep === void 0 ? void 0 : ep.release;
            if (!(r !== null && r !== void 0 && r.id)) return;
            Store.cacheRelease(r);
            // Save progress for this episode
            if (ep !== null && ep !== void 0 && ep.id && (item === null || item === void 0 ? void 0 : item.time) > 0) {
              var existing = Store.getProgress(r.id, String(ep.id));
              if (!existing || item.time > existing.time) {
                Store.set("alv_p_".concat(r.id, "_").concat(ep.id), {
                  time: item.time,
                  duration: ep.duration || (existing === null || existing === void 0 ? void 0 : existing.duration) || 0,
                  epOrdinal: ep.ordinal || 0,
                  is_watched: !!item.is_watched,
                  updated: new Date(item.updated_at).getTime() || Date.now()
                });
                Store._dirtyIdx(String(r.id));
              }
            }
            // Add release to history (deduplicated, order preserved)
            if (!seenReleases.has(r.id)) {
              seenReleases.add(r.id);
              if (!_c.history.includes(r.id)) _c.history.push(r.id);
            }
          });
          if (!(list.length < pageSize)) {
            _context12.n = 4;
            break;
          }
          return _context12.a(3, 6);
        case 4:
          page++;
          if (!(page > 10)) {
            _context12.n = 5;
            break;
          }
          return _context12.a(3, 6);
        case 5:
          _context12.n = 2;
          break;
        case 6:
          Store.set('alv_coll', _c);
          if (pg.cur === 'collections' && curCollTab === 'history') renderCollTab('history');
          _context12.n = 8;
          break;
        case 7:
          _context12.p = 7;
          _t11 = _context12.v;
        case 8:
          return _context12.a(2);
      }
    }, _callee1, null, [[1, 7]]);
  }));
  return _syncHistoryFromAPI.apply(this, arguments);
}
var _lastCollSync = 0,
  _syncInProgress = false;
function _doCollSync() {
  return _doCollSync2.apply(this, arguments);
} // ── Full pull on startup ──────────────────────────────────────────────
function _doCollSync2() {
  _doCollSync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          if (!_syncInProgress) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2);
        case 1:
          _syncInProgress = true;
          _context13.p = 2;
          _context13.n = 3;
          return syncCollFromAPI();
        case 3:
          _context13.n = 4;
          return syncHistoryFromAPI();
        case 4:
          _lastCollSync = Date.now();
        case 5:
          _context13.p = 5;
          _syncInProgress = false;
          return _context13.f(5);
        case 6:
          return _context13.a(2);
      }
    }, _callee10, null, [[2,, 5, 6]]);
  }));
  return _doCollSync2.apply(this, arguments);
}
function syncOnStartup() {
  return _syncOnStartup.apply(this, arguments);
} // ── Single collection change to API ──────────────────────────────────
function _syncOnStartup() {
  _syncOnStartup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          if (authToken) {
            _context14.n = 1;
            break;
          }
          return _context14.a(2);
        case 1:
          setStatus('sync', 'Загрузка данных...');
          _context14.n = 2;
          return _doCollSync();
        case 2:
          setStatus('ok', 'Данные загружены');
        case 3:
          return _context14.a(2);
      }
    }, _callee11);
  }));
  return _syncOnStartup.apply(this, arguments);
}
function syncCollToAPI(_x5, _x6, _x7) {
  return _syncCollToAPI.apply(this, arguments);
}
function _syncCollToAPI() {
  _syncCollToAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(type, id, add) {
    var ep, apiType, _ep, _t12;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          if (authToken) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2);
        case 1:
          _context15.p = 1;
          if (!(type === 'favorites')) {
            _context15.n = 5;
            break;
          }
          ep = '/accounts/users/me/favorites';
          if (!add) {
            _context15.n = 3;
            break;
          }
          _context15.n = 2;
          return api(ep, {
            method: 'POST',
            body: JSON.stringify([{
              release_id: id
            }])
          });
        case 2:
          _context15.n = 4;
          break;
        case 3:
          _context15.n = 4;
          return api(ep, {
            method: 'DELETE',
            body: JSON.stringify([{
              release_id: id
            }])
          });
        case 4:
          _context15.n = 9;
          break;
        case 5:
          apiType = COLL_TYPE_MAP[type];
          if (apiType) {
            _context15.n = 6;
            break;
          }
          return _context15.a(2);
        case 6:
          _ep = '/accounts/users/me/collections';
          if (!add) {
            _context15.n = 8;
            break;
          }
          _context15.n = 7;
          return api(_ep, {
            method: 'POST',
            body: JSON.stringify([{
              release_id: id,
              type_of_collection: apiType
            }])
          });
        case 7:
          _context15.n = 9;
          break;
        case 8:
          _context15.n = 9;
          return api(_ep, {
            method: 'DELETE',
            body: JSON.stringify([{
              release_id: id
            }])
          });
        case 9:
          _context15.n = 11;
          break;
        case 10:
          _context15.p = 10;
          _t12 = _context15.v;
        case 11:
          return _context15.a(2);
      }
    }, _callee12, null, [[1, 10]]);
  }));
  return _syncCollToAPI.apply(this, arguments);
}
var MOCK = [];
var EMJ = ['⚔️', '🔥', '🌸', '✨', '🌊', '💀', '🐉', '⭐', '🎌', '👾'];
var releases = [],
  detRelease = null,
  playerEps = [],
  playerEpIdx = 0;
var pg = {
  cur: 'home'
};
var nav = {
  zone: 'home.cards',
  // home.nav | home.cards | cat.search | cat.grid | cat.flt | sch | coll.tabs | coll.grid | det.acts | det.coll | det.eps | player | login
  ni: 0,
  hi: 0,
  ci: 0,
  cg: {
    r: 0,
    c: 0
  },
  cf: {
    g: 0,
    i: 0
  },
  schD: 0,
  schI: 0,
  collTab: 0,
  collI: 0,
  detSec: 'acts',
  detAct: 0,
  detColl: 0,
  detEp: 0,
  detRel: 0,
  plyBtn: 1,
  plyZone: 'video',
  plyEp: 0
};
function $(id) {
  return document.getElementById(id);
}
function fmt(s) {
  var t = Math.floor(s),
    m = Math.floor(t / 60),
    sc = t % 60;
  return m + ':' + (sc < 10 ? '0' : '') + sc;
}
function getPoster(r) {
  var _r$poster, _r$poster2, _r$poster3;
  var s = (r === null || r === void 0 || (_r$poster = r.poster) === null || _r$poster === void 0 || (_r$poster = _r$poster.optimized) === null || _r$poster === void 0 ? void 0 : _r$poster.preview) || (r === null || r === void 0 || (_r$poster2 = r.poster) === null || _r$poster2 === void 0 ? void 0 : _r$poster2.preview) || (r === null || r === void 0 || (_r$poster3 = r.poster) === null || _r$poster3 === void 0 ? void 0 : _r$poster3.thumbnail);
  if (!s) return null;
  return s.startsWith('http') ? s : CDN + s;
}
function rName(r) {
  var _r$name;
  return (r === null || r === void 0 || (_r$name = r.name) === null || _r$name === void 0 ? void 0 : _r$name.main) || '—';
}
function rEn(r) {
  var _r$name2, _r$name3;
  return (r === null || r === void 0 || (_r$name2 = r.name) === null || _r$name2 === void 0 ? void 0 : _r$name2.english) || (r === null || r === void 0 || (_r$name3 = r.name) === null || _r$name3 === void 0 ? void 0 : _r$name3.alternative) || '';
}
function rEps(r) {
  var t = r === null || r === void 0 ? void 0 : r.episodes_total;
  if (t != null && t > 0) return t;
  if ((r === null || r === void 0 ? void 0 : r._epsCount) > 0) return r._epsCount;
  // fallback: check saved progress for stored epsTotal
  var prog = Store.getReleaseProgress(r === null || r === void 0 ? void 0 : r.id);
  if ((prog === null || prog === void 0 ? void 0 : prog.epsTotal) > 0) {
    r._epsCount = prog.epsTotal;
    return prog.epsTotal;
  }
  return '?';
}
function rTypeBadge(r) {
  var _r$type, _r$type2;
  var v = (r === null || r === void 0 || (_r$type = r.type) === null || _r$type === void 0 ? void 0 : _r$type.value) || '';
  var map = {
    tv: 'bdg-tv',
    movie: 'bdg-movie',
    ova: 'bdg-ova',
    ona: 'bdg-ona',
    web: 'bdg-web',
    oad: 'bdg-ova',
    special: 'bdg-special',
    dorama: 'bdg-web'
  };
  var lbl = (r === null || r === void 0 || (_r$type2 = r.type) === null || _r$type2 === void 0 ? void 0 : _r$type2.description) || v.toUpperCase() || 'ТБ';
  return "<span class=\"bdg ".concat(map[v] || 'bdg-tv', "\">").concat(lbl, "</span>");
}
function rStatusBadge(r) {
  if (r !== null && r !== void 0 && r.is_ongoing) return '<span class="bdg bdg-ongoing">● Онгоинг</span>';
  return '<span class="bdg bdg-fin">✓ Завершено</span>';
}
function rAgeBadge(r) {
  var _r$age_rating;
  var lbl = r === null || r === void 0 || (_r$age_rating = r.age_rating) === null || _r$age_rating === void 0 ? void 0 : _r$age_rating.label;
  if (!lbl) return '';
  return "<span class=\"bdg bdg-age\">".concat(lbl, "</span>");
}
function setStatus(s, txt) {
  var d = $('sdot');
  d.className = 'sdot' + (s === 'ok' ? ' ok' : s === 'warn' ? ' warn' : s === 'sync' ? ' sync' : '');
  $('stxt').textContent = txt;
}
function tick() {
  var n = new Date();
  $('clk').textContent = n.getHours().toString().padStart(2, '0') + ':' + n.getMinutes().toString().padStart(2, '0');
}
tick();
setInterval(tick, 60000);
function clearFoc(sel) {
  (sel === '.card' ? _$homeRows || $('homeRows') : document).querySelectorAll(sel + '.foc').forEach(function (e) {
    return e.classList.remove('foc');
  });
}
function foc(el) {
  if (el) el.classList.add('foc');
}
function focIdx(sel, idx) {
  var els = _toConsumableArray(document.querySelectorAll(sel));
  els.forEach(function (e) {
    return e.classList.remove('foc');
  });
  if (els[idx]) els[idx].classList.add('foc');
  return els.length;
}
var _hlsLoaded = false;
function ensureHls(cb) {
  if (_isSamsung || $('vid').canPlayType('application/vnd.apple.mpegurl') || typeof Hls !== 'undefined') {
    cb();
    return;
  }
  if (_hlsLoaded) {
    setTimeout(cb, 10);
    return;
  }
  var s = document.createElement('script');
  s.src = 'js/hls.min.js';
  s.onerror = function () {
    cb();
  };
  s.onload = function () {
    _hlsLoaded = true;
    cb();
  };
  document.head.appendChild(s);
}
var YEAR_MIN = 1990,
  YEAR_MAX = new Date().getFullYear();
window.yearState = {
  from: 2000,
  to: YEAR_MAX
};
function updateYearDisplay() {
  $('fYearFromVal').textContent = yearState.from ? String(yearState.from) : '—';
  $('fYearToVal').textContent = yearState.to ? String(yearState.to) : '—';
}
function yearStep(field, delta) {
  var cur = yearState[field] || (field === 'from' ? 2000 : YEAR_MAX);
  var next = Math.max(YEAR_MIN, Math.min(YEAR_MAX, cur + delta));
  yearState[field] = next;
  updateYearDisplay();
}
function yearClear(field) {
  yearState[field] = null;
  updateYearDisplay();
}
function rRating(r) {
  var n = (r === null || r === void 0 ? void 0 : r.added_in_users_favorites) || 0;
  if (!n) return '';
  if (n >= 1000) return '★ ' + (n / 1000).toFixed(1) + 'k';
  return '★ ' + n;
}

// Returns short label if release is in any collection, null otherwise
function getCollLabel(id) {
  var coll = Store.getColl();
  var sid = String(id),
    nid = Number(id);
  var has = function has(arr) {
    return (arr || []).some(function (x) {
      return x === sid || x === nid || String(x) === sid;
    });
  };
  if (has(coll.favorites)) return '❤';
  if (has(coll.watching)) return '👁';
  if (has(coll.planned)) return '📅';
  if (has(coll.completed)) return '✓';
  if (has(coll.abandoned)) return '✕';
  return null;
}

// Refresh collection badge on all cards for a release (after coll change)

function _removeInvalidId(id) {
  var coll = Store.getColl();
  var sid = String(id),
    nid = Number(id);
  ['favorites', 'watching', 'planned', 'completed', 'abandoned', 'history'].forEach(function (k) {
    if (!coll[k]) return;
    coll[k] = coll[k].filter(function (x) {
      return x !== sid && x !== nid && String(x) !== sid;
    });
  });
  Store.set('alv_coll', coll);
}
function refreshCardBadge(releaseId) {
  var lbl = getCollLabel(releaseId);
  // Regular cards
  document.querySelectorAll(".card[data-rid=\"".concat(releaseId, "\"]")).forEach(function (card) {
    var badge = card.querySelector('.c-badge-coll');
    if (lbl) {
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'c-badge-coll';
        card.appendChild(badge);
      }
      badge.textContent = lbl;
    } else {
      var _badge;
      (_badge = badge) === null || _badge === void 0 || _badge.remove();
    }
  });
  // Related release cards (.det-rel-card) — identified by their stored _r object
  document.querySelectorAll('.det-rel-card').forEach(function (card) {
    if (String(card._relId) !== String(releaseId)) return;
    var badge = card.querySelector('.drc-coll');
    if (lbl) {
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'drc-coll';
        card.appendChild(badge);
      }
      badge.textContent = lbl;
    } else {
      var _badge2;
      (_badge2 = badge) === null || _badge2 === void 0 || _badge2.remove();
    }
  });
}
function buildCardInner(r) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var url = getPoster(r);
  var _epsTot = r.episodes_total || r._epsCount || 0;
  var pct = Store.getTotalProgress(r.id, _epsTot);
  // If in 'completed' collection — always 100%
  if (!pct || pct < 100) {
    var coll = Store.getColl();
    if ((coll.completed || []).includes(r.id)) pct = 100;
  }
  // For 1-ep releases (films), show per-episode progress if total progress = 0
  if (!pct && _epsTot <= 1) {
    var p = Store.getReleaseProgress(r.id);
    if ((p === null || p === void 0 ? void 0 : p.duration) > 0) pct = Math.round(p.time / p.duration * 100);else if ((p === null || p === void 0 ? void 0 : p.time) > 30) pct = 50;
  }
  var rating = rRating(r);
  var ph = EMJ[(r.id || 0) % EMJ.length];
  return "\n    ".concat(url ? "<img class=\"c-img\" decoding=\"async\" src=\"".concat(url, "\" alt=\"\" loading=\"lazy\">") : "<div class=\"c-ph\">".concat(ph, "</div>"), "\n    ").concat(r !== null && r !== void 0 && r.is_ongoing ? '<div class="c-badge-ongoing">Онгоинг</div>' : '', "\n    ").concat(opts.isNew ? '<div class="c-new">NEW</div>' : '', "\n    ").concat(function () {
    var lbl = getCollLabel(r === null || r === void 0 ? void 0 : r.id);
    return lbl ? "<div class=\"c-badge-coll\">".concat(lbl, "</div>") : '';
  }(), "\n    <div class=\"c-body\">\n      <div class=\"c-name\">").concat(rName(r), "</div>\n      <div class=\"c-foot\">\n        ").concat(rTypeBadge(r), "\n        <span>").concat((r === null || r === void 0 ? void 0 : r.year) || '', "</span>\n        ").concat(rEps(r) != '?' ? "<span class=\"c-eps\">".concat(rEps(r), " \u044D\u043F.</span>") : '', "\n        ").concat(rating ? "<span class=\"c-rating\">".concat(rating, "</span>") : '', "\n      </div>\n    </div>\n    ").concat(pct > 0 ? "<div class=\"c-prog\"><div class=\"c-prog-f\" style=\"width:".concat(pct, "%\"></div></div>") : '');
}
function makeCard(r, onClick, isNew) {
  var el = document.createElement('div');
  el.className = 'card';
  el.dataset.rid = r.id;
  el.dataset.rdata = JSON.stringify({
    id: r.id,
    alias: r.alias || r.id
  });
  el._onClick = onClick;
  el._r = r;
  el.innerHTML = buildCardInner(r, {
    isNew: isNew
  });
  // Apply collection badge immediately (collections may load after card renders)
  var lbl = getCollLabel(r.id);
  if (lbl) {
    var badge = el.querySelector('.c-badge-coll');
    if (!badge) {
      badge = document.createElement('div');
      badge.className = 'c-badge-coll';
      el.appendChild(badge);
    }
    badge.textContent = lbl;
  }
  return el;
}

// ── Multi-row home page ──────────────────────────────────────────────────────
// nav.rows tracks [{releases, offset}] for each visible row
var homeRows = [];
var activeRowI = 0;
var rowPos = []; // per-row last card index

var CARD_WIN = Math.max(15, Math.ceil(window.innerWidth / 170) + 8);
var ROW_PRELOAD = 2; // rows to preload ahead of current
var CARDS_PER_PAGE = window.innerWidth <= 768 ? 15 : 25;
function buildRow(title, list, isNew) {
  if (!list.length) return null;
  var sec = document.createElement('div');
  sec.className = 'cards-sec home-row';
  var idx = homeRows.length;
  homeRows.push({
    releases: list,
    el: null,
    winStart: 0,
    hasMore: false,
    nextPage: 2,
    filters: null,
    loading: false
  });
  sec.innerHTML = "<div class=\"row-hdr\"><div class=\"row-bar\"></div><div class=\"row-ttl\">".concat(title, "</div></div>\n    <div class=\"track-wrap\">\n      <button class=\"row-arr arr-l arr-hidden\" tabindex=\"-1\" data-ri=\"").concat(idx, "\">&#8249;</button>\n      <div class=\"track\" id=\"track-").concat(idx, "\"></div>\n      <button class=\"row-arr arr-r\" tabindex=\"-1\" data-ri=\"").concat(idx, "\">&#8250;</button>\n    </div>");
  homeRows[idx].el = sec;
  sec.querySelector('.arr-l').addEventListener('click', function (e) {
    var _rowPos$ri;
    e.stopPropagation();
    var ri = parseInt(e.currentTarget.dataset.ri);
    activeRowI = ri;
    nav.rowI = ri;
    nav.zone = 'home.cards';
    focCard(Math.max(0, ((_rowPos$ri = rowPos[ri]) !== null && _rowPos$ri !== void 0 ? _rowPos$ri : 0) - 3), ri);
    updateRowArrows(ri);
  });
  sec.querySelector('.arr-r').addEventListener('click', function (e) {
    var _row$releases$length, _row$releases, _rowPos$ri2;
    e.stopPropagation();
    var ri = parseInt(e.currentTarget.dataset.ri);
    activeRowI = ri;
    nav.rowI = ri;
    nav.zone = 'home.cards';
    var row = homeRows[ri];
    focCard(Math.min(((_row$releases$length = row === null || row === void 0 || (_row$releases = row.releases) === null || _row$releases === void 0 ? void 0 : _row$releases.length) !== null && _row$releases$length !== void 0 ? _row$releases$length : 1) - 1, ((_rowPos$ri2 = rowPos[ri]) !== null && _rowPos$ri2 !== void 0 ? _rowPos$ri2 : 0) + 3), ri);
    updateRowArrows(ri);
  });
  var tw = sec.querySelector('.track-wrap');
  if (tw) tw.addEventListener('scroll', function () {
    if (!document.body.classList.contains('is-mobile')) return;
    var row = homeRows[idx];
    if (!row || !row.hasMore || row.loading) return;
    if (tw.scrollLeft + tw.clientWidth >= tw.scrollWidth - 200) maybeLoadMoreCards(idx);
  }, {
    passive: true
  });
  renderCardWindow(idx, 0);
  return sec;
}
function renderCardWindow(rowI, focusIdx) {
  var row = homeRows[rowI];
  if (!row || row.stub) return;
  var list = row.releases;
  var track = document.getElementById('track-' + rowI);
  if (!track) return;
  if (document.body.classList.contains('is-mobile')) {
    var already = track.querySelectorAll('.card').length;
    if (already >= list.length) return;
    track.innerHTML = '';
    var _loop = function _loop(i) {
      var r = list[i];
      var el = makeCard(r, function () {
        activeRowI = rowI;
        nav.ci = i;
        nav.rowI = rowI;
        openDetailRelease(r);
      }, false);
      el.dataset.ri = rowI;
      el.dataset.ci = i;
      track.appendChild(el);
    };
    for (var i = 0; i < list.length; i++) {
      _loop(i);
    }
    return;
  }
  var half = Math.floor(CARD_WIN / 2);
  var start = Math.max(0, focusIdx - half);
  var end = Math.min(list.length, start + CARD_WIN);
  if (row.winStart === start && track.children.length) return;
  row.winStart = start;
  track.innerHTML = '';
  var cw = 160 + 10;
  if (start > 0) {
    var sp = document.createElement('div');
    sp.style.cssText = "width:".concat(start * cw, "px;flex-shrink:0");
    track.appendChild(sp);
  }
  var _loop2 = function _loop2(_i) {
    var r = list[_i];
    var el = makeCard(r, function () {
      activeRowI = rowI;
      nav.ci = _i;
      nav.rowI = rowI;
      openDetailRelease(r);
    }, false);
    el.dataset.ri = rowI;
    el.dataset.ci = _i;
    track.appendChild(el);
  };
  for (var _i = start; _i < end; _i++) {
    _loop2(_i);
  }
  var remaining = list.length - end;
  if (remaining > 0) {
    var _sp = document.createElement('div');
    _sp.style.cssText = "width:".concat(remaining * cw, "px;flex-shrink:0");
    track.appendChild(_sp);
  }
}

// Fetch more cards for a row when user nears the end
function maybeLoadMoreCards(_x8) {
  return _maybeLoadMoreCards.apply(this, arguments);
}
function _maybeLoadMoreCards() {
  _maybeLoadMoreCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(rowI) {
    var row, _yield$fetchRowPage, list, hasMore, nextPage, _row$releases2, _rowPos$rowI2;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          row = homeRows[rowI];
          if (!(!row || row.stub || row.loading || !row.hasMore || !row.filters)) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2);
        case 1:
          row.loading = true;
          _context16.p = 2;
          _context16.n = 3;
          return fetchRowPage(row.filters, row.nextPage, CARDS_PER_PAGE);
        case 3:
          _yield$fetchRowPage = _context16.v;
          list = _yield$fetchRowPage.list;
          hasMore = _yield$fetchRowPage.hasMore;
          nextPage = _yield$fetchRowPage.nextPage;
          if (list.length) {
            (_row$releases2 = row.releases).push.apply(_row$releases2, _toConsumableArray(list));
            row.hasMore = hasMore;
            row.nextPage = nextPage;
            renderCardWindow(rowI, (_rowPos$rowI2 = rowPos[rowI]) !== null && _rowPos$rowI2 !== void 0 ? _rowPos$rowI2 : 0);
          } else {
            row.hasMore = false;
          }
        case 4:
          _context16.p = 4;
          row.loading = false;
          return _context16.f(4);
        case 5:
          return _context16.a(2);
      }
    }, _callee13, null, [[2,, 4, 5]]);
  }));
  return _maybeLoadMoreCards.apply(this, arguments);
}
var _rowWrapW = 0;
function scrollRowTo(rowI, ci) {
  var _trackEl$parentElemen;
  var trackEl = document.getElementById('track-' + rowI);
  if (!trackEl) return;
  if (!_rowWrapW) _rowWrapW = ((_trackEl$parentElemen = trackEl.parentElement) === null || _trackEl$parentElemen === void 0 ? void 0 : _trackEl$parentElemen.offsetWidth) || 1280;
  var cw = 170;
  var off = Math.max(0, ci * cw - (_rowWrapW / 2 - cw / 2));
  trackEl.style.transform = "translateX(-".concat(off, "px)");
}
function scrollHomeToRow(rowI) {
  var wrap = _$homeRows || $('homeRows');
  if (!wrap) return;
  var row = homeRows[rowI];
  if (!row || !row.el) return;
  var target = Math.max(0, row.el.offsetTop - 30);
  wrap.scrollTo({
    top: target,
    behavior: _isTizen ? 'auto' : 'smooth'
  });
}
function focCard(i, rowI) {
  rowI = rowI !== null && rowI !== void 0 ? rowI : activeRowI;
  var row = homeRows[rowI];
  if (!row || row.stub) return;
  var list = row.releases;
  i = Math.max(0, Math.min(i, list.length - 1));
  rowPos[rowI] = i;
  nav.ci = i;
  nav.rowI = rowI;
  renderCardWindow(rowI, i);
  document.querySelectorAll('.card.foc').forEach(function (c) {
    return c.classList.remove('foc');
  });
  var trackEl = document.getElementById('track-' + rowI);
  if (trackEl) {
    var card = trackEl.querySelector(".card[data-ci=\"".concat(i, "\"]"));
    if (card) card.classList.add('foc');
    scrollRowTo(rowI, i);
  }
  // Scroll page to row only on keyboard/TV nav, not on mouse clicks
  if (!document.body.classList.contains('mouse')) scrollHomeToRow(rowI);
  // Preload more cards if near end
  if (i >= list.length - 8) maybeLoadMoreCards(rowI);
  if (rowI === 0 && list[i] && !_isTizen) {
    clearTimeout(window._heroT);
  }
  updateRowArrows(rowI);
}
function visiblePageSize(rowI) {
  var _trackEl$parentElemen2;
  var trackEl = document.getElementById('track-' + rowI);
  if (!trackEl) return 5;
  var wrapW = ((_trackEl$parentElemen2 = trackEl.parentElement) === null || _trackEl$parentElemen2 === void 0 ? void 0 : _trackEl$parentElemen2.offsetWidth) || 1280;
  var cw = 170; // card + gap
  return Math.max(1, Math.floor(wrapW / cw));
}
function updateRowArrows(rowI) {
  var _rowPos$rowI;
  var row = homeRows[rowI];
  if (!row || !row.el) return;
  var ci = (_rowPos$rowI = rowPos[rowI]) !== null && _rowPos$rowI !== void 0 ? _rowPos$rowI : 0;
  var n = (row.releases || []).length - 1;
  var btnL = row.el.querySelector('.arr-l');
  var btnR = row.el.querySelector('.arr-r');
  if (btnL) btnL.classList.toggle('arr-hidden', ci <= 0);
  if (btnR) btnR.classList.toggle('arr-hidden', ci >= n && !row.hasMore);
}
function navHomeCards(k) {
  var row = homeRows[activeRowI];
  if (!row || row.stub) return;
  var n = Math.max(0, row.releases.length - 1);
  if (k === 'ArrowRight') focCard(Math.min(nav.ci + 1, n));else if (k === 'ArrowLeft') focCard(Math.max(nav.ci - 1, 0));else if (k === 'ArrowDown') {
    var next = activeRowI + 1;
    while (next < homeRows.length && (_homeRows$next = homeRows[next]) !== null && _homeRows$next !== void 0 && _homeRows$next.failed) {
      var _homeRows$next;
      next++;
    }
    if (next < homeRows.length) {
      var _homeRows$activeRowI, _rowPos$activeRowI;
      activeRowI = next;
      nav.rowI = next;
      ensureRowsLoaded(activeRowI);
      if ((_homeRows$activeRowI = homeRows[activeRowI]) !== null && _homeRows$activeRowI !== void 0 && _homeRows$activeRowI.stub) loadLazyRow(activeRowI);else focCard((_rowPos$activeRowI = rowPos[activeRowI]) !== null && _rowPos$activeRowI !== void 0 ? _rowPos$activeRowI : 0, activeRowI);
    }
  } else if (k === 'ArrowUp') {
    if (activeRowI > 0) {
      var _homeRows$activeRowI2, _rowPos$activeRowI2;
      var prev = activeRowI - 1;
      while (prev > 0 && (_homeRows$prev = homeRows[prev]) !== null && _homeRows$prev !== void 0 && _homeRows$prev.failed) {
        var _homeRows$prev;
        prev--;
      }
      activeRowI = prev;
      nav.rowI = prev;
      ensureRowsLoaded(activeRowI);
      if ((_homeRows$activeRowI2 = homeRows[activeRowI]) !== null && _homeRows$activeRowI2 !== void 0 && _homeRows$activeRowI2.stub) loadLazyRow(activeRowI);else focCard((_rowPos$activeRowI2 = rowPos[activeRowI]) !== null && _rowPos$activeRowI2 !== void 0 ? _rowPos$activeRowI2 : 0, activeRowI);
    } else {
      clearFoc('.card');
      nav.zone = 'home.nav';
      focNavTab(0);
    }
  } else if (k === 'Enter' && row.releases.length) {
    openDetailRelease(homeRows[activeRowI].releases[nav.ci]);
  } else if (k === 'ContextMenu') {
    var _homeRows$activeRowI3;
    openCtxMenu((_homeRows$activeRowI3 = homeRows[activeRowI]) === null || _homeRows$activeRowI3 === void 0 ? void 0 : _homeRows$activeRowI3.releases[nav.ci]);
  }
}

// Ensure current + ROW_PRELOAD rows ahead are loaded
function ensureRowsLoaded(fromRowI) {
  for (var i = fromRowI; i <= fromRowI + ROW_PRELOAD && i < homeRows.length; i++) {
    var row = homeRows[i];
    if (row !== null && row !== void 0 && row.stub && !row._loading) loadRowByQueueIdx(row.qi);
  }
}
function focHeroBtn(i) {
  nav.hi = i;
  clearFoc('.h-btns .btn');
  _toConsumableArray(document.querySelectorAll('.h-btns .btn')).forEach(function (b, j) {
    return b.classList.toggle('foc', j === i);
  });
}
var _navTabs = null;
function _getNT() {
  return _navTabs || (_navTabs = _toConsumableArray(document.querySelectorAll('#nav .ntab')));
}
function focNavTab(i) {
  nav.ni = i;
  _getNT().forEach(function (t, j) {
    return t.classList.toggle('foc', j === i && nav.zone === 'home.nav');
  });
}
function clearNavFoc() {
  _getNT().forEach(function (t) {
    return t.classList.remove('foc');
  });
}
function loadGenres() {
  return _loadGenres.apply(this, arguments);
}
function _loadGenres() {
  _loadGenres = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
    var d, list, wrap, _t13;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          _context17.n = 1;
          return api('/anime/genres');
        case 1:
          d = _context17.v;
          list = Array.isArray(d) ? d : (d === null || d === void 0 ? void 0 : d.data) || [];
          wrap = $('fGenres');
          wrap.innerHTML = '';
          list.forEach(function (g) {
            var b = document.createElement('button');
            b.className = 'fchip';
            b.dataset.k = 'genres';
            b.dataset.v = g.id;
            b.textContent = g.name;
            wrap.appendChild(b);
          });
          return _context17.a(2, list);
        case 2:
          _context17.p = 2;
          _t13 = _context17.v;
          return _context17.a(2, []);
      }
    }, _callee14, null, [[0, 2]]);
  }));
  return _loadGenres.apply(this, arguments);
}
var _scheduleLoaded = false;
function loadSchedule() {
  return _loadSchedule.apply(this, arguments);
}
function _loadSchedule() {
  _loadSchedule = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
    var d, items, _t14;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          if (!_scheduleLoaded) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2);
        case 1:
          _context18.p = 1;
          _context18.n = 2;
          return api('/anime/schedule/week');
        case 2:
          d = _context18.v;
          items = Array.isArray(d) ? d : (d === null || d === void 0 ? void 0 : d.data) || [];
          renderSchedule(items);
          _scheduleLoaded = true;
          // Restore scroll position after render
          if (_pageScrollPos['schedule'] != null) {
            requestAnimationFrame(function () {
              var el = $('pgSchedule');
              if (el) el.scrollTop = _pageScrollPos['schedule'];
            });
          }
          _context18.n = 4;
          break;
        case 3:
          _context18.p = 3;
          _t14 = _context18.v;
          renderSchedule([]);
        case 4:
          return _context18.a(2);
      }
    }, _callee15, null, [[1, 3]]);
  }));
  return _loadSchedule.apply(this, arguments);
}
var catFilters = {},
  catPage = 1,
  catLoading = false,
  catQuery = '';
var catSearchTimeout = null;
var catReleases = [];
function getFilterParams() {
  var _window$yearState, _window$yearState2;
  var p = new URLSearchParams();
  var multi = ['types', 'seasons', 'age_ratings', 'genres', 'publish_statuses', 'production_statuses'];
  multi.forEach(function (k) {
    if (catFilters[k] && catFilters[k].length) catFilters[k].forEach(function (v) {
      return p.append("f[".concat(k, "][]"), v);
    });
  });
  if (catFilters.sorting) p.set('f[sorting]', catFilters.sorting);
  if (catQuery) p.set('f[search]', catQuery);
  // year range
  if ((_window$yearState = window.yearState) !== null && _window$yearState !== void 0 && _window$yearState.from) p.set('f[years][from_year]', window.yearState.from);
  if ((_window$yearState2 = window.yearState) !== null && _window$yearState2 !== void 0 && _window$yearState2.to) p.set('f[years][to_year]', window.yearState.to);
  p.set('page', catPage);
  p.set('limit', 24);
  return p.toString();
}
function loadCatalog() {
  return _loadCatalog.apply(this, arguments);
} // ── Global event delegation для всіх карток ────────────────────────────────
function _loadCatalog() {
  _loadCatalog = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
    var reset,
      data,
      list,
      _args19 = arguments,
      _t15;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.p = _context19.n) {
        case 0:
          reset = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : false;
          if (!catLoading) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2);
        case 1:
          catLoading = true;
          if (reset) {
            catPage = 1;
            catReleases = [];
            $('catGrid').innerHTML = '<div class="cat-info">⏳ Загрузка...</div>';
          }
          _context19.p = 2;
          _context19.n = 3;
          return api('/anime/catalog/releases?' + getFilterParams());
        case 3:
          data = _context19.v;
          list = Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data.data) || (data === null || data === void 0 ? void 0 : data.list) || [];
          if (reset) $('catGrid').innerHTML = '';
          if (!(!list.length && reset)) {
            _context19.n = 4;
            break;
          }
          $('catGrid').innerHTML = '<div class="cat-info">Ничего не найдено</div>';
          // возвращаем фокус на строку поиска
          if (pg.cur === 'catalog') {
            focCatSearch();
          }
          return _context19.a(2);
        case 4:
          list.forEach(function (r) {
            Store.cacheRelease(r);
            catReleases.push(r);
            appendCatCard(r);
          });
          catPage++;
          // после reset — фокус на первую карточку (если были в каталоге)
          if (reset && pg.cur === 'catalog') {
            focCatGrid(0, 0);
          }
          _context19.n = 6;
          break;
        case 5:
          _context19.p = 5;
          _t15 = _context19.v;
          if (reset) $('catGrid').innerHTML = '<div class="cat-info">Ошибка загрузки</div>';
          if (reset && pg.cur === 'catalog') {
            focCatSearch();
          }
        case 6:
          _context19.p = 6;
          catLoading = false;
          return _context19.f(6);
        case 7:
          return _context19.a(2);
      }
    }, _callee16, null, [[2, 5, 6, 7]]);
  }));
  return _loadCatalog.apply(this, arguments);
}
function _cardDelegation(container) {
  container.addEventListener('click', function (e) {
    var card = e.target.closest('.card');
    if (!card) return;
    if (card._onClick) card._onClick();else if (card._r) openDetailRelease(card._r);
  });
  container.addEventListener('mousedown', function (e) {
    var card = e.target.closest('.card');
    if (card && card._r) startHold(card._r);
  });
  container.addEventListener('mouseup', cancelHold);
  container.addEventListener('mouseleave', cancelHold);
  container.addEventListener('contextmenu', function (e) {
    var card = e.target.closest('.card');
    if (!card || !card._r) return;
    e.preventDefault();
    openCtxMenu(card._r, e.clientX, e.clientY);
  });
}
function appendCatCard(r) {
  var el = document.createElement('div');
  el.className = 'card';
  el.style.cssText = '';
  el.dataset.rid = r.id;
  el._r = r;
  el.innerHTML = buildCardInner(r);
  $('catGrid').appendChild(el);
}

// catalog infinite scroll
document.getElementById('catGrid').addEventListener('scroll', function (e) {
  var g = e.target;
  if (g.scrollTop + g.clientHeight > g.scrollHeight - 200) loadCatalog();
});

// catalog search
$('catQ').addEventListener('focus', function () {
  nav.zone = 'cat.search';
  $('catSrch').classList.add('foc');
});
$('catQ').addEventListener('blur', function () {
  // системная клавиатура закрыта — возвращаем nav зону
  if (nav.zone === 'cat.search') {
    catQuery = $('catQ').value.trim();
    if (catQuery) loadCatalog(true);
    // loadCatalog переведёт фокус на грид; без запроса — оставляем на строке
  }
});
$('catQ').addEventListener('input', function (e) {
  clearTimeout(catSearchTimeout);
  catQuery = e.target.value.trim();
  catSearchTimeout = setTimeout(function () {
    return loadCatalog(true);
  }, 500);
});

// filter chip toggle — called after genres load
function bindFchips() {
  document.querySelectorAll('.fchip').forEach(function (ch) {
    // avoid double-binding
    if (ch._bound) return;
    ch._bound = true;
    ch.addEventListener('click', function () {
      var k = ch.dataset.k,
        v = String(ch.dataset.v),
        single = 'single' in ch.dataset;
      if (single) {
        ch.closest('.f-chips').querySelectorAll('.fchip').forEach(function (c) {
          return c.classList.remove('sel');
        });
        if (catFilters[k] === v) {
          delete catFilters[k];
          ch.classList.remove('sel');
        } else {
          catFilters[k] = v;
          ch.classList.add('sel');
        }
      } else {
        if (!catFilters[k]) catFilters[k] = [];
        var vv = k === 'genres' ? Number(v) : v;
        var idx = catFilters[k].indexOf(vv);
        if (idx === -1) {
          catFilters[k].push(vv);
          ch.classList.add('sel');
        } else {
          catFilters[k].splice(idx, 1);
          ch.classList.remove('sel');
        }
      }
    });
  });
}
$('fltApply').addEventListener('click', function () {
  return loadCatalog(true);
});
$('fltReset').addEventListener('click', function () {
  catFilters = {};
  catQuery = '';
  $('catQ').value = '';
  window.yearState = {
    from: 2000,
    to: YEAR_MAX
  };
  updateYearDisplay();
  document.querySelectorAll('.fchip.sel').forEach(function (c) {
    return c.classList.remove('sel');
  });
  loadCatalog(true);
});
function renderSchedule(items) {
  var grid = $('schGrid');
  grid.innerHTML = '';
  var todayJS = new Date().getDay(); // 0=Sun
  var _loop3 = function _loop3() {
    var apiDay = DAYS_API[di]; // 1=Mon...0=Sun
    var isToday = apiDay === todayJS;
    var col = document.createElement('div');
    col.className = 'sch-day';
    var hdr = document.createElement('div');
    hdr.className = 'sch-dh' + (isToday ? ' today' : '');
    hdr.textContent = DAYS_UK[di] + (isToday ? ' — Сегодня' : '');
    col.appendChild(hdr);
    var itemsDiv = document.createElement('div');
    itemsDiv.className = 'sch-items';
    var dayItems = items.filter(function (it) {
      var _it$release;
      return Number(it === null || it === void 0 || (_it$release = it.release) === null || _it$release === void 0 || (_it$release = _it$release.publish_day) === null || _it$release === void 0 ? void 0 : _it$release.value) === apiDay;
    });
    if (dayItems.length) {
      dayItems.forEach(function (it) {
        var r = it.release;
        if (!r) return;
        var url = getPoster(r);
        var el = document.createElement('button');
        el.className = 'sch-item';

        // image or placeholder
        if (url) {
          var img = document.createElement('img');
          img.className = 'sch-item-img';
          img.src = url;
          img.alt = '';
          img.loading = 'lazy';
          el.appendChild(img);
        } else {
          var ph = document.createElement('div');
          ph.className = 'sch-item-ph';
          ph.textContent = EMJ[r.id % EMJ.length];
          el.appendChild(ph);
        }

        // info section — always append, avoid template literal issues
        var info = document.createElement('div');
        info.className = 'sch-item-info';
        var nameDiv = document.createElement('div');
        nameDiv.className = 'sin';
        nameDiv.textContent = rName(r) || '—';
        var epDiv = document.createElement('div');
        epDiv.className = 'sie';
        var ep = it.published_release_episode;
        epDiv.textContent = (ep ? 'Серия ' + ep.ordinal + ' · ' : '') + String(r.year || '');
        info.appendChild(nameDiv);
        info.appendChild(epDiv);
        el.appendChild(info);
        el.addEventListener('click', function () {
          return openDetailRelease(r);
        });
        itemsDiv.appendChild(el);
        Store.cacheRelease(r);
      });
    } else {
      itemsDiv.innerHTML = '<div style="font-size:11px;color:var(--t3);padding:6px 0">—</div>';
    }
    col.appendChild(itemsDiv);
    grid.appendChild(col);
  };
  for (var di = 0; di < 7; di++) {
    _loop3();
  }
}
var curCollTab = 'favorites';
function renderCollTab(_x9) {
  return _renderCollTab.apply(this, arguments);
}
function _renderCollTab() {
  _renderCollTab = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(type) {
    var grid, coll, ids, emptyMsg, missing, CHUNK, i, shown, needProgress;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          curCollTab = type;
          grid = $('collGrid');
          grid.innerHTML = '';
          coll = Store.getColl();
          ids = coll[type] || [];
          emptyMsg = type === 'history' ? 'Вы ещё ничего не смотрели' : 'Коллекция пуста';
          if (ids.length) {
            _context22.n = 1;
            break;
          }
          grid.innerHTML = "<div class=\"coll-empty\"><div class=\"coll-empty-ic\">".concat(type === 'history' ? '🕐' : '📂', "</div><div>").concat(emptyMsg, "</div></div>");
          return _context22.a(2);
        case 1:
          // Показуємо skeleton поки грузиться
          ids.forEach(function () {
            var el = document.createElement('div');
            el.className = 'card skel';
            grid.appendChild(el);
          });
          // Завантажуємо відсутні релізи по 4 паралельно
          missing = ids.filter(function (id) {
            return !Store.getCachedRelease(id);
          });
          if (!missing.length) {
            _context22.n = 4;
            break;
          }
          CHUNK = 8;
          i = 0;
        case 2:
          if (!(i < missing.length)) {
            _context22.n = 4;
            break;
          }
          _context22.n = 3;
          return Promise.allSettled(missing.slice(i, i + CHUNK).map(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(id) {
              var key, r, _r, _t16, _t17;
              return _regenerator().w(function (_context20) {
                while (1) switch (_context20.p = _context20.n) {
                  case 0:
                    key = Store.getAlias(id) || id;
                    _context20.p = 1;
                    _context20.n = 2;
                    return api('/anime/releases/' + key);
                  case 2:
                    r = _context20.v;
                    if (r !== null && r !== void 0 && r.id) Store.cacheRelease(r);
                    _context20.n = 8;
                    break;
                  case 3:
                    _context20.p = 3;
                    _t16 = _context20.v;
                    if (!((_t16 === null || _t16 === void 0 ? void 0 : _t16.code) === 404)) {
                      _context20.n = 4;
                      break;
                    }
                    _removeInvalidId(id);
                    _context20.n = 8;
                    break;
                  case 4:
                    if (!(key !== id)) {
                      _context20.n = 8;
                      break;
                    }
                    _context20.p = 5;
                    _context20.n = 6;
                    return api('/anime/releases/' + id);
                  case 6:
                    _r = _context20.v;
                    if (_r !== null && _r !== void 0 && _r.id) Store.cacheRelease(_r);
                    _context20.n = 8;
                    break;
                  case 7:
                    _context20.p = 7;
                    _t17 = _context20.v;
                    if ((_t17 === null || _t17 === void 0 ? void 0 : _t17.code) === 404) _removeInvalidId(id);
                  case 8:
                    return _context20.a(2);
                }
              }, _callee17, null, [[5, 7], [1, 3]]);
            }));
            return function (_x16) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 3:
          i += CHUNK;
          _context22.n = 2;
          break;
        case 4:
          grid.innerHTML = '';
          shown = 0;
          ids.forEach(function (id) {
            var r = Store.getCachedRelease(id);
            if (!r) return;
            appendCollCard(r, type);
            shown++;
            // Update progress bar immediately from local data
            var epsTot = r.episodes_total || r._epsCount || 0;
            var pct = Store.getTotalProgress(String(id), epsTot);
            // If in completed — always 100%
            var rid = Number(id) || id;
            if ((coll.completed || []).some(function (x) {
              return String(x) === String(id);
            })) pct = 100;
            if (pct > 0) {
              var card = grid.lastElementChild;
              if (card) {
                var bar = card.querySelector('.c-prog');
                if (!bar) {
                  bar = document.createElement('div');
                  bar.className = 'c-prog';
                  bar.innerHTML = '<div class="c-prog-f"></div>';
                  card.appendChild(bar);
                }
                bar.querySelector('.c-prog-f').style.width = pct + '%';
              }
            }
          });
          if (!shown) {
            grid.innerHTML = "<div class=\"coll-empty\"><div class=\"coll-empty-ic\">".concat(type === 'history' ? '🕐' : '📂', "</div><div>").concat(emptyMsg, "</div></div>");
          }
          // Pull timecodes in background for releases with no local progress data
          // This updates progress bars without requiring user to open each anime
          if (authToken && type !== 'history') {
            needProgress = ids.filter(function (id) {
              Store._buildIdx();
              return !(Store._pidx[String(id)] || []).length;
            });
            if (needProgress.length) {
              _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
                var _iterator3, _step3, id, r2, epsTot, pct, coll2, card, bar, _t18;
                return _regenerator().w(function (_context21) {
                  while (1) switch (_context21.p = _context21.n) {
                    case 0:
                      _iterator3 = _createForOfIteratorHelper(needProgress.slice(0, 10));
                      _context21.p = 1;
                      _iterator3.s();
                    case 2:
                      if ((_step3 = _iterator3.n()).done) {
                        _context21.n = 7;
                        break;
                      }
                      id = _step3.value;
                      _context21.n = 3;
                      return pullTimecodes(id);
                    case 3:
                      // Update card progress bar after pull
                      r2 = Store.getCachedRelease(id);
                      if (r2) {
                        _context21.n = 4;
                        break;
                      }
                      return _context21.a(3, 6);
                    case 4:
                      epsTot = r2.episodes_total || r2._epsCount || 0;
                      pct = Store.getTotalProgress(String(id), epsTot);
                      coll2 = Store.getColl();
                      if ((coll2.completed || []).includes(id) || (coll2.completed || []).map(String).includes(String(id))) pct = 100;
                      if (!(pct > 0)) {
                        _context21.n = 6;
                        break;
                      }
                      card = grid.querySelector(".card[data-rid=\"".concat(id, "\"]"));
                      if (card) {
                        _context21.n = 5;
                        break;
                      }
                      return _context21.a(3, 6);
                    case 5:
                      bar = card.querySelector('.c-prog');
                      if (!bar) {
                        bar = document.createElement('div');
                        bar.className = 'c-prog';
                        bar.innerHTML = '<div class="c-prog-f"></div>';
                        card.appendChild(bar);
                      }
                      bar.querySelector('.c-prog-f').style.width = pct + '%';
                    case 6:
                      _context21.n = 2;
                      break;
                    case 7:
                      _context21.n = 9;
                      break;
                    case 8:
                      _context21.p = 8;
                      _t18 = _context21.v;
                      _iterator3.e(_t18);
                    case 9:
                      _context21.p = 9;
                      _iterator3.f();
                      return _context21.f(9);
                    case 10:
                      return _context21.a(2);
                  }
                }, _callee18, null, [[1, 8, 9, 10]]);
              }))();
            }
          }
        case 5:
          return _context22.a(2);
      }
    }, _callee19);
  }));
  return _renderCollTab.apply(this, arguments);
}
function appendCollCard(r, type) {
  var el = document.createElement('div');
  el.className = 'card';
  el.innerHTML = buildCardInner(r);
  // History: show last watched episode + time
  if (type === 'history') {
    var prog = Store.getReleaseProgress(r.id);
    if (prog && prog.time > 0) {
      // Insert time badge into footer row, before other foot content
      var foot = el.querySelector('.c-foot');
      if (foot) {
        var badge = document.createElement('span');
        badge.style.cssText = 'color:var(--red);font-size:10px;font-weight:600;margin-right:4px;';
        badge.textContent = '▶ ' + fmt(prog.time);
        foot.insertBefore(badge, foot.firstChild);
      }
    }
  }
  el.dataset.rid = r.id;
  el._r = r;
  el.addEventListener('mouseup', cancelHold);
  el.addEventListener('mouseleave', cancelHold);
  $('collGrid').appendChild(el);
}
document.querySelectorAll('.ctab').forEach(function (t, i) {
  t.addEventListener('click', function () {
    document.querySelectorAll('.ctab').forEach(function (x) {
      return x.classList.remove('cur', 'foc');
    });
    t.classList.add('cur');
    nav.collTab = i;
    renderCollTab(t.dataset.c);
    // sync handled by interval and page open
  });
});
function openDetail(_x0) {
  return _openDetail.apply(this, arguments);
}
function _openDetail() {
  _openDetail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(idx) {
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          openDetailRelease(releases[idx]);
        case 1:
          return _context23.a(2);
      }
    }, _callee20);
  }));
  return _openDetail.apply(this, arguments);
}
function openDetailRelease(_x1) {
  return _openDetailRelease.apply(this, arguments);
} // Determine if episode is considered "done"
// Done = reached ending start time, OR 90%+ watched if no ending data
function _openDetailRelease() {
  _openDetailRelease = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(r) {
    var _r$season, _r$season2, _$19;
    var url, bdgs, fav0, seasonMap, seasonName, genres, dur, durStr, epsTotal, epsStr, COLLS, lastProg, hasProgress, detail, eps, realTotal, metaEl, d2, durStr2, _metaEl, allK, totalK, dk, dv, fr, franchises, relMap, allItems, _t20, _t21;
    return _regenerator().w(function (_context25) {
      while (1) switch (_context25.p = _context25.n) {
        case 0:
          if (r) {
            _context25.n = 1;
            break;
          }
          return _context25.a(2);
        case 1:
          detRelease = r;
          Store.cacheRelease(r);
          url = getPoster(r);
          $('detImg').style.backgroundImage = url ? "url(".concat(url, ")") : 'linear-gradient(135deg,#180a14,#0c0f1e)';
          $('detTtl').textContent = rName(r);
          $('detEn').textContent = rEn(r);
          $('detDesc').textContent = (r === null || r === void 0 ? void 0 : r.description) || '';
          // badges
          bdgs = '';
          if (r !== null && r !== void 0 && r.year) bdgs += "<span class=\"bdg bdg-year\">".concat(r.year, "</span>");
          bdgs += rTypeBadge(r) + rStatusBadge(r) + rAgeBadge(r);
          // Add popularity as a badge inline
          fav0 = r === null || r === void 0 ? void 0 : r.added_in_users_favorites;
          if (fav0) bdgs += "<span class=\"bdg\" style=\"background:rgba(245,200,66,.15);color:var(--gold);border:1px solid rgba(245,200,66,.3)\">\u2605 ".concat(fav0 >= 1000 ? (fav0 / 1000).toFixed(1) + 'k' : fav0, "</span>");
          $('detBdgs').innerHTML = bdgs;
          // meta table — no year/type (already shown in badges)
          seasonMap = {
            winter: 'Зима',
            spring: 'Весна',
            summer: 'Лето',
            autumn: 'Осень'
          };
          seasonName = seasonMap[r === null || r === void 0 || (_r$season = r.season) === null || _r$season === void 0 ? void 0 : _r$season.value] || (r === null || r === void 0 || (_r$season2 = r.season) === null || _r$season2 === void 0 ? void 0 : _r$season2.description) || '';
          genres = ((r === null || r === void 0 ? void 0 : r.genres) || []).map(function (g) {
            return g.name;
          }).join(' • ') || '—';
          dur = r === null || r === void 0 ? void 0 : r.average_duration_of_episode;
          durStr = dur && dur >= 60 ? "~".concat(Math.round(dur / 60), " \u043C\u0438\u043D") : null;
          epsTotal = r === null || r === void 0 ? void 0 : r.episodes_total;
          epsStr = epsTotal ? "".concat(epsTotal, " \u044D\u043F.") : '?';
          $('detMeta').innerHTML = "\n    ".concat(seasonName ? "<span class=\"det-meta-k\">\u0421\u0435\u0437\u043E\u043D:</span><span class=\"det-meta-v\">".concat(seasonName, "</span>") : '', "\n    <span class=\"det-meta-k\">\u0416\u0430\u043D\u0440\u044B:</span><span class=\"det-meta-v\">").concat(genres, "</span>\n    ").concat(durStr ? "<span class=\"det-meta-k\">\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:</span><span class=\"det-meta-v\">".concat(durStr, " / \u0441\u0435\u0440\u0438\u044F</span>") : '', "\n    <span class=\"det-meta-k\">\u0412\u0441\u0435\u0433\u043E \u0441\u0435\u0440\u0438\u0439:</span><span class=\"det-meta-v\">").concat(epsStr, "</span>\n");
          // collection buttons
          COLLS = [{
            k: 'favorites',
            l: '❤ Избранное'
          }, {
            k: 'watching',
            l: '👁 Смотрю'
          }, {
            k: 'planned',
            l: '📅 Запланировано'
          }, {
            k: 'completed',
            l: '✓ Просмотрено'
          }, {
            k: 'abandoned',
            l: '✕ Брошено'
          }];
          $('detColl').innerHTML = COLLS.map(function (c) {
            return "\n    <button class=\"det-cbtn".concat(Store.inColl(c.k, r.id) ? ' in' : '', "\" data-coll=\"").concat(c.k, "\">").concat(c.l, "</button>");
          }).join('');
          document.querySelectorAll('.det-cbtn').forEach(function (b) {
            b.addEventListener('click', function () {
              var type = b.dataset.coll;
              var added = Store.toggleColl(type, r.id);
              b.classList.toggle('in', added);
              syncCollToAPI(type, r.id, added);

              // When added to "completed": mark all episodes watched
              if (type === 'completed' && added) markAllEpsWatched(r);

              // Refresh coll badge on all visible cards
              refreshCardBadge(r.id);

              // Одразу оновити collGrid якщо відкрита ця колекція
              if (type === curCollTab) {
                var grid = $('collGrid');
                if (!added) {
                  grid.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
                    return el.remove();
                  });
                  if (!grid.querySelector('.card')) grid.innerHTML = "<div class=\"coll-empty\"><div class=\"coll-empty-ic\">\uD83D\uDCC2</div><div>\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043F\u0443\u0441\u0442\u0430</div></div>";
                } else {
                  if (!grid.querySelector(".card[data-rid=\"".concat(r.id, "\"]"))) {
                    var _grid$querySelector;
                    (_grid$querySelector = grid.querySelector('.coll-empty')) === null || _grid$querySelector === void 0 || _grid$querySelector.remove();
                    appendCollCard(r, type);
                  }
                }
              }
            });
          });
          // [progress block moved below pullTimecodes]
          (_$19 = $('detReset')) === null || _$19 === void 0 || _$19.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
            var prefix, epIdsToDelete, ids, _t19;
            return _regenerator().w(function (_context24) {
              while (1) switch (_context24.p = _context24.n) {
                case 0:
                  // Collect ep IDs from localStorage index before clearing
                  Store._buildIdx();
                  prefix = "alv_p_".concat(r.id, "_");
                  epIdsToDelete = (Store._pidx[String(r.id)] || []).map(function (k) {
                    return k.slice(prefix.length);
                  }); // Set flag to prevent pullTimecodes from restoring data
                  window._resetReleaseId = String(r.id);
                  // Clear local
                  Store.clearReleaseProgress(r.id);
                  Store.removeHistory(r.id);
                  // Delete timecodes from cloud — await it
                  if (!authToken) {
                    _context24.n = 4;
                    break;
                  }
                  ids = epIdsToDelete.length ? epIdsToDelete : playerEps.map(function (ep) {
                    return String(ep.id);
                  });
                  if (!ids.length) {
                    _context24.n = 4;
                    break;
                  }
                  _context24.p = 1;
                  _context24.n = 2;
                  return api('/accounts/users/me/views/timecodes', {
                    method: 'DELETE',
                    body: JSON.stringify(ids.map(function (id) {
                      return {
                        release_episode_id: id
                      };
                    }))
                  });
                case 2:
                  _context24.n = 4;
                  break;
                case 3:
                  _context24.p = 3;
                  _t19 = _context24.v;
                case 4:
                  // Remove from collGrid if history tab is open
                  if (curCollTab === 'history') {
                    $('collGrid').querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
                      return el.remove();
                    });
                    if (!$('collGrid').querySelector('.card')) $('collGrid').innerHTML = '<div class="coll-empty"><div class="coll-empty-ic">🕐</div><div>Вы ещё ничего не смотрели</div></div>';
                  }
                  document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"] .c-prog")).forEach(function (b) {
                    return b.remove();
                  });
                  refreshDetActBtn(r);
                  if (playerEps.length) renderDetailEps(r.id, playerEps);
                case 5:
                  return _context24.a(2);
              }
            }, _callee21, null, [[1, 3]]);
          })));
          $('detEps').innerHTML = '<div style="color:var(--t3);font-size:13px">Загрузка серий...</div>';
          $('detRelated').innerHTML = '';
          $('detRelBlock').style.display = 'none';
          $('detOv').classList.add('on');
          // Save catalog scroll position
          if (pg.cur === 'catalog') window._catScrollSaved = $('catGrid').scrollTop;
          nav.zone = 'det.acts';
          nav.detAct = 0;
          clearFoc('.det-acts .btn');
          $('detPlay').classList.add('foc');
          // load episodes
          // Pull timecodes from cloud for this release
          _context25.n = 2;
          return pullTimecodes(r.id);
        case 2:
          // Check for resume progress
          lastProg = Store.getReleaseProgress(r.id);
          hasProgress = lastProg && lastProg.time > 60;
          if (hasProgress) {
            $('detActs').innerHTML = "<button class=\"btn btn-p det-play-btn\" id=\"detPlay\">\u25B6 \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</button><button class=\"btn btn-s det-reset-btn\" id=\"detReset\">\u21BA \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441</button>";
          } else {
            $('detActs').innerHTML = "<button class=\"btn btn-p det-play-btn\" id=\"detPlay\">\u25B6 \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C</button>";
          }
          $('detPlay').addEventListener('click', function () {
            if (r) Store.addHistory(r.id);
            if (hasProgress && lastProg.epId) {
              var idx = playerEps.findIndex(function (e) {
                return String(e.id) === String(lastProg.epId);
              });
              playerEpIdx = idx >= 0 ? idx : 0;
              // "Продолжить": always resume from exact saved time (no -20s logic)
              window._forceStart = lastProg.time || 0;
            }
            startPlayer();
            window._forceStart = undefined;
          });
          _context25.p = 3;
          _context25.n = 4;
          return api('/anime/releases/' + (r.alias || r.id));
        case 4:
          detail = _context25.v;
          eps = (detail === null || detail === void 0 ? void 0 : detail.episodes) || []; // patch real episode count from loaded data
          realTotal = (detail === null || detail === void 0 ? void 0 : detail.episodes_total) || eps.length || 0;
          if (realTotal > 0) {
            r.episodes_total = realTotal;
            r._epsCount = realTotal;
            Store.cacheRelease(r);
            // update "Всего серий" in meta
            metaEl = $('detMeta');
            metaEl.innerHTML = metaEl.innerHTML.replace(/<span class="det-meta-k">Всего серий:<\/span><span class="det-meta-v">[^<]*<\/span>/, "<span class=\"det-meta-k\">\u0412\u0441\u0435\u0433\u043E \u0441\u0435\u0440\u0438\u0439:</span><span class=\"det-meta-v\">".concat(realTotal, " \u044D\u043F.</span>"));
            // update episode count on all visible cards with this release id
            document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (card) {
              var epsEl = card.querySelector('.c-eps');
              if (epsEl) epsEl.textContent = realTotal + ' эп.';else {
                var foot = card.querySelector('.c-foot');
                if (foot) {
                  var sp = document.createElement('span');
                  sp.className = 'c-eps';
                  sp.textContent = realTotal + ' эп.';
                  // insert before rating
                  var rating = foot.querySelector('.c-rating');
                  if (rating) foot.insertBefore(sp, rating);else foot.appendChild(sp);
                }
              }
            });
          }
          // update duration if detail has more data
          if (detail !== null && detail !== void 0 && detail.average_duration_of_episode && detail.average_duration_of_episode >= 60 && (!dur || dur < 60)) {
            d2 = detail.average_duration_of_episode;
            if (d2 > 0) {
              durStr2 = "~".concat(Math.round(d2 / 60), " \u043C\u0438\u043D");
              _metaEl = $('detMeta'); // insert Длительность before Всего серий if not present
              if (!_metaEl.querySelector('[data-mt="dur"]')) {
                allK = _toConsumableArray(_metaEl.querySelectorAll('.det-meta-k'));
                totalK = allK.find(function (s) {
                  return s.textContent.includes('Всего');
                });
                if (totalK) {
                  dk = document.createElement('span');
                  dk.className = 'det-meta-k';
                  dk.dataset.mt = 'dur';
                  dk.textContent = 'Длительность:';
                  dv = document.createElement('span');
                  dv.className = 'det-meta-v';
                  dv.textContent = durStr2 + ' / серия';
                  _metaEl.insertBefore(dv, totalK);
                  _metaEl.insertBefore(dk, dv);
                }
              }
            }
          }
          renderDetailEps(r.id, eps);
          playerEps = eps;
          // Refresh button now that episodes are loaded — but skip if player opened meanwhile
          if (nav.zone !== 'player') refreshDetActBtn(r);
          _context25.n = 6;
          break;
        case 5:
          _context25.p = 5;
          _t20 = _context25.v;
          $('detEps').innerHTML = "<div style=\"color:var(--t3);font-size:13px\">".concat(authToken ? 'Не удалось загрузить серии' : 'Нужна авторизация для серий', "</div>");
          playerEps = [];
        case 6:
          _context25.p = 6;
          _context25.n = 7;
          return api('/anime/franchises/release/' + r.id);
        case 7:
          fr = _context25.v;
          // ── Normalise every possible AniLibria response shape ────────────────
          // Shape A: [ {franchise:{}, releases:[{release:{},sort_order:N},...]} ]
          // Shape B: {data:[ ... same ... ]}
          // Shape C: {list:[ ... same ... ]}
          // Shape D: releases are bare objects (no nested .release key)
          franchises = [];
          if (Array.isArray(fr)) franchises = fr;else if (fr !== null && fr !== void 0 && fr.data && Array.isArray(fr.data)) franchises = fr.data;else if (fr !== null && fr !== void 0 && fr.list && Array.isArray(fr.list)) franchises = fr.list;else if (fr && _typeof(fr) === 'object') franchises = [fr];
          relMap = new Map();
          franchises.forEach(function (f, fi) {
            // releases array may live at different keys
            var rels = (f === null || f === void 0 ? void 0 : f.franchise_releases) || (f === null || f === void 0 ? void 0 : f.releases) || (f === null || f === void 0 ? void 0 : f.release_list) || (f === null || f === void 0 ? void 0 : f.items) || [];
            if (!Array.isArray(rels)) rels = [];
            rels.forEach(function (rel, idx) {
              // rel may be {release:{...}, sort_order:N}  OR bare release object
              var rr = rel !== null && rel !== void 0 && rel.release && _typeof(rel.release) === 'object' ? rel.release : rel;
              if (!(rr !== null && rr !== void 0 && rr.id)) return;
              var key = String(rr.id);
              if (!relMap.has(key)) {
                var _ref7, _ref8, _rel$sort_order;
                var ord = (_ref7 = (_ref8 = (_rel$sort_order = rel.sort_order) !== null && _rel$sort_order !== void 0 ? _rel$sort_order : rel.ordinal) !== null && _ref8 !== void 0 ? _ref8 : rel.position) !== null && _ref7 !== void 0 ? _ref7 : fi * 1000 + idx;
                relMap.set(key, {
                  rr: rr,
                  ord: ord,
                  isCurrent: String(rr.id) === String(r.id)
                });
              }
            });
          });

          // ── Fallback: if still empty, API might return flat list of releases ─
          if (relMap.size === 0 && Array.isArray(fr)) {
            fr.forEach(function (rel, idx) {
              var _ref9, _rel$sort_order2;
              var rr = rel !== null && rel !== void 0 && rel.release && _typeof(rel.release) === 'object' ? rel.release : rel;
              if (!(rr !== null && rr !== void 0 && rr.id)) return;
              relMap.set(String(rr.id), {
                rr: rr,
                ord: (_ref9 = (_rel$sort_order2 = rel.sort_order) !== null && _rel$sort_order2 !== void 0 ? _rel$sort_order2 : rel.ordinal) !== null && _ref9 !== void 0 ? _ref9 : idx,
                isCurrent: String(rr.id) === String(r.id)
              });
            });
          }
          allItems = _toConsumableArray(relMap.values()).sort(function (a, b) {
            if (a.ord !== b.ord) return a.ord - b.ord;
            return (a.rr.year || 0) - (b.rr.year || 0);
          });
          if (allItems.length > 1) {
            $('detRelBlock').style.display = 'block';
            $('detRelated').innerHTML = '';
            allItems.forEach(function (_ref0) {
              var _rel$type, _rel$type2;
              var rel = _ref0.rr,
                isCurrent = _ref0.isCurrent;
              Store.cacheRelease(rel);
              var rurl = getPoster(rel);
              var typeLabel = (rel === null || rel === void 0 || (_rel$type = rel.type) === null || _rel$type === void 0 ? void 0 : _rel$type.description) || (rel === null || rel === void 0 || (_rel$type2 = rel.type) === null || _rel$type2 === void 0 ? void 0 : _rel$type2.value) || '';
              var el = document.createElement('div');
              el.className = 'det-rel-card' + (isCurrent ? ' drc-current' : '');
              el._relId = rel.id;
              var relCollLbl = getCollLabel(rel.id);
              el.innerHTML = "\n          ".concat(rurl ? "<img src=\"".concat(rurl, "\" alt=\"\">") : "<div class=\"drc-ph\">".concat(EMJ[rel.id % 10], "</div>"), "\n          ").concat(rel.is_ongoing ? '<div class="drc-ongoing">Онгоинг</div>' : '', "\n\n          ").concat(relCollLbl ? "<div class=\"drc-coll\">".concat(relCollLbl, "</div>") : '', "\n          <div class=\"drc-info\">\n            ").concat(typeLabel ? "<div class=\"drc-type\">".concat(typeLabel, "</div>") : '', "\n            <div class=\"drc-n\">").concat(rName(rel), "</div>\n            ").concat(rel.year ? "<div class=\"drc-year\">".concat(rel.year, "</div>") : '', "\n          </div>");
              if (!isCurrent) el.addEventListener('click', function () {
                return openDetailRelease(rel);
              });
              $('detRelated').appendChild(el);
            });
          }
          _context25.n = 9;
          break;
        case 8:
          _context25.p = 8;
          _t21 = _context25.v;
          console.error('[related] error:', _t21);
        case 9:
          return _context25.a(2);
      }
    }, _callee22, null, [[6, 8], [3, 5]]);
  }));
  return _openDetailRelease.apply(this, arguments);
}
function isEpDone(prog, ep) {
  var _ep$ending;
  if (!prog) return false;
  // Explicitly marked as watched (from API or markAllEpsWatched)
  if (prog.is_watched === true) return true;
  // time equals duration exactly — set by markAllEpsWatched
  if (prog.duration > 0 && prog.time >= prog.duration) return true;
  // No duration info — if time > 10min assume watched (synced from cloud without duration)
  if (!prog.duration || prog.duration <= 0) return prog.time > 600;
  var pct = prog.time / prog.duration * 100;
  // If episode has ending data — done when reaching ending start
  if ((ep === null || ep === void 0 || (_ep$ending = ep.ending) === null || _ep$ending === void 0 ? void 0 : _ep$ending.start) > 0 && prog.time >= ep.ending.start) return true;
  // 90%+ or within 90s of end
  return pct >= 90 || prog.time >= prog.duration - 90;
}
function renderDetailEps(releaseId, eps) {
  var wrap = $('detEps');
  wrap.innerHTML = '';
  if (!eps.length) {
    wrap.innerHTML = '<div style="color:var(--t3);font-size:13px">Серии не найдены</div>';
    return;
  }
  var lastProg = Store.getReleaseProgress(releaseId);
  eps.forEach(function (ep, i) {
    var epId = ep.id;
    var prog = Store.getProgress(releaseId, epId);
    var pct = prog && prog.duration > 0 ? prog.time / prog.duration * 100 : 0;
    var isDone = isEpDone(prog, ep);
    var isPartial = prog && prog.time > 10 && !isDone;
    var isCur = lastProg && String(lastProg.epId) === String(epId);
    var b = document.createElement('button');
    b.className = 'dep' + (isDone ? ' ep-done' : isPartial ? ' ep-partial' : '') + (isCur ? ' ep-current' : '');
    var inner = "\u0421\u0435\u0440\u0438\u044F ".concat(ep.ordinal || i + 1);
    if (isPartial && prog.duration > 0) {
      inner += "<br><span style=\"font-size:9px;opacity:.7\">".concat(fmt(prog.time), "</span>");
      inner += "<div class=\"dep-pb\"><div class=\"dep-pf\" style=\"width:".concat(pct.toFixed(0), "%\"></div></div>");
    }
    if (isDone) inner += "<br><span style=\"font-size:9px;opacity:.7\">\u2713</span>";
    b.innerHTML = inner;
    // Store ids for long-press removal
    b.dataset.releaseId = String(releaseId);
    b.dataset.epId = String(epId);
    var _depHold = null;
    b.addEventListener('click', function () {
      if (window._depLongFired) {
        return;
      }
      playerEpIdx = i;
      startPlayer();
    });
    b.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      window._depLongFired = false;
      _depHold = setTimeout(function () {
        _depHold = null;
        window._depLongFired = true;
        _removeEpProgress(b);
      }, 600);
    });
    b.addEventListener('pointerup', function () {
      clearTimeout(_depHold);
      _depHold = null;
    });
    b.addEventListener('pointerleave', function () {
      clearTimeout(_depHold);
      _depHold = null;
    });
    wrap.appendChild(b);
  });
}

// detPlay/detResume are bound dynamically in openDetailRelease
$('detBack').addEventListener('click', closeDetail);
function closeDetail() {
  $('detOv').classList.remove('on');
  var zoneMap = {
    home: 'home.cards',
    catalog: 'cat.grid',
    schedule: 'sch',
    collections: 'coll.grid'
  };
  nav.zone = zoneMap[pg.cur] || 'home.cards';
  // Restore catalog scroll
  if (pg.cur === 'catalog' && window._catScrollSaved != null) {
    requestAnimationFrame(function () {
      $('catGrid').scrollTop = window._catScrollSaved;
    });
  }
  applyZoneFocus();
}
var hlsInst = null,
  ctrlTimer = null,
  saveTimer = null;
function startPlayer() {
  if (!playerEps.length) {
    // no episodes — still open player UI
    $('plyTtl').textContent = rName(detRelease) || '';
    $('plyOv').classList.add('on');
    $('plySpin').style.display = 'none';
    $('plyEpL').textContent = authToken ? 'Не удалось загрузить серии' : 'Авторизуйтесь для просмотра';
    nav.zone = 'player';
    nav.plyZone = 'video';
    nav.plyBtn = 1;
    setTimeout(function () {
      if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
    }, 0);
    return;
  }
  var ep = playerEps[playerEpIdx];
  if (!ep) return;
  openPlayerEp(ep);
}
function openPlayerEp(ep) {
  var r = detRelease;
  // Save current position before switching, then cancel pending timer
  var v = $('vid');
  if (currentEp && r && v.currentTime > 5) Store.forceSaveProgress(r.id, currentEp.id, v.currentTime, v.duration, currentEp.ordinal, playerEps.length || r.episodes_total || 0);
  clearTimeout(saveTimer);
  saveTimer = null;
  window._skipDismissed = false;
  currentEp = ep;
  $('plyTtl').textContent = rName(r) || '';
  $('plyEpL').textContent = "\u0421\u0435\u0440\u0438\u044F ".concat(ep.ordinal || playerEpIdx + 1).concat(ep.name ? ' — ' + ep.name : '');
  $('plySpin').style.display = 'flex';
  $('plyOv').classList.add('on');
  nav.zone = 'player';
  nav.plyZone = 'video';
  nav.plyBtn = 1;
  // Hide UI immediately
  clearTimeout(ctrlTimer);
  (_$plyOv || $('plyOv')).classList.remove('ctrl');
  // Blur DOM focus
  setTimeout(function () {
    if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
  }, 0);
  startPlyWatchdog();
  buildEpStrip();
  buildQualBtn(ep);
  // check saved progress
  var prog = r && ep ? Store.getProgress(r.id, ep.id) : null;
  var url = currentEp[currentQual] || ep.hls_1080 || ep.hls_720 || ep.hls_480;
  var _st = 0;
  if (window._forceStart !== undefined) {
    _st = window._forceStart;
  } else if (prog && prog.duration > 0) {
    var done = isEpDone(prog, playerEps.find(function (e) {
      return String(e.id) === String(ep.id);
    }));
    _st = done ? Math.max(0, prog.duration - 20) : prog.time;
  }
  if (url) {
    loadVideo(url.startsWith('http') ? url : CDN + url, _st, ep);
  } else {
    $('plySpin').style.display = 'none';
    $('plyEpL').textContent = 'HLS URL отсутствует (нужен токен)';
    showCtrl();
  }
}
// Open episode from list with smart resume
function openPlayerEpFromList(ep) {
  if (!ep) return;
  var r = detRelease;
  var prog = r ? Store.getProgress(r.id, ep.id) : null;
  var startT = 0;
  if (prog && prog.duration > 0) {
    var done = isEpDone(prog, playerEps.find(function (e) {
      return String(e.id) === String(ep.id);
    }));
    startT = done ? Math.max(0, prog.duration - 20) : prog.time;
  }
  window._forceStart = startT;
  openPlayerEp(ep);
  window._forceStart = undefined;
  // UI starts hidden (handled in openPlayerEp)
}

// Rebuild strip if nav.plyEp scrolled outside the current window
function _ensureEpInStrip() {
  var strip = _$plyEps || $('plyEps');
  var existing = strip.querySelector(".pep[data-gi=\"".concat(nav.plyEp, "\"]"));
  if (!existing) buildEpStrip(); // re-center on nav.plyEp
}
function buildEpStrip() {
  var strip = _$plyEps || $('plyEps');
  strip.innerHTML = '';
  var r = detRelease;
  var isMob = document.body.classList.contains('is-mobile');
  var half = isMob ? 2 : 7;
  var win = isMob ? 5 : 15;
  var center = nav.plyEp >= 0 ? nav.plyEp : playerEpIdx;
  var start = Math.max(0, center - half);
  var end = Math.min(playerEps.length, start + win);
  // "..." before
  if (start > 0) {
    var d = document.createElement('span');
    d.className = 'pep-dots';
    d.textContent = '…';
    strip.appendChild(d);
  }
  var _loop4 = function _loop4(realI) {
    var ep = playerEps[realI];
    var prog = r ? Store.getProgress(r.id, ep.id) : null;
    var isDone = isEpDone(prog, ep);
    var b = document.createElement('button');
    var isPartialP = prog && prog.time > 10 && !isDone;
    b.className = 'pep' + (realI === playerEpIdx ? ' cur' : isDone ? ' ep-done' : isPartialP ? ' ep-partial' : '');
    b.dataset.gi = realI;
    b.textContent = ep.ordinal || realI + 1;
    b.tabIndex = -1; // prevent browser auto-focus
    b.addEventListener('click', function () {
      playerEpIdx = realI;
      nav.plyEp = realI;
      openPlayerEp(playerEps[realI]);
    });
    strip.appendChild(b);
  };
  for (var realI = start; realI < end; realI++) {
    _loop4(realI);
  }
  // "..." after
  if (end < playerEps.length) {
    var _d = document.createElement('span');
    _d.className = 'pep-dots';
    _d.textContent = '…';
    strip.appendChild(_d);
  }
}
function loadVideo(url, startTime, ep) {
  ensureHls(function () {
    return _loadVideo(url, startTime, ep);
  });
}
function _loadVideo(url, startTime, ep) {
  var v = $('vid');
  if (hlsInst) {
    hlsInst.destroy();
    hlsInst = null;
  }

  // Samsung Tizen TV поддерживает HLS нативно.
  // hls.js на Tizen падает из-за Web Workers в .wgt пакете.
  var isTizen = !!window.tizen || /Tizen/i.test(navigator.userAgent);
  var nativeHls = v.canPlayType('application/vnd.apple.mpegurl') || isTizen;
  if (!nativeHls && typeof Hls !== 'undefined' && Hls.isSupported()) {
    // PC / Android — используем hls.js без воркера
    hlsInst = new Hls({
      maxBufferLength: 30,
      maxMaxBufferLength: 90,
      enableWorker: false,
      // ← воркер отключён — безопасно для любой среды
      lowLatencyMode: false
    });
    hlsInst.loadSource(url);
    hlsInst.attachMedia(v);
    hlsInst.on(Hls.Events.MANIFEST_PARSED, function () {
      if (startTime > 5) v.currentTime = startTime;
      philipsPlay(v);
      $('plySpin').style.display = 'none';
    });
    hlsInst.on(Hls.Events.ERROR, function (_, d) {
      if (d.fatal) {
        $('plySpin').style.display = 'none';
      }
    });
  } else if (nativeHls) {
    // Tizen TV / Safari — нативний HLS
    v.src = url;
    v.load();
    var _onReady = function onReady() {
      v.removeEventListener('loadedmetadata', _onReady);
      if (startTime > 5) {
        // Tizen: seek must happen AFTER canplay, not loadedmetadata
        var _doSeek = function doSeek() {
          v.currentTime = startTime;
          // Verify seek actually worked after 300ms; retry if not
          setTimeout(function () {
            if (Math.abs(v.currentTime - startTime) > 3) v.currentTime = startTime;
          }, 300);
          v.removeEventListener('canplay', _doSeek);
        };
        v.addEventListener('canplay', _doSeek);
      }
      philipsPlay(v);
      $('plySpin').style.display = 'none';
    };
    v.addEventListener('loadedmetadata', _onReady);
    v.addEventListener('error', function () {
      $('plySpin').style.display = 'none';
      showCtrl();
    }, {
      once: true
    });
  } else {
    $('plySpin').style.display = 'none';
    $('plyEpL').textContent = 'Формат видео не поддерживается';
  }
  var _tuf = false;
  v.ontimeupdate = function () {
    if (_tuf) return;
    _tuf = true;
    requestAnimationFrame(function () {
      _tuf = false;
      if (!v.duration) return;
      var pct = v.currentTime / v.duration * 100;
      $('plyFill').style.width = pct + '%';
      $('plyTime').textContent = fmt(v.currentTime) + ' / ' + fmt(v.duration);
      // save progress every 8s
      if (!saveTimer) saveTimer = setTimeout(function () {
        var r = detRelease;
        if (r && ep) {
          Store.saveProgress(r.id, ep.id, v.currentTime, v.duration, ep.ordinal, playerEps.length || r.episodes_total || 0);
          syncProgress(ep.id, v.currentTime, isEpDone({
            time: v.currentTime,
            duration: v.duration
          }, ep));
        }
        saveTimer = null;
      }, 8000);
      // skip opening / ending
      var skipOp = ep === null || ep === void 0 ? void 0 : ep.opening,
        skipEd = ep === null || ep === void 0 ? void 0 : ep.ending;
      var inOpening = skipOp && v.currentTime >= skipOp.start && v.currentTime < skipOp.stop;
      var inEnding = skipEd && v.currentTime >= skipEd.start && v.currentTime < skipEd.stop;
      // Skip next episode button — show during ending if there's a next ep
      var hasNext = playerEpIdx < playerEps.length - 1;
      var snb = $('skipNextBtn');
      if (inEnding && hasNext) {
        if (!snb.classList.contains('on')) snb.classList.add('on');
      } else {
        snb.classList.remove('on', 'foc');
      }
      if ((inOpening || inEnding) && !window._skipDismissed) {
        var _sb = $('skipBtn');
        var label = inEnding ? 'Пропустить эндинг' : 'Пропустить опенинг';
        if (!_sb.classList.contains('on') || _sb.textContent !== label) {
          _sb.textContent = label;
          _sb.classList.add('on');
          window._skipTarget = inEnding ? skipEd.stop : skipOp.stop;
          if (!(_$plyOv || $('plyOv')).classList.contains('ctrl')) {
            nav.plyZone = 'skip';
            _sb.classList.add('foc');
          }
        }
      } else if (!inOpening && !inEnding) {
        window._skipDismissed = false;
        $('skipBtn').classList.remove('on', 'foc');
        if (nav.plyZone === 'skip') nav.plyZone = 'video';
        if (nav.plyZone === 'back') {
          if (k === 'ArrowRight' || k === 'Escape' || k === 'Backspace' || k === 'GoBack') {
            var _$;
            (_$ = $('pcClose')) === null || _$ === void 0 || _$.classList.remove('foc');
            nav.plyZone = 'ctrl';
            nav.plyBtn = 0;
            applyPlyFoc();
            e.preventDefault();
            return;
          }
          if (k === 'Enter') {
            $('pcClose').click();
            e.preventDefault();
            return;
          }
          e.preventDefault();
          return;
        }
        if (nav.plyZone === 'skip') {
          nav.plyZone = 'video';
        }
      }
    });
  };
  v.onended = function () {
    var r = detRelease,
      p = ep; // use ep from closure, not playerEpIdx (may have changed)
    if (r && p) {
      Store.forceSaveProgress(r.id, p.id, v.duration, v.duration, p.ordinal, playerEps.length || r.episodes_total || 0);
      syncProgress(p.id, v.duration, true);
    }
    // auto-play next episode after 3s
    if (playerEpIdx < playerEps.length - 1) {
      var countdown = 3;
      var next = playerEps[playerEpIdx + 1];
      $('plyEpL').textContent = "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F: \u0421\u0435\u0440\u0438\u044F ".concat(next.ordinal || playerEpIdx + 2, " \u2014 \u0447\u0435\u0440\u0435\u0437 ").concat(countdown, "\u0441");
      var timer = setInterval(function () {
        countdown--;
        if (countdown <= 0) {
          clearInterval(timer);
          playerEpIdx++;
          openPlayerEp(playerEps[playerEpIdx]);
        } else {
          $('plyEpL').textContent = "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F: \u0421\u0435\u0440\u0438\u044F ".concat(next.ordinal || playerEpIdx + 2, " \u2014 \u0447\u0435\u0440\u0435\u0437 ").concat(countdown, "\u0441");
        }
      }, 1000);
      // cancel on user interaction
      var _cancel = function cancel() {
        clearInterval(timer);
        v.removeEventListener('play', _cancel);
      };
      v.addEventListener('play', _cancel);
    }
  };
}
// ── Player zone helpers ────────────────────────────────────────────────────
// PLY_BTNS_PC, PLY_BTNS_TV, PLY_BTNS defined at script start
// Quality
var currentEp = null,
  currentQual = null;
var QUAL_LABELS = {
  hls_1080: '1080p',
  hls_720: '720p',
  hls_480: '480p'
};
function getAvailableQuals(ep) {
  return ['hls_1080', 'hls_720', 'hls_480'].filter(function (k) {
    return !!(ep !== null && ep !== void 0 && ep[k]);
  });
}
function openQualMenu() {
  if (!currentEp) return;
  var quals = getAvailableQuals(currentEp);
  if (quals.length < 2) return; // нечего переключать
  var menu = $('plyQualMenu');
  menu.innerHTML = '';
  nav.plyQualI = quals.indexOf(currentQual);
  quals.forEach(function (k, i) {
    var btn = document.createElement('button');
    btn.className = 'ply-qual-opt' + (k === currentQual ? ' cur' : '');
    btn.textContent = QUAL_LABELS[k];
    btn.dataset.qual = k;
    btn.addEventListener('click', function () {
      return selectQual(k);
    });
    menu.appendChild(btn);
  });
  menu.classList.add('on');
  nav.plyZone = 'qual';
  applyQualFoc();
  showCtrl();
}
function closeQualMenu() {
  $('plyQualMenu').classList.remove('on');
  nav.plyZone = 'ctrl';
  applyPlyFoc();
}
function applyQualFoc() {
  var opts = _toConsumableArray($('plyQualMenu').querySelectorAll('.ply-qual-opt'));
  opts.forEach(function (o, i) {
    return o.classList.toggle('foc', i === nav.plyQualI);
  });
}
function selectQual(key) {
  if (!currentEp || key === currentQual) {
    closeQualMenu();
    return;
  }
  var v = $('vid');
  var savedTime = v.currentTime;
  currentQual = key;
  $('pcQual').textContent = QUAL_LABELS[key];
  closeQualMenu();
  var url = currentEp[key];
  if (url) loadVideo(url.startsWith('http') ? url : CDN + url, savedTime, currentEp);
  // After quality: go to ctrl zone btn 1, then hide UI
  setTimeout(function () {
    nav.plyZone = 'ctrl';
    nav.plyBtn = 1;
    PLY_BTNS.forEach(function (id, i) {
      var _$2;
      return (_$2 = $(id)) === null || _$2 === void 0 ? void 0 : _$2.classList.toggle('foc', i === 1);
    });
    $('plyBar').classList.remove('bar-foc');
    clearTimeout(ctrlTimer);
    $('plyOv').classList.remove('ctrl');
  }, 200);
}
function buildQualBtn(ep) {
  var quals = getAvailableQuals(ep);
  // default: highest available
  currentQual = quals[0] || null;
  $('pcQual').textContent = currentQual ? QUAL_LABELS[currentQual] : '—';
  $('pcQual').style.display = quals.length >= 2 ? '' : 'none';
}
function applyPlyFoc() {
  var _$4, _$5;
  var isCtrl = nav.plyZone === 'ctrl',
    isEps = nav.plyZone === 'eps',
    isBar = nav.plyZone === 'bar';
  PLY_BTNS.forEach(function (id, i) {
    var _$3;
    return (_$3 = $(id)) === null || _$3 === void 0 ? void 0 : _$3.classList.toggle('foc', isCtrl && i === nav.plyBtn);
  });
  (_$4 = $('pcPrev')) === null || _$4 === void 0 || _$4.classList.toggle('pb-disabled', playerEpIdx <= 0);
  (_$5 = $('pcNext')) === null || _$5 === void 0 || _$5.classList.toggle('pb-disabled', playerEpIdx >= playerEps.length - 1);
  $('plyBar').classList.toggle('bar-foc', isBar);
  if (isEps) {
    var strip = _$plyEps || $('plyEps');
    strip.querySelectorAll('.pep.foc').forEach(function (p) {
      return p.classList.remove('foc');
    });
    var target = strip.querySelector(".pep[data-gi=\"".concat(nav.plyEp, "\"]"));
    if (target) {
      target.classList.add('foc');
      siv(target, {
        inline: 'nearest',
        behavior: 'smooth'
      });
    }
  }
  $('skipBtn').classList.toggle('foc', nav.plyZone === 'skip');
}
function _plyHideUI() {
  var _$7;
  clearTimeout(ctrlTimer);
  (_$plyOv || $('plyOv')).classList.remove('ctrl');
  PLY_BTNS.forEach(function (id) {
    var _$6;
    return (_$6 = $(id)) === null || _$6 === void 0 ? void 0 : _$6.classList.remove('foc');
  });
  $('plyBar').classList.remove('bar-foc');
  document.querySelectorAll('.pep.foc').forEach(function (p) {
    return p.classList.remove('foc');
  });
  if ($('skipBtn').classList.contains('on')) window._skipDismissed = true;
  $('skipBtn').classList.remove('on', 'foc');
  (_$7 = $('skipNextBtn')) === null || _$7 === void 0 || _$7.classList.remove('on', 'foc');
  nav.plyZone = 'video';
}
function plyEnterCtrl() {
  var _$8;
  nav.plyZone = 'ctrl';
  // If current button is disabled, move to Play (index 1)
  if ((_$8 = $(PLY_BTNS[nav.plyBtn])) !== null && _$8 !== void 0 && _$8.classList.contains('pb-disabled')) nav.plyBtn = 1;
  showCtrl();
  applyPlyFoc();
}
function plyLeaveCtrl() {
  nav.plyZone = 'video';
  PLY_BTNS.forEach(function (id) {
    var _$9;
    return (_$9 = $(id)) === null || _$9 === void 0 ? void 0 : _$9.classList.remove('foc');
  });
  document.querySelectorAll('.pep.foc').forEach(function (p) {
    return p.classList.remove('foc');
  });
  // short delay then hide panel
  clearTimeout(window._ctrlHideT);
  window._ctrlHideT = setTimeout(function () {
    return $('plyOv').classList.remove('ctrl');
  }, 1500);
}
function showCtrl() {
  clearTimeout(ctrlTimer);
  var _ov = _$plyOv || $('plyOv');
  _ov.classList.add('ctrl');
  ctrlTimer = setTimeout(function () {
    if (nav.plyZone === 'qual') return;
    _ov.classList.remove('ctrl');
    PLY_BTNS.forEach(function (id) {
      var _$0;
      return (_$0 = $(id)) === null || _$0 === void 0 ? void 0 : _$0.classList.remove('foc');
    });
    $('plyBar').classList.remove('bar-foc');
    document.querySelectorAll('.pep.foc').forEach(function (p) {
      return p.classList.remove('foc');
    });
    nav.plyZone = 'video';
    // Re-focus skip if still active
    var sb = $('skipBtn');
    if (sb !== null && sb !== void 0 && sb.classList.contains('on')) {
      nav.plyZone = 'skip';
      sb.classList.add('foc');
    }
  }, 5000);
}
function togglePlay() {
  var v = $('vid'),
    ico = $('pcPlayIco');
  if (v.paused) {
    philipsPlay(v);
    if (ico) ico.innerHTML = '<path d="M6 19h4V5H6zm8-14v14h4V5z"/>'; // pause
  } else {
    v.pause();
    if (ico) ico.innerHTML = '<path d="M8 5v14l11-7z"/>'; // play
  }
  showCtrl();
}
function refreshDetActBtn(r) {
  var _$1;
  var lastProg = Store.getReleaseProgress(r.id);
  var hasProgress = lastProg && lastProg.time > 60;
  if (hasProgress) {
    $('detActs').innerHTML = "<button class=\"btn btn-p det-play-btn\" id=\"detPlay\">\u25B6 \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</button><button class=\"btn btn-s det-reset-btn\" id=\"detReset\">\u21BA \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441</button>";
  } else {
    $('detActs').innerHTML = "<button class=\"btn btn-p det-play-btn\" id=\"detPlay\">\u25B6 \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C</button>";
  }
  $('detPlay').addEventListener('click', function () {
    if (r) Store.addHistory(r.id);
    if (hasProgress && lastProg.epId) {
      var idx = playerEps.findIndex(function (e) {
        return String(e.id) === String(lastProg.epId);
      });
      playerEpIdx = idx >= 0 ? idx : 0;
      // "Продолжить": always resume from exact saved time (no -20s logic)
      window._forceStart = lastProg.time || 0;
    }
    startPlayer();
    window._forceStart = undefined;
  });
  (_$1 = $('detReset')) === null || _$1 === void 0 || _$1.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var prefix2, epIds2, ids2, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          Store._buildIdx();
          prefix2 = "alv_p_".concat(r.id, "_");
          epIds2 = (Store._pidx[String(r.id)] || []).map(function (k) {
            return k.slice(prefix2.length);
          });
          window._resetReleaseId = String(r.id);
          Store.clearReleaseProgress(r.id);
          Store.removeHistory(r.id);
          if (!authToken) {
            _context.n = 4;
            break;
          }
          ids2 = epIds2.length ? epIds2 : playerEps.map(function (ep) {
            return String(ep.id);
          });
          if (!ids2.length) {
            _context.n = 4;
            break;
          }
          _context.p = 1;
          _context.n = 2;
          return api('/accounts/users/me/views/timecodes', {
            method: 'DELETE',
            body: JSON.stringify(ids2.map(function (id) {
              return {
                release_episode_id: id
              };
            }))
          });
        case 2:
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
        case 4:
          // Remove from collGrid if history tab is open
          if (curCollTab === 'history') {
            $('collGrid').querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
              return el.remove();
            });
            if (!$('collGrid').querySelector('.card')) $('collGrid').innerHTML = '<div class="coll-empty"><div class="coll-empty-ic">🕐</div><div>Вы ещё ничего не смотрели</div></div>';
          }
          document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"] .c-prog")).forEach(function (b) {
            return b.remove();
          });
          refreshDetActBtn(r);
          if (playerEps.length) renderDetailEps(r.id, playerEps);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3]]);
  })));
  // Don't steal focus if player is already open
  if (nav.zone !== 'player') {
    clearFoc('.det-acts .btn');
    $('detPlay').classList.add('foc');
  }
}
function closePlayer() {
  clearInterval(_plyFocusWatchdog);
  _plyFocusWatchdog = null;
  // Exit fullscreen first if active — prevents UI freeze on mobile
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    var _ref2;
    (_ref2 = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen) === null || _ref2 === void 0 || _ref2.call(document).catch(function () {});
  }
  var v = $('vid');
  var r = detRelease,
    ep = playerEps[playerEpIdx];
  if (r && ep && v.currentTime > 5) Store.forceSaveProgress(r.id, ep.id, v.currentTime, v.duration, ep.ordinal, playerEps.length || r.episodes_total || 0);
  v.pause();
  v.src = '';
  if (hlsInst) {
    hlsInst.destroy();
    hlsInst = null;
  }
  clearTimeout(saveTimer);
  saveTimer = null;
  $('plyOv').classList.remove('on', 'ctrl');
  $('plyQualMenu').classList.remove('on');
  nav.zone = 'det.acts';
  // refresh episode list and play/continue button with updated progress
  if (r && playerEps.length) renderDetailEps(r.id, playerEps);
  if (r) refreshDetActBtn(r);
  // update progress bar on home/catalog cards for this release
  if (r) {
    var epsTot = playerEps.length || r.episodes_total || 0;
    var pct = Store.getTotalProgress(r.id, epsTot);
    document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (card) {
      var bar = card.querySelector('.c-prog');
      if (pct > 0) {
        if (!bar) {
          bar = document.createElement('div');
          bar.className = 'c-prog';
          bar.innerHTML = '<div class="c-prog-f"></div>';
          card.appendChild(bar);
        }
        bar.querySelector('.c-prog-f').style.width = pct + '%';
      } else if (bar) {
        bar.remove();
      }
    });
  }
}
$('skipNextBtn').addEventListener('click', function () {
  $('skipNextBtn').classList.remove('on', 'foc');
  if (playerEpIdx < playerEps.length - 1) {
    playerEpIdx++;
    openPlayerEp(playerEps[playerEpIdx]);
  }
});
$('skipBtn').addEventListener('click', function () {
  var ep = playerEps[playerEpIdx];
  // Use stored target (opening or ending stop time)
  if (window._skipTarget) $('vid').currentTime = window._skipTarget;else if (ep !== null && ep !== void 0 && ep.opening) $('vid').currentTime = ep.opening.stop;
  window._skipTarget = null;
  window._skipDismissed = true;
  $('skipBtn').classList.remove('on', 'foc');
  if (nav.plyZone === 'skip') nav.plyZone = 'video';
});
$('pcPlay').addEventListener('click', togglePlay);
$('pcClose').addEventListener('click', closePlayer);
// Prevent player buttons/video from getting DOM focus
['pcPrev', 'pcPlay', 'pcNext', 'pcQual', 'pcFit', 'pcFullscreen', 'pcClose', 'skipBtn', 'skipNextBtn'].forEach(function (id) {
  var el2 = document.getElementById(id);
  if (el2) el2.tabIndex = -1;
  var el = document.getElementById(id);
  if (el) el.addEventListener('mousedown', function (e) {
    if (nav.zone === 'player') e.preventDefault();
  });
});
// ── Accelerated seek on held arrow keys ─────────────────────────────────
var _seekDir = 0,
  _seekCount = 0,
  _seekTimer = null;
var _seekPausedByUs = false;
function _seekAccel(dir) {
  var v = $('vid');
  if (!v.duration) return;
  if (dir !== _seekDir) {
    _seekDir = dir;
    _seekCount = 0;
  }
  _seekCount++;
  var step = _seekCount <= 2 ? 10 : _seekCount <= 5 ? 15 : 30;
  var t = Math.max(0, Math.min(v.duration, v.currentTime + dir * step));
  // Pause for freeze-frame
  if (!v.paused && !_seekPausedByUs) {
    v.pause();
    _seekPausedByUs = true;
  }
  v.currentTime = t;
  if (v.duration) {
    $('plyFill').style.width = t / v.duration * 100 + '%';
    $('plyTime').textContent = fmt(t) + ' / ' + fmt(v.duration);
  }
  clearTimeout(_seekTimer);
  _seekTimer = setTimeout(function () {
    _seekDir = 0;
    _seekCount = 0;
    if (_seekPausedByUs) {
      philipsPlay(v);
      _seekPausedByUs = false;
    }
  }, 700);
}
$('pcPrev').addEventListener('click', function () {
  if (playerEpIdx > 0) {
    playerEpIdx--;
    openPlayerEp(playerEps[playerEpIdx]);
  }
});
$('pcNext').addEventListener('click', function () {
  if (playerEpIdx < playerEps.length - 1) {
    playerEpIdx++;
    openPlayerEp(playerEps[playerEpIdx]);
  }
});
$('pcQual').addEventListener('click', function () {
  openQualMenu();
});
;
$('plyOv').addEventListener('mousemove', showCtrl);
$('plyOv').addEventListener('keydown', function (e) {
  if (nav.zone === 'player') {
    handleKey(e);
    e.preventDefault();
  }
}, {
  capture: true
});
// While player is open, prevent any child from holding DOM focus
$('plyOv').addEventListener('focusin', function (e) {
  if (nav.zone === 'player') setTimeout(function () {
    if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
  }, 0);
});
// Watchdog: while player is open, keep DOM focus clear so keyboard works
var _plyFocusWatchdog = null;
function startPlyWatchdog() {
  clearInterval(_plyFocusWatchdog);
  _plyFocusWatchdog = setInterval(function () {
    if (nav.zone !== 'player') {
      clearInterval(_plyFocusWatchdog);
      _plyFocusWatchdog = null;
      return;
    }
    if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
  }, 100);
}
$('plyOv').addEventListener('click', function (e) {
  if ($('plyQualMenu').classList.contains('on') && !e.target.closest('#plyQualMenu') && !e.target.closest('#pcQual')) {
    closeQualMenu();
    return;
  }
  // Click on video area (not on controls/buttons) = play/pause
  if (!_isTizen && !e.target.closest('.ply-ctrl') && !e.target.closest('.ply-back-btn') && !e.target.closest('#skipBtn') && !e.target.closest('#skipNextBtn') && !e.target.closest('#plyQualMenu')) {
    togglePlay();
    showCtrl();
  }
});
// ── Timeline scrub (mouse + touch + TV remote) ──────────────────────────
(function () {
  var bar = $('plyBar'),
    tip = $('seekTip');
  var dragging = false,
    _raf = null;
  function pctFromEvent(e) {
    var rect = bar.getBoundingClientRect();
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return Math.max(0, Math.min(1, x / rect.width));
  }
  function applySeek(pct) {
    var v = $('vid');
    if (!v.duration) return;
    var t = pct * v.duration;
    $('plyFill').style.width = pct * 100 + '%';
    tip.textContent = fmt(t);
    tip.style.left = pct * 100 + '%';
    if (_raf) cancelAnimationFrame(_raf);
    _raf = requestAnimationFrame(function () {
      v.currentTime = t;
      _raf = null;
    });
  }
  var _scrubbingWasPlaying = false;
  bar.addEventListener('mousedown', function (e) {
    var v = $('vid');
    if (!v.duration) return;
    dragging = true;
    bar.classList.add('scrubbing');
    if (!v.paused) {
      v.pause();
      _scrubbingWasPlaying = true;
    }
    applySeek(pctFromEvent(e));
    showCtrl();
    e.preventDefault();
  });
  bar.addEventListener('touchstart', function (e) {
    var v = $('vid');
    if (!v.duration) return;
    dragging = true;
    bar.classList.add('scrubbing');
    if (!v.paused) {
      v.pause();
      _scrubbingWasPlaying = true;
    }
    applySeek(pctFromEvent(e));
    showCtrl();
    e.preventDefault();
  }, {
    passive: false
  });
  window.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    applySeek(pctFromEvent(e));
    showCtrl();
  });
  window.addEventListener('touchmove', function (e) {
    if (!dragging) return;
    applySeek(pctFromEvent(e));
    e.preventDefault();
  }, {
    passive: false
  });
  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    bar.classList.remove('scrubbing');
    applySeek(pctFromEvent(e));
    if (_scrubbingWasPlaying) {
      philipsPlay($('vid'));
      _scrubbingWasPlaying = false;
    }
  }
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);
  bar.addEventListener('mousemove', function (e) {
    if (dragging) return;
    var pct = pctFromEvent(e);
    var v = $('vid');
    if (!v.duration) return;
    tip.textContent = fmt(pct * v.duration);
    tip.style.left = pct * 100 + '%';
  });
})();
function lpApplyFoc() {
  var LP = ['lpL', 'lpP', 'lpOk', 'lpX'];
  LP.forEach(function (id, i) {
    var el = $(id);
    if (!el) return;
    el.classList.toggle('foc', i === nav.loginI);
    // снимаем браузерный фокус с инпутов, чтобы не конфликтовал
    if (i !== nav.loginI) el.blur();
  });
}
function openLogin() {
  if (authToken) {
    openProfilePanel();
    return;
  }
  $('lp').classList.add('on');
  nav.zone = 'login';
  nav.loginI = 0;
  lpApplyFoc();
}
function closeLogin() {
  $('lp').classList.remove('on');
  // убираем .foc со всех полей
  ['lpL', 'lpP', 'lpOk', 'lpX'].forEach(function (id) {
    var _$10;
    return (_$10 = $(id)) === null || _$10 === void 0 ? void 0 : _$10.classList.remove('foc');
  });
  nav.zone = pg.cur === 'home' ? 'home.cards' : 'cat.grid';
}
$('loginBtn').addEventListener('click', openLogin);
document.querySelectorAll('#mobileNav .mnav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    return switchPage(btn.dataset.pg);
  });
});
$('lpX').addEventListener('click', closeLogin);
// после системной клавиатуры — возвращаем nav зону в login
['lpL', 'lpP'].forEach(function (id, i) {
  $(id).addEventListener('blur', function () {
    if ($('lp').classList.contains('on') && nav.zone !== 'login') {
      nav.zone = 'login';
      nav.loginI = i;
      lpApplyFoc();
    }
  });
});
$('userPill').addEventListener('click', function () {
  openProfilePanel();
});
function openProfilePanel() {
  var user = Store.get('alv_user', null);
  var nick = (user === null || user === void 0 ? void 0 : user.nickname) || (user === null || user === void 0 ? void 0 : user.login) || 'Пользователь';
  $('profileName').textContent = '👤 ' + nick;
  $('profileStatus').textContent = '✅ Вы вошли в аккаунт AniLibria';
  $('profilePanel').classList.add('on');
  nav.zone = 'profile';
  nav.profileI = 0;
  ppApplyFoc();
}
function ppApplyFoc() {
  ['profileClose', 'profileLogout'].forEach(function (id, i) {
    var _$11;
    (_$11 = $(id)) === null || _$11 === void 0 || _$11.classList.toggle('foc', i === nav.profileI);
  });
}
function closeProfilePanel() {
  $('profilePanel').classList.remove('on');
  nav.zone = pg.cur === 'home' ? 'home.cards' : 'cat.grid';
  ['profileClose', 'profileLogout'].forEach(function (id) {
    var _$12;
    return (_$12 = $(id)) === null || _$12 === void 0 ? void 0 : _$12.classList.remove('foc');
  });
}
$('profileClose').addEventListener('click', closeProfilePanel);
$('profileLogout').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  var _t2;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.p = _context2.n) {
      case 0:
        _context2.p = 0;
        _context2.n = 1;
        return api('/accounts/users/auth/logout', {
          method: 'POST'
        });
      case 1:
        _context2.n = 3;
        break;
      case 2:
        _context2.p = 2;
        _t2 = _context2.v;
      case 3:
        authToken = null;
        Store.set('alv_token', null);
        Store.set('alv_user', null);
        closeProfilePanel();
        $('userPill').classList.remove('on');
        $('loginBtn').style.display = '';
        setStatus('ok', 'Вы вышли из аккаунта');
      case 4:
        return _context2.a(2);
    }
  }, _callee2, null, [[0, 2]]);
})));
function doLogin(_x10, _x11) {
  return _doLogin.apply(this, arguments);
}
function _doLogin() {
  _doLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(l, p) {
    var d, me, nick, _t22;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.p = _context26.n) {
        case 0:
          $('lpErr').textContent = '';
          _context26.p = 1;
          _context26.n = 2;
          return api('/accounts/users/auth/login', {
            method: 'POST',
            body: JSON.stringify({
              login: l,
              password: p
            })
          });
        case 2:
          d = _context26.v;
          authToken = d === null || d === void 0 ? void 0 : d.token;
          Store.set('alv_token', authToken);
          _context26.n = 3;
          return api('/accounts/users/me/profile');
        case 3:
          me = _context26.v;
          Store.set('alv_user', me);
          nick = (me === null || me === void 0 ? void 0 : me.nickname) || (me === null || me === void 0 ? void 0 : me.login) || l;
          $('userPill').classList.add('on');
          $('uname').textContent = nick;
          $('loginBtn').style.display = 'none';
          setStatus('ok', 'Вошли · ' + nick);
          closeLogin();
          _context26.n = 4;
          return migrateLocalToCloud();
        case 4:
          _context26.n = 6;
          break;
        case 5:
          _context26.p = 5;
          _t22 = _context26.v;
          $('lpErr').textContent = _t22.code === 401 ? 'Неверный логин или пароль' : _t22.code === 422 ? 'Некорректные данные' : 'Ошибка сети. Проверьте соединение.';
        case 6:
          return _context26.a(2);
      }
    }, _callee23, null, [[1, 5]]);
  }));
  return _doLogin.apply(this, arguments);
}
$('lpOk').addEventListener('click', function () {
  var l = $('lpL').value.trim(),
    p = $('lpP').value;
  if (!l || !p) {
    $('lpErr').textContent = 'Заполните все поля';
    return;
  }
  doLogin(l, p);
});
var _pageScrollPos = {};
function switchPage(name) {
  var _nav$ci;
  if ($('detOv').classList.contains('on')) closeDetail();
  var _sm = {
    home: 'pgHome',
    catalog: 'pgCatalog',
    schedule: 'pgSchedule',
    collections: 'pgCollections'
  };
  var curEl = _sm[pg.cur] ? $(_sm[pg.cur]) : null;
  if (curEl) _pageScrollPos[pg.cur] = curEl.scrollTop;
  document.querySelectorAll('.pg').forEach(function (p) {
    return p.classList.remove('on');
  });
  var map = {
    home: 'pgHome',
    catalog: 'pgCatalog',
    schedule: 'pgSchedule',
    collections: 'pgCollections'
  };
  var el = $(map[name]);
  if (el) el.classList.add('on');
  document.querySelectorAll('#nav .ntab').forEach(function (t) {
    t.classList.toggle('cur', t.dataset.pg === name);
    t.classList.remove('foc');
  });
  document.querySelectorAll('#mobileNav .mnav-btn').forEach(function (t) {
    return t.classList.toggle('cur', t.dataset.pg === name);
  });
  pg.cur = name;
  document.body.classList.remove('show-last-foc');
  var _sm2 = {
    home: 'pgHome',
    catalog: 'pgCatalog',
    schedule: 'pgSchedule',
    collections: 'pgCollections'
  };
  if (_pageScrollPos[name] != null && name !== 'schedule') {
    var el2 = $(_sm2[name]);
    if (el2) requestAnimationFrame(function () {
      el2.scrollTop = _pageScrollPos[name];
    });
  }
  // bg dimming for content pages
  // lazy load
  if (name === 'catalog' && !catLoading && $('catGrid').children.length <= 1) loadCatalog(true);
  if (name === 'schedule') loadSchedule();
  if (name === 'schedule' && document.body.classList.contains('is-mobile')) nav.zone = 'sch'; // zone set but no focus
  if (name === 'collections') {
    renderCollTab(curCollTab);
    // Sync only if stale (>60s since last sync)
    if (authToken && Date.now() - _lastCollSync > 60000) _doCollSync();
  }
  // set zone
  var zones = {
    home: 'home.cards',
    catalog: 'cat.search',
    schedule: 'sch',
    collections: 'coll.tabs'
  };
  nav.zone = zones[name] || 'home.cards';
  if (name === 'home') focCard((_nav$ci = nav.ci) !== null && _nav$ci !== void 0 ? _nav$ci : 0, activeRowI !== null && activeRowI !== void 0 ? activeRowI : 0);
  if (name === 'catalog') {
    nav.cg.r = 0;
    nav.cg.c = 0;
    focCatSearch();
  }
  if (name === 'collections') {
    nav.collTab = 0;
    focIdx('#collTabs .ctab', 0);
  }
}
var CTX_COLLS = [{
  k: 'favorites',
  l: 'Избранное',
  ic: '❤'
}, {
  k: 'watching',
  l: 'Смотрю',
  ic: '👁'
}, {
  k: 'planned',
  l: 'Запланировано',
  ic: '📅'
}, {
  k: 'completed',
  l: 'Просмотрено',
  ic: '✓'
}, {
  k: 'abandoned',
  l: 'Брошено',
  ic: '✕'
}];
var ctxRelease = null,
  ctxItems = [],
  ctxIdx = 0;
function _getCardAnchor(r) {
  // Try focused card first
  var el = document.querySelector('.card.foc[data-rid="' + r.id + '"]') || document.querySelector('.card[data-rid="' + r.id + '"]') || document.querySelector('.card.foc');
  if (!el) {
    // fallback: schedule item
    el = document.querySelector('.sch-item.foc');
  }
  if (el) {
    var rect = el.getBoundingClientRect();
    return {
      x: rect.right + 8,
      y: rect.top
    };
  }
  return {
    x: 200,
    y: 200
  };
}
function openCtxMenu(r, anchorX, anchorY) {
  if (!r) {
    return;
  }
  ctxRelease = r;
  nav.zone = 'ctx.menu';
  var ov = $('ctxOv');
  var box = $('ctxBox');
  ov.style.cssText = '';
  // Use mouse coords or find card position
  window._ctxAnchor = anchorX != null ? {
    x: anchorX,
    y: anchorY
  } : _getCardAnchor(r);
  var coll = Store.getColl();
  var url = getPoster(r);
  $('ctxPoster').src = url || '';
  $('ctxTitleEl').textContent = rName(r);
  // Build items
  ctxItems = [];
  // Play/Continue
  var prog = Store.getReleaseProgress(r.id);
  var hasProg = prog && prog.time > 60;
  ctxItems.push({
    l: hasProg ? 'Продолжить' : 'Смотреть',
    ic: '▶',
    action: 'play'
  });
  // separator
  ctxItems.push({
    sep: true
  });
  // Collections
  CTX_COLLS.forEach(function (col) {
    var inColl = (coll[col.k] || []).includes(r.id);
    ctxItems.push({
      l: inColl ? 'Удалить из «' + col.l + '»' : 'Добавить в «' + col.l + '»',
      ic: col.ic,
      action: 'coll:' + col.k,
      active: inColl
    });
  });
  // Remove from history (only when on history tab)
  if (curCollTab === 'history') {
    ctxItems.push({
      sep: true
    });
    ctxItems.push({
      l: 'Удалить из истории',
      ic: '✕',
      action: 'rm_history',
      danger: true
    });
  }
  // separator + reset
  var hasProg2 = Store.getTotalProgress(r.id, r.episodes_total || 0) > 0;
  if (hasProg2) {
    ctxItems.push({
      sep: true
    });
    ctxItems.push({
      l: 'Сбросить прогресс',
      ic: '🗑',
      action: 'reset',
      danger: true
    });
  }
  // Render
  var el = $('ctxItems');
  el.innerHTML = '';
  ctxItems.forEach(function (item, i) {
    if (item.sep) {
      var _d2 = document.createElement('div');
      _d2.className = 'ctx-sep';
      el.appendChild(_d2);
      return;
    }
    var d = document.createElement('div');
    d.className = 'ctx-item' + (item.active ? ' active' : '') + (item.danger ? ' danger' : '');
    d.dataset.idx = i;
    d.innerHTML = "<span class=\"ctx-ic\">".concat(item.ic, "</span><span>").concat(item.l, "</span>");
    d.addEventListener('click', function () {
      return execCtxAction(i);
    });
    el.appendChild(d);
  });
  ctxIdx = 0;
  applyCtxFoc();
  var ov2 = $('ctxOv');
  var box2 = $('ctxBox');
  ov2.classList.add('on');
  requestAnimationFrame(function () {
    var _window$_ctxAnchor, _window$_ctxAnchor2;
    var bw = box2.offsetWidth || 300,
      bh = box2.offsetHeight || 200;
    var sw = window.innerWidth || 1600,
      sh = window.innerHeight || 900;
    var x = ((_window$_ctxAnchor = window._ctxAnchor) === null || _window$_ctxAnchor === void 0 ? void 0 : _window$_ctxAnchor.x) || 200,
      y = ((_window$_ctxAnchor2 = window._ctxAnchor) === null || _window$_ctxAnchor2 === void 0 ? void 0 : _window$_ctxAnchor2.y) || 200;
    if (x + bw + 10 > sw) x = x - bw - 16; // flip to left if no space
    if (x < 8) x = 8;
    if (y + bh + 10 > sh) y = sh - bh - 10;
    if (y < 8) y = 8;
    box2.style.left = x + 'px';
    box2.style.top = y + 'px';
  });
}
function closeCtxMenu() {
  $('ctxOv').style.cssText = '';
  $('ctxOv').classList.remove('on');
  ctxRelease = null;
  // restore previous zone
  if ($('detOv').classList.contains('on')) nav.zone = 'det.acts';else if (pg.cur === 'catalog') nav.zone = 'cat.grid';else if (pg.cur === 'collections') nav.zone = 'coll.grid';else if (pg.cur === 'schedule') nav.zone = 'sch';else nav.zone = 'home.cards';
}
$('ctxOv').addEventListener('click', function (e) {
  if (!e.target.closest('#ctxBox')) closeCtxMenu();
});
function applyCtxFoc() {
  document.querySelectorAll('.ctx-item').forEach(function (el) {
    return el.classList.remove('foc');
  });
  // find real item by idx (skipping separators)
  var visIdx = ctxItems.slice(0, ctxIdx + 1).filter(function (x) {
    return !x.sep;
  }).length - 1;
  var els = _toConsumableArray(document.querySelectorAll('.ctx-item'));
  if (els[visIdx]) els[visIdx].classList.add('foc');
}
function ctxNavStep(dir) {
  // move ctxIdx skipping seps
  var i = ctxIdx + dir;
  while (i >= 0 && i < ctxItems.length && ctxItems[i].sep) i += dir;
  if (i >= 0 && i < ctxItems.length && !ctxItems[i].sep) ctxIdx = i;
  applyCtxFoc();
}
function execCtxAction(i) {
  var item = ctxItems[i];
  if (!item || item.sep) return;
  var r = ctxRelease;
  if (!r) return;
  if (item.action === 'play') {
    closeCtxMenu();
    // open detail or play directly
    openDetailRelease(r);
    return;
  }
  if (item.action === 'rm_history') {
    var c2 = Store.getColl();
    c2.history = c2.history.filter(function (x) {
      return x !== r.id;
    });
    Store.set('alv_coll', c2);
    closeCtxMenu();
    // Remove card from grid immediately
    document.querySelectorAll("#collGrid .card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
      return el.remove();
    });
    // Show empty state if no cards left
    if (!$('collGrid').querySelector('.card')) {
      $('collGrid').innerHTML = '<div class="coll-empty"><div class="coll-empty-ic">🕐</div><div>Вы ещё ничего не смотрели</div></div>';
    }
    return;
  }
  if (item.action === 'reset') {
    Store.clearReleaseProgress(r.id);
    Store.removeHistory(r.id);
    // Remove from collGrid if history tab is open
    if (curCollTab === 'history') {
      $('collGrid').querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
        return el.remove();
      });
      if (!$('collGrid').querySelector('.card')) $('collGrid').innerHTML = '<div class="coll-empty"><div class="coll-empty-ic">🕐</div><div>Вы ещё ничего не смотрели</div></div>';
    }
    document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"] .c-prog")).forEach(function (b) {
      return b.remove();
    });
    closeCtxMenu();
    return;
  }
  if (item.action.startsWith('coll:')) {
    var key = item.action.slice(5);
    var coll = Store.getColl();
    var arr = coll[key] || [];
    var idx = arr.indexOf(r.id);
    if (idx === -1) {
      arr.unshift(r.id);
      Store.cacheRelease(r);
    } else arr.splice(idx, 1);
    coll[key] = arr;
    Store.set('alv_coll', coll);
    syncCollToAPI(key, r.id, idx === -1);
    var inNow = idx === -1;
    // When added to completed: mark all eps watched
    if (key === 'completed' && inNow) markAllEpsWatched(r);
    // Refresh coll badge on all visible cards
    refreshCardBadge(r.id);
    // If we just removed from the currently viewed tab — remove card immediately
    if (!inNow && key === curCollTab) {
      document.querySelectorAll("#collGrid .card[data-rid=\"".concat(r.id, "\"]")).forEach(function (el) {
        return el.remove();
      });
      if (!$('collGrid').querySelector('.card')) {
        $('collGrid').innerHTML = "<div class=\"coll-empty\"><div class=\"coll-empty-ic\">\uD83D\uDCC2</div><div>\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043F\u0443\u0441\u0442\u0430</div></div>";
      }
      closeCtxMenu();
      return;
    }
    var col = CTX_COLLS.find(function (c) {
      return c.k === key;
    });
    if (col) {
      item.l = inNow ? 'Удалить из «' + col.l + '»' : 'Добавить в «' + col.l + '»';
      item.active = inNow;
    }
    openCtxMenu(r); // re-render menu
    return;
  }
}

// Mark all episodes of a release as watched and update cards everywhere
function markAllEpsWatched(_x12) {
  return _markAllEpsWatched.apply(this, arguments);
} // Long-press detection for cards
function _markAllEpsWatched() {
  _markAllEpsWatched = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(r) {
    var eps, detail, batch, grid, _grid$querySelector2, _t23;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.p = _context27.n) {
        case 0:
          if (r) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2);
        case 1:
          Store.addHistory(r.id);
          // Use playerEps if already loaded for this release, else fetch episodes
          eps = [];
          if (!(detRelease && String(detRelease.id) === String(r.id) && playerEps.length)) {
            _context27.n = 2;
            break;
          }
          eps = playerEps;
          _context27.n = 5;
          break;
        case 2:
          _context27.p = 2;
          _context27.n = 3;
          return api('/anime/releases/' + (r.alias || r.id));
        case 3:
          detail = _context27.v;
          eps = (detail === null || detail === void 0 ? void 0 : detail.episodes) || [];
          _context27.n = 5;
          break;
        case 4:
          _context27.p = 4;
          _t23 = _context27.v;
        case 5:
          if (eps.length) {
            _context27.n = 6;
            break;
          }
          // No episodes loaded — at least mark progress bar as 100%
          document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (card) {
            var bar = card.querySelector('.c-prog');
            if (!bar) {
              bar = document.createElement('div');
              bar.className = 'c-prog';
              bar.innerHTML = '<div class="c-prog-f"></div>';
              card.appendChild(bar);
            }
            bar.querySelector('.c-prog-f').style.width = '100%';
          });
          return _context27.a(2);
        case 6:
          batch = [];
          eps.forEach(function (ep) {
            var existing = Store.getProgress(r.id, ep.id);
            var dur = ep.duration || (existing === null || existing === void 0 ? void 0 : existing.duration) || 1440;
            Store.forceSaveProgress(r.id, ep.id, dur, dur, ep.ordinal || 0, eps.length);
            if (authToken) batch.push({
              release_episode_id: ep.id,
              time: dur,
              is_watched: true
            });
          });
          // Push all to cloud at once
          if (batch.length && authToken) {
            api('/accounts/users/me/views/timecodes', {
              method: 'POST',
              body: JSON.stringify(batch)
            }).catch(function () {});
          }
          // Update all cards with this release id on the page
          document.querySelectorAll(".card[data-rid=\"".concat(r.id, "\"]")).forEach(function (card) {
            var bar = card.querySelector('.c-prog');
            if (!bar) {
              bar = document.createElement('div');
              bar.className = 'c-prog';
              bar.innerHTML = '<div class="c-prog-f"></div>';
              card.appendChild(bar);
            }
            bar.querySelector('.c-prog-f').style.width = '100%';
          });
          // Refresh coll badge on cards
          refreshCardBadge(r.id);
          // If 'completed' tab is open, add card there
          if (curCollTab === 'completed') {
            grid = $('collGrid');
            if (!grid.querySelector(".card[data-rid=\"".concat(r.id, "\"]"))) {
              (_grid$querySelector2 = grid.querySelector('.coll-empty')) === null || _grid$querySelector2 === void 0 || _grid$querySelector2.remove();
              appendCollCard(r, 'completed');
            }
          }
          // Refresh detail page if open for this release
          if (detRelease && String(detRelease.id) === String(r.id)) {
            renderDetailEps(r.id, eps);
            refreshDetActBtn(r);
          }
        case 7:
          return _context27.a(2);
      }
    }, _callee24, null, [[2, 4]]);
  }));
  return _markAllEpsWatched.apply(this, arguments);
}
var _holdTimer = null;
function startHold(r) {
  _holdTimer = setTimeout(function () {
    _holdTimer = null;
    openCtxMenu(r);
  }, 600);
}
function cancelHold() {
  clearTimeout(_holdTimer);
  _holdTimer = null;
}
function handleKey(e) {
  var _document$activeEleme;
  var k = e.key;
  var Z = nav.zone;

  // If a real text input is focused — let browser handle typing, only intercept Escape/Enter
  var activeTag = (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.tagName;
  var isInput = activeTag === 'INPUT' || activeTag === 'TEXTAREA';
  if (isInput) {
    var isBack = k === 'Escape' || k === 'GoBack' || e.keyCode === 10009 || k === 'Backspace' && document.activeElement.value === '' || k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight';
    if (isBack) {
      document.activeElement.blur();
      e.preventDefault();
      return;
    }
    if (k === 'Enter' && document.activeElement.id === 'catQ') {
      loadCatalog(true);
      e.preventDefault();
    } else return; // let all other keys type normally
    return;
  }

  // Always available: Tizen media keys
  if (k === 'MediaPlay') {
    if (Z === 'player') {
      philipsPlay($('vid'));
      e.preventDefault();
    }
    return;
  }
  if (k === 'MediaPause') {
    if (Z === 'player') {
      $('vid').pause();
      e.preventDefault();
    }
    return;
  }
  if (k === 'MediaStop') {
    if (Z === 'player') {
      closePlayer();
      e.preventDefault();
    }
    return;
  }
  if (k === 'MediaPlayPause' || k === 'Pause') {
    if (Z === 'player') {
      togglePlay();
      e.preventDefault();
    }
    return;
  }
  if (k === 'MediaFastForward') {
    if (Z === 'player') {
      $('vid').currentTime += 10;
      e.preventDefault();
    }
    return;
  }
  if (k === 'MediaRewind') {
    if (Z === 'player') {
      $('vid').currentTime -= 10;
      e.preventDefault();
    }
    return;
  }
  if (Z === 'login') {
    if (k === 'Escape' || k === 'Backspace' || k === 'GoBack' || e.keyCode === 10009) {
      closeLogin();
      e.preventDefault();
      return;
    }
    var LP = ['lpL', 'lpP', 'lpOk', 'lpX'];
    if (!nav.loginI) nav.loginI = 0;
    if (k === 'ArrowDown' || k === 'Tab') {
      nav.loginI = Math.min(nav.loginI + 1, LP.length - 1);
      lpApplyFoc();
      e.preventDefault();
    } else if (k === 'ArrowUp') {
      nav.loginI = Math.max(nav.loginI - 1, 0);
      lpApplyFoc();
      e.preventDefault();
    } else if (k === 'ArrowRight' && nav.loginI >= 2) {
      nav.loginI = Math.min(nav.loginI + 1, LP.length - 1);
      lpApplyFoc();
      e.preventDefault();
    } else if (k === 'ArrowLeft' && nav.loginI >= 2) {
      nav.loginI = Math.max(nav.loginI - 1, 2);
      lpApplyFoc();
      e.preventDefault();
    } else if (k === 'Enter') {
      var el = $(LP[nav.loginI]);
      if (nav.loginI === 0 || nav.loginI === 1) {
        var _inputEl$select;
        // фокус на инпут → системная клавиатура
        var inputEl = nav.loginI === 0 ? $('lpL') : $('lpP');
        inputEl.focus();
        (_inputEl$select = inputEl.select) === null || _inputEl$select === void 0 || _inputEl$select.call(inputEl);
      } else {
        el === null || el === void 0 || el.click();
      }
      e.preventDefault();
    }
    return;
  }
  if (Z === 'player') {
    e.preventDefault(); // always prevent default in player

    var _ov = _$plyOv || $('plyOv');
    var uiOn = _ov.classList.contains('ctrl');
    var pz = nav.plyZone;

    // ── Back/Escape ───────────────────────────────────
    if (k === 'Escape' || k === 'Backspace' || k === 'GoBack' || e.keyCode === 10009) {
      if (pz === 'qual') {
        closeQualMenu();
        return;
      }
      if (pz === 'bar') {
        plyEnterCtrl();
        _plyHideUI();
        return;
      } // bar Back → ctrl + hide UI
      if (pz === 'eps') {
        $('plyEps').querySelectorAll('.pep.foc').forEach(function (p) {
          return p.classList.remove('foc');
        });
        plyEnterCtrl();
        return;
      } // eps Back → ctrl
      if (pz === 'skip') {
        window._skipDismissed = true;
        $('skipBtn').classList.remove('on', 'foc');
        nav.plyZone = 'video';
        return;
      }
      if (pz === 'skipnext') {
        $('skipNextBtn').classList.remove('foc');
        nav.plyZone = 'video';
        return;
      }
      if (uiOn) {
        _plyHideUI();
        return;
      } // UI visible → hide
      closePlayer();
      return; // UI hidden → close
    }

    // ── Skip opening ──────────────────────────────────
    if (pz === 'skip') {
      if (k === 'Enter' || k === ' ') {
        $('skipBtn').click();
        nav.plyZone = 'video';
        return;
      }
      if (k === 'ArrowDown') {
        // If skipNextBtn visible, focus it
        if ($('skipNextBtn').classList.contains('on')) {
          $('skipBtn').classList.remove('foc');
          $('skipNextBtn').classList.add('foc');
          nav.plyZone = 'skipnext';
          return;
        }
        $('skipBtn').classList.remove('foc');
        plyEnterCtrl();
        return;
      }
      if (k === 'ArrowUp') {
        $('skipBtn').classList.remove('foc');
        plyEnterCtrl();
        return;
      }
      if (k === 'ArrowLeft' || k === 'ArrowRight') {
        // seek silently, show bar briefly without changing zone
        _seekAccel(k === 'ArrowRight' ? +1 : -1);
        $('skipBtn').classList.remove('foc');
        _ov.classList.add('ctrl');
        clearTimeout(ctrlTimer);
        ctrlTimer = setTimeout(function () {
          _ov.classList.remove('ctrl');
          if (nav.plyZone === 'video') {
            var sb = $('skipBtn');
            if (sb.classList.contains('on')) {
              nav.plyZone = 'skip';
              sb.classList.add('foc');
            }
          }
        }, 2500);
        return;
      }
      return;
    }

    // ── Skip next episode button ──────────────────────
    if (pz === 'skipnext') {
      if (k === 'Enter' || k === ' ') {
        $('skipNextBtn').click();
        nav.plyZone = 'video';
        return;
      }
      if (k === 'ArrowUp') {
        $('skipNextBtn').classList.remove('foc');
        $('skipBtn').classList.add('foc');
        nav.plyZone = 'skip';
        return;
      }
      if (k === 'ArrowDown') {
        $('skipNextBtn').classList.remove('foc');
        plyEnterCtrl();
        return;
      }
      return;
    }

    // ── UI hidden ─────────────────────────────────────
    if (!uiOn) {
      if (k === 'ArrowLeft' || k === 'ArrowRight') {
        _seekAccel(k === 'ArrowRight' ? +1 : -1);
        nav.plyZone = 'bar';
        showCtrl();
        applyPlyFoc();
        return;
      }
      if (k === 'ArrowUp') {
        plyEnterCtrl();
        return;
      }
      if (k === 'ArrowDown') {
        nav.plyZone = 'eps';
        nav.plyEp = playerEpIdx;
        showCtrl();
        applyPlyFoc();
        return;
      }
      if (k === 'Enter' || k === ' ') {
        togglePlay();
        plyEnterCtrl();
        return;
      }
      return;
    }

    // ── Quality menu ──────────────────────────────────
    if (pz === 'qual') {
      var opts = _toConsumableArray($('plyQualMenu').querySelectorAll('.ply-qual-opt'));
      if (k === 'ArrowUp') {
        nav.plyQualI = Math.max(nav.plyQualI - 1, 0);
        applyQualFoc();
        return;
      }
      if (k === 'ArrowDown') {
        nav.plyQualI = Math.min(nav.plyQualI + 1, opts.length - 1);
        applyQualFoc();
        return;
      }
      if (k === 'Enter' || k === ' ') {
        var _opts$nav$plyQualI;
        var key = (_opts$nav$plyQualI = opts[nav.plyQualI]) === null || _opts$nav$plyQualI === void 0 ? void 0 : _opts$nav$plyQualI.dataset.qual;
        if (key) selectQual(key);
        return;
      }
      return;
    }

    // ── Timeline bar ──────────────────────────────────
    if (pz === 'bar') {
      if (k === 'ArrowLeft') {
        _seekAccel(-1);
        showCtrl();
        return;
      }
      if (k === 'ArrowRight') {
        _seekAccel(+1);
        showCtrl();
        return;
      }
      if (k === 'ArrowDown') {
        plyEnterCtrl();
        return;
      }
      if (k === 'ArrowUp') {
        // Focus skip/next buttons if visible, else nothing (already top)
        var snb = $('skipNextBtn');
        var sb = $('skipBtn');
        if (snb !== null && snb !== void 0 && snb.classList.contains('on')) {
          $('plyBar').classList.remove('bar-foc');
          snb.classList.add('foc');
          nav.plyZone = 'skipnext';
          return;
        }
        if (sb !== null && sb !== void 0 && sb.classList.contains('on')) {
          $('plyBar').classList.remove('bar-foc');
          sb.classList.add('foc');
          nav.plyZone = 'skip';
          return;
        }
        return; // already at top
      }
      if (k === 'Enter' || k === ' ') {
        togglePlay();
        showCtrl();
        return;
      }
      return;
    }

    // ── Control buttons ───────────────────────────────
    if (pz === 'ctrl') {
      if (k === 'ArrowLeft') {
        var btn = nav.plyBtn - 1;
        while (btn >= 0 && (_$13 = $(PLY_BTNS[btn])) !== null && _$13 !== void 0 && _$13.classList.contains('pb-disabled')) {
          var _$13;
          btn--;
        }
        if (btn >= 0) {
          nav.plyBtn = btn;
          applyPlyFoc();
          showCtrl();
        }
        return;
      }
      if (k === 'ArrowRight') {
        var _btn = nav.plyBtn + 1;
        while (_btn < PLY_BTNS.length && (_$14 = $(PLY_BTNS[_btn])) !== null && _$14 !== void 0 && _$14.classList.contains('pb-disabled')) {
          var _$14;
          _btn++;
        }
        if (_btn < PLY_BTNS.length) {
          nav.plyBtn = _btn;
          applyPlyFoc();
          showCtrl();
        }
        return;
      }
      if (k === 'ArrowUp') {
        nav.plyZone = 'bar';
        showCtrl();
        applyPlyFoc();
        return;
      }
      if (k === 'ArrowDown') {
        var peps = _toConsumableArray($('plyEps').querySelectorAll('.pep'));
        if (peps.length) {
          nav.plyZone = 'eps';
          nav.plyEp = playerEpIdx;
          showCtrl();
          applyPlyFoc();
        } else {
          plyLeaveCtrl();
        }
        return;
      }
      if (k === 'Enter' || k === ' ') {
        var _$15;
        showCtrl();
        var id = PLY_BTNS[nav.plyBtn];
        if (id === 'pcQual') openQualMenu();else if (id === 'pcFit') {
          cycleFit();
          applyPlyFoc();
        } else (_$15 = $(id)) === null || _$15 === void 0 || _$15.click();
        return;
      }
      return;
    }

    // ── Episode list ──────────────────────────────────
    if (pz === 'eps') {
      var total = playerEps.length;
      if (k === 'ArrowLeft') {
        if (nav.plyEp > 0) {
          nav.plyEp--;
          _ensureEpInStrip();
          applyPlyFoc();
          showCtrl();
        }
        return;
      }
      if (k === 'ArrowRight') {
        if (nav.plyEp < total - 1) {
          nav.plyEp++;
          _ensureEpInStrip();
          applyPlyFoc();
          showCtrl();
        }
        return;
      }
      if (k === 'ArrowUp') {
        $('plyEps').querySelectorAll('.pep.foc').forEach(function (p) {
          return p.classList.remove('foc');
        });
        plyEnterCtrl();
        return;
      }
      if (k === 'Enter' || k === ' ') {
        playerEpIdx = nav.plyEp;
        openPlayerEpFromList(playerEps[nav.plyEp]);
        return;
      }
      return;
    }
    return;
  }
  if (Z === 'ctx.menu') {
    if (k === 'Escape' || k === 'Backspace') {
      closeCtxMenu();
      e.preventDefault();
      return;
    }
    if (k === 'ArrowDown') {
      ctxNavStep(1);
      e.preventDefault();
      return;
    }
    if (k === 'ArrowUp') {
      ctxNavStep(-1);
      e.preventDefault();
      return;
    }
    if (k === 'Enter') {
      execCtxAction(ctxIdx);
      e.preventDefault();
      return;
    }
    e.preventDefault();
    return;
  }
  if (Z === 'det.acts' || Z === 'det.back' || Z === 'det.coll' || Z === 'det.eps' || Z === 'det.related') {
    navDetail(k);
    e.preventDefault();
    return;
  }
  if (k === 'Escape' || k === 'Backspace' || e.keyCode === 10009) {
    if ($('detOv').classList.contains('on')) {
      closeDetail();
      e.preventDefault();
      return;
    }
    if ($('lp').classList.contains('on')) {
      closeLogin();
      e.preventDefault();
      return;
    }
    if ($('profilePanel').classList.contains('on')) {
      closeProfilePanel();
      e.preventDefault();
      return;
    }
    if (Z !== 'home.nav' && Z !== 'cat.search' && Z !== 'sch') {
      var up = {
        'home.cards': 'home.nav',
        'cat.grid': 'cat.search',
        'cat.flt': 'cat.grid',
        'coll.grid': 'coll.tabs'
      };
      if (up[Z]) {
        nav.zone = up[Z];
        applyZoneFocus();
        e.preventDefault();
        return;
      }
    }
    // Double-back to exit
    if ($('exitOv').style.display === 'flex') {
      closeExit();
      e.preventDefault();
      return;
    }
    var now = Date.now();
    if (window._lastBack && now - window._lastBack < 600) {
      $('exitOv').style.display = 'flex';
      setTimeout(function () {
        $('exitYes').focus();
        $('exitYes').classList.add('foc');
        $('exitNo').classList.remove('foc');
      }, 50);
      e.preventDefault();
      return;
    }
    window._lastBack = now;
    return;
  }
  if (Z === 'profile') {
    if (k === 'ArrowLeft' || k === 'ArrowRight') {
      nav.profileI = nav.profileI === 0 ? 1 : 0;
      ppApplyFoc();
      e.preventDefault();
      return;
    }
    if (k === 'Enter' || k === ' ') {
      nav.profileI === 0 ? closeProfilePanel() : $('profileLogout').click();
      e.preventDefault();
      return;
    }
    e.preventDefault();
    return;
  }
  if (Z === 'home.nav') navHomeNav(k);else if (Z === 'home.login') navHomeLogin(k);else if (Z === 'home.hero') navHomeHero(k);else if (Z === 'home.cards') navHomeCards(k);else if (Z === 'cat.search') navCatSearch(k);else if (Z === 'cat.grid') navCatGrid(k);else if (Z === 'cat.flt') navCatFlt(k);else if (Z === 'sch') navSch(k);else if (Z === 'coll.tabs') navCollTabs(k);else if (Z === 'coll.grid') navCollGrid(k);
  e.preventDefault();
}
function focLoginBtn() {
  document.querySelectorAll('#nav .ntab').forEach(function (t) {
    return t.classList.remove('foc');
  });
  var pill = $('userPill');
  var btn = $('loginBtn');
  if (pill.classList.contains('on')) {
    pill.classList.add('foc');
    btn.classList.remove('foc');
  } else {
    btn.classList.add('foc');
    pill.classList.remove('foc');
  }
  nav.zone = 'home.login';
}
function navHomeNav(k) {
  var tabs = _toConsumableArray(document.querySelectorAll('#nav .ntab'));
  if (k === 'ArrowRight') {
    if (nav.ni < tabs.length - 1) focNavTab(nav.ni + 1);else focLoginBtn(); // past last tab → login button
  } else if (k === 'ArrowLeft') focNavTab(Math.max(nav.ni - 1, 0));else if (k === 'ArrowDown') {
    document.querySelectorAll('#nav .ntab').forEach(function (t) {
      return t.classList.remove('foc');
    });
    if (pg.cur === 'catalog') {
      focCatSearch();
    } else if (pg.cur === 'schedule') {
      nav.zone = 'sch';
      applyZoneFocus();
    } else if (pg.cur === 'collections') {
      nav.zone = 'coll.tabs';
      applyZoneFocus();
    } else {
      nav.zone = 'home.cards';
      focCard(nav.ci);
    }
  } else if (k === 'Enter') {
    var _tabs$nav$ni;
    var _pg = (_tabs$nav$ni = tabs[nav.ni]) === null || _tabs$nav$ni === void 0 || (_tabs$nav$ni = _tabs$nav$ni.dataset) === null || _tabs$nav$ni === void 0 ? void 0 : _tabs$nav$ni.pg;
    if (_pg) switchPage(_pg);
  }
}
function navHomeLogin(k) {
  function _clearLogin() {
    $('loginBtn').classList.remove('foc');
    $('userPill').classList.remove('foc');
  }
  if (k === 'ArrowLeft') {
    _clearLogin();
    // Always go to last nav tab (Коллекции)
    var tabs = _toConsumableArray(document.querySelectorAll('#nav .ntab'));
    nav.ni = tabs.length - 1;
    nav.zone = 'home.nav'; // must set zone BEFORE focNavTab — it checks nav.zone
    focNavTab(nav.ni);
  } else if (k === 'ArrowDown') {
    _clearLogin();
    document.querySelectorAll('#nav .ntab').forEach(function (t) {
      return t.classList.remove('foc');
    });
    if (pg.cur === 'catalog') {
      focCatSearch();
    } else if (pg.cur === 'schedule') {
      nav.zone = 'sch';
      applyZoneFocus();
    } else if (pg.cur === 'collections') {
      nav.zone = 'coll.tabs';
      applyZoneFocus();
    } else {
      nav.zone = 'home.cards';
      focCard(nav.ci);
    }
  } else if (k === 'Enter') {
    _clearLogin();
    openLogin();
  }
}
function navHomeHero(k) {
  if (k === 'ArrowRight') focHeroBtn(Math.min(nav.hi + 1, 1));else if (k === 'ArrowLeft') focHeroBtn(Math.max(nav.hi - 1, 0));else if (k === 'ArrowUp') {
    clearFoc('.h-btns .btn');
    nav.zone = 'home.nav';
    focNavTab(0);
  } else if (k === 'ArrowDown') {
    clearFoc('.h-btns .btn');
    nav.zone = 'home.cards';
    focCard(nav.ci);
  } else if (k === 'Enter') {
    if (nav.hi === 0) openDetail(nav.ci);else openDetail(nav.ci);
  }
}

// Master clear: removes every focus mark in catalog UI
function catClearFocus() {
  $('catSrch').classList.remove('foc');
  document.querySelectorAll('#catGrid .card.foc').forEach(function (c) {
    return c.classList.remove('foc');
  });
  document.querySelectorAll('.fchip.foc').forEach(function (c) {
    return c.classList.remove('foc');
  });
  document.querySelectorAll('.year-spin.foc').forEach(function (s) {
    return s.classList.remove('foc');
  });
  [$('fltApply'), $('fltReset')].forEach(function (b) {
    return b === null || b === void 0 ? void 0 : b.classList.remove('foc');
  });
}

// Enter cat.search zone
function focCatSearch() {
  catClearFocus();
  nav.zone = 'cat.search';
  $('catSrch').classList.add('foc');
}

// Enter cat.grid zone
function focCatGrid(r, c) {
  catClearFocus();
  nav.zone = 'cat.grid';
  if (r !== undefined) nav.cg.r = r;
  if (c !== undefined) nav.cg.c = c;
  var cards = _toConsumableArray(document.querySelectorAll('#catGrid .card'));
  if (!cards.length) return;
  // clamp
  var cols = catGetCols(cards);
  var maxR = Math.floor((cards.length - 1) / cols);
  nav.cg.r = Math.max(0, Math.min(nav.cg.r, maxR));
  nav.cg.c = Math.max(0, Math.min(nav.cg.c, cols - 1));
  var idx = nav.cg.r * cols + nav.cg.c;
  if (idx >= cards.length) {
    idx = cards.length - 1;
    nav.cg.r = Math.floor(idx / cols);
    nav.cg.c = idx % cols;
  }
  cards[idx].classList.add('foc');
  if (nav.cg.r === 0) {
    $('catGrid').scrollTop = 0;
  } else {
    // Scroll with extra space above so card isn't hidden under search bar
    var card = cards[idx];
    var grid = $('catGrid');
    var cardTop = card.offsetTop;
    var cardBottom = cardTop + card.offsetHeight;
    var visTop = grid.scrollTop;
    var visBottom = visTop + grid.clientHeight;
    if (cardTop < visTop + 10) grid.scrollTop = cardTop - 8;else if (cardBottom > visBottom - 10) grid.scrollTop = cardBottom - grid.clientHeight + 8;
  }
}

// Enter cat.flt zone
function focCatFlt(g, i) {
  catClearFocus();
  nav.zone = 'cat.flt';
  if (g !== undefined) nav.cf.g = g;
  if (i !== undefined) nav.cf.i = i;
  applyFltFocus();
}
function catGetCols(cards) {
  // Method 1: read computed grid columns from container
  var grid = $('catGrid');
  if (grid) {
    var cols = getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).filter(Boolean).length;
    if (cols > 1) return cols;
  }
  // Method 2: card width vs container width
  if (cards && cards.length >= 2) {
    var cw = cards[0].offsetWidth || 214;
    var gw = grid ? grid.clientWidth : 0;
    if (cw > 0 && gw > 0) return Math.max(1, Math.round(gw / cw));
  }
  return 1;
}
function navCatSearch(k) {
  if (k === 'ArrowDown') {
    focCatGrid(0, 0);
  } else if (k === 'ArrowRight') {
    focCatFlt(0, 0);
  } else if (k === 'ArrowUp') {
    catClearFocus();
    nav.zone = 'home.nav';
    focNavTab(1);
  } else if (k === 'Enter') {
    var _$$select, _$16;
    // системная клавиатура — фокус на инпут
    $('catQ').focus();
    (_$$select = (_$16 = $('catQ')).select) === null || _$$select === void 0 || _$$select.call(_$16);
  }
}
function navCatGrid(k) {
  var cards = _toConsumableArray(document.querySelectorAll('#catGrid .card'));
  var n = cards.length;
  if (!n) return;
  var cols = catGetCols(cards);
  var r = nav.cg.r,
    c = nav.cg.c;
  if (k === 'ArrowRight') {
    var idx = r * cols + c;
    if (c < cols - 1 && idx + 1 < n) c++;else {
      focCatFlt(0, 0);
      return;
    }
  } else if (k === 'ArrowLeft') {
    if (c > 0) c--;
    // stay at left edge
  } else if (k === 'ArrowDown') {
    var ni = (r + 1) * cols + c;
    if (ni < n) r++;else loadCatalog(); // load more
  } else if (k === 'ArrowUp') {
    if (r > 0) r--;else {
      focCatSearch();
      return;
    }
  } else if (k === 'Enter') {
    var ci = r * cols + c;
    if (cards[ci]) cards[ci].click();
    return;
  } else if (k === 'ContextMenu') {
    var _catReleases;
    var _ci = r * cols + c;
    var rel = ((_catReleases = catReleases) === null || _catReleases === void 0 ? void 0 : _catReleases[_ci]) || null;
    if (rel) openCtxMenu(rel);
    return;
  }
  nav.cg.r = r;
  nav.cg.c = c;
  catClearFocus();
  nav.zone = 'cat.grid';
  var newIdx = r * cols + c;
  if (cards[newIdx]) {
    cards[newIdx].classList.add('foc');
    siv(cards[newIdx], {
      block: 'nearest'
    });
  }
}
function getFltGroups() {
  return _toConsumableArray(document.querySelectorAll('.cat-flt-in .f-chips'));
}
function getYearGroupIdx() {
  return getFltGroups().findIndex(function (g) {
    return g.dataset.year === '1';
  });
}
function navCatFlt(k) {
  var groups = getFltGroups();
  var YEAR_G = getYearGroupIdx(); // index of year row in groups[]
  var FOOT_G = 'footer'; // sentinel string
  var g = nav.cf.g;
  var isYear = g === YEAR_G;
  var isFooter = g === FOOT_G;

  // ── YEAR group ─────────────────────────────────────
  if (isYear) {
    var field = nav.cf.i === 0 ? 'from' : 'to';
    if (k === 'ArrowRight') yearStep(field, +1);else if (k === 'ArrowLeft') yearStep(field, -1);else if (k === 'ArrowDown') {
      if (nav.cf.i === 0) nav.cf.i = 1; // from→to
      else {
        nav.cf.g = YEAR_G + 1 < groups.length ? YEAR_G + 1 : FOOT_G;
        nav.cf.i = 0;
      }
    } else if (k === 'ArrowUp') {
      if (nav.cf.i === 1) nav.cf.i = 0; // to→from
      else if (YEAR_G > 0) {
        nav.cf.g = YEAR_G - 1;
        nav.cf.i = 0;
      } else {
        focCatSearch();
        return;
      }
    } else if (k === 'Enter' || k === 'Backspace') yearClear(field);
    applyFltFocus();
    return;
  }

  // ── FOOTER group ────────────────────────────────────
  if (isFooter) {
    if (k === 'ArrowLeft') nav.cf.i = 0;else if (k === 'ArrowRight') nav.cf.i = 1;else if (k === 'ArrowUp') {
      nav.cf.g = YEAR_G;
      nav.cf.i = 1;
    } else if (k === 'Enter') {
      if (nav.cf.i === 0) $('fltApply').click();else $('fltReset').click();
    }
    applyFltFocus();
    return;
  }

  // ── CHIP group ──────────────────────────────────────
  var chips = _toConsumableArray(groups[g].querySelectorAll('.fchip'));
  function cpr() {
    if (chips.length < 2) return chips.length || 1;
    // Use offsetTop instead of getBoundingClientRect to avoid forced reflow
    var t0 = chips[0].offsetTop;
    var cnt = 1;
    while (cnt < chips.length && Math.abs(chips[cnt].offsetTop - t0) < 5) cnt++;
    return cnt;
  }
  if (k === 'ArrowDown') {
    var next = nav.cf.i + cpr();
    if (next < chips.length) {
      nav.cf.i = next;
    } else if (g < groups.length - 1) {
      nav.cf.g++;
      nav.cf.i = 0;
    } else {
      nav.cf.g = 'footer';
      nav.cf.i = 0;
    }
  } else if (k === 'ArrowUp') {
    var prev = nav.cf.i - cpr();
    if (prev >= 0) {
      nav.cf.i = prev;
    } else if (g > 0) {
      nav.cf.g--;
      nav.cf.i = 0;
    } else {
      focCatSearch();
      return;
    }
  } else if (k === 'ArrowRight') {
    if (nav.cf.i < chips.length - 1) nav.cf.i++;
  } else if (k === 'ArrowLeft') {
    if (nav.cf.i > 0) nav.cf.i--;else {
      focCatGrid();
      return;
    }
  } else if (k === 'Enter' && chips[nav.cf.i]) chips[nav.cf.i].click();
  applyFltFocus();
  siv(chips[nav.cf.i], {
    block: 'nearest'
  });
}
function applyFltFocus() {
  catClearFocus();
  nav.zone = 'cat.flt';
  var groups = getFltGroups();
  var YEAR_G = getYearGroupIdx();
  var g = nav.cf.g;
  if (g === YEAR_G) {
    if (nav.cf.i === 0) $('fYearFromSpin').classList.add('foc');else $('fYearToSpin').classList.add('foc');
  } else if (g === 'footer') {
    [$('fltApply'), $('fltReset')].forEach(function (b, i) {
      return b === null || b === void 0 ? void 0 : b.classList.toggle('foc', i === nav.cf.i);
    });
  } else {
    var _groups$g;
    var chips = _toConsumableArray(((_groups$g = groups[g]) === null || _groups$g === void 0 ? void 0 : _groups$g.querySelectorAll('.fchip')) || []);
    if (chips[nav.cf.i]) chips[nav.cf.i].classList.add('foc');
  }
}
function navSch(k) {
  var days = _toConsumableArray(document.querySelectorAll('.sch-day'));
  if (!days.length) return;
  var prevD = nav.schD;
  if (k === 'ArrowRight') {
    nav.schD = Math.min(nav.schD + 1, days.length - 1);
    if (nav.schD !== prevD) nav.schI = 0;
  } else if (k === 'ArrowLeft') {
    nav.schD = Math.max(nav.schD - 1, 0);
    if (nav.schD !== prevD) nav.schI = 0;
  } else if (k === 'ArrowDown') {
    var _days$nav$schD;
    var cnt = ((_days$nav$schD = days[nav.schD]) === null || _days$nav$schD === void 0 ? void 0 : _days$nav$schD.querySelectorAll('.sch-item').length) || 0;
    nav.schI = Math.min(nav.schI + 1, cnt - 1);
  } else if (k === 'ArrowUp') {
    if (nav.schI > 0) nav.schI--;else {
      nav.zone = 'home.nav';
      focNavTab(2);
      clearSchFoc();
      return;
    }
  } else if (k === 'Enter') {
    var _days$nav$schD2;
    var its = _toConsumableArray(((_days$nav$schD2 = days[nav.schD]) === null || _days$nav$schD2 === void 0 ? void 0 : _days$nav$schD2.querySelectorAll('.sch-item')) || []);
    if (its[nav.schI]) its[nav.schI].click();
    return;
  } else if (k === 'ContextMenu') {
    var _days$nav$schD3;
    var _its = _toConsumableArray(((_days$nav$schD3 = days[nav.schD]) === null || _days$nav$schD3 === void 0 ? void 0 : _days$nav$schD3.querySelectorAll('.sch-item')) || []);
    if (_its[nav.schI]) {
      var id = _its[nav.schI].dataset.rid;
      if (id) openCtxMenu(Store.getCachedRelease(Number(id)));
    }
    return;
  }
  applySchFoc();
}
function clearSchFoc() {
  document.querySelectorAll('.sch-item.foc').forEach(function (x) {
    return x.classList.remove('foc');
  });
}
function applySchFoc() {
  var _days$nav$schD4;
  if (document.body.classList.contains('is-mobile')) return; // no focus on mobile
  clearSchFoc();
  var days = _toConsumableArray(document.querySelectorAll('.sch-day'));
  var items = _toConsumableArray(((_days$nav$schD4 = days[nav.schD]) === null || _days$nav$schD4 === void 0 ? void 0 : _days$nav$schD4.querySelectorAll('.sch-item')) || []);
  if (items[nav.schI]) {
    items[nav.schI].classList.add('foc');
    siv(items[nav.schI], {
      block: 'nearest'
    });
  }
}
function navCollTabs(k) {
  var _tabs$nav$collTab;
  var tabs = _toConsumableArray(document.querySelectorAll('#collTabs .ctab'));
  if (k === 'ArrowRight') nav.collTab = Math.min(nav.collTab + 1, tabs.length - 1);else if (k === 'ArrowLeft') nav.collTab = Math.max(nav.collTab - 1, 0);else if (k === 'ArrowDown') {
    // снимаем foc с табов перед переходом на грид
    tabs.forEach(function (t) {
      return t.classList.remove('foc');
    });
    nav.zone = 'coll.grid';
    nav.collI = 0;
    applyZoneFocus();
    return;
  } else if (k === 'ArrowUp') {
    tabs.forEach(function (t) {
      return t.classList.remove('foc');
    });
    nav.zone = 'home.nav';
    focNavTab(3);
    return;
  } else if (k === 'Enter') (_tabs$nav$collTab = tabs[nav.collTab]) === null || _tabs$nav$collTab === void 0 || _tabs$nav$collTab.click();
  tabs.forEach(function (t, i) {
    return t.classList.toggle('foc', i === nav.collTab);
  });
}
function navCollGrid(k) {
  var _cards$;
  var cards = _toConsumableArray(document.querySelectorAll('#collGrid .card'));
  var n = cards.length;
  if (!n) {
    if (k === 'ArrowUp') {
      nav.zone = 'coll.tabs';
      applyZoneFocus();
    }
    return;
  }
  // compute grid columns from layout
  var grid = $('collGrid');
  var colW = ((_cards$ = cards[0]) === null || _cards$ === void 0 ? void 0 : _cards$.offsetWidth) || 160;
  var cols = Math.max(1, Math.floor((grid.offsetWidth + 8) / (colW + 8)));
  var row = Math.floor(nav.collI / cols);
  if (k === 'ArrowRight') {
    if (nav.collI < n - 1) nav.collI++;
  } else if (k === 'ArrowLeft') {
    if (nav.collI > 0) nav.collI--;
  } else if (k === 'ArrowDown') {
    var ni = nav.collI + cols;
    if (ni < n) nav.collI = ni;
  } else if (k === 'ArrowUp') {
    if (row > 0) nav.collI = Math.max(0, nav.collI - cols);else {
      // снимаем foc с карточек перед возвратом на табы
      cards.forEach(function (c) {
        return c.classList.remove('foc');
      });
      nav.zone = 'coll.tabs';
      applyZoneFocus();
      return;
    }
  } else if (k === 'Enter') {
    if (cards[nav.collI]) cards[nav.collI].click();
    return;
  } else if (k === 'ContextMenu') {
    var cds = _toConsumableArray(document.querySelectorAll('#collGrid .card'));
    var el = cds[nav.collI];
    if (el) openCtxMenu(Store.getCachedRelease(Number(el.dataset.rid) || el.dataset.rid));
    return;
  }
  cards.forEach(function (c, i) {
    return c.classList.toggle('foc', i === nav.collI);
  });
  if (cards[nav.collI]) siv(cards[nav.collI], {
    block: 'nearest'
  });
}
function navDetail(k) {
  var Z = nav.zone;
  var actBtns = _toConsumableArray(document.querySelectorAll('.det-acts .btn'));
  var collBtns = _toConsumableArray(document.querySelectorAll('.det-cbtn'));
  var epBtns = _toConsumableArray(document.querySelectorAll('.dep'));
  var relCards = _toConsumableArray(document.querySelectorAll('.det-related .det-rel-card:not(.drc-current)'));
  if (k === 'Escape' || k === 'Backspace' || k === 'GoBack') {
    closeDetail();
    return;
  }
  if (k === 'ContextMenu') {
    openCtxMenu(detRelease);
    return;
  }
  if (k === 'ArrowDown') {
    if (Z === 'det.back') {
      nav.zone = 'det.acts';
      nav.detAct = 0;
      applyDetFoc();
    } else if (Z === 'det.acts') {
      if (collBtns.length) {
        nav.zone = 'det.coll';
        nav.detColl = 0;
        applyDetFoc();
      } else if (epBtns.length) {
        nav.zone = 'det.eps';
        nav.detEp = 0;
        applyDetFoc();
      }
    } else if (Z === 'det.coll') {
      if (epBtns.length) {
        nav.zone = 'det.eps';
        nav.detEp = 0;
        applyDetFoc();
      } else if (relCards.length) {
        nav.zone = 'det.related';
        nav.detRel = 0;
        applyDetFoc();
      }
    } else if (Z === 'det.eps') {
      var epCols = getEpCols(),
        ni = nav.detEp + epCols;
      if (ni < epBtns.length) {
        nav.detEp = ni;
        applyDetFoc();
      } else if (relCards.length) {
        nav.zone = 'det.related';
        nav.detRel = 0;
        applyDetFoc();
      }
    }
    return;
  }
  if (k === 'ArrowUp') {
    if (Z === 'det.back') {/* выше некуда */} else if (Z === 'det.acts') {
      nav.zone = 'det.back';
      applyDetFoc();
    } else if (Z === 'det.coll') {
      nav.zone = 'det.acts';
      applyDetFoc();
    } else if (Z === 'det.eps') {
      var _epCols = getEpCols(),
        _ni = nav.detEp - _epCols;
      if (_ni >= 0) {
        nav.detEp = _ni;
        applyDetFoc();
      } else {
        var collBtnsUp = _toConsumableArray(document.querySelectorAll('.det-cbtn'));
        nav.zone = collBtnsUp.length ? 'det.coll' : 'det.acts';
        nav.detColl = 0;
        applyDetFoc();
      }
    } else if (Z === 'det.related') {
      nav.zone = 'det.eps';
      applyDetFoc();
    }
    return;
  }
  if (k === 'ArrowRight') {
    if (Z === 'det.acts') nav.detAct = Math.min(nav.detAct + 1, actBtns.length - 1);else if (Z === 'det.coll') nav.detColl = Math.min(nav.detColl + 1, collBtns.length - 1);else if (Z === 'det.eps') nav.detEp = Math.min(nav.detEp + 1, epBtns.length - 1);else if (Z === 'det.related') nav.detRel = Math.min((nav.detRel || 0) + 1, relCards.length - 1);
    applyDetFoc();
    return;
  }
  if (k === 'ArrowLeft') {
    if (Z === 'det.acts') nav.detAct = Math.max(nav.detAct - 1, 0);else if (Z === 'det.coll') nav.detColl = Math.max(nav.detColl - 1, 0);else if (Z === 'det.eps') nav.detEp = Math.max(nav.detEp - 1, 0);else if (Z === 'det.related') nav.detRel = Math.max((nav.detRel || 0) - 1, 0);
    applyDetFoc();
    return;
  }
  if (k === 'Enter') {
    var _$17, _actBtns$nav$detAct, _collBtns$nav$detColl, _epBtns$nav$detEp, _relCards;
    if (Z === 'det.back') (_$17 = $('detBack')) === null || _$17 === void 0 || _$17.click();else if (Z === 'det.acts') (_actBtns$nav$detAct = actBtns[nav.detAct]) === null || _actBtns$nav$detAct === void 0 || _actBtns$nav$detAct.click();else if (Z === 'det.coll') (_collBtns$nav$detColl = collBtns[nav.detColl]) === null || _collBtns$nav$detColl === void 0 || _collBtns$nav$detColl.click();else if (Z === 'det.eps') (_epBtns$nav$detEp = epBtns[nav.detEp]) === null || _epBtns$nav$detEp === void 0 || _epBtns$nav$detEp.click();else if (Z === 'det.related') (_relCards = relCards[nav.detRel || 0]) === null || _relCards === void 0 || _relCards.click();
  }
  if (k === 'LongEnter') {
    if (Z === 'det.eps') {
      var btn = epBtns[nav.detEp];
      if (btn) _removeEpProgress(btn);
    }
  }
}

// Direct ep progress removal (called from long-press mouse or keyboard)
function _removeEpProgress(btn) {
  var releaseId = btn.dataset.releaseId;
  var epId = btn.dataset.epId;
  if (!releaseId || !epId) return;
  // Block any click event for 500ms after long press
  window._depLongFired = true;
  clearTimeout(window._depLongFiredTimer);
  window._depLongFiredTimer = setTimeout(function () {
    window._depLongFired = false;
  }, 500);
  localStorage.removeItem("alv_p_".concat(releaseId, "_").concat(epId));
  Store._dirtyIdx(String(releaseId));
  if (authToken) api('/accounts/users/me/views/timecodes', {
    method: 'DELETE',
    body: JSON.stringify([{
      release_episode_id: String(epId)
    }])
  }).catch(function () {});
  // Re-render
  if (detRelease && String(detRelease.id) === String(releaseId)) {
    renderDetailEps(Number(releaseId), playerEps);
    var pct = Store.getTotalProgress(releaseId, playerEps.length);
    document.querySelectorAll(".card[data-rid=\"".concat(releaseId, "\"] .c-prog-f")).forEach(function (el) {
      return el.style.width = pct + '%';
    });
    if (!pct) document.querySelectorAll(".card[data-rid=\"".concat(releaseId, "\"] .c-prog")).forEach(function (el) {
      return el.remove();
    });
  }
}

// Long-press Enter/OK detection for episode buttons
var _detEpKeyTimer = null,
  _detEpLongFired = false;
document.addEventListener('keydown', function (e) {
  e = philipsKeyEvent(e);
  if ((e.key === 'Enter' || e.keyCode === 13) && nav.zone === 'det.eps') {
    if (e.repeat) return; // ignore held-key repeats
    _detEpLongFired = false;
    _detEpKeyTimer = setTimeout(function () {
      _detEpKeyTimer = null;
      _detEpLongFired = true;
      navDetail('LongEnter');
    }, 700);
    // Don't let this keydown propagate to handleKey (prevents click on first press)
    // We'll fire click on keyup if no long press
    e.stopImmediatePropagation();
    e.preventDefault();
  }
}, {
  capture: true
}); // capture=true to intercept before handleKey
document.addEventListener('keyup', function (e) {
  e = philipsKeyEvent(e);
  if (e.key === 'Enter' || e.keyCode === 13) {
    if (_detEpKeyTimer) {
      clearTimeout(_detEpKeyTimer);
      _detEpKeyTimer = null;
      // Short press — fire click only if long press did NOT fire
      if (!_detEpLongFired && !window._depLongFired && nav.zone === 'det.eps') {
        var _epBtns$nav$detEp2;
        var epBtns = _toConsumableArray(document.querySelectorAll('.dep'));
        (_epBtns$nav$detEp2 = epBtns[nav.detEp]) === null || _epBtns$nav$detEp2 === void 0 || _epBtns$nav$detEp2.click();
      }
    }
    _detEpLongFired = false;
  }
}, {
  capture: true
});
function getEpCols() {
  // measure episode grid column count from DOM
  var ep0 = document.querySelector('.dep');
  var epList = document.querySelector('#detEps');
  if (!ep0 || !epList) return 6;
  return Math.max(1, Math.floor((epList.offsetWidth + 4) / (ep0.offsetWidth + 4)));
}
function applyDetFoc() {
  document.querySelectorAll('#detBack.foc,.det-acts .btn.foc,.det-cbtn.foc,.dep.foc,.det-related .det-rel-card.foc').forEach(function (x) {
    return x.classList.remove('foc');
  });
  var Z = nav.zone;
  var actBtns = _toConsumableArray(document.querySelectorAll('.det-acts .btn'));
  var collBtns = _toConsumableArray(document.querySelectorAll('.det-cbtn'));
  var epBtns = _toConsumableArray(document.querySelectorAll('.dep'));
  var relCards = _toConsumableArray(document.querySelectorAll('.det-related .det-rel-card:not(.drc-current)'));
  if (Z === 'det.back') {
    var _$18;
    (_$18 = $('detBack')) === null || _$18 === void 0 || _$18.classList.add('foc');
    // Scroll to very top of detail body
    var db = document.querySelector('.det-body');
    if (db) db.scrollTop = 0;
  } else if (Z === 'det.acts' && actBtns[nav.detAct]) {
    actBtns[nav.detAct].classList.add('foc');
    siv(actBtns[nav.detAct], {
      block: 'nearest'
    });
  } else if (Z === 'det.coll' && collBtns[nav.detColl]) {
    collBtns[nav.detColl].classList.add('foc');
    siv(collBtns[nav.detColl], {
      block: 'nearest'
    });
  } else if (Z === 'det.eps' && epBtns[nav.detEp]) {
    epBtns[nav.detEp].classList.add('foc');
    siv(epBtns[nav.detEp], {
      block: 'nearest'
    });
  } else if (Z === 'det.related' && relCards[nav.detRel || 0]) {
    var card = relCards[nav.detRel || 0];
    card.classList.add('foc');
    // Scroll det-body to show card + padding below
    var _db = document.querySelector('.det-body');
    if (_db) {
      var cardBottom = card.getBoundingClientRect().bottom;
      var bodyBottom = _db.getBoundingClientRect().bottom;
      if (cardBottom > bodyBottom - 20) {
        _db.scrollTop += cardBottom - bodyBottom + 60;
      }
    }
  }
}
function applyZoneFocus() {
  if (document.body.classList.contains('is-mobile')) return; // no focus on mobile
  var Z = nav.zone;
  if (Z !== 'home.nav') clearNavFoc();
  if (Z === 'cat.search') focCatSearch();else if (Z === 'cat.grid') focCatGrid();else if (Z === 'cat.flt') applyFltFocus();else if (Z === 'sch') {
    applySchFoc();
  } else if (Z === 'coll.tabs') {
    _toConsumableArray($('collTabs').children).forEach(function (t, i) {
      return t.classList.toggle('foc', i === nav.collTab);
    });
  } else if (Z === 'coll.grid') {
    var cards = _toConsumableArray($('collGrid').querySelectorAll('.card'));
    cards.forEach(function (c, i) {
      return c.classList.toggle('foc', i === nav.collI);
    });
  }
}

// nav tab clicks
document.querySelectorAll('#nav .ntab').forEach(function (t, i) {
  t.addEventListener('click', function () {
    return switchPage(t.dataset.pg);
  });
  t.addEventListener('mouseenter', function () {
    nav.ni = i;
  });
});
$('loginBtn').addEventListener('mouseenter', function () {
  nav.zone = 'home.nav';
});
var GP = {
  prev: {},
  repeatTime: {},
  REPEAT_INITIAL: 500,
  REPEAT_INTERVAL: 150
};
var GP_MAP = {
  12: 'ArrowUp',
  13: 'ArrowDown',
  14: 'ArrowLeft',
  15: 'ArrowRight',
  0: 'Enter',
  1: 'Backspace',
  4: 'MediaRewind',
  5: 'MediaFastForward'
};
// Pre-built arrays for pollGamepad — avoids Object.entries() allocation every rAF
var _GP_BTN = Object.entries(GP_MAP); // [[idx,key],...]
var _GP_AX_KEYS = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
function pollGamepad() {
  var gps = navigator.getGamepads ? navigator.getGamepads() : [];
  var now = Date.now();
  for (var gi = 0; gi < gps.length; gi++) {
    var gp = gps[gi];
    if (!gp) continue;
    var id = gp.index;
    for (var bi = 0; bi < _GP_BTN.length; bi++) {
      var _gp$buttons$bidx;
      var bidx = _GP_BTN[bi][0],
        bkey = _GP_BTN[bi][1];
      var pressed = ((_gp$buttons$bidx = gp.buttons[bidx]) === null || _gp$buttons$bidx === void 0 ? void 0 : _gp$buttons$bidx.pressed) || false;
      var _k5 = id + '_' + bidx;
      if (pressed) {
        if (!GP.prev[_k5]) {
          simulateKey(bkey);
          GP.repeatTime[_k5] = now + GP.REPEAT_INITIAL;
        } else if (now > GP.repeatTime[_k5]) {
          simulateKey(bkey);
          GP.repeatTime[_k5] = now + GP.REPEAT_INTERVAL;
        }
      }
      GP.prev[_k5] = pressed;
    }
    var DEAD = 0.6,
      ax = gp.axes[0] || 0,
      ay = gp.axes[1] || 0;
    var aVals = [ax > DEAD, ax < -DEAD, ay > DEAD, ay < -DEAD];
    for (var ai = 0; ai < 4; ai++) {
      var _k6 = id + '_a' + ai;
      if (aVals[ai]) {
        if (!GP.prev[_k6]) {
          simulateKey(_GP_AX_KEYS[ai]);
          GP.repeatTime[_k6] = now + GP.REPEAT_INITIAL;
        } else if (now > GP.repeatTime[_k6]) {
          simulateKey(_GP_AX_KEYS[ai]);
          GP.repeatTime[_k6] = now + GP.REPEAT_INTERVAL;
        }
      }
      GP.prev[_k6] = aVals[ai];
    }
  }
  // stop loop if no gamepads to save CPU
  var _chk = navigator.getGamepads ? navigator.getGamepads() : [];
  if (_toConsumableArray(_chk).some(function (g) {
    return g;
  })) requestAnimationFrame(pollGamepad);
}
function simulateKey(key) {
  handleKey({
    key: key,
    keyCode: key === 'Backspace' ? 8 : key === 'Enter' ? 13 : 0,
    preventDefault: function preventDefault() {}
  });
}
window.addEventListener('gamepadconnected', function () {
  return setStatus('ok', 'Геймпад подключён');
});
requestAnimationFrame(pollGamepad);
document.addEventListener('mousemove', function () {
  return document.body.classList.add('mouse');
});
$('fsBtn').addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', function () {
  var b = $('fsBtn');
  if (b) b.textContent = document.fullscreenElement ? '✕' : '⛶';
});
$('fsBtn').addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', function () {
  var b = $('fsBtn');
  if (b) b.textContent = document.fullscreenElement ? '✕' : '⛶';
});
// Delegation for cards
_cardDelegation($('homeRows'));
_cardDelegation($('catGrid'));
_cardDelegation($('collGrid'));

// ── Fullscreen ────────────────────────────────────────────────────────────
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(function () {});
  } else {
    document.exitFullscreen().catch(function () {});
  }
}
$('vid').addEventListener('dblclick', toggleFullscreen);
document.addEventListener('keydown', function (e) {
  var _document$activeEleme2, _document$activeEleme3;
  e = philipsKeyEvent(e);
  document.body.classList.remove('mouse');
  // Prevent browser from scrolling page with arrow keys
  if ((e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') && ((_document$activeEleme2 = document.activeElement) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.tagName) !== 'INPUT' && ((_document$activeEleme3 = document.activeElement) === null || _document$activeEleme3 === void 0 ? void 0 : _document$activeEleme3.tagName) !== 'TEXTAREA') {
    e.preventDefault();
  }

  // Exit dialog intercepts all keys
  if ($('exitOv').style.display === 'flex') {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (document.activeElement === $('exitNo')) closeExit();else doExit();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      var btns = [$('exitYes'), $('exitNo')];
      var ci = btns.indexOf(document.activeElement);
      var ni = ci === 0 ? 1 : 0;
      btns[ni].focus();
      btns[ni].classList.add('foc');
      btns[ci < 0 ? 0 : ci].classList.remove('foc');
    } else closeExit();
    e.preventDefault();
    e.stopImmediatePropagation();
    return;
  }

  // Space — play/pause in player
  if (e.key === ' ' && nav.zone === 'player') {
    e.preventDefault();
    handleKey({
      key: ' ',
      keyCode: 32,
      preventDefault: function preventDefault() {}
    });
    return;
  }
  // F або F11 — повноекранний режим
  if (e.key === 'f' || e.key === 'F' || e.key === 'F11') {
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    e.preventDefault();
    toggleFullscreen();
    return;
  }
  if (e.keyCode === 10009) {
    e.preventDefault();
    handleKey({
      key: 'Backspace',
      keyCode: 10009,
      preventDefault: function preventDefault() {}
    });
    return;
  }
  if (e.keyCode === 457) {
    e.preventDefault();
    handleKey({
      key: 'ContextMenu',
      keyCode: 457,
      preventDefault: function preventDefault() {}
    });
    return;
  } // Tizen INFO key
  if (e.keyCode === 403) {
    openLogin();
    return;
  }
  if (e.keyCode === 404) {
    switchPage('catalog');
    return;
  }
  if (e.keyCode === 405) {
    switchPage('schedule');
    return;
  }
  if (e.keyCode === 406) {
    switchPage('collections');
    return;
  }
  // Hold Enter (400ms) → context menu; short tap → normal Enter on keyup
  if (e.key === 'Enter') {
    e.preventDefault();
    if (e.repeat) return;
    clearTimeout(window._enterHold);
    window._enterHoldFired = false;
    window._enterHold = setTimeout(function () {
      window._enterHoldFired = true;
      handleKey({
        key: 'ContextMenu',
        keyCode: 0,
        preventDefault: function preventDefault() {}
      });
    }, 400);
    return;
  }
  handleKey(e);
});
document.addEventListener('keyup', function (e) {
  e = philipsKeyEvent(e);
  if (e.key === 'Enter') {
    clearTimeout(window._enterHold);
    if (!window._enterHoldFired) {
      handleKey({
        key: 'Enter',
        keyCode: 13,
        preventDefault: function preventDefault() {}
      });
    }
    window._enterHoldFired = false;
  }
});

// Genre rows config (id=null means we load by filter)
var HOME_GENRE_ROWS = [{
  name: 'Исекай',
  id: null,
  slug: 'isekai'
}, {
  name: 'Романтика',
  id: null,
  slug: 'romance'
}, {
  name: 'Фэнтези',
  id: null,
  slug: 'fantasy'
}, {
  name: 'Надприродне',
  id: null,
  slug: 'supernatural'
}, {
  name: 'Фантастика',
  id: null,
  slug: 'sci_fi'
}, {
  name: 'Приключения',
  id: null,
  slug: 'adventure'
}, {
  name: 'Жахи',
  id: null,
  slug: 'horror'
}, {
  name: 'Экшен',
  id: null,
  slug: 'action'
}, {
  name: 'Школа',
  id: null,
  slug: 'school'
}, {
  name: 'Комедия',
  id: null,
  slug: 'comedy'
}, {
  name: 'Драма',
  id: null,
  slug: 'drama'
}, {
  name: 'Спорт',
  id: null,
  slug: 'sports'
}];

// Paginated row fetch: returns {list, hasMore, nextPage}
function fetchRowPage(_x13) {
  return _fetchRowPage.apply(this, arguments);
} // Legacy compat
function _fetchRowPage() {
  _fetchRowPage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(filters) {
    var page,
      limit,
      p,
      d,
      list,
      filtered,
      _args28 = arguments,
      _t24;
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.p = _context28.n) {
        case 0:
          page = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : 1;
          limit = _args28.length > 2 && _args28[2] !== undefined ? _args28[2] : 10;
          _context28.p = 1;
          p = new URLSearchParams();
          p.set('limit', String(limit));
          p.set('page', String(page));
          Object.entries(filters).forEach(function (_ref1) {
            var _ref10 = _slicedToArray(_ref1, 2),
              k = _ref10[0],
              v = _ref10[1];
            if (k === 'sorting') p.set('f[sorting]', v);else if (k === 'publish_statuses') p.set('f[publish_statuses]', Array.isArray(v) ? v.join(',') : v);else if (k === 'from_year') p.set('f[years][from_year]', String(v));else if (k === 'to_year') p.set('f[years][to_year]', String(v));else if (k === 'genres') p.set('f[genres]', Array.isArray(v) ? v.join(',') : v);else if (k === 'types') p.set('f[types]', Array.isArray(v) ? v.join(',') : v);else p.set("f[".concat(k, "]"), Array.isArray(v) ? v.join(',') : v);
          });
          _context28.n = 2;
          return api('/anime/catalog/releases?' + p.toString());
        case 2:
          d = _context28.v;
          list = Array.isArray(d) ? d : (d === null || d === void 0 ? void 0 : d.data) || (d === null || d === void 0 ? void 0 : d.list) || [];
          list.forEach(function (r) {
            return Store.cacheRelease(r);
          });
          // For completed rows: skip releases that clearly have no episodes
          // Only filter if publish_statuses is IS_NOT_ONGOING (completed)
          // episodes_total===0 might be stale — only filter if both total and _epsCount are 0
          filtered = (filters === null || filters === void 0 ? void 0 : filters.publish_statuses) === 'IS_NOT_ONGOING' ? list.filter(function (r) {
            var _r$type3;
            var tot = r.episodes_total || 0;
            var cnt = r._epsCount || 0;
            // Keep if total OR count > 0, OR if both are 0 but release is recent (might just be missing data)
            if (tot > 0 || cnt > 0) return true;
            // Keep films/movies — they may have 0 episodes_total but still be watchable
            var t = (((_r$type3 = r.type) === null || _r$type3 === void 0 ? void 0 : _r$type3.value) || r.type || '').toLowerCase();
            if (t === 'movie' || t === 'film') return true;
            return false;
          }) : list;
          return _context28.a(2, {
            list: filtered,
            hasMore: list.length >= limit,
            nextPage: page + 1
          });
        case 3:
          _context28.p = 3;
          _t24 = _context28.v;
          return _context28.a(2, {
            list: [],
            hasMore: false,
            nextPage: page + 1
          });
      }
    }, _callee25, null, [[1, 3]]);
  }));
  return _fetchRowPage.apply(this, arguments);
}
function init() {
  return _init.apply(this, arguments);
} // Load a row by its queue index
function _init() {
  _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
    var savedUser, nick, genresRaw, wrap, curYear, prevYear, GENRE_PRIORITY, orderedGenres, usedIds;
    return _regenerator().w(function (_context29) {
      while (1) switch (_context29.n) {
        case 0:
          try {
            localStorage.removeItem('alv_coll_releases');
          } catch (_) {} // legacy cleanup
          updateYearDisplay(); // show default year values
          // Hide preloader
          setTimeout(function () {
            var p = document.getElementById('preloader');
            if (p) p.classList.add('hide');
          }, 900);
          savedUser = Store.get('alv_user', null);
          if (authToken && savedUser) {
            nick = savedUser.nickname || savedUser.login || 'User';
            $('userPill').classList.add('on');
            $('uname').textContent = nick;
            $('loginBtn').style.display = 'none';
            setStatus('ok', 'Вошли · ' + nick);
            syncOnStartup(); // pull all cloud data on startup
            // Real-time sync: pull collections every 2 minutes
            setInterval(function () {
              if (authToken) _doCollSync();
            }, 2 * 60 * 1000);
          }
          // load genres for catalog (before chips listeners)
          _context29.n = 1;
          return loadGenres();
        case 1:
          genresRaw = _context29.v;
          bindFchips();

          // ── HOME ROWS: fully dynamic queue ──────────────────────────────────────
          wrap = $('homeRows');
          wrap.innerHTML = '';
          homeRows.length = 0;
          activeRowI = 0;
          rowPos.length = 0;
          curYear = new Date().getFullYear();
          prevYear = curYear - 1; // Build the full row queue as descriptors (no data yet)
          GENRE_PRIORITY = ['Ісекай', 'Романтика', 'Фентезі', 'Пригоди', 'Екшен', 'Комедія', 'Драма', 'Надприродне', 'Школа', 'Фантастика', 'Жахи', 'Спорт', 'Детектив', 'Меха', 'Музика', 'Психологічне', 'Повсякденність', 'Бойові мистецтва', 'Гарем', 'Ігри', 'Дзьосей', 'Сейнен', 'Сьодзьо', 'Сьонен', 'Триллер', 'Вампіри', 'Демони'];
          orderedGenres = [];
          usedIds = new Set();
          GENRE_PRIORITY.forEach(function (name) {
            var g = (genresRaw || []).find(function (g) {
              return g.name === name || g.name.toLowerCase() === name.toLowerCase();
            });
            if (g && !usedIds.has(g.id)) {
              orderedGenres.push(g);
              usedIds.add(g.id);
            }
          });
          (genresRaw || []).forEach(function (g) {
            if (!usedIds.has(g.id)) {
              orderedGenres.push(g);
              usedIds.add(g.id);
            }
          });

          // Row queue: each entry has {title, filters}
          window._rowQueue = [{
            title: 'Онгоинги',
            filters: {
              publish_statuses: 'IS_ONGOING',
              sorting: 'RATING_DESC'
            }
          }, {
            title: 'Лучшее за 5 лет',
            filters: {
              publish_statuses: 'IS_NOT_ONGOING',
              from_year: curYear - 4,
              to_year: curYear,
              sorting: 'RATING_DESC'
            }
          }].concat(_toConsumableArray(orderedGenres.map(function (g) {
            return {
              title: g.name,
              filters: {
                genres: String(g.id),
                publish_statuses: 'IS_NOT_ONGOING',
                sorting: 'RATING_DESC'
              }
            };
          })));

          // Add placeholder DOM rows immediately so navigation works
          window._rowQueue.forEach(function (desc, qi) {
            var ph = document.createElement('div');
            ph.className = 'cards-sec home-row row-ph';
            ph.dataset.qi = qi;
            ph.innerHTML = "<div class=\"row-hdr\"><div class=\"row-bar\"></div><div class=\"row-ttl\" style=\"opacity:.4\">".concat(desc.title, "</div></div>\n      <div class=\"track-wrap\" style=\"height:260px;align-items:center\"><div style=\"padding:0 14px;color:var(--t3);font-size:12px\">...</div></div>");
            wrap.appendChild(ph);
            homeRows.push({
              releases: [],
              el: ph,
              stub: true,
              qi: qi,
              hasMore: false,
              nextPage: 2,
              filters: null,
              loading: false
            });
          });

          // Load first 3 rows immediately
          _context29.n = 2;
          return loadRowByQueueIdx(0);
        case 2:
          _context29.n = 3;
          return loadRowByQueueIdx(1);
        case 3:
          focCard(0, 0);
          loadRowByQueueIdx(2); // preload row 2 in background
        case 4:
          return _context29.a(2);
      }
    }, _callee26);
  }));
  return _init.apply(this, arguments);
}
function loadRowByQueueIdx(_x14) {
  return _loadRowByQueueIdx.apply(this, arguments);
} // Load a row on demand when user navigates to it
function _loadRowByQueueIdx() {
  _loadRowByQueueIdx = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(qi) {
    var rowI, row, desc, _ph$parentNode, _yield$fetchRowPage2, list, hasMore, _row$el, ph, sec, tw2, _t25;
    return _regenerator().w(function (_context30) {
      while (1) switch (_context30.p = _context30.n) {
        case 0:
          if (!(!window._rowQueue || qi >= window._rowQueue.length)) {
            _context30.n = 1;
            break;
          }
          return _context30.a(2);
        case 1:
          rowI = homeRows.findIndex(function (r) {
            return r.qi === qi;
          });
          if (!(rowI < 0)) {
            _context30.n = 2;
            break;
          }
          return _context30.a(2);
        case 2:
          row = homeRows[rowI];
          if (!(!row.stub || row.releases.length)) {
            _context30.n = 3;
            break;
          }
          return _context30.a(2);
        case 3:
          if (!row._loading) {
            _context30.n = 5;
            break;
          }
          _context30.n = 4;
          return new Promise(function (res) {
            var t = setInterval(function () {
              if (!row.stub || row.releases.length || row.failed) {
                clearInterval(t);
                res();
              }
            }, 80);
            setTimeout(function () {
              clearInterval(t);
              res();
            }, 5000);
          });
        case 4:
          return _context30.a(2);
        case 5:
          row._loading = true;
          desc = window._rowQueue[qi];
          _context30.p = 6;
          _context30.n = 7;
          return fetchRowPage(desc.filters, 1, CARDS_PER_PAGE);
        case 7:
          _yield$fetchRowPage2 = _context30.v;
          list = _yield$fetchRowPage2.list;
          hasMore = _yield$fetchRowPage2.hasMore;
          if (!(!list || list.length < 2)) {
            _context30.n = 8;
            break;
          }
          row._loading = false;
          row.failed = true;
          (_row$el = row.el) === null || _row$el === void 0 || _row$el.remove();
          return _context30.a(2);
        case 8:
          row.releases = list;
          row.hasMore = hasMore;
          row.nextPage = 2;
          row.filters = desc.filters;
          row.stub = false;
          ph = row.el;
          sec = document.createElement('div');
          sec.className = 'cards-sec home-row';
          sec.innerHTML = "<div class=\"row-hdr\"><div class=\"row-bar\"></div><div class=\"row-ttl\">".concat(desc.title, "</div></div>\n      <div class=\"track-wrap\">\n        <button class=\"row-arr arr-l arr-hidden\" tabindex=\"-1\" data-ri=\"").concat(rowI, "\">&#8249;</button>\n        <div class=\"track\" id=\"track-").concat(rowI, "\"></div>\n        <button class=\"row-arr arr-r\" tabindex=\"-1\" data-ri=\"").concat(rowI, "\">&#8250;</button>\n      </div>");
          sec.querySelector('.arr-l').addEventListener('click', function (e) {
            var _rowPos$ri3;
            e.stopPropagation();
            var ri = parseInt(e.currentTarget.dataset.ri);
            activeRowI = ri;
            nav.rowI = ri;
            nav.zone = 'home.cards';
            focCard(Math.max(0, ((_rowPos$ri3 = rowPos[ri]) !== null && _rowPos$ri3 !== void 0 ? _rowPos$ri3 : 0) - 3), ri);
            updateRowArrows(ri);
          });
          sec.querySelector('.arr-r').addEventListener('click', function (e) {
            var _row$releases$length2, _row$releases3, _rowPos$ri4;
            e.stopPropagation();
            var ri = parseInt(e.currentTarget.dataset.ri);
            activeRowI = ri;
            nav.rowI = ri;
            nav.zone = 'home.cards';
            var row = homeRows[ri];
            focCard(Math.min(((_row$releases$length2 = row === null || row === void 0 || (_row$releases3 = row.releases) === null || _row$releases3 === void 0 ? void 0 : _row$releases3.length) !== null && _row$releases$length2 !== void 0 ? _row$releases$length2 : 1) - 1, ((_rowPos$ri4 = rowPos[ri]) !== null && _rowPos$ri4 !== void 0 ? _rowPos$ri4 : 0) + 3), ri);
            updateRowArrows(ri);
          });
          // Mobile scroll trigger for dynamic loading
          tw2 = sec.querySelector('.track-wrap');
          if (tw2) tw2.addEventListener('scroll', function () {
            if (!document.body.classList.contains('is-mobile')) return;
            var r2 = homeRows[rowI];
            if (!r2 || !r2.hasMore || r2.loading) return;
            if (tw2.scrollLeft + tw2.clientWidth >= tw2.scrollWidth - 300) maybeLoadMoreCards(rowI);
          }, {
            passive: true
          });
          row.el = sec;
          (_ph$parentNode = ph.parentNode) === null || _ph$parentNode === void 0 || _ph$parentNode.replaceChild(sec, ph);
          renderCardWindow(rowI, 0);
          if (rowI === 0 && list[0]) releases = list;
          _context30.n = 10;
          break;
        case 9:
          _context30.p = 9;
          _t25 = _context30.v;
          row._loading = false;
        case 10:
          return _context30.a(2);
      }
    }, _callee27, null, [[6, 9]]);
  }));
  return _loadRowByQueueIdx.apply(this, arguments);
}
function loadLazyRow(_x15) {
  return _loadLazyRow.apply(this, arguments);
} // Tizen performance mode
function _loadLazyRow() {
  _loadLazyRow = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(rowI) {
    var _homeRows$rowI3, _homeRows$rowI4, _rowPos$rowI3;
    var row, waited, _homeRows$rowI, _homeRows$rowI2, dir, next;
    return _regenerator().w(function (_context31) {
      while (1) switch (_context31.n) {
        case 0:
          row = homeRows[rowI];
          if (row) {
            _context31.n = 1;
            break;
          }
          return _context31.a(2);
        case 1:
          _context31.n = 2;
          return loadRowByQueueIdx(row.qi);
        case 2:
          // Wait until row renders or fails
          waited = 0;
        case 3:
          if (!((_homeRows$rowI = homeRows[rowI]) !== null && _homeRows$rowI !== void 0 && _homeRows$rowI.stub && !((_homeRows$rowI2 = homeRows[rowI]) !== null && _homeRows$rowI2 !== void 0 && _homeRows$rowI2.failed) && waited < 4000)) {
            _context31.n = 5;
            break;
          }
          _context31.n = 4;
          return new Promise(function (r) {
            return setTimeout(r, 80);
          });
        case 4:
          waited += 80;
          _context31.n = 3;
          break;
        case 5:
          if (!((_homeRows$rowI3 = homeRows[rowI]) !== null && _homeRows$rowI3 !== void 0 && _homeRows$rowI3.stub || (_homeRows$rowI4 = homeRows[rowI]) !== null && _homeRows$rowI4 !== void 0 && _homeRows$rowI4.failed)) {
            _context31.n = 6;
            break;
          }
          dir = rowI > activeRowI ? 1 : -1;
          next = rowI + dir;
          if (next >= 0 && next < homeRows.length) {
            activeRowI = next;
            nav.rowI = next;
            loadLazyRow(next);
          }
          return _context31.a(2);
        case 6:
          focCard((_rowPos$rowI3 = rowPos[rowI]) !== null && _rowPos$rowI3 !== void 0 ? _rowPos$rowI3 : 0, rowI);
          ensureRowsLoaded(rowI + 1);
        case 7:
          return _context31.a(2);
      }
    }, _callee28);
  }));
  return _loadLazyRow.apply(this, arguments);
}
if (_isTizen) {
  var s = document.createElement('style');
  s.textContent =
  // Disable ALL transitions except track scroll — saves repaint on every focus change
  '*{transition:none!important;animation:none!important;backdrop-filter:none!important;' + '-webkit-backdrop-filter:none!important;box-shadow:none!important}' + '.card.foc{transform:translateY(-4px)!important;border-color:var(--red)!important}' + '.track{transition:transform .1s linear!important}' + '';
  document.head.appendChild(s);
}

// ── Cached DOM refs for hot paths ─────────────────────────────
var _$homeRows, _$plyBar, _$plyOv, _$plyEps;
function _cacheDOM() {
  _$homeRows = $('homeRows');
  _$plyBar = $('plyBar');
  _$plyOv = $('plyOv');
  _$plyEps = $('plyEps');
}
init().then(function () {
  _cacheDOM();
  if (document.querySelector('.card')) philipsBoot.ready();
}).catch(function (e) {
  _cacheDOM();
  philipsBoot.fail(e.message);
});

// ═══════════════════════════════════════════════════════════
// TOUCH & WHEEL ENHANCEMENTS  (PC mouse + mobile/phone)
// ═══════════════════════════════════════════════════════════

// При першому тачі — знімаємо mouse-режим (курсор)
document.addEventListener('touchstart', function () {
  return document.body.classList.remove('mouse');
}, {
  passive: true
});

// ── Long-press на картках (touch) → контекстне меню ─────
var _tHoldTimer = null,
  _tHoldR = null,
  _tHoldMoved = false;
document.addEventListener('touchstart', function (e) {
  var card = e.target.closest('.card');
  if (!card || !card._r) return;
  _tHoldMoved = false;
  _tHoldR = card._r;
  _tHoldTimer = setTimeout(function () {
    if (!_tHoldMoved) openCtxMenu(_tHoldR);
    _tHoldR = null;
  }, 550);
}, {
  passive: true
});
document.addEventListener('touchmove', function () {
  _tHoldMoved = true;
  clearTimeout(_tHoldTimer);
}, {
  passive: true
});
document.addEventListener('touchend', function () {
  clearTimeout(_tHoldTimer);
}, {
  passive: true
});
document.addEventListener('touchcancel', function () {
  clearTimeout(_tHoldTimer);
}, {
  passive: true
});

// ── Горизонтальний свайп на треках карток (home) ────────
(function () {
  var sx = 0,
    sy = 0,
    rowI = -1,
    swiped = false;
  function onTouchStart(e) {
    var _tw$querySelector;
    if (document.body.classList.contains('is-mobile')) return;
    var tw = e.target.closest('.track-wrap');
    if (!tw) return;
    var tid = (_tw$querySelector = tw.querySelector('[id^="track-"]')) === null || _tw$querySelector === void 0 ? void 0 : _tw$querySelector.id;
    rowI = tid ? parseInt(tid.replace('track-', '')) : -1;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
    swiped = false;
  }
  function onTouchMove(e) {
    if (rowI < 0) return;
    var dx = e.touches[0].clientX - sx,
      dy = e.touches[0].clientY - sy;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 12) swiped = true;
  }
  function onTouchEnd(e) {
    if (rowI < 0 || !swiped) {
      rowI = -1;
      return;
    }
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) {
      activeRowI = rowI;
      nav.rowI = rowI;
      nav.zone = 'home.cards';
      navHomeCards(dx < 0 ? 'ArrowRight' : 'ArrowLeft');
    }
    rowI = -1;
    swiped = false;
  }
  var hr = $('homeRows');
  hr.addEventListener('touchstart', onTouchStart, {
    passive: true
  });
  hr.addEventListener('touchmove', onTouchMove, {
    passive: true
  });
  hr.addEventListener('touchend', onTouchEnd, {
    passive: true
  });
})();

// Горизонтальний wheel вимкнено — використовуй кнопки ‹/› на рядах

// ── IntersectionObserver: підвантажувати stub-рядки при скролі ──────────
(function () {
  if (typeof IntersectionObserver === 'undefined') return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var qi = parseInt(entry.target.dataset.qi);
      if (isNaN(qi)) return;
      var rowI = homeRows.findIndex(function (r) {
        return r.qi === qi;
      });
      if (rowI < 0) return;
      var row = homeRows[rowI];
      if (row && row.stub && !row._loading) loadRowByQueueIdx(qi);
    });
  }, {
    root: $('homeRows'),
    rootMargin: '200px 0px'
  });
  function observeStubs() {
    document.querySelectorAll('.home-row.row-ph[data-qi]').forEach(function (el) {
      return obs.observe(el);
    });
  }
  observeStubs();
  new MutationObserver(function (muts) {
    muts.forEach(function (m) {
      return m.addedNodes.forEach(function (n) {
        if (n.nodeType === 1 && n.classList && n.classList.contains('row-ph') && n.dataset && n.dataset.qi !== undefined) obs.observe(n);
      });
    });
  }).observe($('homeRows'), {
    childList: true
  });
})();

// ── Свайп вправо → закрити Detail overlay ───────────────
(function () {
  var ov = $('detOv');
  var sx = 0,
    sy = 0;
  ov.addEventListener('touchstart', function (e) {
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, {
    passive: true
  });
  ov.addEventListener('touchend', function (e) {
    if (!ov.classList.contains('on')) return;
    var dx = e.changedTouches[0].clientX - sx,
      dy = e.changedTouches[0].clientY - sy;
    if (dx > 90 && Math.abs(dy) < 100) closeDetail();
  }, {
    passive: true
  });
})();

// ── Плеєр: тап → показати/сховати контролі ──────────────
$('plyOv').addEventListener('touchstart', function (e) {
  if (e.target.closest('.ply-bar,.pb,.pep,.ply-qual-btn,.ply-qual-menu,.ply-eps')) return;
  showCtrl();
}, {
  passive: true
});
// Exit dialog — elements exist in DOM before script runs now
function doExit() {
  if (_isPhilips) {
    if (history.length > 1) history.back();else {
      closeExit();
      alert('Для выхода используйте кнопку Home на пульте.');
    }
    return;
  }
  if (window.tizen) try {
    tizen.application.getCurrentApplication().exit();
  } catch (_) {} else window.close();
}
function closeExit() {
  $('exitOv').style.display = 'none';
  $('exitYes').classList.remove('foc');
  $('exitNo').classList.remove('foc');
  window._lastBack = 0;
}
$('exitYes').addEventListener('click', doExit);
$('exitNo').addEventListener('click', closeExit);

// ── Mobile detection ─────────────────────────────────────────────────
function _checkMobile() {
  var mob = !_isTizen && (window.innerWidth <= 900 || 'ontouchstart' in window && window.innerWidth <= 1100);
  document.body.classList.toggle('is-mobile', mob);
  var fltBtn = document.getElementById('mFltBtn');
  if (fltBtn) fltBtn.style.display = mob ? 'flex' : 'none';
  // Apply mobile CSS variables
  var root = document.documentElement;
  if (mob) {
    root.style.setProperty('--hh', '54px');
    root.style.setProperty('--pad', '14px');
    root.style.setProperty('--cw', '130px');
  } else if (!document.documentElement.classList.contains('tizen-tv')) {
    root.style.removeProperty('--hh');
    root.style.removeProperty('--pad');
    root.style.removeProperty('--cw');
  }
}
_checkMobile();
window.addEventListener('resize', _checkMobile);

// ── Mobile filter drawer ─────────────────────────────────────────────
(function (_document$getElementB, _document$getElementB2) {
  var btn = document.getElementById('mFltBtn');
  var flt = document.getElementById('catFlt');
  var ov = document.getElementById('mFltOverlay');
  if (!btn || !flt || !ov) return;
  var movedToBody = false;
  function ensureInBody() {
    if (movedToBody) return;
    document.body.appendChild(flt); // move out of flex container — fixes position:fixed
    movedToBody = true;
  }
  function openDrawer() {
    ensureInBody();
    flt.classList.add('mob-drawer');
    requestAnimationFrame(function () {
      return flt.classList.add('mob-open');
    });
    ov.classList.add('on');
  }
  function closeDrawer() {
    flt.classList.remove('mob-open');
    ov.classList.remove('on');
  }
  btn.addEventListener('click', openDrawer);
  ov.addEventListener('click', closeDrawer);
  (_document$getElementB = document.getElementById('fltApply')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', closeDrawer);
  (_document$getElementB2 = document.getElementById('fltReset')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', closeDrawer);
  // Swipe down to close
  var sy = 0;
  flt.addEventListener('touchstart', function (e) {
    sy = e.touches[0].clientY;
  }, {
    passive: true
  });
  flt.addEventListener('touchend', function (e) {
    if (e.changedTouches[0].clientY - sy > 60) closeDrawer();
  }, {
    passive: true
  });
})();

// ── Video fit cycling ─────────────────────────────────────────────────
var FIT_MODES = ['contain', 'cover'];
var FIT_LABELS = {
  contain: 'По рамке',
  cover: 'Заполнить'
};
var fitIdx = 0;
function applyFit() {
  var v = $('vid');
  FIT_MODES.forEach(function (m) {
    return v.classList.remove('fit-' + m);
  });
  v.classList.add('fit-' + FIT_MODES[fitIdx]);
  var btn = $('pcFit');
  if (btn) {
    var lbl = btn.querySelector('.fit-label');
    if (!lbl) {
      lbl = document.createElement('span');
      lbl.className = 'fit-label';
      btn.appendChild(lbl);
    }
    lbl.textContent = FIT_LABELS[FIT_MODES[fitIdx]];
  }
  try {
    localStorage.setItem('videoFit', fitIdx);
  } catch (_) {}
}
function cycleFit() {
  fitIdx = (fitIdx + 1) % FIT_MODES.length;
  applyFit();
  showCtrl();
}
$('pcFit').addEventListener('click', cycleFit);
// restore saved fit
try {
  var _s = localStorage.getItem('videoFit');
  if (_s !== null) {
    fitIdx = parseInt(_s) || 0;
    applyFit();
  }
} catch (_) {}

// ── Player fullscreen ─────────────────────────────────────────────────
function togglePlyFs() {
  var wrap = $('plyOv');
  if (!document.fullscreenElement) {
    (wrap.requestFullscreen || wrap.webkitRequestFullscreen || wrap.mozRequestFullScreen).call(wrap);
  } else {
    (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen).call(document);
  }
}
if (!_isTizen) {
  $('pcFullscreen').addEventListener('click', togglePlyFs);
} else {
  $('pcFullscreen').style.display = 'none';
  $('pcFit').style.display = 'none';
}
document.addEventListener('fullscreenchange', function () {
  var ico = $('pcFsIco');
  if (document.fullscreenElement) {
    ico.innerHTML = '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>';
  } else {
    ico.innerHTML = '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>';
  }
});

// Year spinner uses inline onclick handlers