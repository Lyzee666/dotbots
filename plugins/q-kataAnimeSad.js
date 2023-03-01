import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Di dunia sana, maupun di dunia sini, Menangis disaat sedih itu tak apa. - Kirito"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku menyukaimu, bahkan disaat kau memilih dia, aku sangat terluka dan sedih. - Touma Kazusa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mula-mula, kau harus mengubah dirimu sendiri, atau tak akan ada yang berubah untukmu. - Gintoki"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saya datang untukmu, itu tidak mudah, karena kau sangat jauh. - Taki Tachibana"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meskipun menyakitkan dan sulit, setiap orang harus menghargai artinya hidup. - Yato, Noragami"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Secara batin aku tersiksa, secara emosi aku kacau, secara mental aku depresi, tapi secara fisik aku tersenyum. -Naruto"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kau takkan bisa menghindar lari, terlebih menghindar dari sesuatu yang ingin kau lupakan. -Gintama"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meski matamu penuh dengan air mata, aku akan tersenyum agar kau tak merasa sedih. -Peace Sign"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sanae san mengatakan kepada saya, tempat dimana saya bisa menangis adalah di toilet, atau di lengan ayah. - Ushio Okazaki."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau itu adalah kenangan yang berarti, jangan dilupakan. Sebab jika manusia mati, mereka hanya bisa hidup dalam kenangan orang lain - (Detective Conan)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagaimana kamu bisa bergerak maju kalau kamu teris menyesali masa lalu? - Edward Elric "
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perbedaan antara pemula dan master adalah bahwa master telah gagal lebih dari yang telah dicoba pemula. - Koro-sensei (Ansatsu Kyoushitsu)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok. - Kaori Miyazono (Shigatsu wa Kimi no Uso)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Suatu saat akan datang hari di mana semua akan menjadi kenangan. - Erza Scarlet (Fairy Tail)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika berkata selamat tinggal membuatmu sedih, maka aku akan tinggal di sisimu. - Niche (Tegami Bachi)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Air mata palsu bisa menyakiti orang lain. Tapi senyuman palsu hanya akan menyakiti dirimu sendiri. - C.C (Code Geass)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tersenyumlah selalu walaupun hatimu sedang terluka. - Kagome (Inuyasha)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lebih baik menerima kejujuran yang pahit, dari pada kebohongan yang manis. - Soichiro Yagami (Death Note)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kegagalan seorang pria yang paling sulit yaitu ketika dia gagal untuk menghentikan air mata seorang wanita. - Kasuka Heiwajima"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "aku tak berniat mengulang apapun, sebab semua penderitaan yang kulalui telah membuatku menemukan kebahagiaan ini. -Ken Kaneki (Tokyo Ghoul)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Keihdupan itu seperti langit terus bergerak dan berpindah. Langit tak akan menjadi cerah selamanya, salju pun tak selamanya jatuh. Tanjirou (Kimetsu no yaiba)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kemangan yang diperoleh dari kerja keras menghasilkan kesenangan yang jauh lebih besar kuroko (kuroko no basket)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak bilang kamu akan berhasil jika tak menyerah, tapi jika kamu menyerah maka tidak ada lagi yang tersisa Aomine daiki (Kuroko no basket)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hukum tidaklah melindungi orang-orang. Orang-orang lah yang melindungi hukum. Orang-orang selalu membenci kejahatan dan selalu mencari hidup selayaknya. Hukum adalah perkumpulan dari perasaan orang-orang itu. Itu bukanlah pengawasan maupun sistem. Itu adalah perasaan yang lemah dan tak tergantikan yang semua orang miliki dalam hati mereka. dibandingkan dengan amarah dan kebencian itu adalah sesuatu yang bisa sangat mudah hancur. Sepanjang waktu, orang-orang berdoa untuk dunia yang lebih baik. Agar doa-doa itu terus mempunyai makna, maka kita harus berusaha yang terbaik untuk melindunginya hingga akhir. Berjuanganlah!!! -Tsunemori Akane (Psycho-pass)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "jangan katakan tidak mungkin lagi. kata itu justru menghilangkan kesempatan -Aria (hidan no aria)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "jangan menyerah untuk berkata aku ingin hidup ini berarti dan jangan menjadi orang yang membosankan seperti itu. jika punya keberanian untuk tidak menyerah, kau akan bisa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tak bisa semudah itu mengatakan kesimpulan hanya dari perkataan orang lain, aku baru bisa memutuskan apa yang kulakukan setelah melihatnya sendiri. -Ken kaneki (Tokyo Ghoul)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "tidak semua hal di dunia ini bisa dibeli dengan uang -kuroo hazama (young black)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "pahlawan bukan hanya terus menyelamatkan siapa pun yg dihadapannya saja. terkadang pahlawan juga perlu mengorbankan diri untuk menyelamatkan banyak orang (tsubasa misudachi ~ gatchaman crowds)"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['kataanimesad']
handler.tags = ['quotes']
handler.command = /^(kataanimesad)$/i
handler.register = true
handler.indo = true
export default handler