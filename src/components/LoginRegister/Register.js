import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import provinces from "../Adress/data";

export default class Example extends React.Component {
  state = {
    data: null,
    province: "",
    city: ""
  };

  componentDidMount() {
    this.setState({ data: provinces });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, ...state } = this.state;

    console.log(state);
  };
  render() {
    const { data, province, city } = this.state;

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
                name="fullName"
                id="name"
                placeholder="Full Name.."
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Phone Number"
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

        <FormGroup check>
          <Input
            type="checkbox"
            name="termsCheck"
            id="Check"
            onChange={this.handleChange}
          />
          <Label for="Check" check>
            I Have Agreed to the Terms and Conditions
          </Label>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
