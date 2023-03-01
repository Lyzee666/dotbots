import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Aku tidak ingin mengekangmu. Terserah! Bebas ke mana engkau pergi. Asal aku ikut."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Bagiku, Kamu adalah bagian terbesar dari hidupku. Aku bisa saja membiarkanmu melakukan apa yang kamu inginkan, tetapi tidak untuk hal yang akan berakibat buruk bagimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Terima kasih, kau pernah mau kepadaku. Dan kini, biarkan aku, kalau selalu ingin tahu kabarmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu lahir itu sengaja buat bikin aku senang ada di Bumi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Malam ini, kalau tidur jangan ingat aku, ya! Tapi kalau mau, silakan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cinta itu indah. Jika menurutmu tidak indah, pastinya kamu salah memilih pasangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sekarang aku mungkin bukan aku yang dulu, waktu membawa aku pergi, tetapi perasaan tetap sama, bersifat menjalar, hingga ke depan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kukira itu normal. Itu adalah bagian dari suatu proses berduka. Tetapi cepat atau lambat, aku harus bisa menerima sepenuhnya, meskipun sebagian dari diriku masih berharap akan bisa kembali bersama-sama."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan salah paham. Semua sikapku kepadamu, bahkan termasuk ketika aku marah, ketika aku kesal, ketika aku jengkel, kamu harus tahu bahwa semua bersumber dari aku yang sangat mencintaimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalau aku jadi presiden yang harus mencintai seluruh rakyatnya, aduh, maaf, aku pasti tidak bisa karena aku cuma suka Kamu."
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['katadilan']
handler.tags = ['quotes']
handler.command = /^(katadilan)$/i
handler.register = true
handler.indo = true
export default handler