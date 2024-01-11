//buscar os elementos com a ID my-modal no DOM
const modal = document.querySelector('#my-modal');
//buscar os elementos com a ID modal-btn no DOM
const modalBtn = document.querySelector('#modal-btn');
//busca os elementos com a class .close no DOM
const closeBtn = document.querySelector('.close');

//adiciona eventos de clique para invocar as funções para abrir e fechar o modal
modalBtn.addEventListener('click', () => (modal.style.display = 'block'));
closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

//fecha o modal se clicarmos fora do modal
window.addEventListener('click', (e) => {
    if (e.target == modal){
        modal.style.display = 'none';
    }
});