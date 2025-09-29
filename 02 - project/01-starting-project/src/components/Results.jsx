import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({input}){
    let resultsData = calculateInvestmentResults(input);
    let initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment * resultsData[0].year;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                let totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                let investedCapital = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(investedCapital)}</td>
                </tr>
            })}
        </tbody>
    </table>
}