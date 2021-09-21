import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    const { playList } = this.props;

    return (
      <div className="playGame">
        <div className="prepare">
          <img
            width={90}
            height={90}
            src={playList.find((item) => item.data === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble mb-3 "></div>
        <img style={{ with: 180, height: 180 }} src="./img/player.png" />
        <div className="row ">
          {playList.map((item) => {
            let border = {};
            if (item.data) {
              border = { border: "5px solid purple" };
            }

            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    this.props.chooseEvent(item.ma);
                  }}
                  style={border}
                  className="btn btn-light"
                >
                  <img width={35} height={35} src={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playList: state.userReducer.playList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseEvent: (maEvent) => {
      dispatch({ type: "CHOOSE_EVENT", maEvent });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
