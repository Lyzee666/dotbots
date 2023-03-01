let handler = async (m, {
    conn,
    args
}) => {
    if (args[0] == 'how') throw await conn.sendTr(`*"Cara menggunakan bot dan prefix"*\n\nCara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*`)
    if (args[0] == 'join') throw await conn.sendTr(`Cara Memasukkan Bot Ke Grup.\nPake Command #join <link>\nContoh:\n#join https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6`)
    if (args[0] == 'owner') throw await conn.sendTr(`*"Penjelasan OWNER/PEMILIK BOT"*\n\nOwner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp.`)
    if (args[0] == 'langganan') throw await conn.sendTr(`*"Berlangganan"*\n\nLayanan berlangganan Bot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewa*`)
    if (args[0] == 'bot') throw await conn.sendTr(`*"Apa itu bot whatsapp"*\n\nBot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.`)
    if (!args[0]) {
        const sections = [{
            title: `${global.name} ACTION`,
            rows: [{
                    title: await conn.sendTr('Panduan Owner'),
                    description: await conn.sendTr("Menampilkan Panduan Owner"),
                    rowId: "#how owner"
                },
                {
                    title: await conn.sendTr('Panduan How'),
                    description: await conn.sendTr("Menampilkan Panduan How"),
                    rowId: ".how how"
                },
                {
                    title: await conn.sendTr('Panduan Berlangganan'),
                    description: await conn.sendTr("Menampilkan Panduan Berlangganan"),
                    rowId: ".how langganan"
                },
                {
                    title: await conn.sendTr('Panduan Add'),
                    description: await conn.sendTr("Menampilkan Panduan Cara Menambahkan bot"),
                    rowId: ".how join"
                },
                {
                    title: await conn.sendTr('Panduan Bot'),
                    description: await conn.sendTr("Menampilkan informasi bot itu apa"),
                    rowId: ".how bot"
                }
            ]
        }]
        await conn.sendMessage(m.chat, {
            text: await conn.sendTr(`Selamat datang di Menu panduan Bot.\nDi menu ini kamu bisa mendapatkan panduan soal bot whatsapp.\n\nSilahkan pilih di bawah ini`),
            footer: wm,
            title: "",
            buttonText: `${global.name} Multi Device`,
            sections
        }, {
            quoted: m
        })
    }

}
handler.tags = ['main']
handler.command = /^(panduan|how)$/i
handler.help = ['panduan']

export default handler