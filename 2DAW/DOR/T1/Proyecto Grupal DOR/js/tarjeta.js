// class Tarjeta {
//   constructor(titular, numeroTarjeta, fechaExpiracion, cvc) {
//     this.setTitular(titular);
//     this.setNumeroTarjeta(numeroTarjeta);
//     this.setFechaExpiracion(fechaExpiracion);
//     this.setCVC(cvc);
//   }

//   getTitular() {
//     return this.titular;
//   }

//   setTitular(titular) {
//     if (typeof titular === "string" && titular.length > 0) {
//         if(this.validarTitular(titular)){
//             this.titular = titular;
//         }else{
//             throw new Error("El titular de la tarjeta no es válido.");
//         }
//     } else {
//       throw new Error("El titular de la tarjeta no puede estar vacio.");
//     }
//   }

//   getNumeroTarjeta() {
//     return this.numeroTarjeta;
//   }

//   setNumeroTarjeta(numeroTarjeta) {
//     if (this.validarNumeroTarjeta(numeroTarjeta)) {
//       this.numeroTarjeta = numeroTarjeta;
//     } else {
//       throw new Error("Número de tarjeta no válido.");
//     }
//   }

//   getFechaExpiracion() {
//     return this.fechaExpiracion;
//   }

//   setFechaExpiracion(fechaExpiracion) {
//     if (this.validarFechaExpiracion(fechaExpiracion)) {
//       this.fechaExpiracion = fechaExpiracion;
//     } else {
//       throw new Error("Fecha de expiración no válida.");
//     }
//   }

//   getCVC() {
//     return this.cvc;
//   }

//   setCVC(cvc) {
//     if (this.validarCVC(cvc)) {
//       this.cvc = cvc;
//     } else {
//       throw new Error("CVC no válido.");
//     }
//   }

//   validarNumeroTarjeta(numeroTarjeta) {
//     if (numeroTarjeta.length === 16) {
//       return true;
//     }
  
//     return false;
//   }

//   validarTitular(titular) {
//     return !/\d/.test(titular);
//   }

// Método para validar la fecha de expiración (solo una validación básica)
//   validarFechaExpiracion(fechaExpiracion) {
//     const parts = fechaExpiracion.split("/");
//     if (parts.length === 2) {
//       const mes = parseInt(parts[0], 10);
//       const año = parseInt(parts[1], 10);
//       const currentDate = new Date();
//       const currentYear = currentDate.getFullYear() % 100;
//       if (mes >= 1 && mes <= 12 && año >= currentYear) {
//         return true;
//       }
//     }
//     return false;
//   }

//   validarCVC(cvc) {
//     return /^\d{3}$/.test(cvc);
//   }
// }

// try {
//   const miTarjeta = new Tarjeta(
//     "Alberto Sep",
//     "1234567890123456",
//     "12/25",
//     "123"
//   );
//   console.log(`Tarjeta creada con éxito`);
//   console.log(miTarjeta.titular);
//   console.log(miTarjeta.numeroTarjeta);
//   console.log(miTarjeta.fechaExpiracion);
//   console.log(miTarjeta.cvc);

// } catch (error) {
//   console.error(error.message);
// }
