<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/ico.png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/codigoGenerarDatos.css">
    <script src="js/chance.js"></script>
    <title>Codigo</title>
</head>
<body>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="./index.html">
      <img src="img/ico.png" class="d-inline-block align-top" id="icon">
      data<span style="color: #efb810;">Ramdom</span>
    </a>
  </nav>
  <main>
      <div id="topMain">
          <p id="volver" class="botones" title="Volver">&#x2ba2</p>
          <h1>Codigo</h1>
          <p id="copiar" class="botones" title="Copiar">&#x1f4cb;&#xfe0e;</p>
      </div>
      <div id="codigo"><?php
        if (isset($_GET["opBD"]) && isset($_GET["cantFilas"])) { 
            $opcionesSeleccionadas = $_GET["opBD"];
            $cantidadFilas = $_GET["cantFilas"];
            if (isset($_GET["AI_Min"]) && isset($_GET["AI"]) && $_GET["AI_Min"] != '') $AI_Min = $_GET["AI_Min"];
            else $AI_Min = 0;
        
            for ($i = 0; $i < $cantidadFilas; $i++) {
                echo("insert into Empleados values(");
                if (isset($_GET["AI"])) {
                    echo "'", $i + $AI_Min , "', ";
                }
                for ($a=0; $a < count($opcionesSeleccionadas); $a++) {
                    if ($opcionesSeleccionadas[$a] == "birthday") echo "'<script class='script'>document.write(chance.birthday({string: true, american: false}))</script>'";
                    else if ($opcionesSeleccionadas[$a] == "phone") echo "'11 ", rand(1111, 9999), " " , rand(1111, 9999), "'";
                    else if ($opcionesSeleccionadas[$a] == "domain") echo "'<script class='script'>document.write(chance.domain({tld: 'com'}))</script>'";
                    else echo "'<script class='script'>document.write(chance.$opcionesSeleccionadas[$a]())</script>'";
                    if ($a != count($opcionesSeleccionadas) - 1) echo ",";
                }
                echo ");<br><br>";
            }
        }
        ?>
      </div>
  </main>
</body>
<script src="js/bootstrap.js"></script>
<script src="js/codigo.js"></script>
</html>