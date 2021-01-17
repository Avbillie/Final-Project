import React from "react";


function Background(props) {
  const style ={
    base:{
      width: "max-content",
      margin: "0rem auto",
      display: props.display,
      alignItems: props.alignItems,
      backgroundColor: props.bgColor
    }
  }
  return (
    <div style ={style.base}>
        {props.children}
    </div>
  );
}

export default Background;
