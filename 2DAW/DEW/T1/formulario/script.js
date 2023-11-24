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

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let allValid = true;

    for (let field of fields) {
        const input = document.getElementById(field);
        const isValid = validateField(field, input.value);
        if (!isValid) {
            allValid = false;
        }
    }

    if (allValid) {
        const data = {};
        for (let field of fields) {
            data[field] = document.getElementById(field).value;
        }
        localStorage.setItem('registrationData', JSON.stringify(data));
    
        // Vaciar los campos del formulario
        for (let field of fields) {
            document.getElementById(field).value = '';
        }
    } 

});

document.getElementById('recuperar').addEventListener('click', function() {
    const data = JSON.parse(localStorage.getItem('registrationData'));
    if (data) {
        for (let field in data) {
            document.getElementById(field).value = data[field];
        }
    }
});

// Check if passwords match
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


function fillTestUser() {
    // Crear un usuario de prueba
    
    const testUser = {
        nombre: 'Juan',
        apellidos: 'Perez Gomez',
        dni: '12345678A',
        fechaNacimiento: '01/01/2000',
        codigoPostal: '12345',
        email: 'juan@test.com',
        telefonoFijo: '912345678',
        telefonoMovil: '612345678',
        iban: 'ES12 3456 7890 1234 5678 9012',
        tarjetaCredito: '1234 5678 9012 3456',
        contrasena: 'Password123!',
        repetirContrasena: 'Password123!'
    };

    // Llenar los campos del formulario con los datos del usuario de prueba
    for (let field in testUser) {
        document.getElementById(field).value = testUser[field];
    }
    console.log('Test user filled');
}

document.getElementById('fillTestUserButton').addEventListener('click', fillTestUser);

// Verificar si localStorage tiene algún dato
if (localStorage.length > 0) {
    // Crear un nuevo botón
    let clearButton = document.createElement('button');
    clearButton.classList =('btn','btn-clear');
    clearButton.innerHTML = 'Vaciar Local Storage';
    
    // Agregar un evento de clic al botón
    clearButton.addEventListener('click', function() {
        // Vaciar el almacenamiento local
        localStorage.clear();
        // Eliminar el botón después de vaciar el almacenamiento local
        clearButton.remove();
        // Refrescar la página
        location.reload();
    });

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(clearButton);
} else {
    let recoverButton = document.getElementById('recuperar');
    console.log(recoverButton);
    // Ocultar el botón de recuperación
    recoverButton.style.display = 'none';
}