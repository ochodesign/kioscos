<?php
// contacto.php - Procesa el formulario de contacto
// Apto para Hostinger
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = htmlspecialchars(trim($_POST['nombre'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $mensaje = htmlspecialchars(trim($_POST['mensaje'] ?? ''));
    $errores = [];
    if (!$nombre) $errores[] = 'Nombre requerido.';
    if (!$email) $errores[] = 'Email inválido.';
    if (!$mensaje) $errores[] = 'Mensaje requerido.';
    if (empty($errores)) {
        $to = 'info@kioscos24hs.com';
        $subject = 'Nuevo mensaje desde la web';
        $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
        $headers = "From: $email\r\nReply-To: $email";
        if (mail($to, $subject, $body, $headers)) {
            $msg = '¡Mensaje enviado correctamente!';
        } else {
            $msg = 'Error al enviar el mensaje. Intente más tarde.';
        }
    } else {
        $msg = implode(' ', $errores);
    }
    echo "<script>alert('$msg');window.location='index.html#contacto';</script>";
    exit;
}
?>
