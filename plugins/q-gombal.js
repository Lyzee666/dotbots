import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tu kayak warteg, sederhana namun berkualitas."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['gombal']
handler.tags = ['quotes']
handler.command = /^(gombal)$/i
handler.register = true
handler.indo = true
export default handler