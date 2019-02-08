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
  Row,
  Col,
  Button
} from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchPetUser } from "../../store/actions/pets";

const StyledCard = styled(Card)`
  height: 100%;
  align-self: stretch;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModal = styled(Modal)`
  max-width: 1000px;
`;

const StyledModalHeader = styled(ModalHeader)`
  background-color: #933594;
`;

const CardImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    height: auto;
    min-height: 100%;
  }
`;

const StyledImagePet = styled.img`
  max-height: 100%;
`;

const StyledImageUser = styled.img`
  max-height: 100%;
`;

const ImageBoxPet = styled.div`
  height: 40vh;
  overflow: hidden;
  border-radius: 10%;
  margin: 10px 0 20px; 0;
`;

const ImageBoxUser = styled.div`
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 10px;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid #933594;
  height: 100%;
  border-radius: 10%;
`;

const StyledDivPet = styled.div`
  align-text: left;
`;
const StyledDivUserText = styled.div`
  margin-left: 10px;
  align-text: left;
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
          <CardImage>
            <img src={pet.photo} alt="pet image" />
          </CardImage>
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
          <StyledModalHeader toggle={this.toggle} />
          <ModalBody>
            <Row>
              <StyledCol md="7">
                <ImageBoxPet>
                  <StyledImagePet src={pet.photo} alt="pet" />
                </ImageBoxPet>
                <StyledDivPet>
                  <h1>
                    <strong>{pet.name}</strong>
                  </h1>
                  <h4>
                    <strong>Breed</strong>: {pet.breed}
                  </h4>
                  <h4>
                    <strong>Age</strong>: {pet.age}
                  </h4>
                  <h4>
                    <strong>Description</strong>: {pet.desc}
                  </h4>
                </StyledDivPet>
              </StyledCol>
              <Col md="5">
                {user ? (
                  <StyledDivUser>
                    <h3>
                      <strong>Owner</strong>
                    </h3>
                    <ImageBoxUser>
                      <StyledImageUser src={user.photo} alt="user" />
                    </ImageBoxUser>
                    <StyledDivUserText>
                      <h3>{user.fullname}</h3>
                      <h5>
                        <strong>Address</strong>: {user.address}
                      </h5>
                      <h5>
                        <strong>Province</strong>: {user.province}
                      </h5>
                      <h5>
                        <strong>City</strong>: {user.city}
                      </h5>
                      <h5>
                        <strong>Phone</strong>: {user.phone}
                      </h5>
                    </StyledDivUserText>
                  </StyledDivUser>
                ) : (
                  <p>loading</p>
                )}
              </Col>
            </Row>
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
