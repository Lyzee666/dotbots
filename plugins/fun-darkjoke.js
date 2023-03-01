import fetch from 'node-fetch'
let handler = async (m, {
    conn,
    command
}) => {
    let res = await (await fetch(`https://hadi-api.herokuapp.com/api/darkjokes`)).json()
    await conn.sendMessage(m.chat, {
        image: {
            url: res.result
        },
        fileLength: numb,
        caption: done
    }, {
        quoted: m
    })
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^(darkjokes)$/i
handler.register = true

export default handler