import db from '../lib/database.js'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import got from 'got'
import vm from 'vm'

function decodeSnapApp(...args) {
    // From reponse snap app
    function _0xe78c(d, e, f) {
        const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        const h = g.slice(0, e);
        const i = g.slice(0, f);
        // @ts-ignore
        // eslint-disable-next-line array-callback-return
        let j = d.split('').reverse().reduce(function(a, b, c) {
            // eslint-disable-next-line no-return-assign
            if (h.indexOf(b) !== -1)
                return a += h.indexOf(b) * (Math.pow(e, c));
        }, 0);
        let k = '';
        while (j > 0) {
            k = i[j % f] + k;
            j = (j - (j % f)) / f;
        }
        return k || '0';
    }

    function _0xc60e(h, u, n, t, e, r) {
        r = '';
        for (let i = 0, len = h.length; i < len; i++) {
            let s = '';
            while (h[i] !== n[e]) {
                s += h[i];
                i++;
            }
            for (let j = 0; j < n.length; j++) {
                s = s.replace(new RegExp(n[j], 'g'), j.toString());
            }
            // @ts-ignore
            r += String.fromCharCode((_0xe78c(s, e, 10) - t));
        }
        return decodeURIComponent(encodeURIComponent(r));
    }
    // @ts-ignore
    return _0xc60e(...args);
}

async function pinterest(query) {
    const data = await got(`https://id.pinterest.com/search/pins/?autologin=true&q=${query}`, {
        headers: {
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            cookie: '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        }
    }).text();
    const results = [];
    const $ = cheerio.load(data);
    $('img').each(function() {
        results.push($(this).attr('src'));
    });
    return results;
}

function pinterestdl(url) {
    return new Promise(async (resolve, reject) => {
        let form = new URLSearchParams()
        form.append('url', url)
        let html = await (await fetch('https://pinterestvideodownloader.com/', {
            method: 'POST',
            body: form
        })).text()
        var tai = cheerio.load(html)
        let data = []
        tai('table > tbody > tr').each(function(i, e) {
            if (tai(tai(e).find('td')[0]).text() != '') data.push({
                url: tai(tai(e).find('td')[0]).find('a').attr('href')
            })
        })
        if (data.length == 0) return resolve({
            status: false
        })
        resolve({
            status: true,
            data
        })
    })
}


async function tiktokdl(Url) {
    return new Promise(async (resolve, reject) => {
        await axios.request({
            url: "https://ttdownloader.com/",
            method: "GET",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
                "cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
            }
        }).then(respon => {
            const chr = cheerio.load(respon.data)
            const token = chr('#token').attr('value')
            axios({
                url: "https://ttdownloader.com/req/",
                method: "POST",
                data: new URLSearchParams(Object.entries({
                    url: Url,
                    format: "",
                    token: token
                })),
                headers: {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
                    "cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
                }
            }).then(res => {
                const ch = cheerio.load(res.data)
                const result = {
                    status: res.status,
                    result: {
                        nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
                        watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
                        audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
                    }
                }
                resolve(result)
            }).catch(reject)
        }).catch(reject)
    })
}

