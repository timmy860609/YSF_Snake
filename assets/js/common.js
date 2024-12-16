
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

//翻牌&星星閃爍
function flipCard(event) {
    event.preventDefault();
    const cardContainer = event.currentTarget;
    const sparkleContainer = cardContainer.querySelector('.sparkle-container');

    cardContainer.classList.toggle('flip');

    sparkleContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // 使用相近的顏色
        const colors = ['#054C94', '#0B4E8D', '#0F6EAA', '#EA6F17', '#EA8C3B', '#FFB600'];
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        sparkle.style.top = '50%';
        sparkle.style.left = '50%';
        sparkle.style.transform = 'translate(-50%, -50%)';

        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300; 

        sparkle.style.setProperty('--translateX', `${randomX}px`);
        sparkle.style.setProperty('--translateY', `${randomY}px`);

        sparkleContainer.appendChild(sparkle);
    }
}