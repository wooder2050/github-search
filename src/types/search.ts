export interface ISearchEdge {
  node: {
    name: string;
    description: string;
    updatedAt: Date;
    stargazerCount: number;
    id: string;
    viewerHasStarred: boolean;
  };
}
