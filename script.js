class GoodsItem {

  constructor(title='Товар', price=0) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
      `;
  }

}

class GoodsList {

  constructor() {
    this.goods = [];
    this.fetchGoods();
    this.render();
  }

  fetchGoods() {
    this.goods = [
    { title: 'Socks', price: 50 },
    { title: 'Jackets', price: 320 },
    { title: 'Shoes', price: 500 },
    { title: 'Skirts', price: 200},
    { title: 'Pants', price: 250 },
    { title: 'Blouses', price: 280 },
    { title: 'T-shirts', price: 350 },
    { title: 'Sweaters', price: 450 },
    { title: 'Jeans', price: 260 },
    ];
  }

  sumPrices() {
    this.prices = this.goods.map(good => good.price);
    this.sumPrices = this.prices.reduce((partial_sum, a) => partial_sum + a,0);
    return this.sumPrices;
  }

  render() {
    const goodsItems = this.goods.map(({title, price}) => {
      const goodsItem = new GoodsItem(title, price);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsItems.join('');
  }

}

class goodInBasket {
//явно структура должна быть как и у товара, но не знаю, должна ли наследоваться от товара
  constructor(title='Товар', price=0) {
    this.title = title;
    this.price = price;
  }
}

class Basket {
  constructor() {
    this.basket = [];
  }

  addGood(good) {
//добавление в корзину
  }

  delGood(good) {
//удаление из корзины
  }

  calculateGoods(){
//  возвращает количество товаров в корзине
  }

  sumPrices() {
//  возвращает сумму всех товаров в корзине
  }
}

onload = () => {
  const goodsList = new GoodsList();
}