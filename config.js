global.namaown = "UDMODZ" // Owner Name
global.namabot = "𝗨𝗗𝗕𝗨𝗚𝗕𝗢𝗧" // Bot name
global.versisc = "1.0" // Vertion
global.owner = ["92704638406"] // Owners Whatsapp number
global.tele = "https://t.me/UDMODZ3" // Telegram Channel
global.url = "https://www.youtube.com/@UDMODZ" // Yt Channel
global.namastore = "udmodz" // UBAH NAMA STORE LU
global.simbol = "😎 " // Emoji in menus
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}  

global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Only for owner!*_',
    OnlyGrup: '_*❗Only in group!*_',
    private: '_(❗Only in chat !*_',
    wait: '_*Wait*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
     bugrespon: `\`[ # ]\` 𝗨𝗗𝗠𝗢𝗗𝗭
     𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗩𝗜𝗥𝗘𝗦`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     `,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})