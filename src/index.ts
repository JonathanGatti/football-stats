import { MatchReader } from './MatchReader';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const arsenal = new WinsAnalysis('Arsenal');
