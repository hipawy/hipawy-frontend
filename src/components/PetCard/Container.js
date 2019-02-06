import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchPets } from "../../store/actions/pets";
import { Redirect } from "react-router-dom";
import Card from "./Card";

class PetCardHome extends Component {
  state = {
    isComplete: false
  };

  componentDidMount() {
    this.props.fetchPets(this.props);
  }

  handleClick = () => {
    this.setState({ isComplete: true });
  };

  render() {
    const { pets } = this.props;

    return (
      <Fragment>
        {pets && pets.map((pet, i) => <Card key={i} pet={pet} />)}
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  pets: store.pets.pets
});

export default connect(
  mapStateToProps,
  { fetchPets }
)(PetCardHome);
