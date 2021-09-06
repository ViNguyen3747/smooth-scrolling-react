import * as palette from "../../styles/Variables";

export const HomeObjOne = {
  id: "about",
  bg: palette.DARK,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: require("../../images/avatar.svg").default,
  alt: "introduction",
  dark: false,
  primary: true,
  darkText: false,
  to: "discover",
};

export const HomeObjTwo = {
  id: "discover",
  bg: palette.LIGHT,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discover",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: require("../../images/discover.svg").default,
  alt: "discover",
  dark: true,
  primary: false,
  darkText: true,
  to: "posts",
};

export const HomeObjThree = {
  id: "signup",
  bg: palette.LIGHT,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join Me",
  headline: "Ornare arcu odio ut sem",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim. Feugiat sed lectus vestibulum mattis. Pellentesque sit amet porttitor eget dolor morbi. Egestas purus viverra accumsan in nisl nisi scelerisque.",
  buttonLabel: "Sign In",
  imgStart: false,
  img: require("../../images/signin.svg").default,
  alt: "signin",
  dark: true,
  primary: false,
  darkText: true,
  to: "home",
};
