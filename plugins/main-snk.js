let handler = async (m, { conn }) => {
  let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Bot

${name} adalah *Bot* yg merupakan akronim dari kata Robot yang berarti sebuah sistem yang diprogram oleh komputer.
Sehingga respon atau balasan yang dilakukan oleh bot bukanlah dari Manusia.

Dengan menggunakan bot ini maka anda *setuju* dengan syarat dan kondisi sebagai berikut:

- Berilah jeda dari setiap perintah.
- Dilarang menelfon bot, atau kalian akan kena block otomatis.
- Dilarang keras melakukan spam. Ketahuan = auto banned.
- Bot tidak akan merespon curhatan kalian.
- Bot tidak menyimpan gambar/media yang dikirimkan.
- Bot tidak menyimpan data pribadi anda di server kami.
- Bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Bot berjalan di server secara terpisah (Bukan dalam HP owner).
- Bot akan dilakukan pembersihan setiap awal bulan atau saat dirasa diperlukan.
- Owner bot tidak pernah melihat chat user/pengguna

Peraturan: 28 Februari 2023
Follow Me
${ig}`;
  await m.reply(teks);
};
handler.help = ['peraturan'];
handler.command = /^(snk|syarat|peraturan|rules)$/i;
handler.tags = ['main'];

export default handler;
