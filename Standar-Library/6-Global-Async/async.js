// Saat kita belajar JavaScript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai async
// Saat kita menggunakan Module, secara default, global code adalah Async, oleh karena itu kita bisa menggunakan Async Await 
// Kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai Async jika ingin menggunakan Async Await



//javascript biasa harus seperti ini
// function samplePromise(){
//     return Promise.resolve("eko")
// }
// async function run(){
//     const name = await samplePromise()
//     console.info(name)
// }

// run()

//jika tidak memakai mjs ()err
function samplePromise(){
    return Promise.resolve("eko")
}

    const data = await samplePromise()
    console.info(data)
