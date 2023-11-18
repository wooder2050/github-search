import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";
import { Menu } from "..";
import { ISearchEdge } from "../../types/search";
import { NoMatchResult } from "./NoMatchResult";
import { ResultBox } from "./ResultBox";
import { LoadMoreBtn } from "./LoadMoreBtn";

export const Search = ({
  query,
  searchQuery,
}: {
  query: any;
  searchQuery: string;
}) => {
  const {
    data: {
      search: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
    refetch,
  } = usePaginationFragment(
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
                stargazerCount
                id
                viewerHasStarred
              }
            }
          }
        }
      }
    `,
    query
  );

  return (
    <>
      {edges.length > 0 ? (
        <section>
          <Menu>
            {(edges as ISearchEdge[]).map((result) => (
              <ResultBox
                key={result.node.id}
                node={result.node}
                refetch={refetch}
                searchQuery={searchQuery}
              />
            ))}
            {hasNext && (
              <LoadMoreBtn loadNext={loadNext} isLoadingNext={isLoadingNext} />
            )}
          </Menu>
        </section>
      ) : (
        <NoMatchResult />
      )}
    </>
  );
};
