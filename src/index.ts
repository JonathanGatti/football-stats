import { match } from 'assert';
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
});

const array = matches.split('\n').map(match => match.split(','))

