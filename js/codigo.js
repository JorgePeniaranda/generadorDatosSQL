for (let i = 0; i < document.getElementsByClassName("script").length; i++) {
  document.getElementsByClassName("script")[i].innerHTML = null
}

document.getElementById("copiar").addEventListener( 'click', function() {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("codigo").textContent);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Copiado");
});
document.getElementById("volver").addEventListener( 'click', function() {
  location.href = './index.html';
});