import fetch from 'node-fetch'
import func from '../lib/function.js'
import fs from 'fs'
import jimp from 'jimp'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `input url,nama`
  let [t1, t2] = text.split`,`
  m.reply('waiting...')
  jimp.read(t1)
    .then(lenna => {
      return lenna
        .resize(240, 150) // resize
        .quality(100) // set JPEG quality
        //     .greyscale() // set greyscale
        .write(`img/${t2}.jpg`) // save
    })


  setTimeout(async () => {
    let pict2 = fs.readFileSync(`img/${t2}.jpg`)
    var key = {
      location: {
        jpegThumbnail: pict2
      },
      caption: done,
      footer: ig,
      templateButtons: [
        {
          index: 1, urlButton: {
            displayText: 'MY INSTAGRAM',
            url: ig
          }
        },
        {
          index: 2, quickReplyButton: {
            displayText: 'MENU', id: '.menu'
          }
        },
      ]
    }
    return conn.sendMessage(m.chat, key)
  }, 3000)


  setTimeout(async () => {
    let pict2 = fs.readFileSync(`img/${t2}.jpg`)
    var key = {
      video: { url: ig },
      jpegThumbnail: pict2,
      fileLength: numb,
      caption: done,
      footer: ig,
      templateButtons: [
        {
          index: 1, urlButton: {
            displayText: 'MY INSTAGRAM',
            url: ig
          }
        },
        {
          index: 2, quickReplyButton: {
            displayText: 'MENU', id: '.menu'
          }
        },
      ]
    }
    return conn.sendMessage(m.chat, key)
  }, 3000)

  setTimeout(async () => {
    let pict2 = fs.readFileSync(`img/${t2}.jpg`)
    var key = {
      document: { url: ig },
      jpegThumbnail: pict2,
      mimetype: func.mathRandom(mtypee),
      fileName: conn.user.name,
      fileLength: numb,
      pageCount: numb,
      caption: done,
      footer: ig,
      templateButtons: [
        {
          index: 1, urlButton: {
            displayText: 'MY INSTAGRAM',
            url: ig
          }
        },
        {
          index: 2, quickReplyButton: {
            displayText: 'MENU', id: '.menu'
          }
        },
      ]
    }
    return conn.sendMessage(m.chat, key)
  }, 3000)

  setTimeout(async () => {
    let pict2 = fs.readFileSync(`img/${t2}.jpg`)
    var key = {
      image: {
        url: img
      },
      jpegThumbnail: pict2,
      fileLength: numb,
      caption: done,
      footer: ig,
      templateButtons: [
        {
          index: 1, urlButton: {
            displayText: 'MY INSTAGRAM',
            url: ig
          }
        },
        {
          index: 2, quickReplyButton: {
            displayText: 'MENU', id: '.menu'
          }
        },
      ]
    }
    return conn.sendMessage(m.chat, key)
  }, 3000)
}

handler.help = ['gas']
handler.tags = ['owner']
handler.command = /^(res)$/i
handler.owner = true
handler.register = false
export default handler