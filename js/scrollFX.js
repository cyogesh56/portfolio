// Scroll FX 2.0.0
window.addEventListener("load", (function(s) { scrollFX(s) })), window.addEventListener("scroll", (function(s) { scrollFX(s) }));
var lastScrollTop = 0,
	scrollPos = 0;

function scrollFX(s) { var l = window.innerHeight; if (document.documentElement.scrollHeight != l) { var t = window.pageYOffset || document.documentElement.scrollTop,
			o = lastScrollTop > t;
		lastScrollTop = t <= 0 ? 0 : t;
		document.querySelectorAll('[data-scroll-lock-distance], [class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"], [class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"], [class*="scroll-fx-zoom-"], [class*="scroll-fx-rotate-"], [class*="scroll-fx-reverse-rotate-"]').forEach((t => { var c = window.pageYOffset,
				a = c + 3 * l,
				e = window.scrollY,
				r = t.getBoundingClientRect(),
				i = t.parentNode.closest("[data-scroll-lock-distance]"),
				n = scrollPos < e,
				f = scrollPos - e; if (i) { var d = parseInt(i.getAttribute("data-scroll-lock-distance")),
					u = parseInt(i.getAttribute("data-scroll-lock-scroll-y"));
				document.body.classList.contains("scroll-fx-lock") && "scroll" == s.type && (u += f), u && (e = u) } else if (t.hasAttribute("data-scroll-lock-distance") && t.classList.contains("scroll-fx-lock-init")) { d = parseInt(t.getAttribute("data-scroll-lock-distance")); var x = parseInt(t.getAttribute("data-scroll-lock-scroll-y-start")),
					p = parseInt(t.getAttribute("data-scroll-lock-offset")),
					m = p,
					b = parseInt(t.getAttribute("data-scroll-lock-scroll-y")); if (document.body.classList.contains("scroll-fx-lock")) { "scroll" == s.type && (m += f, b += f); var h = x; if (n) { if (p > x || m < -d) document.body.classList.remove("scroll-fx-lock"), t.classList.remove("scroll-fx-lock-init"), t.classList.add("bloc-temp-past-lock-point"), document.getElementById("scrollFX-filler").remove(), window.scrollTo({ top: h, left: 0, behavior: "instant" }), m < -d && t.classList.add("scroll-fx-bloc-past-exit-point");
						else t.setAttribute("data-scroll-lock-offset", m), e = b, t.setAttribute("data-scroll-lock-scroll-y", b) } else { t.getBoundingClientRect().top; if (p > x || m > d || !t.classList.contains("scroll-fx-bloc-past-exit-point") && !n && p > 0) document.body.classList.remove("scroll-fx-lock"), t.classList.remove("scroll-fx-lock-init"), t.classList.add("bloc-temp-past-lock-point"), document.getElementById("scrollFX-filler").remove(), window.scrollTo({ top: h, left: 0, behavior: "instant" }), t.classList.remove("scroll-fx-bloc-past-exit-point"), t.setAttribute("data-scroll-lock-offset", 0);
						else t.setAttribute("data-scroll-lock-offset", m), e = b, t.setAttribute("data-scroll-lock-scroll-y", b) } } } t.hasAttribute("data-scroll-fx-delay") && (e += parseInt(t.getAttribute("data-scroll-fx-delay")), t.matches('[class*="-in-fade"],[class*="-out-fade"]') && (t.style.opacity = "0.0")); var k = r.top + e; if (k < a) {!t.classList.contains("scroll-fx-in-range") && t.matches('[class*="scroll-fx-in-fade"], [class*="scroll-fx-out-fade"]') && t.classList.add("scroll-fx-in-range"); var v = 10;
				t.hasAttribute("data-scroll-fx-resistance") && (v = parseInt(t.getAttribute("data-scroll-fx-resistance"))); var g = l / 2 - t.offsetHeight / 2,
					y = (t.offsetHeight, c - k + t.offsetHeight / 100 + g),
					L = e / (k - g),
					A = (k - g) / e,
					w = y / v,
					I = w + "%",
					E = -w + "%",
					T = 1 + y / (25 * v),
					F = w,
					H = "in",
					X = 30; if (t.classList.contains("scroll-fx-continuous") && (X = 0), (w > 0 || !t.matches('[class*="-in"]')) && (t.classList.contains("scroll-fx-continuous") && t.matches('[class*="-out"]') || (I = 0, E = 0), w > 0 && (L = 1, A = 1), t.matches('[class*="-in-fade"],[class*="-out-fade"]') && (t.style.opacity = "1.0"), t.matches('[class*="-rotate-in"],[class*="-rotate-out"]') && (F = 0)), t.hasAttribute("data-scroll-lock-distance")) { var z = t.classList.contains("scroll-fx-bloc-past-exit-point"); if (w > 1 && !z || z && w < 1.5) { if (!document.body.classList.contains("scroll-fx-lock") && !t.classList.contains("bloc-temp-past-lock-point")) { var B = t.offsetTop;
							d = parseInt(t.getAttribute("data-scroll-lock-distance")), parseInt(t.offsetHeight);
							document.body.classList.add("scroll-fx-lock"), t.classList.add("scroll-fx-lock-init"), t.classList.contains("scroll-fx-bloc-past-exit-point") || (t.setAttribute("data-scroll-lock-scroll-y-start", B), t.setAttribute("data-scroll-lock-scroll-y", e)), t.setAttribute("data-scroll-lock-offset", 0); var P = document.createElement("div");
							P.id = "scrollFX-filler", P.style.cssText = "height:" + d + "px;", t.parentNode.insertBefore(P, t) } } else(parseInt(w) > 2 || parseInt(w) < -2) && t.classList.remove("bloc-temp-past-lock-point") } w > X && t.matches('[class*="-out"]') && (H = "out", I = -Math.abs(w - X) + "%", E = Math.abs(w - X) + "%", F = Math.abs(w - X), T = 1 - y / (25 * v) + .8); var S = ""; if (t.matches('[class*="scroll-fx-left-' + H + '"]') && (S = "translate3d(" + I + ",0,0)"), t.matches('[class*="scroll-fx-right-' + H + '"]') ? S = "translate3d(" + E + ",0,0)" : t.matches('[class*="scroll-fx-up-' + H + '"]') ? S = "translate3d(0," + E + ",0)" : t.matches('[class*="scroll-fx-down-' + H + '"]') && (S = "translate3d(0," + I + ",0)"), t.matches('[class*="scroll-fx-zoom-push"], [class*="scroll-fx-zoom-pull"]')) { var Y = L; if (t.matches('[class*="scroll-fx-zoom-push"]')) { if ((Y = A) > 2) Y = 2;
						else { var M = t.getAttribute("scroll-fx-last-scale");
							o ? M > Y && (Y = M) : Y > M && (Y = M) } t.setAttribute("scroll-fx-last-scale", Y) } t.matches('[class*="scroll-fx-up-"], [class*="scroll-fx-down-"], [class*="scroll-fx-left-"], [class*="scroll-fx-right-"]') ? S += "scale(" + Y + ")" : S = "scale(" + Y + ")" } t.matches('[class*="scroll-fx-rotate-' + H + '"], [class*="scroll-fx-reverse-rotate-' + H + '"]') && (t.matches('[class*="scroll-fx-reverse-rotate-' + H + '"]') && (F = -F), S += "rotate(" + F + "deg)"); var C = !0;
				t.hasAttribute("data-scroll-lock-distance") && "out" == H && (C = !document.body.classList.contains("scroll-fx-lock")), C && (t.classList.contains("scroll-fx-" + H + "-fade") && !t.matches('[class*="scroll-fx-zoom-"], [class*="scroll-fx-rotate-"],[class*="scroll-fx-reverse-rotate-"]') || (t.style.transform = S), t.matches('[class*="-' + H + '-fade"]') && (t.style.opacity = T)) } })), scrollPos = window.scrollY } }