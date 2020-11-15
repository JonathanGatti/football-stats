import { MatchReader } from './MatchReader';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// const reader = new MatchReader('football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader)
matchReader.load()


const calculateWins = (teamName: string, matches: MatchData[]): void => {
  let wins = 0;
  for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.HomeWin) wins++;
    else if (match[2] === teamName && match[5] === MatchResult.AwayWin) wins ++;
  }
  console.log(`${teamName} wins: ${wins}`)
}

calculateWins('Arsenal', matchReader.matches)

