// Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
// https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html 


import zlib from "zlib"
import fs from "fs"

const source = fs.readFileSync("23-Zlib/zlib.mjs")
const result = zlib.gzipSync(source)

fs.writeFileSync("23-Zlib/zlib-compress.mjs.txt", result)
