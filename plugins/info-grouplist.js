var { store } = (await import('../lib/connection.js')).default
let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🪪${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.replyv2(`List Groups:
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.register = true

export default handler