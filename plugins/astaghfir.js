import func from '../lib/function.js'
import db from '../lib/database.js'
let handler = async (m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.warning == 0) throw 'Kamu tidak memiliki warning!'

    let waktu = user.lastistighfar + 180000
    if (new Date() * 1 - waktu < 180000) throw `Kamu bisa menggunakan perintah ini lagi setelah ${await conn.msToDate(waktu - new Date() * 1)}`
    user.warning -= 1
    m.replyv2(`Warning: ${user.warning} / 5`)
    user.lastIstigfar = new Date() * 1
}
handler.command = /^(astagh?fir(ullah)?|maaf)$/i

handler.limit = 1

export default handler 