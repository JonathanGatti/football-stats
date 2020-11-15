import { MatchReader, MatchData } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

const calculateWins = (teamName: string, matches: MatchData[]): void => {
  let wins = 0;
  for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.HomeWin) wins++;
    else if (match[2] === teamName && match[5] === MatchResult.AwayWin) wins ++;
  }
  console.log(`${teamName} wins: ${wins}`)
}

calculateWins('Arsenal', reader.data)

