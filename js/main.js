// new Swiper(선택자,옵션)
new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
});

new Swiper(".promotion .swiper-container", {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000, //5초 (기본은 3000)
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    },
});

new Swiper(".awards .swiper-container", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next",
    },
});
// swiper end

// promotion, promotion Toggle start
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion; // ! < 반대가 되게 만들어주세요. (true로 바뀜)
    if (isHidePromotion) {
        // 숨김 처리 !
        promotionEl.classList.add("hide");
    } else {
        //숨김 해제!
        promotionEl.classList.remove("hide");
    }
});
// promotion, promotion Toggle end

// badge start (scroll)
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

// prettier-ignore
window.addEventListener( "scroll", _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.4, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기
       gsap.to(toTopEl, 0.6, {
         x: 0,
       });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.4, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, 0.5, {
        x:100,
      })
    }
  }, 300)
);
// _.throttle(함수, 시간)

// to-top
toTopEl.addEventListener("click", function () {
    gsap.to(window, 0.7, {
        scrollTo: 0,
    });
});
// to-top
