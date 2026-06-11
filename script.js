// FORMULÁRIO

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){

        resultado.style.color = "red";
        resultado.innerHTML =
        "Preencha todos os campos.";

        return;
    }

    resultado.style.color = "green";
    resultado.innerHTML =
    `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    formulario.reset();
});


// CONTADORES ANIMADOS

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo =
        +contador.getAttribute("data-target");

        const atual =
        +contador.innerText;

        const incremento =
        alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar, 30);

        }else{

            contador.innerText = alvo;
        }
    };

    atualizar();
});


// EFEITO AO ROLAR A PÁGINA

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "#1b5e20";

    }else{

        header.style.background =
        "#2e7d32";
    }

});