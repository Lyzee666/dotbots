let handler = async (m, { conn, usedPrefix, participants, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) return await conn.sendButton(m.chat, await conn.sendTr(`Masih ada absen di chat ini!`), wm, null, [['Delete', `${usedPrefix}-absen`]], conn.absen[id][0])
    conn.absen[id] = [
        await conn.sendButton(m.chat, await conn.sendTr(`Absen dimulai`), wm, null, [['Absen', `${usedPrefix}absen`]], m, {mentions: participants.map(a => a.id)}),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(\+|start|mulai)absen$/i
handler.admin = true
handler.group = true
handler.register = true
handler.owner = true

export default handler