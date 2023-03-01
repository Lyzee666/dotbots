let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, await conn.sendTr(`Tidak ada absen berlangsung!`).trim(), wm, null, [['Mulai', `${usedPrefix}mulaiabsen`]], m)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `├ ${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
date: ${date}

${conn.absen[id][2]}
    
┌「 *Absen* 」 
├ Total: ${absen.length}
${list} 
└────`.trim()
    await conn.sendButton(m.chat, caption, wm, null, [['Present', `${usedPrefix}absen`], ['Delete', `${usedPrefix}-absen`]], m)
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.register = true

export default handler