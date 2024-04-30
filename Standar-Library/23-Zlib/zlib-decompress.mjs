// Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
// https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html 


import fs from "fs"
import zlib from "zlib"

const source = fs.readFileSync("23-Zlib/zlib-compress.mjs.txt")
console.info(source.toString())

const result = zlib.unzipSync(source)
console.info(result.toString())

fs.writeFileSync("23-Zlib/zlib-Afthercompress.mjs.txt", result)