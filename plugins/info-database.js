import db from '../lib/database.js'
let handler = async (m) => {
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    m.reply(`*Jumlah database saat ini ${totalreg} user*
Terdaftar ${rtotalreg}`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.register = true
export default handler
