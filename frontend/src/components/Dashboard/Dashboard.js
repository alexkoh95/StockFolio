import React, { useEffect, useState, useContext } from "react";
import SideNavBar from "../SideNavBar";
import { Link } from "react-router-dom";
import AccountValue from "./AccountValue";
import ListOfStocks from "./ListOfStocks";
import Visualisation from "./Visualisation";
import { AuthenticationContext } from "../SignupLogin/AuthenticationTokens";
import { UserNameContext } from "../SignupLogin/UserNameGlobal";
const moment = require("moment");

const Dashboard = () => {
  // =====================================================
  //                 SET UP FINNHUB API CALL
  // =====================================================
  const finnhub = require("finnhub");
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "c5olrciad3idr38tbmig";
  const finnhubClient = new finnhub.DefaultApi();

  const yesterdayUNIX = Math.round(
    moment().subtract(1, "days").format("x") * 0.001
  );
  const todayUNIX = Math.round(moment().format("x") * 0.001);
  //fields:
  /*
  symbol, resolution (e.g. 1, 5, 15, 30, 60, D, W, M. This is time frames), from (UNIX TIMESTAMP. Interval initial value), to (UNIX TIMESTAMP. Interval end value)
  */
  //resuts: c = close, h = high, l = low, o = open, s = status, t = timestamp, v = volume

  // finnhubClient.stockCandles(
  //   "AAPL",
  //   "D",
  //   1590988249,
  //   1591852249,
  //   (error, data, response) => {
  //     // console.log(data);
  //   }
  // );

  // const calculateTodayStockPrice = () => {};

  // useEffect(async () => {
  //   await calculateTodayStockPrice();
  // }, [fetchAllUserInformation]);

  // =====================================================
  //                 SET UP USER ACCOUNT INFORMATION
  // =====================================================
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const accountCashDefaultValue = 250000;

  const tokens = useContext(AuthenticationContext);
  const userName = useContext(UserNameContext);

  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [userStockInfo, setUserStockInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingForData, setIsLoadingForData] = useState(true);
  const [calculatedStockValue, setCalculatedStockValue] = useState();
  const [stockValueAtPurchaseToMinusCash, setStockValueAtPurchaseToMinusCash] =
    useState();
  const [stockPriceNow, setStockPriceNow] = useState([]);
  const [listOfSymbolsState, setListOfSymbolsState] = useState([]);

  let listOfSymbols = [];

  const fetchAllUserInformation = async () => {
    const submit = { email: userName };
    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokens.access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submit),
    };
    const res = await fetch("http://localhost:5000/users", config).then(
      (response) => response.json()
    );
    // console.log("pull user account info success, data is here: ", res);
    const submit2 = { uuid: res.uuid };
    // console.log(submit2);
    const config2 = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokens.access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submit2),
    };
    const res2 = await fetch("http://localhost:5000/stockpurchase", config2);
    // console.log(res2);
    const data2 = await res2.json();
    // console.log(data2);
    setUserStockInfo(data2);

    let calculateStockValue = 0;
    calculateStockValue = data2
      .map((item) => item.value_at_time_of_purchase)
      .reduce((prev, curr) => prev + curr, 0);
    // console.log(calculateStockValue);

    setCalculatedStockValue(calculateStockValue);

    let calculateStockValueAtPurchaseToMinusCash = 0;
    calculateStockValueAtPurchaseToMinusCash = data2
      .map((item) => item.value_at_time_of_purchase)
      .reduce((prev, curr) => prev + curr, 0);

    setStockValueAtPurchaseToMinusCash(
      calculateStockValueAtPurchaseToMinusCash
    );

    data2.map((symbol) => {
      setListOfSymbolsState((prevState) => [...prevState, symbol.symbol]);
    });

    listOfSymbols = data2.map((symbol) => symbol.symbol);

    // console.log(listOfSymbols);

    setIsLoading(false);

    // console.log(yesterdayUNIX);
    // console.log(todayUNIX);

    // finnhubClient.quote(listOfSymbols[5], (error, data, response) => {
    //   setStockPriceNow((prevState) => [...prevState, data.c]);
    // });
    // console.log(stockPriceNow);

    const getTodayStockPrice = async () => {
      for (let i = 0; i < listOfSymbols.length; i++) {
        finnhubClient.quote(listOfSymbols[i], (error, data, response) => {
          setStockPriceNow((prevState) => [...prevState, data.c]);
          setIsLoadingForData(false);
        });

        // isLoadingForData
        //   ? (todaySymbolStockPriceObject[i] = {
        //       symbol: listOfSymbols[i],
        //       price: "loading",
        //     })
        //   : (todaySymbolStockPriceObject[i] = {
        //       symbol: listOfSymbols[i],
        //       price: stockPriceNow[i],
        //     });
      }
    };
    getTodayStockPrice();
  };

  useEffect(async () => {
    await fetchAllUserInformation();
  }, []);

  let todaySymbolStockPriceObject = [];

  console.log(listOfSymbolsState);

  useEffect(() => {
    for (let i = 0; i < listOfSymbolsState.length; i++) {
      todaySymbolStockPriceObject[i] = {
        symbol: listOfSymbolsState[i],
        price: stockPriceNow[i],
      };
    }
    console.log(todaySymbolStockPriceObject);
  }, [stockPriceNow]);

  // =====================================================
  //                 RETURN
  // =====================================================

  return (
    <h1>
      <div>
        <div className="">
          <SideNavBar />
        </div>
        <main className="mx-4 p-9 pl-64">
          <AccountValue
            userAccountInfo={userAccountInfo}
            userStockInfo={userStockInfo}
            accountCashDefaultValue={accountCashDefaultValue}
            isLoading={isLoading}
            calculatedStockValue={calculatedStockValue}
            stockValueAtPurchaseToMinusCash={stockValueAtPurchaseToMinusCash}
            currencyFormatter={currencyFormatter}
          />
          <Visualisation
            userAccountInfo={userAccountInfo}
            userStockInfo={userStockInfo}
            currencyFormatter={currencyFormatter}
          />
          <ListOfStocks
            userAccountInfo={userAccountInfo}
            userStockInfo={userStockInfo}
            isLoading={isLoading}
            currencyFormatter={currencyFormatter}
          />
        </main>
      </div>
    </h1>
  );
};

