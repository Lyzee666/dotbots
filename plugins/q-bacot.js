import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jodoh memang enggak kemana, tapi saingannya ada dimana-mana."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masih berharap dan terus berharap lama-lama aku jadi juara harapan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Statusnya rohani, kelakuannya rohalus."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kegagalan bukan suatu keberhasilan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku juga pernah kaya, waktu gajian."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan terlalu berharap! nanti jatuhnya sakit!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Ingat! Anda itu jomblo"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gak tau mau ngetik apa"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['bacot']
handler.tags = ['quotes']
handler.command = /^(bacot)$/i
handler.register = true
handler.indo = true
export default handler