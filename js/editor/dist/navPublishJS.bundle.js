! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var a in n)("object" == typeof exports ? exports : e)[a] = n[a]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function n(a) {
            if (t[a]) return t[a].exports;
            var i = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
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
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(a, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return a
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 1275)
    }({
        1275: function(e, t) {
            var n, a, i, r, o;
            WS_ELEMENTS.nav = (n = function(e) {
                var t = e.$el.find(".hp-dropdown");
                HotPot.Widget.dropdown({
                    $el: t,
                    className: "nav-dropdown nav-dropdown-" + e.$el.attr("id").replace("el-", ""),
                    onChange: function(n, a) {
                        t.find(".hp-dropdown-toggle").contents().wrap("<span />"), e.$el.trigger("change", [a.value, $(n.currentTarget)])
                    },
                    onOpen: function(e) {
                        e.find("a").click((function(e) {
                            e.preventDefault()
                        }))
                    }
                }), t.find(".hp-dropdown-toggle").contents().wrap("<span />"), e.$el.find(".hp-dropdown-toggle span").toggleClass("hide", e.$el.width() <= 100), e.$el.on("change", (function(t, n, a) {
                    t.preventDefault();
                    var i = a.attr("data-type"),
                        r = !0;
                    if ("Page" == i || "Anchor" == i) {
                        var o = a.attr("data-scrollTo");
                        if (o) return "top" == o ? scrollToTop() : scrollToBottom(), void(r = !1)
                    }
                    if ("Anchor" == i) {
                        var l = a.attr("data-anchorid");
                        if (l && $("#el-" + l).length) return scrollToAnchor(l), void(r = !1)
                    }
                    if ("Page" == i && parseInt(a.attr("data-pageid")) == e.currentPageId) return scrollToTop(), void(r = !1);
                    if (r) {
                        var d = a.find("a").attr("href");
                        d && ("_blank" == ("_blank" == a.find("a").attr("target")) ? window.open(d, "_blank") : window.location.href = d)
                    }
                })), e.$el.css("opacity", 1)
            }, a = function() {
                $("body").css("overflow", ""), $("#body-wrapper").find(".nav-element-modal-overlay, .nav-element-modal.show").remove(), $('a[id*="ws-bottom-banner"]').show(), window.FB && window.FB.CustomerChat && FB.CustomerChat.show(!1)
            }, i = function(e) {
                $("body").css("overflow", "hidden");
                var t = $("#body-wrapper"),
                    n = e.$el.find(".nav-element-modal").clone().appendTo(t);
                n.find(".hpi-close").click(a), n.find("a").click((function(t) {
                    var n = $(t.currentTarget),
                        i = n.parent(),
                        r = $(t.target),
                        o = i.data("type");
                    if (r.hasClass("fa-angle-down") || "none" == o) return t.preventDefault(), void i.toggleClass("show");
                    if (("Anchor" == o || "Page" == o) && n.hasClass("anchorLinkTo") && i.data("pageid") == e.currentPageId) {
                        t.preventDefault();
                        var l = i.data("anchorid");
                        l ? scrollToAnchor(l) : scrollToTop(), a()
                    }
                })), $('a[id*="ws-bottom-banner"]').hide(), window.FB && window.FB.CustomerChat && FB.CustomerChat.hide(), $('<div class="nav-element-modal-overlay"></div>').appendTo(t).click(a), setTimeout((function() {
                    n.addClass("show")
                }), 100)
            }, r = function(e) {
                var t = e.model,
                    n = t.overflow,
                    a = t.subtype,
                    i = t.overflowIcon,
                    r = e.$el;
                ! function(e) {
                    var t = e.model.sameSize,
                        n = e.$el.find(".nav-links > li");
                    if (n.css({
                            width: "auto"
                        }), t) {
                        var a = 0;
                        n.not(".nav-link-more").each((function() {
                            a = Math.max(a, $(this).outerWidth(!0))
                        })), n.not(".nav-link-more").width(a)
                    }
                }(e);
                var o = r.find(".nav-links"),
                    l = o.find("> li"),
                    d = r.outerWidth(!0),
                    s = o.outerWidth(!0),
                    v = 0;
                if (l.not(".nav-link-more").each((function() {
                        var e = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 ? 2 : 1;
                        v += $(this).width() * e + parseInt($(this).css("margin-right"))
                    })), v <= 0 && l.not(".nav-link-more").last().find("span").css("width", "auto"), v <= 0) l.not(".nav-link-more").addClass("nav-link-hide"), l.filter(".nav-link-more").removeClass("nav-link-hide");
                else if (d >= v) l.not(".nav-link-more").removeClass("nav-link-hide"), l.filter(".nav-link-more").addClass("nav-link-hide"), l.filter(".nav-link-more").find("ul").empty();
                else if (d <= s) {
                    var c = l.not(".nav-link-hide, .nav-link-more").last().addClass("nav-link-hide").clone();
                    if (c.length) {
                        var f = c.removeClass("nav-link-hide").removeClass("nav-links-sublink").css("width", "").prependTo(l.filter(".nav-link-more").find("ul"));
                        c.find("ul li").reverse().each((function() {
                            $(this).removeClass("nav-link-hide").removeClass("nav-links-sublink").css("width", "").attr("data-parentpageid", f.data("pageid")).insertAfter(f)
                        })), c.find("ul").remove()
                    }
                } else {
                    var u = l.filter(".nav-link-hide").not(".nav-link-more").first();
                    if (u.length && d > s + u.outerWidth(!0)) {
                        var h = l.filter(".nav-link-hide").first().removeClass("nav-link-hide");
                        l.filter(".nav-link-more").find("ul").find('li[data-pageid="' + h.data("pageid") + '"]').remove(), l.filter(".nav-link-more").find("ul").find('li[data-parentpageid="' + h.data("pageid") + '"]').remove()
                    }
                }
                if (n && d < v) {
                    var p = l.filter(".nav-link-hide").not(".nav-link-more");
                    l.filter(".nav-link-more").toggleClass("nav-link-hide", !p.length)
                }
                l.removeClass("nav-link-first nav-link-last"), l.not(".nav-link-hide").first().addClass("nav-link-first"), l.not(".nav-link-hide").last().addClass("nav-link-last"),
                    function(e) {
                        var t = e.model.fill,
                            n = e.$el,
                            a = n.find(".nav-links > li");
                        if (t) {
                            var i = n.outerWidth(!0),
                                r = 0;
                            a.not(".nav-link-hide").each((function() {
                                r += $(this).width()
                            })), a.not(".nav-link-hide").each((function() {
                                var e = Math.floor($(this).outerWidth(!0) - $(this).width()),
                                    t = Math.round(i * ($(this).width() / r)) - e,
                                    n = Math.round($(this).find("span").width());
                                (t = Math.max(t, n)) && $(this).width(t)
                            }))
                        } else {
                            var o = a.filter(".nav-link-first");
                            o.hasClass("nav-link-last") && o.outerWidth(n.width())
                        }
                    }(e);
                var m = l.filter(".nav-link-more").removeClass("align-items-center");
                "site" != a || !i && e.isDesktopView || l.filter(".nav-link-more.nav-link-first.nav-link-last").length && m.addClass("align-items-center")
            }, o = function(e) {
                var t = e.model,
                    n = e.currentPageId,
                    a = e.$el,
                    i = a.find(".nav-links li").not(".nav-link-more"),
                    r = a.find(".nav-element-modal ul li");
                if ("lang" == t.subtype) {
                    var o = e.currentLangCode;
                    return i.filter("[data-langcode='" + o + "']").addClass("active"), a.find(".hp-dropdown li").removeClass("active").filter("[data-langcode='" + o + "']").addClass("active").length || a.find(".hp-dropdown li").removeClass("active").filter("[data-langcode='" + o.toLowerCase() + "']").addClass("active"), void a.find(".hp-dropdown-toggle span").text(a.find(".hp-dropdown li.active").text().trim())
                }
                var l = $(".anchor-element"),
                    d = $(window),
                    s = 0;
                if (l.length) {
                    var v = d.scrollTop();
                    if (v >= 0) {
                        var c = d.height();
                        l.sort((function(e, t) {
                            return $(e).offset().top - $(t).offset().top
                        })).reverse(), l.each((function() {
                            var e = $(this);
                            if (v + c / 2 >= e.offset().top) return s = e, !1
                        }))
                    }
                }
                var f = s.length ? parseInt(s.attr("id").replace("el-", "")) : 0,
                    u = function(e, t) {
                        var a = $(t),
                            i = a.data("pageid"),
                            r = a.data("type"),
                            o = "Anchor" == r ? a.data("anchorid") : 0;
                        if ("Url" == r || "none" == r) return !1;
                        if ("sm-product" == i) {
                            if (o == $(".cart-item-element.master-element .sm-product-itemkey").val()) return !0
                        } else if ("sm-collection" == i && o == $(".masterCollection-element .master-element").parent().attr("data-collectionid")) return !0;
                        return f ? o == f : i == n && !o
                    },
                    h = function(e, t) {
                        var a = $(t),
                            i = a.data("pageid"),
                            r = a.data("type"),
                            o = "Anchor" == r ? a.data("anchorid") : 0;
                        if ("Url" == r || "none" == r) return !1;
                        if ("sm-product" == i) {
                            if (o == $(".cart-item-element.master-element .sm-product-itemkey").val()) return !0
                        } else if ("sm-collection" == i && o == $(".masterCollection-element .master-element").parent().attr("data-collectionid")) return !0;
                        return i == n && !o
                    };
                i.removeClass("active").filter(u).addClass("active").length || i.filter(h).addClass("active"), r.removeClass("active").filter(u).addClass("active").length || r.filter(h).addClass("active"), ($(".cart-item-element.master-element .sm-product-itemkey").val() || $(".masterCollection-element .master-element").parent().attr("data-collectionid") || $(".masterRestaurantMenu-element.el-master").length) && i.filter(".active").each((function() {
                    $(this).attr("data-anchorid") || $(this).removeClass("active").addClass("skipPageCheck")
                }));
                var p = a.find(".nav-links .active").first().closest(".nav-links-sublink");
                p.length && p.addClass("active"), a.find(".hp-dropdown li").removeClass("active").filter(u).addClass("active"), a.find(".hp-dropdown-toggle span").text(a.find(".hp-dropdown li.active").text().trim())
            }, {
                init: function(e) {
                    var t = e.model,
                        a = "navigation";
                    if ("site" == t.subtype ? a = "site-menu" : "lang" == t.subtype && (a = "language-switcher"), t.vertical && (a += " vertical"), e.$el.addClass(a), "dropdown" == t.layout ? n(e) : !e.isDesktopView && t.subtype || t.vertical ? !e.isDesktopView && t.subtype && "lang" == t.subtype && (e.$el.find(".nav-links li").reverse().each((function() {
                            r(e)
                        })), e.$el.css("opacity", 1)) : (e.$el.find(".nav-links li").reverse().each((function() {
                            r(e)
                        })), e.$el.css("opacity", 1)), "dropdown" != e.layout && e.$el.on("click", ".nav-links li a", (function(n) {
                            var a = (r = $(n.currentTarget)).parent();
                            if ("site" != t.subtype || !a.hasClass("nav-link-more") || e.isDesktopView && !e.model.overflowIcon) {
                                var r = $(n.currentTarget),
                                    o = $(n.target);
                                (a = r.parent()).hasClass("nav-links-sublink") && (r.attr("href") && !o.hasClass("fa-angle-down") || (n.preventDefault(), $(".nav-links-sublink.active").not(a).removeClass("active"), a.toggleClass("active")));
                                var l = a.data("type");
                                if (("Anchor" == l || "Page" == l) && !a.hasClass("skipPageCheck")) {
                                    var d = a.data("anchorid");
                                    "Anchor" == l && d && $("#el-" + d).length ? (n.preventDefault(), scrollToAnchor(d)) : a.data("pageid") == e.currentPageId && (n.preventDefault(), scrollToTop())
                                }
                            } else i(e)
                        })), o(e), e.isDesktopView && ($(window).on("scroll", (function() {
                            o(e)
                        })), (e.model.hoverBorderWidth || e.model.activeBorderWidth) && e.$el.find(".nav-links ul").length)) {
                        var l = $("<div style='border-width: " + e.model.hoverBorderWidth + ";border-style:solid;'></div>").css("border-bottom-width"),
                            d = $("<div style='border-width: " + e.model.activeBorderWidth + ";border-style:solid;'></div>").css("border-bottom-width");
                        (l = Math.max(parseInt(l || 0), parseInt(d || 0))) && e.$el.find(".nav-links ul").css("margin-top", l)
                    }
                }
            })
        }
    })
}));