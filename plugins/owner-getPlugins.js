//import plugins from '../lib/plugins.js'
import fs from 'fs'
let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys((await import('../lib/plugins.js')).plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw m.replyv2(`uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} menu`)
    if (!ar1.includes(text)) return m.replyv2(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.replyv2(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.register = true
handler.rowner = true 

export default handler
