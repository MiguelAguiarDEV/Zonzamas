<?php
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');
error_reporting(E_ALL); 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
$servername = "localhost";
$username = "miguel";
$password = "csas1234";
$dbname = "formulario";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "Error";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userData = $_POST['json'];
    $userData = json_decode($userData, true);
    addUser($conn, $userData);
} else {
    $dni = $_GET['dni'];
    getUserByDni($conn, $dni);
} 

function getUserByDni($conn, $dni) {
    
    $sql = "SELECT * FROM usuarios WHERE dni = '$dni'";

    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode(['error' => 'Error de consulta: ' . $conn->error]);
        return;
    }

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    } else {
        echo json_encode(['error' => 'Usuario no encontrado']);
    }
}

function addUser($conn, $userData) {
    $nombre = $userData['nombre'];
    $apellidos = $userData['apellidos'];
    $dni = $userData['dni'];
    $fechaNacimiento = $userData['fechaNacimiento'];
    $codigoPostal = $userData['codigoPostal'];
    $email = $userData['email'];
    $telefonoFijo = $userData['telefonoFijo'];
    $telefonoMovil = $userData['telefonoMovil'];
    $tarjetaCredito = $userData['tarjetaCredito'];
    $iban = $userData['iban'];
    $contrasena = $userData['contrasena'];
    

    $sql = "INSERT INTO usuarios (nombre, apellidos, dni, fechaNacimiento, codigoPostal, email, telefonoFijo, telefonoMovil, tarjetaCredito, iban, contrasena) VALUES ('$nombre', '$apellidos', '$dni', '$fechaNacimiento', '$codigoPostal', '$email', '$telefonoFijo', '$telefonoMovil', '$tarjetaCredito', '$iban', '$contrasena')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Error añadiendo usuario: ' . $conn->error]);
    }
}

$conn->close();
?>
