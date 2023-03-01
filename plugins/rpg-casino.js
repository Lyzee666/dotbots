let buatall = 1
let handler = async (m, { conn, args, usedPrefix }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].duidharam / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'casino <jumlah>\n ' + usedPrefix + 'casino 1000', m)
        if (db.data.users[m.sender].duidharam >= count * 1) {
            db.data.users[m.sender].duidharam -= count * 1
            if (Aku > Kamu) {
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(haram)`.trim(), m)
            } else if (Aku < Kamu) {
                db.data.users[m.sender].duidharam += count * 2
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(haram)`.trim(), m)
            } else {
                db.data.users[m.sender].duidharam += count * 1
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(haram)`.trim(), m)
            }
        } else conn.reply(m.chat, `Uang(haram) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
    } finally {
        delete conn.casino[m.chat]
    }
}
    
handler.help = ['casino <jumlah>']
handler.tags = ['rpg']
handler.command = /^(casino)$/i

handler.register = true
export default handler
