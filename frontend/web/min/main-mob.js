function initMap() {
    let e = {
            lat: 50.4495953,
            lng: 30.4200102
        },
        t = e,
        n = $(window).width();
    (n <= 1024 || n >= 768) && (t = {
        lat: 50.449657,
        lng: 30.410977
    }), $(window).width() < 768 && (t = {
        lat: 50.449736,
        lng: 30.419983
    });
    let i = {
            url: "../img/icon/marker.png",
            size: new google.maps.Size(48, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 48)
        },
        r = new google.maps.Map(document.getElementById("map"), {
            center: t,
            zoom: 15,
            disableDefaultUI: !0,
            scrollwheel: 1,
            zoomControl: 1
        });
    new google.maps.Marker({
        position: e,
        map: r,
        icon: i
    }).setMap(r)
}

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}

function animateType(e, t, n) {
    n = n, (t = Snap(e).select(t)).animate({
        d: n
    }, 500, mina.linear)
}

function changeSize(e, t, n) {
    $(e).attr({
        width: t,
        height: n
    })
}

function animateSVG(e, t, n, i) {
    var r = n;
    (t = Snap(e).select(t)).animate({
        d: r
    }, i, mina.linear)
}

function animateCss(e, t, n) {
    var i = document.querySelector(e);
    i.classList.add("animated", t), i.addEventListener("animationend", function e() {
        i.classList.remove("animated", t), i.removeEventListener("animationend", e), "function" == typeof n && n()
    })
}

function autoHeightAnimate(e, t) {
    var n = e.height(),
        i = e.css("height", "auto").height();
    e.height(n), e.stop().animate({
        height: i
    }, t)
}

function tabs(e) {
    var t = $(e),
        n = t.find(".tabs__list-item"),
        i = t.find(".tabs__content-item"),
        r = t.parent().parent().children(".service-image").children();
    $(n).click(function(e) {
        e.preventDefault();
        let t = $(this).data("tab"),
            o = $(this).data("image-desktop"),
            s = $(this).data("image-srcset");
        n.filter(function() {
            return $(this).data("tab") != t
        }).removeClass("active"), $(this).addClass("active"), r.fadeOut(function() {
            r.attr({
                src: o,
                srcset: s
            }).fadeIn()
        }), i.filter(function() {
            return $(this).data("id") != t
        }).fadeOut(300, function() {
            $(this).removeClass("active")
        }), i.filter(function() {
            return $(this).data("id") == t
        }).delay(290).fadeIn(300, function() {
            $(this).addClass("active")
        })
    })
}

