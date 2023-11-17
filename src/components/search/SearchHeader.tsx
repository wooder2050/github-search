import { useState } from "react";
import styled from "@emotion/styled";
import { Input, Button } from "..";

export const SearchHeader = ({
  handleSearchQuery,
}: {
  handleSearchQuery: (keyword: string) => void;
}) => {
  const [keywords, setKeywords] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearchQuery(keywords);
  };

  return (
    <HeaderWrapper>
      <Wrapper>
        <Input
          placeholder="github repository search"
          onChange={(e) => setKeywords(e.target.value)}
          autoFocus
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </Wrapper>
      <Wrapper>
        <Button onClick={() => handleSearchQuery(keywords)}>검색</Button>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 10px 5px;
`;
