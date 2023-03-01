import db from '../lib/database.js'
let {
    downloadContentFromMessage
} = (await import('@adiwajshing/baileys'));

let handler = m => m
handler.before = async function(m, {
    conn
}) {
    let q = m.quoted ? m.quoted : m
    if (m.mtype == 'viewOnceMessage') {
        const buffer = await q.download()
        const media = q.mediaMessage[q.mediaType]
        if (db.data.chats[m.chat].viewonce) {
            let teks = `
「 *Anti ViewOnce Message* 」

Nama : ${m.pushName}
User : @${m.sender.split("@")[0]}
MessageType : ${m.mtype}
`
            await conn.reply(m.chat, teks, m, {
                mentions: [q.sender]
            })
            /*await m.copyNForward(m.chat, q.id, true, {
                readViewOnce: true
            }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))*/
            await conn.sendFile(m.chat, buffer, /video/.test(media.mimetype) ? 'video.mp4' : 'image.jpg', media.caption || '', m)
        }
    }
}
export default handler