const fs = require("fs")

try {
  fs.writeFileSync("./out/.nojekyll", "")
  console.log('File ".nojekyll" written successfully')
} catch (err) {
  console.error(err)
}
