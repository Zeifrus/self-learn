! function(l) {
    var e = "#doopostlinks",
        n = "#dooplay-ajax-counter";
    l(function() {
        var a,
        player_save = checkLStoregeOrCookie('player_save');

        function o(t, a, o, e, n) {
            0 < a && s(), l("html, body").animate({
                scrollTop: 0
            }, 200), l("#player-option-" + o + " > span.loader").hide(), l("#played-" + e).addClass("animation-35"), l("#playcontainer").addClass("isnd"), l(".asgdc").show(), l("#dooplay_player_response").html('<div class="preplayer"></div>'), setTimeout(function() {
                l(".asgdc").hide(), "dtshcode" == t.type ? l("#dooplay_player_response").html('<div class="pframe">' + t.embed_url + "</div>") : l("#dooplay_player_response").html('<div class="pframe"><iframe class="metaframe rptss" src="' + t.embed_url + '" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'), l("#playeroptions").removeClass("onload"), 0 < a && (l("#playernotice").html(n), l("#playernotice").removeClass("flashit"))
            }, 1e3 * a)
        }

        function t(t, a) {
            return Math.floor(Math.random() * (a - t + 1) + t)
        }

        function s() {
            var t = "#countdown";
            if (1 == l(t).length) {
                var a = l(t).text();
                if (1 == (a = parseInt(a, 10))) return void l(t).remove();
                a--, l(t).html(a), setTimeout(s, 1e3)
            }
        }
        1 == l("#dooplay_player_big_content").length && l("#playcontainer").appendTo("#dooplay_player_big_content"), 1 == l("#dooplay-reCAPTCHA-response").length && dtAjax.googlercptc && l.getScript("https://www.google.com/recaptcha/api.js?render=" + dtAjax.googlercptc, function() {
            grecaptcha.ready(function() {
                grecaptcha.execute(dtAjax.googlercptc, {
                    action: "dooplay_authorize"
                }).then(function(t) {
                    l("#dooplay-reCAPTCHA-response").html('<input type="hidden" name="google-recaptcha-token" value="' + t + '">')
                })
            })
        }), 1 == l(n).length && (a = l(n).data("postid"), setTimeout(function() {
            l.ajax({
                url: dtAjax.url,
                type: "POST",
                dataType: "json",
                data: {
                    action: "dooplay_viewcounter",
                    post_id: a
                },
                success: function(t) {
                    var a;
                    1 == t.success && (a = t.counting + " " + dtAjax.views, l("#playernotice").attr("data-text", a), l("#playernotice").html(a))
                }
            })
        }, t(1500, 3e3))), l(document).on("click", ".reco", function() {
            l(".reco").addClass("recox"), l(".recox").removeClass("reco"), l.ajax({
                url: dtAjax.url,
                type: "get",
                data: {
                    action: "dtpcookie_save"
                }
            })
        }), l(document).on("click", ".recox", function() {
            l(".recox").addClass("reco"), l(".reco").removeClass("recox"), l.ajax({
                url: dtAjax.url,
                type: "get",
                data: {
                    action: "dtpcookie_update"
                }
            })
        }), l(document).on("click", ".load_list_favorites", function() {
            var a = l(this),
                t = a.data("page"),
                o = t + 1,
                e = a.data("user"),
                n = a.data("type"),
                s = a.data("template"),
                i = dtAjax.url;
            l("#items_movies").addClass("loadingpage"), l.ajax({
                url: i,
                type: "post",
                data: {
                    page: t,
                    typepost: n,
                    user: e,
                    template: s,
                    action: "next_page_list"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    a.data("page", o), l("#items_movies").append(t), l("#items_movies").removeClass("loadingpage")
                }
            })
        }), l(document).on("click", ".delete_notice", function() {
            var t = l(this).data("id"),
                a = dtAjax.url;
            l.ajax({
                url: a,
                type: "post",
                data: {
                    id: t,
                    action: "delete_notice_report"
                },
                error: function(t) {
                    console.log("Error")
                },
                success: function(t) {
                    console.log("Deleted"), l(".reports_notice_admin").hide()
                }
            })
        }), l(document).on("click", "#update_imdb_rating", function() {
            var t = l(this),
                a = t.data("id"),
                o = t.data("imdb"),
                e = dtAjax.url;
            l("#repimdb").html('<i class="icons-spinner9 loading"></i>&nbsp;&nbsp;' + dtAjax.updating), l.ajax({
                url: e,
                type: "post",
                data: {
                    id: a,
                    imdb: o,
                    action: "dbmovies_updatedimdb"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#repimdb").html(t)
                }
            })
        }), l(document).on("click", ".dt_social", function() {
            var t = l(this).data("id"),
                a = dtAjax.url;
            l.ajax({
                url: a,
                type: "post",
                data: {
                    id: t,
                    action: "dt_social_count"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#social_count").html(t)
                }
            })
        }), l(document).on("click", ".facebook", function() {
            l(".facebook").removeClass("dt_social")
        }), l(document).on("click", ".twitter", function() {
            l(".twitter").removeClass("dt_social")
        }), l(document).on("click", ".google", function() {
            l(".google").removeClass("dt_social")
        }), l(document).on("click", ".pinterest", function() {
            l(".pinterest").removeClass("dt_social")
        }), l(document).on("click", ".whatsapp", function() {
            l(".whatsapp").removeClass("dt_social")
        }), l(document).on("click", ".load_list_views", function() {
            var a = l(this),
                t = a.data("page"),
                o = t + 1,
                e = a.data("user"),
                n = a.data("type"),
                s = a.data("template"),
                i = dtAjax.url;
            l("#items_views").addClass("loadingpage"), l.ajax({
                url: i,
                type: "post",
                data: {
                    page: t,
                    typepost: n,
                    template: s,
                    user: e,
                    action: "next_page_list"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    a.data("page", o), l("#items_views").append(t), l("#items_views").removeClass("loadingpage")
                }
            })
        }), l(document).on("click", ".load_list_links", function() {
            var a = l(this),
                t = a.data("page"),
                o = t + 1,
                e = a.data("user"),
                n = dtAjax.url;
            l("#item_links").addClass("loadingpage"), l.ajax({
                url: n,
                type: "post",
                data: {
                    page: t,
                    user: e,
                    action: "next_page_link"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    a.data("page", o), l("#item_links").append(t), l("#item_links").removeClass("loadingpage")
                }
            })
        }), l(document).on("click", ".load_list_links_profile", function() {
            var a = l(this),
                t = a.data("page"),
                o = t + 1,
                e = a.data("user"),
                n = dtAjax.url;
            l("#item_links").addClass("loadingpage"), l.ajax({
                url: n,
                type: "post",
                data: {
                    page: t,
                    user: e,
                    action: "next_page_link_profile"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    a.data("page", o), l("#item_links").append(t), l("#item_links").removeClass("loadingpage")
                }
            })
        }), l(document).on("click", ".load_admin_list_links", function() {
            var a = l(this),
                t = a.data("page"),
                o = t + 1,
                e = dtAjax.url;
            return l("#item_links_admin").addClass("loadingpage"), l.ajax({
                url: e,
                type: "post",
                data: {
                    page: t,
                    action: "next_page_link_admin"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    a.data("page", o), l("#item_links_admin").append(t), l("#item_links_admin").removeClass("loadingpage")
                }
            }), !1
        }), l(document).on("click", ".control_link", function() {
            var t = l(this);
            return a = t.data("id"), user_id = t.data("user"), status = t.data("status"), l("#resultado_link").html('<div class="content">' + dtAjax.updating + "</div>"), t.toggleClass("active"), l.ajax({
                url: dtAjax.url,
                type: "post",
                data: {
                    post_id: a,
                    user_id: user_id,
                    status: status,
                    action: "control_link_user"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#resultado_link").html('<div class="content">' + t + "</div>"), l("#" + a + " > .metas").removeClass("trash"), l("#" + a + " > .metas").removeClass("pending"), l("#" + a + " > .metas").removeClass("publish"), l("#" + a + " > .metas").addClass(status)
                }
            }), !1
        }), l(document).on("click", ".control_admin_link", function() {
            l("#resultado_link").html('<div class="content">' + dtAjax.updating + "</div>");
            var t = l(this);
            t.toggleClass("active");
            var a = t.data("id"),
                o = t.data("user"),
                e = t.data("status"),
                n = dtAjax.url;
            return l.ajax({
                url: n,
                type: "post",
                data: {
                    post_id: a,
                    user_id: o,
                    status: e,
                    action: "control_link_user"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#resultado_link").html('<div class="content">' + t + "</div>"), l("#adm-" + a + " > .metas").removeClass("trash"), l("#adm-" + a + " > .metas").removeClass("pending"), l("#adm-" + a + " > .metas").removeClass("publish"), l("#adm-" + a + " > .metas").addClass(e)
                }
            }), !1
        }), l(document).on("click", ".edit_link", function() {
            var t = l(this).data("id"),
                a = dtAjax.url;
            return l.ajax({
                url: a,
                type: "post",
                data: {
                    post_id: t,
                    action: "dooformeditor_user"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#edit_link").html('<div id="result_edit_link" class="box animation-3">' + t + "</div>")
                }
            }), !1
        }), l(document).on("click", ".delt_link", function() {
            var a = l(this).data("id"),
                t = dtAjax.url;
            return confirm(dtAjax.deletelin) && l.ajax({
                url: t,
                type: "post",
                data: {
                    id: a,
                    action: "doofrontdeletelink"
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#link-" + a).remove()
                }
            }), !1
        }), l(document).on("click", "#admin_pending_links", function() {
            l(this);
            l("#adminlinks").show(), l("#admin_back_links").show(), l("#mylinks").hide(), l("#admin_pending_links").hide(), l("#text_link").html(dtAjax.ladmin)
        }), l(document).on("click", "#admin_back_links", function() {
            l(this);
            l("#adminlinks").hide(), l("#admin_back_links").hide(), l("#mylinks").show(), l("#admin_pending_links").show(), l("#text_link").html(dtAjax.lshared)
        }), l(document).on("submit", "#doo_link_front_editor", function() {
            var t = l(this);
            return l.ajax({
                url: dtAjax.url,
                type: "POST",
                data: t.serialize(),
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    location.reload()
                }
            }), !1
        }), l(document).on("submit", "#post_report", function() {
            l("#msg").html('<div class="mensaje_report"><i class="icons-spinner9 loading"></i><p>' + dtAjax.sendingrep + "</p></div>"), l(".reportar_form").last().addClass("generate_ajax");
            var t = l(this);
            return l.ajax({
                url: dtAjax.url,
                type: "post",
                data: t.serialize(),
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l("#msg").html('<div class="mensaje_report">' + t + "</div>"), setTimeout(function() {
                        l("#main_ali").trigger("click"), l("#report").remove(), l("#report_li").remove()
                    }, 2e3)
                }
            }), !1
        }), l(document).on("click", "#cerrar_form_edit_link", function() {
            l("#result_edit_link").hide()
        }), l(document).on("click", ".process_list", function() {
            var t = l(this);
            return a = t.attr("data-post-id"), security = t.attr("data-nonce"), l(".ucico").removeClass("icon-thumb_up"), l(".ucico").addClass("icons-spinner9 loading"), l.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_list",
                    post_id: a,
                    nonce: security
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l(".ucico").addClass("icon-thumb_up"), l(".ucico").removeClass("icons-spinner9 loading"), l(".process_list").toggleClass("in-list"), l(".list-count-" + a).html(t)
                    if (l(".process_list").hasClass("in-list")) {
                    	l(".process_list .favitem .favitem").html('Remover Favorito')
                    } else {
                    	l(".process_list .favitem .favitem").html('Favoritar')
                    }
                }
            }), !1
        }), l(document).on("click", ".process_views", function() {
            var t = l(this);
            return a = t.attr("data-post-id"), security = t.attr("data-nonce"), l(".uvcico").removeClass("icon-eye"), l(".uvcico").addClass("icons-spinner9 loading"), l.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_views",
                    post_id: a,
                    nonce: security
                },
                error: function(t) {
                    console.log(t)
                },
                success: function(t) {
                    l(".uvcico").addClass("icon-eye"), l(".uvcico").removeClass("icons-spinner9 loading"), l(".process_views").toggleClass("in-views"), l(".views-count-" + a).html(t)
                    if (l(".process_views").hasClass("in-views")) {
                        l(".process_views .favitem .favitem").html('Remover Assistido')
                    } else {
                        l(".process_views .favitem .favitem").html('Assistido')
                    }
                }
            }), !1
        }), l(document).on("click", ".user_list_control", function() {
            var t = l(this);
            return a = t.attr("data-postid"), security = t.attr("data-nonce"), l("#p" + a).hide(), l.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_list",
                    post_id: a,
                    nonce: security,
                    total: "on"
                },
                success: function(t) {
                    l(".totalfavorites_user").html(t)
                }
            }), !1
        }), l(document).on("click", ".user_views_control", function() {
            var t = l(this);
            return a = t.attr("data-postid"), security = t.attr("data-nonce"), l("#v" + a).hide(), l.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_views",
                    post_id: a,
                    nonce: security,
                    total: "on"
                },
                success: function(t) {
                    l(".totalviews_user").html(t)
                }
            }), !1
        }), l(document).on("click", "ul.no_ajax > li.dooplay_player_option", function() {
            var t = l(this).data("nume");
            return l("#fakeplayer").hide(), l("#playcontainer").addClass("isnd"), l(".pframe > iframe").attr("src", function(t, a) {
                return a
            }), l(this).hasClass("on") || (l(".dooplay_player_option").removeClass("on"), l(".source-box").removeClass("on"), l(this).addClass("on"), l("#source-player-" + t).addClass("on")), !1
        }), l(document).on("click", "ul.ajax_mode > li.dooplay_player_option", function() {
            var a = l(this).data("post");
            return nume = l(this).data("nume"), type = l(this).data("type"), tviw = l("#playernotice").data("text"), scds = dtGonza.playeradstime, l("#fakeplayer").hide(), l(this).hasClass("on") || (l(".dooplay_player_option").removeClass("on"), l("#player-option-" + nume + " > span.loader").show(), l("#played-" + a).removeClass("animation-35"), l("#playeroptions").addClass("onload"), 0 < scds && (l("#playernotice").addClass("flashit"), l("#playernotice").html('<b id="countdown"></b> ' + dtGonza.loadingplayer), l("#countdown").html(scds)), l(this).addClass("on"), "admin_ajax" == dtAjax.play_method && l.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "doo_player_ajax",
                    post: a,
                    nume: nume,
                    type: type
                },
                success: function(t) {
                    o(t, scds, nume, a, tviw)
                }
            }), "wp_json" == dtAjax.play_method && l.getJSON(dtAjax.url_api + a + "?type=" + type + "&source=" + nume, function(t) {
                o(t, scds, nume, a, tviw)
            })), !1
        }), 1 == l("#player-option-1").length && 1 == dtGonza.autoplayer && $('#player-option-'+player_save).length == 0 && setTimeout(function() {
            l("#player-option-1").trigger("click")
        }, t(100, 700)), 1 == l(e).length && (l(e).repeater({
            defaultValues: {
                type: dtAjax.ltipe
            },
            show: function() {
                l(this).fadeIn("fast")
            },
            hide: function(t) {
                l(this).fadeOut("fast", function() {
                    l(this).slideUp(t)
                })
            }
        }), l(document).on("submit", e, function() {
            return l("#resultado_link_form").html('<div class="msg"><i class="icons-spinner9 loading"></i>' + dtAjax.sending + "</div>"), l(".form_post_lik").hide("fast"), l.ajax({
                type: "POST",
                url: dtAjax.url,
                dataType: "json",
                data: l(this).serialize(),
                success: function(t) {
                    1 == t.response ? location.reload() : alert(t.message)
                }
            }), !1
        })), l(document).on("submit", "#dooplay_login_user", function() {
            var a = l("#dooplay_login_btn").data("btntext");
            return l(".login_box").removeClass("shake"), l("#dooplay_login_btn").prop("disabled", !0), l("#dooplay_login_btn").val(dtAjax.loading), l.ajax({
                type: "POST",
                url: dtAjax.url,
                dataType: "json",
                data: l(this).serialize(),
                success: function(t) {
                    1 == t.response ? t.redirect ? window.location.replace(t.redirect) : location.reload() : (l(".login_box").addClass("shake"), l("#dooplay_login_btn").val(a), l("#dooplay_login_btn").prop("disabled", !1))
                }
            }), !1
        }), l(document).on("click", "#dooplay_signout", function() {
            return l.ajax({
                type: "POST",
                url: dtAjax.url,
                dataType: "json",
                data: {
                    action: "dooplay_logout"
                },
                success: function(t) {
                    1 == t.response && location.reload()
                }
            }), !1
        }), l(document).on("click", "#clickfakeplayer", function() {
            1 == l("#player-option-1").length ? l("#player-option-1").click() : l(".dooplay_player_option:first-child").click()
        })
    })
}(jQuery);