// Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita
// https://nodejs.org/dist/latest-v16.x/docs/api/report.html 

import process from "process"

process.report.reportOnFatalError = true
process.report.reportOnSignal = true
process.report.reportOnUncaughtException = true
process.report.filename = "./16-Report/report.json"

function sampleError(){
    throw new Error("ups!") //sengaja di buat err nanti ada file report.json
}

sampleError()