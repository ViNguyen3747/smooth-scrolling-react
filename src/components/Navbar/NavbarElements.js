import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import * as palette from "../../styles/Variables.js";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? palette.DARK : "transparent")};
  height: 80px;
  transition: 0.8s all ease-in-out;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: ${palette.LIGHT};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5 rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    display: block;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: ${palette.LIGHT};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 700;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    color: ${palette.LIGHT_GREEN};
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: ${palette.GREEN};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${palette.DARK};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${palette.LIGHT};
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${palette.LIGHT};
    color: ${palette.DARK};
  }
`;
