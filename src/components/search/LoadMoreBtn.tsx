import { LoadMoreFn } from "react-relay";
import { OperationType } from "relay-runtime";

import styled from "@emotion/styled";
import { Loader } from "./Loader";

export const LoadMoreBtn = ({
  loadNext,
  isLoadingNext,
}: {
  loadNext: LoadMoreFn<OperationType>;
  isLoadingNext: boolean;
}) => {
  return (
    <LoadMoreContentWrapper>
      {isLoadingNext && <Loader />}
      <LoadMoreBtnWrapper>
        <LoadMoreBtnStyled onClick={() => loadNext(20)}>
          더보기
        </LoadMoreBtnStyled>
      </LoadMoreBtnWrapper>
    </LoadMoreContentWrapper>
  );
};

const LoadMoreContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadMoreBtnWrapper = styled.div`
  width: 120px;
  margin: 20px 60px;
`;

const LoadMoreBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  font-size: 12px;
  background: #dedede;
  color: black;
  cursor: pointer;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border: 1px solid #dde1e8;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.03),
    0 2px 2px -2px rgba(67, 90, 111, 0.2);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