async function tiktokdlv2(url) {
    var _a;
    const resToken = await got('https://ssstik.io/id');
    const cookie = (_a = resToken.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a.map(v => v.split(';')[0]).join('; ');
    const $$ = cheerio.load(resToken.body);
    const postUrl = $$('#_gcaptcha_pt').attr('hx-post');
    const html = await got('https://ssstik.io' + postUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: cookie || 'PHPSESSID=gb6hgnvvpkfg28ulo80l1u2qrl; __cflb=02DiuEcwseaiqqyPC5pE7Qjdp2jcR2J5YEMX3jgTCHMYX; _ga=GA1.2.1294804934.1647840559; _gid=GA1.2.1211588131.1647840559; __gads=ID=3ba3f6d3a5959cb0-224bbeea15d100da:T=1647840559:RT=1647840559:S=ALNI_MYtTuJ9ICRAeHGfemUzb2rwyaT6lw; ga_show=2; _gat_UA-3524196-6=1',
            'hx-current-url': 'https://ssstik.io/id',
            'hx-request': 'true',
            'hx-target': 'target',
            'hx-trigger': ' _gcaptcha_pt',
            origin: 'https://ssstik.io',
            referer: 'https://ssstik.io/id',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537'
        },
        form: {
            id: encodeURI(url),
            locale: 'id',
            gc: 0,
            tt: 0,
            ts: 0
        }
    }).text();
    const $ = cheerio.load(html);
    const $img = $('img.u-round');
    const $a = $('a.pure-button');
    let no_watermark = $a.eq(0).attr('href');
    if (!/https?:\/\//.test(no_watermark))
        no_watermark = `https://ssstik.io${no_watermark}`;
    return {
        author: {
            nickname: $img.attr('alt'),
            avatar: $img.attr('src')
        },
        description: $('p.maintext').text(),
        video: {
            no_watermark,
            no_watermark2: $a.eq(1).attr('href')
        },
        music: $a.eq(2).attr('href')
    };
}
async function twitterdlv2(url) {
    const resToken = await got('https://twittervideodownloader.com/', {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            cookie: 'csrftoken=au5r4nZ6uN48szGKtaEYp4sh4hBWSbL72M7LggD0nPUh8JGajAI403UIpWhrc5dU; _ga=GA1.2.1240680676.1641628632; _gid=GA1.2.414203301.1641628632; __qca=P0-603222438-1641628633090; _pbjs_userid_consent_data=6683316680106290; _pubcid=529c1986-42d2-4dec-a0e8-3a7d7c453add; __gads=ID=c7fcfc8de61626ad:T=1641628636:S=ALNI_MaE6t3k60TjxfxOEU_7fiYOKTdg8Q; session_id=6831c9ed-aeaf-47cd-a4ea-fdf1667efea2; _gat=1; cto_bundle=3Tj6Hl93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWE5allVRUU2dlFOU1huayUyRjFTM0xYJTJCSzhsajNRRkF1Q2N2OU9JS1NlSjlxWmYzRTFqSzRuaSUyQjlacHNtYXFSRTV1UHZ1UE42djg4TUJuN05FaVdwTTR4c1hkSUlCRlY4WkJaSmd2WXhLc1NDdHRrRm44c25yeTIwMkRRRSUyQkhJalMlMkJBZ3YxZzZwck5VdTIwclNoMkRvbzglM0Q; cto_bundle=3YOlHV93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeVhBUGgzakxaV0xpZTJpJTJCQ3ZDVDd6SyUyQmJsdmxXcW8lMkZtZkZoMVlNNlJ4SU0xaUVxZXg0eGptZU1oZU4xOHIlMkZaamxlY3gwYnJ1ZSUyQkpVVTUyV2p0cm9PNkFRNEl3ZVBoaUtNSmpnNWRjeWtrWktoYTIzV1ZUdEJ6bFZDTWtCSDV4UWdWV2JPbGZJMzBzM2lxaVVRanNWSkElM0Q; cto_bidid=19sjyV9TQVBXTlA4SGwxYUt5Z0JqVFlHUSUyRk1QZ3Vwa1BaUGZubk1meUVmYSUyQmRSSzBUTkdGQiUyQll0bThNbWVGbjVxV293a2RDUVEzNTFvdVZxR09vaWxSWlE4a2lKTVQwYnp3JTJGV05GV0g2UUxWMnc5N2RJWG1NZGtKVWdiRm1WYXNqU0Ey',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    }).text();
    const $ = cheerio.load(resToken);
    const payload = {
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
        tweet: url
    };
    const res = await got
        .post('https://twittervideodownloader.com/download', {
            form: payload,
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'content-type': 'application/x-www-form-urlencoded',
                cookie: 'csrftoken=au5r4nZ6uN48szGKtaEYp4sh4hBWSbL72M7LggD0nPUh8JGajAI403UIpWhrc5dU; _ga=GA1.2.1240680676.1641628632; _gid=GA1.2.414203301.1641628632; __qca=P0-603222438-1641628633090; _pbjs_userid_consent_data=6683316680106290; _pubcid=529c1986-42d2-4dec-a0e8-3a7d7c453add; __gads=ID=c7fcfc8de61626ad:T=1641628636:S=ALNI_MaE6t3k60TjxfxOEU_7fiYOKTdg8Q; session_id=6831c9ed-aeaf-47cd-a4ea-fdf1667efea2; cto_bundle=3Tj6Hl93WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWE5allVRUU2dlFOU1huayUyRjFTM0xYJTJCSzhsajNRRkF1Q2N2OU9JS1NlSjlxWmYzRTFqSzRuaSUyQjlacHNtYXFSRTV1UHZ1UE42djg4TUJuN05FaVdwTTR4c1hkSUlCRlY4WkJaSmd2WXhLc1NDdHRrRm44c25yeTIwMkRRRSUyQkhJalMlMkJBZ3YxZzZwck5VdTIwclNoMkRvbzglM0Q; cto_bundle=ZKGKs193WmQzcHglMkJDRmdjWnFTYWg1ZHpLeWF0Z3V5SVY2JTJGTDNCd3A1MHVWVmJMWCUyQjdLTHh2MGZjRzh3ZU5CdWs4TEJyWTNmN2IlMkZuUCUyQiUyRlBDazBORUZIM2d3d0NUR2E3VWh6bmhxNzNDMm9mQUtnTVNPMjBiOUxpSXNXZGoydGxlZjB0YTZIbkNCeU91NnZ2Y0xUJTJGV0ppYkJ0JTJCZlIxYW8yNXBGRXdLaG1Za3RWZzJrJTNE; cto_bidid=U6ndml9TQVBXTlA4SGwxYUt5Z0JqVFlHUSUyRk1QZ3Vwa1BaUGZubk1meUVmYSUyQmRSSzBUTkdGQiUyQll0bThNbWVGbjVxV293a2RDUVEzNTFvdVZxR09vaWxSWlE4a2lKTVQwYnp3JTJGV05GV0g2UUxWMnc5VkJXSFlsN2x6cExKb3pPQTAzWEZZ',
                origin: 'https://twittervideodownloader.com',
                referer: 'https://twittervideodownloader.com/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
            }
        })
        .text();
    const results = [];
    const $$ = cheerio.load(res);
    $$('div.row.body-container > div > center > div.row').each(function() {
        var _a, _b;
        const el = $(this).find('div');
        const _quality = el.eq(1).find('p').text().split(':');
        const quality = (_a = _quality === null || _quality === void 0 ? void 0 : _quality[0]) === null || _a === void 0 ? void 0 : _a.trim();
        const type = (_b = _quality === null || _quality === void 0 ? void 0 : _quality[1]) === null || _b === void 0 ? void 0 : _b.trim();
        const url = el.eq(0).find('a[download]').attr('href');
        results.push({
            quality,
            type,
            url
        });
    });
    return results;
}
async function instagramdl(url) {
    var _a, _b, _c;
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
        throw 'Invalid url!!';
    }
    const data = await got
        .post('https://snapinsta.app/action.php', {
            form: {
                url: encodeURI(url),
                action: 'post'
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                origin: 'https://snapinsta.app',
                referer: 'https://snapinsta.app/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
            }
        })
        .text();
    const params = (_a = data.split('))</script>')[0]
        .split('decodeURIComponent(escape(r))}(')[1]) === null || _a === void 0 ? void 0 : _a.split(',').map(v => v.replace(/^"/, '')
        .replace(/"$/, '').trim());
    if (!Array.isArray(params) || params.length !== 6)
        throw `Can't parse decode parameters!\n${data}`;
    const decode = decodeSnapApp(...params);
    const html = (_c = (_b = decode === null || decode === void 0 ? void 0 : decode.split('("div_download").innerHTML = "')) === null || _b === void 0 ? void 0 : _b[1].split('"; parent.document.getElementById("hero-section").remove();')[0].split('</style> <section class=')[1].split('"> ')[1]) === null || _c === void 0 ? void 0 : _c.split(' </section> ')[0].replace(/\\(\\)?/g, '');
    const $ = cheerio.load(html);
    const results = [];
    $('.row.download-box > div.col-md-4').each(function() {
        let thumbnail = $(this)
            .find('.download-items__thumb > img[src]')
            .attr('src');
        if (!/https?:\/\//i.test(thumbnail))
            thumbnail = 'https://snapinsta.app' + thumbnail;
        let url = $(this).find('.download-items__btn > a[href]').attr('href');
        if (!/https?:\/\//i.test(url || '')) {
            url = encodeURI('https://snapinsta.app' + url);
        }
        if (url)
            results.push({
                thumbnail,
                url
            });
    });
    if (!results.length)
        throw `Can't download!\n${decode}`;
    return results;
}
async function instagramdlv2(url) {
    if (!/https?:\/\/www\.instagram\.com\/(reel|tv|p)\//i.test(url)) {
        throw 'Invalid url!!';
    }
    const payload = {
        url: url,
        submit: ' '
    };
    const data = await got
        .post('https://downloadgram.org/', {
            form: payload,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                cookie: '_ga=GA1.2.654346005.1642149344; _gid=GA1.2.1562255413.1642149344; _gat_gtag_UA_142480840_1=1; __atuvc=1%7C2; __atuvs=61e135df10258fab000; __gads=ID=b4c9d2019034e5ed-227b64f3e5cf003a:T=1642149344:RT=1642149344:S=ALNI_MbtRULwcpAb_-lCLCSUPN5m5rd54A',
                origin: 'https://downloadgram.org',
                referer: 'https://downloadgram.org/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
            }
        })
        .text();
    const $ = cheerio.load(data);
    let results = [];
    if ($('#downloadBox > a').length) {
        const temp = [];
        $('#downloadBox > video').each(function(i) {
            const thumbnail = $(this).attr('poster');
            const sourceUrl = $(this).find('source[src]').attr('src');
            if (thumbnail) {
                temp.push({
                    thumbnail,
                    sourceUrl,
                    index: i
                });
            }
        });
        $('#downloadBox > img').each(function(i) {
            const j = temp.findIndex(({
                index
            }) => index === i);
            const thumbnail = $(this).attr('src');
            if (thumbnail) {
                if (j !== -1)
                    temp[j].thumbnail = thumbnail;
                else
                    temp.push({
                        thumbnail,
                        index: i
                    });
            }
        });
        $('#downloadBox > a').each(function(i) {
            const j = temp.findIndex(({
                index
            }) => index === i);
            const url = $(this).attr('href');
            if (j !== -1)
                temp[j].url = url;
            else
                temp.push({
                    url,
                    index: i
                });
        });
        results = temp.map((tmp) => ({
            thumbnail: tmp.thumbnail,
            sourceUrl: tmp.sourceUrl,
            url: tmp.url
        }));
    }
    if (!results.length)
        throw `Can't download!\n${$.html()}`;
    return results;
}
async function instagramdlv3(url) {
    const payload = {
        link: url,
        submit: ''
    };
    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://instasave.website',
        referer: 'https://instasave.website/',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    };
    const body = await got('https://instasave.website/', {
        form: payload,
        method: 'POST',
        headers: headers
    }).catch(async (_) => await got('https://server.instasave.website/', {
        form: payload,
        method: 'POST',
        headers: {
            ...headers,
            origin: 'https://server.instasave.website',
            referer: 'https://server.instasave.website'
        }
    }));
    const $ = cheerio.load(body.body);
    let results = [];
    if ($('#downloadBox > a').length) {
        const temp = [];
        $('#downloadBox > video').each(function(i) {
            const thumbnail = $(this).attr('poster');
            const sourceUrl = $(this).find('source[src]').attr('src');
            if (thumbnail) {
                temp.push({
                    thumbnail,
                    sourceUrl,
                    index: i
                });
            }
        });
        $('#downloadBox > img').each(function(i) {
            const j = temp.findIndex(({
                index
            }) => index === i);
            const thumbnail = $(this).attr('src');
            if (thumbnail) {
                if (j !== -1)
                    temp[j].thumbnail = thumbnail;
                else
                    temp.push({
                        thumbnail,
                        index: i
                    });
            }
        });
        $('#downloadBox > a').each(function(i) {
            const j = temp.findIndex(({
                index
            }) => index === i);
            const url = $(this).attr('href');
            if (j !== -1)
                temp[j].url = url;
            else
                temp.push({
                    url,
                    index: i
                });
        });
        results = temp.map((tmp) => ({
            thumbnail: tmp.thumbnail,
            sourceUrl: tmp.sourceUrl,
            url: tmp.url
        }));
    }
    if (!results.length)
        throw `Can't download!\n${$.html()}`;
    return results;
}
async function instagramdlv4(url) {
    var _a, _b;
    const payload = {
        url: encodeURIComponent(url)
    };
    const data = await got('https://instadownloader.co/insta_downloader.php', {
        headers: {
            cookie: '_ga=GA1.2.1733350350.1642305936; __gads=ID=b4bd840227b997e8-22bf10a0f9cf00c8:T=1642305940:RT=1642305940:S=ALNI_MYAmf2IjxwGlzs5qXm4WFoP5pgocg; PHPSESSID=336eed35f823c84f35a580ae2f326934; _gid=GA1.2.1286454531.1646479747; _gat=1',
            referer: 'https://instadownloader.co/id/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        },
        searchParams: payload
    }).json();
    const json = JSON.parse(data);
    if (!(((_a = json.images_links) === null || _a === void 0 ? void 0 : _a.length) || ((_b = json.videos_links) === null || _b === void 0 ? void 0 : _b.length)))
        throw `Can't download!\n${JSON.stringify(json, null, 2)}`;
    return [
        ...json.images_links,
        ...json.videos_links
    ];
}
async function twitterdl(url) {
    if (!/https:\/\/twitter\.com\//i.test(url))
        throw 'URL invalid!';
    const payload = {
        url
    };
    const res = await got('https://www.expertsphp.com/instagram-reels-downloader.php', {
        method: 'POST',
        searchParams: new URLSearchParams(Object.entries(payload)),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.783835709.1637038175; __gads=ID=5b4991618655cd86-22e2c7aeadce00ae:T=1637038176:RT=1637038176:S=ALNI_MaCe3McPrVVswzBEqcQlgnVZXtZ1g; _gid=GA1.2.1817576486.1639614645; _gat_gtag_UA_120752274_1=1',
            origin: 'https://www.expertsphp.com',
            referer: 'https://www.expertsphp.com/twitter-video-downloader.html',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        }
    }).text();
    const $ = cheerio.load(res);
    const results = [];
    $('table.table > tbody > tr').each(function() {
        const quality = $(this).find('td').eq(2).find('strong').text();
        const type = $(this).find('td').eq(1).find('strong').text();
        const url = $(this).find('td').eq(0).find('a[href]').attr('href');
        const isVideo = /video/i.test(type);
        if (url) {
            results.push({
                quality,
                type,
                url,
                isVideo
            });
        }
    });
    return results;
}
async function facebookdl(url) {
    /* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
    const {
        data: {
            id,
            thumbnail,
            duration,
            a,
            av,
            v
        }
    } = await got('https://youtube4kdownloader.com/ajax/getLinks.php', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        },
        searchParams: {
            video: url,
            rand: randomBytes(13)
        }
    }).json();
    const result = (a || [])
        .concat(av)
        .concat(v)
        .map(({
            size,
            ext,
            url,
            quality,
            vcodec,
            fid
        }) => {
            const isVideo = ext === 'mp4';
            const isWebm = ext === 'webm';
            return {
                size,
                ext,
                url,
                quality,
                vcodec,
                fid,
                isVideo: isVideo || isWebm,
                isAudio: /audio/i.test(quality || '') || (isVideo && !isWebm)
            };
            // ext webm video without audio
        });
    if (!result.length)
        throw `Can't download!\n${JSON.stringify({ id, thumbnail, duration, a, av, v }, null, 2)}`;
    return {
        id,
        thumbnail,
        duration,
        result
    };
}
async function facebookdlv2(url) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const params = {
        url: encodeURI(url)
    };
    const res = await got
        .post('https://snapsave.app/action.php', {
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/x-www-form-urlencoded',
                origin: 'https://snapsave.app',
                referer: 'https://snapsave.app/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/96.0.4664.110 Safari/537.36'
            },
            form: params
        }).text();
    const decodeParams = (_b = (_a = res.split('))</script>')[0]
        .split('decodeURIComponent(escape(r))}(')[1]) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b.map(v => v.replace(/^"/, '')
        .replace(/"$/, '').trim());
    let html;
    if (!Array.isArray(decodeParams) || decodeParams.length !== 6)
        html = (_c = (typeof res === 'string' ? JSON.parse(res) : res)) === null || _c === void 0 ? void 0 : _c.data;
    else {
        const decode = decodeSnapApp(...decodeParams);
        html = (_j = (_h = (_g = (_f = (_e = (_d = decode === null || decode === void 0 ? void 0 : decode.split('("download-section").innerHTML = "')[1]) === null || _d === void 0 ? void 0 : _d.split('; parent.document.getElementById("inputData").remove();')[0]) === null || _e === void 0 ? void 0 : _e.split('</style><section class=')[1].split('"> ')) === null || _f === void 0 ? void 0 : _f.slice(1)) === null || _g === void 0 ? void 0 : _g.map(v => (v + '">').trim()).join()) === null || _h === void 0 ? void 0 : _h.split('</section><div class=')[0]) === null || _j === void 0 ? void 0 : _j.replace(/\\(\\)?/g, '');
    }
    if (!html)
        throw `Can't parse encode params!\n${res}`;
    const result = [];
    const $ = cheerio.load(html);
    $('table.table > tbody > tr').each(function() {
        var _a, _b;
        const el = $(this).find('td');
        if (/tidak|no/i.test(el.eq(1).text())) {
            const quality = (_b = (_a = el.eq(0).text().split('(')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.trim();
            const url = el.eq(2).find('a[href]').attr('href');
            if (url)
                result.push({
                    quality,
                    url
                });
        }
    });
    if (!result.length)
        throw `Can't download!\n${$.html()}`;
    return {
        id: ((_l = (_k = $('div.media-content > div.content > p > strong')
            .text()
            .split('#')) === null || _k === void 0 ? void 0 : _k[1]) === null || _l === void 0 ? void 0 : _l.trim()) || '',
        title: $('div.media-content > div.content > p > strong').text(),
        description: $('div.media-content > div.content > p > span.video-des').text(),
        thumbnail: $('figure > p.image > img[src]').attr('src'),
        result
    };
}
async function facebookdlv3(url) {
    var _a;
    const payload = {
        url
    };
    const text = await got('https://www.getfvid.com/downloader', {
        method: 'POST',
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            cookie: '_ga=GA1.2.887753826.1642391325; _gid=GA1.2.2022692773.1642391325; __gads=ID=4ea88e3817c8d71b-22332defffcf0045:T=1642391326:RT=1642391326:S=ALNI_MY3oJyiEG_b8KXZBJ7RqvN2Mn8wbw; XSRF-TOKEN=eyJpdiI6ImdNUElWWU83S01jOTdZeitCUWdkWXc9PSIsInZhbHVlIjoiTGxnaE9oRVJTKzA5NDBncUtBa0xEdCtqNHBJXC9ZMVFPR1U2RnBSYUFzZHltWElZS2VtVUltUTJ2TjB5V3pEeTYzRUNMcENjMURGSkhBXC9OUitpcjMrZz09IiwibWFjIjoiMTViZTNjZDI3ZTZmOTk2ZWRjOWM1NTA5MTU2NDFhYWFlMjIxNTQxZTJlYjliMjJiMzE3YzlkNGMxODc2NjhmMCJ9; laravel_session=eyJpdiI6IjhZbElIRmpLSkVqZGZpQXJoK2MzVHc9PSIsInZhbHVlIjoianBSSFhPb2t0RFY4Q1wvYkk1S3pxMUNxXC82b0U1NHZROTVpS1Z4dGhES3ZTYTNsenJUSXpwcWNMVDkwWFk4OUY1TitGNmlDK1RXbTVyREVzcHVoRnRidz09IiwibWFjIjoiY2U1YzI2ODZlYWI2NzFkZDU1NTQ5Zjk0M2NmMDc2MTZhY2M3ODQxYjljZGUzMDQwMTYxZGQwZGYxMDM3NDMyZSJ9; __cf_bm=ephRNXRqwgrTB4SmHlsudy886EfsR2Ns2KtXVBnph4I-1642392732-0-AXtTUW5HRNQUeUcTJPhJTOPlMcjBFmMyoLKYOnxrDZ6Fa06XaJ4pMNW9arLg4zco/ef+ji00IV8NZb0nGOAKgfg=; _gat=1; __atuvc=6%7C3; __atuvs=61e4e71d2b803588005; __atssc=google%3B3',
            origin: 'https://www.getfvid.com',
            referer: 'https://www.getfvid.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        },
        form: payload
    }).text();
    const $ = cheerio.load(text);
    const row = $('div.card > div.row > div');
    const thumbnail = (_a = /background-image: url\((.*?)\);/i.exec(row.eq(0).find('a[href]').attr('style'))) === null || _a === void 0 ? void 0 : _a[1];
    const result = [];
    row.find('.btns-download > p > a[href]').each(function() {
        var _a;
        const el = $(this);
        const url = el.attr('href');
        const info = el.text().trim();
        const isAudio = /audio/i.test(info);
        const quality = isAudio ? 'audio' : (_a = /Download in (\w+) Quality/i.exec(info)) === null || _a === void 0 ? void 0 : _a[1];
        const isVideo = quality !== 'audio';
        if (url) {
            result.push({
                url,
                quality,
                isAudio,
                isVideo
            });
        }
    });
    if (!result.length)
        throw `Can't download!\n${$.html()}`;
    return {
        title: $('#title_video').val(),
        thumbnail,
        result
    };
}
async function savefrom(url) {
    var _a, _b;
    let scriptJS = await got('https://worker.sf-tools.com/savefrom.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://id.savefrom.net',
            referer: 'https://id.savefrom.net/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
        },
        form: {
            sf_url: encodeURI(url),
            sf_submit: '',
            new: 2,
            lang: 'id',
            app: '',
            country: 'id',
            os: 'Windows',
            browser: 'Chrome',
            channel: ' main',
            'sf-nomad': 1
        }
    }).text();
    const executeCode = '[]["filter"]["constructor"](b).call(a);';
    if (scriptJS.indexOf(executeCode) === -1)
        throw `Cannot find execute code\n${scriptJS}`;
    scriptJS = scriptJS.replace(executeCode, `
try {
  i++;
  if (i === 2) scriptResult = ${executeCode.split('.call')[0]}.toString();
  else (
    ${executeCode.replace(/;/, '')}
    );
} catch {}
`);
    const context = {
        scriptResult: '',
        i: 0
    };
    vm.createContext(context);
    new vm.Script(scriptJS).runInContext(context);
    const json = JSON.parse((_b = (_a = context.scriptResult.split('window.parent.sf.videoResult.show(')) === null || _a === void 0 ? void 0 : _a[1].split(');')) === null || _b === void 0 ? void 0 : _b[0]);
    return json;
}
async function tiktokfyp() {
    const data = await got('https://t.tiktok.com/api/recommend/item_list/?aid=1988&app_name=tiktok_web&device_platform=web_pc&device_id=6982004129280116226&region=ID&priority_region=&os=windows&referer=&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F96.0.4664.93+Safari%2F537.36&browser_online=true&verifyFp=verify_kx30laei_YkR2lQiI_UBWz_4MZK_ACKV_loiPDs4PyDtw&app_language=en&timezone_name=Asia%2FJakarta&is_page_visible=true&focus_state=true&is_fullscreen=false&history_len=2&battery_info=%7B%7D&count=30&itemID=1&language=en&from_page=fyp&insertedItemID=&versions=70232694,70338434,70001178,70138197,70156809&msToken=Wi63JD_P7xxD_7pFmaF_UcHM6oJwSKjR9wnfsMUaDdz51KLZ3J8tazDrcY2gh_t3PyG_5926qyw8g7DhrgFa3mbDmxLhzmLs_3l_sOk4zf6TdMqfAT51s_n8ZPG8vovv76h1kCkR&X-Bogus=DFSzswVOAxxANJf/SEhC1eM/W7oh&_signature=').json();
    return data.itemList || [];
}
async function nomorhoki(nomer) {
    var _a, _b, _c, _d;
    const config = {
        nomer: encodeURIComponent(nomer),
        submit: '+Submit!+'
    };
    const data = await got
        .post('https://www.primbon.com/no_hoki_bagua_shuzi.php', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            form: config
        })
        .text();
    const results = data
        .split('</b><br></td></tr><tr><td')[0]
        .split(`<br><b>No. HP : ${nomer}</b><br>`)[1];
    const angka_bagua_shuzi = parseInt((_b = (_a = results === null || results === void 0 ? void 0 : results.split('Angka Bagua Shuzi :')[1]) === null || _a === void 0 ? void 0 : _a.split('</b><br><br>')[0]) === null || _b === void 0 ? void 0 : _b.replace(/&#37/gi, ''));
    if (!angka_bagua_shuzi)
        throw `Can't get data, maybe your number(${nomer}) invalid!`;
    const kekayaan = parseInt(results.split('Kekayaan =')[1].split('<br>')[0]);
    const kesehatan = parseInt(results.split('Kesehatan =')[1].split('<br>')[0]);
    const cinta = parseInt(results.split('Cinta/Relasi =')[1].split('<br>')[0]);
    const kestabilan = parseInt(results.split('Kestabilan =')[1].split('<br>')[0]);
    const positif = parseInt((_c = results
        .split('</b><br></td><td><!-- space -->')[0]
        .split('b>% = ')[1]) === null || _c === void 0 ? void 0 : _c.replace(/&#37/gi, ''));
    const perselisihan = parseInt(results.split('Perselisihan =')[1].split('<br>')[0]);
    const kehilangan = parseInt(results.split('Kehilangan =')[1].split('<br>')[0]);
    const malapetaka = parseInt(results.split('Malapetaka =')[1].split('<br>')[0]);
    const Kehancuran = parseInt(results.split('Kehancuran =')[1].split('<br>')[0]);
    const negatif = parseInt((_d = results.split('Kehancuran =')[1].split('<b>% =')[1]) === null || _d === void 0 ? void 0 : _d.replace(/&#37/gi, ''));
    return {
        nomer: nomer,
        angka_bagua_shuzi,
        positif: {
            kekayaan,
            kesehatan,
            cinta,
            kestabilan,
            positif
        },
        negatif: {
            perselisihan,
            kehilangan,
            malapetaka,
            Kehancuran,
            negatif
        }
    };
}

function getZodiac(months, dates) {
    var _a;
    // https://github.com/Nurutomo/wabot-aq/blob/master/plugins/zodiac.js
    const d = new Date(1970, months - 1, dates + 1);
    // https://www.primbon.com/zodiak.htm
    const zodiac = [
        ['capricorn', new Date(1970, 0, 21)],
        ['aquarius', new Date(1970, 1, 20)],
        ['pisces', new Date(1970, 2, 21)],
        ['aries', new Date(1970, 3, 20)],
        ['taurus', new Date(1970, 4, 21)],
        ['gemini', new Date(1970, 5, 22)],
        ['cancer', new Date(1970, 6, 23)],
        ['leo', new Date(1970, 7, 24)],
        ['virgo', new Date(1970, 8, 23)],
        ['libra', new Date(1970, 9, 24)],
        ['scorpio', new Date(1970, 10, 23)],
        ['sagitarius', new Date(1970, 11, 22)] // SAGITARIUS (23 November - 21 Desember)
    ];
    return (_a = zodiac.find(([_, _d]) => _d >= d)) === null || _a === void 0 ? void 0 : _a[0];
}
async function artinama(nama) {
    var _a, _b, _c;
    const data = await got(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`).text();
    const results = (_c = (_b = (_a = data
        .split('<h1>ARTI NAMA</h1><br>')[1]) === null || _a === void 0 ? void 0 : _a.split('<TABLE>')[0]) === null || _b === void 0 ? void 0 : _b.replace(/<(\/)?(h1|br|i|b)>/gim, '')) === null || _c === void 0 ? void 0 : _c.trim();
    return results || '';
}
async function artimimpi(mimpi) {
    var _a, _b, _c, _d, _e;
    const data = await got(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`).text();
    const results = (_e = (_d = (_c = (_b = (_a = data
        .split('</i></b><br><br>')[1]) === null || _a === void 0 ? void 0 : _a.split('<!-- AWAL IN-ARTICLE ADV -->')[0]) === null || _b === void 0 ? void 0 : _b.replace(/<(\/)?font( color=#ff0000)?>/gi, '')) === null || _c === void 0 ? void 0 : _c.trim()) === null || _d === void 0 ? void 0 : _d.split('<br><br>')) === null || _e === void 0 ? void 0 : _e.filter((v) => v);
    return results || [];
}
async function bioskopNow() {
    const url = 'https://jadwalnonton.com/now-playing/';
    const response = await got(url, {
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            Host: 'jadwalnonton.com',
            Referer: 'https://jadwalnonton.com/now-playing/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        }
    }).text();
    const results = [];
    const $ = cheerio.load(response);
    $('div.row > div.item.movie').each((_, el) => {
        const $el = $(el);
        const title = $el.find('h2 > a').text();
        const img = $el.find('img.poster').attr('src');
        const url = $el.find('a.mojadwal').attr('href');
        const $span = $el.find('div > span.moket');
        const genre = $span.eq(0).text();
        const duration = $span.eq(1).text();
        const playingAt = ($el.find('div > i.icon').attr('class') || '').replace(/icon/, '').trim();
        if (title && url) {
            results.push({
                title,
                img,
                url,
                genre,
                duration,
                playingAt
            });
        }
    });
    return results;
}
async function bioskop(page = 1) {
    page = Math.min(4, Math.max(1, parseInt(page)));
    const response = await got(`https://jadwalnonton.com/comingsoon/?page=${page}`, {
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            Host: 'jadwalnonton.com',
            Referer: 'https://jadwalnonton.com/comingsoon/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        }
    }).text();
    const results = [];
    const $ = cheerio.load(response);
    $('div.row > div.item.movie').each((_, el) => {
        const $el = $(el);
        const title = $el.find('h2 > a').text();
        const img = $el.find('img.poster').attr('src');
        const url = $el.find('a.mojadwal').attr('href');
        const $span = $el.find('div.rowl > div > span');
        const genre = $span.eq(0).text();
        const duration = $span.eq(1).text();
        const release = $span.eq(2).text();
        const director = $span.eq(4).text();
        const cast = $span.eq(6).text();
        if (title && url) {
            results.push({
                title,
                img,
                url,
                genre,
                duration,
                release,
                director,
                cast
            });
        }
    });
    return results;
}
async function gempa() {
    const html = await got('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.table-responsive > table.table > tbody > tr').each(function() {
        const el = $(this).find('td');
        const date = el.eq(1).text().trim();
        const locate = el.eq(2).text().trim();
        const magnitude = el.eq(3).text().trim();
        const depth = el.eq(4).text().trim();
        const location = el.eq(5).find('a').text().trim();
        const warning = el.eq(5).find('span.label').map(function() {
            return $(this).text().trim();
        }).toArray();
        results.push({
            date,
            locate,
            magnitude,
            depth,
            location,
            warning
        });
    });
    return results;
}
async function gempaNow() {
    const html = await got('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.table-responsive > table.table > tbody > tr').each(function() {
        const el = $(this).find('td');
        const date = el.eq(1).text().trim();
        const latitude = el.eq(2).text().trim();
        const longitude = el.eq(3).text().trim();
        const magnitude = el.eq(4).text().trim();
        const depth = el.eq(5).text().trim();
        const location = el.eq(6).text().trim();
        results.push({
            date,
            latitude,
            longitude,
            magnitude,
            depth,
            location
        });
    });
    return results;
}
async function tsunami() {
    const html = await got('https://www.bmkg.go.id/tsunami/').text();
    const $ = cheerio.load(html);
    const results = [];
    $('div.row > div > table.table > tbody > tr').each(function() {
        const el = $(this).find('td');
        const date = el.eq(0).text().trim();
        const locate = el.eq(1).text().trim();
        const magnitude = el.eq(2).text().trim();
        const depth = el.eq(3).text().trim();
        const location = el.eq(4).text().trim();
        results.push({
            date,
            locate,
            magnitude,
            depth,
            location
        });
    });
    return results;
}
async function kbbi(words) {
    const html = await got(`https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(words)}`).text();
    const $ = cheerio.load(html);
    const isExist = !/tidak ditemukan/i.test($('body > div.container.body-content > h4[style="color:red"]').text());
    if (!isExist)
        throw `${words} does not exist!`;
    const results = [];
    let isContent = false;
    let lastTitle;
    $('body > div.container.body-content').children().each((_, el) => {
        const tag = el.tagName;
        const elem = $(el);
        if (tag === 'hr')
            isContent = !isContent && !Object.keys(results).length;
        if (tag === 'h2' && isContent) {
            const index = elem.find('sup').text().trim();
            const title = elem.text().trim();
            results.push({
                index: parseInt(index),
                title,
                means: []
            });
            lastTitle = title;
        }
        if ((tag === 'ol' || tag === 'ul') && isContent && lastTitle) {
            elem.find('li').each((_, el) => {
                const li = $(el).text().trim();
                const index = results.findIndex(({
                    title
                }) => title === lastTitle);
                if (index !== -1)
                    results[index].means.push(li);
                else
                    console.log(li, lastTitle);
            });
            lastTitle = '';
        }
    });
    return results;
}
async function lyrics(query) {
    const data = await got(`https://www.musixmatch.com/search/${encodeURIComponent(query)}`).text();
    const $ = cheerio.load(data);
    const results = [];
    $('#search-all-results > div.main-panel > div:nth-child(2) > div.box-content > div > ul.tracks.list > li.showArtist.showCoverart').each(function() {
        var _a;
        const el = (_a = $(this).find('meta[itemprop="url"]').attr('content')) === null || _a === void 0 ? void 0 : _a.trim();
        if (el) {
            results.push({
                link: 'https://www.musixmatch.com' + el,
                title: $(this).find('.media-card-title > a > span').text().trim(),
                author: $(this).find('.artist-field > span > a.artist').text().trim()
            });
        }
    });
    if (!results.length)
        throw `Can't get lyrics!\n${$.html()}`;
    const {
        link,
        title,
        author
    } = results[0];
    const html = await got(link).text();
    const $$ = cheerio.load(html);
    return {
        title,
        author,
        lyrics: $$('p.mxm-lyrics__content > span.lyrics__content__ok').map((_, el) => $$(el).text().trim()).toArray().filter(v => v).join('\n'),
        link
    };
}
async function lyricsv2(query) {
    var _a, _b;
    const data = await got(`https://genius.com/api/search/multi?per_page=5&q=${encodeURIComponent(query)}`, {
        headers: {
            accept: 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
        }
    }).json();
    // @ts-ignore
    const result = (_b = (_a = data.response.sections.find((section) => {
        var _a;
        return ['song', 'lyric'].includes(section.type) &&
            ((_a = section.hits) === null || _a === void 0 ? void 0 : _a.find((hit) => ['song', 'lyric'].includes(hit.type)));
    }).hits) === null || _a === void 0 ? void 0 : _a.find((hit) => ['song', 'lyric'].includes(hit.type))) === null || _b === void 0 ? void 0 : _b.result;
    if (!result)
        throw `Can't get json!\n${JSON.stringify(data)}`;
    const {
        artist_names,
        title,
        url
    } = result;
    if (!url)
        throw `Can't get lyrics!\n${JSON.stringify(data, null, 2)}`;
    const html = await got(url).text();
    const $ = cheerio.load(html);
    let results = '';
    $('#lyrics-root > div[data-lyrics-container="true"]').each((_, el) => {
        const element = $(($(el).html() || '').replace(/<br>/g, '\n')).text().trim();
        if (element)
            results += element;
    });
    return {
        title,
        author: artist_names,
        lyrics: results.trim(),
        link: url
    };
}
async function mediafiredl(url) {
    var _a, _b;
    if (!/https?:\/\/(www\.)?mediafire\.com/.test(url))
        throw new Error('Invalid URL: ' + url);
    const data = await got(url).text();
    const $ = cheerio.load(data);
    const Url = ($('#downloadButton').attr('href') || '').trim();
    const url2 = ($('#download_link > a.retry').attr('href') || '').trim();
    const $intro = $('div.dl-info > div.intro');
    const filename = $intro.find('div.filename').text().trim();
    const filetype = $intro.find('div.filetype > span').eq(0).text().trim();
    const ext = ((_b = (_a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.trim()) || 'bin';
    const $li = $('div.dl-info > ul.details > li');
    const aploud = $li.eq(1).find('span').text().trim();
    const filesizeH = $li.eq(0).find('span').text().trim();
    const filesize = parseFloat(filesizeH) * (/GB/i.test(filesizeH) ?
        1000000 :
        /MB/i.test(filesizeH) ?
        1000 :
        /KB/i.test(filesizeH) ?
        1 :
        /B/i.test(filesizeH) ?
        0.1 :
        0);
    return {
        url: Url,
        url2,
        filename,
        filetype,
        ext,
        aploud,
        filesizeH,
        filesize
    };
}
async function wallpaper(query) {
    const data = await got(`https://www.shutterstock.com/search/${query}`, {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8',
            // cookie: '_csrf=DLixL776iH1Yv7Ck9wHekk24; _ga=GA1.2.1481444664.1639216586; _gid=GA1.2.348540858.1639216586; _gat=1; _hjFirstSeen=1; _hjSession_2571802=eyJpZCI6ImVkZDUzMWJhLWNjYTgtNDgyMy1hZmUyLWVjNmFhNWMxZjg3ZCIsImNyZWF0ZWQiOjE2MzkyMTY1ODY0Nzl9; _hjAbsoluteSessionInProgress=0; _hjSessionUser_2571802=eyJpZCI6IjIxZGNhYTc5LWRlMTgtNWE5Ni05ZWE2LTdkYjg4NGZhNjIxMSIsImNyZWF0ZWQiOjE2MzkyMTY1ODYyNDMsImV4aXN0aW5nIjp0cnVlfQ==',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        }
    }).text();
    const $ = cheerio.load(data);
    const results = [
        ...new Set([
                ...$.html().matchAll(/https?:\/\/(image|www)\.shutterstock\.com\/([^"]+)/gim)
            ]
            .map((v) => v[0])
            .filter((v) => /.*\.jpe?g|png$/gi.test(v)))
    ];
    return results;
}
async function wallpaperv2(query, {
    page,
    is4K
} = {
    page: 1
}) {
    page = page < 2 ? 2 : page;
    const data = await got(`https://wall.alphacoders.com/by_category.php?id=3&name=${encodeURIComponent(query).replace(/%20/g, '+')}&quickload=50&page=${page}${is4K ? '&filter=4K+Ultra+HD' : ''}`).text();
    const $ = cheerio.load(data);
    const results = [];
    $('div.thumb-container-big').each(function() {
        const img = $(this).find('picture > img').attr('src');
        if (img)
            results.push(img);
    });
    return results;
}
async function wallpaperv3(query, page = 1) {
    const html = await got(`https://www.hdwallpapers.in/search/page/${page}?q=${encodeURIComponent(query)}`).text();
    const results = [];
    const $ = cheerio.load(html);
    $('#content > div.page-content.wallpaper > ul > li.wall').each(function() {
        const img = $(this).find('a > img[src]').attr('src');
        if (img)
            results.push('https://www.hdwallpapers.in' + img);
    });
    return results;
}
export default {
    pinterest,
    pinterestdl,
    tiktokdl,
    tiktokdlv2,
    twitterdl,
    twitterdlv2,
    instagramdl,
    instagramdlv2,
    instagramdlv3,
    instagramdlv4,
    facebookdl,
    facebookdlv2,
    savefrom,
    tiktokfyp,
    nomorhoki,
    getZodiac,
    artinama,
    artimimpi,
    bioskopNow,
    bioskop,
    gempa,
    gempaNow,
    tsunami,
    kbbi,
    lyrics,
    lyricsv2,
    mediafiredl,
    wallpaper,
    wallpaperv2,
    wallpaperv3
}