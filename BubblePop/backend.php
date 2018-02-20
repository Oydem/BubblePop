<h1>Below is the data retrieved from SERVER</h1>
<?php
        date_default_timezone_set('America/Chicago'); // CDT
        echo '<h2>Server Timezone : ' . date_default_timezone_get() . '</h2>';
        $current_date = date('d/m/Y == H:i:s ');
        print "<h2>Server Time : " . $current_date . "</h2>";

        $dataObject = $_POST; //Fetching all posts

        echo "<pre>"; //making the dump look nice in html.
        var_dump($dataObject);
        echo "</pre>";

            //Writes it as json to the file, you can transform it any way you want
        $json = json_encode($dataObject);
        file_put_contents('your_data.txt', $json);
?>