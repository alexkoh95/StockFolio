import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../SignupLogin/AuthenticationTokens";

const moment = require("moment");

const StockPurchase = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const history = useHistory();
  const [totalSharesPurchased, setTotalSharesPurchased] = useState();
  const [stocksToPurchaseCalc, setStocksToPurchaseCalc] = useState();

  const tokens = useContext(AuthenticationContext);

  useEffect(() => {
    // console.log(props.stockToPurchase);
    setStocksToPurchaseCalc([props.stockToPurchase]);
    // console.log("Adding to stock purchase in STOCKPURCHASE PAGE");
    // console.log(stocksToPurchaseCalc);
  }, [props.stockToPurchase]);

  //to get 2015-06-19 etc YYYY-MM-DD
  const todayDate = moment().format("YYYY-MM-DD");
  // =====================================================
  //                  FUNCTIONS
  // =====================================================

  const handleShareChange = async (event) => {
    await setTotalSharesPurchased((prevState) => {
      return event.target.value;
    });
  };

  const submitTotalShares = () => {
    setStocksToPurchaseCalc(() => {
      const newArray = [stocksToPurchaseCalc];
      let totalValue = Math.round(
        stocksToPurchaseCalc[0].price * totalSharesPurchased
      );
      newArray[0][0].totalShares = parseInt(totalSharesPurchased);
      newArray[0][0].value = totalValue;
      console.log(newArray[0]);
      return newArray[0];
    });

    // console.log(stocksToPurchaseCalc);
  };

  const submitToDataBase = async (event) => {
    event.preventDefault();

    const stock_name = stocksToPurchaseCalc[0].stockName;
    const equity_type = stocksToPurchaseCalc[0].equityType;
    const symbol = stocksToPurchaseCalc[0].symbol;
    const price_bought = stocksToPurchaseCalc[0].price;
    const sector = stocksToPurchaseCalc[0].sector;
    const industry = stocksToPurchaseCalc[0].industry;
    const total_shares = stocksToPurchaseCalc[0].totalShares;
    const value_at_time_of_purchase = stocksToPurchaseCalc[0].value;
    const currency = stocksToPurchaseCalc[0].currency;
    const is_sold = false;
    const date_bought = todayDate;

    const submitToDataBase = {
      stock_name,
      equity_type,
      symbol,
      price_bought,
      sector,
      industry,
      total_shares,
      value_at_time_of_purchase,
      currency,
      is_sold,
      date_bought,
    };

    const config = {
      headers: { Authorization: `Bearer ${tokens.access}` },
    };

    console.log(submitToDataBase);
    axios
      .put("http://localhost:5000/stockpurchase", submitToDataBase, config)
      .then((res) => console.log("Stock Purchase Successful", res.data));

    props.setStockToPurchase([]);
  };

  // =====================================================
  //                  Visualise Stock Purchase
  // =====================================================
  let printStockPurchase = [];
  if (stocksToPurchaseCalc) {
    printStockPurchase = stocksToPurchaseCalc?.map((element, index) => {
      return (
        <div
          key={index}
          className="py-3 m-4 mt-5 bg-white bg-white bg-opacity-40 shadow-lg rounded-lg"
        >
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-4 my-0">
              <div>
                <label>Shares to Purchase</label>
                <input onChange={handleShareChange} type="number"></input>
                <button
                  id={index}
                  onClick={submitTotalShares}
                  className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"
                >
                  {" "}
                  Submit Total Shares{" "}
                </button>
              </div>
              <div className="my-auto">
                <div className="text-3xl capitalise pt-1">
                  <strong>
                    {element.stockName} {element.symbol}
                  </strong>
                  <br />
                  <strong>Price : </strong> {element.price} {element.currency}
                  <br />
                  <strong>Total Value to Purchase:</strong> {element.value}
                </div>
                <button
                  className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md"
                  onClick={submitToDataBase}
                >
                  {" "}
                  Purchase Shares
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return <div>{printStockPurchase !== [] && printStockPurchase}</div>;
};

export default StockPurchase;
