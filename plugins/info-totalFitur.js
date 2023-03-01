import { plugins } from '../lib/plugins.js'
let handler = async (m, { conn }) => {
  let tot = Object.values(plugins).filter(p => !p.disabled).map(p => Array.isArray(p.command) ? p.command : [p.command]).length
  let total = 'Total fitur ' + tot
  m.reply(total)
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(total)?fitur$/i
handler.register = true

export default handler