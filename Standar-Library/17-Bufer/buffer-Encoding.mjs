// Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain
// Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii,  hex, base64, base64url dan lain-lain


const buffer = Buffer.from("Eko kurniawan khaneddy", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("RWtvIGt1cm5pYXdhbiBraGFuZWRkeQ==", "base64")
console.info(bufferBase64.toString("utf8"))