import { dare } from '@bochilteam/scraper'
let handler = async (m) => m.replyv2(await dare())

handler.help = ['dare']
handler.tags = ['quotes', 'fun']
handler.command = /^(dare)$/i
handler.register = true

export default handler
