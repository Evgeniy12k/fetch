const command = document.querySelector('#command');
    
const toggleImg = event => {
    const target = event.target;

    if (target.matches('img')) {
        let a = target.src,
            b = target.dataset.img;
  
        target.dataset.img= a;
        target.src= b;
    }
}

command.addEventListener('mouseover', toggleImg);
command.addEventListener('mouseout', toggleImg);

export default command;
