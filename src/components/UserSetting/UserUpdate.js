import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class UserUpdate extends Component {
  state = {};
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="fullName" sm={2}>
            Full Name
          </Label>
          <Col sm={10}>
            <Input type="text" name="fullName" id="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input type="email" name="email" id="updateEmail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input type="password" name="password" id="updatePassword" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input type="text" name="address" id="updateAddress" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phoneNumber" sm={2}>
            Phone Number
          </Label>
          <Col sm={10}>
            <Input type="number" name="phoneNumber" id="phone" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Gender" sm={2}>
            Gender
          </Label>
          <Col sm={10}>
            <Input type="select" name="gender" id="selectGender">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </Col>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default UserUpdate;
