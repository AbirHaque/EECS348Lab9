<?php
	echo "<table><tr>";
	echo "<th><u>i\j</u>|</th>";
	for($i=1;$i<=$_POST["d"];$i++){
		echo "<th><u><b>$i</b></u></th>";
	}
	echo "</tr>";
	for($i=1;$i<=$_POST["d"];$i++){
		echo "<tr><th><b>$i</b>|</th>";
		for($j=1;$j<=$_POST["d"];$j++){
			$val=$i*$j;
			echo "<th><i>$val</i></th>";
		}
		echo "<tr>";
	}
	echo "</table>"


?>
