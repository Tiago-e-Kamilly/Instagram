const dataCasamento = new Date("Dec 15, 2026 00:00:00").getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerHTML = dias + " dias 💍";
}, 1000);
function marcarComprado(botao) {
  const card = botao.parentElement;

  card.style.opacity = "0.5";
  botao.innerText = "✔ Comprado";
  botao.disabled = true;
}
function marcarComprado(botao) {
  const card = botao.parentElement;

  card.style.opacity = "0.5";
  botao.innerText = "✔ Contribuído";
  botao.disabled = true;
}