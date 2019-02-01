import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import provinces from "../Adress/data";
import { Checkbox } from "@material-ui/core";

class Register extends React.Component {
  state = {
    data: null,
    province: "",
    city: "",
    fullname: "",
    address: "",
    phone: 0,
    email: "",
    password: "",
    termsCheck: false
  };

  componentDidMount() {
    this.setState({ data: provinces });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  termsCheckBox = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log(event);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.signUp(this.state);
  };
  render() {
    let SubmitButton;

    const {
      data,
      fullname,
      address,
      province,
      city,
      phone,
      email,
      password
    } = this.state;
    const { isAuthenticated, isSignUpSuccess } = this.props;

    // if (isSignUpSuccess) {
    //   return <Redirect to="/" />;
    // }

    if (this.state.termsCheck === true) {
      SubmitButton = <Button type="submit">Submit</Button>;
    } else {
      SubmitButton = <span>I Have Agreed to the Terms and Conditions</span>;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="registerEmail"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="registerPassword"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullname"
                id="name"
                placeholder="Full Name.."
                value={fullname}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Address">Address</Label>
          <Input
            type="text"
            name="address"
            id="Address"
            placeholder="Jalan Kemang I ...."
            value={address}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Province">Province</Label>
              <Input
                type="select"
                name="province"
                id="SelectProvince"
                onChange={this.handleChange}
                value={province}
              >
                <option disabled value="">
                  Province
                </option>
                {data &&
                  Object.keys(data).map((province, i) => (
                    <option value={province} key={i}>
                      {province}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="City">City</Label>
              <Input
                type="select"
                name="city"
                id="SelectCity"
                onChange={this.handleChange}
                value={city}
              >
                <option disabled value="">
                  City
                </option>
                {province !== "" &&
                  data[province].map((city, i) => (
                    <option value={city} key={i}>
                      {city}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Checkbox
          name="termsCheck"
          checked={this.state.termsCheck}
          onChange={this.termsCheckBox("termsCheck")}
          value="termsCheck"
        />
        <span>{SubmitButton}</span>
      </Form>
    );
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  isSignUpSuccess: store.auth.isSignUpSuccess
});

export default connect(
  mapStateToProps,
  { signUp }
)(Register);
