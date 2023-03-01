let limit = 100
// const { servers, ytv } = require('../lib/y2mate')
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0]))
  let video, source, link, lastError
  for (let i in _video) {
    try {
      video = _video[i]
      link = await video.download()
      if (link) source = await (await fetch(link)).arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
      continue
    }
  }
  if (!(source instanceof ArrayBuffer) || !link) throw 'Error: ' + (lastError || 'Can\'t download video')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < video.fileSize
  if (!isY) m.replyv2(isLimit ? `Ukuran File: ${video.fileSizeH}\nUkuran file diatas ${limit} MB, download sendiri: ${link}` : wait)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, link, title + '.mp4', `
📌 *Title:* ${title}
🗎 *Filesize:* ${video.fileSizeH}
`.trim(), m, false, {
    ..._thumb,
    asDocument: false
  })
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.register = true
handler.exp = 0

export default handler