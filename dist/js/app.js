// nav
const col = document.getElementById("col");
const disc = document.getElementById("disc");
const crt = document.getElementById("crt");
const int = document.getElementById("int");

col.addEventListener("click", function () {
  col.classList.add("ChangeColorNav");

  disc.classList.remove("ChangeColorNav");
  crt.classList.remove("ChangeColorNav");
  int.classList.remove("ChangeColorNav");
});

disc.addEventListener("click", function () {
  disc.classList.add("ChangeColorNav");

  col.classList.remove("ChangeColorNav");
  crt.classList.remove("ChangeColorNav");
  int.classList.remove("ChangeColorNav");
});

crt.addEventListener("click", function () {
  crt.classList.add("ChangeColorNav");

  col.classList.remove("ChangeColorNav");
  disc.classList.remove("ChangeColorNav");
  int.classList.remove("ChangeColorNav");
});

int.addEventListener("click", function () {
  int.classList.add("ChangeColorNav");

  col.classList.remove("ChangeColorNav");
  disc.classList.remove("ChangeColorNav");
  crt.classList.remove("ChangeColorNav");
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  mobileNav.classList.toggle("NavbarActive");
});

// search
const search = document.querySelector(".search");
const searchBar = document.querySelector(".searchBar");
const MdSearch = document.querySelector(".MdSearch");
const MSearchBar = document.querySelector(".MSearchBar");

search.addEventListener("click", function () {
  searchBar.classList.toggle("active");
  search.classList.toggle("Sactive");
});

MdSearch.addEventListener("click", function () {
  MSearchBar.classList.toggle("SearchShow");
  MdSearch.classList.toggle("Sactive");
});

// stuff slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 3,
    },
  },
});

// discover
const filterShow = document.querySelector(".filter-show");
const indicator = document.querySelector(".indicator");
const filterCategory = document.querySelector(".filter-category");
const filterOptions = document.querySelector(".filter-options");

filterShow.addEventListener("click", function () {
  indicator.classList.toggle("ShowFC");
  filterCategory.classList.toggle("ShowFCmb");
  filterOptions.classList.toggle("showExtands");
});

// dark mode
const DarkMode = document.getElementById("DarkMode");
const html = document.querySelector("html");
const LOpensea = document.querySelector(".LOpensea");
const DOpensea = document.querySelector(".DOpensea");
const SwiperNext = document.querySelector(".swiper-button-next");
const SwiperPrev = document.querySelector(".swiper-button-prev ");

DarkMode.addEventListener("click", function () {
  if (DarkMode.checked) {
    html.classList.add("dark");
    // theme not thame
    localStorage.theme = "dark";
    DOpensea.classList.remove("hidden");
    SwiperNext.classList.add("paginationActive");
    SwiperPrev.classList.add("paginationActive");
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    DOpensea.classList.add("hidden");
    SwiperNext.classList.remove("paginationActive");
    SwiperPrev.classList.remove("paginationActive");
  }
});

// toggle dark mode sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  DarkMode.checked = true;
} else {
  DarkMode.checked = false;
}
