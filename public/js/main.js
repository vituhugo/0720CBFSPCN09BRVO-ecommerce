console.log("-------- CARREGOU SCRIPT MAIN -------------")

let elemento_navbar_btn = document.querySelector('#navbarDropdown')

if (elemento_navbar_btn) {
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
}

// Validação de formulário pelos campos

var elemento_txt_titulo = document.querySelector('#txt-titulo'); 

if (elemento_txt_titulo) {
// outra possibilidade: var elemento_txt_titulo = document.getElementById('txt-titulo'); 
    elemento_txt_titulo.addEventListener('blur', function(event) {
        if (elemento_txt_titulo.value === "") {
            document.querySelector('#txt-titulo-error').innerHTML = "O titulo está vázio."
        } else {
            document.querySelector('#txt-titulo-error').innerHTML = ""
        }
    })
}

//validação campo email manual
var el_txt_email = document.querySelector('#txt-email');

if (el_txt_email) {
    el_txt_email.addEventListener('blur', function(event) {
        el_txt_email.value.match
        if (el_txt_email.value.match(/^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i) === null) {
            document.querySelector('#txt-email-error').innerHTML = "O email não é válido."
        } else {
            document.querySelector('#txt-email-error').innerHTML = ""
        }
    });
}

let lista_itens = document.querySelector('#lista-items')
if (lista_itens) {
    if (sessionStorage.getItem('produtos')) {
        let produtos = sessionStorage.getItem('produtos');

        lista_itens.innerHTML = "";
                    produtos.forEach((produto) => {
                        lista_itens.innerHTML += `<div class="col-3">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h3 class="card-title">${produto.title}</h3>
                                                        </div>
                                                        <img class="card-img" src="${produto.image}" width="100" height="200" />
                                                        <div class="card-footer text-center d-flex justify-content-between">
                                                            <h4>R$ ${produto.price}</h4>
                                                            <a href="/produto/${produto.id}" class="btn btn-primary">Comprar</a>
                                                        </div>
                                                    </div>
                                                </div>`;
                        // equivalente: lista_itens.innerHTML = lista_itens.innerHTML.concat(`<div class="col-3">...
                    })
    } else {
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then( produtos => {
                    console.log(produtos);
                    sessionStorage.setItem('produtos', JSON.stringify(produts));
                    lista_itens.innerHTML = "";
                    produtos.forEach((produto) => {
                        lista_itens.innerHTML += `<div class="col-3">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h3 class="card-title">${produto.title}</h3>
                                                        </div>
                                                        <img class="card-img" src="${produto.image}" width="100" height="200" />
                                                        <div class="card-footer text-center d-flex justify-content-between">
                                                            <h4>R$ ${produto.price}</h4>
                                                            <a href="/produto/${produto.id}" class="btn btn-primary">Comprar</a>
                                                        </div>
                                                    </div>
                                                </div>`;
                        // equivalente: lista_itens.innerHTML = lista_itens.innerHTML.concat(`<div class="col-3">...
                    })
                })
            }
}
// produto_id
// Carregar a url da api 

fetch(`https://fakestoreapi.com/products/${produto_id}`)
    .then(
        (response) => response.json())
    .then(
        produto => {
            console.log(produto)
            let elemento_titulo = document.querySelector('#titulo')
            elemento_titulo.innerHTML = produto.title;

            let elemento_imagem = document.querySelector('#imagem')
            elemento_imagem.src = produto.image;

            let elemento_descricao = document.querySelector('#descricao')
            elemento_descricao.innerHTML = produto.description;

            let elemento_preco = document.querySelector('#preco')
            elemento_preco = produto.preco

            let elemento_add_carrionho = document.querySelector('#adicionar_carrinho')
            elemento_add_carrionho.href = "/produto/"+produto.id

            // let elemento = document.querySelector('#produto')
            // elemento.innerHTML = `
            // <div class="card my-5">
            //     <div class="card-header">
            //         <h3 class="card-title">${produto.title}</h3>
            //     </div>
            //     <div class="card-body">
            //         <div class="row">
            //             <div class="col-6">
            //                 <img class="card-img" src="${produto.image}" width="100" height="400" />
            //             </div>
            //             <div class="col-6">
            //                 <p>${produto.description}</p>

            //                 <h4>R$ ${produto.price}</h4>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="card-footer text-right">
            //         <a href="/produto/${produto.id}" class="btn btn-outline-primary">+ Adicionar ao carrinho</a>
            //     </div>
            // </div>
            // `
        }
    )

