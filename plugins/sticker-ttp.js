import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, `https://api.erdwpe.com/api/maker/ttp?text=${teks}`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.register = true
handler.command = /^ttp$/i

export default handler