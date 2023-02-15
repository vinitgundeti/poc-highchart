import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";
import Highcharts from "highcharts";
import { barGraphData, lineChartData } from "config/jsondata";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={lineChartData} />
        <br/><br/>
        <HighchartsReact highcharts={Highcharts} options={barGraphData} />
      </div>
    );
  }
}
