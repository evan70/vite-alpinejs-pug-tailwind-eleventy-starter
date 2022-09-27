var ir =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
		? window
		: typeof global < "u"
		? global
		: typeof self < "u"
		? self
		: {};
(function (e, t) {
	(function (n, r) {
		r();
	})(ir, function () {
		function n(a) {
			var i = !0,
				s = !1,
				o = null,
				u = {
					text: !0,
					search: !0,
					url: !0,
					tel: !0,
					email: !0,
					password: !0,
					number: !0,
					date: !0,
					month: !0,
					week: !0,
					time: !0,
					datetime: !0,
					"datetime-local": !0,
				};
			function c(f) {
				return !!(
					f &&
					f !== document &&
					f.nodeName !== "HTML" &&
					f.nodeName !== "BODY" &&
					"classList" in f &&
					"contains" in f.classList
				);
			}
			function d(f) {
				var l = f.type,
					h = f.tagName;
				return !!(
					(h === "INPUT" && u[l] && !f.readOnly) ||
					(h === "TEXTAREA" && !f.readOnly) ||
					f.isContentEditable
				);
			}
			function _(f) {
				f.classList.contains("focus-visible") ||
					(f.classList.add("focus-visible"), f.setAttribute("data-focus-visible-added", ""));
			}
			function v(f) {
				!f.hasAttribute("data-focus-visible-added") ||
					(f.classList.remove("focus-visible"), f.removeAttribute("data-focus-visible-added"));
			}
			function S(f) {
				f.metaKey || f.altKey || f.ctrlKey || (c(a.activeElement) && _(a.activeElement), (i = !0));
			}
			function O(f) {
				i = !1;
			}
			function T(f) {
				!c(f.target) || ((i || d(f.target)) && _(f.target));
			}
			function p(f) {
				!c(f.target) ||
					((f.target.classList.contains("focus-visible") ||
						f.target.hasAttribute("data-focus-visible-added")) &&
						((s = !0),
						window.clearTimeout(o),
						(o = window.setTimeout(function () {
							s = !1;
						}, 100)),
						v(f.target)));
			}
			function g(f) {
				document.visibilityState === "hidden" && (s && (i = !0), m());
			}
			function m() {
				document.addEventListener("mousemove", b),
					document.addEventListener("mousedown", b),
					document.addEventListener("mouseup", b),
					document.addEventListener("pointermove", b),
					document.addEventListener("pointerdown", b),
					document.addEventListener("pointerup", b),
					document.addEventListener("touchmove", b),
					document.addEventListener("touchstart", b),
					document.addEventListener("touchend", b);
			}
			function x() {
				document.removeEventListener("mousemove", b),
					document.removeEventListener("mousedown", b),
					document.removeEventListener("mouseup", b),
					document.removeEventListener("pointermove", b),
					document.removeEventListener("pointerdown", b),
					document.removeEventListener("pointerup", b),
					document.removeEventListener("touchmove", b),
					document.removeEventListener("touchstart", b),
					document.removeEventListener("touchend", b);
			}
			function b(f) {
				(f.target.nodeName && f.target.nodeName.toLowerCase() === "html") || ((i = !1), x());
			}
			document.addEventListener("keydown", S, !0),
				document.addEventListener("mousedown", O, !0),
				document.addEventListener("pointerdown", O, !0),
				document.addEventListener("touchstart", O, !0),
				document.addEventListener("visibilitychange", g, !0),
				m(),
				a.addEventListener("focus", T, !0),
				a.addEventListener("blur", p, !0),
				a.nodeType === Node.DOCUMENT_FRAGMENT_NODE && a.host
					? a.host.setAttribute("data-js-focus-visible", "")
					: a.nodeType === Node.DOCUMENT_NODE &&
					  (document.documentElement.classList.add("js-focus-visible"),
					  document.documentElement.setAttribute("data-js-focus-visible", ""));
		}
		if (typeof window < "u" && typeof document < "u") {
			window.applyFocusVisiblePolyfill = n;
			var r;
			try {
				r = new CustomEvent("focus-visible-polyfill-ready");
			} catch {
				(r = document.createEvent("CustomEvent")),
					r.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
			}
			window.dispatchEvent(r);
		}
		typeof document < "u" && n(document);
	});
})();
var De = !1,
	ke = !1,
	k = [];
function ar(e) {
	sr(e);
}
function sr(e) {
	k.includes(e) || k.push(e), or();
}
function Pt(e) {
	let t = k.indexOf(e);
	t !== -1 && k.splice(t, 1);
}
function or() {
	!ke && !De && ((De = !0), queueMicrotask(ur));
}
function ur() {
	(De = !1), (ke = !0);
	for (let e = 0; e < k.length; e++) k[e]();
	(k.length = 0), (ke = !1);
}
var G,
	oe,
	ge,
	Mt,
	je = !0;
function cr(e) {
	(je = !1), e(), (je = !0);
}
function lr(e) {
	(G = e.reactive),
		(ge = e.release),
		(oe = (t) =>
			e.effect(t, {
				scheduler: (n) => {
					je ? ar(n) : n();
				},
			})),
		(Mt = e.raw);
}
function mt(e) {
	oe = e;
}
function fr(e) {
	let t = () => {};
	return [
		(r) => {
			let a = oe(r);
			return (
				e._x_effects ||
					((e._x_effects = new Set()),
					(e._x_runEffects = () => {
						e._x_effects.forEach((i) => i());
					})),
				e._x_effects.add(a),
				(t = () => {
					a !== void 0 && (e._x_effects.delete(a), ge(a));
				}),
				a
			);
		},
		() => {
			t();
		},
	];
}
var Rt = [],
	Dt = [],
	kt = [];
function dr(e) {
	kt.push(e);
}
function jt(e, t) {
	typeof t == "function"
		? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
		: ((t = e), Dt.push(t));
}
function pr(e) {
	Rt.push(e);
}
function hr(e, t, n) {
	e._x_attributeCleanups || (e._x_attributeCleanups = {}),
		e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
		e._x_attributeCleanups[t].push(n);
}
function Kt(e, t) {
	!e._x_attributeCleanups ||
		Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
			(t === void 0 || t.includes(n)) && (r.forEach((a) => a()), delete e._x_attributeCleanups[n]);
		});
}
var Ze = new MutationObserver(nt),
	et = !1;
function Bt() {
	Ze.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }),
		(et = !0);
}
function _r() {
	vr(), Ze.disconnect(), (et = !1);
}
var re = [],
	Ne = !1;
function vr() {
	(re = re.concat(Ze.takeRecords())),
		re.length &&
			!Ne &&
			((Ne = !0),
			queueMicrotask(() => {
				br(), (Ne = !1);
			}));
}
function br() {
	nt(re), (re.length = 0);
}
function A(e) {
	if (!et) return e();
	_r();
	let t = e();
	return Bt(), t;
}
var tt = !1,
	he = [];
