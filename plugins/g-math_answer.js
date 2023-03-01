import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m) {
  if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
  let id = m.chat
  // if (!m.quoted || m.quoted.sender != this.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
  this.math = this.math ? this.math : {}
  try {
    if (!(id in this.math) && /^Berapa hasil dari/i.test(m.quoted.text)) return m.replyv2('Soal itu telah berakhir')
    // if (m.quoted.id == this.math[id][0].id) {
    let math = JSON.parse(JSON.stringify(this.math[id][1]))
    if (m.text == math.result) {
      db.data.users[m.sender].exp += math.bonus
      clearTimeout(this.math[id][3])
      delete this.math[id]
      await this.sendButton(m.chat, `*Benar!* +${math.bonus} XP`, wm, null, [[`${math.mode.toUpperCase()}`, `.math ${math.mode}`]], m)
    } else {
      if (--this.math[id][2] == 0) {
        clearTimeout(this.math[id][3])
        delete this.math[id]
        await this.sendButton(m.chat, `*Kesempatan habis!*\nJawaban: *${math.result}*`, wm, null, [[`${math.mode.toUpperCase()}`, `.math ${math.mode}`]])
      } else m.replyv2(`*Jawaban Salah!*\nMasih ada ${this.math[id][2]} kesempatan`)
    }
  } catch (e) { return }
  // }
  return !0
}

export default handler
