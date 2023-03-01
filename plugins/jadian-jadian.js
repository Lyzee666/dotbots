import db from '../lib/database.js'
let handler = async (m, { conn, groupMetadata, usedPrefix, text }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag target atau balas pesan target`, m)
  if(isNaN(number)) return conn.reply(m.chat, `_*Nomor tidak valid.*_`, m)
  if(number.length > 15) return conn.reply(m.chat, `*_Format Tidak Valid.*_`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentioned) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let participants = groupMetadata.participants.map(v => v.id)
    let users = participants.filter(v => v.endsWith(user))
    if(!users) return conn.reply(m.chat, `*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`, m)
    if(user === m.sender) return conn.reply(m.chat, `_*Tidak bisa berpacaran dengan diri sendiri.*_`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `_*Tidak bisa berpacaran dengan saya. :')*_`, m)

    if (typeof db.data.users[user] == "undefined") return m.replyv2("_*Orang yang anda tag tidak terdaftar di dalam database.*_")
    
    if(db.data.users[m.sender].pacar != "" && db.data.users[db.data.users[m.sender].pacar].pacar == m.sender && db.data.users[m.sender].pacar != user){
      conn.reply(m.chat,`Kamu sudah berpacaran dengan @${db.data.users[m.sender].pacar.split('@')[0]}\n\nSilahkan putus dulu (ketik .putus untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{
        mentions: [user,db.data.users[m.sender].pacar]
      })
    }else if(db.data.users[user].pacar != ""){
      var pacar = db.data.users[user].pacar
      if (db.data.users[pacar].pacar == user){
        if (m.sender == pacar && db.data.users[m.sender].pacar == user) return conn.reply(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{
          mentions: [pacar]
        })
        conn.reply(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pacar lain!`,m,{
          mentions: [user,pacar]
        })
      }else{
        db.data.users[m.sender].pacar = user
        conn.reply(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`,m,{
          mentions: [user]
        })
      }
    }else if (db.data.users[user].pacar == m.sender){
      db.data.users[m.sender].pacar = user
      conn.reply(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 🥳🥳🥳`,m,{
        mentions: [user]
      })
    }else {
      db.data.users[m.sender].pacar = user
      conn.reply(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`,m,{
        mentions: [user]
      })
    }
	}	
}
handler.help = ['tembak *@tag*']
handler.tags = ['jadian']
handler.command = /^(tembak)$/i
handler.group = true
handler.register = true
handler.limit = true

export default handler