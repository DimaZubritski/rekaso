const apiUrl = "https://rekasoonlineshop.retailcrm.ru/api/v5/orders/create";
const apiKey = "9au40GmbbHRKA6UCiWnhj2StnLYpR0lb";

document.getElementById('order_form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные, введенные пользователем
    const firstName = document.getElementById('name1').value;
    const phoneNumber = document.getElementById('phone1').value;
    const productCode = document.getElementById('product_code').value;

    // Подготавливаем данные заказа
    const orderData = {
        order: {
            firstName: firstName,  
            phone: phoneNumber,    
            items: [{
                offer: { externalId: productCode },
                quantity: 1  
            }]
        }
    };

    // Преобразуем данные в формат application/x-www-form-urlencoded
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("apiKey", apiKey);
    urlEncodedData.append("order", JSON.stringify(orderData.order));

    try {
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData.toString(),
            mode: 'no-cors'
        }
        
        );

       // const data = await response.json();
        console.log('Успех:', response.status);

        // Перенаправление на страницу благодарности после успешной отправки данных
        window.location.href = 'okno.html'; // URL страницы благодарности
      
    } catch (error) {
        console.error('Ошибка:', error);
    }
});
