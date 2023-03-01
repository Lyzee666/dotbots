let handler = async (m, { conn }) => {
  m.reply("eror astaga")
  const user = m.sender
  await conn.sendMessage(m.chat, { text: "Testing" }, {
    quoted: {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "broadcast"
      },
      message: {
        contactMessage: {
          displayName: conn.getName(user),
          vcard: `BEGIN:VCARD\n` + `VERSION:3.0\n` + `TEL;type=CELL;type=VOICE;waid=${user.split("@")[0]}:${user.split("@")[0]}\n` + `END:VCARD`
        }
      }
    }
  })
}

handler.command = /^(bg)$/i
handler.owner = true
export default handler