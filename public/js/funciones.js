function cargarEspecialidad() {
    var URL = "http://localhost/wsdl/index.php?wsdl";
    var mensaje = '';
    mensaje += '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">';
    mensaje += '<Body>';
    mensaje += '<lista_especialidades xmlns="urn:server"/>';
    mensaje += '</Body>';
    mensaje += '</Envelope>';
    $.ajax({
        url: URL,
        type: 'POST',
        contentType: 'text/xml',
        data: mensaje,
        dataType: 'xml',
        success: function (data, textStatus, jqXHR)
        {
            var xml = jqXHR.responseXML;
            var xmlData = $.parseXML(xml);
            var opciones = '';
            $(xml).text(xmlData).find("item").each(function ()
            {
                // var id = $(this).find("id").text();
                var nombre = $(this).find("nombre").text();
                opciones += " <option value = '" + nombre + "'>" + nombre + "</option> ";
                console.log(nombre);
            });
            $('#especialidad').html(opciones);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log(jqXHR.responseText);
        }
    });
}
function cargarMedicos() {
    $.ajax({
        url: "http://localhost/wsdl/restfull.php/listar_medico",
        type: 'GET',
        headers: {'api-token': localStorage["token"]},
        dataType: 'json',
        success: function (data, textStatus, jqXHR)
        {
            console.log(data);
            if (data.codigo)
            {
                manejoErroresJson(data.message, data.codigo)
            } else
            {
                var tabla = '';
                $.each(data, function (index, item)
                {

                    tabla += '<tr>';
                    tabla += '<td>' + (index + 1) + '</td>';
                    tabla += '<td>' + item.cedula + '</td>';
                    tabla += '<td>' + item.nombre + '</td>';
                    tabla += '<td>' + item.especialidad + '</td>';
                    tabla += '<td>' + item.correo + '</td>';
                    tabla += '</tr>';
                });
                $("#tabla tbody").html(tabla);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
}

function cargarPacientes() {
    $.ajax({
        url: "http://localhost/wsdl/restfull.php/listar_paciente",
        type: 'GET',
        headers: {'api-token': localStorage["token"]},
        dataType: 'json',
        success: function (data, textStatus, jqXHR)
        {
            if (data.codigo)
            {
                manejoErroresJson(data.message, data.codigo)
            } else
            {
                var tabla = '';
                $.each(data, function (index, item)
                {
                    var mostrar = $.param(item);
                    tabla += '<tr>';
                    tabla += '<td>' + (index + 1) + '</td>';
                    tabla += '<td>' + item.cedula + '</td>';
                    tabla += '<td>' + item.nombres + " " + item.apellidos + '</td>';
                    tabla += '<td>' + item.fecha_nac + '</td>';
                    tabla += '<td>' + item.genero + '</td>';
                    tabla += '<td>' + item.direccion + '</td>';
                    tabla += '<td>' + item.celular + '</td>';
                    tabla += '<td>' + item.habitos + '</td>';
                    tabla += '<td>' + item.enfermedades + '</td>';
                    tabla += '<td>' + item.enferm_heder + '</td>';
                    tabla += '<td> <a class="btn btn-success" href="#"  style="margin-left: 5%" data-placement="top" data-toggle="modal" data-target="#modalLRForm" title="Editar"  onclick="PacientesEditar(' + "'" + mostrar + "'" + ');"><span class="glyphicon glyphicon-pencil">Editar</span></a></td>';
                    tabla += '</tr>';
                });
                $("#tabla tbody").html(tabla);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
}
function PacientesEditar(data) {
    var datos = JSON.parse('{"' + data.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
        return key === "" ? value : decodeURIComponent(value)
    });
    console.log(datos);
    $("#apellidos").val(datos.apellidos);
    $("#nombres").val(datos.nombres);
    $("#fecha").val(datos.fecha_nac);
    $("#direccion").val(datos.direccion);
    $("#sexo").val(datos.genero);
    var auxiEdad = calcularEdad($("#fecha").val());
    $("#edad").val(auxiEdad);
    $("#celular").val(datos.celular);
    $("#habitos").val(datos.habitos);
    $("#enfermedades").val(datos.enfermedades);
    $("#enfermedades_h").val(datos.enferm_heder);
    $("#cedula").val(datos.cedula);
    $("#telefono").val(datos.telefono);
    $("#external").val(datos.external);
}
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate()))
    {
        edad--;
    }
    //console.log("TIENES: " + edad + " ANIOS")
    return edad;
}
function validarCedula(cedula) {
    var cad = cedula.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if (cad !== "" && longitud === 10)
    {
        for (i = 0; i < longcheck; i++)
        {
            if (i % 2 === 0)
            {
                var aux = cad.charAt(i) * 2;
                if (aux > 9)
                    aux -= 9;
                total += aux;
            } else
            {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            return true;
        } else {
            return false;
        }
    }
}
function manejoErrores(xml) {
    var xmlData = $.parseXML(xml);
    var error = $(xml).find("faultstring").text();
    //console.log(error);
    var mensaje = '<div class="alert alert-danger">';
    mensaje += error;
    mensaje += '</div>';
    $("#error").html(mensaje);
}
function verificarInicioSesion() {
    if (localStorage["token"] != null)
    {
        location.href = "inicio.html";
    }
}
function verificarNoInicioSesion() {
    if (localStorage["token"] == null)
    {
        location.href = "login.html";
    }
}
function cerrar_sesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("external");
    location.href = "login.html";
}

function validarCedula(cedula) {
    var cad = cedula.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9)
                    aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if(cad.charAt(longitud - 1) == total) {
            return true;
        } else {
            return false;
        }
    }
    }