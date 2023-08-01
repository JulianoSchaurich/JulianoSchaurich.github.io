function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function copiarEmail() {
    var textoCopiado = "schaurich.jmsj@gmail.com"
    navigator.clipboard.writeText(textoCopiado);

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    sleep(1500).then(() => { popup.classList.toggle("show"); });
  }