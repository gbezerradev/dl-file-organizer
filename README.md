# dl-file-organizer
<p>Automatically organize files in your download folder, moving them to subfolders. Made for Android.</p>

<img src="https://i.ibb.co/KjL2VYk/Screenshot-20210430-084946-Termux.jpg">

## Requirements
1. [Termux](https://play.google.com/store/apps/details?id=com.termux) app with storage access permission
2. Internet connection (installing nodejs) 

### Usage
Open Termux app and then type:
```bash
$ pkg update && pkg upgrade -y
$ pkg install git nodejs -y
```
clone this repo:
```bash
$ git clone https://github.com/Bwzerra/file-organizer
```
enter the cloned dir:
```bash
$ cd file-organizer/ 
```
and then run the javascript script by typing:
```bash
$ node organizer.js
```

<p>It will move the files inside your <code>Download/</code> folder to the specified subfolder (according to the file extension).
<br>Once it starts, it will always running on background until you stop it by hit <code>ctrl + c</code> or the Termux app is closed. <br>
<br>So when you download something (especially with chrome), it will immediately move your downloaded file once it finished. </p>
