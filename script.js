const botao = document.querySelector(".botao");

if (botao) {
  const total = document.querySelector(".total");
  botao.addEventListener("click", somar);
  function somar() {
    if (total.innerHTML < 10) {
      total.innerHTML = parseInt(total.innerHTML) + 1;
    } else {
      console.log("maior que 10");
    }
  }
} else {
  console.log(" nn existe");
}
