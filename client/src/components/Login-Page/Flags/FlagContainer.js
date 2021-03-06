import React from "react";

function FlagContainer(props) {
const styles = {
  base:{
    width: "100%",
    display:"flex",
    margin: "0 auto",
    padding: props.padding,
    "flex-wrap":"no-wrap"
    
  },
}

  return (
    <div style={styles.base}>
      {props.children}
    </div>
  );
}

export default FlagContainer;


