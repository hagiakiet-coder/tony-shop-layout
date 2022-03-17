const headerFilterSearch = document.querySelector(
  ".header .header-top .header-top-center .input .input-drop"
);
const headerFilterDrop = document.querySelector(
  ".header .header-top .header-top-center .input .input-drop .input-drop-container"
);
const headerFilterDropItem = document.querySelectorAll(
  ".header .header-top .header-top-center .input .input-drop .input-drop-item"
);
const headerFilterText = document.querySelector(
  ".header .header-top .header-top-center .input .input-drop span"
);

headerFilterSearch.addEventListener("click", () => {
  headerFilterDrop.classList.toggle("show");
});

headerFilterDropItem.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    if (item.classList.contains("active")) {
    } else {
      document
        .querySelector(
          ".header .header-top .header-top-center .input .input-drop .input-drop-item.active"
        )
        .classList.add("action");
    }
  });

  item.addEventListener("mouseleave", () => {
    document
      .querySelector(
        ".header .header-top .header-top-center .input .input-drop .input-drop-item.active"
      )
      .classList.remove("action");
  });

  item.addEventListener("click", () => {
    document
      .querySelector(
        ".header .header-top .header-top-center .input .input-drop .input-drop-item.active"
      )
      .classList.remove("active");
    if (
      document.querySelector(
        ".header .header-top .header-top-center .input .input-drop .input-drop-item.action"
      )
    ) {
      document
        .querySelector(
          ".header .header-top .header-top-center .input .input-drop .input-drop-item.action"
        )
        .classList.remove("action");
    }

    item.classList.add("active");

    // set value for filter
    headerFilterText.innerHTML = item.innerHTML;
  });
});

// action slogan drop
const sloganText = document.querySelector(
  ".header .header-menu .header-menu-responsive .menu-responsive-model .model-item .item-logo .slogan-drop"
);

const stringToSlogan = [
  "Cần là có",
  "Giao hàng tận nhà",
  "Chất lượng và hài lòng",
];

let resultSlogan = 0;

setInterval(() => {
  resultSlogan += 1;

  if (resultSlogan === stringToSlogan.length) {
    resultSlogan = 0;
  }
  sloganText.innerHTML = stringToSlogan[resultSlogan];
  setTimeout(() => {
    sloganText.classList.toggle("show");
  }, 400);
}, 1400);

// handle menu responsive
const btnClose = document.querySelector(
  ".header .header-menu .header-menu-responsive .menu-responsive-model .model-item .btn-close"
);
const menuResponsive = document.querySelector(
  ".header .header-menu .header-menu-responsive .menu-responsive-model"
);
const menuResponsiveItem = document.querySelector(
  ".header .header-menu .header-menu-responsive .menu-responsive-model .model-item"
);
const iconMenu = document.querySelector(
  ".header .header-menu .header-menu-responsive .icon-menu"
);
const menuResponsiveItemLink = document.querySelectorAll(
  ".header .header-menu .header-menu-responsive .menu-responsive-model .model-item .item-menu-list a"
);

iconMenu.addEventListener("click", () => {
  openMenuResponsive();
});

btnClose.addEventListener("click", () => {
  closeMenuResponsive();
});

menuResponsive.addEventListener("click", () => {
  closeMenuResponsive();
});

menuResponsiveItem.addEventListener("click", (e) => {
  e.stopPropagation();
});

menuResponsiveItemLink.forEach((item, index) => {
  item.addEventListener("click", () => {
    closeMenuResponsive();
  });
});

function closeMenuResponsive() {
  const html = document.querySelector("html");

  html.style.overflowY = "auto";
  menuResponsive.classList.remove("show");
}

function openMenuResponsive() {
  const html = document.querySelector("html");

  html.style.overflowY = "hidden";
  menuResponsive.classList.add("show");
}

// event back to top

const btnBackToTop = document.querySelector(".btn-back-to-top");

btnBackToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// scroll window handle

window.addEventListener("scroll", () => {
  const position = window.scrollY;

  if (position > 100) {
    btnBackToTop.classList.add("show");
    btnBackToTop.classList.add("act-1");
    setTimeout(() => {
      btnBackToTop.classList.add("act-2");
      btnBackToTop.classList.remove("act-1");
    }, 320);
  } else {
    btnBackToTop.classList.remove("show");
    btnBackToTop.classList.remove("act-1");
    btnBackToTop.classList.remove("act-2");
  }
});
