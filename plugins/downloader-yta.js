let limit = 50
import db from '../lib/database.js'
var { servers, yta } = (await import('../lib/y2mate.js')).default
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return m.reply('Uhm... urlnya mana?')
    let chat = db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : wait)
  if (!isLimit) conn.sendMessage(m.chat, { document: {url:dl_link}, mimetype: 'audio/mpeg', fileName: title + '.mp3' }, {quoted: m})
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.register = true
handler.exp = 0

export default handler
