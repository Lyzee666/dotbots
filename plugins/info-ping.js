import { performance } from 'perf_hooks'
let handler = async(m, { conn }) => {
    try {
        let old = performance.now()
        await m.replyv2('_Testing speed..._')
        let neww = performance.now()
        m.replyv2(neww - old + 'ms')
    } catch (e) {
        console.log(e)
        m.replyv2('Error!!')
        }
    }
handler.help = ['ping', 'speed']
handler.tags = ['info']
handler.command = /^(ping|speed)$/i
handler.register = true

export default handler