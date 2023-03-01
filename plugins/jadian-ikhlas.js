import db from '../lib/database.js'
let handler = async (m, { conn }) => {
  if (db.data.users[m.sender].pacar == "") return conn.reply(m.chat, `Kamu sedang tidak menembak siapapun!`, m)
  if (db.data.users[db.data.users[m.sender].pacar].pacar == m.sender) return conn.reply(m.chat, `Kamu telah berpacaran dengan @${db.data.users[m.sender].pacar.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [db.data.users[m.sender].pacar]
  }})
  conn.reply(m.chat, `Kamu sudah mengikhlaskan @${db.data.users[m.sender].pacar.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {
    mentionedJid: [db.data.users[m.sender].pacar]
  }})
  db.data.users[m.sender].pacar = ""
}
handler.help = ['ikhlasin']
handler.tags = ['jadian']
handler.command = /^(ikhlasin|ikhlas)$/i
handler.group = true
handler.register = true

export default handler