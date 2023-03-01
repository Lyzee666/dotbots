import {
    sticker
} from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import {
    webp2png
} from '../lib/webp2mp4.js'
import db from '../lib/database.js'

let handler = m => m
handler.before = async function(m, {
    conn
}) {
    let stiker = false
    if (db.data.chats[m.chat].autoSticker) {
        try {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || q.mediaType || ''
            if (/webp|image|video/g.test(mime)) {
                if (/video/g.test(mime))
                    if ((q.msg || q).seconds > 11) return false
                let img = await q.download?.()
                let out
                try {
                    if (/webp/g.test(mime)) out = await webp2png(img)
                    else if (/image/g.test(mime)) out = await uploadImage(img)
                    else if (/video/g.test(mime)) out = await uploadFile(img)
                    if (typeof out !== 'string') out = await uploadImage(img)
                    stiker = await sticker(false, out, global.packname, global.author)
                } catch (e) {
                    console.error(e)
                } finally {
                    if (!stiker) stiker = await sticker(img, false, global.packname, global.author)
                }
            }
        } catch (e) {
            console.error(e)
            if (!stiker) stiker = e
        } finally {
            if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
            else throw false
        }
    }
}
export default handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}