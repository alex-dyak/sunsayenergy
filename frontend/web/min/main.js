!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var i = [], n = t.document, r = Object.getPrototypeOf, o = i.slice, s = i.concat, a = i.push, l = i.indexOf, c = {},
        u = c.toString, d = c.hasOwnProperty, f = d.toString, p = f.call(Object), h = {}, g = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, m = function (t) {
            return null != t && t === t.window
        }, v = {type: !0, src: !0, noModule: !0};

    function y(t, e, i) {
        var r, o = (e = e || n).createElement("script");
        if (o.text = t, i) for (r in v) i[r] && (o[r] = i[r]);
        e.head.appendChild(o).parentNode.removeChild(o)
    }

    function _(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
    }

    var x = function (t, e) {
        return new x.fn.init(t, e)
    }, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function w(t) {
        var e = !!t && "length" in t && t.length, i = _(t);
        return !g(t) && !m(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    x.fn = x.prototype = {
        jquery: "3.3.1", constructor: x, length: 0, toArray: function () {
            return o.call(this)
        }, get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = x.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return x.each(this, t)
        }, map: function (t) {
            return this.pushStack(x.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(o.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: i.sort, splice: i.splice
    }, x.extend = x.fn.extend = function () {
        var t, e, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (x.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = i && Array.isArray(i) ? i : []) : o = i && x.isPlainObject(i) ? i : {}, s[e] = x.extend(c, o, n)) : void 0 !== n && (s[e] = n));
        return s
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && ("function" != typeof (i = d.call(e, "constructor") && e.constructor) || f.call(i) !== p))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t) {
            y(t)
        }, each: function (t, e) {
            var i, n = 0;
            if (w(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(b, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (w(Object(t)) ? x.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        }, grep: function (t, e, i) {
            for (var n = [], r = 0, o = t.length, s = !i; r < o; r++) !e(t[r], r) !== s && n.push(t[r]);
            return n
        }, map: function (t, e, i) {
            var n, r, o = 0, a = [];
            if (w(t)) for (n = t.length; o < n; o++) null != (r = e(t[o], o, i)) && a.push(r); else for (o in t) null != (r = e(t[o], o, i)) && a.push(r);
            return s.apply([], a)
        }, guid: 1, support: h
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    });
    var T = function (t) {
        var e, i, n, r, o, s, a, l, c, u, d, f, p, h, g, m, v, y, _, x = "sizzle" + 1 * new Date, b = t.document, w = 0,
            T = 0, S = st(), k = st(), C = st(), A = function (t, e) {
                return t === e && (d = !0), 0
            }, P = {}.hasOwnProperty, F = [], E = F.pop, D = F.push, O = F.push, $ = F.slice, M = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + R + "*(" + L + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + R + "*\\]",
            z = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            B = new RegExp(R + "+", "g"), q = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            I = new RegExp("^" + R + "*," + R + "*"), H = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            X = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"), W = new RegExp(z),
            U = new RegExp("^" + L + "$"), V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, nt = function () {
                f()
            }, rt = yt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            O.apply(F = $.call(b.childNodes), b.childNodes), F[b.childNodes.length].nodeType
        } catch (t) {
            O = {
                apply: F.length ? function (t, e) {
                    D.apply(t, $.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, n, r) {
            var o, a, c, u, d, h, v, y = e && e.ownerDocument, w = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
            if (!r && ((e ? e.ownerDocument || e : b) !== p && f(e), e = e || p, g)) {
                if (11 !== w && (d = Q.exec(t))) if (o = d[1]) {
                    if (9 === w) {
                        if (!(c = e.getElementById(o))) return n;
                        if (c.id === o) return n.push(c), n
                    } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o) return n.push(c), n
                } else {
                    if (d[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                    if ((o = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(o)), n
                }
                if (i.qsa && !C[t + " "] && (!m || !m.test(t))) {
                    if (1 !== w) y = e, v = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = x), a = (h = s(t)).length; a--;) h[a] = "#" + u + " " + vt(h[a]);
                        v = h.join(","), y = K.test(t) && gt(e.parentNode) || e
                    }
                    if (v) try {
                        return O.apply(n, y.querySelectorAll(v)), n
                    } catch (t) {
                    } finally {
                        u === x && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(q, "$1"), e, n, r)
        }

        function st() {
            var t = [];
            return function e(i, r) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
            }
        }

        function at(t) {
            return t[x] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
        }

        function ut(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function dt(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ft(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ht(t) {
            return at(function (e) {
                return e = +e, at(function (i, n) {
                    for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (e in i = ot.support = {}, o = ot.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, f = ot.setDocument = function (t) {
            var e, r, s = t ? t.ownerDocument || t : b;
            return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, g = !o(p), b !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt)), i.attributes = lt(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), i.getElementsByTagName = lt(function (t) {
                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            }), i.getElementsByClassName = Z.test(p.getElementsByClassName), i.getById = lt(function (t) {
                return h.appendChild(t).id = x, !p.getElementsByName || !p.getElementsByName(x).length
            }), i.getById ? (n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (n.filter.ID = function (t) {
                var e = t.replace(J, tt);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                    var i, n, r, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                        for (r = e.getElementsByName(t), n = 0; o = r[n++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                    }
                    return []
                }
            }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
            }, v = [], m = [], (i.qsa = Z.test(p.querySelectorAll)) && (lt(function (t) {
                h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
            }), lt(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
            })), (i.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function (t) {
                i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", z)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(h.compareDocumentPosition), _ = e || Z.test(h.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, A = e ? function (t, e) {
                if (t === e) return d = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === b && _(b, t) ? -1 : e === p || e.ownerDocument === b && _(b, e) ? 1 : u ? M(u, t) - M(u, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return d = !0, 0;
                var i, n = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!r || !o) return t === p ? -1 : e === p ? 1 : r ? -1 : o ? 1 : u ? M(u, t) - M(u, e) : 0;
                if (r === o) return ut(t, e);
                for (i = t; i = i.parentNode;) s.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; s[n] === a[n];) n++;
                return n ? ut(s[n], a[n]) : s[n] === b ? -1 : a[n] === b ? 1 : 0
            }, p) : p
        }, ot.matches = function (t, e) {
            return ot(t, null, null, e)
        }, ot.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== p && f(t), e = e.replace(X, "='$1']"), i.matchesSelector && g && !C[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                var n = y.call(t, e);
                if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
            }
            return ot(e, p, null, [t]).length > 0
        }, ot.contains = function (t, e) {
            return (t.ownerDocument || t) !== p && f(t), _(t, e)
        }, ot.attr = function (t, e) {
            (t.ownerDocument || t) !== p && f(t);
            var r = n.attrHandle[e.toLowerCase()],
                o = r && P.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, ot.escape = function (t) {
            return (t + "").replace(et, it)
        }, ot.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, ot.uniqueSort = function (t) {
            var e, n = [], r = 0, o = 0;
            if (d = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(A), d) {
                for (; e = t[o++];) e === t[o] && (r = n.push(o));
                for (; r--;) t.splice(n[r], 1)
            }
            return u = null, t
        }, r = ot.getText = function (t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[n++];) i += r(e);
            return i
        }, (n = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && W.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = S[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && S(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, e, i) {
                    return function (n) {
                        var r = ot.attr(n, t);
                        return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, i, n, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, u, d, f, p, h, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = e; f = f[g];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (_ = (p = (c = (u = (d = (f = m)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === w && c[1]) && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (_ = p = 0) || h.pop();) if (1 === f.nodeType && ++_ && f === e) {
                                    u[t] = [w, p, _];
                                    break
                                }
                            } else if (y && (_ = p = (c = (u = (d = (f = e)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === w && c[1]), !1 === _) for (; (f = ++p && f && f[g] || (_ = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] = [w, _]), f !== e));) ;
                            return (_ -= r) === n || _ % n == 0 && _ / n >= 0
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var i, r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return r[x] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                        for (var n, o = r(t, e), s = o.length; s--;) t[n = M(t, o[s])] = !(i[n] = o[s])
                    }) : function (t) {
                        return r(t, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (t) {
                    var e = [], i = [], n = a(t.replace(q, "$1"));
                    return n[x] ? at(function (t, e, i, r) {
                        for (var o, s = n(t, null, r, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                    }
                }), has: at(function (t) {
                    return function (e) {
                        return ot(t, e).length > 0
                    }
                }), contains: at(function (t) {
                    return t = t.replace(J, tt), function (e) {
                        return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                    }
                }), lang: at(function (t) {
                    return U.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                        var i;
                        do {
                            if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === h
                }, focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: pt(!1), disabled: pt(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !n.pseudos.empty(t)
                }, header: function (t) {
                    return G.test(t.nodeName)
                }, input: function (t) {
                    return Y.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (t, e) {
                    return [e - 1]
                }), eq: ht(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: ht(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: ht(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: ht(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }), gt: ht(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = n.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) n.pseudos[e] = dt(e);
        for (e in {submit: !0, reset: !0}) n.pseudos[e] = ft(e);

        function mt() {
        }

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(t, e, i) {
            var n = e.dir, r = e.next, o = r || n, s = i && "parentNode" === o, a = T++;
            return e.first ? function (e, i, r) {
                for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, r);
                return !1
            } : function (e, i, l) {
                var c, u, d, f = [w, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || s) if (u = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((c = u[o]) && c[0] === w && c[1] === a) return f[2] = c[2];
                    if (u[o] = f, f[2] = t(e, i, l)) return !0
                }
                return !1
            }
        }

        function _t(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function xt(t, e, i, n, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function bt(t, e, i, n, r, o) {
            return n && !n[x] && (n = bt(n)), r && !r[x] && (r = bt(r, o)), at(function (o, s, a, l) {
                var c, u, d, f = [], p = [], h = s.length, g = o || function (t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) ot(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), m = !t || !o && e ? g : xt(g, f, t, a, l),
                    v = i ? r || (o ? t : h || n) ? [] : s : m;
                if (i && i(m, v, a, l), n) for (c = xt(v, p), n(c, [], a, l), u = c.length; u--;) (d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = v.length; u--;) (d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;) (d = v[u]) && (c = r ? M(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d))
                    }
                } else v = xt(v === s ? v.splice(h, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v)
            })
        }

        function wt(t) {
            for (var e, i, r, o = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = yt(function (t) {
                return t === e
            }, a, !0), d = yt(function (t) {
                return M(e, t) > -1
            }, a, !0), f = [function (t, i, n) {
                var r = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
                return e = null, r
            }]; l < o; l++) if (i = n.relative[t[l].type]) f = [yt(_t(f), i)]; else {
                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[x]) {
                    for (r = ++l; r < o && !n.relative[t[r].type]; r++) ;
                    return bt(l > 1 && _t(f), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(q, "$1"), i, l < r && wt(t.slice(l, r)), r < o && wt(t = t.slice(r)), r < o && vt(t))
                }
                f.push(i)
            }
            return _t(f)
        }

        function Tt(t, e) {
            var i = e.length > 0, r = t.length > 0, o = function (o, s, a, l, u) {
                var d, h, m, v = 0, y = "0", _ = o && [], x = [], b = c, T = o || r && n.find.TAG("*", u),
                    S = w += null == b ? 1 : Math.random() || .1, k = T.length;
                for (u && (c = s === p || s || u); y !== k && null != (d = T[y]); y++) {
                    if (r && d) {
                        for (h = 0, s || d.ownerDocument === p || (f(d), a = !g); m = t[h++];) if (m(d, s || p, a)) {
                            l.push(d);
                            break
                        }
                        u && (w = S)
                    }
                    i && ((d = !m && d) && v--, o && _.push(d))
                }
                if (v += y, i && y !== v) {
                    for (h = 0; m = e[h++];) m(_, x, s, a);
                    if (o) {
                        if (v > 0) for (; y--;) _[y] || x[y] || (x[y] = E.call(l));
                        x = xt(x)
                    }
                    O.apply(l, x), u && !o && x.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                }
                return u && (w = S, c = b), _
            };
            return i ? at(o) : o
        }

        return mt.prototype = n.filters = n.pseudos, n.setFilters = new mt, s = ot.tokenize = function (t, e) {
            var i, r, o, s, a, l, c, u = k[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = n.preFilter; a;) {
                for (s in i && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = H.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(q, " ")
                }), a = a.slice(i.length)), n.filter) !(r = V[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? ot.error(t) : k(t, l).slice(0)
        }, a = ot.compile = function (t, e) {
            var i, n = [], r = [], o = C[t + " "];
            if (!o) {
                for (e || (e = s(t)), i = e.length; i--;) (o = wt(e[i]))[x] ? n.push(o) : r.push(o);
                (o = C(t, Tt(r, n))).selector = t
            }
            return o
        }, l = ot.select = function (t, e, i, r) {
            var o, l, c, u, d, f = "function" == typeof t && t, p = !r && s(t = f.selector || t);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                    if (!(e = (n.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return i;
                    f && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !n.relative[u = c.type]);) if ((d = n.find[u]) && (r = d(c.matches[0].replace(J, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
                    if (l.splice(o, 1), !(t = r.length && vt(l))) return O.apply(i, r), i;
                    break
                }
            }
            return (f || a(t, p))(r, e, !g, i, !e || K.test(t) && gt(e.parentNode) || e), i
        }, i.sortStable = x.split("").sort(A).join("") === x, i.detectDuplicates = !!d, f(), i.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ct("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ct(N, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), ot
    }(t);
    x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
    var S = function (t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (r && x(t).is(i)) break;
            n.push(t)
        }
        return n
    }, k = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, C = x.expr.match.needsContext;

    function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function F(t, e, i) {
        return g(e) ? x.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? x.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? x.grep(t, function (t) {
            return l.call(e, t) > -1 !== i
        }) : x.filter(e, t, i)
    }

    x.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? x.find.matchesSelector(n, t) ? [n] : [] : x.find.matches(t, x.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, x.fn.extend({
        find: function (t) {
            var e, i, n = this.length, r = this;
            if ("string" != typeof t) return this.pushStack(x(t).filter(function () {
                for (e = 0; e < n; e++) if (x.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) x.find(t, r[e], i);
            return n > 1 ? x.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(F(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(F(this, t || [], !0))
        }, is: function (t) {
            return !!F(this, "string" == typeof t && C.test(t) ? x(t) : t || [], !1).length
        }
    });
    var E, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function (t, e, i) {
        var r, o;
        if (!t) return this;
        if (i = i || E, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof x ? e[0] : e, x.merge(this, x.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), P.test(r[1]) && x.isPlainObject(e)) for (r in e) g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (o = n.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== i.ready ? i.ready(t) : t(x) : x.makeArray(t, this)
    }).prototype = x.fn, E = x(n);
    var O = /^(?:parents|prev(?:Until|All))/, $ = {children: !0, contents: !0, next: !0, prev: !0};

    function M(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    x.fn.extend({
        has: function (t) {
            var e = x(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (x.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, r = this.length, o = [], s = "string" != typeof t && x(t);
            if (!C.test(t)) for (; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? l.call(x(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), x.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return S(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return S(t, "parentNode", i)
        }, next: function (t) {
            return M(t, "nextSibling")
        }, prev: function (t) {
            return M(t, "previousSibling")
        }, nextAll: function (t) {
            return S(t, "nextSibling")
        }, prevAll: function (t) {
            return S(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return S(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return S(t, "previousSibling", i)
        }, siblings: function (t) {
            return k((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return k(t.firstChild)
        }, contents: function (t) {
            return A(t, "iframe") ? t.contentDocument : (A(t, "template") && (t = t.content || t), x.merge([], t.childNodes))
        }
    }, function (t, e) {
        x.fn[t] = function (i, n) {
            var r = x.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = x.filter(n, r)), this.length > 1 && ($[t] || x.uniqueSort(r), O.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function R(t) {
        return t
    }

    function L(t) {
        throw t
    }

    function j(t, e, i, n) {
        var r;
        try {
            t && g(r = t.promise) ? r.call(t).done(e).fail(i) : t && g(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    x.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
            var e = {};
            return x.each(t.match(N) || [], function (t, i) {
                e[i] = !0
            }), e
        }(t) : x.extend({}, t);
        var e, i, n, r, o = [], s = [], a = -1, l = function () {
            for (r = r || t.once, n = e = !0; s.length; a = -1) for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
            t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
        }, c = {
            add: function () {
                return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                    x.each(i, function (i, n) {
                        g(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== _(n) && e(n)
                    })
                }(arguments), i && !e && l()), this
            }, remove: function () {
                return x.each(arguments, function (t, e) {
                    for (var i; (i = x.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                }), this
            }, has: function (t) {
                return t ? x.inArray(t, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return r = s = [], o = i = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return r = s = [], i || e || (o = i = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (t, i) {
                return r || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return c
    }, x.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (t) {
                        return r.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return x.Deferred(function (e) {
                            x.each(i, function (i, n) {
                                var r = g(t[n[4]]) && t[n[4]];
                                o[n[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, n, r) {
                        var o = 0;

                        function s(e, i, n, r) {
                            return function () {
                                var a = this, l = arguments, c = function () {
                                    var t, c;
                                    if (!(e < o)) {
                                        if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        c = t && ("object" == typeof t || "function" == typeof t) && t.then, g(c) ? r ? c.call(t, s(o, i, R, r), s(o, i, L, r)) : (o++, c.call(t, s(o, i, R, r), s(o, i, L, r), s(o, i, R, i.notifyWith))) : (n !== R && (a = void 0, l = [t]), (r || i.resolveWith)(a, l))
                                    }
                                }, u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (t) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= o && (n !== L && (a = void 0, l = [t]), i.rejectWith(a, l))
                                    }
                                };
                                e ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }

                        return x.Deferred(function (t) {
                            i[0][3].add(s(0, t, g(r) ? r : R, t.notifyWith)), i[1][3].add(s(0, t, g(e) ? e : R)), i[2][3].add(s(0, t, g(n) ? n : L))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? x.extend(t, r) : r
                    }
                }, o = {};
            return x.each(i, function (t, e) {
                var s = e[2], a = e[5];
                r[e[1]] = s.add, a && s.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), s.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), r = o.call(arguments), s = x.Deferred(), a = function (t) {
                return function (i) {
                    n[t] = this, r[t] = arguments.length > 1 ? o.call(arguments) : i, --e || s.resolveWith(n, r)
                }
            };
            if (e <= 1 && (j(t, s.done(a(i)).resolve, s.reject, !e), "pending" === s.state() || g(r[i] && r[i].then))) return s.then();
            for (; i--;) j(r[i], a(i), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, x.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var B = x.Deferred();

    function q() {
        n.removeEventListener("DOMContentLoaded", q), t.removeEventListener("load", q), x.ready()
    }

    x.fn.ready = function (t) {
        return B.then(t).catch(function (t) {
            x.readyException(t)
        }), this
    }, x.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== t && --x.readyWait > 0 || B.resolveWith(n, [x]))
        }
    }), x.ready.then = B.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(x.ready) : (n.addEventListener("DOMContentLoaded", q), t.addEventListener("load", q));
    var I = function (t, e, i, n, r, o, s) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === _(i)) for (a in r = !0, i) I(t, e, a, i[a], !0, o, s); else if (void 0 !== n && (r = !0, g(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
            return c.call(x(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
    }, H = /^-ms-/, X = /-([a-z])/g;

    function W(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(H, "ms-").replace(X, W)
    }

    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Y() {
        this.expando = x.expando + Y.uid++
    }

    Y.uid = 1, Y.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = i; else for (n in e) r[U(n)] = e[n];
            return r
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(N) || []).length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || x.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !x.isEmptyObject(e)
        }
    };
    var G = new Y, Z = new Y, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function J(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = function (t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Q.test(t) ? JSON.parse(t) : t)
                }(i)
            } catch (t) {
            }
            Z.set(t, e, i)
        } else i = void 0;
        return i
    }

    x.extend({
        hasData: function (t) {
            return Z.hasData(t) || G.hasData(t)
        }, data: function (t, e, i) {
            return Z.access(t, e, i)
        }, removeData: function (t, e) {
            Z.remove(t, e)
        }, _data: function (t, e, i) {
            return G.access(t, e, i)
        }, _removeData: function (t, e) {
            G.remove(t, e)
        }
    }), x.fn.extend({
        data: function (t, e) {
            var i, n, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Z.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = U(n.slice(5)), J(o, n, r[n]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                Z.set(this, t)
            }) : I(this, function (e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = Z.get(o, t))) return i;
                    if (void 0 !== (i = J(o, t))) return i
                } else this.each(function () {
                    Z.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Z.remove(this, t)
            })
        }
    }), x.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = G.get(t, e), i && (!n || Array.isArray(i) ? n = G.access(t, e, x.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = x.queue(t, e), n = i.length, r = i.shift(), o = x._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, function () {
                x.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return G.get(t, i) || G.access(t, i, {
                empty: x.Callbacks("once memory").add(function () {
                    G.remove(t, [e + "queue", i])
                })
            })
        }
    }), x.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? x.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = x.queue(this, t, e);
                x._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && x.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                x.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, r = x.Deferred(), o = this, s = this.length, a = function () {
                --n || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (i = G.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"], nt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && x.contains(t.ownerDocument, t) && "none" === x.css(t, "display")
        }, rt = function (t, e, i, n) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            for (o in r = i.apply(t, n || []), e) t.style[o] = s[o];
            return r
        };

    function ot(t, e, i, n) {
        var r, o, s = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return x.css(t, e, "")
            }, l = a(), c = i && i[3] || (x.cssNumber[e] ? "" : "px"),
            u = (x.cssNumber[e] || "px" !== c && +l) && et.exec(x.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, x.style(t, e, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }

    var st = {};

    function at(t) {
        var e, i = t.ownerDocument, n = t.nodeName, r = st[n];
        return r || (e = i.body.appendChild(i.createElement(n)), r = x.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), st[n] = r, r)
    }

    function lt(t, e) {
        for (var i, n, r = [], o = 0, s = t.length; o < s; o++) (n = t[o]).style && (i = n.style.display, e ? ("none" === i && (r[o] = G.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && nt(n) && (r[o] = at(n))) : "none" !== i && (r[o] = "none", G.set(n, "display", i)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t
    }

    x.fn.extend({
        show: function () {
            return lt(this, !0)
        }, hide: function () {
            return lt(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                nt(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ct = /^(?:checkbox|radio)$/i, ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, dt = /^$|^module$|\/(?:java|ecma)script/i,
        ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? x.merge([t], i) : i
    }

    function ht(t, e) {
        for (var i = 0, n = t.length; i < n; i++) G.set(t[i], "globalEval", !e || G.get(e[i], "globalEval"))
    }

    ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;
    var gt = /<|&#?\w+;/;

    function mt(t, e, i, n, r) {
        for (var o, s, a, l, c, u, d = e.createDocumentFragment(), f = [], p = 0, h = t.length; p < h; p++) if ((o = t[p]) || 0 === o) if ("object" === _(o)) x.merge(f, o.nodeType ? [o] : o); else if (gt.test(o)) {
            for (s = s || d.appendChild(e.createElement("div")), a = (ut.exec(o) || ["", ""])[1].toLowerCase(), l = ft[a] || ft._default, s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            x.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
        } else f.push(e.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];) if (n && x.inArray(o, n) > -1) r && r.push(o); else if (c = x.contains(o.ownerDocument, o), s = pt(d.appendChild(o), "script"), c && ht(s), i) for (u = 0; o = s[u++];) dt.test(o.type || "") && i.push(o);
        return d
    }

    !function () {
        var t = n.createDocumentFragment().appendChild(n.createElement("div")), e = n.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var vt = n.documentElement, yt = /^key/, _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;

    function bt() {
        return !0
    }

    function wt() {
        return !1
    }

    function Tt() {
        try {
            return n.activeElement
        } catch (t) {
        }
    }

    function St(t, e, i, n, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) St(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = wt; else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return x().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), t.each(function () {
            x.event.add(this, e, r, n, i)
        })
    }

    x.event = {
        global: {}, add: function (t, e, i, n, r) {
            var o, s, a, l, c, u, d, f, p, h, g, m = G.get(t);
            if (m) for (i.handler && (i = (o = i).handler, r = o.selector), r && x.find.matchesSelector(vt, r), i.guid || (i.guid = x.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(N) || [""]).length; c--;) p = g = (a = xt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = x.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = x.event.special[p] || {}, u = x.extend({
                type: p,
                origType: g,
                data: n,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && x.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, h, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), x.event.global[p] = !0)
        }, remove: function (t, e, i, n, r) {
            var o, s, a, l, c, u, d, f, p, h, g, m = G.hasData(t) && G.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(N) || [""]).length; c--;) if (p = g = (a = xt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                    for (d = x.event.special[p] || {}, f = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(t, u));
                    s && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, m.handle) || x.removeEvent(t, p, m.handle), delete l[p])
                } else for (p in l) x.event.remove(t, p + e[c], i, n, !0);
                x.isEmptyObject(l) && G.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, r, o, s, a = x.event.fix(t), l = new Array(arguments.length),
                c = (G.get(this, "events") || {})[a.type] || [], u = x.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, c), e = 0; (r = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, r, o, s, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (o = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = e[i]).selector + " "] && (s[r] = n.needsContext ? x(r, this).index(c) > -1 : x.find(r, this, null, [c]).length), s[r] && o.push(n);
                o.length && a.push({elem: c, handlers: o})
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: g(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[x.expando] ? t : new x.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Tt() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Tt() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return A(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, x.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, x.Event = function (t, e) {
        if (!(this instanceof x.Event)) return new x.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : wt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: wt,
        isPropagationStopped: wt,
        isImmediatePropagationStopped: wt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = bt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = bt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = bt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
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
        which: function (t) {
            var e = t.button;
            return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && _t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        x.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = t.relatedTarget, r = t.handleObj;
                return n && (n === this || x.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), x.fn.extend({
        on: function (t, e, i, n) {
            return St(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return St(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, x(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = wt), this.each(function () {
                x.event.remove(this, t, i, e)
            })
        }
    });
    var kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ct = /<script|<style|<link/i, At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ft(t, e) {
        return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
    }

    function Et(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Dt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Ot(t, e) {
        var i, n, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (o = G.access(t), s = G.set(e, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (i = 0, n = c[r].length; i < n; i++) x.event.add(e, r, c[r][i]);
            Z.hasData(t) && (a = Z.access(t), l = x.extend({}, a), Z.set(e, l))
        }
    }

    function $t(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && ct.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function Mt(t, e, i, n) {
        e = s.apply([], e);
        var r, o, a, l, c, u, d = 0, f = t.length, p = f - 1, m = e[0], v = g(m);
        if (v || f > 1 && "string" == typeof m && !h.checkClone && At.test(m)) return t.each(function (r) {
            var o = t.eq(r);
            v && (e[0] = m.call(this, r, o.html())), Mt(o, e, i, n)
        });
        if (f && (o = (r = mt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
            for (l = (a = x.map(pt(r, "script"), Et)).length; d < f; d++) c = r, d !== p && (c = x.clone(c, !0, !0), l && x.merge(a, pt(c, "script"))), i.call(t[d], c, d);
            if (l) for (u = a[a.length - 1].ownerDocument, x.map(a, Dt), d = 0; d < l; d++) c = a[d], dt.test(c.type || "") && !G.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(c.src) : y(c.textContent.replace(Pt, ""), u, c))
        }
        return t
    }

    function Nt(t, e, i) {
        for (var n, r = e ? x.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || x.cleanData(pt(n)), n.parentNode && (i && x.contains(n.ownerDocument, n) && ht(pt(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    x.extend({
        htmlPrefilter: function (t) {
            return t.replace(kt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, r, o, s, a = t.cloneNode(!0), l = x.contains(t.ownerDocument, t);
            if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t))) for (s = pt(a), n = 0, r = (o = pt(t)).length; n < r; n++) $t(o[n], s[n]);
            if (e) if (i) for (o = o || pt(t), s = s || pt(a), n = 0, r = o.length; n < r; n++) Ot(o[n], s[n]); else Ot(t, a);
            return (s = pt(a, "script")).length > 0 && ht(s, !l && pt(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, n, r = x.event.special, o = 0; void 0 !== (i = t[o]); o++) if (V(i)) {
                if (e = i[G.expando]) {
                    if (e.events) for (n in e.events) r[n] ? x.event.remove(i, n) : x.removeEvent(i, n, e.handle);
                    i[G.expando] = void 0
                }
                i[Z.expando] && (i[Z.expando] = void 0)
            }
        }
    }), x.fn.extend({
        detach: function (t) {
            return Nt(this, t, !0)
        }, remove: function (t) {
            return Nt(this, t)
        }, text: function (t) {
            return I(this, function (t) {
                return void 0 === t ? x.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return Mt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ft(this, t).appendChild(t)
            })
        }, prepend: function () {
            return Mt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Ft(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return Mt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return Mt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(pt(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return x.clone(this, t, e)
            })
        }, html: function (t) {
            return I(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ct.test(t) && !ft[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = x.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (x.cleanData(pt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return Mt(this, arguments, function (e) {
                var i = this.parentNode;
                x.inArray(this, t) < 0 && (x.cleanData(pt(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        x.fn[t] = function (t) {
            for (var i, n = [], r = x(t), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), x(r[s])[e](i), a.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Rt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), Lt = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, jt = new RegExp(it.join("|"), "i");

    function zt(t, e, i) {
        var n, r, o, s, a = t.style;
        return (i = i || Lt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || x.contains(t.ownerDocument, t) || (s = x.style(t, e)), !h.pixelBoxStyles() && Rt.test(s) && jt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Bt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                r = "1%" !== e.top, l = 12 === i(e.marginLeft), u.style.right = "60%", a = 36 === i(e.right), o = 36 === i(e.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", vt.removeChild(c), u = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }

        var r, o, s, a, l, c = n.createElement("div"), u = n.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(h, {
            boxSizingReliable: function () {
                return e(), o
            }, pixelBoxStyles: function () {
                return e(), a
            }, pixelPosition: function () {
                return e(), r
            }, reliableMarginLeft: function () {
                return e(), l
            }, scrollboxSize: function () {
                return e(), s
            }
        }))
    }();
    var qt = /^(none|table(?!-c[ea]).+)/, It = /^--/,
        Ht = {position: "absolute", visibility: "hidden", display: "block"},
        Xt = {letterSpacing: "0", fontWeight: "400"}, Wt = ["Webkit", "Moz", "ms"], Ut = n.createElement("div").style;

    function Vt(t) {
        var e = x.cssProps[t];
        return e || (e = x.cssProps[t] = function (t) {
            if (t in Ut) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Wt.length; i--;) if ((t = Wt[i] + e) in Ut) return t
        }(t) || t), e
    }

    function Yt(t, e, i) {
        var n = et.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Gt(t, e, i, n, r, o) {
        var s = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += x.css(t, i + it[s], !0, r)), n ? ("content" === i && (l -= x.css(t, "padding" + it[s], !0, r)), "margin" !== i && (l -= x.css(t, "border" + it[s] + "Width", !0, r))) : (l += x.css(t, "padding" + it[s], !0, r), "padding" !== i ? l += x.css(t, "border" + it[s] + "Width", !0, r) : a += x.css(t, "border" + it[s] + "Width", !0, r));
        return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function Zt(t, e, i) {
        var n = Lt(t), r = zt(t, e, n), o = "border-box" === x.css(t, "boxSizing", !1, n), s = o;
        if (Rt.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return s = s && (h.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === x.css(t, "display", !1, n)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (r = parseFloat(r) || 0) + Gt(t, e, i || (o ? "border" : "content"), s, n, r) + "px"
    }

    function Qt(t, e, i, n, r) {
        return new Qt.prototype.init(t, e, i, n, r)
    }

    x.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = zt(t, "opacity");
                        return "" === i ? "1" : i
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
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = U(e), l = It.test(e), c = t.style;
                if (l || (e = Vt(a)), s = x.cssHooks[e] || x.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : c[e];
                "string" == (o = typeof i) && (r = et.exec(i)) && r[1] && (i = ot(t, e, r), o = "number"), null != i && i == i && ("number" === o && (i += r && r[3] || (x.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function (t, e, i, n) {
            var r, o, s, a = U(e);
            return It.test(e) || (e = Vt(a)), (s = x.cssHooks[e] || x.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = zt(t, e, n)), "normal" === r && e in Xt && (r = Xt[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }), x.each(["height", "width"], function (t, e) {
        x.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !qt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, n) : rt(t, Ht, function () {
                    return Zt(t, e, n)
                })
            }, set: function (t, i, n) {
                var r, o = Lt(t), s = "border-box" === x.css(t, "boxSizing", !1, o), a = n && Gt(t, e, n, s, o);
                return s && h.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Gt(t, e, "border", !1, o) - .5)), a && (r = et.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = x.css(t, e)), Yt(0, i, a)
            }
        }
    }), x.cssHooks.marginLeft = Bt(h.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), x.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        x.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + it[n] + e] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, "margin" !== t && (x.cssHooks[t + e].set = Yt)
    }), x.fn.extend({
        css: function (t, e) {
            return I(this, function (t, e, i) {
                var n, r, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (n = Lt(t), r = e.length; s < r; s++) o[e[s]] = x.css(t, e[s], !1, n);
                    return o
                }
                return void 0 !== i ? x.style(t, e, i) : x.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), x.Tween = Qt, Qt.prototype = {
        constructor: Qt, init: function (t, e, i, n, r, o) {
            this.elem = t, this.prop = i, this.easing = r || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (x.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = Qt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Qt.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = Qt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qt.propHooks._default.set(this), this
        }
    }, Qt.prototype.init.prototype = Qt.prototype, Qt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, x.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, x.fx = Qt.prototype.init, x.fx.step = {};
    var Kt, Jt, te = /^(?:toggle|show|hide)$/, ee = /queueHooks$/;

    function ie() {
        Jt && (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, x.fx.interval), x.fx.tick())
    }

    function ne() {
        return t.setTimeout(function () {
            Kt = void 0
        }), Kt = Date.now()
    }

    function re(t, e) {
        var i, n = 0, r = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = it[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function oe(t, e, i) {
        for (var n, r = (se.tweeners[e] || []).concat(se.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (n = r[o].call(i, e, t)) return n
    }

    function se(t, e, i) {
        var n, r, o = 0, s = se.prefilters.length, a = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var e = Kt || ne(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(n);
            return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: x.extend({}, e),
            opts: x.extend(!0, {specialEasing: {}, easing: x.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Kt || ne(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = x.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; i < n; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), u = c.props;
        for (function (t, e) {
            var i, n, r, o, s;
            for (i in t) if (r = e[n = U(i)], o = t[i], Array.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (s = x.cssHooks[n]) && "expand" in s) for (i in o = s.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = r); else e[n] = r
        }(u, c.opts.specialEasing); o < s; o++) if (n = se.prefilters[o].call(c, t, u, c.opts)) return g(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(u, oe, c), g(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    x.Animation = x.extend(se, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return ot(i.elem, t, et.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            g(t) ? (e = t, t = ["*"]) : t = t.match(N);
            for (var i, n = 0, r = t.length; n < r; n++) i = t[n], se.tweeners[i] = se.tweeners[i] || [], se.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var n, r, o, s, a, l, c, u, d = "width" in e || "height" in e, f = this, p = {}, h = t.style,
                g = t.nodeType && nt(t), m = G.get(t, "fxshow");
            for (n in i.queue || (null == (s = x._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, x.queue(t, "fx").length || s.empty.fire()
                })
            })), e) if (r = e[n], te.test(r)) {
                if (delete e[n], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    g = !0
                }
                p[n] = m && m[n] || x.style(t, n)
            }
            if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(p)) for (n in d && 1 === t.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = G.get(t, "display")), "none" === (u = x.css(t, "display")) && (c ? u = c : (lt([t], !0), c = t.style.display || c, u = x.css(t, "display"), lt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(t, "float") && (l || (f.done(function () {
                h.display = c
            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", f.always(function () {
                h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(t, "fxshow", {display: c}), o && (m.hidden = !g), g && lt([t], !0), f.done(function () {
                for (n in g || lt([t]), G.remove(t, "fxshow"), p) x.style(t, n, p[n])
            })), l = oe(g ? m[n] : 0, n, f), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? se.prefilters.unshift(t) : se.prefilters.push(t)
        }
    }), x.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? x.extend({}, t) : {
            complete: i || !i && e || g(t) && t,
            duration: t,
            easing: i && e || e && !g(e) && e
        };
        return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            g(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
        }, n
    }, x.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(nt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var r = x.isEmptyObject(t), o = x.speed(e, i, n), s = function () {
                var e = se(this, x.extend({}, t), o);
                (r || G.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", o = x.timers, s = G.get(this);
                if (r) s[r] && s[r].stop && n(s[r]); else for (r in s) s[r] && s[r].stop && ee.test(r) && n(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                !e && i || x.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = G.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], o = x.timers, s = n ? n.length : 0;
                for (i.finish = !0, x.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function (t, e) {
        var i = x.fn[e];
        x.fn[e] = function (t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(re(e, !0), t, n, r)
        }
    }), x.each({
        slideDown: re("show"),
        slideUp: re("hide"),
        slideToggle: re("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        x.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), x.timers = [], x.fx.tick = function () {
        var t, e = 0, i = x.timers;
        for (Kt = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || x.fx.stop(), Kt = void 0
    }, x.fx.timer = function (t) {
        x.timers.push(t), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Jt || (Jt = !0, ie())
    }, x.fx.stop = function () {
        Jt = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fn.delay = function (e, i) {
        return e = x.fx && x.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(r)
            }
        })
    }, function () {
        var t = n.createElement("input"), e = n.createElement("select").appendChild(n.createElement("option"));
        t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = e.selected, (t = n.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value
    }();
    var ae, le = x.expr.attrHandle;
    x.fn.extend({
        attr: function (t, e) {
            return I(this, x.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                x.removeAttr(this, t)
            })
        }
    }), x.extend({
        attr: function (t, e, i) {
            var n, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? x.prop(t, e, i) : (1 === o && x.isXMLDoc(t) || (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void x.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = x.find.attr(t, e)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!h.radioValue && "radio" === e && A(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, r = e && e.match(N);
            if (r && 1 === t.nodeType) for (; i = r[n++];) t.removeAttribute(i)
        }
    }), ae = {
        set: function (t, e, i) {
            return !1 === e ? x.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = le[e] || x.find.attr;
        le[e] = function (t, e, n) {
            var r, o, s = e.toLowerCase();
            return n || (o = le[s], le[s] = r, r = null != i(t, e, n) ? s : null, le[s] = o), r
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i, ue = /^(?:a|area)$/i;

    function de(t) {
        return (t.match(N) || []).join(" ")
    }

    function fe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function pe(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || []
    }

    x.fn.extend({
        prop: function (t, e) {
            return I(this, x.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[x.propFix[t] || t]
            })
        }
    }), x.extend({
        prop: function (t, e, i) {
            var n, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(t) || (e = x.propFix[e] || e, r = x.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = x.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), h.optSelected || (x.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function (t) {
            var e, i, n, r, o, s, a, l = 0;
            if (g(t)) return this.each(function (e) {
                x(this).addClass(t.call(this, e, fe(this)))
            });
            if ((e = pe(t)).length) for (; i = this[l++];) if (r = fe(i), n = 1 === i.nodeType && " " + de(r) + " ") {
                for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                r !== (a = de(n)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, r, o, s, a, l = 0;
            if (g(t)) return this.each(function (e) {
                x(this).removeClass(t.call(this, e, fe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = pe(t)).length) for (; i = this[l++];) if (r = fe(i), n = 1 === i.nodeType && " " + de(r) + " ") {
                for (s = 0; o = e[s++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                r !== (a = de(n)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t, n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function (i) {
                x(this).toggleClass(t.call(this, i, fe(this), e), e)
            }) : this.each(function () {
                var e, r, o, s;
                if (n) for (r = 0, o = x(this), s = pe(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = fe(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + de(fe(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var he = /\r/g;
    x.fn.extend({
        val: function (t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = g(t), this.each(function (i) {
                var r;
                1 === this.nodeType && (null == (r = n ? t.call(this, i, x(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(he, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = x.find.attr(t, "value");
                    return null != e ? e : de(x.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (n = o < 0 ? l : s ? o : 0; n < l; n++) if (((i = r[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                        if (e = x(i).val(), s) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, r = t.options, o = x.makeArray(e), s = r.length; s--;) ((n = r[s]).selected = x.inArray(x.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = x.inArray(x(t).val(), e) > -1
            }
        }, h.checkOn || (x.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), h.focusin = "onfocusin" in t;
    var ge = /^(?:focusinfocus|focusoutblur)$/, me = function (t) {
        t.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function (e, i, r, o) {
            var s, a, l, c, u, f, p, h, v = [r || n], y = d.call(e, "type") ? e.type : e,
                _ = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !ge.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (y = (_ = y.split(".")).shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[x.expando] ? e : new x.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), i = null == i ? [e] : x.makeArray(i, [e]), p = x.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                if (!o && !p.noBubble && !m(r)) {
                    for (c = p.delegateType || y, ge.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || n) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0; (a = v[s++]) && !e.isPropagationStopped();) h = a, e.type = s > 1 ? c : p.bindType || y, (f = (G.get(a, "events") || {})[e.type] && G.get(a, "handle")) && f.apply(a, i), (f = u && a[u]) && f.apply && V(a) && (e.result = f.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = y, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), i) || !V(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), x.event.triggered = y, e.isPropagationStopped() && h.addEventListener(y, me), r[y](), e.isPropagationStopped() && h.removeEventListener(y, me), x.event.triggered = void 0, l && (r[u] = l)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = x.extend(new x.Event, i, {type: t, isSimulated: !0});
            x.event.trigger(n, null, e)
        }
    }), x.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                x.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return x.event.trigger(t, e, i, !0)
        }
    }), h.focusin || x.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            x.event.simulate(e, t.target, x.event.fix(t))
        };
        x.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, r = G.access(n, e);
                r || n.addEventListener(t, i, !0), G.access(n, e, (r || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, r = G.access(n, e) - 1;
                r ? G.access(n, e, r) : (n.removeEventListener(t, i, !0), G.remove(n, e))
            }
        }
    });
    var ve = t.location, ye = Date.now(), _e = /\?/;
    x.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), i
    };
    var xe = /\[\]$/, be = /\r?\n/g, we = /^(?:submit|button|image|reset|file)$/i,
        Te = /^(?:input|select|textarea|keygen)/i;

    function Se(t, e, i, n) {
        var r;
        if (Array.isArray(e)) x.each(e, function (e, r) {
            i || xe.test(t) ? n(t, r) : Se(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
        }); else if (i || "object" !== _(e)) n(t, e); else for (r in e) Se(t + "[" + r + "]", e[r], i, n)
    }

    x.param = function (t, e) {
        var i, n = [], r = function (t, e) {
            var i = g(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, function () {
            r(this.name, this.value)
        }); else for (i in t) Se(i, t[i], e, r);
        return n.join("&")
    }, x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = x.prop(this, "elements");
                return t ? x.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !x(this).is(":disabled") && Te.test(this.nodeName) && !we.test(t) && (this.checked || !ct.test(t))
            }).map(function (t, e) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, function (t) {
                    return {name: e.name, value: t.replace(be, "\r\n")}
                }) : {name: e.name, value: i.replace(be, "\r\n")}
            }).get()
        }
    });
    var ke = /%20/g, Ce = /#.*$/, Ae = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:GET|HEAD)$/,
        Ee = /^\/\//, De = {}, Oe = {}, $e = "*/".concat("*"), Me = n.createElement("a");

    function Ne(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0, o = e.toLowerCase().match(N) || [];
            if (g(i)) for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Re(t, e, i, n) {
        var r = {}, o = t === Oe;

        function s(a) {
            var l;
            return r[a] = !0, x.each(t[a] || [], function (t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function Le(t, e) {
        var i, n, r = x.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && x.extend(!0, t, n), t
    }

    Me.href = ve.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ve.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ve.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? Le(Le(t, x.ajaxSettings), e) : Le(x.ajaxSettings, t)
        },
        ajaxPrefilter: Ne(De),
        ajaxTransport: Ne(Oe),
        ajax: function (e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var r, o, s, a, l, c, u, d, f, p, h = x.ajaxSetup({}, i), g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event, v = x.Deferred(),
                y = x.Callbacks("once memory"), _ = h.statusCode || {}, b = {}, w = {}, T = "canceled", S = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (u) {
                            if (!a) for (a = {}; e = Pe.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return u ? s : null
                    }, setRequestHeader: function (t, e) {
                        return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == u && (h.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (u) S.always(t[S.status]); else for (e in t) _[e] = [_[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || T;
                        return r && r.abort(e), k(0, e), this
                    }
                };
            if (v.promise(S), h.url = ((e || h.url || ve.href) + "").replace(Ee, ve.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""], null == h.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Me.protocol + "//" + Me.host != c.protocol + "//" + c.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), Re(De, h, i, S), u) return S;
            for (f in (d = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Fe.test(h.type), o = h.url.replace(Ce, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(ke, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (_e.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ae, "$1"), p = (_e.test(o) ? "&" : "?") + "_=" + ye++ + p), h.url = o + p), h.ifModified && (x.lastModified[o] && S.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && S.setRequestHeader("If-None-Match", x.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
            if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = Re(Oe, h, i, S)) {
                if (S.readyState = 1, d && m.trigger("ajaxSend", [S, h]), u) return S;
                h.async && h.timeout > 0 && (l = t.setTimeout(function () {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, r.send(b, k)
                } catch (t) {
                    if (u) throw t;
                    k(-1, t)
                }
            } else k(-1, "No Transport");

            function k(e, i, n, a) {
                var c, f, p, b, w, T = i;
                u || (u = !0, l && t.clearTimeout(l), r = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (b = function (t, e, i) {
                    for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n) for (r in a) if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in i) o = l[0]; else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(h, S, n)), b = function (t, e, i, n) {
                    var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
                    if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && t.throws) e = s(e); else try {
                            e = s(e)
                        } catch (t) {
                            return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                        }
                    }
                    return {state: "success", data: e}
                }(h, b, S, c), c ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (x.lastModified[o] = w), (w = S.getResponseHeader("etag")) && (x.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, f = b.data, c = !(p = b.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (i || T) + "", c ? v.resolveWith(g, [f, T, S]) : v.rejectWith(g, [S, T, p]), S.statusCode(_), _ = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? f : p]), y.fireWith(g, [S, T]), d && (m.trigger("ajaxComplete", [S, h]), --x.active || x.event.trigger("ajaxStop")))
            }

            return S
        },
        getJSON: function (t, e, i) {
            return x.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return x.get(t, void 0, e, "script")
        }
    }), x.each(["get", "post"], function (t, e) {
        x[e] = function (t, i, n, r) {
            return g(i) && (r = r || n, n = i, i = void 0), x.ajax(x.extend({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            }, x.isPlainObject(t) && t))
        }
    }), x._evalUrl = function (t) {
        return x.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, x.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (g(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return g(t) ? this.each(function (e) {
                x(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = x(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = g(t);
            return this.each(function (i) {
                x(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function (t) {
        return !x.expr.pseudos.visible(t)
    }, x.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, x.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var je = {0: 200, 1223: 204}, ze = x.ajaxSettings.xhr();
    h.cors = !!ze && "withCredentials" in ze, h.ajax = ze = !!ze, x.ajaxTransport(function (e) {
        var i, n;
        if (h.cors || ze && !e.crossDomain) return {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            }, abort: function () {
                i && i()
            }
        }
    }), x.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return x.globalEval(t), t
            }
        }
    }), x.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), x.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain) return {
            send: function (r, o) {
                e = x("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), n.head.appendChild(e[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Be = [], qe = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Be.pop() || x.expando + "_" + ye++;
            return this[t] = !0, t
        }
    }), x.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r, o, s,
            a = !1 !== e.jsonp && (qe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qe, "$1" + r) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || x.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === o ? x(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Be.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var t = n.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), x.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (h.createHTMLDocument ? ((r = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(r)) : e = n), s = !i && [], (o = P.exec(t)) ? [e.createElement(o[1])] : (o = mt([t], e, s), s && s.length && x(s).remove(), x.merge([], o.childNodes)));
        var r, o, s
    }, x.fn.load = function (t, e, i) {
        var n, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (n = de(t.slice(a)), t = t.slice(0, a)), g(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && x.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(n ? x("<div>").append(x.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            s.each(function () {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        x.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), x.expr.pseudos.animated = function (t) {
        return x.grep(x.timers, function (e) {
            return t === e.elem
        }).length
    }, x.offset = {
        setOffset: function (t, e, i) {
            var n, r, o, s, a, l, c = x.css(t, "position"), u = x(t), d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), o = x.css(t, "top"), l = x.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(e) && (e = e.call(t, i, x.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, x.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                x.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i, n = this[0], r = {top: 0, left: 0};
                if ("fixed" === x.css(n, "position")) e = n.getBoundingClientRect(); else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === x.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((r = x(t).offset()).top += x.css(t, "borderTopWidth", !0), r.left += x.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - x.css(n, "marginTop", !0),
                    left: e.left - r.left - x.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === x.css(t, "position");) t = t.offsetParent;
                return t || vt
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        x.fn[t] = function (n) {
            return I(this, function (t, n, r) {
                var o;
                if (m(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[n];
                o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r
            }, t, n, arguments.length)
        }
    }), x.each(["top", "left"], function (t, e) {
        x.cssHooks[e] = Bt(h.pixelPosition, function (t, i) {
            if (i) return i = zt(t, e), Rt.test(i) ? x(t).position()[e] + "px" : i
        })
    }), x.each({Height: "height", Width: "width"}, function (t, e) {
        x.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            x.fn[n] = function (r, o) {
                var s = arguments.length && (i || "boolean" != typeof r),
                    a = i || (!0 === r || !0 === o ? "margin" : "border");
                return I(this, function (e, i, r) {
                    var o;
                    return m(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? x.css(e, i, a) : x.style(e, i, r, a)
                }, e, s ? r : void 0, s)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        x.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), x.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), x.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), x.proxy = function (t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), g(t)) return n = o.call(arguments, 2), (r = function () {
            return t.apply(e || this, n.concat(o.call(arguments)))
        }).guid = t.guid = t.guid || x.guid++, r
    }, x.holdReady = function (t) {
        t ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = g, x.isWindow = m, x.camelCase = U, x.type = _, x.now = Date.now, x.isNumeric = function (t) {
        var e = x.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    });
    var Ie = t.jQuery, He = t.$;
    return x.noConflict = function (e) {
        return t.$ === x && (t.$ = He), e && t.jQuery === x && (t.jQuery = Ie), x
    }, e || (t.jQuery = t.$ = x), x
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (t) {
    var e, i = navigator.userAgent, n = /iphone/i.test(i), r = /chrome/i.test(i), o = /android/i.test(i);
    t.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function (t, e) {
            var i;
            if (0 !== this.length && !this.is(":hidden") && this.get(0) === document.activeElement) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", e), i.moveStart("character", t), i.select())
            })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), t = 0 - i.duplicate().moveStart("character", -1e5), e = t + i.text.length), {
                begin: t,
                end: e
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (i, s) {
            var a, l, c, u, d, f, p;
            if (!i && this.length > 0) {
                var h = t(this[0]).data(t.mask.dataName);
                return h ? h() : void 0
            }
            return s = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, s), a = t.mask.definitions, l = [], c = f = i.length, u = null, i = String(i), t.each(i.split(""), function (t, e) {
                "?" == e ? (f--, c = t) : a[e] ? (l.push(new RegExp(a[e])), null === u && (u = l.length - 1), t < c && (d = l.length - 1)) : l.push(null)
            }), this.trigger("unmask").each(function () {
                var h = t(this), g = t.map(i.split(""), function (t, e) {
                    if ("?" != t) return a[t] ? _(e) : t
                }), m = g.join(""), v = h.val();

                function y() {
                    if (s.completed) {
                        for (var t = u; t <= d; t++) if (l[t] && g[t] === _(t)) return;
                        s.completed.call(h)
                    }
                }

                function _(t) {
                    return t < s.placeholder.length ? s.placeholder.charAt(t) : s.placeholder.charAt(0)
                }

                function x(t) {
                    for (; ++t < f && !l[t];) ;
                    return t
                }

                function b(t, e) {
                    var i, n;
                    if (!(t < 0)) {
                        for (i = t, n = x(e); i < f; i++) if (l[i]) {
                            if (!(n < f && l[i].test(g[n]))) break;
                            g[i] = g[n], g[n] = _(n), n = x(n)
                        }
                        S(), h.caret(Math.max(u, t))
                    }
                }

                function w(t) {
                    k(), h.val() != v && h.change()
                }

                function T(t, e) {
                    var i;
                    for (i = t; i < e && i < f; i++) l[i] && (g[i] = _(i))
                }

                function S() {
                    h.val(g.join(""))
                }

                function k(t) {
                    var e, i, n, r = h.val(), o = -1;
                    for (e = 0, n = 0; e < f; e++) if (l[e]) {
                        for (g[e] = _(e); n++ < r.length;) if (i = r.charAt(n - 1), l[e].test(i)) {
                            g[e] = i, o = e;
                            break
                        }
                        if (n > r.length) {
                            T(e + 1, f);
                            break
                        }
                    } else g[e] === r.charAt(n) && n++, e < c && (o = e);
                    return t ? S() : o + 1 < c ? s.autoclear || g.join("") === m ? (h.val() && h.val(""), T(0, f)) : S() : (S(), h.val(h.val().substring(0, o + 1))), c ? e : u
                }

                h.data(t.mask.dataName, function () {
                    return t.map(g, function (t, e) {
                        return l[e] && t != _(e) ? t : null
                    }).join("")
                }), h.one("unmask", function () {
                    h.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function () {
                    var t;
                    h.prop("readonly") || (clearTimeout(e), v = h.val(), t = k(), e = setTimeout(function () {
                        h.get(0) === document.activeElement && (S(), t == i.replace("?", "").length ? h.caret(0, t) : h.caret(t))
                    }, 10))
                }).on("blur.mask", w).on("keydown.mask", function (t) {
                    if (!h.prop("readonly")) {
                        var e, i, r, o = t.which || t.keyCode;
                        p = h.val(), 8 === o || 46 === o || n && 127 === o ? (i = (e = h.caret()).begin, (r = e.end) - i == 0 && (i = 46 !== o ? function (t) {
                            for (; --t >= 0 && !l[t];) ;
                            return t
                        }(i) : r = x(i - 1), r = 46 === o ? x(r) : r), T(i, r), b(i, r - 1), t.preventDefault()) : 13 === o ? w.call(this, t) : 27 === o && (h.val(v), h.caret(0, k()), t.preventDefault())
                    }
                }).on("keypress.mask", function (e) {
                    if (!h.prop("readonly")) {
                        var i, n, r, s = e.which || e.keyCode, a = h.caret();
                        e.ctrlKey || e.altKey || e.metaKey || s < 32 || !s || 13 === s || (a.end - a.begin != 0 && (T(a.begin, a.end), b(a.begin, a.end - 1)), (i = x(a.begin - 1)) < f && (n = String.fromCharCode(s), l[i].test(n)) && (function (t) {
                            var e, i, n, r;
                            for (e = t, i = _(t); e < f; e++) if (l[e]) {
                                if (n = x(e), r = g[e], g[e] = i, !(n < f && l[n].test(r))) break;
                                i = r
                            }
                        }(i), g[i] = n, S(), r = x(i), o ? setTimeout(function () {
                            t.proxy(t.fn.caret, h, r)()
                        }, 0) : h.caret(r), a.begin <= d && y()), e.preventDefault())
                    }
                }).on("input.mask paste.mask", function () {
                    h.prop("readonly") || setTimeout(function () {
                        var t = k(!0);
                        h.caret(t), y()
                    }, 0)
                }), r && o && h.off("input.mask").on("input.mask", function (t) {
                    var e = h.val(), i = h.caret();
                    if (p && p.length && p.length > e.length) {
                        for (k(!0); i.begin > 0 && !l[i.begin - 1];) i.begin--;
                        if (0 === i.begin) for (; i.begin < u && !l[i.begin];) i.begin++;
                        h.caret(i.begin, i.begin)
                    } else {
                        k(!0);
                        var n = e.charAt(i.begin);
                        i.begin < f && (l[i.begin] ? l[i.begin].test(n) && i.begin++ : (i.begin++, l[i.begin].test(n) && i.begin++)), h.caret(i.begin, i.begin)
                    }
                    y()
                }), k()
            })
        }
    })
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (i, n) {
            var r, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, i) {
                    return t('<button type="button" />').text(i + 1)
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
            }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var r = this;
        if ("boolean" == typeof i) n = i, i = null; else if (i < 0 || i >= r.slideCount) return !1;
        r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : !0 === n ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), r.$slidesCache = r.$slides, r.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var n = {}, r = this;
        r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({left: e}, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({top: e}, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t({animStart: r.currentLeft}).animate({animStart: e}, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === r.options.vertical ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function () {
            r.disableTransition(), i.call()
        }, r.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, n, r, o, s, a = this;
        if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var u = t * s + (e * a.options.slidesPerRow + i);
                        o.get(u) && c.appendChild(o.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var n, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (n in r = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
            null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var n, r, o = this, s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case"previous":
                r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
                break;
            case"next":
                r = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(a), !1, i), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var n in e) {
            if (t < e[n]) {
                t = i;
                break
            }
            i = e[n]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, n = 0;
        if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++n; else for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) n = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, n, r, o = this, s = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = i * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, n = 0, r = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return r
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (r, o) {
            if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft) return e = o, !1
        }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
            n = e.getNavigableIndexes().filter(function (t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            var r = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== r && t(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + r})
        }), e.$dots.attr("role", "tablist").find("li").each(function (r) {
            var o = n[r];
            t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + r,
                "aria-controls": "slick-slide" + e.instanceUid + o,
                "aria-label": r + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++) e.$slides.eq(r).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), n = t(this).attr("data-srcset"),
                    r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"), s = document.createElement("img");
                s.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        n && (e.attr("srcset", n), r && e.attr("sizes", r)), e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, e, i])
                    })
                }, s.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
                }, s.src = i
            })
        }

        var i, n, r, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? r = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, r <= o.slideCount && r++)), i = o.$slider.find(".slick-slide").slice(n, r), "anticipated" === o.options.lazyLoad) for (var s = n - 1, a = r, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), i = (i = i.add(l.eq(s))).add(l.eq(a)), s--, a++;
        e(i), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, n, r, o, s, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), r = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
            r && (i.attr("srcset", r), o && i.attr("sizes", o)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, s.onerror = function () {
            e < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function (e) {
        var i, n, r = this;
        n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {currentSlide: i}), r.init(), e || r.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, n, r = this, o = r.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in r.respondTo = r.options.respondTo || "window", o) if (n = r.breakpoints.length - 1, o.hasOwnProperty(e)) {
                for (i = o[e].breakpoint; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                r.breakpoints.push(i), r.breakpointSettings[i] = o[e].settings
            }
            r.breakpoints.sort(function (t, e) {
                return r.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.setCSS = function (t) {
        var e, i, n = this, r = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (n, r) {
            e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(r).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(r).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, n, r, o, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[n] = r; else if ("multiple" === o) t.each(n, function (t, e) {
            s.options[t] = e
        }); else if ("responsive" === o) for (i in r) if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[i]]; else {
            for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1), e--;
            s.options.responsive.push(r[i])
        }
        a && (s.unload(), s.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, r, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
            var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1 + s, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, n, r = this;
        if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow)) {
            for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + r.slideCount; e += 1) i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function (e) {
        var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            r = parseInt(n.attr("data-slick-index"));
        r || (r = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r)
    }, e.prototype.slideHandler = function (t, e, i) {
        var n, r, o, s, a, l = null, c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function () {
            c.postSlide(n)
        }) : c.postSlide(n)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function () {
            c.postSlide(n)
        }) : c.postSlide(n)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function () {
                c.postSlide(r)
            })) : c.postSlide(r), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function () {
                c.postSlide(r)
            }) : c.postSlide(r)
        }
    }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, n, r = this;
        return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, n, r, o, s, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * r : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
        var t, i, n = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (t = 0; t < s; t++) if ("object" == typeof r || void 0 === r ? n[t].slick = new e(n[t], r) : i = n[t].slick[r].apply(n[t].slick, o), void 0 !== i) return i;
        return n
    }
}), function (t) {
    var e, i, n = "0.5.0", r = "hasOwnProperty", o = /[\.\/]/, s = /\s*,\s*/, a = function (t, e) {
        return t - e
    }, l = {n: {}}, c = function () {
        for (var t = 0, e = this.length; e > t; t++) if (void 0 !== this[t]) return this[t]
    }, u = function () {
        for (var t = this.length; --t;) if (void 0 !== this[t]) return this[t]
    }, d = Object.prototype.toString, f = String, p = Array.isArray || function (t) {
        return t instanceof Array || "[object Array]" == d.call(t)
    };
    eve = function (t, n) {
        var r, o = i, s = Array.prototype.slice.call(arguments, 2), l = eve.listeners(t), d = 0, f = [], p = {}, h = [],
            g = e;
        h.firstDefined = c, h.lastDefined = u, e = t, i = 0;
        for (var m = 0, v = l.length; v > m; m++) "zIndex" in l[m] && (f.push(l[m].zIndex), l[m].zIndex < 0 && (p[l[m].zIndex] = l[m]));
        for (f.sort(a); f[d] < 0;) if (r = p[f[d++]], h.push(r.apply(n, s)), i) return i = o, h;
        for (m = 0; v > m; m++) if ("zIndex" in (r = l[m])) if (r.zIndex == f[d]) {
            if (h.push(r.apply(n, s)), i) break;
            do {
                if ((r = p[f[++d]]) && h.push(r.apply(n, s)), i) break
            } while (r)
        } else p[r.zIndex] = r; else if (h.push(r.apply(n, s)), i) break;
        return i = o, e = g, h
    }, eve._events = l, eve.listeners = function (t) {
        var e, i, n, r, s, a, c, u, d = p(t) ? t : t.split(o), f = l, h = [f], g = [];
        for (r = 0, s = d.length; s > r; r++) {
            for (u = [], a = 0, c = h.length; c > a; a++) for (i = [(f = h[a].n)[d[r]], f["*"]], n = 2; n--;) (e = i[n]) && (u.push(e), g = g.concat(e.f || []));
            h = u
        }
        return g
    }, eve.separator = function (t) {
        t ? (t = "[" + (t = f(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", o = new RegExp(t)) : o = /[\.\/]/
    }, eve.on = function (t, e) {
        if ("function" != typeof e) return function () {
        };
        for (var i = p(t) ? p(t[0]) ? t : [t] : f(t).split(s), n = 0, r = i.length; r > n; n++) !function (t) {
            for (var i, n = p(t) ? t : f(t).split(o), r = l, s = 0, a = n.length; a > s; s++) r = (r = r.n).hasOwnProperty(n[s]) && r[n[s]] || (r[n[s]] = {n: {}});
            for (r.f = r.f || [], s = 0, a = r.f.length; a > s; s++) if (r.f[s] == e) {
                i = !0;
                break
            }
            !i && r.f.push(e)
        }(i[n]);
        return function (t) {
            +t == +t && (e.zIndex = +t)
        }
    }, eve.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, eve.stop = function () {
        i = 1
    }, eve.nt = function (t) {
        var i = p(e) ? e.join(".") : e;
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(i) : i
    }, eve.nts = function () {
        return p(e) ? e : e.split(o)
    }, eve.off = eve.unbind = function (t, e) {
        if (t) {
            var i = p(t) ? p(t[0]) ? t : [t] : f(t).split(s);
            if (i.length > 1) for (var n = 0, a = i.length; a > n; n++) eve.off(i[n], e); else {
                i = p(t) ? t : f(t).split(o);
                var c, u, d, h, g, m = [l], v = [];
                for (n = 0, a = i.length; a > n; n++) for (h = 0; h < m.length; h += d.length - 2) {
                    if (d = [h, 1], c = m[h].n, "*" != i[n]) c[i[n]] && (d.push(c[i[n]]), v.unshift({
                        n: c,
                        name: i[n]
                    })); else for (u in c) c[r](u) && (d.push(c[u]), v.unshift({n: c, name: u}));
                    m.splice.apply(m, d)
                }
                for (n = 0, a = m.length; a > n; n++) for (c = m[n]; c.n;) {
                    if (e) {
                        if (c.f) {
                            for (h = 0, g = c.f.length; g > h; h++) if (c.f[h] == e) {
                                c.f.splice(h, 1);
                                break
                            }
                            !c.f.length && delete c.f
                        }
                        for (u in c.n) if (c.n[r](u) && c.n[u].f) {
                            var y = c.n[u].f;
                            for (h = 0, g = y.length; g > h; h++) if (y[h] == e) {
                                y.splice(h, 1);
                                break
                            }
                            !y.length && delete c.n[u].f
                        }
                    } else for (u in delete c.f, c.n) c.n[r](u) && c.n[u].f && delete c.n[u].f;
                    c = c.n
                }
                t:for (n = 0, a = v.length; a > n; n++) {
                    for (u in (c = v[n]).n[c.name].f) continue t;
                    for (u in c.n[c.name].n) continue t;
                    delete c.n[c.name]
                }
            }
        } else eve._events = l = {n: {}}
    }, eve.once = function (t, e) {
        var i = function () {
            return eve.off(t, i), e.apply(this, arguments)
        };
        return eve.on(t, i)
    }, eve.version = n, eve.toString = function () {
        return "You are running Eve " + n
    }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function () {
        return eve
    }) : t.eve = eve
}(this), function (t, e) {
    if ("function" == typeof define && define.amd) define(["eve"], function (i) {
        return e(t, i)
    }); else if ("undefined" != typeof exports) {
        var i = require("eve");
        module.exports = e(t, i)
    } else e(t, t.eve)
}(window || this, function (t, e) {
    var i = function (e) {
        var i, n = {},
            r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                return setTimeout(t, 16, (new Date).getTime()), !0
            }, o = Array.isArray || function (t) {
                return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
            }, s = 0, a = "M" + (+new Date).toString(36), l = function () {
                return a + (s++).toString(36)
            }, c = Date.now || function () {
                return +new Date
            }, u = function (t) {
                var e = this;
                if (null == t) return e.s;
                var i = e.s - t;
                e.b += e.dur * i, e.B += e.dur * i, e.s = t
            }, d = function (t) {
                return null == t ? this.spd : void (this.spd = t)
            }, f = function (t) {
                var e = this;
                return null == t ? e.dur : (e.s = e.s * t / e.dur, void (e.dur = t))
            }, p = function () {
                var t = this;
                delete n[t.id], t.update(), e("mina.stop." + t.id, t)
            }, h = function () {
                var t = this;
                t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
            }, g = function () {
                var t = this;
                t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t, v())
            }, m = function () {
                var t, e = this;
                if (o(e.start)) {
                    t = [];
                    for (var i = 0, n = e.start.length; n > i; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
                } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                e.set(t)
            }, v = function (t) {
                if (t) {
                    var o = 0;
                    for (var s in n) if (n.hasOwnProperty(s)) {
                        var a = n[s], l = a.get();
                        o++, a.s = (l - a.b) / (a.dur / a.spd), a.s >= 1 && (delete n[s], a.s = 1, o--, function (t) {
                            setTimeout(function () {
                                e("mina.finish." + t.id, t)
                            })
                        }(a)), a.update()
                    }
                    i = !!o && r(v)
                } else i || (i = r(v))
            }, y = function (t, e, i, r, o, s, a) {
                var c = {
                    id: l(),
                    start: t,
                    end: e,
                    b: i,
                    s: 0,
                    dur: r - i,
                    spd: 1,
                    get: o,
                    set: s,
                    easing: a || y.linear,
                    status: u,
                    speed: d,
                    duration: f,
                    stop: p,
                    pause: h,
                    resume: g,
                    update: m
                };
                n[c.id] = c;
                var _, x = 0;
                for (_ in n) if (n.hasOwnProperty(_) && 2 == ++x) break;
                return 1 == x && v(), c
            };
        return y.time = c, y.getById = function (t) {
            return n[t] || null
        }, y.linear = function (t) {
            return t
        }, y.easeout = function (t) {
            return Math.pow(t, 1.7)
        }, y.easein = function (t) {
            return Math.pow(t, .48)
        }, y.easeinout = function (t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = .48 - t / 1.04, i = Math.sqrt(.1734 + e * e), n = i - e, r = -i - e,
                o = Math.pow(Math.abs(n), 1 / 3) * (0 > n ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1) + .5;
            return 3 * (1 - o) * o * o + o * o * o
        }, y.backin = function (t) {
            if (1 == t) return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, y.backout = function (t) {
            if (0 == t) return 0;
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1
        }, y.elastic = function (t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
        }, y.bounce = function (t) {
            var e = 7.5625, i = 2.75;
            return 1 / i > t ? e * t * t : 2 / i > t ? e * (t -= 1.5 / i) * t + .75 : 2.5 / i > t ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
        }, t.mina = y, y
    }(void 0 === e ? function () {
    } : e), n = function (t) {
        function i(t, e) {
            if (t) {
                if (t.nodeType) return p(t);
                if (r(t, "array") && i.set) return i.set.apply(i, t);
                if (t instanceof c) return t;
                if (null == e) return p(t = h.doc.querySelector(String(t)))
            }
            return new f(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
        }

        function n(t, e) {
            if (e) {
                if ("#text" == t && (t = h.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = h.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = n(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(R, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(L, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                if (1 == t.nodeType) {
                    for (var i in e) if (e[m](i)) {
                        var r = v(e[i]);
                        r ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(R, i.substring(6), r) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(L, i.substring(4), r) : t.setAttribute(i, r) : t.removeAttribute(i)
                    }
                } else "text" in e && (t.nodeValue = e.text)
            } else t = h.doc.createElementNS(L, t);
            return t
        }

        function r(t, e) {
            return "finite" == (e = v.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || C.call(t).slice(8, -1).toLowerCase() == e
        }

        function o(t, e, i) {
            return function n() {
                var r = Array.prototype.slice.call(arguments, 0), o = r.join("␀"), s = n.cache = n.cache || {},
                    a = n.count = n.count || [];
                return s[m](o) ? (function (t, e) {
                    for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return t.push(t.splice(i, 1)[0])
                }(a, o), i ? i(s[o]) : s[o]) : (a.length >= 1e3 && delete s[a.shift()], a.push(o), s[o] = t.apply(e, r), i ? i(s[o]) : s[o])
            }
        }

        function s(t) {
            return t % 360 * S / 180
        }

        function a(t) {
            return t.node.ownerSVGElement && p(t.node.ownerSVGElement) || i.select("svg")
        }

        function l(t) {
            r(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
            for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function (t) {
                n.appendChild(t.node)
            }) : n.appendChild(t[e].node);
            var o = n.childNodes;
            for (e = 0; e < o.length; e++) this[i++] = p(o[e]);
            return this
        }

        function c(t) {
            if (t.snap in j) return j[t.snap];
            var e;
            try {
                e = t.ownerSVGElement
            } catch (t) {
            }
            this.node = t, e && (this.paper = new f(e)), this.type = t.tagName || t.nodeName;
            var i = this.id = N(this);
            if (this.anims = {}, this._ = {transform: []}, t.snap = i, j[i] = this, "g" == this.type && (this.add = l), this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            }) for (var n in f.prototype) f.prototype[m](n) && (this[n] = f.prototype[n])
        }

        function u(t) {
            this.node = t
        }

        function d(t, e) {
            var i = n(t);
            return e.appendChild(i), p(i)
        }

        function f(t, e) {
            var i, r, o, s = f.prototype;
            if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                if (t.snap in j) return j[t.snap];
                var a = t.ownerDocument;
                for (var l in i = new c(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], r || ((r = n("desc")).appendChild(a.createTextNode("Created with Snap")), i.node.appendChild(r)), o || (o = n("defs"), i.node.appendChild(o)), i.defs = o, s) s[m](l) && (i[l] = s[l]);
                i.paper = i.root = i
            } else n((i = d("svg", h.doc.body)).node, {height: e, version: 1.1, width: t, xmlns: L});
            return i
        }

        function p(t) {
            return t ? t instanceof c || t instanceof u ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new f(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new f(t.contentDocument.getElementsByTagName("svg")[0]) : new c(t) : t
        }

        i.version = "0.5.1", i.toString = function () {
            return "Snap v" + this.version
        }, i._ = {};
        var h = {win: t.window, doc: t.window.document};
        i._.glob = h;
        var m = "hasOwnProperty", v = String, y = parseFloat, _ = parseInt, x = Math, b = x.max, w = x.min, T = x.abs,
            S = (x.pow, x.PI), k = (x.round, ""), C = Object.prototype.toString,
            A = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            P = (i._.separator = /[,\s]+/, /[\s]*,[\s]*/), F = {hs: 1, rg: 1},
            E = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            D = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            O = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi, $ = 0, M = "S" + (+new Date).toString(36),
            N = function (t) {
                return (t && t.type ? t.type : k) + M + ($++).toString(36)
            }, R = "http://www.w3.org/1999/xlink", L = "http://www.w3.org/2000/svg", j = {};
        i.url = function (t) {
            return "url('#" + t + "')"
        }, i._.$ = n, i._.id = N, i.format = function () {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                i = function (t, i, n) {
                    var r = n;
                    return i.replace(e, function (t, e, i, n, o) {
                        e = e || n, r && (e in r && (r = r[e]), "function" == typeof r && o && (r = r()))
                    }), r = (null == r || r == n ? t : r) + ""
                };
            return function (e, n) {
                return v(e).replace(t, function (t, e) {
                    return i(t, e, n)
                })
            }
        }(), i._.clone = function t(e) {
            if ("function" == typeof e || Object(e) !== e) return e;
            var i = new e.constructor;
            for (var n in e) e[m](n) && (i[n] = t(e[n]));
            return i
        }, i._.cacher = o, i.rad = s, i.deg = function (t) {
            return 180 * t / S % 360
        }, i.sin = function (t) {
            return x.sin(i.rad(t))
        }, i.tan = function (t) {
            return x.tan(i.rad(t))
        }, i.cos = function (t) {
            return x.cos(i.rad(t))
        }, i.asin = function (t) {
            return i.deg(x.asin(t))
        }, i.acos = function (t) {
            return i.deg(x.acos(t))
        }, i.atan = function (t) {
            return i.deg(x.atan(t))
        }, i.atan2 = function (t) {
            return i.deg(x.atan2(t))
        }, i.angle = function t(e, i, n, r, o, s) {
            if (null == o) {
                var a = e - n, l = i - r;
                return a || l ? (180 + 180 * x.atan2(-l, -a) / S + 360) % 360 : 0
            }
            return t(e, i, o, s) - t(n, r, o, s)
        }, i.len = function (t, e, n, r) {
            return Math.sqrt(i.len2(t, e, n, r))
        }, i.len2 = function (t, e, i, n) {
            return (t - i) * (t - i) + (e - n) * (e - n)
        }, i.closestPoint = function (t, e, i) {
            function n(t) {
                var n = t.x - e, r = t.y - i;
                return n * n + r * r
            }

            for (var r, o, s, a, l = t.node, c = l.getTotalLength(), u = c / l.pathSegList.numberOfItems * .125, d = 1 / 0, f = 0; c >= f; f += u) (a = n(s = l.getPointAtLength(f))) < d && (r = s, o = f, d = a);
            for (u *= .5; u > .5;) {
                var p, h, g, m, v, y;
                (g = o - u) >= 0 && (v = n(p = l.getPointAtLength(g))) < d ? (r = p, o = g, d = v) : (m = o + u) <= c && (y = n(h = l.getPointAtLength(m))) < d ? (r = h, o = m, d = y) : u *= .5
            }
            return {x: r.x, y: r.y, length: o, distance: Math.sqrt(d)}
        }, i.is = r, i.snapTo = function (t, e, i) {
            if (i = r(i, "finite") ? i : 10, r(t, "array")) {
                for (var n = t.length; n--;) if (T(t[n] - e) <= i) return t[n]
            } else {
                var o = e % (t = +t);
                if (i > o) return e - o;
                if (o > t - i) return e - o + t
            }
            return e
        }, i.getRGB = o(function (t) {
            if (!t || (t = v(t)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: I};
            if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: I};
            if (!(F[m](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = z(t)), !t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: I
            };
            var e, n, o, s, a, l, c = t.match(A);
            return c ? (c[2] && (o = _(c[2].substring(5), 16), n = _(c[2].substring(3, 5), 16), e = _(c[2].substring(1, 3), 16)), c[3] && (o = _((a = c[3].charAt(3)) + a, 16), n = _((a = c[3].charAt(2)) + a, 16), e = _((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = y(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), o = y(l[2]), "%" == l[2].slice(-1) && (o *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), c[5] ? (l = c[5].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = y(l[1]), "%" == l[1].slice(-1) && (n /= 100), o = y(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsb2rgb(e, n, o, s)) : c[6] ? (l = c[6].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = y(l[1]), "%" == l[1].slice(-1) && (n /= 100), o = y(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (s = y(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsl2rgb(e, n, o, s)) : (e = w(x.round(e), 255), n = w(x.round(n), 255), o = w(x.round(o), 255), s = w(b(s, 0), 1), (c = {
                r: e,
                g: n,
                b: o,
                toString: I
            }).hex = "#" + (16777216 | o | n << 8 | e << 16).toString(16).slice(1), c.opacity = r(s, "finite") ? s : 1, c)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: I
            }
        }, i), i.hsb = o(function (t, e, n) {
            return i.hsb2rgb(t, e, n).hex
        }), i.hsl = o(function (t, e, n) {
            return i.hsl2rgb(t, e, n).hex
        }), i.rgb = o(function (t, e, i, n) {
            if (r(n, "finite")) {
                var o = x.round;
                return "rgba(" + [o(t), o(e), o(i), +n.toFixed(2)] + ")"
            }
            return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
        });
        var z = function (t) {
            var e = h.doc.getElementsByTagName("head")[0] || h.doc.getElementsByTagName("svg")[0], i = "rgb(255, 0, 0)";
            return (z = o(function (t) {
                if ("red" == t.toLowerCase()) return i;
                e.style.color = i, e.style.color = t;
                var n = h.doc.defaultView.getComputedStyle(e, k).getPropertyValue("color");
                return n == i ? null : n
            }))(t)
        }, B = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, q = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, I = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, H = function (t, e, n) {
            if (null == e && r(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r(t, string)) {
                var o = i.getRGB(t);
                t = o.r, e = o.g, n = o.b
            }
            return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
        }, X = function (t, e, n, o) {
            var s = {
                r: t = x.round(255 * t),
                g: e = x.round(255 * e),
                b: n = x.round(255 * n),
                opacity: r(o, "finite") ? o : 1,
                hex: i.rgb(t, e, n),
                toString: I
            };
            return r(o, "finite") && (s.opacity = o), s
        };
        i.color = function (t) {
            var e;
            return r(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = i.getRGB(t)), r(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : ((t = {hex: "none"}).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = I, t
        }, i.hsb2rgb = function (t, e, i, n) {
            var o, s, a, l, c;
            return r(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), l = (c = i * e) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), o = s = a = i - c, X(o += [c, l, 0, 0, l, c][t = ~~t], s += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], n)
        }, i.hsl2rgb = function (t, e, i, n) {
            var o, s, a, l, c;
            return r(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), l = (c = 2 * e * (.5 > i ? i : 1 - i)) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), o = s = a = i - c / 2, X(o += [c, l, 0, 0, l, c][t = ~~t], s += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], n)
        }, i.rgb2hsb = function (t, e, i) {
            var n, r;
            return t = (i = H(t, e, i))[0], e = i[1], i = i[2], {
                h: ((0 == (r = (n = b(t, e, i)) - w(t, e, i)) ? null : n == t ? (e - i) / r : n == e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360,
                s: 0 == r ? 0 : r / n,
                b: n,
                toString: B
            }
        }, i.rgb2hsl = function (t, e, i) {
            var n, r, o, s;
            return t = (i = H(t, e, i))[0], e = i[1], i = i[2], n = ((r = b(t, e, i)) + (o = w(t, e, i))) / 2, {
                h: ((0 == (s = r - o) ? null : r == t ? (e - i) / s : r == e ? (i - t) / s + 2 : (t - e) / s + 4) + 360) % 6 * 60 / 360,
                s: 0 == s ? 0 : .5 > n ? s / (2 * n) : s / (2 - 2 * n),
                l: n,
                toString: q
            }
        }, i.parsePathString = function (t) {
            if (!t) return null;
            var e = i.path(t);
            if (e.arr) return i.path.clone(e.arr);
            var n = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, o = [];
            return r(t, "array") && r(t[0], "array") && (o = i.path.clone(t)), o.length || v(t).replace(E, function (t, e, i) {
                var r = [], s = e.toLowerCase();
                if (i.replace(O, function (t, e) {
                    e && r.push(+e)
                }), "m" == s && r.length > 2 && (o.push([e].concat(r.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "o" == s && 1 == r.length && o.push([e, r[0]]), "r" == s) o.push([e].concat(r)); else for (; r.length >= n[s] && (o.push([e].concat(r.splice(0, n[s]))), n[s]);) ;
            }), o.toString = i.path.toString, e.arr = i.path.clone(o), o
        };
        var W = i.parseTransformString = function (t) {
            if (!t) return null;
            var e = [];
            return r(t, "array") && r(t[0], "array") && (e = i.path.clone(t)), e.length || v(t).replace(D, function (t, i, n) {
                var r = [];
                i.toLowerCase(), n.replace(O, function (t, e) {
                    e && r.push(+e)
                }), e.push([i].concat(r))
            }), e.toString = i.path.toString, e
        };
        i._.svgTransform2string = function (t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, i, n) {
                return n = n.split(/\s*,\s*|\s+/), "rotate" == i && 1 == n.length && n.push(0, 0), "scale" == i && (n.length > 2 ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), "skewX" == i ? e.push(["m", 1, 0, x.tan(s(n[0])), 1, 0, 0]) : "skewY" == i ? e.push(["m", 1, x.tan(s(n[0])), 0, 1, 0, 0]) : e.push([i.charAt(0)].concat(n)), t
            }), e
        }, i._.rgTransform = /^[a-z][\s]*-?\.?\d/i, i._.transform2matrix = function (t, e) {
            var n = W(t), r = new i.Matrix;
            if (n) for (var o = 0, s = n.length; s > o; o++) {
                var a, l, c, u, d, f = n[o], p = f.length, h = v(f[0]).toLowerCase(), g = f[0] != h,
                    m = g ? r.invert() : 0;
                "t" == h && 2 == p ? r.translate(f[1], 0) : "t" == h && 3 == p ? g ? (a = m.x(0, 0), l = m.y(0, 0), c = m.x(f[1], f[2]), u = m.y(f[1], f[2]), r.translate(c - a, u - l)) : r.translate(f[1], f[2]) : "r" == h ? 2 == p ? (d = d || e, r.rotate(f[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p && (g ? (c = m.x(f[2], f[3]), u = m.y(f[2], f[3]), r.rotate(f[1], c, u)) : r.rotate(f[1], f[2], f[3])) : "s" == h ? 2 == p || 3 == p ? (d = d || e, r.scale(f[1], f[p - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p ? g ? (c = m.x(f[2], f[3]), u = m.y(f[2], f[3]), r.scale(f[1], f[1], c, u)) : r.scale(f[1], f[1], f[2], f[3]) : 5 == p && (g ? (c = m.x(f[3], f[4]), u = m.y(f[3], f[4]), r.scale(f[1], f[2], c, u)) : r.scale(f[1], f[2], f[3], f[4])) : "m" == h && 7 == p && r.add(f[1], f[2], f[3], f[4], f[5], f[6])
            }
            return r
        }, i._unit2px = function (t, e, i) {
            function r(t) {
                if (null == t) return k;
                if (t == +t) return t;
                n(u, {width: t});
                try {
                    return u.getBBox().width
                } catch (t) {
                    return 0
                }
            }

            function o(t) {
                if (null == t) return k;
                if (t == +t) return t;
                n(u, {height: t});
                try {
                    return u.getBBox().height
                } catch (t) {
                    return 0
                }
            }

            function s(n, r) {
                null == e ? c[n] = r(t.attr(n) || 0) : n == e && (c = r(null == i ? t.attr(n) || 0 : i))
            }

            var l = a(t).node, c = {}, u = l.querySelector(".svg---mgr");
            switch (u || (u = n("rect"), n(u, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: "svg---mgr",
                fill: "none"
            }), l.appendChild(u)), t.type) {
                case"rect":
                    s("rx", r), s("ry", o);
                case"image":
                    s("width", r), s("height", o);
                case"text":
                    s("x", r), s("y", o);
                    break;
                case"circle":
                    s("cx", r), s("cy", o), s("r", r);
                    break;
                case"ellipse":
                    s("cx", r), s("cy", o), s("rx", r), s("ry", o);
                    break;
                case"line":
                    s("x1", r), s("x2", r), s("y1", o), s("y2", o);
                    break;
                case"marker":
                    s("refX", r), s("markerWidth", r), s("refY", o), s("markerHeight", o);
                    break;
                case"radialGradient":
                    s("fx", r), s("fy", o);
                    break;
                case"tspan":
                    s("dx", r), s("dy", o);
                    break;
                default:
                    s(e, r)
            }
            return l.removeChild(u), c
        }, h.doc.contains || h.doc.compareDocumentPosition, i._.getSomeDefs = function (t) {
            var e = t.node.ownerSVGElement && p(t.node.ownerSVGElement) || t.node.parentNode && p(t.node.parentNode) || i.select("svg") || i(0, 0),
                n = e.select("defs"), r = null != n && n.node;
            return r || (r = d("defs", e.node).node), r
        }, i._.getSomeSVG = a, i.select = function (t) {
            return t = v(t).replace(/([^\\]):/g, "$1\\:"), p(h.doc.querySelector(t))
        }, i.selectAll = function (t) {
            for (var e = h.doc.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(p(e[r]));
            return n
        }, setInterval(function () {
            for (var t in j) if (j[m](t)) {
                var e = j[t], i = e.node;
                ("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete j[t]
            }
        }, 1e4), c.prototype.attr = function (t, i) {
            var n = this, o = n.node;
            if (!t) {
                if (1 != o.nodeType) return {text: o.nodeValue};
                for (var s = o.attributes, a = {}, l = 0, c = s.length; c > l; l++) a[s[l].nodeName] = s[l].nodeValue;
                return a
            }
            if (r(t, "string")) {
                if (!(arguments.length > 1)) return e("snap.util.getattr." + t, n).firstDefined();
                var u = {};
                u[t] = i, t = u
            }
            for (var d in t) t[m](d) && e("snap.util.attr." + d, n, t[d]);
            return n
        }, i.parse = function (t) {
            var e = h.doc.createDocumentFragment(), i = !0, n = h.doc.createElement("div");
            if ((t = v(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0]) if (i) e = t; else for (; t.firstChild;) e.appendChild(t.firstChild);
            return new u(e)
        }, i.fragment = function () {
            for (var t = Array.prototype.slice.call(arguments, 0), e = h.doc.createDocumentFragment(), n = 0, r = t.length; r > n; n++) {
                var o = t[n];
                o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(i.parse(o).node)
            }
            return new u(e)
        }, i._.make = d, i._.wrap = p, f.prototype.el = function (t, e) {
            var i = d(t, this.node);
            return e && i.attr(e), i
        }, c.prototype.children = function () {
            for (var t = [], e = this.node.childNodes, n = 0, r = e.length; r > n; n++) t[n] = i(e[n]);
            return t
        }, c.prototype.toJSON = function () {
            var t = [];
            return function t(e, i) {
                for (var n = 0, r = e.length; r > n; n++) {
                    var o = {type: e[n].type, attr: e[n].attr()}, s = e[n].children();
                    i.push(o), s.length && t(s, o.childNodes = [])
                }
            }([this], t), t[0]
        }, e.on("snap.util.getattr", function () {
            var t = e.nt(), i = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            return U[m](i) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(i) : n(this.node, t)
        });
        var U = {
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
        return e.on("snap.util.attr", function (t) {
            var i = e.nt(), r = {};
            r[i = i.substring(i.lastIndexOf(".") + 1)] = t;
            var o = i.replace(/-(\w)/gi, function (t, e) {
                return e.toUpperCase()
            }), s = i.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            U[m](s) ? this.node.style[o] = null == t ? k : t : n(this.node, r)
        }), f.prototype, i.ajax = function (t, i, n, o) {
            var s = new XMLHttpRequest, a = N();
            if (s) {
                if (r(i, "function")) o = n, n = i, i = null; else if (r(i, "object")) {
                    var l = [];
                    for (var c in i) i.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(i[c]));
                    i = l.join("&")
                }
                return s.open(i ? "POST" : "GET", t, !0), i && (s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (e.once("snap.ajax." + a + ".0", n), e.once("snap.ajax." + a + ".200", n), e.once("snap.ajax." + a + ".304", n)), s.onreadystatechange = function () {
                    4 == s.readyState && e("snap.ajax." + a + "." + s.status, o, s)
                }, 4 == s.readyState ? s : (s.send(i), s)
            }
        }, i.load = function (t, e, n) {
            i.ajax(t, function (t) {
                var r = i.parse(t.responseText);
                n ? e.call(n, r) : e(r)
            })
        }, i.getElementByPoint = function (t, e) {
            var i = (this.canvas, h.doc.elementFromPoint(t, e));
            if (h.win.opera && "svg" == i.tagName) {
                var n = function (t) {
                    var e = t.getBoundingClientRect(), i = t.ownerDocument, n = i.body, r = i.documentElement,
                        o = r.clientTop || n.clientTop || 0, s = r.clientLeft || n.clientLeft || 0;
                    return {
                        y: e.top + (g.win.pageYOffset || r.scrollTop || n.scrollTop) - o,
                        x: e.left + (g.win.pageXOffset || r.scrollLeft || n.scrollLeft) - s
                    }
                }(i), r = i.createSVGRect();
                r.x = t - n.x, r.y = e - n.y, r.width = r.height = 1;
                var o = i.getIntersectionList(r, null);
                o.length && (i = o[o.length - 1])
            }
            return i ? p(i) : null
        }, i.plugin = function (t) {
            t(i, c, f, h, u)
        }, h.win.Snap = i, i
    }(t || this);
    return n.plugin(function (i, n, r, o, s) {
        function a(t, e) {
            if (null == e) {
                var n = !0;
                if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new i.Matrix;
                e = i._.svgTransform2string(e)
            } else e = i._.rgTransform.test(e) ? d(e).replace(/\.{3}|\u2026/g, t._.transform || "") : i._.svgTransform2string(e), u(e, "array") && (e = i.path ? i.path.toString.call(e) : d(e)), t._.transform = e;
            var r = i._.transform2matrix(e, t.getBBox(1));
            return n ? r : void (t.matrix = r)
        }

        function l(t) {
            return function () {
                var e = t ? "<" + this.type : "", i = this.node.attributes, n = this.node.childNodes;
                if (t) for (var r = 0, o = i.length; o > r; r++) e += " " + i[r].name + '="' + i[r].value.replace(/"/g, '\\"') + '"';
                if (n.length) {
                    for (t && (e += ">"), r = 0, o = n.length; o > r; r++) 3 == n[r].nodeType ? e += n[r].nodeValue : 1 == n[r].nodeType && (e += m(n[r]).toString());
                    t && (e += "</" + this.type + ">")
                } else t && (e += "/>");
                return e
            }
        }

        var c = n.prototype, u = i.is, d = String, f = i._unit2px, p = i._.$, h = i._.make, g = i._.getSomeDefs,
            m = i._.wrap;
        c.getBBox = function (t) {
            if ("tspan" == this.type) return i._.box(this.node.getClientRects().item(0));
            if (!i.Matrix || !i.path) return this.node.getBBox();
            var e = this, n = new i.Matrix;
            if (e.removed) return i._.box();
            for (; "use" == e.type;) if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original; else {
                var r = e.attr("xlink:href");
                e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
            }
            var o = e._, s = i.path.get[e.type] || i.path.get.deflt;
            try {
                return t ? (o.bboxwt = s ? i.path.getBBox(e.realPath = s(e)) : i._.box(e.node.getBBox()), i._.box(o.bboxwt)) : (e.realPath = s(e), e.matrix = e.transform().localMatrix, o.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(o.bbox))
            } catch (t) {
                return i._.box()
            }
        };
        var v = function () {
            return this.string
        };
        c.transform = function (t) {
            var e = this._;
            if (null == t) {
                for (var n, r = this, o = new i.Matrix(this.node.getCTM()), s = a(this), l = [s], c = new i.Matrix, u = s.toTransformString(), f = d(s) == d(this.matrix) ? d(e.transform) : u; "svg" != r.type && (r = r.parent());) l.push(a(r));
                for (n = l.length; n--;) c.add(l[n]);
                return {
                    string: f,
                    globalMatrix: o,
                    totalMatrix: c,
                    localMatrix: s,
                    diffMatrix: o.clone().add(s.invert()),
                    global: o.toTransformString(),
                    total: c.toTransformString(),
                    local: u,
                    toString: v
                }
            }
            return t instanceof i.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : a(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? p(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? p(this.node, {patternTransform: this.matrix}) : p(this.node, {transform: this.matrix})), this
        }, c.parent = function () {
            return m(this.node.parentNode)
        }, c.append = c.add = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function (t) {
                        e.add(t)
                    }), this
                }
                t = m(t), this.node.appendChild(t.node), t.paper = this.paper
            }
            return this
        }, c.appendTo = function (t) {
            return t && (t = m(t)).append(this), this
        }, c.prepend = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e, i = this;
                    return t.forEach(function (t) {
                        e ? e.after(t) : i.prepend(t), e = t
                    }), this
                }
                var n = (t = m(t)).parent();
                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), n && n.add()
            }
            return this
        }, c.prependTo = function (t) {
            return (t = m(t)).prepend(this), this
        }, c.before = function (t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function (t) {
                    var i = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node), i && i.add()
                }), this.parent().add(), this
            }
            var i = (t = m(t)).parent();
            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), i && i.add(), t.paper = this.paper, this
        }, c.after = function (t) {
            var e = (t = m(t)).parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
        }, c.insertBefore = function (t) {
            t = m(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, c.insertAfter = function (t) {
            t = m(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, c.remove = function () {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
        }, c.select = function (t) {
            return m(this.node.querySelector(t))
        }, c.selectAll = function (t) {
            for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(m(e[r]));
            return n
        }, c.asPX = function (t, e) {
            return null == e && (e = this.attr(t)), +f(this, t, e)
        }, c.use = function () {
            var t, e = this.node.id;
            return e || (e = this.id, p(this.node, {id: e})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? h(this.type, this.node.parentNode) : h("use", this.node.parentNode), p(t.node, {"xlink:href": "#" + e}), t.original = this, t
        }, c.clone = function () {
            var t = m(this.node.cloneNode(!0));
            return p(t.node, "id") && p(t.node, {id: t.id}), function (t) {
                function e(t, e) {
                    var n = p(t.node, e);
                    (n = (n = n && n.match(s)) && n[2]) && "#" == n.charAt() && (n = n.substring(1)) && (l[n] = (l[n] || []).concat(function (n) {
                        var r = {};
                        r[e] = i.url(n), p(t.node, r)
                    }))
                }

                function n(t) {
                    var e = p(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1)) && (l[e] = (l[e] || []).concat(function (e) {
                        t.attr("xlink:href", "#" + e)
                    }))
                }

                for (var r, o = t.selectAll("*"), s = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, c = 0, u = o.length; u > c; c++) {
                    e(r = o[c], "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                    var d = p(r.node, "id");
                    d && (p(r.node, {id: r.id}), a.push({old: d, id: r.id}))
                }
                for (c = 0, u = a.length; u > c; c++) {
                    var f = l[a[c].old];
                    if (f) for (var h = 0, g = f.length; g > h; h++) f[h](a[c].id)
                }
            }(t), t.insertAfter(this), t
        }, c.toDefs = function () {
            return g(this).appendChild(this.node), this
        }, c.pattern = c.toPattern = function (t, e, i, n) {
            var r = h("pattern", g(this));
            return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), p(r.node, {
                x: t,
                y: e,
                width: i,
                height: n,
                patternUnits: "userSpaceOnUse",
                id: r.id,
                viewBox: [t, e, i, n].join(" ")
            }), r.node.appendChild(this.node), r
        }, c.marker = function (t, e, i, n, r, o) {
            var s = h("marker", g(this));
            return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, r = t.refX || t.cx, o = t.refY || t.cy, t = t.x), p(s.node, {
                viewBox: [t, e, i, n].join(" "),
                markerWidth: i,
                markerHeight: n,
                orient: "auto",
                refX: r || 0,
                refY: o || 0,
                id: s.id
            }), s.node.appendChild(this.node), s
        };
        var y = {};
        c.data = function (t, n) {
            var r = y[this.id] = y[this.id] || {};
            if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r;
            if (1 == arguments.length) {
                if (i.is(t, "object")) {
                    for (var o in t) t.hasOwnProperty(o) && this.data(o, t[o]);
                    return this
                }
                return e("snap.data.get." + this.id, this, r[t], t), r[t]
            }
            return r[t] = n, e("snap.data.set." + this.id, this, n, t), this
        }, c.removeData = function (t) {
            return null == t ? y[this.id] = {} : y[this.id] && delete y[this.id][t], this
        }, c.outerSVG = c.toString = l(1), c.innerSVG = l(), c.toDataURL = function () {
            if (t && t.btoa) {
                var e = this.getBBox(),
                    n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                        x: +e.x.toFixed(3),
                        y: +e.y.toFixed(3),
                        width: +e.width.toFixed(3),
                        height: +e.height.toFixed(3),
                        contents: this.outerSVG()
                    });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
            }
        }, s.prototype.select = c.select, s.prototype.selectAll = c.selectAll
    }), n.plugin(function (t, n, r, o, s) {
        function a(t, e, i) {
            return function (n) {
                var r = n.slice(t, e);
                return 1 == r.length && (r = r[0]), i ? i(r) : r
            }
        }

        var l = n.prototype, c = t.is, u = String, d = "hasOwnProperty", f = function (t, e, n, r) {
            "function" != typeof n || n.length || (r = n, n = i.linear), this.attr = t, this.dur = e, n && (this.easing = n), r && (this.callback = r)
        };
        t._.Animation = f, t.animation = function (t, e, i, n) {
            return new f(t, e, i, n)
        }, l.inAnim = function () {
            var t = this, e = [];
            for (var i in t.anims) t.anims[d](i) && function (t) {
                e.push({
                    anim: new f(t._attrs, t.dur, t.easing, t._callback),
                    mina: t,
                    curStatus: t.status(),
                    status: function (e) {
                        return t.status(e)
                    },
                    stop: function () {
                        t.stop()
                    }
                })
            }(t.anims[i]);
            return e
        }, t.animate = function (t, n, r, o, s, a) {
            "function" != typeof s || s.length || (a = s, s = i.linear);
            var l = i.time(), c = i(t, n, l, l + o, i.time, r, s);
            return a && e.once("mina.finish." + c.id, a), c
        }, l.stop = function () {
            for (var t = this.inAnim(), e = 0, i = t.length; i > e; e++) t[e].stop();
            return this
        }, l.animate = function (t, n, r, o) {
            "function" != typeof r || r.length || (o = r, r = i.linear), t instanceof f && (o = t.callback, r = t.easing, n = t.dur, t = t.attr);
            var s, l, p, h, g = [], m = [], v = {}, y = this;
            for (var _ in t) if (t[d](_)) {
                y.equal ? (s = (h = y.equal(_, u(t[_]))).from, l = h.to, p = h.f) : (s = +y.attr(_), l = +t[_]);
                var x = c(s, "array") ? s.length : 1;
                v[_] = a(g.length, g.length + x, p), g = g.concat(s), m = m.concat(l)
            }
            var b = i.time(), w = i(g, m, b, b + n, i.time, function (t) {
                var e = {};
                for (var i in v) v[d](i) && (e[i] = v[i](t));
                y.attr(e)
            }, r);
            return y.anims[w.id] = w, w._attrs = t, w._callback = o, e("snap.animcreated." + y.id, w), e.once("mina.finish." + w.id, function () {
                e.off("mina.*." + w.id), delete y.anims[w.id], o && o.call(y)
            }), e.once("mina.stop." + w.id, function () {
                e.off("mina.*." + w.id), delete y.anims[w.id]
            }), y
        }
    }), n.plugin(function (t, e, i, n, r) {
        function o(t, e, i, n, r, o) {
            return null == e && "[object SVGMatrix]" == s.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void (this.f = t.f)) : void (null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var s = Object.prototype.toString, a = String, l = Math;
        !function (e) {
            function i(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function n(t) {
                var e = l.sqrt(i(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            e.add = function (t, e, i, n, r, s) {
                if (t && t instanceof o) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                var a = t * this.a + e * this.c, l = t * this.b + e * this.d;
                return this.e += r * this.a + s * this.c, this.f += r * this.b + s * this.d, this.c = i * this.a + n * this.c, this.d = i * this.b + n * this.d, this.a = a, this.b = l, this
            }, o.prototype.multLeft = function (t, e, i, n, r, s) {
                if (t && t instanceof o) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                var a = t * this.a + i * this.b, l = t * this.c + i * this.d, c = t * this.e + i * this.f + r;
                return this.b = e * this.a + n * this.b, this.d = e * this.c + n * this.d, this.f = e * this.e + n * this.f + s, this.a = a, this.c = l, this.e = c, this
            }, e.invert = function () {
                var t = this, e = t.a * t.d - t.b * t.c;
                return new o(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
            }, e.clone = function () {
                return new o(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.translate = function (t, e) {
                return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
            }, e.scale = function (t, e, i, n) {
                return null == e && (e = t), (i || n) && this.translate(i, n), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (i || n) && this.translate(-i, -n), this
            }, e.rotate = function (e, i, n) {
                e = t.rad(e), i = i || 0, n = n || 0;
                var r = +l.cos(e).toFixed(9), o = +l.sin(e).toFixed(9);
                return this.add(r, o, -o, r, i, n), this.add(1, 0, 0, 1, -i, -n)
            }, e.skewX = function (t) {
                return this.skew(t, 0)
            }, e.skewY = function (t) {
                return this.skew(0, t)
            }, e.skew = function (e, i) {
                e = e || 0, i = i || 0, e = t.rad(e), i = t.rad(i);
                var n = l.tan(e).toFixed(9), r = l.tan(i).toFixed(9);
                return this.add(1, r, n, 1, 0, 0)
            }, e.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, e.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, e.get = function (t) {
                return +this[a.fromCharCode(97 + t)].toFixed(4)
            }, e.toString = function () {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, e.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, e.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, e.split = function () {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var r = [[this.a, this.b], [this.c, this.d]];
                e.scalex = l.sqrt(i(r[0])), n(r[0]), e.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * e.shear, r[1][1] - r[0][1] * e.shear], e.scaley = l.sqrt(i(r[1])), n(r[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var o = r[0][1], s = r[1][1];
                return 0 > s ? (e.rotate = t.deg(l.acos(s)), 0 > o && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(o)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, e.toTransformString = function (t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
            }
        }(o.prototype), t.Matrix = o, t.matrix = function (t, e, i, n, r, s) {
            return new o(t, e, i, n, r, s)
        }
    }), n.plugin(function (t, i, n, r, o) {
        function s(n) {
            return function (r) {
                if (e.stop(), r instanceof o && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, f(this).appendChild(r), r = u(r)), r instanceof i) if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                    r.node.id || h(r.node, {id: r.id});
                    var s = g(r.node.id)
                } else s = r.attr(n); else if ((s = t.color(r)).error) {
                    var a = t(f(this).ownerSVGElement).gradient(r);
                    a ? (a.node.id || h(a.node, {id: a.id}), s = g(a.node.id)) : s = r
                } else s = m(s);
                var l = {};
                l[n] = s, h(this.node, l), this.node.style[n] = y
            }
        }

        function a(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function l() {
            return e.stop(), this.node.style.fontSize
        }

        var c = t._.make, u = t._.wrap, d = t.is, f = t._.getSomeDefs, p = /^url\((['"]?)([^)]+)\1\)$/, h = t._.$,
            g = t.url, m = String, v = t._.separator, y = "";
        t.deurl = function (t) {
            var e = String(t).match(p);
            return e ? e[2] : t
        }, e.on("snap.util.attr.mask", function (t) {
            if (t instanceof i || t instanceof o) {
                if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, f(this).appendChild(t), t = u(t)), "mask" == t.type) var n = t; else (n = c("mask", f(this))).node.appendChild(t.node);
                !n.node.id && h(n.node, {id: n.id}), h(this.node, {mask: g(n.id)})
            }
        }), function (t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function (t) {
            if (t instanceof i || t instanceof o) {
                e.stop();
                for (var n, r = t.node; r;) {
                    if ("clipPath" === r.nodeName) {
                        n = new i(r);
                        break
                    }
                    if ("svg" === r.nodeName) {
                        n = void 0;
                        break
                    }
                    r = r.parentNode
                }
                n || ((n = c("clipPath", f(this))).node.appendChild(t.node), !n.node.id && h(n.node, {id: n.id})), h(this.node, {"clip-path": g(n.node.id || n.id)})
            }
        }), e.on("snap.util.attr.fill", s("fill")), e.on("snap.util.attr.stroke", s("stroke"));
        var _ = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
            function e(t, e) {
                for (var i = (e - a) / (t - l), n = l; t > n; n++) o[n].offset = +(+a + i * (n - l)).toFixed(2);
                l = t, a = e
            }

            var i = (t = m(t)).match(_);
            if (!i) return null;
            var n = i[1], r = i[2], o = i[3];
            1 == (r = r.split(/\s*,\s*/).map(function (t) {
                return +t == t ? +t : t
            })).length && 0 == r[0] && (r = []);
            var s = (o = (o = o.split("-")).map(function (t) {
                var e = {color: (t = t.split(":"))[0]};
                return t[1] && (e.offset = parseFloat(t[1])), e
            })).length, a = 0, l = 0;
            s--;
            for (var c = 0; s > c; c++) "offset" in o[c] && e(c, o[c].offset);
            return o[s].offset = o[s].offset || 100, e(s, o[s].offset), {type: n, params: r, stops: o}
        }), e.on("snap.util.attr.d", function (i) {
            e.stop(), d(i, "array") && d(i[0], "array") && (i = t.path.toString.call(i)), (i = m(i)).match(/[ruo]/i) && (i = t.path.toAbsolute(i)), h(this.node, {d: i})
        })(-1), e.on("snap.util.attr.#text", function (t) {
            e.stop(), t = m(t);
            for (var i = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(i)
        })(-1), e.on("snap.util.attr.path", function (t) {
            e.stop(), this.attr({d: t})
        })(-1), e.on("snap.util.attr.class", function (t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function (t) {
            var i;
            i = d(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : d(t, "array") ? t.join(" ") : t, h(this.node, {viewBox: i}), e.stop()
        })(-1), e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function (t) {
            "rect" == this.type && (e.stop(), h(this.node, {rx: t, ry: t}))
        })(-1), e.on("snap.util.attr.textpath", function (t) {
            if (e.stop(), "text" == this.type) {
                var n, r, o;
                if (!t && this.textPath) {
                    for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                    return r.remove(), void delete this.textPath
                }
                if (d(t, "string")) {
                    var s = f(this), a = u(s.parentNode).path(t);
                    s.appendChild(a.node), n = a.id, a.attr({id: n})
                } else (t = u(t)) instanceof i && ((n = t.attr("id")) || (n = t.id, t.attr({id: n})));
                if (n) if (r = this.textPath, o = this.node, r) r.attr({"xlink:href": "#" + n}); else {
                    for (r = h("textPath", {"xlink:href": "#" + n}); o.firstChild;) r.appendChild(o.firstChild);
                    o.appendChild(r), this.textPath = u(r)
                }
            }
        })(-1), e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
                for (var i = this.node, n = function (t) {
                    var e = h("tspan");
                    if (d(t, "array")) for (var i = 0; i < t.length; i++) e.appendChild(n(t[i])); else e.appendChild(r.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; i.firstChild;) i.removeChild(i.firstChild);
                for (var o = n(t); o.firstChild;) i.appendChild(o.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath
        })(-1), function () {
            function i(i) {
                return function () {
                    e.stop();
                    var n = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + i);
                    return "none" == n ? n : t(r.doc.getElementById(n.match(p)[1]))
                }
            }

            function n(t) {
                return function (i) {
                    e.stop();
                    var n = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" != i && i) {
                        if ("marker" == i.type) {
                            var r = i.node.id;
                            return r || h(i.node, {id: i.id}), void (this.node.style[n] = g(r))
                        }
                    } else this.node.style[n] = "none"
                }
            }

            e.on("snap.util.getattr.marker-end", i("end"))(-1), e.on("snap.util.getattr.markerEnd", i("end"))(-1), e.on("snap.util.getattr.marker-start", i("start"))(-1), e.on("snap.util.getattr.markerStart", i("start"))(-1), e.on("snap.util.getattr.marker-mid", i("mid"))(-1), e.on("snap.util.getattr.markerMid", i("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function () {
            return "rect" == this.type && h(this.node, "rx") == h(this.node, "ry") ? (e.stop(), h(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = function t(e) {
                    for (var i = [], n = e.childNodes, r = 0, o = n.length; o > r; r++) {
                        var s = n[r];
                        3 == s.nodeType && i.push(s.nodeValue), "tspan" == s.tagName && (1 == s.childNodes.length && 3 == s.firstChild.nodeType ? i.push(s.firstChild.nodeValue) : i.push(t(s)))
                    }
                    return i
                }(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.fill", function (i) {
            if (!i) {
                e.stop();
                var n = e("snap.util.getattr.fill", this, !0).firstDefined();
                return t(t.deurl(n)) || n
            }
        })(-1), e.on("snap.util.getattr.stroke", function (i) {
            if (!i) {
                e.stop();
                var n = e("snap.util.getattr.stroke", this, !0).firstDefined();
                return t(t.deurl(n)) || n
            }
        })(-1), e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var i = h(this.node, "viewBox");
            return i ? (i = i.split(v), t._.box(+i[0], +i[1], +i[2], +i[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function () {
            var t = h(this.node, "points");
            return e.stop(), t ? t.split(v) : void 0
        })(-1), e.on("snap.util.getattr.path", function () {
            var t = h(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", l)(-1), e.on("snap.util.getattr.font-size", l)(-1)
    }), n.plugin(function (t, e, i, n, r) {
        var o = /\S+/g, s = String, a = e.prototype;
        a.addClass = function (t) {
            var e, i, n, r = s(t || "").match(o) || [], a = this.node, l = a.className.baseVal, c = l.match(o) || [];
            if (r.length) {
                for (e = 0; i = r[e++];) ~c.indexOf(i) || c.push(i);
                l != (n = c.join(" ")) && (a.className.baseVal = n)
            }
            return this
        }, a.removeClass = function (t) {
            var e, i, n, r, a = s(t || "").match(o) || [], l = this.node, c = l.className.baseVal, u = c.match(o) || [];
            if (u.length) {
                for (e = 0; n = a[e++];) ~(i = u.indexOf(n)) && u.splice(i, 1);
                c != (r = u.join(" ")) && (l.className.baseVal = r)
            }
            return this
        }, a.hasClass = function (t) {
            return !!~(this.node.className.baseVal.match(o) || []).indexOf(t)
        }, a.toggleClass = function (t, e) {
            if (null != e) return e ? this.addClass(t) : this.removeClass(t);
            var i, n, r, s, a = (t || "").match(o) || [], l = this.node, c = l.className.baseVal, u = c.match(o) || [];
            for (i = 0; r = a[i++];) ~(n = u.indexOf(r)) ? u.splice(n, 1) : u.push(r);
            return c != (s = u.join(" ")) && (l.className.baseVal = s), this
        }
    }), n.plugin(function (t, i, n, r, o) {
        function s(t) {
            return t
        }

        function a(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        var l = {
            "+": function (t, e) {
                return t + e
            }, "-": function (t, e) {
                return t - e
            }, "/": function (t, e) {
                return t / e
            }, "*": function (t, e) {
                return t * e
            }
        }, c = String, u = /[a-z]+$/i, d = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
            var i = c(t).match(d);
            if (i) {
                var n = e.nt(), r = n.substring(n.lastIndexOf(".") + 1), o = this.attr(r), s = {};
                e.stop();
                var a = i[3] || "", f = o.match(u), p = l[i[1]];
                if (f && f == a ? t = p(parseFloat(o), +i[2]) : (o = this.asPX(r), t = p(this.asPX(r), this.asPX(r, i[2] + a))), isNaN(o) || isNaN(t)) return;
                s[r] = t, this.attr(s)
            }
        })(-10), e.on("snap.util.equal", function (t, i) {
            var n = c(this.attr(t) || ""), r = c(i).match(d);
            if (r) {
                e.stop();
                var o = r[3] || "", f = n.match(u), p = l[r[1]];
                return f && f == o ? {
                    from: parseFloat(n),
                    to: p(parseFloat(n), +r[2]),
                    f: a(f)
                } : {from: n = this.asPX(t), to: p(n, this.asPX(t, r[2] + o)), f: s}
            }
        })(-10)
    }), n.plugin(function (i, n, r, o, s) {
        var a = r.prototype, l = i.is;
        a.rect = function (t, e, i, n, r, o) {
            var s;
            return null == o && (o = r), l(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                x: t,
                y: e,
                width: i,
                height: n
            }, null != r && (s.rx = r, s.ry = o)), this.el("rect", s)
        }, a.circle = function (t, e, i) {
            var n;
            return l(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
                cx: t,
                cy: e,
                r: i
            }), this.el("circle", n)
        };
        var c = function () {
            function t() {
                this.parentNode.removeChild(this)
            }

            return function (e, i) {
                var n = o.doc.createElement("img"), r = o.doc.body;
                n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
                    i.call(n), n.onload = n.onerror = null, r.removeChild(n)
                }, n.onerror = t, r.appendChild(n), n.src = e
            }
        }();
        a.image = function (t, e, n, r, o) {
            var s = this.el("image");
            if (l(t, "object") && "src" in t) s.attr(t); else if (null != t) {
                var a = {"xlink:href": t, preserveAspectRatio: "none"};
                null != e && null != n && (a.x = e, a.y = n), null != r && null != o ? (a.width = r, a.height = o) : c(t, function () {
                    i._.$(s.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), i._.$(s.node, a)
            }
            return s
        }, a.ellipse = function (t, e, i, n) {
            var r;
            return l(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                rx: i,
                ry: n
            }), this.el("ellipse", r)
        }, a.path = function (t) {
            var e;
            return l(t, "object") && !l(t, "array") ? e = t : t && (e = {d: t}), this.el("path", e)
        }, a.group = a.g = function (t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.svg = function (t, e, i, n, r, o, s, a) {
            var c = {};
            return l(t, "object") && null == e ? c = t : (null != t && (c.x = t), null != e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), null != r && null != o && null != s && null != a && (c.viewBox = [r, o, s, a])), this.el("svg", c)
        }, a.mask = function (t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.ptrn = function (t, e, i, n, r, o, s, a) {
            if (l(t, "object")) var c = t; else c = {patternUnits: "userSpaceOnUse"}, t && (c.x = t), e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), c.viewBox = null != r && null != o && null != s && null != a ? [r, o, s, a] : [t || 0, e || 0, i || 0, n || 0];
            return this.el("pattern", c)
        }, a.use = function (t) {
            return null != t ? (t instanceof n && (t.attr("id") || t.attr({id: i._.id(t)}), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {"xlink:href": "#" + t})) : n.prototype.use.call(this)
        }, a.symbol = function (t, e, i, n) {
            var r = {};
            return null != t && null != e && null != i && null != n && (r.viewBox = [t, e, i, n]), this.el("symbol", r)
        }, a.text = function (t, e, i) {
            var n = {};
            return l(t, "object") ? n = t : null != t && (n = {x: t, y: e, text: i || ""}), this.el("text", n)
        }, a.line = function (t, e, i, n) {
            var r = {};
            return l(t, "object") ? r = t : null != t && (r = {x1: t, x2: i, y1: e, y2: n}), this.el("line", r)
        }, a.polyline = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polyline", e)
        }, a.polygon = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polygon", e)
        }, function () {
            function n() {
                return this.selectAll("stop")
            }

            function r(t, e) {
                var n = u("stop"), r = {offset: +e + "%"};
                t = i.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), u(n, r);
                for (var o, s = this.stops(), a = 0; a < s.length; a++) if (parseFloat(s[a].attr("offset")) > e) {
                    this.node.insertBefore(n, s[a].node), o = !0;
                    break
                }
                return o || this.node.appendChild(n), this
            }

            function o() {
                if ("linearGradient" == this.type) {
                    var t = u(this.node, "x1") || 0, e = u(this.node, "x2") || 1, n = u(this.node, "y1") || 0,
                        r = u(this.node, "y2") || 0;
                    return i._.box(t, n, math.abs(e - t), math.abs(r - n))
                }
                var o = this.node.cx || .5, s = this.node.cy || .5, a = this.node.r || 0;
                return i._.box(o - a, s - a, 2 * a, 2 * a)
            }

            function s(t) {
                var n = t, r = this.stops();
                if ("string" == typeof t && (n = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), i.is(n, "array")) {
                    for (var o = 0; o < r.length; o++) if (n[o]) {
                        var s = i.color(n[o].color), a = {offset: n[o].offset + "%"};
                        a["stop-color"] = s.hex, s.opacity < 1 && (a["stop-opacity"] = s.opacity), r[o].attr(a)
                    } else r[o].remove();
                    for (o = r.length; o < n.length; o++) this.addStop(n[o].color, n[o].offset);
                    return this
                }
            }

            function l(t, e, a, l, c) {
                var d = i._.make("linearGradient", t);
                return d.stops = n, d.addStop = r, d.getBBox = o, d.setStops = s, null != e && u(d.node, {
                    x1: e,
                    y1: a,
                    x2: l,
                    y2: c
                }), d
            }

            function c(t, e, s, a, l, c) {
                var d = i._.make("radialGradient", t);
                return d.stops = n, d.addStop = r, d.getBBox = o, null != e && u(d.node, {
                    cx: e,
                    cy: s,
                    r: a
                }), null != l && null != c && u(d.node, {fx: l, fy: c}), d
            }

            var u = i._.$;
            a.gradient = function (t) {
                return function (t, i) {
                    var n, r = e("snap.util.grad.parse", null, i).firstDefined();
                    if (!r) return null;
                    r.params.unshift(t), n = "l" == r.type.toLowerCase() ? l.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && u(n.node, {gradientUnits: "userSpaceOnUse"});
                    for (var o = r.stops, s = o.length, a = 0; s > a; a++) {
                        var d = o[a];
                        n.addStop(d.color, d.offset)
                    }
                    return n
                }(this.defs, t)
            }, a.gradientLinear = function (t, e, i, n) {
                return l(this.defs, t, e, i, n)
            }, a.gradientRadial = function (t, e, i, n, r) {
                return c(this.defs, t, e, i, n, r)
            }, a.toString = function () {
                var t, e = this.node.ownerDocument, n = e.createDocumentFragment(), r = e.createElement("div"),
                    o = this.node.cloneNode(!0);
                return n.appendChild(r), r.appendChild(o), i._.$(o, {xmlns: "http://www.w3.org/2000/svg"}), t = r.innerHTML, n.removeChild(n.firstChild), t
            }, a.toDataURL = function () {
                return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            }, a.clear = function () {
                for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({node: e}), e = t
            }
        }()
    }), n.plugin(function (t, e, i, n) {
        function r(t) {
            var e = r.ps = r.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                for (var i in e) e[O](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
            }), e[t]
        }

        function o(t, e, i, n) {
            return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x), {
                x: t,
                y: e,
                width: i,
                w: i,
                height: n,
                h: n,
                x2: t + i,
                y2: e + n,
                cx: t + i / 2,
                cy: e + n / 2,
                r1: N.min(i, n) / 2,
                r2: N.max(i, n) / 2,
                r0: N.sqrt(i * i + n * n) / 2,
                path: x(t, e, i, n),
                vb: [t, e, i, n].join(" ")
            }
        }

        function s() {
            return this.join(",").replace($, "$1")
        }

        function a(t) {
            var e = D(t);
            return e.toString = s, e
        }

        function l(t, e, i, n, r, o, s, a, l) {
            return null == l ? g(t, e, i, n, r, o, s, a) : u(t, e, i, n, r, o, s, a, function (t, e, i, n, r, o, s, a, l) {
                if (!(0 > l || g(t, e, i, n, r, o, s, a) < l)) {
                    var c, u = .5, d = 1 - u;
                    for (c = g(t, e, i, n, r, o, s, a, d); B(c - l) > .01;) c = g(t, e, i, n, r, o, s, a, d += (l > c ? 1 : -1) * (u /= 2));
                    return d
                }
            }(t, e, i, n, r, o, s, a, l))
        }

        function c(i, n) {
            function r(t) {
                return +(+t).toFixed(3)
            }

            return t._.cacher(function (t, o, s) {
                t instanceof e && (t = t.attr("d"));
                for (var a, c, d, f, p, h = "", g = {}, m = 0, v = 0, y = (t = A(t)).length; y > v; v++) {
                    if ("M" == (d = t[v])[0]) a = +d[1], c = +d[2]; else {
                        if (m + (f = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6])) > o) {
                            if (n && !g.start) {
                                if (h += ["C" + r((p = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], o - m)).start.x), r(p.start.y), r(p.m.x), r(p.m.y), r(p.x), r(p.y)], s) return h;
                                g.start = h, h = ["M" + r(p.x), r(p.y) + "C" + r(p.n.x), r(p.n.y), r(p.end.x), r(p.end.y), r(d[5]), r(d[6])].join(), m += f, a = +d[5], c = +d[6];
                                continue
                            }
                            if (!i && !n) return l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], o - m)
                        }
                        m += f, a = +d[5], c = +d[6]
                    }
                    h += d.shift() + d
                }
                return g.end = h, i ? m : n ? g : u(a, c, d[0], d[1], d[2], d[3], d[4], d[5], 1)
            }, null, t._.clone)
        }

        function u(t, e, i, n, r, o, s, a, l) {
            var c = 1 - l, u = z(c, 3), d = z(c, 2), f = l * l, p = f * l,
                h = t + 2 * l * (i - t) + f * (r - 2 * i + t), g = e + 2 * l * (n - e) + f * (o - 2 * n + e),
                m = i + 2 * l * (r - i) + f * (s - 2 * r + i), v = n + 2 * l * (o - n) + f * (a - 2 * o + n);
            return {
                x: u * t + 3 * d * l * i + 3 * c * l * l * r + p * s,
                y: u * e + 3 * d * l * n + 3 * c * l * l * o + p * a,
                m: {x: h, y: g},
                n: {x: m, y: v},
                start: {x: c * t + l * i, y: c * e + l * n},
                end: {x: c * r + l * s, y: c * o + l * a},
                alpha: 90 - 180 * N.atan2(h - m, g - v) / R
            }
        }

        function d(e, i, n, r, s, a, l, c) {
            t.is(e, "array") || (e = [e, i, n, r, s, a, l, c]);
            var u = C.apply(null, e);
            return o(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
        }

        function f(t, e, i) {
            return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
        }

        function p(t, e) {
            return t = o(t), f(e = o(e), t.x, t.y) || f(e, t.x2, t.y) || f(e, t.x, t.y2) || f(e, t.x2, t.y2) || f(t, e.x, e.y) || f(t, e.x2, e.y) || f(t, e.x, e.y2) || f(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function h(t, e, i, n, r) {
            return t * (t * (-3 * e + 9 * i - 9 * n + 3 * r) + 6 * e - 12 * i + 6 * n) - 3 * e + 3 * i
        }

        function g(t, e, i, n, r, o, s, a, l) {
            null == l && (l = 1);
            for (var c = (l = l > 1 ? 1 : 0 > l ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; 12 > p; p++) {
                var g = c * u[p] + c, m = h(g, t, i, r, s), v = h(g, e, n, o, a), y = m * m + v * v;
                f += d[p] * N.sqrt(y)
            }
            return c * f
        }

        function m(t, e, i, n, r, o, s, a) {
            if (!(j(t, i) < L(r, s) || L(t, i) > j(r, s) || j(e, n) < L(o, a) || L(e, n) > j(o, a))) {
                var l = (t - i) * (o - a) - (e - n) * (r - s);
                if (l) {
                    var c = ((t * n - e * i) * (r - s) - (t - i) * (r * a - o * s)) / l,
                        u = ((t * n - e * i) * (o - a) - (e - n) * (r * a - o * s)) / l, d = +c.toFixed(2),
                        f = +u.toFixed(2);
                    if (!(d < +L(t, i).toFixed(2) || d > +j(t, i).toFixed(2) || d < +L(r, s).toFixed(2) || d > +j(r, s).toFixed(2) || f < +L(e, n).toFixed(2) || f > +j(e, n).toFixed(2) || f < +L(o, a).toFixed(2) || f > +j(o, a).toFixed(2))) return {
                        x: c,
                        y: u
                    }
                }
            }
        }

        function v(t, e, i) {
            if (!p(d(t), d(e))) return i ? 0 : [];
            for (var n = ~~(g.apply(0, t) / 8), r = ~~(g.apply(0, e) / 8), o = [], s = [], a = {}, l = i ? 0 : [], c = 0; n + 1 > c; c++) {
                var f = u.apply(0, t.concat(c / n));
                o.push({x: f.x, y: f.y, t: c / n})
            }
            for (c = 0; r + 1 > c; c++) f = u.apply(0, e.concat(c / r)), s.push({x: f.x, y: f.y, t: c / r});
            for (c = 0; n > c; c++) for (var h = 0; r > h; h++) {
                var v = o[c], y = o[c + 1], _ = s[h], x = s[h + 1], b = B(y.x - v.x) < .001 ? "y" : "x",
                    w = B(x.x - _.x) < .001 ? "y" : "x", T = m(v.x, v.y, y.x, y.y, _.x, _.y, x.x, x.y);
                if (T) {
                    if (a[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
                    a[T.x.toFixed(4)] = T.y.toFixed(4);
                    var S = v.t + B((T[b] - v[b]) / (y[b] - v[b])) * (y.t - v.t),
                        k = _.t + B((T[w] - _[w]) / (x[w] - _[w])) * (x.t - _.t);
                    S >= 0 && 1 >= S && k >= 0 && 1 >= k && (i ? l++ : l.push({x: T.x, y: T.y, t1: S, t2: k}))
                }
            }
            return l
        }

        function y(t, e, i) {
            t = A(t), e = A(e);
            for (var n, r, o, s, a, l, c, u, d, f, p = i ? 0 : [], h = 0, g = t.length; g > h; h++) {
                var m = t[h];
                if ("M" == m[0]) n = a = m[1], r = l = m[2]; else {
                    "C" == m[0] ? (d = [n, r].concat(m.slice(1)), n = d[6], r = d[7]) : (d = [n, r, n, r, a, l, a, l], n = a, r = l);
                    for (var y = 0, _ = e.length; _ > y; y++) {
                        var x = e[y];
                        if ("M" == x[0]) o = c = x[1], s = u = x[2]; else {
                            "C" == x[0] ? (f = [o, s].concat(x.slice(1)), o = f[6], s = f[7]) : (f = [o, s, o, s, c, u, c, u], o = c, s = u);
                            var b = v(d, f, i);
                            if (i) p += b; else {
                                for (var w = 0, T = b.length; T > w; w++) b[w].segment1 = h, b[w].segment2 = y, b[w].bez1 = d, b[w].bez2 = f;
                                p = p.concat(b)
                            }
                        }
                    }
                }
            }
            return p
        }

        function _(t) {
            var e = r(t);
            if (e.bbox) return D(e.bbox);
            if (!t) return o();
            for (var i, n = 0, s = 0, a = [], l = [], c = 0, u = (t = A(t)).length; u > c; c++) if ("M" == (i = t[c])[0]) n = i[1], s = i[2], a.push(n), l.push(s); else {
                var d = C(n, s, i[1], i[2], i[3], i[4], i[5], i[6]);
                a = a.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), n = i[5], s = i[6]
            }
            var f = L.apply(0, a), p = L.apply(0, l), h = o(f, p, j.apply(0, a) - f, j.apply(0, l) - p);
            return e.bbox = D(h), h
        }

        function x(t, e, i, n, r) {
            if (r) return [["M", +t + +r, e], ["l", i - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, n - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - i, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - n], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
            var o = [["M", t, e], ["l", i, 0], ["l", 0, n], ["l", -i, 0], ["z"]];
            return o.toString = s, o
        }

        function b(t, e, i, n, r) {
            if (null == r && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != r) var o = Math.PI / 180,
                a = t + i * Math.cos(-n * o), l = t + i * Math.cos(-r * o),
                c = [["M", a, e + i * Math.sin(-n * o)], ["A", i, i, 0, +(r - n > 180), 0, l, e + i * Math.sin(-r * o)]]; else c = [["M", t, e], ["m", 0, -n], ["a", i, n, 0, 1, 1, 0, 2 * n], ["a", i, n, 0, 1, 1, 0, -2 * n], ["z"]];
            return c.toString = s, c
        }

        function w(e) {
            var i = r(e);
            if (i.abs) return a(i.abs);
            if (E(e, "array") && E(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
            var n, o = [], l = 0, c = 0, u = 0, d = 0, f = 0;
            "M" == e[0][0] && (u = l = +e[0][1], d = c = +e[0][2], f++, o[0] = ["M", l, c]);
            for (var p, h, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = f, v = e.length; v > m; m++) {
                if (o.push(p = []), (n = (h = e[m])[0]) != n.toUpperCase()) switch (p[0] = n.toUpperCase(), p[0]) {
                    case"A":
                        p[1] = h[1], p[2] = h[2], p[3] = h[3], p[4] = h[4], p[5] = h[5], p[6] = +h[6] + l, p[7] = +h[7] + c;
                        break;
                    case"V":
                        p[1] = +h[1] + c;
                        break;
                    case"H":
                        p[1] = +h[1] + l;
                        break;
                    case"R":
                        for (var y = [l, c].concat(h.slice(1)), _ = 2, x = y.length; x > _; _++) y[_] = +y[_] + l, y[++_] = +y[_] + c;
                        o.pop(), o = o.concat(P(y, g));
                        break;
                    case"O":
                        o.pop(), (y = b(l, c, h[1], h[2])).push(y[0]), o = o.concat(y);
                        break;
                    case"U":
                        o.pop(), o = o.concat(b(l, c, h[1], h[2], h[3])), p = ["U"].concat(o[o.length - 1].slice(-2));
                        break;
                    case"M":
                        u = +h[1] + l, d = +h[2] + c;
                    default:
                        for (_ = 1, x = h.length; x > _; _++) p[_] = +h[_] + (_ % 2 ? l : c)
                } else if ("R" == n) y = [l, c].concat(h.slice(1)), o.pop(), o = o.concat(P(y, g)), p = ["R"].concat(h.slice(-2)); else if ("O" == n) o.pop(), (y = b(l, c, h[1], h[2])).push(y[0]), o = o.concat(y); else if ("U" == n) o.pop(), o = o.concat(b(l, c, h[1], h[2], h[3])), p = ["U"].concat(o[o.length - 1].slice(-2)); else for (var w = 0, T = h.length; T > w; w++) p[w] = h[w];
                if ("O" != (n = n.toUpperCase())) switch (p[0]) {
                    case"Z":
                        l = +u, c = +d;
                        break;
                    case"H":
                        l = p[1];
                        break;
                    case"V":
                        c = p[1];
                        break;
                    case"M":
                        u = p[p.length - 2], d = p[p.length - 1];
                    default:
                        l = p[p.length - 2], c = p[p.length - 1]
                }
            }
            return o.toString = s, i.abs = a(o), o
        }

        function T(t, e, i, n) {
            return [t, e, i, n, i, n]
        }

        function S(t, e, i, n, r, o) {
            var s = 1 / 3, a = 2 / 3;
            return [s * t + a * i, s * e + a * n, s * r + a * i, s * o + a * n, r, o]
        }

        function k(e, i, n, r, o, s, a, l, c, u) {
            var d, f = 120 * R / 180, p = R / 180 * (+o || 0), h = [], g = t._.cacher(function (t, e, i) {
                return {x: t * N.cos(i) - e * N.sin(i), y: t * N.sin(i) + e * N.cos(i)}
            });
            if (!n || !r) return [e, i, l, c, l, c];
            if (u) S = u[0], C = u[1], w = u[2], T = u[3]; else {
                e = (d = g(e, i, -p)).x, i = d.y, l = (d = g(l, c, -p)).x, c = d.y;
                var m = (N.cos(R / 180 * o), N.sin(R / 180 * o), (e - l) / 2), v = (i - c) / 2,
                    y = m * m / (n * n) + v * v / (r * r);
                y > 1 && (n *= y = N.sqrt(y), r *= y);
                var _ = n * n, x = r * r,
                    b = (s == a ? -1 : 1) * N.sqrt(B((_ * x - _ * v * v - x * m * m) / (_ * v * v + x * m * m))),
                    w = b * n * v / r + (e + l) / 2, T = b * -r * m / n + (i + c) / 2,
                    S = N.asin(((i - T) / r).toFixed(9)), C = N.asin(((c - T) / r).toFixed(9));
                0 > (S = w > e ? R - S : S) && (S = 2 * R + S), 0 > (C = w > l ? R - C : C) && (C = 2 * R + C), a && S > C && (S -= 2 * R), !a && C > S && (C -= 2 * R)
            }
            var A = C - S;
            if (B(A) > f) {
                var P = C, F = l, E = c;
                C = S + f * (a && C > S ? 1 : -1), h = k(l = w + n * N.cos(C), c = T + r * N.sin(C), n, r, o, 0, a, F, E, [C, P, w, T])
            }
            A = C - S;
            var D = N.cos(S), O = N.sin(S), $ = N.cos(C), M = N.sin(C), L = N.tan(A / 4), j = 4 / 3 * n * L,
                z = 4 / 3 * r * L, q = [e, i], I = [e + j * O, i - z * D], H = [l + j * M, c - z * $], X = [l, c];
            if (I[0] = 2 * q[0] - I[0], I[1] = 2 * q[1] - I[1], u) return [I, H, X].concat(h);
            for (var W = [], U = 0, V = (h = [I, H, X].concat(h).join().split(",")).length; V > U; U++) W[U] = U % 2 ? g(h[U - 1], h[U], p).y : g(h[U], h[U + 1], p).x;
            return W
        }

        function C(t, e, i, n, r, o, s, a) {
            for (var l, c, u, d, f, p, h, g, m = [], v = [[], []], y = 0; 2 > y; ++y) if (0 == y ? (c = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * s, u = 3 * i - 3 * t) : (c = 6 * e - 12 * n + 6 * o, l = -3 * e + 9 * n - 9 * o + 3 * a, u = 3 * n - 3 * e), B(l) < 1e-12) {
                if (B(c) < 1e-12) continue;
                (d = -u / c) > 0 && 1 > d && m.push(d)
            } else h = c * c - 4 * u * l, g = N.sqrt(h), 0 > h || ((f = (-c + g) / (2 * l)) > 0 && 1 > f && m.push(f), (p = (-c - g) / (2 * l)) > 0 && 1 > p && m.push(p));
            for (var _, x = m.length, b = x; x--;) _ = 1 - (d = m[x]), v[0][x] = _ * _ * _ * t + 3 * _ * _ * d * i + 3 * _ * d * d * r + d * d * d * s, v[1][x] = _ * _ * _ * e + 3 * _ * _ * d * n + 3 * _ * d * d * o + d * d * d * a;
            return v[0][b] = t, v[1][b] = e, v[0][b + 1] = s, v[1][b + 1] = a, v[0].length = v[1].length = b + 2, {
                min: {
                    x: L.apply(0, v[0]),
                    y: L.apply(0, v[1])
                }, max: {x: j.apply(0, v[0]), y: j.apply(0, v[1])}
            }
        }

        function A(t, e) {
            var i = !e && r(t);
            if (!e && i.curve) return a(i.curve);
            for (var n = w(t), o = e && w(e), s = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, l = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, c = function (t, e, i) {
                var n, r;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"].concat(k.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case"S":
                        "C" == i || "S" == i ? (n = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (n = e.x, r = e.y), t = ["C", n, r].concat(t.slice(1));
                        break;
                    case"T":
                        "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(S(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(S(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                }
                return t
            }, u = function (t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var i = t[e]; i.length;) f[e] = "A", o && (p[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                    t.splice(e, 1), v = j(n.length, o && o.length || 0)
                }
            }, d = function (t, e, i, r, s) {
                t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], v = j(n.length, o && o.length || 0))
            }, f = [], p = [], h = "", g = "", m = 0, v = j(n.length, o && o.length || 0); v > m; m++) {
                n[m] && (h = n[m][0]), "C" != h && (f[m] = h, m && (g = f[m - 1])), n[m] = c(n[m], s, g), "A" != f[m] && "C" == h && (f[m] = "C"), u(n, m), o && (o[m] && (h = o[m][0]), "C" != h && (p[m] = h, m && (g = p[m - 1])), o[m] = c(o[m], l, g), "A" != p[m] && "C" == h && (p[m] = "C"), u(o, m)), d(n, o, s, l, m), d(o, n, l, s, m);
                var y = n[m], _ = o && o[m], x = y.length, b = o && _.length;
                s.x = y[x - 2], s.y = y[x - 1], s.bx = M(y[x - 4]) || s.x, s.by = M(y[x - 3]) || s.y, l.bx = o && (M(_[b - 4]) || l.x), l.by = o && (M(_[b - 3]) || l.y), l.x = o && _[b - 2], l.y = o && _[b - 1]
            }
            return o || (i.curve = a(n)), o ? [n, o] : n
        }

        function P(t, e) {
            for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2) {
                var o = [{x: +t[n - 2], y: +t[n - 1]}, {x: +t[n], y: +t[n + 1]}, {
                    x: +t[n + 2],
                    y: +t[n + 3]
                }, {x: +t[n + 4], y: +t[n + 5]}];
                e ? n ? r - 4 == n ? o[3] = {x: +t[0], y: +t[1]} : r - 2 == n && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {x: +t[2], y: +t[3]}) : o[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1]
                } : r - 4 == n ? o[3] = o[2] : n || (o[0] = {
                    x: +t[n],
                    y: +t[n + 1]
                }), i.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return i
        }

        var F = e.prototype, E = t.is, D = t._.clone, O = "hasOwnProperty", $ = /,?([a-z]),?/gi, M = parseFloat,
            N = Math, R = N.PI, L = N.min, j = N.max, z = N.pow, B = N.abs, q = c(1), I = c(), H = c(0, 1),
            X = t._unit2px, W = {
                path: function (t) {
                    return t.attr("path")
                }, circle: function (t) {
                    var e = X(t);
                    return b(e.cx, e.cy, e.r)
                }, ellipse: function (t) {
                    var e = X(t);
                    return b(e.cx || 0, e.cy || 0, e.rx, e.ry)
                }, rect: function (t) {
                    var e = X(t);
                    return x(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                }, image: function (t) {
                    var e = X(t);
                    return x(e.x || 0, e.y || 0, e.width, e.height)
                }, line: function (t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                }, polyline: function (t) {
                    return "M" + t.attr("points")
                }, polygon: function (t) {
                    return "M" + t.attr("points") + "z"
                }, deflt: function (t) {
                    var e = t.node.getBBox();
                    return x(e.x, e.y, e.width, e.height)
                }
            };
        t.path = r, t.path.getTotalLength = q, t.path.getPointAtLength = I, t.path.getSubpath = function (t, e, i) {
            if (this.getTotalLength(t) - i < 1e-6) return H(t, e).end;
            var n = H(t, i, 1);
            return e ? H(n, e).end : n
        }, F.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, F.getPointAtLength = function (t) {
            return I(this.attr("d"), t)
        }, F.getSubpath = function (e, i) {
            return t.path.getSubpath(this.attr("d"), e, i)
        }, t._.box = o, t.path.findDotsAtSegment = u, t.path.bezierBBox = d, t.path.isPointInsideBBox = f, t.closest = function (e, i, n, r) {
            for (var s = 100, a = o(e - s / 2, i - s / 2, s, s), l = [], c = n[0].hasOwnProperty("x") ? function (t) {
                return {x: n[t].x, y: n[t].y}
            } : function (t) {
                return {x: n[t], y: r[t]}
            }, u = 0; 1e6 >= s && !u;) {
                for (var d = 0, p = n.length; p > d; d++) {
                    var h = c(d);
                    if (f(a, h.x, h.y)) {
                        u++, l.push(h);
                        break
                    }
                }
                u || (a = o(e - (s *= 2) / 2, i - s / 2, s, s))
            }
            if (1e6 != s) {
                var g, m = 1 / 0;
                for (d = 0, p = l.length; p > d; d++) {
                    var v = t.len(e, i, l[d].x, l[d].y);
                    m > v && (m = v, l[d].len = v, g = l[d])
                }
                return g
            }
        }, t.path.isBBoxIntersect = p, t.path.intersection = function (t, e) {
            return y(t, e)
        }, t.path.intersectionNumber = function (t, e) {
            return y(t, e, 1)
        }, t.path.isPointInside = function (t, e, i) {
            var n = _(t);
            return f(n, e, i) && y(t, [["M", e, i], ["H", n.x2 + 10]], 1) % 2 == 1
        }, t.path.getBBox = _, t.path.get = W, t.path.toRelative = function (e) {
            var i = r(e), n = String.prototype.toLowerCase;
            if (i.rel) return a(i.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var o = [], l = 0, c = 0, u = 0, d = 0, f = 0;
            "M" == e[0][0] && (u = l = e[0][1], d = c = e[0][2], f++, o.push(["M", l, c]));
            for (var p = f, h = e.length; h > p; p++) {
                var g = o[p] = [], m = e[p];
                if (m[0] != n.call(m[0])) switch (g[0] = n.call(m[0]), g[0]) {
                    case"a":
                        g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - l).toFixed(3), g[7] = +(m[7] - c).toFixed(3);
                        break;
                    case"v":
                        g[1] = +(m[1] - c).toFixed(3);
                        break;
                    case"m":
                        u = m[1], d = m[2];
                    default:
                        for (var v = 1, y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? l : c)).toFixed(3)
                } else {
                    g = o[p] = [], "m" == m[0] && (u = m[1] + l, d = m[2] + c);
                    for (var _ = 0, x = m.length; x > _; _++) o[p][_] = m[_]
                }
                var b = o[p].length;
                switch (o[p][0]) {
                    case"z":
                        l = u, c = d;
                        break;
                    case"h":
                        l += +o[p][b - 1];
                        break;
                    case"v":
                        c += +o[p][b - 1];
                        break;
                    default:
                        l += +o[p][b - 2], c += +o[p][b - 1]
                }
            }
            return o.toString = s, i.rel = a(o), o
        }, t.path.toAbsolute = w, t.path.toCubic = A, t.path.map = function (t, e) {
            if (!e) return t;
            var i, n, r, o, s, a, l;
            for (r = 0, s = (t = A(t)).length; s > r; r++) for (o = 1, a = (l = t[r]).length; a > o; o += 2) i = e.x(l[o], l[o + 1]), n = e.y(l[o], l[o + 1]), l[o] = i, l[o + 1] = n;
            return t
        }, t.path.toString = s, t.path.clone = a
    }), n.plugin(function (t, n, r, o) {
        var s = Math.max, a = Math.min, l = function (t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t) for (var e = 0, i = t.length; i > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, c = l.prototype;
        c.push = function () {
            for (var t, e, i = 0, n = arguments.length; n > i; i++) (t = arguments[i]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
            return this
        }, c.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, c.forEach = function (t, e) {
            for (var i = 0, n = this.items.length; n > i; i++) if (!1 === t.call(e, this.items[i], i)) return this;
            return this
        }, c.animate = function (n, r, o, s) {
            "function" != typeof o || o.length || (s = o, o = i.linear), n instanceof t._.Animation && (s = n.callback, o = n.easing, r = o.dur, n = n.attr);
            var a = arguments;
            if (t.is(n, "array") && t.is(a[a.length - 1], "array")) var l = !0;
            var c, u = function () {
                c ? this.b = c : c = this.b
            }, d = 0, f = this, p = s && function () {
                ++d == f.length && s.call(this)
            };
            return this.forEach(function (t, i) {
                e.once("snap.animcreated." + t.id, u), l ? a[i] && t.animate.apply(t, a[i]) : t.animate(n, r, o, p)
            })
        }, c.remove = function () {
            for (; this.length;) this.pop().remove();
            return this
        }, c.bind = function (t, e, i) {
            var n = {};
            if ("function" == typeof e) this.bindings[t] = e; else {
                var r = i || t;
                this.bindings[t] = function (t) {
                    n[r] = t, e.attr(n)
                }
            }
            return this
        }, c.attr = function (t) {
            var e = {};
            for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
            for (var n = 0, r = this.items.length; r > n; n++) this.items[n].attr(e);
            return this
        }, c.clear = function () {
            for (; this.length;) this.pop()
        }, c.splice = function (t, e, i) {
            t = 0 > t ? s(this.length + t, 0) : t, e = s(0, a(this.length - t, e));
            var n, r = [], o = [], c = [];
            for (n = 2; n < arguments.length; n++) c.push(arguments[n]);
            for (n = 0; e > n; n++) o.push(this[t + n]);
            for (; n < this.length - t; n++) r.push(this[t + n]);
            var u = c.length;
            for (n = 0; n < u + r.length; n++) this.items[t + n] = this[t + n] = u > n ? c[n] : r[n - u];
            for (n = this.items.length = this.length -= e - u; this[n];) delete this[n++];
            return new l(o)
        }, c.exclude = function (t) {
            for (var e = 0, i = this.length; i > e; e++) if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, c.insertAfter = function (t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, c.getBBox = function () {
            for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;) if (!this.items[r].removed) {
                var o = this.items[r].getBBox();
                t.push(o.x), e.push(o.y), i.push(o.x + o.width), n.push(o.y + o.height)
            }
            return {
                x: t = a.apply(0, t),
                y: e = a.apply(0, e),
                x2: i = s.apply(0, i),
                y2: n = s.apply(0, n),
                width: i - t,
                height: n - e,
                cx: t + (i - t) / 2,
                cy: e + (n - e) / 2
            }
        }, c.clone = function (t) {
            t = new l;
            for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
            return t
        }, c.toString = function () {
            return "Snap‘s set"
        }, c.type = "set", t.Set = l, t.set = function () {
            var t = new l;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), n.plugin(function (t, i, n, r) {
        function o(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return [e, 0, 0];
                case"m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function s(e, i, n) {
            e = e || new t.Matrix, i = i || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], i = t.parseTransformString(i.toTransformString()) || [];
            for (var r, s, a, l, c = Math.max(e.length, i.length), u = [], p = [], h = 0; c > h; h++) {
                if (a = e[h] || o(i[h]), l = i[h] || o(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                    e = t._.transform2matrix(e, n()), i = t._.transform2matrix(i, n()), u = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], p = [["m", i.a, i.b, i.c, i.d, i.e, i.f]];
                    break
                }
                for (u[h] = [], p[h] = [], r = 0, s = Math.max(a.length, l.length); s > r; r++) r in a && (u[h][r] = a[r]), r in l && (p[h][r] = l[r])
            }
            return {from: f(u), to: f(p), f: d(u)}
        }

        function a(t) {
            return t
        }

        function l(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        function c(t) {
            return t.join(" ")
        }

        function u(e) {
            return t.rgb(e[0], e[1], e[2], e[3])
        }

        function d(t) {
            var e, i, n, r, o, s, a = 0, l = [];
            for (e = 0, i = t.length; i > e; e++) {
                for (o = "[", s = ['"' + t[e][0] + '"'], n = 1, r = t[e].length; r > n; n++) s[n] = "val[" + a++ + "]";
                o += s + "]", l[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }

        function f(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) for (var r = 1, o = t[i].length; o > r; r++) e.push(t[i][r]);
            return e
        }

        function p(t) {
            return isFinite(t)
        }

        var h = {}, g = /[%a-z]+$/i, m = String;
        h.stroke = h.fill = "colour", i.prototype.equal = function (t, i) {
            return e("snap.util.equal", this, t, i).firstDefined()
        }, e.on("snap.util.equal", function (e, i) {
            var n, r, o = m(this.attr(e) || ""), v = this;
            if ("colour" == h[e]) return n = t.color(o), r = t.color(i), {
                from: [n.r, n.g, n.b, n.opacity],
                to: [r.r, r.g, r.b, r.opacity],
                f: u
            };
            if ("viewBox" == e) return {
                from: n = this.attr(e).vb.split(" ").map(Number),
                to: r = i.split(" ").map(Number),
                f: c
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof i && (i = m(i).replace(/\.{3}|\u2026/g, o)), s(o = this.matrix, i = t._.rgTransform.test(i) ? t._.transform2matrix(i, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(i), this.getBBox()), function () {
                return v.getBBox(1)
            });
            if ("d" == e || "path" == e) return {from: f((n = t.path.toCubic(o, i))[0]), to: f(n[1]), f: d(n[0])};
            if ("points" == e) return {
                from: n = m(o).split(t._.separator),
                to: r = m(i).split(t._.separator),
                f: function (t) {
                    return t
                }
            };
            if (p(o) && p(i)) return {from: parseFloat(o), to: parseFloat(i), f: a};
            var y = o.match(g), _ = m(i).match(g);
            return y && function (e, i) {
                return !(!t.is(e, "array") || !t.is(i, "array")) && e.toString() == i.toString()
            }(y, _) ? {from: parseFloat(o), to: parseFloat(i), f: l(y)} : {
                from: this.asPX(e),
                to: this.asPX(e, i),
                f: a
            }
        })
    }), n.plugin(function (t, i, n, r) {
        for (var o = i.prototype, s = ("createTouch" in r.doc), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, c = function (t, e) {
            var i = "y" == t ? "scrollTop" : "scrollLeft", n = e && e.node ? e.node.ownerDocument : r.doc;
            return n[i in n.documentElement ? "documentElement" : "body"][i]
        }, u = function () {
            return this.originalEvent.preventDefault()
        }, d = function () {
            return this.originalEvent.stopPropagation()
        }, f = function (t, e, i, n) {
            var r = s && l[e] ? l[e] : e, o = function (r) {
                var o = c("y", n), a = c("x", n);
                if (s && l.hasOwnProperty(e)) for (var f = 0, p = r.targetTouches && r.targetTouches.length; p > f; f++) if (r.targetTouches[f].target == t || t.contains(r.targetTouches[f].target)) {
                    var h = r;
                    (r = r.targetTouches[f]).originalEvent = h, r.preventDefault = u, r.stopPropagation = d;
                    break
                }
                var g = r.clientX + a, m = r.clientY + o;
                return i.call(n, r, g, m)
            };
            return e !== r && t.addEventListener(e, o, !1), t.addEventListener(r, o, !1), function () {
                return e !== r && t.removeEventListener(e, o, !1), t.removeEventListener(r, o, !1), !0
            }
        }, p = [], h = function (t) {
            for (var i, n = t.clientX, r = t.clientY, o = c("y"), a = c("x"), l = p.length; l--;) {
                if (i = p[l], s) {
                    for (var u, d = t.touches && t.touches.length; d--;) if ((u = t.touches[d]).identifier == i.el._drag.id || i.el.node.contains(u.target)) {
                        n = u.clientX, r = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var f = i.el.node;
                f.nextSibling, f.parentNode, f.style.display, n += a, r += o, e("snap.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, r - i.el._drag.y, n, r, t)
            }
        }, g = function (i) {
            t.unmousemove(h).unmouseup(g);
            for (var n, r = p.length; r--;) (n = p[r]).el._drag = {}, e("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, i), e.off("snap.drag.*." + n.el.id);
            p = []
        }, m = a.length; m--;) !function (e) {
            t[e] = o[e] = function (i, n) {
                if (t.is(i, "function")) this.events = this.events || [], this.events.push({
                    name: e,
                    f: i,
                    unbind: f(this.node || document, e, i, n || this)
                }); else for (var r = 0, o = this.events.length; o > r; r++) if (this.events[r].name == e) try {
                    this.events[r].f.call(this)
                } catch (t) {
                }
                return this
            }, t["un" + e] = o["un" + e] = function (t) {
                for (var i = this.events || [], n = i.length; n--;) if (i[n].name == e && (i[n].f == t || !t)) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
                return this
            }
        }(a[m]);
        o.hover = function (t, e, i, n) {
            return this.mouseover(t, i).mouseout(e, n || i)
        }, o.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var v = [];
        o.drag = function (i, n, r, o, s, a) {
            function l(l, c, u) {
                (l.originalEvent || l).preventDefault(), d._drag.x = c, d._drag.y = u, d._drag.id = l.identifier, !p.length && t.mousemove(h).mouseup(g), p.push({
                    el: d,
                    move_scope: o,
                    start_scope: s,
                    end_scope: a
                }), n && e.on("snap.drag.start." + d.id, n), i && e.on("snap.drag.move." + d.id, i), r && e.on("snap.drag.end." + d.id, r), e("snap.drag.start." + d.id, s || o || d, c, u, l)
            }

            function c(t, i, n) {
                e("snap.draginit." + d.id, d, t, i, n)
            }

            var u, d = this;
            return arguments.length ? (e.on("snap.draginit." + d.id, l), d._drag = {}, v.push({
                el: d,
                start: l,
                init: c
            }), d.mousedown(c), d) : d.drag(function (t, e) {
                this.attr({transform: u + (u ? "T" : "t") + [t, e]})
            }, function () {
                u = this.transform().local
            })
        }, o.undrag = function () {
            for (var i = v.length; i--;) v[i].el == this && (this.unmousedown(v[i].init), v.splice(i, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
            return !v.length && t.unmousemove(h).unmouseup(g), this
        }
    }), n.plugin(function (t, i, n, r) {
        var o = (i.prototype, n.prototype), s = /^\s*url\((.+)\)/, a = String, l = t._.$;
        t.filter = {}, o.filter = function (e) {
            var n = this;
            "svg" != n.type && (n = n.paper);
            var r = t.parse(a(e)), o = t._.id(), s = (n.node.offsetWidth, n.node.offsetHeight, l("filter"));
            return l(s, {id: o, filterUnits: "userSpaceOnUse"}), s.appendChild(r.node), n.defs.appendChild(s), new i(s)
        }, e.on("snap.util.getattr.filter", function () {
            e.stop();
            var i = l(this.node, "filter");
            if (i) {
                var n = a(i).match(s);
                return n && t.select(n[1])
            }
        }), e.on("snap.util.attr.filter", function (n) {
            if (n instanceof i && "filter" == n.type) {
                e.stop();
                var r = n.node.id;
                r || (l(n.node, {id: n.id}), r = n.id), l(this.node, {filter: t.url(r)})
            }
            n && "none" != n || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function (e, i) {
            null == e && (e = 2);
            var n = null == i ? e : [e, i];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {def: n})
        }, t.filter.blur.toString = function () {
            return this()
        }, t.filter.shadow = function (e, i, n, r, o) {
            return null == o && (null == r ? (o = n, n = 4, r = "#000") : (o = r, r = n, n = 4)), null == n && (n = 4), null == o && (o = 1), null == e && (e = 0, i = 2), null == i && (i = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: r,
                dx: e,
                dy: i,
                blur: n,
                opacity: o
            })
        }, t.filter.shadow.toString = function () {
            return this()
        }, t.filter.grayscale = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function () {
            return this()
        }, t.filter.sepia = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function () {
            return this()
        }, t.filter.saturate = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - e})
        }, t.filter.saturate.toString = function () {
            return this()
        }, t.filter.hueRotate = function (e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: e})
        }, t.filter.hueRotate.toString = function () {
            return this()
        }, t.filter.invert = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function () {
            return this()
        }, t.filter.brightness = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: e})
        }, t.filter.brightness.toString = function () {
            return this()
        }, t.filter.contrast = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function () {
            return this()
        }
    }), n.plugin(function (t, e, i, n, r) {
        var o = t._.box, s = t.is, a = /^[^a-z]*([tbmlrc])/i, l = function () {
            return "T" + this.dx + "," + this.dy
        };
        e.prototype.getAlign = function (t, e) {
            null == e && s(t, "string") && (e = t, t = null);
            var i = (t = t || this.paper).getBBox ? t.getBBox() : o(t), n = this.getBBox(), r = {};
            switch (e = (e = e && e.match(a)) ? e[1].toLowerCase() : "c") {
                case"t":
                    r.dx = 0, r.dy = i.y - n.y;
                    break;
                case"b":
                    r.dx = 0, r.dy = i.y2 - n.y2;
                    break;
                case"m":
                    r.dx = 0, r.dy = i.cy - n.cy;
                    break;
                case"l":
                    r.dx = i.x - n.x, r.dy = 0;
                    break;
                case"r":
                    r.dx = i.x2 - n.x2, r.dy = 0;
                    break;
                default:
                    r.dx = i.cx - n.cx, r.dy = 0
            }
            return r.toString = l, r
        }, e.prototype.align = function (t, e) {
            return this.transform("..." + this.getAlign(t, e))
        }
    }), n.plugin(function (e, i, n, r) {
        function o(t) {
            t = t.split(/(?=#)/);
            var e = new String(t[5]);
            return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
        }

        e.mui = {}, e.flat = {}, e.mui.red = o("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = o("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = o("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = o("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = o("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = o("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = o("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = o("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = o("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = o("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = o("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = o("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = o("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = o("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = o("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = o("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = o("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = o("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = o("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function () {
            for (var i in e.mui) e.mui.hasOwnProperty(i) && (t[i] = e.mui[i])
        }
    }), n
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

function initMap() {
    let t = {lat: 50.4495953, lng: 30.4200102}, e = t, i = $(window).width();
    (i <= 1024 || i >= 768) && (e = {lat: 50.449657, lng: 30.410977}), $(window).width() < 768 && (e = {
        lat: 50.449736,
        lng: 30.419983
    });
    let n = {
        url: "../img/icon/marker.png",
        size: new google.maps.Size(48, 48),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 48)
    }, r = new google.maps.Map(document.getElementById("map"), {
        center: e,
        zoom: 15,
        disableDefaultUI: !0,
        scrollwheel: 1,
        zoomControl: 1
    });
    new google.maps.Marker({position: t, map: r, icon: n}).setMap(r)
}

function setScrollMagic(t, e, i) {
    new ScrollMagic.Scene({triggerElement: t, offset: e, reverse: !0}).setTween(i).addTo(new ScrollMagic.Controller)
}

function animateSVG(t, e, i, n) {
    var r = i;
    (e = Snap(t).select(e)).animate({d: r}, n, mina.linear)
}

function setScrollMagicWithHook(t, e, i) {
    new ScrollMagic.Scene({
        triggerElement: t,
        triggerHook: e,
        reverse: !0
    }).setTween(i).addTo(new ScrollMagic.Controller)
}

function validateEmail(t) {
    var e = $.trim(t);
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}

function animateType(t, e, i) {
    i = i, (e = Snap(t).select(e)).animate({d: i}, 500, mina.linear)
}

function changeSize(t, e, i) {
    $(t).attr({width: e, height: i})
}

function animateSVG(t, e, i, n) {
    var r = i;
    (e = Snap(t).select(e)).animate({d: r}, n, mina.linear)
}

function animateCss(t, e, i) {
    var n = document.querySelector(t);
    n.classList.add("animated", e), n.addEventListener("animationend", function t() {
        n.classList.remove("animated", e), n.removeEventListener("animationend", t), "function" == typeof i && i()
    })
}

function autoHeightAnimate(t, e) {
    var i = t.height(), n = t.css("height", "auto").height();
    t.height(i), t.stop().animate({height: n}, e)
}

function tabs(t) {
    var e = $(t), i = e.find(".tabs__list-item"), n = e.find(".tabs__content-item"),
        r = e.parent().parent().children(".service-image").children();
    $(i).click(function (t) {
        t.preventDefault();
        let e = $(this).data("tab"), o = $(this).data("image-desktop"), s = $(this).data("image-srcset");
        i.filter(function () {
            return $(this).data("tab") != e
        }).removeClass("active"), $(this).addClass("active"), r.fadeOut(function () {
            r.attr({src: o, srcset: s}).fadeIn()
        }), n.filter(function () {
            return $(this).data("id") != e
        }).fadeOut(300, function () {
            $(this).removeClass("active")
        }), n.filter(function () {
            return $(this).data("id") == e
        }).delay(0).fadeIn(300, function () {
            $(this).addClass("active")
        })
    })
}

function tabsType(t) {
    var e = $(t), i = e.find(".tabs__list-item"), n = e.find(".tabs__content-item");
    $(i).click(function (t) {
        t.preventDefault();
        var e = $(this).data("tab");
        i.filter(function () {
            return $(this).data("tab") != e
        }).removeClass("active"), $(this).addClass("active"), n.filter(function () {
            return $(this).data("id") != e
        }).fadeOut(300, function () {
            $(this).removeClass("active"), $(".tabs__content-item").children().slick("refresh")
        }), n.filter(function () {
            return $(this).data("id") == e
        }).delay(290).fadeIn(300, function () {
            $(this).addClass("active")
        })
    })
}

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t, e, i, n, r, o, s, a, l, c, u, d, f, p, h, g;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, r = function (t, e, i) {
            var n, r, o = t.cycle;
            for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i], e) : r[i % r.length];
            delete t.cycle
        }, o = function (t) {
            if ("function" == typeof t) return t;
            var e = "object" == typeof t ? t : {each: t}, i = e.ease, n = e.from || 0, r = e.base || 0, o = {},
                s = isNaN(n), a = e.axis, l = {center: .5, end: 1}[n] || 0;
            return function (t, c, u) {
                var d, f, p, h, g, m, v, y, _, x = (u || e).length, b = o[x];
                if (!b) {
                    if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                        for (v = -1 / 0; v < (v = u[_++].getBoundingClientRect().left) && x > _;) ;
                        _--
                    }
                    for (b = o[x] = [], d = s ? Math.min(_, x) * l - .5 : n % _, f = s ? x * l / _ - .5 : n / _ | 0, v = 0, y = 1 / 0, m = 0; x > m; m++) p = m % _ - d, h = f - (m / _ | 0), b[m] = g = a ? Math.abs("y" === a ? h : p) : Math.sqrt(p * p + h * h), g > v && (v = g), y > g && (y = g);
                    b.max = v - y, b.min = y, b.v = x = e.amount || e.each * (_ > x ? x : a ? "y" === a ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = 0 > x ? r - x : r
                }
                return x = (b[t] - b.min) / b.max, b.b + (i ? i.getRatio(x) : x) * b.v
            }
        }, s = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render
        }, a = 1e-8, l = i._internals, c = l.isSelector, u = l.isArray, d = s.prototype = i.to({}, .1, {}), f = [];
        s.version = "2.1.1", d.constructor = s, d.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, s.distribute = o, d.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
        }, d.updateTo = function (t, e) {
            var n, r = this, o = r.ratio, s = r.vars.immediateRender || t.immediateRender;
            for (n in e && r._startTime < r._timeline._time && (r._startTime = r._timeline._time, r._uncache(!1), r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay)), t) r.vars[n] = t[n];
            if (r._initted || s) if (e) r._initted = !1, s && r.render(0, !0, !0); else if (r._gc && r._enabled(!0, !1), r._notifyPluginsOfEnabled && r._firstPT && i._onPluginEvent("_onDisable", r), r._time / r._duration > .998) {
                var a = r._totalTime;
                r.render(0, !0, !1), r._initted = !1, r.render(a, !0, !1)
            } else if (r._initted = !1, r._init(), r._time > 0 || s) for (var l, c = 1 / (1 - o), u = r._firstPT; u;) l = u.s + u.c, u.c *= c, u.s = l - u.c, u = u._next;
            return r
        }, d.render = function (t, e, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, o, s, c, u, d, f, p, h, g = this, m = g._dirty ? g.totalDuration() : g._totalDuration, v = g._time,
                y = g._totalTime, _ = g._cycle, x = g._duration, b = g._rawPrevTime;
            if (t >= m - a && t >= 0 ? (g._totalTime = m, g._cycle = g._repeat, g._yoyo && 0 != (1 & g._cycle) ? (g._time = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0) : (g._time = x, g.ratio = g._ease._calcEnd ? g._ease.getRatio(1) : 1), g._reversed || (r = !0, o = "onComplete", n = n || g._timeline.autoRemoveChildren), 0 === x && (g._initted || !g.vars.lazy || n) && (g._startTime === g._timeline._duration && (t = 0), (0 > b || 0 >= t && t >= -a || b === a && "isPause" !== g.data) && b !== t && (n = !0, b > a && (o = "onReverseComplete")), g._rawPrevTime = p = !e || t || b === t ? t : a)) : a > t ? (g._totalTime = g._time = g._cycle = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0, (0 !== y || 0 === x && b > 0) && (o = "onReverseComplete", r = g._reversed), t > -a ? t = 0 : 0 > t && (g._active = !1, 0 === x && (g._initted || !g.vars.lazy || n) && (b >= 0 && (n = !0), g._rawPrevTime = p = !e || t || b === t ? t : a)), g._initted || (n = !0)) : (g._totalTime = g._time = t, 0 !== g._repeat && (c = x + g._repeatDelay, g._cycle = g._totalTime / c >> 0, 0 !== g._cycle && g._cycle === g._totalTime / c && t >= y && g._cycle--, g._time = g._totalTime - g._cycle * c, g._yoyo && 0 != (1 & g._cycle) && (g._time = x - g._time, (h = g._yoyoEase || g.vars.yoyoEase) && (g._yoyoEase || (!0 !== h || g._initted ? g._yoyoEase = h = !0 === h ? g._ease : h instanceof Ease ? h : Ease.map[h] : (h = g.vars.ease, g._yoyoEase = h = h ? h instanceof Ease ? h : "function" == typeof h ? new Ease(h, g.vars.easeParams) : Ease.map[h] || i.defaultEase : i.defaultEase)), g.ratio = h ? 1 - h.getRatio((x - g._time) / x) : 0)), g._time > x ? g._time = x : g._time < 0 && (g._time = 0)), g._easeType && !h ? (u = g._time / x, (1 === (d = g._easeType) || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === (f = g._easePower) ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), g.ratio = 1 === d ? 1 - u : 2 === d ? u : g._time / x < .5 ? u / 2 : 1 - u / 2) : h || (g.ratio = g._ease.getRatio(g._time / x))), v !== g._time || n || _ !== g._cycle) {
                if (!g._initted) {
                    if (g._init(), !g._initted || g._gc) return;
                    if (!n && g._firstPT && (!1 !== g.vars.lazy && g._duration || g.vars.lazy && !g._duration)) return g._time = v, g._totalTime = y, g._rawPrevTime = b, g._cycle = _, l.lazyTweens.push(g), void (g._lazy = [t, e]);
                    !g._time || r || h ? r && this._ease._calcEnd && !h && (g.ratio = g._ease.getRatio(0 === g._time ? 0 : 1)) : g.ratio = g._ease.getRatio(g._time / x)
                }
                for (!1 !== g._lazy && (g._lazy = !1), g._active || !g._paused && g._time !== v && t >= 0 && (g._active = !0), 0 === y && (2 === g._initted && t > 0 && g._init(), g._startAt && (t >= 0 ? g._startAt.render(t, !0, n) : o || (o = "_dummyGS")), g.vars.onStart && (0 !== g._totalTime || 0 === x) && (e || g._callback("onStart"))), s = g._firstPT; s;) s.f ? s.t[s.p](s.c * g.ratio + s.s) : s.t[s.p] = s.c * g.ratio + s.s, s = s._next;
                g._onUpdate && (0 > t && g._startAt && g._startTime && g._startAt.render(t, !0, n), e || (g._totalTime !== y || o) && g._callback("onUpdate")), g._cycle !== _ && (e || g._gc || g.vars.onRepeat && g._callback("onRepeat")), o && (!g._gc || n) && (0 > t && g._startAt && !g._onUpdate && g._startTime && g._startAt.render(t, !0, n), r && (g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !e && g.vars[o] && g._callback(o), 0 === x && g._rawPrevTime === a && p !== a && (g._rawPrevTime = 0))
            } else y !== g._totalTime && g._onUpdate && (e || g._callback("onUpdate"))
        }, s.to = function (t, e, i) {
            return new s(t, e, i)
        }, s.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
        }, s.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
        }, s.staggerTo = s.allTo = function (t, e, a, l, d, p, h) {
            var g, m, v, y, _ = [], x = o(a.stagger || l), b = a.cycle, w = (a.startAt || f).cycle;
            for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), c(t) && (t = n(t))), g = (t = t || []).length - 1, v = 0; g >= v; v++) {
                for (y in m = {}, a) m[y] = a[y];
                if (b && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), w) {
                    for (y in w = m.startAt = {}, a.startAt) w[y] = a.startAt[y];
                    r(m.startAt, t, v)
                }
                m.delay = x(v, t[v], t) + (m.delay || 0), v === g && d && (m.onComplete = function () {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), d.apply(h || a.callbackScope || this, p || f)
                }), _[v] = new s(t[v], e, m)
            }
            return _
        }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
        }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
        }, s.delayedCall = function (t, e, i, n, r) {
            return new s(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, s.set = function (t, e) {
            return new s(t, 0, e)
        }, s.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var p = function (t, e) {
            for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), r = (n = n.concat(p(o, e))).length), o = o._next;
            return n
        }, h = s.getAllTweens = function (e) {
            return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
        };
        s.killAll = function (t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var o, s, a, l = h(0 != r), c = l.length, u = i && n && r;
            for (a = 0; c > a; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, s.killChildTweensOf = function (t, e) {
            if (null != t) {
                var r, o, a, d, f, p = l.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), c(t) && (t = n(t)), u(t)) for (d = t.length; --d > -1;) s.killChildTweensOf(t[d], e); else {
                    for (a in r = [], p) for (o = p[a].target.parentNode; o;) o === t && (r = r.concat(p[a].tweens)), o = o.parentNode;
                    for (f = r.length, d = 0; f > d; d++) e && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
                }
            }
        };
        var g = function (t, i, n, r) {
            i = !1 !== i, n = !1 !== n;
            for (var o, s, a = h(r = !1 !== r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
        };
        return s.pauseAll = function (t, e, i) {
            g(!0, t, e, i)
        }, s.resumeAll = function (t, e, i) {
            g(!1, t, e, i)
        }, s.globalTimeScale = function (e) {
            var n = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || a, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, d.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, d.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, d.time = function (t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration, n = this._cycle, r = n * (i + this._repeatDelay);
            return t > i && (t = i), this.totalTime(this._yoyo && 1 & n ? i - t + r : this._repeat ? t + r : t, e)
        }, d.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, d.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, d.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, d.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, d.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, s
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
                e.call(this, t);
                var i, n, r = this, o = r.vars;
                for (n in r._labels = {}, r.autoRemoveChildren = !!o.autoRemoveChildren, r.smoothChildTiming = !!o.smoothChildTiming, r._sortChildren = !0, r._onUpdate = o.onUpdate, o) i = o[n], l(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = r._swapSelfInParams(i));
                l(o.tweens) && r.add(o.tweens, 0, o.align, o.stagger)
            }, r = 1e-8, o = i._internals, s = n._internals = {}, a = o.isSelector, l = o.isArray, c = o.lazyTweens,
            u = o.lazyRender, d = _gsScope._gsDefine.globals, f = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }, p = function (t, e, i) {
                var n, r, o = t.cycle;
                for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i], e) : r[i % r.length];
                delete t.cycle
            }, h = s.pauseCallback = function () {
            }, g = function (t, e, i, n) {
                var r = "immediateRender";
                return r in e || (e[r] = !(t._paused || i && !1 === i[r] || n)), e
            }, m = function (t) {
                if ("function" == typeof t) return t;
                var e = "object" == typeof t ? t : {each: t}, i = e.ease, n = e.from || 0, r = e.base || 0, o = {},
                    s = isNaN(n), a = e.axis, l = {center: .5, end: 1}[n] || 0;
                return function (t, c, u) {
                    var d, f, p, h, g, m, v, y, _, x = (u || e).length, b = o[x];
                    if (!b) {
                        if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                            for (v = -1 / 0; v < (v = u[_++].getBoundingClientRect().left) && x > _;) ;
                            _--
                        }
                        for (b = o[x] = [], d = s ? Math.min(_, x) * l - .5 : n % _, f = s ? x * l / _ - .5 : n / _ | 0, v = 0, y = 1 / 0, m = 0; x > m; m++) p = m % _ - d, h = f - (m / _ | 0), b[m] = g = a ? Math.abs("y" === a ? h : p) : Math.sqrt(p * p + h * h), g > v && (v = g), y > g && (y = g);
                        b.max = v - y, b.min = y, b.v = x = e.amount || e.each * (_ > x ? x : a ? "y" === a ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = 0 > x ? r - x : r
                    }
                    return x = (b[t] - b.min) / b.max, b.b + (i ? i.getRatio(x) : x) * b.v
                }
            }, v = n.prototype = new e;
        return n.version = "2.1.1", n.distribute = m, v.constructor = n, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function (t, e, n, r) {
            var o = n.repeat && d.TweenMax || i;
            return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
        }, v.from = function (t, e, n, r) {
            return this.add((n.repeat && d.TweenMax || i).from(t, e, g(this, n)), r)
        }, v.fromTo = function (t, e, n, r, o) {
            var s = r.repeat && d.TweenMax || i;
            return r = g(this, r, n), e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
        }, v.staggerTo = function (t, e, r, o, s, l, c, u) {
            var d, h, g = new n({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: u,
                smoothChildTiming: this.smoothChildTiming
            }), v = m(r.stagger || o), y = r.startAt, _ = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }(t)), h = 0; h < t.length; h++) d = f(r), y && (d.startAt = f(y), y.cycle && p(d.startAt, t, h)), _ && (p(d, t, h), null != d.duration && (e = d.duration, delete d.duration)), g.to(t[h], e, d, v(h, t[h], t));
            return this.add(g, s)
        }, v.staggerFrom = function (t, e, i, n, r, o, s, a) {
            return i.runBackwards = !0, this.staggerTo(t, e, g(this, i), n, r, o, s, a)
        }, v.staggerFromTo = function (t, e, i, n, r, o, s, a, l) {
            return n.startAt = i, this.staggerTo(t, e, g(this, n, i), r, o, s, a, l)
        }, v.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, v.set = function (t, e, n) {
            return this.add(new i(t, 0, g(this, e, null, !0)), n)
        }, n.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var r, o, s, a, l = new n(t), c = l._timeline;
            for (null == e && (e = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, s = c._first; s;) a = s._next, e && s instanceof i && s.target === s.vars.onComplete || (0 > (o = s._startTime - s._delay) && (r = 1), l.add(s, o)), s = a;
            return c.add(l, 0), r && l.totalDuration(), l
        }, v.add = function (r, o, s, a) {
            var c, u, d, f, p, h, g = this;
            if ("number" != typeof o && (o = g._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (s = s || "normal", a = a || 0, c = o, u = r.length, d = 0; u > d; d++) l(f = r[d]) && (f = new n({tweens: f})), g.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += a;
                    return g._uncache(!0)
                }
                if ("string" == typeof r) return g.addLabel(r, o);
                if ("function" != typeof r) throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(g, r, o), (r._time || !r._duration && r._initted) && (c = (g.rawTime() - r._startTime) * r._timeScale, (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), c))) - r._totalTime > 1e-5) && r.render(c, !1, !1)), (g._gc || g._time === g._duration) && !g._paused && g._duration < g.duration()) for (h = (p = g).rawTime() > r._startTime; p._timeline;) h && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return g
        }, v.remove = function (e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1;) this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, v._remove = function (t, i) {
            return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, v.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, v.insert = v.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, v.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, v.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, v.addPause = function (t, e, n, r) {
            var o = i.delayedCall(0, h, n, r || this);
            return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
        }, v.removeLabel = function (t) {
            return delete this._labels[t], this
        }, v.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, v._parseTimeOrLabel = function (e, i, n, r) {
            var o, s;
            if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && l(r))) for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
            if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o); else {
                if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : o
            }
            return Number(e) + i
        }, v.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, v.stop = function () {
            return this.paused(!0)
        }, v.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, v.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, v.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, s, a, l, d, f, p, h = this, g = h._time, m = h._dirty ? h.totalDuration() : h._totalDuration,
                v = h._startTime, y = h._timeScale, _ = h._paused;
            if (g !== h._time && (t += h._time - g), t >= m - r && t >= 0) h._totalTime = h._time = m, h._reversed || h._hasPausedChild() || (o = !0, a = "onComplete", l = !!h._timeline.autoRemoveChildren, 0 === h._duration && (0 >= t && t >= -r || h._rawPrevTime < 0 || h._rawPrevTime === r) && h._rawPrevTime !== t && h._first && (l = !0, h._rawPrevTime > r && (a = "onReverseComplete"))), h._rawPrevTime = h._duration || !e || t || h._rawPrevTime === t ? t : r, t = m + 1e-4; else if (r > t) if (h._totalTime = h._time = 0, t > -r && (t = 0), (0 !== g || 0 === h._duration && h._rawPrevTime !== r && (h._rawPrevTime > 0 || 0 > t && h._rawPrevTime >= 0)) && (a = "onReverseComplete", o = h._reversed), 0 > t) h._active = !1, h._timeline.autoRemoveChildren && h._reversed ? (l = o = !0, a = "onReverseComplete") : h._rawPrevTime >= 0 && h._first && (l = !0), h._rawPrevTime = t; else {
                if (h._rawPrevTime = h._duration || !e || t || h._rawPrevTime === t ? t : r, 0 === t && o) for (n = h._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                t = 0, h._initted || (l = !0)
            } else {
                if (h._hasPause && !h._forcingPlayhead && !e) {
                    if (t >= g) for (n = h._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === h._rawPrevTime || (d = n), n = n._next; else for (n = h._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                    d && (h._time = h._totalTime = t = d._startTime, p = h._startTime + t / h._timeScale)
                }
                h._totalTime = h._time = h._rawPrevTime = t
            }
            if (h._time !== g && h._first || i || l || d) {
                if (h._initted || (h._initted = !0), h._active || !h._paused && h._time !== g && t > 0 && (h._active = !0), 0 === g && h.vars.onStart && (0 === h._time && h._duration || e || h._callback("onStart")), (f = h._time) >= g) for (n = h._first; n && (s = n._next, f === h._time && (!h._paused || _));) (n._active || n._startTime <= f && !n._paused && !n._gc) && (d === n && (h.pause(), h._pauseTime = p), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = h._last; n && (s = n._prev, f === h._time && (!h._paused || _));) {
                    if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                        if (d === n) {
                            for (d = n._prev; d && d.endTime() > h._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                            d = null, h.pause(), h._pauseTime = p
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                    }
                    n = s
                }
                h._onUpdate && (e || (c.length && u(), h._callback("onUpdate"))), a && (h._gc || (v === h._startTime || y !== h._timeScale) && (0 === h._time || m >= h.totalDuration()) && (o && (c.length && u(), h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !e && h.vars[a] && h._callback(a)))
            }
        }, v._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, v.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (a = (o = o.concat(s.getChildren(!0, e, n))).length))), s = s._next;
            return o
        }, v.getTweensOf = function (t, e) {
            var n, r, o = this._gc, s = [], a = 0;
            for (o && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1;) (n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
            return o && this._enabled(!1, !0), s
        }, v.recent = function () {
            return this._recent
        }, v._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, v.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (n in o) o[n] >= i && (o[n] += t);
            return this._uncache(!0)
        }, v._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
            return r
        }, v.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, v.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, v._enabled = function (t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, v.totalTime = function (e, i, n) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, v.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, v.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this, o = r._last, s = 999999999999; o;) e = o._prev, o._dirty && o.totalDuration(), o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(o, o._startTime - o._delay), r._calculatingDuration = 0) : s = o._startTime, o._startTime < 0 && !o._paused && (n -= o._startTime, r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale, r._time -= o._startTime, r._totalTime -= o._startTime, r._rawPrevTime -= o._startTime), r.shiftChildren(-o._startTime, !1, -9999999999), s = 0), (i = o._startTime + o._totalDuration / o._timeScale) > n && (n = i), o = e;
                    r._duration = r._totalDuration = n, r._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, v.paused = function (e) {
            if (!1 === e && this._paused) for (var i = this._first; i;) i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, v.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, v.rawTime = function (t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
            }, r = 1e-8, o = e._internals, s = o.lazyTweens, a = o.lazyRender, l = _gsScope._gsDefine.globals,
            c = new i(null, null, 1, 0), u = n.prototype = new t;
        return u.constructor = n, u.kill()._gc = !1, n.version = "2.1.1", u.invalidate = function () {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, u.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, u.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, u.tweenTo = function (t, i) {
            i = i || {};
            var n, r, o, s = {ease: c, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1},
                a = i.repeat && l.TweenMax || e;
            for (r in i) s[r] = i[r];
            return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function () {
                o.target.paused(!0), o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
            }, o
        }, u.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, l, c, u, d, f, p, h, g = this, m = g._time, v = g._dirty ? g.totalDuration() : g._totalDuration,
                y = g._duration, _ = g._totalTime, x = g._startTime, b = g._timeScale, w = g._rawPrevTime,
                T = g._paused, S = g._cycle;
            if (m !== g._time && (t += g._time - m), t >= v - r && t >= 0) g._locked || (g._totalTime = v, g._cycle = g._repeat), g._reversed || g._hasPausedChild() || (o = !0, c = "onComplete", u = !!g._timeline.autoRemoveChildren, 0 === g._duration && (0 >= t && t >= -r || 0 > w || w === r) && w !== t && g._first && (u = !0, w > r && (c = "onReverseComplete"))), g._rawPrevTime = g._duration || !e || t || g._rawPrevTime === t ? t : r, g._yoyo && 1 & g._cycle ? g._time = t = 0 : (g._time = y, t = y + 1e-4); else if (r > t) if (g._locked || (g._totalTime = g._cycle = 0), g._time = 0, t > -r && (t = 0), (0 !== m || 0 === y && w !== r && (w > 0 || 0 > t && w >= 0) && !g._locked) && (c = "onReverseComplete", o = g._reversed), 0 > t) g._active = !1, g._timeline.autoRemoveChildren && g._reversed ? (u = o = !0, c = "onReverseComplete") : w >= 0 && g._first && (u = !0), g._rawPrevTime = t; else {
                if (g._rawPrevTime = y || !e || t || g._rawPrevTime === t ? t : r, 0 === t && o) for (n = g._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                t = 0, g._initted || (u = !0)
            } else if (0 === y && 0 > w && (u = !0), g._time = g._rawPrevTime = t, g._locked || (g._totalTime = t, 0 !== g._repeat && (d = y + g._repeatDelay, g._cycle = g._totalTime / d >> 0, g._cycle && g._cycle === g._totalTime / d && t >= _ && g._cycle--, g._time = g._totalTime - g._cycle * d, g._yoyo && 1 & g._cycle && (g._time = y - g._time), g._time > y ? (g._time = y, t = y + 1e-4) : g._time < 0 ? g._time = t = 0 : t = g._time)), g._hasPause && !g._forcingPlayhead && !e) {
                if ((t = g._time) >= m || g._repeat && S !== g._cycle) for (n = g._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === g._rawPrevTime || (f = n), n = n._next; else for (n = g._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                f && (h = g._startTime + f._startTime / g._timeScale, f._startTime < y && (g._time = g._rawPrevTime = t = f._startTime, g._totalTime = t + g._cycle * (g._totalDuration + g._repeatDelay)))
            }
            if (g._cycle !== S && !g._locked) {
                var k = g._yoyo && 0 != (1 & S), C = k === (g._yoyo && 0 != (1 & g._cycle)), A = g._totalTime,
                    P = g._cycle, F = g._rawPrevTime, E = g._time;
                if (g._totalTime = S * y, g._cycle < S ? k = !k : g._totalTime += y, g._time = m, g._rawPrevTime = 0 === y ? w - 1e-4 : w, g._cycle = S, g._locked = !0, m = k ? 0 : y, g.render(m, e, 0 === y), e || g._gc || g.vars.onRepeat && (g._cycle = P, g._locked = !1, g._callback("onRepeat")), m !== g._time) return;
                if (C && (g._cycle = S, g._locked = !0, m = k ? y + 1e-4 : -1e-4, g.render(m, !0, !1)), g._locked = !1, g._paused && !T) return;
                g._time = E, g._totalTime = A, g._cycle = P, g._rawPrevTime = F
            }
            if (g._time !== m && g._first || i || u || f) {
                if (g._initted || (g._initted = !0), g._active || !g._paused && g._totalTime !== _ && t > 0 && (g._active = !0), 0 === _ && g.vars.onStart && (0 === g._totalTime && g._totalDuration || e || g._callback("onStart")), (p = g._time) >= m) for (n = g._first; n && (l = n._next, p === g._time && (!g._paused || T));) (n._active || n._startTime <= g._time && !n._paused && !n._gc) && (f === n && (g.pause(), g._pauseTime = h), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l; else for (n = g._last; n && (l = n._prev, p === g._time && (!g._paused || T));) {
                    if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                        if (f === n) {
                            for (f = n._prev; f && f.endTime() > g._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                            f = null, g.pause(), g._pauseTime = h
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                    }
                    n = l
                }
                g._onUpdate && (e || (s.length && a(), g._callback("onUpdate"))), c && (g._locked || g._gc || (x === g._startTime || b !== g._timeScale) && (0 === g._time || v >= g.totalDuration()) && (o && (s.length && a(), g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !e && g.vars[c] && g._callback(c)))
            } else _ !== g._totalTime && g._onUpdate && (e || g._callback("onUpdate"))
        }, u.getActive = function (t, e, i) {
            var n, r, o = [], s = this.getChildren(t || null == t, e || null == t, !!i), a = 0, l = s.length;
            for (n = 0; l > n; n++) (r = s[n]).isActive() && (o[a++] = r);
            return o
        }, u.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null
        }, u.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        }, u.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, u.invalidate = function () {
            return this._locked = !1, t.prototype.invalidate.call(this)
        }, u.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }, u.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }, u.totalDuration = function (e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration, n = this._cycle, r = n * (i + this._repeatDelay);
            return t > i && (t = i), this.totalTime(this._yoyo && 1 & n ? i - t + r : this._repeat ? t + r : t, e)
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, u.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + r)
        }, n
    }, !0), t = 180 / Math.PI, e = [], i = [], n = [], r = {}, o = _gsScope._gsDefine.globals, s = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
    }, a = function (t, e, i, n) {
        var r = {a: t}, o = {}, s = {}, a = {c: n}, l = (t + e) / 2, c = (e + i) / 2, u = (i + n) / 2, d = (l + c) / 2,
            f = (c + u) / 2, p = (f - d) / 8;
        return r.b = l + (t - l) / 4, o.b = d + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (d + f) / 2, s.b = f - p, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
    }, l = function (t, r, o, s, l) {
        var c, u, d, f, p, h, g, m, v, y, _, x, b, w = t.length - 1, T = 0, S = t[0].a;
        for (c = 0; w > c; c++) u = (p = t[T]).a, d = p.d, f = t[T + 1].d, l ? (_ = e[c], b = ((x = i[c]) + _) * r * .25 / (s ? .5 : n[c] || .5), m = d - ((h = d - (d - u) * (s ? .5 * r : 0 !== _ ? b / _ : 0)) + (((g = d + (f - d) * (s ? .5 * r : 0 !== x ? b / x : 0)) - h) * (3 * _ / (_ + x) + .5) / 4 || 0))) : m = d - ((h = d - (d - u) * r * .5) + (g = d + (f - d) * r * .5)) / 2, h += m, g += m, p.c = v = h, p.b = 0 !== c ? S : S = p.a + .6 * (p.c - p.a), p.da = d - u, p.ca = v - u, p.ba = S - u, o ? (y = a(u, S, v, d), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = g;
        (p = t[T]).b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, o && (y = a(p.a, S, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
    }, c = function (t, n, r, o) {
        var a, l, c, u, d, f, p = [];
        if (o) for (l = (t = [o].concat(t)).length; --l > -1;) "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
        if (0 > (a = t.length - 2)) return p[0] = new s(t[0][n], 0, 0, t[0][n]), p;
        for (l = 0; a > l; l++) c = t[l][n], u = t[l + 1][n], p[l] = new s(c, 0, 0, u), r && (d = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (d - u) * (d - u));
        return p[l] = new s(t[l][n], 0, 0, t[l + 1][n]), p
    }, u = function (t, o, s, a, u, d) {
        var f, p, h, g, m, v, y, _, x = {}, b = [], w = d || t[0];
        for (p in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1), t[0]) b.push(p);
        if (t.length > 1) {
            for (_ = t[t.length - 1], y = !0, f = b.length; --f > -1;) if (p = b[f], Math.abs(w[p] - _[p]) > .05) {
                y = !1;
                break
            }
            y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
        }
        for (e.length = i.length = n.length = 0, f = b.length; --f > -1;) p = b[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = c(t, p, r[p], d);
        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
        if (!a) {
            for (f = b.length; --f > -1;) if (r[p]) for (v = (h = x[b[f]]).length - 1, g = 0; v > g; g++) m = h[g + 1].da / i[g] + h[g].da / e[g] || 0, n[g] = (n[g] || 0) + m * m;
            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
        }
        for (f = b.length, g = s ? 4 : 1; --f > -1;) h = x[p = b[f]], l(h, o, s, a, r[p]), y && (h.splice(0, g), h.splice(h.length - g, g));
        return x
    }, d = function (t, e, i) {
        var n, r, o, a, l, c, u, d, f, p, h, g = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, v = "soft" === e,
            y = [];
        if (v && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw"invalid Bezier data";
        for (f in t[0]) y.push(f);
        for (c = y.length; --c > -1;) {
            for (g[f = y[c]] = l = [], p = 0, d = t.length, u = 0; d > u; u++) n = null == i ? t[u][f] : "string" == typeof (h = t[u][f]) && "=" === h.charAt(1) ? i[f] + Number(h.charAt(0) + h.substr(2)) : Number(h), v && u > 1 && d - 1 > u && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
            for (d = p - m + 1, p = 0, u = 0; d > u; u += m) n = l[u], r = l[u + 1], o = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[p++] = h = 3 === m ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
            l.length = p
        }
        return g
    }, f = function (t, e, i) {
        for (var n, r, o, s, a, l, c, u, d, f, p, h = 1 / i, g = t.length; --g > -1;) for (o = (f = t[g]).a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) n = r - (r = ((c = h * u) * c * s + 3 * (d = 1 - c) * (c * a + d * l)) * c), e[p = g * i + u - 1] = (e[p] || 0) + n * n
    }, p = function (t, e) {
        var i, n, r, o, s = [], a = [], l = 0, c = 0, u = (e = e >> 0 || 6) - 1, d = [], p = [];
        for (i in t) f(t[i], s, e);
        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), p[o = n % e] = l, o === u && (c += l, d[o = n / e >> 0] = p, a[o] = c, l = 0, p = []);
        return {length: c, lengths: a, segments: d}
    }, g = (h = _gsScope._gsDefine.plugin({
        propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function (t, e, i) {
            this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, r, o, s, a, l = e.values || [], c = {}, f = l[0], h = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = h ? h instanceof Array ? h : [["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]] : null, f) this._props.push(n);
            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                var g = p(this._beziers, this._timeRes);
                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (h = this._autoRotate) for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; --o > -1;) {
                for (s = 0; 3 > s; s++) n = h[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                n = h[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
            }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        }, set: function (e) {
            var i, n, r, o, s, a, l, c, u, d, f = this._segCount, p = this._func, h = this._target,
                g = e !== this._startRatio;
            if (this._timeRes) {
                if (u = this._lengths, d = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                    for (c = f - 1; c > r && (this._l2 = u[++r]) <= e;) ;
                    this._l1 = u[r - 1], this._li = r, this._curSeg = d = this._segments[r], this._s2 = d[this._s1 = this._si = 0]
                } else if (e < this._l1 && r > 0) {
                    for (; r > 0 && (this._l1 = u[--r]) >= e;) ;
                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = d = this._segments[r], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                }
                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < d.length - 1) {
                    for (c = d.length - 1; c > r && (this._s2 = d[++r]) <= e;) ;
                    this._s1 = d[r - 1], this._si = r
                } else if (e < this._s1 && r > 0) {
                    for (; r > 0 && (this._s1 = d[--r]) >= e;) ;
                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = d[r], this._si = r
                }
                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else a = (e - (i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], l = (a * a * (s = this._beziers[o][i]).da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, h)), p[o] ? h[o](l) : h[o] = l;
            if (this._autoRotate) {
                var m, v, y, _, x, b, w, T = this._autoRotate;
                for (r = T.length; --r > -1;) o = T[r][2], b = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, s = this._beziers[T[r][0]], m = this._beziers[T[r][1]], s && m && (s = s[i], m = m[i], v = s.a + (s.b - s.a) * a, v += ((_ = s.b + (s.c - s.b) * a) - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = m.a + (m.b - m.a) * a, y += ((x = m.b + (m.c - m.b) * a) - y) * a, x += (m.c + (m.d - m.c) * a - x) * a, l = g ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, h)), p[o] ? h[o](l) : h[o] = l)
            }
        }
    })).prototype, h.bezierThrough = u, h.cubicToQuadratic = a, h._autoCSS = !0, h.quadraticToCubic = function (t, e, i) {
        return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
    }, h._cssRegister = function () {
        var t = o.CSSPlugin;
        if (t) {
            var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function (t, e, o, s, a, l) {
                    e instanceof Array && (e = {values: e}), l = new h;
                    var c, u, d, f = e.values, p = f.length - 1, g = [], m = {};
                    if (0 > p) return a;
                    for (c = 0; p >= c; c++) d = i(t, f[c], s, a, l, p !== c), g[c] = d.end;
                    for (u in e) m[u] = e[u];
                    return m.values = g, (a = new r(t, "bezier", 0, 0, d.pt, 2)).data = d, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x && [["x", "y", "rotation", c, !1]]), m.autoRotate && (s._transform || s._enableTransforms(!1), d.autoRotate = s._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(d.proxy, m, s._tween), a
                }
            })
        }
    }, g._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; --n > -1;) (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
    }, g._kill = function (t) {
        var e, i, n = this._props;
        for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
        if (n = this._autoRotate) for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, r, o, s = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, c = s.prototype = new t("css");
        c.constructor = s, s.version = "2.1.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var u, d, f, p, h, g, m, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i,
            k = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, A = /([A-Z])/g, P = /-([a-z])/gi,
            F = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (t, e) {
                return e.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            $ = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, M = /,(?=[^\)]*(?:\(|$))/gi, N = /[\s,\(]/i,
            R = Math.PI / 180, L = 180 / Math.PI, j = {}, z = {style: {}}, B = _gsScope.document || {
                createElement: function () {
                    return z
                }
            }, q = function (t, e) {
                return e && B.createElementNS ? B.createElementNS(e, t) : B.createElement(t)
            }, I = q("div"), H = q("img"), X = s._internals = {_specialProps: l},
            W = (_gsScope.navigator || {}).userAgent || "", U = function () {
                var t = W.indexOf("Android"), e = q("a");
                return f = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), h = f && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, p = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(), V = function (t) {
                return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, Y = function (t) {
                _gsScope.console && console.log(t)
            }, G = "", Z = "", Q = function (t, e) {
                var i, n, r = (e = e || I).style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) ;
                return n >= 0 ? (G = "-" + (Z = 3 === n ? "ms" : i[n]).toLowerCase() + "-", Z + t) : null
            }, K = "undefined" != typeof window ? window : B.defaultView || {
                getComputedStyle: function () {
                }
            }, J = function (t) {
                return K.getComputedStyle(t)
            }, tt = s.getStyle = function (t, e, i, n, r) {
                var o;
                return U || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || J(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : V(t)
            }, et = X.convertToPixels = function (t, i, n, r, o) {
                if ("px" === r || !r && "lineHeight" !== i) return n;
                if ("auto" === r || !n) return 0;
                var a, l, c, u = D.test(i), d = t, f = I.style, p = 0 > n, h = 1 === n;
                if (p && (n = -n), h && (n *= 100), "lineHeight" !== i || r) if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight); else {
                    if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && d.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                        if (d = t.parentNode || B.body, -1 !== tt(d, "display").indexOf("flex") && (f.position = "absolute"), l = d._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                        f[u ? "width" : "height"] = n + r
                    }
                    d.appendChild(I), a = parseFloat(I[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(I), u && "%" === r && !1 !== s.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = c, l.width = a / n * 100), 0 !== a || o || (a = et(t, i, n, r, !0))
                } else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                return h && (a /= 100), p ? -a : a
            }, it = X.calculateOffset = function (t, e, i) {
                if ("absolute" !== tt(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top", r = tt(t, "margin" + n, i);
                return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(w, "")) || 0)
            }, nt = function (t, e) {
                var i, n, r, o = {};
                if (e = e || J(t)) if (i = e.length) for (; --i > -1;) (-1 === (r = e[i]).indexOf("-transform") || Et === r) && (o[r.replace(P, E)] = e.getPropertyValue(r)); else for (i in e) (-1 === i.indexOf("Transform") || Ft === i) && (o[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(P, E)] = e[i]);
                return U || (o.opacity = V(t)), n = Ht(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Ot && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
            }, rt = function (t, e, i, n, r) {
                var o, s, a, l = {}, c = t.style;
                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(b, "") ? o : 0 : it(t, s), void 0 !== c[s] && (a = new _t(c, s, c[s], a)));
                if (n) for (s in n) "className" !== s && (l[s] = n[s]);
                return {difs: l, firstMPT: a}
            }, ot = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function (t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                if (t.getCTM && Bt(t)) return t.getBBox()[e] || 0;
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = ot[e], o = r.length;
                for (i = i || J(t); --o > -1;) n -= parseFloat(tt(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            }, lt = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !e) {
                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i]));
                    return t.join(",")
                }
                return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(o.replace(b, "")), e.v = t), e || t
            }, ct = function (t, e) {
                return "function" == typeof t && (t = t(v, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }, ut = function (t, e) {
                "function" == typeof t && (t = t(v, m));
                var i = "string" == typeof t && "=" === t.charAt(1);
                return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }, dt = function (t, e, i, n) {
                var r, o, s, a, l;
                return "function" == typeof t && (t = t(v, m)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), s = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r) != s % 180 && (s = 0 > s ? s + r : s - r), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), 1e-6 > a && a > -1e-6 && (a = 0), a
            }, ft = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, pt = function (t, e, i) {
                return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }, ht = s.parseColor = function (t, e) {
                var i, n, r, o, s, a, l, c, u, d, f;
                if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t]; else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t]; else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3)) if (i = f = t.match(y), e) {
                        if (-1 !== t.indexOf("=")) return t.match(_)
                    } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(s + 1 / 3, n, r), i[1] = pt(s, n, r), i[2] = pt(s - 1 / 3, n, r); else i = t.match(y) || ft.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                } else i = ft.black;
                return e && !f && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, l = ((c = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2, c === u ? s = a = 0 : (d = c - u, a = l > .5 ? d / (2 - c - u) : d / (c + u), s = c === n ? (r - o) / d + (o > r ? 6 : 0) : c === r ? (o - n) / d + 2 : (n - r) / d + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            }, gt = function (t, e) {
                var i, n, r, o = t.match(mt) || [], s = 0, a = "";
                if (!o.length) return t;
                for (i = 0; i < o.length; i++) n = o[i], s += (r = t.substr(s, t.indexOf(n, s) - s)).length + n.length, 3 === (n = ht(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + t.substr(s)
            }, mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in ft) mt += "|" + c + "\\b";
        mt = new RegExp(mt + ")", "gi"), s.colorStringFilter = function (t) {
            var e, i = t[0] + " " + t[1];
            mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), mt.lastIndex = 0
        }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
        var vt = function (t, e, i, n) {
            if (null == t) return function (t) {
                return t
            };
            var r, o = e ? (t.match(mt) || [""])[0] : "", s = t.split(o).join("").match(x) || [],
                a = t.substr(0, t.indexOf(s[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "",
                c = -1 !== t.indexOf(" ") ? " " : ",", u = s.length, d = u > 0 ? s[0].replace(y, "") : "";
            return u ? r = e ? function (t) {
                var e, f, p, h;
                if ("number" == typeof t) t += d; else if (n && M.test(t)) {
                    for (h = t.replace(M, "|").split("|"), p = 0; p < h.length; p++) h[p] = r(h[p]);
                    return h.join(",")
                }
                if (e = (t.match(mt) || [o])[0], p = (f = t.split(e).join("").match(x) || []).length, u > p--) for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : s[p];
                return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, o, f;
                if ("number" == typeof t) t += d; else if (n && M.test(t)) {
                    for (o = t.replace(M, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                    return o.join(",")
                }
                if (f = (e = t.match(x) || []).length, u > f--) for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : s[f];
                return a + e.join(c) + l
            } : function (t) {
                return t
            }
        }, yt = function (t) {
            return t = t.split(","), function (e, i, n, r, o, s, a) {
                var l, c = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return r.parse(e, a, o, s)
            }
        }, _t = (X._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
            if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t) for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                if ((i = l.t).type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                        i[o] = r
                    }
                } else i[o] = i.s + i.xs0;
                l = l._next
            }
        }, function (t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        }), xt = (X._parseToProxy = function (t, e, i, n, r, o) {
            var s, a, l, c, u, d = n, f = {}, p = {}, h = i._transform, g = j;
            for (i._transform = null, j = e, n = u = i.parse(t, e, n, r), j = g, o && (i._transform = h, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                if (n.type <= 1 && (p[a = n.p] = n.s + n.c, f[a] = n.s, o || (c = new _t(n, "s", a, c, n.r), n.c = 0), 1 === n.type)) for (s = n.l; --s > 0;) l = "xn" + s, p[a = n.p + "_" + l] = n.data[l], f[a] = n[l], o || (c = new _t(n, l, a, c, n.rxp[l]));
                n = n._next
            }
            return {proxy: f, end: p, firstMPT: c, pt: u}
        }, X.CSSPropTween = function (t, e, n, r, s, a, l, c, u, d, f) {
            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof xt || o.push(this.n), this.r = c ? "function" == typeof c ? c : Math.round : c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
        }), bt = function (t, e, i, n, r, o) {
            var s = new xt(t, e, i, n - i, r, -1, o);
            return s.b = i, s.e = s.xs0 = n, s
        }, wt = s.parseComplex = function (t, e, i, n, r, o, a, l, c, d) {
            i = i || o || "", "function" == typeof n && (n = n(v, m)), a = new xt(t, e, 0, 0, a, d ? 2 : 1, null, !1, l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
            var f, p, h, g, x, b, w, T, S, k, C, A, P, F = i.split(", ").join(",").split(" "),
                E = n.split(", ").join(",").split(" "), D = F.length, O = !1 !== u;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (F = F.join(" ").replace(M, ", ").split(" "), E = E.join(" ").replace(M, ", ").split(" ")) : (F = F.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), D = F.length), D !== E.length && (D = (F = (o || "").split(" ")).length), a.plugin = c, a.setRatio = d, mt.lastIndex = 0, f = 0; D > f; f++) if (g = F[f], x = E[f] + "", (T = parseFloat(g)) || 0 === T) a.appendXtra("", T, ct(x, T), x.replace(_, ""), !(!O || -1 === x.indexOf("px")) && Math.round, !0); else if (r && mt.test(g)) A = ")" + ((A = x.indexOf(")") + 1) ? x.substr(A) : ""), P = -1 !== x.indexOf("hsl") && U, k = x, g = ht(g, P), x = ht(x, P), (S = g.length + x.length > 6) && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(E[f]).join("transparent")) : (U || (S = !1), P ? a.appendXtra(k.substr(0, k.indexOf("hsl")) + (S ? "hsla(" : "hsl("), g[0], ct(x[0], g[0]), ",", !1, !0).appendXtra("", g[1], ct(x[1], g[1]), "%,", !1).appendXtra("", g[2], ct(x[2], g[2]), S ? "%," : "%" + A, !1) : a.appendXtra(k.substr(0, k.indexOf("rgb")) + (S ? "rgba(" : "rgb("), g[0], x[0] - g[0], ",", Math.round, !0).appendXtra("", g[1], x[1] - g[1], ",", Math.round).appendXtra("", g[2], x[2] - g[2], S ? "," : A, Math.round), S && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (x.length < 4 ? 1 : x[3]) - g, A, !1))), mt.lastIndex = 0; else if (b = g.match(y)) {
                if (!(w = x.match(_)) || w.length !== b.length) return a;
                for (h = 0, p = 0; p < b.length; p++) C = b[p], k = g.indexOf(C, h), a.appendXtra(g.substr(h, k - h), Number(C), ct(w[p], C), "", !(!O || "px" !== g.substr(k + C.length, 2)) && Math.round, 0 === p), h = k + C.length;
                a["xs" + a.l] += g.substr(h)
            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
            if (-1 !== n.indexOf("=") && a.data) {
                for (A = a.xs0 + a.data.s, f = 1; f < a.l; f++) A += a["xs" + f] + a.data["xn" + f];
                a.e = A + a["xs" + f]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }, Tt = 9;
        for ((c = xt.prototype).l = c.pr = 0; --Tt > 0;) c["xn" + Tt] = 0, c["xs" + Tt] = "";
        c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (t, e, i, n, r, o) {
            var s = this, a = s.l;
            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new xt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {s: e + i}, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
        };
        var St = function (t, e) {
            e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
        }, kt = X._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r = t.split(","), o = e.defaultValue;
            for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new St(r[n], e)
        }, Ct = X._registerPluginProp = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                kt(t, {
                    parser: function (t, i, n, r, o, s, c) {
                        var u = a.com.greensock.plugins[e];
                        return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, c)) : (Y("Error: " + e + " js file not loaded."), o)
                    }
                })
            }
        };
        (c = St.prototype).parseComplex = function (t, e, i, n, r, o) {
            var s, a, l, c, u, d, f = this.keyword;
            if (this.multi && (M.test(i) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : f && (a = [e], l = [i])), l) {
                for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && (u = e.indexOf(f)) !== (d = i.indexOf(f)) && (-1 === d ? a[s] = a[s].split(f).join("") : -1 === u && (a[s] += " " + f));
                e = a.join(", "), i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
        }, c.parse = function (t, e, i, n, o, s, a) {
            return this.parseComplex(t.style, this.format(tt(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
        }, s.registerSpecialProp = function (t, e, i) {
            kt(t, {
                parser: function (t, n, r, o, s, a, l) {
                    var c = new xt(t, r, 0, 0, s, 2, r, !1, i);
                    return c.plugin = a, c.setRatio = e(t, n, o._tween, r), c
                }, priority: i
            })
        }, s.useSVGTransformAttr = !0;
        var At,
            Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ft = Q("transform"), Et = G + "transform", Dt = Q("transformOrigin"), Ot = null !== Q("perspective"),
            $t = X.Transform = function () {
                this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Ot) && (s.defaultForce3D || "auto")
            }, Mt = _gsScope.SVGElement, Nt = function (t, e, i) {
                var n, r = B.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            }, Rt = B.documentElement || {}, Lt = function () {
                var t, e, i, n = g || /Android/i.test(W) && !_gsScope.chrome;
                return B.createElementNS && !n && (t = Nt("svg", Rt), i = (e = Nt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, e.style[Dt] = "50% 50%", e.style[Ft] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Ot), Rt.removeChild(t)), n
            }(), jt = function (t, e, i, n, r, o) {
                var a, l, c, u, d, f, p, h, g, m, v, y, _, x, b = t._gsTransform, w = It(t, !0);
                b && (_ = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), a = [(-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = d = parseFloat(a[1]), n && w !== qt && (f = w[0], p = w[1], h = w[2], g = w[3], m = w[4], v = w[5], (y = f * g - p * h) && (l = u * (g / y) + d * (-h / y) + (h * v - g * m) / y, c = u * (-p / y) + d * (f / y) - (f * v - p * m) / y, u = i.xOrigin = a[0] = l, d = i.yOrigin = a[1] = c)), b && (o && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (l = u - _, c = d - x, b.xOffset += l * w[0] + c * w[2] - l, b.yOffset += l * w[1] + c * w[3] - c) : b.xOffset = b.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
            }, zt = function (t) {
                var e,
                    i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode, r = this.nextSibling, o = this.style.cssText;
                if (Rt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                } catch (t) {
                } else this._originalGetBBox && (e = this._originalGetBBox());
                return r ? n.insertBefore(this, r) : n.appendChild(this), Rt.removeChild(i), this.style.cssText = o, e
            }, Bt = function (t) {
                return !(!Mt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function (t) {
                    try {
                        return t.getBBox()
                    } catch (e) {
                        return zt.call(t, !0)
                    }
                }(t))
            }, qt = [1, 0, 0, 1, 0, 0], It = function (t, e) {
                var i, n, r, o, s, a, l, c = t._gsTransform || new $t, u = t.style;
                if (Ft ? n = tt(t, Et, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(O)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), c.x || 0, c.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, Ft && i && !t.offsetParent && (o = u.display, u.display = "block", (l = t.parentNode) && t.offsetParent || (s = 1, a = t.nextSibling, Rt.appendChild(t)), i = !(n = tt(t, Et, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? u.display = o : Vt(u, "display"), s && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : Rt.removeChild(t))), (c.svg || t.getCTM && Bt(t)) && (i && -1 !== (u[Ft] + "").indexOf("matrix") && (n = u[Ft], i = 0), r = t.getAttribute("transform"), i && r && (n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return qt;
                for (r = (n || "").match(y) || [], Tt = r.length; --Tt > -1;) o = Number(r[Tt]), r[Tt] = (s = o - (o |= 0)) ? (1e5 * s + (0 > s ? -.5 : .5) | 0) / 1e5 + o : o;
                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            }, Ht = X.getTransform = function (t, i, n, r) {
                if (t._gsTransform && n && !r) return t._gsTransform;
                var o, a, l, c, u, d, f = n && t._gsTransform || new $t, p = f.scaleX < 0, h = 2e-5, g = 1e5,
                    m = Ot && (parseFloat(tt(t, Dt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                    v = parseFloat(s.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getCTM || !Bt(t)), f.svg && (jt(t, tt(t, Dt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), At = s.useSVGTransformAttr || Lt), (o = It(t)) !== qt) {
                    if (16 === o.length) {
                        var y, _, x, b, w, T = o[0], S = o[1], k = o[2], C = o[3], A = o[4], P = o[5], F = o[6], E = o[7],
                            D = o[8], O = o[9], $ = o[10], M = o[12], N = o[13], R = o[14], j = o[11], z = Math.atan2(F, $);
                        f.zOrigin && (M = D * (R = -f.zOrigin) - o[12], N = O * R - o[13], R = $ * R + f.zOrigin - o[14]), f.rotationX = z * L, z && (y = A * (b = Math.cos(-z)) + D * (w = Math.sin(-z)), _ = P * b + O * w, x = F * b + $ * w, D = A * -w + D * b, O = P * -w + O * b, $ = F * -w + $ * b, j = E * -w + j * b, A = y, P = _, F = x), z = Math.atan2(-k, $), f.rotationY = z * L, z && (_ = S * (b = Math.cos(-z)) - O * (w = Math.sin(-z)), x = k * b - $ * w, O = S * w + O * b, $ = k * w + $ * b, j = C * w + j * b, T = y = T * b - D * w, S = _, k = x), z = Math.atan2(S, T), f.rotation = z * L, z && (y = T * (b = Math.cos(z)) + S * (w = Math.sin(z)), _ = A * b + P * w, x = D * b + O * w, S = S * b - T * w, P = P * b - A * w, O = O * b - D * w, T = y, A = _, D = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), z = Math.atan2(A, P), f.scaleX = (Math.sqrt(T * T + S * S + k * k) * g + .5 | 0) / g, f.scaleY = (Math.sqrt(P * P + F * F) * g + .5 | 0) / g, f.scaleZ = (Math.sqrt(D * D + O * O + $ * $) * g + .5 | 0) / g, T /= f.scaleX, A /= f.scaleY, S /= f.scaleX, P /= f.scaleY, Math.abs(z) > h ? (f.skewX = z * L, A = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(z))) : f.skewX = 0, f.perspective = j ? 1 / (0 > j ? -j : j) : 0, f.x = M, f.y = N, f.z = R, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * A), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * P))
                    } else if (!Ot || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                        var B = o.length >= 6, q = B ? o[0] : 1, I = o[1] || 0, H = o[2] || 0, X = B ? o[3] : 1;
                        f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(q * q + I * I), c = Math.sqrt(X * X + H * H), u = q || I ? Math.atan2(I, q) * L : f.rotation || 0, d = H || X ? Math.atan2(H, X) * L + u : f.skewX || 0, f.scaleX = l, f.scaleY = c, f.rotation = u, f.skewX = d, Ot && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * q + f.yOrigin * H), f.y -= f.yOrigin - (f.xOrigin * I + f.yOrigin * X))
                    }
                    for (a in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = m, f) f[a] < h && f[a] > -h && (f[a] = 0)
                }
                return n && (t._gsTransform = f, f.svg && (At && t.style[Ft] ? e.delayedCall(.001, function () {
                    Vt(t.style, Ft)
                }) : !At && t.getAttribute("transform") && e.delayedCall(.001, function () {
                    t.removeAttribute("transform")
                }))), f
            }, Xt = function (t) {
                var e, i, n = this.data, r = -n.rotation * R, o = r + n.skewX * R, s = 1e5,
                    a = (Math.cos(r) * n.scaleX * s | 0) / s, l = (Math.sin(r) * n.scaleX * s | 0) / s,
                    c = (Math.sin(o) * -n.scaleY * s | 0) / s, u = (Math.cos(o) * n.scaleY * s | 0) / s, d = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = l, l = -c, c = -i, e = f.filter, d.filter = "";
                    var p, h, m = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== f.position,
                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                        x = n.x + m * n.xPercent / 100, b = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (x += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * a + (h = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2) * l), b += h - (p * c + h * u)), _ += y ? ", Dx=" + ((p = m / 2) - (p * a + (h = v / 2) * l) + x) + ", Dy=" + (h - (p * c + h * u) + b) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = e.replace($, _) : d.filter = _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === _.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !y) {
                        var S, k, C, A = 8 > g ? 1 : -1;
                        for (p = n.ieOffsetX || 0, h = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + b), Tt = 0; 4 > Tt; Tt++) C = (i = -1 !== (S = f[k = st[Tt]]).indexOf("px") ? parseFloat(S) : et(this.t, k, parseFloat(S), S.replace(w, "")) || 0) !== n[k] ? 2 > Tt ? -n.ieOffsetX : -n.ieOffsetY : 2 > Tt ? p - n.ieOffsetX : h - n.ieOffsetY, d[k] = (n[k] = Math.round(i - C * (0 === Tt || 2 === Tt ? 1 : A))) + "px"
                    }
                }
            }, Wt = X.set3DTransformRatio = X.setTransformRatio = function (t) {
                var e, i, n, r, o, s, a, l, c, u, d, f, h, g, m, v, y, _, x, b, w, T, S, k = this.data, C = this.t.style,
                    A = k.rotation, P = k.rotationX, F = k.rotationY, E = k.scaleX, D = k.scaleY, O = k.scaleZ, $ = k.x,
                    M = k.y, N = k.z, L = k.svg, j = k.perspective, z = k.force3D, B = k.skewY, q = k.skewX;
                if (B && (q += B, A += B), !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || N || j || F || P || 1 !== O) || At && L || !Ot) A || q || L ? (A *= R, T = q * R, S = 1e5, i = Math.cos(A) * E, o = Math.sin(A) * E, n = Math.sin(A - T) * -D, s = Math.cos(A - T) * D, T && "simple" === k.skewType && (e = Math.tan(T - B * R), n *= e = Math.sqrt(1 + e * e), s *= e, B && (e = Math.tan(B * R), i *= e = Math.sqrt(1 + e * e), o *= e)), L && ($ += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, M += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, At && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), $ += .01 * k.xPercent * m.width, M += .01 * k.yPercent * m.height), (m = 1e-6) > $ && $ > -m && ($ = 0), m > M && M > -m && (M = 0)), x = (i * S | 0) / S + "," + (o * S | 0) / S + "," + (n * S | 0) / S + "," + (s * S | 0) / S + "," + $ + "," + M + ")", L && At ? this.t.setAttribute("transform", "matrix(" + x) : C[Ft] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + x) : C[Ft] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + D + "," + $ + "," + M + ")"; else {
                    if (p && ((m = 1e-4) > E && E > -m && (E = O = 2e-5), m > D && D > -m && (D = O = 2e-5), !j || k.z || k.rotationX || k.rotationY || (j = 0)), A || q) A *= R, v = i = Math.cos(A), y = o = Math.sin(A), q && (A -= q * R, v = Math.cos(A), y = Math.sin(A), "simple" === k.skewType && (e = Math.tan((q - B) * R), v *= e = Math.sqrt(1 + e * e), y *= e, k.skewY && (e = Math.tan(B * R), i *= e = Math.sqrt(1 + e * e), o *= e))), n = -y, s = v; else {
                        if (!(F || P || 1 !== O || j || L)) return void (C[Ft] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + $ + "px," + M + "px," + N + "px)" + (1 !== E || 1 !== D ? " scale(" + E + "," + D + ")" : ""));
                        i = s = 1, n = o = 0
                    }
                    u = 1, r = a = l = c = d = f = 0, h = j ? -1 / j : 0, g = k.zOrigin, m = 1e-6, b = ",", w = "0", (A = F * R) && (v = Math.cos(A), l = -(y = Math.sin(A)), d = h * -y, r = i * y, a = o * y, u = v, h *= v, i *= v, o *= v), (A = P * R) && (e = n * (v = Math.cos(A)) + r * (y = Math.sin(A)), _ = s * v + a * y, c = u * y, f = h * y, r = n * -y + r * v, a = s * -y + a * v, u *= v, h *= v, n = e, s = _), 1 !== O && (r *= O, a *= O, u *= O, h *= O), 1 !== D && (n *= D, s *= D, c *= D, f *= D), 1 !== E && (i *= E, o *= E, l *= E, d *= E), (g || L) && (g && ($ += r * -g, M += a * -g, N += u * -g + g), L && ($ += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, M += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), m > $ && $ > -m && ($ = w), m > M && M > -m && (M = w), m > N && N > -m && (N = 0)), x = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > i && i > -m ? w : i) + b + (m > o && o > -m ? w : o) + b + (m > l && l > -m ? w : l), x += b + (m > d && d > -m ? w : d) + b + (m > n && n > -m ? w : n) + b + (m > s && s > -m ? w : s), P || F || 1 !== O ? (x += b + (m > c && c > -m ? w : c) + b + (m > f && f > -m ? w : f) + b + (m > r && r > -m ? w : r), x += b + (m > a && a > -m ? w : a) + b + (m > u && u > -m ? w : u) + b + (m > h && h > -m ? w : h) + b) : x += ",0,0,0,0,1,0,", x += $ + b + M + b + N + b + (j ? 1 + -N / j : 1) + ")", C[Ft] = x
                }
            };
        (c = $t.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, n, o, a, l) {
                if (n._lastParsedTransform === l) return o;
                n._lastParsedTransform = l;
                var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                c && (l.scale = c(v, t));
                var u, d, f, p, h, g, y, _, x, b = t._gsTransform, w = t.style, T = Pt.length, S = l, k = {},
                    C = "transformOrigin", A = Ht(t, r, !0, S.parseTransform),
                    P = S.transform && ("function" == typeof S.transform ? S.transform(v, m) : S.transform);
                if (A.skewType = S.skewType || A.skewType || s.defaultSkewType, n._transform = A, "rotationZ" in S && (S.rotation = S.rotationZ), P && "string" == typeof P && Ft) (d = I.style)[Ft] = P, d.display = "block", d.position = "absolute", -1 !== P.indexOf("%") && (d.width = tt(t, "width"), d.height = tt(t, "height")), B.body.appendChild(I), u = Ht(I, null, !1), "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * R)), A.svg && (g = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset, u.y -= A.yOffset, (S.transformOrigin || S.svgOrigin) && (P = {}, jt(t, lt(S.transformOrigin), P, S.svgOrigin, S.smoothOrigin, !0), g = P.xOrigin, y = P.yOrigin, u.x -= P.xOffset - A.xOffset, u.y -= P.yOffset - A.yOffset), (g || y) && (_ = It(I, !0), u.x -= g - (g * _[0] + y * _[2]), u.y -= y - (g * _[1] + y * _[3]))), B.body.removeChild(I), u.perspective || (u.perspective = A.perspective), null != S.xPercent && (u.xPercent = ut(S.xPercent, A.xPercent)), null != S.yPercent && (u.yPercent = ut(S.yPercent, A.yPercent)); else if ("object" == typeof S) {
                    if (u = {
                        scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, A.scaleX),
                        scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, A.scaleY),
                        scaleZ: ut(S.scaleZ, A.scaleZ),
                        x: ut(S.x, A.x),
                        y: ut(S.y, A.y),
                        z: ut(S.z, A.z),
                        xPercent: ut(S.xPercent, A.xPercent),
                        yPercent: ut(S.yPercent, A.yPercent),
                        perspective: ut(S.transformPerspective, A.perspective)
                    }, null != (h = S.directionalRotation)) if ("object" == typeof h) for (d in h) S[d] = h[d]; else S.rotation = h;
                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = ut(S.x, A.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = ut(S.y, A.yPercent)), u.rotation = dt("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : A.rotation, A.rotation, "rotation", k), Ot && (u.rotationX = dt("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", k), u.rotationY = dt("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", k)), u.skewX = dt(S.skewX, A.skewX), u.skewY = dt(S.skewY, A.skewY)
                }
                for (Ot && null != S.force3D && (A.force3D = S.force3D, p = !0), (f = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1); --T > -1;) ((P = u[x = Pt[T]] - A[x]) > 1e-6 || -1e-6 > P || null != S[x] || null != j[x]) && (p = !0, o = new xt(A, x, A[x], P, o), x in k && (o.e = k[x]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                return P = "function" == typeof S.transformOrigin ? S.transformOrigin(v, m) : S.transformOrigin, A.svg && (P || S.svgOrigin) && (g = A.xOffset, y = A.yOffset, jt(t, lt(P), u, S.svgOrigin, S.smoothOrigin), o = bt(A, "xOrigin", (b ? A : u).xOrigin, u.xOrigin, o, C), o = bt(A, "yOrigin", (b ? A : u).yOrigin, u.yOrigin, o, C), (g !== A.xOffset || y !== A.yOffset) && (o = bt(A, "xOffset", b ? g : A.xOffset, A.xOffset, o, C), o = bt(A, "yOffset", b ? y : A.yOffset, A.yOffset, o, C)), P = "0px 0px"), (P || Ot && f && A.zOrigin) && (Ft ? (p = !0, x = Dt, P || (P = (P = (tt(t, x, r, !1, "50% 50%") + "").split(" "))[0] + " " + P[1] + " " + A.zOrigin + "px"), P += "", (o = new xt(w, x, 0, 0, o, -1, C)).b = w[x], o.plugin = a, Ot ? (d = A.zOrigin, P = P.split(" "), A.zOrigin = (P.length > 2 ? parseFloat(P[2]) : d) || 0, o.xs0 = o.e = P[0] + " " + (P[1] || "50%") + " 0px", (o = new xt(A, "zOrigin", 0, 0, o, -1, o.n)).b = d, o.xs0 = o.e = A.zOrigin) : o.xs0 = o.e = P) : lt(P + "", A)), p && (n._transformType = A.svg && At || !f && 3 !== this._transformType ? 2 : 3), c && (l.scale = c), o
            }, allowFunc: !0, prefix: !0
        }), kt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), kt("clipPath", {
            defaultValue: "inset(0px)",
            prefix: !0,
            multi: !0,
            formatter: vt("inset(0px 0px 0px 0px)", !1, !0)
        }), kt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, o, s, a) {
                e = this.format(e);
                var l, c, u, d, f, p, h, g, m, v, y, _, x, b, w, T,
                    S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    k = t.style;
                for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = Q(S[c])), -1 !== (f = d = tt(t, S[c], r, !1, "0px")).indexOf(" ") && (d = f.split(" "), f = d[0], d = d[1]), p = u = l[c], h = parseFloat(f), _ = f.substr((h + "").length), (x = "=" === p.charAt(1)) ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), y = p.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(p), y = p.substr((g + "").length)), "" === y && (y = n[i] || _), y !== _ && (b = et(t, "borderLeft", h, _), w = et(t, "borderTop", h, _), "%" === y ? (f = b / m * 100 + "%", d = w / v * 100 + "%") : "em" === y ? (f = b / (T = et(t, "borderLeft", 1, "em")) + "em", d = w / T + "em") : (f = b + "px", d = w + "px"), x && (p = parseFloat(f) + g + y, u = parseFloat(d) + g + y)), s = wt(k, S[c], f + " " + d, p + " " + u, !1, "0px", s);
                return s
            }, prefix: !0, formatter: vt("0px 0px 0px 0px", !1, !0)
        }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, o, s) {
                return wt(t.style, i, this.format(tt(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }), kt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, o, s) {
                var a, l, c, u, d, f, p = "background-position", h = r || J(t),
                    m = this.format((h ? g ? h.getPropertyValue(p + "-x") + " " + h.getPropertyValue(p + "-y") : h.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(F, "")) && "none" !== f) {
                    for (a = m.split(" "), l = v.split(" "), H.setAttribute("src", f), c = 2; --c > -1;) (u = -1 !== (m = a[c]).indexOf("%")) != (-1 !== l[c].indexOf("%")) && (d = 0 === c ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[c] = u ? parseFloat(m) / 100 * d + "px" : parseFloat(m) / d * 100 + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, o, s)
            }, formatter: lt
        }), kt("backgroundSize", {
            defaultValue: "0 0", formatter: function (t) {
                return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }), kt("perspective", {defaultValue: "0px", prefix: !0}), kt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), kt("transformStyle", {prefix: !0}), kt("backfaceVisibility", {prefix: !0}), kt("userSelect", {prefix: !0}), kt("margin", {parser: yt("marginTop,marginRight,marginBottom,marginLeft")}), kt("padding", {parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), kt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, o, s) {
                var a, l, c;
                return 9 > g ? (l = t.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(tt(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
            }
        }), kt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), kt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), kt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, o, s) {
                var a = tt(t, "borderTopWidth", r, !1, "0px"), l = this.format(e).split(" "), c = l[0].replace(w, "");
                return "px" !== c && (a = parseFloat(a) / et(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", r, !1, "solid") + " " + tt(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
            }
        }), kt("borderWidth", {parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), kt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r, o) {
                var s = t.style, a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new xt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
            }
        });
        var Ut = function (t) {
            var e, i = this.t, n = i.filter || tt(this.data, "filter") || "", r = this.s + this.c * t | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
        };
        kt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, o, s) {
                var a = parseFloat(tt(t, "opacity", r, !1, "1")), l = t.style, c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === tt(t, "visibility", r) && 0 !== e && (a = 0), U ? o = new xt(l, "opacity", a, e - a, o) : ((o = new xt(l, "opacity", 100 * a, 100 * (e - a), o)).xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ut), c && ((o = new xt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
            }
        });
        var Vt = function (t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Yt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Vt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        kt("className", {
            parser: function (t, e, n, o, s, a, l) {
                var c, u, d, f, p, h = t.getAttribute("class") || "", g = t.style.cssText;
                if ((s = o._classNamePT = new xt(t, n, 0, 0, s, 2)).setRatio = Yt, s.pr = -11, i = !0, s.b = h, u = nt(t, r), d = t._gsClassPT) {
                    for (f = {}, p = d.data; p;) f[p.p] = 1, p = p._next;
                    d.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : h.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), c = rt(t, u, nt(t), l, f), t.setAttribute("class", h), s.data = c.firstMPT, t.style.cssText = g, s.xfirst = o.parse(t, c.difs, s, a)
            }
        });
        var Gt = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, o, s = this.t.style, a = l.transform.parse;
                if ("all" === this.e) s.cssText = "", r = !0; else for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Dt : l[i].p), Vt(s, i);
                r && (Vt(s, Ft), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (kt("clearProps", {
            parser: function (t, e, n, r, o) {
                return (o = new xt(t, n, 0, 0, o, 2)).setRatio = Gt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
            }
        }), c = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = c.length; Tt--;) Ct(c[Tt]);
        (c = s.prototype)._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (t, e, a, c) {
            if (!t.nodeType) return !1;
            this._target = m = t, this._tween = a, this._vars = e, v = c, u = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = J(t), o = this._overwriteProps;
            var p, g, y, _, x, b, w, T, k, C = t.style;
            if (d && "" === C.zIndex && ("auto" === (p = tt(t, "zIndex", r)) || "" === p) && this._addLazySet(C, "zIndex", 0), "string" == typeof e && (_ = C.cssText, p = nt(t, r), C.cssText = _ + ";" + e, p = rt(t, p, nt(t)).difs, !U && S.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, C.cssText = _), e.className ? this._firstPT = g = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = g = this.parse(t, e, null), this._transformType) {
                for (k = 3 === this._transformType, Ft ? f && (d = !0, "" === C.zIndex && ("auto" === (w = tt(t, "zIndex", r)) || "" === w) && this._addLazySet(C, "zIndex", 0), h && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1, y = g; y && y._next;) y = y._next;
                T = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Ft ? Wt : Xt, T.data = this._transform || Ht(t, r, !0), T.tween = a, T.pr = -1, o.pop()
            }
            if (i) {
                for (; g;) {
                    for (b = g._next, y = _; y && y.pr > g.pr;) y = y._next;
                    (g._prev = y ? y._prev : x) ? g._prev._next = g : _ = g, (g._next = y) ? y._prev = g : x = g, g = b
                }
                this._firstPT = _
            }
            return !0
        }, c.parse = function (t, e, i, o) {
            var s, a, c, d, f, p, h, g, y, _, x = t.style;
            for (s in e) {
                if (p = e[s], a = l[s], "function" != typeof p || a && a.allowFunc || (p = p(v, m)), a) i = a.parse(t, p, s, this, i, o, e); else {
                    if ("--" === s.substr(0, 2)) {
                        this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(s) + "", p + "", s, !1, s);
                        continue
                    }
                    f = tt(t, s, r) + "", y = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && C.test(p) ? (y || (p = ((p = ht(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = wt(x, s, f, p, !0, "transparent", i, 0, o)) : y && N.test(p) ? i = wt(x, s, f, p, !0, null, i, 0, o) : (h = (c = parseFloat(f)) || 0 === c ? f.substr((c + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (c = at(t, s, r), h = "px") : "left" === s || "top" === s ? (c = it(t, s, r), h = "px") : (c = "opacity" !== s ? 0 : 1, h = "")), (_ = y && "=" === p.charAt(1)) ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), g = p.replace(w, "")) : (d = parseFloat(p), g = y ? p.replace(w, "") : ""), "" === g && (g = s in n ? n[s] : h), p = d || 0 === d ? (_ ? d + c : d) + g : e[s], h !== g && ("" !== g || "lineHeight" === s) && (d || 0 === d) && c && (c = et(t, s, c, h), "%" === g ? (c /= et(t, s, 100, "%") / 100, !0 !== e.strictUnits && (f = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= et(t, s, 1, g) : "px" !== g && (d = et(t, s, d, g), g = "px"), _ && (d || 0 === d) && (p = d + c + g)), _ && (d += c), !c && 0 !== c || !d && 0 !== d ? void 0 !== x[s] && (p || p + "" != "NaN" && null != p) ? (i = new xt(x, s, d || c || 0, 0, i, -1, s, !1, 0, f, p)).xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f : Y("invalid " + s + " tween value: " + e[s]) : (i = new xt(x, s, c, d - c, i, 0, s, !1 !== u && ("px" === g || "zIndex" === s), 0, f, p)).xs0 = g)
                }
                o && i && !i.plugin && (i.plugin = o)
            }
            return i
        }, c.setRatio = function (t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = r.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type) if (1 === r.type) if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) {
                if (2 !== r.type) if (r.r && -1 !== r.type) if (e = r.r(r.s + r.c), r.type) {
                    if (1 === r.type) {
                        for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i
                    }
                } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
                r = r._next
            }
        }, c._enableTransforms = function (t) {
            this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && At || !t && 3 !== this._transformType ? 2 : 3
        };
        var Zt = function (t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function (t, e, i) {
            var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Zt, n.data = this
        }, c._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, c._mod = function (t) {
            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
        }, c._kill = function (e) {
            var i, n, r, o = e;
            if (e.autoAlpha || e.alpha) {
                for (n in o = {}, e) o[n] = e[n];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
            return t.prototype._kill.call(this, o)
        };
        var Qt = function (t, e, i) {
            var n, r, o, s;
            if (t.slice) for (r = t.length; --r > -1;) Qt(t[r], e, i); else for (r = (n = t.childNodes).length; --r > -1;) s = (o = n[r]).type, o.style && (e.push(nt(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Qt(o, e, i)
        };
        return s.cascadeTo = function (t, i, n) {
            var r, o, s, a, l = e.to(t, i, n), c = [l], u = [], d = [], f = [], p = e._internals.reservedProps;
            for (t = l._targets || l.target, Qt(t, u, f), l.render(i, !0, !0), Qt(t, d), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;) if ((o = rt(f[r], u[r], d[r])).firstMPT) {
                for (s in o = o.difs, n) p[s] && (o[s] = n[s]);
                for (s in a = {}, o) a[s] = u[r][s];
                c.push(e.fromTo(f[r], i, a, o))
            }
            return c
        }, t.activate([s]), s
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = function (t) {
            var e = 1 > t ? Math.pow(10, (t + "").length - 2) : 1;
            return function (i) {
                return (Math.round(i / t) * t * e | 0) / e
            }
        }, i = function (t, e) {
            for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
        }, n = t.prototype;
        n._onInitAllProps = function () {
            var t, n, r, o, s = this._tween, a = s.vars.roundProps, l = {}, c = s._propLookup.roundProps;
            if ("object" != typeof a || a.push) for ("string" == typeof a && (a = a.split(",")), r = a.length; --r > -1;) l[a[r]] = Math.round; else for (o in a) l[o] = e(a[o]);
            for (o in l) for (t = s._firstPT; t;) n = t._next, t.pg ? t.t._mod(l) : t.n === o && (2 === t.f && t.t ? i(t.t._firstPT, l[o]) : (this._add(t.t, o, t.s, t.c, l[o]), n && (n._prev = t._prev), t._prev ? t._prev._next = n : s._firstPT === t && (s._firstPT = n), t._next = t._prev = null, s._propLookup[o] = c)), t = n;
            return !1
        }, n._add = function (t, e, i, n, r) {
            this._addTween(t, e, i, i + n, e, r || Math.round), this._overwriteProps.push(e)
        }
    }(), _gsScope._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.6.1", init: function (t, e, i, n) {
            var r, o;
            if ("function" != typeof t.setAttribute) return !1;
            for (r in e) "function" == typeof (o = e[r]) && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
            return !0
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function (t, e, i, n) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var r, o, s, a, l, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (r in e) "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)), o = (c = (a + "").split("_"))[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s, c.length && (-1 !== (o = c.join("_")).indexOf("short") && (l %= u) != l % (u / 2) && (l = 0 > l ? l + u : l - u), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
            return !0
        },
        set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, r, o = _gsScope.GreenSockGlobals || _gsScope, s = o.com.greensock, a = 2 * Math.PI,
            l = Math.PI / 2, c = s._class, u = function (e, i) {
                var n = c("easing." + e, function () {
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            }, d = t.register || function () {
            }, f = function (t, e, i, n, r) {
                var o = c("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                return d(o, t), o
            }, p = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, h = function (e, i) {
                var n = c("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function (t) {
                    return new n(t)
                }, n
            }, g = f("Back", h("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), h("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), h("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), m = c("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0), v = m.prototype = new t;
        return v.constructor = m, v.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), v.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, (v = (e = c("easing.SteppedEase", function (t, e) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
        }, !0)).prototype = new t).constructor = e, v.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
        }, v.config = e.config = function (t, i) {
            return new e(t, i)
        }, (v = (i = c("easing.ExpoScaleEase", function (t, e, i) {
            this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
        }, !0)).prototype = new t).constructor = i, v.getRatio = function (t) {
            return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        }, v.config = i.config = function (t, e, n) {
            return new i(t, e, n)
        }, (v = (n = c("easing.RoughEase", function (e) {
            for (var i, n, r, o, s, a, l = (e = e || {}).taper || "none", c = [], u = 0, d = 0 | (e.points || 20), f = d, h = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = h ? Math.random() : 1 / d * f, n = m ? m.getRatio(i) : i, r = "none" === l ? v : "out" === l ? (o = 1 - i) * o * v : "in" === l ? i * i * v : .5 > i ? (o = 2 * i) * o * .5 * v : (o = 2 * (1 - i)) * o * .5 * v, h ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                x: i,
                y: n
            };
            for (c.sort(function (t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), f = d; --f > -1;) s = c[f], a = new p(s.x, s.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
        }, !0)).prototype = new t).constructor = n, v.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, v.config = function (t) {
            return new n(t)
        }, n.ease = new n, f("Bounce", u("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function (t) {
            var e = .5 > t;
            return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), f("Circ", u("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), f("Elastic", (r = function (e, i, n) {
            var r = c("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
            }, !0), o = r.prototype = new t;
            return o.constructor = r, o.getRatio = i, o.config = function (t, e) {
                return new r(t, e)
            }, r
        })("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), r("ElasticIn", function (t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), r("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), f("Expo", u("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), f("Sine", u("SineOut", function (t) {
            return Math.sin(t * l)
        }), u("SineIn", function (t) {
            return 1 - Math.cos(t * l)
        }), u("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), c("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), d(o.SlowMo, "SlowMo", "ease,"), d(n, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), g
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = {}, n = t.document, r = t.GreenSockGlobals = t.GreenSockGlobals || t, o = r[e];
    if (o) return "undefined" != typeof module && module.exports && (module.exports = o), o;
    var s, a, l, c, u, d = function (t) {
        var e, i = t.split("."), n = r;
        for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
        return n
    }, f = d("com.greensock"), p = 1e-8, h = function (t) {
        var e, i = [], n = t.length;
        for (e = 0; e !== n; i.push(t[e++])) ;
        return i
    }, g = function () {
    }, m = function () {
        var t = Object.prototype.toString, e = t.call([]);
        return function (i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
        }
    }(), v = {}, y = function (n, o, s, a) {
        this.sc = v[n] ? v[n].sc : [], v[n] = this, this.gsClass = null, this.func = s;
        var l = [];
        this.check = function (c) {
            for (var u, f, p, h, g = o.length, m = g; --g > -1;) (u = v[o[g]] || new y(o[g], [])).gsClass ? (l[g] = u.gsClass, m--) : c && u.sc.push(this);
            if (0 === m && s) {
                if (p = (f = ("com.greensock." + n).split(".")).pop(), h = d(f.join("."))[p] = this.gsClass = s.apply(s, l), a) if (r[p] = i[p] = h, "undefined" != typeof module && module.exports) if (n === e) for (g in module.exports = i[e] = h, i) h[g] = i[g]; else i[e] && (i[e][p] = h); else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return h
                });
                for (g = 0; g < this.sc.length; g++) this.sc[g].check()
            }
        }, this.check(!0)
    }, _ = t._gsDefine = function (t, e, i, n) {
        return new y(t, e, i, n)
    }, x = f._class = function (t, e, i) {
        return e = e || function () {
        }, _(t, [], function () {
            return e
        }, i), e
    };
    _.globals = r;
    var b = [0, 0, 1, 1], w = x("easing.Ease", function (t, e, i, n) {
        this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b
    }, !0), T = w.map = {}, S = w.register = function (t, e, i, n) {
        for (var r, o, s, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;) for (o = l[c], r = n ? x("easing." + o, null, !0) : f.easing[o] || {}, s = u.length; --s > -1;) a = u[s], T[o + "." + a] = T[a + o] = r[a] = t.getRatio ? t : t[a] || new t
    };
    for ((l = w.prototype)._calcEnd = !1, l.getRatio = function (t) {
        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
        var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
    }, a = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = s[a] + ",Power" + a, S(new w(null, null, 1, a), l, "easeOut", !0), S(new w(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), S(new w(null, null, 3, a), l, "easeInOut");
    T.linear = f.easing.Linear.easeIn, T.swing = f.easing.Quad.easeInOut;
    var k = x("events.EventDispatcher", function (t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    (l = k.prototype).addEventListener = function (t, e, i, n, r) {
        r = r || 0;
        var o, s, a = this._listeners[t], l = 0;
        for (this !== c || u || c.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) (o = a[s]).c === e && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
        a.splice(l, 0, {c: e, s: i, up: n, pr: r})
    }, l.removeEventListener = function (t, e) {
        var i, n = this._listeners[t];
        if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
    }, l.dispatchEvent = function (t) {
        var e, i, n, r = this._listeners[t];
        if (r) for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) (n = r[e]) && (n.up ? n.c.call(n.s || i, {
            type: t,
            target: i
        }) : n.c.call(n.s || i))
    };
    var C = t.requestAnimationFrame, A = t.cancelAnimationFrame, P = Date.now || function () {
        return (new Date).getTime()
    }, F = P();
    for (a = (s = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !C;) C = t[s[a] + "RequestAnimationFrame"], A = t[s[a] + "CancelAnimationFrame"] || t[s[a] + "CancelRequestAnimationFrame"];
    x("Ticker", function (t, e) {
        var i, r, o, s, a, l = this, d = P(), f = !(!1 === e || !C) && "auto", p = 500, h = 33, m = function (t) {
            var e, n, c = P() - F;
            c > p && (d += c - h), F += c, l.time = (F - d) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= s ? .004 : s - e), n = !0), !0 !== t && (o = r(m)), n && l.dispatchEvent("tick")
        };
        k.call(l), l.time = l.frame = 0, l.tick = function () {
            m(!0)
        }, l.lagSmoothing = function (t, e) {
            return arguments.length ? (p = t || 1e8, void (h = Math.min(e, p, 0))) : 1e8 > p
        }, l.sleep = function () {
            null != o && (f && A ? A(o) : clearTimeout(o), r = g, o = null, l === c && (u = !1))
        }, l.wake = function (t) {
            null !== o ? l.sleep() : t ? d += -F + (F = P()) : l.frame > 10 && (F = P() - p + 5), r = 0 === i ? g : f && C ? C : function (t) {
                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
            }, l === c && (u = !0), m(2)
        }, l.fps = function (t) {
            return arguments.length ? (s = 1 / ((i = t) || 60), a = this.time + s, void l.wake()) : i
        }, l.useRAF = function (t) {
            return arguments.length ? (l.sleep(), f = t, void l.fps(i)) : f
        }, l.fps(t), setTimeout(function () {
            "auto" === f && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1)
        }, 1500)
    }), (l = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
    var E = x("core.Animation", function (t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, Z) {
            u || c.wake();
            var i = this.vars.useFrames ? G : Z;
            i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
    });
    c = E.ticker = new f.Ticker, (l = E.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
    var D = function () {
        u && P() - F > 2e3 && ("hidden" !== (n || {}).visibilityState || !c.lagSmoothing()) && c.wake();
        var t = setTimeout(D, 2e3);
        t.unref && t.unref()
    };
    D(), l.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, l.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
    }, l.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1)
    }, l.seek = function (t, e) {
        return this.totalTime(Number(t), !1 !== e)
    }, l.restart = function (t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
    }, l.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, l.render = function (t, e, i) {
    }, l.invalidate = function () {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
    }, l.isActive = function () {
        var t, e = this._timeline, i = this._startTime;
        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - p
    }, l._enabled = function (t, e) {
        return u || c.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, l._kill = function (t, e) {
        return this._enabled(!1, !1)
    }, l.kill = function (t, e) {
        return this._kill(t, e), this
    }, l._uncache = function (t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    }, l._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
        return i
    }, l._callback = function (t) {
        var e = this.vars, i = e[t], n = e[t + "Params"], r = e[t + "Scope"] || e.callbackScope || this;
        switch (n ? n.length : 0) {
            case 0:
                i.call(r);
                break;
            case 1:
                i.call(r, n[0]);
                break;
            case 2:
                i.call(r, n[0], n[1]);
                break;
            default:
                i.apply(r, n)
        }
    }, l.eventCallback = function (t, e, i, n) {
        if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, l.delay = function (t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, l.duration = function (t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, l.totalDuration = function (t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, l.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, l.totalTime = function (t, e, i) {
        if (u || c.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var n = this._totalDuration, r = this._timeline;
                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && K(), this.render(t, e, !1), N.length && K())
        }
        return this
    }, l.progress = l.totalProgress = function (t, e) {
        var i = this.duration();
        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
    }, l.startTime = function (t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, l.endTime = function (t) {
        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
    }, l.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        var e, i;
        for (t = t || p, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
        return this
    }, l.reversed = function (t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
    }, l.paused = function (t) {
        if (!arguments.length) return this._paused;
        var e, i, n = this._timeline;
        return t != this._paused && n && (u || t || c.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
    };
    var O = x("core.SimpleTimeline", function (t) {
        E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    (l = O.prototype = new E).constructor = O, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e, i, n) {
        var r, o;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (o = t._startTime; r && r._startTime > o;) r = r._prev;
        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
    }, l._remove = function (t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
    }, l.render = function (t, e, i) {
        var n, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
    }, l.rawTime = function () {
        return u || c.wake(), this._totalTime
    };
    var $ = x("TweenLite", function (e, i, n) {
        if (E.call(this, i, n), this.render = $.prototype.render, null == e) throw"Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : $.selector(e) || e;
        var r, o, s,
            a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
        if (this._overwrite = l = null == l ? Y[$.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0]) for (this._targets = s = h(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) (o = s[r]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(h(o))) : (this._siblings[r] = J(o, this, !1), 1 === l && this._siblings[r].length > 1 && et(o, this, null, 1, this._siblings[r])) : "string" == typeof (o = s[r--] = $.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1); else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -p, this.render(Math.min(0, -this._delay)))
    }, !0), M = function (e) {
        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
    };
    (l = $.prototype = new E).constructor = $, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, $.version = "2.1.1", $.defaultEase = l._ease = new w(null, null, 1, 1), $.defaultOverwrite = "auto", $.ticker = c, $.autoSleep = 120, $.lagSmoothing = function (t, e) {
        c.lagSmoothing(t, e)
    }, $.selector = t.$ || t.jQuery || function (e) {
        var i = t.$ || t.jQuery;
        return i ? ($.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
    };
    var N = [], R = {}, L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, j = /[\+-]=-?[\.\d]/, z = function (t) {
            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, B = function (t) {
            return (1e3 * t | 0) / 1e3 + ""
        }, q = function (t, e, i, n) {
            var r, o, s, a, l, c, u, d = [], f = 0, p = "", h = 0;
            for (d.start = t, d.end = e, t = d[0] = t + "", e = d[1] = e + "", i && (i(d), t = d[0], e = d[1]), d.length = 0, r = t.match(L) || [], o = e.match(L) || [], n && (n._next = null, n.blob = 1, d._firstPT = d._applyPT = n), l = o.length, a = 0; l > a; a++) u = o[a], p += (c = e.substr(f, e.indexOf(u, f) - f)) || !a ? c : ",", f += c.length, h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), u === r[a] || r.length <= a ? p += u : (p && (d.push(p), p = ""), s = parseFloat(r[a]), d.push(s), d._firstPT = {
                _next: d._firstPT,
                t: d,
                p: d.length - 1,
                s: s,
                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                f: 0,
                m: h && 4 > h ? Math.round : B
            }), f += u.length;
            return (p += e.substr(f)) && d.push(p), d.setRatio = z, j.test(e) && (d.end = null), d
        }, I = function (t, e, i, n, r, o, s, a, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var c = typeof t[e],
                u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                d = "get" !== i ? i : u ? s ? t[u](s) : t[u]() : t[e], f = "string" == typeof n && "=" === n.charAt(1),
                p = {
                    t: t,
                    p: e,
                    s: d,
                    f: "function" === c,
                    pg: 0,
                    n: r || e,
                    m: o ? "function" == typeof o ? o : Math.round : 0,
                    pr: 0,
                    c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
                };
            return ("number" != typeof d || "number" != typeof n && !f) && (s || isNaN(d) || !f && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (p.fp = s, p = {
                t: q(d, f ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : n, a || $.defaultStringFilter, p),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0,
                m: 0
            }) : (p.s = parseFloat(d), f || (p.c = parseFloat(n) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
        }, H = $._internals = {isArray: m, isSelector: M, lazyTweens: N, blobDif: q}, X = $._plugins = {},
        W = H.tweenLookup = {}, U = 0, V = H.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1,
            stagger: 1
        }, Y = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0},
        G = E._rootFramesTimeline = new O, Z = E._rootTimeline = new O, Q = 30, K = H.lazyRender = function () {
            var t, e, i = N.length;
            for (R = {}, t = 0; i > t; t++) (e = N[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
            N.length = 0
        };
    Z._startTime = c.time, G._startTime = c.frame, Z._active = G._active = !0, setTimeout(K, 1), E._updateRoot = $.render = function () {
        var t, e, i;
        if (N.length && K(), Z.render((c.time - Z._startTime) * Z._timeScale, !1, !1), G.render((c.frame - G._startTime) * G._timeScale, !1, !1), N.length && K(), c.frame >= Q) {
            for (i in Q = c.frame + (parseInt($.autoSleep, 10) || 120), W) {
                for (t = (e = W[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete W[i]
            }
            if ((!(i = Z._first) || i._paused) && $.autoSleep && !G._first && 1 === c._listeners.tick.length) {
                for (; i && i._paused;) i = i._next;
                i || c.sleep()
            }
        }
    }, c.addEventListener("tick", E._updateRoot);
    var J = function (t, e, i) {
        var n, r, o = t._gsTweenID;
        if (W[o || (t._gsTweenID = o = "t" + U++)] || (W[o] = {
            target: t,
            tweens: []
        }), e && ((n = W[o].tweens)[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
        return W[o].tweens
    }, tt = function (t, e, i, n) {
        var r, o, s = t.vars.onOverwrite;
        return s && (r = s(t, e, i, n)), (s = $.onOverwrite) && (o = s(t, e, i, n)), !1 !== r && !1 !== o
    }, et = function (t, e, i, n, r) {
        var o, s, a, l;
        if (1 === n || n >= 4) {
            for (l = r.length, o = 0; l > o; o++) if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0); else if (5 === n) break;
            return s
        }
        var c, u = e._startTime + p, d = [], f = 0, h = 0 === e._duration;
        for (o = r.length; --o > -1;) (a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || it(e, 0, h), 0 === it(a, c, h) && (d[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((h || !a._initted) && u - a._startTime <= 2 * p || (d[f++] = a)));
        for (o = f; --o > -1;) if (l = (a = d[o])._firstPT, 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted && l) {
            if (2 !== n && !tt(a, e)) continue;
            a._enabled(!1, !1) && (s = !0)
        }
        return s
    }, it = function (t, e, i) {
        for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
            if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
            n = n._timeline
        }
        return (o /= r) > e ? o - e : i && o === e || !t._initted && 2 * p > o - e ? p : (o += t.totalDuration() / t._timeScale / r) > e + p ? 0 : o - e - p
    };
    l._init = function () {
        var t, e, i, n, r, o, s = this.vars, a = this._overwrittenProps, l = this._duration, c = !!s.immediateRender,
            u = s.ease, d = this._startAt;
        if (s.startAt) {
            for (n in d && (d.render(-1, !0), d.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = $.to(this.target || {}, 0, r), c) if (this._time > 0) this._startAt = null; else if (0 !== l) return
        } else if (s.runBackwards && 0 !== l) if (d) d.render(-1, !0), d.kill(), this._startAt = null; else {
            for (n in 0 !== this._time && (c = !1), i = {}, s) V[n] && "autoCSS" !== n || (i[n] = s[n]);
            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== s.lazy, i.immediateRender = c, this._startAt = $.to(this.target, 0, i), c) {
                if (0 === this._time) return
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
        }
        if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, s.easeParams) : T[u] || $.defaultEase : $.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (o = this._targets.length, t = 0; o > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
        if (e && $._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = s.onUpdate, this._initted = !0
    }, l._initProps = function (e, i, n, r, o) {
        var s, a, l, c, u, d;
        if (null == e) return !1;
        for (s in R[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && X.css && !1 !== this.vars.autoCSS && function (t, e) {
            var i, n = {};
            for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        }(this.vars, e), this.vars) if (d = this.vars[s], V[s]) d && (d instanceof Array || d.push && m(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[s] = d = this._swapSelfInParams(d, this)); else if (X[s] && (c = new X[s])._onInitTween(e, this.vars[s], this, o)) {
            for (this._firstPT = u = {
                _next: this._firstPT,
                t: c,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: s,
                pg: 1,
                pr: c._priority,
                m: 0
            }, a = c._overwriteProps.length; --a > -1;) i[c._overwriteProps[a]] = this._firstPT;
            (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
        } else i[s] = I.call(this, e, s, "get", d, s, 0, null, this.vars.stringFilter, o);
        return r && this._kill(r, e) ? this._initProps(e, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && et(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), l)
    }, l.render = function (t, e, i) {
        var n, r, o, s, a = this, l = a._time, c = a._duration, u = a._rawPrevTime;
        if (t >= c - p && t >= 0) a._totalTime = a._time = c, a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1, a._reversed || (n = !0, r = "onComplete", i = i || a._timeline.autoRemoveChildren), 0 === c && (a._initted || !a.vars.lazy || i) && (a._startTime === a._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -p || u === p && "isPause" !== a.data) && u !== t && (i = !0, u > p && (r = "onReverseComplete")), a._rawPrevTime = s = !e || t || u === t ? t : p); else if (p > t) a._totalTime = a._time = 0, a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0, (0 !== l || 0 === c && u > 0) && (r = "onReverseComplete", n = a._reversed), t > -p ? t = 0 : 0 > t && (a._active = !1, 0 === c && (a._initted || !a.vars.lazy || i) && (u >= 0 && (u !== p || "isPause" !== a.data) && (i = !0), a._rawPrevTime = s = !e || t || u === t ? t : p)), (!a._initted || a._startAt && a._startAt.progress()) && (i = !0); else if (a._totalTime = a._time = t, a._easeType) {
            var d = t / c, f = a._easeType, h = a._easePower;
            (1 === f || 3 === f && d >= .5) && (d = 1 - d), 3 === f && (d *= 2), 1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d), a.ratio = 1 === f ? 1 - d : 2 === f ? d : .5 > t / c ? d / 2 : 1 - d / 2
        } else a.ratio = a._ease.getRatio(t / c);
        if (a._time !== l || i) {
            if (!a._initted) {
                if (a._init(), !a._initted || a._gc) return;
                if (!i && a._firstPT && (!1 !== a.vars.lazy && a._duration || a.vars.lazy && !a._duration)) return a._time = a._totalTime = l, a._rawPrevTime = u, N.push(a), void (a._lazy = [t, e]);
                a._time && !n ? a.ratio = a._ease.getRatio(a._time / c) : n && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1))
            }
            for (!1 !== a._lazy && (a._lazy = !1), a._active || !a._paused && a._time !== l && t >= 0 && (a._active = !0), 0 === l && (a._startAt && (t >= 0 ? a._startAt.render(t, !0, i) : r || (r = "_dummyGS")), a.vars.onStart && (0 !== a._time || 0 === c) && (e || a._callback("onStart"))), o = a._firstPT; o;) o.f ? o.t[o.p](o.c * a.ratio + o.s) : o.t[o.p] = o.c * a.ratio + o.s, o = o._next;
            a._onUpdate && (0 > t && a._startAt && -1e-4 !== t && a._startAt.render(t, !0, i), e || (a._time !== l || n || i) && a._callback("onUpdate")), r && (!a._gc || i) && (0 > t && a._startAt && !a._onUpdate && -1e-4 !== t && a._startAt.render(t, !0, i), n && (a._timeline.autoRemoveChildren && a._enabled(!1, !1), a._active = !1), !e && a.vars[r] && a._callback(r), 0 === c && a._rawPrevTime === p && s !== p && (a._rawPrevTime = 0))
        }
    }, l._kill = function (t, e, i) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : $.selector(e) || e;
        var n, r, o, s, a, l, c, u, d,
            f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
            p = this._firstPT;
        if ((m(e) || M(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0); else {
            if (this._targets) {
                for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                    a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                    break
                }
            } else {
                if (e !== this.target) return !1;
                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (a) {
                if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && ($.onOverwrite || this.vars.onOverwrite)) {
                    for (o in c) a[o] && (d || (d = []), d.push(o));
                    if ((d || !t) && !tt(this, i, e, d)) return !1
                }
                for (o in c) (s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                !this._firstPT && this._initted && p && this._enabled(!1, !1)
            }
        }
        return l
    }, l.invalidate = function () {
        this._notifyPluginsOfEnabled && $._onPluginEvent("_onDisable", this);
        var t = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -p, this.render(t, !1, !1 !== this.vars.lazy)), this
    }, l._enabled = function (t, e) {
        if (u || c.wake(), t && this._gc) {
            var i, n = this._targets;
            if (n) for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0); else this._siblings = J(this.target, this, !0)
        }
        return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && $._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
    }, $.to = function (t, e, i) {
        return new $(t, e, i)
    }, $.from = function (t, e, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new $(t, e, i)
    }, $.fromTo = function (t, e, i, n) {
        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new $(t, e, n)
    }, $.delayedCall = function (t, e, i, n, r) {
        return new $(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0
        })
    }, $.set = function (t, e) {
        return new $(t, 0, e)
    }, $.getTweensOf = function (t, e) {
        if (null == t) return [];
        var i, n, r, o;
        if (t = "string" != typeof t ? t : $.selector(t) || t, (m(t) || M(t)) && "number" != typeof t[0]) {
            for (i = t.length, n = []; --i > -1;) n = n.concat($.getTweensOf(t[i], e));
            for (i = n.length; --i > -1;) for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
        } else if (t._gsTweenID) for (i = (n = J(t).concat()).length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
        return n || []
    }, $.killTweensOf = $.killDelayedCallsTo = function (t, e, i) {
        "object" == typeof e && (i = e, e = !1);
        for (var n = $.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
    };
    var nt = x("plugins.TweenPlugin", function (t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
    }, !0);
    if (l = nt.prototype, nt.version = "1.19.0", nt.API = 2, l._firstPT = null, l._addTween = I, l.setRatio = z, l._kill = function (t) {
        var e, i = this._overwriteProps, n = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
        for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
        return !1
    }, l._mod = l._roundProps = function (t) {
        for (var e, i = this._firstPT; i;) (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
    }, $._onPluginEvent = function (t, e) {
        var i, n, r, o, s, a = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; a;) {
                for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : o = a, a = s
            }
            a = e._firstPT = r
        }
        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
        return i
    }, nt.activate = function (t) {
        for (var e = t.length; --e > -1;) t[e].API === nt.API && (X[(new t[e])._propName] = t[e]);
        return !0
    }, _.plugin = function (t) {
        if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
        var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, o = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, s = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
            nt.call(this, i, n), this._overwriteProps = r || []
        }, !0 === t.global), a = s.prototype = new nt(i);
        for (e in a.constructor = s, s.API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
        return s.version = t.version, nt.activate([s]), s
    }, s = t._gsQueue) {
        for (a = 0; a < s.length; a++) s[a]();
        for (l in v) v[l].func || t.console.log("GSAP encountered missing dependency: " + l)
    }
    u = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
}(this, function () {
    "use strict";
    var t = function () {
    };
    t.version = "2.0.6", window.addEventListener("mousewheel", function () {
    });
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function (n) {
        var o, s, a = "REVERSE", l = "PAUSED", c = i.defaults, u = this, d = r.extend({}, c, n), f = [], p = !1, h = 0,
            g = l, m = !0, v = 0, y = !0, _ = function () {
                d.refreshInterval > 0 && (s = window.setTimeout(C, d.refreshInterval))
            }, x = function () {
                return d.vertical ? r.get.scrollTop(d.container) : r.get.scrollLeft(d.container)
            }, b = function () {
                return d.vertical ? r.get.height(d.container) : r.get.width(d.container)
            }, w = this._setScrollPos = function (t) {
                d.vertical ? m ? window.scrollTo(r.get.scrollLeft(), t) : d.container.scrollTop = t : m ? window.scrollTo(t, r.get.scrollTop()) : d.container.scrollLeft = t
            }, T = function () {
                if (y && p) {
                    var t = r.type.Array(p) ? p : f.slice(0);
                    p = !1;
                    var e = h, i = (h = u.scrollPos()) - e;
                    0 !== i && (g = i > 0 ? "FORWARD" : a), g === a && t.reverse(), t.forEach(function (t) {
                        t.update(!0)
                    })
                }
            }, S = function () {
                o = r.rAF(T)
            }, k = function (t) {
                "resize" == t.type && (v = b(), g = l), !0 !== p && (p = !0, S())
            }, C = function () {
                if (!m && v != b()) {
                    var t;
                    try {
                        t = new Event("resize", {bubbles: !1, cancelable: !1})
                    } catch (e) {
                        (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    d.container.dispatchEvent(t)
                }
                f.forEach(function (t) {
                    t.refresh()
                }), _()
            };
        this._options = d;
        var A = function (t) {
            if (t.length <= 1) return t;
            var e = t.slice(0);
            return e.sort(function (t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }), e
        };
        return this.addScene = function (e) {
            if (r.type.Array(e)) e.forEach(function (t) {
                u.addScene(t)
            }); else if (e instanceof t.Scene) if (e.controller() !== u) e.addTo(u); else if (f.indexOf(e) < 0) for (var i in f.push(e), f = A(f), e.on("shift.controller_sort", function () {
                f = A(f)
            }), d.globalSceneOptions) e[i] && e[i].call(e, d.globalSceneOptions[i]);
            return u
        }, this.removeScene = function (t) {
            if (r.type.Array(t)) t.forEach(function (t) {
                u.removeScene(t)
            }); else {
                var e = f.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove())
            }
            return u
        }, this.updateScene = function (e, i) {
            return r.type.Array(e) ? e.forEach(function (t) {
                u.updateScene(t, i)
            }) : i ? e.update(!0) : !0 !== p && e instanceof t.Scene && (-1 == (p = p || []).indexOf(e) && p.push(e), p = A(p), S()), u
        }, this.update = function (t) {
            return k({type: "resize"}), t && T(), u
        }, this.scrollTo = function (i, n) {
            if (r.type.Number(i)) w.call(d.container, i, n); else if (i instanceof t.Scene) i.controller() === u && u.scrollTo(i.scrollOffset(), n); else if (r.type.Function(i)) w = i; else {
                var o = r.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(e);) o = o.parentNode;
                    var s = d.vertical ? "top" : "left", a = r.get.offset(d.container), l = r.get.offset(o);
                    m || (a[s] -= u.scrollPos()), u.scrollTo(l[s] - a[s], n)
                }
            }
            return u
        }, this.scrollPos = function (t) {
            return arguments.length ? (r.type.Function(t) && (x = t), u) : x.call(u)
        }, this.info = function (t) {
            var e = {
                size: v,
                vertical: d.vertical,
                scrollPos: h,
                scrollDirection: g,
                container: d.container,
                isDocument: m
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }, this.loglevel = function () {
            return u
        }, this.enabled = function (t) {
            return arguments.length ? (y != t && (y = !!t, u.updateScene(f, !0)), u) : y
        }, this.destroy = function (t) {
            window.clearTimeout(s);
            for (var e = f.length; e--;) f[e].destroy(t);
            return d.container.removeEventListener("resize", k), d.container.removeEventListener("scroll", k), r.cAF(o), null
        }, function () {
            for (var t in d) c.hasOwnProperty(t) || delete d[t];
            if (d.container = r.get.elements(d.container)[0], !d.container) throw"ScrollMagic.Controller init failed.";
            (m = d.container === window || d.container === document.body || !document.body.contains(d.container)) && (d.container = window), v = b(), d.container.addEventListener("resize", k), d.container.addEventListener("scroll", k);
            var e = parseInt(d.refreshInterval, 10);
            d.refreshInterval = r.type.Number(e) ? e : c.refreshInterval, _()
        }(), u
    };
    var i = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
    t.Controller.addOption = function (t, e) {
        i.defaults[t] = e
    }, t.Controller.extend = function (e) {
        var i = this;
        t.Controller = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
    }, t.Scene = function (i) {
        var o, s, a = "BEFORE", l = "DURING", c = "AFTER", u = n.defaults, d = this, f = r.extend({}, u, i), p = a,
            h = 0, g = {start: 0, end: 0}, m = 0, v = !0, y = {};
        this.on = function (t, e) {
            return r.type.Function(e) && (t = t.trim().split(" ")).forEach(function (t) {
                var i = t.split("."), n = i[0], r = i[1];
                "*" != n && (y[n] || (y[n] = []), y[n].push({namespace: r || "", callback: e}))
            }), d
        }, this.off = function (t, e) {
            return t ? ((t = t.trim().split(" ")).forEach(function (t) {
                var i = t.split("."), n = i[0], r = i[1] || "";
                ("*" === n ? Object.keys(y) : [n]).forEach(function (t) {
                    for (var i = y[t] || [], n = i.length; n--;) {
                        var o = i[n];
                        !o || r !== o.namespace && "*" !== r || e && e != o.callback || i.splice(n, 1)
                    }
                    i.length || delete y[t]
                })
            }), d) : d
        }, this.trigger = function (e, i) {
            if (e) {
                var n = e.trim().split("."), r = n[0], o = n[1], s = y[r];
                s && s.forEach(function (e) {
                    o && o !== e.namespace || e.callback.call(d, new t.Event(r, e.namespace, d, i))
                })
            }
            return d
        }, d.on("change.internal", function (t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? T() : "reverse" === t.what && d.update())
        }).on("shift.internal", function () {
            b(), d.update()
        }), this.addTo = function (e) {
            return e instanceof t.Controller && s != e && (s && s.removeScene(d), s = e, C(), w(!0), T(!0), b(), s.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {controller: s}), d.update()), d
        }, this.enabled = function (t) {
            return arguments.length ? (v != t && (v = !!t, d.update(!0)), d) : v
        }, this.remove = function () {
            if (s) {
                s.info("container").removeEventListener("resize", S);
                var t = s;
                s = void 0, t.removeScene(d), d.trigger("remove")
            }
            return d
        }, this.destroy = function (t) {
            return d.trigger("destroy", {reset: t}), d.remove(), d.off("*.*"), null
        }, this.update = function (t) {
            if (s) if (t) if (s.enabled() && v) {
                var e, i = s.info("scrollPos");
                e = f.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, d.trigger("update", {
                    startPos: g.start,
                    endPos: g.end,
                    scrollPos: i
                }), d.progress(e)
            } else _ && p === l && F(!0); else s.updateScene(d, !1);
            return d
        }, this.refresh = function () {
            return w(), T(), d
        }, this.progress = function (t) {
            if (arguments.length) {
                var e = !1, i = p, n = s ? s.info("scrollDirection") : "PAUSED", r = f.reverse || t >= h;
                if (0 === f.duration ? (e = h != t, p = 0 == (h = 1 > t && r ? 0 : 1) ? a : l) : 0 > t && p !== a && r ? (h = 0, p = a, e = !0) : t >= 0 && 1 > t && r ? (h = t, p = l, e = !0) : t >= 1 && p !== c ? (h = 1, p = c, e = !0) : p !== l || r || F(), e) {
                    var o = {progress: h, state: p, scrollDirection: n}, u = p != i, g = function (t) {
                        d.trigger(t, o)
                    };
                    u && i !== l && (g("enter"), g(i === a ? "start" : "end")), g("progress"), u && p !== l && (g(p === a ? "start" : "end"), g("leave"))
                }
                return d
            }
            return h
        };
        var _, x, b = function () {
            g = {start: m + f.offset}, s && f.triggerElement && (g.start -= s.info("size") * f.triggerHook), g.end = g.start + f.duration
        }, w = function (t) {
            if (o) {
                var e = "duration";
                A(e, o.call(d)) && !t && (d.trigger("change", {what: e, newval: f[e]}), d.trigger("shift", {reason: e}))
            }
        }, T = function (t) {
            var i = 0, n = f.triggerElement;
            if (s && (n || m > 0)) {
                if (n) if (n.parentNode) {
                    for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                    var c = r.get.offset(n);
                    o.isDocument || (a[l] -= s.scrollPos()), i = c[l] - a[l]
                } else d.triggerElement(void 0);
                var u = i != m;
                m = i, u && !t && d.trigger("shift", {reason: "triggerElementPosition"})
            }
        }, S = function () {
            f.triggerHook > 0 && d.trigger("shift", {reason: "containerResize"})
        }, k = r.extend(n.validate, {
            duration: function (t) {
                if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function () {
                        return s ? s.info("size") * e : 0
                    }
                }
                if (r.type.Function(t)) {
                    o = t;
                    try {
                        t = parseFloat(o())
                    } catch (e) {
                        t = -1
                    }
                }
                if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw o ? (o = void 0, 0) : 0;
                return t
            }
        }), C = function (t) {
            (t = arguments.length ? [t] : Object.keys(k)).forEach(function (t) {
                var e;
                if (k[t]) try {
                    e = k[t](f[t])
                } catch (i) {
                    e = u[t]
                } finally {
                    f[t] = e
                }
            })
        }, A = function (t, e) {
            var i = !1, n = f[t];
            return f[t] != e && (f[t] = e, C(t), i = n != f[t]), i
        }, P = function (t) {
            d[t] || (d[t] = function (e) {
                return arguments.length ? ("duration" === t && (o = void 0), A(t, e) && (d.trigger("change", {
                    what: t,
                    newval: f[t]
                }), n.shifts.indexOf(t) > -1 && d.trigger("shift", {reason: t})), d) : f[t]
            })
        };
        this.controller = function () {
            return s
        }, this.state = function () {
            return p
        }, this.scrollOffset = function () {
            return g.start
        }, this.triggerPosition = function () {
            var t = f.offset;
            return s && (t += f.triggerElement ? m : s.info("size") * d.triggerHook()), t
        }, d.on("shift.internal", function (t) {
            var e = "duration" === t.reason;
            (p === c && e || p === l && 0 === f.duration) && F(), e && E()
        }).on("progress.internal", function () {
            F()
        }).on("add.internal", function () {
            E()
        }).on("destroy.internal", function (t) {
            d.removePin(t.reset)
        });
        var F = function (t) {
            if (_ && s) {
                var e = s.info(), i = x.spacer.firstChild;
                if (t || p !== l) {
                    var n = {position: x.inFlow ? "relative" : "absolute", top: 0, left: 0},
                        o = r.css(i, "position") != n.position;
                    x.pushFollowers ? f.duration > 0 && (p === c && 0 === parseFloat(r.css(x.spacer, "padding-top")) ? o = !0 : p === a && 0 === parseFloat(r.css(x.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = f.duration * h, r.css(i, n), o && E()
                } else {
                    "fixed" != r.css(i, "position") && (r.css(i, {position: "fixed"}), E());
                    var u = r.get.offset(x.spacer, !0),
                        d = f.reverse || 0 === f.duration ? e.scrollPos - g.start : Math.round(h * f.duration * 10) / 10;
                    u[e.vertical ? "top" : "left"] += d, r.css(x.spacer.firstChild, {top: u.top, left: u.left})
                }
            }
        }, E = function () {
            if (_ && s && x.inFlow) {
                var t = p === l, e = s.info("vertical"), i = x.spacer.firstChild,
                    n = r.isMarginCollapseType(r.css(x.spacer, "display")), o = {};
                x.relSize.width || x.relSize.autoFullWidth ? t ? r.css(_, {width: r.get.width(x.spacer)}) : r.css(_, {width: "100%"}) : (o["min-width"] = r.get.width(e ? _ : i, !0, !0), o.width = t ? o["min-width"] : "auto"), x.relSize.height ? t ? r.css(_, {height: r.get.height(x.spacer) - (x.pushFollowers ? f.duration : 0)}) : r.css(_, {height: "100%"}) : (o["min-height"] = r.get.height(e ? i : _, !0, !n), o.height = t ? o["min-height"] : "auto"), x.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = f.duration * h, o["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - h)), r.css(x.spacer, o)
            }
        }, D = function () {
            s && _ && p === l && !s.info("isDocument") && F()
        }, O = function () {
            s && _ && p === l && ((x.relSize.width || x.relSize.autoFullWidth) && r.get.width(window) != r.get.width(x.spacer.parentNode) || x.relSize.height && r.get.height(window) != r.get.height(x.spacer.parentNode)) && E()
        }, $ = function (t) {
            s && _ && p === l && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
        };
        this.setPin = function (t, i) {
            if (i = r.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, i), !(t = r.get.elements(t)[0])) return d;
            if ("fixed" === r.css(t, "position")) return d;
            if (_) {
                if (_ === t) return d;
                d.removePin()
            }
            var n = (_ = t).parentNode.style.display,
                o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            _.parentNode.style.display = "none";
            var s = "absolute" != r.css(_, "position"), a = r.css(_, o.concat(["display"])),
                l = r.css(_, ["width", "height"]);
            _.parentNode.style.display = n, !s && i.pushFollowers && (i.pushFollowers = !1);
            var c = _.parentNode.insertBefore(document.createElement("div"), _), u = r.extend(a, {
                position: s ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (s || r.extend(u, r.css(_, ["width", "height"])), r.css(c, u), c.setAttribute(e, ""), r.addClass(c, i.spacerClass), x = {
                spacer: c,
                relSize: {
                    width: "%" === l.width.slice(-1),
                    height: "%" === l.height.slice(-1),
                    autoFullWidth: "auto" === l.width && s && r.isMarginCollapseType(a.display)
                },
                pushFollowers: i.pushFollowers,
                inFlow: s
            }, !_.___origStyle) {
                _.___origStyle = {};
                var f = _.style;
                o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (t) {
                    _.___origStyle[t] = f[t] || ""
                })
            }
            return x.relSize.width && r.css(c, {width: l.width}), x.relSize.height && r.css(c, {height: l.height}), c.appendChild(_), r.css(_, {
                position: s ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (x.relSize.width || x.relSize.autoFullWidth) && r.css(_, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", D), window.addEventListener("resize", D), window.addEventListener("resize", O), _.addEventListener("mousewheel", $), _.addEventListener("DOMMouseScroll", $), F(), d
        }, this.removePin = function (t) {
            if (_) {
                if (p === l && F(!0), t || !s) {
                    var i = x.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var n = x.spacer.style, o = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (t) {
                            o[t] = n[t] || ""
                        }), r.css(i, o)
                    }
                    x.spacer.parentNode.insertBefore(i, x.spacer), x.spacer.parentNode.removeChild(x.spacer), _.parentNode.hasAttribute(e) || (r.css(_, _.___origStyle), delete _.___origStyle)
                }
                window.removeEventListener("scroll", D), window.removeEventListener("resize", D), window.removeEventListener("resize", O), _.removeEventListener("mousewheel", $), _.removeEventListener("DOMMouseScroll", $), _ = void 0
            }
            return d
        };
        var M, N = [];
        return d.on("destroy.internal", function (t) {
            d.removeClassToggle(t.reset)
        }), this.setClassToggle = function (t, e) {
            var i = r.get.elements(t);
            return 0 !== i.length && r.type.String(e) ? (N.length > 0 && d.removeClassToggle(), M = e, N = i, d.on("enter.internal_class leave.internal_class", function (t) {
                var e = "enter" === t.type ? r.addClass : r.removeClass;
                N.forEach(function (t) {
                    e(t, M)
                })
            }), d) : d
        }, this.removeClassToggle = function (t) {
            return t && N.forEach(function (t) {
                r.removeClass(t, M)
            }), d.off("start.internal_class end.internal_class"), M = void 0, N = [], d
        }, function () {
            for (var t in f) u.hasOwnProperty(t) || delete f[t];
            for (var e in u) P(e);
            C()
        }(), d
    };
    var n = {
        defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
        validate: {
            offset: function (t) {
                if (t = parseFloat(t), !r.type.Number(t)) throw 0;
                return t
            }, triggerElement: function (t) {
                if (t = t || void 0) {
                    var e = r.get.elements(t)[0];
                    if (!e || !e.parentNode) throw 0;
                    t = e
                }
                return t
            }, triggerHook: function (t) {
                var e = {onCenter: .5, onEnter: 1, onLeave: 0};
                if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1)); else {
                    if (!(t in e)) throw 0;
                    t = e[t]
                }
                return t
            }, reverse: function (t) {
                return !!t
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function (t, e, i, r) {
        t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, r && n.shifts.push(t))
    }, t.Scene.extend = function (e) {
        var i = this;
        t.Scene = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
    }, t.Event = function (t, e, i, n) {
        for (var r in n = n || {}) this[r] = n[r];
        return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = t._util = function (t) {
        var e, i = {}, n = function (t) {
            return parseFloat(t) || 0
        }, r = function (e) {
            return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
        }, o = function (e, i, o, s) {
            if ((i = i === document ? t : i) === t) s = !1; else if (!d.DomElement(i)) return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
            if (o && s) {
                var l = r(i);
                a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
            }
            return a
        }, s = function (t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                return t[1].toUpperCase()
            })
        };
        i.extend = function (t) {
            for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }, i.isMarginCollapseType = function (t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
        };
        var a = 0, l = ["ms", "moz", "webkit", "o"], c = t.requestAnimationFrame, u = t.cancelAnimationFrame;
        for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function (e) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), r = t.setTimeout(function () {
                e(i + n)
            }, n);
            return a = i + n, r
        }), u || (u = function (e) {
            t.clearTimeout(e)
        }), i.rAF = c.bind(t), i.cAF = u.bind(t);
        var d = i.type = function (t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        d.String = function (t) {
            return "string" === d(t)
        }, d.Function = function (t) {
            return "function" === d(t)
        }, d.Array = function (t) {
            return Array.isArray(t)
        }, d.Number = function (t) {
            return !d.Array(t) && t - parseFloat(t) + 1 >= 0
        }, d.DomElement = function (t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        };
        var f = i.get = {};
        return f.elements = function (e) {
            var i = [];
            if (d.String(e)) try {
                e = document.querySelectorAll(e)
            } catch (t) {
                return i
            }
            if ("nodelist" === d(e) || d.Array(e)) for (var n = 0, r = i.length = e.length; r > n; n++) {
                var o = e[n];
                i[n] = d.DomElement(o) ? o : f.elements(o)
            } else (d.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        }, f.scrollTop = function (e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
        }, f.scrollLeft = function (e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
        }, f.width = function (t, e, i) {
            return o("width", t, e, i)
        }, f.height = function (t, e, i) {
            return o("height", t, e, i)
        }, f.offset = function (t, e) {
            var i = {top: 0, left: 0};
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect();
                i.top = n.top, i.left = n.left, e || (i.top += f.scrollTop(), i.left += f.scrollLeft())
            }
            return i
        }, i.addClass = function (t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e)
        }, i.removeClass = function (t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, i.css = function (t, e) {
            if (d.String(e)) return r(t)[s(e)];
            if (d.Array(e)) {
                var i = {}, n = r(t);
                return e.forEach(function (t) {
                    i[t] = n[s(t)]
                }), i
            }
            for (var o in e) {
                var a = e[o];
                a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
            }
        }, i
    }(window || {});
    return t
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
}(this, function (t, e, i) {
    "use strict";
    t.Scene.addOption("tweenChanges", !1, function (t) {
        return !!t
    }), t.Scene.extend(function () {
        var t, n = this;
        n.on("progress.plugin_gsap", function () {
            r()
        }), n.on("destroy.plugin_gsap", function (t) {
            n.removeTween(t.reset)
        });
        var r = function () {
            if (t) {
                var e = n.progress(), i = n.state();
                t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
            }
        };
        n.setTween = function (o, s, a) {
            var l;
            arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = e.to(o, s, a));
            try {
                (l = i ? new i({smoothChildTiming: !0}).add(o) : o).pause()
            } catch (t) {
                return n
            }
            return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n
        }, n.removeTween = function (e) {
            return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
        }
    })
}), $(".question-list ul li a, .service-pros-text .more a").click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href"), i = $(e).offset().top - 100;
    $("html, body").animate({scrollTop: i}, 1500)
}), $(".request-popup-btn").click(function (t) {
    t.preventDefault();
    let e = $('.request-question input[name="fullname"]'), i = $('.request-question select[name="consultation"]'),
        n = $('.request-question input[name="phone"]'), r = $('.request-question input[name="email"]');
    var o = i.find("option:selected").data("type");
    "" != e.val() ? e.css("border-color", "#222") : e.css("border-color", "red"), "" != i.val() ? i.css("border-color", "#222") : i.css("border-color", "red"), "" != n.val() ? n.css("border-color", "#222") : n.css("border-color", "red"), validateEmail(r.val()) ? r.css("border-color", "#222") : r.css("border-color", "red"), "" != e.val() && "" != i.val() && "" != n.val() && validateEmail(r.val()) && (dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: i.val(),
        event: "autoEvent"
    }), $.ajax({
        type: "post",
        url: "/site/request",
        data: {name: e.val(), type: i.val(), esputnik: o, phone: n.val(), email: r.val()},
        dataType: "json",
        beforeSend: function (t) {
            $(".request-popup-btn").attr("disabled", "disabled").text("Відправлення...").removeClass("btn-primary").addClass("btn-primary-disable").css({cursor: "wait"})
        },
        complete: function (t) {
            $(".request-popup-btn").text("Надіслано").css({cursor: "default"}), $(window).innerHeight() < 768 ? $(".request-question .form-compelete").css("display", "block;").hide().fadeIn() : $(".request-question .form-compelete").css("display", "inline-flex;").hide().fadeIn()
        }
    }))
}), $(".connect-btn").click(function (t) {
    t.preventDefault();
    let e = $('.connect__content-question input[name="fullname"]'),
        i = $('.connect__content-question textarea[name="question"]'),
        n = $('.connect__content-question input[name="phone"]'),
        r = $('.connect__content-question input[name="email"]'), o = "";
    o = "" != e.val() && "" != r.val() && "" != n.val() && validateEmail(r.val()) ? "autoEvent" : "falseRequest", dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: i.val(),
        event: o
    }), "" != e.val() ? e.removeClass("input-error") : e.addClass("input-error"), "" != n.val() ? n.removeClass("input-error") : n.addClass("input-error"), validateEmail(r.val()) ? r.removeClass("input-error") : r.addClass("input-error"), "" != e.val() && "" != n.val() && validateEmail(r.val()) && $.ajax({
        type: "post",
        url: "/site/request",
        data: {name: e.val(), type: i.val(), phone: n.val(), email: r.val()},
        dataType: "json",
        beforeSend: function (t) {
            $(".connect-btn").attr("disabled", "disabled").removeClass("btn-primary").addClass("btn-primary-disable").css({cursor: "wait"})
        },
        complete: function (t) {
            $(".connect-btn").parents(".message").slideUp(), $(".connect-btn").css({cursor: "default"}), $(".connect__content-question .form-compelete").fadeIn(300)
        }
    })
}), $(".btn-subscribe").click(function (t) {
    t.preventDefault();
    let e = $('.subscribe input[name="email"]');
    validateEmail(e.val()) ? e.removeClass("input-error") : e.addClass("input-error"), validateEmail(e.val()) && (dataLayer.push({
        eventCategory: "form",
        eventAction: "sent",
        eventLabel: "subscribe",
        event: "autoEvent"
    }), $.ajax({
        type: "post",
        url: "/site/subscribe",
        data: {email: e.val(), esputnik: "Pidtverdzhennya_pidpysku"},
        dataType: "json",
        beforeSend: function (t) {
            e.attr("disabled", "disabled"), $(".btn-subscribe").attr("disabled", "disabled").css({cursor: "wait"})
        },
        complete: function (t) {
            $(".btn-subscribe").css({cursor: "default"}), $(".newsletter-wrap .success-msg").slideDown(300)
        }
    }))
}), defer(function () {
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
        responsive: [{breakpoint: 1536, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
            breakpoint: 1366,
            settings: {slidesToShow: 2, slidesToScroll: 2}
        }, {
            breakpoint: 769,
            settings: {slidesToShow: 1, slidesToScroll: 1, touchMove: !0, accesibility: !0, draggable: !0, swipe: !0}
        }]
    }), $(".complex__content-list").slick({
        infinite: !1,
        slidesToShow: 3,
        arrows: !1,
        responsive: [{breakpoint: 1366, settings: {slidesToShow: 3}}, {
            breakpoint: 1025,
            settings: {slidesToShow: 2, slidesToScroll: 1, variableWidth: !0}
        }, {
            breakpoint: 769,
            settings: {slidesToShow: 1, slidesToScroll: 1, variableWidth: !0, centerMode: !0}
        }, {breakpoint: 480, settings: {slidesToShow: 1, centerMode: !0, centerPadding: "30px"}}]
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
            settings: {touchMove: !1, accesibility: !1, draggable: !1, swipe: !1, adaptiveHeight: !0}
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
        responsive: [{breakpoint: 420, settings: {slidesToShow: 3}}]
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
}, 100), $(".type-item__content-title").click(function (t) {
    t.preventDefault();
    var e = $(this).parents(".type__content-list__item").data("type"),
        i = ($(this).parents(".type-item__content"), $(this).parents(".type__content-list__item")), n = "#networkBack",
        r = "#networkPath",
        o = "M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201",
        s = "M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z",
        a = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z",
        l = "#standaloneBack", c = "#standalonePath",
        u = "M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z",
        d = "M104.1,160.4c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6 c-11.7,34.3-53.3,49.6-106.2,49.3S96.9,208.5,104.1,160.4L104.1,160.4",
        f = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z",
        p = "M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z",
        h = "#hybridBack", g = "#hybridPath",
        m = "M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z",
        v = "M440,209.2c1.1,108.6-62.8,210.3-209.2,205.7S-48.9,305.6,17.6,123.2C65.1-7.3,173.8-9.5,260.7,7.3 C334.1,21.4,438.7,72.3,440,209.2z",
        y = "M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z";
    $(".type__content-list__item").filter(function () {
        return $(this).data("type") != e
    }).removeClass("active").delay(300).find(".type-item__content-text, .type-item__content-button").fadeOut(150), i.addClass("active"), $(window).width() <= 1440 && $(window).width() > 1024 ? (changeSize(l, 430, 334.7), changeSize(n, 437.3, 415.3), changeSize(h, 440, 415.1)) : $(window).width() <= 1024 ? (changeSize(n, 310, 230.007), changeSize(l, 310, 230.007), changeSize(h, 310, 230.007)) : $(window).width() > 1440 && (changeSize(n, 437.3, 415.3), changeSize(l, 524.1, 408), changeSize(h, 440, 415.1)), i.find(".type-item__content-text, .type-item__content-button").delay(500).fadeIn(500), "network" == e ? $(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, d), animateType(n, r, s), animateType(h, g, m)) : $(window).width() <= 1024 ? (animateType(n, r, "M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z"), animateType(l, c, f), animateType(h, g, y)) : $(window).width() > 1440 && (animateType(n, r, s), animateType(l, c, u), animateType(h, g, m)) : "standalone" == e ? $(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, "M1.1,146.6c0,0,4.5-155.5,207.2-146.2c96.5,4.4,242.1,86.7,219.4,188.1 S324.7,335.4,222.8,334.7C120.8,334.1-13,289.1,1.1,146.6z"), animateType(n, r, o), animateType(h, g, m)) : $(window).width() <= 1024 ? (animateType(n, r, a), animateType(l, c, p), animateType(h, g, y)) : $(window).width() > 1440 && (animateType(n, r, o), animateType(l, c, "M1.3,178.7c0,0,5.5-189.5,252.5-178.2c117.6,5.4,295.1,105.7,267.4,229.3S395.8,408.8,271.5,408 S-15.8,352.4,1.3,178.7z"), animateType(h, g, m)) : "hybrid" == e && ($(window).width() <= 1440 && $(window).width() > 1024 ? (animateType(l, c, d), animateType(n, r, o), animateType(h, g, v)) : $(window).width() <= 1024 ? (animateType(n, r, a), animateType(l, c, f), animateType(h, g, p)) : $(window).width() > 1440 && (animateType(n, r, o), animateType(l, c, u), animateType(h, g, v)))
}), jQuery(function (t) {
    t('input[name="phone"]').mask("+38 (099) 999-99-99")
}), tabs(".tabs-equipment"), tabs(".tabs-types"), tabs(".tabs-types"), tabsType(".tabs-network"), tabsType(".tabs-standalone"), tabsType(".tabs-hybrid"), $(".navbar__right-item").click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href");
    $(e).offset().top, $("html, body").animate({scrollTop: $(document).outerHeight()}, 3e3)
}), $(".service-info__content-info .btn, .greenwhy__content-info__more .btn").click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href"), i = $(e).offset().top - 100;
    $("html, body").animate({scrollTop: i}, 1e3)
}), $(".slider-network-list .slider-type__list-item").click(function () {
    let t = $(this).data("slick-index");
    $(".slider-network-content").slick("slickGoTo", parseInt(t), !0)
}), $(".slider-hybrid-list .slider-type__list-item").click(function () {
    let t = $(this).data("slick-index");
    $(".slider-hybrid-content").slick("slickGoTo", parseInt(t), !0)
}), $(".slider-standalone-list .slider-type__list-item").click(function () {
    let t = $(this).data("slick-index");
    $(".slider-standalone-content").slick("slickGoTo", parseInt(t), !0)
}), $("#nav-icon").click(function (t) {
    t.preventDefault(), $(".navbar-mobile").fadeIn(), $("body").css("overflow-y", "hidden")
}), $(".navbar-close").click(function (t) {
    t.preventDefault(), $(".navbar-mobile").fadeOut(), $(".header__button").fadeIn(), $("body").css("overflow-y", "scroll")
}), $(document).ready(function () {
    $(".project-info__content-description").find("span").css("font-family", "Montserrat, sans-serif"), $(".project-info__content-description").find("span").css("font-size", "font-size: 14pt"), $(".project-info__content-description").find("strong").css("font-size", "font-size: 14pt"), defer(function () {
        $(".tabs__content").height($(".tabs__content").height())
    }, 2e3), $(window).on("load", function () {
        $(".tabs__content").height($(".tabs__content").height())
    })
}), window.googleMapsScriptLoaded = function () {
    $(window).trigger("googleMapsScriptLoaded")
}, function (t, e) {
    "use strict";
    var i = t(e), n = t("body"), r = i.height(), o = 0, s = function (t, e) {
        var i = null;
        return function () {
            var n = this, r = arguments;
            clearTimeout(i), i = setTimeout(function () {
                e.apply(n, r)
            }, t)
        }
    }, a = function (t, e) {
        var i, n;
        return function () {
            var r = this, o = arguments, s = +new Date;
            i && i + t > s ? (clearTimeout(n), n = setTimeout(function () {
                i = s, e.apply(r, o)
            }, t)) : (i = s, e.apply(r, o))
        }
    }, l = !1, c = !1, u = t([]), d = function () {
        o = i.scrollTop(), u.each(function () {
            var e = t(this), i = e.data("options");
            if (e.offset().top - o > 1 * r) return !0;
            if (!l && !c) {
                var s = {callback: "googleMapsScriptLoaded", signed_in: i.signed_in};
                i.key && (s.key = i.key), i.libraries && (s.libraries = i.libraries), i.language && (s.language = i.language), i.region && (s.region = i.region), n.append('<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&' + t.param(s) + '"><\/script>'), c = !0
            }
            if (!l) return !0;
            var a = new google.maps.Map(this, {zoom: 15});
            !1 !== i.callback && i.callback(this, a), u = u.not(e)
        })
    };
    i.on("googleMapsScriptLoaded", function () {
        l = !0, d()
    }).on("scroll", a(500, d)).on("resize", s(1e3, function () {
        r = i.height(), d()
    })), t.fn.lazyLoadGoogleMaps = function (e) {
        return e = t.extend({
            key: !1,
            libraries: !1,
            signed_in: !1,
            language: !1,
            region: !1,
            callback: !1
        }, e), this.each(function () {
            var i = t(this);
            i.data("options", e), u = u.add(i)
        }), d(), this.debounce = s, this.throttle = a, this
    }
}(jQuery, window, document);