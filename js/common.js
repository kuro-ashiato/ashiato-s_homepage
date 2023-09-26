// search s
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
// search e

// year start
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
// year end
