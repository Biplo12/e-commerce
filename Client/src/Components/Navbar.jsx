import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Left = styled.div``;

const Logo = styled.div``;

const Right = styled.div``;

const List = styled.ul``;

const MenuItem = styled.li``;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <h3>e-commerce</h3>
        </Logo>
        <Search>
          <input type="text" placeholder="Search" />
        </Search>
      </Left>
      <Right>
        <List>
          <Link to="/Home">
            <MenuItem>
              <p>Home</p>
            </MenuItem>
          </Link>
          <Link to="/new-collecion">
            <MenuItem>
              <p>New Collection</p>
            </MenuItem>
          </Link>
          <Link to="/men">
            <MenuItem>
              <p>For men</p>
            </MenuItem>
          </Link>
          <Link to="/woman">
            <MenuItem>
              <p>For woman</p>
            </MenuItem>
          </Link>
          <Link to="/accessories">
            <MenuItem>
              <p>Accessories</p>
            </MenuItem>
          </Link>
          <Link to="/sign-up">
            <MenuItem>
              <p>SIGN UP</p>
            </MenuItem>
          </Link>
          <Link to="/sign-in">
            <MenuItem>
              <p>Sign IN</p>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <ShoppingCartOutlined />
            </MenuItem>
          </Link>
        </List>
      </Right>
    </Container>
  );
};

export default Navbar;
