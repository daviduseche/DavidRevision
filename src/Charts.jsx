import React, { Component } from "react";
import { Chart } from "react-charts";
import {LineChart} from 'react-easy-chart';
import { MONTHS } from "./constants/graphConstants";



class Charts extends Component {
    constructor(props){
        super(props)
        this.state = {graphData: [] }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps, PrevState){
            if(prevProps.graphData !== this.props.graphData){
                const graphData = this.props.graphData
               this.formatChart(graphData)
            }
    }

    formatChart(data){
       const grade = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      let aSet = [] ,obj = {}
      for(let char of grade){
        console.log('char', char)
        let sum = 0;
        let gradeTotal = 0
     data.forEach(idx =>{
       if(char === idx.grade){
         gradeTotal++;
           sum += parseFloat(idx.int_rate)
           console.log(idx.grade, idx.int_rate)
       
       }
       

     })
     obj.x = char;
     obj.y = sum/gradeTotal;
     aSet.push(Object.assign({}, obj))

    }
      console.log('set', aSet)
      this.setState({ graphData: aSet })
    }


    render(){
    
           
           
            
          
        return (
          
          <div>
    <LineChart
    xType={'text'}
    axes
    grid
    width={750}
    height={750}
    lineColors={['green']}
    dataPoints
    interpolate={'cardinal'}
    data={[
     
     this.state.graphData
      
    ]}
  />
        </div>
        )
    
  } 

}

export default Charts;