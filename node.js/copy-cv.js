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

try {
  fs.copyFileSync("./files/chaukhi-pass.pdf", "./out/chaukhi-pass.pdf")
  console.log('File "chaukhi-pass" copied successfully')
} catch (error) {
  console.error(error)
}

try {
  fs.copyFileSync("./files/chaukhi-pass.pdf", "./out/chaukhi-pass2.pdf")
  console.log('File "chaukhi-pass" copied successfully')
} catch (error) {
  console.error(error)
}
