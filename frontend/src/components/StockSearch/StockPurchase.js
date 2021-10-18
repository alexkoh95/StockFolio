import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const StockPurchase = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const history = useHistory();
  const [totalSharesPurchased, setTotalSharesPurchased] = useState();
  const [stocksToPurchaseCalc, setStocksToPurchaseCalc] = useState();

  useEffect(() => {
    setStocksToPurchaseCalc([props.stockToPurchase]);
    console.log("Adding to stock purchase in STOCKPURCHASE PAGE");
    console.log(stocksToPurchaseCalc);
  }, [props.stockToPurchase]);

  // =====================================================
  //                  FUNCTIONS
  // =====================================================

  const handleShareChange = async (event) => {
    await setTotalSharesPurchased((prevState) => {
      return event.target.value;
    });
  };

  const submitTotalShares = (event) => {
    setStocksToPurchaseCalc((prevState) => {
      const newArray = [stocksToPurchaseCalc];
      let totalValue = stocksToPurchaseCalc[0].price * totalSharesPurchased;
      let addingSharesToData = [
        Object.assign(newArray[0], {
          totalShares: totalSharesPurchased,
          value: totalValue,
        }),
      ];
      return addingSharesToData;
    });
    console.log(stocksToPurchaseCalc);
  };

  const submitToDataBase = async (event) => {
    event.preventDefault();

    const name = stocksToPurchaseCalc[0].name;
    const equityType = stocksToPurchaseCalc[0].equityType;
    const symbol = stocksToPurchaseCalc[0].symbol;
    const price = stocksToPurchaseCalc[0].price;
    const sector = stocksToPurchaseCalc[0].sector;
    const industry = stocksToPurchaseCalc[0].industry;
    const totalShares = stocksToPurchaseCalc[0].totalShares;
    const valueAtTimeOfPurchase = stocksToPurchaseCalc[0].value;

    const submitToDataBase = {
      name,
      equityType,
      symbol,
      price,
      sector,
      industry,
      totalShares,
      valueAtTimeOfPurchase,
    };

    axios
      .post("http://localhost:5000/stocks", submitToDataBase)
      .then((res) => console.log("Stock Purchase Successful", res.data));

    props.setStocksToPurchaseCalc([]);
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
                    Stock Information: {element.name} {element.symbol}
                  </strong>
                  <br />
                  <strong>Price: </strong> {element.price} <br />
                  <strong>Total Value to Purchase:</strong> {element.value}
                </div>
                <button
                  className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md"
                  // onClick={submitToDataBase}
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
