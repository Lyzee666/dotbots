import fetch from "node-fetch"
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/batues.txt')
let txt = await res.text()
let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButton(m.chat, done, wm, cita, [['Next', usedPrefix + command]])
}
handler.tags = ['image']
handler.help = ['bts']
handler.command = /^(bts)$/i
handler.limit = true
handler.register = true

export default handler