import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pacar orang adalah jodoh kita yang tertunda."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ingin menjadi satu-satunya, bukan salah satunya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Makan apapun aku suka asal sama kamu, termasuk makan ati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Denganmu, jatuh cinta adalah patah hati paling sengaja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu adalah patah hati terbaik yang gak pernah aku sesali."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan..."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saben dino kegowo ngimpi tapi ora biso nduweni."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora ketemu koe 30 dino rasane koyo sewulan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kanyaah akang moal luntur najan make Bayclean."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil)."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cukup jaringan aja yang hilang, kamu jangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Musuhku adalah mereka yang ingin memilikimu juga."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jam tidurku hancur dirusak rindu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cukup China aja yang jauh, cinta kita jangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yang penting itu kebahagiaan kamu, aku sih gak penting.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cuma satu keinginanku, dicintai olehmu.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cukup antartika aja yang jauh. Antarkita jangan."
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.register = true
handler.indo = true
export default handler