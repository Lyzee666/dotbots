import PhoneNumber from 'awesome-phonenumber'
import * as levelling from '../lib/levelling.js'
import db from '../lib/database.js'
import func from '../lib/function.js'
import path from 'path'
let handler = async (m, {
    conn,
    usedPrefix
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    if (typeof db.data.users[who] == "undefined") {
        db.data.users[who] = {
            exp: 0,
            limit: 10,
            lastclaim: 0,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            banned: false,
            level: 0,
            call: 0,
            role: 'Warrior V',
            autolevelup: false,
            pc: 0,
            pacar: ''
        }
    }
    let {
        name,
        limit,
        exp,
        lastclaim,
        registered,
        regTime,
        age,
        level,
        role,
        banned,
        pacar
    } = db.data.users[who]
    let {
        min,
        xp,
        max
    } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
Name: ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${await conn.fetchStatus(who).status !== 404 ? '' : '\n Info: ' + await conn.fetchStatus(who).then(v => v.status)}
Nomor: ${PhoneNumber('+' + who.split('@')[0]).getNumber('international')}
Link: https://wa.me/${who.split(`@`)[0]}${registered ? '\nAge: ' + age : ''}
XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP to levelup`}]
Level: ${level}
Role: *${role}*
Limit: ${limit}
Boy/girl fiend: ${pacar ? conn.getName(pacar) : 'Single'}
Premium: ${db.data.users[who].premium ? await conn.msToDate(db.data.users[who].premiumTime) : 'No'}
Registered: ${registered ? 'Yes (' + new Date(regTime).toLocaleString() + ')' : 'No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim).toLocaleString() : ''}
`.trim()
    let mentionedJid = [who]
    await conn.sendFile(m.chat, pp, 'pp.jpg', banned ? 'jiakh ke banned' : str, m, false, {
        contextInfo: {
            mentionedJid
        }
    })
}
handler.help = ['profile [@user]']
handler.tags = ['tools', 'rpg']
handler.command = /^profile?$/i
handler.register = true

export default handler