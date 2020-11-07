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

// Validação de formulário pelos campos
var elemento_txt_titulo = document.querySelector('#txt-titulo'); 
// outra possibilidade: var elemento_txt_titulo = document.getElementById('txt-titulo'); 
elemento_txt_titulo.addEventListener('blur', function(event) {
    if (elemento_txt_titulo.value === "") {
        document.querySelector('#txt-titulo-error').innerHTML = "O titulo está vázio."
    } else {
        document.querySelector('#txt-titulo-error').innerHTML = ""
    }
})

//validação campo email manual
var el_txt_email = document.querySelector('#txt-email');

el_txt_email.addEventListener('blur', function(event) {
    el_txt_email.value.match
    if (el_txt_email.value.match(/^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i) === null) {
        document.querySelector('#txt-email-error').innerHTML = "O email não é válido."
    } else {
        document.querySelector('#txt-email-error').innerHTML = ""
    }
});
