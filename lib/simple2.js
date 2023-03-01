/*
DOBDABOT MADE BY AMEL
*/

//-- MODULE EXTERNAL
import path from 'path';
import chalk from 'chalk';
import fetch from 'node-fetch';
import PhoneNumber from 'awesome-phonenumber';
import fs from 'fs';
import util from 'util';
import { fileTypeFromBuffer } from 'file-type';
import { format } from 'util';
import { fileURLToPath } from 'url';
const {
  default: _makeWaSocket,
  makeWALegacySocket,
  proto,
  downloadContentFromMessage,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  extractMessageContent,
  getContentType,
  S_WHATSAPP_NET,
} = (await import('@adiwajshing/baileys')).default;
import * as bo from '@bochilteam/scraper';
//-- MODULE INTERNAL
import { toAudio } from './converter.js';
import store from './store.js';
import Connection from './connection.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('@adiwajshing/baileys')}
 */

/** @param {import('./connection').Socket} conn */
export function HelperConnection(conn, options = {}) {
  let botUser = conn.user;
  /** @type {import('@adiwajshing/baileys').WASocket | import('@adiwajshing/baileys').WALegacySocket} */
  let sock = Object.defineProperties(conn, {
    decodeJid: {
      value(jid) {
        if (!jid || typeof jid !== 'string') return (!nullish(jid) && jid) || null;
        return jid?.decodeJid?.();
      },
    },
    logger: {
      value: {
        info(...args) {
          console.log(chalk.bold.bgRgb(51, 204, 51)('INFO '), `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`, chalk.cyan(format(...args)));
        },
        error(...args) {
          console.log(chalk.bold.bgRgb(247, 38, 33)('ERROR '), `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`, chalk.rgb(255, 38, 0)(format(...args)));
        },
        warn(...args) {
          console.log(chalk.bold.bgRgb(255, 153, 0)('WARNING '), `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`, chalk.redBright(format(...args)));
        },
        trace(...args) {
          console.log(chalk.grey('TRACE '), `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`, chalk.white(format(...args)));
        },
        debug(...args) {
          console.log(chalk.bold.bgRgb(66, 167, 245)('DEBUG '), `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`, chalk.white(format(...args)));
        },
      },
      enumerable: true,
      writable: true,
    },
    /*
        SEND CONTACT ARRAY 
        */
    sendCAR: {
      async value(jid, data, quoted, options) {
        let contacts = [];
        for (let [number, name, isi1, isi2, isi3, isi4] of data) {
          number = number.replace(/[^0-9]/g, '');
          let njid = number + '@s.whatsapp.net';
          /*let name = db.data.users[njid] ? db.data.users[njid].name : conn.getName(njid)*/
          let biz = (await conn.getBusinessProfile(njid)) || {};
          // N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
          let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
ORG:
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:📌 ${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:✉️ Email
item3.URL:${isi3}
item3.X-ABLabel:Website
item4.ADR:;;🇮🇩 Indonesia;;;;
item4.X-ABADR:ac
item4.X-ABLabel:📍 Region
item5.X-ABLabel:🔖 ${isi4}
X-WA-BIZ-DESCRIPTION:${(biz.description || '').replace(/\n/g, '\\n')}
X-WA-BIZ-NAME:${name.replace(/\n/g, '\\n')}
END:VCARD
`.trim();
          contacts.push({
            vcard,
            displayName: name,
          });
        }
        return await conn.sendMessage(
          jid,
          {
            contacts: {
              ...options,
              displayName: (contacts.length > 1 ? `${contacts.length} kontak` : contacts[0].displayName) || null,
              contacts,
            },
          },
          {
            quoted,
            ...options,
          }
        );
      },
    },
    getFile: {
      /**
       * getBuffer hehe
       * @param {fs.PathLike} PATH
       * @param {Boolean} saveToFile
       */
      async value(PATH, saveToFile = false) {
        let res, filename;
        const data = Buffer.isBuffer(PATH)
          ? PATH
          : PATH instanceof ArrayBuffer
          ? PATH.toBuffer()
          : /^data:.*?\/.*?;base64,/i.test(PATH)
          ? Buffer.from(PATH.split`,`[1], 'base64')
          : /^https?:\/\//.test(PATH)
          ? await (res = await fetch(PATH)).buffer()
          : fs.existsSync(PATH)
          ? ((filename = PATH), fs.readFileSync(PATH))
          : typeof PATH === 'string'
          ? PATH
          : Buffer.alloc(0);
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer');
        const type = (await fileTypeFromBuffer(data)) || {
          mime: 'application/octet-stream',
          ext: '.bin',
        };
        if (data && saveToFile && !filename) (filename = path.join(__dirname, '../tmp/' + new Date() * 1 + '.' + type.ext)), await fs.promises.writeFile(filename, data);
        //console.log('getFile ', filename, type)
        return {
          res,
          filename,
          ...type,
          data,
          deleteFile() {
            return filename && fs.promises.unlink(filename);
          },
        };
      },
      enumerable: true,
      writable: true,
    },
    waitEvent: {
      /**
       * waitEvent
       * @param {String} eventName
       * @param {Boolean} is
       * @param {Number} maxTries
       */
      value(eventName, is = () => true, maxTries = 25) {
        //Idk why this exist?
        return new Promise((resolve, reject) => {
          let tries = 0;
          let on = (...args) => {
            if (++tries > maxTries) reject('Max tries reached');
            else if (is()) {
              conn.ev.off(eventName, on);
              resolve(...args);
            }
          };
          conn.ev.on(eventName, on);
        });
      },
    },
    /*
     * SEND TRANSLATE
     */
    sendTr: {
      async value(teks) {
        /*let { text } = await transl(teks, {
                    from: 'auto',
                    to: userr.language ? userr.language : 'en'
                })*/
        return teks;
      },
    },
    /*
     * BUFFER FROM URL
     */
    buffer: {
      async value(url) {
        var anu = await (await fetch(url)).buffer();
        return anu;
      },
    },
    /*
     * SEND MEDIA AUTO
     */
    sendMedia: {
      async value(jid, path, quoted, options = {}) {
        let { ext, mime, data } = await conn.getFile(path);
        let messageType = mime.split('/')[0];
        let pase = messageType.replace('application', 'document') || messageType;
        return await conn.sendMessage(
          jid,
          {
            [`${pase}`]: data,
            mimetype: mime,
            ...options,
          },
          {
            quoted,
          }
        );
      },
      enumerable: true,
      writable: true,
    },
    sendFile: {
      /**
       * Send Media/File with Automatic Type Specifier
       * @param {String} jid
       * @param {String|Buffer} path
       * @param {String} filename
       * @param {String} caption
       * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
       * @param {Boolean} ptt
       * @param {Object} options
       */
      async value(jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) {
        let type = await conn.getFile(path, true);
        let { res, data: file, filename: pathFile } = type;
        if ((res && res.status !== 200) || file.length <= 65536) {
          try {
            throw {
              json: JSON.parse(file.toString()),
            };
          } catch (e) {
            if (e.json) throw e.json;
          }
        }
        let opt = {};
        if (quoted) opt.quoted = quoted;
        if (!type) options.asDocument = true;
        let mtype = '',
          mimetype = options.mimetype || type.mime,
          convert;
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
        else if (/video/.test(type.mime)) mtype = 'video';
        else if (/audio/.test(type.mime)) (convert = await toAudio(file, type.ext)), (file = convert.data), (pathFile = convert.filename), (mtype = 'audio'), (mimetype = options.mimetype || 'audio/ogg; codecs=opus');
        else mtype = 'document';
        if (options.asDocument) mtype = 'document';

        delete options.asSticker;
        delete options.asLocation;
        delete options.asVideo;
        delete options.asDocument;
        delete options.asImage;

        let message = {
          ...options,
          caption,
          ptt,
          [mtype]: {
            url: pathFile,
          },
          mimetype,
          fileName: filename || pathFile.split('/').pop(),
        };
        /**
         * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
         */
        let m;
        try {
          m = await conn.sendMessage(jid, message, {
            ...opt,
            ...options,
          });
        } catch (e) {
          console.error(e);
          m = null;
        } finally {
          if (!m)
            m = await conn.sendMessage(
              jid,
              {
                ...message,
                [mtype]: file,
              },
              {
                ...opt,
                ...options,
              }
            );
          file = null; // releasing the memory
          return m;
        }
      },
      enumerable: true,
      writable: true,
    },
    /*
     * SEND CONTACT
     */
    sendContact: {
      /**
       * Send Contact
       * @param {String} jid
       * @param {String[][]|String[]} data
       * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
       * @param {Object} options
       */
      async value(jid, data, quoted, options) {
        if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data];
        let contacts = [];
        for (let [number, name] of data) {
          number = number.replace(/[^0-9]/g, '');
          let njid = number + '@s.whatsapp.net';
          let biz = (await conn.getBusinessProfile(njid).catch((_) => null)) || {};
          let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${
            biz.description
              ? `
X-WA-BIZ-NAME:${(conn.chats[njid]?.vname || conn.getName(njid) || name).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${biz.description.replace(/\n/g, '\\n')}
`.trim()
              : ''
          }
END:VCARD
`.trim();
          contacts.push({
            vcard,
            displayName: name,
          });
        }
        return await conn.sendMessage(
          jid,
          {
            ...options,
            contacts: {
              ...options,
              displayName: (contacts.length >= 2 ? `${contacts.length} kontak` : contacts[0].displayName) || null,
              contacts,
            },
          },
          {
            quoted,
            ...options,
          }
        );
      },
      enumerable: true,
      writable: true,
    },
    msToDate: {
      async value(dt) {
        function mms(ms) {
          let days = Math.floor(ms / (24 * 60 * 60 * 1000));
          let daysms = ms % (24 * 60 * 60 * 1000);
          let hours = Math.floor(daysms / (60 * 60 * 1000));
          let hoursms = ms % (60 * 60 * 1000);
          let minutes = Math.floor(hoursms / (60 * 1000));
          let minutesms = ms % (60 * 1000);
          let sec = Math.floor(minutesms / 1000);
          return days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes';
          // +minutes+":"+sec;
        }
        return mms(dt);
      },
    },
    /*
     * SEND TEXT NO TRANSLATE
     */
    replyv2: {
      /**
       * Reply to a message
       * @param {String} jid
       * @param {String|Buffer} text
       * @param {proto.WebMessageInfo} quoted
       * @param {Object} options
       */
      async value(jid, text = '', quoted, options) {
        return conn.sendMessage(
          jid,
          {
            contextInfo: {
              externalAdReply: {
                sourceUrl: linkgc,
                mediaType: 2,
                title: 'Join This Group',
                body: '',
                thumbnail: image,
              },
            },
            ...options,
            text: text,
          },
          {
            quoted,
            ...options,
          }
        );
      },
    },
    /*
     * SEND TEXT WITH TRANSLATE
     */
    reply: {
      /**
       * Reply to a message
       * @param {String} jid
       * @param {String|Buffer} text
       * @param {proto.WebMessageInfo} quoted
       * @param {Object} options
       */
      async value(jid, text = '', quoted, options) {
        return conn.sendMessage(
          jid,
          {
            contextInfo: {
              externalAdReply: {
                sourceUrl: linkgc,
                mediaType: 2,
                title: 'Join This Group',
                body: '',
                thumbnail: image,
              },
            },
            ...options,
            text: await conn.sendTr(text),
          },
          {
            quoted,
            ...options,
          }
        );
      },
    },
    /*
     * SEND BUTTON AUTO TRANSLATE
     */
    sendButton: {
      /**
       * send Button
       * @param {String} jid
       * @param {String} contentText
       * @param {String} footer
       * @param {Buffer} buffer
       * @param {String[]|String[][]} buttons
       * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
       * @param {Object} options
       */
      async value(jid, text = '', footer = '', buffer, buttons, quoted, options) {
        let type;
        if (Array.isArray(buffer)) (options = quoted), (quoted = buttons), (buttons = buffer), (buffer = null);
        else if (buffer)
          try {
            (type = await conn.getFile(buffer)), (buffer = type.data);
          } catch {
            buffer = null;
          }
        if (!Array.isArray(buttons[0]) && typeof buttons[0] === 'string') buttons = [buttons];
        if (!options) options = {};
        let message = {
          ...options,
          [buffer ? 'caption' : 'text']: text || '',
          footer,
          buttons: buttons.map((btn) => ({
            buttonId: (!nullish(btn[1]) && btn[1]) || (!nullish(btn[0]) && btn[0]) || '',
            buttonText: {
              displayText: (!nullish(btn[0]) && btn[0]) || (!nullish(btn[1]) && btn[1]) || '',
            },
          })),
          ...(buffer
            ? options.asLocation && /image/.test(type.mime)
              ? {
                  location: {
                    ...options,
                    jpegThumbnail: buffer,
                  },
                }
              : {
                  [/video/.test(type.mime) ? 'video' : /image/.test(type.mime) ? 'image' : 'document']: buffer,
                }
            : {}),
        };

        return await conn.sendMessage(jid, message, {
          quoted,
          upload: conn.waUploadToServer,
          ...options,
        });
      },
      enumerable: true,
      writable: true,
    },
    /*
     * SEND RANDOM HYDRATED
     */
    sendRHydrated: {
      async value(jid, capt, foot, url, urlText, call, callText, buttons, quoted, options) {
        //-- random content
        let templateButtons = [];
        if (url || urlText) {
          if (!Array.isArray(url)) url = [url];
          if (!Array.isArray(urlText)) urlText = [urlText];
          templateButtons.push(
            ...(url
              .map((v, i) => [v, urlText[i]])
              .map(([url, urlText], i) => ({
                index: templateButtons.length + i + 1,
                urlButton: {
                  displayText: (!nullish(urlText) && urlText) || (!nullish(url) && url) || '',
                  url: (!nullish(url) && url) || (!nullish(urlText) && urlText) || '',
                },
              })) || [])
          );
        }
        if (call || callText) {
          if (!Array.isArray(call)) call = [call];
          if (!Array.isArray(callText)) callText = [callText];
          templateButtons.push(
            ...(call
              .map((v, i) => [v, callText[i]])
              .map(([call, callText], i) => ({
                index: templateButtons.length + i + 1,
                callButton: {
                  displayText: (!nullish(callText) && callText) || (!nullish(call) && call) || '',
                  phoneNumber: (!nullish(call) && call) || (!nullish(callText) && callText) || '',
                },
              })) || [])
          );
        }
        if (buttons.length) {
          if (!Array.isArray(buttons[0])) buttons = [buttons];
          templateButtons.push(
            ...(buttons.map(([text, id], index) => ({
              index: templateButtons.length + index + 1,
              quickReplyButton: {
                displayText: (!nullish(text) && text) || (!nullish(id) && id) || '',
                id: (!nullish(id) && id) || (!nullish(text) && text) || '',
              },
            })) || [])
          );
        }
        var key = [
          {
            //-- video
            video: {
              url: 'https://telegra.ph/file/b6f257b69425cdc1db291.mp4',
            },
            jpegThumbnail: await (await fetch('https://telegra.ph/file/233cadab638df7b53807e.jpg')).buffer(),
            fileLength: numb,
            caption: capt,
            footer: foot,
            templateButtons,
          },
          //-- document
          {
            document: {
              url: './src/bab2.pdf',
            },
            jpegThumbnail: await (await fetch('https://telegra.ph/file/75b21015a4727956ac597.jpg')).buffer(),
            mimetype: mRandom(mtypee),
            fileName: global.title,
            fileLength: numb,
            pageCount: numb,
            caption: capt,
            footer: foot,
            templateButtons,
          },
          //-- location
          {
            location: {
              jpegThumbnail: await (await fetch('https://telegra.ph/file/233cadab638df7b53807e.jpg')).buffer(),
            },
            caption: capt,
            footer: foot,
            templateButtons,
          },
          //-- image
          {
            image: {
              url: 'https://telegra.ph/file/ac56fd58789718b44b103.jpg',
            },
            jpegThumbnail: await (await fetch(global.img)).buffer(),
            caption: capt,
            footer: foot,
            templateButtons,
          },
          //-- video gif
          {
            video: {
              url: 'https://telegra.ph/file/b6f257b69425cdc1db291.mp4',
            },
            jpegThumbnail: await (await fetch(global.img)).buffer(),
            gifPlayback: true,
            fileLength: numb,
            caption: capt,
            footer: foot,
            templateButtons,
          },
        ];
        var hs = mRandom(key);
        const sendMsg = await conn.sendMessage(jid, hs, {
          quoted,
          ...options,
        });
        return sendMsg;
      },
    },
    react: {
      value(text) {
        return self.conn?.sendMessage(this.chat, {
          react: {
            text,
            key: this.vM.key,
          },
        });
      },
      enumerable: true,
      writable: true,
    },
    sendHydrated: {
      /**
       *
       * @param {String} jid
       * @param {String} text
       * @param {String} footer
       * @param {fs.PathLike} buffer
       * @param {String|string[]} url
       * @param {String|string[]} urlText
       * @param {String|string[]} call
       * @param {String|string[]} callText
       * @param {String[][]} buttons
       * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
       * @param {Object} options
       */
      async value(jid, text = '', footer = '', buffer, url, urlText, call, callText, buttons, quoted, options) {
        let type;
        if (buffer)
          try {
            (type = await conn.getFile(buffer)), (buffer = type.data);
          } catch {
            buffer = buffer;
          }
        if (buffer && !Buffer.isBuffer(buffer) && (typeof buffer === 'string' || Array.isArray(buffer)))
          (options = quoted), (quoted = buttons), (buttons = callText), (callText = call), (call = urlText), (urlText = url), (url = buffer), (buffer = null);
        if (!options) options = {};
        let templateButtons = [];
        if (url || urlText) {
          if (!Array.isArray(url)) url = [url];
          if (!Array.isArray(urlText)) urlText = [urlText];
          templateButtons.push(
            ...(url
              .map((v, i) => [v, urlText[i]])
              .map(([url, urlText], i) => ({
                index: templateButtons.length + i + 1,
                urlButton: {
                  displayText: (!nullish(urlText) && urlText) || (!nullish(url) && url) || '',
                  url: (!nullish(url) && url) || (!nullish(urlText) && urlText) || '',
                },
              })) || [])
          );
        }
        if (call || callText) {
          if (!Array.isArray(call)) call = [call];
          if (!Array.isArray(callText)) callText = [callText];
          templateButtons.push(
            ...(call
              .map((v, i) => [v, callText[i]])
              .map(([call, callText], i) => ({
                index: templateButtons.length + i + 1,
                callButton: {
                  displayText: (!nullish(callText) && callText) || (!nullish(call) && call) || '',
                  phoneNumber: (!nullish(call) && call) || (!nullish(callText) && callText) || '',
                },
              })) || [])
          );
        }
        if (buttons.length) {
          if (!Array.isArray(buttons[0])) buttons = [buttons];
          templateButtons.push(
            ...(buttons.map(([text, id], index) => ({
              index: templateButtons.length + index + 1,
              quickReplyButton: {
                displayText: (!nullish(text) && text) || (!nullish(id) && id) || '',
                id: (!nullish(id) && id) || (!nullish(text) && text) || '',
              },
            })) || [])
          );
        }
        let message = {
          ...options,
          [buffer ? 'caption' : 'text']: text || '',
          footer,
          templateButtons,
          ...(buffer
            ? options.asLocation && /image/.test(type.mime)
              ? {
                  location: {
                    ...options,
                    jpegThumbnail: buffer,
                  },
                }
              : {
                  [/video/.test(type.mime) ? 'video' : /image/.test(type.mime) ? 'image' : 'document']: buffer,
                }
            : {}),
        };
        return await conn.sendMessage(jid, message, {
          quoted,
          upload: conn.waUploadToServer,
          ...options,
        });
      },
      enumerable: true,
      writable: true,
    },
    cMod: {
      /**
       * cMod
       * @param {String} jid
       * @param {proto.WebMessageInfo} message
       * @param {String} text
       * @param {String} sender
       * @param {*} options
       * @returns
       */
      value(jid, message, text = '', sender = conn.user.jid, options = {}) {
        if (options.mentions && !Array.isArray(options.mentions)) options.mentions = [options.mentions];
        let copy = message.toJSON();
        delete copy.message.messageContextInfo;
        delete copy.message.senderKeyDistributionMessage;
        let mtype = getContentType(copy.message);
        let msg = copy.message;
        let content = msg[mtype];
        if (typeof content === 'string') msg[mtype] = text || content;
        else if (content.caption) content.caption = text || content.caption;
        else if (content.text) content.text = text || content.text;
        if (typeof content !== 'string') {
          msg[mtype] = {
            ...content,
            ...options,
          };
          msg[mtype].contextInfo = {
            ...(content.contextInfo || {}),
            mentionedJid: options.mentions || content.contextInfo?.mentionedJid || [],
          };
        }
        if (copy.participant) sender = copy.participant = sender || copy.participant;
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid;
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid;
        copy.key.remoteJid = jid;
        copy.key.fromMe = areJidsSameUser(sender, conn.user.id) || false;
        return proto.WebMessageInfo.fromObject(copy);
      },
      enumerable: true,
      writable: true,
    },
    copyNForward: {
      /**
       * Exact Copy Forward
       * @param {String} jid
       * @param {proto.WebMessageInfo} message
       * @param {Boolean|Number} forwardingScore
       * @param {Object} options
       */
      async value(jid, message, forwardingScore = true, options = {}) {
        let vtype;
        if (options.readViewOnce && message.message.viewOnceMessage?.nessage) {
          vtype = Object.keys(message.message.viewOnceMessage.message)[0];
          delete message.message.viewOnceMessage.message[vtype].viewOnce;
          message.message = proto.Message.fromObject(JSON.parse(JSON.stringify(message.message.viewOnceMessage.message)));
          message.message[vtype].contextInfo = message.message.viewOnceMessage.contextInfo;
        }
        let mtype = Object.keys(message.message)[0];
        let m = generateForwardMessageContent(message, !!forwardingScore);
        let ctype = Object.keys(m)[0];
        if (forwardingScore && typeof forwardingScore === 'number' && forwardingScore > 1) m[ctype].contextInfo.forwardingScore += forwardingScore;
        m[ctype].contextInfo = {
          ...(message.message[mtype].contextInfo || {}),
          ...(m[ctype].contextInfo || {}),
        };
        m = generateWAMessageFromContent(jid, m, {
          ...options,
          userJid: conn.user.jid,
        });
        await conn.relayMessage(jid, m.message, {
          messageId: m.key.id,
          additionalAttributes: {
            ...options,
          },
        });
        return m;
      },
      enumerable: true,
      writable: true,
    },
    fakeReply: {
      /**
       * Fake Replies
       * @param {String} jid
       * @param {String|Object} text
       * @param {String} fakeJid
       * @param {String} fakeText
       * @param {String} fakeGroupJid
       * @param {String} options
       */
      async value(jid, text = '', fakeJid = this.user.jid, fakeText = '', fakeGroupJid, options) {
        return conn.sendMessage(
          jid,
          {
            text: text,
            contextInfo: {
              externalAdReply: {
                sourceUrl: linkgc,
                mediaType: 2,
                title: 'Join This Group',
                body: '',
                thumbnail: image,
              },
            },
            ...options,
          },
          {
            quoted: {
              key: {
                fromMe: areJidsSameUser(fakeJid, conn.user.id),
                participant: fakeJid,
                ...(fakeGroupJid
                  ? {
                      remoteJid: fakeGroupJid,
                    }
                  : {}),
              },
              message: {
                conversation: fakeText,
              },
            },
            ...options,
          }
        );
      },
    },
    downloadM: {
      /**
       * Download media message
       * @param {Object} m
       * @param {String} type
       * @param {fs.PathLike|fs.promises.FileHandle} filename
       * @returns {Promise<fs.PathLike|fs.promises.FileHandle|Buffer>}
       */
      async value(m, type, saveToFile) {
        let filename;
        if (!m || !(m.url || m.directPath)) return Buffer.alloc(0);
        const stream = await downloadContentFromMessage(m, type);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        if (saveToFile) ({ filename } = await conn.getFile(buffer, true));
        return saveToFile && fs.existsSync(filename) ? filename : buffer;
      },
      enumerable: true,
      writable: true,
    },
    parseMention: {
      /**
       * Parses string into mentionedJid(s)
       * @param {String} text
       * @returns {Array<String>}
       */
      value(text = '') {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net');
      },
      enumerable: true,
      writable: true,
    },
    getName: {
      /**
       * Get name from jid
       * @param {String} jid
       * @param {Boolean} withoutContact
       */
      value(jid = '', withoutContact = false) {
        jid = conn.decodeJid(jid);
        withoutContact = conn.withoutContact || withoutContact;
        let v;
        if (jid.endsWith('@g.us'))
          return (async () => {
            v = (await Connection.store.fetchGroupMetadata(jid, conn.groupMetadata)) || {};
            return v.name || v.subject || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
          })();
        else
          v =
            jid === '0@s.whatsapp.net'
              ? {
                  jid,
                  vname: 'WhatsApp',
                }
              : areJidsSameUser(jid, conn.user.id)
              ? conn.user
              : conn.chats[jid] || {};
        return (withoutContact ? '' : v.name) || v.subject || v.vname || v.notify || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
      },
      enumerable: true,
      writable: true,
    },
    loadMessage: {
      /**
       *
       * @param {String} messageID
       * @returns {import('@adiwajshing/baileys').proto.WebMessageInfo}
       */
      value(messageID) {
        return Object.entries(conn.chats)
          .filter(([_, { messages }]) => typeof messages === 'object')
          .find(([_, { messages }]) => Object.entries(messages).find(([k, v]) => k === messageID || v.key?.id === messageID))?.[1].messages?.[messageID];
      },
      enumerable: true,
      writable: true,
    },
    sendGroupV4Invite: {
      /**
       * sendGroupV4Invite
       * @param {String} jid
       * @param {*} participant
       * @param {String} inviteCode
       * @param {Number} inviteExpiration
       * @param {String} groupName
       * @param {String} caption
       * @param {Buffer} jpegThumbnail
       * @param {*} options
       */
      async value(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', jpegThumbnail, options = {}) {
        const msg = proto.Message.fromObject({
          groupInviteMessage: proto.GroupInviteMessage.fromObject({
            inviteCode,
            inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date() + 3 * 86400000),
            groupJid: jid,
            groupName: (groupName ? groupName : await conn.getName(jid)) || null,
            jpegThumbnail: Buffer.isBuffer(jpegThumbnail) ? jpegThumbnail : null,
            caption,
          }),
        });
        const message = generateWAMessageFromContent(participant, msg, options);
        await conn.relayMessage(participant, message.message, {
          messageId: message.key.id,
          additionalAttributes: {
            ...options,
          },
        });
        return message;
      },
      enumerable: true,
      writable: true,
    },
    serializeM: {
      /**
       * Serialize Message, so it easier to manipulate
       * @param {proto.WebMessageInfo} m
       */
      value(m) {
        return smsg(conn, m);
      },
      writable: true,
    },
    //        ...(typeof conn.chatRead !== 'function' ? {
    chatRead: {
      /**
       * Read message
       * @param {String} jid
       * @param {String|undefined|null} participant
       * @param {String} messageID
       */
      value(jid, participant = conn.user.jid, messageID) {
        return conn.sendReadReceipt(jid, participant, [messageID]);
      },
      enumerable: true,
      writable: true,
    },
    //        } : {}),
    //        ...(typeof conn.sendList !== 'function' ? {
    sendList: {
      /**
       * List message
       * @param {String} jid
       * @param {String|undefined|null} title
       * @param {String} text Under Title
       * @param {String} footerText
       * @param {String} rows
       * @param {string} options
       */
      async value(jid, text, footer, rows, quoted, options) {
        var sections = rows.map((v) => {
          return {
            title: v[3] || '',
            rows: [
              {
                title: v[0] || '',
                rowId: v[1] || '',
                description: v[2] || '',
              },
            ],
          };
        });
        const listMessage = {
          text: await conn.sendTr(text),
          footer: footer,
          title: '',
          buttonText: 'dotzbot',
          ...options,
          sections,
        };
        await conn.sendMessage(jid, listMessage, {
          quoted,
          ...options,
        });
      },
      enumerable: true,
      writable: true,
    },
    //        } : {}),
    //        ...(typeof conn.setStatus !== 'function' ? {
    setStatus: {
      /**
       * setStatus bot
       * @param {String} status
       */
      value(status) {
        return conn.query({
          tag: 'iq',
          attrs: {
            to: S_WHATSAPP_NET,
            type: 'set',
            xmlns: 'status',
          },
          content: [
            {
              tag: 'status',
              attrs: {},
              content: Buffer.from(status, 'utf-8'),
            },
          ],
        });
      },
      enumerable: true,
      writable: true,
    },
    //        } : {}),
    user: {
      get() {
        botUser = conn.authState.creds.me || {};
        return {
          ...botUser,
          jid: botUser.id?.decodeJid?.() || botUser.id,
        };
      },
      set(v) {
        botUser = v;
      },
      enumerable: true,
      configurable: true,
    },
  });
  if (sock.user?.id) sock.user.jid = sock.decodeJid(sock.user.id);
  store.bind(sock);
  return sock;
}
/**
 * Serialize Message
 * @param {ReturnType<typeof makeWASocket>} conn
 * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} m
 * @param {Boolean} hasParent
 */
export function smsg(conn, m, hasParent) {
  if (!m) return m;
  /**
   * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
   */
  let M = proto.WebMessageInfo;
  m = M.fromObject(m);
  m.conn = conn; // append conn to WebMessageInfo
  let protocolMessageKey;
  if (m.message) {
    if (m.mtype == 'protocolMessage' && m.msg.key) {
      protocolMessageKey = m.msg.key;
      if (protocolMessageKey == 'status@broadcast') protocolMessageKey.remoteJid = m.chat;
      if (!protocolMessageKey.participant || protocolMessageKey.participant == 'status_me') protocolMessageKey.participant = m.sender;
      protocolMessageKey.fromMe = conn.decodeJid(protocolMessageKey.participant) === conn.decodeJid(conn.user.id);
      if (!protocolMessageKey.fromMe && protocolMessageKey.remoteJid === conn.decodeJid(conn.user.id)) protocolMessageKey.remoteJid = m.sender;
    }
    if (m.quoted) if (!m.quoted.mediaMessage) delete m.quoted.download;
  }
  if (!m.mediaMessage) delete m.download;

  try {
    if (protocolMessageKey && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', protocolMessageKey);
  } catch (e) {
    console.error(e);
  }
  return m;
}

// https://github.com/Nurutomo/wabot-aq/issues/490
export function serialize() {
  const MediaType = ['imageMessage', 'videoMessage', 'audioMessage', 'stickerMessage', 'documentMessage'];
  return Object.defineProperties(proto.WebMessageInfo.prototype, {
    conn: {
      value: null,
      writable: true,
      enumerable: false,
    },
    id: {
      get() {
        return this.key?.id;
      },
    },
    isBaileys: {
      get() {
        return this.id?.length === 16 || (this.id?.startsWith('3EB0') && this.id?.length === 12) || false;
      },
    },
    chat: {
      get() {
        const senderKeyDistributionMessage = this.message?.senderKeyDistributionMessage?.groupId;
        return (this.key?.remoteJid || (senderKeyDistributionMessage && senderKeyDistributionMessage !== 'status@broadcast') || '').decodeJid();
      },
    },
    isGroup: {
      get() {
        return this.chat.endsWith('@g.us');
      },
      enumerable: true,
    },
    react: {
      value(text) {
        return self.conn?.sendMessage(this.chat, {
          react: {
            text,
            key: this.vM.key,
          },
        });
      },
      enumerable: true,
    },
    sender: {
      get() {
        return this.conn.decodeJid((this.key?.fromMe && this.conn.user.id) || this.participant || this.key.participant || this.chat || '');
      },
      enumerable: true,
    },
    fromMe: {
      get() {
        return this.key?.fromMe || areJidsSameUser(this.conn.user.id, this.sender) || false;
      },
    },
    mtype: {
      get() {
        if (!this.message) return '';
        return getContentType(this.message);
      },
      enumerable: true,
    },
    msg: {
      get() {
        if (!this.message) return null;
        return this.message[this.mtype];
      },
    },
    mediaMessage: {
      get() {
        if (!this.message) return null;
        const Message =
          (this.msg?.url || this.msg?.directPath
            ? {
                ...this.message,
              }
            : extractMessageContent(this.message)) || null;
        if (!Message) return null;
        const mtype = Object.keys(Message)[0];
        return MediaType.includes(mtype) ? Message : null;
      },
      enumerable: true,
    },
    mediaType: {
      get() {
        let message;
        if (!(message = this.mediaMessage)) return null;
        return Object.keys(message)[0];
      },
      enumerable: true,
    },
    quoted: {
      get() {
        /**
         * @type {ReturnType<typeof makeWASocket>}
         */
        const self = this;
        const msg = self.msg;
        const contextInfo = msg && msg.contextInfo;
        const quoted = contextInfo?.quotedMessage;
        if (!msg || !contextInfo || !quoted) return null;
        const type = Object.keys(quoted)[0];
        let q = quoted[type];
        const text = typeof q === 'string' ? q : q.text;
        return Object.defineProperties(
          JSON.parse(
            JSON.stringify(
              typeof q === 'string'
                ? {
                    _text: q,
                  }
                : q
            )
          ),
          {
            mtype: {
              get() {
                return type;
              },
              enumerable: true,
            },
            mediaMessage: {
              get() {
                const Message =
                  (q.url || q.directPath
                    ? {
                        ...quoted,
                      }
                    : extractMessageContent(quoted)) || null;
                if (!Message) return null;
                const mtype = Object.keys(Message)[0];
                return MediaType.includes(mtype) ? Message : null;
              },
              enumerable: true,
            },
            mediaType: {
              get() {
                let message;
                if (!(message = this.mediaMessage)) return null;
                return Object.keys(message)[0];
              },
              enumerable: true,
            },
            id: {
              get() {
                return contextInfo.stanzaId;
              },
              enumerable: true,
            },
            chat: {
              get() {
                return contextInfo.remoteJid || self.chat;
              },
              enumerable: true,
            },
            isBaileys: {
              get() {
                return this.id?.length === 16 || (this.id?.startsWith('3EB0') && this.id.length === 12) || false;
              },
              enumerable: true,
            },
            sender: {
              get() {
                return (contextInfo.participant || this.chat || '').decodeJid();
              },
              enumerable: true,
            },
            fromMe: {
              get() {
                return areJidsSameUser(this.sender, self.conn.user.jid);
              },
              enumerable: true,
            },
            text: {
              get() {
                return text || this.caption || this.contentText || '';
              },
              enumerable: true,
            },
            mentionedJid: {
              get() {
                return (q.contextInfo?.mentionedJid?.length && q.contextInfo.mentionedJid) || [];
              },
              enumerable: true,
            },
            name: {
              get() {
                const sender = this.sender;
                return sender ? self.conn.getName(sender) : null;
              },
              enumerable: true,
            },
            vM: {
              get() {
                return proto.WebMessageInfo.fromObject({
                  key: {
                    fromMe: this.fromMe,
                    remoteJid: this.chat,
                    id: this.id,
                  },
                  message: self._quoted,
                  ...(self.isGroup
                    ? {
                        participant: this.sender,
                      }
                    : {}),
                });
              },
            },
            fakeObj: {
              get() {
                return this.vM;
              },
            },
            download: {
              value(saveToFile = false) {
                const mtype = this.mediaType;
                return self.conn.downloadM(this.mediaMessage[mtype], mtype.replace(/message/i, ''), saveToFile);
              },
              enumerable: true,
              configurable: true,
            },
            reply: {
              /**
               * Reply to quoted message
               * @param {String|Object} text
               * @param {String|false} chatId
               * @param {Object} options
               */
              value(text, chatId, options) {
                console.log(this);
                return self.conn.reply(chatId ? chatId : this.chat, text, this.vM, options);
              },
              enumerable: true,
            },
            replyv2: {
              /**
               * Reply to quoted message
               * @param {String|Object} text
               * @param {String|false} chatId
               * @param {Object} options
               */
              value(text, chatId, options) {
                console.log(this);
                return self.conn.reply(chatId ? chatId : this.chat, text, this.vM, options);
              },
              enumerable: true,
            },
            copy: {
              /**
               * Copy quoted message
               */
              value() {
                const M = proto.WebMessageInfo;
                return smsg(conn, M.fromObject(M.toObject(this.vM)));
              },
              enumerable: true,
            },
            forward: {
              /**
               * Forward quoted message
               * @param {String} jid
               *@param {Boolean} forceForward
               */
              value(jid, forceForward = false) {
                return self.conn.forwardMessage(jid, this.vM, forceForward);
              },
              enumerable: true,
            },
            copyNForward: {
              /**
               * Exact Forward quoted message
               * @param {String} jid
               * @param {Boolean|Number} forceForward
               * @param {Object} options
               */
              value(jid, forceForward = true, options = {}) {
                return self.conn.copyNForward(jid, this.vM, forceForward, options);
              },
              enumerable: true,
            },
            cMod: {
              /**
               * Modify quoted Message
               * @param {String} jid
               * @param {String} text
               * @param {String} sender
               * @param {Object} options
               */
              value(jid, text = '', sender = this.sender, options = {}) {
                return self.conn.cMod(jid, this.vM, text, sender, options);
              },
              enumerable: true,
            },
            delete: {
              /**
               * Delete quoted message
               */
              value() {
                return self.conn.sendMessage(this.chat, {
                  delete: this.vM.key,
                });
              },
              enumerable: true,
            },
          }
        );
      },
      enumerable: true,
    },
    _text: {
      value: null,
      writable: true,
    },
    text: {
      get() {
        const msg = this.msg;
        const text = (typeof msg === 'string' ? msg : msg?.text) || msg?.caption || msg?.contentText || '';
        return typeof this._text === 'string' ? this._text : '' || (typeof text === 'string' ? text : text?.selectedDisplayText || text?.hydratedTemplate?.hydratedContentText || text) || '';
      },
      set(str) {
        return (this._text = str);
      },
      enumerable: true,
    },
    mentionedJid: {
      get() {
        return (this.msg?.contextInfo?.mentionedJid?.length && this.msg.contextInfo.mentionedJid) || [];
      },
      enumerable: true,
    },
    name: {
      get() {
        return (!nullish(this.pushName) && this.pushName) || this.conn.getName(this.sender);
      },
      enumerable: true,
    },
    download: {
      value(saveToFile = false) {
        const mtype = this.mediaType;
        return this.conn.downloadM(this.mediaMessage[mtype], mtype.replace(/message/i, ''), saveToFile);
      },
      enumerable: true,
      configurable: true,
    },
    reply: {
      value(text, chatId, options) {
        this.conn.logger.trace(this);
        this.conn.logger.trace(this instanceof proto.WebMessageInfo);
        return this.conn.reply(chatId ? chatId : this.chat, text, this, options);
      },
    },
    replyv2: {
      value(text, chatId, options) {
        this.conn.logger.trace(this);
        this.conn.logger.trace(this instanceof proto.WebMessageInfo);
        return this.conn.reply(chatId ? chatId : this.chat, text, this, options);
      },
    },
    copy: {
      value() {
        const M = proto.WebMessageInfo;
        return smsg(this.conn, M.fromObject(M.toObject(this)));
      },
      enumerable: true,
    },
    forward: {
      value(jid, force = false, options = {}) {
        return this.conn?.sendMessage(
          jid,
          {
            forward: this,
            force,
            ...options,
          },
          {
            ...options,
          }
        );
      },
    },
    copyNForward: {
      value(jid, forceForward = true, options = {}) {
        return this.conn.copyNForward(jid, this, forceForward, options);
      },
      enumerable: true,
    },
    cMod: {
      value(jid, text = '', sender = this.sender, options = {}) {
        return this.conn.cMod(jid, this, text, sender, options);
      },
      enumerable: true,
    },
    getQuotedObj: {
      value() {
        if (!this.quoted.id) return null;
        const q = proto.WebMessageInfo.fromObject(this.conn.loadMessage(this.quoted.id) || this.quoted.vM);
        return smsg(this.conn, q);
      },
      enumerable: true,
    },
    getQuotedMessage: {
      get() {
        return this.getQuotedObj;
      },
    },
    delete: {
      value() {
        return this.conn.sendMessage(this.chat, {
          delete: this.key,
        });
      },
      enumerable: true,
    },
  });
}

export function logic(check, inp, out) {
  if (inp.length !== out.length) throw new Error('Input and Output must have same length');
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
}

export function protoType() {
  Buffer.prototype.toArrayBuffer = function toArrayBufferV2() {
    const ab = new ArrayBuffer(this.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < this.length; ++i) {
      view[i] = this[i];
    }
    return ab;
  };
  /**
   * @returns {ArrayBuffer}
   */
  Buffer.prototype.toArrayBufferV2 = function toArrayBuffer() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength);
  };
  /**
   * @returns {Buffer}
   */
  ArrayBuffer.prototype.toBuffer = function toBuffer() {
    return Buffer.from(new Uint8Array(this));
  };
  // /**
  //* @returns {String}
  //*/
  // Buffer.prototype.toUtilFormat = ArrayBuffer.prototype.toUtilFormat = Object.prototype.toUtilFormat = Array.prototype.toUtilFormat = function toUtilFormat() {
  // return util.format(this)
  // }
  Uint8Array.prototype.getFileType =
    ArrayBuffer.prototype.getFileType =
    Buffer.prototype.getFileType =
      async function getFileType() {
        return await fileTypeFromBuffer(this);
      };
  /**
   * @returns {Boolean}
   */
  String.prototype.isNumber = Number.prototype.isNumber = isNumber;
  /**
   *
   * @returns {String}
   */
  String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1, this.length);
  };
  /**
   * @returns {String}
   */
  String.prototype.capitalizeV2 = function capitalizeV2() {
    const str = this.split(' ');
    return str.map((v) => v.capitalize()).join(' ');
  };
  String.prototype.decodeJid = function decodeJid() {
    if (/:\d+@/gi.test(this)) {
      const decode = jidDecode(this) || {};
      return ((decode.user && decode.server && decode.user + '@' + decode.server) || this).trim();
    } else return this.trim();
  };
  /**
   * number must be milliseconds
   * @returns {string}
   */
  Number.prototype.toTimeString = function toTimeString() {
    // const milliseconds = this % 1000
    const seconds = Math.floor((this / 1000) % 60);
    const minutes = Math.floor((this / (60 * 1000)) % 60);
    const hours = Math.floor((this / (60 * 60 * 1000)) % 24);
    const days = Math.floor(this / (24 * 60 * 60 * 1000));
    return ((days ? `${days} day(s) ` : '') + (hours ? `${hours} hour(s) ` : '') + (minutes ? `${minutes} minute(s) ` : '') + (seconds ? `${seconds} second(s)` : '')).trim();
  };
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom;
}

function isNumber() {
  const int = parseInt(this);
  return typeof int === 'number' && !isNaN(int);
}

function getRandom() {
  if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)];
  return Math.floor(Math.random() * this);
}

/**
 * ??
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * @returns {boolean}
 */
function nullish(args) {
  return !(args !== null && args !== undefined);
}
