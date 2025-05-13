<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task 6</title>
    <link rel="stylesheet" href="index.css" />
</head>

<body>
    <h1>6. Creatures</h1>
    
    <h2>New creature seen</h2>
    <form action="add.php" method="POST">
        Name of creature: <input type="text" name="creature"><br>
        Amount seen: <input type="number" name="count"><br>
        <button>Save</button>
    </form>

    <h2>Creatures seen so far</h2>
</body>
</html>
<?php
$filename = 'creatures.json';

if (file_exists($filename)) {
    $json_data = file_get_contents($filename);
    $creatures = json_decode($json_data, true);
    
    if (!empty($creatures)) {
        echo '<ul>';
        foreach ($creatures as $creature) {
            echo '<li>' . $creature['creature'] . ': ' . $creature['count'] . '</li>';
        }
        echo '</ul>';
    } else {
        echo '<p>No creatures seen so far.</p>';
    }
} else {
    echo '<p>No creatures seen so far.</p>';
}
?>