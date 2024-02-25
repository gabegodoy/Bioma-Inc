var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 6000, // Delay between slides in milliseconds (8 seconds)
    },
    speed: 600, // Transition speed in milliseconds (1.5 seconds)
    on: {
      slideChangeTransitionStart: function () {
        var activeSlide = this.slides[this.activeIndex];
        setTimeout(() => {
            activeSlide.style.transform = 'scale(1.05)';
        }, 100);
      },
      slideChangeTransitionEnd: function () {
        var previousSlide = this.slides[this.previousIndex];
        previousSlide.style.transform = 'scale(1)';
      },
    },
    // Pagination, navigation, and scrollbar options remain the same
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  setTimeout(() => {
    let bullets = document.querySelectorAll('.swiper-pagination-bullet')
    bullets.forEach(bullet => {
      switch (bullet.textContent) {
        case '1':
          bullet.textContent = 'CONCEITO'
          break;
        case '2':
          bullet.textContent = 'FRADIQUE'
          break;
        case '3':
          bullet.textContent = 'APINAJÉS'
          break;
        case '4':
          bullet.textContent = 'LAPA'
          break;
      }
    });
  }, 50);