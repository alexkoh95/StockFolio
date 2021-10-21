import React, { useContext } from "react";
import { UserNameContext } from "../SignupLogin/UserNameGlobal";

const moment = require("moment");

const AccountValue = (props) => {
  const todayDate = moment().format("YYYY-MM-DD");
  const accountCashValueDefault = props.accountCashDefaultValue;

  const today = moment().format("dddd MMMM Do YYYY");
  const userName = useContext(UserNameContext);
  return (
    <React.Fragment>
      <div className="col-span-2">
        <div
          className="h-52 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 py-2 px-2 m-3 text-gray-700 rounded-lg bg-opacity-20 text-left pl-8 pt-12 
            bg-cover bg-center filter brightness-105"
          style={{
            backgroundImage: `url('https://imgur.com/ZhDV6qG.jpg')`,
          }}
        >
          <h1 className="text-4xl font-bold text-gray-300">
            Hello, {props.isLoading ? <p>Loading...</p> : userName}
          </h1>
          <h1 className="text-lg pb-4 text-gray-300">{today}</h1>
          <h1 className="text-lg pb-4 text-gray-300">
            {" "}
            Total Cash in Account{" "}
            {props.accountCashDefaultValue -
              props.stockValueAtPurchaseToMinusCash}
          </h1>
          <h1 className="text-lg pb-4 text-gray-300">Your Stock Value is</h1>
        </div>
      </div>
      ;
    </React.Fragment>
  );
};

export default AccountValue;

// {props.isLoading ? (
//   <p>Loading ...</p>
// ) : (
//   props.userStockInfo?.map((element, index) => (
//     <tr>
//       <td className="border-collapse border border-gray-700">
//         {element.stock_n
