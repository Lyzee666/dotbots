import similarity from 'similarity'
import db from '../lib/database.js'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekb/i.test(m.quoted.contentText)) return !0
    this.tebakkabupaten = this.tebakkabupaten ? this.tebakkabupaten : {}
    if (!(id in this.tebakkabupaten)) return m.replyv2('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakkabupaten[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkabupaten[id][1]))
        if (['.tekb', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkabupaten[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.tebakkabupaten[id][2]} XP`, wm, null, [['Tebak Kabupaten', '.tebakkabupaten']], m)
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
        } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
        else m.replyv2(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
handler.indo = true
handler.register = true
export default handler
