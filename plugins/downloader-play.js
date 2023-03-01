import {
    youtubeSearch
} from '@bochilteam/scraper'
let handler = async (m, {
    conn,
    command,
    text,
    usedPrefix
}) => {
    if (!text) throw `Use example ${usedPrefix}${command} Widodari`
    let vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw 'Video/Audio Tidak ditemukan'
    var {
        title,
        description,
        thumbnail,
        videoId,
        durationH,
        viewH,
        publishedTime
    } = vid
    var url = 'https://www.youtube.com/watch?v=' + videoId
    await conn.sendButton(m.chat, `
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(), wm, null, [
        ['Audio 🎧', `${usedPrefix}yta ${url} yes`],
        ['Video 🎥', `${usedPrefix}ytv ${url} yes`]
    ], m, { asDocument: true,
        contextInfo: {
            externalAdReply: {
                mediaUrl: url,
                title: title,
                body: description,
                mediaType: 2,
                previewType: 0,
                //thumbnail: await conn.buffer(thumbnail, + `,plays`)
            }
        }
    })
}
handler.help = ['play', 'play2', 'p'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play2|play)$/i

handler.register = true
handler.exp = 0
handler.limit = false

export default handler