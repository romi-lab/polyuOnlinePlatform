!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t();
}(this, function() {
    "use strict";
    function e1(t) {
        return (e1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
    }
    function t1(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i1(e, t) {
        for(var i = 0; i < t.length; i++){
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function n1(e, t, n) {
        return t && i1(e.prototype, t), n && i1(e, n), e;
    }
    var s1 = Date.now();
    function l1() {
        var e = {}, t = !0, i2 = 0, n2 = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i2++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l1(!0, e[n], i[n]) : e[n] = i[n]);
        }; i2 < n2; i2++){
            var o = arguments[i2];
            s(o);
        }
        return e;
    }
    function o1(e, t) {
        if ((k1(e) || e === window || e === document) && (e = [
            e
        ]), A1(e) || L1(e) || (e = [
            e
        ]), 0 != P1(e)) {
            if (A1(e) && !L1(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (L1(e)) {
                for(var s in e)if (O1(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function r1(e2) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n3 = e2[s1] = e2[s1] || [], l = {
            all: n3,
            evt: null,
            found: null
        };
        return t && i && P1(n3) > 0 && o1(n3, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
        }), l;
    }
    function a1(e3) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = t2.onElement, n = t2.withCallback, s = t2.avoidDuplicate, l = void 0 === s || s, a = t2.once, h = void 0 !== a && a, d = t2.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i3 || [];
        function v(e) {
            T1(n) && n.call(u, e, this), h && v.destroy();
        }
        return C1(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            o1(g, function(t) {
                var i = r1(t, e3, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e3, v, c);
            });
        }, o1(g, function(t) {
            var i = r1(t, e3, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e3, v, c), i.all.push({
                eventName: e3,
                fn: v
            }));
        }), v;
    }
    function h1(e, t3) {
        o1(t3.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function d1(e, t4) {
        o1(t4.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function c1(e, t) {
        return e.classList.contains(t);
    }
    function u1(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function g1(e4) {
        var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e4 || "" === t5) return !1;
        if ("none" === t5) return T1(i) && i(), !1;
        var n = x1(), s = t5.split(" ");
        o1(s, function(t) {
            h1(e4, "g" + t);
        }), a1(n, {
            onElement: e4,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e5, t) {
                o1(s, function(e) {
                    d1(t, "g" + e);
                }), T1(i) && i();
            }
        });
    }
    function v1(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function f1(e) {
        e.style.display = "block";
    }
    function p1(e) {
        e.style.display = "none";
    }
    function m1(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function x1() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function b1(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function S1(e, t, i) {
        if (I1(e)) console.error("Inject assets error");
        else if (T1(t) && (i = t, t = !1), C1(t) && t in window) T1(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T1(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T1(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T1(i)) {
                    if (C1(t)) return b1(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (T1(i)) {
                        if (C1(t)) return b1(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function w1() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function T1(e) {
        return "function" == typeof e;
    }
    function C1(e) {
        return "string" == typeof e;
    }
    function k1(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function E1(e) {
        return Array.isArray(e);
    }
    function A1(e) {
        return e && e.length && isFinite(e.length);
    }
    function L1(t) {
        return "object" === e1(t) && null != t && !T1(t) && !E1(t);
    }
    function I1(e) {
        return null == e;
    }
    function O1(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function P1(e) {
        if (L1(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)O1(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function M1(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function z1() {
        var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e6 && (e6 = parseInt(e6));
        var i = [];
        o1(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e6 < 0 ? 1 : e6 + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'));
    }
    function X1(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a1("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z1();
                        return void (r && (r.focus(), h1(r, "focused")));
                    }
                    var a = z1(s.getAttribute("data-taborder"));
                    d1(s, "focused"), a && (a.focus(), h1(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    function Y1(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function q1(e7, t6) {
        var i4 = function(e8, t7) {
            var i = Y1(e8) * Y1(t7);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e8, t7) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e7, t6);
        return function(e, t) {
            return e.x * t.y - t.x * e.y;
        }(e7, t6) > 0 && (i4 *= -1), 180 * i4 / Math.PI;
    }
    var N = function() {
        function e9(i) {
            t1(this, e9), this.handlers = [], this.el = i;
        }
        return n1(e9, [
            {
                key: "add",
                value: function(e) {
                    this.handlers.push(e);
                }
            },
            {
                key: "del",
                value: function(e) {
                    e || (this.handlers = []);
                    for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
                }
            },
            {
                key: "dispatch",
                value: function() {
                    for(var e = 0, t = this.handlers.length; e < t; e++){
                        var i = this.handlers[e];
                        "function" == typeof i && i.apply(this.el, arguments);
                    }
                }
            }
        ]), e9;
    }();
    function D(e, t) {
        var i = new N(e);
        return i.add(t), i;
    }
    var _ = function() {
        function e10(i, n) {
            t1(this, e10), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {};
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            };
        }
        return n1(e10, [
            {
                key: "start",
                value: function(e) {
                    if (e.touches) {
                        if (e.target && e.target.nodeName && [
                            "a",
                            "button",
                            "input"
                        ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        else {
                            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                            var t = this.preV;
                            if (e.touches.length > 1) {
                                this._cancelLongTap(), this._cancelSingleTap();
                                var i = {
                                    x: e.touches[1].pageX - this.x1,
                                    y: e.touches[1].pageY - this.y1
                                };
                                t.x = i.x, t.y = i.y, this.pinchStartLen = Y1(t), this.multipointStart.dispatch(e, this.element);
                            }
                            this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                                this.longTap.dispatch(e, this.element), this._preventTap = !0;
                            }).bind(this), 750);
                        }
                    }
                }
            },
            {
                key: "move",
                value: function(e) {
                    if (e.touches) {
                        var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                        if (this.isDoubleTap = !1, i > 1) {
                            var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y1(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q1(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                        } else {
                            if (null !== this.x2) {
                                e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                                (a > 10 || h > 10) && (this._preventTap = !0);
                            } else e.deltaX = 0, e.deltaY = 0;
                            this.pressMove.dispatch(e, this.element);
                        }
                        this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                    }
                }
            },
            {
                key: "end",
                value: function(e) {
                    if (e.changedTouches) {
                        this._cancelLongTap();
                        var t = this;
                        e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                            t.swipe.dispatch(e, t.element);
                        }, 0)) : (this.tapTimeout = setTimeout(function() {
                            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                        }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                            t.singleTap.dispatch(e, t.element);
                        }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                    }
                }
            },
            {
                key: "cancelAll",
                value: function() {
                    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                }
            },
            {
                key: "cancel",
                value: function(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                }
            },
            {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout);
                }
            },
            {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout);
                }
            },
            {
                key: "_swipeDirection",
                value: function(e, t, i, n) {
                    return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    this[e] && this[e].add(t);
                }
            },
            {
                key: "off",
                value: function(e, t) {
                    this[e] && this[e].del(t);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
                }
            }
        ]), e10;
    }();
    function W(e11) {
        var t8 = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i5 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = c1(e11, "gslide-media") ? e11 : e11.querySelector(".gslide-media"), s = u1(n, ".ginner-container"), l = e11.querySelector(".gslide-description");
        i5 > 769 && (n = s), h1(n, "greset"), v1(n, "translate3d(0, 0, 0)"), a1(t8, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                d1(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function B(e12) {
        if (e12.events.hasOwnProperty("touch")) return !1;
        var t9, i6, n4, s2 = y(), l = s2.width, o = s2.height, r = !1, a2 = null, g = null, f = null, p = !1, m2 = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X, {
            touchStart: function(t) {
                if (r = !0, (c1(t.targetTouches[0].target, "ginner-container") || u1(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u1(t.targetTouches[0].target, ".gslide-inline") && !c1(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a2 = e12.activeSlide, g = a2.querySelector(".gslide-media"), n4 = a2.querySelector(".gslide-inline"), f = null, c1(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a2.querySelector(".ginner-container")), d1(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n4 && n4.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                    if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t9 = P.pageX - O.pageX, E = 100 * t9 / l, i6 = P.pageY - O.pageY, A = 100 * i6 / o, L && f && (h = 1 - Math.abs(i6) / o, Y.style.opacity = h, e12.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t9) / l, g.style.opacity = h, e12.settings.touchFollowAxis && (A = 0)), !f) return v1(g, "translate3d(".concat(E, "%, 0, 0)"));
                    v1(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && f)) return t < 29 && i < 25 ? (h1(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                    e12.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m2 = x || 1;
            },
            pinch: function(e) {
                if (!f || p) return !1;
                b = !0, f.scaleX = f.scaleY = m2 * e.zoom;
                var t = m2 * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v1(f, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e12.index == e12.elements.length - 1) return W(g);
                            e12.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e12.index) return W(g);
                            e12.prevSlide();
                        }
                    }
                }
            }
        });
        e12.events.touch = q;
    }
    var H = function() {
        function e13(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t1(this, e13), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                return s.dragStart(e);
            }, !1), this.img.addEventListener("mouseup", function(e) {
                return s.dragEnd(e);
            }, !1), this.img.addEventListener("mousemove", function(e) {
                return s.drag(e);
            }, !1), this.img.addEventListener("click", function(e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
            }, !1), this.img.setZoomEvents = !0;
        }
        return n1(e13, [
            {
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0);
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                    }
                }
            },
            {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
                }
            },
            {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
                }
            },
            {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i);
                    }
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                }
            },
            {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                }
            }
        ]), e13;
    }(), V = function() {
        function e14() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t1(this, e14);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
                return i.dragStart(e);
            }, !1), this.el.addEventListener("mouseup", function(e) {
                return i.dragEnd(e);
            }, !1), this.el.addEventListener("mousemove", function(e) {
                return i.drag(e);
            }, !1);
        }
        return n1(e14, [
            {
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u1(e.target, ".nodrag") || -1 !== [
                            "input",
                            "select",
                            "textarea",
                            "button",
                            "a"
                        ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u1(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u1(e.target, ".ginner-container")));
                    }
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                        }
                    }
                }
            },
            {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                    }
                    return e;
                }
            },
            {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                }
            }
        ]), e14;
    }();
    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            T1(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I1(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function F(e15, t, i, n) {
        var s = this, l2 = e15.querySelector(".ginner-container"), o = "gvideo" + i, r2 = e15.querySelector(".gslide-media"), a = this.getAllPlayers();
        h1(l2, "gvideo-container"), r2.insertBefore(m1('<div class="gvideo-wrapper"></div>'), r2.firstChild);
        var d = e15.querySelector(".gvideo-wrapper");
        S1(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r2.style.maxWidth = t.width, S1(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m1(l += "</video>");
            }
            var r = g || m1('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h1(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O1(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, T1(n) && n();
            }), b1(function() {
                return e15.querySelector("iframe") && "true" == e15.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e15);
            }), f.on("enterfullscreen", R), f.on("exitfullscreen", R);
        });
    }
    function R(e) {
        var t = u1(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h1(t, "fullscreen"), "exitfullscreen" === e.type && d1(t, "fullscreen");
    }
    function G(e16, t, i, n) {
        var s, l = this, o = e16.querySelector(".gslide-media"), r = !(!O1(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O1(t, "content") || !t.content) && t.content;
        if (d && (C1(d) && (s = m1('<div class="ginlined-content">'.concat(d, "</div>"))), k1(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h1(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a1("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), T1(n) && n();
    }
    function Z(e17, t10, i7, n5) {
        var s3 = e17.querySelector(".gslide-media"), l3 = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, h1(l, "node-ready"), T1(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t10.href,
            callback: n5
        });
        s3.parentNode.style.maxWidth = t10.width, s3.parentNode.style.height = t10.height, s3.appendChild(l3);
    }
    var U = function() {
        function e18() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t1(this, e18), this.defaults = {
                href: "",
                sizes: "",
                srcset: "",
                title: "",
                type: "",
                videoProvider: "",
                description: "",
                alt: "",
                descPosition: "bottom",
                effect: "",
                width: "",
                height: "",
                content: !1,
                zoomable: !0,
                draggable: !0
            }, L1(i) && (this.defaults = l1(this.defaults, i));
        }
        return n1(e18, [
            {
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
                }
            },
            {
                key: "parseConfig",
                value: function(e, t11) {
                    var i = this, n = l1({
                        descPosition: t11.descPosition
                    }, this.defaults);
                    if (L1(e) && !k1(e)) {
                        O1(e, "type") || (O1(e, "content") && e.content ? e.type = "inline" : O1(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l1(n, e);
                        return this.setSize(s, t11), s;
                    }
                    var r3 = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r3 = e.href), "img" === h && (r3 = e.src, n.alt = e.alt), n.href = r3, o1(n, function(s, l) {
                        O1(t11, l) && "width" !== l && (n[l] = t11[l]);
                        var o = e.dataset[l];
                        I1(o) || (n[l] = i.sanitizeValue(o));
                    }), n.content && (n.type = "inline"), !n.type && r3 && (n.type = this.sourceType(r3)), I1(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I1(d) || "" === d || (n.title = d);
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I1(c) || "" === c || (n.title = c);
                        }
                    } else {
                        var u = [];
                        o1(n, function(e, t) {
                            u.push(";\\s?" + t);
                        }), u = u.join("\\s?:|"), "" !== a.trim() && o1(n, function(e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r);
                            }
                        });
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML;
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e;
                        }
                        g && (n.description = g);
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML);
                    }
                    return this.setSize(n, t11, e), this.slideConfig = n, n;
                }
            },
            {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                    return e.width = O1(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O1(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
                }
            },
            {
                key: "checkSize",
                value: function(e) {
                    return M1(e) ? "".concat(e, "px") : e;
                }
            },
            {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e;
                }
            }
        ]), e18;
    }(), $ = function() {
        function e19(i, n, s) {
            t1(this, e19), this.element = i, this.instance = n, this.index = s;
        }
        return n1(e19, [
            {
                key: "setContent",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i8 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c1(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w1();
                    T1(n.beforeSlideLoad) && n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1
                    });
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i8, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                    if (T1(n.afterSlideLoad) && (v = function() {
                        T1(i8) && i8(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        });
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h1(a.parentNode, "desc-".concat(r)), h1(g.parentNode, "description-".concat(r))), h1(a, "gslide-".concat(o)), h1(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [
                            t,
                            s,
                            this.index,
                            v
                        ]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T1(v) && v() : j(t, s, this.index, function() {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h1(i, "zoomable"), new H(i, t, function() {
                                e.instance.resize();
                            })), T1(v) && v();
                        }));
                        Z.apply(this, [
                            t,
                            s,
                            this.index,
                            v
                        ]);
                    } else F.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                }
            },
            {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
                }
            },
            {
                key: "descriptionEvents",
                value: function(e20, t) {
                    var i = this, n6 = e20.querySelector(".desc-more");
                    if (!n6) return !1;
                    a1("click", {
                        onElement: n6,
                        withCallback: function(e21, n) {
                            e21.preventDefault();
                            var s = document.body, l = u1(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h1(s, "gdesc-open");
                            var o = a1("click", {
                                onElement: [
                                    s,
                                    u1(l, ".gslide-description")
                                ],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d1(s, "gdesc-open"), h1(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                        d1(s, "gdesc-closed");
                                    }, 400), o.destroy());
                                }
                            });
                        }
                    });
                }
            },
            {
                key: "create",
                value: function() {
                    return m1(this.instance.settings.slideHTML);
                }
            },
            {
                key: "getConfig",
                value: function() {
                    k1(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
                }
            }
        ]), e19;
    }(), J = w1(), K = null !== w1() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, te = function() {
        function e22() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t1(this, e22), this.customOptions = i, this.settings = l1(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
        }
        return n1(e22, [
            {
                key: "init",
                value: function() {
                    var e = this, t12 = this.getSelector();
                    t12 && (this.baseEvents = a1("click", {
                        onElement: t12,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i);
                        }
                    })), this.elements = this.getElements();
                }
            },
            {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M1(t) ? t : this.settings.startAt;
                    if (k1(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I1(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                    }
                    M1(i) || (i = 0), this.build(), g1(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h1(s, "gscrollbar-fixer");
                    }
                    h1(s, "glightbox-open"), h1(Q, "glightbox-open"), J && (h1(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h1(this.prevButton, "glightbox-button-hidden"), h1(this.nextButton, "glightbox-button-hidden")) : (d1(this.prevButton, "glightbox-button-hidden"), d1(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T1(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X1(this);
                }
            },
            {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e);
                }
            },
            {
                key: "showSlide",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f1(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d1(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c1(s, "loaded")) this.slideAnimateIn(s, i), p1(this.loader);
                    else {
                        f1(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                            p1(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                        });
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c1(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
                }
            },
            {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I1(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c1(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                        n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", l);
                        });
                    }, 200) : n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }
            },
            {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1);
                }
            },
            {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1);
                }
            },
            {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
                }
            },
            {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t), n = i.getConfig(), s = l1({}, n), o = i.create(), r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o);
                        else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d);
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T1(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: a,
                        player: h
                    });
                }
            },
            {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T1(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                }
            },
            {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p1(s), s.style.display = ""), d1(e, this.effectsClasses), t) g1(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T1(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                    else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g1(e, a, function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T1(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                l,
                                o
                            ]);
                        });
                    }
                    setTimeout(function() {
                        i.resize(e);
                    }, 100), h1(e, "current");
                }
            },
            {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d1(e, this.effectsClasses), h1(e, "prev");
                    var t13 = this.settings.slideEffect, i9 = "none" !== t13 ? this.settings.cssEfects[t13].out : t13;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I1(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T1(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                        {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i9 = this.settings.cssEfects.slideBack.out), g1(e, i9, function() {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d1(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d1(e, "prev");
                    });
                }
            },
            {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers;
                }
            },
            {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O1(i, t) || !i[t]) && i[t];
                }
            },
            {
                key: "stopSlideVideo",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "slidePlayerPause",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "playSlideVideo",
                value: function(e) {
                    if (k1(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play();
                }
            },
            {
                key: "slidePlayerPlay",
                value: function(e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k1(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"));
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                    }
                }
            },
            {
                key: "setElements",
                value: function(e23) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e23 && e23.length && o1(e23, function(e, n) {
                        var s = new $(e, t, n), o = s.getConfig(), r = l1({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o1(this.elements, function() {
                        var e = m1(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e);
                    }), this.showSlide(0, !0)));
                }
            },
            {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return o1(this.elements, function(i, n) {
                        if (O1(i, "node") && i.node == e) return t = n, !0;
                    }), t;
                }
            },
            {
                key: "getElements",
                value: function() {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I1(this.settings.elements) && E1(this.settings.elements) && this.settings.elements.length && o1(this.settings.elements, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l1({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
                    });
                    var i10 = !1;
                    return this.getSelector() && (i10 = document.querySelectorAll(this.getSelector())), i10 ? (o1(i10, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l1({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                    }), t) : t;
                }
            },
            {
                key: "getGalleryElements",
                value: function(e24, t) {
                    return e24.filter(function(e) {
                        return e.gallery == t;
                    });
                }
            },
            {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                }
            },
            {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                }
            },
            {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index;
                }
            },
            {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out));
                    }
                    return e.join(" ");
                }
            },
            {
                key: "build",
                value: function() {
                    var e25 = this;
                    if (this.built) return !1;
                    var t14 = document.body.childNodes, i11 = [];
                    o1(t14, function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i11.push(e), e.setAttribute("aria-hidden", "true"));
                    });
                    var n = O1(this.settings.svg, "next") ? this.settings.svg.next : "", s = O1(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = O1(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m1(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i11, this.events = {}, h1(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a1("click", {
                        onElement: g,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.close();
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a1("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.nextSlide();
                        }
                    })), this.prevButton && (this.events.prev = a1("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e25.prevSlide();
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a1("click", {
                        onElement: d,
                        withCallback: function(t, i) {
                            e25.preventOutsideClick || c1(document.body, "glightbox-mobile") || u1(t.target, ".ginner-container") || u1(t.target, ".gbtn") || c1(t.target, "gnext") || c1(t.target, "gprev") || e25.close();
                        }
                    })), o1(this.elements, function(t, i) {
                        e25.slidesContainer.appendChild(t.instance.create()), t.slideNode = e25.slidesContainer.querySelectorAll(".gslide")[i];
                    }), K && h1(document.body, "glightbox-touch"), this.events.resize = a1("resize", {
                        onElement: window,
                        withCallback: function() {
                            e25.resize();
                        }
                    }), this.built = !0;
                }
            },
            {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c1(e, "zoomed")) {
                        var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h1(document.body, "glightbox-mobile") : d1(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c1(s, "description-bottom") || c1(s, "description-top")) && !c1(s, "gabsolute") && (r = !0), n) {
                                if (l <= 768) n.querySelector("img");
                                else if (r) {
                                    var a = s.offsetHeight, u = n.querySelector("img");
                                    u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
                                }
                            }
                            if (i) {
                                var g = O1(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p);
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth, S = (b = M1(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {
                                        width: w * C,
                                        height: T * C
                                    };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
                            }
                        }
                    }
                }
            },
            {
                key: "reload",
                value: function() {
                    this.init();
                }
            },
            {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    d1(this.nextButton, "disabled"), d1(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h1(this.prevButton, "disabled"), h1(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h1(this.nextButton, "disabled") : h1(this.prevButton, "disabled");
                }
            },
            {
                key: "loop",
                value: function() {
                    var e = O1(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O1(this.settings, "loop") ? this.settings.loop : e, e;
                }
            },
            {
                key: "close",
                value: function() {
                    var e26 = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null;
                        }
                        return !1;
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o1(this.bodyHiddenChildElms, function(e) {
                        e.removeAttribute("aria-hidden");
                    }), h1(this.modal, "glightbox-closing"), g1(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g1(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (e26.activeSlide = null, e26.prevActiveSlideIndex = null, e26.prevActiveSlide = null, e26.built = !1, e26.events) {
                            for(var t in e26.events)e26.events.hasOwnProperty(t) && e26.events[t].destroy();
                            e26.events = null;
                        }
                        var i = document.body;
                        d1(Q, "glightbox-open"), d1(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e26.modal.parentNode.removeChild(e26.modal), e26.trigger("close"), T1(e26.settings.onClose) && e26.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e26.lightboxOpen = !1, e26.closing = null;
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T1(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    });
                }
            },
            {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0);
                }
            },
            {
                key: "trigger",
                value: function(e27) {
                    var t15 = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o1(this.apiEvents, function(t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e27 && (r(i), o && n.push(s));
                    }), n.length && o1(n, function(e) {
                        return t15.apiEvents.splice(e, 1);
                    });
                }
            },
            {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length);
                }
            },
            {
                key: "version",
                value: function() {
                    return "3.1.0";
                }
            }
        ]), e22;
    }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new te(e);
        return t.init(), t;
    };
});

//# sourceMappingURL=get-a-quote.29f8124d.js.map
