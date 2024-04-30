// Process merupakan standard library yang digunakan untuk mendapatkan informasi proses NodeJS yang sedang berjalan
// Process juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam Process
// https://nodejs.org/dist/latest-v16.x/docs/api/process.html 


import process from 'process';

process.addListener("exit", (exitCode) =>{
    console.info(`NodeJs exit with code ${exitCode}`)
});

console.info(process.version)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(1)
console.info("Not printed beacuse already exit") //tidak aakan dieksekusi karena sudah di exit di atas