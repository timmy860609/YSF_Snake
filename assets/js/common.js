"use strict";


$(function() {
   
    $(window).on("scroll", function() {
       
        if ($(window).scrollTop() > 100) {
            $("header").addClass("scrolling");
        } else {
            $("header").removeClass("scrolling");
        }

       
        if ($(window).scrollTop() > 200) {
            $(".mediaIcons").fadeIn(300);
        } else {
            $(".mediaIcons").fadeOut(300);
        }

      
        if ($(window).scrollTop() > 600) {
            $(".goTop").fadeIn(300);
        } else {
            $(".goTop").fadeOut(300);
        }
    });

    $(".goTop").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 400);
    });
});


function disableScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "auto";
}


function initPopup(openBtnId, closeBtnId, overlayId) {
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const overlay = document.getElementById(overlayId);

    if (!openBtn || !closeBtn || !overlay) {
        console.error(`Missing elements for popup: ${openBtnId}, ${closeBtnId}, ${overlayId}`);
        return;
    }

    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.style.display = "block";
        disableScroll();
    });

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        enableScroll();
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
            enableScroll();
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    initPopup("openPopup", "closePopup", "popupOverlay"); 
    initPopup("openPopupLink", "closePopup2", "popupOverlayLink"); 
});


document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            trigger.classList.toggle('active');
        });
    });


    document.addEventListener('click', (e) => {
        tooltipTriggers.forEach(trigger => {
            if (!trigger.contains(e.target)) {
                trigger.classList.remove('active');
            }
        });
    });
});


window.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {

        const hash = window.location.hash;
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20, 
                behavior: "smooth"
            });
        });
    });
});