export default Dashboard;

// const res = await axios
//   .post("http://localhost:5000/users", submit, config)
//   .then((res) => console.log(res.data));
// console.log(res);
// setUserAccountInfo(data.data)

// const fetchUserStockInfoByEmail = async () => {
//   const submit2 = { uuid: userAccountInfo.uuid };
//   const config = {
//     headers: {
//       Authorization: `Bearer ${tokens.access}`,
//       "Content-Type": "application/json",
//     },
//   };
//   axios
//     .post("http://localhost:5000/stockpurchase", submit2, config)
//     .then((res) => console.log(res.data))
//     .then((res) => setUserStockInfo(res.data));
// }

// const fetchUserAccountInfoByEmail = async () => {
//   const submit = { email: userName };
//   const config = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${tokens.access}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(submit),
//   };
//   try {
//     const res = await fetch("http://localhost:5000/users", config);
//     const data = await res.json();
//     setUserAccountInfo(data);
//     console.log("pull user account info success, data is here: ", data);
//   } catch (err) {
//     console.log(err, "There has been an error in stock info");
//   }
// };

// const fetchUserStockInfoByEmail = async () => {
//   const submit2 = { uuid: userAccountInfo.uuid };
//   const config2 = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${tokens.access}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(submit2),
//   };
//   try {
//     const res2 = await fetch("http://localhost:5000/stockpurchase", config2);
//     const data2 = await res2.json();
//     setUserStockInfo(data2);
//   } catch (err) {
//     console.log(
//       err,
//       "There has been an error in pulling user stock information"
//     );
//   }
// };
