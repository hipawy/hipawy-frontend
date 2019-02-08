import React, { Fragment } from "react";
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
  align-self: stretch;

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModal = styled(Modal)`
  max-width: 1000px;
`;

const StyledCardImg = styled(CardImg)`
  height: 200px;
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
      <Fragment>
        <StyledCard onClick={() => this.toggleAndFetch(pet.id)}>
          <StyledCardImg src={pet.photo} alt="pet image" />
          <CardBody>
            <CardTitle>{pet.name}</CardTitle>
            <CardSubtitle>
              {pet.breed} <br /> {pet.age}
            </CardSubtitle>
            <CardText>
              {pet.city}, <br /> {pet.province}
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
                <img src={user.photo} alt="user" /> <br />
                <h1>{user.fullname}</h1>
                <h6>{user.address}</h6>
                <h6>{user.province}</h6>
                <h6>{user.city}</h6>
                <h6>{user.phone}</h6>
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
      </Fragment>
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
