import React from "react";
import { connect } from "react-redux";
import { createPet } from "../../store/actions/pets";
import { Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Checkbox } from "@material-ui/core";

import provinces from "../Adress/data";

import petCategories from "../HomeSearch/Pettype";

class AddPet extends React.Component {
  state = {
    petCategories: null,
    category: "",
    provinces: null,
    province: "",
    city: "",
    name: "",
    address: "",
    breed: "",
    gender: "",
    photo: "",
    age: "",
    desc: "",
    termsCheck: false
  };

  componentDidMount() {
    this.setState({ petCategories, provinces });
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

    this.props.createPet({ ...this.state, userId: this.props.user.id });
  };

  render() {
    let SubmitButton;

    const {
      petCategories,
      category,
      name,
      address,
      provinces,
      province,
      city,
      age,
      desc,
      gender,
      breed,
      photo
    } = this.state;

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
              <Label for="Name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Pet Name"
                value={name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Category">Category</Label>
              <Input
                type="select"
                name="category"
                id="SelectCategory"
                placeholder="Pet Category"
                value={category}
                onChange={this.handleChange}
              >
                <option disabled value="">
                  Category
                </option>
                {petCategories &&
                  Object.keys(petCategories).map((category, i) => (
                    <option value={category} key={i}>
                      {category}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Breed">Breed</Label>
              <Input
                type="select"
                name="breed"
                id="SelectBreed"
                placeholder="Pet Breed"
                value={breed}
                onChange={this.handleChange}
              >
                <option disabled value="">
                  Breed
                </option>
                {category &&
                  petCategories[category].map((breed, i) => (
                    <option value={breed} key={i}>
                      {breed}
                    </option>
                  ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Gender">Gender</Label>
              <Input
                type="select"
                name="gender"
                id="SElectGender"
                placeholder="Pet Gender"
                value={gender}
                onChange={this.handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Age">Age</Label>
              <Input
                type="number"
                name="age"
                id="SelectAge"
                placeholder="Pet Age"
                value={age}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Addrees">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Pet Address"
                value={address}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
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
                {provinces &&
                  Object.keys(provinces).map((province, i) => (
                    <option value={province} key={i}>
                      {province}
                    </option>
                  ))}
              </Input>
            </FormGroup>
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
                  provinces[province].map((city, i) => (
                    <option value={city} key={i}>
                      {city}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Desc">Description</Label>
          <Input
            type="text"
            name="desc"
            id="desc"
            placeholder="Pet Description"
            value={desc}
            onChange={this.handleChange}
          />
        </FormGroup>
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
  user: store.auth.user
});

export default connect(
  mapStateToProps,
  { createPet }
)(AddPet);
