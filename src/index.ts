import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

const calculateWins = (teamName: string, matches: string[][]): void => {
  let wins = 0;
  for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.HomeWin) wins++;
    else if (match[2] === teamName && match[5] === MatchResult.AwayWin) wins ++;
  }
  console.log(`${teamName} wins: ${wins}`)
}

calculateWins('Cardiff', reader.data)

