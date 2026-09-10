<?php
header('Content-Type: application/json');

// Handle CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method. POST required.'
    ]);
    exit();
}

// ==========================================
// CONFIGURATION: GOOGLE SHEET APPS SCRIPT URL
// Replace with your Google Apps Script Web App URL
// Example: https://script.google.com/macros/s/AKfycb.../exec
// ==========================================
$googleSheetUrl = 'https://script.google.com/macros/s/AKfycbyznaQ10HTWMMbFN51V1_8CIWwpTIG149j1Zn9TnOY9D-BuTkFhjdgSPfs2DiKBrh7s/exec';

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$address = trim($data['address'] ?? '');
$product = trim($data['product'] ?? 'Horse Fire Tablets - ₹899 (60 Tablets)');

if (empty($name) || empty($phone) || empty($address)) {
    echo json_encode([
        'status' => 'error',
        'message' => 'All fields (Name, Phone, Address) are required.'
    ]);
    exit();
}

// Generate unique order reference number
$orderId = 'HF-' . rand(100000, 999999);

$orderRecord = [
    'order_id' => $orderId,
    'name' => $name,
    'phone' => $phone,
    'address' => $address,
    'product' => $product,
    'timestamp' => date('Y-m-d H:i:s'),
    'ip_address' => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1'
];

// 1. Save to local orders.json file
$ordersFile = __DIR__ . '/orders.json';
$existingOrders = [];

if (file_exists($ordersFile)) {
    $content = file_get_contents($ordersFile);
    $existingOrders = json_decode($content, true) ?: [];
}

$existingOrders[] = $orderRecord;
file_put_contents($ordersFile, json_encode($existingOrders, JSON_PRETTY_PRINT));

// 2. Forward Order Data to Google Sheet (if URL is set)
if (!empty($googleSheetUrl)) {
    try {
        $ch = curl_init($googleSheetUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderRecord));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        $sheetResponse = curl_exec($ch);
        curl_close($ch);
    } catch (Exception $e) {
        // Silently log or handle Google Sheet sync error without breaking customer flow
        error_log('Google Sheet Sync Error: ' . $e->getMessage());
    }
}

// Return Success Response
echo json_encode([
    'status' => 'success',
    'message' => 'Order placed successfully.',
    'order_id' => $orderId,
    'name' => $name,
    'phone' => $phone,
    'address' => $address,
    'product' => $product
]);
exit();
