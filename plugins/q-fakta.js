import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Indonesia adalah Tempat ditemukannya ular terpanjang di dunia yaitu, Python Reticulates sepanjang 10 meter di Sulawesi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Suatu penyakit yang disebut “Exercise-Induced Anaphylaxis” harfiah menyebabkan orang menjadi ‘alergi’ untuk berolahraga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pada Sept1909 malam hari, warga Jakarta beruntung menyaksikan Aurora Borealis di langit yg biasanya hanya di kutub ( Prof. Truls L Hansen)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bromelain yang terkandung dalam Nanas bila dikonsumsi berlebihan bagi wanita hamil bisa memicu kontraksi dini bahkan keguguran"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Secara resmi setiap tanggal 6 Oktober di Jepang merayakan Tom Cruise Day"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Teka-teki silang terbesar yang pernah diterbitkan memiliki 2631 pertanyaan mendatar dan 2922 pertanyaan menurun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rafflesia Arnoldii yang tumbuh di Sumatera adalah bunga terbesar di dunia. Ketika bunganya mekar, diameternya mencapai 1 meter"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menara Eiffel dibangun oleh Alexandre Eiffel, dan sebagian besar biayanya ditanggung oleh dia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata orang di dunia jatuh cinta sebanyak 7 kali dulu sebelum ditakdirkan menikah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lagu kebangsaan Yunani mempunyai 158 bait"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata “depp” dalam bahasa Jerman artinya “idiot”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bobby Tufts (4 tahun) adalah Wali Kota termuda di dunia saat ini (Wali Kota Dorset, Minnesota, AS)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menghisap rokok sambil makan cokelat dapat membunuh racun yang terdapat pada rokok tersebut. [penelitian kedokteran di Universitas Lampung]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kebanyakan orang lebih percaya terhadap kemampuan kepemimpinan seseorang jika orang itu memiliki badan yang lebih tinggi. [inilah .com]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Anak yang gemar berolahraga lebih cerdas dibandingkan yang tidak. [penelitian di Michigan State University]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kelurahan Air Jamban adalah nama kelurahan di kecamatan Mandau, kabupaten Bengkalis, provinsi Riau, Indonesia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata “Poli” berarti Banyak dan “Tics” berarti Makhluk Pengisap Darah. Jadi kata Politics (politik) berarti Banyak Makhluk Pengisap Darah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Musik dapat membuat otak bahagia dan kebanyakan mendengarkan musik dapat membuat perut cepat lapar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mendengarkan musik irama lambat saat tidur terbukti mampu meningkatkan kemampuan memori otak. [penelitian di Universitas Tubingen Jerman]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Morology / Morologi adalah studi tentang percakapan konyol."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Koin ¥ 1 (Yen Jepang) bisa mengapung di atas air"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan kecemasan, bahkn dpt meningkatkan memori. [Dailymail]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata “Mouse” (tikus) berasal dari turunan Bahasa Sansekerta “Mus” yang berarti “pencuri”. 48. Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. [penelitian di Inggris]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30.  [studi baru dari St Tropez] Expand"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang (detikHealth)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama “Gorila” berasal dari kata Yunani “Gorillai” yang berarti “perempuan berbulu”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selama abad ke-13, kata “nice” sebenarnya berarti “stupid”, “senseless” dan “foolish”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "49% dari pemilik Smartphone adalah jomblo. (Survei, “2012 Online User Behavior and Engagement Study”)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "“Mwahahaha” dan “lolz” telah ditambahkan ke Kamus Inggris Oxford"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut “Barbe á Papa” yang berarti “Jenggot Ayah”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hangry adalah penggabungan kata dari “Hungry” dan “Angry”, di pakai ketika anda sedang lapar dan marah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kentut dari bakteri membuat keju swiss memiliki lubang-lubang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanduk badak terbuat dari keratin"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jerapah memiliki lidah sepanjang 21 inchi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sepeda pertama dibuat pada tahun 1817 dibuat tanpa pedal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rechendorfer Yusuf adalah orang pertama yang berhasil menempatkan karet penghapus di atas sebuah pensil"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Balon mainan yang pertama kali terbuat dari karet vulkansir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu ujung pensil dapat menulis 50.000 kata dalam bahasa Inggris"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terdapat hampir 900 jenis kelelawar di dunia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tangan kanan orang hidup lebih lama dari tangan kiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Banyak orang yang dibunuh oleh keledai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seekor buaya tidak dapat mengeluarkan lidah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semut tidak tidur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beruang kutub bertangan kidal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Astronot tidak diperbolehkan untuk makan kacang-kacangan sebelum mereka pergi ke ruang angkasa karena buang angin/kentut dalam pakaian ruang angkasa mengakibatkan kerusakan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dengan menaikkan kaki Anda perlahan dan berbaring ke belakang, Anda tidak dapat terperosok ke dalam pasir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pemogokan cahaya di bumi sekitar 6.000 kali per menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lobster memiliki darah biru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seorang pria mengatakan rata-rata 4.850 kata dalam 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuku ibu jari tumbuh lambat dan kuku jari tengah yang tercepat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kecap sebelumnya dijual sebagai obat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cokelat dapat membunuh anjing"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Produk pertama yang memiliki barcode adalah Wrigley’s gum"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kanada dalam bahasa India berarti Desa Besar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seseorang menghasilkan 100 pound sel darah merah dalam hidupnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pita karet terpanjang adalah di kulkas"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada 293 cara untuk menukar dolar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "“Dreamt” adalah satu-satunya kata yang berakhir dengan ‘mt’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang cerdas memiliki kadar seng dan tembaga di rambut mereka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "69% orang Amerika menggunakan internet dan hanya 5,5% dari India"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Plastik dibutuhkan 500 tahun untuk terurai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Amerika telah memiliki 30,30% bandara di dunia & India hanya 0,70%"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Total wilayah permukaan bumi adalah 197 juta mil persegi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cahaya matahari mencapai bumi membutuhkan waktu sekitar 8 jam 3 detik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Penduduk di dunia telah meningkat 3,1 miliar dalam 40 tahun terakhir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sekitar 180 juta kartu Valentine tersebar per tahunnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang berusia di atas 100 di AS meningkat dari 4.000 pada tahun 1960 menjadi 55.000 pada tahun 1995"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seekor kucing dapat berlari 20 km per jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seekor cheetah dapat berlari 76 km per jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Katak yang terbesar di dunia adalah Goliath Frog"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tidak ada dua zebra yang belangnya serupa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terdapat hampir 50 jenis kangguru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Joeys adalah nama yang diberikan kepada anak kanguru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Woodpecker dapat mematuk 20 kali dalam satu menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lidah seekor Chameleon adalah dua kali panjang tubuhnya sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "10% dari populasi dunia adalah tangan kiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai “emas putih”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perbandingan jumlah rayap dan manusia di dunia adalah 10 :"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuda Nil kentut lewat mulut"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pohon kelapa membunuh 150 orang tiap tahun, lebih banyak daripada hiu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita bernafas kira-kira 23.000 kali setiap hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tahukah anda? Llanfairpwllgwyngyllgogerychwyrndrobwlll, adalah nama sebuah desa di Wales Utara, Inggris. Sulit dibaca bukan?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada sekitar 10ribu jenis apel di dunia Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Umur dari capung adalah 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kentut sapi termasuk penyebab utama global warming"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan film agar kita bisa melihat semua gerakannya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Siput bisa tidur selama 3 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tiap tahun, bulan menjauh 3.82 cm dari bumi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Riset membuktikan, memakan pisang bisa menambah daya ingat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang alergi bahan latex, biasanya alergi kiwi juga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ilmu tentang perkembangan apel disebut Pomology"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita bisa mematangkan Mangga dengan cepat dengan cara memasukkan ke dalam paperbag bersama dengan pisang matang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Antioksidans pada apel lebih besar 5x dari pisang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya 1 dari 5 orang australia makan apel tiap hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kiwi memiliki nama lain Chinese Gooseberry"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mangga masih 1 family dengan tanaman Poison Ivy"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pelaut inggris mengonsumsi air jeruk nipis untuk menghindari mabuk laut"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pelaut inggris disebut juga Limeys karena suka minum air jeruk nipis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nanas mengandung Bromelain yang berguna mencegah bir dingin berawan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotorUmur dari capung adalah 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "1 pohon apel rata2 bisa menghasilkan 500buah apel"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lebih dari 60juta Ton apel dihasilkan di dunia per periode tertentu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kiwi ditetapkan sebagai buah kebangsaan di Cina"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pear akan berubah menjadi hitam sekali jika disimpan pada lingkungan yang kurang oksigen"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Markisa pertama kali ditemukan di Brazil"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Riset membuktikan bahwa makan apel bisa mengurangi risiko kena kanker"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Biji apel merupakan racun ringan namun tidak berbahaya bagi manusia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jeruk adalah buah yang paling umum di dunia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beberapa negara di dunia melatih bangsa monyet untuk memetik kelapa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada lebih dari 400jenis kiwi di Cina"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bahasa gaul di australia “She’s Apple” bukan berarti “Dia (wanita) manis” tetapi berarti “Semuanya baik2 saja”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nanas yang belum matang adalah racun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kiwi memiliki nama asli Yang Tao (Sunny Peach)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Makan pisang ketika makan nasi dapat membantu ibu hamil terhindar dari Morning Sickness"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Plum jepang sebenarnya berasal dari Cina"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Plum bisa tumbuh di semua benua kecuali antartika"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memerlukan tenaga 50lembar daun untuk menghasilkan 1buah apel dalam 1pohon"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Makan plum membantu meningkatkan penyerapan zat besi dalam tubuh"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Anggur dapat meledak jika dimasukkan ke dalam microwave"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pisang mengandung vitamin B6 yang bisa mengontrol kadar gula dalam darah, dan membangkitkan mood"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "1nanas bukan 1buah, tetapi terdiri atas lebih dari 200anak buah (fruitlets)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jeruk nipis tidak mengandung segala jenis lemak, natrium, dan kolestrol"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menanam semangka dalam kotak akan menghasilkan semangka kotak"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dilihat dari beratnya, semangka adalah buah yang paling diminati di USA"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pohon kelapa entah kenapa disebut “Tree of Life”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bunga pohon markisa adalah Bunga kebangsaan negara Paraguay"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semangka adalah sepupunya Terong, Labu, dan Squash"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menanam 1biji buah jeruk bisa menghasilkan lebih dari 1 pohon"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagian dalam kulit pisang bisa untuk menyemir sepatu kulit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagian dalam kulit pisang juga bisa digunakan untuk menghilangkan gatal bekas gigitan nyamuk dengan cara menggosokkannya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Kerala, India selatan, Bunga kelapa digunakan untuk upacara Pernikahan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kulit Plum dipercaya memiliki efek Laxative"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pisang kaya akan vitamin B-Complex yang bisa menenangkan sistem saraf"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tidak ada yang se-rima dengan “orange” (jeruk)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Salah satu spesies markisa yang buahnya berwarna ungu bisa melakukan fertilisasi sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pisang bisa meningkatkan kadar Serotonin yang bisa melawan depresi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semakin besar “Navel” pada Jeruk Navel, semakin manis buahnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Markisa yang berkerut adalah markisa yang paling manis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Radiasi dari 1 batang rokok sama dgn radiasi 2000x X-ray"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sepatu boot awalnya dikhususkan untuk berperang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sebelum Masehi bahasa inggrisnya adalah B.C (Before Christ). Setelah Masehi adalah A.D (Anno Domini)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Julius Caesar tewas dengan 23 tikaman"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama mobil Nissan berasal dari bahasa jepang Ni : 2 dan San : 3. Nissan : 23"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jerapah dan tikus bisa bertahan hidup lebih lama tanpa air dari pada unta"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perut memproduksi lapisan lendir setiap dua minggu agar perut tidak mencerna organnya sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "98% dari perkosaan dan pembunuhan dilakukan oleh keluarga dekat atau teman korban"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semut dapat mengangkat beban 50 kali tubuhnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Deklarasi Kemerdekaan Amerika ditulis diatas kertas marijuana"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Titik diatas huruf i disebut ‘title’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sebutir kismis yang dijatuhkan kedalam gelas berisi sampanye segar akan bergerak naik turun dalam gelas"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Benjamin Franklin anak bungsu dari orangtua bungsu keturunan ke 5 dalam keluarga bungsu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Triskaidekaphobia adalah ketakutan pada 13. Paraskevidekatriaph obia adalah ketekukan pada hari jumat tanggal 13 (bisa terjadi antara 1-3 kali setahun). di Italia, 17 adalah angka sial di Jepang angka sial adalah 4"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lidah jerapah panjangnya sekitar 50 cm"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mulut menghasilkan 1 liter ludah setiap hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita bernafas kira-kira 23.000 kali setiap hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata ZIP (kode pos) adalah kepanjangan dari ‘Zoning Improvement Plan’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Coca-Cola mengandung Coca (yang merupakan zat aktif pada kokain) dari tahun 1885 sampai 1903"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata kita bicara 5000 kata tiap hari (walaupun 80% nya kita bicara pada diri sendiri)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seandainya kuota air dalam tubuh kita berkurang 1%, kita langsung merasa haus"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "4 simbol raja pada kartu remi melambangkan 4 raja yang etrkenal di jaman masing-masing: Sekop = David/Raja Daud ; Keriting = Alexander the Great/Iskandar Agung ; Hati = Charlemagne/ Raja Prancis ; Wajik =Julius Caesar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seumur hidup kita meminum air sebanyak kurang lebih 75.000 liter"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap orang, termasuk kembar identik, sidik jari dan tekstur lidahnya tidak ada yang sama"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Titik merah pada 7-Up logo berasal dari penemunya yang bermata merah. Dia seorang albino"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanda ’save’ pada Microsoft Office programs menunjukan gambar floppy disk dengan shutter terbalik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Albert Einstein dan Charles Darwin,keduanya menikah dengan sepupu pertama mereka (Elsa Löwenthal dan Emma Wedgewood)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Unta punya 3 kelopak mata"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sehelai rambut di kepala kita mempunyai masa tumbuh 2 sampai 6 tahun sebelum diganti dengan rambut baru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seseorang masih akan sadar selama 8 detik setelah dipenggal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Otot yang bekerja paling cepat ditubuh kita adalah otot dikelopak mata yang membuat kita berkedip. kita bisa berkedip 5kali dalam sedetik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Coklat dapat membunuh anjing,karena langsung mempengaruhi jantung dan susunan syarafnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanpa dicampur ludah di dalam mulut, kita tidak akan merasakan rasa makanan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuku jari tangan tumbuh 4kali lebih cepat daripada kuku kaki"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "13% orang di dunia adalah kidal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hampir semua lipstik mengandung sisik ikan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bayi yang baru lahir berat kepalanya 1/4 dari berat tubuhnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita sebenarnya melihat dengan otak. mata hanya berupa kamera yang mengirim data ke otak. 1/4 bagian dari otak digunakan untuk mengatur kerja mata"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tahun 1830an saus tomat biasa dijual sebagai obat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tiga monyet bijak punya nama: Mizaru (See no evil), Mikazaru (Hear no evil), and Mazaru (Speak no evil)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "India mempunyai Undang-undang hak untuk sapi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama negara Filipina berasal dari nama Raja Phillip"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saudi Arabia berasala dari nama Raja Saud"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Anak-anak mempunyai 20 gigi awal. Orang dewasa punya 32"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena langkanya logam, piala Oscars yang dibagikan pada perang dunia ke II terbuat dari kayu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap Siklus 11 tahun, kutub magnet pada matahari bertukar tempat. Siklus ini dinamakan “Solarmax”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada 318,979,564, 000 kemungkinan kombinasi pembukaan pertama pada catur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada lebih dari 300 bakteri pembentuk karang gigi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Macan adalah anggota terbesar dalam keluarga kucing"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nomer “172? dapat ditemukan pada uang kertas 5 dollar amerika, pada gambar semak-semak dibawah Lincoln Memorial"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pohon kelapa membunuh 150 orang tiap tahun. Lebih banyak daripada hiu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pada poster film ‘Pretty Woman’ Julia Robets terlalu pendek untuk bisa sejajar dengan Richard Gere. Maka digunakan model Shelley Michelle sebagai tubuh Julia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Daerah kutub kehilangan matahari selama 186 hari dalam setahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kode Telephone Internasional untuk Antartica adalah 672"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bom pertama sekutu dijatuhkan di Berlin pada perang dunia ke II. Membunuh satu-satunya gajah di Kebun Binatang Berlin"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata hujan jatuh dengan kecepatan 7 mil per jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Butuh 10 tahun bagi Leonardo Da Vinci untuk melukis Mona Lisa. Lukisan itu tidak ditandai dan di beri tanggal. Leonardo dan Mona mempunya susunan tulang yang persis sama dan menurut sinar X, ada 3 versi lukisan dibawah lukisan itu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama dari kembar gemini adalah Castor dan Pullox"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan filam agar kita bisa melihat semua gerakannya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu kilo dari berat badan kita mengandung 7000 kalori"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Darah sama kental dengan air laut"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama asli butterfly (kupu-kupu) adalah flutterby"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bayi lahir setiap 7 detik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu dari 14 wanita Amerika berambut pirang asli. Prianya hanya satu dari 17"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "The Olympic adalah saudara dari kapal Titanic, dan melayani dengan selamat selama 25 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat Titanic karam, 2228 orang ada di dalamnya. Hanya 706 yang selamat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Amerika, seseorang didiagnosa menderita AIDS tiap 10 menit. Di Afrika, seseorang meninggal karena AIDS tipa 10 menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sampai usia 6 bulan, bayi bisa menelan dan bernapas secara bersamaan. Orang dewasa tidak bisa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Alasan kenapa diiklan jam kebanyakan jarum menunjuk pukul 10.10, karena jam seperti sedang tersenyum"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tiap tahun bulan menjauh 3.82 cm dari bumi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam satu tetes air mengandung 50 juta bakteri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dengan menaikan kaki pelan2 dan berbaring tenang dengan punggung lurus, kita tidak akan tenggelam di pasir hisap"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu dari 10 orang hidup di suatu pulau"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lobster dapat hidup selama 100 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Permen karet tidak dijual di Disney Land"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mangunyah permen karet saat mengupas bawang mencegah kita menangis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rahang kucing gak bisa bergerak kekiri dan kanan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kira berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Suara yang kita dengar dari dalam kerang bukan suara ombak laut, tapi suara aliran darah dalam kepala kita"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang kebanyak yang menderita ketakutan pada ruang terbuka (kenophobia) daripada ketakukan pada ruang tertutup (claustrophobia) "
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Adegan band yang terus bermain musik saat Titanic tenggelam adalah kisah nyata"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "35% dari orang yang ikut kontak jodoh lewat internet, sudah menikah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "CocaCola dulu berwarna hijau"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Secara fisik, babi tidak bisa melihat ke langit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semua beruang kutub kidal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kelelawar selalu belok kiri jika terbang keluar gua"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jim Henson pertama kali memakai kata “Muppet”. Kombinasi dari “marionette” dan “puppet”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gajah satu-satunya hewan yang tidak bisa meloncat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "The Michelin man (figur berbaju dan bertopi putih diiklan Michelin) bernama Mr. Bib. nama aslinya Bibendum pada iklan pertama tahun 1896"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita tidak bisa menjilat siku kita sendiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata “lethologica” menggambarkan saat dimana kita tidak bisa mengingat apa yang kita inginkan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalimat yang bisa dibaca sama dari depan dan belakang (racecar, kayak, tamat) disebut “palindrome” "
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Siput bisa tidur selama 3 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Diatas khatulistiwa melintas sekitar 200 satelit asing, termasuk satelit mata-mata"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang di Cina lebih banyak yang berbahasa Inggris dari pada orang di Amerika"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Karena pengaruh rotasi bumi, kalau kita melempar kearah barat, lemparan kita akan lebih jauh jatuhnya dari pada kearah timur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu dari 9000 orang menderita albino"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kursi listrik ditemukan oleh seorang dokter gigi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita berulang tahun bersama 9 juta orang dari seluruh dunia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Setiap manusia dalam hidupnya rata-rata habis untuk menunggu dilampu merah selama 2 minggu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Botol aqua dan tempat makan plastik baru bisa terurai dengan sempurna dalam tanah setelah 50.000 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kucing bisa membuat lebih dari 100 bunyi vokal, anjing hanya bisa sekitar 10"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gigi berang-berang tak pernah berhenti "
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kelelawar adalah satu-satunya mamalia yang bisa terbang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika boneka Barbie adalah manusia, ukurannya adalah 39-23-33 (99-58,5-84 cm). Tingginya sekitar 215 cm dan punya leher 2kali lebih panjang daripada manusia normal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seekor Babon bernama ‘Jackie’ menjadi prajurit resmi dalam angkatan bersenjata Afrika Selatan pada Perang Dunia I"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bibliophile adalah sebutan untuk kolektor buku-buku langka. Bibliopole adalah penjual buku-buku langka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jantung ikan paus biru berdenyut 9 kali dalam semenit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Arabic numerals bukan berasal dari Arab, tapi diciptakan di India"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kupu-kupu melihat dengan 12000 mata"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bulan February tahun 1865 adalah satu-satunya bulan dalam catatan sejarah yang tidak sempat mengalami bulan purnama"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Umur dari capung adalah 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Butuh waktu 6 bulan untuk kuku kaki tumbuh dari bawah paling bawah sampai ujung kuku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Daya ingat ikan hanya 3 detik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bulan purnama 9 kali tebih terang daripada bulan setengah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Untuk setiap patung memorial orang diatas kuda, jika 2 kaki depan kuda mengangkat, maka orang tersebut tewas dalam pertempuran, jika satu kaki kuda yang terangkat, maka orang tersebut meninggal karena luka dalam pertempuran, jika 4 kakinya menginjak tanah, orang tersebut meninggal secara normal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beruang dewasa dapat lari secepat kuda"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tulang kuda lebih banyak 18 buah dari tulang manusia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ubur-ubur terdiri dari 95% air"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kulit Zebra adalah putih yang bergaris hitam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kecuali manusia dan monyet, semua mamalia buta warna"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Biji apel mengandung sianida"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tikus dan kuda tidak bisa muntah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Penguin adalah burung yang tidak bisa terbang tapi bisa berenang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Astronot dilarang mengkonsumsi kacang sebelum menjelajah ruang angkasa karena jika buang angin dalam baju khusus astronot dapat membahayakan mereka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Winston Churchill lahir di toilet wanita saat acara dansa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sebelum ada pesawat jet, Jetlag disebut Boatlag"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kucing tidak bisa merasakan rasa manis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam perang dahulu, orang yang buta warna dibutuhkan dalam tim pendeteksi kamuflase di militer"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sapi tidak punya gigi atas"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hedenophobic berarti takut akan kesenangan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Buaya tidak bisa menjulurkan lidah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kentut sapi termasuk penyebab utama global warming"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semut selalu jatuh miring ke kanan jika diberi racun serangga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kucing rumah benci bau lemon dan semua yang berbau sitrus"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Donal Bebek dilarang beredar di Finlandia karena Donal tidak pakai celana"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama asli Donal bebek adalah Donald Flauntleroy Duck"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Indra perasa kupu-kupu ada dikakinya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dry Ice tidak meleleh, tapi menguap"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mata burung unta lebig besar dari otaknya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bintang laut tidak punya otak"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tiap manusia punya telinga yang berbeda"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Telur segar tenggelam diair, telur yang kadaluarsa mengambang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "80% dari seluruh binatang di dunia adalah serangga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kacang adalah salah satu bahan untuk membuat dinamit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ratu Elizabeth I menderita Anthophobia (takut akan mawar)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mata manusia yang sehat (tidak buta warna) dapat menbedakan 500 jenis warna abu-abu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ikan mas yang bunting disebut ‘twit’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Eropa adalah benua tanpa padang pasir"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lalat meloncat mundur saat akan terbang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sekeor kucing memiliki 32 otot pada tiap telinga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "A honeybee can fly at fifteen miles per hour"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Macan mempunyai kulit yang belang,bukan hanya bulu yang belang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "A “jiffy” is the scientific name for 1/100th of a second"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kambing mempunya pupil mata segi empat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Novel pertama yang menggunakan mesin tik adalah Tom Sawyer"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hamster sangat suka makan jangkrik"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pemantik ditemukan sebelum korek api"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata dalam setiap batang permen coklat terdapat serangga yang meleleh bersamanya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanduk badak terbuat dari rambutnya yang mengeras"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perang paling singkat dalam sejarah adalah perang Zanzibar and England tahun 1896. Zanzibar menyerah setelah 38 menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kulit beruang kutub sebenarnya hitam. Bulunya berwarna bening, dan tampak putih di salju"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Elvis mempunyai saudara kembar bernama Garon, yang meninggal saat lahir, maka nama tengah Elvi adalah Aron, untuk menghormati saudaranya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Landak punya sidik jari yang mirip manusia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kuda Nil kentut lewat mulut"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Shakespeare yang menemukan kata “assassination” dan “bump”"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mahluk yang bisa tersipu-sipu hanya manusia"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wanita berkedip dua kali lebih banyak dari pria"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama Jeep (jip) diampil dari singkatan “GP”, bahasa militer untuk General Purpose"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seorang “quidnunc” adalah sebutan untuk orang yang selalu ingin tahu gosip terbaru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika matahari tiba-tiba padam, butuh 8 menit bagi manusia untuk menyadarinya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Leonardo Da Vinci yang menemukan gunting, helikopter, dan banyak alat lainnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam 4000 tahun, tidak ada jenis binatang peliharaan baru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "25% dari tulang manusia ada di kaki"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC)"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kira-kira 100 orang tersedak ballpoint tiap tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kita kehilangan satu mata, kita akan kehilangan 1/5 dari pengelihatan kita dan kehilangan seluruh persepsi tentang kedalaman objek"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bawang putih yang kita gosok di tumit kaki akan meresap dapat dapat tercium dalam nafas kita"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dengan merentangkan kedua tangan sejauh mungkin, jarak dari kedua ujung tangan adalah sama dengan tinggi kita"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Liburan selama sebelas hari berarti kita punya waktu hampir sejuta detik untuk menikmatinya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam film Silence of The Lambs, tokoh Hannibal Lecter tidak pernah berkedip"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di jepang, warung kopi disebut ‘Kissaten’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Merebus telur burung unta butuh waktu 40 menit"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jaguar takut pada anjing"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gajah hanya tidur 2 jam dalam sehari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Johnny Deep takut pada badut"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ganymede adalah bulan planet Jupiter, merupakan bulan terbesar di tata surya kita, lebih besar dari planet Merkurius"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam golf, ‘Bo Derek’ adalah istilah untuk nilai 10"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Koala punya dua jempol"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Latte dalam bahasa Italia adalah susu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Llanfairpwllgwyngyl lgogerychwyrndro bwlll… adalah nama sebuah desa di Wales Utara, Inggris"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di Italia, Micky Mouse lebih dikenal dengan nama ‘ Topolino’"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Susu sebenarnya lebih menyerupai makanan daripada minuman"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ada lebih dari 450 jenis susu di dunia. 240 berasal dari Prancis"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nyamuk lebih suka anak-anak daripada orang dewasa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Partikel debu didalam rumah sebagian besar berasal dari sel kulit mati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rat-rata orang bergerak 40 kali dalam tidurnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam bahasa Inggris, ‘Naked’ artinya tanpa perlindungan. ‘Nude’ artinya telanjang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Broccoli dan kembang kol adalah sayuran yang berupa bunga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Anak baru lahir memiliki 350 tulang. Mereka menyatu atau menghilang sampai menjadi 206 pada usia 5 tahun"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tidak ada bukti yang pasti siapa yang membangun Taj Mahal"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dalam survey terhadap 200000 burung unta selama 80 tahun, tidak ada satupun yang mengubur kepalanya dalam tanah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nail Amstrong melangkah pertama kali di bulan dengan kaki kiri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Shuttlecock untuk badminton harus punya 14 bulu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mutiara bisa larut dalam cuka"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Babi tidak dapat berkeringat karena tidak punya kelenjar keringat. Mereka berlumur lumpur untuk mendinginkan kulitnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ikan hiu kebal terhadap kanker"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rusa Santa bernama: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, dan Blitzen"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beberapa jenis cacing pita akan memakan dirinya sendiri jika kelaparan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita bisa menghela sapi naik tangga, tapi tidak bisa menghela mereka turun tangga"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Plakat yang ditinggalkan Apollo 11 di bulan berbunyi “Here men from the planet Earth first set foot upon the Moon July 1969, A.D. / WE CAME IN PEACE FOR ALL MANKIND"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Alpabet Hawai terdiri dari 12 huruf saja"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nama paling populer di dunia adalah Muhammad"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bola mata kita beratnya sekitar 28 gram"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Paru-paru kiri lebih kecil dari paru-paru kanan karena memberi tempat terhadap jantung"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pinguin hanya ada di kutub selatan, dan tidak bisa menyebrangi equator"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kebanyakan orang bisa mendengar lebih baik dengan kuping kanan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Vitamin pada buah biasanya terdapat pada kulitnya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rata-rata klakson mobil berbunyi pada nada F"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pria lebih mampu membaca tulisan dengan ukuran huruf kecil daripada wanita"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['fakta'].map(v => v + ' [Fakta Unik]')
handler.tags = ['quotes']
handler.command = /^(fakta)$/i
handler.register = true
handler.indo = true
export default handler