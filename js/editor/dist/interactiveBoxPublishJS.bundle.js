! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 1271)
    }({
        1271: function(e, t) {
            WS_ELEMENTS.interactiveBox = (adjustIcons = function(e) {
                e.$el.find(".card-icon .fa").each((function() {
                    var e = $(this),
                        t = e.parent(),
                        n = parseInt(e.data("size")),
                        o = e.data("layout");
                    1 == o ? e.css("font-size", t.height() * (n / 100) / 2) : 4 == o || 5 == o ? e.css("font-size", t.height() * (n / 100)) : e.css("font-size", t.width() * (n / 100))
                }))
            }, {
                init: function(e) {
                    e.$el && e.$el.length && (function(e, t) {
                        if (e.length && e.find(".swiper-slide").length > 1) {
                            var n = {
                                loop: !0,
                                navigation: {
                                    nextEl: e.find(".carousel-control-next").get(0),
                                    prevEl: e.find(".carousel-control-prev").get(0)
                                },
                                pagination: {
                                    el: e.find(".swiper-pagination").get(0),
                                    clickable: !0
                                },
                                fadeEffect: {
                                    crossFade: !0
                                },
                                effect: "horz" == t.multiTransition ? "slide" : "fade",
                                lazy: !0
                            };
                            t.multiAutoStart && (n.autoplay = {
                                delay: 1e3 * t.multiInterval
                            });
                            var o = new Swiper(e.get(0), n);
                            window.Defer && window.inView && o.on("slideChange", (function(t) {
                                window.fm_loadMedia && e.find(".swiper-slide-prev, .swiper-slide-next").each((function(e, t) {
                                    window.fm_loadMedia($(t))
                                }))
                            }))
                        }
                    }(e.$el.find(".interactivebox-carousel"), e), adjustIcons(e))
                }
            })
        }
    })
}));