<?php
$env = "development";
$configPath = realpath(__DIR__ . '/../env.config.ini');
$config = parse_ini_file($configPath, true);
$mode = $config['ENVIRONMENT']['mode']; // DEVELOPMENT
$URL_BASE = $config[$mode]['URL_BASE']; // resolves to http://dev.local

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
  
    <div id="root"></div>
    <!-- Load App Content -->
        <?php if ($env === "development"): ?>
        <!-- Load from Vite dev server -->
           
        <script type="module" src="http://dev.local:5173/src/main.tsx"></script>
    <?php else: ?>
        <!-- Load from built Vite output -->
        <script type="module" src="/dist/assets/main.js"></script>
        <link rel="stylesheet" href="/dist/assets/style.css">
    <?php endif; ?>
  </body>
</html>
