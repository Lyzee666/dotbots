import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenapa aku suka senja? Karena negeri ini kebanyakan pagi, kekurangan senja, kebanyakan gairah, kurang perenungan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja tak pernah salah hanya kenangan yang membuatnya basah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di bawah alismu hujan berteduh. Di merah matamu senja berlabuh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ingin kamu saja yang menemaniku membuka pagi hingga melepas senja, menenangkan malam dan membagi cerita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja terlalu buru-buru berlalu, padahal aku baru hendak mewarnai langit untukmu dengan warna-warna rinduku yang selalu biru."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Melukiskanmu saat senja. Memanggil namamu ke ujung dunia. Tiada yang lebih pilu. Tiada yang menjawabku. Selain hatiku dan ombak berderu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada yang tak tenggelam ketika senja datang: Rasa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja yang retak. Kapal-kapal berlayar membawa kenangan. Airmatamu menjelma puisi paling duri, paling angin."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tuhan, bersama tenggelamnya matahari senja ini,redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beberapa penyair sibuk bersembunyi di balik senja, hujan, gemintang, ufuk, gunung, pantai, jingga, lembayung, kopi, renjana, juga berbagai kata romantis lainnya, untuk kemudian lupa pada fakta bahwa dunia sedang tidak baik-baik saja. Hingga akhirnya kata-kata hanyalah hiasan semata."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Maka siluetkan tubuhmu berlatar senja, karena tak sanggup kulihat airmatamu, kekasih."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semerbak rindu kuasai udara panas ini, senja pun ikut berdebar menanti berita mu tentang perang dan cinta."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku hanyalah kunang-kunang dan engkau hanyalah senja. Saat gelap kita berbagi. Saat gelap kita abadi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Disetiap senja, aku ingin melukis langit dengan warna mata kita: warna merah kerinduan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika pena berganti rupa menjadi daun senja, biarlah dia mengering, lalu tersapu angin, sendiri dan dibiarkan oleh sepi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kupetik pipinya yang ranum,kuminum dukanya yang belum: Kekasihku, senja dan sendu telah diawetkan dalam kristal matamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Uang, berilah aku rumah yang murah saja,yang cukup nyaman buat berteduh senja-senjaku, yang jendelanya hijau menganga seperti jendela mataku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita hanyalah setitik senja yang kadang indah lalu surut dengan bermuram durja, dunia bagi masa kecil kita hanyalah mainan fana yang terus membumbung, mengitari angkasa dan membuat kita terlena akan keindahannya…"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dulu, pada suatu ketika, senja pernah indah, seindah janji-janji yang berujung menjadi sumpah serapah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di tengah angin senja yang mendesak, aku merasakan kekuasaan waktu, yang tanpa pandang bulu mengubah segala-galanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gelisah, menampar tak basah pada senja yang bergeromis. Begitu keringkah ladang pertautan kita hingga tunas harapan enggan tumbuh lagi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap hari ada senja, tapi tidak setiap senja adalah senja keemasan, dan setiap senja keemasan itu tidaklah selalu sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Biarlah kunikmati kepedihan ini. Karena sesungguhnya perasaan perih disebabkan cinta yang terkulai sebelum berbunga, adalah sama sendunya dengan memeram cina itu sendiri selama bertahun-tahun. Bagai senja yang tak kunjung malam."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Begini rasanya harihari di linimasa. Wajahmu; 140 huruf yang terus menguntitku tanpa jarak hingga senja lesap dalam kita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Percintaan itu fajar perkawinan. Perkawinan itu senja percintaan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Usia senja bukanlah hal yang membuat sedih. Itu bisa jadi hal yang disyukuri jika kita menyelesaikan semua perkejaan kita"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hidup seperti ini. Aku bisa merasakan senja yang bercampur bau tanah basah sepeninggal hujan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu hal yang tak bisa tenggelam bersama kedatangan senja. Itu adalah rasa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja akan selalu seperti itu. Datang dengan keindahannya, dan lalu akan pergi begitu saja dengan sangat cepat, tergantikan dengan kehampaan malam yang sunyi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena senja tak pernah memintamu menunggu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja tak pernah salah. Hanya kenanganlah yang kadang membuatnya basah. Dan pada senja, akhirnya kita mengaku kalah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja bagaikan masa kecil, ia dipandang heran bukan karena indah saja, namun juga karena datang sebentar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kedatangan senja yang menenggelamkan matahari mengajarkan pada kita, bahwa segala sesuatu tak ada yang abadi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cobalah jadi malam agar kau tahu rasanya rindu, dan jadilah senja sesekali agar kau tahu artinya menanti."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sudah banyak senja yang kulalui, namun belum pernah kulewati senja yang membawamu kembali."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mencintaimu sebanyak hujan. Kau mencintaiku sesingkat senja. Seperti hujan, aku jatuh cinta berkali-kali. Seperti senja, kau jatuh cinta kemudian pergi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sekalipun hanya sejenak, Namun senja pergi meninggalkan rasa hidup ini amat teramat singkat. Titipkanlah asa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Malam membuatku ingin menulis rindu, bukan untuk kau baca. Karena rindu yang sesungguhnya telah kau tinggal di tepian senja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja mengajarkan kita bahwa sesuatu yang terlihat indah sebagian besar hanya bersifat sementara."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ternyata dia bukan senja, jingganya tak hangatkan luka. Dia hanyalah angin yang sekadar singgah kemudian pergi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Layung senja telah mencuatkan sinar indahnya. Akan tetapi, kenapa kamu masih saja tetap di posisi yang sama dan dengan perasaan yang sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Matahari yang tenggelam akan mengajarkan pada kita, agar bisa menghargai apa yang diberikan matahari untuk kita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja mengajarkan pada kita, bahwa kehidupan tak selalu berjalan dengan cemerlang dan bersinar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja memang begitu indah, namun cahaya mentari tetap tak tergantikan, meski dengan lilin yang bersinar sangat terang sekalipun."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bukan senja namanya jika tak sendu, bukan senja namanya jika tak sunyi, dan bukan senja namanya jika tak mencipta rindu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja lebih tau bagaimana cara mengungkapkan rindu tanpa diketahui oleh angin dan juga derai nafas yang menderu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja lebih paham bahwa kita adalah sepasang insan yang merajut kisah, namun belum bisa terselesaikan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di dalam dekapan sang senja, diriku mengharapkan sebuah asa, yang dapat membuat semesta yang fana menjadi semesta yang penuh warna."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat itu, hujan gerimis di kala Sang Dewi malam beranjak menjadi saksi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ingat, setia itu memang sulit, tapi lihatlah jingga. Selalu menggenapkan warnanya, demi senja di setiap harinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita memang ditakdirkan untuk jauh raga oleh jarak. Tapi, kita juga ditakdirkan untuk melihat senja yang sama tanpa jarak."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenapa senja terdengar lebih romantis dari fajar? Karena perpisahan akan lebih mudah dikenang dari pada pertemuan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat senja menyapa, aku menyadari bahwa masih banyak hal indah yang Tuhan ciptakan selain kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja mengajarkan bahwa menanti itu tidak mudah, berjuang pun juga sama susahnya. Apalagi harus berjuang menunggu seseorang dalam ketidakpastian."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja memang indah, namun ketika pergi ia akan benar-benar hilang. Tak seperti matahari, meski ia pergi, ia tetap ada, yakni menerangi bagian lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senja selalu menggiring keceriaan menuju kegelapan. Mungkin hanya mereka yang bersyukur yang mampu menyeka air mata untuk melihat bintang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berdiri di bawah langit di tengah hujan tak membuatku gentar. Aku percaya, tiada hari yang indah saat senja berada di pelupuk mata."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanpamu aku serupa daun kering yang dilepaskan ranting, terbawa angin tanpa arah dan tanpa ingin."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mungkin kelak akan ada senja yang sepi untukmu, satu persatu kenangan mulai kau ingat, dan tersenyum ketika giliranku lewat."
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['senja']
handler.tags = ['quotes']
handler.command = /^(senja)$/i
handler.register = true
handler.indo = true
export default handler
