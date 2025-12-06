function redirecionar(pagina) {    
    window.location.href = `/${pagina}.html`;
    console.log(`direcionou para: ${pagina}`)
}

function voltar() {
    history.back();
}

function iniciarCarregamento() {
  const loading = document.getElementById('loading');

  // Exibe a animação de carregamento
  loading.style.display = 'flex';

  // Depois de 3 segundos, chama a função de redirecionamento
  setTimeout(function() {
    console.log("acabou");
    loading.style.display = 'none'; // Esconde a animação
    redirecionar('app'); // Chama a função redirecionar
  }, 2500);
}
