const fs = require("fs")

// Директории
if (!fs.existsSync("./out")) {
  fs.mkdirSync("./out")
}

// Файлы
try {
  fs.copyFileSync("./files/cv-en.pdf", "./out/cv-en.pdf")
  console.log('File "cv-en" copied successfully')
} catch (error) {
  console.error(error)
}

try {
  fs.copyFileSync("./files/cv-ru.pdf", "./out/cv-ru.pdf")
  console.log('File "cv-ru" copied successfully')
} catch (error) {
  console.error(error)
}

// Старый путь для файла
if (!fs.existsSync("./out/files")) {
  fs.mkdirSync("./out/files")
}

try {
  fs.copyFileSync("./files/cv-en.pdf", "./out/files/cv.pdf")
  console.log('File "files/cv" copied successfully')
} catch (error) {
  console.error(error)
}
