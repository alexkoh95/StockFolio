import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

const ListOfStocks = (props) => {
  // =====================================================
  //                  Visualise Table
  // =====================================================

  let displayListOfStocks2 = [];

  useEffect(() => {
    // console.log(props.userStockInfo);

    displayListOfStocks2 =
      props.userStockInfo.length &&
      props.userStockInfo.map((element, index) => {
        return (
          <tr>
            <td>{element.stock_name}</td>
            <td>{element.symbol}</td>
            <td>{element.sector}</td>
            <td>{element.industry}</td>
            <td>{element.date_bought}</td>
            <td>{element.total_shares}</td>
            <td>{element.price_bought}</td>
            <td>{element.value_at_time_of_purchase}</td>
          </tr>
        );
      });
  }, [props.userStockInfo]);

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
          </tr>
        </thead>

        <tbody className="text-xs">
          {props.isLoading ? (
            <p>Loading ...</p>
          ) : (
            props.userStockInfo?.map((element, index) => (
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
                  {element.price_bought}
                </td>
                <td className="border-collapse border border-gray-700">
                  {element.value_at_time_of_purchase}
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
