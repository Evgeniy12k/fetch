const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');
    let popupContent = document.querySelector('.popup-content');
// все кнопки
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
        //    проверяем если Ширина больше
            if(window.innerWidth > 768){
                popupContent.style.opacity = '0'; 
                let n = 0;
                const timer = setInterval(() => { 
                    n += 0.1;
                    popupContent.style.opacity = `${n}`;
        //  останавливаем таймер
                    if (popupContent.style.opacity === '1') {
                        clearInterval(timer);
                    }

                }, 40);
                popup.style.display = 'block';
            }else{
                popup.style.display = 'block';
                popupContent.style.opacity = '1';
            }
        });
    }); 

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            if(window.innerWidth > 768){
                popupContent.style.opacity = '1';
                let n = 1;
                const timer = setInterval(() => {
                    n-= 0.1;
                    popupContent.style.opacity = `${n}`;

                    if (popupContent.style.opacity === '-0.1') {
                        popup.style.display = 'none';
                        clearInterval(timer);
                    }

                }, 40);
                
            }else{
                popup.style.display = 'none';
            }
        }else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
            }
        }
    });
    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-content')){
            popup.style.display = 'none';

        } else {
            target = target.closest('.popup-content');

            if(!target){
                popup.style.display = 'none';
            };

        };  
       
    });
};
export default togglePopUp;