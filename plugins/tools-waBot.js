let handler = async (m, { conn, text, usedPrefix, command }) => {
    let res = `https://wa.me/${conn.user.jid.split('@')[0]}?text=Hai+kak`
    await m.replyv2(res)
}
handler.help = ['wabot']
handler.tags = ['tools']
handler.command = /^(wabot)$/i
handler.register = true

export default handler