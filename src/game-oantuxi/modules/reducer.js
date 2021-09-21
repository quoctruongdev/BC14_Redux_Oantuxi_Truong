const initialState = {
  playList: [
    {
      ma: "keo",
      hinhAnh: "./img/keo.png",
      data: false,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua.png",
      data: true,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao.png",
      data: false,
    },
  ],
  result: "Games Oản Tù Tì ",
  totalWins: 0,
  totalGames: 0,
  computerDefault: {
    ma: "keo",
    hinhAnh: "./img/keo2.png",
  },
  computer: [
    {
      ma: "keo",
      hinhAnh: "./img/keo2.png",
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua2.png",
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao2.png",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_EVENT":
      let playListNew = [...state.playList];
      playListNew = playListNew.map((item, index) => {
        if (item.ma === action.maEvent) {
          return { ...item, data: true };
        }
        return { ...item, data: false };
      });

      state.playList = playListNew;
      return { ...state };
    case "RAN_DOM":
      console.log(action);
      let getRanDom = Math.floor(Math.random() * 3);
      let eventRandom = state.computer[getRanDom];
      state.computerDefault = eventRandom;
      return { ...state };

    case "END_GAME":
      let player = state.playList.find((item) => item.data === true);
      let computers = state.computerDefault;
      switch (player.ma) {
        case "keo":
          if (computers.ma === "keo") {
            state.result = "Draw match";
          } else if (computers.ma === "bua") {
            state.result = " You lose";
          } else {
            state.totalWins += 1;
            state.result = "Congratulations, You win";
          }
          break;
        case "bua":
          if (computers.ma === "keo") {
            state.totalWins += 1;
            state.result = "Congratulations, You win";
          } else if (computers.ma === "bua") {
            state.result = "Draw match";
          } else {
            state.result = " You lose";
          }
          break;
        case "bao":
          if (computers.ma === "keo") {
            state.result = " You lose";
          } else if (computers.ma === "bua") {
            state.totalWins += 1;
            state.result = "Congratulations, You win";
          } else {
            state.result = "Draw match";
          }
          break;
        default:
      }
      state.totalGames += 1;
    default:
      return { ...state };
  }
};
export default userReducer;
