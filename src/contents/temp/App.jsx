import React, { Component } from 'react';
import './app.css';
import SignUp from './SingUp';
import SignIn from './SignIn';
import Overlay from './Overlay';
class App extends Component {
    constructor() {
        // @ts-ignore
        super();
        this.handleClickSignUpButton = () => this.setState({
            rightPanelActive: true,
        });
        this.handleClickSignInButton = () => this.setState({
            rightPanelActive: false,
        });
        this.state = {
            rightPanelActive: false,
        };
    }
    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this;
        const { rightPanelActive } = this.state;
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: `container ${rightPanelActive ? `right-panel-active` : ``}`, id: "container" },
                React.createElement(SignUp, null),
                React.createElement(SignIn, null),
                React.createElement(Overlay, { handleClickSignInButton: handleClickSignInButton, handleClickSignUpButton: handleClickSignUpButton }))));
    }
}
export default App;
