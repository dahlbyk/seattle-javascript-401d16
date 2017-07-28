# 401 JS -- class 38 photo upload

## Learning Objectives
* Students will learn to use the FileReader API to  preview files 

## Readings
* [Using files in web applications](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications)
* [FileReader.readAsDataURL docs](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)

## Overview
#### Previewing images
Using the HTML5 FileReader API, browser applications can now ask users to read local files, and then read the contents of those files. Input tags of type file can retrieve files from the user. Those files can then be loaded through the a `FileReader`. Once a FileReader has loaded the contents of a file it can then be processed as an ArrayBuffer, BinaryString, DataURL, or Text. After a user selects a photo it can be previewed, by loading the contents using a FileReader and then passing a DataURL into an `<img>` tag.
