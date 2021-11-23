import React from 'react'
import ChartBar from "./ChartBar"
import "./css/Chart.css"

const Chart = (props) => {

    const highestValue = props.data.map(data => data.value);
    const totalMaximum = Math.max(...highestValue);


    return (

        <div className="chart">
            {props.data.map(item => <ChartBar key={item.label} value={item.value} maxValue={totalMaximum} label={item.label} />)}
        </div>


    )
}

export default Chart



