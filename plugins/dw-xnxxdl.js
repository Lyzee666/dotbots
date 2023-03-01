import fetch from "node-fetch"
import cheerio from "cheerio"
import db from '../lib/database.js'

let handler  = async (m, { conn, text, args, usedPrefix, command }) => {
	let { age } = db.data.users[m.sender]
	if (age < 18) throw 'minimal umur 18 tahun, bocil gausah make ini, pake fitur lain aja dek'
	if (!text) throw `Contoh Penggunaan:\n*${usedPrefix + command} https://xxnxx.com/*`
	let { title, URL, duration, image, videoType,  files } = await xnxxdl(args[0]).then(v => v.result)
	await m.reply(wait)
	var a = `Judul Bokep: ${title}
URL awal : ${URL}
Durasi : ${duration/60}`
let { low,  high, HLS, thumb, thumb69, thumbSlide, thumbSlideBig } = files
    var an = low || high || HLS
    await conn.sendMedia(m.chat, an, m)
}
handler.help = ['xnxxdownload <args>']
handler.tags = ['dewasa']
handler.command = /^(xnxxdl|xnxxdownload|xnxxdownloads)$/i
handler.register = true

export default handler

async function xnxxdl(URL) {
    return new Promise(async (resolve, reject) => {
        fetch(`${URL}`, {
                method: 'get'
            })
            .then(res => res.text())
            .then(res => {
                let $ = cheerio.load(res, {
                    xmlMode: false
                });
                const title = $('meta[property="og:title"]').attr('content');
                const duration = $('meta[property="og:duration"]').attr('content');
                const image = $('meta[property="og:image"]').attr('content');
                const videoType = $('meta[property="og:video:type"]').attr('content');
                const videoWidth = $('meta[property="og:video:width"]').attr('content');
                const videoHeight = $('meta[property="og:video:height"]').attr('content');
                const info = $('span.metadata').text();
                const videoScript = $('#video-player-bg > script:nth-child(6)').html();
                const files = {
                    low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
                    high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
                    HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
                    thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
                    thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
                    thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
                    thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
                };
                resolve({
                    status: 200,
                    result: {
                        title,
                        URL,
                        duration,
                        image,
                        videoType,
                        videoWidth,
                        videoHeight,
                        info,
                        files
                    }
                })
            })
            .catch(err => reject({
                code: 503,
                status: false,
                result: err
            }))
    })
}