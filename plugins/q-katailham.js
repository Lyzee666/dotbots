import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dia hanya menghargaimu, bukan mencintaimu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Keadilan sosial hanya berlaku bagi warna negara yang good looking."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan jadi pelangi untuk orang yang buta warna."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Mencintaimu adalah seni menyakiti diri"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cukup tahu namaku, jangan rupaku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sesuatu akan terasa berharga jika sudah kehilangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan."
        }]
        const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['kata'].map(v => v + 'ilham')
handler.tags = ['quotes']
handler.command = /^(katailham|ilham)$/i
handler.register = true
handler.indo = true
export default handler