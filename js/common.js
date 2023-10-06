// header scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const subMenuLinks = document.querySelectorAll(".sub-menu a");
    const mainMenuItems = document.querySelectorAll(".main-menu .item__name");
    const materialIcons = document.querySelectorAll(".sub-menu .material-icons");
    const scrollY = window.scrollY;

    // 스크롤 위치에 따라 배경색 변경
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(0,0,0,0.7)";
        document.querySelector(".logo img").style.filter = "invert(1)";
        document.querySelector(".logo span").style.color = "#fff";
        subMenuLinks.forEach((link) => {
            link.style.color = "#fff"; // 흰색으로 변경
        });
        materialIcons.forEach((icon) => {
            icon.style.color = "#fff"; // 흰색으로 변경
        });
        mainMenuItems.forEach((item) => {
            item.style.color = "#fff";
        });
    } else {
        header.style.backgroundColor = "rgba(225, 225, 225, 0.8)";
        document.querySelector(".logo img").style.filter = "invert(0)";
        document.querySelector(".logo span").style.color = "#000";
        subMenuLinks.forEach((link) => {
            link.style.color = "#656565"; // 초기 색상으로 변경
        });
        materialIcons.forEach((icon) => {
            icon.style.color = "#656565"; // 초기 색상으로 변경
        });
        mainMenuItems.forEach((item) => {
            item.style.color = "#666";
        });
    }
});

// search start
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
    searchInputEl.value = ""; // 검색어 초기화.
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});
// search end

// family site start
// const familySiteEl = document.querySelector(".inner .menu li:last-child > a");
// const toggleButton = document.querySelector(".toggle-button");
// const familyBoxEl = document.querySelector(".family_box");

// // 클릭 이벤트 리스너 추가
// toggleButton.addEventListener("click", function () {
//     familyBoxEl.classList.toggle("open");
// });

document.querySelector(".toggle-button").addEventListener("click", function () {
    const familyBox = document.querySelector(".family_box");
    familyBox.classList.toggle("open");

    const toggleButton = document.querySelector(".toggle-button");
    if (familyBox.classList.contains("open")) {
        toggleButton.style.color = "#666"; // 원하는 색상 값으로 변경
    } else {
        toggleButton.style.color = ""; // open 클래스가 제거되면 기본 색상으로 변경
    }
});

// family site end

// year start
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
// year end
