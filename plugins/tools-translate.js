const defaultLang = 'en'

let handler = async (m, { args, usedPrefix, command, conn }) => {
    let err = `
Contoh:
${usedPrefix + command} <lang> [text]
${usedPrefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
        var result = await tr(`${text}`, {
            from: 'auto',
            to: lang,
        })
    } catch (e) {
        var result = await tr(`${text}`, {
            from: 'auto',
            to: defaultLang,
        })
        throw err
    } finally {
        conn.replyv2(m.chat, result, m)
    }

}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

handler.register = true
export default handler
