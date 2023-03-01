let handler = async (m) => {
    let res = `https://wa.me/${m.sender.split('@')[0]}?text=Hai+kak`
    await m.replyv2(res)
}
handler.help = ['wame']
handler.tags = ['tools']
handler.command = /^(wame)$/i
handler.register = true

export default handler