import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";

const Button = styled(DropdownToggle)`
  margin: 0;
  padding: auto;
`;

const DropDown = styled(Dropdown)`
  margin: 0;
  padding: 0;
`;

export default class UserDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <DropDown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <Button caret>Username</Button>
        <DropdownMenu>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Sign Out</DropdownItem>
        </DropdownMenu>
      </DropDown>
    );
  }
}
