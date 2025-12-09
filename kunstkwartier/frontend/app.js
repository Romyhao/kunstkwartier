const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');       // X ding
    offScreenMenu.classList.toggle('menu');   // schuift menu in/uit
});


// Home2 zoekbalk code voor het enter klikken via keyboard in plaats van de button//

const zoekInput = document.getElementById("zoekInput");

zoekInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();   
        handleSearchPosts(zoekInput.value);  
    }
});
