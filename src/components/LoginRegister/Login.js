import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/auth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.signIn(this.state);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Email.."
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { signIn }
)(Login);
