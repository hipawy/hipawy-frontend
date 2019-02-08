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
import { withRouter } from "react-router-dom";

const StyledDropdownMenu = styled(DropdownMenu)`
  transform: translateX(-50%);
`;

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

  handleSignOut = e => {
    this.props.signOut();
    this.props.history.push("/");
  };

  render() {
    const { user } = this.props;

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
        <StyledDropdownMenu>
          <DropdownItem tag={Link} to={`/UserProfile/${user.id}`}>
            Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.handleSignOut}>Sign Out</DropdownItem>
        </StyledDropdownMenu>
      </DropDown>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { signOut }
  )(UserDropDown)
);
