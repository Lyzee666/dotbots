let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, await conn.sendTR(`Tidak ada voting digrup ini!`), wm, null, [['Start', `${usedPrefix}+vote`]], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *Vote* 」

*Reason:* ${reason}

*Upvote*
_Total: ${upvote.length}_
${upvote.map(u => db.data.users[u].name).join('\n')}

*Devote*
_Total: ${devote.length}_
${devote.map(u => db.data.users[u].name).join('\n')}`
    conn.sendButton(m.chat, caption, wm, null, [['Upvote', `${usedPrefix}upvote`], ['Devote', `${usedPrefix}devote`]], m)
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.register = true

export default handler