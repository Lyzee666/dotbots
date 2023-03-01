import similarity from 'similarity'
import db from '../lib/database.js'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.contentText)) return !0
  this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
  if (!(id in this.tebakgambar)) return m.replyv2('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
    if (['.hint', 'Bantuan', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      db.data.users[m.sender].exp += this.tebakgambar[id][2]
      await this.sendButton(m.chat, `*Benar!* +${this.tebakgambar[id][2]} XP`, wm, null, [['Tebak Gambar', '.tebakgambar']], m)
      clearTimeout(this.tebakgambar[id][3])
      delete this.tebakgambar[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
    else m.replyv2(`*Salah!*`)
  }
  return !0
}
handler.exp = 0
handler.register = true
handler.indo = true
export default handler
