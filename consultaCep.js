function consultarCep() {
  const cep = document.querySelector("#cep").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resultado) => {
      const dados = resultado.json().then((dados) => {
        exibirCep(dados);
      });
    })
    .catch((erro) => {
      console.log(erro);
    });

}

function exibirCep(dados) {
  const container = document.querySelector(".result-container");
  const resultado = document.createElement("div");
  container.textContent = "";
  resultado.innerHTML = `
        <div class="info">
            <h1>CEP:</h1>
            <p id="cep">${dados.cep}</p>
          </div>
          <div class="info">
            <h1>Cidade:</h1>
            <p id="cidade">${dados.localidade}</p>
          </div>
          <div class="info">
            <h1>Estado:</h1>
            <p id="estado">${dados.uf}</p>
        </div>
    `;
    container.appendChild(resultado)
}
