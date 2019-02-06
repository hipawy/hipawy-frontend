import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UserUpdate from "./UserUpdate";
import { Card, CardBody, Button, CardText } from "reactstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
  }

  toUpdate = () => {
    this.setState(prevState => ({
      update: !prevState.update
    }));
  };

  render() {
    const { user, isAuthenticated } = this.props;
    console.log(this.state.update);

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

      if (this.state.update === false) {
        return (
          <Fragment>
            <Card>
              <img src={user.photo} className="w-100" alt="user image" />
              {Object.keys(profile)
                .filter(field => field !== "photo")
                .map((field, i) => (
                  <CardBody key={i}>
                    <CardText>
                      {profile[field]}
                      {true}
                    </CardText>
                  </CardBody>
                ))}
              <Button onClick={this.toUpdate}>Edit</Button>
            </Card>
          </Fragment>
        );
      } else {
        return <UserUpdate />;
      }
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
