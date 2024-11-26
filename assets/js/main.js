/*-----------------------------------------------------------------

Template Name: Changunarayan Foundation
Author:  Theme-vally
Author URI: https://themeforest.net/user/theme-vally
Version: 1.0.0
Description: Changunarayan Foundation

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. Preloader
02. Scroll to Top
03. magnificPopup
04. Smooth Scrolling
05. Tilt Hover
06. Popup Search
07. Mobile Menu
08. Ajax Form
09. Masonary Function 
10. Shape Mockup Function 
11. Counter Odometer
12. Progress Line
13. Custom Select
14. Custom Date Select
15. Form Validation
16. Marquee Mode
17. Side Box
18. wow Animation
19.chart Container
20.title Animation
21.Swiper Slider

------------------------------------------------------------------*/

(function ($) {
    "use strict";

    /*===========================================
        =    On Load Function      =
    =============================================*/
    $(window).on("load", function () {
        preLoader();
        scrollTop();
        magicCursor();
        smoothScrolling();
        tiltHover();
        popupSearch();
        mobileMenu();
        backgroundImage();
        ajaxForm();
        magnificPopup();
        masonaryFunction();
        shapeMockupFunction();
        counterOdometer();
        progressLine();
        countText();
        customSelect();
        customDateSelect();
        scrollDown();
        formValidation();
        marqueeMode();
        circleBoxAnimation();
        currentBox();
        sideBox();
        masonryIsotope();
        commonJs();
        wowAnimation();
        accordionBox();
        chartContainer();
        titleAnimation();
        loadMore();
        allSlider();
    });


    /*===========================================
        =    Preloader      =
    =============================================*/
    function preLoader() {
        // Remove the loading screen once the window has fully loaded
        $("#loading-screen").fadeOut(500, function () {
            $(this).remove();
        });
    }

    // Optional: Close loading screen when the close button is clicked
    $(".preloader-close").on("click", function () {
        $(".loading-screen").fadeOut(500, function () {
            $(this).remove();
        });
    });

    if ($('.loading-screen').length) {
        const textLoadingElement = document.querySelector(".txt-loading");
        const text = textLoadingElement.textContent.trim(); 
        let animatedText = "";
    
        text.split("").forEach(letter => {
            animatedText += `
                <span data-text-preloader="${letter}" class="letters-loading">
                    ${letter}
                </span>
            `;
        });
    
        textLoadingElement.innerHTML = animatedText;
    }

    /*===========================================
	=         Mobile Menu Active         =
    =============================================*/
    function mobileMenu() {
        if ($(".mobile-menu").length) {
            var mobileMenuContent = $(".nav-header .main-menu .navigation").html();

            $(".mobile-menu .navigation").append(mobileMenuContent);
            $.fn.mobilemenu = function (options) {
                var opt = $.extend({
                        menuToggleBtn: ".menu-toggle",
                        bodyToggleClass: "body-visible",
                        subMenuClass: "submenu-class",
                        subMenuParent: "submenu-item-has-children",
                        subMenuParentToggle: "active-class",
                        meanExpandClass: "mean-expand-class",
                        appendElement: '<span class="mean-expand-class"></span>',
                        subMenuToggleClass: "menu-open",
                        toggleSpeed: 400,
                    },
                    options
                );

                return this.each(function () {
                    var menu = $(this);

                    function menuToggle() {
                        menu.toggleClass(opt.bodyToggleClass);

                        var subMenu = "." + opt.subMenuClass;
                        $(subMenu).each(function () {
                            if ($(this).hasClass(opt.subMenuToggleClass)) {
                                $(this).removeClass(opt.subMenuToggleClass);
                                $(this).css("display", "none");
                                $(this).parent().removeClass(opt.subMenuParentToggle);
                            }
                        });
                    }

                    menu.find("li").each(function () {
                        var submenu = $(this).find("ul");
                        submenu.addClass(opt.subMenuClass);
                        submenu.css("display", "none");
                        submenu.parent().addClass(opt.subMenuParent);
                        submenu.prev("a").append(opt.appendElement);
                        submenu.next("a").append(opt.appendElement);
                    });

                    function toggleDropDown($element) {
                        var $parent = $($element).parent();
                        var $siblings = $parent.siblings();

                        $siblings.removeClass(opt.subMenuParentToggle);
                        $siblings.find("ul").slideUp(opt.toggleSpeed).removeClass(opt.subMenuToggleClass);

                        $parent.toggleClass(opt.subMenuParentToggle);
                        $($element).next("ul").slideToggle(opt.toggleSpeed).toggleClass(opt.subMenuToggleClass);
                    }

                    var expandToggler = "." + opt.meanExpandClass;
                    $(expandToggler).each(function () {
                        $(this).on("click", function (e) {
                            e.preventDefault();
                            toggleDropDown($(this).parent());
                        });
                    });

                    $(opt.menuToggleBtn).each(function () {
                        $(this).on("click", function () {
                            menuToggle();
                        });
                    });

                    menu.on("click", function (e) {
                        e.stopPropagation();
                        menuToggle();
                    });

                    menu.find("div").on("click", function (e) {
                        e.stopPropagation();
                    });
                });
            };
            $(".mobile-menu-wrapper").mobilemenu();
        }
    }

    /*===========================================
	=         Sticky Fix         =
    =============================================*/
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 245) {
            $('.sticky-wrapper').addClass('header-sticky animated slideInDown');
        } else {
            $('.sticky-wrapper').removeClass('header-sticky animated slideInDown');
        }
    });


    /*===========================================
	=         Scroll To Top         =
    =============================================*/
    function scrollTop() {
        let scrollTopBtn = document.querySelector('.scroll-top');
        let progressPath = document.querySelector('.scroll-top path');

        if (scrollTopBtn && progressPath) {
            let pathLength = progressPath.getTotalLength();

            // Set up the path for scroll progress indicator
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect(); // Trigger a layout to apply styles
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

            // Function to update progress based on scroll
            let updateProgress = function () {
                let scroll = $(window).scrollTop();
                let height = $(document).height() - $(window).height();
                let progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            };

            updateProgress();
            $(window).scroll(updateProgress);

            let offset = 50;
            let duration = 750;

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > offset) {
                    $(scrollTopBtn).addClass('show');
                } else {
                    $(scrollTopBtn).removeClass('show');
                }
            });

            $(scrollTopBtn).on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, duration);
                return false;
            });
        }
    }


    /*===========================================
	=         Magic Cursor         =
    =============================================*/
    function magicCursor() {
        // Add the custom cursor element to the body
        $("body").append('<div class="magic-cursor"></div>');

        var cursor = $(".magic-cursor");

        // Update cursor position on mouse move
        $(window).on("mousemove", function (e) {
            cursor.css({
                transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
                visibility: "inherit"
            });
        });

        // Handle hover states for links and buttons
        $("a, button, .theme-button, .scroll-top").on("mouseenter", function () {
            cursor.addClass("cursor-grow");
        });

        $("a, button, .theme-button, .scroll-top").on("mouseleave", function () {
            cursor.removeClass("cursor-grow");
        });
    }

    /*===========================================
	=    Initialize Lenis / Smooth Scrolling    =
    =============================================*/
    function smoothScrolling() {
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            // console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }


    /*===========================================
	=         Custom Tilt Js Start        =
    =============================================*/
    function tiltHover() {
        const tilt = document.querySelectorAll(".tilt");
        VanillaTilt.init(tilt, {
            reverse: true,
            max: 15,
            speed: 400,
            scale: 1.01,
            glare: true,
            reset: true,
            perspective: 800,
            transition: true,
            "max-glare": 0.45,
            "glare-prerender": false,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
        });
    }


    /*===========================================
	=         PopUp Search         =
    =============================================*/
    function popupSearch() {
        if ($(".search-btn").length) {
            $(".search-btn").click(function () {
                $("body").addClass("search-active");
            }).end().find(".close-search").click(function () {
                $("body").removeClass("search-active");
            });
        }
    }

    /*===========================================
	=         Set Background Image         =
    =============================================*/
    function backgroundImage() {
        if ($("[data-bg-src]").length > 0) {
            $("[data-bg-src]").each(function () {
                var src = $(this).attr("data-bg-src");
                $(this).css("background-image", "url(" + src + ")");
                $(this).removeAttr("data-bg-src").addClass("background-image");
            });
        }
    }


    /*===========================================
	=         Ajax Contact Form         =
    =============================================*/
    function ajaxForm() {
        const handleFormSubmission = (form, formIndex) => {
            form.addEventListener("submit", ev => {
                ev.preventDefault();
                const data = new FormData(form);
                const submitButton = form.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.querySelector('.btn-title').textContent;
                const loadingText = submitButton.dataset.loadingText;
                submitButton.querySelector('.btn-title').textContent = loadingText;
                submitButton.disabled = true;

                sendAjaxRequest("POST", form.action, data,
                    response => handleSuccess(response, form, submitButton, originalButtonText),
                    (statusCode, responseText) => handleError(statusCode, responseText, form, submitButton, originalButtonText)
                );
            });
        };

        const handleSuccess = (response, form, submitButton, originalButtonText) => {
            form.reset();
            let message = 'Success!';
            if (form.classList.contains('appointment-form')) {
                message = 'Appointment booked successfully!';
            } else if (form.classList.contains('contact_form')) {
                message = 'Contact submitted!';
            } else if (form.classList.contains('consulation-form')) {
                message = 'Consulation Submited!';
            } else if (form.classList.contains('comment-form')) {
                message = 'Comment Done!';
            } else if (form.classList.contains('newsletter-form')) {
                message = 'Subscribed!';
            }
            showPopup('success', message);
            submitButton.querySelector('.btn-title').textContent = originalButtonText;
            submitButton.disabled = false;
        };

        const handleError = (statusCode, responseText, form, submitButton, originalButtonText) => {
            let message = 'Oops! There was a problem.';
            if (form.classList.contains('appointment-form')) {
                message = 'Failed to book the appointment. Please try again.';
            } else if (form.classList.contains('comment-form')) {
                message = 'Somthing Mistake!';
            }
            showPopup('error', message);
            submitButton.querySelector('.btn-title').textContent = originalButtonText;
            submitButton.disabled = false;
        };

        const sendAjaxRequest = (method, url, data, successCallback, errorCallback) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    successCallback(xhr.response);
                } else {
                    errorCallback(xhr.status, xhr.responseText);
                }
            };
            xhr.send(data);
        };

        const showPopup = (status, message) => {
            const popup = document.createElement('div');
            popup.className = `popup-status ${status}`;
            popup.innerHTML = `<i class="far fa-${status === 'success' ? 'check-circle' : 'times-circle'}"></i> ${message}`;
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 3000); // Remove the popup after 3 seconds
        };

        const forms = document.querySelectorAll(".appointment-form, .contact_form, .consulation-form, .comment-form, .newsletter-form");

        forms.forEach((form, index) => handleFormSubmission(form, index));
    }


    /*===========================================
	=         Magnific Popup         =
    =============================================*/
    function magnificPopup() {
        //Fancybox
        Fancybox.bind("[data-fancybox]", {
            animated: true,
            transitionEffect: "fade",
        });


    }


    /*===========================================
	=        Masonary Active         =
    =============================================*/
    function masonaryFunction() {
        const elem = document.querySelector('.masonary-active');
        if (elem) {
            imagesLoaded(elem, () => {
                const iso = new Isotope(elem, {
                    itemSelector: '.filter-item',
                    layoutMode: 'fitRows'
                });

                document.querySelector('.portfolio-filter').addEventListener('click', (e) => {
                    if (e.target.matches('li')) {
                        iso.arrange({
                            filter: e.target.getAttribute('data-filter')
                        });
                        document.querySelector('.current_menu_item')?.classList.remove('current_menu_item');
                        e.target.classList.add('current_menu_item');
                    }
                });
            });
        }

    }


    /*===========================================
	=         Shape Mockup         =
    =============================================*/
    function shapeMockupFunction() {
        $.fn.shapeMockup = function () {
            var $shape = $(this);
            $shape.each(function () {
                var $currentShape = $(this),
                    shapeTop = $currentShape.data("top"),
                    shapeRight = $currentShape.data("right"),
                    shapeBottom = $currentShape.data("bottom"),
                    shapeLeft = $currentShape.data("left");
                $currentShape
                    .css({
                        top: shapeTop,
                        right: shapeRight,
                        bottom: shapeBottom,
                        left: shapeLeft,
                    })
                    .removeAttr("data-top")
                    .removeAttr("data-right")
                    .removeAttr("data-bottom")
                    .removeAttr("data-left")
                    .parent()
                    .addClass("shape-mockup-wrap");
            });
        };

        if ($(".shape-mockup")) {
            $(".shape-mockup").shapeMockup();
        }
    }


    /*===========================================
	=         Counter Up Odometer         =
    =============================================*/
    function counterOdometer() {
        if ($('.count-number').length) {
            $('.count-number').appear(function () {
                var odo = $(this);
                var countNumber = odo.attr("data-count");

                odo.html(countNumber);

                setTimeout(function () {
                    odo.html(countNumber);
                }, 500);
            }, {
                accY: 0
            });
        }
    }


    /*===========================================
	=         Skills progressLine         =
    =============================================*/
    function progressLine() {
        if ($('.progress-line').length) {
            $('.progress-line').appear(function () {
                let el = $(this);
                let percent = el.data('width');
                el.css('width', percent + '%');
            }, {
                accY: 0
            });
        }
    }

    /*===========================================
	=      Progress Counter + Text Count        =
    =============================================*/
    function countText() {
        if ($('.count-box').length) {
            $(".count-box").appear(
                function () {
                    let $t = $(this),
                        n = $t.find(".count-text").attr("data-stop"),
                        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".count-text").text()
                        }).animate({
                            countNum: n,
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function () {
                                $t.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $t.find(".count-text").text(this.countNum);
                            },
                        });
                    }
                }, {
                    accY: 0
                }
            );
        }
    }

    /*===========================================
	=        Select2 Active         =
    =============================================*/
    function customSelect() {
        $('.custom-select').select2({
            minimumResultsForSearch: 4,
        });
    }


    /*===========================================
	=        Custom Date & Time Picker         =
    =============================================*/
    function customDateSelect() {
        if ($(".datepicker").length) {
            $(".datepicker").datepicker({
                dateFormat: "mm/dd/yy",
                showAnim: "slideDown",
                changeMonth: true,
                changeYear: true
            });
        }
    }


    /*===========================================
	=        Scroll Down        =
    =============================================*/
    function scrollDown() {
        const scrollLink = document.getElementById("scrollLink");
        if (scrollLink) {
            scrollLink.addEventListener("click", function (event) {
                event.preventDefault();

                const targetSection = document.querySelector(this.getAttribute("href"));

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        }
    }


    /* =======================
    Form Validation
    ======================= */
    function formValidation() {
        if ($("#appointment_form,#contact_form,#comment-form").length) {
            $("#appointment_form,#contact_form,#comment-form").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: "required"
                },
                messages: {
                    name: "Please enter your name",
                    email: {
                        required: "Please enter your email address",
                        email: "Please enter a valid email address" // Modify this message as needed
                    },
                    message: "Please enter a message"
                }
                // Other options if needed
            });
        }
    }


    /*===========================================
	=         Marquee Active         =
    =============================================*/
    function marqueeMode() {
        if ($(".marquee_mode").length) {
            $('.marquee_mode').marquee({
                speed: 40,
                gap: 0,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
                pauseOnHover: true,
                startVisible: true,
            });
        }
    }


    // Circle Box  Animation
    function circleBoxAnimation() {
        function createTextAnimation(textElement, circleBoxElement) {
            textElement.style.cssText = "animation: text-rotate 10s linear infinite;";

            const textRotateAnimation = textElement.animate(
                [{
                    transform: "rotate(0deg)"
                }, {
                    transform: "rotate(360deg)"
                }], {
                    duration: 10000,
                    iterations: Infinity,
                    easing: "linear",
                }
            );

            circleBoxElement.addEventListener("mouseenter", () => textRotateAnimation.pause());
            circleBoxElement.addEventListener("mouseleave", () => textRotateAnimation.play());
        }

        // Apply text animation to elements with the class "circle-box"
        const circleBoxes = document.querySelectorAll(".circle-box");
        circleBoxes.forEach(circleBox => {
            const text = circleBox.querySelector(".text-inner");
            createTextAnimation(text, circleBox);
        });

        const chooseUsShapes = document.querySelectorAll(".section-shape > div > img");
        chooseUsShapes.forEach(chooseUsShape => {
            createTextAnimation(chooseUsShape, chooseUsShape.parentElement);
        });
    }


    // Current active Box
    function currentBox() {
        // Process box current
        if ($(".process-single-box").length) {
            $('.process-single-box').on('mouseenter', function () {
                $(this).addClass('current');
                $('.process-single-box').not(this).removeClass('current');
            });
        }

        // Pricing Card current
        if ($(".pricing-card").length) {
            $('.pricing-card').on('mouseenter', function () {
                $(this).addClass('current');
                $('.pricing-card').not(this).removeClass('current');
            });
        }
    }


    /*===========================================
	=         Popup Sidebox         =
    =============================================*/
    function sideBox() {
        $("body").removeClass("open-sidebar");
        $(document).on("click", ".sidebar-trigger", function (e) {
            e.preventDefault();
            $("body").toggleClass("open-sidebar");
        });
        $(document).on("click", ".sidebar-close-btn, #sidebar-overlay", function (e) {
            e.preventDefault();
            $("body.open-sidebar").removeClass("open-sidebar");
        });
    }


    /*===========================================
	=         Masonary Isotope         =
    =============================================*/
    function masonryIsotope() {
        if ($(".image_load").length) {
            $('.image_load').imagesLoaded(function () {

                if ($.fn.isotope) {

                    var $portfolio = $('.image_load'); // Fixed selector typo

                    $portfolio.isotope({

                        itemSelector: '.grid-item',
                        filter: '*',
                        layoutMode: 'masonry',
                        transitionDuration: '0.8s'
                    });

                    // Menu filtering functionality
                    $('.menu-filtering li').on('click', function () {

                        $('.menu-filtering li').removeClass('active');
                        $(this).addClass('active');

                        var selector = $(this).attr('data-filter');
                        $portfolio.isotope({
                            filter: selector
                        });
                    });
                }
            });
        }
    }


    /*===========================================
	=         Common Js         =
    =============================================*/
    function commonJs() {
        $("[data-background").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        $("[data-width]").each(function () {
            $(this).css("width", $(this).attr("data-width"));
        });

        $("[data-bg-color]").each(function () {
            $(this).css("background-color", $(this).attr("data-bg-color"));
        });

        $("[data-text-color]").each(function () {
            $(this).css("color", $(this).attr("data-text-color"));
        });

        $(".has-img").each(function () {
            var imgSrc = $(this).attr("data-menu-img");
            var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
            $(this).append(img);

        });
    }


    /*===========================================
        =        Wow Active         =
    =============================================*/
    function wowAnimation() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                mobile: true,
                live: true,
            });
            wow.init();
        }
    }


    /*===========================================
        =        Accordion Box         =
    =============================================*/
    function accordionBox() {
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {

                var outerBox = $(this).parents('.accordion-box');
                var target = $(this).parents('.accordion');

                if ($(this).hasClass('active') !== true) {
                    $(outerBox).find('.accordion .acc-btn').removeClass('active ');
                }

                if ($(this).next('.acc-content').is(':visible')) {
                    return false;
                } else {
                    $(this).addClass('active');
                    $(outerBox).children('.accordion').removeClass('active-block');
                    $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                    target.addClass('active-block');
                    $(this).next('.acc-content').slideDown(300);
                }
            });
        }
    }


    /*===========================================
        =        Chart Container         =
    =============================================*/
    function chartContainer() {
        const myChartElement = document.getElementById('myChart');

        if (!myChartElement) {
            return;
        }

        const ctx = myChartElement.getContext('2d');
        const rootStyles = getComputedStyle(document.documentElement);
        const darkColor = rootStyles.getPropertyValue('--dark-color3').trim();
        const darkColor2 = '#367c7c';
        const whiteColor = rootStyles.getPropertyValue('--white-color').trim();

        const barData = [20, 35, 50, 65];

        const backgroundColors = barData.map(value => {
            return (value === 35 || value === 65) ? darkColor2 : darkColor;
        });

        const data = {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                    type: 'bar',
                    label: 'Bar Data',
                    data: barData,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                    borderRadius: 0,
                    barThickness: 20,
                    maxBarThickness: 30,
                    animation: {
                        duration: 3000,
                    },
                },
                {
                    type: 'line',
                    label: 'Line Data',
                    data: [22, 37, 52, 67],
                    borderColor: darkColor,
                    borderWidth: 2,
                    fill: false,
                    pointBackgroundColor: whiteColor,
                    pointBorderColor: darkColor,
                    pointRadius: 6,
                    animation: {
                        duration: 3000,
                    },
                }
            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 1000,
                },
            }
        };

        function renderChart() {
            const myChartElement = document.getElementById('myChart');
            const rect = myChartElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                new Chart(ctx, config);
                window.removeEventListener('scroll', renderChart);
            }
        }

        window.addEventListener('scroll', renderChart);
    }


    /*===========================================
        =        Title Animation         =
    =============================================*/
    function titleAnimation() {
        const visibleSlowlyRight = document.querySelectorAll('.sec-title, .hero-content .title');

        const setInitialStyles = (chars) => {
            chars.forEach((char) => {
                char.style.display = 'inline-block';
                char.style.opacity = '0';
                char.style.transform = 'translateX(20px)';
                char.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        };

        const revealChars = (element) => {
            const splitChar = new SplitType(element, {
                types: 'chars'
            });
            setInitialStyles(splitChar.chars);

            splitChar.chars.forEach((char, index) => {
                setTimeout(() => {
                    char.style.opacity = '1';
                    char.style.transform = 'translateX(0)';
                }, index * 30);
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    revealChars(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        visibleSlowlyRight.forEach((element) => {
            observer.observe(element);
        });
    }


    /*===========================================
        =        Item Load More        =
    =============================================*/
    function loadMore() {
        if ($('#loadMore').length) {
            $('#loadMore').on('click', function () {
                const loadMoreButton = $(this);
                const originalButtonText = loadMoreButton.find('.btn-title').html();
                const loadingText = loadMoreButton.data('loading-text');

                loadMoreButton.find('.btn-title').html(loadingText);
                loadMoreButton.addClass('i-none');

                $('#loader').show();

                setTimeout(function () {
                    $('#loader').hide();

                    $('.more-items:hidden').slice(0, 3).slideDown();

                    loadMoreButton.find('.btn-title').html(originalButtonText);
                    loadMoreButton.removeClass('i-none');

                    if ($('.more-items:hidden').length === 0) {
                        loadMoreButton.fadeOut();
                    }

                }, 1500);
            });
        }
    }


    /*===========================================
        =        All Slider        =
    =============================================*/
    function allSlider() {
        // Brands Slider
        if ($('.brands-slider').length) {
            new Swiper(".brands-slider", {
                spaceBetween: 30,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
                pagination: false,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    0: {
                        slidesPerView: 2,
                    }
                },
            });
        }

        // Testimonial Slider
        if ($('.testi-slider').length) {
            new Swiper(".testi-slider", {
                spaceBetween: 30,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: false,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 1,
                    },
                    912: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Testimonial Slider Two
        if ($('.testi-slider-2').length) {
            new Swiper(".testi-slider-2", {
                spaceBetween: 30,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: false,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 1,
                    },
                    912: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Testimonial Slider Three
        if ($('.testi-slider-3').length) {
            new Swiper(".testi-slider-3", {
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                // centeredSlides: true,
                // initialSlide: 2,
                pagination: {
                    el: ".dot",
                    clickable: true
                },
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Testimonial Slider Four
        if ($('.testi-slider-4').length) {
            new Swiper(".testi-slider-4", {
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true
                },
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Team Slider
        if ($('.team-slider').length) {
            new Swiper(".team-slider", {
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: false,
                pagination: false,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Service Slider
        if ($('.service-slider').length) {
            new Swiper(".service-slider", {
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: false,
                pagination: false,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        // Service Slider Two 
        if ($('.service-slider-2').length) {
            new Swiper(".service-slider-2", {
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: false,
                pagination: false,
                centeredSlides: true,
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
        

        // Case Slider
        if ($('.case-slider').length) {
            new Swiper(".case-slider", {
                direction: "horizontal",
                mousewheel: true,
                spaceBetween: 24,
                speed: 1500,
                loop: true,
                autoplay: false,
                pagination: {
                    el: ".dot",
                    clickable: true
                },
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    854: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
    }

    let lastWidth = window.innerWidth;

    window.addEventListener('resize', function () {
        let currentWidth = window.innerWidth;
        if (Math.abs(currentWidth - lastWidth) >= 1) {
            location.reload();
        }
    });

    /*===== RIGHT CLICK PROTECTION =====*/
    // RightClickProtection();

    function RightClickProtection(selector) {
        // Create overlay and container elements
        const overlay = document.createElement('div');
        overlay.className = 'bentol-rcp-overlay';

        const container = document.createElement('div');
        container.className = 'bentol-rcp-container';
        const message = document.createElement('h2');
        message.textContent = 'The context menu is not allowed on this page.';
        container.appendChild(message);

        // Create the wrapper and append overlay and container
        const wrapper = document.createElement('div');
        wrapper.className = 'bentol-rcp-wrap';
        wrapper.appendChild(overlay);
        wrapper.appendChild(container);
        document.body.appendChild(wrapper);

        // CSS styles
        const style = document.createElement('style');
        style.textContent = `
            .bentol-rcp-wrap, .bentol-rcp-overlay {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 333;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s;
                will-change: opacity;
            }
            .rcp-show .bentol-rcp-wrap {
                pointer-events: all;
                opacity: 1;
            }
            .bentol-rcp-overlay {
                background-color: rgba(0, 0, 0, 0.9);
                opacity: 1;
                z-index: 3;
            }
            .bentol-rcp-container {
                z-index: 5;
                position: absolute;
                left: 50%;
                top: 50%;
                max-width: 1200px;
                width: 100%;
                transform: translate(-50%, -50%);
                text-align: center;
                transition: transform 0.3s;
                will-change: transform;
                pointer-events: none;
            }
            .bentol-rcp-container h2{
                color: #fff;
            }
        `;
        document.head.appendChild(style);

        let rcp_timer = null;

        jQuery(document).on('contextmenu', function (e) {
            e.preventDefault();
            document.body.classList.add('rcp-show');

            if (rcp_timer) {
                clearTimeout(rcp_timer);
            }
            rcp_timer = setTimeout(function () {
                document.body.classList.remove('rcp-show');
            }, 2000);
        });

        jQuery(wrapper).on('click', function (e) {
            e.preventDefault();
            document.body.classList.remove('rcp-show');
        });

        jQuery(document).on('keyup', function (e) {
            if (e.key === 'Escape') {
                document.body.classList.remove('rcp-show');
            }
        });
    }


})(jQuery);