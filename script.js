var prato = 'none';
var bebida = 'none';
var sobremesa = 'none';
var precos = [0,0,0]

function selecionar(classe,item){
    
    document.querySelectorAll(`.${classe}`)[0].classList.remove("selecionado");
    document.querySelectorAll(`.${classe}`)[1].classList.remove("selecionado");
    document.querySelectorAll(`.${classe}`)[2].classList.remove("selecionado");

    if (document.querySelector(`.${item}`).classList.contains("prato")){
        //prato = document.querySelector(`#${item} div:nth-child(2)`).innerHTML;
        if (document.querySelector(`.${item}`).classList.contains("a")){
            prato = "Frango Yin Yang";
            precos[0] = 14.9;
        }
        if (document.querySelector(`.${item}`).classList.contains("b")){
            prato = "Sanduíche de copo";
            precos[0] = 67.5;
        }
        if (document.querySelector(`.${item}`).classList.contains("c")){
            prato = "Octopus Sandwich";
            precos[0] = 98.8
        }
    }
    if (document.querySelector(`.${item}`).classList.contains("bebida")){
        //prato = document.querySelector(`#${item} div:nth-child(2)`).innerHTML;
        if (document.querySelector(`.${item}`).classList.contains("d")){
            bebida = "Coquinha gelada";
            precos[1] = 4.9;
        }
        if (document.querySelector(`.${item}`).classList.contains("e")){
            bebida = "Corote";
            precos[1] = 78.0;
        }
        if (document.querySelector(`.${item}`).classList.contains("f")){
            bebida = "Coca-Cola alho";
            precos[1] = 12.3;
        }
    }
    if (document.querySelector(`.${item}`).classList.contains("sobremesa")){
        //prato = document.querySelector(`#${item} div:nth-child(2)`).innerHTML;
        if (document.querySelector(`.${item}`).classList.contains("g")){
            sobremesa = "Pudim";
            precos[2] = 7.9;
        }
        if (document.querySelector(`.${item}`).classList.contains("h")){
            sobremesa = "Miojo de chocolate";
            precos[2] = 1.5;
        }
        if (document.querySelector(`.${item}`).classList.contains("i")){
            sobremesa = "Rosquinha de camarão";
            precos[2] = 31.4;
        }
    }

    document.querySelector(`.${item}`).classList.add("selecionado");
    
    if(prato != 'none' && bebida != 'none' && sobremesa != 'none'){
        document.querySelector(`.fechar_pedido`).classList.add("hidden");
        document.querySelector(`.fechar_pedido_valid`).classList.remove("hidden");
    }
}

function fechar(){
    document.querySelector(`.produto1`).innerHTML = prato;
    document.querySelector(`.preco1`).innerHTML = precos[0].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.querySelector(`.produto2`).innerHTML = bebida;
    document.querySelector(`.preco2`).innerHTML = precos[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.querySelector(`.produto3`).innerHTML = sobremesa;
    document.querySelector(`.preco3`).innerHTML = precos[2].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.querySelector(`.p_total`).innerHTML = (precos[0]+precos[1]+precos[2]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.querySelector(`.confirmar_pedido`).classList.remove("hidden");
}

function cancelar(){
    document.querySelector(`.confirmar_pedido`).classList.add("hidden");
}