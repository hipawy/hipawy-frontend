import React, { Component, Fragment } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import petsearch from "./Pettype";
import provinces from "../Adress/data";
import { fetchPets } from "../../store/actions/pets";
import { connect } from "react-redux";

const StyledRow = styled(Row)`
  margin: 5vh 5vw;
`;
const StyledCol = styled(Col)`
  margin: 3vh 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Search extends Component {
  state = {
    data: null,
    category: "",
    breed: "",
    provinces: null,
    province: "",
    city: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data, provinces, ...state } = this.state;
    this.props.fetchPets(
      this.state.category,
      this.state.breed,
      this.state.province,
      this.state.city
    );
  };

  componentDidMount() {
    this.setState({ data: petsearch, provinces });
  }

  clearSearch = e => {
    this.props.fetchPets();
    this.setState({ category: "", breed: "", province: "", city: "" });
  };

  render() {
    const { data, category, breed, provinces, province, city } = this.state;
    return (
      <Fragment>
        <StyledDiv>
          <Form onSubmit={this.handleSubmit}>
            <StyledRow form>
              <Col md={2}>
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
              <Col md={2}>
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
                      Choose one
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
              <Col md={2}>
                <FormGroup>
                  <Label for="Province">Province</Label>
                  <Input
                    type="select"
                    name="province"
                    id="SelectProvincePet"
                    onChange={this.handleChange}
                    value={province}
                  >
                    <option disabled value="">
                      Choose One
                    </option>
                    {provinces &&
                      Object.keys(provinces).map((province, i) => (
                        <option value={province} key={i}>
                          {province}
                        </option>
                      ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={2}>
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
                      Choose one
                    </option>
                    {province !== "" &&
                      provinces[province].map((city, i) => (
                        <option value={city} key={i}>
                          {city}
                        </option>
                      ))}
                  </Input>
                </FormGroup>
              </Col>
              <StyledCol md={1.5}>
                <Button type="submit">Search</Button>
              </StyledCol>
              <StyledCol md={1.5}>
                <Button onClick={this.clearSearch}>Clear</Button>
              </StyledCol>
            </StyledRow>
          </Form>
        </StyledDiv>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { fetchPets }
)(Search);
