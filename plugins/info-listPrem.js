import db from '../lib/database.js'
import func from '../lib/function.js'
let handler = async (m, { conn, args }) => {
    let users = await Object.entries(db.data.users).filter(user => user[1].premium).map(([meki, memek]) => {
        return { ...memek, jid: meki }
    })
    //let sortedP = await Promise.all(users.map(toNumber('premiumTime')).sort(sort('premiumTime')))
    //let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
    //var capt = await Promise.all(users.map(({ jid, name, premiumTime, registered }, i) => i + 1 + (await conn.msToDate(premiumTime - new Date() * 1)) + name).join(`\n`))
    var capt = await Promise.all(users.map( async v => { return  '├ (' + (await conn.msToDate(v.premiumTime - new Date() * 1)) + ') ' + await v.name + '\n'}))
    var { key } = await m.replyv2('┌「 *PREMIUM* 」\n'+capt+ '└────')
    await func.delay(9000)
    setTimeout(async () => {
        if (db.data.chats[m.chat].deletemedia) conn.sendMessage(m.chat, { delete: await key })
    }, db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist)$/i

export default handler

async function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

async function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
    }
    else return a => a === undefined ? _default : a
}