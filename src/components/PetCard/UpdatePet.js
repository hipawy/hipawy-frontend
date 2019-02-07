import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { updatePetProfile, fetchUserPets } from "../../store/actions/pets";
import { connect } from "react-redux";
import provinces from "../../components/Adress/data";
import petCategories from "../HomeSearch/Pettype";
import ReactFilestack from "filestack-react";

class UpdatePet extends Component {
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
    id: 0
  };

  componentDidMount() {
    console.log(this.props.pet);
    const petId = parseInt(this.props.pet.id);

    this.setState({ provinces, petCategories, id: petId, ...this.props.pet });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updatePetProfile({ ...this.state, userId: this.props.user.id });
    this.props.finishEdit();
  };

  titleCase = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  render() {
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
                  petCategories[this.titleCase(category)].map((breed, i) => (
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
                <option disabled value="">
                  Gender
                </option>
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
            type="textarea"
            name="desc"
            id="desc"
            placeholder="Pet Description"
            value={desc}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          {photo && (
            <img
              src={photo}
              alt="pet"
              style={{ width: "50%", height: "100px" }}
            />
          )}
          <ReactFilestack
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            buttonText="select image"
            buttonClass="classname"
            options={{
              accept: "image/*",
              maxFiles: 5,
              storeTo: {
                location: "s3"
              }
            }}
            onSuccess={this.handleSuccess}
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  pets: store.pets.pets
});

export default connect(
  mapStateToProps,
  { updatePetProfile, fetchUserPets }
)(UpdatePet);
