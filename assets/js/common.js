
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
    // 公共方法：禁止背景滑動
    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    // 公共方法：恢復背景滑動
    function enableScroll() {
        document.body.style.overflow = "auto";
    }

    // 公共方法：初始化彈窗
    function initPopup(openBtnId, closeBtnId, overlayId) {
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = document.getElementById(closeBtnId);
        const overlay = document.getElementById(overlayId);

        if (!openBtn || !closeBtn || !overlay) {
            console.error(`Missing elements for popup: ${openBtnId}, ${closeBtnId}, ${overlayId}`);
            return;
        }

        // 打開彈窗
        openBtn.addEventListener("click", (e) => {
            e.preventDefault(); // 防止默認行為
            overlay.style.display = "block";
            disableScroll();
        });

        // 關閉彈窗
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
            enableScroll();
        });

        // 點擊遮罩區域關閉彈窗
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
                enableScroll();
            }
        });
    }

    // 初始化多個彈窗
    initPopup("openPopup", "closePopup", "popupOverlay"); // 第一個彈窗
    initPopup("openPopupLink", "closePopup2", "popupOverlayLink"); // 第二個彈窗
});




document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止 <a> 的預設跳轉行為

            // 切換 active 狀態
            trigger.classList.toggle('active');
        });
    });

    // 點擊其他地方隱藏 Tooltip
    document.addEventListener('click', (e) => {
        tooltipTriggers.forEach(trigger => {
            if (!trigger.contains(e.target)) {
                trigger.classList.remove('active');
            }
        });
    });
});
