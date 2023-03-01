import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Jangan bicara, bertindak saja. Jangan katakan, tunjukkan saja. Jangan janji, buktikan saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan pernah berhenti melakukan yang terbaik hanya karena seseorang tidak memberi Anda penghargaan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bekerja saat mereka tidur. Belajar saat mereka berpesta. Hemat sementara mereka menghabiskan. Hiduplah seperti mimpi mereka."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kunci sukses adalah memusatkan pikiran sadar kita pada hal-hal yang kita inginkan, bukan hal-hal yang kita takuti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan takut gagal. Ketakutan berada di tempat yang sama tahun depan seperti Anda saat ini."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita terus melakukan apa yang kita lakukan, kita akan terus mendapatkan apa yang kita dapatkan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika Anda tidak dapat mengatasi stres, Anda tidak akan mengelola kesuksesan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bersikap keras kepala tentang tujuan Anda dan fleksibel tentang metode Anda."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ingatlah bahwa pelajaran terbesar dalam hidup biasanya dipelajari dari saat-saat terburuk dan dari kesalahan terburuk."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan takut kalau hidupmu akan berakhir; takutlah kalau hidupmu tak pernah dimulai."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang benar-benar hebat adalah orang yang membuat setiap orang merasa hebat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mengetahui seberapa banyak yang perlu diketahui adalah awal dari belajar untuk hidup."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sukses bukanlah akhir, kegagalan tidak fatal. Yang terpenting adalah keberanian untuk melanjutkan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lebih baik gagal dalam orisinalitas daripada berhasil meniru."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kembangkan kesuksesan dari kegagalan. Keputusasaan dan kegagalan adalah dua batu loncatan paling pasti menuju sukses."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sukses adalah tempat persiapan dan kesempatan bertemu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sukses biasanya datang kepada mereka yang terlalu sibuk mencarinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "20 tahun dari sekarang, kau mungkin lebih kecewa dengan hal-hal yang tidak sempat kau lakukan alih-alih yang sudah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup ini terdiri dari 10 persen apa yang terjadi padamu dan 90 persen bagaimana caramu menyikapinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada tiga cara untuk mencapai kesuksesan tertinggi: Cara pertama adalah bersikap baik. Cara kedua adalah bersikap baik. Cara ketiga adalah menjadi baik."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Alasan nomor satu orang gagal dalam hidup adalah karena mereka mendengarkan teman, keluarga, dan tetangga mereka."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Penetapan tujuan adalah rahasia masa depan yang menarik."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pertumbuhan dimulai ketika kita mulai menerima kelemahan kita sendiri."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hal pertama yang dilakukan orang sukses adalah memandang kegagalan sebagai sinyal positif untuk sukses."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ciri khas orang sukses adalah mereka selalu berusaha keras untuk mempelajari hal-hal baru."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sukses adalah mendapatkan apa yang kamu inginkan, kebahagiaan menginginkan apa yang kamu dapatkan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Keraguan membunuh lebih banyak mimpi daripada kegagalan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat."
        }]
        const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i
handler.register = true
handler.indo = true
export default handler