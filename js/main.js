const mainTitle = document.querySelector(".main-titile");
const navigation = document.querySelector(".navigation");
const navList = document.querySelector(".nav-list");
const items = document.querySelector(".items");
const generalInfo = document.querySelector(".general-info");
const burgerNavigationList = document.querySelector(".burger-navigation-list");
const cardItem = document.querySelector(".item");
const popupWrapper = document.querySelector(".popup-wrapper");
const amountOfResults = document.querySelector(".amount-of-results");

function renderCard() {
  return `<div class="card item" data-name = "${item.title}">
  <img src="./img/trucks/${item.image}" class="card-img-top pb-3" alt="${item.title}">
  <div class="card-body">
      <h4 class="item-titile">
        ${item.title}
      </h4>
    <div class="item-bottom">
    <div class="item-price">${item.price} ${item.price_currency}</div>
    <button type="button" class="btn btn-primary">Learn more</button>
    </div>
    </div>
</div>`;
}

function renderNavigation() {
  return `
  <li class="nav-btn">
    <a class="nav-btn-link" href="${item.href}">${item.text}</a>
  </li>`;
}
const url =
  "https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json";
async function getPageData() {
  const resp = await fetch(url);
  const data = await resp.json();
  mainTitle.innerHTML = data.page_meta.h1;
  document.querySelector("title").innerHTML = data.page_meta.title;

  const metaKeywords = document.createElement("meta");
  metaKeywords.setAttribute("name", "keywords");
  metaKeywords.setAttribute("content", `${data.page_meta.meta_keywords}`);

  const metaDescription = document.createElement("meta");
  metaDescription.setAttribute("name", "description");
  metaDescription.setAttribute("content", `${data.page_meta.meta_description}`);

  document.head.prepend(metaKeywords);
  document.head.prepend(metaDescription);

  const navListData = data.nav;
  //nav render
  for (item of navListData) {
    navList.innerHTML += renderNavigation();
    burgerNavigationList.innerHTML += renderNavigation();
  }
  //items render
  for (item of data.stock) {
    items.innerHTML += renderCard();
  }
  //add general info
  for (paragraph of data.page_text) {
    generalInfo.innerHTML += `
    <${paragraph.tag} class="general-info-content">${paragraph.content}</${paragraph.tag}>`;
  }
  const itemList = document.querySelectorAll(".item");
  amountOfResults.innerHTML = `${itemList.length} results`;
  itemList.forEach(function (item) {
    item.addEventListener("click", function () {
      let name = this.getAttribute("data-name");
      renderPopup(name, data);

      popupWrapper.innerHTML += renderPopup(name, data);
      popupWrapper.classList.add("active");
      document.body.classList.add("locked");

      const closeBtn = document.querySelector(".btn-close");
      closeBtn.addEventListener("click", () => {
        popupWrapper.classList.toggle("active");
        document.body.classList.remove("locked");
        popupWrapper.innerHTML = "";
      });
    });
  });
}
getPageData();

popupWrapper.addEventListener("click", (e) => {
  if (!e.target.closest(".popup-body")) {
    popupWrapper.classList.toggle("active");
    document.body.classList.remove("locked");
    popupWrapper.innerHTML = "";
  }
});
