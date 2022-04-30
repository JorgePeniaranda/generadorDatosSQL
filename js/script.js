/* Lista de opciones con sus Values */

var opciones = ['Apellido', 'Calle', 'Codigo Seguridad Tarjeta', 'Codigo de Area', 'Compañia', 'Correo', 'Dia de la Semana', 'Dinero', 'Dirección', 'Dominio', 'Edad', 'Estado', 'Expiración Tarjeta', 'Fecha', 'Genero', 'Nombre', 'Numero Random', 'Numero Social', 'Numero Tarjeta', 'Pagina', 'Palabra', 'Pin de Seguridad', 'Profesión', 'Telefono', 'Tipo de Tarjeta'];
var opcionesValue = ["last", "street", "zip", "areacode", "company", "email", "weekday", "dollar", "address", "domain", "age", "state", "exp", "birthday", "gender", "first", "prime", "cf", "cc", "url", "word", "bb_pin", "profession", "phone", "cc_type"];;

/* Agrega primer Select */

agregarOpcion();

document.getElementById("plusButton").addEventListener("click", event =>{
  agregarOpcion();
})

document.getElementById('checkboxAI').addEventListener( 'change', function() {
  if(this.checked) document.getElementById('inputAI').disabled = false;
  else document.getElementById('inputAI').disabled = true;
});

/* Agregar Select */

function agregarOpcion(params) {
  var selectOptionHTML = document.createElement("div");
  selectOptionHTML.id = "select";
  var opcionesHTML = "<select name='opBD[]'><option hidden></option>";
  
  for (let i = 0; i < opciones.length; i++) {
    opcionesHTML += "<option value='" + opcionesValue[i] + "''>" + opciones[i] + "</option>";
  }

  selectOptionHTML.innerHTML += opcionesHTML + "</select></div>";
  document.getElementById("datosTabla__Options").appendChild(selectOptionHTML);
}