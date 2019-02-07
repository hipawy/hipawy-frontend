import React, { Component, Fragment } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import petsearch from "./Pettype";
import { fetchPets } from "../../store/actions/pets";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    data: null,
    category: "",
    breed: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, ...state } = this.state;
    this.props.fetchPets(this.state.category, this.state.breed);
  };

  componentDidMount() {
    this.setState({ data: petsearch });
  }

  render() {
    const { data, category, breed } = this.state;
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Category">Animal</Label>
                <Input
                  type="select"
                  name="category"
                  id="SelectCategoryPet"
                  onChange={this.handleChange}
                  value={category}
                >
                  <option disabled value="">
                    Choose One
                  </option>
                  {data &&
                    Object.keys(data).map((category, i) => (
                      <option value={category} key={i}>
                        {category}
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
                  {category !== "" &&
                    data[category].map((breed, i) => (
                      <option value={breed} key={i}>
                        {breed}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Search</Button>
        </Form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { fetchPets }
)(Search);
