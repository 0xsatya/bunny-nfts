import styled from "styled-components";
import fonts from "../../src/styles/typography";

export const IconLink = styled.a`
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  color: black;
  transition: text-shadow 0.3s ease-in-out;
  margin-left: 20px;
  @media (max-width: 1300px) {
    margin-left: 12px;
  }
  &:hover{
      text-shadow: 0 25px 25px rgba(0,0,0,0.3);
  }
`;