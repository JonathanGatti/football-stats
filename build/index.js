"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// const reader = new MatchReader('football.csv');
// reader.read();
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var calculateWins = function (teamName, matches) {
    var wins = 0;
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        if (match[1] === teamName && match[5] === MatchResult_1.MatchResult.HomeWin)
            wins++;
        else if (match[2] === teamName && match[5] === MatchResult_1.MatchResult.AwayWin)
            wins++;
    }
    console.log(teamName + " wins: " + wins);
};
calculateWins('Arsenal', matchReader.matches);
