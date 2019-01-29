import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

import Login from "./Login";
import Register from "./Register";

const LoginRegister = props => {
  return (
    <CardGroup>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://www.cutepet.co.za/wp-content/uploads/2018/03/Cute-Pet-Header-Login.png"
          alt="Login Image"
        />
        <CardBody>
          <CardTitle>Login</CardTitle>
          <Login />
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc5rtCrc4q5-sF-NBXX4PA23_Q0UAfi_Y46Pw1DVTx-pOzDIx"
          alt="Card image cap"
        />
        <CardBody>
          <Register />
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default LoginRegister;
