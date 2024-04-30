// Console adalah standard library yang sudah sering kita gunakan
// Secara global, object console bisa kita gunakan tanpa harus melakukan import module, dan console melakukan print text nya ke stdout
// Namun jika kita juga bisa membuat object Console sendiri jika kita mau
// https://nodejs.org/dist/latest-v16.x/docs/api/console.html 


import {Console} from "console"
import fs from "fs"

const file = fs.createWriteStream("24-Console/application.log")

const log = new Console({
    stdout: file,
    stderr: file,
})

log.info("hello world")
log.error("hello world")

const person = {
    firstName: "Eko",
    lastName: "khannedy"
}

log.table(person)