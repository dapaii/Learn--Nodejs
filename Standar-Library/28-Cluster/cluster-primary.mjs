// Seperti yang dijelaskan di awal, bahwa NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual menggunakan worker thread, tapi tetap dalam satu process
// NodeJS memiliki standard library bernama Cluster, dimana kita bisa menjalankan beberapa process NodeJS secara sekaligus
// Ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita utilisasi dengan baik, misal kita jalankan process NodeJS sejumlah CPU core
// https://nodejs.org/dist/latest-v16.x/docs/api/cluster.html 

// Cluster Primary dan Worker
// Di dalam Cluster, terdapat 2 jenis aplikasi, Primary dan Worker
// Primary biasanya digunakan sebagai koordinator atau manajer untuk para Worker
// Sedangkan Worker sendiri adalah aplikasi yang menjalankan tugas nya

import cluster from "cluster"
import http from "http"
import os from "os"
import process from "process"

// cluster primary
if(cluster.isPrimary){
    // jalankan worker
    console.info(`primary : ${process.pid}`)
    for(let i = 0; i < os.cpus().length; i++){
        cluster.fork()
    }
    cluster.addListener("exit", (worker)=>{
        console.info(`Worker-${worker.id} is exit`)
        cluster.fork()
    })
}

// cluster Worker
if(cluster.isWorker){
    console.info(`woker : ${process.pid}`)

    const server = http.createServer((request, response) =>{
        response.write(`Response from process ${process.pid}`)
        response.end()
        response.exit()
    })

    server.listen(3000)
}