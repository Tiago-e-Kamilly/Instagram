const dataCasamento = new Date("Nov 20, 2027 18:30:00").getTime();
const contador = document.getElementById("contador");

setInterval(() => {

  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((distancia / (1000 * 60)) % 60);
  const segundos = Math.floor((distancia / 1000) % 60);

  contador.innerHTML = `
    <div><strong>${dias}</strong><br>Dias</div>
    <div><strong>${horas}</strong><br>Horas</div>
    <div><strong>${minutos}</strong><br>Min</div>
    <div><strong>${segundos}</strong><br>Seg</div>
  `;

}, 1000);

function marcar(botao) {
  const item = botao.parentElement;
  item.style.opacity = "0.5";
  botao.innerText = "✔ Contribuído";
  botao.disabled = true;
}
