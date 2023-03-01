/*
DOBDA MADE BY AMELIA
*/

//-- MODULE EXTERNAL
import { watchFile, unwatchFile, fchmod } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import translate from 'translate-google';
import chr from 'cheerio';
import fetch from 'node-fetch';
import axy from 'axios';
import path from 'path';
import fs from 'fs';
import mmt from 'moment-timezone';
import rq from 'request';
import osuu from 'node-os-utils';
import oss from 'os';
import dehan from 'dhn-api';
import yuzu from 'yuzzu-api';
import * as bochil from '@bochilteam/scraper';
import hxz from 'hxz-api';
import xfarr from 'xfarr-api';
//global.os = oss
//global.osu = osuu
//global.chalk = clk
//global.tr = translate
//global.cheerio = chr
//global.fetch = ftc
//global.axios = axy
//global.path = pth
//global.fs = fss
//global.moment = mmt
//global.request = rq
//global.dhn = dehan
//global.yuz = yuzu
//global.bo = bochil
//global.hx = hxz
//global.far = xfarr

//-- BROWSER SESSION
global.desc = `Made by XYZ Team`;
global.browser = `Firefox`;

//-- TELEGRAM OWNER
global.botToken = '958546983:AAHUu0gQrEBNIwtC-wsV8Y76j1r0mxp-nxM';
global.channel = '1001574733973';
global.idTel = '992090275';

//-- BOT
global.name = `dotZBOT`;
global.call = '6285238543351';
global.tweb = `CHAT ME`;
global.web = `https://amrulizwan.com`;
global.tcal = `CALL ME`;
global.ig = 'https://instagram.com/amrulizwan_';
global.wm = '© dotZBOT';
global.swr = web;
global.multiplier = 69;
global.waid = '0@s.whatsapp.net';
global.stts = 'status@broadcast';
//global.img = 'https://telegra.ph/file/c862b51d1c66c38d0f14b.jpg'
global.img = 'https://telegra.ph/file/aa4965eb0caeb011cc7b0.jpg';
global.readMore = String.fromCharCode(8206).repeat(4001);

//-- WM STIKER
global.packname = `follow ig @amruliizwan_`;
global.author = '';

//-- LIST OWNER
global.owner = [
  ['6281358919342', 'Amirul Dev', true, 'Admin', 'amirul@skyn.tech', 'https://amiruldev.my.id', 'Developer Bot'],
  ['6285238543351', 'Amrul Izwan', true, 'Admin', 'me@amrulizwan.com', 'https://amrulizwan.com', 'Developer Bot'],
];

//-- LIST MODERATOR & PREMIUM USERS
global.mods = JSON.parse(fs.readFileSync('./src/mods.json'));
//global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))

global.APIs = {
  // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
};
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
};

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳︄1�7',
      legendary: '🗃︄1�7',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸︄1�7',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚',
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, 'gi')])
      .filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  },
};
global.mtypee = [
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/pdf',
];

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
