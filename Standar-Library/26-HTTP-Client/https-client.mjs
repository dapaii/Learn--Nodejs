// NodeJS juga memiliki standard library untuk HTTP
// Salah satu fitur di module HTTP adalah HTTP Client, dimana kita bisa melakukan simulasi HTTP Request menggunakan NodeJS
// Terdapat 2 jenis module HTTP di NodeJS, HTTP dan HTTPS
// https://nodejs.org/dist/latest-v16.x/docs/api/http.html 
// https://nodejs.org/dist/latest-v16.x/docs/api/https.html 


import https from "https"

const endpoint = "https://eovasut9bhb56bs.m.pipedream.net"
const request = https.request(endpoint, {
    method: "POST",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response)=>{
    response.addListener("data", (data)=>{
        console.info(`receive data : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: "Eko",
    lastName: "Khannedy",
})

request.write(body)
request.end()