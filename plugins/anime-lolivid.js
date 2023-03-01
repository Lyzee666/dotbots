let handler = async(m, {conn}) => {
let cont = 'https://recoders-area.caliph.repl.co/api/lolivid'
await conn.sendMedia(m.chat, cont, m)
}
handler.help = ['lolivid', 'lolivideo']
handler.tags = ['anime']
handler.command = /^(lolivid|lolivideo)$/i
handler.mature = true 

export default handler