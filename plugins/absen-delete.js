let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, await conn.sendTr(`Tidak ada absen berlangsung!`), wm, null, [['Start', `${usedPrefix}+absen`]], m)
    delete conn.absen[id]
    m.reply(`berhasil menghapus sesi absen!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(-|delete|hapus)absen$/i
handler.admin = true
handler.group = true
handler.owner = true
handler.register = true

export default handler