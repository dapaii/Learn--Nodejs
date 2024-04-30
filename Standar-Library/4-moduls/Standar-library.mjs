// Standard Library yang terdapat di NodeJS bisa kita gunakan seperti layaknya JavaScript Modules
// Jika belum mengerti tentang JavaScript Modules, silahkan pelajari kelas saya tentang JavaScript Modules
// Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs



//untuk modules direkomendasikan menggunakan nama mjs untuk sebagai pembeda
//contoh ini di ambil dari Standar Library
import os from "os"

console.info(os.platform())
console.table(os.cpus())