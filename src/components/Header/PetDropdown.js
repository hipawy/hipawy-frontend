import React, { Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal
} from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import AddPet from "../LoginRegister/AddPet";
import { Col, Button, Row, Card, CardBody } from "reactstrap";

const ButtonDropdown = styled(DropdownToggle)`
  padding: 8px;
  border-radius: 0;
  box-shadow: none;
  background-color: #943096 !important;
  margin: 0;
  height: 100%;
`;

const DropDown = styled(Dropdown)`
  margin: 0;
  padding: 0;
  transition: 1s;
  height: 100%;
`;

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      modalOpen: false,
      isRedirectedtoProfile: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  toProfile = e => {
    this.setState({
      isRedirectedtoProfile: true
    });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {

    if (this.state.isRedirectedtoProfile) {
      return <Redirect to="/profile" />;
    }

    return (
      <Fragment>
        <DropDown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <ButtonDropdown>
            <i className="fa fa-plus-square" />
            <span style={{ marginLeft: "8px" }} />
            <i className="fa fa-caret-down" />
          </ButtonDropdown>
          <DropdownMenu>
            <DropdownItem onClick={this.toggleModal}>Add Pet</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete Pet</DropdownItem>
          </DropdownMenu>
        </DropDown>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <Row noGutters={true}>
            <Col sm="12">
              <Button block style={{ borderRadius: 0 }} className="active">
                Add Pet
              </Button>
            </Col>
          </Row>

          <Card>
            <CardBody>
              <AddPet closeModal={this.closeModal} />
            </CardBody>
          </Card>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default connect(
  mapStateToProps,
  { signOut }
)(UserDropDown);
