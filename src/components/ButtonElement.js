import styled from "styled-components";
import { Link } from "react-scroll";
import * as palette from "../styles/Variables";
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? palette.GREEN : palette.DARK)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? palette.DARK : palette.LIGHT)};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? palette.LIGHT : palette.GREEN)};
    color: ${palette.DARK};
  }
`;
