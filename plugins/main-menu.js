import { promises } from 'fs';
import { join } from 'path';
import { xpRange } from '../lib/levelling.js';
import { plugins } from '../lib/plugins.js';
import db from '../lib/database.js';

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command }) => {
  let { exp, limit, level, role, name } = db.data.users[m.sender];
  let user = db.data.users[m.sender];
  let { min, xp, max } = xpRange(level, global.multiplier);
  //let name = await conn.getName(m.sender)
  let d = new Date(new Date() + 3600000);
  let lang = user.language ? user.language : 'en';
  let locale = 'id';
  let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
  let week = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
  let time = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  let _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime =
      (await new Promise((resolve) => {
        process.once('message', resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(_muptime);
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(db.data.users).length;
  let rtotalreg = Object.values(db.data.users).filter((user) => user.registered == true).length;
  let tags;
  let teks = `${args[0]}`.toLowerCase();
  let arrayMenu = [
    'absen',
    'advanced',
    'anonymous',
    'asupan',
    'audio',
    'dewasa',
    'downloader',
    'fun',
    'game',
    'group',
    'image',
    'info',
    'internet',
    'islamic',
    'jadian',
    'kerang',
    'nocategory',
    'nulis',
    'owner',
    'premium',
    'quotes',
    'rpg',
    'sticker',
    'vote',
    'xp',
    'main',
    'tools',
  ];
  if (!arrayMenu.includes(teks)) teks = '404';
  if (teks == 'absen')
    tags = {
      absen: 'Menu Absen',
      vote: 'Menu Vote',
    };
  if (teks == 'advanced')
    tags = {
      advanced: 'Menu Advanced',
    };
  if (teks == 'anonymous')
    tags = {
      anonymous: 'Menu Anonymous',
    };
  if (teks == 'asupan')
    tags = {
      asupan: 'Menu Asupan',
    };
  if (teks == 'audio')
    tags = {
      audio: 'Menu Audio',
    };
  if (teks == 'dewasa')
    tags = {
      dewasa: 'Menu Dewasa',
    };
  if (teks == 'downloader')
    tags = {
      downloader: 'Menu Downloader',
    };
  if (teks == 'fun')
    tags = {
      fun: 'Menu Fun',
    };
  if (teks == 'game')
    tags = {
      game: 'Menu Game',
    };
  if (teks == 'group')
    tags = {
      group: 'Menu Group',
    };
  if (teks == 'image')
    tags = {
      image: 'Menu Image',
    };
  if (teks == 'info')
    tags = {
      info: 'Menu Info',
    };
  if (teks == 'internet')
    tags = {
      internet: 'Menu Internet',
    };
  if (teks == 'islamic')
    tags = {
      islamic: 'Menu Islamic',
    };
  if (teks == 'jadian')
    tags = {
      jadian: 'Menu Jadian',
    };
  if (teks == 'kerang')
    tags = {
      kerang: 'Menu Kerang',
    };
  if (teks == 'main')
    tags = {
      main: 'Menu Utama',
    };
  if (teks == 'nocategory')
    tags = {
      '': 'Menu Tanpa Kategori',
    };
  if (teks == 'nulis')
    tags = {
      nulis: 'Menu Nulis',
    };
  if (teks == 'owner')
    tags = {
      owner: 'Menu Owner',
    };
  if (teks == 'premium')
    tags = {
      premium: 'Menu Premium',
    };
  if (teks == 'quotes')
    tags = {
      quotes: 'Menu Quotes',
    };
  if (teks == 'rpg')
    tags = {
      rpg: 'Menu Rpg',
    };
  if (teks == 'sticker')
    tags = {
      sticker: 'Menu Sticker',
    };
  if (teks == 'tools')
    tags = {
      tools: 'Menu Tools',
    };
  if (teks == 'xp')
    tags = {
      xp: 'Menu XP',
    };

  if (teks == '404') {
    const capt = `👋🏻 Hai, ${name}!

*${conn.getName(conn.user.jid)}* adalah bot *yang paling lengkap* untuk membantumu untuk mengelola grup anda dengan lebih mudah dan *aman!*

👉 *Tambahkan saya ke grup* dan atur saya sebagai *Admin* agar saya dapat bertindak! 

❓ *Apa Perintahnya?* ❓
Pilih menu *Semua Perintah* untuk melihat semua perintah dan bagaimana kerjanya!

*Informasi Pengguna*
✅ Bahasa: *${user.language ? user.language : 'Default EN'}*
🧱 Limit : *${limit} Limit*
🦸🏼‍♂️ Role : *${role}*
🔼 Level : *${level} (${exp - min} / ${xp})*
💫 Total XP : ${exp} ✨

*Informasi Bot*
📅 Tanggal: *${week}, ${date}*
🕰️ Waktu: *${time}*
📈 Uptime: *${uptime} (${muptime})*
📊 Database: ${rtotalreg} of ${totalreg}`;
    throw await conn.sendList(
      m.chat,
      capt,
      wm,
      [
        [`🧑‍💻 ┃ ${await conn.sendTr('Owner')}`, '#owner', await conn.sendTr('Nomor Pemilik (Owner)'), await conn.sendTr(`Informasi dan List Menu dotzbot`)],
        [`📖 ┃ ${await conn.sendTr('Rules')}`, '#snk', await conn.sendTr('Harap Membaca Syarat Ketentuan Dan Penggunaan Demi Kenyamanan Bersama'), await conn.sendTr(`Informasi dan List Menu dotzbot`)],
        [`📖 ┃ ${await conn.sendTr('Panduan')}`, '#panduan', await conn.sendTr('Panduan Penggunaan Bot Dan Pengertian Bot/Owner dsb'), await conn.sendTr(`Informasi dan List Menu dotzbot`)],
        [`💵 ┃ ${await conn.sendTr('Donasi')}`, '#donasi', await conn.sendTr('Untuk Mendukung Developer Bot Untuk Mengembangkan Bot Ini'), await conn.sendTr(`Informasi dan List Menu dotzbot`)],
        [`❇️ ┃ ${await conn.sendTr('Sewa')}`, '#sewa', await conn.sendTr('Cara menambahkan bot ke group permanent.'), await conn.sendTr(`Informasi dan List Menu dotzbot`)],
        [`🧾 ┃ ${await conn.sendTr('All Commands')}`, `${_p}menu2`, await conn.sendTr('Semua Perintah dalam Bot'), '─────「 1 」'],
        [await conn.sendTr('Menu Utama'), `${_p}? main`, await conn.sendTr('Menu Utama'), '─────「 2 」'],
        [await conn.sendTr('Absen & Vote'), `${_p}? absen`, await conn.sendTr('Menu Absen & Vote'), '─────「 3 」'],
        [await conn.sendTr('Advanced'), `${_p}? advanced`, await conn.sendTr('Menu Advanced'), '─────「 4 」'],
        [await conn.sendTr('Anonymous '), `${_p}? anonymous`, await conn.sendTr('Menu Anonymous'), '─────「 5 」'],
        [await conn.sendTr('Asupan'), `${_p}? asupan`, await conn.sendTr('Menu Asupan'), '─────「 6 」'],
        [await conn.sendTr('Audio'), `${_p}? audio`, await conn.sendTr('Menu Audio'), '─────「 7 」'],
        [await conn.sendTr('Dewasa'), `${_p}? dewasa`, await conn.sendTr('Menu Dewasa'), '─────「 8 」'],
        [await conn.sendTr('Downloader'), `${_p}? downloader`, await conn.sendTr('Menu Downloader'), '─────「 9 」'],
        [await conn.sendTr('Fun'), `${_p}? fun`, await conn.sendTr('Menu Fun'), '─────「 10 」'],
        [await conn.sendTr('Game'), `${_p}? game`, await conn.sendTr('Menu Game'), '─────「 11 」'],
        [await conn.sendTr('Group'), `${_p}? group`, await conn.sendTr('Menu Group'), '─────「 12 」'],
        [await conn.sendTr('Image'), `${_p}? image`, await conn.sendTr('Menu Image'), '─────「 13 」'],
        [await conn.sendTr('Info'), `${_p}? info`, await conn.sendTr('Menu Info'), '─────「 14 」'],
        [await conn.sendTr('Internet'), `${_p}? internet`, await conn.sendTr('Menu Internet'), '─────「 15 」'],
        [await conn.sendTr('Islamic'), `${_p}? islamic`, await conn.sendTr('Menu Islamic'), '─────「 16 」'],
        [await conn.sendTr('Jadian'), `${_p}? jadian`, await conn.sendTr('Menu Jadian'), '─────「 17 」'],
        [await conn.sendTr('Kerang '), `${_p}? kerang`, await conn.sendTr('Menu Kerang'), '─────「 18 」'],
        [await conn.sendTr('No Category'), `${_p}? nocategory`, await conn.sendTr('Menu Tanpa Kategory'), '─────「 19 」'],
        [await conn.sendTr('Nulis'), `${_p}? nulis`, await conn.sendTr('Menu Nulis'), '─────「 20 」'],
        [await conn.sendTr('Owner'), `${_p}? owner`, await conn.sendTr('Menu Owner'), '─────「 21 」'],
        [await conn.sendTr('Premium'), `${_p}? premium`, await conn.sendTr('Menu Premium'), '─────「 22 」'],
        [await conn.sendTr('Quotes'), `${_p}? quotes`, await conn.sendTr('Menu Quotes'), '─────「 23 」'],
        [await conn.sendTr('Rpg'), `${_p}? rpg`, await conn.sendTr('Menu Rpg'), '─────「 24 」'],
        [await conn.sendTr('Sticker'), `${_p}? sticker`, await conn.sendTr('Menu Sticker'), '─────「 25 」'],
        [await conn.sendTr('Tools'), `${_p}? tools`, await conn.sendTr('Menu Tools'), '─────「 26 」'],
        ['XP', `${_p}? xp`, await conn.sendTr('Menu XP'), '─────「 27 」'],
      ],
      m
    );
  }

  //======= BATAS MENU ARRAY ==========
  const defaultMenu = {
    before: `
╭─「 %me 🤖」
│ 👋🏻 Hai, %name!
╰────
%readmore`.trimStart(),
    header: '╭─「 %category 」',
    body: '│ • %cmd %islimit %isPremium',
    footer: '╰────\n',
    after: await conn.sendTr(`
*%npmname* | %version
${'```%npmdesc```'}
`),
  };
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch((_) => ({}))) || {};
    let { exp, limit, level, role } = db.data.users[m.sender];
    let name = await conn.getName(m.sender);
    let help = Object.values(plugins)
      .filter((plugin) => !plugin.disabled)
      .map((plugin) => {
        return {
          help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
          tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
          prefix: 'customPrefix' in plugin,
          limit: plugin.limit,
          premium: plugin.premium,
          enabled: !plugin.disabled,
        };
      });
    let groups = {};
    for (let tag in tags) {
      groups[tag] = [];
      for (let plugin of help) if (plugin.tags && plugin.tags.includes(tag)) if (plugin.help) groups[tag].push(plugin);
      //for (let tag of plugin.tags)
      //if (!(tag in tags) && tag) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || defaultMenu.before;
    let header = conn.menu.header || defaultMenu.header;
    let body = conn.menu.body || defaultMenu.body;
    let footer = conn.menu.footer || defaultMenu.footer;
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after;
    let _text = [
      before,
      ...Object.keys(tags).map((tag) => {
        return (
          header.replace(/%category/g, tags[tag]) +
          '\n' +
          [
            ...help
              .filter((menu) => menu.tags && menu.tags.includes(tag) && menu.help)
              .map((menu) => {
                return menu.help
                  .map((help) => {
                    return body
                      .replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                      .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                      .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                      .trim();
                  })
                  .join('\n');
              }),
            footer,
          ].join('\n')
        );
      }),
      after,
    ].join('\n');
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '';
    let replace = {
      '%': '%',
      p: _p,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      name,
      readmore: readMore,
    };
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);
    const pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => './src/avatar_contact.png');
    await conn.sendRHydrated(
      m.chat,
      text.trim(),
      `Panduan Singkat` +
        '\n' +
        readMore +
        '\n' +
        `<> adalah parameter query
Contoh: .join <link> maka .join https://chat.whatsapp.com/
[] adalah tag seseorang atau parameter nomor
Contoh: .kick [@62XXXX] maka .kick @62XXXX
(limit) atau (premium) adalah keterangan apakah fitur tersebut memerlukan limit/hanya untuk user premium.
Penggunaan command tidak usah menggunakan ()
Penggunaan tidak usah menggunakan <> atau []`,
      'https://github.com/irwanx/xyz-wabot',
      'Github',
      null,
      null,
      [
        ['Donate', '/donasi'],
        ['Speed', '/ping'],
        ['Owner', '/owner'],
      ],
      m
    );
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error, Lapor ke Owner ', m);
    throw e;
  }
};
handler.help = ['menu', 'help', '?'];
handler.tags = ['main'];
handler.command = /^(menu|help|\?)$/i;

handler.exp = 3;
export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
