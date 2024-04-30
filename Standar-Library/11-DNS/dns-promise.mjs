// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html 


import dns from "dns/promises"

const addres = await dns.lookup("www.programmerzamannow.com")

console.info(addres)
console.info(addres.address)
console.info(addres.family)