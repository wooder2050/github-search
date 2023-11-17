import home from "../../assets/home.png";
import styled from "@emotion/styled";
export const Home = () => {
  return (
    <HomeWrapper>
      <img alt="home" src={home} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
