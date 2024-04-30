// Timer merupakan standard library untuk melakukan scheduling
// Function di Timer terdapat di globals, sehingga kita bisa menggunakannya tanpa melakukan import, namun semua function Timer menggunakan Callback
// Jika kita ingin menggunakan Timer versi Promise, kita bisa meng-import dari module timer/promise
// https://nodejs.org/dist/latest-v16.x/docs/api/timers.html 

import timers from "timers/promises"

// console.info(new Date())
// const name = await timers.setTimeout(5000, "eko")
// console.info(new Date())

// console.info(name)

// for await (const starTime of timers.setInterval(1000, new Date())){
//     console.info(`Start  time at ${starTime}`) 
// }

for await (const starTime of timers.setInterval(1000, "ignore")){
   console.info(`Start  time at ${new Date()}`) 
}