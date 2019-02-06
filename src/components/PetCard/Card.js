import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  height: 100%;

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const PetCard = ({ pet }) => {
  return (
    <StyledCard>
      <CardImg src={pet.photo} alt="pet image" />
      <CardBody>
        <CardTitle>{pet.name}</CardTitle>
        <CardSubtitle>
          {pet.breed} spasi {pet.age}
        </CardSubtitle>
        <CardText>{pet.desc}</CardText>
      </CardBody>
    </StyledCard>
  );
};

export default PetCard;
