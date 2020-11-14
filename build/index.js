"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var matches = new CsvFileReader_1.CsvFileReader('football.csv');
matches.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var calculateWins = function (teamName, matches) {
    var wins = 0;
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        if (match[1] === teamName && match[5] === MatchResult.HomeWin)
            wins++;
        else if (match[2] === teamName && match[5] === MatchResult.AwayWin)
            wins++;
    }
    console.log(teamName + " wins: " + wins);
};
calculateWins('Cardiff', matches.data);
