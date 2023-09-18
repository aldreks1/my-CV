class Shoping {
    clearHtml(){
        ROOT_SHOPING.innerHTML = "";
    }
  render() {
    let htmlCatalog = "";
    let sumCatalog = 0;
    const productsStore = localStorageUtil.getProducts();
    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.includes(id)) {
        htmlCatalog += `
            <tr>
                <td class = "shopping-element__name">🔥 ${name}</td>
                <td class = "hopping-element__price">${price.toLocaleString()} USD</td>
            </tr>
            `;
            sumCatalog+=price;
      }
    });
    const html = `
    <div class = "shopping-container">
        <table>
            ${htmlCatalog}
            <tr>
            <td class = "shopping-element__name">💰 Сумма: </td>
            <td class = "hopping-element__price">${sumCatalog.toLocaleString()} USD</td>
        </tr>
        </table>
        <div class = "shopping__close" onclick = "shopingPage.clearHtml();"></div>
    </div>
    `;
    ROOT_SHOPING.innerHTML = html;
  }
}

const shopingPage = new Shoping();
