import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Loader = () => {
  return <LoaderElement />;
};

const load = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const LoaderElement = styled.div`
  font-size: 10px;
  margin: 0 auto;
  text-indent: -9999em;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(to right, #000 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load} 2s infinite linear;
  transform: translateZ(0);
  &:before {
    width: 20%;
    height: 20%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &:after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
