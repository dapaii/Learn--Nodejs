// Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP
// Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener
// https://nodejs.org/dist/latest-v16.x/docs/api/net.html 


import net from 'net'

const client = net.createConnection({
    port: 3000,
    host: "localhost"
})

client.addListener("data", (data)=>{
    console.info(`Receive data from ${data.toString()}`)
})

setInterval(()=>{
    client.write(`${process.argv[2]}\r\n`)
}, 2000)