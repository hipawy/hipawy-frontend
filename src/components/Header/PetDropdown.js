import React, { Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import AddPet from "../LoginRegister/AddPet";

const Button = styled(DropdownToggle)`
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

  render() {
    const { signOut, user } = this.props;

    if (this.state.isRedirectedtoProfile) {
      return <Redirect to="/profile" />;
    }

    return (
      <Fragment>
        <DropDown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <Button>
            <i className="fa fa-plus-square" />
            <span style={{ marginLeft: "8px" }} />
            <i className="fa fa-caret-down" />
          </Button>
          <DropdownMenu>
            <DropdownItem onClick={this.toggleModal}>Add Pet</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete Pet</DropdownItem>
          </DropdownMenu>
        </DropDown>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <AddPet />
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
