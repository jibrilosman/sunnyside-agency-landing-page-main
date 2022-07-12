
const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger');

 
hamburgerMenu.addEventListener('click', () => {
    
    if (navbar.style.top == '200px') {
        navbar.style.top = '-700px';
    } else {
        navbar.style.top = '200px';
    }  

});

