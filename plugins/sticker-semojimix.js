//-- MODULE IN
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

//-- MODULE EX 
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //-- HELP

    if (args[0] == 'help') return m.reply(`*HELP COMMAND*

Comand ini untuk membuat stiker emoji gabungan

Contoh:
${usedPrefix}semix 😀🥰

This command to make a composite emoji sticker

Ex:
${usedPrefix}semix 😀🥰`)

    //-- ICON PREVIEW
    var wk = m.isGroup ? m.sender : m.key.participant
    var pp = await conn.profilePictureUrl(m.sender)
    var ic = await (await fetch(pp)).buffer()

    let wame = `https://wa.me/${global.call}`

    try {
        m.replyv2(`Stiker sedang dibuat...`)

        var res = await axios.get(`https://api.neoxr.eu.org/api/emoji?q=${encodeURIComponent(text)}&apikey=yourkey`)
        var hsl = res.data
        console.log(hsl)
        /*
        if (res.data.status == false){
        conn.sendMessage(m.chat, {
        text: `Emoticon tidak support. silahkan ganti emoticon lain`,
        contextInfo: {
        forwardingScore: 1337,
        isForwarded: true,
        externalAdReply: {
        title: global.name,
        body: `Klik disini untuk wa owner`,
        previewType: 'PHOTO',
        thumbnail: ic,
        sourceUrl: wame,
        }}}, { quoted: m })
        }
        }
        */
        var out = res.data.data.url
        var stiker = await sticker(false, out, global.packname, global.author)

        conn.sendMessage(m.chat, {
            sticker: stiker,
            fileLength: 10540,
            contextInfo: {
                forwardingScore: 449,
                isForwarded: true,
                externalAdReply: {
                    title: global.name,
                    body: `Nih stikernya ${m.name}`,
                    previewType: 'PHOTO',
                    thumbnail: ic,
                    sourceUrl: wame,
                }
            }
        }, { quoted: m });

    } catch {
        conn.sendMessage(m.chat, {
            text: `Emoticon tidak support. silahkan ganti emoticon lain`,
            contextInfo: {
                forwardingScore: 1337,
                isForwarded: true,
                externalAdReply: {
                    title: global.name,
                    body: `Klik disini untuk wa owner`,
                    previewType: 'PHOTO',
                    thumbnail: ic,
                    sourceUrl: wame,
                }
            }
        }, { quoted: m })
    }


}
handler.help = ['semix *😳😩*']

handler.tags = ['sticker']
handler.command = /^(semix)$/i
handler.register = true
export default handler

const isUrl = (text) => {

    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))

}

