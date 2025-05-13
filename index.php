<?php
// Good luck!

session_start();

$jokes = json_decode(file_get_contents('jokes.json'), true);

$error = "";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $question = $_POST['question'];
    $punchline = $_POST['punchline'];

    if (substr($question, -1) !== '?') {
        $error = 'Question must end with a question mark';
    } else {
        $jokes[] = [
            'question' => $question,
            'punchline' => $punchline
        ];
        file_put_contents('jokes.json', json_encode($jokes));
        header('Location: ' . $_SERVER['PHP_SELF']);
        exit;
    }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>funnyjokes.hu</title>
    <link rel="stylesheet" href="styles.css">
</head>



<body>
    <h1>Welcome to the funniest joke site on the internet!</h1>
    <form method="POST">
        <h3>Add joke</h3>
        <?php if ($error): ?>
            <p style="color: red"><?= $error ?></p>
        <?php endif; ?>
        <label for="question">Add Question</label>
        <input type="text" id="question" name="question" required value="<?php if(isset($_POST['question']) && $error) echo $_POST['question'];?>">
        <label for="punchline">Add Punchline</label>
        <input type="text" id="punchline" name="punchline" required value="<?php if(isset($_POST['punchline']) && $error) echo $_POST['punchline'];?>">
        <button type="submit">Submit</button>
    </form>
    <main id="jokesContainer">
        <?php foreach ($jokes as $joke): ?>
            <section class="joke">
                <details>
                    <summary class="question"><?= $joke['question'] ?></summary>
                    <p class="punchline"><?= $joke['punchline'] ?></p>
                </details>
            </section>
        <?php endforeach; ?>
    </main>
</body>

</html>