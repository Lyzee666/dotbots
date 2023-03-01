import db from '../lib/database.js';
import { canLevelUp } from '../lib/levelling.js';
import func from '../lib/function.js';
let handler = (m) => m;

handler.all = async function (m) {
  let { isBanned } = db.data.chats[m.chat];
  let { banned } = db.data.users[m.sender];
  var user = db.data.users[m.sender];
  var settings = db.data.settings[this.user.jid];
  var chat = db.data.chats[m.chat];
  if (/^(bot)$/i.exec(m.text) && !m.fromMe) {
    if (!banned) return this.sendButton(m.chat, isBanned ? 'Bot Tidak Aktif Di Chat Ini' : 'Bot Aktif di chat ini', wm, null, [[isBanned ? 'Unban' : 'Menu', isBanned ? '#unban' : '#?']], m);
    if (banned)
      return this.sendRHydrated(
        m.chat,
        'Kamu dibanned\nSilahkan Join Group dan tag admin untuk membuka banned kamu',
        wm,
        'https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6',
        'Join Group Bot',
        null,
        null,
        [
          ['Pemilik Bot', '.owner'],
          ['Donasi', '.donasi'],
        ],
        m
      );
  }
  if (m.key.fromMe) return;
  if (m.isBaileys) return;
  if (/^(wk|bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k)$/i.exec(m.text) && !m.isBaileys && !m.fromMe && settings.react) {
    await this.sendMessage(m.chat, {
      react: {
        text: func.mathRandom(
          func.emojiStringToArray(
            '😱😧😡😆😨😐🐊😭😪🙏😘📌😉💑😅😤😢🔥💦✨🐣😊😁😂😃🐶🐩🐱🐭🔰💄👞👟😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🗿👍💨🩱🐷🐒🌝💩👻🔥🖕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😶�1�7�🌫😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😮�1�7�💨😵😵�1�7�💫🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿🤲👐🙌🤝👍🏻👎👊✊🤛🤜🤞✌️🤟🤘🏻👌🤌🤏👈'
          )
        ),
        key: m.key,
      },
    });
  }
  if (m.mentionedJid.includes(this.user.jid)) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/apasihm.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(alexa)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Anak Opet Cantik Banget Gada Obat:v`);
  }
  if (/^(gita)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Cantikknya Biasa Aja sii, Karena lu Ratu Bucin:v`);
  }
  if (/^(ibel)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Inii Orang Apa Bukan Si, Kok Bisa Imut Banget>_<`);
  }
  if (/^(yuli)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Cantikk Sihh, Tapii Galak Banget Kek....?🤣`);
  }
  if (/^(iqbal)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Ganteng sii, Tpi maen ML masih Epic:v`);
  }
  if (/^(anya)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Subhanallah Ini Orang Cantik Banget:v`);
  }
  if (/^(sandrina)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Ini Nih Ratu Drama Handall:v`);
  }
  if (/^(kevin|kefin)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Inii Nihh Orang Gans Cuman Kata Mak>_<`);
  }
  if (/^(shara)$/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Cantiknya Adenya Alexo & Kaka Ibel>_<`);
  }
  if (/(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i.exec(m.text) && !m.fromMe) {
    await m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam Warohmatullahi Wabarokatuh_`);
  }
  if (/(pc)/i.exec(m.text) && !m.fromMe) {
    await m.reply(`daripada lu pc kaya gitu, mending ngeramein gc ini😡`);
  }
  if (/(thanks|makas|terimakasih|thank|maaci|mksh|thnk|thx)/i.exec(m.text) && !m.fromMe) {
    await m.reply(`Yoi, semoga membantu😅`);
  }
  if (/^(ikut|ikutan|melu)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { sticker: { url: './src/sticker/ikutan.webp' } }, { quoted: m });
  }
  if (/^(gamau)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { sticker: { url: './src/sticker/gamau.webp' } }, { quoted: m });
  }
  if (/^(dongo)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { sticker: { url: './src/sticker/dongo.webp' } }, { quoted: m });
  }
  if (/^(g|nggak|gak)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { sticker: { url: './src/sticker/enggak.webp' } }, { quoted: m });
  }
  if (/^(menu)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { sticker: { url: './src/sticker/menu.webp' } }, { quoted: m });
  }
  if (/^(kuntul)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/kuntul.m4a' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(sayang)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/iyaapasyg.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(kangen)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/kangen.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(hai|halo|hallo)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/halosyg.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(nyanyi)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/nyanyi.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(mwah)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/mwah.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(anjay)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/anjay.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(desah|kontol|babi|jembut|asu|anjg|ajg)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/desah.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(anjing)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/IhOmKasar.ogg' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(p|pp|ppp|pppp)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/p.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  if (/^(sound)$/i.exec(m.text) && !m.fromMe) {
    await this.sendMessage(m.chat, { audio: { url: './src/audio/sound.mp3' }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m });
  }
  /*
   * BATAS AUTO RESPON
   * OKE BOSKU
   */
  if (settings.statusUpdate) {
    if (new Date() * 1 - settings.status > 1000) {
      await this.setStatus(`Runtime ${clockString(process.uptime() * 1000)} | ${Object.keys(db.data.users).length} User | ${name} by ${owner[0][1]} | If Bot Off Chat me +62 888-2611-841 (NOT BOT)`).catch((_) => _);
      settings.status = new Date() * 1;
    }
  }
  /*
   * ANTI SPAM ON THIS
   */
  if (!m.message) return;
  this.spam = this.spam ? this.spam : {};
  if (m.sender in this.spam) {
    this.spam[m.sender].count++;
    if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
      if (this.spam[m.sender].count > 5) {
        db.data.users[m.sender].banned = true;
        m.reply('*Jangan Spam!!*\nKamu Sudah Di Banned, silahkan chat owner untuk membuka banned)');
      }
      this.spam[m.sender].count = 0;
      this.spam[m.sender].lastspam = m.messageTimestamp.toNumber();
    }
  } else
    this.spam[m.sender] = {
      jid: m.sender,
      count: 0,
      lastspam: 0,
    };
  /*
   * ANTI ERROR IN HERE
   */
  if (user.exp * 1 > 99999998) {
    user.exp = 99999999;
  } else if (user.exp * 1 < 0) {
    user.exp = 0;
  }
  if (user.limit * 1 > 49) {
    user.limit = 50;
  } else if (user.limit * 1 < 0) {
    user.limit = 0;
  }
  if (user.level * 1 > 499) {
    user.level = 500;
  } else if (user.level * 1 < 0) {
    user.level = 0;
  }
  /*
   * AUTO LEVEL UP
   */
  if (!user.autolevelup) return !0;
  let before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;

  if (before !== user.level) {
    m.reply(
      `
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim()
    );
  }
  /*
   * EXPIRED IN HERE
   */
  if (m.isGroup && db.data.chats[m.chat].expired != 0) {
    if (new Date() * 1 >= db.data.chats[m.chat].expired) {
      this.reply(
        m.chat,
        `Waktunya *${this.user.name}* untuk meninggalkan grup
Chat Owner bot ini jika ada keperluan, silahkan sewa ke owner untuk selamanya di group ini`,
        null
      ).then(() => {
        this.groupLeave(m.chat).then(() => {
          db.data.chats[m.chat].expired = 0;
        });
      });
    }
  }
  /*
   * FIRST CHAT IN HERE
   */
  if (m.chat.endsWith('@broadcast') || m.fromMe || m.isGroup) return;
  if (new Date() - user.pc < 86400000) return; // setiap 24 jam sekali
  let text1 = `
Hai ${m.name}

${
  user.banned
    ? 'kamu dibanned'
    : `*dotzBot* adalah bot whatsapp otomatis yang dirancang secara gratis dan berbayar!

*Versi Bot*: 2.2.5


_️Admin bot tidak dapat membantu anda dalam situasi yang melibatkan group yang menggunakan bot ini._
`
}
`;
  await this.sendButton(m.chat, text1.trim(), wm, [[user.banned ? 'PEMILIK BOT' : 'LIST MENU', 'OWNER', user.banned ? ',owner' : '.menu', '.owner']], m, { mentions: await this.parseMention(text1) });
  user.pc = new Date() * 1;
  /*
   * GET STORY NOT READ STORY, READ IN UNDER THIS
   */
  if (m.chat.endsWith('broadcast')) {
    if (db.data.settings[this.user.jid].getsw) {
      let to = owner[0][0] + `@s.whatsapp.net`;
      if (to == '') return console.log('[NOTIF STORY] To not found');
      this.fakeReply(
        to,
        `[NOTIF STORY]
From: 
@${m.sender.split`@`[0]}`,
        m.chat,
        '[NOTIF STORY]',
        stts,
        { mentions: [m.sender] }
      );

      this.copyNForward(to, m).catch((e) => console.log(e, m));
    }
  }
  /*
   * SET HANDLER TAPI DI SINI AJA
   */
  //if (settings.readsw) await this.chatRead('status@broadcast', m.key.participant, m.id || m.key.id).catch(() => {})
  //if (settings.unavailable) await this.sendPresenceUpdate('unavailable', m.chat)
  //if (settings.autotyping) await this.sendPresenceUpdate('composing', m.chat)
  /*
   * LANGUAGE FROM NUMBER
   */
  if (m.sender.startsWith('62')) {
    db.data.users[m.sender].language = 'id';
  } else if (m.sender.startsWith('60')) {
    db.data.users[m.sender].language = 'id';
  } else if (!m.sender.startsWith('62')) {
    db.data.users[m.sender].language = 'en';
  } else if (!m.sender.startsWith('60')) {
    db.data.users[m.sender].language = 'en';
  }
};
export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
function emojiStringToArray(str) {
  var spl = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  var arr = [];
  for (var i = 0; i < spl.length; i++) {
    var char = spl[i];
    if (char !== '') {
      arr.push(char);
    }
  }
  return arr;
}
