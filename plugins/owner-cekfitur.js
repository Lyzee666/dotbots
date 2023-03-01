import db from '../lib/database.js'
let handler = async (m, { text, args, usedPrefix, command }) => {
let so = await Object.entries(db.data.stats).map(([ma, me]) => { return { ...me, name: ma }})
let angk = "5"
let anu = await args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 3)) : Math.min(5, so.length)
return m.reply((await (await so.slice(0, anu)).map(toNumber('total')).sort(sort('total'))).map(({name, total, success}, i) => { return `${i + 1}. ${name} \n     Total Digunakan *${total}* \n     Total Sukses *${success}*`}).join('\n'))
}

handler.help = ['plugins'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^plugins$/i
handler.register = true
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}