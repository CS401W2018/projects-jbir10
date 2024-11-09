<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
</head>
<body>
    <main>
        <h1>Thank you for Signing Up.</h1>
        <p>First Name: <?php print $_POST['firstName'] ?></p>
        <p>Email: <?php print $_POST['email'] ?></p>
        <p>Birthdate: <?php print $_POST['birthdate'] ?></p>
        <p>Password: <?php print $_POST['password'] ?></p>
        <p>Gender: <?php print $_POST['gender'] ?></p>
        <p>State: <?php print $_POST['state'] ?></p>
    </main>
</body>
</html>