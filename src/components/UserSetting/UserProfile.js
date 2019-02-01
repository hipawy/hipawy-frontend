import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/actions/users";
// import { signOut } from "../store/actions/auth";
import { Redirect } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, isAuthenticated, signOut } = this.props;

    // if (!isAuthenticated) {
    //   return <Redirect to="/signin" />;
    // }

    return (
      <Fragment>
        <Form>
          {users &&
            users.map((user, i) => (
              <FormGroup key={i} row>
                <Label for="fullName" sm={2}>
                  Full Name
                </Label>
                <Col sm={10}>
                  <Input
                    value={user.fullname}
                    type="text"
                    name="fullName"
                    id="name"
                  />
                </Col>
              </FormGroup>
            ))}
        </Form>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  //   isAuthenticated: store.auth.isAuthenticated,
  users: store.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
