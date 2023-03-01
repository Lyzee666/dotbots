import db from '../lib/database.js'

let handler = m => m

let badwordRegex = /babi|anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = async function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (chat.badword && !user.banned && !isOwner && isBadword) {
        user.warning += 1
        this.sendButton(m.chat,`Badword terdeteksi!
Warning: ${user.warning} / 5
Jika warning mencapai 5 kamu akan dibanned
ketik *#astagfirullah* atau *#maaf* untuk mengurangi warning
“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, null, [[chat.badword ? 'Astaghfirullah' : 'On Antibadword', chat.badword ? '#maaf' : '#1 antibadword']], m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupSettingUpdate(m.chat, 'announcement')
                }
            }
        }
    }
    return !0
}
export default handler