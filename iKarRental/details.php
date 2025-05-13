<?php

$cars = json_decode(file_get_contents("cars.json"), true) ?? [];

$car_id = $_GET['id'] ?? null;

$car_details = null;
foreach ($cars as $car) {
    if ($car['id'] == $car_id) {
        $car_details = $car;
        break;
    }
}

if (!$car_details) {
    echo "Car not found!";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="detailsContainer">
        <img src="<?php echo $car_details['image']; ?>" alt="<?php echo $car_details['brand'] . ' ' . $car_details['model']; ?>">

        <h1><?php echo $car_details['brand'] . ' ' . $car_details['model']; ?></h1>
        
        <p><strong>Year:</strong> <?php echo $car_details['year']; ?></p>
        <p><strong>Transmission:</strong> <?php echo $car_details['transmission']; ?></p>
        <p><strong>Fuel Type:</strong> <?php echo $car_details['fuel_type']; ?></p>
        <p><strong>Passengers:</strong> <?php echo $car_details['passengers']; ?> seats</p>
        <p><strong>Daily Price:</strong> <?php echo $car_details['daily_price_huf'] . ' Ft'; ?></p>
    </div>
</body>
</html>