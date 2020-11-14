import { CsvFileReader } from './CsvFileReader';

const matches = new CsvFileReader('football.csv');
matches.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const calculateWins = (teamName: string, matches: string[][]): void => {
  let wins = 0;
  for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.HomeWin) wins++;
    else if (match[2] === teamName && match[5] === MatchResult.AwayWin) wins ++;
  }
  console.log(`${teamName} wins: ${wins}`)
}

calculateWins('Cardiff', matches.data)

