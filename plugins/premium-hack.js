import fs from 'fs'
import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {

let data = fs.readFileSync('./lib/hack.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]

  conn.sendButton(m.chat, await conn.sendTr(`Sukses Bobol Bank Satria\n\nSaldo & Limit Yang Diambil ${json.money}\nKamu Bisa Cek LIMIT/EXP/MONEY KAMU Di Bawah Ini`), wm, null, [['Check', '#my'], ['Hack Again', 'xhack']], m)
   db.data.users[m.sender].exp += json.money * 1
   db.data.users[m.sender].limit += json.money * 1
   //db.data.users[m.sender].money += json.money * 1
}
handler.help = ['hack']
handler.tags = ['premium']
handler.command = /^hack$/i

handler.register = true
handler.premium = true

export default handler