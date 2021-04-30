// importações necessárias
const fs = require('fs');
const process = require('process');
const c = require('./colors.js'); // cores para o terminal
const log = console.log;

let dl = "/sdcard/Download/" // internal storage
let folders = ["Video", "Images", "Music", "Apps", "Documents", "Compressed", "Script", "Others"]

// formatos do arquivos
// você pode adicionar mais se quiser
let vids = ["mp4", "mkv", "avi", "mov", "3gp"]
let imgs = ["jpg", "jpeg", "img", "png", "ico", "webp", "gif"]
let auds = ["mp3", "aac", "m4a"]
let apks = ["apk", "xapk", "exe", "deb"]
let docx = ["docx", "doc", "pdf", "epub", "bok", "pptx", "xlsx", "txt"]
let comps = ["zip", "rar", "tar", "gz", "xz", "iso", "7z", "bz2", "jar", "lzma"]
let sc = ["html", "css", "js", "py", "cpp", "c", "xml", "json"]
let exception = 'crdownload'

process.chdir('/sdcard');

// criando as pastas
for (i = 0; i < folders.length; i++) {
  if (!fs.existsSync(dl + folders[i])) {
    fs.mkdirSync(dl + folders[i])
    log(c.ok + "Folder successfully created:", c.head + dl + c.blue + folders[i])
  }
}

// movendo os arquivos
async function moveFiles() {
  fs.readdirSync('./').forEach(file => {
    if (fs.statSync(file).isFile() == true) {
      let hidden = file.startsWith('.');
      let ext = file.substr((file.lastIndexOf('.') + 1));
      let oldPath = dl + file;

      try {
        if (vids.includes(ext)) {
          fs.rename(oldPath, dl + folders[0] + '/' + file, (err) => {
if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[0] + c.o)
        } else if (imgs.includes(ext)) {
          fs.rename(oldPath, dl + folders[1] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[1] + c.o)
        } else if (auds.includes(ext)) {
          fs.rename(oldPath, dl + folders[2] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[2] + c.o)
        } else if (apks.includes(ext)) {
          fs.rename(oldPath, dl + folders[3] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[3] + c.o)
        } else if (docx.includes(ext)) {
          fs.rename(oldPath, dl + folders[4] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[4] + c.o)
        } else if (comps.includes(ext)) {
          fs.rename(oldPath, dl + folders[5] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[5] + c.o)
        } else if (sc.includes(ext)) {
          fs.rename(oldPath, dl + folders[6] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[6] + c.o)
        } else {
          fs.rename(oldPath, dl + folders[7] + '/' + file, (err) => { if (err) throw err })

          log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[7] + c.o)
        }
      } catch (e) {
        log(`There is an error when trying to move the file: ${file}`)
      }
    }
  });
}

log(c.warn + `
*==================================================*
| This script will running in the background until |
| you stop it by hit [CTRL+C]                      |
|                                                  |
| Your downloaded or moved file to the Download/   |
| folder will automatically move to its subfolder. |
*==================================================*
` + c.o)

process.chdir(dl)

while (true) {
  moveFiles()
}