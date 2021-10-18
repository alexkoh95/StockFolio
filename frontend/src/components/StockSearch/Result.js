import React, { useState, useEffect } from "react";

const Result = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [stockData, setStockData] = useState("");
  const [companyData, setCompanyData] = useState("");
  const APIKEY = props.APIKEY;
  const search = props.searchTerm;
  const stockResults = [];
  const companyResults = [];
  const [toggle, setToggle] = useState(false);
  const axios = require("axios");

  // =====================================================
  //                        API CALLS
  // =====================================================

  const fetchStockAPI = async (search) => {
    const stockAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${search}&apikey=${APIKEY}`;
    try {
      const response = await axios.get(stockAPI);
      console.log(response);
      await setStockData(response);
      console.log(stockData);
    } catch (error) {
      console.log("Error in stockAPI: ", error);
    }
  };

  const fetchCompanyOverviewAPI = async (search) => {
    const companyOverviewAPI = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search}&apikey=${APIKEY}`;
    try {
      const response = await axios.get(companyOverviewAPI);
      console.log(response);
      await setCompanyData(response);
      console.log(companyData);
    } catch (error) {
      console.log("Error in companyOverviewAPI: ", error);
    }
  };

  useEffect(() => {
    fetchStockAPI("IBM");
    fetchCompanyOverviewAPI("IBM");
  }, []);

  // =====================================================
  //                     DISPLAY STOCK DATA
  // =====================================================

  for (const key in stockData["data"]["Global Quote"]) {
    stockResults.push(`${stockData["data"]["Global Quote"][key]}`);
    // console.log(stockResults);
    // console.log(stockData["data"]["Time Series (Daily)"]);
  }
  //   console.log(stockResults);

  for (const key in companyData["data"]) {
    companyResults.push(`${companyData["data"][key]}`);
  }
  //   console.log(companyResults);

  let displayedStockResults = [
    {
      name: companyResults[2],
      equityType: companyResults[1],
      symbol: companyResults[0],
      price: stockResults[4],
      sector: companyResults[8],
      industry: companyResults[9],
      description: companyResults[3],
      fiftyDayMovingAverage: companyResults[41],
      oneYearHigh: companyResults[39],
      oneYearLow: companyResults[40],
      analystTargetPrice: companyResults[31],
    },
  ];

  //   console.log(displayedStockResults);
  let displayedStockResults2 = displayedStockResults?.map((element, index) => {
    return (
      <div>
        <div className="grid grid-cols-4 flex py-3 m-4 bg-white bg-opacity-40 shadow-lg rounded-lg ">
          <div className="my-auto capitalize text-lg font-bold">
            {element.name}
            <br />
          </div>
        </div>
        <div className="text-xs text-left my-auto leading-3 ">
          Equity Type: <span className="text-bold">{element.equityType}</span>
          <br />
          Symbol: <span className="text-bold">{element.symbol}</span>
          <br />
          Price: <span className="text-bold">{element.price}</span>
          <br />
          Sector: <span className="text-bold">{element.sector}</span>
          <br />
          Industry: <span className="text-bold">{element.industry}</span>
          <br />
          50 Day Moving Average:{" "}
          <span className="text-bold">{element.fiftyDayMovingAverage}</span>
          <br />
          52 Week High: <span className="text-bold">{element.oneYearHigh}</span>
          <br />
          52 Week Low: <span className="text-bold">{element.oneYearLow}</span>
          <br />
          Analyst Target Price:{" "}
          <span className="text-bold">{element.analystTargetPrice}</span>
          <br />
          description: <span className="text-bold">{element.description}</span>
          <br />
        </div>
      </div>
    );
  });

  return <div>{displayedStockResults2}</div>;
};

export default Result;

/*
01. symbol: "IBM"
02. open: "143.3900"
03. high: "144.8500"
04. low: "142.7900"
05. price: "144.6100"
06. volume: "3222778"
07. latest trading day: "2021-10-15"
08. previous close: "143.3900"
09. change: "1.2200"
10. change percent: "0.8508%"

0: "IBM"
1: "143.3900"
2: "144.8500"
3: "142.7900"
4: "144.6100"
5: "3222778"
6: "2021-10-15"
7: "143.3900"
8: "1.2200"
9: "0.8508%"
*/

/* Company Results
0: Symbol: "IBM"
1: AssetType: "Common Stock"
2: Name: "International Business Machines Corporation"
3: Description: "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s."
4: CIK: "51143"
5: Exchange: "NYSE"
6: Currency: "USD"
7: Country: "USA"
8: Sector: "TECHNOLOGY"
9: Industry "COMPUTER & OFFICE EQUIPMENT"
10: Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US"
11: FiscalYearEnd: "December"
12: LatestQuarter: "2021-06-30"
13: MarketCapitalisation: "105795666000"
14: EBITDA: "15992001000"
15: PERatio: "24.44"
16: PEGRatio: "1.482"
17: BookValue: "24.48"
18: DividendPerShare: "6.53"
19: Dividend Yield: "0.0455"
20: EPS: "5.92"
21: RevenuePerShareTTM: "83.3"
22: ProfitMargin: "0.0717"
23: OperatingMarginTTM: "0.124"
24: ReturnOnAssetsTTM: "0.0385"
25: ReturnOnEquityTTM: "0.245"
26: RevnueTTM: "74400997000"
27: GrossPRofitTTM: "35575000000"
28: DilutedEPSTTM: "5.92"
29: QaurterlyEearningsGrowthYOY: "-0.032"
30: QuarterlyRevenueGrowthYOY: "0.034"
31: AnalystTargetPrice: "151.61"
32: TrailingPE: "24.44"
33: ForwardPE: "11.71"
34: PriceToSalesRatioTTM: "1.422"
35: PriceToBookRatio: "4.749"
36: EVToRevenue: "2.097"
37: EVToEBITDA: "11.55"
38: Beta: "1.181"
39: 52WeekHigh: "151.1"
40: 52WeekLow: "100.73"
41: 50DayMovingAverage: "139.2"
42: 200DayMovingAverage: "141.46"
43: SharesOutstanding: "731593000"
44: SharesFloat:"894743000"
45: SharesShort: "25805200"
46: SharesShortPriorMonth: "25087600"
47: ShortRatio: "7.16"
48: ShortPercentOutstanding: "0.03"
49: ShortPercentFloat: "0.0288"
50: PercentInsiders: "0.133"
51: PercentInstitutions: "57.75"
52: ForwardAnnualDividentRate: "6.56"
53: ForwardAnnualDividendYgield: "0.0454"
54: PayoutRatio: "0.747"
55: DividentDate: "2021-09-10"
56: ExDividendDate: "2021-08-09"
57: LastSplitFactor: "2:1"
58: LastSplitDate "1999-05-27"


*/
