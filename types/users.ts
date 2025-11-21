export interface UserListRequestBody {
  page: number;
  limit: number;
  sortBy: 'name' | 'cats';
}
