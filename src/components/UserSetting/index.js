import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import PetCard from "../PetCard";
import { fetchUserPets } from "../../store/actions/pets";

const ContainerHasStyled = styled(Container)`
  padding: 40px 0;
`;

class UserSetting extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchUserPets(this.props.user.id);
    }
  }

  render() {
    const userId = this.props.match.params.id;
    return (
      <ContainerHasStyled>
        <Row />
        <Row>
          <Col xs="12" md="3">
            <UserProfile userId={userId} />
          </Col>
          <Col xs="12" md="9">
            <Row>
              {this.props.userPets.map(({ pet }, i) => (
                <Col xs="12" md="4" key={i}>
                  <PetCard pet={pet} />
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
  user: store.auth.user,
  userPets: store.pets.userPets
});

export default connect(
  mapStateToProps,
  { fetchUserPets }
)(UserSetting);
