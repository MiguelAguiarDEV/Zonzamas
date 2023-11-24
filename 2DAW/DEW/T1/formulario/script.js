document.addEventListener('DOMContentLoaded', function () {
    // Expresiones regulares
    const regexNombre = /^([A-ZÑÁÉÍÓÚ]+['\-]?[a-zñáéíóú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    const regexApellidos = /^([A-ZÑÁÉÍÓÚ]+['\-]?[a-zñáéíóú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]?[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    const regexDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    const regexFechaNacimiento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const regexCodigoPostal = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelefonoFijo = /^[89]\d{8}$/;
    const regexTelefonoMovil = /^[67]\d{8}$/;
    const regexIBAN = /^ES\d{22}$/;
    const regexTarjetaCredito = /^\d{16}$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    
    // Datos de ejemplo
    const datos = {
      nombre: "Juan",
      apellidos: "Gómez Pérez",
      dni: "12345678A",
      fechaNacimiento: "01/01/1990",
      codigoPostal: "28001",
      email: "juan@example.com",
      telefonoFijo: "912345678",
      telefonoMovil: "612345678",
      iban: "ES12345678901234567890",
      tarjetaCredito: "1234567890123456",
      password: "JuanPerez@123",
    };
    
    // Función para validar datos
    function validarDatos(datos) {
      for (const campo in datos) {
        if (datos.hasOwnProperty(campo)) {
          const regex = eval(`regex${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
          if (!regex.test(datos[campo])) {
            console.log(`Error en ${campo}: ${datos[campo]}`);
          }
        }
      }
    }
    
    // Validar los datos de ejemplo
    validarDatos(datos);
    
    // Campos del formulario
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const dniInput = document.getElementById('dni');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const codigoPostalInput = document.getElementById('codigoPostal');
    const emailInput = document.getElementById('email');
    const telefonoFijoInput = document.getElementById('telefonoFijo');
    const telefonoMovilInput = document.getElementById('telefonoMovil');
    const ibanInput = document.getElementById('iban');
    const tarjetaCreditoInput = document.getElementById('tarjetaCredito');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    // Función para validar campo con evento keyup
    function validarCampoConEvento(input, regex, errorDiv) {
        input.addEventListener('keyup', function () {
            validarCampo(input, regex, errorDiv);
        });
    }

    // Agregar eventos keyup a cada campo
    validarCampoConEvento(nombreInput, regexNombre, document.getElementById('nombreError'));
    validarCampoConEvento(apellidosInput, regexApellidos, document.getElementById('apellidosError'));
    validarCampoConEvento(dniInput, regexDNI, document.getElementById('dniError'));
    validarCampoConEvento(fechaNacimientoInput, regexFechaNacimiento, document.getElementById('fechaNacimientoError'));
    validarCampoConEvento(codigoPostalInput, regexCodigoPostal, document.getElementById('codigoPostalError'));
    validarCampoConEvento(emailInput, regexEmail, document.getElementById('emailError'));
    validarCampoConEvento(telefonoFijoInput, regexTelefonoFijo, document.getElementById('telefonoFijoError'));
    validarCampoConEvento(telefonoMovilInput, regexTelefonoMovil, document.getElementById('telefonoMovilError'));
    validarCampoConEvento(ibanInput, regexIBAN, document.getElementById('ibanError'));
    validarCampoConEvento(tarjetaCreditoInput, regexTarjetaCredito, document.getElementById('tarjetaCreditoError'));
    validarCampoConEvento(passwordInput, regexPassword, document.getElementById('passwordError'));
    validarCampoConEvento(confirmPasswordInput, regexPassword, document.getElementById('confirmPasswordError'));

    function validarCampo(input, regex, errorDiv) {
        if (regex.test(input.value)) {
            input.style.borderColor = '';
            errorDiv.classList = 'error hidden';
            return true;
        } else {
            input.style.borderColor = 'red';
            errorDiv.classList = "error";
            console.log("Incorrecto")
            return false;
        }
    }

    function guardarDatos() {
        // Validar todos los campos antes de guardar
        if (
            validarCampo(nombreInput, regexNombre, document.getElementById('nombreError')) &&
            validarCampo(apellidosInput, regexApellidos, document.getElementById('apellidosError')) &&
            validarCampo(dniInput, regexDNI, document.getElementById('dniError')) &&
            validarCampo(fechaNacimientoInput, regexFechaNacimiento, document.getElementById('fechaNacimientoError')) &&
            validarCampo(codigoPostalInput, regexCodigoPostal, document.getElementById('codigoPostalError')) &&
            validarCampo(emailInput, regexEmail, document.getElementById('emailError')) &&
            validarCampo(telefonoFijoInput, regexTelefonoFijo, document.getElementById('telefonoFijoError')) &&
            validarCampo(telefonoMovilInput, regexTelefonoMovil, document.getElementById('telefonoMovilError')) &&
            validarCampo(ibanInput, regexIBAN, document.getElementById('ibanError')) &&
            validarCampo(tarjetaCreditoInput, regexTarjetaCredito, document.getElementById('tarjetaCreditoError')) &&
            validarCampo(passwordInput, regexPassword, document.getElementById('passwordError')) &&
            confirmPasswordInput.value === passwordInput.value
        ) {
            // Crear objeto JSON con los datos y guardar en localStorage
            const datosUsuario = {
                nombre: nombreInput.value,
                apellidos: apellidosInput.value,
                dni: dniInput.value,
                fechaNacimiento: fechaNacimientoInput.value,
                codigoPostal: codigoPostalInput.value,
                email: emailInput.value,
                telefonoFijo: telefonoFijoInput.value,
                telefonoMovil: telefonoMovilInput.value,
                iban: ibanInput.value,
                tarjetaCredito: tarjetaCreditoInput.value,
                password: passwordInput.value
            };

            localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));

            alert('Datos guardados correctamente.');
        } else {
            alert('Por favor, complete correctamente todos los campos.');
        }
    }

    function recuperarDatos() {
        // Recuperar datos del localStorage
        const datosGuardados = localStorage.getItem('datosUsuario');

        if (datosGuardados) {
            const datosUsuario = JSON.parse(datosGuardados);

            // Mostrar datos en los campos correspondientes
            nombreInput.value = datosUsuario.nombre;
            apellidosInput.value = datosUsuario.apellidos;
            dniInput.value = datosUsuario.dni;
            fechaNacimientoInput.value = datosUsuario.fechaNacimiento;
            codigoPostalInput.value = datosUsuario.codigoPostal;
            emailInput.value = datosUsuario.email;
            telefonoFijoInput.value = datosUsuario.telefonoFijo;
            telefonoMovilInput.value = datosUsuario.telefonoMovil;
            ibanInput.value = datosUsuario.iban;
            tarjetaCreditoInput.value = datosUsuario.tarjetaCredito;
            passwordInput.value = datosUsuario.password;
            confirmPasswordInput.value = datosUsuario.password;

            alert('Datos recuperados correctamente.');
        } else {
            alert('No hay datos guardados.');
        }
    }

    document.getElementById('guardarBtn').addEventListener('click', guardarDatos);
    document.getElementById('recuperarBtn').addEventListener('click', recuperarDatos);
    
});

