// node CrickinfoExtracter.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results 
//ICC Cricket World Cup - Cricket Schedules, Updates, Results | ESPNcricinfo.com
let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path")


let args = minimist(process.argv);
//console.log(args.excel);

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function (response) {
    let html = response.data;
    //console.log(html);

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    console.log(document.title);
})