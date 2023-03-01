function mathRandom(x) {
    return x[Math.floor(x.length * Math.random())]
}

function fetchRandomJson(url, options) {
    return new Promise(async (resolve, reject) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                const json = JSON.parse(JSON.stringify(res))
                const index = Math.floor(Math.random() * json.length)
                const random = json[index]
                resolve(random)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function emojiStringToArray(str) {
        var spl = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
        var arr = [];
        for (var i = 0; i < spl.length; i++) {
            var char = spl[i]
            if (char !== "") {
                arr.push(char);
            }
        }
        return arr;
    };
function msToDate(ms) {
    var temp = ms
    var days = Math.floor(ms / (24 * 60 * 60 * 1000));
    var daysms = ms % (24 * 60 * 60 * 1000);
    var hours = Math.floor((daysms) / (60 * 60 * 1000));
    var hoursms = ms % (60 * 60 * 1000);
    var minutes = Math.floor((hoursms) / (60 * 1000));
    var minutesms = ms % (60 * 1000);
    var sec = Math.floor((minutesms) / (1000));
    return days + " D " + hours + " H " + minutes + " M";
    // +minutes+":"+sec;
}
const isNumber = x => typeof x === 'number' && !isNaN(x)
var delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function() {
    clearTimeout(this)
    resolve()
}, ms))
export default {
    mathRandom,
    fetchRandomJson,
    clockString,
    emojiStringToArray,
    msToDate: msToDate,
    delay: delay
}