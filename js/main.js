const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 2},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price) => {
    return `<div class="product-item">
                <div class="product-item-photo"><img class="photo" src="./img/${title}.jpg" alt=""></div>
                <div class="product-item-text">
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);