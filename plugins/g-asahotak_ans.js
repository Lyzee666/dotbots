import similarity from 'similarity'
import db from '../lib/database.js'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.replyv2('Soal itu telah berakhir')
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.asahotak[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.asahotak[id][2]} XP`, wm, null, [['Asah Otak', '.asahotak']], m)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
        else m.replyv2(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
handler.indo = true
handler.register = true

export default handler
