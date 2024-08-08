import styled from "styled-components";
import fonts from "../../../styles/typography";

export const Nav = styled.div`
  padding: 20px 95px 10px 165px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #5df2bc;
  @media (max-height: 900px) and (min-width: 1001px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  @media (max-width: 1300px) {
    padding: 35px 48px 35px 48px;
  }
  @media (max-width: 1000px) {
    padding: 15px 48px 15px 48px;
  }
  @media (max-width: 550px) {
    padding: 26px;
  }
`;

export const NavLink = styled.div`
  cursor: pointer;
  a {
    white-space: nowrap;
    text-decoration: none;
    color: black;
    justify-content: center;
    font-weight: 600;
    font-size: ${fonts.font24.w1920.fontSize};
    font-family:'space grotesk';
    margin:0 30px;
    white-space: nowrap;
    transition: text-shadow 0.3s ease-in-out;
    @media (max-width: 1600px) {
      font-size: ${fonts.font24.w1660.fontSize};
    }
    @media (max-width: 1440px) {
      font-size: ${fonts.font24.w1440.fontSize};
    }
    @media (max-width: 1300px) {
      padding: 35px 48px 35px 48px;
      margin: 0 16px;
    }
    &:hover{
        text-shadow: 0 25px 25px rgba(0,0,0,0.3);
    }
  }
`;


export const Group = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {

    }
    svg{
        margin: 0 10px;
    }
`;

export const Logo = styled.div`
  display: block;
  z-index: 1001;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding-left: 20px;
  }
  @media (max-height: 900px) and (min-width: 1001px) {
    width: 180px;
  }
  @media (max-width: 550px) {
    img {
      width: 240px;
    }
  }
`;

export const Hamburguer = styled.div<{ isOpen: boolean; animationTimeout: number }>`
  display: none;
  z-index: 102;
  position: relative;
  top: -15px;

  span {
    display: block;
    margin: 0;
    padding: 0;
    height: 8px;
    transition: transform ${({ animationTimeout }) => animationTimeout}ms ease-out;
    svg {
      height: 4px;
    }
  }

  span:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(12px,0px)' : 'rotate(0)  translate(0, 0)'};
  }

  span:nth-child(2) {
    visibility: ${({ isOpen }) => isOpen ? 'hidden' : 'show'};
  }

  span:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(-1px,-11px)' : 'rotate(0)  translate(0, 0)'};
  }

  @media (max-width: 1000px) {
      display: block;
  }
`;

export const NavMobile = styled.div<{ left: string }>`
  background-color: #ffd74c;
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  left: ${props => props.left};
  top: 0;
  transition: all .6s ease-in-out;
  z-index: 101;
`;

export const BubblesImage = styled.div`
  position: absolute;
  z-index: 0;
  bottom: -8px;
  width: 100%;
  img {
    width: 100vw;
    height: auto;
  }
`;

export const LinkWrap = styled.a`
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const MobileInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarrotWrap = styled.div`
  margin-right: 10px;
`;

export const MobileLinkText = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
`;

export const SocLinks = styled.div`
  position:fixed;
  margin: 100px 180px 0 0;
  right:0;
`