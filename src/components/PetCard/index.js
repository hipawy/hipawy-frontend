import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { deletePet, fetchUserPets } from "../../store/actions/pets";
import { Redirect } from "react-router-dom";

class PetCard extends Component {
  state = {
    isComplete: false
  };

  handleClick = () => {
    if (this.props.user) {
      this.props.deletePet({
        userId: this.props.user.id,
        petId: this.props.pet.id
      });
      this.props.fetchUserPets(this.props.user.id);

      this.setState({ isComplete: true });
    }
  };

  render() {
    const { pet } = this.props;

    if (this.state.isComplete) {
      return <Redirect to="/UserProfile" />;
    }

    return (
      <Fragment>
        <div>
          <img src={pet.photo} alt="pet image" />
          <h3>{pet.name}</h3>
          <h6>{pet.category}</h6>
          <h6>{pet.breed}</h6>
          <h6>{pet.age}</h6>
          <h6>{pet.desc}</h6>
        </div>
        <div>
          <Button>Edit</Button>
          <Button onClick={this.handleClick}>Delete</Button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default connect(
  mapStateToProps,
  { deletePet, fetchUserPets }
)(PetCard);
