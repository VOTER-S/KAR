
 function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex === -1) {
        cart.push(item); 
    } else {
        alert(`${item.title} уже есть в корзине!`);
        return;
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(`${item.title} добавлен в корзину!`);
}




function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let totalPrice = 0; 

    cart.forEach(item => {
        const card = document.querySelector(`#${item.id}`); 
        if (card) {
           
            card.querySelector('img').src = item.img || "img/default.jpg";
            card.querySelector('img').alt = item.title;
            card.querySelector('h3').innerText = item.title;
            card.querySelector('p').innerText = item.description;
            card.querySelector('span').innerText = item.price;

            
            const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
            totalPrice += price;
        }
    });
     
     const totalContainer = document.querySelector('#total-price'); 
     if (totalContainer) {
         totalContainer.innerText = `Общая сумма: ${totalPrice} руб.`;
     }
}

// Очистка корзины
function clearCart() {
    localStorage.removeItem('cart'); // Удаляем данные из localStorage
    alert('Корзина очищена!');
    location.reload(); // Перезагружаем страницу для сброса данных
}

// Вызываем loadCart при загрузке страницы
window.onload = loadCart;

// burger-menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }


// Открыть окно
    function openDialog() {
        document.getElementById("dialogOverlay").style.display = "flex";
    }

    // Закрыть окно
    function closeDialog() {
        document.getElementById("dialogOverlay").style.display = "none";
    }