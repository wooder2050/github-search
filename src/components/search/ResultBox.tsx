import { Star, Unstar } from "../../assets/icons";
import styled from "@emotion/styled";
import { useMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { OperationType } from "relay-runtime";
import {
  Options,
  RefetchFnDynamic,
} from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { Loader } from "./Loader";
import React, { useMemo } from "react";

export const ResultBox = ({
  node: {
    id: starrableId,
    name,
    description,
    stargazerCount,
    viewerHasStarred,
  },
  refetch,
  searchQuery,
}: {
  node: {
    id: string;
    name: string;
    description: string;
    stargazerCount: number;
    viewerHasStarred: boolean;
  };
  refetch: RefetchFnDynamic<OperationType, any, Options>;
  searchQuery: string;
}) => {
  const [unstarMutation, isUnstaring] = useMutation(graphql`
    mutation ResultBox_addStarMutation($input: AddStarInput!) {
      addStar(input: $input) {
        starrable {
          stargazerCount
          id
          viewerHasStarred
        }
      }
    }
  `);

  const [starMutation, isAddstaring] = useMutation(graphql`
    mutation ResultBox_RemoveStarMutation($input: RemoveStarInput!) {
      removeStar(input: $input) {
        starrable {
          stargazerCount
          id
          viewerHasStarred
        }
      }
    }
  `);

  const handleStarMutation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const variables = {
      input: {
        starrableId,
      },
    };
    const refetchVariables = {
      query: searchQuery ?? "",
      first: 20,
      after: null,
    };
    !viewerHasStarred
      ? unstarMutation({
          variables,
          onCompleted(_) {
            refetch(refetchVariables);
          },
        })
      : starMutation({
          variables,
          onCompleted(_) {
            refetch(refetchVariables);
          },
        });
  };

  const isLoading = useMemo(
    () => isUnstaring || isAddstaring,
    [isUnstaring, isAddstaring]
  );

  return (
    <ResultBoxWrapper>
      <ResultBoxNameBox>{name}</ResultBoxNameBox>
      <ResultBoxDescBox>{description}</ResultBoxDescBox>
      <StarBoxWrapper onClick={(e) => handleStarMutation(e)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StarBox>{viewerHasStarred ? <Star /> : <Unstar />}</StarBox>
            <StarText>{stargazerCount.toLocaleString()}</StarText>
          </>
        )}
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
