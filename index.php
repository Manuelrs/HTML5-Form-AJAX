<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
	<link rel="stylesheet" href="css/stylesheet.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="javascript/jquery.js" type="text/javascript"></script>	
	
    </head>
    <body>
	<div class="contenedor">
	    <div class="formulario">
		<h1>Contacto</h1>
		<p>Por favor, rellena todos los campos</p>
		<p id="error">Valor no válido<p>
		<form>
		    <input type="text" id="nombre" placeholder="Nombre">
		    <input type="text" id="apellido" placeholder="Apellido">		    
		    <input type="text" id="asunto" placeholder="Asunto">		    
		    <textarea id="mensaje" cols="30" rows="8" placeholder="Mensaje"></textarea>		    
		    <input type="button" id="boton" value="Enviar">
		    <p id="validado">Mensaje enviado<p>
		    
		</form>
	    </div>

	</div>
	
	<div class="contenedorResultados">
	    <h3>Resultados</h3>
	    <div class="resultados"></div>
	</div>


    </body>
</html>


