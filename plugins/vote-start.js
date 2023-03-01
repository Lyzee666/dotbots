let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) return conn.sendButton(m.chat, await conn.sendTR('Masih ada vote di chat ini!'), wm, null, [['Delete', `${usedPrefix}-vote`]], m)
    conn.sendButton(m.chat, await conn.sendTR(`Vote is Starting!

#upvote - to agree
#devote - to disagree
#cekvote - to check the vote
#deletevote - to delete votes`), wm, null, [['Upvote', `${usedPrefix}upvote`], ['Devote', `${usedPrefix}devote`]], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i
handler.register = true

export default handler