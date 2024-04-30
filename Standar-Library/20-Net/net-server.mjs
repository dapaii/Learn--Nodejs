// Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP
// Net Server dan Client merupakan object Stream, sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener
// https://nodejs.org/dist/latest-v16.x/docs/api/net.html 


import net from "net"

const server = net.createServer( (client) =>{
    console.info("client connected")

    client.addListener("data", (data) => {
        console.info(`Receive data from client ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`)
    })
})

server.listen(3000, "localhost")