$(document).ready(function() {
    const $carouselInner = $('.carousel-inner');
    const $items = $('.carousel-item');
    const $indicators = $('.carousel-indicators li');
    const itemCount = Math.ceil($items.length / 3); // 一共有多少組
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        const translateX = -currentIndex * 100 / itemCount + '%';
        $carouselInner.css('transform', 'translateX(' + translateX + ')');
        $indicators.removeClass('active').eq(currentIndex).addClass('active');
    }

    function startCarousel() {
        if ($(window).width() >= 1328) {
            interval = setInterval(function() {
                currentIndex = (currentIndex + 1) % itemCount;
                updateCarousel();
            }, 5000); // 自動切換間隔時間
        }
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    $indicators.click(function() {
        stopCarousel();
        currentIndex = $(this).data('slide-to');
        updateCarousel();
        startCarousel();
    });

    $carouselInner.hover(stopCarousel, startCarousel);

    $(window).resize(function() {
        stopCarousel();
        if ($(window).width() >= 1328) {
            startCarousel();
        } else {
            $carouselInner.css('transform', 'translateX(0)');
            $indicators.removeClass('active').eq(0).addClass('active');
        }
    });

    if ($(window).width() >= 1328) {
        startCarousel();
    }
});