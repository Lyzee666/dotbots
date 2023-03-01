import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Kabeh-kabeh dicacati, koyo koe wes oke, mbok ngoco-ngoco kono sek to su jingan !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sengojo randue pacar, ben iso belajar tegar~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sengojo randue pacar ben dikiro jual mahal, padahal cen raono sek nyeraki. Asuasu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nk tekomu gur mamper ngombe tok wong edan kae yo iso~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek mung gawe nyaman terus di tinggal lungo, tukang pijet kae yo iso !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di kurangi le delok potone mantan, ben beban ingatan tentang dee iso rodo berkurang~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nk mung mbaleni mulai dari 0 ae kang pom bengsin yo iso kok~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Akeh saingane? Ojo kaget, raono critane perang tanpo ono lawane, ojo mundur! SING PENTING YAKIN !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Untung kangen koe ki gratis, cobo nek bayar po ra wes dadi gelandang aku.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengen ngidoni raine, tapi kok iseh konco dewe.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing nglarani malah sing tak sayangi.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Untung mencintai mu Ki gratis, ja lek bayar pora mengkis² aku~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gaweane rebahan, arang upload story, arang dolan, konco yo sitik. \nKiro-kiro iki nemu jodohe lewat jalur opo yo?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cah elek-elek wes do pacaran, aku sing baguse nganti sundul langit kok rapayu-payu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ndes, nek difitnah ngerebut pacare uwong, yo tak rebut tenanan, la mosok wes entok fitnah raentok menungsone, kan yo rugi.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku di arani seneng Karo yang e.. Yo tak jawab 'sepurane mbak, aku lebih mencintai duit daripada yang mu seng ganteng e ra sepiro iku'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sok sok an pamer poto nikah muda, padahal asline meteng ndisek~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Akeh wong milih nyekso atine, mung mergo 'Aku rawani ngomong'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Iso-isone makku ngandani nek dolan rausah mendem-mendeman, padahal aku seng bagian kulak.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengen kangen tapi raono sing di kangeni, kangen koe wae oleh ra?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bayangke aku dadi yangmu, bayangke sek wae, nek pengen tenan chat wae siji-siji ojo rebutan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kadang mung butuh konco ngobrol seng koyo asu, tetep enjoy walaupun saben ndino diundang asu.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Guyonan karo konco bahas topik sing saru kui marahi seru~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong wedok sing dikepruk nganggo tabong gas ora nesu, idamanku banget.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kesel yo?\nMatio ae rasah sambat, ngrepoti.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bekerja keraslah, sampe koncomu ngomong 'nyileh duite cuk'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tulung yo ndes seng rabi ojo kroyokan, lek wani siji-siji, disini saya sebagai penyumbang mengaku kewalahan mobat mabit golek silihan duit.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selain rung turu, aku yo durung ndue pacar lo yahene.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku pernah nduwe pacar blasteran, setengah indonesia setengah bajingan !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pacaran sing sehat ki sing kepiye? Rutin minum susu langsung seko pentile ngono po pie?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wes lah, kesel aku cuk !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, kangen?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mung bocah wingi sore, seng dipekso gede mergo kahanan urip~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ono koe Aku semangat dek~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetep dadi uwong sing penakan,  ditengah akeh e uwong seng sak penake dewe~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo pengen dadi wong pinter yen akhire dadi keminter, ora popo dadi wong bodho sing penting akhlake dinggo~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek aku moco koran sarungan, terus koe blonjo dasteran, ngko sing kerjo sopo?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing dewasa sitik, ojo gampang nesunan, sido rabi ora iki?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kere-kere ngene wes tau nulungi koe pas susah, bajingan koyo dapuranmu opo yo kelingan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seng pas cilik pengen cepet-cepet gede, pie kabare mumet ora ndase?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengen dadi bojomu ae, ben ora kongan-kangen~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selingkuh? Yo sori, anak ketelu roto-roto setia kabeh.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semenjak ono corona, masa enomku ngroso gur sio-sio.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Apapun masalahmu dino iki, ojo semangat, tetep lungkrah karo mletre.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong liyo opo ngerti, betapa montang mantinge awakmu meskipun ketoke prengas prenges koyo wong edan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ono ora wong wedok seng mikir ngene 'ohh yo aku kan wes ndue de.e, ngopo iseh ngresponi wong liyo'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek dee tiba-tiba berubah, elingo omongane mbak kasir.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "trima kasih kakak, selamat datang kembali\n\nTrima kasih ndasmu !\nIki urusan ati, ora cukup mung terima kasih.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo wedi nek dee lungo, wedio nek dee iseh ro koe, tapi atine kanggo wong liyo~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Teruntuk seng lahiran 2000, koe lahir opo mbayar parkir !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rapopo, mung kahanane wae seng rodo njarag, bajingan kesel tenan aku.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sedang kepontang panting keadaan, yang datang secara ujug-ujug dan mak jegagik~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Prinsipe wong lanang kui gur siji, gemati ngayomi ro setia.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wes bokonge tepos, susune gur sak sego angkringan, sok sokan nglarani aku bajingan !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Berhubung member grup e wes ono wong akeh, nek misal do iuran 5000 an nggo modal aku rabi pie?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nutup dalan tok, ra nanggap dangdutan. Yo lemes no pak !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku kerjo rekoso udu mergo aku ngoyak ndonyo, tapi aku reti rasane loro disepeleke mergo ora ndue duet.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Teruntuk kowe wong sing hobi ngrasani aku neng mburi, tulung rodok maju sitik aku ora krungu suu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo meneh aku, ultramen wae nek diserang atine yo ketip-ketip dodone ndes !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lagi males kakean cangkem, nek koe ngomong dinosaurus iseh urip, iyo koe bener, aku wes males mikir !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ra chattingan kangen, chattingan terus bosen. Ayo rabi wae wes !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Koyone corona iki helm e cargloss ndes, la kabeh dilarani lo pie karepe !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong lanang ganteng akeh dek, tapi wong lanang seng pas wedok e nesu ora mbales nesu kui limited edition~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lak aku ra mesakne wong tuoku, aku yo iso koyo rai-raimu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seng mbyen ngomong 'awadewe rasah pacaran, awadewe komitmen ae' piye endinge?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Indonesia luas ndes, rugi nek yangmu siji.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lungo o rapopo, aku tak golek neh.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Simbok : pacarmu endi le? Simbok pengen weruh. \nAku : podo mbok, aku yo pengen weruh.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong koyo aku ngene ki, nek ra modal niat karo semangat, sing arep tak ndel ndel ke yo opo?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mandang kok fisik, mandang ki nganggo sego !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek dichat kui dibales ndes, aku iki kancamu, udu fansmu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku disindir ora mati, dilokne ora wedi, ditantang yo wani !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selain matahari, aku yo iso gawe koe kringetan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek ora jodo yorapopo, mugo wae iso dadi tonggo, malah luwih penak liwat jendelo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pesene simbok 'rapopo nduwe pacar omahe adoh, mbesok nek besanan sisan jalan-jalan'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Awak pegel tak kiro njaluk dipijet, jebule njaluk dipeluk~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Imajinasi terliarku adalah 'turu karo pacare konco'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kesehatanmu lo rasah dijogo, ndang matio wae, sengit aku nyawang raimu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rapopo elek, jare mbahku nek kontole gedi oleh bojo seng ayu.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Raentok lemah, semangat mbokan, mbyen pas cilik jare arep dadi ultramen.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Elek-elek ngene, cilikanku diambungi wong akeh masamu.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Endi seng ngomong sudahi sadboymu ayo dadi yangku, cangkeman tok asu !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, rasah macak ayu-ayu, wong lanang ki seneng seng natural.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Resiko dadi wong ra kepenakan, nek remuk remuk tenan, nek ajur ajur tenan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ketika wetengku mules, pas wes tekan wc mung ngentut dan mak klutik saja, disitu saya rodo gelo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pesene simbok: Rausah mandang bondo, seng terpenting dee ngerti kekuranganmu tapi dee ra lungo~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meskipun aku elek, goblok, anak e wong ra ndue. Tapi aku ngerti carane ngajeni uwong.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pamer tok ra dikentu, yo rugi ndes !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Di kei seng pinter golek duit, malah milih seng pinter nglarani~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek ngerti akhire bakal koyo ngene, ngertio mbiyen adewe rasah kenal, rasah ketemuan, wes pokoke rasah jingan !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, dolan yo mumpung prei.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meneng-meneng difoto yangku, terus digawe story dee, sumpah aku rung pernah.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lemes ndes, ndelok koncoku ndue yang kabeh !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rabi wae yo, masalah mangan muleh ngomahe dewe-dewe.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ambekno mbendinone guya-guyu, jane yo rodo mumet~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Arep diculne ki eman, yo sayang, yo kadung jeru, arep di pertahanke kok bojone uwong. Wes angel !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sumpah angel banget lo, nemokno wong wedok sing durung dikapak-kapakno mantane.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Iso-isone aku seng biasane semangat, dadi rodo aras-arasen ngene.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bayangno yangmu ngajak koe neng ngomahe, terus mbokne ngomong 'seng koyo ngene iki diajak neng ngomah!'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, kancani aku ngasi keturon yo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pacar raono kabar, mantan nakoki kabar. Duh gusti, iki ujian opo ulangan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Raono alesan golek liyane, apikmu tak syukuri, elekmu tak tutupi~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing moco njero ati dadi pacarku titik.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Opo bener 'memek' kui bahasa jawane 'memanjat' ndes?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Salahku ra sepiro, tegelmu ra kiro-kiro~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gawe seng pacaran tetep langgeng yo, seng jomblo? Kenalan ro aku po piye.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ikhlas ora segampang ijolan posisi kenthu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mung pas riyoyo tok, wong wedok gelem ngakoni salah.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku meh dolan ro yangku, koe ojo telpon opo wa, ngko nek wes bali tak kabari.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ngopo si wong lanang nek pas ketemu karo pacare, mesti ngelus-ngelus rambute pacare, kok ora ngelus-ngelus jembute.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yangmu di pek konco? Kekno, ojo koyo wong susah.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kok iso yo, wajahe glowing, kulite putih, tapi pentile ireng.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku asline wegah tuku paketan, lha piye yangku akeh kok.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ngantuk to? Yowes turuo tapi telpone ojo mbok peteni, ben mati dewe !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ganteng ora, ireng iyo, lucu yo ora, sugeh opo meneh, ncen dasare ra mbangkat disayang~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mosok poso-poso behelan ngemot wesi, ora batal po?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sesok kan wes poso, mengko seng nganggo masker sering-sering dipantau, sopo ngerti wonge karo ngunyah bakwan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bajingan mandang fisik kabeh maine !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cita-citaku sederhana, mugo taiku ro taimu iso sak wc suatu hari nanti.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seng biasane di ajaki neng omah, piye saiki? Sido di rabi ora?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dadi pengen mangan sego goreng, tapi seng ra nganggo sego enek ora?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cidro to, salahe ora ro aku.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ngaceng kuat, mosok jumatan sambat.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Demi ketenangan, aku milih rangerti, rapengen ngerti, lan ra arep ngurusi !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meh Poso, sepurane yo ndes nek aku nduwe salah, tapi nek raimu panggah gateli ayo gelud ae, gae penutupan los.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wes gede ojo sambat perkoro cinta, eling wes jembuten !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Piye dek? Sido dadi mantune mbokku ra.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Janjimu koyo peli, dipenakke malah ngidoni.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sak setia-setiane wong wedok, nek enek wong lanang seng luwe ganteng, yo ndase mlintir !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Koe ayu dek, nek ra ndue pacar.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Lemah-lemah teles, wong ngalah kakean apes~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pilih ndi? kowe dadi bojoku, opo aku dadi bojomu.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, keloni.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jane akui wonge mageran, tapi nek dikongkon mencintaimu, semangate rakaruan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong aku bobrok koyo ngene, mosok arep dadi pujaan hatimu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cie meh ngechat aku tapi gengsi.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak kandani dek, wong setia koyo aku ki rabakal teko pindo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo mung kenal cinta tok, ciu yo enak lo ndes.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sengit rapopo, neng rasah ngajak bolo su !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Conda canda matamui !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gengsi kok di gedekne, mending nggedekne susumu sing isih cilik kui dek.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Manut welinge wong tuo, keterbatasan udu hambatan selagi niat iseh ono~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Suwun nggo siji jeneng, seng mbyen wes tau tak gawe password~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rai pas-pasan, sok-sokan gawe status 'iri bilang bos', seng di irini ki opo? mbok seng genah sitik su !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selingkuh? sepurane ono 8 ati, 9 simpenan, 26 cadangan seng kudu tak jogo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sok-sokan arep goodlooking, ados wae sedino pisan, ngenteni rodo magrib sisan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Soyo gede soyo akrab karo kata-kata 'sabar yo, bersyukur yo, yoweslah arep piye neh'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mili koyo banyu, tegar koyo watu, sabar koyo bapak ro ibu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ngetan koe ngulon, aku wes tenanan jebul koe mung guyon~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku mau nyileh hpne koncoku, terus mantane wa ngajak balen, wa ne langsung tak hapus, Ben podo-podo jomblo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Milih torabika moka, torabika susu, opo torabika roaku dek.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ndes! nek kadung gabut, kabeh tak anggep pacarku.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Soyo ayu pacarmu, soyo ra tenang awakmu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ndes, misal mantanmu rabi amplope arep mbok iseni opo?~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dadi ngene ndes ! Soyo awak dewe sayang karo uwong, soyo awak dewe radihargai~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong lanang njaluk pap kui ra mergo mandang fisik dek, tapi di duduhno neng wong tuone, wes cocok opo durung.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jane sepiro si enake susune pacarmu, sampe wes ratau ngopi karo konco-koncomu.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku lanang ndes!! Tapi aku kerep ngomong 'yowes iyo, aku seng salah, aku njaluk ngapuro'~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sabar loro, meneng nyikso, ngomong yo percuma, pokoke jancok tenan !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yo misuh, yo istighfar, yo solawatan, yo dangdutan, yo menengan, yo cangkeman, uripku tak setel manut kahanan.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yogabut, yomager, yomumet, yowes, yotoibaa.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seng semangat raoleh sambat dek, awamu kerjo aku yo kerjo, bar kui rabi yo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Boro-boro ndue pikiran arep selingkuh, koe nesu ae aku bingung~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rodo loro, neng rapopo lah wes jancok !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rabi wae yo dek, soal beras enek PKH.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sak pinter-pintere golek topik obrolan, nek kowe dudu wong sing dikarepke yo jawabane singkat, padat, bangsatttt.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Meneng wae ra usah dikandani, intine awake dewe cukup ngerti, 'oh dekne ngono saiki'.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku pengangguran ae sibuk dek, oponeh kerjo.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rindu kui gratis, nyewo kamare seng mbayar~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mangan mie ayam karo krupuk, mantan lewat langsung tak kepruk~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Opo aku kudu dadi dora, ben koe iso tak bengoki 'katakan peka, katakan peka'.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ayo pisan-pisan nglarani wae, mosok dilarani terus, yo kesel to su !~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rasah insecure dek, aku tetep ngaceng kok weruh awakmu~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Penampilan oke, gaya josss. Rokok njaluk~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku wes kapok ngopi neng starbak, mosok cafe gedene semono raono gedhang gorenge.~"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dek, opo koe ra kangen, numpak motor karo aku, terus tanganmu mbok lebokne neng kantong jaketku."
        }]
        const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['ndsm']
handler.tags = ['quotes']
handler.command = /^(ndsm|ndasmu)$/i
handler.register = true
handler.indo = true
export default handler