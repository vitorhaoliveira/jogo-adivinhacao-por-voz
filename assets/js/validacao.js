function verificaChute(chute) {
   const numero = +chute;

   if (chuteInvalido(numero)) {
      elementoChute.innerHTML += '<div>Não é um número, diga um número.</div>';
      return;
   }

   if (numeroFora(numero)) {
      elementoChute.innerHTML += '<div>Valor inválido: valor fora do que foi pedido</div>';
      return;
   }

   if (numero === numeroSecreto) {
      document.getElementById('main-box').innerHTML = `
         <h1>Você acertou!</h1>
         <h3>O número secreto era ${numeroSecreto}</h3>

         <button id="jogar-novamente" class="jogar-bt">Jogar novamente</button>
      `
   } else if (numero < numeroSecreto) {
      elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
      ` 
   } else {
      elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
      ` 
   }

}

function chuteInvalido(numero) {
   return Number.isNaN(numero);
}

function numeroFora(numero) {
   return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
   if (e.target.id == 'jogar-novamente') {
      window.location.reload();
   }
})