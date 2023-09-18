class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
   const{pushProduct, products}=localStorageUtil.putProducts(id);
   if(pushProduct){
    element.classList.add(this.classNameActive);
    element.innerHTML = this.labelRemove;
   }
   else{
    element.classList.remove(this.classNameActive);
    element.innerHTML = this.labelAdd;
   }

   headerPage.render(products.length)
  }
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, img, price }) => {
      const productsStore = localStorageUtil.getProducts();
      let activeText = "";
      let activeClass = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
    <li class = "products-element">
       <span class = "products-element__name">${name}</span>
       <img src="${img}" class = "products-element__img"></img>
       <span class = "products-element__price">🔥 ${price.toLocaleString()} USD</span>
       <button class = "products-element__button${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
    </li>`;
    });
    const html = `<ul class="products-container">
  ${htmlCatalog}
  </ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
