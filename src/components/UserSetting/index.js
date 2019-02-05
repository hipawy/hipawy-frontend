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
          <Col xs="12" md="3">
            <UserProfile />
          </Col>
          <Col xs="12" md="9">
            <Row>
              {this.props.userPets.map(({ pet }, i) => (
                <Col xs="12" md="4">
                  <PetCard pet={pet} key={i} />
                </Col>
              ))}
            </Row>
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
