import React, { Component } from 'react';
class SignIn extends Component {
    render() {
        return (React.createElement("div", { className: "form-container sign-in-container" },
            React.createElement("form", { action: "#" },
                React.createElement("h1", { className: "form-title" }, "Welcome Back!"),
                React.createElement("input", { type: "email", placeholder: "\uC774\uBA54\uC77C" }),
                React.createElement("input", { type: "password", placeholder: "\uD328\uC2A4\uC6CC\uB4DC" }),
                React.createElement("button", { className: "form-button" }, "sign in"),
                React.createElement("a", { className: "find-password", href: "#" }, "\uD328\uC2A4\uC6CC\uB4DC \uCC3E\uAE30"))));
    }
}
export default SignIn;

