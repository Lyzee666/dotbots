import db from '../lib/database.js'
import fetch from "node-fetch"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let { age } = db.data.users[m.sender]
    if (age < 18) throw m.reply('minimal umur 18 tahun, bocah gausah make ini, pake fitur lain aja')
    if (!text) throw m.replyv2(`Contoh Penggunaan:\n*${usedPrefix + command} https://xvideos.com/*`)
    m.replyv2(wait)
    let link = await( await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${args[0]}`)).json()
    let mp  = link.mp4
    await conn.sendFile(m.chat,mp, 'bkp.mp4', done, m)
    }
handler.help = ['xvideosdl'].map(v => v + ' <url>')
handler.command = ['xvideosdl']
handler.tags = ['dewasa']

handler.limit = true
handler.private = false
handler.register = true
handler.mature = true

export default handler