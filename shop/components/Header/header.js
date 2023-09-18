class Header {
  handlerOpenShopingPage(){
    shopingPage.render();
  }

  render(quantity) {
    const html = `
    <div class = "header-container">
    <div class="header-counter" onclick = "headerPage.handlerOpenShopingPage();">🛒${quantity}</div>
    </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);
