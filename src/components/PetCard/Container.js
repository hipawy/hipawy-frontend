import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchPets } from "../../store/actions/pets";
import { Redirect } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

const StyledRow = styled(Row)`
  height: 20%;
`;

const StyledCol = styled(Col)`
  margin-bottom: 5vh;
`;

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
      <Container>
        <StyledRow xs="12">
          {pets &&
            pets.map((pet, i) => (
              <StyledCol md="4">
                <Card key={i} pet={pet} />
              </StyledCol>
            ))}
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
