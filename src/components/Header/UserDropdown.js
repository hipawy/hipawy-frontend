import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

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
        <Button>
          <i className="fa fa-user-circle" />{" "}
          <span style={{ marginLeft: "0px" }} />
          {user && user.fullname.split(" ")[0]}
        </Button>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/UserProfile">
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
