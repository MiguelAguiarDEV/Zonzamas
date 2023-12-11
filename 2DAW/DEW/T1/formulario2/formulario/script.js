
const buttonGetFromJson = document.getElementById('getFromJson');
const buttonGetFromPhp = document.getElementById('getFromPhp');
const buttonPost = document.getElementById('post');
const buttonPostToBd = document.getElementById('postToBd');
const buttonGetFromBd = document.getElementById('getFromBd');

const validationRules = {
    nombre: {
        regex: /^[A-Z][a-zA-Z]*$/,
        error: 'El nombre debe comenzar con una letra mayúscula y solo contener letras'
    },
    apellidos: {
        regex: /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/,
        error: 'Los apellidos deben ser dos palabras, cada una comenzando con una letra mayúscula y solo conteniendo letras'
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

function validateField(field, value) {
    const rule = validationRules[field];
    if (!rule.regex.test(value)) {
        document.getElementById(field + 'Error').textContent = rule.error;
        document.getElementById(field).classList.add('invalid');
        document.getElementById(field + 'Error').classList.add('visible');
        return false;
    } else {
        document.getElementById(field + 'Error').textContent = '';
        document.getElementById(field).classList.remove('invalid');
        document.getElementById(field + 'Error').classList.remove('visible');
        return true;
    }
}

const fields = Object.keys(validationRules);

// Agrega un controlador de eventos 'keyup' a cada campo
for (let field of fields) {
    document.getElementById(field).addEventListener('keyup', function() {
        validateField(field, this.value);
    });
}

function validateAll() {
    let allValid = true;
    for (let field of fields) {
        if (!validateField(field, document.getElementById(field).value)) {
            allValid = false;
        }
    }
    return allValid;
}

function clearAll() {
    for (let field of fields) {
        document.getElementById(field).value = '';
    }
}


//Verificar que las contraseñas coinciden
document.getElementById('repetirContrasena').addEventListener('keyup', function() {
    const password = document.getElementById('contrasena').value;
    const confirmPassword = document.getElementById('repetirContrasena').value;

    if (password !== confirmPassword) {
        document.getElementById('repetirContrasenaError').textContent = 'Las contraseñas no coinciden';
        document.getElementById('repetirContrasena').classList.add('invalid');
    } else {
        document.getElementById('repetirContrasenaError').textContent = '';
        document.getElementById('repetirContrasena').classList.remove('invalid');
    }
});


function getFromJson() {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fillAll(data);
        });
}


function getFromPhp() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var data = JSON.parse(this.responseText);
            fillAll(data);
        }
    };
    xmlhttp.open("GET", "http://localhost/formulario/server.php", true);
    xmlhttp.send();
}


function fillAll(data) {
    for (let field of fields) {
        document.getElementById(field).value = data[field];
    }
    document.getElementById('repetirContrasena').value = data['contrasena'];
}



buttonGetFromJson.addEventListener('click', getFromJson);
buttonGetFromPhp.addEventListener('click', getFromPhp);



