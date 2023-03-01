let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, await conn.sendTR(`Tidak ada voting digrup ini!`), wm, null, [['Start', `${usedPrefix}+vote`]], m)
    delete conn.vote[id]
    m.reply(`Berhasil!`)
}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i
handler.register = true

export default handler