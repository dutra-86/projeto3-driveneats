var prato = 'none';
var bebida = 'none';
var sobremesa = 'none';

function selecionar(classe,item){
    
    document.querySelectorAll(`.${classe}`)[0].classList.remove("selecionado");
    document.querySelectorAll(`.${classe}`)[1].classList.remove("selecionado");
    document.querySelectorAll(`.${classe}`)[2].classList.remove("selecionado");

    if (document.querySelector(`.${item}`).classList.contains("prato")){
        prato = document.querySelector(`.${item}`).textContent;
    }

    document.querySelector(`.${item}`).classList.add("selecionado");

    if(prato != 'none'){
        document.querySelector(`.fechar_pedido`).classList.add("hidden");
    }
}