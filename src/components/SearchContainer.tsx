import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Search } from "./Search";

const SearchContainer = () => {
  const query = useLazyLoadQuery(
    graphql`
      query SearchContainerQuery(
        $query: String!
        $first: Int!
        $after: String
      ) {
        ...SearchContainer_searchs
      }
    `,
    {
      query: "language:JavaScript stars:>10000",
      first: 10,
      after: null,
    }
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Search query={query} />
    </Suspense>
  );
};

export default React.memo(SearchContainer);
