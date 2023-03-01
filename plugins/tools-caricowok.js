import axios from "axios"
let handler = async (m, { conn, text }) => {
	await m.reply('Searching...')
	axios.get(`https://api.terhambar.com/nama?jenis=male`).then((res) => {
		let hasil = `${res.data.result.nama}`
		conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['caricowok']
handler.tags = ['tools']
handler.command = /^(caricowok)$/i

handler.register = true
export default handler