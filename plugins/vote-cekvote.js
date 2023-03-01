let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, await conn.sendTR(`Tidak ada voting digrup ini!`), wm, null, [['Start', `${usedPrefix}+vote`]], m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *Vote* 」

*Reason:* ${reason}

*Upvote*
_Total: ${upvote.length}_
${upvote.map(u => db.data.users[u].name).join('\n')}

*Devote*
_Total: ${devote.length}_
${devote.map(u => db.data.users[u].name).join('\n')}`.trim()
    await conn.sendButton(m.chat, caption, wm, null, [['Upvote', `${usedPrefix}upvote`], ['Devote', `${usedPrefix}devote`], ['Hapus', `${usedPrefix}-vote`]], m)
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.register = true

export default handler