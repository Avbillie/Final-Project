import React from "react";

export default function HighScoreBtn(props) {
  const style ={
    base:{
      backgroundColor: "#d6efc7",
      boxShadow: ".6rem .6rem .6rem darkgrey",
      borderRadius: ".2em",
      fontFamily: "Georgia, 'Times New Roman', Times, serif"
    }
  }
    return (
      <div>
          <button style={style.base}>Highscores</button>
      </div>
    );
  }
  