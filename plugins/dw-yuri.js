import db from '../lib/database.js'
import fetch from 'node-fetch'
import neko from 'nekos.life'
let Neko = new neko()
let handler = async (m, { conn, args }) => {
     let { age } = db.data.users[m.sender]
     if (age < 18) throw 'minimal umur 18 tahun, bocah gausah make ini, pake fitur lain aja'
     if (!db.data.chats[m.chat].mature && m.isGroup) throw 'ups nsfw lagi opp'
     json = (await Neko.nsfw.yuri()).url
     conn.sendFile(m.chat, json, 'yuri.jpg', done, m, false)
}
handler.help = ['yuri']
handler.tags = ['dewasa']
handler.command = /^yuri$/i

handler.private = true
handler.register = true
handler.limit = true
handler.mature = true

export default handler