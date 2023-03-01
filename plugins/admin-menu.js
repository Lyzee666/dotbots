let handler = async(m, { conn, args }) => {
  let teks1 = 'Dimana anda ingin membuka pengaturan?'
  let teks2 = 'Pilih Pengaturan yang ingin anda ubah'
/*  let listx = [
  ['Anti Audio', 'cmd', 'desc', '─────「 1 」'],
  ['Anti Document', 'cmd', 'desc', '─────「 2 」'],
  ['Anti Gif', 'cmd', 'desc', '─────「 3 」'],
  ['Anti Image', 'cmd', 'desc', '─────「 4 」'],
  ['Anti Link 18+', 'cmd', 'desc', '─────「 5 」'],
  ['Anti Link Group Whatsapp V1', 'cmd', 'desc', '─────「 6 」'],
  ['Anti Link Group Whatsapp V2', 'cmd', 'desc', '─────「 7 」'],
  ['Anti Link Tiktok', 'cmd', 'desc', '─────「 8 」'],
  ['Anti Link Twitter', 'cmd', 'desc', '─────「 9 」'],
  ['Anti Link Youtube', 'cmd', 'desc', '─────「 10 」'],
  ['Anti Media', 'cmd', 'desc', '─────「 11 」'],
  ['Anti Spam', 'cmd', 'desc', '─────「 12 」'],
  ['Anti View Once', 'cmd', 'desc', '─────「 13 」'],
  ['Anti Video', 'cmd', 'desc', '─────「 14 」'],
  ['Anti Virtext', 'cmd', 'desc', '─────「 15 」'],
  ['Auto Sticker', 'cmd', 'desc', '─────「 16 」'],
  ['Peraturan', 'cmd', 'desc', '─────「 17 」'],
  ['Mode Malam', 'cmd', 'desc', '─────「 18 」'],
  ['Ephemeral', 'cmd', 'desc', '─────「 19 」'],
  ['Selamat Datang', 'cmd', 'desc', '─────「 20 」'],
  ['Tag', 'cmd', 'desc', '─────「 22 」'],
  ['Kembali Ke Menu Utama', '#menu', 'desc', '─────「 21 」']
  ]  if(args[0] == 'help') conn.sendRHydrated(m.chat, teks1.trim(), '© dobdabot', 'https://wa.me/' + conn.user.jid.split('@')[0] + '?text=#menuadmin listpc', '👤Buka Di Pesan Pribadi', null, null, [
            ['👤Buka Disini', '/menuadmin listgc']
        ], m)*/
  if (args[0] == 'listpc') throw teks1
  if (args[0] == 'listgc') throw teks2
}
handler.help = ['menuadmin']
handler.command = /^(menuadmin)$/i
handler.tags = ['group', 'admin']
handler.register = true
handler.admin = false
handler.owner = true
handler.group = false

export default handler