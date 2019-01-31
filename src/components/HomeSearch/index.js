import React, { Component, Fragment } from "react";
import styled from "styled-components";

export default class Search extends Component {
  state = {
    data: null,
    pettype: "",
    breed: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, ...state } = this.state;

    console.log(state);
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="PetType">Animal</Label>
                <Input
                  type="select"
                  name="pettype"
                  id="SelectPetType"
                  onChange={this.handleChange}
                  value={pettype}
                >
                  <option disabled value="">
                    Choose One
                  </option>
                  {data &&
                    Object.keys(data).map((pettype, i) => (
                      <option value={pettype} key={i}>
                        {pettype}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Breed">Breed</Label>
                <Input
                  type="select"
                  name="breed"
                  id="SelectBreed"
                  onChange={this.handleChange}
                  value={breed}
                >
                  <option disabled value="">
                    City
                  </option>
                  {pettype !== "" &&
                    data[pettype].map((breed, i) => (
                      <option value={breed} key={i}>
                        {breed}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}
