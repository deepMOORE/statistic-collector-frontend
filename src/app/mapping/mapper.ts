import { ApiResponse } from "../data/api.response";

export const unwrapApiResponse = <TPayload, TResult>(
  response: ApiResponse<TPayload>,
  mapper: (payload: TPayload) => TResult,
  ) => {
  if (!response.success) {
    throw Error(response.message ?? '');
  }

  return mapper(response.data);
};
