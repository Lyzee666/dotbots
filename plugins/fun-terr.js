import func from '../lib/function.js'
let handler = async (m, { command, participants, conn }) => {
    let ps = participants.map(v => v.id)
    let res = func.mathRandom(ps)
        conn.replyv2(m.chat, `\n*Yang paling ${command} di sini adalah @${res.split('@')[0]}*\n`,  null, {
            mentions: [res]
    })
}
handler.help = ['terkeren', 'terjelek', 'tercantik',  'terganteng', 'tergay',  'tertolol',  'termantap', 'terbuaya']
handler.tags = ['fun', 'kerang']
handler.command = /^(terkeren|tercantik|tercans|tercanz|tergans|terganteng|termantap|tergemoy|tergemes|tergay|tertolol|tergila|terbuaya|tergumush|tergemas|terjelek)$/i
handler.register = true
handler.limit = true

export default handler