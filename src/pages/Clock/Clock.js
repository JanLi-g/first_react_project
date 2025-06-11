import React from 'react';

/**
 * class clock with constructor who initiates state with object and key date
 */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    /**
     * function who calls the method tick() with setInterval() every second
     */
    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000);
    }

    /**
     * clears timer so tick() can't be used after deleting the component
     */
    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    /**
     * method tick() refreshes the state of the component
     * sets the date and time for rerendering to show every second on the clock
     */
    tick(){
        this.setState({date: new Date()}
        );
    }

    /**
     *
     * @returns {JSX.Element} which contains div and h1
     * this.state.date.toLocaleTimeString() sets Date after state changes, renders the component
     * and refreshes the time
     */
    render(){
        return (
            <div>
                <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;