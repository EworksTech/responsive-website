<?php

error_log(date('r') ."|". $_SERVER['REMOTE_ADDR'] ."|". implode('|', $_POST) ."\n", 3, 'contacts.tsv');
mail('cesar@eworks.com.br', 'Contact from website', $_SERVER['REMOTE_ADDR'] ."\n". print_r($_POST, true));

?>