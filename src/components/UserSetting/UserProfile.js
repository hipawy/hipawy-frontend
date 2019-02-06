import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, CardBody, Button, CardImg, CardText } from "reactstrap";

class UserProfile extends Component {
  render() {
    const { user, isAuthenticated } = this.props;

    if (user) {
      const {
        password,
        id,
        province,
        city,
        email,
        createdAt,
        updatedAt,
        ...profile
      } = user;

      if (!isAuthenticated) {
        return <Redirect to="/" />;
      }

      return (
        <Fragment>
          {/* <Form>
            {Object.keys(profile).map((field, i) => (
              <FormGroup key={i} row>
                <Label sm={2}>
                  {field === "fullname" ? "Name" : field}
                </Label>
                <Col sm={10}>
                  <Input
                    value={profile[field]}
                    type="text"
                    name="fullName"
                    id="name"
                    readOnly={true}
                  />
                </Col>
              </FormGroup>
            ))}
        </Form> */}

          <Card>
            <img src={user.photo} className="w-100" alt="user image" />
            {Object.keys(profile)
              .filter(field => field !== "photo")
              .map((field, i) => (
                <CardBody key={i}>
                  {/* <CardText sm={2}>
                  {field === "fullname" ? "Name" : field}
                </CardText> */}

                  <CardText>
                    {profile[field]}
                    {true}
                  </CardText>
                </CardBody>
              ))}
            <Button>Edit Profile</Button>
          </Card>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  user: store.auth.user
});

export default connect(mapStateToProps)(UserProfile);
