<?php
// Set the Discord webhook URL
$webhook_url = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN";

// Get the raw POST data and decode it
$data = json_decode(file_get_contents("php://input"), true);

// Extract IP and User Agent from the received data
$ip = $data['ip'] ?? 'Unknown';
$user_agent = $data['userAgent'] ?? 'Unknown';

// Create a log entry
$timestamp = date('Y-m-d H:i:s');
$log_entry = "IP: $ip, User Agent: $user_agent, Time: $timestamp" . PHP_EOL;

// Save the log entry to a file
file_put_contents("logs.txt", $log_entry, FILE_APPEND);

// Send the log entry to Discord
$discord_message = [
    "content" => "**New Log Entry:**\nIP: $ip\nUser Agent: $user_agent\nTime: $timestamp"
];

$ch = curl_init($webhook_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($discord_message));
$response = curl_exec($ch);
curl_close($ch);

// Respond to the client
http_response_code(200);
echo json_encode(["status" => "success", "message" => "Log processed."]);
?>