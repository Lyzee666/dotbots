import {
  facebookdl,
  facebookdlv2
} from '@bochilteam/scraper'
let handler = async (m, {
  conn, args, usedPrefix, command, text
}) => {
  if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
  let res = await facebookdlv2(text).then(v => v.result).then(async v => {
    await conn.sendMedia(m.chat, v[0].url, m, {
      caption: wm
    })
  })
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.register = true

export default handler