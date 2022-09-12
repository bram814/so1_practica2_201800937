import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useMemo } from "react";


import { PieChart } from 'react-minimal-pie-chart';


export default function CircleChart(props) {


  return(
  <div className="circle">

    <PieChart

      data={props.dataRam}
      lineWidth={70}
      animate
      animationDuration={2500}
      radius={50}
      startAngle={0}
      background={'#00ffd1'}

    />
  </div> 
    );
}




