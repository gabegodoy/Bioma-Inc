var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds (8 seconds)
    },
    speed: 700, // Transition speed in milliseconds (1.5 seconds)
    on: {
      slideChangeTransitionStart: function () {
        var activeSlide = this.slides[this.activeIndex];
        setTimeout(() => {
            activeSlide.style.transform = 'scale(1.05)';
        }, 500);
      },
      slideChangeTransitionEnd: function () {
        var previousSlide = this.slides[this.previousIndex];
        previousSlide.style.transform = 'scale(1)';
      },
    },
    // Pagination, navigation, and scrollbar options remain the same
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar', // Usa uma barra de progresso como a página de paginação
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });