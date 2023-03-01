import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m) => {
    m.reply('_Test Speed...._')
    let o
    try {
        o = await exec('speedtest')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.replyv2(stdout)
        if (stderr.trim()) m.replyv2(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['premium']
handler.command = /^(speedtest)$/i
handler.premium = true
handler.register = true

export default handler
