import React from 'react';

class Button1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.stopPropagation();
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Button1;