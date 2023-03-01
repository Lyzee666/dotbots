import cod from "unofficial-carbon-now"
let carb = new cod.createCarbon()
let handler = async(m, {
    conn, text, usedPrefix, command
}) => {
    let txt = m.quoted ? m.quoted.text : text
    if (!txt) throw "Reply Code"
    let carbon = await carb.setCode(txt);
    if (!carbon) throw eror
    await conn.sendMedia(m.chat, await cod.generateCarbon(carbon), m)
}
handler.help = ['carbon <code>']
handler.tags = ['premium']
handler.command = /^(carbon)$/i
handler.register = true
handler.premium = true

export default handler