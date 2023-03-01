import { generateWAMessageFromContent } from '@adiwajshing/baileys';
let handler = async (m, { conn }) => {
  let desk =
    (await conn.sendTr(`Apa saja keuntungan premium?
〲 ✅Dapatkan fitur khusus premium.
〲 ✅Masukkan bot ke group anda.
〲 ✅Limit UNLIMITED (Tidak Terbatas)

Ayo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.

Pembayaran:
Saweria: `)) +
    ' ' +
    swr +
    ' ' +
    (await conn.sendTr(` (+5.000)
Dana: 0852-3854-3351
OVO: 0852-3854-3351

Syarat dan Ketentuan
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan

Selengkapnya Chat Nomor Yang Ada Di Bawah Ini`));

  let prepare = await generateWAMessageFromContent(
    m.key.remoteJid,
    {
      listMessage: {
        title: name,
        description: desk,
        buttonText: 'Tes',
        listType: 2,
        productListInfo: {
          productSections: [
            {
              title: 'Klik Untuk Melihat',
              products: [
                {
                  productId: '4815803828514229',
                },
              ],
            },
          ],
          headerImage: {
            productId: '4815803828514229',
            jpegThumbnail: image,
          },
          businessOwnerJid: '6285238543351@s.whatsapp.net',
        },
        footerText: 'https://wa.me/6285238543351?text=Hallo+Mas',
      },
    },
    {}
  );

  conn.relayMessage(prepare.key.remoteJid, prepare.message, {
    messageId: prepare.key.id,
  });
};
handler.command = /^(sewa)$/;
handler.help = ['sewa'];
handler.tags = ['main', '', 'info'];

export default handler;
