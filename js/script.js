const botoes = document.querySelectorAll("#botoes > button");
let botaoSelecionado = botoes[0];


for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    botaoSelecionado.classList.remove("selected");
    botaoSelecionado = this;
    botaoSelecionado.classList.add("selected");
  });
}
