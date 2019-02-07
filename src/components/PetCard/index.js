import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { deletePet, fetchUserPets } from "../../store/actions/pets";
import { Redirect } from "react-router-dom";
import UpdatePet from "./UpdatePet";

class PetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      edit: false
    };
  }

  handleClickDelete = () => {
    if (this.props.user) {
      this.props.deletePet({
        userId: this.props.user.id,
        petId: this.props.pet.id
      });
      this.props.fetchUserPets(this.props.user.id);

      this.setState({ isComplete: true });
    }
  };

  toEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };

  render() {
    const { pet, isAuthenticated } = this.props;
    console.log(pet);

    if (this.state.isComplete) {
      return <Redirect to="/UserProfile" />;
    }

    if (pet) {
      const { createdAt, updatedAt, ...profile } = pet;
      const petId = pet.id;

      if (!isAuthenticated) {
        return <Redirect to="/" />;
      }

      if (!this.state.edit) {
        return (
          <Fragment>
            <div>
              <img src={pet.photo} className="w-100" alt="pet" />
              <h3>{pet.name}</h3>
              <h6>{pet.category}</h6>
              <h6>{pet.breed}</h6>
              <h6>{pet.age}</h6>
              <h6>{pet.desc}</h6>
            </div>
            <div>
              <Button onClick={this.toEdit}>Edit</Button>
              <Button onClick={this.handleClick}>Delete</Button>
            </div>
          </Fragment>
        );
      } else {
        return (
          <UpdatePet
            pet={pet}
            finishEdit={() => this.setState({ edit: false })}
          />
        );
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  isAuthenticated: store.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { deletePet, fetchUserPets }
)(PetCard);
