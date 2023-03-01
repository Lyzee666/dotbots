import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup tak selamanya tentang pacar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku memang diam. Tapi aku tidak buta."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat “disisipkan” di antara pujian."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup ini hanya sekali dan peluang itu juga sekali munculnya, keduanya tidak datang dua kali."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena perjuangan adalah tanda perjalananmu menuju sukses."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dunia tak lagi sama tak selamanya memihak kita, di saat kita mau berusaha di situlah kebahagiaan akan indah pada waktunya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup tak semudah membalikkan telapak tangan, tetapi dengan telapak tangan kita dapat mengubah hidup kita jauh lebih baik lagi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jadilah pribadi yang menantang masa depan, bukan pengecut yang aman di zona nyaman."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Belajarlah rendah hati, rendahkan hatimu serendah-rendahnya hingga tidak ada seorangpun yang bisa merendahkanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kekuatan dan perkembangan datang hanya dari usaha dan perjuangan yang terus menerus."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengusaha itu bukan orang yang pintar tetapi mereka pintar mencari orang pintar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup itu sebentar. Kamu harus bisa tersenyum saat merasakan kepedihan atau kita tak akan pernah melanjutkan hidup."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yang keren itu bukan anak muda yang banyak gaya, tapi anak muda yang banyak karya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Siapapun yang berusaha menjatuhkanmu memang sudah berada di bawahmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena hidup adalah pilihan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik tetapi yang jelas membuka jalan kebaikan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik, tetapi yang jelas membuka jalan kebaikan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ujian kesetiaan selalu datang setiap hari, pastikan kamu setia kepada orang yang tepat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tak ingin membuatmu rindu padaku. Karena rindu itu artinya sedih. Dan aku tak ingin menjadi alasanmu bersedih."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku memilih memandangimu daripada segala lukisan yang ada di dunia."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Relasi itu seperti bunga yang membutuhkan air, bisa kering dan mati tanpa komunikasi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Akan lebih baik bersabar menunggu seseorang datang menyapa daripada mengharapkan dia yang memilih pergi untuk kembali."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintai itu butuh tenaga, jangan kau buang tenagamu untuk berlari dan menyerah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Percayalah, jika dia memang cinta sejati kau, mau semenyakitkan apa pun, mau seberapa sulit liku yang harus dilalui, dia tetap akan bersama kau kelak, suatu saat nanti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta itu mempunyai kesanggupan yang hebat. Dia bisa membuat binatang menjadi manusia, dan manusia menjadi binatang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jauh sebelum aku bertemu denganmu, aku telah mengenalmu dalam doaku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta merupakan sesuatu yang indah, ia laksana sebuah lukisan di awan, cerah membingkai ufuk senja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semoga kelak selimutku adalah kamu yang senantiasa menghangatkanku di kala dingin menyerang tubuh dan jiwaku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku menginginkanmu seutuhnya, selamanya, kamu dan aku, setiap hari."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta itu burung yang indah, yang mengemis untuk ditangkap tapi menolak untuk dilukai."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena cinta, duri menjadi mawar. Karena cinta, cuka menjelma anggur segar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta tak berupa tatapan satu sama lain, tetapi memandang keluar bersama ke arah yang sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta tidak terlihat dengan mata, tetapi dengan hati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kau pikir aku memperhatikanmu? Tidak, Sayang. Aku memperhatikan lingkunganmu, barangkali ada yang akan mengganggumu, kuhajar dia."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta tidak pernah menuntut, cinta selalu memberi. Cinta selalu menderita, tanpa pernah meratap, tanpa pernah mendendam."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta itu layaknya angin, aku tidak bisa melihatnya tetapi aku bisa merasakannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta bukanlah bertahan seberapa lama. Tetapi seberapa jelas dan ke arah mana."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sahabat yang baik tidak akan mencelakai, tetapi sahabat yang baik akan menasehati, melindungi, dan tulus mengasihi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hal terindah dari persahabatan adalah memahami dan dipahami, tanpa pernah memaksa dan ingin menang sendiri."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Persahabatan tidak perlu saling mengerti. Karena sahabat akan saling menerima hal yang tak bisa dimengerti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sahabat bukan mereka yang menghampirimu ketika butuh, namun mereka yang tetap bersamamu ketika seluruh dunia menjauh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Persahabatan sejati itu layaknya kesehatan, nilainya baru kita sadari setelah kita kehilangannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lebih baik ku menemani sahabat di kala sendiri daripada menemani kekasih yang tak mempunyai waktu untukku di kala ku sendiri dalam sepi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bersahabat bukan berarti kita mempercayainya, tapi bersahabat bagaimana kita dapat dipercaya olehnya. Kepercayaan itu penting."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sahabat adalah orang yang akan membangunkan kita dari tidur walaupun sedang bermimpi indah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ketika dalam kesulitan, mereka menghilang, ketika dalam kebahagiaan, mereka datang dengan riang. Tidak, mereka bukan teman!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap orang berbeda, unik dengan caranya. Kamu harus menghargainya, tapi tak berarti kamu harus menyukai semuanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sahabat itu seperti halnya mata dan tangan. Saat mata menangis tangan mengusap, saat tangan terluka mata menangis."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Persahabatan yang didasari oleh keikhlasan hati dan kasih sayang, akan melahirkan keabadian dalam kebersamaan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bila esok tiba aku ingin seperti hari-hari sebelumnya. Hari-hari bersama sahabat dan teman-teman untuk bisa bersama melakukan hal-hal positif yang menyenangkan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Apabila engkau menginginkan kemuliaan maka carilah sahabat dari orang orang yang takut kepada Allah subhanahu wataa'la."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bisa jadi semua teman kita pergi, tapi tidak dengan sahabat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Persahabatan itu motivasi dan inspirasi, bukan hanya gengsi dan basa-basi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak ada yang terasa semengerikan dulu saat kau sudah punya teman sejati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Persahabatan tak terjalin dengan orang yang istimewa. Kita jadi istimewa karena bersahabat. Sahabatlah yang mengistimewakan kita."
        }]
        const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.register = true
handler.indo = true
export default handler