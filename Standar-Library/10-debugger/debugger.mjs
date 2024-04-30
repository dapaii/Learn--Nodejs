// NodeJS memiliki fitur debugger, dimana kita bisa mengikuti tahapan eksekusi program di NodeJS
// Hal ini sangat cocok ketika kita melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita
// https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html 


// Breakpoint
// Dalam debugging, terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program
// Biasanya ini dilakukan untuk mengawasi data-data di sekitar lokasi berhentinya tersebut
// Untuk menambahkan breakpoint, kita bisa menggunakan kata kunci: debugger

// Menjalankan Mode Debug
// Jika kita menjalankan file JavaScript hanya dengan menggunakan perintah node namafile.js, maka secara default dia tidak akan jalan dalam mode debug
// Agar jalan dalam mode debug, kita harus menambahkan perintah inspect :node inspect namafile.js

// Perintah Debugger
// Saat masuk ke mode debug, ada beberapa perintah yang bisa kita gunakan dalam melakukan debugging
// cont, c: Continue execution
// next, n: Step next
// step, s: Step in
// out, o: Step out
// pause: Pause running code


function sayHello(name){
    debugger;
    return `hello ${name}`
}

const name = "eko"
console.info(sayHello(null)) //mencari kesalahan dengan node inspect debugger.mjs => watch("name") => 