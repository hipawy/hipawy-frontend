import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchPetUser } from "../../store/actions/pets";

const StyledCard = styled(Card)`
  height: 100%;

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModal = styled(Modal)`
  max-width: 1000px;
`;

class PetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggleAndFetch = petId => {
    this.props.fetchPetUser(petId);
    this.toggle();
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { pet, user } = this.props;
    return (
      <div>
        <StyledCard onClick={() => this.toggleAndFetch(pet.id)}>
          <CardImg src={pet.photo} alt="pet image" />
          <CardBody>
            <CardTitle>{pet.name}</CardTitle>
            <CardSubtitle>
              {pet.breed} spasi {pet.age}
            </CardSubtitle>
            <CardText>
              {pet.city}, spasi {pet.province}
            </CardText>
          </CardBody>
        </StyledCard>
        <StyledModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{pet.name}</ModalHeader>
          <ModalBody>
            <img src={pet.photo} alt="pet" /> <br />
            {pet.breed} <br />
            {pet.age} <br />
            {pet.desc}
            {user ? (
              <div>
                <h1>{user.fullname}</h1>
              </div>
            ) : (
              <p>loading</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Contact
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Share
            </Button>
          </ModalFooter>
        </StyledModal>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.pets.user
});

export default connect(
  mapStateToProps,
  { fetchPetUser }
)(PetCard);
