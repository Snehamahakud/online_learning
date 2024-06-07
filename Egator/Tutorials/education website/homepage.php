<?php
session_start();
include("connect.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <div style="text-align:center; padding:15%;">
        <p style="font-size:50px; font-weight:bold;">
            Hello 
            <?php
            if(isset($_SESSION['email'])){
                $email = $_SESSION['email'];

                // Prepare the SQL statement to prevent SQL injection
                if ($stmt = $conn->prepare("SELECT firstName, lastName FROM users WHERE email = ?")) {
                    $stmt->bind_param("s", $email);
                    $stmt->execute();
                    $stmt->bind_result($firstName, $lastName);
                    
                    while ($stmt->fetch()) {
                        echo htmlspecialchars($firstName) . ' ' . htmlspecialchars($lastName);
                    }
                    
                    $stmt->close();
                } else {
                    echo "Error: " . $conn->error;
                }
            }
            ?>
            :)
        </p>
    </div>
</body>
</html>
