<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>5. Invitation</h1>
    <?php
    $is_valid = true;
    ?>
    <form action="index.php" method="GET" novalidate>
        <label for="full_name">Name of child:</label>
        <input type="text" name="full_name" value="<?php echo isset($_GET['full_name']) ? $_GET['full_name'] : ''; ?>" required>
        <span class="error-message">
            <?php
            if (isset($_GET['full_name'])) {
                $full_name = $_GET['full_name'];
                if (strlen($full_name) < 6) {
                    echo "Name must be at least 6 characters long.";
                    $is_valid = false;
                } elseif (strpos($full_name, ' ') === false) {
                    echo "Name must include at least one space.";
                    $is_valid = false;
                }
            }
            ?>
        </span>
       
        <label for="wizards">Wizards in family:</label>
        <input type="text" name="wizards" value="<?php echo isset($_GET['wizards']) ? $_GET['wizards'] : ''; ?>" required>
        <span class="error-message">
            <?php
            if (isset($_GET['wizards'])) {
                $wizards = $_GET['wizards'];
                if (!is_numeric($wizards) || intval($wizards) != $wizards) {
                    echo "Number of wizards must be an integer.";
                    $is_valid = false;
                } elseif ($wizards < 1 || $wizards > 256) {
                    echo "Number of wizards must be between 1 and 256.";
                    $is_valid = false;
                }
            }
            ?>
        </span>
       
        <label for="pet">Accompanying pet:</label>
        <select name="pet" required>
            <?php
            $pets = ['owl', 'cat', 'toad', 'rat'];
            foreach ($pets as $pet) {
                $selected = isset($_GET['pet']) && $_GET['pet'] == $pet ? 'selected' : '';
                echo "<option value=\"$pet\" $selected>$pet</option>";
            }
            ?>
        </select>
        <span class="error-message">
            <?php
            if (isset($_GET['pet'])) {
                $pet = $_GET['pet'];
                $valid_pets = ['owl', 'cat', 'toad', 'rat'];
                if (!in_array($pet, $valid_pets)) {
                    echo "Invalid pet selected.";
                    $is_valid = false;
                }
            }
            ?>
        </span>

        <input type="checkbox" name="agree" <?php echo isset($_GET['agree']) && $_GET['agree'] === 'on' ? 'checked' : ''; ?> required>
        <label for="agree" style="display: inline-block">I consent to the processing of my data.</label>
        <span class="error-message">
            <?php
            if (!isset($_GET['agree']) || $_GET['agree'] !== 'on') {
                echo "You must consent to the processing of your data.";
                $is_valid = false;
            }
            ?>
        </span>

        <input type="submit" value="Send application">
    </form>
    
    <?php if ($is_valid && $_SERVER['REQUEST_METHOD'] === 'GET' && !empty($_GET)): ?>
    <div id="success">
        <h2>Thank you for your application!</h2>
        If we decide to admit your child, we will notify you by owl mail shortly.
    </div>
    <?php endif; ?>

    <div class="help">
        <h2>Links for testing</h2>
        <ul>
            <li><a href="index.php?">No data sent</a></li>
            <li><a href="index.php?full_name=L&wizards=4&pet=owl&agree=on">Name too short</a></li>
            <li><a href="index.php?full_name=LunaLovegood&wizards=4&pet=owl&agree=on">No space in name</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=four&pet=owl&agree=on">Wizard count is not a number</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=3.14&pet=owl&agree=on">Wizard count is not an integer</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=0&pet=owl&agree=on">Wizard count is too low</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=300&pet=owl&agree=on">Wizard count is too high</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=4&agree=on">Missing pet</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=4&pet=lizard&agree=on">Invalid pet</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=4&pet=owl">Missing consent to data processing</a></li>
            <li><a href="index.php?full_name=Luna%20Lovegood&wizards=4&pet=owl&agree=on">Correct input</a></li>
        </ul>
    </div>
</body>
</html>