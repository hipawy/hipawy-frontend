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

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModal = styled(Modal)`
  max-width: 1000px;
`;

const CardImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

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
  margin-top: 10px;
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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          <ModalHeader toggle={this.toggle}>{pet.name}</ModalHeader>
          <ModalBody>
            <Row>
              <StyledCol md="7">
                <ImageBoxPet>
                  <StyledImagePet src={pet.photo} alt="pet" />
                </ImageBoxPet>
                <div>
                  <h4>Breed: &nbsp; &nbsp; &nbsp; {pet.breed}</h4>
                  <h4>Age: &nbsp; {pet.age}</h4>
                  <h4>Description: &nbsp; {pet.desc}</h4>
                </div>
              </StyledCol>
              <Col md="5">
                {user ? (
                  <StyledDiv>
                    <ImageBoxUser>
                      <StyledImageUser src={user.photo} alt="user" />
                    </ImageBoxUser>
                    <h1>{user.fullname}</h1>
                    <h5>{user.address}</h5>
                    <h5>{user.province}</h5>
                    <h5>{user.city}</h5>
                    <h5>{user.phone}</h5>
                  </StyledDiv>
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
