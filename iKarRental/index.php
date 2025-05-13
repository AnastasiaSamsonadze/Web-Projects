<?php
$cars = json_decode(file_get_contents("cars.json"), true) ?? [];

$filtered_cars = [];

$seats = $_GET['seats'] ?? null;
$gear_type = $_GET['gear_type'] ?? null;
$price_min = $_GET['price_min'] ?? null;
$price_max = $_GET['price_max'] ?? null;

foreach ($cars as $car) {
    if ($seats && $car['passengers'] != $seats) {
        continue;
    }
    if ($gear_type && strcasecmp($car['transmission'], $gear_type) !== 0) {
        continue;
    }
    if ($price_min && $car['daily_price_huf'] < $price_min) {
        continue;
    }
    if ($price_max && $car['daily_price_huf'] > $price_max) {
        continue;
    }

    $filtered_cars[] = $car;
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
    <div class="container">
        <h1>Rent cars easily!</h1>

        <form method="GET" action="">
            <label for="seats">Seats:</label>
            <input type="number" name="seats" id="seats" value="<?php echo $_GET['seats'] ?? ''; ?>">

            <label for="gear_type">Gear Type:</label>
            <select name="gear_type" id="gear_type">
                <option value="">Any</option>
                <option value="Manual" <?php if (isset($_GET['gear_type']) && $_GET['gear_type'] === 'Manual') echo 'selected'; ?>>Manual</option>
                <option value="Automatic" <?php if (isset($_GET['gear_type']) && $_GET['gear_type'] === 'Automatic') echo 'selected'; ?>>Automatic</option>
            </select>

            <label for="price_min">Min Price:</label>
            <input type="number" name="price_min" id="price_min" value="<?php echo $_GET['price_min'] ?? ''; ?>">

            <label for="price_max">Max Price:</label>
            <input type="number" name="price_max" id="price_max" value="<?php echo $_GET['price_max'] ?? ''; ?>">

            <button class="filter" type="submit">Filter</button>
        </form>

        <div class="grid">
            
            <?php if (empty($filtered_cars)): ?>
                <p>No cars match your criteria.</p>
            <?php else: ?>

                <?php foreach ($filtered_cars as $car): ?>
                    <a href="details.php?id=<?php echo $car['id']; ?>" style="text-decoration: none; color: inherit;">
                        <div class="card">
                            <img src="<?php echo $car['image']; ?>" alt="<?php echo $car['brand'] . ' ' . $car['model']; ?>">
                            <h3><?php echo $car['brand'] . ' ' . $car['model']; ?></h3>
                            <p><?php echo $car['passengers']; ?> seats - <?php echo $car['transmission']; ?></p>
                            <p class="price"><?php echo $car['daily_price_huf'] . ' Ft'; ?></p>
                            <button>Book</button>
                        </div>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>