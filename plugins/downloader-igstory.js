import yuz from 'yuzzu-api';
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Username mana? contoh:\n#igstory n.lidiawaty';
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw 'username salah';
  m.reply(wait);
  var res = await yuz.igstory(args[0]);
  if (!res) throw eror;
  let igs = JSON.stringify(res);
  let json = JSON.parse(igs);
  for (let { fileType, downloadUrl, url } of json) conn.sendFile(m.chat, url, 'igstory' + (fileType == 'jpg' ? '.jpg' : '.mp4'), wm, m);
};
handler.help = ['igstory'].map((v) => v + '<username>');
handler.tags = ['downloader'];
handler.command = /^(igs(tory)?)$/i;
handler.register = true;

export default handler;
