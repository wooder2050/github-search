import { Star, Unstar } from "../../assets/icons";
import styled from "@emotion/styled";

export const ResultBox = ({
  node: { name, description, stargazerCount, viewerHasStarred },
}: {
  node: {
    name: string;
    description: string;
    stargazerCount: number;
    viewerHasStarred: boolean;
  };
}) => {
  return (
    <ResultBoxWrapper>
      <ResultBoxNameBox>{name}</ResultBoxNameBox>
      <ResultBoxDescBox>{description}</ResultBoxDescBox>
      <StarBoxWrapper>
        <StarBox>{viewerHasStarred ? <Star /> : <Unstar />}</StarBox>
        <StarText>{stargazerCount.toLocaleString()}</StarText>
      </StarBoxWrapper>
    </ResultBoxWrapper>
  );
};

const ResultBoxWrapper = styled.div`
  margin: 5px 40px;
  padding: 10px 20px;
`;

const ResultBoxNameBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ResultBoxDescBox = styled.div`
  font-size: 14px;
  line-height: 1.5;
  padding: 0 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const StarBoxWrapper = styled.button`
display: flex;
max-width: 100px;,
border: 1px solid #dde1e8;
border-radius: 5px;
padding: 10px;
box-sizing: border-box;
margin: 10px 0;
cursor: pointer;
background: #efefef;
font-size: 12px;
`;

const StarBox = styled.span`
  display: flex;
  justify-content: center;
  margin-right: 5px;
`;

const StarText = styled.span`
  display: flex;
  justify-content: center;
`;