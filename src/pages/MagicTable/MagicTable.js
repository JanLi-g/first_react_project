import React from 'react';
import MagicButton from './MagicButton';
import App from "../../App";

/**
 * creates table with 10 rows and 1 column
 * .push writes MagicButton in table
 * returns table
 * **/
class MagicTable extends React.Component {
    createTable(){
        let table = [];
        for(let i=0; i<10; i++) {
            let children = [];
            table.push(<tr><td><MagicButton/></td></tr>)
        }
        return table;
    }

    /**
     * renders table
     * @returns {JSX.Element}
     */
    render(){
        return (<table>
            {this.createTable()}
        </table>);
    }
}

export default MagicTable;