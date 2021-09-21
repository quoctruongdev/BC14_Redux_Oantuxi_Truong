import React, { Component } from "react";
import "./style.css";
import "./font/Pony.ttf";
import Computer from "./computer";
import Player from "./player";
import Result from "./result";
import { connect } from "react-redux";

class Oantuxi extends Component {
  render() {
    return (
      <div className="Game123">
        <div className="row text-center mt-4">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              className="btn btn-success mt-4"
              onClick={() => {
                this.props.startGame();
              }}
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      let count = 1;
      let radomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;

        if (count >= 25) {
          clearInterval(radomComputerItem);
          dispatch({ type: "END_GAME" });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(Oantuxi);
