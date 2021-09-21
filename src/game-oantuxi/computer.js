import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    const { computerDefault } = this.props;
    let keyframe = `@keyframes randomItem${Date.now()} {
      0%  {top: 0px;}
      10%  {top: 50px;}
      20%  {top: 100px;}
      30%  {top: 150px;}
      40%  {top: 100px;}
      50% {top:  50px;}
      60%  {top: 0px;}
      70%  {top: -50px;}
      80%  {top: -100px;}
      90% {top: -150px;}
      100% {top: 0px;}
    }`;
    return (
      <div className="playGame">
        <style>{keyframe}</style>
        <div className="prepare" style={{ position: "relative" }}>
          <img
            style={{
              left: "20%",
              position: "absolute",
              animation: `randomItem${Date.now()} 0.2s`,
            }}
            width={90}
            height={90}
            src={computerDefault.hinhAnh}
          />
        </div>
        <div className="speech-bubble mb-3 "></div>
        <img
          style={{ with: 200, height: 200 }}
          src="./img/playerComputer.png"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computerDefault: state.userReducer.computerDefault,
  };
};

export default connect(mapStateToProps, null)(Computer);
