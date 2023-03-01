let handler = async (m, { conn }) => {
let tqto = `*THANKS TO*

Nurutomo: 
Github: https://github.com/Nurutomo
Istikmal: 
Github: https://github.com/BochilGaming
Amirul: 
Github: https://github.com/amiruldev20
Irwan:
Github: https://github.com/irwanx
Amelia: 
Github: https://github.com/Ameliascrf
Ayanc:
Github: https://github.com/RidOne673

Orang-Orang Yang Donasi
Wifi Tetangga
`
 conn.sendButton(m.chat, tqto, wm, null, [[`Source Code Bot`, '#sc#']], m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

export default handler