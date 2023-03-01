import db from '../lib/database.js'
import fetch from 'node-fetch'
let handler = async (m, {
    args,
    conn,
    usedPrefix,
    command
}) => {
    let {
        age
    } = db.data.users[m.sender]
    if (age < 18) throw m.reply('minimal umur 18 tahun, bocah gausah make ini, pake fitur lain aja')
    let isAnime = {
        'fendom': 'fendom',
        'tickle': 'tickle',
        'classic': 'classic',
        'ngif': 'ngif',
        'erofeet': 'erofeet',
        'meow': 'meow',
        'erok': 'erok',
        'poke': 'poke',
        'les': 'les',
        'hololewd': 'hololewd',
        'not': 'eron',
        'lewdk': 'lewdk',
        'keta': 'keta',
        'feetg': 'feetg',
        'nsfw_neko_gif': 'nsfw_neko_gif',
        'eroyuri': 'eroyuri',
        'kiss': 'kiss',
        '8ball': '8ball',
        'kuni': 'kuni',
        'tits': 'tits',
        'pussy_jpg': 'pussy_jpg',
        'cum_jpg': 'cum_jpg',
        'pussy': 'pussy',
        'lewdkemo': 'lewdkemo',
        'lizard': 'lizard',
        'slap': 'slap',
        'lewd': 'lewd',
        'cum': 'cum',
        'cuddle': 'cuddle',
        'spank': 'spank',
        'smallboobs': 'smallboobs',
        'goose': 'goose',
        'random_hentai_gif': 'random_hentai_gif',
        'avatar': 'avatar',
        'fox_girl': 'fox_girl',
        'nsfw_avatar': 'nsfw_avatar',
        'hug': 'hug',
        'gecg': 'gecg',
        'boobs': 'boobs',
        'pat': 'pat',
        'feet': 'feet',
        'smug': 'smug',
        'kemonomimi': 'kemonomimi',
        'solog': 'solog',
        'holo': 'holo',
        'wallpaper': 'wallpaper',
        'bj': 'bj',
        'woof': 'woof',
        'yuri': 'yuri',
        'trap': 'trap',
        'anal': 'anal',
        'baka': 'baka',
        'blowjob': 'blowjob',
        'holoero': 'holoero',
        'feed': 'feed',
        'neko': 'neko',
        'gasm': 'gasm',
        'hentai': 'hentai',
        'futanari': 'futanari',
        'ero': 'ero',
        'solo': 'solo',
        'pwankg': 'pwankg',
        'waifu': 'waifu',
        'eron': 'eron',
        'erokemo': 'erokemo'
    } [(args[0] || '')]
        const capt = 'Silahkan Pilih Di Bawah Ini Mana Yang Akan Dicari'
    if (isAnime === undefined) {
        const data = [
            ['Pick Anime fendom', `${usedPrefix + command} fendom`, "Tap To Choose", '─────'],
            ['Pick Anime tickle', `${usedPrefix + command} tickle`, "Tap To Choose", '─────'],
            ['Pick Anime classic', `${usedPrefix + command} classic`, "Tap To Choose", '─────'],
            ['Pick Anime ngif', `${usedPrefix + command} ngif`, "Tap To Choose", '─────'],
            ['Pick Anime erofeet', `${usedPrefix + command} erofeet`, "Tap To Choose", '─────'],
            ['Pick Anime meow', `${usedPrefix + command} meow`, "Tap To Choose", '─────'],
            ['Pick Anime erok', `${usedPrefix + command} erok`, "Tap To Choose", '─────'],
            ['Pick Anime poke', `${usedPrefix + command} poke`, "Tap To Choose", '─────'],
            ['Pick Anime les', `${usedPrefix + command} les`, "Tap To Choose", '─────'],
            ['Pick Anime v3(not work)', `${usedPrefix + command} not`, "Tap To Choose", '─────'],
            ['Pick Anime hololewd', `${usedPrefix + command} hololewd`, "Tap To Choose", '─────'],
            ['Pick Anime nekoapi_v3.1(not work)', `${usedPrefix + command} not`, "Tap To Choose", '─────'],
            ['Pick Anime lewdk', `${usedPrefix + command} lewdk`, "Tap To Choose", '─────'],
            ['Pick Anime keta', `${usedPrefix + command} keta`, "Tap To Choose", '─────'],
            ['Pick Anime feetg', `${usedPrefix + command} feetg`, "Tap To Choose", '─────'],
            ['Pick Anime nsfw_neko_gif', `${usedPrefix + command} nsfw_neko_gif`, "Tap To Choose", '─────'],
            ['Pick Anime eroyuri', `${usedPrefix + command} eroyuri`, "Tap To Choose", '─────'],
            ['Pick Anime kiss', `${usedPrefix + command} kiss`, "Tap To Choose", '─────'],
            ['Pick Anime 8ball', `${usedPrefix + command} 8ball`, "Tap To Choose", '─────'],
            ['Pick Anime kuni', `${usedPrefix + command} kuni`, "Tap To Choose", '─────'],
            ['Pick Anime tits', `${usedPrefix + command} tits`, "Tap To Choose", '─────'],
            ['Pick Anime pussy_jpg', `${usedPrefix + command} pussy_jpg`, "Tap To Choose", '─────'],
            ['Pick Anime cum_jpg', `${usedPrefix + command} cum_jpg`, "Tap To Choose", '─────'],
            ['Pick Anime pussy', `${usedPrefix + command} pussy`, "Tap To Choose", '─────'],
            ['Pick Anime lewdkemo', `${usedPrefix + command} lewdkemo`, "Tap To Choose", '─────'],
            ['Pick Anime lizard', `${usedPrefix + command} lizard`, "Tap To Choose", '─────'],
            ['Pick Anime slap', `${usedPrefix + command} slap`, "Tap To Choose", '─────'],
            ['Pick Anime lewd', `${usedPrefix + command} lewd`, "Tap To Choose", '─────'],
            ['Pick Anime cum', `${usedPrefix + command} cum`, "Tap To Choose", '─────'],
            ['Pick Anime cuddle', `${usedPrefix + command} cuddle`, "Tap To Choose", '─────'],
            ['Pick Anime spank', `${usedPrefix + command} spank`, "Tap To Choose", '─────'],
            ['Pick Anime smallboobs', `${usedPrefix + command} smallboobs`, "Tap To Choose", '─────'],
            ['Pick Anime goose', `${usedPrefix + command} goose`, "Tap To Choose", '─────'],
            ['Pick Anime random_hentai_gif', `${usedPrefix + command} random_hentai_gif`, "Tap To Choose", '─────'],
            ['Pick Anime avatar', `${usedPrefix + command} avatar`, "Tap To Choose", '─────'],
            ['Pick Anime fox_girl', `${usedPrefix + command} fox_girl`, "Tap To Choose", '─────'],
            ['Pick Anime nsfw_avatar', `${usedPrefix + command} nsfw_avatar`, "Tap To Choose", '─────'],
            ['Pick Anime hug', `${usedPrefix + command} hug`, "Tap To Choose", '─────'],
            ['Pick Anime gecg', `${usedPrefix + command} gecg`, "Tap To Choose", '─────'],
            ['Pick Anime boobs', `${usedPrefix + command} boobs`, "Tap To Choose", '─────'],
            ['Pick Anime pat', `${usedPrefix + command} pat`, "Tap To Choose", '─────'],
            ['Pick Anime feet', `${usedPrefix + command} feet`, "Tap To Choose", '─────'],
            ['Pick Anime smug', `${usedPrefix + command} smug`, "Tap To Choose", '─────'],
            ['Pick Anime kemonomimi', `${usedPrefix + command} kemonomimi`, "Tap To Choose", '─────'],
            ['Pick Anime solog', `${usedPrefix + command} solog`, "Tap To Choose", '─────'],
            ['Pick Anime holo', `${usedPrefix + command} holo`, "Tap To Choose", '─────'],
            ['Pick Anime wallpaper', `${usedPrefix + command} wallpaper`, "Tap To Choose", '─────'],
            ['Pick Anime bj', `${usedPrefix + command} bj`, "Tap To Choose", '─────'],
            ['Pick Anime woof', `${usedPrefix + command} woof`, "Tap To Choose", '─────'],
            ['Pick Anime yuri', `${usedPrefix + command} yuri`, "Tap To Choose", '─────'],
            ['Pick Anime trap', `${usedPrefix + command} trap`, "Tap To Choose", '─────'],
            ['Pick Anime anal', `${usedPrefix + command} anal`, "Tap To Choose", '─────'],
            ['Pick Anime baka', `${usedPrefix + command} baka`, "Tap To Choose", '─────'],
            ['Pick Anime blowjob', `${usedPrefix + command} blowjob`, "Tap To Choose", '─────'],
            ['Pick Anime holoero', `${usedPrefix + command} holoero`, "Tap To Choose", '─────'],
            ['Pick Anime feed', `${usedPrefix + command} feed`, "Tap To Choose", '─────'],
            ['Pick Anime neko', `${usedPrefix + command} neko`, "Tap To Choose", '─────'],
            ['Pick Anime gasm', `${usedPrefix + command} gasm`, "Tap To Choose", '─────'],
            ['Pick Anime hentai', `${usedPrefix + command} hentai`, "Tap To Choose", '─────'],
            ['Pick Anime futanari', `${usedPrefix + command} futanari`, "Tap To Choose", '─────'],
            ['Pick Anime ero', `${usedPrefix + command} ero`, "Tap To Choose", '─────'],
            ['Pick Anime solo', `${usedPrefix + command} solo`, "Tap To Choose", '─────'],
            ['Pick Anime pwankg', `${usedPrefix + command} pwankg`, "Tap To Choose", '─────'],
            ['Pick Anime waifu', `${usedPrefix + command} waifu`, "Tap To Choose", '─────'],
            ['Pick Anime eron', `${usedPrefix + command} eron`, "Tap To Choose", '─────'],
            ['Pick Anime Erokemo', `${usedPrefix + command} erokemo`, "Tap To Choose", '─────']
        ]

        await conn.sendList(m.chat, capt, wm, data, m)
        throw false
    }
    var res = await (await fetch(`https://mnazria.herokuapp.com/api/picanime?list=` + isAnime)).json().catch(async _ => await m.replyv2(eror))
    var anu = await res.gambar
    if (anu) {
        await m.replyv2(wait)
        await conn.sendFile(m.chat, anu, 'anim.jpg', done, m)
    } else if(!anu) throw eror
}
handler.help = ['pickanime']
handler.tags = ['nsfw', 'dewasa']
handler.command = /^(pickanime)$/i
handler.limit = true
handler.register = true
handler.mature = true

export default handler