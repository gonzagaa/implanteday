window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showButtonWhatsappOnScroll()
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 1) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

AOS.init({
    duration: 1000,
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 1,
    keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
            slidesPerView: 2,
          },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    },
    loop: true,
  });