function gr() {
	tt = !0;
}
function mr() {
	(tt = !1), nt(he), (he = []);
}
function nt(e) {
	if (tt) {
		he = he.concat(e);
		return;
	}
	let t = [],
		n = [],
		r = new Map(),
		a = new Map();
	for (let i = 0; i < e.length; i++)
		if (
			!e[i].target._x_ignoreMutationObserver &&
			(e[i].type === "childList" &&
				(e[i].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
				e[i].removedNodes.forEach((s) => s.nodeType === 1 && n.push(s))),
			e[i].type === "attributes")
		) {
			let s = e[i].target,
				o = e[i].attributeName,
				u = e[i].oldValue,
				c = () => {
					r.has(s) || r.set(s, []), r.get(s).push({ name: o, value: s.getAttribute(o) });
				},
				d = () => {
					a.has(s) || a.set(s, []), a.get(s).push(o);
				};
			s.hasAttribute(o) && u === null ? c() : s.hasAttribute(o) ? (d(), c()) : d();
		}
	a.forEach((i, s) => {
		Kt(s, i);
	}),
		r.forEach((i, s) => {
			Rt.forEach((o) => o(s, i));
		});
	for (let i of n)
		if (!t.includes(i) && (Dt.forEach((s) => s(i)), i._x_cleanups))
			for (; i._x_cleanups.length; ) i._x_cleanups.pop()();
	t.forEach((i) => {
		(i._x_ignoreSelf = !0), (i._x_ignore = !0);
	});
	for (let i of t)
		n.includes(i) ||
			!i.isConnected ||
			(delete i._x_ignoreSelf,
			delete i._x_ignore,
			kt.forEach((s) => s(i)),
			(i._x_ignore = !0),
			(i._x_ignoreSelf = !0));
	t.forEach((i) => {
		delete i._x_ignoreSelf, delete i._x_ignore;
	}),
		(t = null),
		(n = null),
		(r = null),
		(a = null);
}
function Ut(e) {
	return ce(q(e));
}
function ue(e, t, n) {
	return (
		(e._x_dataStack = [t, ...q(n || e)]),
		() => {
			e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
		}
	);
}
function yt(e, t) {
	let n = e._x_dataStack[0];
	Object.entries(t).forEach(([r, a]) => {
		n[r] = a;
	});
}
function q(e) {
	return e._x_dataStack
		? e._x_dataStack
		: typeof ShadowRoot == "function" && e instanceof ShadowRoot
		? q(e.host)
		: e.parentNode
		? q(e.parentNode)
		: [];
}
function ce(e) {
	let t = new Proxy(
		{},
		{
			ownKeys: () => Array.from(new Set(e.flatMap((n) => Object.keys(n)))),
			has: (n, r) => e.some((a) => a.hasOwnProperty(r)),
			get: (n, r) =>
				(e.find((a) => {
					if (a.hasOwnProperty(r)) {
						let i = Object.getOwnPropertyDescriptor(a, r);
						if ((i.get && i.get._x_alreadyBound) || (i.set && i.set._x_alreadyBound)) return !0;
						if ((i.get || i.set) && i.enumerable) {
							let s = i.get,
								o = i.set,
								u = i;
							(s = s && s.bind(t)),
								(o = o && o.bind(t)),
								s && (s._x_alreadyBound = !0),
								o && (o._x_alreadyBound = !0),
								Object.defineProperty(a, r, { ...u, get: s, set: o });
						}
						return !0;
					}
					return !1;
				}) || {})[r],
			set: (n, r, a) => {
				let i = e.find((s) => s.hasOwnProperty(r));
				return i ? (i[r] = a) : (e[e.length - 1][r] = a), !0;
			},
		}
	);
	return t;
}
function Ht(e) {
	let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
		n = (r, a = "") => {
			Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
				([i, { value: s, enumerable: o }]) => {
					if (o === !1 || s === void 0) return;
					let u = a === "" ? i : `${a}.${i}`;
					typeof s == "object" && s !== null && s._x_interceptor
						? (r[i] = s.initialize(e, u, i))
						: t(s) && s !== r && !(s instanceof Element) && n(s, u);
				}
			);
		};
	return n(e);
}
function Wt(e, t = () => {}) {
	let n = {
		initialValue: void 0,
		_x_interceptor: !0,
		initialize(r, a, i) {
			return e(
				this.initialValue,
				() => yr(r, a),
				(s) => Ke(r, a, s),
				a,
				i
			);
		},
	};
	return (
		t(n),
		(r) => {
			if (typeof r == "object" && r !== null && r._x_interceptor) {
				let a = n.initialize.bind(n);
				n.initialize = (i, s, o) => {
					let u = r.initialize(i, s, o);
					return (n.initialValue = u), a(i, s, o);
				};
			} else n.initialValue = r;
			return n;
		}
	);
}
function yr(e, t) {
	return t.split(".").reduce((n, r) => n[r], e);
}
function Ke(e, t, n) {
	if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = n;
	else {
		if (t.length === 0) throw error;
		return e[t[0]] || (e[t[0]] = {}), Ke(e[t[0]], t.slice(1), n);
	}
}
var qt = {};
function F(e, t) {
	qt[e] = t;
}
function Be(e, t) {
	return (
		Object.entries(qt).forEach(([n, r]) => {
			Object.defineProperty(e, `$${n}`, {
				get() {
					let [a, i] = Qt(t);
					return (a = { interceptor: Wt, ...a }), jt(t, i), r(t, a);
				},
				enumerable: !1,
			});
		}),
		e
	);
}
function wr(e, t, n, ...r) {
	try {
		return n(...r);
	} catch (a) {
		se(a, e, t);
	}
}
function se(e, t, n = void 0) {
	Object.assign(e, { el: t, expression: n }),
		console.warn(
			`Alpine Expression Error: ${e.message}

${
	n
		? 'Expression: "' +
		  n +
		  `"

`
		: ""
}`,
			t
		),
		setTimeout(() => {
			throw e;
		}, 0);
}
var pe = !0;
function xr(e) {
	let t = pe;
	(pe = !1), e(), (pe = t);
}
function W(e, t, n = {}) {
	let r;
	return C(e, t)((a) => (r = a), n), r;
}
function C(...e) {
	return zt(...e);
}
var zt = Vt;
function Er(e) {
	zt = e;
}
function Vt(e, t) {
	let n = {};
	Be(n, e);
	let r = [n, ...q(e)];
	if (typeof t == "function") return Sr(r, t);
	let a = Ar(r, t, e);
	return wr.bind(null, e, t, a);
}
function Sr(e, t) {
	return (n = () => {}, { scope: r = {}, params: a = [] } = {}) => {
		let i = t.apply(ce([r, ...e]), a);
		_e(n, i);
	};
}
var Ie = {};
function Or(e, t) {
	if (Ie[e]) return Ie[e];
	let n = Object.getPrototypeOf(async function () {}).constructor,
		r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e,
		i = (() => {
			try {
				return new n(
					["__self", "scope"],
					`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
				);
			} catch (s) {
				return se(s, t, e), Promise.resolve();
			}
		})();
	return (Ie[e] = i), i;
}
function Ar(e, t, n) {
	let r = Or(t, n);
	return (a = () => {}, { scope: i = {}, params: s = [] } = {}) => {
		(r.result = void 0), (r.finished = !1);
		let o = ce([i, ...e]);
		if (typeof r == "function") {
			let u = r(r, o).catch((c) => se(c, n, t));
			r.finished
				? (_e(a, r.result, o, s, n), (r.result = void 0))
				: u
						.then((c) => {
							_e(a, c, o, s, n);
						})
						.catch((c) => se(c, n, t))
						.finally(() => (r.result = void 0));
		}
	};
}
function _e(e, t, n, r, a) {
	if (pe && typeof t == "function") {
		let i = t.apply(n, r);
		i instanceof Promise ? i.then((s) => _e(e, s, n, r)).catch((s) => se(s, a, t)) : e(i);
	} else e(t);
}
var rt = "x-";
function Y(e = "") {
	return rt + e;
}
function Cr(e) {
	rt = e;
}
var Gt = {};
function E(e, t) {
	Gt[e] = t;
}
function it(e, t, n) {
	if (((t = Array.from(t)), e._x_virtualDirectives)) {
		let i = Object.entries(e._x_virtualDirectives).map(([o, u]) => ({ name: o, value: u })),
			s = Yt(i);
		(i = i.map((o) =>
			s.find((u) => u.name === o.name) ? { name: `x-bind:${o.name}`, value: `"${o.value}"` } : o
		)),
			(t = t.concat(i));
	}
	let r = {};
	return t
		.map(en((i, s) => (r[i] = s)))
		.filter(nn)
		.map(Lr(r, n))
		.sort(Fr)
		.map((i) => $r(e, i));
}
function Yt(e) {
	return Array.from(e)
		.map(en())
		.filter((t) => !nn(t));
}
var Ue = !1,
	ne = new Map(),
	Jt = Symbol();
function Tr(e) {
	Ue = !0;
	let t = Symbol();
	(Jt = t), ne.set(t, []);
	let n = () => {
			for (; ne.get(t).length; ) ne.get(t).shift()();
			ne.delete(t);
		},
		r = () => {
			(Ue = !1), n();
		};
	e(n), r();
}
function Qt(e) {
	let t = [],
		n = (o) => t.push(o),
		[r, a] = fr(e);
	return (
		t.push(a),
		[
			{ Alpine: le, effect: r, cleanup: n, evaluateLater: C.bind(C, e), evaluate: W.bind(W, e) },
			() => t.forEach((o) => o()),
		]
	);
}
function $r(e, t) {
	let n = () => {},
		r = Gt[t.type] || n,
		[a, i] = Qt(e);
	hr(e, t.original, i);
	let s = () => {
		e._x_ignore ||
			e._x_ignoreSelf ||
			(r.inline && r.inline(e, t, a), (r = r.bind(r, e, t, a)), Ue ? ne.get(Jt).push(r) : r());
	};
	return (s.runCleanups = i), s;
}
var Xt =
		(e, t) =>
		({ name: n, value: r }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }),
	Zt = (e) => e;
function en(e = () => {}) {
	return ({ name: t, value: n }) => {
		let { name: r, value: a } = tn.reduce((i, s) => s(i), { name: t, value: n });
		return r !== t && e(r, t), { name: r, value: a };
	};
}
var tn = [];
function at(e) {
	tn.push(e);
}
function nn({ name: e }) {
	return rn().test(e);
}
var rn = () => new RegExp(`^${rt}([^:^.]+)\\b`);
function Lr(e, t) {
	return ({ name: n, value: r }) => {
		let a = n.match(rn()),
			i = n.match(/:([a-zA-Z0-9\-:]+)/),
			s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
			o = t || e[n] || n;
		return {
			type: a ? a[1] : null,
			value: i ? i[1] : null,
			modifiers: s.map((u) => u.replace(".", "")),
			expression: r,
			original: o,
		};
	};
}
var He = "DEFAULT",
	fe = [
		"ignore",
		"ref",
		"data",
		"id",
		"bind",
		"init",
		"for",
		"mask",
		"model",
		"modelable",
		"transition",
		"show",
		"if",
		He,
		"teleport",
	];
function Fr(e, t) {
	let n = fe.indexOf(e.type) === -1 ? He : e.type,
		r = fe.indexOf(t.type) === -1 ? He : t.type;
	return fe.indexOf(n) - fe.indexOf(r);
}
function ie(e, t, n = {}) {
	e.dispatchEvent(new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 }));
}
var We = [],
	st = !1;
function an(e = () => {}) {
	return (
		queueMicrotask(() => {
			st ||
				setTimeout(() => {
					qe();
				});
		}),
		new Promise((t) => {
			We.push(() => {
				e(), t();
			});
		})
	);
}
function qe() {
	for (st = !1; We.length; ) We.shift()();
}
function Nr() {
	st = !0;
}
function B(e, t) {
	if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
		Array.from(e.children).forEach((a) => B(a, t));
		return;
	}
	let n = !1;
	if ((t(e, () => (n = !0)), n)) return;
	let r = e.firstElementChild;
	for (; r; ) B(r, t), (r = r.nextElementSibling);
}
function z(e, ...t) {
	console.warn(`Alpine Warning: ${e}`, ...t);
}
function Ir() {
	document.body ||
		z(
			"Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
		),
		ie(document, "alpine:init"),
		ie(document, "alpine:initializing"),
		Bt(),
		dr((t) => M(t, B)),
		jt((t) => Mr(t)),
		pr((t, n) => {
			it(t, n).forEach((r) => r());
		});
	let e = (t) => !me(t.parentElement, !0);
	Array.from(document.querySelectorAll(un()))
		.filter(e)
		.forEach((t) => {
			M(t);
		}),
		ie(document, "alpine:initialized");
}
var ot = [],
	sn = [];
function on() {
	return ot.map((e) => e());
}
function un() {
	return ot.concat(sn).map((e) => e());
}
function cn(e) {
	ot.push(e);
}
function ln(e) {
	sn.push(e);
}
function me(e, t = !1) {
	return ye(e, (n) => {
		if ((t ? un() : on()).some((a) => n.matches(a))) return !0;
	});
}
function ye(e, t) {
	if (!!e) {
		if (t(e)) return e;
		if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
			return ye(e.parentElement, t);
	}
}
function Pr(e) {
	return on().some((t) => e.matches(t));
}
function M(e, t = B) {
	Tr(() => {
		t(e, (n, r) => {
			it(n, n.attributes).forEach((a) => a()), n._x_ignore && r();
		});
	});
}
function Mr(e) {
	B(e, (t) => Kt(t));
}
function ut(e, t) {
	return Array.isArray(t)
		? wt(e, t.join(" "))
		: typeof t == "object" && t !== null
		? Rr(e, t)
		: typeof t == "function"
		? ut(e, t())
		: wt(e, t);
}
function wt(e, t) {
	let n = (a) =>
			a
				.split(" ")
				.filter((i) => !e.classList.contains(i))
				.filter(Boolean),
		r = (a) => (
			e.classList.add(...a),
			() => {
				e.classList.remove(...a);
			}
		);
	return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function Rr(e, t) {
	let n = (o) => o.split(" ").filter(Boolean),
		r = Object.entries(t)
			.flatMap(([o, u]) => (u ? n(o) : !1))
			.filter(Boolean),
		a = Object.entries(t)
			.flatMap(([o, u]) => (u ? !1 : n(o)))
			.filter(Boolean),
		i = [],
		s = [];
	return (
		a.forEach((o) => {
			e.classList.contains(o) && (e.classList.remove(o), s.push(o));
		}),
		r.forEach((o) => {
			e.classList.contains(o) || (e.classList.add(o), i.push(o));
		}),
		() => {
			s.forEach((o) => e.classList.add(o)), i.forEach((o) => e.classList.remove(o));
		}
	);
}
function we(e, t) {
	return typeof t == "object" && t !== null ? Dr(e, t) : kr(e, t);
}
function Dr(e, t) {
	let n = {};
	return (
		Object.entries(t).forEach(([r, a]) => {
			(n[r] = e.style[r]), r.startsWith("--") || (r = jr(r)), e.style.setProperty(r, a);
		}),
		setTimeout(() => {
			e.style.length === 0 && e.removeAttribute("style");
		}),
		() => {
			we(e, n);
		}
	);
}
function kr(e, t) {
	let n = e.getAttribute("style", t);
	return (
		e.setAttribute("style", t),
		() => {
			e.setAttribute("style", n || "");
		}
	);
}
function jr(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ze(e, t = () => {}) {
	let n = !1;
	return function () {
		n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
	};
}
E("transition", (e, { value: t, modifiers: n, expression: r }, { evaluate: a }) => {
	typeof r == "function" && (r = a(r)), r ? Kr(e, r, t) : Br(e, n, t);
});
function Kr(e, t, n) {
	fn(e, ut, ""),
		{
			enter: (a) => {
				e._x_transition.enter.during = a;
			},
			"enter-start": (a) => {
				e._x_transition.enter.start = a;
			},
			"enter-end": (a) => {
				e._x_transition.enter.end = a;
			},
			leave: (a) => {
				e._x_transition.leave.during = a;
			},
			"leave-start": (a) => {
				e._x_transition.leave.start = a;
			},
			"leave-end": (a) => {
				e._x_transition.leave.end = a;
			},
		}[n](t);
}
function Br(e, t, n) {
	fn(e, we);
	let r = !t.includes("in") && !t.includes("out") && !n,
		a = r || t.includes("in") || ["enter"].includes(n),
		i = r || t.includes("out") || ["leave"].includes(n);
	t.includes("in") && !r && (t = t.filter((g, m) => m < t.indexOf("out"))),
		t.includes("out") && !r && (t = t.filter((g, m) => m > t.indexOf("out")));
	let s = !t.includes("opacity") && !t.includes("scale"),
		o = s || t.includes("opacity"),
		u = s || t.includes("scale"),
		c = o ? 0 : 1,
		d = u ? Z(t, "scale", 95) / 100 : 1,
		_ = Z(t, "delay", 0),
		v = Z(t, "origin", "center"),
		S = "opacity, transform",
		O = Z(t, "duration", 150) / 1e3,
		T = Z(t, "duration", 75) / 1e3,
		p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
	a &&
		((e._x_transition.enter.during = {
			transformOrigin: v,
			transitionDelay: _,
			transitionProperty: S,
			transitionDuration: `${O}s`,
			transitionTimingFunction: p,
		}),
		(e._x_transition.enter.start = { opacity: c, transform: `scale(${d})` }),
		(e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
		i &&
			((e._x_transition.leave.during = {
				transformOrigin: v,
				transitionDelay: _,
				transitionProperty: S,
				transitionDuration: `${T}s`,
				transitionTimingFunction: p,
			}),
			(e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
			(e._x_transition.leave.end = { opacity: c, transform: `scale(${d})` }));
}
function fn(e, t, n = {}) {
	e._x_transition ||
		(e._x_transition = {
			enter: { during: n, start: n, end: n },
			leave: { during: n, start: n, end: n },
			in(r = () => {}, a = () => {}) {
				Ve(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, r, a);
			},
			out(r = () => {}, a = () => {}) {
				Ve(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, r, a);
			},
		});
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, n, r) {
	const a = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
	let i = () => a(n);
	if (t) {
		e._x_transition && (e._x_transition.enter || e._x_transition.leave)
			? e._x_transition.enter &&
			  (Object.entries(e._x_transition.enter.during).length ||
					Object.entries(e._x_transition.enter.start).length ||
					Object.entries(e._x_transition.enter.end).length)
				? e._x_transition.in(n)
				: i()
			: e._x_transition
			? e._x_transition.in(n)
			: i();
		return;
	}
	(e._x_hidePromise = e._x_transition
		? new Promise((s, o) => {
				e._x_transition.out(
					() => {},
					() => s(r)
				),
					e._x_transitioning.beforeCancel(() => o({ isFromCancelledTransition: !0 }));
		  })
		: Promise.resolve(r)),
		queueMicrotask(() => {
			let s = dn(e);
			s
				? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e))
				: a(() => {
						let o = (u) => {
							let c = Promise.all([u._x_hidePromise, ...(u._x_hideChildren || []).map(o)]).then(
								([d]) => d()
							);
							return delete u._x_hidePromise, delete u._x_hideChildren, c;
						};
						o(e).catch((u) => {
							if (!u.isFromCancelledTransition) throw u;
						});
				  });
		});
};
function dn(e) {
	let t = e.parentNode;
	if (!!t) return t._x_hidePromise ? t : dn(t);
}
function Ve(e, t, { during: n, start: r, end: a } = {}, i = () => {}, s = () => {}) {
	if (
		(e._x_transitioning && e._x_transitioning.cancel(),
		Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(a).length === 0)
	) {
		i(), s();
		return;
	}
	let o, u, c;
	Ur(e, {
		start() {
			o = t(e, r);
		},
		during() {
			u = t(e, n);
		},
		before: i,
		end() {
			o(), (c = t(e, a));
		},
		after: s,
		cleanup() {
			u(), c();
		},
	});
}
function Ur(e, t) {
	let n,
		r,
		a,
		i = ze(() => {
			A(() => {
				(n = !0),
					r || t.before(),
					a || (t.end(), qe()),
					t.after(),
					e.isConnected && t.cleanup(),
					delete e._x_transitioning;
			});
		});
	(e._x_transitioning = {
		beforeCancels: [],
		beforeCancel(s) {
			this.beforeCancels.push(s);
		},
		cancel: ze(function () {
			for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
			i();
		}),
		finish: i,
	}),
		A(() => {
			t.start(), t.during();
		}),
		Nr(),
		requestAnimationFrame(() => {
			if (n) return;
			let s =
					Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
				o = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
			s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
				A(() => {
					t.before();
				}),
				(r = !0),
				requestAnimationFrame(() => {
					n ||
						(A(() => {
							t.end();
						}),
						qe(),
						setTimeout(e._x_transitioning.finish, s + o),
						(a = !0));
				});
		});
}
function Z(e, t, n) {
	if (e.indexOf(t) === -1) return n;
	const r = e[e.indexOf(t) + 1];
	if (!r || (t === "scale" && isNaN(r))) return n;
	if (t === "duration") {
		let a = r.match(/([0-9]+)ms/);
		if (a) return a[1];
	}
	return t === "origin" &&
		["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
		? [r, e[e.indexOf(t) + 2]].join(" ")
		: r;
}
var Ge = !1;
function xe(e, t = () => {}) {
	return (...n) => (Ge ? t(...n) : e(...n));
}
function Hr(e, t) {
	t._x_dataStack || (t._x_dataStack = e._x_dataStack),
		(Ge = !0),
		qr(() => {
			Wr(t);
		}),
		(Ge = !1);
}
function Wr(e) {
	let t = !1;
	M(e, (r, a) => {
		B(r, (i, s) => {
			if (t && Pr(i)) return s();
			(t = !0), a(i, s);
		});
	});
}
function qr(e) {
	let t = oe;
	mt((n, r) => {
		let a = t(n);
		return ge(a), () => {};
	}),
		e(),
		mt(t);
}
function pn(e, t, n, r = []) {
	switch (
		(e._x_bindings || (e._x_bindings = G({})),
		(e._x_bindings[t] = n),
		(t = r.includes("camel") ? Xr(t) : t),
		t)
	) {
		case "value":
			zr(e, n);
			break;
		case "style":
			Gr(e, n);
			break;
		case "class":
			Vr(e, n);
			break;
		default:
			Yr(e, t, n);
			break;
	}
}
function zr(e, t) {
	if (e.type === "radio")
		e.attributes.value === void 0 && (e.value = t),
			window.fromModel && (e.checked = xt(e.value, t));
	else if (e.type === "checkbox")
		Number.isInteger(t)
			? (e.value = t)
			: !Number.isInteger(t) &&
			  !Array.isArray(t) &&
			  typeof t != "boolean" &&
			  ![null, void 0].includes(t)
			? (e.value = String(t))
			: Array.isArray(t)
			? (e.checked = t.some((n) => xt(n, e.value)))
			: (e.checked = !!t);
	else if (e.tagName === "SELECT") Qr(e, t);
	else {
		if (e.value === t) return;
		e.value = t;
	}
}
function Vr(e, t) {
	e._x_undoAddedClasses && e._x_undoAddedClasses(), (e._x_undoAddedClasses = ut(e, t));
}
function Gr(e, t) {
	e._x_undoAddedStyles && e._x_undoAddedStyles(), (e._x_undoAddedStyles = we(e, t));
}
function Yr(e, t, n) {
	[null, void 0, !1].includes(n) && Zr(t) ? e.removeAttribute(t) : (hn(t) && (n = t), Jr(e, t, n));
}
function Jr(e, t, n) {
	e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Qr(e, t) {
	const n = [].concat(t).map((r) => r + "");
	Array.from(e.options).forEach((r) => {
		r.selected = n.includes(r.value);
	});
}
function Xr(e) {
	return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function xt(e, t) {
	return e == t;
}
function hn(e) {
	return [
		"disabled",
		"checked",
		"required",
		"readonly",
		"hidden",
		"open",
		"selected",
		"autofocus",
		"itemscope",
		"multiple",
		"novalidate",
		"allowfullscreen",
		"allowpaymentrequest",
		"formnovalidate",
		"autoplay",
		"controls",
		"loop",
		"muted",
		"playsinline",
		"default",
		"ismap",
		"reversed",
		"async",
		"defer",
		"nomodule",
	].includes(e);
}
function Zr(e) {
	return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
}
function ei(e, t, n) {
	if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
	let r = e.getAttribute(t);
	return r === null
		? typeof n == "function"
			? n()
			: n
		: hn(t)
		? !![t, "true"].includes(r)
		: r === ""
		? !0
		: r;
}
function _n(e, t) {
	var n;
	return function () {
		var r = this,
			a = arguments,
			i = function () {
				(n = null), e.apply(r, a);
			};
		clearTimeout(n), (n = setTimeout(i, t));
	};
}
function vn(e, t) {
	let n;
	return function () {
		let r = this,
			a = arguments;
		n || (e.apply(r, a), (n = !0), setTimeout(() => (n = !1), t));
	};
}
function ti(e) {
	e(le);
}
var D = {},
	Et = !1;
function ni(e, t) {
	if ((Et || ((D = G(D)), (Et = !0)), t === void 0)) return D[e];
	(D[e] = t),
		typeof t == "object" &&
			t !== null &&
			t.hasOwnProperty("init") &&
			typeof t.init == "function" &&
			D[e].init(),
		Ht(D[e]);
}
function ri() {
	return D;
}
var bn = {};
function ii(e, t) {
	let n = typeof t != "function" ? () => t : t;
	e instanceof Element ? gn(e, n()) : (bn[e] = n);
}
function ai(e) {
	return (
		Object.entries(bn).forEach(([t, n]) => {
			Object.defineProperty(e, t, {
				get() {
					return (...r) => n(...r);
				},
			});
		}),
		e
	);
}
function gn(e, t, n) {
	let r = [];
	for (; r.length; ) r.pop()();
	let a = Object.entries(t).map(([s, o]) => ({ name: s, value: o })),
		i = Yt(a);
	(a = a.map((s) =>
		i.find((o) => o.name === s.name) ? { name: `x-bind:${s.name}`, value: `"${s.value}"` } : s
	)),
		it(e, a, n).map((s) => {
			r.push(s.runCleanups), s();
		});
}
var mn = {};
function si(e, t) {
	mn[e] = t;
}
function oi(e, t) {
	return (
		Object.entries(mn).forEach(([n, r]) => {
			Object.defineProperty(e, n, {
				get() {
					return (...a) => r.bind(t)(...a);
				},
				enumerable: !1,
			});
		}),
		e
	);
}
var ui = {
		get reactive() {
			return G;
		},
		get release() {
			return ge;
		},
		get effect() {
			return oe;
		},
		get raw() {
			return Mt;
		},
		version: "3.10.3",
		flushAndStopDeferringMutations: mr,
		dontAutoEvaluateFunctions: xr,
		disableEffectScheduling: cr,
		setReactivityEngine: lr,
		closestDataStack: q,
		skipDuringClone: xe,
		addRootSelector: cn,
		addInitSelector: ln,
		addScopeToNode: ue,
		deferMutations: gr,
		mapAttributes: at,
		evaluateLater: C,
		setEvaluator: Er,
		mergeProxies: ce,
		findClosest: ye,
		closestRoot: me,
		interceptor: Wt,
		transition: Ve,
		setStyles: we,
		mutateDom: A,
		directive: E,
		throttle: vn,
		debounce: _n,
		evaluate: W,
		initTree: M,
		nextTick: an,
		prefixed: Y,
		prefix: Cr,
		plugin: ti,
		magic: F,
		store: ni,
		start: Ir,
		clone: Hr,
		bound: ei,
		$data: Ut,
		data: si,
		bind: ii,
	},
	le = ui;
function ci(e, t) {
	const n = Object.create(null),
		r = e.split(",");
	for (let a = 0; a < r.length; a++) n[r[a]] = !0;
	return t ? (a) => !!n[a.toLowerCase()] : (a) => !!n[a];
}
var li = Object.freeze({});
Object.freeze([]);
var yn = Object.assign,
	fi = Object.prototype.hasOwnProperty,
	Ee = (e, t) => fi.call(e, t),
	j = Array.isArray,
	ae = (e) => wn(e) === "[object Map]",
	di = (e) => typeof e == "string",
	ct = (e) => typeof e == "symbol",
	Se = (e) => e !== null && typeof e == "object",
	pi = Object.prototype.toString,
	wn = (e) => pi.call(e),
	xn = (e) => wn(e).slice(8, -1),
	lt = (e) => di(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	hi = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	_i = hi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	En = (e, t) => e !== t && (e === e || t === t),
	Ye = new WeakMap(),
	ee = [],
	N,
	K = Symbol("iterate"),
	Je = Symbol("Map key iterate");
function vi(e) {
	return e && e._isEffect === !0;
}
function bi(e, t = li) {
	vi(e) && (e = e.raw);
	const n = yi(e, t);
	return t.lazy || n(), n;
}
function gi(e) {
	e.active && (Sn(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var mi = 0;
function yi(e, t) {
	const n = function () {
		if (!n.active) return e();
		if (!ee.includes(n)) {
			Sn(n);
			try {
				return xi(), ee.push(n), (N = n), e();
			} finally {
				ee.pop(), On(), (N = ee[ee.length - 1]);
			}
		}
	};
	return (
		(n.id = mi++),
		(n.allowRecurse = !!t.allowRecurse),
		(n._isEffect = !0),
		(n.active = !0),
		(n.raw = e),
		(n.deps = []),
		(n.options = t),
		n
	);
}
function Sn(e) {
	const { deps: t } = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0;
	}
}
var V = !0,
	ft = [];
function wi() {
	ft.push(V), (V = !1);
}
function xi() {
	ft.push(V), (V = !0);
}
function On() {
	const e = ft.pop();
	V = e === void 0 ? !0 : e;
}
function L(e, t, n) {
	if (!V || N === void 0) return;
	let r = Ye.get(e);
	r || Ye.set(e, (r = new Map()));
	let a = r.get(n);
	a || r.set(n, (a = new Set())),
		a.has(N) ||
			(a.add(N),
			N.deps.push(a),
			N.options.onTrack && N.options.onTrack({ effect: N, target: e, type: t, key: n }));
}
function R(e, t, n, r, a, i) {
	const s = Ye.get(e);
	if (!s) return;
	const o = new Set(),
		u = (d) => {
			d &&
				d.forEach((_) => {
					(_ !== N || _.allowRecurse) && o.add(_);
				});
		};
	if (t === "clear") s.forEach(u);
	else if (n === "length" && j(e))
		s.forEach((d, _) => {
			(_ === "length" || _ >= r) && u(d);
		});
	else
		switch ((n !== void 0 && u(s.get(n)), t)) {
			case "add":
				j(e) ? lt(n) && u(s.get("length")) : (u(s.get(K)), ae(e) && u(s.get(Je)));
				break;
			case "delete":
				j(e) || (u(s.get(K)), ae(e) && u(s.get(Je)));
				break;
			case "set":
				ae(e) && u(s.get(K));
				break;
		}
	const c = (d) => {
		d.options.onTrigger &&
			d.options.onTrigger({
				effect: d,
				target: e,
				key: n,
				type: t,
				newValue: r,
				oldValue: a,
				oldTarget: i,
			}),
			d.options.scheduler ? d.options.scheduler(d) : d();
	};
	o.forEach(c);
}
var Ei = ci("__proto__,__v_isRef,__isVue"),
	An = new Set(
		Object.getOwnPropertyNames(Symbol)
			.map((e) => Symbol[e])
			.filter(ct)
	),
	Si = Oe(),
	Oi = Oe(!1, !0),
	Ai = Oe(!0),
	Ci = Oe(!0, !0),
	ve = {};
["includes", "indexOf", "lastIndexOf"].forEach((e) => {
	const t = Array.prototype[e];
	ve[e] = function (...n) {
		const r = w(this);
		for (let i = 0, s = this.length; i < s; i++) L(r, "get", i + "");
		const a = t.apply(r, n);
		return a === -1 || a === !1 ? t.apply(r, n.map(w)) : a;
	};
});
["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
	const t = Array.prototype[e];
	ve[e] = function (...n) {
		wi();
		const r = t.apply(this, n);
		return On(), r;
	};
});
function Oe(e = !1, t = !1) {
	return function (r, a, i) {
		if (a === "__v_isReactive") return !e;
		if (a === "__v_isReadonly") return e;
		if (a === "__v_raw" && i === (e ? (t ? Di : Bn) : t ? Ri : Kn).get(r)) return r;
		const s = j(r);
		if (!e && s && Ee(ve, a)) return Reflect.get(ve, a, i);
		const o = Reflect.get(r, a, i);
		return (ct(a) ? An.has(a) : Ei(a)) || (e || L(r, "get", a), t)
			? o
			: Qe(o)
			? !s || !lt(a)
				? o.value
				: o
			: Se(o)
			? e
				? Un(o)
				: _t(o)
			: o;
	};
}
var Ti = Cn(),
	$i = Cn(!0);
function Cn(e = !1) {
	return function (n, r, a, i) {
		let s = n[r];
		if (!e && ((a = w(a)), (s = w(s)), !j(n) && Qe(s) && !Qe(a))) return (s.value = a), !0;
		const o = j(n) && lt(r) ? Number(r) < n.length : Ee(n, r),
			u = Reflect.set(n, r, a, i);
		return n === w(i) && (o ? En(a, s) && R(n, "set", r, a, s) : R(n, "add", r, a)), u;
	};
}
function Li(e, t) {
	const n = Ee(e, t),
		r = e[t],
		a = Reflect.deleteProperty(e, t);
	return a && n && R(e, "delete", t, void 0, r), a;
}
function Fi(e, t) {
	const n = Reflect.has(e, t);
	return (!ct(t) || !An.has(t)) && L(e, "has", t), n;
}
function Ni(e) {
	return L(e, "iterate", j(e) ? "length" : K), Reflect.ownKeys(e);
}
var Tn = { get: Si, set: Ti, deleteProperty: Li, has: Fi, ownKeys: Ni },
	$n = {
		get: Ai,
		set(e, t) {
			return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
		},
		deleteProperty(e, t) {
			return (
				console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0
			);
		},
	};
yn({}, Tn, { get: Oi, set: $i });
yn({}, $n, { get: Ci });
var dt = (e) => (Se(e) ? _t(e) : e),
	pt = (e) => (Se(e) ? Un(e) : e),
	ht = (e) => e,
	Ae = (e) => Reflect.getPrototypeOf(e);
function Ce(e, t, n = !1, r = !1) {
	e = e.__v_raw;
	const a = w(e),
		i = w(t);
	t !== i && !n && L(a, "get", t), !n && L(a, "get", i);
	const { has: s } = Ae(a),
		o = r ? ht : n ? pt : dt;
	if (s.call(a, t)) return o(e.get(t));
	if (s.call(a, i)) return o(e.get(i));
	e !== a && e.get(t);
}
function Te(e, t = !1) {
	const n = this.__v_raw,
		r = w(n),
		a = w(e);
	return (
		e !== a && !t && L(r, "has", e), !t && L(r, "has", a), e === a ? n.has(e) : n.has(e) || n.has(a)
	);
}
function $e(e, t = !1) {
	return (e = e.__v_raw), !t && L(w(e), "iterate", K), Reflect.get(e, "size", e);
}
function Ln(e) {
	e = w(e);
	const t = w(this);
	return Ae(t).has.call(t, e) || (t.add(e), R(t, "add", e, e)), this;
}
function Fn(e, t) {
	t = w(t);
	const n = w(this),
		{ has: r, get: a } = Ae(n);
	let i = r.call(n, e);
	i ? jn(n, r, e) : ((e = w(e)), (i = r.call(n, e)));
	const s = a.call(n, e);
	return n.set(e, t), i ? En(t, s) && R(n, "set", e, t, s) : R(n, "add", e, t), this;
}
function Nn(e) {
	const t = w(this),
		{ has: n, get: r } = Ae(t);
	let a = n.call(t, e);
	a ? jn(t, n, e) : ((e = w(e)), (a = n.call(t, e)));
	const i = r ? r.call(t, e) : void 0,
		s = t.delete(e);
	return a && R(t, "delete", e, void 0, i), s;
}
function In() {
	const e = w(this),
		t = e.size !== 0,
		n = ae(e) ? new Map(e) : new Set(e),
		r = e.clear();
	return t && R(e, "clear", void 0, void 0, n), r;
}
function Le(e, t) {
	return function (r, a) {
		const i = this,
			s = i.__v_raw,
			o = w(s),
			u = t ? ht : e ? pt : dt;
		return !e && L(o, "iterate", K), s.forEach((c, d) => r.call(a, u(c), u(d), i));
	};
}
function de(e, t, n) {
	return function (...r) {
		const a = this.__v_raw,
			i = w(a),
			s = ae(i),
			o = e === "entries" || (e === Symbol.iterator && s),
			u = e === "keys" && s,
			c = a[e](...r),
			d = n ? ht : t ? pt : dt;
		return (
			!t && L(i, "iterate", u ? Je : K),
			{
				next() {
					const { value: _, done: v } = c.next();
					return v ? { value: _, done: v } : { value: o ? [d(_[0]), d(_[1])] : d(_), done: v };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function P(e) {
	return function (...t) {
		{
			const n = t[0] ? `on key "${t[0]}" ` : "";
			console.warn(`${_i(e)} operation ${n}failed: target is readonly.`, w(this));
		}
		return e === "delete" ? !1 : this;
	};
}
var Pn = {
		get(e) {
			return Ce(this, e);
		},
		get size() {
			return $e(this);
		},
		has: Te,
		add: Ln,
		set: Fn,
		delete: Nn,
		clear: In,
		forEach: Le(!1, !1),
	},
	Mn = {
		get(e) {
			return Ce(this, e, !1, !0);
		},
		get size() {
			return $e(this);
		},
		has: Te,
		add: Ln,
		set: Fn,
		delete: Nn,
		clear: In,
		forEach: Le(!1, !0),
	},
	Rn = {
		get(e) {
			return Ce(this, e, !0);
		},
		get size() {
			return $e(this, !0);
		},
		has(e) {
			return Te.call(this, e, !0);
		},
		add: P("add"),
		set: P("set"),
		delete: P("delete"),
		clear: P("clear"),
		forEach: Le(!0, !1),
	},
	Dn = {
		get(e) {
			return Ce(this, e, !0, !0);
		},
		get size() {
			return $e(this, !0);
		},
		has(e) {
			return Te.call(this, e, !0);
		},
		add: P("add"),
		set: P("set"),
		delete: P("delete"),
		clear: P("clear"),
		forEach: Le(!0, !0),
	},
	Ii = ["keys", "values", "entries", Symbol.iterator];
Ii.forEach((e) => {
	(Pn[e] = de(e, !1, !1)),
		(Rn[e] = de(e, !0, !1)),
		(Mn[e] = de(e, !1, !0)),
		(Dn[e] = de(e, !0, !0));
});
function kn(e, t) {
	const n = t ? (e ? Dn : Mn) : e ? Rn : Pn;
	return (r, a, i) =>
		a === "__v_isReactive"
			? !e
			: a === "__v_isReadonly"
			? e
			: a === "__v_raw"
			? r
			: Reflect.get(Ee(n, a) && a in r ? n : r, a, i);
}
var Pi = { get: kn(!1, !1) },
	Mi = { get: kn(!0, !1) };
function jn(e, t, n) {
	const r = w(n);
	if (r !== n && t.call(e, r)) {
		const a = xn(e);
		console.warn(
			`Reactive ${a} contains both the raw and reactive versions of the same object${
				a === "Map" ? " as keys" : ""
			}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
		);
	}
}
var Kn = new WeakMap(),
	Ri = new WeakMap(),
	Bn = new WeakMap(),
	Di = new WeakMap();
function ki(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0;
	}
}
function ji(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : ki(xn(e));
}
function _t(e) {
	return e && e.__v_isReadonly ? e : Hn(e, !1, Tn, Pi, Kn);
}
function Un(e) {
	return Hn(e, !0, $n, Mi, Bn);
}
function Hn(e, t, n, r, a) {
	if (!Se(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive)) return e;
	const i = a.get(e);
	if (i) return i;
	const s = ji(e);
	if (s === 0) return e;
	const o = new Proxy(e, s === 2 ? r : n);
	return a.set(e, o), o;
}
function w(e) {
	return (e && w(e.__v_raw)) || e;
}
function Qe(e) {
	return Boolean(e && e.__v_isRef === !0);
}
F("nextTick", () => an);
F("dispatch", (e) => ie.bind(ie, e));
F("watch", (e, { evaluateLater: t, effect: n }) => (r, a) => {
	let i = t(r),
		s = !0,
		o,
		u = n(() =>
			i((c) => {
				JSON.stringify(c),
					s
						? (o = c)
						: queueMicrotask(() => {
								a(c, o), (o = c);
						  }),
					(s = !1);
			})
		);
	e._x_effects.delete(u);
});
F("store", ri);
F("data", (e) => Ut(e));
F("root", (e) => me(e));
F("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = ce(Ki(e))), e._x_refs_proxy));
function Ki(e) {
	let t = [],
		n = e;
	for (; n; ) n._x_refs && t.push(n._x_refs), (n = n.parentNode);
	return t;
}
var Pe = {};
function Wn(e) {
	return Pe[e] || (Pe[e] = 0), ++Pe[e];
}
function Bi(e, t) {
	return ye(e, (n) => {
		if (n._x_ids && n._x_ids[t]) return !0;
	});
}
function Ui(e, t) {
	e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Wn(t));
}
F("id", (e) => (t, n = null) => {
	let r = Bi(e, t),
		a = r ? r._x_ids[t] : Wn(t);
	return n ? `${t}-${a}-${n}` : `${t}-${a}`;
});
F("el", (e) => e);
qn("Focus", "focus", "focus");
qn("Persist", "persist", "persist");
function qn(e, t, n) {
	F(t, (r) =>
		z(
			`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
			r
		)
	);
}
E("modelable", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
	let a = r(t),
		i = () => {
			let c;
			return a((d) => (c = d)), c;
		},
		s = r(`${t} = __placeholder`),
		o = (c) => s(() => {}, { scope: { __placeholder: c } }),
		u = i();
	o(u),
		queueMicrotask(() => {
			if (!e._x_model) return;
			e._x_removeModelListeners.default();
			let c = e._x_model.get,
				d = e._x_model.set;
			n(() => o(c())), n(() => d(i()));
		});
});
E("teleport", (e, { expression: t }, { cleanup: n }) => {
	e.tagName.toLowerCase() !== "template" && z("x-teleport can only be used on a <template> tag", e);
	let r = document.querySelector(t);
	r || z(`Cannot find x-teleport element for selector: "${t}"`);
	let a = e.content.cloneNode(!0).firstElementChild;
	(e._x_teleport = a),
		(a._x_teleportBack = e),
		e._x_forwardEvents &&
			e._x_forwardEvents.forEach((i) => {
				a.addEventListener(i, (s) => {
					s.stopPropagation(), e.dispatchEvent(new s.constructor(s.type, s));
				});
			}),
		ue(a, {}, e),
		A(() => {
			r.appendChild(a), M(a), (a._x_ignore = !0);
		}),
		n(() => a.remove());
});
var zn = () => {};
zn.inline = (e, { modifiers: t }, { cleanup: n }) => {
	t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
		n(() => {
			t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
		});
};
E("ignore", zn);
E("effect", (e, { expression: t }, { effect: n }) => n(C(e, t)));
function Vn(e, t, n, r) {
	let a = e,
		i = (u) => r(u),
		s = {},
		o = (u, c) => (d) => c(u, d);
	if (
		(n.includes("dot") && (t = Hi(t)),
		n.includes("camel") && (t = Wi(t)),
		n.includes("passive") && (s.passive = !0),
		n.includes("capture") && (s.capture = !0),
		n.includes("window") && (a = window),
		n.includes("document") && (a = document),
		n.includes("prevent") &&
			(i = o(i, (u, c) => {
				c.preventDefault(), u(c);
			})),
		n.includes("stop") &&
			(i = o(i, (u, c) => {
				c.stopPropagation(), u(c);
			})),
		n.includes("self") &&
			(i = o(i, (u, c) => {
				c.target === e && u(c);
			})),
		(n.includes("away") || n.includes("outside")) &&
			((a = document),
			(i = o(i, (u, c) => {
				e.contains(c.target) ||
					(c.target.isConnected !== !1 &&
						((e.offsetWidth < 1 && e.offsetHeight < 1) || (e._x_isShown !== !1 && u(c))));
			}))),
		n.includes("once") &&
			(i = o(i, (u, c) => {
				u(c), a.removeEventListener(t, i, s);
			})),
		(i = o(i, (u, c) => {
			(zi(t) && Vi(c, n)) || u(c);
		})),
		n.includes("debounce"))
	) {
		let u = n[n.indexOf("debounce") + 1] || "invalid-wait",
			c = Xe(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
		i = _n(i, c);
	}
	if (n.includes("throttle")) {
		let u = n[n.indexOf("throttle") + 1] || "invalid-wait",
			c = Xe(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
		i = vn(i, c);
	}
	return (
		a.addEventListener(t, i, s),
		() => {
			a.removeEventListener(t, i, s);
		}
	);
}
function Hi(e) {
	return e.replace(/-/g, ".");
}
function Wi(e) {
	return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Xe(e) {
	return !Array.isArray(e) && !isNaN(e);
}
function qi(e) {
	return e
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[_\s]/, "-")
		.toLowerCase();
}
function zi(e) {
	return ["keydown", "keyup"].includes(e);
}
function Vi(e, t) {
	let n = t.filter((i) => !["window", "document", "prevent", "stop", "once"].includes(i));
	if (n.includes("debounce")) {
		let i = n.indexOf("debounce");
		n.splice(i, Xe((n[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
	}
	if (n.length === 0 || (n.length === 1 && St(e.key).includes(n[0]))) return !1;
	const a = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((i) => n.includes(i));
	return (
		(n = n.filter((i) => !a.includes(i))),
		!(
			a.length > 0 &&
			a.filter((s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])).length ===
				a.length &&
			St(e.key).includes(n[0])
		)
	);
}
function St(e) {
	if (!e) return [];
	e = qi(e);
	let t = {
		ctrl: "control",
		slash: "/",
		space: "-",
		spacebar: "-",
		cmd: "meta",
		esc: "escape",
		up: "arrow-up",
		down: "arrow-down",
		left: "arrow-left",
		right: "arrow-right",
		period: ".",
		equal: "=",
	};
	return (
		(t[e] = e),
		Object.keys(t)
			.map((n) => {
				if (t[n] === e) return n;
			})
			.filter((n) => n)
	);
}
E("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: a }) => {
	let i = C(e, n),
		s = `${n} = rightSideOfExpression($event, ${n})`,
		o = C(e, s);
	var u =
		e.tagName.toLowerCase() === "select" ||
		["checkbox", "radio"].includes(e.type) ||
		t.includes("lazy")
			? "change"
			: "input";
	let c = Gi(e, t, n),
		d = Vn(e, u, t, (v) => {
			o(() => {}, { scope: { $event: v, rightSideOfExpression: c } });
		});
	e._x_removeModelListeners || (e._x_removeModelListeners = {}),
		(e._x_removeModelListeners.default = d),
		a(() => e._x_removeModelListeners.default());
	let _ = C(e, `${n} = __placeholder`);
	(e._x_model = {
		get() {
			let v;
			return i((S) => (v = S)), v;
		},
		set(v) {
			_(() => {}, { scope: { __placeholder: v } });
		},
	}),
		(e._x_forceModelUpdate = () => {
			i((v) => {
				v === void 0 && n.match(/\./) && (v = ""),
					(window.fromModel = !0),
					A(() => pn(e, "value", v)),
					delete window.fromModel;
			});
		}),
		r(() => {
			(t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
				e._x_forceModelUpdate();
		});
});
function Gi(e, t, n) {
	return (
		e.type === "radio" &&
			A(() => {
				e.hasAttribute("name") || e.setAttribute("name", n);
			}),
		(r, a) =>
			A(() => {
				if (r instanceof CustomEvent && r.detail !== void 0) return r.detail || r.target.value;
				if (e.type === "checkbox")
					if (Array.isArray(a)) {
						let i = t.includes("number") ? Me(r.target.value) : r.target.value;
						return r.target.checked ? a.concat([i]) : a.filter((s) => !Yi(s, i));
					} else return r.target.checked;
				else {
					if (e.tagName.toLowerCase() === "select" && e.multiple)
						return t.includes("number")
							? Array.from(r.target.selectedOptions).map((i) => {
									let s = i.value || i.text;
									return Me(s);
							  })
							: Array.from(r.target.selectedOptions).map((i) => i.value || i.text);
					{
						let i = r.target.value;
						return t.includes("number") ? Me(i) : t.includes("trim") ? i.trim() : i;
					}
				}
			})
	);
}
function Me(e) {
	let t = e ? parseFloat(e) : null;
	return Ji(t) ? t : e;
}
function Yi(e, t) {
	return e == t;
}
function Ji(e) {
	return !Array.isArray(e) && !isNaN(e);
}
E("cloak", (e) => queueMicrotask(() => A(() => e.removeAttribute(Y("cloak")))));
ln(() => `[${Y("init")}]`);
E(
	"init",
	xe((e, { expression: t }, { evaluate: n }) =>
		typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
	)
);
E("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
	let a = r(t);
	n(() => {
		a((i) => {
			A(() => {
				e.textContent = i;
			});
		});
	});
});
E("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
	let a = r(t);
	n(() => {
		a((i) => {
			A(() => {
				(e.innerHTML = i), (e._x_ignoreSelf = !0), M(e), delete e._x_ignoreSelf;
			});
		});
	});
});
at(Xt(":", Zt(Y("bind:"))));
E("bind", (e, { value: t, modifiers: n, expression: r, original: a }, { effect: i }) => {
	if (!t) {
		let o = {};
		ai(o),
			C(e, r)(
				(c) => {
					gn(e, c, a);
				},
				{ scope: o }
			);
		return;
	}
	if (t === "key") return Qi(e, r);
	let s = C(e, r);
	i(() =>
		s((o) => {
			o === void 0 && r.match(/\./) && (o = ""), A(() => pn(e, t, o, n));
		})
	);
});
function Qi(e, t) {
	e._x_keyExpression = t;
}
cn(() => `[${Y("data")}]`);
E(
	"data",
	xe((e, { expression: t }, { cleanup: n }) => {
		t = t === "" ? "{}" : t;
		let r = {};
		Be(r, e);
		let a = {};
		oi(a, r);
		let i = W(e, t, { scope: a });
		i === void 0 && (i = {}), Be(i, e);
		let s = G(i);
		Ht(s);
		let o = ue(e, s);
		s.init && W(e, s.init),
			n(() => {
				s.destroy && W(e, s.destroy), o();
			});
	})
);
E("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
	let a = C(e, n);
	e._x_doHide ||
		(e._x_doHide = () => {
			A(() => {
				e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
			});
		}),
		e._x_doShow ||
			(e._x_doShow = () => {
				A(() => {
					e.style.length === 1 && e.style.display === "none"
						? e.removeAttribute("style")
						: e.style.removeProperty("display");
				});
			});
	let i = () => {
			e._x_doHide(), (e._x_isShown = !1);
		},
		s = () => {
			e._x_doShow(), (e._x_isShown = !0);
		},
		o = () => setTimeout(s),
		u = ze(
			(_) => (_ ? s() : i()),
			(_) => {
				typeof e._x_toggleAndCascadeWithTransitions == "function"
					? e._x_toggleAndCascadeWithTransitions(e, _, s, i)
					: _
					? o()
					: i();
			}
		),
		c,
		d = !0;
	r(() =>
		a((_) => {
			(!d && _ === c) || (t.includes("immediate") && (_ ? o() : i()), u(_), (c = _), (d = !1));
		})
	);
});
E("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
	let a = Zi(t),
		i = C(e, a.items),
		s = C(e, e._x_keyExpression || "index");
	(e._x_prevKeys = []),
		(e._x_lookup = {}),
		n(() => Xi(e, a, i, s)),
		r(() => {
			Object.values(e._x_lookup).forEach((o) => o.remove()),
				delete e._x_prevKeys,
				delete e._x_lookup;
		});
});
function Xi(e, t, n, r) {
	let a = (s) => typeof s == "object" && !Array.isArray(s),
		i = e;
	n((s) => {
		ea(s) && s >= 0 && (s = Array.from(Array(s).keys(), (p) => p + 1)), s === void 0 && (s = []);
		let o = e._x_lookup,
			u = e._x_prevKeys,
			c = [],
			d = [];
		if (a(s))
			s = Object.entries(s).map(([p, g]) => {
				let m = Ot(t, g, p, s);
				r((x) => d.push(x), { scope: { index: p, ...m } }), c.push(m);
			});
		else
			for (let p = 0; p < s.length; p++) {
				let g = Ot(t, s[p], p, s);
				r((m) => d.push(m), { scope: { index: p, ...g } }), c.push(g);
			}
		let _ = [],
			v = [],
			S = [],
			O = [];
		for (let p = 0; p < u.length; p++) {
			let g = u[p];
			d.indexOf(g) === -1 && S.push(g);
		}
		u = u.filter((p) => !S.includes(p));
		let T = "template";
		for (let p = 0; p < d.length; p++) {
			let g = d[p],
				m = u.indexOf(g);
			if (m === -1) u.splice(p, 0, g), _.push([T, p]);
			else if (m !== p) {
				let x = u.splice(p, 1)[0],
					b = u.splice(m - 1, 1)[0];
				u.splice(p, 0, b), u.splice(m, 0, x), v.push([x, b]);
			} else O.push(g);
			T = g;
		}
		for (let p = 0; p < S.length; p++) {
			let g = S[p];
			o[g]._x_effects && o[g]._x_effects.forEach(Pt), o[g].remove(), (o[g] = null), delete o[g];
		}
		for (let p = 0; p < v.length; p++) {
			let [g, m] = v[p],
				x = o[g],
				b = o[m],
				f = document.createElement("div");
			A(() => {
				b.after(f),
					x.after(b),
					b._x_currentIfEl && b.after(b._x_currentIfEl),
					f.before(x),
					x._x_currentIfEl && x.after(x._x_currentIfEl),
					f.remove();
			}),
				yt(b, c[d.indexOf(m)]);
		}
		for (let p = 0; p < _.length; p++) {
			let [g, m] = _[p],
				x = g === "template" ? i : o[g];
			x._x_currentIfEl && (x = x._x_currentIfEl);
			let b = c[m],
				f = d[m],
				l = document.importNode(i.content, !0).firstElementChild;
			ue(l, G(b), i),
				A(() => {
					x.after(l), M(l);
				}),
				typeof f == "object" &&
					z("x-for key cannot be an object, it must be a string or an integer", i),
				(o[f] = l);
		}
		for (let p = 0; p < O.length; p++) yt(o[O[p]], c[d.indexOf(O[p])]);
		i._x_prevKeys = d;
	});
}
function Zi(e) {
	let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
		n = /^\s*\(|\)\s*$/g,
		r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
		a = e.match(r);
	if (!a) return;
	let i = {};
	i.items = a[2].trim();
	let s = a[1].replace(n, "").trim(),
		o = s.match(t);
	return (
		o
			? ((i.item = s.replace(t, "").trim()),
			  (i.index = o[1].trim()),
			  o[2] && (i.collection = o[2].trim()))
			: (i.item = s),
		i
	);
}
function Ot(e, t, n, r) {
	let a = {};
	return (
		/^\[.*\]$/.test(e.item) && Array.isArray(t)
			? e.item
					.replace("[", "")
					.replace("]", "")
					.split(",")
					.map((s) => s.trim())
					.forEach((s, o) => {
						a[s] = t[o];
					})
			: /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
			? e.item
					.replace("{", "")
					.replace("}", "")
					.split(",")
					.map((s) => s.trim())
					.forEach((s) => {
						a[s] = t[s];
					})
			: (a[e.item] = t),
		e.index && (a[e.index] = n),
		e.collection && (a[e.collection] = r),
		a
	);
}
function ea(e) {
	return !Array.isArray(e) && !isNaN(e);
}
function Gn() {}
Gn.inline = (e, { expression: t }, { cleanup: n }) => {
	let r = me(e);
	r._x_refs || (r._x_refs = {}), (r._x_refs[t] = e), n(() => delete r._x_refs[t]);
};
E("ref", Gn);
E("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
	let a = C(e, t),
		i = () => {
			if (e._x_currentIfEl) return e._x_currentIfEl;
			let o = e.content.cloneNode(!0).firstElementChild;
			return (
				ue(o, {}, e),
				A(() => {
					e.after(o), M(o);
				}),
				(e._x_currentIfEl = o),
				(e._x_undoIf = () => {
					B(o, (u) => {
						u._x_effects && u._x_effects.forEach(Pt);
					}),
						o.remove(),
						delete e._x_currentIfEl;
				}),
				o
			);
		},
		s = () => {
			!e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
		};
	n(() =>
		a((o) => {
			o ? i() : s();
		})
	),
		r(() => e._x_undoIf && e._x_undoIf());
});
E("id", (e, { expression: t }, { evaluate: n }) => {
	n(t).forEach((a) => Ui(e, a));
});
at(Xt("@", Zt(Y("on:"))));
E(
	"on",
	xe((e, { value: t, modifiers: n, expression: r }, { cleanup: a }) => {
		let i = r ? C(e, r) : () => {};
		e.tagName.toLowerCase() === "template" &&
			(e._x_forwardEvents || (e._x_forwardEvents = []),
			e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
		let s = Vn(e, t, n, (o) => {
			i(() => {}, { scope: { $event: o }, params: [o] });
		});
		a(() => s());
	})
);
Fe("Collapse", "collapse", "collapse");
Fe("Intersect", "intersect", "intersect");
Fe("Focus", "trap", "focus");
Fe("Mask", "mask", "mask");
function Fe(e, t, n) {
	E(t, (r) =>
		z(
			`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
			r
		)
	);
}
le.setEvaluator(Vt);
le.setReactivityEngine({ reactive: _t, effect: bi, release: gi, raw: w });
var ta = le,
	J = ta;
/*!
 * tabbable 5.2.1
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Yn = [
		"input",
		"select",
		"textarea",
		"a[href]",
		"button",
		"[tabindex]",
		"audio[controls]",
		"video[controls]",
		'[contenteditable]:not([contenteditable="false"])',
		"details>summary:first-of-type",
		"details",
	],
	At = Yn.join(","),
	be =
		typeof Element > "u"
			? function () {}
			: Element.prototype.matches ||
			  Element.prototype.msMatchesSelector ||
			  Element.prototype.webkitMatchesSelector,
	Jn = function (t, n, r) {
		var a = Array.prototype.slice.apply(t.querySelectorAll(At));
		return n && be.call(t, At) && a.unshift(t), (a = a.filter(r)), a;
	},
	na = function (t) {
		return t.contentEditable === "true";
	},
	Qn = function (t) {
		var n = parseInt(t.getAttribute("tabindex"), 10);
		return isNaN(n)
			? na(t) ||
			  ((t.nodeName === "AUDIO" || t.nodeName === "VIDEO" || t.nodeName === "DETAILS") &&
					t.getAttribute("tabindex") === null)
				? 0
				: t.tabIndex
			: n;
	},
	ra = function (t, n) {
		return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
	},
	vt = function (t) {
		return t.tagName === "INPUT";
	},
	ia = function (t) {
		return vt(t) && t.type === "hidden";
	},
	aa = function (t) {
		var n =
			t.tagName === "DETAILS" &&
			Array.prototype.slice.apply(t.children).some(function (r) {
				return r.tagName === "SUMMARY";
			});
		return n;
	},
	sa = function (t, n) {
		for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
	},
	oa = function (t) {
		if (!t.name) return !0;
		var n = t.form || t.ownerDocument,
			r = function (o) {
				return n.querySelectorAll('input[type="radio"][name="' + o + '"]');
			},
			a;
		if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
			a = r(window.CSS.escape(t.name));
		else
			try {
				a = r(t.name);
			} catch (s) {
				return (
					console.error(
						"Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
						s.message
					),
					!1
				);
			}
		var i = sa(a, t.form);
		return !i || i === t;
	},
	ua = function (t) {
		return vt(t) && t.type === "radio";
	},
	ca = function (t) {
		return ua(t) && !oa(t);
	},
	la = function (t, n) {
		if (getComputedStyle(t).visibility === "hidden") return !0;
		var r = be.call(t, "details>summary:first-of-type"),
			a = r ? t.parentElement : t;
		if (be.call(a, "details:not([open]) *")) return !0;
		if (!n || n === "full")
			for (; t; ) {
				if (getComputedStyle(t).display === "none") return !0;
				t = t.parentElement;
			}
		else if (n === "non-zero-area") {
			var i = t.getBoundingClientRect(),
				s = i.width,
				o = i.height;
			return s === 0 && o === 0;
		}
		return !1;
	},
	fa = function (t) {
		if (vt(t) || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.tagName === "BUTTON")
			for (var n = t.parentElement; n; ) {
				if (n.tagName === "FIELDSET" && n.disabled) {
					for (var r = 0; r < n.children.length; r++) {
						var a = n.children.item(r);
						if (a.tagName === "LEGEND") return !a.contains(t);
					}
					return !0;
				}
				n = n.parentElement;
			}
		return !1;
	},
	bt = function (t, n) {
		return !(n.disabled || ia(n) || la(n, t.displayCheck) || aa(n) || fa(n));
	},
	da = function (t, n) {
		return !(!bt(t, n) || ca(n) || Qn(n) < 0);
	},
	pa = function (t, n) {
		n = n || {};
		var r = [],
			a = [],
			i = Jn(t, n.includeContainer, da.bind(null, n));
		i.forEach(function (o, u) {
			var c = Qn(o);
			c === 0 ? r.push(o) : a.push({ documentOrder: u, tabIndex: c, node: o });
		});
		var s = a
			.sort(ra)
			.map(function (o) {
				return o.node;
			})
			.concat(r);
		return s;
	},
	ha = function (t, n) {
		n = n || {};
		var r = Jn(t, n.includeContainer, bt.bind(null, n));
		return r;
	},
	_a = Yn.concat("iframe").join(","),
	Xn = function (t, n) {
		if (((n = n || {}), !t)) throw new Error("No node provided");
		return be.call(t, _a) === !1 ? !1 : bt(n, t);
	};
/*!
 * focus-trap 6.6.1
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Ct(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function va(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Ct(Object(n), !0).forEach(function (r) {
					ba(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Ct(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function ba(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = n),
		e
	);
}
var Tt = (function () {
		var e = [];
		return {
			activateTrap: function (n) {
				if (e.length > 0) {
					var r = e[e.length - 1];
					r !== n && r.pause();
				}
				var a = e.indexOf(n);
				a === -1 || e.splice(a, 1), e.push(n);
			},
			deactivateTrap: function (n) {
				var r = e.indexOf(n);
				r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
			},
		};
	})(),
	ga = function (t) {
		return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
	},
	ma = function (t) {
		return t.key === "Escape" || t.key === "Esc" || t.keyCode === 27;
	},
	ya = function (t) {
		return t.key === "Tab" || t.keyCode === 9;
	},
	$t = function (t) {
		return setTimeout(t, 0);
	},
	Re = function (t, n) {
		var r = -1;
		return (
			t.every(function (a, i) {
				return n(a) ? ((r = i), !1) : !0;
			}),
			r
		);
	},
	te = function (t) {
		for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
			r[a - 1] = arguments[a];
		return typeof t == "function" ? t.apply(void 0, r) : t;
	},
	wa = function (t, n) {
		var r = document,
			a = va({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0 }, n),
			i = {
				containers: [],
				tabbableGroups: [],
				nodeFocusedBeforeActivation: null,
				mostRecentlyFocusedNode: null,
				active: !1,
				paused: !1,
				delayInitialFocusTimer: void 0,
			},
			s,
			o = function (l, h, y) {
				return l && l[h] !== void 0 ? l[h] : a[y || h];
			},
			u = function (l) {
				return i.containers.some(function (h) {
					return h.contains(l);
				});
			},
			c = function (l) {
				var h = a[l];
				if (!h) return null;
				var y = h;
				if (typeof h == "string" && ((y = r.querySelector(h)), !y))
					throw new Error("`".concat(l, "` refers to no known node"));
				if (typeof h == "function" && ((y = h()), !y))
					throw new Error("`".concat(l, "` did not return a node"));
				return y;
			},
			d = function () {
				var l;
				if (o({}, "initialFocus") === !1) return !1;
				if (c("initialFocus") !== null) l = c("initialFocus");
				else if (u(r.activeElement)) l = r.activeElement;
				else {
					var h = i.tabbableGroups[0],
						y = h && h.firstTabbableNode;
					l = y || c("fallbackFocus");
				}
				if (!l) throw new Error("Your focus-trap needs to have at least one focusable element");
				return l;
			},
			_ = function () {
				if (
					((i.tabbableGroups = i.containers
						.map(function (l) {
							var h = pa(l);
							if (h.length > 0)
								return { container: l, firstTabbableNode: h[0], lastTabbableNode: h[h.length - 1] };
						})
						.filter(function (l) {
							return !!l;
						})),
					i.tabbableGroups.length <= 0 && !c("fallbackFocus"))
				)
					throw new Error(
						"Your focus-trap must have at least one container with at least one tabbable node in it at all times"
					);
			},
			v = function f(l) {
				if (l !== !1 && l !== r.activeElement) {
					if (!l || !l.focus) {
						f(d());
						return;
					}
					l.focus({ preventScroll: !!a.preventScroll }),
						(i.mostRecentlyFocusedNode = l),
						ga(l) && l.select();
				}
			},
			S = function (l) {
				var h = c("setReturnFocus");
				return h || l;
			},
			O = function (l) {
				if (!u(l.target)) {
					if (te(a.clickOutsideDeactivates, l)) {
						s.deactivate({ returnFocus: a.returnFocusOnDeactivate && !Xn(l.target) });
						return;
					}
					te(a.allowOutsideClick, l) || l.preventDefault();
				}
			},
			T = function (l) {
				var h = u(l.target);
				h || l.target instanceof Document
					? h && (i.mostRecentlyFocusedNode = l.target)
					: (l.stopImmediatePropagation(), v(i.mostRecentlyFocusedNode || d()));
			},
			p = function (l) {
				_();
				var h = null;
				if (i.tabbableGroups.length > 0) {
					var y = Re(i.tabbableGroups, function (Q) {
						var X = Q.container;
						return X.contains(l.target);
					});
					if (y < 0)
						l.shiftKey
							? (h = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode)
							: (h = i.tabbableGroups[0].firstTabbableNode);
					else if (l.shiftKey) {
						var $ = Re(i.tabbableGroups, function (Q) {
							var X = Q.firstTabbableNode;
							return l.target === X;
						});
						if (($ < 0 && i.tabbableGroups[y].container === l.target && ($ = y), $ >= 0)) {
							var I = $ === 0 ? i.tabbableGroups.length - 1 : $ - 1,
								U = i.tabbableGroups[I];
							h = U.lastTabbableNode;
						}
					} else {
						var H = Re(i.tabbableGroups, function (Q) {
							var X = Q.lastTabbableNode;
							return l.target === X;
						});
						if ((H < 0 && i.tabbableGroups[y].container === l.target && (H = y), H >= 0)) {
							var nr = H === i.tabbableGroups.length - 1 ? 0 : H + 1,
								rr = i.tabbableGroups[nr];
							h = rr.firstTabbableNode;
						}
					}
				} else h = c("fallbackFocus");
				h && (l.preventDefault(), v(h));
			},
			g = function (l) {
				if (ma(l) && te(a.escapeDeactivates) !== !1) {
					l.preventDefault(), s.deactivate();
					return;
				}
				if (ya(l)) {
					p(l);
					return;
				}
			},
			m = function (l) {
				te(a.clickOutsideDeactivates, l) ||
					u(l.target) ||
					te(a.allowOutsideClick, l) ||
					(l.preventDefault(), l.stopImmediatePropagation());
			},
			x = function () {
				if (!!i.active)
					return (
						Tt.activateTrap(s),
						(i.delayInitialFocusTimer = a.delayInitialFocus
							? $t(function () {
									v(d());
							  })
							: v(d())),
						r.addEventListener("focusin", T, !0),
						r.addEventListener("mousedown", O, { capture: !0, passive: !1 }),
						r.addEventListener("touchstart", O, { capture: !0, passive: !1 }),
						r.addEventListener("click", m, { capture: !0, passive: !1 }),
						r.addEventListener("keydown", g, { capture: !0, passive: !1 }),
						s
					);
			},
			b = function () {
				if (!!i.active)
					return (
						r.removeEventListener("focusin", T, !0),
						r.removeEventListener("mousedown", O, !0),
						r.removeEventListener("touchstart", O, !0),
						r.removeEventListener("click", m, !0),
						r.removeEventListener("keydown", g, !0),
						s
					);
			};
		return (
			(s = {
				activate: function (l) {
					if (i.active) return this;
					var h = o(l, "onActivate"),
						y = o(l, "onPostActivate"),
						$ = o(l, "checkCanFocusTrap");
					$ || _(),
						(i.active = !0),
						(i.paused = !1),
						(i.nodeFocusedBeforeActivation = r.activeElement),
						h && h();
					var I = function () {
						$ && _(), x(), y && y();
					};
					return $ ? ($(i.containers.concat()).then(I, I), this) : (I(), this);
				},
				deactivate: function (l) {
					if (!i.active) return this;
					clearTimeout(i.delayInitialFocusTimer),
						(i.delayInitialFocusTimer = void 0),
						b(),
						(i.active = !1),
						(i.paused = !1),
						Tt.deactivateTrap(s);
					var h = o(l, "onDeactivate"),
						y = o(l, "onPostDeactivate"),
						$ = o(l, "checkCanReturnFocus");
					h && h();
					var I = o(l, "returnFocus", "returnFocusOnDeactivate"),
						U = function () {
							$t(function () {
								I && v(S(i.nodeFocusedBeforeActivation)), y && y();
							});
						};
					return I && $ ? ($(S(i.nodeFocusedBeforeActivation)).then(U, U), this) : (U(), this);
				},
				pause: function () {
					return i.paused || !i.active ? this : ((i.paused = !0), b(), this);
				},
				unpause: function () {
					return !i.paused || !i.active ? this : ((i.paused = !1), _(), x(), this);
				},
				updateContainerElements: function (l) {
					var h = [].concat(l).filter(Boolean);
					return (
						(i.containers = h.map(function (y) {
							return typeof y == "string" ? r.querySelector(y) : y;
						})),
						i.active && _(),
						this
					);
				},
			}),
			s.updateContainerElements(t),
			s
		);
	};
function xa(e) {
	let t, n;
	window.addEventListener("focusin", () => {
		(t = n), (n = document.activeElement);
	}),
		e.magic("focus", (r) => {
			let a = r;
			return {
				__noscroll: !1,
				__wrapAround: !1,
				within(i) {
					return (a = i), this;
				},
				withoutScrolling() {
					return (this.__noscroll = !0), this;
				},
				noscroll() {
					return (this.__noscroll = !0), this;
				},
				withWrapAround() {
					return (this.__wrapAround = !0), this;
				},
				wrap() {
					return this.withWrapAround();
				},
				focusable(i) {
					return Xn(i);
				},
				previouslyFocused() {
					return t;
				},
				lastFocused() {
					return t;
				},
				focused() {
					return n;
				},
				focusables() {
					return Array.isArray(a) ? a : ha(a, { displayCheck: "none" });
				},
				all() {
					return this.focusables();
				},
				isFirst(i) {
					let s = this.all();
					return s[0] && s[0].isSameNode(i);
				},
				isLast(i) {
					let s = this.all();
					return s.length && s.slice(-1)[0].isSameNode(i);
				},
				getFirst() {
					return this.all()[0];
				},
				getLast() {
					return this.all().slice(-1)[0];
				},
				getNext() {
					let i = this.all(),
						s = document.activeElement;
					if (i.indexOf(s) !== -1)
						return this.__wrapAround && i.indexOf(s) === i.length - 1 ? i[0] : i[i.indexOf(s) + 1];
				},
				getPrevious() {
					let i = this.all(),
						s = document.activeElement;
					if (i.indexOf(s) !== -1)
						return this.__wrapAround && i.indexOf(s) === 0 ? i.slice(-1)[0] : i[i.indexOf(s) - 1];
				},
				first() {
					this.focus(this.getFirst());
				},
				last() {
					this.focus(this.getLast());
				},
				next() {
					this.focus(this.getNext());
				},
				previous() {
					this.focus(this.getPrevious());
				},
				prev() {
					return this.previous();
				},
				focus(i) {
					!i ||
						setTimeout(() => {
							i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0"),
								i.focus({ preventScroll: this._noscroll });
						});
				},
			};
		}),
		e.directive(
			"trap",
			e.skipDuringClone(
				(r, { expression: a, modifiers: i }, { effect: s, evaluateLater: o, cleanup: u }) => {
					let c = o(a),
						d = !1,
						_ = wa(r, {
							escapeDeactivates: !1,
							allowOutsideClick: !0,
							fallbackFocus: () => r,
							initialFocus: r.querySelector("[autofocus]"),
						}),
						v = () => {},
						S = () => {};
					const O = () => {
						v(),
							(v = () => {}),
							S(),
							(S = () => {}),
							_.deactivate({ returnFocus: !i.includes("noreturn") });
					};
					s(() =>
						c((T) => {
							d !== T &&
								(T &&
									!d &&
									setTimeout(() => {
										i.includes("inert") && (v = Lt(r)),
											i.includes("noscroll") && (S = Ea()),
											_.activate();
									}),
								!T && d && O(),
								(d = !!T));
						})
					),
						u(O);
				},
				(r, { expression: a, modifiers: i }, { evaluate: s }) => {
					i.includes("inert") && s(a) && Lt(r);
				}
			)
		);
}
function Lt(e) {
	let t = [];
	return (
		Zn(e, (n) => {
			let r = n.hasAttribute("aria-hidden");
			n.setAttribute("aria-hidden", "true"), t.push(() => r || n.removeAttribute("aria-hidden"));
		}),
		() => {
			for (; t.length; ) t.pop()();
		}
	);
}
function Zn(e, t) {
	e.isSameNode(document.body) ||
		!e.parentNode ||
		Array.from(e.parentNode.children).forEach((n) => {
			n.isSameNode(e) || t(n), Zn(e.parentNode, t);
		});
}
function Ea() {
	let e = document.documentElement.style.overflow,
		t = document.documentElement.style.paddingRight,
		n = window.innerWidth - document.documentElement.clientWidth;
	return (
		(document.documentElement.style.overflow = "hidden"),
		(document.documentElement.style.paddingRight = `${n}px`),
		() => {
			(document.documentElement.style.overflow = e),
				(document.documentElement.style.paddingRight = t);
		}
	);
}
var Sa = xa;
function Oa(e) {
	e.directive("dialog", (t, n) => {
		n.value === "overlay"
			? Ca(t, e)
			: n.value === "panel"
			? Ta(t, e)
			: n.value === "title"
			? $a(t, e)
			: n.value === "description"
			? La(t, e)
			: Aa(t, e);
	}),
		e.magic("dialog", (t) => {
			let n = e.$data(t);
			return {
				get open() {
					return n.__isOpen;
				},
				get isOpen() {
					return n.__isOpen;
				},
				close() {
					n.__close();
				},
			};
		});
}
function Aa(e, t) {
	t.bind(e, {
		"x-data"() {
			return {
				init() {
					t.bound(e, "open") !== void 0 &&
						t.effect(() => {
							this.__isOpenState = t.bound(e, "open");
						}),
						t.bound(e, "initial-focus") !== void 0 &&
							this.$watch("__isOpenState", () => {
								!this.__isOpenState ||
									setTimeout(() => {
										t.bound(e, "initial-focus").focus();
									}, 0);
							});
				},
				__isOpenState: !1,
				__close() {
					t.bound(e, "open") ? this.$dispatch("close") : (this.__isOpenState = !1);
				},
				get __isOpen() {
					return t.bound(e, "static", this.__isOpenState);
				},
			};
		},
		"x-modelable": "__isOpenState",
		"x-id"() {
			return ["alpine-dialog-title", "alpine-dialog-description"];
		},
		"x-show"() {
			return this.__isOpen;
		},
		"x-trap.inert.noscroll"() {
			return this.__isOpen;
		},
		"@keydown.escape"() {
			this.__close();
		},
		":aria-labelledby"() {
			return this.$id("alpine-dialog-title");
		},
		":aria-describedby"() {
			return this.$id("alpine-dialog-description");
		},
		role: "dialog",
		"aria-modal": "true",
	});
}
function Ca(e, t) {
	t.bind(e, {
		"x-init"() {
			this.$data.__isOpen === void 0 &&
				console.warn('"x-dialog:overlay" is missing a parent element with "x-dialog".');
		},
		"x-show"() {
			return this.__isOpen;
		},
		"@click.prevent.stop"() {
			this.$data.__close();
		},
	});
}
function Ta(e, t) {
	t.bind(e, {
		"@click.outside"() {
			this.$data.__close();
		},
		"x-show"() {
			return this.$data.__isOpen;
		},
	});
}
function $a(e, t) {
	t.bind(e, {
		"x-init"() {
			this.$data.__isOpen === void 0 &&
				console.warn('"x-dialog:title" is missing a parent element with "x-dialog".');
		},
		":id"() {
			return this.$id("alpine-dialog-title");
		},
	});
}
function La(e, t) {
	t.bind(e, {
		":id"() {
			return this.$id("alpine-dialog-description");
		},
	});
}
function Fa(e) {
	e.directive("popover", (t, n) => {
		n.value
			? n.value === "overlay"
				? Ra(t, e)
				: n.value === "button"
				? Ia(t, e)
				: n.value === "panel"
				? Pa(t, e)
				: n.value === "group" && Ma(t, e)
			: Na(t, e);
	}),
		e.magic("popover", (t) => {
			let n = e.$data(t);
			return {
				get isOpen() {
					return n.__isOpenState;
				},
				open() {
					n.__open();
				},
				close() {
					n.__close();
				},
			};
		});
}
function Na(e, t) {
	t.bind(e, {
		"x-id"() {
			return ["alpine-popover-button", "alpine-popover-panel"];
		},
		"x-modelable": "__isOpenState",
		"x-data"() {
			return {
				init() {
					this.$data.__groupEl &&
						this.$data.__groupEl.addEventListener("__close-others", ({ detail: n }) => {
							n.el.isSameNode(this.$el) || this.__close(!1);
						});
				},
				__buttonEl: void 0,
				__panelEl: void 0,
				__isStatic: !1,
				get __isOpen() {
					return this.__isStatic ? !0 : this.__isOpenState;
				},
				__isOpenState: !1,
				__open() {
					(this.__isOpenState = !0), this.$dispatch("__close-others", { el: this.$el });
				},
				__toggle() {
					this.__isOpenState ? this.__close() : this.__open();
				},
				__close(n) {
					this.__isStatic ||
						((this.__isOpenState = !1),
						n !== !1 &&
							((n = n || this.$data.__buttonEl),
							!document.activeElement.isSameNode(n) && setTimeout(() => n.focus())));
				},
				__contains(n, r) {
					return !!t.findClosest(r, (a) => a.isSameNode(n));
				},
			};
		},
		"@keydown.escape.stop.prevent"() {
			this.__close();
		},
		"@focusin.window"() {
			if (this.$data.__groupEl) {
				this.$data.__contains(this.$data.__groupEl, document.activeElement) ||
					this.$data.__close(!1);
				return;
			}
			this.$data.__contains(this.$el, document.activeElement) || this.$data.__close(!1);
		},
	});
}
function Ia(e, t) {
	t.bind(e, {
		"x-ref": "button",
		":id"() {
			return this.$id("alpine-popover-button");
		},
		":aria-expanded"() {
			return this.$data.__isOpen;
		},
		":aria-controls"() {
			return this.$data.__isOpen && this.$id("alpine-popover-panel");
		},
		"x-init"() {
			this.$el.tagName.toLowerCase() === "button" &&
				!this.$el.hasAttribute("type") &&
				(this.$el.type = "button"),
				(this.$data.__buttonEl = this.$el);
		},
		"@click"() {
			this.$data.__toggle();
		},
		"@keydown.tab"(n) {
			if (!n.shiftKey && this.$data.__isOpen) {
				let r = this.$focus.within(this.$data.__panelEl).getFirst();
				r && (n.preventDefault(), n.stopPropagation(), this.$focus.focus(r));
			}
		},
		"@keyup.tab"(n) {
			if (this.$data.__isOpen) {
				let r = this.$focus.previouslyFocused();
				if (!r) return;
				!this.$data.__buttonEl.contains(r) &&
					!this.$data.__panelEl.contains(r) &&
					r &&
					this.$el.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING &&
					(n.preventDefault(),
					n.stopPropagation(),
					this.$focus.within(this.$data.__panelEl).last());
			}
		},
		"@keydown.space.stop.prevent"() {
			this.$data.__toggle();
		},
		"@keydown.enter.stop.prevent"() {
			this.$data.__toggle();
		},
		"@keyup.space.stop.prevent"() {},
	});
}
function Pa(e, t) {
	t.bind(e, {
		"x-init"() {
			(this.$data.__isStatic = t.bound(this.$el, "static", !1)), (this.$data.__panelEl = this.$el);
		},
		"x-effect"() {
			this.$data.__isOpen && t.bound(e, "focus") && this.$focus.first();
		},
		"x-ref": "panel",
		":id"() {
			return this.$id("alpine-popover-panel");
		},
		"x-show"() {
			return this.$data.__isOpen;
		},
		"@mousedown.window"(n) {
			!this.$data.__isOpen ||
				this.$data.__contains(this.$data.__buttonEl, n.target) ||
				this.$data.__contains(this.$el, n.target) ||
				this.$focus.focusable(n.target) ||
				this.$data.__close();
		},
		"@keydown.tab"(n) {
			if (n.shiftKey && this.$focus.isFirst(n.target))
				n.preventDefault(),
					n.stopPropagation(),
					t.bound(e, "focus") ? this.$data.__close() : this.$data.__buttonEl.focus();
			else if (!n.shiftKey && this.$focus.isLast(n.target)) {
				n.preventDefault(), n.stopPropagation();
				let r = this.$focus.within(document).all(),
					a = r.indexOf(this.$data.__buttonEl);
				r
					.splice(a + 1)
					.filter((s) => !this.$el.contains(s))[0]
					.focus(),
					t.bound(e, "focus") && this.$data.__close(!1);
			}
		},
	});
}
function Ma(e, t) {
	t.bind(e, {
		"x-ref": "container",
		"x-data"() {
			return { __groupEl: this.$el };
		},
	});
}
function Ra(e, t) {
	t.bind(e, {
		"x-show"() {
			return this.$data.__isOpen;
		},
	});
}
function Da(e) {
	Oa(e), Fa(e);
}
var ka = Da;
const ja = () => ({ init() {} }),
	Ka = /[\p{Lu}]/u,
	Ba = /[\p{Ll}]/u,
	Ft = /^[\p{Lu}](?![\p{Lu}])/gu,
	er = /([\p{Alpha}\p{N}_]|$)/u,
	gt = /[_.\- ]+/,
	Ua = new RegExp("^" + gt.source),
	Nt = new RegExp(gt.source + er.source, "gu"),
	It = new RegExp("\\d+" + er.source, "gu"),
	Ha = (e, t, n) => {
		let r = !1,
			a = !1,
			i = !1;
		for (let s = 0; s < e.length; s++) {
			const o = e[s];
			r && Ka.test(o)
				? ((e = e.slice(0, s) + "-" + e.slice(s)), (r = !1), (i = a), (a = !0), s++)
				: a && i && Ba.test(o)
				? ((e = e.slice(0, s - 1) + "-" + e.slice(s - 1)), (i = a), (a = !1), (r = !0))
				: ((r = t(o) === o && n(o) !== o), (i = a), (a = n(o) === o && t(o) !== o));
		}
		return e;
	},
	Wa = (e, t) => ((Ft.lastIndex = 0), e.replace(Ft, (n) => t(n))),
	qa = (e, t) => (
		(Nt.lastIndex = 0), (It.lastIndex = 0), e.replace(Nt, (n, r) => t(r)).replace(It, (n) => t(n))
	);
function tr(e, t) {
	if (!(typeof e == "string" || Array.isArray(e)))
		throw new TypeError("Expected the input to be `string | string[]`");
	if (
		((t = { pascalCase: !1, preserveConsecutiveUppercase: !1, ...t }),
		Array.isArray(e)
			? (e = e
					.map((i) => i.trim())
					.filter((i) => i.length)
					.join("-"))
			: (e = e.trim()),
		e.length === 0)
	)
		return "";
	const n = t.locale === !1 ? (i) => i.toLowerCase() : (i) => i.toLocaleLowerCase(t.locale),
		r = t.locale === !1 ? (i) => i.toUpperCase() : (i) => i.toLocaleUpperCase(t.locale);
	return e.length === 1
		? gt.test(e)
			? ""
			: t.pascalCase
			? r(e)
			: n(e)
		: (e !== n(e) && (e = Ha(e, n, r)),
		  (e = e.replace(Ua, "")),
		  (e = t.preserveConsecutiveUppercase ? Wa(e, n) : n(e)),
		  t.pascalCase && (e = r(e.charAt(0)) + e.slice(1)),
		  qa(e, r));
}
function za(e) {
	const t = Object.assign({ "./example.ts": ja });
	for (const [n, r] of Object.entries(t)) {
		const [a] = n.split("/").reverse(),
			[i] = a.split(".");
		e.data(tr(i), r);
	}
}
const Va = () => ({ init() {} });
function Ga(e) {
	const t = Object.assign({ "./example.ts": Va });
	for (const [n, r] of Object.entries(t)) {
		const [a] = n.split("/").reverse(),
			[i] = a.split(".");
		e.store(tr(i), r());
	}
}
J.plugin(Sa);
J.plugin(ka);
J.plugin(za);
J.plugin(Ga);
window.Alpine = J;
J.start();
