import db from '../lib/database.js'
let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '')
  }

  text = no(text)

  if (isNaN(text)) {
    var number = text.split`@`[1]
  } else if (!isNaN(text)) {
    var number = text
  }

  if (number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted) {
    user = m.sender
    var orang = "Kamu"
  } else if (text) {
    var user = number + '@s.whatsapp.net'
    var orang = "orang yang kamu tag"
  } else if (m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "orang yang kamu balas"
  } else if (m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "orang yang kamu tag"
  }

  if (typeof db.data.users[user] == "undefined") {
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (typeof db.data.users[db.data.users[user].pacar] == "undefined" && db.data.users[user].pacar != "") {
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (db.data.users[user].pacar == "") {
    conn.replyv2(m.chat, orang + await conn.sendTr(`tidak memiliki pacar dan tidak sedang menembak siapapun\n\n*Ketik .jadian @user untuk menembak orang*`), m)
  } else if (db.data.users[db.data.users[user].pacar].pacar != user) {
    conn.replyv2(m.chat, orang + await conn.sendTr(`sedang menunggu jawaban dari`) + ` @${db.data.users[user].pacar.split('@')[0]} ` + await conn.sendTr(`karena sedang tidak diterima atau di tolak\n\nKetik *${usedPrefix}ikhlasin* untuk mengikhlaskan!`), m, {
      mentions: [db.data.users[user].pacar]
    })
  } else {
    conn.replyv2(m.chat, orang  + await conn.sendTr(`sedang menjalani hubungan dengan`) + ` @${db.data.users[user].pacar.split('@')[0]} 💓💓💓`, m, {
      mentions: [db.data.users[user].pacar]
    })
  }
}
handler.help = ['cekpacar']
handler.tags = ['jadian']
handler.command = /^(cekpacar)$/i
handler.fail = null
export default handler