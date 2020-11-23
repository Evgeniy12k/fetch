const sendForm = () => {

    const errorMessage = 'Что-то пошло  не так',
          loadMessage = 'Загрузка',
          successMessage = ' мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

// обработчик события для кнопки форм
for(let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
    form[i].appendChild(statusMessage);//добавление элемента
//  статут загрузки 
        statusMessage.textContent = loadMessage;
// запрос к серверу
        
        const formData = new FormData(form[i]);
       
        let body = {};
        // for (let val of formData.entries()){
        //     body[val[0]] = val[1];
        // }

        formData.forEach((val, key) => {
            body[key] = val;
        });
        // 
        postData(body)
            .then((response) => {
                  if(response.status !== 200) {
                                    throw new Error('status network not 200');
                  }
                      statusMessage.textContent = successMessage;
                   setTimeout(() => {
                      statusMessage.textContent = '';
                   },1000);
                                
                  input.forEach((elem) => {
                      elem.value = "";
                      });
             })
             .catch((error) => {
                statusMessage.textContent = errorMessage;
                 
              });

         }

     );
  }

// проверяем строки Input на правильный ввод текста
    document.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.form-name') || target.matches('.mess') || target.matches('.top-form-name')){
            target.value = target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        }
    });
// проверяем строки Input на правильный ввод числа
    document.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.form-phone')){
            target.value = target.value.replace(/[^+0-9]/gi, '');
        }
    });

    const statusMessage = document.createElement('div'); 
    statusMessage.style.cssText = 'color: green';
    
    const postData = (body) => {
            return fetch('./server.php', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
        
    };
};
export default sendForm;