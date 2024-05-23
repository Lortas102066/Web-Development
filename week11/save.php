<!-- open database connection -->
<?php
$db = new mysqli( 'localhost', 'root', 'root', 'fit1050' );
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save Article</title>
	<link rel="stylesheet" href="css/admin.css" />
</head>
<body>

    <header>
        <h1>Save Article</h1>
        <nav>
          <a href="index.php">View Site</a>
          <a href="list.php">List Pages</a>
          <a href="add.php">Add New Page</a>
        </nav>
    </header>

    <main>

        <!-- save new page to database -->

        
    </main>

</body>
</html>

<!-- close database connection  -->
<?php
$db->close();
?>