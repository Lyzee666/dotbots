import db from '../lib/database.js'
let handler = async (m, { conn }) => {
  var ayg = db.data.users[m.sender]

  if(ayg.pacar == ""){
    return conn.reply(m.chat,`Anda tidak memiliki pacar.`,m)
  }
  
  var beb = db.data.users[db.data.users[m.sender].pacar]

  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${db.data.users[m.sender].pacar.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [db.data.users[m.sender].pacar]
    }})
    ayg.pacar = ""
  }

  if (m.sender == beb.pacar){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${db.data.users[m.sender].pacar.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [db.data.users[m.sender].pacar]
    }})
    ayg.pacar = ""
    beb.pacar = ""
  }else {
    conn.reply(m.chat,`Anda tidak memiliki pacar.`,m)
  }
}
handler.help = ['putus']
handler.tags = ['jadian']
handler.command = /^(putus)$/i
handler.register = true
handler.group = true

export default handler