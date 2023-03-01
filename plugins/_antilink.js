/*
import db from '../lib/database.js'
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) throw !0
        }
        this.sendButton(m.chat, `*Group link detect!*${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['off antilink', '/disable antilink'], m)
        if (isBotAdmin && bot.restrict) {
            await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}
*/
import db from '../lib/database.js'
let handler = m => m

let linkRegex = /(https?:\/\/)?chat.whatsapp.com\/[a-zA-Z0-9]{22}\/?/
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let izin = m.text.includes('#izin') || m.text.includes('#ijin') || m.text.includes('ijin') || m.text.includes('izin')
  let bahasa = db.data.users[m.sender].language == 'id'

  if (chat.antiLink && isGroupLink && !isAdmin && bahasa && !izin && !m.isBaileys && m.isGroup) {
    let jmbt = await this.groupInviteCode(m.chat)
    let thisGroup = 'https://chat.whatsapp.com/' + jmbt
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await this.sendButton(m.chat, `*Link Grup Terdeteksi!*\nKamu akan di kick\n\nKetik *.off antilink* untuk mematikan fitur ini${db.data.settings[this.user.jid].restrict ? '' : '\nketik *.on restrict* supaya bisa kick'}`, wm, null, [['Matikan Antilink', ',0 antilink']], m)
    if (db.data.settings[this.user.jid].restrict) {
      if (!isBotAdmin) await this.sendButton(m.chat, `Untung W Bukan Admin, Jadi Ga W Kick Lu`, wm, null, [['Baiklah', 'ok']], m)
      if (isBotAdmin) this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  } else if (chat.antiLink && isGroupLink && !isAdmin && bahasa && izin && !m.isBaileys && m.isGroup) {
    let jmbt = await this.groupInviteCode(m.chat)
    let thisGroup = 'https://chat.whatsapp.com/' + jmbt
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await this.sendButton(m.chat, `Kamu Tidak akan di Kick Karena Kamu memakai tanda #izin Atau #ijin`, wm, null, [['OK', 'ok']], m)
  } else if (chat.antiLink && isGroupLink && !isAdmin && !bahasa && !m.isBaileys && m.isGroup) {
    let jmbt = await this.groupInviteCode(m.chat)
    let thisGroup = 'https://chat.whatsapp.com/' + jmbt
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await this.sendButton(m.chat, await this.sendTr(`*Link Grup Terdeteksi!*
Kamu akan di kick}`), wm, null, [['Off Kick', ',0 antilink']], m)
    if (db.data.settings[this.user.jid].restrict) {
      if (isBotAdmin) this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

export default handler
