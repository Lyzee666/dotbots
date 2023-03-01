let handler = async (m, { conn, text, participants, usedPrefix }) => {
    if (!text) throw `contoh:\n${usedPrefix}paling cantik`
    let member = participants.map(u => u.id)
    let cakep = member[Math.floor(Math.random() * member.length)]
    let jawab = `Yang paling ${text} disini adalah @${cakep.replace("@")[0]}`.trim()
    let men = [cakep]
    conn.reply(m.chat, jawab, m, { mentions: men })
}
handler.help = ['paling <teks>']
handler.tags = ['fun']
handler.command = /^(paling)$/i
handler.group = true

handler.register = true
export default handler