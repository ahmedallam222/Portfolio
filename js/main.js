! function (e) {
    "use strict";
    e(window).stellar({
        responsive: !0,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        horizontalScrolling: !1,
        hideDistantElements: !1,
        scrollProperty: "scroll"
    });
    e(".js-fullheight").css("height", e(window).height()), e(window).resize(function () {
        e(".js-fullheight").css("height", e(window).height())
    });
    setTimeout(function () {
        e("#ftco-loader").length > 0 && e("#ftco-loader").removeClass("show")
    }, 1), e.Scrollax();
    e("body").on("click", ".js-fh5co-nav-toggle", function (a) {
        a.preventDefault(), e("#ftco-nav").is(":visible") ? e(this).removeClass("active") : e(this).addClass("active")
    });
    e(document).on("click", '#ftco-nav a[href^="#"]', function (a) {
        a.preventDefault(), e.attr(this, "href"), e("html, body").animate({
            scrollTop: e(e.attr(this, "href")).offset().top - 70
        }, 500, function () {})
    });
    e(".home-slider").owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: !1,
        autoplayHoverPause: !1,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }), e(".carousel-testimony").owlCarousel({
        center: !0,
        loop: !0,
        autoplay: !0,
        autoplaySpeed: 2e3,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: !1,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }), e("nav .dropdown").hover(function () {
        var a = e(this);
        a.addClass("show"), a.find("> a").attr("aria-expanded", !0), a.find(".dropdown-menu").addClass("show")
    }, function () {
        var a = e(this);
        a.removeClass("show"), a.find("> a").attr("aria-expanded", !1), a.find(".dropdown-menu").removeClass("show")
    }), e("#dropdown04").on("show.bs.dropdown", function () {
        console.log("show")
    });
    e(window).scroll(function () {
        var a = e(this).scrollTop(),
            t = e(".ftco_navbar"),
            o = e(".js-scroll-wrap");
        a > 150 && (t.hasClass("scrolled") || t.addClass("scrolled")), a < 150 && t.hasClass("scrolled") && t.removeClass("scrolled sleep"), a > 350 && (t.hasClass("awake") || t.addClass("awake"), o.length > 0 && o.addClass("sleep")), a < 350 && (t.hasClass("awake") && (t.removeClass("awake"), t.addClass("sleep")), o.length > 0 && o.removeClass("sleep"))
    });
    e("#section-counter, .hero-wrap, .ftco-counter").waypoint(function (a) {
        if ("down" === a && !e(this.element).hasClass("ftco-animated")) {
            var t = e.animateNumber.numberStepFactories.separator(",");
            e(".number").each(function () {
                var a = e(this),
                    o = a.data("number");
                console.log(o), a.animateNumber({
                    number: o,
                    numberStep: t
                }, 7e3)
            })
        }
    }, {
        offset: "95%"
    });
    e(".ftco-animate").waypoint(function (a) {
        "down" !== a || e(this.element).hasClass("ftco-animated") || (e(this.element).addClass("item-animate"), setTimeout(function () {
            e("body .ftco-animate.item-animate").each(function (a) {
                var t = e(this);
                setTimeout(function () {
                    var e = t.data("animate-effect");
                    "fadeIn" === e ? t.addClass("fadeIn ftco-animated") : "fadeInLeft" === e ? t.addClass("fadeInLeft ftco-animated") : "fadeInRight" === e ? t.addClass("fadeInRight ftco-animated") : t.addClass("fadeInUp ftco-animated"), t.removeClass("item-animate")
                }, 50 * a, "easeInOutExpo")
            })
        }, 100))
    }, {
        offset: "95%"
    }), e(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        closeBtnInside: !1,
        fixedContentPos: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            verticalFit: !0
        },
        zoom: {
            enabled: !0,
            duration: 300
        }
    }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}(jQuery), $(function () {
    function e(e) {
        return e / 100 * 360
    }
    $(".progress").each(function () {
        var a = $(this).attr("data-value"),
            t = $(this).find(".progress-left .progress-bar"),
            o = $(this).find(".progress-right .progress-bar");
        a > 0 && (a <= 50 ? o.css("transform", "rotate(" + e(a) + "deg)") : (o.css("transform", "rotate(180deg)"), t.css("transform", "rotate(" + e(a - 50) + "deg)")))
    })
}), $(function () {
    $(window).on(" scroll ", function () {
        $(window).scrollTop() > 50 ? $(" .header ").addClass(" active ") : $(" .header ").removeClass(" active ")
    })
});
const scrollProgress = document.getElementById("scroll-progress"),
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    const e = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${e/height*100}%`
});

var interval, cnt = document.getElementById("count"),
    water = document.getElementById("water"),
    percent = cnt.innerText;
interval = setInterval(function () {
    percent++, cnt.innerHTML = percent, water.style.transform = "translate(0," + (100 - percent) + "%)", percent > 100 && $("body").css("overflow", "hidden"), 100 == percent && (clearInterval(interval), $(".wrapper-box").remove(), $(".wrapper-box").css("display", "none"), $("body").css("overflow", "auto"))
}, 50);