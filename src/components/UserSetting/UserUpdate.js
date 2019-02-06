import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { updateUserProfile } from "../../store/actions/users";
import { connect } from "react-redux";
import provinces from "../../components/Adress/data";

class UserUpdate extends Component {
  state = {
    data: null,
    province: "",
    city: "",
    fullname: "",
    address: "",
    phone: 0,
    email: ""
  };

  componentDidMount() {
    this.setState({ data: provinces });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.updateUserProfile(this.state);
  };

  render() {
    const { user } = this.props;
    const {
      data,
      fullname,
      address,
      province,
      city,
      phone,
      email
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="fullName" sm={2}>
            Full Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="fullname"
              id="name"
              value={fullname}
              onChange={this.handleChange}
              //placeholder={user.fullname}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="updateEmail"
              value={email}
              onChange={this.handleChange}
              //placeholder={user.email}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="address"
              id="updateAddress"
              value={address}
              onChange={this.handleChange}
              //placeholder={user.address}
            />
          </Col>
        </FormGroup>
        <FormGroup>
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
        </FormGroup>
        <FormGroup row>
          <Label for="phoneNumber" sm={2}>
            Phone Number
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              onChange={this.handleChange}
              // placeholder={user.phone}
            />
          </Col>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default connect(
  mapStateToProps,
  { updateUserProfile }
)(UserUpdate);
