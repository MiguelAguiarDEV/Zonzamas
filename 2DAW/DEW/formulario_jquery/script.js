
const buttonGetFromJson = $('#getFromJson');
const buttonGetFromPhp = $('#getFromPhp');
const buttonPostToPhp = $('#postToPhp');
const buttonPostToBd = $('#postToBd');
const buttonGetFromBd = $('#getFromBd');
const inputDniSearch = $('#dniSearch');

const validationRules = {
    nombre: {
        regex: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ]*$/,
        error: 'El nombre debe comenzar con una letra mayúscula y solo contener letras, incluyendo tildes'
    },
    apellidos: {
        regex: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ]*\s[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ]*$/,
        error: 'Los apellidos deben ser dos palabras, cada una comenzando con una letra mayúscula y solo conteniendo letras, incluyendo tildes'
    },
    dni: {
        regex: /^[0-9]{8}[A-Z]$/,
        error: 'El DNI debe tener 8 números seguidos de una letra mayúscula'
    },
    fechaNacimiento: {
        regex: /^\d{2}\/\d{2}\/\d{4}$/,
        error: 'La fecha de nacimiento debe estar en formato DD/MM/AAAA'
    },
    codigoPostal: {
        regex: /^\d{5}$/,
        error: 'El código postal debe tener exactamente 5 números'
    },
    email: {
        regex: /^\S+@\S+\.\S+$/,
        error: 'El email debe tener el formato usuario@dominio.extension'
    },
    telefonoFijo: {
        regex: /^9\d{8}$/,
        error: 'El teléfono fijo debe comenzar por 9 y tener 9 dígitos en total'
    },
    telefonoMovil: {
        regex: /^6\d{8}$/,
        error: 'El teléfono móvil debe comenzar por 6 y tener 9 dígitos en total'
    },
    iban: {
        regex: /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
        error: 'El IBAN debe tener el formato ESXX XXXX XXXX XXXX XXXX XXXX'
    },
    tarjetaCredito: {
        regex: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
        error: 'La tarjeta de crédito debe tener 16 dígitos, agrupados de 4 en 4'
    },
    contrasena: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
        error: 'La contraseña debe tener al menos 12 caracteres, incluyendo al menos una letra, un número y un carácter especial'
    },
    repetirContrasena: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/,
        error: 'Las contraseñas deben coincidir'
    }
};

function validateField(field, value,rule) {
    rule = validationRules[rule];
    if (!rule.regex.test(value)) {
        $('#' + field + 'Error').text(rule.error);
        $('#' + field).addClass('invalid');
        $('#' + field + 'Error').addClass('visible');
        return false;
    } else {
        $('#' + field + 'Error').text('');
        $('#' + field).removeClass('invalid');
        $('#' + field + 'Error').removeClass('visible');
        return true;
    }
}

const fields = Object.keys(validationRules);

// Agrega un controlador de eventos 'keyup' a cada campo
// for (let field of fields) {
//     document.getElementById(field).addEventListener('keyup', function() {
//         validateField(field, this.value, field);
//     });
// }

// Agrega un controlador de eventos 'keyup' a cada campo
for (const field of fields) {
    $('#' + field).on('keyup', function() {
        
        validateField(field, $(this).val(), field);
    });
    console.log('keyup', field);
}

function validateAll() {
    let allValid = true;
    for (let field of fields) {
        if (!validateField(field, $('#' + field).val(), field)) {
            allValid = false;
        }
    }
    return allValid;
}

function clearAll() {
    for (let field of fields) {
        $('#' + field).val('');
    }
}

function getAll() {
    let data = {};
    for (let field of fields) {
        data[field] = $("#" + field).val();
    }
    return data;
}

function fillAll(data) {
    for (let field of fields) {
        $('#' + field).val(data[field]);
    }
    $('#repetirContrasena').val(data['contrasena']);
}

//Verificar que las contraseñas coinciden
$('#repetirContrasena').on('keyup', function() {
    const password = $('#contrasena').val();
    const confirmPassword = $('#repetirContrasena').val();

    if (password !== confirmPassword) {
        $('#repetirContrasenaError').text('Las contraseñas no coinciden');
        $('#repetirContrasena').addClass('invalid');
    } else {
        $('#repetirContrasenaError').text('');
        $('#repetirContrasena').removeClass('invalid');
    }
});

function getFromJson() {
    console.log('getFromJson');
    $.getJSON('datos.json', function(data) {
        console.log(data);
        fillAll(data);
    });
}

function getFromPhp() {
    $.getJSON('http://localhost/formulario/server.php', function(data) {
        console.log(data);
        fillAll(data);
    })
    .fail(function(error) {
        console.error('Error:', error);
    });
}

function postToPhp() {
    var datos = getAll();
    var dbParam = JSON.stringify({ x: datos });

    $.ajax({
        url: 'server.php',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        data: 'x=' + encodeURIComponent(dbParam),
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}

function getFromBd() {
    if (validateField('dniSearch', inputDniSearch.val(), 'dni')) {
        var dniSearch = {
            'dni': inputDniSearch.val()
        };

        $.ajax({
            url: 'bd.php?' + $.param(dniSearch),
            type: 'GET',
            contentType: 'application/x-www-form-urlencoded',
            success: function(data) {
                console.log(data);
                if (!JSON.parse(data).error) {
                    fillAll(JSON.parse(data));
                } else {
                    $('#dniSearchError').text('El usuario no existe');
                    $('#dniSearch').addClass('invalid');
                    $('#dniSearchError').addClass('visible');
                    console.error('Error:', error);
                }
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('DNI no válido');
    }
}

function postToBd() {
    var jsonDataString = JSON.stringify(getAll());

    $.ajax({
        url: 'bd.php',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        data: 'json=' + encodeURIComponent(jsonDataString),
        success: function(data) {
            console.log(data);
            clearAll();
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}



buttonGetFromJson.click(function (){
    console.log("Se pulso")
    getFromJson();
});
buttonGetFromPhp.click(function (){
    console.log("Se pulso")
    getFromPhp();
});
buttonPostToPhp.click(function (){
    console.log("Se pulso")
    postToPhp();
});
buttonPostToBd.click(function (){
    console.log("Se pulso")
    postToBd();
});
buttonGetFromBd.click(function (){
    console.log("Se pulso")
    getFromBd();
});


