! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var a = t();
        for (var o in a)("object" == typeof exports ? exports : e)[o] = a[o]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function a(o) {
            if (t[o]) return t[o].exports;
            var n = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports
        }
        return a.m = e, a.c = t, a.d = function(e, t, o) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (a.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) a.d(o, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return o
        }, a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "", a(a.s = 1243)
    }({
        1243: function(e, t) {
            var a = function() {
                var e = '<div class="h-recaptcha" data-sitekey="' + document.querySelector(".ws-captcha").getAttribute("data-h-site-key") + '" data-callback="onCaptchaComplete" data-size="invisible" style="position: fixed;top: 50%;left: 50%;"></div>';
                document.body.insertAdjacentHTML("beforeend", e);
                var t = document.createElement("script");
                t.id = "hCaptcha-script", t.src = "https://hcaptcha.com/1/api.js?onload=recaptchaOnLoad", t.onerror = function() {
                    if (document.querySelectorAll(".h-captcha").forEach((function(e) {
                            return e.remove()
                        })), window.$) {
                        var e = $(".custom-captcha");
                        e.length ? ($(".external-captcha").hide(), e.show()) : alert("Unable to load captcha verification. Please try again later.")
                    }
                }, document.head.appendChild(t)
            };
            window.Recaptcha = {
                load: function(e) {
                    var t = this;
                    if (window.recaptchaOnLoad) e && e();
                    else {
                        var o = '<div class="g-recaptcha" data-sitekey="' + document.querySelector(".ws-captcha").getAttribute("data-google-site-key") + '" data-callback="onCaptchaComplete" data-size="invisible" style="position: fixed;top: 50%;left: 50%;"></div>';
                        document.body.insertAdjacentHTML("beforeend", o), window.recaptchaOnLoad = function() {
                            t.toggleBadge(!1), e && e()
                        };
                        var n = document.createElement("script");
                        n.id = "g-recaptcha-script", n.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaOnLoad", n.onerror = function() {
                            document.querySelectorAll(".g-recaptcha").forEach((function(e) {
                                return e.remove()
                            })), a(e)
                        }, document.head.appendChild(n)
                    }
                    return this
                },
                invisible: function(e, t) {
                    var a = this;
                    window.recaptchaOnLoad || document.body.insertAdjacentHTML("beforeend", "<div class='recaptcha-overlay' style='position: fixed;z-index: 9999999999999;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0,0,0,0.4) url('/img/loading_white.svg) 50% no-repeat;background-size: 50px;'></div>"), this.reset().load((function() {
                        a.toggleBadge(!0), window.grecaptcha && (window.onCaptchaComplete = function(t) {
                            if (t) {
                                if (e) {
                                    var o = "googleV2";
                                    window.hcaptcha && (o = "hcaptcha"), e({
                                        token: t,
                                        method: o
                                    })
                                }
                            } else console.log("CAPTCHA verification failed. Please try again.");
                            a.toggleBadge(!1), a.reset(), delete window.onCaptchaComplete
                        }, window.grecaptcha.execute(), setTimeout((function() {
                            document.querySelectorAll(".recaptcha-overlay").forEach((function(e) {
                                return e.remove()
                            }))
                        }), 1e3))
                    }))
                },
                toggleBadge: function(e) {
                    var t = document.querySelector(".grecaptcha-badge");
                    t && (t.style.display = e ? "inline-block" : "none")
                },
                reset: function() {
                    return window.grecaptcha && window.grecaptcha.reset(), this
                },
                inline: function(e, t) {
                    this.reset().load((function() {
                        if (window.grecaptcha) {
                            var a = window.hcaptcha ? $(".ws-captcha").data("h-site-key") : $(".ws-captcha").data("google-site-key"),
                                o = window.grecaptcha.render(e.attr("id"), {
                                    sitekey: a
                                });
                            t && t(o)
                        }
                    }))
                }
            }
        }
    })
}));