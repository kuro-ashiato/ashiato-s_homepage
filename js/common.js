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
});

// family site end

// year start
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
// year end
