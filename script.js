var agregarButton = document.getElementById("plusButton");
var opciones = ["Nombre","Edad","Dirección","Dia"];
var selectOptionHTML = "<div class='select'><select><option hidden></option>";
opciones.forEach(element => {
  selectOptionHTML += "<option value='" + element + "''>" + element + "</option>"
});
selectOptionHTML += "</select></div>"
document.getElementById("datosTabla__Options").innerHTML += selectOptionHTML;

agregarButton.addEventListener("click", event =>{
  document.getElementById("datosTabla__Options").innerHTML += selectOptionHTML;
})



var cantidadDatos = 0;
for (let i = 0; i < cantidadDatos; i++) {
    document.write("insert into Empleados values(" +
    "'"+ i + "'" + ", " +
    "'"+ chance.last().replace("'", ' ') + "'" + ", " +
    "'"+ generateCargo() + "'" + ", " +
    "'"+ chance.county().replace("'", ' ') + " " + getRandomArbitrary(1, 10000) + "'" + ", " +
    "'"+ getRandomArbitrary(2020, 2022)  + "/" + getRandomArbitrary(1, 12) + "/" + getRandomArbitrary(1, 20) + "'" + ", " +
    "'"+ getRandomArbitrary(0, 1000000) + "'" + ", " +
    "'"+ getRandomArbitrary(0, 100000) + "'" + ", " +
    "'"+ getRandomArbitrary(0, 10) + "'" 
    + ")");
    document.write("</br></br>")
}


function generateCargo() {
	var cargos = ["Doctor","Enfermero","Farmaceutico","Dentista","Trabajador Social","Psicologo","Psquiatra","Consejeros","Educador de pacientes","Terapeuta","Fisioterapeuta","Terapeuta del Habla"]
	var rand_first = Math.floor(Math.random()*cargos.length); 
	return cargos[rand_first];
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }