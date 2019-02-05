import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import PetCard from "../PetCard";

const ContainerHasStyled = styled(Container)`
  padding: 40px 0;
`;

class UserSetting extends Component {
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
  userPets: store.pets.userPets
});

export default connect(mapStateToProps)(UserSetting);
