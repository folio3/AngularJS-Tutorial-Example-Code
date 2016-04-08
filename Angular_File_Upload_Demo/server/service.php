<?php
//Demo Service file
if (count($_FILES) > 0) {
    echo 'File has been successfully uploaded.';
} else {
    echo 'File uploading fail.';
}
?>