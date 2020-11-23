const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            body = document.querySelector('body'),
            menuItems = menu.querySelectorAll('ul>li>a');
// функция для закрытия Меню
const handlerMenu = () => {
    menu.classList.toggle('active-menu');
    
};   

body.addEventListener('click', event => {
    let target = event.target;
   
       let closeMenuBtn = event.target;
        target = target.closest('.menu');
        if(target){
            handlerMenu();
        } else if (closeMenuBtn.classList.contains('close-btn')){
            handlerMenu();
       }else if(closeMenuBtn.classList.contains('ul>li>a')){
            handlerMenu();
        }

});


 
menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu ));



};
export default toggleMenu;