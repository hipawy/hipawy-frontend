import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class UserList extends Component {
  render() {
    const { user, isAuthenticated } = this.props;

    if (user) {
      const { password, id, createdAt, updatedAt, ...profile } = user;

      if (!isAuthenticated) {
        return <Redirect to="/signin" />;
      }

      return (
        <Fragment>
          <Form>
            {Object.keys(profile).map((field, i) => (
              <FormGroup key={i} row>
                <Label sm={2}>{field === "fullname" ? "Name" : field}</Label>
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
          </Form>
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

export default connect(mapStateToProps)(UserList);
