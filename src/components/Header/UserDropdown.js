import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

const Button = styled(DropdownToggle)`
  margin: 0;
  padding: 3vh 12vh;
  height: 100%;
  font-size: 4vh;
`;

const DropDown = styled(Dropdown)`
  margin: 0;
  padding: 0;
  transition: 1s;
  height: 100%;
`;

const DropDownItem = styled(DropdownItem)`
  width: 18.4vw;
`;

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isRedirectedtoProfile: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

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
      <DropDown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <Button>{user && user.fullname.split(" ")[0]}</Button>
        <DropdownMenu>
          <DropDownItem onClick={this.toProfile}>Profile</DropDownItem>
          <DropDownItem divider />
          <DropDownItem onClick={signOut}>Sign Out</DropDownItem>
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
