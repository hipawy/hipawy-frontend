import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchPets } from "../../store/actions/pets";
import Card from "./Card";
import styled from "styled-components";

const StyledRow = styled(Row)`
  height: 20%;
`;

const StyledCol = styled(Col)`
  margin-bottom: 5vh;
`;

class PetCardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.props.fetchPets();
  }

  handleClick = () => {
    this.setState({ isComplete: true });
  };

  render() {
    const { pets } = this.props;

    return (
      <Container>
        <StyledRow xs="12">
          {pets && pets.length > 0 ? (
            pets
              .filter(pet => pet.status === "registered")
              .map((pet, i) => (
                <StyledCol key={i} md="4">
                  <Card pet={pet} onClick={this.toggle}>
                    {this.props.buttonLabel}
                  </Card>
                </StyledCol>
              ))
          ) : (
            <h1>Pet Not Found :( </h1>
          )}
        </StyledRow>
      </Container>
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