function tabsType(e) {
    var t = $(e),
        n = t.find(".tabs__list-item"),
        i = t.find(".tabs__content-item");
    $(n).click(function(e) {
        e.preventDefault();
        var t = $(this).data("tab");
        n.filter(function() {
            return $(this).data("tab") != t
        }).removeClass("active"), $(this).addClass("active"), i.filter(function() {
            return $(this).data("id") != t
        }).fadeOut(300, function() {
            $(this).removeClass("active"), $(".tabs__content-item").children().slick("refresh")
        }), i.filter(function() {
            return $(this).data("id") == t
        }).delay(290).fadeIn(300, function() {
            $(this).addClass("active")
        })
    })
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        p = d.toString,
        f = p.call(Object),
        h = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function(e) {
            return null != e && e === e.window
        },
        m = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n)
            for (r in m) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var x = function(e, t) {
            return new x.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function k(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || p.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (k(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (k(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                a = [];
            if (k(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, r, o, s, a, l, c, u, d, p, f, h, g, v, m, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            k = 0,
            T = 0,
            S = se(),
            C = se(),
            $ = se(),
            A = function(e, t) {
                return e === t && (d = !0), 0
            },
            F = {}.hasOwnProperty,
            E = [],
            D = E.pop,
            j = E.push,
            N = E.push,
            M = E.slice,
            L = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            P = "\\[" + _ + "*(" + q + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + _ + "*\\]",
            O = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            H = new RegExp(_ + "+", "g"),
            z = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            I = new RegExp("^" + _ + "*," + _ + "*"),
            R = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            W = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"),
            U = new RegExp(O),
            X = new RegExp("^" + q + "$"),
            V = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                p()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            N.apply(E = M.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: E.length ? function(e, t) {
                    j.apply(e, M.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, a, c, u, d, h, m, y = t && t.ownerDocument,
                k = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, g)) {
                if (11 !== k && (d = Z.exec(e)))
                    if (o = d[1]) {
                        if (9 === k) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !$[e + " "] && (!v || !v.test(e))) {
                    if (1 !== k) y = t, m = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = x), a = (h = s(e)).length; a--;) h[a] = "#" + u + " " + me(h[a]);
                        m = h.join(","), y = J.test(e) && ge(t.parentNode) || t
                    }
                    if (m) try {
                        return N.apply(i, y.querySelectorAll(m)), i
                    } catch (e) {} finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(z, "$1"), t, i, r)
        }

        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ae(e) {
            return e[x] = !0, e
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return ae(function(t) {
                return t = +t, ae(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e : w;
            return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function(e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = le(function(e) {
                return h.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
            }), n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(K, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function(e) {
                var t = e.replace(K, ee);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, m = [], v = [], (n.qsa = Q.test(f.querySelectorAll)) && (le(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + _ + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
            }), le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", O)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, A = t ? function(e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                if (r === o) return ue(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ue(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            }, f) : f
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(W, "='$1']"), n.matchesSelector && g && !$[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return oe(t, f, null, [e]).length > 0
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e), b(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== f && p(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && F.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, i = [],
                r = 0,
                o = 0;
            if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return u = null, e
        }, r = oe.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(K, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, g = o !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (b = (f = (c = (u = (d = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [k, f, b];
                                        break
                                    }
                            } else if (y && (b = f = (c = (u = (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === b)
                                for (;
                                    (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [k, b]), p !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;) e[i = L(e, o[s])] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(z, "$1"));
                    return i[x] ? ae(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: ae(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ae(function(e) {
                    return e = e.replace(K, ee),
                        function(t) {
                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                        }
                }),
                lang: ae(function(e) {
                    return X.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(K, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        }) i.pseudos[t] = pe(t);

        function ve() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, d, p = [k, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === k && c[1] === a) return p[2] = c[2];
                                if (u[o] = p, p[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function we(e, t, n, i, r, o) {
            return i && !i[x] && (i = we(i)), r && !r[x] && (r = we(r, o)), ae(function(o, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !o && t ? g : xe(g, p, e, a, l),
                    m = n ? r || (o ? e : h || i) ? [] : s : v;
                if (n && n(v, m, a, l), i)
                    for (c = xe(m, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (m[f[u]] = !(v[f[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = m.length; u--;)(d = m[u]) && c.push(v[u] = d);
                            r(null, m = [], c, l)
                        }
                        for (u = m.length; u--;)(d = m[u]) && (c = r ? L(o, d) : p[u]) > -1 && (o[c] = !(s[c] = d))
                    }
                } else m = xe(m === s ? m.splice(h, m.length) : m), r ? r(null, s, m, l) : N.apply(s, m)
            })
        }

        function ke(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                return e === t
            }, a, !0), d = ye(function(e) {
                return L(t, e) > -1
            }, a, !0), p = [function(e, n, i) {
                var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null, r
            }]; l < o; l++)
                if (n = i.relative[e[l].type]) p = [ye(be(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return we(l > 1 && be(p), l > 1 && me(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, l < r && ke(e.slice(l, r)), r < o && ke(e = e.slice(r)), r < o && me(e))
                    }
                    p.push(n)
                }
            return be(p)
        }

        function Te(e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function(o, s, a, l, u) {
                    var d, h, v, m = 0,
                        y = "0",
                        b = o && [],
                        x = [],
                        w = c,
                        T = o || r && i.find.TAG("*", u),
                        S = k += null == w ? 1 : Math.random() || .1,
                        C = T.length;
                    for (u && (c = s === f || s || u); y !== C && null != (d = T[y]); y++) {
                        if (r && d) {
                            for (h = 0, s || d.ownerDocument === f || (p(d), a = !g); v = e[h++];)
                                if (v(d, s || f, a)) {
                                    l.push(d);
                                    break
                                }
                            u && (k = S)
                        }
                        n && ((d = !v && d) && m--, o && b.push(d))
                    }
                    if (m += y, n && y !== m) {
                        for (h = 0; v = t[h++];) v(b, x, s, a);
                        if (o) {
                            if (m > 0)
                                for (; y--;) b[y] || x[y] || (x[y] = D.call(l));
                            x = xe(x)
                        }
                        N.apply(l, x), u && !o && x.length > 0 && m + t.length > 1 && oe.uniqueSort(l)
                    }
                    return u && (k = S, c = w), b
                };
            return n ? ae(o) : o
        }
        return ve.prototype = i.filters = i.pseudos, i.setFilters = new ve, s = oe.tokenize = function(e, t) {
            var n, r, o, s, a, l, c, u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = R.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : C(e, l).slice(0)
        }, a = oe.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = $[e + " "];
            if (!o) {
                for (t || (t = s(e)), n = t.length; n--;)(o = ke(t[n]))[x] ? i.push(o) : r.push(o);
                (o = $(e, Te(r, i))).selector = e
            }
            return o
        }, l = oe.select = function(e, t, n, r) {
            var o, l, c, u, d, p = "function" == typeof e && e,
                f = !r && s(e = p.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(K, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((d = i.find[u]) && (r = d(c.matches[0].replace(K, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && me(l))) return N.apply(n, r), n;
                        break
                    }
            }
            return (p || a(e, f))(r, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(B, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
    var S = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && x(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        $ = x.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function E(e, t, n) {
        return g(t) ? x.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? x.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? x.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, r[t], n);
            return i > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && $.test(e) ? x(e) : e || [], !1).length
        }
    });
    var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), F.test(r[1]) && x.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, D = x(i);
    var N = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && x(e);
            if (!$.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function(e, t) {
        x.fn[e] = function(n, i) {
            var r = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (M[e] || x.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var B = /[^\x20\t\r\n\f]+/g;

    function _(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function P(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return x.each(e.match(B) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : x.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            l = function() {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        x.each(n, function(n, i) {
                            g(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n;
                             (n = x.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred(function(t) {
                            x.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? r ? c.call(e, s(o, n, _, r), s(o, n, q, r)) : (o++, c.call(e, s(o, n, _, r), s(o, n, q, r), s(o, n, _, n.notifyWith))) : (i !== _ && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (i !== q && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred(function(e) {
                            n[0][3].add(s(0, e, g(r) ? r : _, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : _)), n[2][3].add(s(0, e, g(i) ? i : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                o = {};
            return x.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = x.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (P(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
            for (; n--;) P(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && O.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var H = x.Deferred();

    function z() {
        i.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), x.ready()
    }
    x.fn.ready = function(e) {
        return H.then(e).catch(function(e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || H.resolveWith(i, [x]))
        }
    }), x.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var I = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in r = !0, n) I(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                return c.call(x(e), n)
            })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        R = /^-ms-/,
        W = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(R, "ms-").replace(W, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = x.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[X(t)] = n;
            else
                for (i in t) r[X(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(B) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), K(o, i, r[i]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : I(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Q.get(o, e))) return n;
                    if (void 0 !== (n = K(o, e))) return n
                } else this.each(function() {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = x._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                x.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = x.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        },
        re = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            u = (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, x.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var se = {};

    function ae(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = se[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = x.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r)
    }

    function le(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    x.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? x.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var ge = /<|&#?\w+;/;

    function ve(e, t, n, i, r) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === b(o)) x.merge(p, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = pe[a] || pe._default, s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                    x.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
                } else p.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = p[f++];)
            if (i && x.inArray(o, i) > -1) r && r.push(o);
            else if (c = x.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), c && he(s), n)
                for (u = 0; o = s[u++];) de.test(o.type || "") && n.push(o);
        return d
    }! function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var me = i.documentElement,
        ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function ke() {
        return !1
    }

    function Te() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function Se(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ke;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function() {
            x.event.add(this, t, r, i, n)
        })
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, f, h, g, v = Y.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && x.find.matchesSelector(me, r), n.guid || (n.guid = x.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                    return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(B) || [""]).length; c--;) f = g = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = x.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = x.event.special[f] || {}, u = x.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && x.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, f, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(B) || [""]).length; c--;)
                    if (f = g = (a = xe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = x.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || x.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = x.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = x.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, c), t = 0;
                     (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                         (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? x(r, this).index(c) > -1 : x.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return A(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                x.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        $e = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ee(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) x.event.add(t, r, c[r][n]);
            Q.hasData(e) && (a = Q.access(e), l = x.extend({}, a), Q.set(t, l))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Le(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, d = 0,
            p = e.length,
            f = p - 1,
            v = t[0],
            m = g(v);
        if (m || p > 1 && "string" == typeof v && !h.checkClone && Ae.test(v)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = v.call(this, r, o.html())), Le(o, t, n, i)
        });
        if (p && (o = (r = ve(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = x.map(fe(r, "script"), De)).length; d < p; d++) c = r, d !== f && (c = x.clone(c, !0, !0), l && x.merge(a, fe(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, x.map(a, je), d = 0; d < l; d++) c = a[d], de.test(c.type || "") && !Y.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(c.src) : y(c.textContent.replace(Fe, ""), u, c))
        }
        return e
    }

    function Be(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || x.cleanData(fe(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && he(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = x.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = fe(a), i = 0, r = (o = fe(e)).length; i < r; i++) Me(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || fe(e), s = s || fe(a), i = 0, r = o.length; i < r; i++) Ne(o[i], s[i]);
                else Ne(e, a);
            return (s = fe(a, "script")).length > 0 && he(s, !l && fe(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return I(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ee(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return I(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(fe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], r = x(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), x(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var _e = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Pe = new RegExp(ne.join("|"), "i");

    function Oe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), !h.pixelBoxStyles() && _e.test(s) && Pe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function He(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", me.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ie = /^--/,
        Re = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ue = ["Webkit", "Moz", "ms"],
        Xe = i.createElement("div").style;

    function Ve(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function(e) {
            if (e in Xe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ye(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= x.css(e, "border" + ne[s] + "Width", !0, r))) : (l += x.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += x.css(e, "border" + ne[s] + "Width", !0, r) : a += x.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Qe(e, t, n) {
        var i = qe(e),
            r = Oe(e, t, i),
            o = "border-box" === x.css(e, "boxSizing", !1, i),
            s = o;
        if (_e.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (h.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ye(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Ze(e, t, n, i, r) {
        return new Ze.prototype.init(e, t, n, i, r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Oe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = X(t),
                    l = Ie.test(t),
                    c = e.style;
                if (l || (t = Ve(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (x.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = X(t);
            return Ie.test(t) || (t = Ve(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Oe(e, t, i)), "normal" === r && t in We && (r = We[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ze.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, i) : re(e, Re, function() {
                    return Qe(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = qe(e),
                    s = "border-box" === x.css(e, "boxSizing", !1, o),
                    a = i && Ye(e, t, i, s, o);
                return s && h.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ge(0, n, a)
            }
        }
    }), x.cssHooks.marginLeft = He(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ge)
    }), x.fn.extend({
        css: function(e, t) {
            return I(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = qe(e), r = t.length; s < r; s++) o[t[s]] = x.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), x.Tween = Ze, Ze.prototype = {
        constructor: Ze,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this
        }
    }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Ze.prototype.init, x.fx.step = {};
    var Je, Ke, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function nt() {
        Ke && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, x.fx.interval), x.fx.tick())
    }

    function it() {
        return e.setTimeout(function() {
            Je = void 0
        }), Je = Date.now()
    }

    function rt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, n) {
        for (var i, r = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function st(e, t, n) {
        var i, r, o = 0,
            s = st.prefilters.length,
            a = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Je || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || it(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = X(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                    for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                else t[i] = r
        }(u, c.opts.specialEasing); o < s; o++)
            if (i = st.prefilters[o].call(c, e, u, c.opts)) return g(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(u, ot, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(B);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                g = e.nodeType && ie(e),
                v = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
                if (r = t[i], et.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        g = !0
                    }
                    f[i] = v && v[i] || x.style(e, i)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = Y.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = x.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done(function() {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: c
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (i in g || le([e]), Y.remove(e, "fxshow"), f) x.style(e, i, f[i])
                })), l = ot(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = x.isEmptyObject(e),
                o = x.speed(t, n, i),
                s = function() {
                    var t = st(this, x.extend({}, e), o);
                    (r || Y.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = x.timers,
                    s = Y.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && tt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Y.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = x.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
        }
    }), x.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Je = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Ke || (Ke = !0, nt())
    }, x.fx.stop = function() {
        Ke = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var at, lt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return I(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(B);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), at = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || x.find.attr;
        lt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = lt[s], lt[s] = r, r = null != n(e, t, i) ? s : null, lt[s] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(B) || []).join(" ")
    }

    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ft(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return I(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, pt(this)))
            });
            if ((t = ft(e)).length)
                for (; n = this[l++];)
                    if (r = pt(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, pt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = ft(e)).length)
                for (; n = this[l++];)
                    if (r = pt(n), i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, pt(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = x(this), s = ft(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = pt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + dt(pt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : dt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = x.makeArray(t), s = r.length; s--;)((i = r[s]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, h.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, c, u, p, f, h, m = [r || i],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !v(r)) {
                    for (c = f.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) m.push(a), l = a;
                    l === (r.ownerDocument || i) && m.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                     (a = m[s++]) && !t.isPropagationStopped();) h = a, t.type = s > 1 ? c : f.bindType || y, (p = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && p.apply(a, n), (p = u && a[u]) && p.apply && V(a) && (t.result = p.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), n) || !V(r) || u && g(r[y]) && !v(r) && ((l = r[u]) && (r[u] = null), x.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, vt), r[y](), t.isPropagationStopped() && h.removeEventListener(y, vt), x.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), h.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Y.access(i, t);
                r || i.addEventListener(e, n, !0), Y.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Y.access(i, t) - 1;
                r ? Y.access(i, t, r) : (i.removeEventListener(e, n, !0), Y.remove(i, t))
            }
        }
    });
    var mt = e.location,
        yt = Date.now(),
        bt = /\?/;
    x.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n
    };
    var xt = /\[\]$/,
        wt = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;

    function St(e, t, n, i) {
        var r;
        if (Array.isArray(t)) x.each(t, function(t, r) {
            n || xt.test(e) ? i(e, r) : St(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) St(e + "[" + r + "]", t[r], n, i)
    }
    x.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) St(n, e[n], t, r);
        return i.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && Tt.test(this.nodeName) && !kt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            }).get()
        }
    });
    var Ct = /%20/g,
        $t = /#.*$/,
        At = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Et = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        jt = {},
        Nt = {},
        Mt = "*/".concat("*"),
        Lt = i.createElement("a");

    function Bt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(B) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function _t(e, t, n, i) {
        var r = {},
            o = e === Nt;

        function s(a) {
            var l;
            return r[a] = !0, x.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function qt(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    Lt.href = mt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, x.ajaxSettings), t) : qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(jt),
        ajaxTransport: Bt(Nt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, d, p, f, h = x.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                m = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                k = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Ft.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (m.promise(S), h.url = ((t || h.url || mt.href) + "").replace(Dt, mt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(B) || [""], null == h.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), _t(jt, h, n, S), u) return S;
            for (p in (d = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Et.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ct, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (bt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(At, "$1"), f = (bt.test(o) ? "&" : "?") + "_=" + yt++ + f), h.url = o + f), h.ifModified && (x.lastModified[o] && S.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && S.setRequestHeader("If-None-Match", x.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
            if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = _t(Nt, h, n, S)) {
                if (S.readyState = 1, d && v.trigger("ajaxSend", [S, h]), u) return S;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, r.send(w, C)
                } catch (e) {
                    if (u) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, a) {
                var c, p, f, w, k, T = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, S, i)), w = function(e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, S, c), c ? (h.ifModified && ((k = S.getResponseHeader("Last-Modified")) && (x.lastModified[o] = k), (k = S.getResponseHeader("etag")) && (x.etag[o] = k)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, c = !(f = w.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || T) + "", c ? m.resolveWith(g, [p, T, S]) : m.rejectWith(g, [S, T, f]), S.statusCode(b), b = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]), y.fireWith(g, [S, T]), d && (v.trigger("ajaxComplete", [S, h]), --x.active || x.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, t) {
        x[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Pt = {
            0: 200,
            1223: 204
        },
        Ot = x.ajaxSettings.xhr();
    h.cors = !!Ot && "withCredentials" in Ot, h.ajax = Ot = !!Ot, x.ajaxTransport(function(t) {
        var n, i;
        if (h.cors || Ot && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Pt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, o) {
                t = x("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ht = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || x.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || x.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? x(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), h.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = F.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, s), s && s.length && x(s).remove(), x.merge([], o.childNodes)));
        var r, o, s
    }, x.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = dt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = x.css(e, "position"),
                u = x(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(i, "marginTop", !0),
                    left: t.left - r.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || me
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
            return I(this, function(e, i, r) {
                var o;
                if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), x.each(["top", "left"], function(e, t) {
        x.cssHooks[t] = He(h.pixelPosition, function(e, n) {
            if (n) return n = Oe(e, t), _e.test(n) ? x(e).position()[t] + "px" : n
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            x.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return I(this, function(t, n, r) {
                    var o;
                    return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? x.css(t, n, a) : x.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), x.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = g, x.isWindow = v, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var It = e.jQuery,
        Rt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Rt), t && e.jQuery === x && (e.jQuery = It), x
    }, t || (e.jQuery = e.$ = x), x
}),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
    }(function(e) {
        var t, n = navigator.userAgent,
            i = /iphone/i.test(n),
            r = /chrome/i.test(n),
            o = /android/i.test(n);
        e.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, e.fn.extend({
            caret: function(e, t) {
                var n;
                if (0 !== this.length && !this.is(":hidden") && this.get(0) === document.activeElement) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
                })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                    begin: e,
                    end: t
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(n, s) {
                var a, l, c, u, d, p, f;
                if (!n && this.length > 0) {
                    var h = e(this[0]).data(e.mask.dataName);
                    return h ? h() : void 0
                }
                return s = e.extend({
                    autoclear: e.mask.autoclear,
                    placeholder: e.mask.placeholder,
                    completed: null
                }, s), a = e.mask.definitions, l = [], c = p = n.length, u = null, n = String(n), e.each(n.split(""), function(e, t) {
                    "?" == t ? (p--, c = e) : a[t] ? (l.push(new RegExp(a[t])), null === u && (u = l.length - 1), e < c && (d = l.length - 1)) : l.push(null)
                }), this.trigger("unmask").each(function() {
                    var h = e(this),
                        g = e.map(n.split(""), function(e, t) {
                            if ("?" != e) return a[e] ? b(t) : e
                        }),
                        v = g.join(""),
                        m = h.val();

                    function y() {
                        if (s.completed) {
                            for (var e = u; e <= d; e++)
                                if (l[e] && g[e] === b(e)) return;
                            s.completed.call(h)
                        }
                    }

                    function b(e) {
                        return e < s.placeholder.length ? s.placeholder.charAt(e) : s.placeholder.charAt(0)
                    }

                    function x(e) {
                        for (; ++e < p && !l[e];);
                        return e
                    }

                    function w(e, t) {
                        var n, i;
                        if (!(e < 0)) {
                            for (n = e, i = x(t); n < p; n++)
                                if (l[n]) {
                                    if (!(i < p && l[n].test(g[i]))) break;
                                    g[n] = g[i], g[i] = b(i), i = x(i)
                                }
                            S(), h.caret(Math.max(u, e))
                        }
                    }

                    function k(e) {
                        C(), h.val() != m && h.change()
                    }

                    function T(e, t) {
                        var n;
                        for (n = e; n < t && n < p; n++) l[n] && (g[n] = b(n))
                    }

                    function S() {
                        h.val(g.join(""))
                    }

                    function C(e) {
                        var t, n, i, r = h.val(),
                            o = -1;
                        for (t = 0, i = 0; t < p; t++)
                            if (l[t]) {
                                for (g[t] = b(t); i++ < r.length;)
                                    if (n = r.charAt(i - 1), l[t].test(n)) {
                                        g[t] = n, o = t;
                                        break
                                    }
                                if (i > r.length) {
                                    T(t + 1, p);
                                    break
                                }
                            } else g[t] === r.charAt(i) && i++, t < c && (o = t);
                        return e ? S() : o + 1 < c ? s.autoclear || g.join("") === v ? (h.val() && h.val(""), T(0, p)) : S() : (S(), h.val(h.val().substring(0, o + 1))), c ? t : u
                    }
                    h.data(e.mask.dataName, function() {
                        return e.map(g, function(e, t) {
                            return l[t] && e != b(t) ? e : null
                        }).join("")
                    }), h.one("unmask", function() {
                        h.off(".mask").removeData(e.mask.dataName)
                    }).on("focus.mask", function() {
                        var e;
                        h.prop("readonly") || (clearTimeout(t), m = h.val(), e = C(), t = setTimeout(function() {
                            h.get(0) === document.activeElement && (S(), e == n.replace("?", "").length ? h.caret(0, e) : h.caret(e))
                        }, 10))
                    }).on("blur.mask", k).on("keydown.mask", function(e) {
                        if (!h.prop("readonly")) {
                            var t, n, r, o = e.which || e.keyCode;
                            f = h.val(), 8 === o || 46 === o || i && 127 === o ? (n = (t = h.caret()).begin, (r = t.end) - n == 0 && (n = 46 !== o ? function(e) {
                                for (; --e >= 0 && !l[e];);
                                return e
                            }(n) : r = x(n - 1), r = 46 === o ? x(r) : r), T(n, r), w(n, r - 1), e.preventDefault()) : 13 === o ? k.call(this, e) : 27 === o && (h.val(m), h.caret(0, C()), e.preventDefault())
                        }
                    }).on("keypress.mask", function(t) {
                        if (!h.prop("readonly")) {
                            var n, i, r, s = t.which || t.keyCode,
                                a = h.caret();
                            t.ctrlKey || t.altKey || t.metaKey || s < 32 || !s || 13 === s || (a.end - a.begin != 0 && (T(a.begin, a.end), w(a.begin, a.end - 1)), (n = x(a.begin - 1)) < p && (i = String.fromCharCode(s), l[n].test(i)) && (function(e) {
                                var t, n, i, r;
                                for (t = e, n = b(e); t < p; t++)
                                    if (l[t]) {
                                        if (i = x(t), r = g[t], g[t] = n, !(i < p && l[i].test(r))) break;
                                        n = r
                                    }
                            }(n), g[n] = i, S(), r = x(n), o ? setTimeout(function() {
                                e.proxy(e.fn.caret, h, r)()
                            }, 0) : h.caret(r), a.begin <= d && y()), t.preventDefault())
                        }
                    }).on("input.mask paste.mask", function() {
                        h.prop("readonly") || setTimeout(function() {
                            var e = C(!0);
                            h.caret(e), y()
                        }, 0)
                    }), r && o && h.off("input.mask").on("input.mask", function(e) {
                        var t = h.val(),
                            n = h.caret();
                        if (f && f.length && f.length > t.length) {
                            for (C(!0); n.begin > 0 && !l[n.begin - 1];) n.begin--;
                            if (0 === n.begin)
                                for (; n.begin < u && !l[n.begin];) n.begin++;
                            h.caret(n.begin, n.begin)
                        } else {
                            C(!0);
                            var i = t.charAt(n.begin);
                            n.begin < p && (l[n.begin] ? l[n.begin].test(i) && n.begin++ : (n.begin++, l[n.begin].test(i) && n.begin++)), h.caret(n.begin, n.begin)
                        }
                        y()
                    }), C()
                })
            }
        })
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(n, i) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(n), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = e(n).data("slick") || {}, o.options = e.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
            var r = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= r.slideCount) return !1;
            r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : i ? e(t).insertBefore(r.$slides.eq(n)) : e(t).insertAfter(r.$slides.eq(n)) : !0 === i ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                r = this;
            r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
                left: t
            }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
                top: t
            }, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({
                animStart: r.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === r.options.vertical ? (i[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
                r.disableTransition(), n.call()
            }, r.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function(t) {
            var n = this.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (!0 === i.options.dots) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, n, i, r, o, s, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = e * s + (t * a.options.slidesPerRow + n);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, n) {
            var i, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in r = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = r), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function(t, n) {
            var i, r, o = this,
                s = e(t.currentTarget);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
                case "previous":
                    r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, n);
                    break;
                case "next":
                    r = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, n);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, n;
            if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, i, r, o = this,
                s = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                n = 0,
                i = 0,
                r = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) r.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return r
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(r, o) {
                if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft) return t = o, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
                var r = i.indexOf(n);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1
                }), -1 !== r && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + r
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(r) {
                var o = i[r];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + r,
                    "aria-controls": "slick-slide" + t.instanceUid + o,
                    "aria-label": r + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++) t.$slides.eq(r).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), o.$slider.trigger("lazyLoaded", [o, t, n])
                        })
                    }, s.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
                    }, s.src = n
                })
            }
            var n, i, r, o = this;
            if (!0 === o.options.centerMode ? !0 === o.options.infinite ? r = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, r <= o.slideCount && r++)), n = o.$slider.find(".slick-slide").slice(i, r), "anticipated" === o.options.lazyLoad)
                for (var s = i - 1, a = r, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
            t(n), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var n = this;
            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var n, i, r, o, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), r = n.attr("data-srcset"), o = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                r && (n.attr("srcset", r), o && n.attr("sizes", o)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function() {
                t < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var n, i, r = this;
            i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
                currentSlide: n
            }), r.init(), t || r.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, n, i, r = this,
                o = r.options.responsive || null;
            if ("array" === e.type(o) && o.length) {
                for (t in r.respondTo = r.options.respondTo || "window", o)
                    if (i = r.breakpoints.length - 1, o.hasOwnProperty(t)) {
                        for (n = o[t].breakpoint; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                        r.breakpoints.push(n), r.breakpointSettings[n] = o[t].settings
                    }
                r.breakpoints.sort(function(e, t) {
                    return r.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                r = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", r[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(r)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, r) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(r).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(r).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, n, i, r, o, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = r;
            else if ("multiple" === o) e.each(i, function(e, t) {
                s.options[e] = t
            });
            else if ("responsive" === o)
                for (n in r)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [r[n]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === r[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(r[n])
                    }
            a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, r, o = this;
            if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
                var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, r = this;
            if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
                for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - i; t -= 1) n = t - 1, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + r.slideCount; t += 1) n = t, e(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                r = parseInt(i.attr("data-slick-index"));
            r || (r = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(r, !1, !0) : n.slideHandler(r)
        }, t.prototype.slideHandler = function(e, t, n) {
            var i, r, o, s, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
                else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                        c.postSlide(r)
                    })) : c.postSlide(r), void c.animateHeight();
                    !0 !== n ? c.animateSlide(l, function() {
                        c.postSlide(r)
                    }) : c.postSlide(r)
                }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, r = this;
            return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === r.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, r, o, s, a = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * r : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, n, i = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof r || void 0 === r ? i[e].slick = new t(i[e], r) : n = i[e].slick[r].apply(i[e].slick, o), void 0 !== n) return n;
            return i
        }
    }),
    function(e) {
        var t, n, i = "0.5.0",
            r = "hasOwnProperty",
            o = /[\.\/]/,
            s = /\s*,\s*/,
            a = function(e, t) {
                return e - t
            },
            l = {
                n: {}
            },
            c = function() {
                for (var e = 0, t = this.length; t > e; e++)
                    if (void 0 !== this[e]) return this[e]
            },
            u = function() {
                for (var e = this.length; --e;)
                    if (void 0 !== this[e]) return this[e]
            },
            d = Object.prototype.toString,
            p = String,
            f = Array.isArray || function(e) {
                return e instanceof Array || "[object Array]" == d.call(e)
            };
        eve = function(e, i) {
            var r, o = n,
                s = Array.prototype.slice.call(arguments, 2),
                l = eve.listeners(e),
                d = 0,
                p = [],
                f = {},
                h = [],
                g = t;
            h.firstDefined = c, h.lastDefined = u, t = e, n = 0;
            for (var v = 0, m = l.length; m > v; v++) "zIndex" in l[v] && (p.push(l[v].zIndex), l[v].zIndex < 0 && (f[l[v].zIndex] = l[v]));
            for (p.sort(a); p[d] < 0;)
                if (r = f[p[d++]], h.push(r.apply(i, s)), n) return n = o, h;
            for (v = 0; m > v; v++)
                if ("zIndex" in (r = l[v]))
                    if (r.zIndex == p[d]) {
                        if (h.push(r.apply(i, s)), n) break;
                        do {
                            if ((r = f[p[++d]]) && h.push(r.apply(i, s)), n) break
                        } while (r)
                    } else f[r.zIndex] = r;
                else if (h.push(r.apply(i, s)), n) break;
            return n = o, t = g, h
        }, eve._events = l, eve.listeners = function(e) {
            var t, n, i, r, s, a, c, u, d = f(e) ? e : e.split(o),
                p = l,
                h = [p],
                g = [];
            for (r = 0, s = d.length; s > r; r++) {
                for (u = [], a = 0, c = h.length; c > a; a++)
                    for (n = [(p = h[a].n)[d[r]], p["*"]], i = 2; i--;)(t = n[i]) && (u.push(t), g = g.concat(t.f || []));
                h = u
            }
            return g
        }, eve.separator = function(e) {
            e ? (e = "[" + (e = p(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", o = new RegExp(e)) : o = /[\.\/]/
        }, eve.on = function(e, t) {
            if ("function" != typeof t) return function() {};
            for (var n = f(e) ? f(e[0]) ? e : [e] : p(e).split(s), i = 0, r = n.length; r > i; i++) ! function(e) {
                for (var n, i = f(e) ? e : p(e).split(o), r = l, s = 0, a = i.length; a > s; s++) r = (r = r.n).hasOwnProperty(i[s]) && r[i[s]] || (r[i[s]] = {
                    n: {}
                });
                for (r.f = r.f || [], s = 0, a = r.f.length; a > s; s++)
                    if (r.f[s] == t) {
                        n = !0;
                        break
                    }!n && r.f.push(t)
            }(n[i]);
            return function(e) {
                +e == +e && (t.zIndex = +e)
            }
        }, eve.f = function(e) {
            var t = [].slice.call(arguments, 1);
            return function() {
                eve.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
            }
        }, eve.stop = function() {
            n = 1
        }, eve.nt = function(e) {
            var n = f(t) ? t.join(".") : t;
            return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(n) : n
        }, eve.nts = function() {
            return f(t) ? t : t.split(o)
        }, eve.off = eve.unbind = function(e, t) {
            if (e) {
                var n = f(e) ? f(e[0]) ? e : [e] : p(e).split(s);
                if (n.length > 1)
                    for (var i = 0, a = n.length; a > i; i++) eve.off(n[i], t);
                else {
                    n = f(e) ? e : p(e).split(o);
                    var c, u, d, h, g, v = [l],
                        m = [];
                    for (i = 0, a = n.length; a > i; i++)
                        for (h = 0; h < v.length; h += d.length - 2) {
                            if (d = [h, 1], c = v[h].n, "*" != n[i]) c[n[i]] && (d.push(c[n[i]]), m.unshift({
                                n: c,
                                name: n[i]
                            }));
                            else
                                for (u in c) c[r](u) && (d.push(c[u]), m.unshift({
                                    n: c,
                                    name: u
                                }));
                            v.splice.apply(v, d)
                        }
                    for (i = 0, a = v.length; a > i; i++)
                        for (c = v[i]; c.n;) {
                            if (t) {
                                if (c.f) {
                                    for (h = 0, g = c.f.length; g > h; h++)
                                        if (c.f[h] == t) {
                                            c.f.splice(h, 1);
                                            break
                                        }!c.f.length && delete c.f
                                }
                                for (u in c.n)
                                    if (c.n[r](u) && c.n[u].f) {
                                        var y = c.n[u].f;
                                        for (h = 0, g = y.length; g > h; h++)
                                            if (y[h] == t) {
                                                y.splice(h, 1);
                                                break
                                            }!y.length && delete c.n[u].f
                                    }
                            } else
                                for (u in delete c.f, c.n) c.n[r](u) && c.n[u].f && delete c.n[u].f;
                            c = c.n
                        }
                    e: for (i = 0, a = m.length; a > i; i++) {
                        for (u in (c = m[i]).n[c.name].f) continue e;
                        for (u in c.n[c.name].n) continue e;
                        delete c.n[c.name]
                    }
                }
            } else eve._events = l = {
                n: {}
            }
        }, eve.once = function(e, t) {
            var n = function() {
                return eve.off(e, n), t.apply(this, arguments)
            };
            return eve.on(e, n)
        }, eve.version = i, eve.toString = function() {
            return "You are running Eve " + i
        }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
            return eve
        }) : e.eve = eve
    }(this),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["eve"], function(n) {
            return t(e, n)
        });
        else if ("undefined" != typeof exports) {
            var n = require("eve");
            module.exports = t(e, n)
        } else t(e, e.eve)
    }(window || this, function(e, t) {
        var n = function(t) {
                var n, i = {},
                    r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
                        return setTimeout(e, 16, (new Date).getTime()), !0
                    },
                    o = Array.isArray || function(e) {
                        return e instanceof Array || "[object Array]" == Object.prototype.toString.call(e)
                    },
                    s = 0,
                    a = "M" + (+new Date).toString(36),
                    l = function() {
                        return a + (s++).toString(36)
                    },
                    c = Date.now || function() {
                        return +new Date
                    },
                    u = function(e) {
                        var t = this;
                        if (null == e) return t.s;
                        var n = t.s - e;
                        t.b += t.dur * n, t.B += t.dur * n, t.s = e
                    },
                    d = function(e) {
                        return null == e ? this.spd : void(this.spd = e)
                    },
                    p = function(e) {
                        var t = this;
                        return null == e ? t.dur : (t.s = t.s * e / t.dur, void(t.dur = e))
                    },
                    f = function() {
                        var e = this;
                        delete i[e.id], e.update(), t("mina.stop." + e.id, e)
                    },
                    h = function() {
                        var e = this;
                        e.pdif || (delete i[e.id], e.update(), e.pdif = e.get() - e.b)
                    },
                    g = function() {
                        var e = this;
                        e.pdif && (e.b = e.get() - e.pdif, delete e.pdif, i[e.id] = e, m())
                    },
                    v = function() {
                        var e, t = this;
                        if (o(t.start)) {
                            e = [];
                            for (var n = 0, i = t.start.length; i > n; n++) e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s)
                        } else e = +t.start + (t.end - t.start) * t.easing(t.s);
                        t.set(e)
                    },
                    m = function(e) {
                        if (e) {
                            var o = 0;
                            for (var s in i)
                                if (i.hasOwnProperty(s)) {
                                    var a = i[s],
                                        l = a.get();
                                    o++, a.s = (l - a.b) / (a.dur / a.spd), a.s >= 1 && (delete i[s], a.s = 1, o--, function(e) {
                                        setTimeout(function() {
                                            t("mina.finish." + e.id, e)
                                        })
                                    }(a)), a.update()
                                }
                            n = !!o && r(m)
                        } else n || (n = r(m))
                    },
                    y = function(e, t, n, r, o, s, a) {
                        var c = {
                            id: l(),
                            start: e,
                            end: t,
                            b: n,
                            s: 0,
                            dur: r - n,
                            spd: 1,
                            get: o,
                            set: s,
                            easing: a || y.linear,
                            status: u,
                            speed: d,
                            duration: p,
                            stop: f,
                            pause: h,
                            resume: g,
                            update: v
                        };
                        i[c.id] = c;
                        var b, x = 0;
                        for (b in i)
                            if (i.hasOwnProperty(b) && 2 == ++x) break;
                        return 1 == x && m(), c
                    };
                return y.time = c, y.getById = function(e) {
                    return i[e] || null
                }, y.linear = function(e) {
                    return e
                }, y.easeout = function(e) {
                    return Math.pow(e, 1.7)
                }, y.easein = function(e) {
                    return Math.pow(e, .48)
                }, y.easeinout = function(e) {
                    if (1 == e) return 1;
                    if (0 == e) return 0;
                    var t = .48 - e / 1.04,
                        n = Math.sqrt(.1734 + t * t),
                        i = n - t,
                        r = -n - t,
                        o = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1) + .5;
                    return 3 * (1 - o) * o * o + o * o * o
                }, y.backin = function(e) {
                    if (1 == e) return 1;
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                }, y.backout = function(e) {
                    if (0 == e) return 0;
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                }, y.elastic = function(e) {
                    return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - .075) * (2 * Math.PI) / .3) + 1
                }, y.bounce = function(e) {
                    var t = 7.5625,
                        n = 2.75;
                    return 1 / n > e ? t * e * e : 2 / n > e ? t * (e -= 1.5 / n) * e + .75 : 2.5 / n > e ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                }, e.mina = y, y
            }(void 0 === t ? function() {} : t),
            i = function(e) {
                function n(e, t) {
                    if (e) {
                        if (e.nodeType) return f(e);
                        if (r(e, "array") && n.set) return n.set.apply(n, e);
                        if (e instanceof c) return e;
                        if (null == t) return f(e = h.doc.querySelector(String(e)))
                    }
                    return new p(e = null == e ? "100%" : e, t = null == t ? "100%" : t)
                }

                function i(e, t) {
                    if (t) {
                        if ("#text" == e && (e = h.doc.createTextNode(t.text || t["#text"] || "")), "#comment" == e && (e = h.doc.createComment(t.text || t["#text"] || "")), "string" == typeof e && (e = i(e)), "string" == typeof t) return 1 == e.nodeType ? "xlink:" == t.substring(0, 6) ? e.getAttributeNS(_, t.substring(6)) : "xml:" == t.substring(0, 4) ? e.getAttributeNS(q, t.substring(4)) : e.getAttribute(t) : "text" == t ? e.nodeValue : null;
                        if (1 == e.nodeType) {
                            for (var n in t)
                                if (t[v](n)) {
                                    var r = m(t[n]);
                                    r ? "xlink:" == n.substring(0, 6) ? e.setAttributeNS(_, n.substring(6), r) : "xml:" == n.substring(0, 4) ? e.setAttributeNS(q, n.substring(4), r) : e.setAttribute(n, r) : e.removeAttribute(n)
                                }
                        } else "text" in t && (e.nodeValue = t.text)
                    } else e = h.doc.createElementNS(q, e);
                    return e
                }

                function r(e, t) {
                    return "finite" == (t = m.prototype.toLowerCase.call(t)) ? isFinite(e) : !("array" != t || !(e instanceof Array || Array.isArray && Array.isArray(e))) || "null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || $.call(e).slice(8, -1).toLowerCase() == t
                }

                function o(e, t, n) {
                    return function i() {
                        var r = Array.prototype.slice.call(arguments, 0),
                            o = r.join("␀"),
                            s = i.cache = i.cache || {},
                            a = i.count = i.count || [];
                        return s[v](o) ? (function(e, t) {
                            for (var n = 0, i = e.length; i > n; n++)
                                if (e[n] === t) return e.push(e.splice(n, 1)[0])
                        }(a, o), n ? n(s[o]) : s[o]) : (a.length >= 1e3 && delete s[a.shift()], a.push(o), s[o] = e.apply(t, r), n ? n(s[o]) : s[o])
                    }
                }

                function s(e) {
                    return e % 360 * S / 180
                }

                function a(e) {
                    return e.node.ownerSVGElement && f(e.node.ownerSVGElement) || n.select("svg")
                }

                function l(e) {
                    r(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
                    for (var t = 0, n = 0, i = this.node; this[t];) delete this[t++];
                    for (t = 0; t < e.length; t++) "set" == e[t].type ? e[t].forEach(function(e) {
                        i.appendChild(e.node)
                    }) : i.appendChild(e[t].node);
                    var o = i.childNodes;
                    for (t = 0; t < o.length; t++) this[n++] = f(o[t]);
                    return this
                }

                function c(e) {
                    if (e.snap in P) return P[e.snap];
                    var t;
                    try {
                        t = e.ownerSVGElement
                    } catch (e) {}
                    this.node = e, t && (this.paper = new p(t)), this.type = e.tagName || e.nodeName;
                    var n = this.id = B(this);
                    if (this.anims = {}, this._ = {
                        transform: []
                    }, e.snap = n, P[n] = this, "g" == this.type && (this.add = l), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1,
                        symbol: 1
                    })
                        for (var i in p.prototype) p.prototype[v](i) && (this[i] = p.prototype[i])
                }

                function u(e) {
                    this.node = e
                }

                function d(e, t) {
                    var n = i(e);
                    return t.appendChild(n), f(n)
                }

                function p(e, t) {
                    var n, r, o, s = p.prototype;
                    if (e && e.tagName && "svg" == e.tagName.toLowerCase()) {
                        if (e.snap in P) return P[e.snap];
                        var a = e.ownerDocument;
                        for (var l in n = new c(e), r = e.getElementsByTagName("desc")[0], o = e.getElementsByTagName("defs")[0], r || ((r = i("desc")).appendChild(a.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = i("defs"), n.node.appendChild(o)), n.defs = o, s) s[v](l) && (n[l] = s[l]);
                        n.paper = n.root = n
                    } else i((n = d("svg", h.doc.body)).node, {
                        height: t,
                        version: 1.1,
                        width: e,
                        xmlns: q
                    });
                    return n
                }

                function f(e) {
                    return e ? e instanceof c || e instanceof u ? e : e.tagName && "svg" == e.tagName.toLowerCase() ? new p(e) : e.tagName && "object" == e.tagName.toLowerCase() && "image/svg+xml" == e.type ? new p(e.contentDocument.getElementsByTagName("svg")[0]) : new c(e) : e
                }
                n.version = "0.5.1", n.toString = function() {
                    return "Snap v" + this.version
                }, n._ = {};
                var h = {
                    win: e.window,
                    doc: e.window.document
                };
                n._.glob = h;
                var v = "hasOwnProperty",
                    m = String,
                    y = parseFloat,
                    b = parseInt,
                    x = Math,
                    w = x.max,
                    k = x.min,
                    T = x.abs,
                    S = (x.pow, x.PI),
                    C = (x.round, ""),
                    $ = Object.prototype.toString,
                    A = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    F = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    E = {
                        hs: 1,
                        rg: 1
                    },
                    D = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    j = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    N = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                    M = 0,
                    L = "S" + (+new Date).toString(36),
                    B = function(e) {
                        return (e && e.type ? e.type : C) + L + (M++).toString(36)
                    },
                    _ = "http://www.w3.org/1999/xlink",
                    q = "http://www.w3.org/2000/svg",
                    P = {};
                n.url = function(e) {
                    return "url('#" + e + "')"
                }, n._.$ = i, n._.id = B, n.format = function() {
                    var e = /\{([^\}]+)\}/g,
                        t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        n = function(e, n, i) {
                            var r = i;
                            return n.replace(t, function(e, t, n, i, o) {
                                t = t || i, r && (t in r && (r = r[t]), "function" == typeof r && o && (r = r()))
                            }), r = (null == r || r == i ? e : r) + ""
                        };
                    return function(t, i) {
                        return m(t).replace(e, function(e, t) {
                            return n(e, t, i)
                        })
                    }
                }(), n._.clone = function e(t) {
                    if ("function" == typeof t || Object(t) !== t) return t;
                    var n = new t.constructor;
                    for (var i in t) t[v](i) && (n[i] = e(t[i]));
                    return n
                }, n._.cacher = o, n.rad = s, n.deg = function(e) {
                    return 180 * e / S % 360
                }, n.sin = function(e) {
                    return x.sin(n.rad(e))
                }, n.tan = function(e) {
                    return x.tan(n.rad(e))
                }, n.cos = function(e) {
                    return x.cos(n.rad(e))
                }, n.asin = function(e) {
                    return n.deg(x.asin(e))
                }, n.acos = function(e) {
                    return n.deg(x.acos(e))
                }, n.atan = function(e) {
                    return n.deg(x.atan(e))
                }, n.atan2 = function(e) {
                    return n.deg(x.atan2(e))
                }, n.angle = function e(t, n, i, r, o, s) {
                    if (null == o) {
                        var a = t - i,
                            l = n - r;
                        return a || l ? (180 + 180 * x.atan2(-l, -a) / S + 360) % 360 : 0
                    }
                    return e(t, n, o, s) - e(i, r, o, s)
                }, n.len = function(e, t, i, r) {
                    return Math.sqrt(n.len2(e, t, i, r))
                }, n.len2 = function(e, t, n, i) {
                    return (e - n) * (e - n) + (t - i) * (t - i)
                }, n.closestPoint = function(e, t, n) {
                    function i(e) {
                        var i = e.x - t,
                            r = e.y - n;
                        return i * i + r * r
                    }
                    for (var r, o, s, a, l = e.node, c = l.getTotalLength(), u = c / l.pathSegList.numberOfItems * .125, d = 1 / 0, p = 0; c >= p; p += u)(a = i(s = l.getPointAtLength(p))) < d && (r = s, o = p, d = a);
                    for (u *= .5; u > .5;) {
                        var f, h, g, v, m, y;
                        (g = o - u) >= 0 && (m = i(f = l.getPointAtLength(g))) < d ? (r = f, o = g, d = m) : (v = o + u) <= c && (y = i(h = l.getPointAtLength(v))) < d ? (r = h, o = v, d = y) : u *= .5
                    }
                    return {
                        x: r.x,
                        y: r.y,
                        length: o,
                        distance: Math.sqrt(d)
                    }
                }, n.is = r, n.snapTo = function(e, t, n) {
                    if (n = r(n, "finite") ? n : 10, r(e, "array")) {
                        for (var i = e.length; i--;)
                            if (T(e[i] - t) <= n) return e[i]
                    } else {
                        var o = t % (e = +e);
                        if (n > o) return t - o;
                        if (o > e - n) return t - o + e
                    }
                    return t
                }, n.getRGB = o(function(e) {
                    if (!e || (e = m(e)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: I
                    };
                    if ("none" == e) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: I
                    };
                    if (!(E[v](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = O(e)), !e) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: I
                    };
                    var t, i, o, s, a, l, c = e.match(A);
                    return c ? (c[2] && (o = b(c[2].substring(5), 16), i = b(c[2].substring(3, 5), 16), t = b(c[2].substring(1, 3), 16)), c[3] && (o = b((a = c[3].charAt(3)) + a, 16), i = b((a = c[3].charAt(2)) + a, 16), t = b((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4].split(F), t = y(l[0]), "%" == l[0].slice(-1) && (t *= 2.55), i = y(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), o = y(l[2]), "%" == l[2].slice(-1) && (o *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), c[5] ? (l = c[5].split(F), t = y(l[0]), "%" == l[0].slice(-1) && (t /= 100), i = y(l[1]), "%" == l[1].slice(-1) && (i /= 100), o = y(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (t /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), n.hsb2rgb(t, i, o, s)) : c[6] ? (l = c[6].split(F), t = y(l[0]), "%" == l[0].slice(-1) && (t /= 100), i = y(l[1]), "%" == l[1].slice(-1) && (i /= 100), o = y(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (t /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), n.hsl2rgb(t, i, o, s)) : (t = k(x.round(t), 255), i = k(x.round(i), 255), o = k(x.round(o), 255), s = k(w(s, 0), 1), (c = {
                        r: t,
                        g: i,
                        b: o,
                        toString: I
                    }).hex = "#" + (16777216 | o | i << 8 | t << 16).toString(16).slice(1), c.opacity = r(s, "finite") ? s : 1, c)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: I
                    }
                }, n), n.hsb = o(function(e, t, i) {
                    return n.hsb2rgb(e, t, i).hex
                }), n.hsl = o(function(e, t, i) {
                    return n.hsl2rgb(e, t, i).hex
                }), n.rgb = o(function(e, t, n, i) {
                    if (r(i, "finite")) {
                        var o = x.round;
                        return "rgba(" + [o(e), o(t), o(n), +i.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
                });
                var O = function(e) {
                        var t = h.doc.getElementsByTagName("head")[0] || h.doc.getElementsByTagName("svg")[0],
                            n = "rgb(255, 0, 0)";
                        return (O = o(function(e) {
                            if ("red" == e.toLowerCase()) return n;
                            t.style.color = n, t.style.color = e;
                            var i = h.doc.defaultView.getComputedStyle(t, C).getPropertyValue("color");
                            return i == n ? null : i
                        }))(e)
                    },
                    H = function() {
                        return "hsb(" + [this.h, this.s, this.b] + ")"
                    },
                    z = function() {
                        return "hsl(" + [this.h, this.s, this.l] + ")"
                    },
                    I = function() {
                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                    },
                    R = function(e, t, i) {
                        if (null == t && r(e, "object") && "r" in e && "g" in e && "b" in e && (i = e.b, t = e.g, e = e.r), null == t && r(e, string)) {
                            var o = n.getRGB(e);
                            e = o.r, t = o.g, i = o.b
                        }
                        return (e > 1 || t > 1 || i > 1) && (e /= 255, t /= 255, i /= 255), [e, t, i]
                    },
                    W = function(e, t, i, o) {
                        var s = {
                            r: e = x.round(255 * e),
                            g: t = x.round(255 * t),
                            b: i = x.round(255 * i),
                            opacity: r(o, "finite") ? o : 1,
                            hex: n.rgb(e, t, i),
                            toString: I
                        };
                        return r(o, "finite") && (s.opacity = o), s
                    };
                n.color = function(e) {
                    var t;
                    return r(e, "object") && "h" in e && "s" in e && "b" in e ? (t = n.hsb2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : r(e, "object") && "h" in e && "s" in e && "l" in e ? (t = n.hsl2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : (r(e, "string") && (e = n.getRGB(e)), r(e, "object") && "r" in e && "g" in e && "b" in e && !("error" in e) ? (t = n.rgb2hsl(e), e.h = t.h, e.s = t.s, e.l = t.l, t = n.rgb2hsb(e), e.v = t.b) : ((e = {
                        hex: "none"
                    }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1, e.error = 1)), e.toString = I, e
                }, n.hsb2rgb = function(e, t, n, i) {
                    var o, s, a, l, c;
                    return r(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, i = e.o, e = e.h), l = (c = n * t) * (1 - T((e = (e *= 360) % 360 / 60) % 2 - 1)), o = s = a = n - c, W(o += [c, l, 0, 0, l, c][e = ~~e], s += [l, c, c, l, 0, 0][e], a += [0, 0, l, c, c, l][e], i)
                }, n.hsl2rgb = function(e, t, n, i) {
                    var o, s, a, l, c;
                    return r(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h), (e > 1 || t > 1 || n > 1) && (e /= 360, t /= 100, n /= 100), l = (c = 2 * t * (.5 > n ? n : 1 - n)) * (1 - T((e = (e *= 360) % 360 / 60) % 2 - 1)), o = s = a = n - c / 2, W(o += [c, l, 0, 0, l, c][e = ~~e], s += [l, c, c, l, 0, 0][e], a += [0, 0, l, c, c, l][e], i)
                }, n.rgb2hsb = function(e, t, n) {
                    var i, r;
                    return e = (n = R(e, t, n))[0], t = n[1], n = n[2], {
                        h: ((0 == (r = (i = w(e, t, n)) - k(e, t, n)) ? null : i == e ? (t - n) / r : i == t ? (n - e) / r + 2 : (e - t) / r + 4) + 360) % 6 * 60 / 360,
                        s: 0 == r ? 0 : r / i,
                        b: i,
                        toString: H
                    }
                }, n.rgb2hsl = function(e, t, n) {
                    var i, r, o, s;
                    return e = (n = R(e, t, n))[0], t = n[1], n = n[2], i = ((r = w(e, t, n)) + (o = k(e, t, n))) / 2, {
                        h: ((0 == (s = r - o) ? null : r == e ? (t - n) / s : r == t ? (n - e) / s + 2 : (e - t) / s + 4) + 360) % 6 * 60 / 360,
                        s: 0 == s ? 0 : .5 > i ? s / (2 * i) : s / (2 - 2 * i),
                        l: i,
                        toString: z
                    }
                }, n.parsePathString = function(e) {
                    if (!e) return null;
                    var t = n.path(e);
                    if (t.arr) return n.path.clone(t.arr);
                    var i = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        o = [];
                    return r(e, "array") && r(e[0], "array") && (o = n.path.clone(e)), o.length || m(e).replace(D, function(e, t, n) {
                        var r = [],
                            s = t.toLowerCase();
                        if (n.replace(N, function(e, t) {
                            t && r.push(+t)
                        }), "m" == s && r.length > 2 && (o.push([t].concat(r.splice(0, 2))), s = "l", t = "m" == t ? "l" : "L"), "o" == s && 1 == r.length && o.push([t, r[0]]), "r" == s) o.push([t].concat(r));
                        else
                            for (; r.length >= i[s] && (o.push([t].concat(r.splice(0, i[s]))), i[s]););
                    }), o.toString = n.path.toString, t.arr = n.path.clone(o), o
                };
                var U = n.parseTransformString = function(e) {
                    if (!e) return null;
                    var t = [];
                    return r(e, "array") && r(e[0], "array") && (t = n.path.clone(e)), t.length || m(e).replace(j, function(e, n, i) {
                        var r = [];
                        n.toLowerCase(), i.replace(N, function(e, t) {
                            t && r.push(+t)
                        }), t.push([n].concat(r))
                    }), t.toString = n.path.toString, t
                };
                n._.svgTransform2string = function(e) {
                    var t = [];
                    return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(e, n, i) {
                        return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == n ? t.push(["m", 1, 0, x.tan(s(i[0])), 1, 0, 0]) : "skewY" == n ? t.push(["m", 1, x.tan(s(i[0])), 0, 1, 0, 0]) : t.push([n.charAt(0)].concat(i)), e
                    }), t
                }, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = function(e, t) {
                    var i = U(e),
                        r = new n.Matrix;
                    if (i)
                        for (var o = 0, s = i.length; s > o; o++) {
                            var a, l, c, u, d, p = i[o],
                                f = p.length,
                                h = m(p[0]).toLowerCase(),
                                g = p[0] != h,
                                v = g ? r.invert() : 0;
                            "t" == h && 2 == f ? r.translate(p[1], 0) : "t" == h && 3 == f ? g ? (a = v.x(0, 0), l = v.y(0, 0), c = v.x(p[1], p[2]), u = v.y(p[1], p[2]), r.translate(c - a, u - l)) : r.translate(p[1], p[2]) : "r" == h ? 2 == f ? (d = d || t, r.rotate(p[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f && (g ? (c = v.x(p[2], p[3]), u = v.y(p[2], p[3]), r.rotate(p[1], c, u)) : r.rotate(p[1], p[2], p[3])) : "s" == h ? 2 == f || 3 == f ? (d = d || t, r.scale(p[1], p[f - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f ? g ? (c = v.x(p[2], p[3]), u = v.y(p[2], p[3]), r.scale(p[1], p[1], c, u)) : r.scale(p[1], p[1], p[2], p[3]) : 5 == f && (g ? (c = v.x(p[3], p[4]), u = v.y(p[3], p[4]), r.scale(p[1], p[2], c, u)) : r.scale(p[1], p[2], p[3], p[4])) : "m" == h && 7 == f && r.add(p[1], p[2], p[3], p[4], p[5], p[6])
                        }
                    return r
                }, n._unit2px = function(e, t, n) {
                    function r(e) {
                        if (null == e) return C;
                        if (e == +e) return e;
                        i(u, {
                            width: e
                        });
                        try {
                            return u.getBBox().width
                        } catch (e) {
                            return 0
                        }
                    }

                    function o(e) {
                        if (null == e) return C;
                        if (e == +e) return e;
                        i(u, {
                            height: e
                        });
                        try {
                            return u.getBBox().height
                        } catch (e) {
                            return 0
                        }
                    }

                    function s(i, r) {
                        null == t ? c[i] = r(e.attr(i) || 0) : i == t && (c = r(null == n ? e.attr(i) || 0 : n))
                    }
                    var l = a(e).node,
                        c = {},
                        u = l.querySelector(".svg---mgr");
                    switch (u || (u = i("rect"), i(u, {
                        x: -9e9,
                        y: -9e9,
                        width: 10,
                        height: 10,
                        class: "svg---mgr",
                        fill: "none"
                    }), l.appendChild(u)), e.type) {
                        case "rect":
                            s("rx", r), s("ry", o);
                        case "image":
                            s("width", r), s("height", o);
                        case "text":
                            s("x", r), s("y", o);
                            break;
                        case "circle":
                            s("cx", r), s("cy", o), s("r", r);
                            break;
                        case "ellipse":
                            s("cx", r), s("cy", o), s("rx", r), s("ry", o);
                            break;
                        case "line":
                            s("x1", r), s("x2", r), s("y1", o), s("y2", o);
                            break;
                        case "marker":
                            s("refX", r), s("markerWidth", r), s("refY", o), s("markerHeight", o);
                            break;
                        case "radialGradient":
                            s("fx", r), s("fy", o);
                            break;
                        case "tspan":
                            s("dx", r), s("dy", o);
                            break;
                        default:
                            s(t, r)
                    }
                    return l.removeChild(u), c
                }, h.doc.contains || h.doc.compareDocumentPosition, n._.getSomeDefs = function(e) {
                    var t = e.node.ownerSVGElement && f(e.node.ownerSVGElement) || e.node.parentNode && f(e.node.parentNode) || n.select("svg") || n(0, 0),
                        i = t.select("defs"),
                        r = null != i && i.node;
                    return r || (r = d("defs", t.node).node), r
                }, n._.getSomeSVG = a, n.select = function(e) {
                    return e = m(e).replace(/([^\\]):/g, "$1\\:"), f(h.doc.querySelector(e))
                }, n.selectAll = function(e) {
                    for (var t = h.doc.querySelectorAll(e), i = (n.set || Array)(), r = 0; r < t.length; r++) i.push(f(t[r]));
                    return i
                }, setInterval(function() {
                    for (var e in P)
                        if (P[v](e)) {
                            var t = P[e],
                                n = t.node;
                            ("svg" != t.type && !n.ownerSVGElement || "svg" == t.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete P[e]
                        }
                }, 1e4), c.prototype.attr = function(e, n) {
                    var i = this,
                        o = i.node;
                    if (!e) {
                        if (1 != o.nodeType) return {
                            text: o.nodeValue
                        };
                        for (var s = o.attributes, a = {}, l = 0, c = s.length; c > l; l++) a[s[l].nodeName] = s[l].nodeValue;
                        return a
                    }
                    if (r(e, "string")) {
                        if (!(arguments.length > 1)) return t("snap.util.getattr." + e, i).firstDefined();
                        var u = {};
                        u[e] = n, e = u
                    }
                    for (var d in e) e[v](d) && t("snap.util.attr." + d, i, e[d]);
                    return i
                }, n.parse = function(e) {
                    var t = h.doc.createDocumentFragment(),
                        n = !0,
                        i = h.doc.createElement("div");
                    if ((e = m(e)).match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>", n = !1), i.innerHTML = e, e = i.getElementsByTagName("svg")[0])
                        if (n) t = e;
                        else
                            for (; e.firstChild;) t.appendChild(e.firstChild);
                    return new u(t)
                }, n.fragment = function() {
                    for (var e = Array.prototype.slice.call(arguments, 0), t = h.doc.createDocumentFragment(), i = 0, r = e.length; r > i; i++) {
                        var o = e[i];
                        o.node && o.node.nodeType && t.appendChild(o.node), o.nodeType && t.appendChild(o), "string" == typeof o && t.appendChild(n.parse(o).node)
                    }
                    return new u(t)
                }, n._.make = d, n._.wrap = f, p.prototype.el = function(e, t) {
                    var n = d(e, this.node);
                    return t && n.attr(t), n
                }, c.prototype.children = function() {
                    for (var e = [], t = this.node.childNodes, i = 0, r = t.length; r > i; i++) e[i] = n(t[i]);
                    return e
                }, c.prototype.toJSON = function() {
                    var e = [];
                    return function e(t, n) {
                        for (var i = 0, r = t.length; r > i; i++) {
                            var o = {
                                    type: t[i].type,
                                    attr: t[i].attr()
                                },
                                s = t[i].children();
                            n.push(o), s.length && e(s, o.childNodes = [])
                        }
                    }([this], e), e[0]
                }, t.on("snap.util.getattr", function() {
                    var e = t.nt(),
                        n = (e = e.substring(e.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                    return X[v](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, e)
                });
                var X = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };
                return t.on("snap.util.attr", function(e) {
                    var n = t.nt(),
                        r = {};
                    r[n = n.substring(n.lastIndexOf(".") + 1)] = e;
                    var o = n.replace(/-(\w)/gi, function(e, t) {
                            return t.toUpperCase()
                        }),
                        s = n.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                    X[v](s) ? this.node.style[o] = null == e ? C : e : i(this.node, r)
                }), p.prototype, n.ajax = function(e, n, i, o) {
                    var s = new XMLHttpRequest,
                        a = B();
                    if (s) {
                        if (r(n, "function")) o = i, i = n, n = null;
                        else if (r(n, "object")) {
                            var l = [];
                            for (var c in n) n.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(n[c]));
                            n = l.join("&")
                        }
                        return s.open(n ? "POST" : "GET", e, !0), n && (s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (t.once("snap.ajax." + a + ".0", i), t.once("snap.ajax." + a + ".200", i), t.once("snap.ajax." + a + ".304", i)), s.onreadystatechange = function() {
                            4 == s.readyState && t("snap.ajax." + a + "." + s.status, o, s)
                        }, 4 == s.readyState ? s : (s.send(n), s)
                    }
                }, n.load = function(e, t, i) {
                    n.ajax(e, function(e) {
                        var r = n.parse(e.responseText);
                        i ? t.call(i, r) : t(r)
                    })
                }, n.getElementByPoint = function(e, t) {
                    var n = (this.canvas, h.doc.elementFromPoint(e, t));
                    if (h.win.opera && "svg" == n.tagName) {
                        var i = function(e) {
                                var t = e.getBoundingClientRect(),
                                    n = e.ownerDocument,
                                    i = n.body,
                                    r = n.documentElement,
                                    o = r.clientTop || i.clientTop || 0,
                                    s = r.clientLeft || i.clientLeft || 0;
                                return {
                                    y: t.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - o,
                                    x: t.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - s
                                }
                            }(n),
                            r = n.createSVGRect();
                        r.x = e - i.x, r.y = t - i.y, r.width = r.height = 1;
                        var o = n.getIntersectionList(r, null);
                        o.length && (n = o[o.length - 1])
                    }
                    return n ? f(n) : null
                }, n.plugin = function(e) {
                    e(n, c, p, h, u)
                }, h.win.Snap = n, n
            }(e || this);
        return i.plugin(function(n, i, r, o, s) {
            function a(e, t) {
                if (null == t) {
                    var i = !0;
                    if (!(t = "linearGradient" == e.type || "radialGradient" == e.type ? e.node.getAttribute("gradientTransform") : "pattern" == e.type ? e.node.getAttribute("patternTransform") : e.node.getAttribute("transform"))) return new n.Matrix;
                    t = n._.svgTransform2string(t)
                } else t = n._.rgTransform.test(t) ? d(t).replace(/\.{3}|\u2026/g, e._.transform || "") : n._.svgTransform2string(t), u(t, "array") && (t = n.path ? n.path.toString.call(t) : d(t)), e._.transform = t;
                var r = n._.transform2matrix(t, e.getBBox(1));
                return i ? r : void(e.matrix = r)
            }

            function l(e) {
                return function() {
                    var t = e ? "<" + this.type : "",
                        n = this.node.attributes,
                        i = this.node.childNodes;
                    if (e)
                        for (var r = 0, o = n.length; o > r; r++) t += " " + n[r].name + '="' + n[r].value.replace(/"/g, '\\"') + '"';
                    if (i.length) {
                        for (e && (t += ">"), r = 0, o = i.length; o > r; r++) 3 == i[r].nodeType ? t += i[r].nodeValue : 1 == i[r].nodeType && (t += v(i[r]).toString());
                        e && (t += "</" + this.type + ">")
                    } else e && (t += "/>");
                    return t
                }
            }
            var c = i.prototype,
                u = n.is,
                d = String,
                p = n._unit2px,
                f = n._.$,
                h = n._.make,
                g = n._.getSomeDefs,
                v = n._.wrap;
            c.getBBox = function(e) {
                if ("tspan" == this.type) return n._.box(this.node.getClientRects().item(0));
                if (!n.Matrix || !n.path) return this.node.getBBox();
                var t = this,
                    i = new n.Matrix;
                if (t.removed) return n._.box();
                for (;
                    "use" == t.type;)
                    if (e || (i = i.add(t.transform().localMatrix.translate(t.attr("x") || 0, t.attr("y") || 0))), t.original) t = t.original;
                    else {
                        var r = t.attr("xlink:href");
                        t = t.original = t.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
                    }
                var o = t._,
                    s = n.path.get[t.type] || n.path.get.deflt;
                try {
                    return e ? (o.bboxwt = s ? n.path.getBBox(t.realPath = s(t)) : n._.box(t.node.getBBox()), n._.box(o.bboxwt)) : (t.realPath = s(t), t.matrix = t.transform().localMatrix, o.bbox = n.path.getBBox(n.path.map(t.realPath, i.add(t.matrix))), n._.box(o.bbox))
                } catch (e) {
                    return n._.box()
                }
            };
            var m = function() {
                return this.string
            };
            c.transform = function(e) {
                var t = this._;
                if (null == e) {
                    for (var i, r = this, o = new n.Matrix(this.node.getCTM()), s = a(this), l = [s], c = new n.Matrix, u = s.toTransformString(), p = d(s) == d(this.matrix) ? d(t.transform) : u;
                         "svg" != r.type && (r = r.parent());) l.push(a(r));
                    for (i = l.length; i--;) c.add(l[i]);
                    return {
                        string: p,
                        globalMatrix: o,
                        totalMatrix: c,
                        localMatrix: s,
                        diffMatrix: o.clone().add(s.invert()),
                        global: o.toTransformString(),
                        total: c.toTransformString(),
                        local: u,
                        toString: m
                    }
                }
                return e instanceof n.Matrix ? (this.matrix = e, this._.transform = e.toTransformString()) : a(this, e), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {
                    gradientTransform: this.matrix
                }) : "pattern" == this.type ? f(this.node, {
                    patternTransform: this.matrix
                }) : f(this.node, {
                    transform: this.matrix
                })), this
            }, c.parent = function() {
                return v(this.node.parentNode)
            }, c.append = c.add = function(e) {
                if (e) {
                    if ("set" == e.type) {
                        var t = this;
                        return e.forEach(function(e) {
                            t.add(e)
                        }), this
                    }
                    e = v(e), this.node.appendChild(e.node), e.paper = this.paper
                }
                return this
            }, c.appendTo = function(e) {
                return e && (e = v(e)).append(this), this
            }, c.prepend = function(e) {
                if (e) {
                    if ("set" == e.type) {
                        var t, n = this;
                        return e.forEach(function(e) {
                            t ? t.after(e) : n.prepend(e), t = e
                        }), this
                    }
                    var i = (e = v(e)).parent();
                    this.node.insertBefore(e.node, this.node.firstChild), this.add && this.add(), e.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
                }
                return this
            }, c.prependTo = function(e) {
                return (e = v(e)).prepend(this), this
            }, c.before = function(e) {
                if ("set" == e.type) {
                    var t = this;
                    return e.forEach(function(e) {
                        var n = e.parent();
                        t.node.parentNode.insertBefore(e.node, t.node), n && n.add()
                    }), this.parent().add(), this
                }
                var n = (e = v(e)).parent();
                return this.node.parentNode.insertBefore(e.node, this.node), this.parent() && this.parent().add(), n && n.add(), e.paper = this.paper, this
            }, c.after = function(e) {
                var t = (e = v(e)).parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
            }, c.insertBefore = function(e) {
                e = v(e);
                var t = this.parent();
                return e.node.parentNode.insertBefore(this.node, e.node), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
            }, c.insertAfter = function(e) {
                e = v(e);
                var t = this.parent();
                return e.node.parentNode.insertBefore(this.node, e.node.nextSibling), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
            }, c.remove = function() {
                var e = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, e && e.add(), this
            }, c.select = function(e) {
                return v(this.node.querySelector(e))
            }, c.selectAll = function(e) {
                for (var t = this.node.querySelectorAll(e), i = (n.set || Array)(), r = 0; r < t.length; r++) i.push(v(t[r]));
                return i
            }, c.asPX = function(e, t) {
                return null == t && (t = this.attr(e)), +p(this, e, t)
            }, c.use = function() {
                var e, t = this.node.id;
                return t || (t = this.id, f(this.node, {
                    id: t
                })), e = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? h(this.type, this.node.parentNode) : h("use", this.node.parentNode), f(e.node, {
                    "xlink:href": "#" + t
                }), e.original = this, e
            }, c.clone = function() {
                var e = v(this.node.cloneNode(!0));
                return f(e.node, "id") && f(e.node, {
                    id: e.id
                }),
                    function(e) {
                        function t(e, t) {
                            var i = f(e.node, t);
                            (i = (i = i && i.match(s)) && i[2]) && "#" == i.charAt() && (i = i.substring(1)) && (l[i] = (l[i] || []).concat(function(i) {
                                var r = {};
                                r[t] = n.url(i), f(e.node, r)
                            }))
                        }

                        function i(e) {
                            var t = f(e.node, "xlink:href");
                            t && "#" == t.charAt() && (t = t.substring(1)) && (l[t] = (l[t] || []).concat(function(t) {
                                e.attr("xlink:href", "#" + t)
                            }))
                        }
                        for (var r, o = e.selectAll("*"), s = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, c = 0, u = o.length; u > c; c++) {
                            t(r = o[c], "fill"), t(r, "stroke"), t(r, "filter"), t(r, "mask"), t(r, "clip-path"), i(r);
                            var d = f(r.node, "id");
                            d && (f(r.node, {
                                id: r.id
                            }), a.push({
                                old: d,
                                id: r.id
                            }))
                        }
                        for (c = 0, u = a.length; u > c; c++) {
                            var p = l[a[c].old];
                            if (p)
                                for (var h = 0, g = p.length; g > h; h++) p[h](a[c].id)
                        }
                    }(e), e.insertAfter(this), e
            }, c.toDefs = function() {
                return g(this).appendChild(this.node), this
            }, c.pattern = c.toPattern = function(e, t, n, i) {
                var r = h("pattern", g(this));
                return null == e && (e = this.getBBox()), u(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, e = e.x), f(r.node, {
                    x: e,
                    y: t,
                    width: n,
                    height: i,
                    patternUnits: "userSpaceOnUse",
                    id: r.id,
                    viewBox: [e, t, n, i].join(" ")
                }), r.node.appendChild(this.node), r
            }, c.marker = function(e, t, n, i, r, o) {
                var s = h("marker", g(this));
                return null == e && (e = this.getBBox()), u(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, r = e.refX || e.cx, o = e.refY || e.cy, e = e.x), f(s.node, {
                    viewBox: [e, t, n, i].join(" "),
                    markerWidth: n,
                    markerHeight: i,
                    orient: "auto",
                    refX: r || 0,
                    refY: o || 0,
                    id: s.id
                }), s.node.appendChild(this.node), s
            };
            var y = {};
            c.data = function(e, i) {
                var r = y[this.id] = y[this.id] || {};
                if (0 == arguments.length) return t("snap.data.get." + this.id, this, r, null), r;
                if (1 == arguments.length) {
                    if (n.is(e, "object")) {
                        for (var o in e) e.hasOwnProperty(o) && this.data(o, e[o]);
                        return this
                    }
                    return t("snap.data.get." + this.id, this, r[e], e), r[e]
                }
                return r[e] = i, t("snap.data.set." + this.id, this, i, e), this
            }, c.removeData = function(e) {
                return null == e ? y[this.id] = {} : y[this.id] && delete y[this.id][e], this
            }, c.outerSVG = c.toString = l(1), c.innerSVG = l(), c.toDataURL = function() {
                if (e && e.btoa) {
                    var t = this.getBBox(),
                        i = n.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                            x: +t.x.toFixed(3),
                            y: +t.y.toFixed(3),
                            width: +t.width.toFixed(3),
                            height: +t.height.toFixed(3),
                            contents: this.outerSVG()
                        });
                    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(i)))
                }
            }, s.prototype.select = c.select, s.prototype.selectAll = c.selectAll
        }), i.plugin(function(e, i, r, o, s) {
            function a(e, t, n) {
                return function(i) {
                    var r = i.slice(e, t);
                    return 1 == r.length && (r = r[0]), n ? n(r) : r
                }
            }
            var l = i.prototype,
                c = e.is,
                u = String,
                d = "hasOwnProperty",
                p = function(e, t, i, r) {
                    "function" != typeof i || i.length || (r = i, i = n.linear), this.attr = e, this.dur = t, i && (this.easing = i), r && (this.callback = r)
                };
            e._.Animation = p, e.animation = function(e, t, n, i) {
                return new p(e, t, n, i)
            }, l.inAnim = function() {
                var e = this,
                    t = [];
                for (var n in e.anims) e.anims[d](n) && function(e) {
                    t.push({
                        anim: new p(e._attrs, e.dur, e.easing, e._callback),
                        mina: e,
                        curStatus: e.status(),
                        status: function(t) {
                            return e.status(t)
                        },
                        stop: function() {
                            e.stop()
                        }
                    })
                }(e.anims[n]);
                return t
            }, e.animate = function(e, i, r, o, s, a) {
                "function" != typeof s || s.length || (a = s, s = n.linear);
                var l = n.time(),
                    c = n(e, i, l, l + o, n.time, r, s);
                return a && t.once("mina.finish." + c.id, a), c
            }, l.stop = function() {
                for (var e = this.inAnim(), t = 0, n = e.length; n > t; t++) e[t].stop();
                return this
            }, l.animate = function(e, i, r, o) {
                "function" != typeof r || r.length || (o = r, r = n.linear), e instanceof p && (o = e.callback, r = e.easing, i = e.dur, e = e.attr);
                var s, l, f, h, g = [],
                    v = [],
                    m = {},
                    y = this;
                for (var b in e)
                    if (e[d](b)) {
                        y.equal ? (s = (h = y.equal(b, u(e[b]))).from, l = h.to, f = h.f) : (s = +y.attr(b), l = +e[b]);
                        var x = c(s, "array") ? s.length : 1;
                        m[b] = a(g.length, g.length + x, f), g = g.concat(s), v = v.concat(l)
                    }
                var w = n.time(),
                    k = n(g, v, w, w + i, n.time, function(e) {
                        var t = {};
                        for (var n in m) m[d](n) && (t[n] = m[n](e));
                        y.attr(t)
                    }, r);
                return y.anims[k.id] = k, k._attrs = e, k._callback = o, t("snap.animcreated." + y.id, k), t.once("mina.finish." + k.id, function() {
                    t.off("mina.*." + k.id), delete y.anims[k.id], o && o.call(y)
                }), t.once("mina.stop." + k.id, function() {
                    t.off("mina.*." + k.id), delete y.anims[k.id]
                }), y
            }
        }), i.plugin(function(e, t, n, i, r) {
            function o(e, t, n, i, r, o) {
                return null == t && "[object SVGMatrix]" == s.call(e) ? (this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.e = e.e, void(this.f = e.f)) : void(null != e ? (this.a = +e, this.b = +t, this.c = +n, this.d = +i, this.e = +r, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
            }
            var s = Object.prototype.toString,
                a = String,
                l = Math;
            ! function(t) {
                function n(e) {
                    return e[0] * e[0] + e[1] * e[1]
                }

                function i(e) {
                    var t = l.sqrt(n(e));
                    e[0] && (e[0] /= t), e[1] && (e[1] /= t)
                }
                t.add = function(e, t, n, i, r, s) {
                    if (e && e instanceof o) return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
                    var a = e * this.a + t * this.c,
                        l = e * this.b + t * this.d;
                    return this.e += r * this.a + s * this.c, this.f += r * this.b + s * this.d, this.c = n * this.a + i * this.c, this.d = n * this.b + i * this.d, this.a = a, this.b = l, this
                }, o.prototype.multLeft = function(e, t, n, i, r, s) {
                    if (e && e instanceof o) return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
                    var a = e * this.a + n * this.b,
                        l = e * this.c + n * this.d,
                        c = e * this.e + n * this.f + r;
                    return this.b = t * this.a + i * this.b, this.d = t * this.c + i * this.d, this.f = t * this.e + i * this.f + s, this.a = a, this.c = l, this.e = c, this
                }, t.invert = function() {
                    var e = this,
                        t = e.a * e.d - e.b * e.c;
                    return new o(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
                }, t.clone = function() {
                    return new o(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.translate = function(e, t) {
                    return this.e += e * this.a + t * this.c, this.f += e * this.b + t * this.d, this
                }, t.scale = function(e, t, n, i) {
                    return null == t && (t = e), (n || i) && this.translate(n, i), this.a *= e, this.b *= e, this.c *= t, this.d *= t, (n || i) && this.translate(-n, -i), this
                }, t.rotate = function(t, n, i) {
                    t = e.rad(t), n = n || 0, i = i || 0;
                    var r = +l.cos(t).toFixed(9),
                        o = +l.sin(t).toFixed(9);
                    return this.add(r, o, -o, r, n, i), this.add(1, 0, 0, 1, -n, -i)
                }, t.skewX = function(e) {
                    return this.skew(e, 0)
                }, t.skewY = function(e) {
                    return this.skew(0, e)
                }, t.skew = function(t, n) {
                    t = t || 0, n = n || 0, t = e.rad(t), n = e.rad(n);
                    var i = l.tan(t).toFixed(9),
                        r = l.tan(n).toFixed(9);
                    return this.add(1, r, i, 1, 0, 0)
                }, t.x = function(e, t) {
                    return e * this.a + t * this.c + this.e
                }, t.y = function(e, t) {
                    return e * this.b + t * this.d + this.f
                }, t.get = function(e) {
                    return +this[a.fromCharCode(97 + e)].toFixed(4)
                }, t.toString = function() {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, t.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, t.determinant = function() {
                    return this.a * this.d - this.b * this.c
                }, t.split = function() {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var r = [
                        [this.a, this.b],
                        [this.c, this.d]
                    ];
                    t.scalex = l.sqrt(n(r[0])), i(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = l.sqrt(n(r[1])), i(r[1]), t.shear /= t.scaley, this.determinant() < 0 && (t.scalex = -t.scalex);
                    var o = r[0][1],
                        s = r[1][1];
                    return 0 > s ? (t.rotate = e.deg(l.acos(s)), 0 > o && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(l.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, t.toTransformString = function(e) {
                    var t = e || this.split();
                    return +t.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : "") + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : "") + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : ""))
                }
            }(o.prototype), e.Matrix = o, e.matrix = function(e, t, n, i, r, s) {
                return new o(e, t, n, i, r, s)
            }
        }), i.plugin(function(e, n, i, r, o) {
            function s(i) {
                return function(r) {
                    if (t.stop(), r instanceof o && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, p(this).appendChild(r), r = u(r)), r instanceof n)
                        if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                            r.node.id || h(r.node, {
                                id: r.id
                            });
                            var s = g(r.node.id)
                        } else s = r.attr(i);
                    else if ((s = e.color(r)).error) {
                        var a = e(p(this).ownerSVGElement).gradient(r);
                        a ? (a.node.id || h(a.node, {
                            id: a.id
                        }), s = g(a.node.id)) : s = r
                    } else s = v(s);
                    var l = {};
                    l[i] = s, h(this.node, l), this.node.style[i] = y
                }
            }

            function a(e) {
                t.stop(), e == +e && (e += "px"), this.node.style.fontSize = e
            }

            function l() {
                return t.stop(), this.node.style.fontSize
            }
            var c = e._.make,
                u = e._.wrap,
                d = e.is,
                p = e._.getSomeDefs,
                f = /^url\((['"]?)([^)]+)\1\)$/,
                h = e._.$,
                g = e.url,
                v = String,
                m = e._.separator,
                y = "";
            e.deurl = function(e) {
                var t = String(e).match(f);
                return t ? t[2] : e
            }, t.on("snap.util.attr.mask", function(e) {
                if (e instanceof n || e instanceof o) {
                    if (t.stop(), e instanceof o && 1 == e.node.childNodes.length && (e = e.node.firstChild, p(this).appendChild(e), e = u(e)), "mask" == e.type) var i = e;
                    else(i = c("mask", p(this))).node.appendChild(e.node);
                    !i.node.id && h(i.node, {
                        id: i.id
                    }), h(this.node, {
                        mask: g(i.id)
                    })
                }
            }),
                function(e) {
                    t.on("snap.util.attr.clip", e), t.on("snap.util.attr.clip-path", e), t.on("snap.util.attr.clipPath", e)
                }(function(e) {
                    if (e instanceof n || e instanceof o) {
                        t.stop();
                        for (var i, r = e.node; r;) {
                            if ("clipPath" === r.nodeName) {
                                i = new n(r);
                                break
                            }
                            if ("svg" === r.nodeName) {
                                i = void 0;
                                break
                            }
                            r = r.parentNode
                        }
                        i || ((i = c("clipPath", p(this))).node.appendChild(e.node), !i.node.id && h(i.node, {
                            id: i.id
                        })), h(this.node, {
                            "clip-path": g(i.node.id || i.id)
                        })
                    }
                }), t.on("snap.util.attr.fill", s("fill")), t.on("snap.util.attr.stroke", s("stroke"));
            var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            t.on("snap.util.grad.parse", function(e) {
                function t(e, t) {
                    for (var n = (t - a) / (e - l), i = l; e > i; i++) o[i].offset = +(+a + n * (i - l)).toFixed(2);
                    l = e, a = t
                }
                var n = (e = v(e)).match(b);
                if (!n) return null;
                var i = n[1],
                    r = n[2],
                    o = n[3];
                1 == (r = r.split(/\s*,\s*/).map(function(e) {
                    return +e == e ? +e : e
                })).length && 0 == r[0] && (r = []);
                var s = (o = (o = o.split("-")).map(function(e) {
                        var t = {
                            color: (e = e.split(":"))[0]
                        };
                        return e[1] && (t.offset = parseFloat(e[1])), t
                    })).length,
                    a = 0,
                    l = 0;
                s--;
                for (var c = 0; s > c; c++) "offset" in o[c] && t(c, o[c].offset);
                return o[s].offset = o[s].offset || 100, t(s, o[s].offset), {
                    type: i,
                    params: r,
                    stops: o
                }
            }), t.on("snap.util.attr.d", function(n) {
                t.stop(), d(n, "array") && d(n[0], "array") && (n = e.path.toString.call(n)), (n = v(n)).match(/[ruo]/i) && (n = e.path.toAbsolute(n)), h(this.node, {
                    d: n
                })
            })(-1), t.on("snap.util.attr.#text", function(e) {
                t.stop(), e = v(e);
                for (var n = r.doc.createTextNode(e); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(n)
            })(-1), t.on("snap.util.attr.path", function(e) {
                t.stop(), this.attr({
                    d: e
                })
            })(-1), t.on("snap.util.attr.class", function(e) {
                t.stop(), this.node.className.baseVal = e
            })(-1), t.on("snap.util.attr.viewBox", function(e) {
                var n;
                n = d(e, "object") && "x" in e ? [e.x, e.y, e.width, e.height].join(" ") : d(e, "array") ? e.join(" ") : e, h(this.node, {
                    viewBox: n
                }), t.stop()
            })(-1), t.on("snap.util.attr.transform", function(e) {
                this.transform(e), t.stop()
            })(-1), t.on("snap.util.attr.r", function(e) {
                "rect" == this.type && (t.stop(), h(this.node, {
                    rx: e,
                    ry: e
                }))
            })(-1), t.on("snap.util.attr.textpath", function(e) {
                if (t.stop(), "text" == this.type) {
                    var i, r, o;
                    if (!e && this.textPath) {
                        for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                        return r.remove(), void delete this.textPath
                    }
                    if (d(e, "string")) {
                        var s = p(this),
                            a = u(s.parentNode).path(e);
                        s.appendChild(a.node), i = a.id, a.attr({
                            id: i
                        })
                    } else(e = u(e)) instanceof n && ((i = e.attr("id")) || (i = e.id, e.attr({
                        id: i
                    })));
                    if (i)
                        if (r = this.textPath, o = this.node, r) r.attr({
                            "xlink:href": "#" + i
                        });
                        else {
                            for (r = h("textPath", {
                                "xlink:href": "#" + i
                            }); o.firstChild;) r.appendChild(o.firstChild);
                            o.appendChild(r), this.textPath = u(r)
                        }
                }
            })(-1), t.on("snap.util.attr.text", function(e) {
                if ("text" == this.type) {
                    for (var n = this.node, i = function(e) {
                        var t = h("tspan");
                        if (d(e, "array"))
                            for (var n = 0; n < e.length; n++) t.appendChild(i(e[n]));
                        else t.appendChild(r.doc.createTextNode(e));
                        return t.normalize && t.normalize(), t
                    }; n.firstChild;) n.removeChild(n.firstChild);
                    for (var o = i(e); o.firstChild;) n.appendChild(o.firstChild)
                }
                t.stop()
            })(-1), t.on("snap.util.attr.fontSize", a)(-1), t.on("snap.util.attr.font-size", a)(-1), t.on("snap.util.getattr.transform", function() {
                return t.stop(), this.transform()
            })(-1), t.on("snap.util.getattr.textpath", function() {
                return t.stop(), this.textPath
            })(-1),
                function() {
                    function n(n) {
                        return function() {
                            t.stop();
                            var i = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                            return "none" == i ? i : e(r.doc.getElementById(i.match(f)[1]))
                        }
                    }

                    function i(e) {
                        return function(n) {
                            t.stop();
                            var i = "marker" + e.charAt(0).toUpperCase() + e.substring(1);
                            if ("" != n && n) {
                                if ("marker" == n.type) {
                                    var r = n.node.id;
                                    return r || h(n.node, {
                                        id: n.id
                                    }), void(this.node.style[i] = g(r))
                                }
                            } else this.node.style[i] = "none"
                        }
                    }
                    t.on("snap.util.getattr.marker-end", n("end"))(-1), t.on("snap.util.getattr.markerEnd", n("end"))(-1), t.on("snap.util.getattr.marker-start", n("start"))(-1), t.on("snap.util.getattr.markerStart", n("start"))(-1), t.on("snap.util.getattr.marker-mid", n("mid"))(-1), t.on("snap.util.getattr.markerMid", n("mid"))(-1), t.on("snap.util.attr.marker-end", i("end"))(-1), t.on("snap.util.attr.markerEnd", i("end"))(-1), t.on("snap.util.attr.marker-start", i("start"))(-1), t.on("snap.util.attr.markerStart", i("start"))(-1), t.on("snap.util.attr.marker-mid", i("mid"))(-1), t.on("snap.util.attr.markerMid", i("mid"))(-1)
                }(), t.on("snap.util.getattr.r", function() {
                return "rect" == this.type && h(this.node, "rx") == h(this.node, "ry") ? (t.stop(), h(this.node, "rx")) : void 0
            })(-1), t.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    t.stop();
                    var e = function e(t) {
                        for (var n = [], i = t.childNodes, r = 0, o = i.length; o > r; r++) {
                            var s = i[r];
                            3 == s.nodeType && n.push(s.nodeValue), "tspan" == s.tagName && (1 == s.childNodes.length && 3 == s.firstChild.nodeType ? n.push(s.firstChild.nodeValue) : n.push(e(s)))
                        }
                        return n
                    }(this.node);
                    return 1 == e.length ? e[0] : e
                }
            })(-1), t.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), t.on("snap.util.getattr.fill", function(n) {
                if (!n) {
                    t.stop();
                    var i = t("snap.util.getattr.fill", this, !0).firstDefined();
                    return e(e.deurl(i)) || i
                }
            })(-1), t.on("snap.util.getattr.stroke", function(n) {
                if (!n) {
                    t.stop();
                    var i = t("snap.util.getattr.stroke", this, !0).firstDefined();
                    return e(e.deurl(i)) || i
                }
            })(-1), t.on("snap.util.getattr.viewBox", function() {
                t.stop();
                var n = h(this.node, "viewBox");
                return n ? (n = n.split(m), e._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
            })(-1), t.on("snap.util.getattr.points", function() {
                var e = h(this.node, "points");
                return t.stop(), e ? e.split(m) : void 0
            })(-1), t.on("snap.util.getattr.path", function() {
                var e = h(this.node, "d");
                return t.stop(), e
            })(-1), t.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), t.on("snap.util.getattr.fontSize", l)(-1), t.on("snap.util.getattr.font-size", l)(-1)
        }), i.plugin(function(e, t, n, i, r) {
            var o = /\S+/g,
                s = String,
                a = t.prototype;
            a.addClass = function(e) {
                var t, n, i, r = s(e || "").match(o) || [],
                    a = this.node,
                    l = a.className.baseVal,
                    c = l.match(o) || [];
                if (r.length) {
                    for (t = 0; n = r[t++];) ~c.indexOf(n) || c.push(n);
                    l != (i = c.join(" ")) && (a.className.baseVal = i)
                }
                return this
            }, a.removeClass = function(e) {
                var t, n, i, r, a = s(e || "").match(o) || [],
                    l = this.node,
                    c = l.className.baseVal,
                    u = c.match(o) || [];
                if (u.length) {
                    for (t = 0; i = a[t++];) ~(n = u.indexOf(i)) && u.splice(n, 1);
                    c != (r = u.join(" ")) && (l.className.baseVal = r)
                }
                return this
            }, a.hasClass = function(e) {
                return !!~(this.node.className.baseVal.match(o) || []).indexOf(e)
            }, a.toggleClass = function(e, t) {
                if (null != t) return t ? this.addClass(e) : this.removeClass(e);
                var n, i, r, s, a = (e || "").match(o) || [],
                    l = this.node,
                    c = l.className.baseVal,
                    u = c.match(o) || [];
                for (n = 0; r = a[n++];) ~(i = u.indexOf(r)) ? u.splice(i, 1) : u.push(r);
                return c != (s = u.join(" ")) && (l.className.baseVal = s), this
            }
        }), i.plugin(function(e, n, i, r, o) {
            function s(e) {
                return e
            }

            function a(e) {
                return function(t) {
                    return +t.toFixed(3) + e
                }
            }
            var l = {
                    "+": function(e, t) {
                        return e + t
                    },
                    "-": function(e, t) {
                        return e - t
                    },
                    "/": function(e, t) {
                        return e / t
                    },
                    "*": function(e, t) {
                        return e * t
                    }
                },
                c = String,
                u = /[a-z]+$/i,
                d = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
            t.on("snap.util.attr", function(e) {
                var n = c(e).match(d);
                if (n) {
                    var i = t.nt(),
                        r = i.substring(i.lastIndexOf(".") + 1),
                        o = this.attr(r),
                        s = {};
                    t.stop();
                    var a = n[3] || "",
                        p = o.match(u),
                        f = l[n[1]];
                    if (p && p == a ? e = f(parseFloat(o), +n[2]) : (o = this.asPX(r), e = f(this.asPX(r), this.asPX(r, n[2] + a))), isNaN(o) || isNaN(e)) return;
                    s[r] = e, this.attr(s)
                }
            })(-10), t.on("snap.util.equal", function(e, n) {
                var i = c(this.attr(e) || ""),
                    r = c(n).match(d);
                if (r) {
                    t.stop();
                    var o = r[3] || "",
                        p = i.match(u),
                        f = l[r[1]];
                    return p && p == o ? {
                        from: parseFloat(i),
                        to: f(parseFloat(i), +r[2]),
                        f: a(p)
                    } : {
                        from: i = this.asPX(e),
                        to: f(i, this.asPX(e, r[2] + o)),
                        f: s
                    }
                }
            })(-10)
        }), i.plugin(function(n, i, r, o, s) {
            var a = r.prototype,
                l = n.is;
            a.rect = function(e, t, n, i, r, o) {
                var s;
                return null == o && (o = r), l(e, "object") && "[object Object]" == e ? s = e : null != e && (s = {
                    x: e,
                    y: t,
                    width: n,
                    height: i
                }, null != r && (s.rx = r, s.ry = o)), this.el("rect", s)
            }, a.circle = function(e, t, n) {
                var i;
                return l(e, "object") && "[object Object]" == e ? i = e : null != e && (i = {
                    cx: e,
                    cy: t,
                    r: n
                }), this.el("circle", i)
            };
            var c = function() {
                function e() {
                    this.parentNode.removeChild(this)
                }
                return function(t, n) {
                    var i = o.doc.createElement("img"),
                        r = o.doc.body;
                    i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                        n.call(i), i.onload = i.onerror = null, r.removeChild(i)
                    }, i.onerror = e, r.appendChild(i), i.src = t
                }
            }();
            a.image = function(e, t, i, r, o) {
                var s = this.el("image");
                if (l(e, "object") && "src" in e) s.attr(e);
                else if (null != e) {
                    var a = {
                        "xlink:href": e,
                        preserveAspectRatio: "none"
                    };
                    null != t && null != i && (a.x = t, a.y = i), null != r && null != o ? (a.width = r, a.height = o) : c(e, function() {
                        n._.$(s.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), n._.$(s.node, a)
                }
                return s
            }, a.ellipse = function(e, t, n, i) {
                var r;
                return l(e, "object") && "[object Object]" == e ? r = e : null != e && (r = {
                    cx: e,
                    cy: t,
                    rx: n,
                    ry: i
                }), this.el("ellipse", r)
            }, a.path = function(e) {
                var t;
                return l(e, "object") && !l(e, "array") ? t = e : e && (t = {
                    d: e
                }), this.el("path", t)
            }, a.group = a.g = function(e) {
                var t = this.el("g");
                return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
            }, a.svg = function(e, t, n, i, r, o, s, a) {
                var c = {};
                return l(e, "object") && null == t ? c = e : (null != e && (c.x = e), null != t && (c.y = t), null != n && (c.width = n), null != i && (c.height = i), null != r && null != o && null != s && null != a && (c.viewBox = [r, o, s, a])), this.el("svg", c)
            }, a.mask = function(e) {
                var t = this.el("mask");
                return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
            }, a.ptrn = function(e, t, n, i, r, o, s, a) {
                if (l(e, "object")) var c = e;
                else c = {
                    patternUnits: "userSpaceOnUse"
                }, e && (c.x = e), t && (c.y = t), null != n && (c.width = n), null != i && (c.height = i), c.viewBox = null != r && null != o && null != s && null != a ? [r, o, s, a] : [e || 0, t || 0, n || 0, i || 0];
                return this.el("pattern", c)
            }, a.use = function(e) {
                return null != e ? (e instanceof i && (e.attr("id") || e.attr({
                    id: n._.id(e)
                }), e = e.attr("id")), "#" == String(e).charAt() && (e = e.substring(1)), this.el("use", {
                    "xlink:href": "#" + e
                })) : i.prototype.use.call(this)
            }, a.symbol = function(e, t, n, i) {
                var r = {};
                return null != e && null != t && null != n && null != i && (r.viewBox = [e, t, n, i]), this.el("symbol", r)
            }, a.text = function(e, t, n) {
                var i = {};
                return l(e, "object") ? i = e : null != e && (i = {
                    x: e,
                    y: t,
                    text: n || ""
                }), this.el("text", i)
            }, a.line = function(e, t, n, i) {
                var r = {};
                return l(e, "object") ? r = e : null != e && (r = {
                    x1: e,
                    x2: n,
                    y1: t,
                    y2: i
                }), this.el("line", r)
            }, a.polyline = function(e) {
                arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
                var t = {};
                return l(e, "object") && !l(e, "array") ? t = e : null != e && (t = {
                    points: e
                }), this.el("polyline", t)
            }, a.polygon = function(e) {
                arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
                var t = {};
                return l(e, "object") && !l(e, "array") ? t = e : null != e && (t = {
                    points: e
                }), this.el("polygon", t)
            },
                function() {
                    function i() {
                        return this.selectAll("stop")
                    }

                    function r(e, t) {
                        var i = u("stop"),
                            r = {
                                offset: +t + "%"
                            };
                        e = n.color(e), r["stop-color"] = e.hex, e.opacity < 1 && (r["stop-opacity"] = e.opacity), u(i, r);
                        for (var o, s = this.stops(), a = 0; a < s.length; a++)
                            if (parseFloat(s[a].attr("offset")) > t) {
                                this.node.insertBefore(i, s[a].node), o = !0;
                                break
                            }
                        return o || this.node.appendChild(i), this
                    }

                    function o() {
                        if ("linearGradient" == this.type) {
                            var e = u(this.node, "x1") || 0,
                                t = u(this.node, "x2") || 1,
                                i = u(this.node, "y1") || 0,
                                r = u(this.node, "y2") || 0;
                            return n._.box(e, i, math.abs(t - e), math.abs(r - i))
                        }
                        var o = this.node.cx || .5,
                            s = this.node.cy || .5,
                            a = this.node.r || 0;
                        return n._.box(o - a, s - a, 2 * a, 2 * a)
                    }

                    function s(e) {
                        var i = e,
                            r = this.stops();
                        if ("string" == typeof e && (i = t("snap.util.grad.parse", null, "l(0,0,0,1)" + e).firstDefined().stops), n.is(i, "array")) {
                            for (var o = 0; o < r.length; o++)
                                if (i[o]) {
                                    var s = n.color(i[o].color),
                                        a = {
                                            offset: i[o].offset + "%"
                                        };
                                    a["stop-color"] = s.hex, s.opacity < 1 && (a["stop-opacity"] = s.opacity), r[o].attr(a)
                                } else r[o].remove();
                            for (o = r.length; o < i.length; o++) this.addStop(i[o].color, i[o].offset);
                            return this
                        }
                    }

                    function l(e, t, a, l, c) {
                        var d = n._.make("linearGradient", e);
                        return d.stops = i, d.addStop = r, d.getBBox = o, d.setStops = s, null != t && u(d.node, {
                            x1: t,
                            y1: a,
                            x2: l,
                            y2: c
                        }), d
                    }

                    function c(e, t, s, a, l, c) {
                        var d = n._.make("radialGradient", e);
                        return d.stops = i, d.addStop = r, d.getBBox = o, null != t && u(d.node, {
                            cx: t,
                            cy: s,
                            r: a
                        }), null != l && null != c && u(d.node, {
                            fx: l,
                            fy: c
                        }), d
                    }
                    var u = n._.$;
                    a.gradient = function(e) {
                        return function(e, n) {
                            var i, r = t("snap.util.grad.parse", null, n).firstDefined();
                            if (!r) return null;
                            r.params.unshift(e), i = "l" == r.type.toLowerCase() ? l.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && u(i.node, {
                                gradientUnits: "userSpaceOnUse"
                            });
                            for (var o = r.stops, s = o.length, a = 0; s > a; a++) {
                                var d = o[a];
                                i.addStop(d.color, d.offset)
                            }
                            return i
                        }(this.defs, e)
                    }, a.gradientLinear = function(e, t, n, i) {
                        return l(this.defs, e, t, n, i)
                    }, a.gradientRadial = function(e, t, n, i, r) {
                        return c(this.defs, e, t, n, i, r)
                    }, a.toString = function() {
                        var e, t = this.node.ownerDocument,
                            i = t.createDocumentFragment(),
                            r = t.createElement("div"),
                            o = this.node.cloneNode(!0);
                        return i.appendChild(r), r.appendChild(o), n._.$(o, {
                            xmlns: "http://www.w3.org/2000/svg"
                        }), e = r.innerHTML, i.removeChild(i.firstChild), e
                    }, a.toDataURL = function() {
                        return e && e.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                    }, a.clear = function() {
                        for (var e, t = this.node.firstChild; t;) e = t.nextSibling, "defs" != t.tagName ? t.parentNode.removeChild(t) : a.clear.call({
                            node: t
                        }), t = e
                    }
                }()
        }), i.plugin(function(e, t, n, i) {
            function r(e) {
                var t = r.ps = r.ps || {};
                return t[e] ? t[e].sleep = 100 : t[e] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var n in t) t[N](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n])
                }), t[e]
            }

            function o(e, t, n, i) {
                return null == e && (e = t = n = i = 0), null == t && (t = e.y, n = e.width, i = e.height, e = e.x), {
                    x: e,
                    y: t,
                    width: n,
                    w: n,
                    height: i,
                    h: i,
                    x2: e + n,
                    y2: t + i,
                    cx: e + n / 2,
                    cy: t + i / 2,
                    r1: B.min(n, i) / 2,
                    r2: B.max(n, i) / 2,
                    r0: B.sqrt(n * n + i * i) / 2,
                    path: x(e, t, n, i),
                    vb: [e, t, n, i].join(" ")
                }
            }

            function s() {
                return this.join(",").replace(M, "$1")
            }

            function a(e) {
                var t = j(e);
                return t.toString = s, t
            }

            function l(e, t, n, i, r, o, s, a, l) {
                return null == l ? g(e, t, n, i, r, o, s, a) : u(e, t, n, i, r, o, s, a, function(e, t, n, i, r, o, s, a, l) {
                    if (!(0 > l || g(e, t, n, i, r, o, s, a) < l)) {
                        var c, u = .5,
                            d = 1 - u;
                        for (c = g(e, t, n, i, r, o, s, a, d); H(c - l) > .01;) c = g(e, t, n, i, r, o, s, a, d += (l > c ? 1 : -1) * (u /= 2));
                        return d
                    }
                }(e, t, n, i, r, o, s, a, l))
            }

            function c(n, i) {
                function r(e) {
                    return +(+e).toFixed(3)
                }
                return e._.cacher(function(e, o, s) {
                    e instanceof t && (e = e.attr("d"));
                    for (var a, c, d, p, f, h = "", g = {}, v = 0, m = 0, y = (e = A(e)).length; y > m; m++) {
                        if ("M" == (d = e[m])[0]) a = +d[1], c = +d[2];
                        else {
                            if (v + (p = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6])) > o) {
                                if (i && !g.start) {
                                    if (h += ["C" + r((f = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], o - v)).start.x), r(f.start.y), r(f.m.x), r(f.m.y), r(f.x), r(f.y)], s) return h;
                                    g.start = h, h = ["M" + r(f.x), r(f.y) + "C" + r(f.n.x), r(f.n.y), r(f.end.x), r(f.end.y), r(d[5]), r(d[6])].join(), v += p, a = +d[5], c = +d[6];
                                    continue
                                }
                                if (!n && !i) return l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], o - v)
                            }
                            v += p, a = +d[5], c = +d[6]
                        }
                        h += d.shift() + d
                    }
                    return g.end = h, n ? v : i ? g : u(a, c, d[0], d[1], d[2], d[3], d[4], d[5], 1)
                }, null, e._.clone)
            }

            function u(e, t, n, i, r, o, s, a, l) {
                var c = 1 - l,
                    u = O(c, 3),
                    d = O(c, 2),
                    p = l * l,
                    f = p * l,
                    h = e + 2 * l * (n - e) + p * (r - 2 * n + e),
                    g = t + 2 * l * (i - t) + p * (o - 2 * i + t),
                    v = n + 2 * l * (r - n) + p * (s - 2 * r + n),
                    m = i + 2 * l * (o - i) + p * (a - 2 * o + i);
                return {
                    x: u * e + 3 * d * l * n + 3 * c * l * l * r + f * s,
                    y: u * t + 3 * d * l * i + 3 * c * l * l * o + f * a,
                    m: {
                        x: h,
                        y: g
                    },
                    n: {
                        x: v,
                        y: m
                    },
                    start: {
                        x: c * e + l * n,
                        y: c * t + l * i
                    },
                    end: {
                        x: c * r + l * s,
                        y: c * o + l * a
                    },
                    alpha: 90 - 180 * B.atan2(h - v, g - m) / _
                }
            }

            function d(t, n, i, r, s, a, l, c) {
                e.is(t, "array") || (t = [t, n, i, r, s, a, l, c]);
                var u = $.apply(null, t);
                return o(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
            }

            function p(e, t, n) {
                return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
            }

            function f(e, t) {
                return e = o(e), p(t = o(t), e.x, e.y) || p(t, e.x2, e.y) || p(t, e.x, e.y2) || p(t, e.x2, e.y2) || p(e, t.x, t.y) || p(e, t.x2, t.y) || p(e, t.x, t.y2) || p(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
            }

            function h(e, t, n, i, r) {
                return e * (e * (-3 * t + 9 * n - 9 * i + 3 * r) + 6 * t - 12 * n + 6 * i) - 3 * t + 3 * n
            }

            function g(e, t, n, i, r, o, s, a, l) {
                null == l && (l = 1);
                for (var c = (l = l > 1 ? 1 : 0 > l ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, f = 0; 12 > f; f++) {
                    var g = c * u[f] + c,
                        v = h(g, e, n, r, s),
                        m = h(g, t, i, o, a),
                        y = v * v + m * m;
                    p += d[f] * B.sqrt(y)
                }
                return c * p
            }

            function v(e, t, n, i, r, o, s, a) {
                if (!(P(e, n) < q(r, s) || q(e, n) > P(r, s) || P(t, i) < q(o, a) || q(t, i) > P(o, a))) {
                    var l = (e - n) * (o - a) - (t - i) * (r - s);
                    if (l) {
                        var c = ((e * i - t * n) * (r - s) - (e - n) * (r * a - o * s)) / l,
                            u = ((e * i - t * n) * (o - a) - (t - i) * (r * a - o * s)) / l,
                            d = +c.toFixed(2),
                            p = +u.toFixed(2);
                        if (!(d < +q(e, n).toFixed(2) || d > +P(e, n).toFixed(2) || d < +q(r, s).toFixed(2) || d > +P(r, s).toFixed(2) || p < +q(t, i).toFixed(2) || p > +P(t, i).toFixed(2) || p < +q(o, a).toFixed(2) || p > +P(o, a).toFixed(2))) return {
                            x: c,
                            y: u
                        }
                    }
                }
            }

            function m(e, t, n) {
                if (!f(d(e), d(t))) return n ? 0 : [];
                for (var i = ~~(g.apply(0, e) / 8), r = ~~(g.apply(0, t) / 8), o = [], s = [], a = {}, l = n ? 0 : [], c = 0; i + 1 > c; c++) {
                    var p = u.apply(0, e.concat(c / i));
                    o.push({
                        x: p.x,
                        y: p.y,
                        t: c / i
                    })
                }
                for (c = 0; r + 1 > c; c++) p = u.apply(0, t.concat(c / r)), s.push({
                    x: p.x,
                    y: p.y,
                    t: c / r
                });
                for (c = 0; i > c; c++)
                    for (var h = 0; r > h; h++) {
                        var m = o[c],
                            y = o[c + 1],
                            b = s[h],
                            x = s[h + 1],
                            w = H(y.x - m.x) < .001 ? "y" : "x",
                            k = H(x.x - b.x) < .001 ? "y" : "x",
                            T = v(m.x, m.y, y.x, y.y, b.x, b.y, x.x, x.y);
                        if (T) {
                            if (a[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
                            a[T.x.toFixed(4)] = T.y.toFixed(4);
                            var S = m.t + H((T[w] - m[w]) / (y[w] - m[w])) * (y.t - m.t),
                                C = b.t + H((T[k] - b[k]) / (x[k] - b[k])) * (x.t - b.t);
                            S >= 0 && 1 >= S && C >= 0 && 1 >= C && (n ? l++ : l.push({
                                x: T.x,
                                y: T.y,
                                t1: S,
                                t2: C
                            }))
                        }
                    }
                return l
            }

            function y(e, t, n) {
                e = A(e), t = A(t);
                for (var i, r, o, s, a, l, c, u, d, p, f = n ? 0 : [], h = 0, g = e.length; g > h; h++) {
                    var v = e[h];
                    if ("M" == v[0]) i = a = v[1], r = l = v[2];
                    else {
                        "C" == v[0] ? (d = [i, r].concat(v.slice(1)), i = d[6], r = d[7]) : (d = [i, r, i, r, a, l, a, l], i = a, r = l);
                        for (var y = 0, b = t.length; b > y; y++) {
                            var x = t[y];
                            if ("M" == x[0]) o = c = x[1], s = u = x[2];
                            else {
                                "C" == x[0] ? (p = [o, s].concat(x.slice(1)), o = p[6], s = p[7]) : (p = [o, s, o, s, c, u, c, u], o = c, s = u);
                                var w = m(d, p, n);
                                if (n) f += w;
                                else {
                                    for (var k = 0, T = w.length; T > k; k++) w[k].segment1 = h, w[k].segment2 = y, w[k].bez1 = d, w[k].bez2 = p;
                                    f = f.concat(w)
                                }
                            }
                        }
                    }
                }
                return f
            }

            function b(e) {
                var t = r(e);
                if (t.bbox) return j(t.bbox);
                if (!e) return o();
                for (var n, i = 0, s = 0, a = [], l = [], c = 0, u = (e = A(e)).length; u > c; c++)
                    if ("M" == (n = e[c])[0]) i = n[1], s = n[2], a.push(i), l.push(s);
                    else {
                        var d = $(i, s, n[1], n[2], n[3], n[4], n[5], n[6]);
                        a = a.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), i = n[5], s = n[6]
                    }
                var p = q.apply(0, a),
                    f = q.apply(0, l),
                    h = o(p, f, P.apply(0, a) - p, P.apply(0, l) - f);
                return t.bbox = j(h), h
            }

            function x(e, t, n, i, r) {
                if (r) return [
                    ["M", +e + +r, t],
                    ["l", n - 2 * r, 0],
                    ["a", r, r, 0, 0, 1, r, r],
                    ["l", 0, i - 2 * r],
                    ["a", r, r, 0, 0, 1, -r, r],
                    ["l", 2 * r - n, 0],
                    ["a", r, r, 0, 0, 1, -r, -r],
                    ["l", 0, 2 * r - i],
                    ["a", r, r, 0, 0, 1, r, -r],
                    ["z"]
                ];
                var o = [
                    ["M", e, t],
                    ["l", n, 0],
                    ["l", 0, i],
                    ["l", -n, 0],
                    ["z"]
                ];
                return o.toString = s, o
            }

            function w(e, t, n, i, r) {
                if (null == r && null == i && (i = n), e = +e, t = +t, n = +n, i = +i, null != r) var o = Math.PI / 180,
                    a = e + n * Math.cos(-i * o),
                    l = e + n * Math.cos(-r * o),
                    c = [
                        ["M", a, t + n * Math.sin(-i * o)],
                        ["A", n, n, 0, +(r - i > 180), 0, l, t + n * Math.sin(-r * o)]
                    ];
                else c = [
                    ["M", e, t],
                    ["m", 0, -i],
                    ["a", n, i, 0, 1, 1, 0, 2 * i],
                    ["a", n, i, 0, 1, 1, 0, -2 * i],
                    ["z"]
                ];
                return c.toString = s, c
            }

            function k(t) {
                var n = r(t);
                if (n.abs) return a(n.abs);
                if (D(t, "array") && D(t && t[0], "array") || (t = e.parsePathString(t)), !t || !t.length) return [
                    ["M", 0, 0]
                ];
                var i, o = [],
                    l = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    p = 0;
                "M" == t[0][0] && (u = l = +t[0][1], d = c = +t[0][2], p++, o[0] = ["M", l, c]);
                for (var f, h, g = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), v = p, m = t.length; m > v; v++) {
                    if (o.push(f = []), (i = (h = t[v])[0]) != i.toUpperCase()) switch (f[0] = i.toUpperCase(), f[0]) {
                        case "A":
                            f[1] = h[1], f[2] = h[2], f[3] = h[3], f[4] = h[4], f[5] = h[5], f[6] = +h[6] + l, f[7] = +h[7] + c;
                            break;
                        case "V":
                            f[1] = +h[1] + c;
                            break;
                        case "H":
                            f[1] = +h[1] + l;
                            break;
                        case "R":
                            for (var y = [l, c].concat(h.slice(1)), b = 2, x = y.length; x > b; b++) y[b] = +y[b] + l, y[++b] = +y[b] + c;
                            o.pop(), o = o.concat(F(y, g));
                            break;
                        case "O":
                            o.pop(), (y = w(l, c, h[1], h[2])).push(y[0]), o = o.concat(y);
                            break;
                        case "U":
                            o.pop(), o = o.concat(w(l, c, h[1], h[2], h[3])), f = ["U"].concat(o[o.length - 1].slice(-2));
                            break;
                        case "M":
                            u = +h[1] + l, d = +h[2] + c;
                        default:
                            for (b = 1, x = h.length; x > b; b++) f[b] = +h[b] + (b % 2 ? l : c)
                    } else if ("R" == i) y = [l, c].concat(h.slice(1)), o.pop(), o = o.concat(F(y, g)), f = ["R"].concat(h.slice(-2));
                    else if ("O" == i) o.pop(), (y = w(l, c, h[1], h[2])).push(y[0]), o = o.concat(y);
                    else if ("U" == i) o.pop(), o = o.concat(w(l, c, h[1], h[2], h[3])), f = ["U"].concat(o[o.length - 1].slice(-2));
                    else
                        for (var k = 0, T = h.length; T > k; k++) f[k] = h[k];
                    if ("O" != (i = i.toUpperCase())) switch (f[0]) {
                        case "Z":
                            l = +u, c = +d;
                            break;
                        case "H":
                            l = f[1];
                            break;
                        case "V":
                            c = f[1];
                            break;
                        case "M":
                            u = f[f.length - 2], d = f[f.length - 1];
                        default:
                            l = f[f.length - 2], c = f[f.length - 1]
                    }
                }
                return o.toString = s, n.abs = a(o), o
            }

            function T(e, t, n, i) {
                return [e, t, n, i, n, i]
            }

            function S(e, t, n, i, r, o) {
                var s = 1 / 3,
                    a = 2 / 3;
                return [s * e + a * n, s * t + a * i, s * r + a * n, s * o + a * i, r, o]
            }

            function C(t, n, i, r, o, s, a, l, c, u) {
                var d, p = 120 * _ / 180,
                    f = _ / 180 * (+o || 0),
                    h = [],
                    g = e._.cacher(function(e, t, n) {
                        return {
                            x: e * B.cos(n) - t * B.sin(n),
                            y: e * B.sin(n) + t * B.cos(n)
                        }
                    });
                if (!i || !r) return [t, n, l, c, l, c];
                if (u) S = u[0], $ = u[1], k = u[2], T = u[3];
                else {
                    t = (d = g(t, n, -f)).x, n = d.y, l = (d = g(l, c, -f)).x, c = d.y;
                    var v = (B.cos(_ / 180 * o), B.sin(_ / 180 * o), (t - l) / 2),
                        m = (n - c) / 2,
                        y = v * v / (i * i) + m * m / (r * r);
                    y > 1 && (i *= y = B.sqrt(y), r *= y);
                    var b = i * i,
                        x = r * r,
                        w = (s == a ? -1 : 1) * B.sqrt(H((b * x - b * m * m - x * v * v) / (b * m * m + x * v * v))),
                        k = w * i * m / r + (t + l) / 2,
                        T = w * -r * v / i + (n + c) / 2,
                        S = B.asin(((n - T) / r).toFixed(9)),
                        $ = B.asin(((c - T) / r).toFixed(9));
                    0 > (S = k > t ? _ - S : S) && (S = 2 * _ + S), 0 > ($ = k > l ? _ - $ : $) && ($ = 2 * _ + $), a && S > $ && (S -= 2 * _), !a && $ > S && ($ -= 2 * _)
                }
                var A = $ - S;
                if (H(A) > p) {
                    var F = $,
                        E = l,
                        D = c;
                    $ = S + p * (a && $ > S ? 1 : -1), h = C(l = k + i * B.cos($), c = T + r * B.sin($), i, r, o, 0, a, E, D, [$, F, k, T])
                }
                A = $ - S;
                var j = B.cos(S),
                    N = B.sin(S),
                    M = B.cos($),
                    L = B.sin($),
                    q = B.tan(A / 4),
                    P = 4 / 3 * i * q,
                    O = 4 / 3 * r * q,
                    z = [t, n],
                    I = [t + P * N, n - O * j],
                    R = [l + P * L, c - O * M],
                    W = [l, c];
                if (I[0] = 2 * z[0] - I[0], I[1] = 2 * z[1] - I[1], u) return [I, R, W].concat(h);
                for (var U = [], X = 0, V = (h = [I, R, W].concat(h).join().split(",")).length; V > X; X++) U[X] = X % 2 ? g(h[X - 1], h[X], f).y : g(h[X], h[X + 1], f).x;
                return U
            }

            function $(e, t, n, i, r, o, s, a) {
                for (var l, c, u, d, p, f, h, g, v = [], m = [
                    [],
                    []
                ], y = 0; 2 > y; ++y)
                    if (0 == y ? (c = 6 * e - 12 * n + 6 * r, l = -3 * e + 9 * n - 9 * r + 3 * s, u = 3 * n - 3 * e) : (c = 6 * t - 12 * i + 6 * o, l = -3 * t + 9 * i - 9 * o + 3 * a, u = 3 * i - 3 * t), H(l) < 1e-12) {
                        if (H(c) < 1e-12) continue;
                        (d = -u / c) > 0 && 1 > d && v.push(d)
                    } else h = c * c - 4 * u * l, g = B.sqrt(h), 0 > h || ((p = (-c + g) / (2 * l)) > 0 && 1 > p && v.push(p), (f = (-c - g) / (2 * l)) > 0 && 1 > f && v.push(f));
                for (var b, x = v.length, w = x; x--;) b = 1 - (d = v[x]), m[0][x] = b * b * b * e + 3 * b * b * d * n + 3 * b * d * d * r + d * d * d * s, m[1][x] = b * b * b * t + 3 * b * b * d * i + 3 * b * d * d * o + d * d * d * a;
                return m[0][w] = e, m[1][w] = t, m[0][w + 1] = s, m[1][w + 1] = a, m[0].length = m[1].length = w + 2, {
                    min: {
                        x: q.apply(0, m[0]),
                        y: q.apply(0, m[1])
                    },
                    max: {
                        x: P.apply(0, m[0]),
                        y: P.apply(0, m[1])
                    }
                }
            }

            function A(e, t) {
                var n = !t && r(e);
                if (!t && n.curve) return a(n.curve);
                for (var i = k(e), o = t && k(t), s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, l = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, c = function(e, t, n) {
                    var i, r;
                    if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                    switch (!(e[0] in {
                        T: 1,
                        Q: 1
                    }) && (t.qx = t.qy = null), e[0]) {
                        case "M":
                            t.X = e[1], t.Y = e[2];
                            break;
                        case "A":
                            e = ["C"].concat(C.apply(0, [t.x, t.y].concat(e.slice(1))));
                            break;
                        case "S":
                            "C" == n || "S" == n ? (i = 2 * t.x - t.bx, r = 2 * t.y - t.by) : (i = t.x, r = t.y), e = ["C", i, r].concat(e.slice(1));
                            break;
                        case "T":
                            "Q" == n || "T" == n ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"].concat(S(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                            break;
                        case "Q":
                            t.qx = e[1], t.qy = e[2], e = ["C"].concat(S(t.x, t.y, e[1], e[2], e[3], e[4]));
                            break;
                        case "L":
                            e = ["C"].concat(T(t.x, t.y, e[1], e[2]));
                            break;
                        case "H":
                            e = ["C"].concat(T(t.x, t.y, e[1], t.y));
                            break;
                        case "V":
                            e = ["C"].concat(T(t.x, t.y, t.x, e[1]));
                            break;
                        case "Z":
                            e = ["C"].concat(T(t.x, t.y, t.X, t.Y))
                    }
                    return e
                }, u = function(e, t) {
                    if (e[t].length > 7) {
                        e[t].shift();
                        for (var n = e[t]; n.length;) p[t] = "A", o && (f[t] = "A"), e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
                        e.splice(t, 1), m = P(i.length, o && o.length || 0)
                    }
                }, d = function(e, t, n, r, s) {
                    e && t && "M" == e[s][0] && "M" != t[s][0] && (t.splice(s, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = e[s][1], n.y = e[s][2], m = P(i.length, o && o.length || 0))
                }, p = [], f = [], h = "", g = "", v = 0, m = P(i.length, o && o.length || 0); m > v; v++) {
                    i[v] && (h = i[v][0]), "C" != h && (p[v] = h, v && (g = p[v - 1])), i[v] = c(i[v], s, g), "A" != p[v] && "C" == h && (p[v] = "C"), u(i, v), o && (o[v] && (h = o[v][0]), "C" != h && (f[v] = h, v && (g = f[v - 1])), o[v] = c(o[v], l, g), "A" != f[v] && "C" == h && (f[v] = "C"), u(o, v)), d(i, o, s, l, v), d(o, i, l, s, v);
                    var y = i[v],
                        b = o && o[v],
                        x = y.length,
                        w = o && b.length;
                    s.x = y[x - 2], s.y = y[x - 1], s.bx = L(y[x - 4]) || s.x, s.by = L(y[x - 3]) || s.y, l.bx = o && (L(b[w - 4]) || l.x), l.by = o && (L(b[w - 3]) || l.y), l.x = o && b[w - 2], l.y = o && b[w - 1]
                }
                return o || (n.curve = a(i)), o ? [i, o] : i
            }

            function F(e, t) {
                for (var n = [], i = 0, r = e.length; r - 2 * !t > i; i += 2) {
                    var o = [{
                        x: +e[i - 2],
                        y: +e[i - 1]
                    }, {
                        x: +e[i],
                        y: +e[i + 1]
                    }, {
                        x: +e[i + 2],
                        y: +e[i + 3]
                    }, {
                        x: +e[i + 4],
                        y: +e[i + 5]
                    }];
                    t ? i ? r - 4 == i ? o[3] = {
                        x: +e[0],
                        y: +e[1]
                    } : r - 2 == i && (o[2] = {
                        x: +e[0],
                        y: +e[1]
                    }, o[3] = {
                        x: +e[2],
                        y: +e[3]
                    }) : o[0] = {
                        x: +e[r - 2],
                        y: +e[r - 1]
                    } : r - 4 == i ? o[3] = o[2] : i || (o[0] = {
                        x: +e[i],
                        y: +e[i + 1]
                    }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                }
                return n
            }
            var E = t.prototype,
                D = e.is,
                j = e._.clone,
                N = "hasOwnProperty",
                M = /,?([a-z]),?/gi,
                L = parseFloat,
                B = Math,
                _ = B.PI,
                q = B.min,
                P = B.max,
                O = B.pow,
                H = B.abs,
                z = c(1),
                I = c(),
                R = c(0, 1),
                W = e._unit2px,
                U = {
                    path: function(e) {
                        return e.attr("path")
                    },
                    circle: function(e) {
                        var t = W(e);
                        return w(t.cx, t.cy, t.r)
                    },
                    ellipse: function(e) {
                        var t = W(e);
                        return w(t.cx || 0, t.cy || 0, t.rx, t.ry)
                    },
                    rect: function(e) {
                        var t = W(e);
                        return x(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry)
                    },
                    image: function(e) {
                        var t = W(e);
                        return x(t.x || 0, t.y || 0, t.width, t.height)
                    },
                    line: function(e) {
                        return "M" + [e.attr("x1") || 0, e.attr("y1") || 0, e.attr("x2"), e.attr("y2")]
                    },
                    polyline: function(e) {
                        return "M" + e.attr("points")
                    },
                    polygon: function(e) {
                        return "M" + e.attr("points") + "z"
                    },
                    deflt: function(e) {
                        var t = e.node.getBBox();
                        return x(t.x, t.y, t.width, t.height)
                    }
                };
            e.path = r, e.path.getTotalLength = z, e.path.getPointAtLength = I, e.path.getSubpath = function(e, t, n) {
                if (this.getTotalLength(e) - n < 1e-6) return R(e, t).end;
                var i = R(e, n, 1);
                return t ? R(i, t).end : i
            }, E.getTotalLength = function() {
                return this.node.getTotalLength ? this.node.getTotalLength() : void 0
            }, E.getPointAtLength = function(e) {
                return I(this.attr("d"), e)
            }, E.getSubpath = function(t, n) {
                return e.path.getSubpath(this.attr("d"), t, n)
            }, e._.box = o, e.path.findDotsAtSegment = u, e.path.bezierBBox = d, e.path.isPointInsideBBox = p, e.closest = function(t, n, i, r) {
                for (var s = 100, a = o(t - s / 2, n - s / 2, s, s), l = [], c = i[0].hasOwnProperty("x") ? function(e) {
                    return {
                        x: i[e].x,
                        y: i[e].y
                    }
                } : function(e) {
                    return {
                        x: i[e],
                        y: r[e]
                    }
                }, u = 0; 1e6 >= s && !u;) {
                    for (var d = 0, f = i.length; f > d; d++) {
                        var h = c(d);
                        if (p(a, h.x, h.y)) {
                            u++, l.push(h);
                            break
                        }
                    }
                    u || (a = o(t - (s *= 2) / 2, n - s / 2, s, s))
                }
                if (1e6 != s) {
                    var g, v = 1 / 0;
                    for (d = 0, f = l.length; f > d; d++) {
                        var m = e.len(t, n, l[d].x, l[d].y);
                        v > m && (v = m, l[d].len = m, g = l[d])
                    }
                    return g
                }
            }, e.path.isBBoxIntersect = f, e.path.intersection = function(e, t) {
                return y(e, t)
            }, e.path.intersectionNumber = function(e, t) {
                return y(e, t, 1)
            }, e.path.isPointInside = function(e, t, n) {
                var i = b(e);
                return p(i, t, n) && y(e, [
                    ["M", t, n],
                    ["H", i.x2 + 10]
                ], 1) % 2 == 1
            }, e.path.getBBox = b, e.path.get = U, e.path.toRelative = function(t) {
                var n = r(t),
                    i = String.prototype.toLowerCase;
                if (n.rel) return a(n.rel);
                e.is(t, "array") && e.is(t && t[0], "array") || (t = e.parsePathString(t));
                var o = [],
                    l = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    p = 0;
                "M" == t[0][0] && (u = l = t[0][1], d = c = t[0][2], p++, o.push(["M", l, c]));
                for (var f = p, h = t.length; h > f; f++) {
                    var g = o[f] = [],
                        v = t[f];
                    if (v[0] != i.call(v[0])) switch (g[0] = i.call(v[0]), g[0]) {
                        case "a":
                            g[1] = v[1], g[2] = v[2], g[3] = v[3], g[4] = v[4], g[5] = v[5], g[6] = +(v[6] - l).toFixed(3), g[7] = +(v[7] - c).toFixed(3);
                            break;
                        case "v":
                            g[1] = +(v[1] - c).toFixed(3);
                            break;
                        case "m":
                            u = v[1], d = v[2];
                        default:
                            for (var m = 1, y = v.length; y > m; m++) g[m] = +(v[m] - (m % 2 ? l : c)).toFixed(3)
                    } else {
                        g = o[f] = [], "m" == v[0] && (u = v[1] + l, d = v[2] + c);
                        for (var b = 0, x = v.length; x > b; b++) o[f][b] = v[b]
                    }
                    var w = o[f].length;
                    switch (o[f][0]) {
                        case "z":
                            l = u, c = d;
                            break;
                        case "h":
                            l += +o[f][w - 1];
                            break;
                        case "v":
                            c += +o[f][w - 1];
                            break;
                        default:
                            l += +o[f][w - 2], c += +o[f][w - 1]
                    }
                }
                return o.toString = s, n.rel = a(o), o
            }, e.path.toAbsolute = k, e.path.toCubic = A, e.path.map = function(e, t) {
                if (!t) return e;
                var n, i, r, o, s, a, l;
                for (r = 0, s = (e = A(e)).length; s > r; r++)
                    for (o = 1, a = (l = e[r]).length; a > o; o += 2) n = t.x(l[o], l[o + 1]), i = t.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = i;
                return e
            }, e.path.toString = s, e.path.clone = a
        }), i.plugin(function(e, i, r, o) {
            var s = Math.max,
                a = Math.min,
                l = function(e) {
                    if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", e)
                        for (var t = 0, n = e.length; n > t; t++) e[t] && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
                },
                c = l.prototype;
            c.push = function() {
                for (var e, t, n = 0, i = arguments.length; i > n; n++)(e = arguments[n]) && (this[t = this.items.length] = this.items[t] = e, this.length++);
                return this
            }, c.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, c.forEach = function(e, t) {
                for (var n = 0, i = this.items.length; i > n; n++)
                    if (!1 === e.call(t, this.items[n], n)) return this;
                return this
            }, c.animate = function(i, r, o, s) {
                "function" != typeof o || o.length || (s = o, o = n.linear), i instanceof e._.Animation && (s = i.callback, o = i.easing, r = o.dur, i = i.attr);
                var a = arguments;
                if (e.is(i, "array") && e.is(a[a.length - 1], "array")) var l = !0;
                var c, u = function() {
                        c ? this.b = c : c = this.b
                    },
                    d = 0,
                    p = this,
                    f = s && function() {
                        ++d == p.length && s.call(this)
                    };
                return this.forEach(function(e, n) {
                    t.once("snap.animcreated." + e.id, u), l ? a[n] && e.animate.apply(e, a[n]) : e.animate(i, r, o, f)
                })
            }, c.remove = function() {
                for (; this.length;) this.pop().remove();
                return this
            }, c.bind = function(e, t, n) {
                var i = {};
                if ("function" == typeof t) this.bindings[e] = t;
                else {
                    var r = n || e;
                    this.bindings[e] = function(e) {
                        i[r] = e, t.attr(i)
                    }
                }
                return this
            }, c.attr = function(e) {
                var t = {};
                for (var n in e) this.bindings[n] ? this.bindings[n](e[n]) : t[n] = e[n];
                for (var i = 0, r = this.items.length; r > i; i++) this.items[i].attr(t);
                return this
            }, c.clear = function() {
                for (; this.length;) this.pop()
            }, c.splice = function(e, t, n) {
                e = 0 > e ? s(this.length + e, 0) : e, t = s(0, a(this.length - e, t));
                var i, r = [],
                    o = [],
                    c = [];
                for (i = 2; i < arguments.length; i++) c.push(arguments[i]);
                for (i = 0; t > i; i++) o.push(this[e + i]);
                for (; i < this.length - e; i++) r.push(this[e + i]);
                var u = c.length;
                for (i = 0; i < u + r.length; i++) this.items[e + i] = this[e + i] = u > i ? c[i] : r[i - u];
                for (i = this.items.length = this.length -= t - u; this[i];) delete this[i++];
                return new l(o)
            }, c.exclude = function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] == e) return this.splice(t, 1), !0;
                return !1
            }, c.insertAfter = function(e) {
                for (var t = this.items.length; t--;) this.items[t].insertAfter(e);
                return this
            }, c.getBBox = function() {
                for (var e = [], t = [], n = [], i = [], r = this.items.length; r--;)
                    if (!this.items[r].removed) {
                        var o = this.items[r].getBBox();
                        e.push(o.x), t.push(o.y), n.push(o.x + o.width), i.push(o.y + o.height)
                    }
                return {
                    x: e = a.apply(0, e),
                    y: t = a.apply(0, t),
                    x2: n = s.apply(0, n),
                    y2: i = s.apply(0, i),
                    width: n - e,
                    height: i - t,
                    cx: e + (n - e) / 2,
                    cy: t + (i - t) / 2
                }
            }, c.clone = function(e) {
                e = new l;
                for (var t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].clone());
                return e
            }, c.toString = function() {
                return "Snap‘s set"
            }, c.type = "set", e.Set = l, e.set = function() {
                var e = new l;
                return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)), e
            }
        }), i.plugin(function(e, n, i, r) {
            function o(e) {
                var t = e[0];
                switch (t.toLowerCase()) {
                    case "t":
                        return [t, 0, 0];
                    case "m":
                        return [t, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
                    case "s":
                        return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
                }
            }

            function s(t, n, i) {
                t = t || new e.Matrix, n = n || new e.Matrix, t = e.parseTransformString(t.toTransformString()) || [], n = e.parseTransformString(n.toTransformString()) || [];
                for (var r, s, a, l, c = Math.max(t.length, n.length), u = [], f = [], h = 0; c > h; h++) {
                    if (a = t[h] || o(n[h]), l = n[h] || o(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                        t = e._.transform2matrix(t, i()), n = e._.transform2matrix(n, i()), u = [
                            ["m", t.a, t.b, t.c, t.d, t.e, t.f]
                        ], f = [
                            ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                        ];
                        break
                    }
                    for (u[h] = [], f[h] = [], r = 0, s = Math.max(a.length, l.length); s > r; r++) r in a && (u[h][r] = a[r]), r in l && (f[h][r] = l[r])
                }
                return {
                    from: p(u),
                    to: p(f),
                    f: d(u)
                }
            }

            function a(e) {
                return e
            }

            function l(e) {
                return function(t) {
                    return +t.toFixed(3) + e
                }
            }

            function c(e) {
                return e.join(" ")
            }

            function u(t) {
                return e.rgb(t[0], t[1], t[2], t[3])
            }

            function d(e) {
                var t, n, i, r, o, s, a = 0,
                    l = [];
                for (t = 0, n = e.length; n > t; t++) {
                    for (o = "[", s = ['"' + e[t][0] + '"'], i = 1, r = e[t].length; r > i; i++) s[i] = "val[" + a++ + "]";
                    o += s + "]", l[t] = o
                }
                return Function("val", "return Snap.path.toString.call([" + l + "])")
            }

            function p(e) {
                for (var t = [], n = 0, i = e.length; i > n; n++)
                    for (var r = 1, o = e[n].length; o > r; r++) t.push(e[n][r]);
                return t
            }

            function f(e) {
                return isFinite(e)
            }
            var h = {},
                g = /[%a-z]+$/i,
                v = String;
            h.stroke = h.fill = "colour", n.prototype.equal = function(e, n) {
                return t("snap.util.equal", this, e, n).firstDefined()
            }, t.on("snap.util.equal", function(t, n) {
                var i, r, o = v(this.attr(t) || ""),
                    m = this;
                if ("colour" == h[t]) return i = e.color(o), r = e.color(n), {
                    from: [i.r, i.g, i.b, i.opacity],
                    to: [r.r, r.g, r.b, r.opacity],
                    f: u
                };
                if ("viewBox" == t) return {
                    from: i = this.attr(t).vb.split(" ").map(Number),
                    to: r = n.split(" ").map(Number),
                    f: c
                };
                if ("transform" == t || "gradientTransform" == t || "patternTransform" == t) return "string" == typeof n && (n = v(n).replace(/\.{3}|\u2026/g, o)), s(o = this.matrix, n = e._.rgTransform.test(n) ? e._.transform2matrix(n, this.getBBox()) : e._.transform2matrix(e._.svgTransform2string(n), this.getBBox()), function() {
                    return m.getBBox(1)
                });
                if ("d" == t || "path" == t) return {
                    from: p((i = e.path.toCubic(o, n))[0]),
                    to: p(i[1]),
                    f: d(i[0])
                };
                if ("points" == t) return {
                    from: i = v(o).split(e._.separator),
                    to: r = v(n).split(e._.separator),
                    f: function(e) {
                        return e
                    }
                };
                if (f(o) && f(n)) return {
                    from: parseFloat(o),
                    to: parseFloat(n),
                    f: a
                };
                var y = o.match(g),
                    b = v(n).match(g);
                return y && function(t, n) {
                    return !(!e.is(t, "array") || !e.is(n, "array")) && t.toString() == n.toString()
                }(y, b) ? {
                    from: parseFloat(o),
                    to: parseFloat(n),
                    f: l(y)
                } : {
                    from: this.asPX(t),
                    to: this.asPX(t, n),
                    f: a
                }
            })
        }), i.plugin(function(e, n, i, r) {
            for (var o = n.prototype, s = ("createTouch" in r.doc), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, c = function(e, t) {
                var n = "y" == e ? "scrollTop" : "scrollLeft",
                    i = t && t.node ? t.node.ownerDocument : r.doc;
                return i[n in i.documentElement ? "documentElement" : "body"][n]
            }, u = function() {
                return this.originalEvent.preventDefault()
            }, d = function() {
                return this.originalEvent.stopPropagation()
            }, p = function(e, t, n, i) {
                var r = s && l[t] ? l[t] : t,
                    o = function(r) {
                        var o = c("y", i),
                            a = c("x", i);
                        if (s && l.hasOwnProperty(t))
                            for (var p = 0, f = r.targetTouches && r.targetTouches.length; f > p; p++)
                                if (r.targetTouches[p].target == e || e.contains(r.targetTouches[p].target)) {
                                    var h = r;
                                    (r = r.targetTouches[p]).originalEvent = h, r.preventDefault = u, r.stopPropagation = d;
                                    break
                                }
                        var g = r.clientX + a,
                            v = r.clientY + o;
                        return n.call(i, r, g, v)
                    };
                return t !== r && e.addEventListener(t, o, !1), e.addEventListener(r, o, !1),
                    function() {
                        return t !== r && e.removeEventListener(t, o, !1), e.removeEventListener(r, o, !1), !0
                    }
            }, f = [], h = function(e) {
                for (var n, i = e.clientX, r = e.clientY, o = c("y"), a = c("x"), l = f.length; l--;) {
                    if (n = f[l], s) {
                        for (var u, d = e.touches && e.touches.length; d--;)
                            if ((u = e.touches[d]).identifier == n.el._drag.id || n.el.node.contains(u.target)) {
                                i = u.clientX, r = u.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                                break
                            }
                    } else e.preventDefault();
                    var p = n.el.node;
                    p.nextSibling, p.parentNode, p.style.display, i += a, r += o, t("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, r - n.el._drag.y, i, r, e)
                }
            }, g = function(n) {
                e.unmousemove(h).unmouseup(g);
                for (var i, r = f.length; r--;)(i = f[r]).el._drag = {}, t("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n), t.off("snap.drag.*." + i.el.id);
                f = []
            }, v = a.length; v--;) ! function(t) {
                e[t] = o[t] = function(n, i) {
                    if (e.is(n, "function")) this.events = this.events || [], this.events.push({
                        name: t,
                        f: n,
                        unbind: p(this.node || document, t, n, i || this)
                    });
                    else
                        for (var r = 0, o = this.events.length; o > r; r++)
                            if (this.events[r].name == t) try {
                                this.events[r].f.call(this)
                            } catch (e) {}
                    return this
                }, e["un" + t] = o["un" + t] = function(e) {
                    for (var n = this.events || [], i = n.length; i--;)
                        if (n[i].name == t && (n[i].f == e || !e)) return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
                    return this
                }
            }(a[v]);
            o.hover = function(e, t, n, i) {
                return this.mouseover(e, n).mouseout(t, i || n)
            }, o.unhover = function(e, t) {
                return this.unmouseover(e).unmouseout(t)
            };
            var m = [];
            o.drag = function(n, i, r, o, s, a) {
                function l(l, c, u) {
                    (l.originalEvent || l).preventDefault(), d._drag.x = c, d._drag.y = u, d._drag.id = l.identifier, !f.length && e.mousemove(h).mouseup(g), f.push({
                        el: d,
                        move_scope: o,
                        start_scope: s,
                        end_scope: a
                    }), i && t.on("snap.drag.start." + d.id, i), n && t.on("snap.drag.move." + d.id, n), r && t.on("snap.drag.end." + d.id, r), t("snap.drag.start." + d.id, s || o || d, c, u, l)
                }

                function c(e, n, i) {
                    t("snap.draginit." + d.id, d, e, n, i)
                }
                var u, d = this;
                return arguments.length ? (t.on("snap.draginit." + d.id, l), d._drag = {}, m.push({
                    el: d,
                    start: l,
                    init: c
                }), d.mousedown(c), d) : d.drag(function(e, t) {
                    this.attr({
                        transform: u + (u ? "T" : "t") + [e, t]
                    })
                }, function() {
                    u = this.transform().local
                })
            }, o.undrag = function() {
                for (var n = m.length; n--;) m[n].el == this && (this.unmousedown(m[n].init), m.splice(n, 1), t.unbind("snap.drag.*." + this.id), t.unbind("snap.draginit." + this.id));
                return !m.length && e.unmousemove(h).unmouseup(g), this
            }
        }), i.plugin(function(e, n, i, r) {
            var o = (n.prototype, i.prototype),
                s = /^\s*url\((.+)\)/,
                a = String,
                l = e._.$;
            e.filter = {}, o.filter = function(t) {
                var i = this;
                "svg" != i.type && (i = i.paper);
                var r = e.parse(a(t)),
                    o = e._.id(),
                    s = (i.node.offsetWidth, i.node.offsetHeight, l("filter"));
                return l(s, {
                    id: o,
                    filterUnits: "userSpaceOnUse"
                }), s.appendChild(r.node), i.defs.appendChild(s), new n(s)
            }, t.on("snap.util.getattr.filter", function() {
                t.stop();
                var n = l(this.node, "filter");
                if (n) {
                    var i = a(n).match(s);
                    return i && e.select(i[1])
                }
            }), t.on("snap.util.attr.filter", function(i) {
                if (i instanceof n && "filter" == i.type) {
                    t.stop();
                    var r = i.node.id;
                    r || (l(i.node, {
                        id: i.id
                    }), r = i.id), l(this.node, {
                        filter: e.url(r)
                    })
                }
                i && "none" != i || (t.stop(), this.node.removeAttribute("filter"))
            }), e.filter.blur = function(t, n) {
                null == t && (t = 2);
                var i = null == n ? t : [t, n];
                return e.format('<feGaussianBlur stdDeviation="{def}"/>', {
                    def: i
                })
            }, e.filter.blur.toString = function() {
                return this()
            }, e.filter.shadow = function(t, n, i, r, o) {
                return null == o && (null == r ? (o = i, i = 4, r = "#000") : (o = r, r = i, i = 4)), null == i && (i = 4), null == o && (o = 1), null == t && (t = 0, n = 2), null == n && (n = t), r = e.color(r), e.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                    color: r,
                    dx: t,
                    dy: n,
                    blur: i,
                    opacity: o
                })
            }, e.filter.shadow.toString = function() {
                return this()
            }, e.filter.grayscale = function(t) {
                return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                    a: .2126 + .7874 * (1 - t),
                    b: .7152 - .7152 * (1 - t),
                    c: .0722 - .0722 * (1 - t),
                    d: .2126 - .2126 * (1 - t),
                    e: .7152 + .2848 * (1 - t),
                    f: .0722 - .0722 * (1 - t),
                    g: .2126 - .2126 * (1 - t),
                    h: .0722 + .9278 * (1 - t)
                })
            }, e.filter.grayscale.toString = function() {
                return this()
            }, e.filter.sepia = function(t) {
                return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                    a: .393 + .607 * (1 - t),
                    b: .769 - .769 * (1 - t),
                    c: .189 - .189 * (1 - t),
                    d: .349 - .349 * (1 - t),
                    e: .686 + .314 * (1 - t),
                    f: .168 - .168 * (1 - t),
                    g: .272 - .272 * (1 - t),
                    h: .534 - .534 * (1 - t),
                    i: .131 + .869 * (1 - t)
                })
            }, e.filter.sepia.toString = function() {
                return this()
            }, e.filter.saturate = function(t) {
                return null == t && (t = 1), e.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                    amount: 1 - t
                })
            }, e.filter.saturate.toString = function() {
                return this()
            }, e.filter.hueRotate = function(t) {
                return t = t || 0, e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                    angle: t
                })
            }, e.filter.hueRotate.toString = function() {
                return this()
            }, e.filter.invert = function(t) {
                return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                    amount: t,
                    amount2: 1 - t
                })
            }, e.filter.invert.toString = function() {
                return this()
            }, e.filter.brightness = function(t) {
                return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                    amount: t
                })
            }, e.filter.brightness.toString = function() {
                return this()
            }, e.filter.contrast = function(t) {
                return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                    amount: t,
                    amount2: .5 - t / 2
                })
            }, e.filter.contrast.toString = function() {
                return this()
            }
        }), i.plugin(function(e, t, n, i, r) {
            var o = e._.box,
                s = e.is,
                a = /^[^a-z]*([tbmlrc])/i,
                l = function() {
                    return "T" + this.dx + "," + this.dy
                };
            t.prototype.getAlign = function(e, t) {
                null == t && s(e, "string") && (t = e, e = null);
                var n = (e = e || this.paper).getBBox ? e.getBBox() : o(e),
                    i = this.getBBox(),
                    r = {};
                switch (t = (t = t && t.match(a)) ? t[1].toLowerCase() : "c") {
                    case "t":
                        r.dx = 0, r.dy = n.y - i.y;
                        break;
                    case "b":
                        r.dx = 0, r.dy = n.y2 - i.y2;
                        break;
                    case "m":
                        r.dx = 0, r.dy = n.cy - i.cy;
                        break;
                    case "l":
                        r.dx = n.x - i.x, r.dy = 0;
                        break;
                    case "r":
                        r.dx = n.x2 - i.x2, r.dy = 0;
                        break;
                    default:
                        r.dx = n.cx - i.cx, r.dy = 0
                }
                return r.toString = l, r
            }, t.prototype.align = function(e, t) {
                return this.transform("..." + this.getAlign(e, t))
            }
        }), i.plugin(function(t, n, i, r) {
            function o(e) {
                e = e.split(/(?=#)/);
                var t = new String(e[5]);
                return t[50] = e[0], t[100] = e[1], t[200] = e[2], t[300] = e[3], t[400] = e[4], t[500] = e[5], t[600] = e[6], t[700] = e[7], t[800] = e[8], t[900] = e[9], e[10] && (t.A100 = e[10], t.A200 = e[11], t.A400 = e[12], t.A700 = e[13]), t
            }
            t.mui = {}, t.flat = {}, t.mui.red = o("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), t.mui.pink = o("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), t.mui.purple = o("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), t.mui.deeppurple = o("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), t.mui.indigo = o("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), t.mui.blue = o("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), t.mui.lightblue = o("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), t.mui.cyan = o("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), t.mui.teal = o("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), t.mui.green = o("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), t.mui.lightgreen = o("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), t.mui.lime = o("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), t.mui.yellow = o("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), t.mui.amber = o("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), t.mui.orange = o("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), t.mui.deeporange = o("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), t.mui.brown = o("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), t.mui.grey = o("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), t.mui.bluegrey = o("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), t.flat.turquoise = "#1abc9c", t.flat.greensea = "#16a085", t.flat.sunflower = "#f1c40f", t.flat.orange = "#f39c12", t.flat.emerland = "#2ecc71", t.flat.nephritis = "#27ae60", t.flat.carrot = "#e67e22", t.flat.pumpkin = "#d35400", t.flat.peterriver = "#3498db", t.flat.belizehole = "#2980b9", t.flat.alizarin = "#e74c3c", t.flat.pomegranate = "#c0392b", t.flat.amethyst = "#9b59b6", t.flat.wisteria = "#8e44ad", t.flat.clouds = "#ecf0f1", t.flat.silver = "#bdc3c7", t.flat.wetasphalt = "#34495e", t.flat.midnightblue = "#2c3e50", t.flat.concrete = "#95a5a6", t.flat.asbestos = "#7f8c8d", t.importMUIColors = function() {
                for (var n in t.mui) t.mui.hasOwnProperty(n) && (e[n] = t.mui[n])
            }
        }), i
    }), $(".request-popup-btn").click(function(e) {
    e.preventDefault();
    let t = $('.request-question input[name="fullname"]'),
        n = $('.request-question select[name="consultation"]'),
        i = $('.request-question input[name="phone"]'),
        r = $('.request-question input[name="email"]');
    var o = n.find("option:selected").data("type");
    "" != t.val() ? t.css("border-color", "#222") : t.css("border-color", "red"), "" != n.val() ? n.css("border-color", "#222") : n.css("border-color", "red"), "" != i.val() ? i.css("border-color", "#222") : i.css("border-color", "red"), validateEmail(r.val()) ? r.css("border-color", "#222") : r.css("border-color", "red"), "" != t.val() && "" != n.val() && "" != i.val() && validateEmail(r.val()) && (dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: n.val(),
        event: "autoEvent"
    }), $.ajax({
        type: "post",
        url: "/site/request",
        data: {
            name: t.val(),
            type: n.val(),
            esputnik: o,
            phone: i.val(),
            email: r.val()
        },
        dataType: "json",
        beforeSend: function(e) {
            $(".request-popup-btn").attr("disabled", "disabled").text("Відправлення...").removeClass("btn-primary").addClass("btn-primary-disable").css({
                cursor: "wait"
            })
        },
        complete: function(e) {
            $(".request-popup-btn").text("Надіслано").css({
                cursor: "default"
            }), $(window).innerHeight() < 768 ? $(".request-question .form-compelete").css("display", "block;").hide().fadeIn() : $(".request-question .form-compelete").css("display", "inline-flex;").hide().fadeIn()
        }
    }))
}), $(".connect-btn").click(function(e) {
    e.preventDefault();
    let e = $('.connect__content-question input[name="fullname"]'),
        i = $('.connect__content-question textarea[name="question"]'),
        n = $('.connect__content-question input[name="phone"]'),
        r = $('.connect__content-question input[name="email"]'), o = "";
    o = "" != e.val() && "" != i.val() && "" != n.val() && validateEmail(r.val()) ? "Request" : "falseRequest", dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: i.val(),
        event: o
    }), "" != t.val() ? t.css("border-color", "#b7d3f7") : t.css("border-color", "red"), "" != i.val() ? i.css("border-color", "#b7d3f7") : i.css("border-color", "red"), validateEmail(r.val()) ? r.css("border-color", "#b7d3f7") : r.css("border-color", "red"), "" != t.val() & "" != i.val() && validateEmail(r.val()) && $.ajax({
        type: "post",
        url: "/site/request",
        data: {
            name: t.val(),
            type: n.val(),
            phone: i.val(),
            email: r.val()
        },
        dataType: "json",
        beforeSend: function(e) {
            $(".connect-btn").attr("disabled", "disabled").removeClass("btn-primary").addClass("btn-primary-disable").css({
                cursor: "wait"
            })
        },
        complete: function(e) {
            $(".connect-btn").css({
                cursor: "default"
            }), $(".connect__content-question .form-compelete").fadeIn(300)
        }
    })
}), $(".btn-subscribe").click(function(e) {
    e.preventDefault();
    let t = $('.subscribe input[name="email"]');
    validateEmail(t.val()) ? t.css("border-color", "#B7D3F7") : t.css("border-color", "red"), validateEmail(t.val()) && (dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: "subscribe",
        event: "autoEvent"
    }), $.ajax({
        type: "post",
        url: "/site/subscribe",
        data: {
            email: t.val(),
            esputnik: "Pidtverdzhennya_pidpysku"
        },
        dataType: "json",
        beforeSend: function(e) {
            t.attr("disabled", "disabled"), $(".btn-subscribe").attr("disabled", "disabled").css({
                cursor: "wait"
            })
        },
        complete: function(e) {
            $(".btn-subscribe").css({
                cursor: "default"
            }), $(".newsletter-wrap .success-msg").slideDown(300)
        }
    }))
}), defer(function() {
    $(".example__content-list").slick({
        infinite: !1,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: !0,
        touchMove: !1,
        accesibility: !1,
        draggable: !1,
        swipe: !1,
        speed: 1e3,
        nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        responsive: [{
            breakpoint: 1536,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 1366,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                touchMove: !0,
                accesibility: !0,
                draggable: !0,
                swipe: !0
            }
        }]
    }), $(".complex__content-list").slick({
        infinite: !1,
        slidesToShow: 3,
        arrows: !1,
        responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: !0
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: !0,
                centerMode: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: !0,
                centerPadding: "30px"
            }
        }]
    }), $(".review__content-list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        adaptiveHeight: !0,
        nextArrow: '<div class="review-next"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="review-prev"><img src="/img/icon/Arrow.svg" alt="" /></div>'
    }), $(".slider-equipment__list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0,
        asNavFor: ".slider-equipment__content"
    }), $(".slider-types__list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0,
        asNavFor: ".slider-types__content"
    }), $(".slider-equipment__content").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "0",
        arrows: !1,
        asNavFor: ".slider-equipment__list"
    }), $(".slider-types__content").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "0",
        arrows: !1,
        asNavFor: ".slider-types__list"
    }), $(window).width() <= 768 && ($(".services__list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0
    }), $(".slider-network-list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0,
        asNavFor: ".slider-network-content"
    }), $(".slider-network-content").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "0",
        arrows: !1,
        asNavFor: ".slider-network-list"
    }), $(".slider-standalone-list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0,
        asNavFor: ".slider-standalone-content"
    }), $(".slider-standalone-content").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "0",
        arrows: !1,
        asNavFor: ".slider-standalone-list"
    }), $(".slider-hybrid-list").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "15px",
        arrows: !1,
        variableWidth: !0,
        asNavFor: ".slider-hybrid-content"
    }), $(".slider-hybrid-content").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "0",
        arrows: !1,
        asNavFor: ".slider-hybrid-list"
    })), $(".network-carousel, .standalone-carousel, .hybrid-carousel").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !1,
        nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        responsive: [{
            breakpoint: 768,
            settings: {
                touchMove: !1,
                accesibility: !1,
                draggable: !1,
                swipe: !1,
                adaptiveHeight: !0
            }
        }]
    }), $(".project-info__slider-nav").slick({
        infinite: !1,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !1,
        vertical: !0,
        dots: !1,
        asNavFor: ".project-info__slider",
        responsive: [{
            breakpoint: 420,
            settings: {
                slidesToShow: 3
            }
        }]
    }), $(".project-info__slider").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        asNavFor: ".project-info__slider-nav"
    })
}, 100), $(".type-item__content-title").click(function(e) {
    e.preventDefault();
    var t = $(this).parents(".type__content-list__item").data("type"),
        n = ($(this).parents(".type-item__content"), $(this).parents(".type__content-list__item")),
        i = "#networkBack",
        r = "#networkPath",
        o = "M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201",
        s = "M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z",
        a = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z",
        l = "#standaloneBack",
        c = "#standalonePath",
        u = "M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z",
        d = "M104.1,160.4c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6 c-11.7,34.3-53.3,49.6-106.2,49.3S96.9,208.5,104.1,160.4L104.1,160.4",
        p = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z",
        f = "M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z",
        h = "#hybridBack",
        g = "#hybridPath",
        v = "M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z",
        m = "M440,209.2c1.1,108.6-62.8,210.3-209.2,205.7S-48.9,305.6,17.6,123.2C65.1-7.3,173.8-9.5,260.7,7.3 C334.1,21.4,438.7,72.3,440,209.2z",
        y = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z";
    $(".type__content-list__item").filter(function() {
        return $(this).data("type") != t
    }).removeClass("active").delay(300).find(".type-item__content-text, .type-item__content-button").fadeOut(150), n.addClass("active"), $(window).width() <= 1440 && $(window).width() > 1024 ? (changeSize(l, 430, 334.7), changeSize(i, 437.3, 415.3), changeSize(h, 440, 415.1)) : $(window).width() <= 1024 ? (changeSize(i, 310, 230.007), changeSize(l, 310, 230.007), changeSize(h, 310, 230.007)) : $(window).width() > 1440 && (changeSize(i, 437.3, 415.3), changeSize(l, 524.1, 408), changeSize(h, 440, 415.1)), n.find(".type-item__content-text, .type-item__content-button").delay(500).fadeIn(500), "network" == t ? $(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, d), animateType(i, r, s), animateType(h, g, v)) : $(window).width() <= 1024 ? (animateType(i, r, "M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z"), animateType(l, c, p), animateType(h, g, y)) : $(window).width() > 1440 && (animateType(i, r, s), animateType(l, c, u), animateType(h, g, v)) : "standalone" == t ? $(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, "M1.1,146.6c0,0,4.5-155.5,207.2-146.2c96.5,4.4,242.1,86.7,219.4,188.1 S324.7,335.4,222.8,334.7C120.8,334.1-13,289.1,1.1,146.6z"), animateType(i, r, o), animateType(h, g, v)) : $(window).width() <= 1024 ? (animateType(i, r, a), animateType(l, c, f), animateType(h, g, y)) : $(window).width() > 1440 && (animateType(i, r, o), animateType(l, c, "M1.3,178.7c0,0,5.5-189.5,252.5-178.2c117.6,5.4,295.1,105.7,267.4,229.3S395.8,408.8,271.5,408 S-15.8,352.4,1.3,178.7z"), animateType(h, g, v)) : "hybrid" == t && ($(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, d), animateType(i, r, o), animateType(h, g, m)) : $(window).width() <= 1024 ? (animateType(i, r, a), animateType(l, c, p), animateType(h, g, f)) : $(window).width() > 1440 && (animateType(i, r, o), animateType(l, c, u), animateType(h, g, m)))
}), jQuery(function(e) {
    e('input[name="phone"]').mask("+38 (099) 999-99-99")
}), tabs(".tabs-equipment"), tabs(".tabs-types"), tabs(".tabs-types"), tabsType(".tabs-network"), tabsType(".tabs-standalone"), tabsType(".tabs-hybrid"), $(".navbar__right-item").click(function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
        n = $(t).offset().top - 80;
    $("html, body").animate({
        scrollTop: n
    }, 3e3)
}), $(".electrostation__button a").click(function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
        n = $(t).offset().top;
    $("html, body").animate({
        scrollTop: n
    }, 2e3)
}), $(".service-info__content-info .btn, .greenwhy__content-info__more .btn").click(function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
        n = $(t).offset().top - 100;
    $("html, body").animate({
        scrollTop: n
    }, 1e3)
}), $(".slider-network-list .slider-type__list-item").click(function() {
    let e = $(this).data("slick-index");
    $(".slider-network-content").slick("slickGoTo", parseInt(e), !0)
}), $(".slider-hybrid-list .slider-type__list-item").click(function() {
    let e = $(this).data("slick-index");
    $(".slider-hybrid-content").slick("slickGoTo", parseInt(e), !0)
}), $(".slider-standalone-list .slider-type__list-item").click(function() {
    let e = $(this).data("slick-index");
    $(".slider-standalone-content").slick("slickGoTo", parseInt(e), !0)
}), $("#nav-icon").click(function(e) {
    e.preventDefault(), $(".navbar-mobile").fadeIn(), $("body").css("overflow-y", "hidden")
}), $(document).ready(function() {
    $(".project-info__content-description").find("span").css("font-family", "Montserrat, sans-serif"), $(".project-info__content-description").find("span").css("font-size", "font-size: 14pt"), $(".project-info__content-description").find("strong").css("font-size", "font-size: 14pt"), defer(function() {
        $(".tabs__content").height($(".tabs__content").height())
    }, 2e3), $(window).on("load", function() {
        $(".tabs__content").height($(".tabs__content").height())
    })
}), window.googleMapsScriptLoaded = function() {
    $(window).trigger("googleMapsScriptLoaded")
},
    function(e, t) {
        "use strict";
        var n = e(t),
            i = e("body"),
            r = n.height(),
            o = 0,
            s = function(e, t) {
                var n = null;
                return function() {
                    var i = this,
                        r = arguments;
                    clearTimeout(n), n = setTimeout(function() {
                        t.apply(i, r)
                    }, e)
                }
            },
            a = function(e, t) {
                var n, i;
                return function() {
                    var r = this,
                        o = arguments,
                        s = +new Date;
                    n && n + e > s ? (clearTimeout(i), i = setTimeout(function() {
                        n = s, t.apply(r, o)
                    }, e)) : (n = s, t.apply(r, o))
                }
            },
            l = !1,
            c = !1,
            u = e([]),
            d = function() {
                o = n.scrollTop(), u.each(function() {
                    var t = e(this),
                        n = t.data("options");
                    if (t.offset().top - o > 1 * r) return !0;
                    if (!l && !c) {
                        var s = {
                            callback: "googleMapsScriptLoaded",
                            signed_in: n.signed_in
                        };
                        n.key && (s.key = n.key), n.libraries && (s.libraries = n.libraries), n.language && (s.language = n.language), n.region && (s.region = n.region), i.append('<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&' + e.param(s) + '"><\/script>'), c = !0
                    }
                    if (!l) return !0;
                    var a = new google.maps.Map(this, {
                        zoom: 15
                    });
                    !1 !== n.callback && n.callback(this, a), u = u.not(t)
                })
            };
        n.on("googleMapsScriptLoaded", function() {
            l = !0, d()
        }).on("scroll", a(500, d)).on("resize", s(1e3, function() {
            r = n.height(), d()
        })), e.fn.lazyLoadGoogleMaps = function(t) {
            return t = e.extend({
                key: !1,
                libraries: !1,
                signed_in: !1,
                language: !1,
                region: !1,
                callback: !1
            }, t), this.each(function() {
                var n = e(this);
                n.data("options", t), u = u.add(n)
            }), d(), this.debounce = s, this.throttle = a, this
        }
    }(jQuery, window, document);