let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, await conn.sendTr(`Tidak ada absen berlangsung!`), wm, null, [['Start', `${usedPrefix}mulaiabsen`]], m)
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw m.reply('*Kamu sudah absen!*')
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
Tanggal: ${date}

${conn.absen[id][2]}

┌「 *Absen* 」  
├ Total: ${absen.length}
${list} 
└────`.trim()
    await conn.sendButton(m.chat, caption, wm, null, [['Absen', `${usedPrefix}absen`], ['Cek', `${usedPrefix}cekabsen`]], m)
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.register = true

export default handler