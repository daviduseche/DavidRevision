import React, { Component } from "react";
import Charts from "./Charts"
import Papaparse from "papaparse"
const papa = require('papaparse');


class FileReader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: undefined
      };
    
  
    this.updateData = this.updateData.bind(this);
    }

  componentDidMount() {

    // Your parse code, but not seperated in a function
    var csvFilePath = require("./csv/graph3.csv");
    papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }

  updateData(result) {
    console.log(result.data)
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data }); // or shorter ES syntax: this.setState({ data });
  }

  render() {
    // Your render function
    return <div>
      <Charts graphData={this.state.data} />
    </div>
  }
}
  export default FileReader;