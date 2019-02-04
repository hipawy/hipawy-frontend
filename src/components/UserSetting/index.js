import React from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import UserProfile from "./UserProfile";

const Title = styled.h1`
  font-weight: 1200;
  font-size: 7vh;
`;

const ContainerHasStyled = styled(Container)`
  padding: 40px 0;
`;

const UserSetting = props => {
  return (
    <ContainerHasStyled>
      <Row>
        <Title>Your Profile</Title>
      </Row>
      <Row>
        <Col xs="12" md="4">
          <UserProfile />
        </Col>
        <Col xs="12" md="8">
        </Col>
      </Row>
    </ContainerHasStyled>
  );
};

export default UserSetting;
