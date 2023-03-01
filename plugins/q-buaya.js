import func from '../lib/function.js'
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
const quote = [{
            "author": "@irwan_x_yans",
            "quotes": "Kita emang gak seumuran. Tapi bolehkan aku seumur hidup sama kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masa sih ninggalin kamu, susah tau cari orang yang kaya kamu, yang sampe bikin aku sayang banget kaya gini."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kita tukeran tulang yuk. Aku jadi tulang punggungmu, kamu jadi tulang rusukku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku janji gak bakal ninggalin kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Rasanya baru kemaren kita saling kenal. Kok aku sayang banget sampe gamau ninggalin kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Semakin kesini semakin pengen kenal sama kamu, semakin pengen Deket, semakin pengen lindungin kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Emang kalo kita chat gini pacar kamu marah gak?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu tuh seperti jarum jam, tapi ada bedanya. Kalo jarum jam muternya diangka, kalo kamu muter dihatiku."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cuma kamu orang yang aku sayang, gak ada yang lain."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tau gak, apa bedanya kamu sama jam 12:00? kalo jam 12: kesiangan, kalo kamu kesayangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Masa sih, cewe secantik kamu belum punya pacar?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Beli jamu dari orang kendari, melihatmu seperti bidadari"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Adek, mau gak VC sama abang?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cintaku padamu seperti kecap bango, soal rasa tak pernah bohong."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu udah punya pacar belum?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku nyaman sama kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Tau ga, kenapa jarjit selalu awali pantun dengan dua tiga? karena nomor satu itu kamu"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Hay cantik, aku ganggu kamu g?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Padahal kamu belum pantun, tapi kok udah cakep aja."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku gak bisa hidup tanpa kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku belum pernah sesayang ini sama orang lain, cuma sama kamu doang."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalo kamu marah, nanti aku kecup kening kamu sambil bisikin i love you sayank😘"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Dia cuma temen kok."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Cukup saya aja yang banyak janji, wakil rakyat jangan."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalo kamu mau menyakiti silahkan sakiti aja aku, jangan hatiku karena disitu ada kamu."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu orang mana?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Satu titik dua koma, kamu cantik aku yang punya."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Boleh minta nomer whatsappnya gak?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "hii cantikk, boleh kenalan gak??"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu kenapa? sini cerita sama aku.."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "inget ya cwo setia tu cewenya cuma 1 :\n\n- 1 di wa\n- 1 di tele\n- 1 di ig\n- 1 di twt\n- 1 di line"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "kalo kamu nyari yg setia aku mundur, tpi kalo kamu nyari yg suka ngebohong aku maju"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu mau gak jadi pacarku?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Sayang, jangan lupa minum air putih yang banyak ya biar ginjal kamu tetap sehat bulan depan kan mau dijual."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kamu lagi apa?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Pap dong cantikk...."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Yang bilang sayang terus ngilang mending lu pergi kelaut aja sono yang jauh, terus lu cari tau kenapa anak Mr. Crab itu Paus bukan kepiting."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Orang lain dalam percintaan mulus banget, lah gua yang udah mendaki gunung, lewati lembah, ke samudra, tersambar petir, genit masih aja gagal terus."
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Kalo aku chat kamu ada yang marah gak?"
        }, {
            "author": "@irwan_x_yans",
            "quotes": "Aku cuma sayang ke kamu doang."
        }]
    const quotes = func.mathRandom(quote)
    const result = await quotes.quotes
    await conn.sendButton(m.chat, result, wm, [[command, usedPrefix + command]], m)
}
handler.help = ['buaya']
handler.tags = ['quotes']
handler.command = /^(buaya|katabuaya)$/i
handler.register = true
handler.indo = true
export default handler