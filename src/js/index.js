// Esse é um comentário

const casas = document.querySelectorAll('.casa');

console.log(casas)

casas.forEach(casa => {
    casa.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0,behavior: 'smooth'});
        }

        removerSelecaoDaCasa();
        casa.classList.add('selecionada');

        alterarImagemBrasaoSelecionado(casa);

        alterarNomeCasaSelecionada(casa);
        
        alterarDescricaoCasaSelecionada(casa);
    })
});

function alterarDescricaoCasaSelecionada(casa) {
    const descricaoCasa = document.getElementById('descricao-casa');
    descricaoCasa.innerText = casa.getAttribute('data-description');
}

function alterarNomeCasaSelecionada(casa) {
    const nomeCasa = document.getElementById('nome-casa');
    nomeCasa.innerText = casa.getAttribute('data-name');
}

function alterarImagemBrasaoSelecionado(casa) {
    const imgBrasao = document.querySelector('.brasao-casa');
    const idCasa = casa.attributes.id.value;
    imgBrasao.src = `./src/img/${idCasa}.png`;
}

function removerSelecaoDaCasa() {
    const casaSelecionada = document.querySelector('.selecionada');
    casaSelecionada.classList.remove('selecionada');
}
