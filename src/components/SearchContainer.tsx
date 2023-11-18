import React, { Suspense, useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useClientQuery, useLazyLoadQuery } from "react-relay/hooks";
import { Search } from "./search/Search";
import { SearchHeader } from "./search/SearchHeader";
import { Loader } from "./search/Loader";
import { Home } from "./search/Home";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

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
      query: searchQuery ?? "",
      first: 20,
      after: null,
    }
  );

  const handleSearchQuery = (keyword: string) => {
    setSearchQuery(keyword);
  };

  return (
    <>
      <SearchHeader handleSearchQuery={handleSearchQuery} />
      {searchQuery ? (
        <Suspense fallback={<Loader />}>
          <Search query={query} searchQuery={searchQuery} />
        </Suspense>
      ) : (
        <Home />
      )}
    </>
  );
};

export default React.memo(SearchContainer);
