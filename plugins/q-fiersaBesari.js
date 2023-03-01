import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "Fiersa Besari",
            "quotes": "Jatuh hati tidak pernah bisa memilih. Tuhan memilihkan. Kita hanyalah korban. Kecewa adalah konsekuensi, bahagia adalah bonus."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Bukankah hidup ini sebetulnya mudah? Jika rindu, datangi. Jika tidak senang, ungkapkan. Jika cemburu, tekankan. Jika lapar, makan. Jika mulas, buang air. Jika salah, betulkan. Jika suka, nyatakan. Jika sayang, tunjukkan. Manusianya yang sering kali mempersulit segala sesuatu. Ego mencegah seseorang mengucap 'Aku membutuhkanmu'."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Jika saatnya tiba, sedih akan menjadi tawa, perih akan menjadi cerita, kenangan akan menjadi guru, rindu akan menjadi temu, kau dan aku akan menjadi kita."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Beberapa rindu memang harus sembunyi-sembunyi. Bukan untuk disampaikan, hanya untuk dikirimkan lewat doa."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku tidak tahu dimana ujung perjalanan ini, aku tidak bisa menjanjikan apapun. Tapi, selama aku mampu, mimpi-mimpi kita adalah prioritas."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku, biarlah seperti bumi. Menopang meski diinjak, memberi meski dihujani, diam meski dipanasi. Sampai kau sadar, jika aku hancur… kau juga."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Pada waktunya, dunia hanya perlu tahu kalau kita hebat. Kebahagiaan tidak membutuhkan penilaian orang lain."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku diam, bukan berarti tak memperhatikan."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Dulu kita selalu mengucap kata sayang di penghujung malam. Kini, kita tidak lebih dari dua orang asing yang merindukan masa lalu secara diam-diam."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku tidak tahu cara membencimu dengan baik dan benar, seperti kau tidak tahu cara menyayangiku dengan baik dan benar."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Ketika kau melakukan usaha mendekati cita-citamu, di waktu yang bersamaan cita-citamu juga sedang mendekatimu. Alam semesta bekerja seperti itu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Cinta bukan melepas tapi merelakan. Bukan memaksa tapi memperjuangkan. Bukan menyerah tapi mengikhlaskan. Bukan merantai tapi memberi sayap."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Jika mereka bertanya padaku apakah aku menyesal, jawabanku adalah tidak. Berhasil ataupun gagal, aku bangga hidup di atas keputusan yang kubuat sendiri."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Seseorang yang tepat tak selalu datang tepat waktu. Kadang ia datang setelah kau lelah disakiti oleh seseorang yang tidak tahu cara menghargaimu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Terkadang, pertemuan dan perpisahan terjadi terlalu cepat. Namun kenangan dan perasaan tinggal terlalu lama."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Dalam realitas kita berdua hanyalah dua orang yang berlari. Aku sibuk mengejarmu, kau sibuk menghindariku. Oh, tenang. Aku tidak lelah. Justru, aku menikmati prosesnya."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Perasaan laksana hujan, tak pernah datang dengan maksud yang jahat. Keadaan dan waktulah yang membuat kita membenci kedatangannya."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku mengalah. Aku mengalah karena aku percaya, kalau kau memang untukku, sejauh apapun kakimu membawamu lari, jalan yang kau tempuh hanya akan membawamu kembali padaku."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Tidak ada yang abadi, baik bahagia maupun luka. Suatu saat kita akan tiba di titik menertawakan rasa yang dulu sakit, atau menangisi rasa yang dulu indah."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Ketika kesetiaan menjadi barang mahal. Ketika kata maaf terlalu sulit untuk diucap. Ego siapa yang sedang kita beri makan?"
        }, {
            "author": "Fiersa Besari",
            "quotes": "Beberapa rasa memang harus dibiarkan menjadi rahasia. Bukan untuk diutarakan, hanya untuk disyukuri keberadaannya."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku ingin kau rindukan, aku ingin kau kejar, aku ingin kau buatkan puisi. Lalu, aku akan bertingkah tak peduli, agar kau tahu rasanya jadi aku."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Pada sebuah garis waktu yang merangkak maju,akan ada saatnya kau bertemu dengan satu orang yang mengubah hidupmu untuk selamanya. Kemudian satu orang tersebut akan menjadi bagian terbesar dalam agendamu. Dan hatimu takan memberikan pilihan apapun kecuali jatuh cinta, biarpun logika terus berkata bahwa risiko dari jatuh cinta adalah terjerembab di dasar nestapa."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Akan tiba saatnya kita temukan alasan paling tepat untuk berjuang. Jika telah tiba, genggam erat. Sesuatu yang istimewa takan datang dua kali."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Jika tidak bisa menghapus seseorang dari ingatanmu, mungkin memang ia digariskan untuk ada disana. Sudahlah, manusia akan melupa pada saatnya."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Untuk apa memajang foto kita berdua? Cita-citaku ingin fotomu ada di buku nikahku."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Takan mulia kau menunggu permintaan maaf. Takan hina kau meminta maaf terlebih dahulu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Sahabat mencarimu ketika yang lain mencacimu. Mereka merangkulmu ketika yang lain memukulmu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Usia, jarak, waktu dan kelas sosial hanyalah angka bagi dua orang yang saling memperjuangkan satu sama lain."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Menyayangimu sangatlah mudah, aku bisa melakukannya berulang kali tanpa pernah bosan. Yang sulit itu cara menunjukkannya."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Tidak perlu takut. Tunjukan saja warna-warnimu yang sesungguhnya. Bahkan lukisan terbaik sedunia pun mempunyai pembenci dan pengkritik."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Karena sesungguhnya, yang lebih menyakitkan dari melepaskan sesuatu adalah berpegangan pada sesuatu yang menyakitimu secara perlahan."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Menaruh hati di atas ketidakpastian sikap sama saja dengan menaruh tangan di tangan seseorang yang sama sekali tidak ingin menggenggam."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Lagi-lagi imajinasi menertawakanku karena selalu berhasil menemuimu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Sadarlah bahwa Tuhan mengujimu karena Dia percaya dirimu lebih kuat dari yang kau duga. Bangkit. Hidup takan menunggu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Untuk apa menulis namamu di bio? Apa belum cukup namamu dalam setiap doaku pada Tuhan? Karena sebuah kebahagiaan tidak perlu dipamerkan kepada dunia."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Lambat laun kusadari, beberapa rindu memang harus sembunyi-sembunyi Bukan untuk disampaikan, hanya untuk dikirimkan lewat doa."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Beberapa orang tinggal dalam hidupmu agar kau menghargai kenangan. Beberapa orang tinggal dalam kenangan agar kau menghargai hidupmu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Biarlah 'Apa kabar?' menjadi pengganti 'Aku rindu'; 'Jaga dirimu baik-baik'menjadi pengganti 'Aku sayang kamu'."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku tidak mahir mengejar, tapi aku tahu cara menunggumu."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Di dunia paralel, keadaannya akan jauh berbeda. Walau begitu, kau tahu aku akan tetap menjadi orang yang sama, yang merindukanmu dengan sederhana, mengejarmu dengan wajar, menyayangimu dengan luar biasa, dan menyakitimu dengan mustahil."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Perjuangkan sebelum pergi."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Hidup adalah serangkaian kebetulan. Kebetulan adalah takdir yang menyamar."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Hal yang paling menyebalkan dari petualangan adalah: sekali kau terkena racunnya, kau akan kecanduan. Kau akan mencari cara untuk kembali berkelana, meski harus menumpang mobil, tidur mengemper. Dan ketika kau tiba di destinasi impianmu, kau tahu semua pengorbanan itu sepadan."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Aku tidak mahir melawak, tapi aku tahu cara membuatmu bahagia."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Beberapa penyair sibuk bersembunyi di balik senja, hujan, gemintang, ufuk, gunung, pantai, jingga, lembayung, kopi, renjana, juga berbagai kata romantis lainnya, untuk kemudian lupa pada fakta bahwa dunia sedang tidak baik-baik saja. Hingga akhirnya kata-kata hanyalah hiasan semata."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Tidak perlu bersama selamanya. Selamanya terlalu lama. Seumur hidup saja. Untukku, itu sudah lebih dari cukup."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Tidak perlu pelit ilmu. Semua orang bisa memegang gitar yang sama, tidak semuanya akan memainkan lagu yang sama."
        }, {
            "author": "Fiersa Besari",
            "quotes": "Dan aku hilang, bukan berarti tak ingin dicari."
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['fiersa'].map(v => v + 'besari')
handler.tags = ['quotes']
handler.command = /^(fiersabesari)$/i
handler.register = true
handler.indo = true
export default handler
