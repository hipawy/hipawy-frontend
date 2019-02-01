import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/auth";

const Button = styled(DropdownToggle)`
  margin: 0;
  padding: 3vh 12vh;
`;

const DropDown = styled(Dropdown)`
  margin: 0;
  padding: 0;
`;

class UserDropDown extends React.Component {
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
    const { signOut, user } = this.props;

    return (
      <DropDown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <Button>{user.fullname.split(" ")[0]}</Button>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/profile">
            Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
        </DropdownMenu>
      </DropDown>
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
