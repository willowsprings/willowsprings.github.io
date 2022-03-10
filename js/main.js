(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/umbrellajs/umbrella.min.js
  var require_umbrella_min = __commonJS({
    "node_modules/umbrellajs/umbrella.min.js"(exports, module) {
      var u2 = function(t, e) {
        return this instanceof u2 ? t instanceof u2 ? t : (typeof t == "string" && (t = this.select(t, e)), t && t.nodeName && (t = [t]), void (this.nodes = this.slice(t))) : new u2(t, e);
      };
      u2.prototype = { get length() {
        return this.nodes.length;
      } }, u2.prototype.nodes = [], u2.prototype.addClass = function() {
        return this.eacharg(arguments, function(t, e) {
          t.classList.add(e);
        });
      }, u2.prototype.adjacent = function(i, t, n) {
        return typeof t == "number" && (t = t === 0 ? [] : new Array(t).join().split(",").map(Number.call, Number)), this.each(function(r, o) {
          var e = document.createDocumentFragment();
          u2(t || {}).map(function(t2, e2) {
            var n2 = typeof i == "function" ? i.call(this, t2, e2, r, o) : i;
            return typeof n2 == "string" ? this.generate(n2) : u2(n2);
          }).each(function(t2) {
            this.isInPage(t2) ? e.appendChild(u2(t2).clone().first()) : e.appendChild(t2);
          }), n.call(this, r, e);
        });
      }, u2.prototype.after = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.parentNode.insertBefore(e2, t2.nextSibling);
        });
      }, u2.prototype.append = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.appendChild(e2);
        });
      }, u2.prototype.args = function(t, e, n) {
        return typeof t == "function" && (t = t(e, n)), typeof t != "string" && (t = this.slice(t).map(this.str(e, n))), t.toString().split(/[\s,]+/).filter(function(t2) {
          return t2.length;
        });
      }, u2.prototype.array = function(o) {
        o = o;
        var i = this;
        return this.nodes.reduce(function(t, e, n) {
          var r;
          return o ? ((r = o.call(i, e, n)) || (r = false), typeof r == "string" && (r = u2(r)), r instanceof u2 && (r = r.nodes)) : r = e.innerHTML, t.concat(r !== false ? r : []);
        }, []);
      }, u2.prototype.attr = function(t, e, r) {
        return r = r ? "data-" : "", this.pairs(t, e, function(t2, e2) {
          return t2.getAttribute(r + e2);
        }, function(t2, e2, n) {
          t2.setAttribute(r + e2, n);
        });
      }, u2.prototype.before = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.parentNode.insertBefore(e2, t2);
        });
      }, u2.prototype.children = function(t) {
        return this.map(function(t2) {
          return this.slice(t2.children);
        }).filter(t);
      }, u2.prototype.clone = function() {
        return this.map(function(t, e) {
          var n = t.cloneNode(true), r = this.getAll(n);
          return this.getAll(t).each(function(t2, e2) {
            for (var n2 in this.mirror)
              this.mirror[n2] && this.mirror[n2](t2, r.nodes[e2]);
          }), n;
        });
      }, u2.prototype.getAll = function(t) {
        return u2([t].concat(u2("*", t).nodes));
      }, u2.prototype.mirror = {}, u2.prototype.mirror.events = function(t, e) {
        if (t._e)
          for (var n in t._e)
            t._e[n].forEach(function(t2) {
              u2(e).on(n, t2.callback);
            });
      }, u2.prototype.mirror.select = function(t, e) {
        u2(t).is("select") && (e.value = t.value);
      }, u2.prototype.mirror.textarea = function(t, e) {
        u2(t).is("textarea") && (e.value = t.value);
      }, u2.prototype.closest = function(e) {
        return this.map(function(t) {
          do {
            if (u2(t).is(e))
              return t;
          } while ((t = t.parentNode) && t !== document);
        });
      }, u2.prototype.data = function(t, e) {
        return this.attr(t, e, true);
      }, u2.prototype.each = function(t) {
        return this.nodes.forEach(t.bind(this)), this;
      }, u2.prototype.eacharg = function(n, r) {
        return this.each(function(e, t) {
          this.args(n, e, t).forEach(function(t2) {
            r.call(this, e, t2);
          }, this);
        });
      }, u2.prototype.empty = function() {
        return this.each(function(t) {
          for (; t.firstChild; )
            t.removeChild(t.firstChild);
        });
      }, u2.prototype.filter = function(e) {
        var t = function(t2) {
          return t2.matches = t2.matches || t2.msMatchesSelector || t2.webkitMatchesSelector, t2.matches(e || "*");
        };
        return typeof e == "function" && (t = e), e instanceof u2 && (t = function(t2) {
          return e.nodes.indexOf(t2) !== -1;
        }), u2(this.nodes.filter(t));
      }, u2.prototype.find = function(e) {
        return this.map(function(t) {
          return u2(e || "*", t);
        });
      }, u2.prototype.first = function() {
        return this.nodes[0] || false;
      }, u2.prototype.generate = function(t) {
        return /^\s*<tr[> ]/.test(t) ? u2(document.createElement("table")).html(t).children().children().nodes : /^\s*<t(h|d)[> ]/.test(t) ? u2(document.createElement("table")).html(t).children().children().children().nodes : /^\s*</.test(t) ? u2(document.createElement("div")).html(t).children().nodes : document.createTextNode(t);
      }, u2.prototype.handle = function() {
        var t = this.slice(arguments).map(function(e) {
          return typeof e == "function" ? function(t2) {
            t2.preventDefault(), e.apply(this, arguments);
          } : e;
        }, this);
        return this.on.apply(this, t);
      }, u2.prototype.hasClass = function() {
        return this.is("." + this.args(arguments).join("."));
      }, u2.prototype.html = function(e) {
        return e === void 0 ? this.first().innerHTML || "" : this.each(function(t) {
          t.innerHTML = e;
        });
      }, u2.prototype.is = function(t) {
        return 0 < this.filter(t).length;
      }, u2.prototype.isInPage = function(t) {
        return t !== document.body && document.body.contains(t);
      }, u2.prototype.last = function() {
        return this.nodes[this.length - 1] || false;
      }, u2.prototype.map = function(t) {
        return t ? u2(this.array(t)).unique() : this;
      }, u2.prototype.not = function(e) {
        return this.filter(function(t) {
          return !u2(t).is(e || true);
        });
      }, u2.prototype.off = function(t, e, n) {
        var r = e == null && n == null, o = null, i = e;
        return typeof e == "string" && (o = e, i = n), this.eacharg(t, function(e2, n2) {
          u2(e2._e ? e2._e[n2] : []).each(function(t2) {
            (r || t2.orig_callback === i && t2.selector === o) && e2.removeEventListener(n2, t2.callback);
          });
        });
      }, u2.prototype.on = function(t, e, o) {
        var i = null, n = e;
        typeof e == "string" && (i = e, n = o, e = function(e2) {
          var n2 = arguments, r2 = false;
          u2(e2.currentTarget).find(i).each(function(t2) {
            if (t2 === e2.target || t2.contains(e2.target)) {
              r2 = true;
              try {
                Object.defineProperty(e2, "currentTarget", { get: function() {
                  return t2;
                } });
              } catch (t3) {
              }
              o.apply(t2, n2);
            }
          }), r2 || e2.currentTarget !== e2.target || o.apply(e2.target, n2);
        });
        var r = function(t2) {
          return e.apply(this, [t2].concat(t2.detail || []));
        };
        return this.eacharg(t, function(t2, e2) {
          t2.addEventListener(e2, r), t2._e = t2._e || {}, t2._e[e2] = t2._e[e2] || [], t2._e[e2].push({ callback: r, orig_callback: n, selector: i });
        });
      }, u2.prototype.pairs = function(n, t, e, r) {
        if (t !== void 0) {
          var o = n;
          (n = {})[o] = t;
        }
        return typeof n == "object" ? this.each(function(t2) {
          for (var e2 in n)
            r(t2, e2, n[e2]);
        }) : this.length ? e(this.first(), n) : "";
      }, u2.prototype.param = function(e) {
        return Object.keys(e).map(function(t) {
          return this.uri(t) + "=" + this.uri(e[t]);
        }.bind(this)).join("&");
      }, u2.prototype.parent = function(t) {
        return this.map(function(t2) {
          return t2.parentNode;
        }).filter(t);
      }, u2.prototype.prepend = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.insertBefore(e2, t2.firstChild);
        });
      }, u2.prototype.remove = function() {
        return this.each(function(t) {
          t.parentNode && t.parentNode.removeChild(t);
        });
      }, u2.prototype.removeClass = function() {
        return this.eacharg(arguments, function(t, e) {
          t.classList.remove(e);
        });
      }, u2.prototype.replace = function(t, e) {
        var n = [];
        return this.adjacent(t, e, function(t2, e2) {
          n = n.concat(this.slice(e2.children)), t2.parentNode.replaceChild(e2, t2);
        }), u2(n);
      }, u2.prototype.scroll = function() {
        return this.first().scrollIntoView({ behavior: "smooth" }), this;
      }, u2.prototype.select = function(t, e) {
        return t = t.replace(/^\s*/, "").replace(/\s*$/, ""), /^</.test(t) ? u2().generate(t) : (e || document).querySelectorAll(t);
      }, u2.prototype.serialize = function() {
        var r = this;
        return this.slice(this.first().elements).reduce(function(e, n) {
          return !n.name || n.disabled || n.type === "file" ? e : /(checkbox|radio)/.test(n.type) && !n.checked ? e : n.type === "select-multiple" ? (u2(n.options).each(function(t) {
            t.selected && (e += "&" + r.uri(n.name) + "=" + r.uri(t.value));
          }), e) : e + "&" + r.uri(n.name) + "=" + r.uri(n.value);
        }, "").slice(1);
      }, u2.prototype.siblings = function(t) {
        return this.parent().children(t).not(this);
      }, u2.prototype.size = function() {
        return this.first().getBoundingClientRect();
      }, u2.prototype.slice = function(t) {
        return t && t.length !== 0 && typeof t != "string" && t.toString() !== "[object Function]" ? t.length ? [].slice.call(t.nodes || t) : [t] : [];
      }, u2.prototype.str = function(e, n) {
        return function(t) {
          return typeof t == "function" ? t.call(this, e, n) : t.toString();
        };
      }, u2.prototype.text = function(e) {
        return e === void 0 ? this.first().textContent || "" : this.each(function(t) {
          t.textContent = e;
        });
      }, u2.prototype.toggleClass = function(t, e) {
        return !!e === e ? this[e ? "addClass" : "removeClass"](t) : this.eacharg(t, function(t2, e2) {
          t2.classList.toggle(e2);
        });
      }, u2.prototype.trigger = function(t) {
        var o = this.slice(arguments).slice(1);
        return this.eacharg(t, function(t2, e) {
          var n, r = { bubbles: true, cancelable: true, detail: o };
          try {
            n = new window.CustomEvent(e, r);
          } catch (t3) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(e, true, true, o);
          }
          t2.dispatchEvent(n);
        });
      }, u2.prototype.unique = function() {
        return u2(this.nodes.reduce(function(t, e) {
          return e != null && e !== false && t.indexOf(e) === -1 ? t.concat(e) : t;
        }, []));
      }, u2.prototype.uri = function(t) {
        return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+");
      }, u2.prototype.wrap = function(t) {
        return this.map(function(e) {
          return u2(t).each(function(t2) {
            (function(t3) {
              for (; t3.firstElementChild; )
                t3 = t3.firstElementChild;
              return u2(t3);
            })(t2).append(e.cloneNode(true)), e.parentNode.replaceChild(t2, e);
          });
        });
      }, typeof module == "object" && module.exports && (module.exports = u2, module.exports.u = u2);
    }
  });

  // node_modules/ev-emitter/ev-emitter.js
  var require_ev_emitter = __commonJS({
    "node_modules/ev-emitter/ev-emitter.js"(exports, module) {
      (function(global, factory) {
        if (typeof define == "function" && define.amd) {
          define(factory);
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory();
        } else {
          global.EvEmitter = factory();
        }
      })(typeof window != "undefined" ? window : exports, function() {
        "use strict";
        function EvEmitter() {
        }
        var proto = EvEmitter.prototype;
        proto.on = function(eventName, listener) {
          if (!eventName || !listener) {
            return;
          }
          var events = this._events = this._events || {};
          var listeners = events[eventName] = events[eventName] || [];
          if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
          }
          return this;
        };
        proto.once = function(eventName, listener) {
          if (!eventName || !listener) {
            return;
          }
          this.on(eventName, listener);
          var onceEvents = this._onceEvents = this._onceEvents || {};
          var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
          onceListeners[listener] = true;
          return this;
        };
        proto.off = function(eventName, listener) {
          var listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length) {
            return;
          }
          var index = listeners.indexOf(listener);
          if (index != -1) {
            listeners.splice(index, 1);
          }
          return this;
        };
        proto.emitEvent = function(eventName, args) {
          var listeners = this._events && this._events[eventName];
          if (!listeners || !listeners.length) {
            return;
          }
          listeners = listeners.slice(0);
          args = args || [];
          var onceListeners = this._onceEvents && this._onceEvents[eventName];
          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
              this.off(eventName, listener);
              delete onceListeners[listener];
            }
            listener.apply(this, args);
          }
          return this;
        };
        proto.allOff = function() {
          delete this._events;
          delete this._onceEvents;
        };
        return EvEmitter;
      });
    }
  });

  // node_modules/get-size/get-size.js
  var require_get_size = __commonJS({
    "node_modules/get-size/get-size.js"(exports, module) {
      (function(window2, factory) {
        if (typeof define == "function" && define.amd) {
          define(factory);
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory();
        } else {
          window2.getSize = factory();
        }
      })(window, function factory() {
        "use strict";
        function getStyleSize(value) {
          var num = parseFloat(value);
          var isValid = value.indexOf("%") == -1 && !isNaN(num);
          return isValid && num;
        }
        function noop() {
        }
        var logError = typeof console == "undefined" ? noop : function(message) {
          console.error(message);
        };
        var measurements = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth"
        ];
        var measurementsLength = measurements.length;
        function getZeroSize() {
          var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          };
          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
          }
          return size;
        }
        function getStyle(elem) {
          var style = getComputedStyle(elem);
          if (!style) {
            logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
          }
          return style;
        }
        var isSetup = false;
        var isBoxSizeOuter;
        function setup() {
          if (isSetup) {
            return;
          }
          isSetup = true;
          var div = document.createElement("div");
          div.style.width = "200px";
          div.style.padding = "1px 2px 3px 4px";
          div.style.borderStyle = "solid";
          div.style.borderWidth = "1px 2px 3px 4px";
          div.style.boxSizing = "border-box";
          var body = document.body || document.documentElement;
          body.appendChild(div);
          var style = getStyle(div);
          isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
          getSize.isBoxSizeOuter = isBoxSizeOuter;
          body.removeChild(div);
        }
        function getSize(elem) {
          setup();
          if (typeof elem == "string") {
            elem = document.querySelector(elem);
          }
          if (!elem || typeof elem != "object" || !elem.nodeType) {
            return;
          }
          var style = getStyle(elem);
          if (style.display == "none") {
            return getZeroSize();
          }
          var size = {};
          size.width = elem.offsetWidth;
          size.height = elem.offsetHeight;
          var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
          }
          var paddingWidth = size.paddingLeft + size.paddingRight;
          var paddingHeight = size.paddingTop + size.paddingBottom;
          var marginWidth = size.marginLeft + size.marginRight;
          var marginHeight = size.marginTop + size.marginBottom;
          var borderWidth = size.borderLeftWidth + size.borderRightWidth;
          var borderHeight = size.borderTopWidth + size.borderBottomWidth;
          var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
          var styleWidth = getStyleSize(style.width);
          if (styleWidth !== false) {
            size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
          }
          var styleHeight = getStyleSize(style.height);
          if (styleHeight !== false) {
            size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
          }
          size.innerWidth = size.width - (paddingWidth + borderWidth);
          size.innerHeight = size.height - (paddingHeight + borderHeight);
          size.outerWidth = size.width + marginWidth;
          size.outerHeight = size.height + marginHeight;
          return size;
        }
        return getSize;
      });
    }
  });

  // node_modules/desandro-matches-selector/matches-selector.js
  var require_matches_selector = __commonJS({
    "node_modules/desandro-matches-selector/matches-selector.js"(exports, module) {
      (function(window2, factory) {
        "use strict";
        if (typeof define == "function" && define.amd) {
          define(factory);
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory();
        } else {
          window2.matchesSelector = factory();
        }
      })(window, function factory() {
        "use strict";
        var matchesMethod = function() {
          var ElemProto = window.Element.prototype;
          if (ElemProto.matches) {
            return "matches";
          }
          if (ElemProto.matchesSelector) {
            return "matchesSelector";
          }
          var prefixes = ["webkit", "moz", "ms", "o"];
          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) {
              return method;
            }
          }
        }();
        return function matchesSelector(elem, selector) {
          return elem[matchesMethod](selector);
        };
      });
    }
  });

  // node_modules/fizzy-ui-utils/utils.js
  var require_utils = __commonJS({
    "node_modules/fizzy-ui-utils/utils.js"(exports, module) {
      (function(window2, factory) {
        if (typeof define == "function" && define.amd) {
          define([
            "desandro-matches-selector/matches-selector"
          ], function(matchesSelector) {
            return factory(window2, matchesSelector);
          });
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory(window2, require_matches_selector());
        } else {
          window2.fizzyUIUtils = factory(window2, window2.matchesSelector);
        }
      })(window, function factory(window2, matchesSelector) {
        "use strict";
        var utils = {};
        utils.extend = function(a, b) {
          for (var prop in b) {
            a[prop] = b[prop];
          }
          return a;
        };
        utils.modulo = function(num, div) {
          return (num % div + div) % div;
        };
        var arraySlice = Array.prototype.slice;
        utils.makeArray = function(obj) {
          if (Array.isArray(obj)) {
            return obj;
          }
          if (obj === null || obj === void 0) {
            return [];
          }
          var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
          if (isArrayLike) {
            return arraySlice.call(obj);
          }
          return [obj];
        };
        utils.removeFrom = function(ary, obj) {
          var index = ary.indexOf(obj);
          if (index != -1) {
            ary.splice(index, 1);
          }
        };
        utils.getParent = function(elem, selector) {
          while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
              return elem;
            }
          }
        };
        utils.getQueryElement = function(elem) {
          if (typeof elem == "string") {
            return document.querySelector(elem);
          }
          return elem;
        };
        utils.handleEvent = function(event) {
          var method = "on" + event.type;
          if (this[method]) {
            this[method](event);
          }
        };
        utils.filterFindElements = function(elems, selector) {
          elems = utils.makeArray(elems);
          var ffElems = [];
          elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
              return;
            }
            if (!selector) {
              ffElems.push(elem);
              return;
            }
            if (matchesSelector(elem, selector)) {
              ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
              ffElems.push(childElems[i]);
            }
          });
          return ffElems;
        };
        utils.debounceMethod = function(_class, methodName, threshold) {
          threshold = threshold || 100;
          var method = _class.prototype[methodName];
          var timeoutName = methodName + "Timeout";
          _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
              method.apply(_this, args);
              delete _this[timeoutName];
            }, threshold);
          };
        };
        utils.docReady = function(callback) {
          var readyState = document.readyState;
          if (readyState == "complete" || readyState == "interactive") {
            setTimeout(callback);
          } else {
            document.addEventListener("DOMContentLoaded", callback);
          }
        };
        utils.toDashed = function(str) {
          return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
          }).toLowerCase();
        };
        var console2 = window2.console;
        utils.htmlInit = function(WidgetClass, namespace) {
          utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window2.jQuery;
            elems.forEach(function(elem) {
              var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
              var options;
              try {
                options = attr && JSON.parse(attr);
              } catch (error) {
                if (console2) {
                  console2.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                }
                return;
              }
              var instance = new WidgetClass(elem, options);
              if (jQuery) {
                jQuery.data(elem, namespace, instance);
              }
            });
          });
        };
        return utils;
      });
    }
  });

  // node_modules/outlayer/item.js
  var require_item = __commonJS({
    "node_modules/outlayer/item.js"(exports, module) {
      (function(window2, factory) {
        if (typeof define == "function" && define.amd) {
          define([
            "ev-emitter/ev-emitter",
            "get-size/get-size"
          ], factory);
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory(require_ev_emitter(), require_get_size());
        } else {
          window2.Outlayer = {};
          window2.Outlayer.Item = factory(window2.EvEmitter, window2.getSize);
        }
      })(window, function factory(EvEmitter, getSize) {
        "use strict";
        function isEmptyObj(obj) {
          for (var prop in obj) {
            return false;
          }
          prop = null;
          return true;
        }
        var docElemStyle = document.documentElement.style;
        var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
        var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
        var transitionEndEvent = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
        }[transitionProperty];
        var vendorProperties = {
          transform: transformProperty,
          transition: transitionProperty,
          transitionDuration: transitionProperty + "Duration",
          transitionProperty: transitionProperty + "Property",
          transitionDelay: transitionProperty + "Delay"
        };
        function Item(element, layout) {
          if (!element) {
            return;
          }
          this.element = element;
          this.layout = layout;
          this.position = {
            x: 0,
            y: 0
          };
          this._create();
        }
        var proto = Item.prototype = Object.create(EvEmitter.prototype);
        proto.constructor = Item;
        proto._create = function() {
          this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
          };
          this.css({
            position: "absolute"
          });
        };
        proto.handleEvent = function(event) {
          var method = "on" + event.type;
          if (this[method]) {
            this[method](event);
          }
        };
        proto.getSize = function() {
          this.size = getSize(this.element);
        };
        proto.css = function(style) {
          var elemStyle = this.element.style;
          for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
          }
        };
        proto.getPosition = function() {
          var style = getComputedStyle(this.element);
          var isOriginLeft = this.layout._getOption("originLeft");
          var isOriginTop = this.layout._getOption("originTop");
          var xValue = style[isOriginLeft ? "left" : "right"];
          var yValue = style[isOriginTop ? "top" : "bottom"];
          var x = parseFloat(xValue);
          var y = parseFloat(yValue);
          var layoutSize = this.layout.size;
          if (xValue.indexOf("%") != -1) {
            x = x / 100 * layoutSize.width;
          }
          if (yValue.indexOf("%") != -1) {
            y = y / 100 * layoutSize.height;
          }
          x = isNaN(x) ? 0 : x;
          y = isNaN(y) ? 0 : y;
          x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
          y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
          this.position.x = x;
          this.position.y = y;
        };
        proto.layoutPosition = function() {
          var layoutSize = this.layout.size;
          var style = {};
          var isOriginLeft = this.layout._getOption("originLeft");
          var isOriginTop = this.layout._getOption("originTop");
          var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
          var xProperty = isOriginLeft ? "left" : "right";
          var xResetProperty = isOriginLeft ? "right" : "left";
          var x = this.position.x + layoutSize[xPadding];
          style[xProperty] = this.getXValue(x);
          style[xResetProperty] = "";
          var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
          var yProperty = isOriginTop ? "top" : "bottom";
          var yResetProperty = isOriginTop ? "bottom" : "top";
          var y = this.position.y + layoutSize[yPadding];
          style[yProperty] = this.getYValue(y);
          style[yResetProperty] = "";
          this.css(style);
          this.emitEvent("layout", [this]);
        };
        proto.getXValue = function(x) {
          var isHorizontal = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
        };
        proto.getYValue = function(y) {
          var isHorizontal = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
        };
        proto._transitionTo = function(x, y) {
          this.getPosition();
          var curX = this.position.x;
          var curY = this.position.y;
          var didNotMove = x == this.position.x && y == this.position.y;
          this.setPosition(x, y);
          if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
          }
          var transX = x - curX;
          var transY = y - curY;
          var transitionStyle = {};
          transitionStyle.transform = this.getTranslate(transX, transY);
          this.transition({
            to: transitionStyle,
            onTransitionEnd: {
              transform: this.layoutPosition
            },
            isCleaning: true
          });
        };
        proto.getTranslate = function(x, y) {
          var isOriginLeft = this.layout._getOption("originLeft");
          var isOriginTop = this.layout._getOption("originTop");
          x = isOriginLeft ? x : -x;
          y = isOriginTop ? y : -y;
          return "translate3d(" + x + "px, " + y + "px, 0)";
        };
        proto.goTo = function(x, y) {
          this.setPosition(x, y);
          this.layoutPosition();
        };
        proto.moveTo = proto._transitionTo;
        proto.setPosition = function(x, y) {
          this.position.x = parseFloat(x);
          this.position.y = parseFloat(y);
        };
        proto._nonTransition = function(args) {
          this.css(args.to);
          if (args.isCleaning) {
            this._removeStyles(args.to);
          }
          for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
          }
        };
        proto.transition = function(args) {
          if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
          }
          var _transition = this._transn;
          for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
          }
          for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
              _transition.clean[prop] = true;
            }
          }
          if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
          }
          this.enableTransition(args.to);
          this.css(args.to);
          this.isTransitioning = true;
        };
        function toDashedAll(str) {
          return str.replace(/([A-Z])/g, function($1) {
            return "-" + $1.toLowerCase();
          });
        }
        var transitionProps = "opacity," + toDashedAll(transformProperty);
        proto.enableTransition = function() {
          if (this.isTransitioning) {
            return;
          }
          var duration = this.layout.options.transitionDuration;
          duration = typeof duration == "number" ? duration + "ms" : duration;
          this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
          });
          this.element.addEventListener(transitionEndEvent, this, false);
        };
        proto.onwebkitTransitionEnd = function(event) {
          this.ontransitionend(event);
        };
        proto.onotransitionend = function(event) {
          this.ontransitionend(event);
        };
        var dashedVendorProperties = {
          "-webkit-transform": "transform"
        };
        proto.ontransitionend = function(event) {
          if (event.target !== this.element) {
            return;
          }
          var _transition = this._transn;
          var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
          delete _transition.ingProperties[propertyName];
          if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
          }
          if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = "";
            delete _transition.clean[propertyName];
          }
          if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
          }
          this.emitEvent("transitionEnd", [this]);
        };
        proto.disableTransition = function() {
          this.removeTransitionStyles();
          this.element.removeEventListener(transitionEndEvent, this, false);
          this.isTransitioning = false;
        };
        proto._removeStyles = function(style) {
          var cleanStyle = {};
          for (var prop in style) {
            cleanStyle[prop] = "";
          }
          this.css(cleanStyle);
        };
        var cleanTransitionStyle = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: ""
        };
        proto.removeTransitionStyles = function() {
          this.css(cleanTransitionStyle);
        };
        proto.stagger = function(delay) {
          delay = isNaN(delay) ? 0 : delay;
          this.staggerDelay = delay + "ms";
        };
        proto.removeElem = function() {
          this.element.parentNode.removeChild(this.element);
          this.css({ display: "" });
          this.emitEvent("remove", [this]);
        };
        proto.remove = function() {
          if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
          }
          this.once("transitionEnd", function() {
            this.removeElem();
          });
          this.hide();
        };
        proto.reveal = function() {
          delete this.isHidden;
          this.css({ display: "" });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
          onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
          this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd
          });
        };
        proto.onRevealTransitionEnd = function() {
          if (!this.isHidden) {
            this.emitEvent("reveal");
          }
        };
        proto.getHideRevealTransitionEndProperty = function(styleProperty) {
          var optionStyle = this.layout.options[styleProperty];
          if (optionStyle.opacity) {
            return "opacity";
          }
          for (var prop in optionStyle) {
            return prop;
          }
        };
        proto.hide = function() {
          this.isHidden = true;
          this.css({ display: "" });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
          onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
          this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd
          });
        };
        proto.onHideTransitionEnd = function() {
          if (this.isHidden) {
            this.css({ display: "none" });
            this.emitEvent("hide");
          }
        };
        proto.destroy = function() {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
          });
        };
        return Item;
      });
    }
  });

  // node_modules/outlayer/outlayer.js
  var require_outlayer = __commonJS({
    "node_modules/outlayer/outlayer.js"(exports, module) {
      (function(window2, factory) {
        "use strict";
        if (typeof define == "function" && define.amd) {
          define([
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item"
          ], function(EvEmitter, getSize, utils, Item) {
            return factory(window2, EvEmitter, getSize, utils, Item);
          });
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory(window2, require_ev_emitter(), require_get_size(), require_utils(), require_item());
        } else {
          window2.Outlayer = factory(window2, window2.EvEmitter, window2.getSize, window2.fizzyUIUtils, window2.Outlayer.Item);
        }
      })(window, function factory(window2, EvEmitter, getSize, utils, Item) {
        "use strict";
        var console2 = window2.console;
        var jQuery = window2.jQuery;
        var noop = function() {
        };
        var GUID = 0;
        var instances = {};
        function Outlayer(element, options) {
          var queryElement = utils.getQueryElement(element);
          if (!queryElement) {
            if (console2) {
              console2.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
            }
            return;
          }
          this.element = queryElement;
          if (jQuery) {
            this.$element = jQuery(this.element);
          }
          this.options = utils.extend({}, this.constructor.defaults);
          this.option(options);
          var id = ++GUID;
          this.element.outlayerGUID = id;
          instances[id] = this;
          this._create();
          var isInitLayout = this._getOption("initLayout");
          if (isInitLayout) {
            this.layout();
          }
        }
        Outlayer.namespace = "outlayer";
        Outlayer.Item = Item;
        Outlayer.defaults = {
          containerStyle: {
            position: "relative"
          },
          initLayout: true,
          originLeft: true,
          originTop: true,
          resize: true,
          resizeContainer: true,
          transitionDuration: "0.4s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
          }
        };
        var proto = Outlayer.prototype;
        utils.extend(proto, EvEmitter.prototype);
        proto.option = function(opts) {
          utils.extend(this.options, opts);
        };
        proto._getOption = function(option) {
          var oldOption = this.constructor.compatOptions[option];
          return oldOption && this.options[oldOption] !== void 0 ? this.options[oldOption] : this.options[option];
        };
        Outlayer.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer"
        };
        proto._create = function() {
          this.reloadItems();
          this.stamps = [];
          this.stamp(this.options.stamp);
          utils.extend(this.element.style, this.options.containerStyle);
          var canBindResize = this._getOption("resize");
          if (canBindResize) {
            this.bindResize();
          }
        };
        proto.reloadItems = function() {
          this.items = this._itemize(this.element.children);
        };
        proto._itemize = function(elems) {
          var itemElems = this._filterFindItemElements(elems);
          var Item2 = this.constructor.Item;
          var items = [];
          for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item2(elem, this);
            items.push(item);
          }
          return items;
        };
        proto._filterFindItemElements = function(elems) {
          return utils.filterFindElements(elems, this.options.itemSelector);
        };
        proto.getItemElements = function() {
          return this.items.map(function(item) {
            return item.element;
          });
        };
        proto.layout = function() {
          this._resetLayout();
          this._manageStamps();
          var layoutInstant = this._getOption("layoutInstant");
          var isInstant = layoutInstant !== void 0 ? layoutInstant : !this._isLayoutInited;
          this.layoutItems(this.items, isInstant);
          this._isLayoutInited = true;
        };
        proto._init = proto.layout;
        proto._resetLayout = function() {
          this.getSize();
        };
        proto.getSize = function() {
          this.size = getSize(this.element);
        };
        proto._getMeasurement = function(measurement, size) {
          var option = this.options[measurement];
          var elem;
          if (!option) {
            this[measurement] = 0;
          } else {
            if (typeof option == "string") {
              elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
              elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
          }
        };
        proto.layoutItems = function(items, isInstant) {
          items = this._getItemsForLayout(items);
          this._layoutItems(items, isInstant);
          this._postLayout();
        };
        proto._getItemsForLayout = function(items) {
          return items.filter(function(item) {
            return !item.isIgnored;
          });
        };
        proto._layoutItems = function(items, isInstant) {
          this._emitCompleteOnItems("layout", items);
          if (!items || !items.length) {
            return;
          }
          var queue = [];
          items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
          }, this);
          this._processLayoutQueue(queue);
        };
        proto._getItemLayoutPosition = function() {
          return {
            x: 0,
            y: 0
          };
        };
        proto._processLayoutQueue = function(queue) {
          this.updateStagger();
          queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
          }, this);
        };
        proto.updateStagger = function() {
          var stagger = this.options.stagger;
          if (stagger === null || stagger === void 0) {
            this.stagger = 0;
            return;
          }
          this.stagger = getMilliseconds(stagger);
          return this.stagger;
        };
        proto._positionItem = function(item, x, y, isInstant, i) {
          if (isInstant) {
            item.goTo(x, y);
          } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
          }
        };
        proto._postLayout = function() {
          this.resizeContainer();
        };
        proto.resizeContainer = function() {
          var isResizingContainer = this._getOption("resizeContainer");
          if (!isResizingContainer) {
            return;
          }
          var size = this._getContainerSize();
          if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
          }
        };
        proto._getContainerSize = noop;
        proto._setContainerMeasure = function(measure, isWidth) {
          if (measure === void 0) {
            return;
          }
          var elemSize = this.size;
          if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
          }
          measure = Math.max(measure, 0);
          this.element.style[isWidth ? "width" : "height"] = measure + "px";
        };
        proto._emitCompleteOnItems = function(eventName, items) {
          var _this = this;
          function onComplete() {
            _this.dispatchEvent(eventName + "Complete", null, [items]);
          }
          var count = items.length;
          if (!items || !count) {
            onComplete();
            return;
          }
          var doneCount = 0;
          function tick() {
            doneCount++;
            if (doneCount == count) {
              onComplete();
            }
          }
          items.forEach(function(item) {
            item.once(eventName, tick);
          });
        };
        proto.dispatchEvent = function(type, event, args) {
          var emitArgs = event ? [event].concat(args) : args;
          this.emitEvent(type, emitArgs);
          if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
              var $event = jQuery.Event(event);
              $event.type = type;
              this.$element.trigger($event, args);
            } else {
              this.$element.trigger(type, args);
            }
          }
        };
        proto.ignore = function(elem) {
          var item = this.getItem(elem);
          if (item) {
            item.isIgnored = true;
          }
        };
        proto.unignore = function(elem) {
          var item = this.getItem(elem);
          if (item) {
            delete item.isIgnored;
          }
        };
        proto.stamp = function(elems) {
          elems = this._find(elems);
          if (!elems) {
            return;
          }
          this.stamps = this.stamps.concat(elems);
          elems.forEach(this.ignore, this);
        };
        proto.unstamp = function(elems) {
          elems = this._find(elems);
          if (!elems) {
            return;
          }
          elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
          }, this);
        };
        proto._find = function(elems) {
          if (!elems) {
            return;
          }
          if (typeof elems == "string") {
            elems = this.element.querySelectorAll(elems);
          }
          elems = utils.makeArray(elems);
          return elems;
        };
        proto._manageStamps = function() {
          if (!this.stamps || !this.stamps.length) {
            return;
          }
          this._getBoundingRect();
          this.stamps.forEach(this._manageStamp, this);
        };
        proto._getBoundingRect = function() {
          var boundingRect = this.element.getBoundingClientRect();
          var size = this.size;
          this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
          };
        };
        proto._manageStamp = noop;
        proto._getElementOffset = function(elem) {
          var boundingRect = elem.getBoundingClientRect();
          var thisRect = this._boundingRect;
          var size = getSize(elem);
          var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
          };
          return offset;
        };
        proto.handleEvent = utils.handleEvent;
        proto.bindResize = function() {
          window2.addEventListener("resize", this);
          this.isResizeBound = true;
        };
        proto.unbindResize = function() {
          window2.removeEventListener("resize", this);
          this.isResizeBound = false;
        };
        proto.onresize = function() {
          this.resize();
        };
        utils.debounceMethod(Outlayer, "onresize", 100);
        proto.resize = function() {
          if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
          }
          this.layout();
        };
        proto.needsResizeLayout = function() {
          var size = getSize(this.element);
          var hasSizes = this.size && size;
          return hasSizes && size.innerWidth !== this.size.innerWidth;
        };
        proto.addItems = function(elems) {
          var items = this._itemize(elems);
          if (items.length) {
            this.items = this.items.concat(items);
          }
          return items;
        };
        proto.appended = function(elems) {
          var items = this.addItems(elems);
          if (!items.length) {
            return;
          }
          this.layoutItems(items, true);
          this.reveal(items);
        };
        proto.prepended = function(elems) {
          var items = this._itemize(elems);
          if (!items.length) {
            return;
          }
          var previousItems = this.items.slice(0);
          this.items = items.concat(previousItems);
          this._resetLayout();
          this._manageStamps();
          this.layoutItems(items, true);
          this.reveal(items);
          this.layoutItems(previousItems);
        };
        proto.reveal = function(items) {
          this._emitCompleteOnItems("reveal", items);
          if (!items || !items.length) {
            return;
          }
          var stagger = this.updateStagger();
          items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
          });
        };
        proto.hide = function(items) {
          this._emitCompleteOnItems("hide", items);
          if (!items || !items.length) {
            return;
          }
          var stagger = this.updateStagger();
          items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
          });
        };
        proto.revealItemElements = function(elems) {
          var items = this.getItems(elems);
          this.reveal(items);
        };
        proto.hideItemElements = function(elems) {
          var items = this.getItems(elems);
          this.hide(items);
        };
        proto.getItem = function(elem) {
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
              return item;
            }
          }
        };
        proto.getItems = function(elems) {
          elems = utils.makeArray(elems);
          var items = [];
          elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
              items.push(item);
            }
          }, this);
          return items;
        };
        proto.remove = function(elems) {
          var removeItems = this.getItems(elems);
          this._emitCompleteOnItems("remove", removeItems);
          if (!removeItems || !removeItems.length) {
            return;
          }
          removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
          }, this);
        };
        proto.destroy = function() {
          var style = this.element.style;
          style.height = "";
          style.position = "";
          style.width = "";
          this.items.forEach(function(item) {
            item.destroy();
          });
          this.unbindResize();
          var id = this.element.outlayerGUID;
          delete instances[id];
          delete this.element.outlayerGUID;
          if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
          }
        };
        Outlayer.data = function(elem) {
          elem = utils.getQueryElement(elem);
          var id = elem && elem.outlayerGUID;
          return id && instances[id];
        };
        Outlayer.create = function(namespace, options) {
          var Layout = subclass(Outlayer);
          Layout.defaults = utils.extend({}, Outlayer.defaults);
          utils.extend(Layout.defaults, options);
          Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
          Layout.namespace = namespace;
          Layout.data = Outlayer.data;
          Layout.Item = subclass(Item);
          utils.htmlInit(Layout, namespace);
          if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
          }
          return Layout;
        };
        function subclass(Parent) {
          function SubClass() {
            Parent.apply(this, arguments);
          }
          SubClass.prototype = Object.create(Parent.prototype);
          SubClass.prototype.constructor = SubClass;
          return SubClass;
        }
        var msUnits = {
          ms: 1,
          s: 1e3
        };
        function getMilliseconds(time) {
          if (typeof time == "number") {
            return time;
          }
          var matches = time.match(/(^\d*\.?\d*)(\w*)/);
          var num = matches && matches[1];
          var unit = matches && matches[2];
          if (!num.length) {
            return 0;
          }
          num = parseFloat(num);
          var mult = msUnits[unit] || 1;
          return num * mult;
        }
        Outlayer.Item = Item;
        return Outlayer;
      });
    }
  });

  // node_modules/masonry-layout/masonry.js
  var require_masonry = __commonJS({
    "node_modules/masonry-layout/masonry.js"(exports, module) {
      (function(window2, factory) {
        if (typeof define == "function" && define.amd) {
          define([
            "outlayer/outlayer",
            "get-size/get-size"
          ], factory);
        } else if (typeof module == "object" && module.exports) {
          module.exports = factory(require_outlayer(), require_get_size());
        } else {
          window2.Masonry = factory(window2.Outlayer, window2.getSize);
        }
      })(window, function factory(Outlayer, getSize) {
        "use strict";
        var Masonry2 = Outlayer.create("masonry");
        Masonry2.compatOptions.fitWidth = "isFitWidth";
        var proto = Masonry2.prototype;
        proto._resetLayout = function() {
          this.getSize();
          this._getMeasurement("columnWidth", "outerWidth");
          this._getMeasurement("gutter", "outerWidth");
          this.measureColumns();
          this.colYs = [];
          for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
          }
          this.maxY = 0;
          this.horizontalColIndex = 0;
        };
        proto.measureColumns = function() {
          this.getContainerWidth();
          if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
          }
          var columnWidth = this.columnWidth += this.gutter;
          var containerWidth = this.containerWidth + this.gutter;
          var cols = containerWidth / columnWidth;
          var excess = columnWidth - containerWidth % columnWidth;
          var mathMethod = excess && excess < 1 ? "round" : "floor";
          cols = Math[mathMethod](cols);
          this.cols = Math.max(cols, 1);
        };
        proto.getContainerWidth = function() {
          var isFitWidth = this._getOption("fitWidth");
          var container = isFitWidth ? this.element.parentNode : this.element;
          var size = getSize(container);
          this.containerWidth = size && size.innerWidth;
        };
        proto._getItemLayoutPosition = function(item) {
          item.getSize();
          var remainder = item.size.outerWidth % this.columnWidth;
          var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
          var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
          colSpan = Math.min(colSpan, this.cols);
          var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
          var colPosition = this[colPosMethod](colSpan, item);
          var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
          };
          var setHeight = colPosition.y + item.size.outerHeight;
          var setMax = colSpan + colPosition.col;
          for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
          }
          return position;
        };
        proto._getTopColPosition = function(colSpan) {
          var colGroup = this._getTopColGroup(colSpan);
          var minimumY = Math.min.apply(Math, colGroup);
          return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
          };
        };
        proto._getTopColGroup = function(colSpan) {
          if (colSpan < 2) {
            return this.colYs;
          }
          var colGroup = [];
          var groupCount = this.cols + 1 - colSpan;
          for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
          }
          return colGroup;
        };
        proto._getColGroupY = function(col, colSpan) {
          if (colSpan < 2) {
            return this.colYs[col];
          }
          var groupColYs = this.colYs.slice(col, col + colSpan);
          return Math.max.apply(Math, groupColYs);
        };
        proto._getHorizontalColPosition = function(colSpan, item) {
          var col = this.horizontalColIndex % this.cols;
          var isOver = colSpan > 1 && col + colSpan > this.cols;
          col = isOver ? 0 : col;
          var hasSize = item.size.outerWidth && item.size.outerHeight;
          this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
          return {
            col,
            y: this._getColGroupY(col, colSpan)
          };
        };
        proto._manageStamp = function(stamp) {
          var stampSize = getSize(stamp);
          var offset = this._getElementOffset(stamp);
          var isOriginLeft = this._getOption("originLeft");
          var firstX = isOriginLeft ? offset.left : offset.right;
          var lastX = firstX + stampSize.outerWidth;
          var firstCol = Math.floor(firstX / this.columnWidth);
          firstCol = Math.max(0, firstCol);
          var lastCol = Math.floor(lastX / this.columnWidth);
          lastCol -= lastX % this.columnWidth ? 0 : 1;
          lastCol = Math.min(this.cols - 1, lastCol);
          var isOriginTop = this._getOption("originTop");
          var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
          for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
          }
        };
        proto._getContainerSize = function() {
          this.maxY = Math.max.apply(Math, this.colYs);
          var size = {
            height: this.maxY
          };
          if (this._getOption("fitWidth")) {
            size.width = this._getContainerFitWidth();
          }
          return size;
        };
        proto._getContainerFitWidth = function() {
          var unusedCols = 0;
          var i = this.cols;
          while (--i) {
            if (this.colYs[i] !== 0) {
              break;
            }
            unusedCols++;
          }
          return (this.cols - unusedCols) * this.columnWidth - this.gutter;
        };
        proto.needsResizeLayout = function() {
          var previousWidth = this.containerWidth;
          this.getContainerWidth();
          return previousWidth != this.containerWidth;
        };
        return Masonry2;
      });
    }
  });

  // <stdin>
  var import_umbrellajs = __toESM(require_umbrella_min());
  var import_masonry_layout = __toESM(require_masonry());
  function ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
  var $ = document.querySelector.bind(document);
  ready(function() {
  });
  window.addEventListener("DOMContentLoaded", () => {
    (0, import_umbrellajs.default)(".hamburger").on("click", function() {
      (0, import_umbrellajs.default)(this).toggleClass("is-active");
      console.log("click");
    });
  });
})();
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3VtYnJlbGxhanMvdW1icmVsbGEubWluLmpzIiwgIm5vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzL2dldC1zaXplL2dldC1zaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanMiLCAibm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwgIm5vZGVfbW9kdWxlcy9vdXRsYXllci9pdGVtLmpzIiwgIm5vZGVfbW9kdWxlcy9vdXRsYXllci9vdXRsYXllci5qcyIsICJub2RlX21vZHVsZXMvbWFzb25yeS1sYXlvdXQvbWFzb25yeS5qcyIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBVbWJyZWxsYSBKUyAzLjIuMiB1bWJyZWxsYWpzLmNvbSAqL1xuXG52YXIgdT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgdT90IGluc3RhbmNlb2YgdT90OihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9dGhpcy5zZWxlY3QodCxlKSksdCYmdC5ub2RlTmFtZSYmKHQ9W3RdKSx2b2lkKHRoaXMubm9kZXM9dGhpcy5zbGljZSh0KSkpOm5ldyB1KHQsZSl9O3UucHJvdG90eXBlPXtnZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMubm9kZXMubGVuZ3RofX0sdS5wcm90b3R5cGUubm9kZXM9W10sdS5wcm90b3R5cGUuYWRkQ2xhc3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoYXJnKGFyZ3VtZW50cyxmdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0LmFkZChlKX0pfSx1LnByb3RvdHlwZS5hZGphY2VudD1mdW5jdGlvbihpLHQsbil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJih0PTA9PT10P1tdOm5ldyBBcnJheSh0KS5qb2luKCkuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIuY2FsbCxOdW1iZXIpKSx0aGlzLmVhY2goZnVuY3Rpb24ocixvKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dSh0fHx7fSkubWFwKGZ1bmN0aW9uKHQsZSl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmNhbGwodGhpcyx0LGUscixvKTppO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBuP3RoaXMuZ2VuZXJhdGUobik6dShuKX0pLmVhY2goZnVuY3Rpb24odCl7dGhpcy5pc0luUGFnZSh0KT9lLmFwcGVuZENoaWxkKHUodCkuY2xvbmUoKS5maXJzdCgpKTplLmFwcGVuZENoaWxkKHQpfSksbi5jYWxsKHRoaXMscixlKX0pfSx1LnByb3RvdHlwZS5hZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0Lm5leHRTaWJsaW5nKX0pfSx1LnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGphY2VudCh0LGUsZnVuY3Rpb24odCxlKXt0LmFwcGVuZENoaWxkKGUpfSl9LHUucHJvdG90eXBlLmFyZ3M9ZnVuY3Rpb24odCxlLG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0PXQoZSxuKSksXCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0PXRoaXMuc2xpY2UodCkubWFwKHRoaXMuc3RyKGUsbikpKSx0LnRvU3RyaW5nKCkuc3BsaXQoL1tcXHMsXSsvKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RofSl9LHUucHJvdG90eXBlLmFycmF5PWZ1bmN0aW9uKG8pe289bzt2YXIgaT10aGlzO3JldHVybiB0aGlzLm5vZGVzLnJlZHVjZShmdW5jdGlvbih0LGUsbil7dmFyIHI7cmV0dXJuIG8/KChyPW8uY2FsbChpLGUsbikpfHwocj0hMSksXCJzdHJpbmdcIj09dHlwZW9mIHImJihyPXUocikpLHIgaW5zdGFuY2VvZiB1JiYocj1yLm5vZGVzKSk6cj1lLmlubmVySFRNTCx0LmNvbmNhdCghMSE9PXI/cjpbXSl9LFtdKX0sdS5wcm90b3R5cGUuYXR0cj1mdW5jdGlvbih0LGUscil7cmV0dXJuIHI9cj9cImRhdGEtXCI6XCJcIix0aGlzLnBhaXJzKHQsZSxmdW5jdGlvbih0LGUpe3JldHVybiB0LmdldEF0dHJpYnV0ZShyK2UpfSxmdW5jdGlvbih0LGUsbil7dC5zZXRBdHRyaWJ1dGUocitlLG4pfSl9LHUucHJvdG90eXBlLmJlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0KX0pfSx1LnByb3RvdHlwZS5jaGlsZHJlbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2xpY2UodC5jaGlsZHJlbil9KS5maWx0ZXIodCl9LHUucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5jbG9uZU5vZGUoITApLHI9dGhpcy5nZXRBbGwobik7cmV0dXJuIHRoaXMuZ2V0QWxsKHQpLmVhY2goZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gdGhpcy5taXJyb3IpdGhpcy5taXJyb3Jbbl0mJnRoaXMubWlycm9yW25dKHQsci5ub2Rlc1tlXSl9KSxufSl9LHUucHJvdG90eXBlLmdldEFsbD1mdW5jdGlvbih0KXtyZXR1cm4gdShbdF0uY29uY2F0KHUoXCIqXCIsdCkubm9kZXMpKX0sdS5wcm90b3R5cGUubWlycm9yPXt9LHUucHJvdG90eXBlLm1pcnJvci5ldmVudHM9ZnVuY3Rpb24odCxlKXtpZih0Ll9lKWZvcih2YXIgbiBpbiB0Ll9lKXQuX2Vbbl0uZm9yRWFjaChmdW5jdGlvbih0KXt1KGUpLm9uKG4sdC5jYWxsYmFjayl9KX0sdS5wcm90b3R5cGUubWlycm9yLnNlbGVjdD1mdW5jdGlvbih0LGUpe3UodCkuaXMoXCJzZWxlY3RcIikmJihlLnZhbHVlPXQudmFsdWUpfSx1LnByb3RvdHlwZS5taXJyb3IudGV4dGFyZWE9ZnVuY3Rpb24odCxlKXt1KHQpLmlzKFwidGV4dGFyZWFcIikmJihlLnZhbHVlPXQudmFsdWUpfSx1LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXtkb3tpZih1KHQpLmlzKGUpKXJldHVybiB0fXdoaWxlKCh0PXQucGFyZW50Tm9kZSkmJnQhPT1kb2N1bWVudCl9KX0sdS5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmF0dHIodCxlLCEwKX0sdS5wcm90b3R5cGUuZWFjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5ub2Rlcy5mb3JFYWNoKHQuYmluZCh0aGlzKSksdGhpc30sdS5wcm90b3R5cGUuZWFjaGFyZz1mdW5jdGlvbihuLHIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSx0KXt0aGlzLmFyZ3MobixlLHQpLmZvckVhY2goZnVuY3Rpb24odCl7ci5jYWxsKHRoaXMsZSx0KX0sdGhpcyl9KX0sdS5wcm90b3R5cGUuZW1wdHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCl9KX0sdS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKHQpe3JldHVybiB0Lm1hdGNoZXM9dC5tYXRjaGVzfHx0Lm1zTWF0Y2hlc1NlbGVjdG9yfHx0LndlYmtpdE1hdGNoZXNTZWxlY3Rvcix0Lm1hdGNoZXMoZXx8XCIqXCIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYodD1lKSxlIGluc3RhbmNlb2YgdSYmKHQ9ZnVuY3Rpb24odCl7cmV0dXJuLTEhPT1lLm5vZGVzLmluZGV4T2YodCl9KSx1KHRoaXMubm9kZXMuZmlsdGVyKHQpKX0sdS5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHUoZXx8XCIqXCIsdCl9KX0sdS5wcm90b3R5cGUuZmlyc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2Rlc1swXXx8ITF9LHUucHJvdG90eXBlLmdlbmVyYXRlPWZ1bmN0aW9uKHQpe3JldHVybi9eXFxzKjx0cls+IF0vLnRlc3QodCk/dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIikpLmh0bWwodCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzOi9eXFxzKjx0KGh8ZClbPiBdLy50ZXN0KHQpP3UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpKS5odG1sKHQpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzOi9eXFxzKjwvLnRlc3QodCk/dShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5odG1sKHQpLmNoaWxkcmVuKCkubm9kZXM6ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCl9LHUucHJvdG90eXBlLmhhbmRsZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc2xpY2UoYXJndW1lbnRzKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9OmV9LHRoaXMpO3JldHVybiB0aGlzLm9uLmFwcGx5KHRoaXMsdCl9LHUucHJvdG90eXBlLmhhc0NsYXNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXMoXCIuXCIrdGhpcy5hcmdzKGFyZ3VtZW50cykuam9pbihcIi5cIikpfSx1LnByb3RvdHlwZS5odG1sPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3RoaXMuZmlyc3QoKS5pbm5lckhUTUx8fFwiXCI6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QuaW5uZXJIVE1MPWV9KX0sdS5wcm90b3R5cGUuaXM9ZnVuY3Rpb24odCl7cmV0dXJuIDA8dGhpcy5maWx0ZXIodCkubGVuZ3RofSx1LnByb3RvdHlwZS5pc0luUGFnZT1mdW5jdGlvbih0KXtyZXR1cm4gdCE9PWRvY3VtZW50LmJvZHkmJmRvY3VtZW50LmJvZHkuY29udGFpbnModCl9LHUucHJvdG90eXBlLmxhc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2Rlc1t0aGlzLmxlbmd0aC0xXXx8ITF9LHUucHJvdG90eXBlLm1hcD1mdW5jdGlvbih0KXtyZXR1cm4gdD91KHRoaXMuYXJyYXkodCkpLnVuaXF1ZSgpOnRoaXN9LHUucHJvdG90eXBlLm5vdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXUodCkuaXMoZXx8ITApfSl9LHUucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUsbil7dmFyIHI9bnVsbD09ZSYmbnVsbD09bixvPW51bGwsaT1lO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYobz1lLGk9biksdGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24oZSxuKXt1KGUuX2U/ZS5fZVtuXTpbXSkuZWFjaChmdW5jdGlvbih0KXsocnx8dC5vcmlnX2NhbGxiYWNrPT09aSYmdC5zZWxlY3Rvcj09PW8pJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIobix0LmNhbGxiYWNrKX0pfSl9LHUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSxvKXt2YXIgaT1udWxsLG49ZTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGk9ZSxuPW8sZT1mdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMscj0hMTt1KGUuY3VycmVudFRhcmdldCkuZmluZChpKS5lYWNoKGZ1bmN0aW9uKHQpe2lmKHQ9PT1lLnRhcmdldHx8dC5jb250YWlucyhlLnRhcmdldCkpe3I9ITA7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdH19KX1jYXRjaCh0KXt9by5hcHBseSh0LG4pfX0pLHJ8fGUuY3VycmVudFRhcmdldCE9PWUudGFyZ2V0fHxvLmFwcGx5KGUudGFyZ2V0LG4pfSk7dmFyIHI9ZnVuY3Rpb24odCl7cmV0dXJuIGUuYXBwbHkodGhpcyxbdF0uY29uY2F0KHQuZGV0YWlsfHxbXSkpfTtyZXR1cm4gdGhpcy5lYWNoYXJnKHQsZnVuY3Rpb24odCxlKXt0LmFkZEV2ZW50TGlzdGVuZXIoZSxyKSx0Ll9lPXQuX2V8fHt9LHQuX2VbZV09dC5fZVtlXXx8W10sdC5fZVtlXS5wdXNoKHtjYWxsYmFjazpyLG9yaWdfY2FsbGJhY2s6bixzZWxlY3RvcjppfSl9KX0sdS5wcm90b3R5cGUucGFpcnM9ZnVuY3Rpb24obix0LGUscil7aWYodm9pZCAwIT09dCl7dmFyIG89bjsobj17fSlbb109dH1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2Ygbj90aGlzLmVhY2goZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIG4pcih0LGUsbltlXSl9KTp0aGlzLmxlbmd0aD9lKHRoaXMuZmlyc3QoKSxuKTpcIlwifSx1LnByb3RvdHlwZS5wYXJhbT1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnVyaSh0KStcIj1cIit0aGlzLnVyaShlW3RdKX0uYmluZCh0aGlzKSkuam9pbihcIiZcIil9LHUucHJvdG90eXBlLnBhcmVudD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucGFyZW50Tm9kZX0pLmZpbHRlcih0KX0sdS5wcm90b3R5cGUucHJlcGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX0pfSx1LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSl9LHUucHJvdG90eXBlLnJlbW92ZUNsYXNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaGFyZyhhcmd1bWVudHMsZnVuY3Rpb24odCxlKXt0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KX0sdS5wcm90b3R5cGUucmVwbGFjZT1mdW5jdGlvbih0LGUpe3ZhciBuPVtdO3JldHVybiB0aGlzLmFkamFjZW50KHQsZSxmdW5jdGlvbih0LGUpe249bi5jb25jYXQodGhpcy5zbGljZShlLmNoaWxkcmVuKSksdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLHQpfSksdShuKX0sdS5wcm90b3R5cGUuc2Nyb2xsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlyc3QoKS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6XCJzbW9vdGhcIn0pLHRoaXN9LHUucHJvdG90eXBlLnNlbGVjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0PXQucmVwbGFjZSgvXlxccyovLFwiXCIpLnJlcGxhY2UoL1xccyokLyxcIlwiKSwvXjwvLnRlc3QodCk/dSgpLmdlbmVyYXRlKHQpOihlfHxkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCh0KX0sdS5wcm90b3R5cGUuc2VyaWFsaXplPWZ1bmN0aW9uKCl7dmFyIHI9dGhpcztyZXR1cm4gdGhpcy5zbGljZSh0aGlzLmZpcnN0KCkuZWxlbWVudHMpLnJlZHVjZShmdW5jdGlvbihlLG4pe3JldHVybiFuLm5hbWV8fG4uZGlzYWJsZWR8fFwiZmlsZVwiPT09bi50eXBlP2U6LyhjaGVja2JveHxyYWRpbykvLnRlc3Qobi50eXBlKSYmIW4uY2hlY2tlZD9lOlwic2VsZWN0LW11bHRpcGxlXCI9PT1uLnR5cGU/KHUobi5vcHRpb25zKS5lYWNoKGZ1bmN0aW9uKHQpe3Quc2VsZWN0ZWQmJihlKz1cIiZcIityLnVyaShuLm5hbWUpK1wiPVwiK3IudXJpKHQudmFsdWUpKX0pLGUpOmUrXCImXCIrci51cmkobi5uYW1lKStcIj1cIityLnVyaShuLnZhbHVlKX0sXCJcIikuc2xpY2UoMSl9LHUucHJvdG90eXBlLnNpYmxpbmdzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKHQpLm5vdCh0aGlzKX0sdS5wcm90b3R5cGUuc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpcnN0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9LHUucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiYwIT09dC5sZW5ndGgmJlwic3RyaW5nXCIhPXR5cGVvZiB0JiZcIltvYmplY3QgRnVuY3Rpb25dXCIhPT10LnRvU3RyaW5nKCk/dC5sZW5ndGg/W10uc2xpY2UuY2FsbCh0Lm5vZGVzfHx0KTpbdF06W119LHUucHJvdG90eXBlLnN0cj1mdW5jdGlvbihlLG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbCh0aGlzLGUsbik6dC50b1N0cmluZygpfX0sdS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT90aGlzLmZpcnN0KCkudGV4dENvbnRlbnR8fFwiXCI6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3QudGV4dENvbnRlbnQ9ZX0pfSx1LnByb3RvdHlwZS50b2dnbGVDbGFzcz1mdW5jdGlvbih0LGUpe3JldHVybiEhZT09PWU/dGhpc1tlP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHQpOnRoaXMuZWFjaGFyZyh0LGZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3QudG9nZ2xlKGUpfSl9LHUucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCl7dmFyIG89dGhpcy5zbGljZShhcmd1bWVudHMpLnNsaWNlKDEpO3JldHVybiB0aGlzLmVhY2hhcmcodCxmdW5jdGlvbih0LGUpe3ZhciBuLHI9e2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkZXRhaWw6b307dHJ5e249bmV3IHdpbmRvdy5DdXN0b21FdmVudChlLHIpfWNhdGNoKHQpeyhuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChlLCEwLCEwLG8pfXQuZGlzcGF0Y2hFdmVudChuKX0pfSx1LnByb3RvdHlwZS51bmlxdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdSh0aGlzLm5vZGVzLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT1lJiYhMSE9PWUmJi0xPT09dC5pbmRleE9mKGUpP3QuY29uY2F0KGUpOnR9LFtdKSl9LHUucHJvdG90eXBlLnVyaT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLyEvZyxcIiUyMVwiKS5yZXBsYWNlKC8nL2csXCIlMjdcIikucmVwbGFjZSgvXFwoL2csXCIlMjhcIikucmVwbGFjZSgvXFwpL2csXCIlMjlcIikucmVwbGFjZSgvXFwqL2csXCIlMkFcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfSx1LnByb3RvdHlwZS53cmFwPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdSh0KS5lYWNoKGZ1bmN0aW9uKHQpeyhmdW5jdGlvbih0KXtmb3IoO3QuZmlyc3RFbGVtZW50Q2hpbGQ7KXQ9dC5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gdSh0KX0pKHQpLmFwcGVuZChlLmNsb25lTm9kZSghMCkpLGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodCxlKX0pfSl9LFwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9dSxtb2R1bGUuZXhwb3J0cy51PXUpOyIsICIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuIiwgIi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjNcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKiBnbG9iYWxzIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZ2V0U2l6ZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09IC0xICYmICFpc05hTiggbnVtICk7XG4gIHJldHVybiBpc1ZhbGlkICYmIG51bTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gbm9vcCA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBtZWFzdXJlbWVudHMgPSBbXG4gICdwYWRkaW5nTGVmdCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nQm90dG9tJyxcbiAgJ21hcmdpbkxlZnQnLFxuICAnbWFyZ2luUmlnaHQnLFxuICAnbWFyZ2luVG9wJyxcbiAgJ21hcmdpbkJvdHRvbScsXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJCb3R0b21XaWR0aCdcbl07XG5cbnZhciBtZWFzdXJlbWVudHNMZW5ndGggPSBtZWFzdXJlbWVudHMubGVuZ3RoO1xuXG5mdW5jdGlvbiBnZXRaZXJvU2l6ZSgpIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGlubmVyV2lkdGg6IDAsXG4gICAgaW5uZXJIZWlnaHQ6IDAsXG4gICAgb3V0ZXJXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMFxuICB9O1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldFN0eWxlLCBnZXQgc3R5bGUgb2YgZWxlbWVudCwgY2hlY2sgZm9yIEZpcmVmb3ggYnVnXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUoIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgbG9nRXJyb3IoICdTdHlsZSByZXR1cm5lZCAnICsgc3R5bGUgK1xuICAgICAgJy4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gJyArXG4gICAgICAnU2VlIGh0dHBzOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBDaHJvbWUgJiBTYWZhcmkgbWVhc3VyZSB0aGUgb3V0ZXItd2lkdGggb24gc3R5bGUud2lkdGggb24gYm9yZGVyLWJveCBlbGVtc1xuICAgKiBJRTExICYgRmlyZWZveDwyOSBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcbiAgLy8gcm91bmQgdmFsdWUgZm9yIGJyb3dzZXIgem9vbS4gZGVzYW5kcm8vbWFzb25yeSM5MjhcbiAgaXNCb3hTaXplT3V0ZXIgPSBNYXRoLnJvdW5kKCBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICkgKSA9PSAyMDA7XG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlcjtcblxuICBib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTaXplKCBlbGVtICkge1xuICBzZXR1cCgpO1xuXG4gIC8vIHVzZSBxdWVyeVNlbGV0b3IgaWYgZWxlbSBpcyBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPSAnb2JqZWN0JyB8fCAhZWxlbS5ub2RlVHlwZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZWxlbSApO1xuXG4gIC8vIGlmIGhpZGRlbiwgZXZlcnl0aGluZyBpcyAwXG4gIGlmICggc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XG4gICAgcmV0dXJuIGdldFplcm9TaXplKCk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IHt9O1xuICBzaXplLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgc2l6ZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICB2YXIgaXNCb3JkZXJCb3ggPSBzaXplLmlzQm9yZGVyQm94ID0gc3R5bGUuYm94U2l6aW5nID09ICdib3JkZXItYm94JztcblxuICAvLyBnZXQgYWxsIG1lYXN1cmVtZW50c1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlWyBtZWFzdXJlbWVudCBdO1xuICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAgIC8vIGFueSAnYXV0bycsICdtZWRpdW0nIHZhbHVlIHdpbGwgYmUgMFxuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAhaXNOYU4oIG51bSApID8gbnVtIDogMDtcbiAgfVxuXG4gIHZhciBwYWRkaW5nV2lkdGggPSBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHZhciBwYWRkaW5nSGVpZ2h0ID0gc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5wYWRkaW5nQm90dG9tO1xuICB2YXIgbWFyZ2luV2lkdGggPSBzaXplLm1hcmdpbkxlZnQgKyBzaXplLm1hcmdpblJpZ2h0O1xuICB2YXIgbWFyZ2luSGVpZ2h0ID0gc2l6ZS5tYXJnaW5Ub3AgKyBzaXplLm1hcmdpbkJvdHRvbTtcbiAgdmFyIGJvcmRlcldpZHRoID0gc2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBzaXplLmJvcmRlclJpZ2h0V2lkdGg7XG4gIHZhciBib3JkZXJIZWlnaHQgPSBzaXplLmJvcmRlclRvcFdpZHRoICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcblxuICB2YXIgaXNCb3JkZXJCb3hTaXplT3V0ZXIgPSBpc0JvcmRlckJveCAmJiBpc0JveFNpemVPdXRlcjtcblxuICAvLyBvdmVyd3JpdGUgd2lkdGggYW5kIGhlaWdodCBpZiB3ZSBjYW4gZ2V0IGl0IGZyb20gc3R5bGVcbiAgdmFyIHN0eWxlV2lkdGggPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICk7XG4gIGlmICggc3R5bGVXaWR0aCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS53aWR0aCA9IHN0eWxlV2lkdGggK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICB9XG5cbiAgdmFyIHN0eWxlSGVpZ2h0ID0gZ2V0U3R5bGVTaXplKCBzdHlsZS5oZWlnaHQgKTtcbiAgaWYgKCBzdHlsZUhlaWdodCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS5oZWlnaHQgPSBzdHlsZUhlaWdodCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcbiAgfVxuXG4gIHNpemUuaW5uZXJXaWR0aCA9IHNpemUud2lkdGggLSAoIHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIHNpemUuaW5uZXJIZWlnaHQgPSBzaXplLmhlaWdodCAtICggcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuXG4gIHNpemUub3V0ZXJXaWR0aCA9IHNpemUud2lkdGggKyBtYXJnaW5XaWR0aDtcbiAgc2l6ZS5vdXRlckhlaWdodCA9IHNpemUuaGVpZ2h0ICsgbWFyZ2luSGVpZ2h0O1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufSk7XG4iLCAiLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4yXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhbmRhcmQgbWV0aG9kIG5hbWUgZmlyc3RcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdW4tcHJlZml4ZWRcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXNTZWxlY3Rvcic7XG4gICAgfVxuICAgIC8vIGNoZWNrIHZlbmRvciBwcmVmaXhlc1xuICAgIHZhciBwcmVmaXhlcyA9IFsgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycgXTtcblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfTtcblxufSkpO1xuIiwgIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjIuMC43XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG52YXIgYXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIGlmICggaXNBcnJheUxpa2UgKSB7XG4gICAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICAgIHJldHVybiBhcnJheVNsaWNlLmNhbGwoIG9iaiApO1xuICB9XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICB2YXIgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgbWV0aG9kLmFwcGx5KCBfdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIF90aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gIHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIGNhbGxiYWNrICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3NcbiAqIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4gKiBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG4gKi9cbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIHZhciBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgdmFyIGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnWycgKyBkYXRhQXR0ciArICddJyApO1xuICAgIHZhciBqc0Rhc2hFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuanMtJyArIGRhc2hlZE5hbWVzcGFjZSApO1xuICAgIHZhciBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZGF0YUF0dHJFbGVtcyApXG4gICAgICAuY29uY2F0KCB1dGlscy5tYWtlQXJyYXkoIGpzRGFzaEVsZW1zICkgKTtcbiAgICB2YXIgZGF0YU9wdGlvbnNBdHRyID0gZGF0YUF0dHIgKyAnLW9wdGlvbnMnO1xuICAgIHZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4gICAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApIHx8XG4gICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhT3B0aW9uc0F0dHIgKTtcbiAgICAgIHZhciBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCAnRXJyb3IgcGFyc2luZyAnICsgZGF0YUF0dHIgKyAnIG9uICcgKyBlbGVtLmNsYXNzTmFtZSArXG4gICAgICAgICAgJzogJyArIGVycm9yICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcbiIsICIvKipcbiAqIE91dGxheWVyIEl0ZW1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeVxuICAgICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSB7fTtcbiAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggRXZFbWl0dGVyLCBnZXRTaXplICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBoZWxwZXJzIC0tLS0tIC8vXG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmooIG9iaiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcm9wID0gbnVsbDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENTUzMgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zaXRpb24gPT0gJ3N0cmluZycgP1xuICAndHJhbnNpdGlvbicgOiAnV2Via2l0VHJhbnNpdGlvbic7XG52YXIgdHJhbnNmb3JtUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zZm9ybSA9PSAnc3RyaW5nJyA/XG4gICd0cmFuc2Zvcm0nIDogJ1dlYmtpdFRyYW5zZm9ybSc7XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG59WyB0cmFuc2l0aW9uUHJvcGVydHkgXTtcblxuLy8gY2FjaGUgYWxsIHZlbmRvciBwcm9wZXJ0aWVzIHRoYXQgY291bGQgaGF2ZSB2ZW5kb3IgcHJlZml4XG52YXIgdmVuZG9yUHJvcGVydGllcyA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvblByb3BlcnR5LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdEdXJhdGlvbicsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ1Byb3BlcnR5JyxcbiAgdHJhbnNpdGlvbkRlbGF5OiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRGVsYXknXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIEl0ZW0oIGVsZW1lbnQsIGxheW91dCApIHtcbiAgaWYgKCAhZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBwYXJlbnQgbGF5b3V0IGNsYXNzLCBpLmUuIE1hc29ucnksIElzb3RvcGUsIG9yIFBhY2tlcnlcbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG4gIHRoaXMucG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbi8vIGluaGVyaXQgRXZFbWl0dGVyXG52YXIgcHJvdG8gPSBJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcbnByb3RvLmNvbnN0cnVjdG9yID0gSXRlbTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyB0cmFuc2l0aW9uIG9iamVjdHNcbiAgdGhpcy5fdHJhbnNuID0ge1xuICAgIGluZ1Byb3BlcnRpZXM6IHt9LFxuICAgIGNsZWFuOiB7fSxcbiAgICBvbkVuZDoge31cbiAgfTtcblxuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSk7XG59O1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBhcHBseSBDU1Mgc3R5bGVzIHRvIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICovXG5wcm90by5jc3MgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIHZhciBlbGVtU3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG5cbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgLy8gdXNlIHZlbmRvciBwcm9wZXJ0eSBpZiBhdmFpbGFibGVcbiAgICB2YXIgc3VwcG9ydGVkUHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAgIGVsZW1TdHlsZVsgc3VwcG9ydGVkUHJvcCBdID0gc3R5bGVbIHByb3AgXTtcbiAgfVxufTtcblxuIC8vIG1lYXN1cmUgcG9zaXRpb24sIGFuZCBzZXRzIGl0XG5wcm90by5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLmVsZW1lbnQgKTtcbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHZhciB4VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JyBdO1xuICB2YXIgeVZhbHVlID0gc3R5bGVbIGlzT3JpZ2luVG9wID8gJ3RvcCcgOiAnYm90dG9tJyBdO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoIHhWYWx1ZSApO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoIHlWYWx1ZSApO1xuICAvLyBjb252ZXJ0IHBlcmNlbnQgdG8gcGl4ZWxzXG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgaWYgKCB4VmFsdWUuaW5kZXhPZignJScpICE9IC0xICkge1xuICAgIHggPSAoIHggLyAxMDAgKSAqIGxheW91dFNpemUud2lkdGg7XG4gIH1cbiAgaWYgKCB5VmFsdWUuaW5kZXhPZignJScpICE9IC0xICkge1xuICAgIHkgPSAoIHkgLyAxMDAgKSAqIGxheW91dFNpemUuaGVpZ2h0O1xuICB9XG4gIC8vIGNsZWFuIHVwICdhdXRvJyBvciBvdGhlciBub24taW50ZWdlciB2YWx1ZXNcbiAgeCA9IGlzTmFOKCB4ICkgPyAwIDogeDtcbiAgeSA9IGlzTmFOKCB5ICkgPyAwIDogeTtcbiAgLy8gcmVtb3ZlIHBhZGRpbmcgZnJvbSBtZWFzdXJlbWVudFxuICB4IC09IGlzT3JpZ2luTGVmdCA/IGxheW91dFNpemUucGFkZGluZ0xlZnQgOiBsYXlvdXRTaXplLnBhZGRpbmdSaWdodDtcbiAgeSAtPSBpc09yaWdpblRvcCA/IGxheW91dFNpemUucGFkZGluZ1RvcCA6IGxheW91dFNpemUucGFkZGluZ0JvdHRvbTtcblxuICB0aGlzLnBvc2l0aW9uLnggPSB4O1xuICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xufTtcblxuLy8gc2V0IHNldHRsZWQgcG9zaXRpb24sIGFwcGx5IHBhZGRpbmdcbnByb3RvLmxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgdmFyIHN0eWxlID0ge307XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuXG4gIC8vIHhcbiAgdmFyIHhQYWRkaW5nID0gaXNPcmlnaW5MZWZ0ID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICB2YXIgeFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgdmFyIHhSZXNldFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueCArIGxheW91dFNpemVbIHhQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeFByb3BlcnR5IF0gPSB0aGlzLmdldFhWYWx1ZSggeCApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeFJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIC8vIHlcbiAgdmFyIHlQYWRkaW5nID0gaXNPcmlnaW5Ub3AgPyAncGFkZGluZ1RvcCcgOiAncGFkZGluZ0JvdHRvbSc7XG4gIHZhciB5UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciB5UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luVG9wID8gJ2JvdHRvbScgOiAndG9wJztcblxuICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueSArIGxheW91dFNpemVbIHlQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeVByb3BlcnR5IF0gPSB0aGlzLmdldFlWYWx1ZSggeSApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeVJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIHRoaXMuY3NzKCBzdHlsZSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2xheW91dCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5nZXRYVmFsdWUgPSBmdW5jdGlvbiggeCApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmICFpc0hvcml6b250YWwgP1xuICAgICggKCB4IC8gdGhpcy5sYXlvdXQuc2l6ZS53aWR0aCApICogMTAwICkgKyAnJScgOiB4ICsgJ3B4Jztcbn07XG5cbnByb3RvLmdldFlWYWx1ZSA9IGZ1bmN0aW9uKCB5ICkge1xuICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICByZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24gJiYgaXNIb3Jpem9udGFsID9cbiAgICAoICggeSAvIHRoaXMubGF5b3V0LnNpemUuaGVpZ2h0ICkgKiAxMDAgKSArICclJyA6IHkgKyAncHgnO1xufTtcblxucHJvdG8uX3RyYW5zaXRpb25UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gIC8vIGdldCBjdXJyZW50IHggJiB5IGZyb20gdG9wL2xlZnRcbiAgdmFyIGN1clggPSB0aGlzLnBvc2l0aW9uLng7XG4gIHZhciBjdXJZID0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIHZhciBkaWROb3RNb3ZlID0geCA9PSB0aGlzLnBvc2l0aW9uLnggJiYgeSA9PSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgLy8gc2F2ZSBlbmQgcG9zaXRpb25cbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuXG4gIC8vIGlmIGRpZCBub3QgbW92ZSBhbmQgbm90IHRyYW5zaXRpb25pbmcsIGp1c3QgZ28gdG8gbGF5b3V0XG4gIGlmICggZGlkTm90TW92ZSAmJiAhdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmFuc1ggPSB4IC0gY3VyWDtcbiAgdmFyIHRyYW5zWSA9IHkgLSBjdXJZO1xuICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge307XG4gIHRyYW5zaXRpb25TdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldFRyYW5zbGF0ZSggdHJhbnNYLCB0cmFuc1kgKTtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIHRvOiB0cmFuc2l0aW9uU3R5bGUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMubGF5b3V0UG9zaXRpb25cbiAgICB9LFxuICAgIGlzQ2xlYW5pbmc6IHRydWVcbiAgfSk7XG59O1xuXG5wcm90by5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgLy8gZmxpcCBjb29yaWRpbmF0ZXMgaWYgb3JpZ2luIG9uIHJpZ2h0IG9yIGJvdHRvbVxuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgeCA9IGlzT3JpZ2luTGVmdCA/IHggOiAteDtcbiAgeSA9IGlzT3JpZ2luVG9wID8geSA6IC15O1xuICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgMCknO1xufTtcblxuLy8gbm9uIHRyYW5zaXRpb24gKyB0cmFuc2Zvcm0gc3VwcG9ydFxucHJvdG8uZ29UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnNldFBvc2l0aW9uKCB4LCB5ICk7XG4gIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbn07XG5cbnByb3RvLm1vdmVUbyA9IHByb3RvLl90cmFuc2l0aW9uVG87XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMucG9zaXRpb24ueCA9IHBhcnNlRmxvYXQoIHggKTtcbiAgdGhpcy5wb3NpdGlvbi55ID0gcGFyc2VGbG9hdCggeSApO1xufTtcblxuLy8gLS0tLS0gdHJhbnNpdGlvbiAtLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSAtIENTU1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kXG4gKi9cblxuLy8gbm9uIHRyYW5zaXRpb24sIGp1c3QgdHJpZ2dlciBjYWxsYmFja1xucHJvdG8uX25vblRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcbiAgaWYgKCBhcmdzLmlzQ2xlYW5pbmcgKSB7XG4gICAgdGhpcy5fcmVtb3ZlU3R5bGVzKCBhcmdzLnRvICk7XG4gIH1cbiAgZm9yICggdmFyIHByb3AgaW4gYXJncy5vblRyYW5zaXRpb25FbmQgKSB7XG4gICAgYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbi8qKlxuICogcHJvcGVyIHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gYXJndW1lbnRzXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSB0byAtIHN0eWxlIHRvIHRyYW5zaXRpb24gdG9cbiAqICAgQHBhcmFtIHtPYmplY3R9IGZyb20gLSBzdHlsZSB0byBzdGFydCB0cmFuc2l0aW9uIGZyb21cbiAqICAgQHBhcmFtIHtCb29sZWFufSBpc0NsZWFuaW5nIC0gcmVtb3ZlcyB0cmFuc2l0aW9uIHN0eWxlcyBhZnRlciB0cmFuc2l0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZCAtIGNhbGxiYWNrXG4gKi9cbnByb3RvLnRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgLy8gcmVkaXJlY3QgdG8gbm9uVHJhbnNpdGlvbiBpZiBubyB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gIGlmICggIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5fbm9uVHJhbnNpdGlvbiggYXJncyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8ga2VlcCB0cmFjayBvZiBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2sgYnkgY3NzIHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wIF0gPSBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdO1xuICB9XG4gIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIGZvciAoIHByb3AgaW4gYXJncy50byApIHtcbiAgICBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wIF0gPSB0cnVlO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0byBjbGVhbiB1cCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgICAgX3RyYW5zaXRpb24uY2xlYW5bIHByb3AgXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGZyb20gc3R5bGVzXG4gIGlmICggYXJncy5mcm9tICkge1xuICAgIHRoaXMuY3NzKCBhcmdzLmZyb20gKTtcbiAgICAvLyBmb3JjZSByZWRyYXcuIGh0dHA6Ly9ibG9nLmFsZXhtYWNjYXcuY29tL2Nzcy10cmFuc2l0aW9uc1xuICAgIHZhciBoID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAvLyBoYWNrIGZvciBKU0hpbnQgdG8gaHVzaCBhYm91dCB1bnVzZWQgdmFyXG4gICAgaCA9IG51bGw7XG4gIH1cbiAgLy8gZW5hYmxlIHRyYW5zaXRpb25cbiAgdGhpcy5lbmFibGVUcmFuc2l0aW9uKCBhcmdzLnRvICk7XG4gIC8vIHNldCBzdHlsZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICB0aGlzLmNzcyggYXJncy50byApO1xuXG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxufTtcblxuLy8gZGFzaCBiZWZvcmUgYWxsIGNhcCBsZXR0ZXJzLCBpbmNsdWRpbmcgZmlyc3QgZm9yXG4vLyBXZWJraXRUcmFuc2Zvcm0gPT4gLXdlYmtpdC10cmFuc2Zvcm1cbmZ1bmN0aW9uIHRvRGFzaGVkQWxsKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyhbQS1aXSkvZywgZnVuY3Rpb24oICQxICkge1xuICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb25Qcm9wcyA9ICdvcGFjaXR5LCcgKyB0b0Rhc2hlZEFsbCggdHJhbnNmb3JtUHJvcGVydHkgKTtcblxucHJvdG8uZW5hYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKC8qIHN0eWxlICovKSB7XG4gIC8vIEhBQ0sgY2hhbmdpbmcgdHJhbnNpdGlvblByb3BlcnR5IGR1cmluZyBhIHRyYW5zaXRpb25cbiAgLy8gd2lsbCBjYXVzZSB0cmFuc2l0aW9uIHRvIGp1bXBcbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBtYWtlIGB0cmFuc2l0aW9uOiBmb28sIGJhciwgYmF6YCBmcm9tIHN0eWxlIG9iamVjdFxuICAvLyBIQUNLIHVuLWNvbW1lbnQgdGhpcyB3aGVuIGVuYWJsZVRyYW5zaXRpb24gY2FuIHdvcmtcbiAgLy8gd2hpbGUgYSB0cmFuc2l0aW9uIGlzIGhhcHBlbmluZ1xuICAvLyB2YXIgdHJhbnNpdGlvblZhbHVlcyA9IFtdO1xuICAvLyBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgLy8gICAvLyBkYXNoLWlmeSBjYW1lbENhc2VkIHByb3BlcnRpZXMgbGlrZSBXZWJraXRUcmFuc2l0aW9uXG4gIC8vICAgcHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAvLyAgIHRyYW5zaXRpb25WYWx1ZXMucHVzaCggdG9EYXNoZWRBbGwoIHByb3AgKSApO1xuICAvLyB9XG4gIC8vIG11bmdlIG51bWJlciB0byBtaWxsaXNlY29uZCwgdG8gbWF0Y2ggc3RhZ2dlclxuICB2YXIgZHVyYXRpb24gPSB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgZHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gPT0gJ251bWJlcicgPyBkdXJhdGlvbiArICdtcycgOiBkdXJhdGlvbjtcbiAgLy8gZW5hYmxlIHRyYW5zaXRpb24gc3R5bGVzXG4gIHRoaXMuY3NzKHtcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wcyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHRyYW5zaXRpb25EZWxheTogdGhpcy5zdGFnZ2VyRGVsYXkgfHwgMFxuICB9KTtcbiAgLy8gbGlzdGVuIGZvciB0cmFuc2l0aW9uIGVuZCBldmVudFxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLm9ud2Via2l0VHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbm90cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbi8vIHByb3BlcnRpZXMgdGhhdCBJIG11bmdlIHRvIG1ha2UgbXkgbGlmZSBlYXNpZXJcbnZhciBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzID0ge1xuICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNmb3JtJ1xufTtcblxucHJvdG8ub250cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBkaXNyZWdhcmQgYnViYmxlZCBldmVudHMgZnJvbSBjaGlsZHJlblxuICBpZiAoIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGdldCBwcm9wZXJ0eSBuYW1lIG9mIHRyYW5zaXRpb25lZCBwcm9wZXJ0eSwgY29udmVydCB0byBwcmVmaXgtZnJlZVxuICB2YXIgcHJvcGVydHlOYW1lID0gZGFzaGVkVmVuZG9yUHJvcGVydGllc1sgZXZlbnQucHJvcGVydHlOYW1lIF0gfHwgZXZlbnQucHJvcGVydHlOYW1lO1xuXG4gIC8vIHJlbW92ZSBwcm9wZXJ0eSB0aGF0IGhhcyBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICBkZWxldGUgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcGVydHlOYW1lIF07XG4gIC8vIGNoZWNrIGlmIGFueSBwcm9wZXJ0aWVzIGFyZSBzdGlsbCB0cmFuc2l0aW9uaW5nXG4gIGlmICggaXNFbXB0eU9iaiggX3RyYW5zaXRpb24uaW5nUHJvcGVydGllcyApICkge1xuICAgIC8vIGFsbCBwcm9wZXJ0aWVzIGhhdmUgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgICB0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7XG4gIH1cbiAgLy8gY2xlYW4gc3R5bGVcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24uY2xlYW4gKSB7XG4gICAgLy8gY2xlYW4gdXAgc3R5bGVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbIGV2ZW50LnByb3BlcnR5TmFtZSBdID0gJyc7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuICAvLyB0cmlnZ2VyIG9uVHJhbnNpdGlvbkVuZCBjYWxsYmFja1xuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5vbkVuZCApIHtcbiAgICB2YXIgb25UcmFuc2l0aW9uRW5kID0gX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICAgIG9uVHJhbnNpdGlvbkVuZC5jYWxsKCB0aGlzICk7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuXG4gIHRoaXMuZW1pdEV2ZW50KCAndHJhbnNpdGlvbkVuZCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogcmVtb3ZlcyBzdHlsZSBwcm9wZXJ0eSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuKiovXG5wcm90by5fcmVtb3ZlU3R5bGVzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICAvLyBjbGVhbiB1cCB0cmFuc2l0aW9uIHN0eWxlc1xuICB2YXIgY2xlYW5TdHlsZSA9IHt9O1xuICBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgICBjbGVhblN0eWxlWyBwcm9wIF0gPSAnJztcbiAgfVxuICB0aGlzLmNzcyggY2xlYW5TdHlsZSApO1xufTtcblxudmFyIGNsZWFuVHJhbnNpdGlvblN0eWxlID0ge1xuICB0cmFuc2l0aW9uUHJvcGVydHk6ICcnLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICcnLFxuICB0cmFuc2l0aW9uRGVsYXk6ICcnXG59O1xuXG5wcm90by5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSB0cmFuc2l0aW9uXG4gIHRoaXMuY3NzKCBjbGVhblRyYW5zaXRpb25TdHlsZSApO1xufTtcblxuLy8gLS0tLS0gc3RhZ2dlciAtLS0tLSAvL1xuXG5wcm90by5zdGFnZ2VyID0gZnVuY3Rpb24oIGRlbGF5ICkge1xuICBkZWxheSA9IGlzTmFOKCBkZWxheSApID8gMCA6IGRlbGF5O1xuICB0aGlzLnN0YWdnZXJEZWxheSA9IGRlbGF5ICsgJ21zJztcbn07XG5cbi8vIC0tLS0tIHNob3cvaGlkZS9yZW1vdmUgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGVsZW1lbnQgZnJvbSBET01cbnByb3RvLnJlbW92ZUVsZW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLmVtaXRFdmVudCggJ3JlbW92ZScsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgLy8ganVzdCByZW1vdmUgZWxlbWVudCBpZiBubyB0cmFuc2l0aW9uIHN1cHBvcnQgb3Igbm8gdHJhbnNpdGlvblxuICBpZiAoICF0cmFuc2l0aW9uUHJvcGVydHkgfHwgIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc3RhcnQgdHJhbnNpdGlvblxuICB0aGlzLm9uY2UoICd0cmFuc2l0aW9uRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gIH0pO1xuICB0aGlzLmhpZGUoKTtcbn07XG5cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5pc0hpZGRlbjtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCd2aXNpYmxlU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25SZXZlYWxUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICB0bzogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCB2aXNpYmxlXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gaGlkZGVuXG4gIGlmICggIXRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ3JldmVhbCcpO1xuICB9XG59O1xuXG4vKipcbiAqIGdldCBzdHlsZSBwcm9wZXJ0eSB1c2UgZm9yIGhpZGUvcmV2ZWFsIHRyYW5zaXRpb24gZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVQcm9wZXJ0eSAtIGhpZGRlblN0eWxlL3Zpc2libGVTdHlsZVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xucHJvdG8uZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IGZ1bmN0aW9uKCBzdHlsZVByb3BlcnR5ICkge1xuICB2YXIgb3B0aW9uU3R5bGUgPSB0aGlzLmxheW91dC5vcHRpb25zWyBzdHlsZVByb3BlcnR5IF07XG4gIC8vIHVzZSBvcGFjaXR5XG4gIGlmICggb3B0aW9uU3R5bGUub3BhY2l0eSApIHtcbiAgICByZXR1cm4gJ29wYWNpdHknO1xuICB9XG4gIC8vIGdldCBmaXJzdCBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBvcHRpb25TdHlsZSApIHtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxucHJvdG8uaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBzZXQgZmxhZ1xuICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCdoaWRkZW5TdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vbkhpZGVUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgdG86IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgLy8ga2VlcCBoaWRkZW4gc3R1ZmYgaGlkZGVuXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uSGlkZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgaGlkZGVuXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gdW4taGlkZGVuXG4gIGlmICggdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmNzcyh7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgICB0aGlzLmVtaXRFdmVudCgnaGlkZScpO1xuICB9XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogJycsXG4gICAgbGVmdDogJycsXG4gICAgcmlnaHQ6ICcnLFxuICAgIHRvcDogJycsXG4gICAgYm90dG9tOiAnJyxcbiAgICB0cmFuc2l0aW9uOiAnJyxcbiAgICB0cmFuc2Zvcm06ICcnXG4gIH0pO1xufTtcblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcbiIsICIvKiFcbiAqIE91dGxheWVyIHYyLjEuMVxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIHZhciBpc0luaXRMYXlvdXQgPSB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKTtcbiAgaWYgKCBpc0luaXRMYXlvdXQgKSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuXG4vLyBzZXR0aW5ncyBhcmUgZm9yIGludGVybmFsIHVzZSBvbmx5XG5PdXRsYXllci5uYW1lc3BhY2UgPSAnb3V0bGF5ZXInO1xuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT3V0bGF5ZXIuZGVmYXVsdHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaW5pdExheW91dDogdHJ1ZSxcbiAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgb3JpZ2luVG9wOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHJlc2l6ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgLy8gaXRlbSBvcHRpb25zXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICBoaWRkZW5TdHlsZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4wMDEpJ1xuICB9LFxuICB2aXNpYmxlU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59O1xuXG52YXIgcHJvdG8gPSBPdXRsYXllci5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIHNldCBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8qKlxuICogZ2V0IGJhY2t3YXJkcyBjb21wYXRpYmxlIG9wdGlvbiB2YWx1ZSwgY2hlY2sgb2xkIG5hbWVcbiAqL1xucHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gIHZhciBvbGRPcHRpb24gPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbIG9wdGlvbiBdO1xuICByZXR1cm4gb2xkT3B0aW9uICYmIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSA6IHRoaXMub3B0aW9uc1sgb3B0aW9uIF07XG59O1xuXG5PdXRsYXllci5jb21wYXRPcHRpb25zID0ge1xuICAvLyBjdXJyZW50TmFtZTogb2xkTmFtZVxuICBpbml0TGF5b3V0OiAnaXNJbml0TGF5b3V0JyxcbiAgaG9yaXpvbnRhbDogJ2lzSG9yaXpvbnRhbCcsXG4gIGxheW91dEluc3RhbnQ6ICdpc0xheW91dEluc3RhbnQnLFxuICBvcmlnaW5MZWZ0OiAnaXNPcmlnaW5MZWZ0JyxcbiAgb3JpZ2luVG9wOiAnaXNPcmlnaW5Ub3AnLFxuICByZXNpemU6ICdpc1Jlc2l6ZUJvdW5kJyxcbiAgcmVzaXplQ29udGFpbmVyOiAnaXNSZXNpemluZ0NvbnRhaW5lcidcbn07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGl0ZW1zIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAvLyBlbGVtZW50cyB0aGF0IGFmZmVjdCBsYXlvdXQsIGJ1dCBhcmUgbm90IGxhaWQgb3V0XG4gIHRoaXMuc3RhbXBzID0gW107XG4gIHRoaXMuc3RhbXAoIHRoaXMub3B0aW9ucy5zdGFtcCApO1xuICAvLyBzZXQgY29udGFpbmVyIHN0eWxlXG4gIHV0aWxzLmV4dGVuZCggdGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUgKTtcblxuICAvLyBiaW5kIHJlc2l6ZSBtZXRob2RcbiAgdmFyIGNhbkJpbmRSZXNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZScpO1xuICBpZiAoIGNhbkJpbmRSZXNpemUgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxucHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtaXplKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbn07XG5cblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gT3V0bGF5ZXIuSXRlbXMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgT3V0bGF5ZXIgSXRlbXNcbiAqL1xucHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG5cbiAgdmFyIGl0ZW1FbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMoIGVsZW1zICk7XG4gIHZhciBJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5JdGVtO1xuXG4gIC8vIGNyZWF0ZSBuZXcgT3V0bGF5ZXIgSXRlbXMgZm9yIGNvbGxlY3Rpb25cbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBpdGVtRWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSBuZXcgSXRlbSggZWxlbSwgdGhpcyApO1xuICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gZWxlbWVudHMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgKTtcbn07XG5cbi8qKlxuICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBpdGVtIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gaW5pdCAmIGxheW91dCAtLS0tLSAvL1xuXG4vKipcbiAqIGxheXMgb3V0IGFsbCBpdGVtc1xuICovXG5wcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGxheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgdmFyIGlzSW5zdGFudCA9IGxheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgbGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5wcm90by5faW5pdCA9IHByb3RvLmxheW91dDtcblxuLyoqXG4gKiBsb2dpYyBiZWZvcmUgYW55IG5ldyBsYXlvdXRcbiAqL1xucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBnZXQgbWVhc3VyZW1lbnQgZnJvbSBvcHRpb24sIGZvciBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCBndXR0ZXJcbiAqIGlmIG9wdGlvbiBpcyBTdHJpbmcgLT4gZ2V0IGVsZW1lbnQgZnJvbSBzZWxlY3RvciBzdHJpbmcsICYgZ2V0IHNpemUgb2YgZWxlbWVudFxuICogaWYgb3B0aW9uIGlzIEVsZW1lbnQgLT4gZ2V0IHNpemUgb2YgZWxlbWVudFxuICogZWxzZSB1c2Ugb3B0aW9uIGFzIGEgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lYXN1cmVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIHdpZHRoIG9yIGhlaWdodFxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oIG1lYXN1cmVtZW50LCBzaXplICkge1xuICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zWyBtZWFzdXJlbWVudCBdO1xuICB2YXIgZWxlbTtcbiAgaWYgKCAhb3B0aW9uICkge1xuICAgIC8vIGRlZmF1bHQgdG8gMFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBvcHRpb24gYXMgYW4gZWxlbWVudFxuICAgIGlmICggdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggb3B0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG4gICAgICBlbGVtID0gb3B0aW9uO1xuICAgIH1cbiAgICAvLyB1c2Ugc2l6ZSBvZiBlbGVtZW50LCBpZiBlbGVtZW50XG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IGVsZW0gPyBnZXRTaXplKCBlbGVtIClbIHNpemUgXSA6IG9wdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBsYXlvdXQgYSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqIEBhcGkgcHVibGljXG4gKi9cbnByb3RvLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xucHJvdG8uX2dldEl0ZW1zRm9yTGF5b3V0ID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gIWl0ZW0uaXNJZ25vcmVkO1xuICB9KTtcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xucHJvdG8uX2xheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdsYXlvdXQnLCBpdGVtcyApO1xuXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgLy8gbm8gaXRlbXMsIGVtaXQgZXZlbnQgd2l0aCBlbXB0eSBhcnJheVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IFtdO1xuXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIC8qIGl0ZW0gKi8gKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuXG4vKipcbiAqIGl0ZXJhdGUgb3ZlciBhcnJheSBhbmQgcG9zaXRpb24gZWFjaCBpdGVtXG4gKiBSZWFzb24gYmVpbmcgLSBzZXBhcmF0aW5nIHRoaXMgbG9naWMgcHJldmVudHMgJ2xheW91dCBpbnZhbGlkYXRpb24nXG4gKiB0aHggQHBhdWxfaXJpc2hcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cbnByb3RvLl9wcm9jZXNzTGF5b3V0UXVldWUgPSBmdW5jdGlvbiggcXVldWUgKSB7XG4gIHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBxdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggb2JqLCBpICkge1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCwgaSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyBzZXQgc3RhZ2dlciBmcm9tIG9wdGlvbiBpbiBtaWxsaXNlY29uZHMgbnVtYmVyXG5wcm90by51cGRhdGVTdGFnZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFnZ2VyID0gdGhpcy5vcHRpb25zLnN0YWdnZXI7XG4gIGlmICggc3RhZ2dlciA9PT0gbnVsbCB8fCBzdGFnZ2VyID09PSB1bmRlZmluZWQgKSB7XG4gICAgdGhpcy5zdGFnZ2VyID0gMDtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5zdGFnZ2VyID0gZ2V0TWlsbGlzZWNvbmRzKCBzdGFnZ2VyICk7XG4gIHJldHVybiB0aGlzLnN0YWdnZXI7XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbnByb3RvLl9wb3NpdGlvbkl0ZW0gPSBmdW5jdGlvbiggaXRlbSwgeCwgeSwgaXNJbnN0YW50LCBpICkge1xuICBpZiAoIGlzSW5zdGFudCApIHtcbiAgICAvLyBpZiBub3QgdHJhbnNpdGlvbiwganVzdCBzZXQgQ1NTXG4gICAgaXRlbS5nb1RvKCB4LCB5ICk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogdGhpcy5zdGFnZ2VyICk7XG4gICAgaXRlbS5tb3ZlVG8oIHgsIHkgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbnkgbG9naWMgeW91IHdhbnQgdG8gZG8gYWZ0ZXIgZWFjaCBsYXlvdXQsXG4gKiBpLmUuIHNpemUgdGhlIGNvbnRhaW5lclxuICovXG5wcm90by5fcG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xufTtcblxucHJvdG8ucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1Jlc2l6aW5nQ29udGFpbmVyID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemVDb250YWluZXInKTtcbiAgaWYgKCAhaXNSZXNpemluZ0NvbnRhaW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNpemUgPSB0aGlzLl9nZXRDb250YWluZXJTaXplKCk7XG4gIGlmICggc2l6ZSApIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLndpZHRoLCB0cnVlICk7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS5oZWlnaHQsIGZhbHNlICk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB3aWR0aCBvciBoZWlnaHQgb2YgY29udGFpbmVyIGlmIHJldHVybmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBzaXplXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogICBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKi9cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xucHJvdG8uX3NldENvbnRhaW5lck1lYXN1cmUgPSBmdW5jdGlvbiggbWVhc3VyZSwgaXNXaWR0aCApIHtcbiAgaWYgKCBtZWFzdXJlID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1TaXplID0gdGhpcy5zaXplO1xuICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoIGlmIGJvcmRlciBib3hcbiAgaWYgKCBlbGVtU2l6ZS5pc0JvcmRlckJveCApIHtcbiAgICBtZWFzdXJlICs9IGlzV2lkdGggPyBlbGVtU2l6ZS5wYWRkaW5nTGVmdCArIGVsZW1TaXplLnBhZGRpbmdSaWdodCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJSaWdodFdpZHRoIDpcbiAgICAgIGVsZW1TaXplLnBhZGRpbmdCb3R0b20gKyBlbGVtU2l6ZS5wYWRkaW5nVG9wICtcbiAgICAgIGVsZW1TaXplLmJvcmRlclRvcFdpZHRoICsgZWxlbVNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBtZWFzdXJlID0gTWF0aC5tYXgoIG1lYXN1cmUsIDAgKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBpc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBtZWFzdXJlICsgJ3B4Jztcbn07XG5cbi8qKlxuICogZW1pdCBldmVudENvbXBsZXRlIG9uIGEgY29sbGVjdGlvbiBvZiBpdGVtcyBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uX2VtaXRDb21wbGV0ZU9uSXRlbXMgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBpdGVtcyApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCBldmVudE5hbWUgKyAnQ29tcGxldGUnLCBudWxsLCBbIGl0ZW1zIF0gKTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgaWYgKCAhaXRlbXMgfHwgIWNvdW50ICkge1xuICAgIG9uQ29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZG9uZUNvdW50ID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkb25lQ291bnQrKztcbiAgICBpZiAoIGRvbmVDb3VudCA9PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ub25jZSggZXZlbnROYW1lLCB0aWNrICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIEV2RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIC8vIGFkZCBvcmlnaW5hbCBldmVudCB0byBhcmd1bWVudHNcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSApIHtcbiAgICAvLyBzZXQgdGhpcy4kZWxlbWVudFxuICAgIHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50IHx8IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gICAgaWYgKCBldmVudCApIHtcbiAgICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAgIHZhciAkZXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICAkZXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50IGF2YWlsYWJsZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCB0eXBlLCBhcmdzICk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpZ25vcmUgJiBzdGFtcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG4vKipcbiAqIGtlZXAgaXRlbSBpbiBjb2xsZWN0aW9uLCBidXQgZG8gbm90IGxheSBpdCBvdXRcbiAqIGlnbm9yZWQgaXRlbXMgZG8gbm90IGdldCBza2lwcGVkIGluIGxheW91dFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5pc0lnbm9yZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBpdGVtIHRvIGxheW91dCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8udW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xucHJvdG8uc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGFtcHMgPSB0aGlzLnN0YW1wcy5jb25jYXQoIGVsZW1zICk7XG4gIC8vIGlnbm9yZVxuICBlbGVtcy5mb3JFYWNoKCB0aGlzLmlnbm9yZSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHJlbW92ZWQgc3RhbXAgZWxlbWVudHNcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLnN0YW1wcywgZWxlbSApO1xuICAgIHRoaXMudW5pZ25vcmUoIGVsZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiBmaW5kcyBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXNcbiAqL1xucHJvdG8uX2ZpbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBzdHJpbmcsIHVzZSBhcmd1bWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbXMgPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxucHJvdG8uX21hbmFnZVN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLnN0YW1wcyB8fCAhdGhpcy5zdGFtcHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuXG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIHRoaXMuX21hbmFnZVN0YW1wLCB0aGlzICk7XG59O1xuXG4vLyB1cGRhdGUgYm91bmRpbmdMZWZ0IC8gVG9wXG5wcm90by5fZ2V0Qm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBib3VuZGluZyByZWN0IGZvciBjb250YWluZXIgZWxlbWVudFxuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5fYm91bmRpbmdSZWN0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUuYm9yZGVyTGVmdFdpZHRoLFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIHNpemUucGFkZGluZ1RvcCArIHNpemUuYm9yZGVyVG9wV2lkdGgsXG4gICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtICggc2l6ZS5wYWRkaW5nUmlnaHQgKyBzaXplLmJvcmRlclJpZ2h0V2lkdGggKSxcbiAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSAoIHNpemUucGFkZGluZ0JvdHRvbSArIHNpemUuYm9yZGVyQm90dG9tV2lkdGggKVxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YW1wXG4qKi9cbnByb3RvLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xucHJvdG8uX2dldEVsZW1lbnRPZmZzZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB0aGlzUmVjdCA9IHRoaXMuX2JvdW5kaW5nUmVjdDtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciBvZmZzZXQgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0aGlzUmVjdC5sZWZ0IC0gc2l6ZS5tYXJnaW5MZWZ0LFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRoaXNSZWN0LnRvcCAtIHNpemUubWFyZ2luVG9wLFxuICAgIHJpZ2h0OiB0aGlzUmVjdC5yaWdodCAtIGJvdW5kaW5nUmVjdC5yaWdodCAtIHNpemUubWFyZ2luUmlnaHQsXG4gICAgYm90dG9tOiB0aGlzUmVjdC5ib3R0b20gLSBib3VuZGluZ1JlY3QuYm90dG9tIC0gc2l6ZS5tYXJnaW5Cb3R0b21cbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBlbmFibGUgZXZlbnQgaGFuZGxlcnMgZm9yIGxpc3RlbmVyc1xuLy8gaS5lLiByZXNpemUgLT4gb25yZXNpemVcbnByb3RvLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbi8qKlxuICogQmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLnVuYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gZmFsc2U7XG59O1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIE91dGxheWVyLCAnb25yZXNpemUnLCAxMDAgKTtcblxucHJvdG8ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAvLyBvciBpZiByZXNpemUgd2FzIHVuYm91bmQuIFNlZSAjOVxuICBpZiAoICF0aGlzLmlzUmVzaXplQm91bmQgfHwgIXRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmxheW91dCgpO1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gIHZhciBoYXNTaXplcyA9IHRoaXMuc2l6ZSAmJiBzaXplO1xuICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lcldpZHRoICE9PSB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBhZGQgaXRlbXMgdG8gT3V0bGF5ZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuKiovXG5wcm90by5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbGF5b3V0IGFuZCByZXZlYWwganVzdCB0aGUgbmV3IGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgcHJlcGVuZGVkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgaXRlbXMgdG8gYmVnaW5uaW5nIG9mIGNvbGxlY3Rpb25cbiAgdmFyIHByZXZpb3VzSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDApO1xuICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCBwcmV2aW91c0l0ZW1zICk7XG4gIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gIC8vIGxheW91dCBuZXcgc3R1ZmYgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xuICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggcHJldmlvdXNJdGVtcyApO1xufTtcblxuLyoqXG4gKiByZXZlYWwgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5yZXZlYWwoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5oaWRlID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnaGlkZScsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGhpZGUgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5wcm90by5nZXRJdGVtID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyB0byBnZXQgdGhlIG9uZSB0aGF0IG1hdGNoZXNcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09IGVsZW0gKSB7XG4gICAgICAvLyByZXR1cm4gaXRlbVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIE91dGxheWVyLkl0ZW1zLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5nZXRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIHJlbW92ZSBlbGVtZW50KHMpIGZyb20gaW5zdGFuY2UgYW5kIERPTVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG5cbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JlbW92ZScsIHJlbW92ZUl0ZW1zICk7XG5cbiAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgaWYgKCAhcmVtb3ZlSXRlbXMgfHwgIXJlbW92ZUl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuaXRlbXMsIGl0ZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gZGVzdHJveSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgYW5kIGRpc2FibGUgT3V0bGF5ZXIgaW5zdGFuY2VcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2xlYW4gdXAgZHluYW1pYyBzdHlsZXNcbiAgdmFyIHN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgc3R5bGUucG9zaXRpb24gPSAnJztcbiAgc3R5bGUud2lkdGggPSAnJztcbiAgLy8gZGVzdHJveSBpdGVtc1xuICB0aGlzLml0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9KTtcblxuICB0aGlzLnVuYmluZFJlc2l6ZSgpO1xuXG4gIHZhciBpZCA9IHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIGlkIF07IC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgYnkgaWRcbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIC8vIHJlbW92ZSBkYXRhIGZvciBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgKTtcbiAgfVxuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IE91dGxheWVyIGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXJ9XG4gKi9cbk91dGxheWVyLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0ub3V0bGF5ZXJHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgT3V0bGF5ZXIgY2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjcmVhdGUgYSBsYXlvdXQgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqL1xuT3V0bGF5ZXIuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcbiAgLy8gc3ViLWNsYXNzIE91dGxheWVyXG4gIHZhciBMYXlvdXQgPSBzdWJjbGFzcyggT3V0bGF5ZXIgKTtcbiAgLy8gYXBwbHkgbmV3IG9wdGlvbnMgYW5kIGNvbXBhdE9wdGlvbnNcbiAgTGF5b3V0LmRlZmF1bHRzID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuZGVmYXVsdHMgKTtcbiAgdXRpbHMuZXh0ZW5kKCBMYXlvdXQuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgTGF5b3V0LmNvbXBhdE9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5jb21wYXRPcHRpb25zICApO1xuXG4gIExheW91dC5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgTGF5b3V0LmRhdGEgPSBPdXRsYXllci5kYXRhO1xuXG4gIC8vIHN1Yi1jbGFzcyBJdGVtXG4gIExheW91dC5JdGVtID0gc3ViY2xhc3MoIEl0ZW0gKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBzdWJjbGFzcyggUGFyZW50ICkge1xuICBmdW5jdGlvbiBTdWJDbGFzcygpIHtcbiAgICBQYXJlbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG5cbiAgU3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUGFyZW50LnByb3RvdHlwZSApO1xuICBTdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJDbGFzcztcblxuICByZXR1cm4gU3ViQ2xhc3M7XG59XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuLy8gaG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBpbiBlYWNoIHVuaXRcbnZhciBtc1VuaXRzID0ge1xuICBtczogMSxcbiAgczogMTAwMFxufTtcblxuLy8gbXVuZ2UgdGltZS1saWtlIHBhcmFtZXRlciBpbnRvIG1pbGxpc2Vjb25kIG51bWJlclxuLy8gJzAuNHMnIC0+IDQwXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoIHRpbWUgKSB7XG4gIGlmICggdHlwZW9mIHRpbWUgPT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgdmFyIG1hdGNoZXMgPSB0aW1lLm1hdGNoKCAvKF5cXGQqXFwuP1xcZCopKFxcdyopLyApO1xuICB2YXIgbnVtID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICB2YXIgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgaWYgKCAhbnVtLmxlbmd0aCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBudW0gPSBwYXJzZUZsb2F0KCBudW0gKTtcbiAgdmFyIG11bHQgPSBtc1VuaXRzWyB1bml0IF0gfHwgMTtcbiAgcmV0dXJuIG51bSAqIG11bHQ7XG59XG5cbi8vIC0tLS0tIGZpbiAtLS0tLSAvL1xuXG4vLyBiYWNrIGluIGdsb2JhbFxuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbnJldHVybiBPdXRsYXllcjtcblxufSkpO1xuIiwgIi8qIVxuICogTWFzb25yeSB2NC4yLjJcbiAqIENhc2NhZGluZyBncmlkIGxheW91dCBsaWJyYXJ5XG4gKiBodHRwczovL21hc29ucnkuZGVzYW5kcm8uY29tXG4gKiBNSVQgTGljZW5zZVxuICogYnkgRGF2aWQgRGVTYW5kcm9cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5NYXNvbnJ5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyLCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeSA9IE91dGxheWVyLmNyZWF0ZSgnbWFzb25yeScpO1xuICAvLyBpc0ZpdFdpZHRoIC0+IGZpdFdpZHRoXG4gIE1hc29ucnkuY29tcGF0T3B0aW9ucy5maXRXaWR0aCA9ICdpc0ZpdFdpZHRoJztcblxuICB2YXIgcHJvdG8gPSBNYXNvbnJ5LnByb3RvdHlwZTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLm1lYXN1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyByZXNldCBjb2x1bW4gWVxuICAgIHRoaXMuY29sWXMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jb2xzOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzLnB1c2goIDAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heFkgPSAwO1xuICAgIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ID0gMDtcbiAgfTtcblxuICBwcm90by5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICAvLyBpZiBjb2x1bW5XaWR0aCBpcyAwLCBkZWZhdWx0IHRvIG91dGVyV2lkdGggb2YgZmlyc3QgaXRlbVxuICAgIGlmICggIXRoaXMuY29sdW1uV2lkdGggKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICAgIHZhciBmaXJzdEl0ZW1FbGVtID0gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50O1xuICAgICAgLy8gY29sdW1uV2lkdGggZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IGZpcnN0SXRlbUVsZW0gJiYgZ2V0U2l6ZSggZmlyc3RJdGVtRWxlbSApLm91dGVyV2lkdGggfHxcbiAgICAgICAgLy8gaWYgZmlyc3QgZWxlbSBoYXMgbm8gd2lkdGgsIGRlZmF1bHQgdG8gc2l6ZSBvZiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICs9IHRoaXMuZ3V0dGVyO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNvbHVtbnNcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgdmFyIGNvbHMgPSBjb250YWluZXJXaWR0aCAvIGNvbHVtbldpZHRoO1xuICAgIC8vIGZpeCByb3VuZGluZyBlcnJvcnMsIHR5cGljYWxseSB3aXRoIGd1dHRlcnNcbiAgICB2YXIgZXhjZXNzID0gY29sdW1uV2lkdGggLSBjb250YWluZXJXaWR0aCAlIGNvbHVtbldpZHRoO1xuICAgIC8vIGlmIG92ZXJzaG9vdCBpcyBsZXNzIHRoYW4gYSBwaXhlbCwgcm91bmQgdXAsIG90aGVyd2lzZSBmbG9vciBpdFxuICAgIHZhciBtYXRoTWV0aG9kID0gZXhjZXNzICYmIGV4Y2VzcyA8IDEgPyAncm91bmQnIDogJ2Zsb29yJztcbiAgICBjb2xzID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBjb2xzICk7XG4gICAgdGhpcy5jb2xzID0gTWF0aC5tYXgoIGNvbHMsIDEgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb250YWluZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnRhaW5lciBpcyBwYXJlbnQgaWYgZml0IHdpZHRoXG4gICAgdmFyIGlzRml0V2lkdGggPSB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGlzRml0V2lkdGggPyB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSA6IHRoaXMuZWxlbWVudDtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCBjb250YWluZXIgKTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gc2l6ZSAmJiBzaXplLmlubmVyV2lkdGg7XG4gIH07XG5cbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IGNvbHVtbnMgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVyV2lkdGggJSB0aGlzLmNvbHVtbldpZHRoO1xuICAgIHZhciBtYXRoTWV0aG9kID0gcmVtYWluZGVyICYmIHJlbWFpbmRlciA8IDEgPyAncm91bmQnIDogJ2NlaWwnO1xuICAgIC8vIHJvdW5kIGlmIG9mZiBieSAxIHBpeGVsLCBvdGhlcndpc2UgdXNlIGNlaWxcbiAgICB2YXIgY29sU3BhbiA9IE1hdGhbIG1hdGhNZXRob2QgXSggaXRlbS5zaXplLm91dGVyV2lkdGggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgY29sU3BhbiA9IE1hdGgubWluKCBjb2xTcGFuLCB0aGlzLmNvbHMgKTtcbiAgICAvLyB1c2UgaG9yaXpvbnRhbCBvciB0b3AgY29sdW1uIHBvc2l0aW9uXG4gICAgdmFyIGNvbFBvc01ldGhvZCA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsT3JkZXIgP1xuICAgICAgJ19nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24nIDogJ19nZXRUb3BDb2xQb3NpdGlvbic7XG4gICAgdmFyIGNvbFBvc2l0aW9uID0gdGhpc1sgY29sUG9zTWV0aG9kIF0oIGNvbFNwYW4sIGl0ZW0gKTtcbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiB0aGlzLmNvbHVtbldpZHRoICogY29sUG9zaXRpb24uY29sLFxuICAgICAgeTogY29sUG9zaXRpb24ueVxuICAgIH07XG4gICAgLy8gYXBwbHkgc2V0SGVpZ2h0IHRvIG5lY2Vzc2FyeSBjb2x1bW5zXG4gICAgdmFyIHNldEhlaWdodCA9IGNvbFBvc2l0aW9uLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdmFyIHNldE1heCA9IGNvbFNwYW4gKyBjb2xQb3NpdGlvbi5jb2w7XG4gICAgZm9yICggdmFyIGkgPSBjb2xQb3NpdGlvbi5jb2w7IGkgPCBzZXRNYXg7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIHByb3RvLl9nZXRUb3BDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIHZhciBjb2xHcm91cCA9IHRoaXMuX2dldFRvcENvbEdyb3VwKCBjb2xTcGFuICk7XG4gICAgLy8gZ2V0IHRoZSBtaW5pbXVtIFkgdmFsdWUgZnJvbSB0aGUgY29sdW1uc1xuICAgIHZhciBtaW5pbXVtWSA9IE1hdGgubWluLmFwcGx5KCBNYXRoLCBjb2xHcm91cCApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sR3JvdXAuaW5kZXhPZiggbWluaW11bVkgKSxcbiAgICAgIHk6IG1pbmltdW1ZLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2xTcGFuIC0gbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGVsZW1lbnQgc3BhbnNcbiAgICogQHJldHVybnMge0FycmF5fSBjb2xHcm91cFxuICAgKi9cbiAgcHJvdG8uX2dldFRvcENvbEdyb3VwID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIC8vIGlmIGJyaWNrIHNwYW5zIG9ubHkgb25lIGNvbHVtbiwgdXNlIGFsbCB0aGUgY29sdW1uIFlzXG4gICAgICByZXR1cm4gdGhpcy5jb2xZcztcbiAgICB9XG5cbiAgICB2YXIgY29sR3JvdXAgPSBbXTtcbiAgICAvLyBob3cgbWFueSBkaWZmZXJlbnQgcGxhY2VzIGNvdWxkIHRoaXMgYnJpY2sgZml0IGhvcml6b250YWxseVxuICAgIHZhciBncm91cENvdW50ID0gdGhpcy5jb2xzICsgMSAtIGNvbFNwYW47XG4gICAgLy8gZm9yIGVhY2ggZ3JvdXAgcG90ZW50aWFsIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cENvdW50OyBpKysgKSB7XG4gICAgICBjb2xHcm91cFtpXSA9IHRoaXMuX2dldENvbEdyb3VwWSggaSwgY29sU3BhbiApO1xuICAgIH1cbiAgICByZXR1cm4gY29sR3JvdXA7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbEdyb3VwWSA9IGZ1bmN0aW9uKCBjb2wsIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzWyBjb2wgXTtcbiAgICB9XG4gICAgLy8gbWFrZSBhbiBhcnJheSBvZiBjb2xZIHZhbHVlcyBmb3IgdGhhdCBvbmUgZ3JvdXBcbiAgICB2YXIgZ3JvdXBDb2xZcyA9IHRoaXMuY29sWXMuc2xpY2UoIGNvbCwgY29sICsgY29sU3BhbiApO1xuICAgIC8vIGFuZCBnZXQgdGhlIG1heCB2YWx1ZSBvZiB0aGUgYXJyYXlcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIE1hdGgsIGdyb3VwQ29sWXMgKTtcbiAgfTtcblxuICAvLyBnZXQgY29sdW1uIHBvc2l0aW9uIGJhc2VkIG9uIGhvcml6b250YWwgaW5kZXguICM4NzNcbiAgcHJvdG8uX2dldEhvcml6b250YWxDb2xQb3NpdGlvbiA9IGZ1bmN0aW9uKCBjb2xTcGFuLCBpdGVtICkge1xuICAgIHZhciBjb2wgPSB0aGlzLmhvcml6b250YWxDb2xJbmRleCAlIHRoaXMuY29scztcbiAgICB2YXIgaXNPdmVyID0gY29sU3BhbiA+IDEgJiYgY29sICsgY29sU3BhbiA+IHRoaXMuY29scztcbiAgICAvLyBzaGlmdCB0byBuZXh0IHJvdyBpZiBpdGVtIGNhbid0IGZpdCBvbiBjdXJyZW50IHJvd1xuICAgIGNvbCA9IGlzT3ZlciA/IDAgOiBjb2w7XG4gICAgLy8gZG9uJ3QgbGV0IHplcm8tc2l6ZSBpdGVtcyB0YWtlIHVwIHNwYWNlXG4gICAgdmFyIGhhc1NpemUgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAmJiBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSBoYXNTaXplID8gY29sICsgY29sU3BhbiA6IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbDogY29sLFxuICAgICAgeTogdGhpcy5fZ2V0Q29sR3JvdXBZKCBjb2wsIGNvbFNwYW4gKSxcbiAgICB9O1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB2YXIgc3RhbXBTaXplID0gZ2V0U2l6ZSggc3RhbXAgKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICAvLyBnZXQgdGhlIGNvbHVtbnMgdGhhdCB0aGlzIHN0YW1wIGFmZmVjdHNcbiAgICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gICAgdmFyIGZpcnN0WCA9IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0O1xuICAgIHZhciBsYXN0WCA9IGZpcnN0WCArIHN0YW1wU2l6ZS5vdXRlcldpZHRoO1xuICAgIHZhciBmaXJzdENvbCA9IE1hdGguZmxvb3IoIGZpcnN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBmaXJzdENvbCA9IE1hdGgubWF4KCAwLCBmaXJzdENvbCApO1xuICAgIHZhciBsYXN0Q29sID0gTWF0aC5mbG9vciggbGFzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgLy8gbGFzdENvbCBzaG91bGQgbm90IGdvIG92ZXIgaWYgbXVsdGlwbGUgb2YgY29sdW1uV2lkdGggIzQyNVxuICAgIGxhc3RDb2wgLT0gbGFzdFggJSB0aGlzLmNvbHVtbldpZHRoID8gMCA6IDE7XG4gICAgbGFzdENvbCA9IE1hdGgubWluKCB0aGlzLmNvbHMgLSAxLCBsYXN0Q29sICk7XG4gICAgLy8gc2V0IGNvbFlzIHRvIGJvdHRvbSBvZiB0aGUgc3RhbXBcblxuICAgIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gICAgdmFyIHN0YW1wTWF4WSA9ICggaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbSApICtcbiAgICAgIHN0YW1wU2l6ZS5vdXRlckhlaWdodDtcbiAgICBmb3IgKCB2YXIgaSA9IGZpcnN0Q29sOyBpIDw9IGxhc3RDb2w7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXNbaV0gPSBNYXRoLm1heCggc3RhbXBNYXhZLCB0aGlzLmNvbFlzW2ldICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhZID0gTWF0aC5tYXguYXBwbHkoIE1hdGgsIHRoaXMuY29sWXMgKTtcbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5tYXhZXG4gICAgfTtcblxuICAgIGlmICggdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpICkge1xuICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuX2dldENvbnRhaW5lckZpdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemU7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lckZpdFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVudXNlZENvbHMgPSAwO1xuICAgIC8vIGNvdW50IHVudXNlZCBjb2x1bW5zXG4gICAgdmFyIGkgPSB0aGlzLmNvbHM7XG4gICAgd2hpbGUgKCAtLWkgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sWXNbaV0gIT09IDAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdW51c2VkQ29scysrO1xuICAgIH1cbiAgICAvLyBmaXQgY29udGFpbmVyIHRvIGNvbHVtbnMgdGhhdCBoYXZlIGJlZW4gdXNlZFxuICAgIHJldHVybiAoIHRoaXMuY29scyAtIHVudXNlZENvbHMgKSAqIHRoaXMuY29sdW1uV2lkdGggLSB0aGlzLmd1dHRlcjtcbiAgfTtcblxuICBwcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmV2aW91c1dpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgcmV0dXJuIHByZXZpb3VzV2lkdGggIT0gdGhpcy5jb250YWluZXJXaWR0aDtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeTtcblxufSkpO1xuIiwgImltcG9ydCB1IGZyb20gJ3VtYnJlbGxhanMnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQnO1xuXG5mdW5jdGlvbiByZWFkeShmbikge1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnbG9hZGluZycpe1xuXHRcdGZuKCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcblx0fVxufVxuXG5jb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gJCgnLmhhbWJ1cmdlcicpXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdHUoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHR1KHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0XHRjb25zb2xlLmxvZygnY2xpY2snKTtcblx0fSlcblxuXHQvLyB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90b3MnKTtcblx0Ly8gdmFyIG1zbnJ5ID0gbmV3IE1hc29ucnkoIGVsZW0sIHtcblx0Ly8gXHQvLyBvcHRpb25zXG5cdC8vIFx0aXRlbVNlbGVjdG9yOiAnLnBob3RvJyxcblx0Ly8gXHQvLyBwZXJjZW50UG9zaXRpb246IHRydWVcblx0Ly8gfSk7XG5cblx0Ly8gY29uc29sZS5sb2coaGFtYnVyZ2VyKTtcbn0pO1xuXG4vLyB1KHdpbmRvdykub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBldnQgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygnZGVycCcpO1xuLy8gfSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBRUEsVUFBSSxLQUFFLFNBQVMsR0FBRSxHQUFFO0FBQUMsZUFBTyxnQkFBZ0IsS0FBRSxhQUFhLEtBQUUsSUFBRyxDQUFVLE9BQU8sS0FBakIsWUFBcUIsS0FBRSxLQUFLLE9BQU8sR0FBRSxLQUFJLEtBQUcsRUFBRSxZQUFXLEtBQUUsQ0FBQyxLQUFJLEtBQUssTUFBSyxRQUFNLEtBQUssTUFBTSxPQUFLLElBQUksR0FBRSxHQUFFO0FBQUE7QUFBSSxTQUFFLFlBQVUsTUFBSyxTQUFRO0FBQUMsZUFBTyxLQUFLLE1BQU07QUFBQSxXQUFTLEdBQUUsVUFBVSxRQUFNLElBQUcsR0FBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLGVBQU8sS0FBSyxRQUFRLFdBQVUsU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFFLFVBQVUsSUFBSTtBQUFBO0FBQUEsU0FBTSxHQUFFLFVBQVUsV0FBUyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsZUFBTSxBQUFVLE9BQU8sS0FBakIsWUFBcUIsS0FBRSxBQUFJLE1BQUosSUFBTSxLQUFHLElBQUksTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLElBQUksT0FBTyxNQUFLLFVBQVMsS0FBSyxLQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsY0FBSSxJQUFFLFNBQVM7QUFB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QUFFO0FBQUMsZUFBTyxPQUFPLEtBQUssR0FBRyxJQUFJLFNBQVMsR0FBRTtBQUFDLGlCQUFPLEtBQUssSUFBSSxLQUFHLE1BQUksS0FBSyxJQUFJLEVBQUU7QUFBQSxVQUFLLEtBQUssT0FBTyxLQUFLO0FBQUEsU0FBTSxHQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUU7QUFBQyxlQUFPLEtBQUssSUFBSSxTQUFTLElBQUU7QUFBQyxpQkFBTyxHQUFFO0FBQUEsV0FBYSxPQUFPO0FBQUEsU0FBSSxHQUFFLFVBQVUsVUFBUSxTQUFTLEdBQUUsR0FBRTtBQUFDLGVBQU8sS0FBSyxTQUFTLEdBQUUsR0FBRSxTQUFTLElBQUUsSUFBRTtBQUFDLGFBQUUsYUFBYSxJQUFFLEdBQUU7QUFBQTtBQUFBLFNBQWUsR0FBRSxVQUFVLFNBQU8sV0FBVTtBQUFDLGVBQU8sS0FBSyxLQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUUsY0FBWSxFQUFFLFdBQVcsWUFBWTtBQUFBO0FBQUEsU0FBTSxHQUFFLFVBQVUsY0FBWSxXQUFVO0FBQUMsZUFBTyxLQUFLLFFBQVEsV0FBVSxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUUsVUFBVSxPQUFPO0FBQUE7QUFBQSxTQUFNLEdBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFO0FBQUcsZUFBTyxLQUFLLFNBQVMsR0FBRSxHQUFFLFNBQVMsSUFBRSxJQUFFO0FBQUMsY0FBRSxFQUFFLE9BQU8sS0FBSyxNQUFNLEdBQUUsWUFBVyxHQUFFLFdBQVcsYUFBYSxJQUFFO0FBQUEsWUFBSyxHQUFFO0FBQUEsU0FBSSxHQUFFLFVBQVUsU0FBTyxXQUFVO0FBQUMsZUFBTyxLQUFLLFFBQVEsZUFBZSxFQUFDLFVBQVMsYUFBVztBQUFBLFNBQU0sR0FBRSxVQUFVLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLElBQUUsRUFBRSxRQUFRLFFBQU8sSUFBSSxRQUFRLFFBQU8sS0FBSSxLQUFLLEtBQUssS0FBRyxLQUFJLFNBQVMsS0FBSSxNQUFHLFVBQVUsaUJBQWlCO0FB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
