<?php
    $firstname = $_POST["fname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $conn = mysqli_connect("localhost", "root", "", "contact_form") or die("connection failed !");  
    $sql = "INSERT INTO form_table (name , email , subject , message) VALUES ('{$firstname}' , '{$email}' , '{$subject}' , '{$message}')";
    $result = mysqli_query($conn, $sql) or die("Error Submitting form");
?>

