import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

export const Search = (props: { query: any }) => {
  const { data, loadNext, hasNext, refetch } = usePaginationFragment(
    graphql`
      fragment SearchContainer_searchs on Query
      @refetchable(queryName: "SearchsContainerSearchsQuery") {
        search(query: $query, type: REPOSITORY, first: $first, after: $after)
          @connection(key: "SearchTable_search") {
          repositoryCount
          edges {
            node {
              ... on Repository {
                name
                description
                updatedAt
              }
            }
          }
        }
      }
    `,
    props.query
  );

  return (
    <>
      <section
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <input />
        <button>검색</button>
      </section>
    </>
  );
};
