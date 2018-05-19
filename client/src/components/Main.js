import React, { Component } from "react";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import { getCurrencyPairs } from "../actions/currencyAction";
import { getTradesHistory } from "../actions/tradesAction";
import Spinner from "../common/Spinner";
import Table from "../components/Table";
class Main extends Component {
  state = {
    pairsVal: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.getTradesHistory(e.target.value);
  };
  componentDidMount() {
    this.props.getCurrencyPairs();
  }
  render() {
    const { currency, loading } = this.props.currency;
    const { trades } = this.props.trades;
    let currencyDropdown;
    if (loading) {
      currencyDropdown = <Spinner />;
    } else {
      currencyDropdown = (
        <div>
          <SelectListGroup
            name="pairsVal"
            value={this.state.pairsVal}
            options={currency}
            onChange={this.onChange}
          />
        </div>
      );
    }
    return (
      <div>
        <h3>Список сделок на криптовалютной бирже Polonix</h3>
        {currencyDropdown}
        <Table trades={trades} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currency: state.currency,
  trades: state.trades
});
export default connect(mapStateToProps, { getCurrencyPairs, getTradesHistory })(
  Main
);
