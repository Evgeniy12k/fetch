const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++ ){
            if (index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');// удаляем невидимость класс
            }else{
                 tab[i].classList.remove('active');//скрываем активный класс
                tabContent[i].classList.add('d-none');
                
            }
        }
    };
// событие для элемента родителя
          tabHeader.addEventListener('click', (event) => {
            let target = event.target; 
       
            target = target.closest('.service-header-tab');
            

                
                if (target){
                   
                    tab.forEach((item, i)  => {
                        if (item === target){
                            toggleTabContent(i);
                        }
                    });
                    
                 }
                

              
            });      
};

export default tabs;