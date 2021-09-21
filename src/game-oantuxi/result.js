import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { result, totalWins, totalGames } = this.props;
    return (
      <div>
        <div className="display-4 text-warning mt-2"> {result} </div>
        <div className=" win text-success">
          Total Wins: <span className="text-warning mt-2">{totalWins}</span>
        </div>
        <div className=" game text-success">
          Total Games: <span className="text-warning">{totalGames}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.userReducer.result,
    totalWins: state.userReducer.totalWins,
    totalGames: state.userReducer.totalGames,
  };
};

export default connect(mapStateToProps, null)(Result);
