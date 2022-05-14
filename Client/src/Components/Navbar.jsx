import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../Assets/cart.svg";
import searchIcon from "../Assets/search.svg";
import menuIcon from "../Assets/menu.svg";
import { mobile } from "../responsive";
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  height: 70px;
  ${mobile({ height: "50px" })}
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  @media screen and (max-width: 1240px) {
    width: 90%;
  }
`;

const NavbarLogo = styled.div``;

const StyledLink = styled(Link)`
  ${mobile({ fontSize: "12px" })}
  text-decoration: none;
  text-align: center;
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
  @media screen and (max-width: 1240px) {
    width: 10%;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

const NavbarMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

<style>menuIconHamburger{{ display: "none" }}</style>;

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
              <img src={cartIcon} alt="" width={"20px"} />
            </NavbarMenuItem>
          </StyledLink>
          <img
            src={menuIcon}
            alt="hamburgerMenu"
            width={"20px"}
            className="menuIconHamburger"
          />
        </NavbarList>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
