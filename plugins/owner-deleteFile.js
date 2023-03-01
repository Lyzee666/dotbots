import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw m.replyv2(`uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/melcanz.js`)
    let path = `${text}`
    await fs.rmSync(path)
    m.replyv2(`Sukses Menghapus ${path}`)
}
handler.help = ['df'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^df$/i

handler.register = true
handler.rowner = true

export default handler