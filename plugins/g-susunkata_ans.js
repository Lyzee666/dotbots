import similarity from 'similarity'
import db from '../lib/database.js'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suka/i.test(m.quoted.contentText)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.replyv2('Soal itu telah berakhir')
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        if (['.suka', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.susunkata[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.susunkata[id][2]} XP`, wm, null, [['Susun Kata', '.susunkata']], m)
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
        else m.replyv2(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
handler.register = true
handler.indo = true
export default handler
