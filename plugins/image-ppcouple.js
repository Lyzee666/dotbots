import fetch from 'node-fetch'
import func from '../lib/function.js'
let handler = async (m, { conn }) => {
func.fetchRandomJson('https://raw.githubusercontent.com/irwanx/db/master/random/couple.js').then(v => {
conn.sendFile(m.chat, v.male, 'ppcp.jpg', "Lakii", m)
conn.sendButton(m.chat, "Ceweny Make yang ini", wm, v.female, [['Next', '#ppcp']], m)
console.log(v)
})
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['image']
handler.command = /^(ppcp|ppcouple)$/i
handler.limit = true
handler.register = true

export default handler
