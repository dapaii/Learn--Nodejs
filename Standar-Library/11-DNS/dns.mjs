// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html 


import dns from "dns"

function callback(error, ip){
    console.info(ip)
}

dns.lookup("www.programmerzamannow.com", callback)
