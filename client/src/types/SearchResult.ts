export interface ISearchResult {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type SearchResultProps = {
  searchResult: ISearchResult;
};
