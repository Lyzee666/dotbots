let handler = async (m, { conn, usedPrefix, command }) => {
let res = "https://hadi-api.herokuapp.com/api/randomImage/cecan"
await conn.sendButton(m.chat, done, wm, res, [['Next', usedPrefix + command]])
}
handler.help = ['cecan']
handler.tags = ['image']
handler.command = /^(cecan)$/i

handler.register = true
handler.limit = true

export default handler