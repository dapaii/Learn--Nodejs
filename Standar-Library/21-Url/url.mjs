// URL merupakan standard library untuk bekerja dengan URL
// https://nodejs.org/dist/latest-v16.x/docs/api/url.html 

import { URL } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")

pzn.host = "www.khannedy.com"
const searchParam = pzn.searchParams
searchParam.append("status", "premium")

console.info(pzn.toString())
console.info(pzn.href)
console.info(pzn.protocol)
console.info(pzn.host)
console.info(pzn.pathname)
console.info(pzn.searchParams)