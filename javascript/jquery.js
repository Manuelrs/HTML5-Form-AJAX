$(document).ready(function () {
    $("#boton").click(validarDatos);
});

function validarDatos() {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();

    if (nombre == "" || !isNaN(nombre)) {
	$("#nombre").css("backgroundColor", "#f7cac9");
	$("#error").css("display", "block");
    } else {
	$("#nombre").css("backgroundColor", "white");
	$("#error").css("display", "none");

	if (apellido == "" || !isNaN(apellido)) {
	    $("#apellido").css("backgroundColor", "#f7cac9");
	    $("#error").css("display", "block");
	} else {
	    $("#apellido").css("backgroundColor", "white");
	    $("#error").css("display", "none");

	    if (asunto == "") {
		$("#asunto").css("backgroundColor", "#f7cac9");
		$("#error").css("display", "block");
	    } else {
		$("#asunto").css("backgroundColor", "white");
		$("#error").css("display", "none");

		if (mensaje == "") {
		    $("#mensaje").css("backgroundColor", "#f7cac9");
		    $("#error").css("display", "block");
		} else {
		    $("#mensaje").css("backgroundColor", "white");
		    $("#error").css("display", "none");

		    $("#validado").css("display", "block");
		    $(".contenedorResultados").css("display", "block");


		    //Recuperar AJAX 

		    $(function () {
			console.log("Página cargada");			
			    //console.log("Pulsado");
			    $.post("php/php.php",
				    {"nombre": $("#nombre").val(),
				     "apellido": $("#apellido").val(),
				     "asunto": $("#asunto").val(),
				     "mensaje": $("#mensaje").val()},
				    function (data) {
					//console.log("resultado " + data);
					var objeto = JSON.parse(data);					
					for (value in objeto) {
					    console.log(objeto[value]);
					  $('.resultados').append(value+" "+objeto[value]+"<br/>");
					}
					
				    });
			    
		    });

		    //
		}

	    }

	}

    }


}




