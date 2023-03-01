import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Tujuane iso wae podho, nanging alur critane mesti bedho-bedho"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ngajeni, ngurmati lan midhereki dhateng tiyang sing langkung sepuh, kanggo sampeyan utamane wong jowo ojo ngasi ilang jawane, tata kramane lan unggah-ungguhe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sanadyan pikiran kadang luwih pinter, nanging ati kuwi ngerti endi sing pancen bener"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nyawango meng nduwur, ora ono babagan sing luwih muliya kajaba manah sing tansah bersyukur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terusno laku lan lakonmu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dadio pinter nanging ojo kuminter, dadio sugih nanging ojo sumugih. Sopo temen bakal tinemu.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gagal pisan wajar, gagal ping pindo wajar, gagal bolak-balik yo iseh wajar.\nSeng ora wajar iku nek awak dewe nyerah, padahal iseh akeh dalan seng iso diliwati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sakliyane angin karo banyu, opo meneh sing ora bisa dicekel..?😄"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen wis dadi niat, mboten pareng sambat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen ragamu kesel nanging atimu seneng, iku artine sampeyan nang jalur perjuangan sing bener"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora perlu kwatir bab hasil, Gusti Pengeran iku ngerti prosesmu lan Gusti Pengeran iku maha adil"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong nandur kuwi bakale ngunduh, kuwi nyata.\n\nSenajan kowe ora percaya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen ngroso uripmu akeh ujian, iku tandane awakmu kudu akeh sinau"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ditata atine, dibenahi tumindake"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ana kalane, urip sing sampeyan sambati kuwi urip sing wong liya pengini"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetepo murup, sanadyan padhangmu ora sepiro..🕯"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wes to rukun agawe sentosa, wes ora usah kakean gaya yo sing biyasa wae, ora usah kemlete opo meneh ngece sing kere, yo ojo seneng maido sing bodho"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bismillah Ya Alloh...\n\nNiat temandang, pikirane digawe padhang, ati ora sumelang, yen pancen wes rejeki ora bakal ilang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aja rumangsa yen ngibadah kuwi dadi beban, sejatine ngibadah kuwi sing ngenthengake beban"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semelehke ati lan pikire, tambahono rasa syukure, mugo-mugo kaparingan padhang lan ilang ruwete"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ilat iku sawijining gaman kang landhep, kang bisa mateni nadyan tanpa ngetokake getih"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nduweni rasa rumangsa cukup kuwi angel, yen ora bisa nggedeaken panarima lan syukur marang apa sing wis ditampa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong kesel mergo kerjo kuwi lumrah, sing ora lumrah kuwi sing wegah kerjo njaluk urip mewah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing slamet dudu sing pinter, nanging sing ngati-ati"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sanadyan sampeyan tibo bola-bali, nanging iseh tetep menyat ngadeg jejeg maneh...\n\nSAMPEYAN PANCEN JOZZZ...👍"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senajan dalan dicegat, rejeki ora bakal keliwat, senajan dalan ditutup rejeki ora bakal luput.\n\nSing penting gelem obah mugo-mugo entuk hasil sing berkah.\n\nOjo lali ndungo mergo rejeki kuwi wis diatur saking Gusti Sing Moho Kuoso"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetepo nduweni pangarep-arep, ndedonga lan sabar. Nganti kabeh kekarepan sampeyan ora mung dadi impen maneh"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jaman saiki ukurane wong sukses mung disawang seko apike sandangan lan apike tunggangan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo wedi yen tumindak benere sampeyan diluputke neng wong liya, nanging wedio yen tumindak lupute sampeyan dibenerake neng wong liya"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora perlu ketok wah, sing penting uripe bungah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gusti Pengeran ngerti opo wae sing ora sampeyan ngerteni. Sabar wae kabeh mesti ono dalane"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aja mbiji wong liya merga jarene, nanging kudu ngerti kepiye kasunyatane"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pasrah marang Gusti Pengeran, ojo pasrah merga kahanan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek ora seneng marang wong liya aja ngrasani, mengko ndak pekewuh nek pas butuh"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Luwih apik tangane reget nanging hasile resik, tinimbang tangan resik hasile reget."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo nyuwun bebanmu dikurangi, nanging nyuwuno pundakmu dikuatno, lan atimu disabarno"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rasa getun paling abot yaiku nyawang wong tua tambah tuwa nanging awake dhewe urung bisa apa-apa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dadi wong penting kuwi apik, nanging dadi wong apik kuwi luwih penting"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yakin wae nek rejeki kuwi wis ketaker, ora bakalan ketuker"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jaman saiki akeh cah nom-noman sing mbuang wektune kanggo nyante, timbang mbuang kringete kanggo masa depane"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong yen rumangsa wis paling bener, biasane kuwi wong sing angel dibenerke"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora ana proses sing sia-sia, anane mung ngimpi sing dikalahke rasa putus asa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora usah macak kendel lan sangar supoyo diwedeni, cukup sinau ngajeni supoyo disungkani"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Uripe sampeyan bisa uga ora sak begja kaya wong liya, nanging wong liya ora mesthi kuwat nglakoni urip kaya sampeyan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing gagal kuwi usahamu, dudu uripmu...!!\nSing ajur kuwi rencanamu, dudu masa depanmu...!!\n\nAyo sing semangat, aja gampang nyerah..!!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Opo wae profesimu..\nSyukuri, nikmati lan lakoni kanthi ikhlas ati.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Disyukuri opo wae pegaweyanmu saiki, sanadyan durung bisa gawe awakmu sugih sak orane bisa gawe awakmu urip"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Menungso pinter golek-golek lupute wong liyo, nanging ora pinter golek lupute awake dhewe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong bodho kang ngrumangsai cubluke kahanane luwih becik, tinimbang wong pinter kang rumangsa tanpa tandhing"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pancen urip kui koyo roda sing muter, kadang nang ngisor kadang yo nang nduwur, ning ana kalane yo kempes lan adoh saka tukang tembel ban"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Urip kuwi mung sepisan, sambate sing bola-bali"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora ana nikmat nang ndunya iki kejaba dawa umure, sehat awake, lan manfaat uripe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen awak kesel, pikiran ojo bubrah.\n\nYen ati ngajak nesu, golek'o perkoro sing iso gawe ati ngguyu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tak gawe bungah, ora tak gawe susah..\nAti tak gawe amba, ora kebak nggersula..\nSangu dunga, semangat ngupaya..\nNiat Bismillah, moga-moga diparingi berkah..\nInshaAlloh Sing Kuasa maringi ana."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nduwe siji yen disyukuri, bakal kroso luwih Aji. Timbang nduwe sak jagat, nanging iseh sambat ora bakal kroso nikmat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Apa sing bakal teka luwih apik tinimbang sing wis lunga, InshaAlloh.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Urip neng dunya mung sepisan aja digawe dadi beban..\nManut dalane..\nNikmati prosese..\nLan Syukuri hasile."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Luwih migunani yen duwe ilmu sethithik nanging dituduhake marang wong liya, tinimbang akeh ilmu nanging mung dienggo nang sampeyan dhewe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Syukur marang kahanan ugi taat marang aturan, sabar lan sadar, lilo lan legowo anggone nglakoni sajroning panguripan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Urip nang dunya kuwi mung sedela, aja seneng gawe lara marang tangga, kanca apa maning marang wong tua."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ojo digawe beban, manut dalane, nikmati proses'e lan syukuri hasil'e"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wong nandur kuwi bakale ngunduh, yen awakmu ora melu nandur nanging melu ngunduh kuwi jenenge dherep.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sak cukupe, sak nduwene, aja ngeboti gengsi.\n\nKakean sambat marai kelalen nikmat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aja rumangsa uripmu paling sengsoro lan ngenes dhewe, entuk sambat nanging golet solusi ojo disumbat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aja nganti ilang pangarep-arep lan percaya marang kekuwatan dunga, Gusti Pengeran bakal maringi apa sing sampeyan karepake anggere iku apik kanggo sampeyan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bejo kanggo wong-wong sing urip diparingi cukup materi, sisane luwih bejo merga iseh diwai ati lan balung sing kuat kanggo terus berjuang"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mugi Gusti Pengeran paring katresnan marang Tiyang Sepuh kita, kados Tiyang Sepuh nresnani kita nalika asih bocah. Lan mugi Gusti Pengeran paring pangayoman marang Tiyang Sepuh kita, kados Tiyang Sepuh ngayomi kita nalika asih bocah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sabar...\nAna ing sawijining dina, kabeh dungamu bakal entuk jawabane saka Gusti Pengeran."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nek sampeyan iso nompo lan nyukuri berkah lan rejeki saking Gusti Pengeran, sampeyan uga kudu bisa nampa pacoban sing diparingi saking Gusti Pengeran.\n\nMula yen sampeyan iri marang rejekine wong liya, sampeyan uga kudu ngerti pacoban sing ditampa wong liya saking Gusti Pengeran"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Moga-moga Gusti Pengeran ngganti kasusahan ing uripe sampeyan kanthi berkah sing kathah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pengin banda dunya kudu gelem kerja rekasa, pengin urip mulya kudu wicaksana, pengin bahagia kudu cedhak marang sing Kuasa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dhuwe sethitik yen bisa dirasakake lan disyukuri kuwi luwih aji tinimbang duwe sak kebake jagad nanging iseh sambat"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Apa sing sampeyan anggep ora penting, bisa uga ngimpine wong liya sing dadi kasunyatan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kabeh wes diatur Sing Kuoso, ora usah gersulo, mergo dalan uripe menungso kuwi bedo-bedo"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senajan uripmu susah aja ngasi nyerah, merga asih ana Gusti Allah sing ana nalika awakmu susah utawane bungah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora ana wong pinter tanpa sinau, sekti tanpa meguru"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nang saben masalah lan kasusahan, mesti sakuwise ana gampang lan bungah"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aja isin, aja minder, nek pancen niatmu apik lan caramu bener, tetepo berjuang.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen sampeyan wes kesel lan lungkrah, rasane wes pengin nyerah, elingo yen pitulunge Gusti Alloh iku jarake mung antarane bathuk lan sajadah."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen sampeyan mikir menawa ora ana sing gelem ngrungokake sampeyan, elinga menawa ana wong sing gelem ngrungokake sampeyan kapan wae"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sing kudu sampeyan paham, yen sampeyan kuwi wayange Sing Kuasa, dudu wayange menungsa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gusti Pengeran pirsa\n\n- Sampeyan lagi kesel\n- Sampeyan lagi nyoba\n- Sampeyan lagi angel\n- Sampeyan lagi ruwet\n\nNanging ngertia menawa Gusti Pengeran ora bakal nempatake sampeyan ing kahanan sing sampeyan ora bisa ngatasi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dadi wong apik iku gampang, cukup meneng wae dadi sing dideleng iku mung kabecikan.\n\nSing angel yaiku dadi wong sing migunani, amarga butuh perjuangan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sinau sing angel iku, sinau ngalah, ngasor lan ngegungaken liyan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetepo mesem, sanajan bola-bali remuk amarga kahanan.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kanggo masa depan sing cerah, awakmu ora entuk nyerah.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sinau ngontrol awake dhewe, ojo gampang baper opo meneh kegowo emosi, urip sakwajare wae, aja kakehan drama lan mundhakaken gengsi"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yen luput bisa didandani,\nYen gagal bisa dijajal meneh,\nNanging yen awakmu nyerah kabeh wes rampung"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dandani ngibadahmu, ojo mung ndandani raimu, mergo malaikat ora bakal baper ndelok rupamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Urip iki perjalanan sing kudu diadhepi, dudu malah diwedheni"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Neng ndonya ora ana manungsa sing sampurna, aja kebangetan leh ngrasa insecure, lan akehi bersyukur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tumindak becik aja mung merga ana sing nglirik, aja tumindak ala mung merga ora ana sapa-sapa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Wektune sampeyan neng ndunyo iki ono watese, sukses sakcepet-cepete supaya sampeyan bisa nggawe wong tuwa seneng nalika isih diparingi sehat lan umur dawa"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ingatlah semua lelahmu hari ini, akan menjadi tawamu dimasa depan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sampeyan mung kudu tenang, ben iso seneng"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nikmati wae sek roso lorone, mengko alon-alon yo bakal mari dhewe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Elingo...\nAna akeh wong sing ora sabegja kaya sampeyan, nanging rasa syukure ngluwihi sampeyan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sakgunung emas ora bakal cukup kanggo wong sing serakah, nanging sakpiring sego cukup kanggo wong sing bersyukur"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kabeh wong durung mesthi becik, nanging saben wong mesthi nduweni kabecikan"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ora usah njaluk wong liyo gawe awakmu bungah, nanging gaweo bungah awakmu dewe"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tetepo bersyukur neng kahanan opo wae, Gusti Pangeran kadang paring ujian sak durunge pujian"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dandani atimu, atimu bakal ndandani pikiranmu lan pikiranmu bakal ndandani ngibadahmu.\nLan ngibadahmu bakale ndandani uripmu, lan uripmu bakal ndandani akhiratmu"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['katasimbah', 'simbah']
handler.tags = ['quotes']
handler.command = /^(katasimbah|simbah)$/i
handler.register = true
handler.indo = true
export default handler