import React from "react";
const Table = ({ trades }) => {
  //console.log(typeof trades);

  return (
    <table id="example" className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>GlobalTradeID</th>
          <th>Rate</th>
          <th>Total</th>
          <th>Trade ID</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {trades &&
          trades.map(item => {
            return (
              <tr>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.globalTradeID}</td>
                <td>{item.rate}</td>
                <td>{item.total}</td>
                <td>{item.tradeID}</td>
                <td>{item.type}</td>
              </tr>
            );
          })}
      </tbody>
      <tfoot>
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>GlobalTradeID</th>
          <th>Rate</th>
          <th>Total</th>
          <th>Trade ID</th>
          <th>Type</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
