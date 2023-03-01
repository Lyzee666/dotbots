let handler = async(m, { conn, text }) => {
  if(!text) throw `emotnya mana?`
  if(!m.quoted) throw `balas pesannya!`
  conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
 },
 text: text}}, { messageId: m.id })
}
handler.help = ['reaction <reply>']
handler.tags = ['tools']
handler.command = /^rea(c?t?i?o?n?)?$/i
handler.register = true

export default handler
