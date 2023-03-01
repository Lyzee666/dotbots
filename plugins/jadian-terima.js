import db from '../lib/database.js'
let handler = async (m, { conn, groupMetadata, usedPrefix, text }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Berikan nomor, tag atau balas pesan target.`, m)
  if(isNaN(number)) return conn.reply(m.chat, `Nomor yang anda masukan tidak salah!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let participants = groupMetadata.participants.map(v => v.id)
    let users = participants.filter(v => v.endsWith(user))
    if(!users) return conn.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `Tidak bisa berpacaran dengan saya t_t`, m)
    
    if(db.data.users[user].pacar != m.sender){
      conn.reply(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{
        mentions: [user]
      })
    }else{
      db.data.users[m.sender].pacar = user
      conn.reply(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]} 💓 @${m.sender.split('@')[0]} 🥳🥳🥳`,m,{
        mentions: [m.sender,user]
      })
    }
	}	
}
handler.help = ['terima @tag']
handler.tags = ['jadian']
handler.command = /^(terima)$/i
handler.group = true
handler.register = true


export default handler