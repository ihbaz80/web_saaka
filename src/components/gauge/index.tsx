import React from 'react';
import GaugeChart from "react-gauge-chart";
import { Grid } from "@mui/material";

// const styles = {
//   gauge: {
//     width: `auto`,
//     height: `auto`,
//     color: "#000",
//     //border: "0.5px solid #fff",
//     padding: "2px",
//    },
//   title: {
//     fontSize: "1em",
//     color: "#000",
//   },
// };

type GaugeData ={
  value: number

}
export const Gauge = (props:GaugeData) => {
//  console.warn("Props:", props)
  return (
    <Grid xs={12} sm={12} md={12}>
 <GaugeChart
          id= {"gauge_" + Math.floor(Math.random()*1000)}
          nrOfLevels={20}
          colors={["blue", "green", "yellow", "orange", "red"]}
          arcWidth={0.3}
          percent={props.value} 
          textColor={"black"}
           hideText={true} // If you want to hide the text
        />
    </Grid>
    // <div style={styles.gauge}>
      
    //     <GaugeChart
    //       id= {"gauge_" + Math.floor(Math.random()*1000)}
    //       nrOfLevels={20}
    //       colors={["blue", "green", "yellow", "orange", "red"]}
    //       arcWidth={0.3}
    //       percent={props.value} 
    //       textColor={"black"}
    //        hideText={true} // If you want to hide the text
    //     />
 
    // </div>
  );
};

export default Gauge;
