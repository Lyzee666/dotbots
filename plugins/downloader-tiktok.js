import axios from 'axios'
import util from 'util'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw 'Silahkan masukan linknya'
try {
m.reply(`Video sedang didownload...`)
var res = await axios('https://ssyoutube.com/api/convert', {method: "POST", data: `url=${args[0]}`})

var json = res.data

conn.sendFile(m.chat, util.format(json.url[0].url), 'video.mp4', `*TIKTOK DOWNLOADER*

ID: ${json.id}
TITLE: ${util.format(json.meta.title)}
DURATION: ${util.format(json.meta.duration)}`, m)
} catch {
    m.reply(`Permintaan tidak dapat diproses, silahkan coba lagi nanti!!`)
}
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

export default handler