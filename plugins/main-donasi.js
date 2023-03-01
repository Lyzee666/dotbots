let handler = async (m, { conn }) => {
  let donasi = `╭┈─────────────⩵꙰ཱི࿐ 
╰──*DONATE*──➤ ↶↷* 
 ${conn.user.name}

 • DANA     : 0852-3854-3351
 • OVO      : 0852-3854-3351
 • SAWERIA  : ${swr}`;
  await m.replyv2(donasi);
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)$/i;

export default handler;
