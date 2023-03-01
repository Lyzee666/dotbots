import {
    readFileSync
} from 'fs'
import db from '../lib/database.js'
let handler = async (m, { conn, command, usedPrefix, text }) => {
  let _uptime = process.uptime() * 1000
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(db.data.users).length
  let userdaftar = Object.values(db.data.users).filter(user => user.registered == true).length
  let { version } = await readFileSync('./package.json').toString()
  let infonyacok = `
INFORMASI BOT

Library : *Baileys-MD*
Language : *Javascript*
Database : *MongoDB*
Version : *${version}*
Developer : *@${owner[0][0]}*
Runtime : *${runtime}*
Prefix : *Multi Prefix 「 ${usedPrefix} 」*
Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
User : *${usergakdaftar}*
Register : *${userdaftar}*
`.trim()
     conn.sendButton(m.chat, infonyacok, wm, null, [[`SC Bot`, `${usedPrefix}sc`], [`Menu`, `${usedPrefix}menu`]], m,        
           {mentions: [owner[0][0] + '@s.whatsapp.net']})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot)$/i
handler.register = true

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

