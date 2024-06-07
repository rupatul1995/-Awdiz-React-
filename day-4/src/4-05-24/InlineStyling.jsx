import React from "react";
import'./../Styled/InlineStyling.css';

const  InlineStyling=()=>{


    const styles={color:"red" , fontSize:"90px",}

    return (
<>
    <div style={{color:"blue" , fontSize:"30px",}}>InlineStyling </div>
   <div style={styles} > InlineStyling</div>
   <p className="col-green">Testing class</p>
   <p id="my-id">Testing id</p>
    </>
    );
};
export default InlineStyling;