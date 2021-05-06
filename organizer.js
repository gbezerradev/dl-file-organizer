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

process.chdir('/sdcard');

// criando as pastas
for (let fol in folders) {
  if (!fs.existsSync(dl + folders[fol])) {
    fs.mkdirSync(dl + folders[fol])
    log(c.ok + "Folder successfully created:", c.head + dl + c.blue + folders[fol])
  }
}

// movendo os arquivos
function moveFiles() {
  fs.readdirSync('./').forEach(file => {
    if (fs.statSync(file).isFile()) {
      let ext = file.substr((file.lastIndexOf('.') + 1));
      let oldPath = dl + file;
      
      // movendo videos
      if (vids.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[0] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[0] + c.o)
        
        // movendo imagens
      } else if (imgs.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[1] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[1] + c.o)
        
        // movendo audios
      } else if (auds.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[2] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[2] + c.o)
        
        // movendo aplicativos
      } else if (apks.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[3] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[3] + c.o)
        
        // movendo documentos
      } else if (docx.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[4] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[4] + c.o)
        
        // movendo compactados
      } else if (comps.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[5] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[5] + c.o)
        
        // movendo scripts
      } else if (sc.includes(ext)) {
        fs.renameSync(oldPath, dl + folders[6] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[6] + c.o)
        
        // movendo outros
      } else {
        fs.renameSync(oldPath, dl + folders[7] + '/' + file)
        log(c.head + file, c.ok + "moved to 👉", c.blue + "Dowload >", folders[7] + c.o)
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