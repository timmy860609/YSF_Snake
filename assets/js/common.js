
// gotop
"use strict";
$(function() {
    function a() {
        $(".faqCont .faqQuestion").removeClass("active"),
        $(".faqCont .faqAnswer").slideUp(300)
    }
    $(window).on("scroll", function() {
        100 < $(window).scrollTop() ? $("header").addClass("scrolling") : $("header").removeClass("scrolling")
    }),
    $(window).on("scroll", function() {
        200 < $(window).scrollTop() ? $(".mediaIcons").fadeIn(300) : $(".mediaIcons").fadeOut(300)
    }),
    $(window).on("scroll", function() {
        600 < $(window).scrollTop() ? $(".goTop").fadeIn(300) : $(".goTop").fadeOut(300)
    }),
    $(".goTop").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 400)
    }),
    $(".faqQuestion").on("click", function(o) {
        var t = $(this).attr("href");
        $(o.target).is(".active") ? a() : (a(),
        $(this).addClass("active"),
        $(".faqCont " + t).slideDown(300)),
        o.preventDefault()
    })
});

// popup
document.addEventListener("DOMContentLoaded", () => {
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");
    const popupOverlay = document.getElementById("popupOverlay");

    // 禁止背景滑動
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    // 恢復背景滑動
    function enableScroll() {
        document.body.style.overflow = "auto";
    }

    // 打開 Popup
    openPopupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popupOverlay.style.display = "block";
        disableScroll();
    });

    // 關閉 Popup
    closePopupBtn.addEventListener("click", () => {
        popupOverlay.style.display = "none";
        enableScroll();
    });

    // 點擊遮罩關閉 Popup
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
            enableScroll();
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const openPopupLink = document.getElementById("openPopupLink");
    const closePopupLink = document.getElementById("closePopup2"); // 確保選擇器正確
    const popupOverlayLink = document.getElementById("popupOverlayLink");

    // 禁止背景滑動
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    // 恢復背景滑動
    function enableScroll() {
        document.body.style.overflow = "auto";
    }

    // 打開彈窗
    openPopupLink.addEventListener("click", (e) => {
        e.preventDefault(); // 防止跳轉
        popupOverlayLink.style.display = "block";
        disableScroll();
    });

    // 關閉彈窗
    closePopupLink.addEventListener("click", () => {
        popupOverlayLink.style.display = "none";
        enableScroll();
    });

    // 點擊遮罩關閉彈窗
    popupOverlayLink.addEventListener("click", (e) => {
        if (e.target === popupOverlayLink) {
            popupOverlayLink.style.display = "none";
            enableScroll();
        }
    });
});


