import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

const ListOfStocks = (props) => {
  // =====================================================
  //                  Visualise Table
  // =====================================================

  let displayListOfStocks2 = [];

  for (const stockInfo of props.userStockInfo) {
    for (const priceSymbol of props.priceSymbolObject) {
      if (stockInfo.symbol === priceSymbol.symbol) {
        const newObject = {
          ...stockInfo,
          ...priceSymbol,
        };
        displayListOfStocks2.push(newObject);
        break;
      }
    }
  }

  // for (let i = 0; i < props.userStockInfo.length; i++) {
  //   const newObject = {
  //     ...props.userStockInfo[i],
  //     ...props.priceSymbolObject[i],
  //   };

  //   displayListOfStocks2.push(newObject);
  // }
  // console.log(displayListOfStocks2);

  // props.userStockInfo

  // props.priceSymbolObject

  return (
    <div>
      <table className="border-collapse border border-gray-700">
        <thead>
          <tr>
            <th className="border-collapse border border-gray-700">
              Stock Name
            </th>
            <th className="border-collapse border border-gray-700">Symbol</th>
            <th className="border-collapse border border-gray-700">Sector </th>
            <th className="border-collapse border border-gray-700">Industry</th>
            <th className="border-collapse border border-gray-700">
              Date Bought
            </th>
            <th className="border-collapse border border-gray-700">
              Total Shares
            </th>
            <th className="border-collapse border border-gray-700">
              Price Bought
            </th>
            <th className="border-collapse border border-gray-700">
              Value at Time of Purchase
            </th>
            <th className="border-collapse border border-gray-700">
              Price Today
            </th>
          </tr>
        </thead>

        <tbody className="text-xs">
          {props.isLoading ? (
            <p>Loading ...</p>
          ) : (
            displayListOfStocks2.map((element, index) => (
              <tr>
                <td className="border-collapse border border-gray-700">
                  {element.stock_name}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.symbol}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.sector}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.industry}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.date_bought}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.total_shares}
                </td>
                <td className="border-collapse border border-gray-700">
                  {props.currencyFormatter.format(element.price_bought)}
                </td>
                <td className="border-collapse border border-gray-700">
                  {props.currencyFormatter.format(
                    element.value_at_time_of_purchase
                  )}
                </td>
                <td className="border-collapse border border-gray-700">
                  {props.currencyFormatter.format(element.price)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfStocks;
