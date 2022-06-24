/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.5.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */ !function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.PureCounter = t() : e.PureCounter = t();
}(self, function() {
    var e1, t1, r1;
    return e1 = {
        638: function(e2) {
            function t2(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            function r2(e3) {
                return function(e) {
                    if (Array.isArray(e)) return n1(e);
                }(e3) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e3) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return n1(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n1(e, t) : void 0;
                    }
                }(e3) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function n1(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                return n;
            }
            function o1(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = {};
                for(var n in e)if (t == {} || t.hasOwnProperty(n)) {
                    var o = c1(e[n]);
                    r[n] = o, n.match(/duration|pulse/) && (r[n] = "boolean" != typeof o ? 1e3 * o : o);
                }
                return Object.assign({}, t, r);
            }
            function i1(e4, t3) {
                var r3 = (t3.end - t3.start) / (t3.duration / t3.delay), n = "inc";
                t3.start > t3.end && (n = "dec", r3 *= -1);
                var o = c1(t3.start);
                e4.innerHTML = u1(o, t3), !0 === t3.once && e4.setAttribute("data-purecounter-duration", 0);
                var i = setInterval(function() {
                    var a = function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inc";
                        return e = c1(e), t = c1(t), parseFloat("inc" === r ? e + t : e - t);
                    }(o, r3, n);
                    e4.innerHTML = u1(a, t3), ((o = a) >= t3.end && "inc" == n || o <= t3.end && "dec" == n) && (e4.innerHTML = u1(t3.end, t3), t3.pulse && (e4.setAttribute("data-purecounter-duration", 0), setTimeout(function() {
                        e4.setAttribute("data-purecounter-duration", t3.duration / 1e3);
                    }, t3.pulse)), clearInterval(i));
                }, t3.delay);
            }
            function a1(e, t) {
                return Math.pow(e, t);
            }
            function u1(e5, t4) {
                var r4 = {
                    minimumFractionDigits: t4.decimals,
                    maximumFractionDigits: t4.decimals
                }, n2 = "string" == typeof t4.formater ? t4.formater : void 0;
                return e5 = function(e, t) {
                    if (t.filesizing || t.currency) {
                        e = Math.abs(Number(e));
                        var r = 1e3, n = t.currency && "string" == typeof t.currency ? t.currency : "", o = t.decimals || 1, i = [
                            "",
                            "K",
                            "M",
                            "B",
                            "T"
                        ], u = "";
                        t.filesizing && (r = 1024, i = [
                            "bytes",
                            "KB",
                            "MB",
                            "GB",
                            "TB"
                        ]);
                        for(var c = 4; c >= 0; c--)if (0 === c && (u = "".concat(e.toFixed(o), " ").concat(i[c])), e >= a1(r, c)) {
                            u = "".concat((e / a1(r, c)).toFixed(o), " ").concat(i[c]);
                            break;
                        }
                        return n + u;
                    }
                    return parseFloat(e);
                }(e5, t4), function(e, t5) {
                    if (t5.formater) {
                        var r5 = t5.separator ? "string" == typeof t5.separator ? t5.separator : "," : "";
                        return "en-US" !== t5.formater && !0 === t5.separator ? e : (n = r5, e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi, function(e, t, r, o, i) {
                            var a = "", u = "";
                            if (void 0 !== t ? (a = t.replace(new RegExp(/,/gi, "gi"), n), u = ",") : void 0 !== r ? a = r.replace(new RegExp(/\./gi, "gi"), n) : void 0 !== o && (a = o.replace(new RegExp(/ /gi, "gi"), n)), void 0 !== i) {
                                var c = "," !== u && "," !== n ? "," : ".";
                                a += void 0 !== i ? i.replace(new RegExp(/\.|,/gi, "gi"), c) : "";
                            }
                            return a;
                        }));
                    }
                    var n;
                    return e;
                }(e5 = t4.formater ? e5.toLocaleString(n2, r4) : parseInt(e5).toString(), t4);
            }
            function c1(e) {
                return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : /^true|false/i.test(e) ? /^true/i.test(e) : e;
            }
            function f(e) {
                for(var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent;)t += (e = e.offsetParent).offsetTop, r += e.offsetLeft;
                return t >= window.pageYOffset && r >= window.pageXOffset && t + o <= window.pageYOffset + window.innerHeight && r + n <= window.pageXOffset + window.innerWidth;
            }
            function s() {
                return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
            }
            e2.exports = function() {
                var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = {
                    start: 0,
                    end: 100,
                    duration: 2e3,
                    delay: 10,
                    once: !0,
                    pulse: !1,
                    decimals: 0,
                    legacy: !0,
                    filesizing: !1,
                    currency: !1,
                    separator: !1,
                    formater: "us-US",
                    selector: ".purecounter"
                }, a = o1(e6, n3);
                function d() {
                    var e7 = document.querySelectorAll(a.selector);
                    if (0 !== e7.length) {
                        if (s()) {
                            var t = new IntersectionObserver(p.bind(this), {
                                root: null,
                                rootMargin: "20px",
                                threshold: .5
                            });
                            e7.forEach(function(e) {
                                t.observe(e);
                            });
                        } else window.addEventListener && (l(e7), window.addEventListener("scroll", function(t) {
                            l(e7);
                        }, {
                            passive: !0
                        }));
                    }
                }
                function l(e8) {
                    e8.forEach(function(e) {
                        !0 === v(e).legacy && f(e) && p([
                            e
                        ]);
                    });
                }
                function p(e9, t) {
                    e9.forEach(function(e) {
                        var r = e.target || e, n = v(r);
                        if (n.duration <= 0) return r.innerHTML = u1(n.end, n);
                        if (!t && !f(e) || t && e.intersectionRatio < .5) {
                            var o = n.start > n.end ? n.end : n.start;
                            return r.innerHTML = u1(o, n);
                        }
                        setTimeout(function() {
                            return i1(r, n);
                        }, n.delay);
                    });
                }
                function v(e10) {
                    var n4 = a, i = [].filter.call(e10.attributes, function(e) {
                        return /^data-purecounter-/.test(e.name);
                    });
                    return o1(0 != i.length ? Object.assign.apply(Object, [
                        {}
                    ].concat(r2(i.map(function(e) {
                        var r = e.name, n = e.value;
                        return t2({}, r.replace("data-purecounter-", "").toLowerCase(), c1(n));
                    })))) : {}, n4);
                }
                d();
            };
        }
    }, t1 = {}, r1 = function r(n) {
        var o = t1[n];
        if (void 0 !== o) return o.exports;
        var i = t1[n] = {
            exports: {}
        };
        return e1[n](i, i.exports, r), i.exports;
    }(638), r1;
}); //# sourceMappingURL=purecounter_vanilla.js.map

//# sourceMappingURL=get-a-quote.9954351e.js.map
