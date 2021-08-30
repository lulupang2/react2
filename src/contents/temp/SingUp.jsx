import React, { Component } from 'react';
class SignUp extends Component {
    render() {
        return (React.createElement("div", { className: "form-container sign-up-container" },
            React.createElement("form", { action: "#" },
                React.createElement("h1", { className: "form-title" }, "Hello, Friend!"),
                React.createElement("input", { type: "text", placeholder: "\uC774\uB984" }),
                React.createElement("input", { type: "email", placeholder: "\uC774\uBA54\uC77C" }),
                React.createElement("input", { type: "password", placeholder: "\uD328\uC2A4\uC6CC\uB4DC" }),
                React.createElement("button", { className: "form-button" }, "sign up"))));
    }
}
export default SignUp;
