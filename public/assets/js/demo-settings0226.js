style "use strict";

function _createForOfIteratorHelper(e, t) { var o, r, n, a, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (i) return r = !(o = !0), { s: function() { i = i.call(e) }, n: function() { var e = i.next(); return o = e.done, e }, e: function(e) { r = !0, n = e }, f: function() { try { o || null == i.return || i.return() } finally { if (r) throw n } } }; if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) return i && (e = i), a = 0, { s: t = function() {}, n: function() { return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] } }, e: function(e) { throw e }, f: t }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

function _unsupportedIterableToArray(e, t) { var o; if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (o = "Object" === (o = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : o) || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(e, t) : void 0 }

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length); for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o]; return r }

function _typeof(e) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }! function(e) { var t, o, r; "function" == typeof define && define.amd && (define(e), t = !0), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), t || (o = window.Cookies, (r = window.Cookies = e()).noConflict = function() { return window.Cookies = o, r }) }(function() {
    function d() { for (var e = 0, t = {}; e < arguments.length; e++) { var o, r = arguments[e]; for (o in r) t[o] = r[o] } return t }

    function l(e) { return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) } return function e(s) {
        function i() {}

        function o(e, t, o) { if ("undefined" != typeof document) { "number" == typeof(o = d({ path: "/" }, i.defaults, o)).expires && (o.expires = new Date(+new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : ""; try { var r = JSON.stringify(t); /^[\{\[]/.test(r) && (t = r) } catch (e) {} t = s.write ? s.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var n, a = ""; for (n in o) o[n] && (a += "; " + n, !0 !== o[n]) && (a += "=" + o[n].split(";")[0]); return document.cookie = e + "=" + t + a } }

        function t(e, t) { if ("undefined" != typeof document) { for (var o = {}, r = document.cookie ? document.cookie.split("; ") : [], n = 0; n < r.length; n++) { var a = r[n].split("="),
                        i = a.slice(1).join("=");
                    t || '"' !== i.charAt(0) || (i = i.slice(1, -1)); try { var d = l(a[0]),
                            i = (s.read || s)(i, d) || l(i); if (t) try { i = JSON.parse(i) } catch (e) {}
                        if (o[d] = i, e === d) break } catch (e) {} } return e ? o[e] : o } } return i.set = o, i.get = function(e) { return t(e, !1) }, i.getJSON = function(e) { return t(e, !0) }, i.remove = function(e, t) { o(e, "", d(t, { expires: -1 })) }, i.defaults = {}, i.withConverter = e, i }(function() {}) }),
function(i, d) { var s = d("body"),
        l = d("head"),
        u = "#skin-theme",
        c = ".nk-header",
        f = ["demo8", "non"],
        a = ["header", "header_opt", "skin", "mode"],
        n = "light-mode",
        m = "dark-mode",
        p = ".nk-opt-item",
        y = ".nk-opt-list",
        h = { demo8: { header: "is-light", header_opt: "nk-header-fixed", style: "ui-default" }, non: { header: "is-light", header_opt: "is-regular", style: "ui-default" } };
    i.Demo = { save: function(e, t) { Cookies.set(i.Demo.apps(e), t) }, remove: function(e) { Cookies.remove(i.Demo.apps(e)) }, current: function(e) { return Cookies.get(i.Demo.apps(e)) }, apps: function(e) { var t, o, r = window.location.pathname.split("/").map(function(e, t, o) { return e.replace("-", "") }),
                n = _createForOfIteratorHelper(f); try { for (n.s(); !(o = n.n()).done;) { var a = o.value;
                    0 <= r.indexOf(a) && (t = a) } } catch (e) { n.e(e) } finally { n.f() } return e ? e + "_" + t : t }, style: function(e, t) { var o = { mode: n + " " + m, style: "ui-default ui-clean ui-shady ui-softy", header: "is-light is-default is-theme is-dark", header_opt: "nk-header-fixed" }; return "all" === e ? o[t] || "" : "any" === e ? o.mode + " " + o.style + " " + o.header : "body" === e ? o.mode + " " + o.style : "is-default" === e || "ui-default" === e || "is-regular" === e ? "" : e }, skins: function(e) { return !e || "default" === e ? "theme" : "theme-" + e }, defs: function(e) { var t = i.Demo.apps(),
                t = h[t][e] || ""; return i.Demo.current(e) ? i.Demo.current(e) : t }, apply: function() { i.Demo.apps(); var e, t = _createForOfIteratorHelper(a); try { for (t.s(); !(e = t.n()).done;) { var o, r, n = e.value; "header" !== n && "header_opt" !== n && "style" !== n || (o = i.Demo.defs(n), d(r = "header" !== n && "header_opt" !== n ? s : c).removeClass(i.Demo.style("all", n)), "ui-default" !== o && "is-default" !== o && d(r).addClass(o)), "mode" === n && i.Demo.update(n, i.Demo.current("mode")), "skin" === n && i.Demo.update(n, i.Demo.current("skin")) } } catch (e) { t.e(e) } finally { t.f() } i.Demo.update("dir", i.Demo.current("dir")) }, locked: function(e) {!0 === e ? (d(p + "[data-key=header]").add(p + "[data-key=skin]").addClass("disabled"), i.Demo.update("skin", "default", !0), d(p + "[data-key=skin]").removeClass("active"), d(p + "[data-key=skin][data-update=default]").addClass("active")) : d(p + "[data-key=header]").add(p + "[data-key=skin]").removeClass("disabled") }, update: function(e, t, o) { var r, n = i.Demo.style(t, e),
                a = i.Demo.style("all", e);
            i.Demo.apps(); "header" !== e && "header_opt" !== e || (d(r = "header" == e || "header_opt" == e ? c : "").removeClass(a), d(r).addClass(n)), "mode" === e && (s.removeClass(a).removeAttr("theme"), n === m ? (s.addClass(n).attr("theme", "dark"), i.Demo.locked(!0)) : (s.addClass(n).removeAttr("theme"), i.Demo.locked(!1))), "style" === e && (s.removeClass(a), s.addClass(n)), "skin" === e && (r = i.Demo.skins(n), a = d("#skin-default").attr("href").replace("theme", "skins/" + r), "theme" === r ? d(u).remove() : 0 < d(u).length ? d(u).attr("href", a) : l.append('<link id="skin-theme" rel="stylesheet" href="' + a + '">')), !0 === o && i.Demo.save(e, t) }, reset: function() { var e, t = i.Demo.apps(),
                o = (s.removeClass(i.Demo.style("body")).removeAttr("theme"), d(p).removeClass("active"), d(u).remove(), d(c).removeClass(i.Demo.style("all", "header")), _createForOfIteratorHelper(a)); try { for (o.s(); !(e = o.n()).done;) { var r = e.value;
                    d("[data-key='" + r + "']").each(function() { var e = d(this).data("update"); "header" !== r && "header_opt" !== r && "style" !== r || e === h[t][r] && d(this).addClass("active"), "mode" !== r && "skin" !== r || e !== n && "default" !== e || d(this).addClass("active") }), i.Demo.remove(r) } } catch (e) { o.e(e) } finally { o.f() } d("[data-key='dir']").each(function() { d(this).data("update") === i.Demo.current("dir") && d(this).addClass("active") }), i.Demo.apply() }, load: function() { i.Demo.apply(), 0 < d(p).length && d(p).each(function() { var e = d(this).data("update"),
                    t = d(this).data("key"); "header" !== t && "header_opt" !== t && "style" !== t || e === i.Demo.defs(t) && (d(this).parent(y).find(p).removeClass("active"), d(this).addClass("active")), "mode" !== t && "skin" !== t && "dir" !== t || e != i.Demo.current("skin") && e != i.Demo.current("mode") && e != i.Demo.current("dir") || (d(this).parent(y).find(p).removeClass("active"), d(this).addClass("active")) }) }, trigger: function() { d(p).on("click", function(e) { e.preventDefault(); var e = d(this),
                    t = e.parent(y),
                    o = e.data("update"),
                    r = e.data("key");
                i.Demo.update(r, o, !0), t.find(p).removeClass("active"), e.addClass("active"), "dir" == r && setTimeout(function() { window.location.reload() }, 100) }), d(".nk-opt-reset > a").on("click", function(e) { e.preventDefault(), i.Demo.reset() }) }, init: function(e) { i.Demo.load(), i.Demo.trigger() } }, i.coms.docReady.push(i.Demo.init), i.Promo = function() { var t = d(".pmo-st"),
            o = d(".pmo-lv"),
            e = d(".pmo-close");
        0 < e.length && e.on("click", function() { var e = Cookies.get("inv-offer"); return o.removeClass("active"), t.addClass("active"), null == e && Cookies.set("inv-offer", "true", { expires: 1, path: "" }), !1 }), d(window).on("load", function() {
            (null == Cookies.get("inv-offer") ? o : t).addClass("active") }) }, i.coms.docReady.push(i.Promo) }(NioApp, jQuery);