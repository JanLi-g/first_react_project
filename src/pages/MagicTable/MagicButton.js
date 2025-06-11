import React from 'react';

import './magicbutton.scss';


/**
 * class MagicButton with constructor who initiates the state
 */
class MagicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {render: true};
    }

    /**
     * sets render state to false
     * new render and returns null so the button deletes
     */
    deleteMe(){
        this.setState({render: false});
    }

    /**
     * if state == render -> return button with event Listener onClick
     * @returns {JSX.Element|null}
     */
    render() {
        if(this.state.render) {
            return (
                <button onClick={(e) => this.deleteMe(e)}>
                    Delete Me
                </button>
            );
        }
        else{
            return null;
        }
    }
}

export default MagicButton;