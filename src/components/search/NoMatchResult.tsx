import noResult from "../../assets/noResult.png";
import styled from "@emotion/styled";

export const NoMatchResult = () => {
  return (
    <NoMatchResultWrapper>
      <div>
        <img alt="no result" src={noResult} />
      </div>
      <NoMatchTextWrapper>
        <h3>Your search did not match any repositories</h3>
      </NoMatchTextWrapper>
    </NoMatchResultWrapper>
  );
};

const NoMatchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoMatchTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
