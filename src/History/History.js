import React, { Component } from 'react';

class Artist extends Component {
    render() {
        const { artist } = this.props;
        return (<tr key={artist.artist}>
                    <td className="tableData">
                        {artist.artist}
                    </td>
                    <td className="tableData">
                         <a href={artist.link} target="_blank">{artist.link}</a>
                    </td>
                </tr>);
    }
}

class History extends Component {

    render() {
        const { data } = this.props;
        console.log("data", data);
        const childs = data && data.map((artist, index) => (<Artist key={index} artist={artist} />) );
        console.log("childs", childs);
       return (<table className="table historyTable">
            <thead>
            <tr>
                <th className="tableHeader History-name">
                    Name
                </th>
                <th className="tableHeader History-link">
                    Link
                </th>
            </tr>
            </thead>
            <tbody>
            {childs}
            </tbody>
            </table>);
    }
}

export default History;

