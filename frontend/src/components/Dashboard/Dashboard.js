import React, { useEffect, useState, useContext } from "react";
import SideNavBar from "../SideNavBar";
import { Link } from "react-router-dom";
import AccountValue from "./AccountValue";
import ListOfStocks from "./ListOfStocks";
import Visualisation from "./Visualisation";
import { AuthenticationContext } from "../SignupLogin/AuthenticationTokens";
import { UserNameContext } from "../SignupLogin/UserNameGlobal";

const Dashboard = () => {
  // =====================================================
  //                 SET UP USER ACCOUNT INFORMATION
  // =====================================================
  const accountCashDefaultValue = 250000;

  const tokens = useContext(AuthenticationContext);
  const userName = useContext(UserNameContext);

  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [userStockInfo, setUserStockInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [calculatedStockValue, setCalculatedStockValue] = useState();
  const [stockValueAtPurchaseToMinusCash, setStockValueAtPurchaseToMinusCash] =
    useState();

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
    console.log(res2);
    const data2 = await res2.json();
    console.log(data2);
    setUserStockInfo(data2);

    let calculateStockValue = 0;
    calculateStockValue = data2
      .map((item) => item.value_at_time_of_purchase)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(calculateStockValue);

    setCalculatedStockValue(calculateStockValue);

    let calculateStockValueAtPurchaseToMinusCash = 0;
    calculateStockValueAtPurchaseToMinusCash = data2
      .map((item) => item.value_at_time_of_purchase)
      .reduce((prev, curr) => prev + curr, 0);

    setStockValueAtPurchaseToMinusCash(
      calculateStockValueAtPurchaseToMinusCash
    );

    setIsLoading(false);
    console.log(isLoading);
  };

  useEffect(async () => {
    await fetchAllUserInformation();
  }, []);

  // ======================================================================
  //  Calculate user stock info
  // ======================================================================

  // const totalStockValue = 0;

  // const calculateStockValue = () => {
  //   totalStockValue = userStockInfo
  //     .map((item) => item.value_at_time_of_purchase)
  //     .reduce((prev, curr) => prev + curr, 0);
  // };

  // useEffect(async () => {
  //   await calculateStockValue();
  //   console.log(totalStockValue);
  // }, [userStockInfo]);

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
          />
          <Visualisation
            userAccountInfo={userAccountInfo}
            userStockInfo={userStockInfo}
          />
          <ListOfStocks
            userAccountInfo={userAccountInfo}
            userStockInfo={userStockInfo}
            isLoading={isLoading}
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
