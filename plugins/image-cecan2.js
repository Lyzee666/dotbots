import fetch from "node-fetch"
import func from '../lib/function.js'
let handler = async (m, { conn, usedPrefix, command }) => {
var cecan22 = [
"https://c.top4top.io/p_1932es7nf0.jpg",
"https://d.top4top.io/p_19321v7sp0.jpg",
"https://e.top4top.io/p_1932b1d721.jpg",
"https://j.top4top.io/p_1932ss4ma0.jpg",
"https://k.top4top.io/p_1932wf8mx1.jpg",
"https://l.top4top.io/p_1932yo3as2.jpg",
"https://c.top4top.io/p_19320nyzy5.jpg",
"https://d.top4top.io/p_1932yge0p6.jpg",
"https://e.top4top.io/p_193248hgs7.jpg",
"https://d.top4top.io/p_1932uq8ua0.jpg",
"https://e.top4top.io/p_193267mkh1.jpg",
"https://f.top4top.io/p_19327ac9w2.jpg",
"https://g.top4top.io/p_193215eok3.jpg",
"https://g.top4top.io/p_1932wideu0.jpg",
"https://h.top4top.io/p_1932czeaz1.jpg",
"https://i.top4top.io/p_19329fof22.jpg",
"https://j.top4top.io/p_1932itqje3.jpg",
"https://k.top4top.io/p_1932tbjas4.jpg",
"https://l.top4top.io/p_1932x0vk45.jpg",
"https://a.top4top.io/p_1932ctpoa6.jpg",
"https://b.top4top.io/p_1932dn7wq7.jpg",
"https://c.top4top.io/p_19322m2be8.jpg",
"https://d.top4top.io/p_19321nqz29.jpg",
"https://e.top4top.io/p_1932qnfn50.jpg",
"https://f.top4top.io/p_1932cax5k1.jpg",
"https://g.top4top.io/p_1932utifn2.jpg",
"https://h.top4top.io/p_19325kxr13.jpg",
"https://i.top4top.io/p_1932lbn2o4.jpg",
"https://j.top4top.io/p_1932z4bap5.jpg",
"https://k.top4top.io/p_1932xun636.jpg",
"https://l.top4top.io/p_1932w991v7.jpg",
"https://a.top4top.io/p_1932vw65c8.jpg",
"https://l.top4top.io/p_1932fhgqn9.jpg",
"https://k.top4top.io/p_1932s4vpv8.jpg",
"https://j.top4top.io/p_1932yu8047.jpg",
"https://i.top4top.io/p_19328nqbx6.jpg",
"https://h.top4top.io/p_1932ky5ag5.jpg",
"https://g.top4top.io/p_1932qs18u4.jpg",
"https://f.top4top.io/p_1932k2sii3.jpg",
"https://e.top4top.io/p_1932k3e7x2.jpg",
"https://d.top4top.io/p_19328l2pm1.jpg",
"https://c.top4top.io/p_1932rdofk0.jpg",
"https://k.top4top.io/p_1932s21b60.jpg",
"https://l.top4top.io/p_1932qnkqx1.jpg",
"https://a.top4top.io/p_19324alu52.jpg",
"https://b.top4top.io/p_1932kpi033.jpg",
"https://c.top4top.io/p_1932wxegw4.jpg",
"https://d.top4top.io/p_1932gn52q5.jpg",
"https://f.top4top.io/p_1932h7q6u7.jpg",
"https://g.top4top.io/p_1932e7xop8.jpg",
"https://h.top4top.io/p_1932gc8ml9.jpg",
"https://b.top4top.io/p_19320lszj0.jpg",
"https://c.top4top.io/p_1932j0olo1.jpg",
"https://d.top4top.io/p_1932j9oql2.jpg",
"https://e.top4top.io/p_19323rhzg3.jpg",
"https://f.top4top.io/p_1932wcvue4.jpg",
"https://g.top4top.io/p_1932tjsny5.jpg",
"https://i.top4top.io/p_1932hcfxh6.jpg"
]

let cita = `${func.mathRandom(cecan22)}`
await conn.sendButton(m.chat, done, wm, cita, [['Next', usedPrefix + command]])
}

handler.tags = ['image']
handler.help = ['cecan2']
handler.command = /^(cecan2)$/i
handler.limit = true
handler.register = true

export default handler