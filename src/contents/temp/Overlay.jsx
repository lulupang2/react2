import React, { Component } from 'react';
class Overlay extends Component {
    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this.props;
        return (React.createElement("div", { className: "overlay-container" },
            React.createElement("div", { className: "overlay" },
                React.createElement("div", { className: "overlay-panel overlay-left" },
                    React.createElement("h1", null, "Welcome Back!"),
                    React.createElement("p", { className: "overlay-description" },
                        "\uC774\uBBF8 \uAC00\uC785\uD55C \uD68C\uC6D0\uC774\uC2DC\uB77C\uBA74,",
                        React.createElement("br", null),
                        "\uB85C\uADF8\uC778 \uD6C4 \uB354 \uB9CE\uC740 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
                    React.createElement("button", { className: "ghost form-button", id: "signIn", onClick: handleClickSignInButton }, "Sign In")),
                React.createElement("div", { className: "overlay-panel overlay-right" },
                    React.createElement("h1", null, "Hello, Friend!"),
                    React.createElement("p", { className: "overlay-description" },
                        "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2DC\uB77C\uBA74,",
                        React.createElement("br", null),
                        "\uAC00\uC785 \uD6C4 \uB354 \uB9CE\uC740 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
                    React.createElement("button", { className: "ghost form-button", id: "signUp", onClick: handleClickSignUpButton }, "Sign Up")))));
    }
}
export default Overlay;
