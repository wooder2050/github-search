import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";
import { Menu } from "..";
import { ISearchEdge } from "../../types/search";
import { NoMatchResult } from "./NoMatchResult";
import { ResultBox } from "./ResultBox";
import { LoadMoreBtn } from "./LoadMoreBtn";
import { Loader } from "./Loader";

export const Search = ({ query }: { query: any }) => {
  const {
    data: {
      search: { edges },
    },
    loadNext,
    hasNext,
    isLoadingNext,
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
              <ResultBox key={result.node.id} node={result.node} />
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
