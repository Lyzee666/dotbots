import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw m.replyv2(`uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/melcanz.js`)
    if (!m.quoted.text) throw m.replyv2(`balas pesan nya!`)
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.replyv2(`tersimpan di ${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.register = true
handler.rowner = true

export default handler