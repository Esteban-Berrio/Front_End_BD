<?php
// Recibe el JSON con el nombre y la imagen
header('Content-Type: application/json');

$jsonData = json_decode(file_get_contents('php://input'));

if ($jsonData && isset($jsonData->name) && isset($jsonData->image)) {
    // Obtener el nombre y la imagen desde el JSON
    $imageName = $jsonData->name;
    $base64Image = $jsonData->image;

    // Verificar la extensión de archivo permitida
    $allowedExtensions = ['jpg', 'jpeg', 'png'];
    $fileExtension = '';

    // Detectar la extensión real de la imagen
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->buffer(base64_decode($base64Image));

    // Mapear el MIME type a una extensión común (puedes agregar más aquí)
    $mimeToExtension = [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/gif' => 'gif',
    ];

    if (isset($mimeToExtension[$mime])) {
        $fileExtension = $mimeToExtension[$mime];
    }

    // Si se encontró una extensión válida, construir el nombre de archivo
    if ($fileExtension) {
        $imageName = $imageName . '.' . $fileExtension;
        $filePath = $imageName; // Utiliza el nombre proporcionado por el usuario con la extensión detectada
        file_put_contents($filePath, base64_decode($base64Image));
        echo json_encode(['message' => 'Imagen guardada correctamente']);
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(['message' => 'Extensión de archivo no válida o no detectada']);
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(['message' => 'Error al procesar la imagen']);
}
?>
