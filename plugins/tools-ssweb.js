import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let res = await (await fetch(`https://mnazria.herokuapp.com/api/screenshotweb?url=${args[0]}`)).json()
  await conn.sendMessage(m.chat, { image: { url: res.gambar }, fileLength: numb, caption: done}, { quoted: m })
}
handler.help = ['ss'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss$/i
handler.register = true

export default handler