// Stream adalah standard library untuk kontrak aliran data di NodeJS
// Ada banyak sekali Stream object di NodeJS
// Stream bisa jadi object yang bisa dibaca, atau bisa di tulis, dan Stream adalah turunan dari EventEmitter
// https://nodejs.org/dist/latest-v16.x/docs/api/stream.html 

import fs from "fs"

const writer = fs.createWriteStream("18-Stream/target.log")
writer.write("eko\n")
writer.write("kurniawan\n")
writer.write("khanedy\n")
writer.end()

const reader = fs.createReadStream("18-Stream/target.log")
reader.addListener("data", (data)=>{
    console.info(data.toString())
})