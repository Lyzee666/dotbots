let handler = async (m, {
    isOwner,
    isAdmin,
    conn,
    text,
    participants
}) => {
    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }
    const delay = time => new Promise(res => setTimeout(res, time))
    var b = await conn.groupMetadata(m.chat)
    await m.replyv2(`Otw Tag ${b.participants.length} Nomor Selama ${b.participants.length * 1.5} detik`)
    const t = m.quoted && m.quoted.text ? m.quoted.text : text
    var data = await b.participants.map(v => v.id)
    for (let i = 0; i < data.length; i++) {
        await conn.sendMessage(m.chat, {
            text: `${t}

@${data[i].split("@")[0]}`,
            mentions: [data[i]],
            jpegThumbnail: image
        }, {
            quoted: {
                key: {
                    fromMe: false,
                    participant: '0@s.whatsapp.net',
                    remoteJid: "status@broadcast"
                },
                message: {
                    conversation: "Tagall V2 By " + await conn.getName(m.sender)
                }
            }
        })
        await delay(1500)
    }
}
handler.help = ['tagallv2 <pesan>']
handler.tags = ['group']
handler.command = /^(t(agallv2)?)$/i
handler.register = true

export default handler