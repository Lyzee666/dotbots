import db from '../lib/database.js'
let handler = async(m, {
    conn, args
}) => {
    try {
        if (!args[1]) return m.replyv2('Masukkan Angkanya Tulul')
        if (args[0] == 'limit') {
            //if(!args[1]) return m.replyv2('Masukkan Angka')
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.limit = args[1])))
            }
        } else if (args[0] == 'exp') {
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.exp = args[1])))
            }
        } else if (args[0] == 'level') {
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.level = args[1])))
            }
        } /*else if (args[0] == 'money') {
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.money = args[1])))
            }
        }*/ else if (args[0] == 'exp') {
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.exp = args[1])))
            }
        } /*else if (args[0] == 'duidharam') {
            //if(!args[1]) return m.replyv2('Masukkan Angka')
            if (args[1]) {
                var res = Object.entries(db.data.users)
                    .map(([user, data], i) => (Number(data.duidharam = args[1])))
            }
        }*/
    } finally {
        if (res) throw m.replyv2(`Sukses Reset ${args[0]}${args[1]}/ user`)
else throw m.replyv2(`Contoh Penggunaan? Cari tahu sndiri bang`)
}}
handler.command = ['reset']
handler.tags = ['owner']
handler.help = ['reset']

handler.register = true
export default handler