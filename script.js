onload = function () {
  const goods = [
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
  
  const renderGoodsItem = (title='Товар', price='500') => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);
}