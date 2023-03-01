import db from '../lib/database.js'
import fetch from "node-fetch"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    let { age } = db.data.users[m.sender]
    if (age < 18) throw m.reply('minimal umur 18 tahun, bocah gausah make ini, pake fitur lain aja')
    if (!text) throw m.replyv2(`Contoh Penggunaan:\n*${usedPrefix + command} japanese*`)
    let res = await(await fetch(`https://mnazria.herokuapp.com/api/porn?search=${args}`)).json()
    m.replyv2(wait)
    let json = JSON.parse(JSON.stringify(res.result))
    let ran = json[Math.floor(Math.random() * json.length)]
    let { actors, duration, image, title, url } = ran //Kalau mau bisa tambahin di caption
    let link = await (await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${url}`)).json()
    let mp = link.mp4
    await conn.sendFile(m.chat, mp, 'anu.mp4', done, m)
}
handler.help = ['playb', 'xvideos']
handler.command = ['playb', 'xvideos']
handler.tags = ['dewasa']

handler.limit = true
handler.private = false
handler.register = true
handler.mature = true

export default handler