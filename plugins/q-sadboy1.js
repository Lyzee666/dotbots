import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Aku berharap kamu menjadi pelangi yang muncul setelah hujan, tapi nyatanya kamu malah pergi bahkan sebelum hujan datang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kau tau perbedaan aku dan kamu? Kau yang suka melukai dan aku yang suka memaklumi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sebelum kau sedingin hamparan hujan deras. Kau pernah sehangat hembusan nafas."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pernah berjuang untuk sebuah senyuman, hingga akhirnya tinggal kenangan. Pernah menjadi bayangan, lalu hilang terbawa angan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menyapamu, aku lupa diri. Diabaikanmu, aku tahu diri. Hati bilang gas pol. Otak bilang rem.- Fiersa Besari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kau bisa melakukan kesalahan sama berulang kali. Bisa meminta maaf berulang kali. Tapi, seseorang belum tentu bisa memaafkanmu berulang kali. - Fiersa Besari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau membunuh perasaan sendiri kena pidana, sudah sejak lama saya dipenjara. - Fiersa Besari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di sudut rasa bersalah yang kusesali, aku betul-betul menunggumu kembali.- Wira Nagara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Baru kusesali setelah ia pergi, dan menginginkannya kembali setelah ia menemukan pujaan hati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita adalah sisa-sisa kepastian yang tak dipastikan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tahu, hidupmu memang bukan tentang aku saja. Tapi mengertilah, aku cemburu jika kamu terlalu asik dengan yang lain dibanding aku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cemburu adalah cinta yang sedang khawatir. Benci adalah cinta yang pernah tersakiti. Tapi semua itu dasarnya tetap satu yaitu cinta. - Cak Nun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terlalu sayang pangkal kehilangan. - Rintik Sedu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bertahan tapi tak ditahan. Menunggu tapi tak ditunggu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ku memberimu yang terbaik, mengapa Ia yang mendapatkan yang terbaik darimu.- Fiersa Besari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tapi...yang kamu kodein juga lagi kodein orang lain.- Rintik Sedu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mungkin akhirnya kita tak akan bersama. Setidaknya, pernah saling berbagi cerita. Tentang lelahmu mengikuti dia. Tentang sedihku mendengar sedihmu sepanjang usia. - Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saya tetap sama. Masih sayang kamu. Bedanya, rasa sayang itu hadir dalam bentuk bahagia melihatmu dengan yang lain. Mengertilah, teguhkan hatimu padanya.- Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak ada hubungan tanpa pertengkaran. Hanya saja, ada yang berhasil meredam dan ada yang membakar hangus"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dulu saling sapa. Sekarang masih saling sapa. Bedanya, dulu kau sendiri. Sekarang di sebelah dia kau berdiri. Hai, katamu senang. Hai juga, jawabku berusaha tenang.  Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenapa harus membawa nama lain untuk hal-hal tentang kita? - Wira Nagara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Harus sampai berapa dini hari hingga aku tak merasa berjuang sendiri? - Wira Nagara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kau tak sungguh. Hanya aku yang bertaruh. Kau tak ikut bertarung. Kau menanti saja, melihat aku yang terluka.- Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita tidak dirasuki apa pun. Hanya pemilik harapan yang tak pernah siap akan hal-hal di luar ekspektasi, bahagia yang akhirnya kembali ditangisi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan sengaja pergi agar dicari. Jangan sengaja lari agar dikejar. Berjuang tak sebercanda itu.- Sudjiwo Tejo"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tukeran hati yuk. Biar kamu bisa ngerasain apa yang aku rasain"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintaimu adalah hal yang paling mudah untuk aku lakukan, tetapi untuk mendapatkan cintamu itu lah hal yang paling sulit untuk aku lakukan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berhentilah memakerkan seseorang yang ternyata adalah jodoh orang lain. Kau hanya sekadar tukang temani makan, temani jalan, dan nutupi kekurangan uang jajan - Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku pernah mencintaimu hingga hancur lebur hingga jadi humus dan tumbuh dalam bentuk lain. Itulah kenapa sekarang kamu asing bagiku. Aku tidak mengenali lagi aroma yang kau bawa. Kita tak bisa lagi merawat batang pohon yang sama.- Boy Candra"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku adalah seseorang yang mencintaimu secara utuh meski dicintai secara separuh"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika perempuan dan laki-laki bersahabat, ujian terberatnya adalah perasaan - Rintik Sedu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dulu 'jangan pilih-pilih teman' sekarang, 'jangan bawa perasaan ke dalam pertemanan- Rintik Sedu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau cuma ingin mengusir sepi, mari bertukar cerita saja. Jangan sampai mengajak bertukar hati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena terlalu nyaman, aku lupa bahwa kita hanya sebatas teman."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada rindu yang tak sempat tersalurkan. Ada kebersamaan yang hilang tanpa sempat ada hubungan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hindari pertemanan rasa pacaran. Sebab seerat apapun perasaannya, ujung-ujungnya tetap cuma teman."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dia dekat denganmu, tapi belum tentu mendekatimu. Dia bahagia bersamamu, tapi belum tentu jatuh cintanya denganmu. Bawa perasaan boleh, asal tahu waktu dan tempatnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sering ngobrol, sering curhat, lalu nyaman itu bukan berarti sayang. Hati-hati dengan jebakan friend-zone"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bila kau butuh telinga tuk mendengar. Bahu tuk bersandar. Raga tuk berlindung. Akulah orang yang selalu ada untukmu, walau hanya sebatas teman"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beberapa orang diciptakan menjadi terlalu dekat untuk dipandangi namun terlalu jauh untuk digapai."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Akan ada saatnya di mana percayamu dikecewakan. Lalu hatimu dengan sengaja dipatahkan. Dan saat itu kamu akan tahu apa maksud dari keikhlasan"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['sadboy1', 'sadgirl1']
handler.tags = ['quotes']
handler.command = /^(sadboy1|sadgirl1)$/i
handler.register = true
handler.indo = true
export default handler