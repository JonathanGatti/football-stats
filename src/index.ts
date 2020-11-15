import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReports } from './reports/HtmlReports';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReports()
)

summary.buildAndPrintReport(matchReader.matches)