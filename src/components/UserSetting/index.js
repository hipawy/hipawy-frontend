import React from "react";
import styled from "styled-components";
import { Card, CardTitle, CardGroup, CardBody, Button } from "reactstrap";
import UserUpdate from "./UserUpdate";

const Title = styled(CardTitle)`
  font-weight: 1200;
  font-size: 7vh;
`;

const Cards = styled(CardGroup)`
  display: flex;
  // flex-direction: column;
  text-align: center;
  height: 50%;
`;

const UserSetting = props => {
  return (
    <Cards>
      <Card>
        <CardBody>
          <Title>Update Profile</Title>
          <UserUpdate />
        </CardBody>
      </Card>
    </Cards>
  );
};

export default UserSetting;
