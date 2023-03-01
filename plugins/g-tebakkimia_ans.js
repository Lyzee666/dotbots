import similarity from 'similarity'
import db from '../lib/database.js'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.contentText)) return !0
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia)) return m.replyv2('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
        if (['.teka', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkimia[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.tebakkimia[id][2]} XP`, wm, null, [['Tebak Kimia', '.tebakkimia']], m)
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
        else m.replyv2(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
handler.register = true
handler.indo = true
export default handler
