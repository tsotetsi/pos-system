import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header";
import CompleteTransactions from "./CompleteTransactions";
import axios from "axios";

const HOST = "http://localhost:80";
const url = HOST + `/api/all`;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setTransactions(response.data))
      .catch((err) => {
        console.log(err);
      });
  });

  const rendertransactions = () => {
    if (transactions.length === 0) {
      return <p>No Transactions found</p>;
    } else {
      return transactions.map((transaction) => (
        <CompleteTransactions {...transaction} />
      ));
    }
  };

  return (
    <div>
      <Header />

      <h2 className="text-center" style={{ color: "green" }}>
        TRANSACTIONS
      </h2>
      <br />
      <br />

      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Total</th>
            <th>Products</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>{rendertransactions()}</tbody>
      </table>
    </div>
  );
};

export default Transactions;
