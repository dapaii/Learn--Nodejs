// File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
// Dalam File System, terdapat 3 jenis library
// Pertama library yang bersifat blocking atau synchronous
// Kedua library yang bersifat non-blocking atau asynchronous menggunakan callback
// Ketika library yang bersifat non-blocking atau asynchronous tapi menggunakan promise
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html 


import fs from "fs/promises"

const buffer = await fs.readFile("File-System/file-system.mjs")
console.info(buffer.toString())

fs.writeFile("File-System/temp.txt", "hello NodeJS")