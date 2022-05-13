import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../Assets/cart.svg";
import searchIcon from "../Assets/search.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  height: 70px;
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const NavbarLogo = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavbarSearchContainer = styled.div`
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 50px;
  outline: none;
  display: flex;
`;

const NavbarSearch = styled.input`
  border: none;
  outline: none;
`;

const NavbarRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 70%;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <NavbarLogo>
          <h3>e-commerce</h3>
        </NavbarLogo>
        <NavbarSearchContainer>
          <NavbarSearch type="text" placeholder="Search" />
          <img src={searchIcon} alt="search" width={"15px"} />
        </NavbarSearchContainer>
      </NavbarLeft>
      <NavbarRight>
        <NavbarList>
          <StyledLink to="/Home">
            <NavbarMenuItem>
              <p>Home</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/new-collecion">
            <NavbarMenuItem>
              <p>New collection</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/men">
            <NavbarMenuItem>
              <p>For men</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/woman">
            <NavbarMenuItem>
              <p>For woman</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/accessories">
            <NavbarMenuItem>
              <p>Accessories</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/sign-up">
            <NavbarMenuItem>
              <p>SIGN UP</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/sign-in">
            <NavbarMenuItem>
              <p>SIGN IN</p>
            </NavbarMenuItem>
          </StyledLink>
          <StyledLink to="/cart">
            <NavbarMenuItem>
              <img src={cart} alt="" width={"20px"} />
            </NavbarMenuItem>
          </StyledLink>
        </NavbarList>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
