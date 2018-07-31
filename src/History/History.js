import React, { Component } from 'react';
import axios from 'axios'
var historyApi = require('./HistoryApi');






class History extends Component {
  constructor(props) {
        super(props);
        this.state = {
            jsonArrayHistory: undefined
        };
    }


    updateHistoryState = () => {
        console.log("getBlobs2");
        historyApi.getAllBlobs()
       .then(function(res) {
            this.setState({jsonArrayHistory: res})
        }.bind(this));
       console.log("this.state.jsonArrayHistory[4]:")
       console.log(JSON.stringify(this.state.jsonArrayHistory[4]))
    }


  render() {
      console.log("history render")
        this.updateHistoryState()
   return (
            <table className="table historyTable">
        <thead>
            <tr>
                <th className="tableHeader">
                    Name
                </th>
                <th className="tableHeader">
                    Link
                </th>
            </tr>
        </thead>
        <tbody>
            {
                 Array.isArray(this.jsonArrayHistory) &&
                this.jsonArrayHistory.map((jsonHistory) =>
                    <tr key={"jsonHistory.artist"}>
                        <td className="tableData">
                            {"jsonHistory.artist"}
                        </td>
            				<td className="tableData">
                            {"jsonHistory.link"}
                        </td>
 
                    </tr>
             )
        }
        </tbody>
    </table>
        )
  }
}

export default History;

