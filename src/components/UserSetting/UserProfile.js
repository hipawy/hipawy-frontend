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
        return <Redirect to="/signin" />;
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
            <CardImg
              top
              height="80%"
              src="https://avatars1.githubusercontent.com/u/26826052?s=460&v=4"
              alt="Card image cap"
            />
            {Object.keys(profile).map((field, i) => (
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
