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
            var o = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
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
                for (var o in e) n.d(a, o, function(t) {
                    return e[t]
                }.bind(null, o));
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
        }, n.p = "", n(n.s = 1280)
    }({
        1280: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(71),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e = $.extend(!0, {
                        title: "",
                        status: "",
                        $el: !1,
                        message: "",
                        $appendTo: $("body"),
                        overlayClose: !1,
                        overlay: !0,
                        btns: [],
                        close: !0,
                        cancel: !1,
                        width: 0,
                        confirm: !1,
                        confirmLabel: "",
                        padding: !1,
                        onClose: !1,
                        full: !1
                    }, e);
                    var t = !1;
                    e.message && (e.$el = $("<div>" + e.message + "</div>")), e.confirm && e.btns.unshift({
                        label: e.confirmLabel || "Done",
                        click: function() {
                            if ("function" == typeof e.confirm) var n = e.confirm(t);
                            (void 0 === n || n) && t.trigger("close")
                        }
                    }), e.cancel && e.btns.unshift({
                        outline: !0,
                        label: "string" == typeof e.cancel ? e.cancel : "Cancel",
                        click: function() {
                            t.trigger("close")
                        }
                    });
                    var n = "";
                    e.btns.length && e.btns.forEach((function(t) {
                        var a = "hp-btn-",
                            o = "primary";
                        "error" == e.status ? o = "danger" : "black" == e.status && (o = "black"), t.outline ? a += o + "-outline" : a += o, t.closeBtn && (e.close = !0), n += '\n                <button class="hp-btn '.concat(a, '">\n                    ').concat(t.label, "\n                </button>\n            ")
                    })), t = $('\n            <div class="hp-dialog-container '.concat(e.className || "", ' animate">\n                <div class="hp-dialog animate ').concat(e.full ? "full" : "", '" data-status="').concat(e.status, '">\n                    <div class="hp-dialog-titlebar">\n                        <span class="title"></span>\n                        ').concat(e.close ? '<div class="dialog-close"><i class="hpi-icon hpi-close"></i></div>' : "", '\n                    </div>\n\n                    <div class="hp-dialog-content"></div>\n\n                    ').concat(n ? '\n                            <div class="hp-dialog-footer">\n                                '.concat(n, "\n                            </div>\n                        ") : "", "\n                </div>\n                ").concat(e.overlay ? '<div class="hp-dialog-overlay" style="'.concat(e.overlayClose ? "cursor:pointer;" : "", '"></div>') : "", "\n            </div>\n        "));
                    var a = function() {
                        e.onClose && e.onClose(), t.remove()
                    };
                    e.title ? t.find(".hp-dialog-titlebar .title").text(e.title) : e.title || e.close || t.find(".hp-dialog-titlebar").addClass("hide"), e.$el && $(e.$el).show().appendTo(t.find(".hp-dialog-content")), "boolean" != typeof e.padding && t.find(".hp-dialog-content").css("padding", e.padding), e.width && t.find(".hp-dialog").width(e.width), e.height && t.find(".hp-dialog").height(e.height), e.overlay && e.overlayClose && t.find(".hp-dialog-overlay").click(a), e.btns.length && t.find(".hp-dialog-footer .hp-btn").click((function(t) {
                        var n = $(t.currentTarget),
                            a = n.index();
                        e.btns[a] && (("function" == typeof e.btns[a].loading ? e.btns[a].loading() : e.btns[a].loading) && n.width(n.width()).css({
                            "font-size": 0,
                            "justify-content": "center"
                        }).addClass("hpi-icon hpi-loading-white"), "function" == typeof e.btns[a].click && e.btns[a].click(t))
                    })), e.close && t.find(".dialog-close").click((function() {
                        a()
                    })), t.one("close", a);
                    $(".hp-dialog-container");
                    return t.appendTo(e.$appendTo), setTimeout((function() {
                        t.removeClass("animate")
                    }), 200), t
                };
            window.HotPot = {
                Util: {},
                Analytics: {},
                Widget: {
                    numberInput: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e = $.extend(!0, {
                            $el: !1,
                            decimal: -1,
                            invalidChars: ["e"]
                        }, e);
                        var t = $(e.$el);
                        t.each((function(t, n) {
                            var a = $(n);
                            e.invalidChars.length && a.on("keydown", (function(t) {
                                e.invalidChars.includes(t.key) && t.preventDefault()
                            })), -1 !== e.decimal && a.on("change", (function(t) {
                                var n = parseFloat(a.val()).toFixed(e.decimal);
                                a.val(n)
                            }))
                        }))
                    },
                    popover: a.a,
                    dropdown: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e = $.extend(!0, {
                            $el: !1,
                            $list: !1,
                            className: "",
                            hideFocus: !0,
                            onChange: !1,
                            onOpen: !1,
                            value: !1,
                            multiple: !1
                        }, e);
                        var t = $(e.$el);
                        return t.each((function(t, n) {
                            var o = $(n),
                                i = !1,
                                l = o.find(".hp-dropdown-toggle"),
                                r = o.find(".hp-dropdown-menu"),
                                c = r.find("li").not(".hp-dropdown-menu-title"),
                                d = o.find("input[type='hidden']");
                            e.multiple && (r.addClass("hp-dropdown-multiple"), c.each((function(e, t) {
                                var n = $(t),
                                    a = String(n.data("value")).trim(),
                                    o = String(n.text()).trim();
                                n.html('\n                    <div>\n                        <div class="hp-chkbox">\n                            <input id="dropdown-'.concat(a, '" type="checkbox" class="hp-form-control">\n                            <label for="dropdown-').concat(a, '">&nbsp;</label>\n                        </div>\n                        ').concat(o, "\n                    </div>\n                    \n                "))
                            })));
                            var s = function() {
                                if (c = r.find("li").not(".hp-dropdown-menu-title"), e.multiple) {
                                    var t = $();
                                    if (e.value) t = c.filter((function(t, n) {
                                        return e.value.join(" ").includes($(n).attr("data-value"))
                                    }))
                                } else {
                                    (t = e.value ? c.filter('[data-value="'.concat(e.value, '"]')).first() : c.filter(".selected").first()).length || (t = c.first())
                                }
                                e.multiple && t.addClass("selected").find(".hp-form-control").prop("checked", !0);
                                var n = String(t.data("value")).trim();
                                if (e.multiple) {
                                    var a = "";
                                    t.each((function(e, t) {
                                        a += $(t).text().trim() + ", "
                                    })), a = a ? a.substring(0, a.length - 2) : "All", l.text(a)
                                } else l.text(t.text().trim() || n || "");
                                o.data("value", n), d.val(n)
                            };
                            o.on("refresh", s), o.on("value", (function(t, n) {
                                if (e.multiple) {
                                    var a = "",
                                        i = [];
                                    c.each((function(e, t) {
                                        var o = $(t),
                                            l = o.data("value");
                                        n.includes(l) ? (o.addClass("selected").find("input").prop("checked", !0), a += o.text().trim() + ", ", i.push(l)) : o.removeClass("selected").find("input").prop("checked", !1)
                                    })), o.data("values", i), a = a ? a.substring(0, a.length - 2) : "All", l.text(a)
                                } else {
                                    var r = c.filter('[data-value="'.concat(n, '"]'));
                                    if (r.length) {
                                        r.addClass("selected").siblings().removeClass("selected");
                                        n = String(r.data("value")).trim();
                                        l.text(r.text().trim() || n || ""), o.data("value", n), d.val(n)
                                    }
                                }
                            })), o.on("change", (function(t) {
                                var n = c.filter(".selected").first(),
                                    a = n.data("value"),
                                    i = n.text().trim(),
                                    l = {
                                        value: void 0 === a ? i : a,
                                        label: i || "",
                                        $dropdown: o
                                    };
                                o.trigger("onChange", [t, l]), e.onChange && e.onChange(t, l)
                            })), l.on("click", (function(t) {
                                if (o.hasClass("active") && i) i.trigger("destroy"), o.removeClass("active");
                                else {
                                    if (o.hasClass("disabled")) return;
                                    var n = r.clone();
                                    if (n.find("li").length) {
                                        var s = window.App && App.panelBoxView && App.panelBoxView.$el.find(o).length,
                                            p = window.App && "undefined" != typeof parent && parent.pageFrameWindow && $("body").hasClass("ws-editor"),
                                            f = l.outerWidth(!0);
                                        o.addClass("active");
                                        var u = $(window).width();
                                        n.css({
                                            "min-width": f,
                                            "max-width": u - 50
                                        }), i = Object(a.a)({
                                            $target: o,
                                            $content: n,
                                            className: e.className,
                                            padding: 0,
                                            placement: "bottom-start",
                                            offsetX: 0,
                                            onOpen: function(t) {
                                                p && (t.addClass("invisible"), setTimeout((function() {
                                                    var e = $(parent.pageFrameWindow).scrollTop();
                                                    t.removeClass("invisible").css("top", -e + "px")
                                                }), 10)), e.onOpen && e.onOpen(t)
                                            },
                                            onDestroy: function() {
                                                setTimeout((function() {
                                                    o.removeClass("active")
                                                }), 100), s && $(pageFrameWindow).off("click.pb-dropdown")
                                            }
                                        }), s && $(pageFrameWindow).one("click.pb-dropdown", (function() {
                                            i.trigger("destroy")
                                        }));
                                        var v = i.find("li.selected").first();
                                        if (v.length) {
                                            var h = v.offset();
                                            i.find(".hp-dropdown-menu ul").scrollTop(Math.max(0, h.top))
                                        }
                                        i.find("li").not(".hp-dropdown-menu-title").on("click", (function(t) {
                                            var n = $(t.currentTarget);
                                            if (!n.hasClass("disabled")) {
                                                var a = n.data("value"),
                                                    r = n.text().trim(),
                                                    s = {
                                                        value: void 0 === a ? r : a,
                                                        label: r || "",
                                                        $dropdown: o
                                                    };
                                                o.data("value", s.value), o.data("text", s.text), d.val(s.value);
                                                var p = c.filter('[data-value="'.concat(a, '"]'));
                                                p.length && (p = c.filter((function(e, t) {
                                                    return $(t).text().trim() == r
                                                })));
                                                var f = r || a;
                                                if (e.multiple) {
                                                    var u = n.find("input").prop("checked");
                                                    p.add(n).toggleClass("selected", !u), p.add(n).find("input").prop("checked", !u), f = "", s.values = i.find(".selected").map((function(e, t) {
                                                        var n = $(t);
                                                        return f += n.text().trim() + ", ", n.data("value")
                                                    })).toArray(), o.data("values", s.values || []), f = f ? f.substring(0, f.length - 2) : "All"
                                                } else p.addClass("selected").siblings().removeClass("selected");
                                                l.text(f), o.trigger("onChange", [t, s]), e.onChange && e.onChange(t, s), e.multiple || (o.removeClass("active"), i.trigger("destroy"))
                                            }
                                        }))
                                    }
                                }
                            })), s()
                        })), t
                    },
                    dialog: o,
                    shareDialog: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (e = $.extend(!0, {
                            title: "Share URL",
                            url: "https://www.website.com",
                            text: ""
                        }, e)).url.includes("http://") && e.url.includes("https://") || (e.url = "http://" + e.url);
                        var t = encodeURIComponent(e.url);
                        e.text ? e.text += " " + t : e.text += t;
                        var n = "https://www.facebook.com/sharer/sharer.php?u=" + t,
                            a = "https://twitter.com/intent/tweet?text=" + e.text,
                            i = "mailto:?Subject=".concat(e.text, "&body=").concat(e.url),
                            l = $('\n        <div class="hp-share-dialog">\n            <a href="'.concat(n, '" class="social-share-dialog" style="background-color: #3b5998;" data-method="facebook">\n                <i class="fa fa-facebook-official fa-fw"></i>\n                <span>Facebook</span>\n            </a>\n            <a href="').concat(a, '" class="social-share-dialog" style="background-color: #1da1f2;" data-method="twitter">\n                <i class="fa fa-twitter-square fa-fw"></i>\n                <span>Twitter</span>\n            </a>\n            <a href="').concat(i, '" target="_blank" style="background-color: #f17600;" data-method="email">\n                <i class="fa fa-envelope fa-fw"></i>\n                <span>Email</span>\n            </a>\n            <a href="').concat(e.url, '" class="copy-link" data-method="copyLink">\n                <i class="fa fa-link fa-fw"></i>\n                <span>Copy Link</span>\n            </a>\n        </div>\n    ')),
                            r = o({
                                title: e.title,
                                $el: l
                            }),
                            c = $(window),
                            d = 800,
                            s = 600,
                            p = c.width() / 2 - d / 2,
                            f = c.height() / 2 - s / 2;
                        return r.find(".social-share-dialog").each((function() {
                            var e = $(this),
                                t = e.attr("href");
                            e.attr("onclick", "event.preventDefault();window.open('".concat(t, "', 'newwindow', 'width=").concat(d, ", height=").concat(s, ", left=").concat(p, ", top=").concat(f, "'); return false;"))
                        })), "undefined" != typeof Sentinel && r.find(".hp-share-dialog a").click((function(e) {
                            var t = $(e.currentTarget);
                            Sentinel.event({
                                action: "share",
                                category: "shareProduct",
                                label: t.attr("data-method"),
                                value: t.attr("href")
                            })
                        })), r.find(".copy-link").click((function(t) {
                            t.preventDefault();
                            var n = document.createElement("input");
                            document.body.appendChild(n), n.value = e.url, n.select(), document.execCommand("copy", !1), n.remove()
                        })), r
                    }
                }
            }
        },
        71: function(e, t, n) {
            "use strict";
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = $.extend(!0, {
                    title: "",
                    tabs: [],
                    $target: !1,
                    $content: !1,
                    autoOpen: !0,
                    $appendTo: $("body"),
                    placement: "bottom",
                    offsetX: 10,
                    offsetY: 0,
                    closeFocusOut: !0,
                    className: "",
                    padding: -1,
                    onDestroy: !1,
                    btns: [],
                    onTabChange: !1,
                    onOpen: !1,
                    overflowPadding: 25,
                    draggable: !0,
                    message: ""
                }, e);
                var t = "";
                (e.title || e.tabs.length) && (t += '<div class="hp-popover-header">', e.title ? t += "\n                <div>".concat(e.title, "</div>\n            ") : e.tabs.length && (t += '<div class="hp-nav-tabs">', e.tabs.forEach((function(e) {
                    t += '<div class="'.concat(e.active ? "active" : "", '">').concat(e.label, "</div>")
                })), t += "</div>", e.className += " hp-popover-tabs"), t += "</div>");
                var n = "";
                e.btns.length && (n += '<div class="hp-popover-footer">', e.btns.forEach((function(e) {
                    n += '<button class="hp-btn '.concat(e.primary ? "hp-btn-primary" : "", '">').concat(e.label, "</button>")
                })), n += "</div>");
                var a = '\n        <div class="hp-popover-container '.concat(e.className, '">\n            <div class="hp-popover active">\n\n                ').concat(t, '\n\n                <div class="hp-popover-content">\n                    <div class="hp-popover-body">\n                    </div>\n                </div>\n\n                ').concat(n, "\n            </div>\n        </div>\n    "),
                    o = $(a),
                    i = o.find(".hp-popover-body");
                if (e.$target) {
                    if (e.$content ? o.find(".hp-popover-body").append(e.$content) : e.message && o.find(".hp-popover-body").text(e.message), e.padding >= 0 && o.find(".hp-popover-body").css("padding", e.padding), e.tabs.length) {
                        var l = o.find(".hp-popover-header .hp-nav-tabs > div");
                        l.filter(".active").length || l.first().addClass("active"), l.click((function(t) {
                            var n = $(t.currentTarget);
                            if (!n.hasClass("active")) {
                                n.addClass("active").siblings().removeClass("active");
                                var a = n.text().trim();
                                e.onTabChange && e.onTabChange(a, t), o.trigger("update")
                            }
                        }))
                    }
                    if (e.btns.length && o.find(".hp-popover-footer .hp-btn").click((function(t) {
                            t.preventDefault(), t.stopPropagation();
                            var n = $(t.currentTarget).index();
                            e.btns[n] && e.btns[n].click && e.btns[n].click(t)
                        })), e.draggable) {
                        var r = o.find(".hp-popover-header");
                        r.length && o.find(".hp-popover").draggable({
                            handle: r
                        })
                    }
                    e.$appendTo.append(o), e.closeFocusOut && e.$appendTo.on("mousedown.popover", (function(t) {
                        var n = $(t.target);
                        o.has(n).length || n.is(o) || e.$target.has(n).length || n.is(e.$target) || d()
                    }));
                    var c = Popper.createPopper(e.$target.get(0), o.get(0), {
                        placement: e.placement,
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [e.offsetY, e.offsetX]
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: e.$appendTo,
                                rootBoundary: "viewport",
                                padding: e.overflowPadding
                            }
                        }]
                    });
                    c.update(), e.onOpen && e.onOpen(o);
                    var d = function() {
                        e.$appendTo.off("mousedown.popover"), c.destroy(), o.remove(), e.onDestroy && e.onDestroy()
                    };
                    o.on("update", (function(e) {
                        c && c.update()
                    })), o.add(i).on("destroy", d)
                }
                return i
            }
        }
    })
}));