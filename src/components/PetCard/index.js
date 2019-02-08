import React, { Component, Fragment } from "react";
import {
  Button,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { connect } from "react-redux";
import {
  deletePet,
  fetchUserPets,
  updatePetProfileStatus
} from "../../store/actions/pets";
import { Redirect } from "react-router-dom";
import UpdatePet from "./UpdatePet";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  max-height: 30vh
  margin-bottom: 30px;
`;

const CardImage = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #933594;
`;

const StyledImage = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 100%;
  width: auto;
`;

const ImageBox = styled.div`
  width: 15vh;
  height: 15vh;
  overflow: hidden;
  border-radius: 50px;
`;

const PetName = styled.h4`
  margin-top: 20px;
  color: white;
`;

const CardText = styled(Col)`
  position: relative;
  padding: 10px;
`;

const MenuButton = styled(DropdownToggle)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: transparent !important;
  color: black !important;
  box-shadow: none !important;
`;

const StyledRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  max-height: 30vh;
`;

class PetCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      edit: false,
      dropdownOpen: false,
      status: "",
      id: 0
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleClickDelete = () => {
    if (this.props.user) {
      this.props.deletePet({
        userId: this.props.user.id,
        petId: this.props.pet.id
      });
      this.props.fetchUserPets(this.props.user.id);
    }
  };

  SetStatus = async e => {
    e.preventDefault();
    await this.setState({ status: "adopted" });
    console.log(this.state.status);
  };

  handleAdopt = async e => {
    e.preventDefault();
    await this.setState({ status: "adopted" });
    await this.props.updatePetProfileStatus({
      status: this.state.status,
      id: this.state.id,
      userId: this.props.user.id
    });
  };

  toEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };

  componentDidMount() {
    const petId = parseInt(this.props.pet.id);
    console.log(petId);

    this.setState({ id: petId, ...this.props.pet });
  }

  render() {
    const { pet, isAuthenticated } = this.props;

    if (pet) {
      const { createdAt, updatedAt, ...profile } = pet;

      if (!isAuthenticated) {
        return <Redirect to="/" />;
      }

      if (!this.state.edit) {
        return (
          <Card>
            <StyledRow noGutters>
              <CardImage md="5">
                <ImageBox>
                  <StyledImage src={pet.photo} alt="pet" />
                </ImageBox>
                <PetName>{pet.name}</PetName>
              </CardImage>

              <CardText md="6">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <MenuButton>
                    <i className="fa fa-ellipsis-v" />
                  </MenuButton>
                  <DropdownMenu>
                    <DropdownItem>
                      <Button onClick={this.toEdit}>Edit</Button>
                    </DropdownItem>
                    <DropdownItem>
                      <Button onClick={this.handleClickDelete}>Delete</Button>
                    </DropdownItem>
                    <DropdownItem>
                      <Button onClick={this.handleAdopt}>Adopted</Button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <div>
                  <h6>{pet.category}</h6>
                  <h6>{pet.breed}</h6>
                  <h6>{pet.age}</h6>
                  <h6>{pet.desc}</h6>
                </div>
              </CardText>
            </StyledRow>
          </Card>
        );
      } else {
        return (
          <UpdatePet
            pet={pet}
            finishEdit={() => this.setState({ edit: false })}
          />
        );
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = store => ({
  user: store.auth.user,
  pets: store.pets.pets,
  isAuthenticated: store.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { deletePet, fetchUserPets, updatePetProfileStatus }
)(PetCard);
