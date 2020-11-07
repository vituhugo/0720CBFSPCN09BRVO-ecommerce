console.log("-------- CARREGOU SCRIPT MAIN -------------")

let elemento_navbar_btn = document.querySelector('#navbarDropdown')

elemento_navbar_btn.addEventListener('click', (event) => {
    console.log("o botão foi clicado");
    elemento_menu = document.querySelector('.dropdown-menu');
    
    console.log("VALOR DO DISPLAY:", elemento_menu.style.display);
    if (elemento_menu.style.display === 'block') {
        elemento_menu.style.display = 'none';
    } else {
        elemento_menu.style.display = "block";
    }
})