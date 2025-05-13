<?php
include_once(__DIR__ . '/data.php');

$legendaryCount = 0;
$totalValue = 0;
$maxValue = 0;
$maxValuePotion = null;

foreach ($potions as $potion) {
    if ($potion['value'] > $maxValue) {
        $maxValue = $potion['value'];
        $maxValuePotion = $potion;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task 4</title>
    <link rel="stylesheet" href="index.css" />
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<body>
    <h1>4. Potions</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($potions as $potion): ?>
                <?php
                $nameColor = '';
                switch ($potion['rarity']) {
                    case 'common':
                        $nameColor = 'green';
                        break;
                    case 'rare':
                        $nameColor = 'blue';
                        break;
                    case 'epic':
                        $nameColor = 'purple';
                        break;
                    case 'legendary':
                        $nameColor = 'orange';
                        break;
                }
                $highlightClass = ($potion === $maxValuePotion) ? 'highlight' : '';
                ?>
                <tr class="<?php echo $highlightClass; ?>">
                    <td style="color: <?php echo $nameColor; ?>;"><?php echo $potion['name']; ?></td>
                    <td style="background-color: <?php echo $potion['color']; ?>;"><?php echo $potion['color']; ?></td>
                    <td><?php echo $potion['value']; ?> gold</td>
                </tr>
                <?php
                if ($potion['rarity'] === 'legendary') {
                    $legendaryCount++;
                }
                $totalValue += $potion['value'];
                ?>
            <?php endforeach; ?>
        </tbody>
    </table>

    <b>Number of legendary potions: <?php echo $legendaryCount; ?></b><br>
    <b>Total value of all potions: <?php echo $totalValue; ?> gold</b>
</body>

</html>