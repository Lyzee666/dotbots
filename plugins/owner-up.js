let handler = async (m, {
    conn
}) => {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^up.$/i
handler.tags = ['owner']
handler.help = ['up']

handler.register = true
handler.owner = true
handler.botAdmin = true
export default handler