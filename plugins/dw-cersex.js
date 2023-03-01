import db from '../lib/database.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let { age } = db.data.users[m.sender]
  if (age < 18) throw m.reply('minimal umur 18 tahun, bocah gausah make ini, pake fitur lain aja')
  let a = await fetch("https://leyscoders-api.herokuapp.com/api/cersex?apikey=dappakntlll")
  let b = await a.json()
  let { gambar, result } = await b
  await conn.sendFile(m.chat, gambar, 'cersex.jpg', result, m)
}
handler.help = ['cersex'].map(v => v + ' <query>')
handler.tags = ['dewasa']
handler.command = /^(cersex)$/i

handler.register = true
handler.limit = true
handler.mature = true

export default handler