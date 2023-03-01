import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku deketin kamu cuma untuk redirect ke hati temenmu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset()."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "SQLI ( Structured Query Love Injection )"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Jangan men-dualboot-kan hatiku kepadamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['heker']
handler.tags = ['quotes']
handler.command = /^(heker|hacker|hekel)$/i
handler.register = true
handler.indo = true
export default handler