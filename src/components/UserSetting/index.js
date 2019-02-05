import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import { fetchUserPets } from "../../store/actions/pets";
import PetCard from "../PetCard";

const Title = styled.h1`
  font-weight: 1200;
  font-size: 7vh;
`;

const ContainerHasStyled = styled(Container)`
  padding: 40px 0;
`;

class UserSetting extends Component {
  state = {};

  componentDidMount() {
    if (this.props.user) {
      this.props.fetchUserPets(this.props.user.id);
    }
  }

  render() {
    return (
      <ContainerHasStyled>
        <Row />
        <Row>
          <Col xs="12" md="2">
            <UserProfile />
          </Col>
          <Col xs="12" md="5">
            {this.props.userPets.map(({ pet }, i) => (
              <PetCard pet={pet} key={i} />
            ))}
          </Col>
        </Row>
      </ContainerHasStyled>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  userPets: store.pets.userPets
});

export default connect(
  mapStateToProps,
  { fetchUserPets }
)(UserSetting);
