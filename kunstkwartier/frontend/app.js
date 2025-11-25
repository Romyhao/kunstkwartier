const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');       // verandert hamburger in X
    offScreenMenu.classList.toggle('menu');   // schuift menu in/uit
});

