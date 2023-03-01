import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak semudah itu melupakanmu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tolong jangan pergi saat aku sudah sangat sayang padamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sakit itu ketika cinta yang aku beri tidak kamu hargai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karenamu aku jadi tau cinta yang sesungguhnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku berdiri disini sendiri menunggu kehadiran dirimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Maaf aku lupa ternyata aku bukan siapa-siapa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lebih baik sendiri daripada berdua tapi tanpa kepastian"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bukan mencari yang sempurna tapi yang terbaik untukku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terima kasih karena kamu aku menjadi lupa tentang masa laluku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dari sekian lama menunggu apa yang sudah didapat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku terlahir sederhana dan ditinggal sudah biasa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku sayang kamu tapi aku masih takut untuk mencintaimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak pernah berpikir kamu akan menjadi yang sementara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan paksa aku menjadi cewek seperti seleramu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya yang sabar yang mampu melewati semua kekecewaan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['galau']
handler.tags = ['quotes']
handler.command = /^(galau)$/i
handler.register = true
handler.indo = true
export default handler