/**
 * Guasah Dui Ganti Yaaakk
 * ini cuma buat ninggalin credit gw doang sebagai creator
 **/

let handler = async (m) => {
  let esce = `
This bot Uses Script From

https://github.com/amrulizwan
(Private)`;
  await m.replyv2(esce);
};
handler.help = ['sc', 'sourcecode'];
handler.tags = ['info'];
handler.command = /^(sc|sourcecode)$/i;
handler.register = true;

export default handler;
