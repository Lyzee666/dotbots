import db from '../lib/database.js'
let handler = async(m, { conn, usedPrefix }) => {
        let chats = Object.entries(db.data.chats).filter(chat => chat[1].isBanned)
        let users = Object.entries(db.data.users).filter(user => user[1].Banneduser)

        m.replyv2(`
┌ *List Chat Banned*
│ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
└────

 *List User Banned*
${Object.entries(db.data.users).filter( u => u[1].banned).map(([a,  b]) => { return { ...b, jid: a }}).map(({jid, name}, i ) => { return `${ i +1 }. ${name}`}).join('\n')}`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.register = true

export default handler